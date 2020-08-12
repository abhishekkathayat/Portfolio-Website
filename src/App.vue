<template>
  <div id="app">
    <Navbar/>
    <Introview class="mt-16" :introdata="introdata"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Introview from './components/Introview.vue'

export default {
  name: 'App',
  data () {
    return {
      introdata: {
        myname: 'Abhishek Kathayat.',
        mywork: 'I build things for the web.',
        myworkdescription: 'I\'m a software developer based in India, specializing in building (and occasionally designing) web and mobile based applications and currently learning to develop blockchain based solutions.',
      }
    }
  },
  components: {
    Navbar,
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
