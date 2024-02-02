let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.parttwo',
        start: 'top 20%',
    }
})

tl.from('#phone3', {
    y: 500,
    duration: '1.5',
    scale: '0.8'
}, 'a')
tl.from('#phone2', {
    y: 500,
    duration: '1.5',
    scale: '0.8'
}, 'a')
tl.from('#phone4', {
    y: 500,
    duration: '1.5',
    scale: '0.8'
}, 'a')
tl.from('#phone1', {
    y: 500,
    duration: '1.5',
    scale: '0.8'
}, 'a')
tl.from('#phone5', {
    y: 500,
    duration: '1.5',
    scale: '0.8'
}, 'a')


let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.part-6',
        pin: true,
        start: 'top top',
        scrub: '1',
    }
})

tl2.to('.one', {
    bottom: '80vh',
})
tl2.to('.one', {
    opacity: '0',
})
tl2.to('#img-1', {
    marginLeft: '-95%',
},)
tl2.to('.two', {
    opacity: '1',
}, 'a')
tl2.to('.two', {
    bottom: '60vh',
}, 'a')
tl2.to('.two', {
    opacity: '0',
})
tl2.to('#img-1', {
    marginLeft: '-191%',
},)
tl2.to('.three', {
    opacity: '1',
}, 'b')
tl2.to('.three', {
    bottom: '50vh',
}, 'b')
tl2.to('.three', {
    opacity: '0',
})
tl2.to('#img-1', {
    marginLeft: '-300%',
},)
tl2.to('.four', {
    opacity: '1',
}, 'c')
tl2.to('.four', {
    bottom: '30vh',
}, 'c')



// lenis

const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)


// swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });