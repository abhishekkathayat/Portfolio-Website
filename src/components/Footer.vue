<template>
    <div class="footer-main flex justify-center mb-5">
        <div class="footer-main-container">
            <span class="footer-main-icons flex justify-around mx-16">
                <a :href="this.detailfooter.github_link"> <font-awesome-icon class="extlinkicon fa-lg" :icon="['fab', 'github']"/> </a>
                <a :href="this.detailfooter.linkedin_link"> <font-awesome-icon class="extlinkicon fa-lg" :icon="['fab', 'linkedin-in']"/> </a>
                <a :href="this.detailfooter.medium_link"> <font-awesome-icon class="extlinkicon fa-lg" :icon="['fab', 'medium-m']"/> </a>
            </span>
            <h1 class="footer-main-rebuild text-center mt-6">
                Built by Abhishek Kathayat
            </h1>
            <h1 class="footer-main-buildidea text-center mt-3">
                UI Design taken from 
                <a class="footer-main-buildidea-link" href="https://www.brittanychiang.com"> Brittany Chiang </a>
            </h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    props: {
        detailfooter: Object
    }
}
</script>

<style scoped>
.footer-main-rebuild, .footer-main-buildidea {
    font-family: 'San Francisco';
    font-size: 12px;
    color: #a8b2d1;
}
.extlinkicon {
    color: #a8b2d1;
}
.extlinkicon:hover {
    transform: translateY(-5px);
    transition: all 0.25s;
    color: #64ffda;
}
.footer-main-buildidea-link {
    display: inline-block;
    color: #64ffda;
}
.footer-main-buildidea-link::after {
    content: "";
    position: relative;
    width: 0px;
    height: 1px;
    background-color: #64ffda;
    display: block;
    bottom: 0.20em;
}
.footer-main-buildidea-link:hover::after {
    width: 100%;
    opacity: 0.5;
    transition: all 0.25s;
}
</style>