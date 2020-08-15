<template>
  <div id="app">
    <Navbar/>
    <Introview class="mt-16" :introdata="introdata"/>
    <AboutMe class="mt-64" :detailaboutme="detailaboutme"/>
    <Experience class="mt-64" :detailexperience="detailexperience"/>
    <Projects class="mt-64" :detailprojects="detailprojects"/>
    <GetInTouch class="mt-64" :detailgetintouch="detailgetintouch"/>
    <Footer class="mt-64" :detailfooter="detailfooter"/>
  </div>
</template>

<script>
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
          'Javascript',
          'Python',
          'Django'
        ]
      },
      detailexperience: {
        0: {
          company: 'IIRS, ISRO',
          company_ff: 'Indian Institute of Remote Sensing, Indian Space Research Organization',
          company_url: 'https://www.iirs.gov.in',
          job_position: 'Summer Intern',
          duration: 'June - July 2019',
          job_description: [
            'Designed and Developed a Mobile Based Survey Application capable of providing surveyors the geographical characteristics data for their current location, using Android.',
            'Designed and Developed the backend for the application, which was capable of extracting data from the Shapefiles, using JSON and Django.',
            'Worked with Shapefiles and GIS Software (GRASS GIS).'
          ]
        },
        1: {
          company: 'Prabudha Buildcon LLP',
          job_position: 'Frontend Developer Intern',
          duration: 'September 2018 - February 2019',
          job_description: [
            'Designed and Developed a Frontend Application for a door to door delivery service for senior citizens, using Vue.js, Apache Cordova.',
          ]
        }
      },
      detailprojects: {
        0: {
          project_name: 'IIRS Survey App',
          project_description: 'Summer Internship Project at the Indian Institute of Remote Sensing. A Mobile based Application capable of providing surveyors the geograhical characteristics data for their current location.',
          project_github_link: 'https://www.github.com/Abhishek-Kathayat/IIRSSurveyApp',
          project_technologies: [
            'Android',
            'Mapbox'
          ]
        },
        1: {
          project_name: 'IIRS Survey API',
          project_description: 'Summer Internship Project at the Indian Institute of Remote Sensing. API for the Mobile based Application (IIRS Survey App), capable of extracting geographical characteristics data from ArcGIS Shapefiles.',
          project_github_link: 'https://www.github.com/Abhishek-Kathayat/IIRS_Survey_API',
          project_technologies: [
            'Django',
            'ArcGIS',
            'GeoJSON'
          ]
        },
        3: {
          project_name: 'Patient Centric Smart HealthCare Application',
          project_description: 'A Web Application for my B.Tech project "Patient Centric Smart HealthCare System using Machine Learning Approach".',
          project_github_link: 'https://www.github.com/Abhishek-Kathayat/pcshs_webapp',
          project_technologies: [
            'Vue',
            'Chart.js'
          ]
        },
        4: {
          project_name: 'Patient Centric Smart HealthCare API',
          project_description: 'API for the Web Application for my B.Tech project "Patient Centric Smart HealthCare System using Machine Learning Approach".',
          project_github_link: 'https://www.github.com/Abhishek-Kathayat/pcshs_backend',
          project_technologies: [
            'Django',
            'Tensorflow'
          ]
        },
        5: {
          project_name: 'Opinions App',
          project_description: 'A Mobile based Application where a person can give his or her opinion on any matter of interest. Developed during recruitment hackathon organised by TEK Systems.',
          project_github_link: 'https://www.github.com/Abhishek-Kathayat/Opinion-App',
          project_technologies: [
            'Android',
            'Django'
          ]
        },
        6: {
          project_name: 'AapkiSevaMein',
          project_description: 'An app for helping old age people with their daily needs and requirements. Developed during my internship at Prabudha Buildcon LLP.',
          project_github_link: 'https://www.github.com/Abhishek-Kathayat/AapkiSevaMein',
          project_technologies: [
            'Android',
            'Java'
          ]
        }
      },
      detailgetintouch: {
        description: 'Whether you have a question or just want to say hi, just drop a message. I\'ll try my best to get back to you!'
      },
      detailfooter: {
        github_link: 'https://www.github.com/Abhishek-Kathayat',
        linkedin_link: 'https://www.linkedin.com/in/abhishek-kathayat-197672130/',
        medium_link: 'https://medium.com/@abhishekkathayat25',
      }
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
