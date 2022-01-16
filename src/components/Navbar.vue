<template>
    <div class="navbar-man flex justify-center my-6">
        <div class="navbar-section-holder w-11/12 flex justify-between">
            <div class="navbar-left-section flex">
                <a href="https://abhishek-kathayat.github.io"><img src="../assets/profile-logo.svg" class="h-16 w-16"/></a>
            </div>
            <div class="navbar-right-section flex">
                <ul class="navbar-right-links md:flex hidden md:mr-4">
                    <li
                    class="navbar-right-link-holder mx-4 self-center"
                    v-for="(link, index) in navbarlinks"
                    :key="index"
                    v-on:click="$emit('section', link.name)"> 
                        <span class="navbar-right-link-index"> {{link.index}} </span> 
                        <span class="navbar-right-link-text"> {{link.name}} </span> 
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    props: {
        navbarlinks: Array
    }
}
</script>

<style scoped>
.navbar-right-link-index {
    font-family: 'San Francisco';
    font-size: 12px;
    color: #64ffda;
}
.navbar-right-link-text {
    font-family: 'San Francisco';
    font-size: 13px;
    color: #ccd6f6;
}
.navbar-right-link-text:hover {
    color: #64ffda;
    cursor: pointer;
}
</style>