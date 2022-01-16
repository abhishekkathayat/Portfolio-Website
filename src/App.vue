<template>
  <div id="app">
    <Navbar id="navbar" v-on:section="accessSection" :navbarlinks="navbarlinks"/>
    <div class="introview mt-16">
      <Introview id="Intro" class="load-slide-in" :introdata="introdata"/>
    </div>
    <div class="aboutme mt-32">
      <AboutMe id="About" class="pt-32" :detailaboutme="detailaboutme"/>
    </div>
    <div class="experience mt-32">
      <Experience id="Experience" class="pt-32" :detailexperience="detailexperience"/>
    </div>
    <div class="work mt-32">
      <Projects id="Work" class="pt-32" :detailprojects="detailprojects"/>
    </div>
    <div class="contact mt-32">
      <GetInTouch id="Contact" class="pt-32" :detailgetintouch="detailgetintouch"/>
    </div>
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
    },

    isElementInViewport: function (element) {
      var bounds = element.getBoundingClientRect();
      if(bounds.top <= document.documentElement.clientHeight) {
          return true;
      }
      else {
        return false;
      }
    },
    activateAnimation: function () {
      var views = ["About", "Experience", "Work", "Contact"];
      views.forEach(view => {
        var element = document.getElementById(view);
        if(this.isElementInViewport(element)) {
          element.classList.add("load-slide-in");
        }
      });
    }
  },
  created() {
    document.addEventListener('scroll', this.activateAnimation);
  },
  destroyed() {
    document.removeEventListener('scroll', this.activateAnimation);
  }
}
</script>

<style>
* {
  background-color: #0a192f;
  scroll-behavior: smooth;
}
.load-slide-in {
  animation: 1s slide-in ease-in;
}
@keyframes slide-in {
  from {
    opacity: 0;
    margin-top: 10%;
  }
  to {
    opacity: 1;
    margin-top: 0%;
  }
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
