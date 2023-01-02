<script>
// Navigate function after 3 second
setTimeout(() => {
navigateTo('/loginScreen')
}, 3000);
</script>

<template>
    <div class="container">
<div class="logo">
    <img
    class="logo"
    src="../assets/png/logo.png" alt="Logo Image" />
</div>
    </div>
</template>

<style>
.container{
    display: flex;
    flex: 1;
    background-color: rgb(255, 255, 255);
    align-items: center;
    justify-content: center;
    height: 100vh;
}
.logo {
    height: 150px;
    width: 150px;
}
</style>