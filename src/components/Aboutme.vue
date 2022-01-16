<template>
    <div class="aboutme-main flex justify-center">
        <div class="aboutme-main-heading w-10/12 md:w-9/12">
            <div class="aboutme-main-heading-container w-full md:w-8/12 flex">
                <div class="aboutme-main-heading-main-container w-full flex">
                    <h1 class="aboutme-main-heading-sub-container">
                        <span class="aboutme-main-heading-index text-sm-sectionindex md:text-md-sectionindex"> 01. </span>
                        <span class="aboutme-main-heading-text text-sm-sectionheadings md:text-md-sectionheadings font-semibold"> About Me </span>
                    </h1>
                </div>
            </div>
            <div class="aboutme-main-content-container md:flex mt-5">
                <div class="aboutme-main-content-text-container md:w-7/12 lg:w-6/12">
                    <p class="aboutme-content-text text-sm-contentsize md:text-md-contentsize">
                        {{ detailaboutme.aboutme_a }}
                    </p>
                    <p class="aboutme-content-text mt-4 text-sm-contentsize md:text-md-contentsize">
                        {{ detailaboutme.aboutme_b }}
                    </p>
                    <div class="aboutme-content-tech mt-8">
                        <span class="aboutme-content-tech-head text-sm-contentsize md:text-md-contentsize">
                            Here are a few technologies that I've worked with:
                        </span>
                        <ul class="grid grid-cols-2 md:grid-cols-3 mt-3">
                            <li 
                            v-for="item in detailaboutme.aboutme_technologies"
                            v-bind:key="item.id"
                            class="my-1"
                            >
                                <font-awesome-icon class="fa-xs" color="#64ffda" :icon="['fas', 'caret-right']"/>
                                <span class="aboutme-content-tech-name ml-1"> {{ item }} </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="aboutme-main-content-image-container mt-12 md:mt-0 md:ml-16 md:w-5/12 lg:w-6/12">
                    <div class="aboutme-image-container flex justify-center">
                        <img class="aboutme-image shadow-lg" src="../assets/abhishek.jpg">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutMe',
    props: {
        detailaboutme: Object
    }
}
</script>

<style scoped>
.aboutme-main-heading-index {
    font-family: 'San Francisco';
    color: #64ffda;
}
.aboutme-main-heading-text {
    font-family: 'Calibre';
    color: #ccd6f6;
    white-space: nowrap;
}
.aboutme-main-heading-sub-container {
    white-space: nowrap;
}
.aboutme-main-heading-main-container::after {
    background-color: #303c55;
    height: 1px;
    width: 100%;
    content: "";
    display: block;
    position: relative;
    margin-left: 20px;
    align-self: center;
    top: -5px;
}
.aboutme-content-text, .aboutme-content-tech-head {
    color: #8892B0;
    font-family: 'Calibre';
}
.aboutme-content-tech-name {
    font-family: 'San Francisco';
    font-size: 13px;
    color: #8892B0;
}
.aboutme-image {
    width: 58%;
    border-radius: 3px;
}
@media only screen and (max-width: 1125px) {
    .aboutme-image {
        width: 75%;
    }
}
@media only screen and (max-width: 767px) {
    .aboutme-image {
        width: 45%;
    }
}
@media only screen and (max-width: 425px) {
    .aboutme-image {
        width: 75%;
    }
}
</style>