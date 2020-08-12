<template>
  <div class="intro-view-main flex justify-center self-center">
    <div class="intro-view-main-head w-4/5">
      <h1 class="intro-view-main-head-nameis text-base-introname sm:text-md-introname md:text-md-introname lg:text-lg-introname xl:text-lg-introname mb-5 flex">
      Hi, my name is
      </h1>
      <h2 class="intro-view-main-head-name font-semibold leading-extra-tight text-base-introhead sm:text-sm-introhead md:text-md-introhead lg:text-lg-introhead xl:text-xl-introhead flex">
        {{ introdata.myname }}
      </h2>
      <h3 class="intro-view-main-head-work w-9/12 font-semibold leading-extra-tight text-base-introhead sm:text-sm-introhead md:text-md-introhead lg:text-lg-introhead xl:text-xl-introhead flex">
        {{ introdata.mywork }}
      </h3>
      <p class="intro-view-main-head-workdescription mt-8 mb-16 sm:w-11/12 md:w-7/12 lg:w-6/12 xl:w-6/12 text-base-introdescription sm:text-md-introdescription md:text-md-introdescription lg:text-md-introdescription xl:text-md-introdescription flex">
        {{ introdata.myworkdescription }}
      </p>
      <button class="intro-view-main-head-button flex outline-none">
        <span class="intro-view-main-head-button-text py-5 px-8">
          Get In Touch
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introview',
  props: {
    introdata: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.intro-view-main-head-nameis, .intro-view-main-head-button-text {
  font-family: "San Francisco";
  color: #64ffda;
}
.intro-view-main-head-name, .intro-view-main-head-work {
  font-family: "Calibre";
  color: #ccd6f6;
}
.intro-view-main-head-work {
  color: #8892b0;
}
.intro-view-main-head-workdescription {
  font-family: 'Calibre';
  color: #8892b0;
}
.intro-view-main-head-button {
  border-color: #64ffda;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
}
.intro-view-main-head-button-text {
  font-size: 14px;
}
</style>
