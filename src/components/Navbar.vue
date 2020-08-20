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
                <a href="./resume.pdf" target="_blank" rel="noopener noreferrer" class="navbar-right-section-button flex self-center px-5">
                    Resume
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    props: {
        navbarlinks: Object
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
.navbar-right-section-button {
    border-color: #64ffda;
    border-width: 1px;
    border-radius: 3px;
    border-style: solid;
    outline: none;
    font-family: 'San Francisco';
    color: #64ffda;
    font-size: 13px;
    padding-top: 10px;
    padding-bottom: 10px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
}
.navbar-right-section-button:hover {
    background: #172a45;
}
</style>