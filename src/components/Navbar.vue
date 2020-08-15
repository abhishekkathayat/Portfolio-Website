<template>
    <div class="navbar-man flex justify-center my-6">
        <div class="navbar-section-holder w-11/12 flex justify-between">
            <div class="navbar-left-section flex">
                <a href=""><img src="../assets/profile-logo.svg" class="h-16 w-16"/></a>
            </div>
            <div class="navbar-right-section flex">
                <button class="navbar-right-section-button flex self-center px-5">
                    Resume
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