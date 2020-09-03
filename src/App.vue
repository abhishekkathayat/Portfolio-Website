<template>
  <div id="app">
    <Navbar id="navbar" v-on:section="accessSection" :navbarlinks="navbarlinks"/>
    <Introview class="mt-16" :introdata="introdata"/>
    <AboutMe id="About" class="mt-32 pt-32" :detailaboutme="detailaboutme"/>
    <Experience id="Experience" class="mt-32 pt-32" :detailexperience="detailexperience"/>
    <Projects id="Work" class="mt-32 pt-32" :detailprojects="detailprojects"/>
    <GetInTouch id="Contact" class="mt-32 pt-32" :detailgetintouch="detailgetintouch"/>
    <Footer class="mt-64" :detailfooter="detailfooter"/>
  </div>
</template>

<script>
import data from './data.json'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import AboutMe from './components/Aboutme.vue'
import Projects from './components/Projects.vue'
import Introview from './components/Introview.vue'
import Experience from './components/Experience.vue'
import GetInTouch from './components/GetInTouch.vue'

export default {
  name: 'App',
  data () {
    return {
      navbarlinks: data.navbarlinks,
      introdata: data.introdata,
      detailaboutme: data.detailaboutme,
      detailexperience: data.detailexperience,
      detailprojects: data.detailprojects,
      detailgetintouch: data.detailgetintouch,
      detailfooter: data.detailfooter
    }
  },
  components: {
    Navbar,
    Footer,
    AboutMe,
    Projects,
    Introview,
    Experience,
    GetInTouch
  },
  methods: {
    accessSection: function (sectionName) {
      document.getElementById(sectionName).scrollIntoView();
    }
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
