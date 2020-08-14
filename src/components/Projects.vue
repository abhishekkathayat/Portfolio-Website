<template>
    <div class="projects-main flex justify-center">
        <div class="projects-main-heading-container w-10/12 md:w-9/12">
            <div class="projects-main-heading-sub-container w-full md:w-8/12 flex">
                <h1 class="projects-main-heading-text-container">
                    <span class="projects-main-heading-container-text-index text-sm-sectionindex md:text-md-sectionindex"> 03. </span>
                    <span class="projects-main-heading-container-text-heading text-sm-sectionheadings md:text-md-sectionheadings font-semibold"> Some Things I've Built </span>
                </h1>
            </div>
            <div class="projects-main-content-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-10">
                <li
                    class="projects-main-content-project-card mx-2 my-2"
                    v-for="(project, index) in detailprojects"
                    :key="index">
                    <div class="project-card rounded shadow-lg px-6 py-8 h-full">
                        <div class="project-card-header flex justify-between bg-transparent">
                            <img src="../assets/folder.svg" class="h-12 w-12 bg-transparent"/>
                            <a :href="project.project_github_link" class="flex">
                                <font-awesome-icon color="#a8b2d1" class="fa-lg bg-transparent self-center" :icon="['fab', 'github']"/>
                            </a>
                        </div>
                        <div class="project-card-description mt-8 bg-transparent">
                            <span class="project-card-description-name bg-transparent leading-tight">
                                {{ project.project_name }}
                            </span>
                            <p class="project-card-description-details mt-2 bg-transparent">
                                {{ project.project_description }}
                            </p>
                            <div class="project-card-description-technologies-container mt-3 mb-5 bg-transparent">
                                <span
                                    class="project-card-description-technologies bg-transparent mr-2"
                                    v-for="(tech, ind) in project.project_technologies"
                                    :key="ind"
                                >
                                    {{ tech }}
                                </span>
                            </div>
                        </div>
                    </div>
                </li>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Projects',
    props: {
        detailprojects: Object
    }
}
</script>

<style scoped>
.projects-main-heading-container-text-index {
    font-family: "San Francisco";
    color: #64ffda;
}
.projects-main-heading-container-text-heading {
    font-family: "Calibre";
    color: #ccd6f6;
    white-space: nowrap;
}
.projects-main-heading-text-container {
    white-space: nowrap;
}
.projects-main-heading-sub-container::after {
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
.projects-main-content-project-card {
    list-style-type: none;
}
.project-card {
    background-color: #172a45;
}
.project-card:hover {
    transform: translateY(-5px);
    transition: 0.25s linear;
}
.project-card-description-name {
    font-family: "Calibre";
    font-size: 22px;
    font-weight: 600;
    color: #ccd6f6;
}
.project-card-description-details {
    font-family: "Calibre";
    font-size: 17px;
    color: #a8b2d1;
    font-weight: 500;
}
.project-card-description-technologies {
    font-family: 'San Francisco';
    font-size: 12px;
    color: #8892b0;
}
</style>