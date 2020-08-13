<template>
  <div id="app">
    <Navbar/>
    <Introview class="mt-16" :introdata="introdata"/>
    <AboutMe class="mt-32" :detailaboutme="detailaboutme"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import AboutMe from './components/Aboutme.vue'
import Introview from './components/Introview.vue'

export default {
  name: 'App',
  data () {
    return {
      introdata: {
        myname: 'Abhishek Kathayat.',
        mywork: 'I build things for the web.',
        myworkdescription: 'I\'m a software developer based in India, specializing in building (and occasionally designing) web and mobile based applications and currently learning to develop blockchain based solutions.',
      },
      detailaboutme: {
        aboutme_a: 'Hello! I\'m Abhishek, a software developer based in Dehradun, Uttarakhand, India.',
        aboutme_b: 'I enjoy designing and building website and mobile applications. My goal is to build products that provide the best experience. Recently I\'ve also started learning blockchain based application development.',
        aboutme_technologies: [
          'HTML & CSS',
          'Vue',
          'React',
          'Java',
          'Android',
          'Node.js',
          'Javascript'
        ]
      }
    }
  },
  components: {
    Navbar,
    AboutMe,
    Introview
  }
}
</script>

<style>
* {
  background-color: #0a192f;
}
@font-face {
  font-family: "Calibre";
  src: url(./fonts/Calibre/Calibre-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "San Francisco";
  src: url(./fonts/SFMono/SFMonoRegular.otf) format("truetype");
}
</style>
