<template>
    <div class="getintouch-main flex justify-center">
        <div class="getintouch-main-container w-10/12 md:w-9/12">
            <div class="getintouch-main-top-header">
                <span class="getintouch-main-top-header-container flex justify-center mt-3 mb-5">
                    <span class="getintouch-main-top-header-index text-sm-getintouchindex md:text-md-getintouchindex"> 04. </span>
                    <span class="getintouch-main-top-header-text text-sm-getintouchindex md:text-md-getintouchindex"> What's Next? </span>
                </span>
            </div>
            <div class="getintouch-main-sub-header flex justify-center">
                <span class="getintouch-main-sub-header text-sm-getintouchheader md:text-md-getintouchheader lg:text-lg-getintouchheader"> Get In Touch </span>
            </div>
            <div class="getintouch-main-description-holder flex justify-center mt-4">
                <p class="getintouch-main-description text-center md:w-8/12 text-sm-contentsize md:text-md-contentsize"> {{ this.detailgetintouch.description }} </p>
            </div>
            <div class="getintouch-main-button-container flex justify-center mt-20">
                <button class="getintouch-main-button py-4 px-6" v-on:click="getintouch()">
                    Say Hello
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GetInTouch',
    props: {
        detailgetintouch: Object
    },
    methods: {
        getintouch() {
            window.location = "mailto:abhishekkathayat25@gmail.com"
        }
    }
}
</script>

<style scoped>
.getintouch-main-top-header-index, .getintouch-main-top-header-text {
    font-family: 'San Francisco';
    color: #64ffda;
}
.getintouch-main-sub-header {
    font-family: 'Calibre';
    color: #ccd6f6;
    font-weight: 600;
}
.getintouch-main-description {
    font-family: 'Calibre';
    color: #8892b0;
}
.getintouch-main-button {
    border-color: #64ffda;
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    font-family: 'San Francisco';
    font-size: 14px;
    color: #64ffda;
    outline: none;
}
.getintouch-main-button:hover {
    background: #172a45;
}
</style>