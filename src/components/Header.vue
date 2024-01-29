<template>
    <div class="Header bg-black flex justify-between">
        <div class="HeaderImage">
            <img src="../assets/login/logo.png" alt="">
        </div>
        <div class="flex">
            <button class="btn-ghost">客房旅宿</button>
            <button class="btn-ghost">會員登入</button>
            <button class="btn-primary">立即訂房</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    img{
        max-height: 100%;
    }
    .Header {
        max-height: 120px;
        @apply px-20 py-6;
        .HeaderImage {

        }
    }
</style>
