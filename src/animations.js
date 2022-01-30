import anime from 'animejs/lib/anime.es.js'
import { $ } from './util'

const LOADER_SIZE = '100px'
const SCALE_FOR_FULLSCREEN = 17.5
const SCALE_FOR_LOADING = 1.8
const SHORT_DURATION = 750
const SHORT_DELAY = 250
const EXAMPLE_CARD_OPACITY = 0.5
const BASE_BG_COLOR = '#ff3b3f'
const HOVER_BG_COLOR = '#1a0001'

class Animator {
  loaderEl = $('loader')
  mainContainerEl = $('main')
  bodyEl = $('body')
  wordCardEl = $('word-card')
  exampleCardEl = $('example-card')
  loadingAnimation = null
  isContentPreloaded = false
  animationTimeline = anime.timeline()

  initiateLoaderOnScreen(isContentPreloaded = false) {
    this.isContentPreloaded = isContentPreloaded
    this.animationTimeline.add({
      targets: this.loaderEl,
      width: LOADER_SIZE,
      height: LOADER_SIZE,
      scale: isContentPreloaded ? SCALE_FOR_FULLSCREEN : 1,
    })
  }

  startLoading() {
    if (this.isContentPreloaded) {
      return
    }

    this.loadingAnimation = anime({
      targets: this.loaderEl,
      scale: [1, SCALE_FOR_LOADING, 1],
      loop: true,
      easing: 'easeInOutQuad',
    })
  }

  stopThenHideLoading() {
    if (this.loaderEl.style['display'] === 'none') {
      return
    }

    if (this.loadingAnimation !== null) {
      this.loadingAnimation.pause()
      this.loadingAnimation = null
    }

    this.animationTimeline.add({
      targets: this.loaderEl,
      duration: this.isContentPreloaded ? 0 : SHORT_DURATION,
      scale: SCALE_FOR_FULLSCREEN,
      complete: () => {
        this.hideLoader()
      },
    })
  }

  hideLoader() {
    this.loaderEl.style['display'] = 'none'
    this.bodyEl.style['background'] = BASE_BG_COLOR
  }

  initiateMainComponent() {
    anime({
      targets: this.wordCardEl,
      opacity: [0, 1],
      translateY: ['100px', 0],
      begin: () => {
        this.mainContainerEl.style['display'] = 'grid'
      },
      duration: SHORT_DURATION,
    })

    anime({
      targets: this.exampleCardEl,
      opacity: [0, EXAMPLE_CARD_OPACITY],
      translateY: ['20px', 0],
      duration: SHORT_DURATION,
      delay: SHORT_DELAY,
    })
  }

  addEventListenerOnMainComponent() {
    const hoverHandler = (isEnter) => {
      anime({
        targets: this.bodyEl,
        backgroundColor: isEnter ? HOVER_BG_COLOR : BASE_BG_COLOR,
        easing: 'easeInOutQuint',
        duration: SHORT_DURATION,
      })
      anime({
        targets: this.exampleCardEl,
        opacity: isEnter ? 1 : EXAMPLE_CARD_OPACITY,
      })
      anime({
        targets: $('word-main'),
        color: isEnter ? HOVER_BG_COLOR : BASE_BG_COLOR,
        easing: 'easeInOutQuint',
      })
    }

    this.wordCardEl.addEventListener('mouseenter', () => hoverHandler(true))
    this.wordCardEl.addEventListener('mouseleave', () => hoverHandler(false))
    this.exampleCardEl.addEventListener('mouseenter', () => hoverHandler(true))
    this.exampleCardEl.addEventListener('mouseleave', () => hoverHandler(false))
  }
}

const animator = new Animator()
export { animator }
