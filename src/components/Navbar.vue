<template>
    <div class="navbar-main flex justify-center my-6">
        <div class="navbar-section-holder w-11/12 flex justify-between">
            <div class="navbar-left-section flex">
                <img src="../assets/profile-logo.svg" class="h-16 w-16"/>
            </div>
            <div class="navbar-right-section flex">
                <div class="navbar-right-section-links flex self-center">
                    <ul class="flex">
                        <li class="mr-4">
                            <span class="navbar-right-section-links-index">01.</span>
                            <a href=""> <span class="navbar-right-section-links-text"> About </span> </a>
                        </li>
                        <li class="mx-4">
                            <span class="navbar-right-section-links-index">02.</span>
                            <a href=""> <span class="navbar-right-section-links-text"> Experience </span> </a>
                        </li>
                        <li class="mx-4">
                            <span class="navbar-right-section-links-index">03.</span>
                            <a href=""> <span class="navbar-right-section-links-text"> Work </span> </a>
                        </li>
                        <li class="ml-4 mr-8">
                            <span class="navbar-right-section-links-index">04.</span>
                            <a href=""> <span class="navbar-right-section-links-text"> Contact </span> </a>
                        </li>
                    </ul>
                </div>
                <button class="navbar-right-section-button flex self-center">
                    <span class="navbar-right-section-button-text px-5 py-3">
                        Resume
                    </span>
                </button>
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
.navbar-right-section-button {
    border-color: #64ffda;
    border-width: 1px;
    border-radius: 3px;
    border-style: solid;
}
.navbar-right-section-button-text, .navbar-right-section-links-index, .navbar-right-section-links-text {
    font-family: 'San Francisco';
    color: #64ffda;
    font-size: 13px;
}
.navbar-right-section-links-text {
    color: #ccd6f6;
}
.navbar-right-section-links-text:hover {
    color: #64ffda;
}
</style>