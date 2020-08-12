<template>
    <div class="navbar-main flex justify-center my-6">
        <div class="navbar-section-holder w-11/12 flex justify-between">
            <div class="navbar-left-section flex">
                <img src="../assets/profile-logo.svg" class="h-16 w-16"/>
            </div>
            <div class="navbar-right-section flex">
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
    outline: none;
}
.navbar-right-section-button:hover {
    transform: scale(1.05);
}
.navbar-right-section-button-text {
    font-family: 'San Francisco';
    color: #64ffda;
    font-size: 13px;
}
</style>