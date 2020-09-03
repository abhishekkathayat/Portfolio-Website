<template>
    <div class="experience-main flex justify-center">
        <div class="experience-main-container w-10/12 md:w-9/12">
            <div class="experience-main-heading-container w-full md:w-8/12 flex">
                <div class="experience-main-heading-sub-container w-full flex">
                    <h1 class="experience-main-heading-text-container">
                        <span class="experience-main-heading-container-text-index text-sm-sectionindex md:text-md-sectionindex"> 02. </span>
                        <span class="experience-main-heading-container-text-heading text-sm-sectionheadings md:text-md-sectionheadings font-semibold"> Where I've Worked </span>
                    </h1>
                </div> 
            </div>
            <div class="experience-main-content-container md:flex">
                <div class="experience-main-content-button-container mt-10 overflow-x-scroll md:overflow-x-hidden">
                    <button
                        class="experience-main-content-button md:flex border-b-2 md:border-l-2 md:border-b-0 px-8 py-3 md:w-full"
                        v-for="(item, index) in detailexperience"
                        :key="index"
                        :id="`tab-${index}`"
                        v-on:click="selectExperience(item.company)"
                        @click="activeTab = index"
                        :class="{selectedTab: index === activeTab}"
                    >
                        {{ item.company }} 
                    </button>
                </div>
                <div class="experience-main-content-description-container md:w-7/12 mt-12 md:ml-10">
                    <div class="experience-main-content-description-head leading-snug">
                        <span class="experience-job-position"> {{ this.experience.job_position }} </span>
                        <span class="experience-company-name"> @
                            <a class="experience-company-name-url" :href="this.experience.company_url"> {{ this.experience.company }} </a> 
                        </span>
                    </div>
                    <span v-if="this.experience.company_ff" class="experience-company-fullform leading-none">
                        {{ this.experience.company_ff }}
                    </span>
                    <span v-if="this.experience.duration" class="experience-company-duration block mt-2">
                        {{ this.experience.duration }}
                    </span>
                    <ul class="mt-3">
                        <li 
                            class="experience-company-job-description mb-3 leading-tight flex"
                            v-for="job_item in this.experience.job_description"
                            v-bind:key="job_item.id">
                            <font-awesome-icon class="fa-xs mt-1" color="#64ffda" :icon="['fas', 'caret-right']"/>
                            <p class="job-description-item ml-3"> {{ job_item }} </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Experience',
    props: {
        detailexperience: Array
    },
    data () {
        return {
            experience: this.detailexperience[0],
            activeTab: 0
        }
    },
    mounted () {
        var preselecttab = document.getElementById('tab-0');
        preselecttab.classList.add('selectedTab')
    },
    methods: {
        selectExperience: function(company) {
            var removeselecttab = document.getElementById('tab-0');
            removeselecttab.classList.remove('selectedTab');
            for(var key in this.detailexperience) {
                if(this.detailexperience[key].company == company) {
                    this.experience = this.detailexperience[key]
                }
            }
        }
    }
}
</script>

<style scoped>
.experience-main-heading-container-text-index {
    font-family: "San Francisco";
    color: #64ffda;
}
.experience-main-heading-container-text-heading {
    font-family: "Calibre";
    color: #ccd6f6;
    white-space: nowrap;
}
.experience-main-heading-text-container {
    white-space: nowrap;
}
.experience-main-heading-sub-container::after {
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
.experience-main-content-button-container {
    white-space: nowrap;
}
.experience-main-content-button {
    border-color: #303c55;
    border-radius: 0%;
    outline: none;
    font-family: 'San Francisco';
    font-size: 13px;
    color: #8892B0;
    white-space: nowrap;
}
.selectedTab {
    border-color: #64ffda;
    color: #64ffda;
}
.experience-main-content-button:hover {
    background: #172a45;
    color: #64ffda;
    cursor: pointer;
}
.experience-job-position {
    font-family: 'Calibre';
    font-size: 22px;
    font-weight: 500;
    color: #ccd6f6;
}
.experience-company-name {
    font-family: 'Calibre';
    font-size: 22px;
    font-weight: 500;
    color: #64ffda;
}
.experience-company-name-url {
    display: inline-block;
}
.experience-company-name-url::after {
    content: "";
    background-color: #64ffda;
    height: 1px;
    width: 0px;
    position: relative;
    bottom: 0.40em;
    display: block;
}
.experience-company-name-url:hover::after {
    width: 100%;
    opacity: 0.5;
    transition: all 0.25s;
}
.experience-company-fullform, .experience-company-duration {
    font-family: 'San Francisco';
    font-size: 13px;
    color: #8892B0;
}
.job-description-item {
    font-size: 18px;
    font-family: 'Calibre';
    color: #8892B0;
}
</style>