<template>
    <div class="navbar-man flex justify-center my-6">
        <div class="navbar-section-holder w-11/12 flex justify-between">
            <div class="navbar-left-section flex">
                <a href="https://abhishek-kathayat.github.io"><img src="../assets/profile-logo.svg" class="h-16 w-16"/></a>
            </div>
            <div class="navbar-right-section flex">
                <ul class="navbar-right-links md:flex hidden">
                    <li class="navbar-right-link-holder mx-4 self-center"> 
                        <span class="navbar-right-link-index"> 01. </span> 
                        <span class="navbar-right-link-text"> <a href=""> About </a> </span> 
                    </li>
                    <li class="navbar-right-link-holder mx-4 self-center"> 
                        <span class="navbar-right-link-index"> 02. </span> 
                        <span class="navbar-right-link-text"> <a href=""> Experience </a> </span> 
                    </li>
                    <li class="navbar-right-link-holder mx-4 self-center"> 
                        <span class="navbar-right-link-index"> 03. </span> 
                        <span class="navbar-right-link-text"> <a href=""> Work </a> </span> 
                    </li>
                    <li class="navbar-right-link-holder ml-4 mr-8 self-center"> 
                        <span class="navbar-right-link-index"> 04. </span> 
                        <span class="navbar-right-link-text"> <a href=""> Contact </a> </span> 
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
    name: 'Navbar'
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