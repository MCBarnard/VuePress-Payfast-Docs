<template>
    <div>
        <Layout/>
        <div class="main-app">
            <div class="big-payfast-round">
                <h1 class="welcome-text">Welcome to the PayFast Developer Documentation</h1>
                <img class="big-payfast-img" src="/images/Payfast Final Stacked Logo.svg" alt="">
            </div>
            <a href="/guide/" class="get-started-pf">Get Started !</a>
            <div class="payment-method-logos">
                <img src="/images/pm/Visa Electron.png" alt="">
                <img src="/images/pm/Mobicred.png" alt="">
                <img src="/images/pm/SCode stacked logo.jpg" alt="">
                <img src="/images/pm/Instant EFT by Payfast.png" alt="">
                <img src="/images/pm/masterpass 2.png" alt="">
                <img src="/images/pm/Maestro.png" alt="">
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Layout from "@theme/layouts/Layout.vue";
    import Footer from "./Footer.vue";

    export default {
        components: { Layout, Footer },
    };
</script>

<style scoped>
    .get-started-pf {
        color: #ffffff;
        background: red;
        border-radius: 28px;
        margin: auto;
        display: block;
        max-width: 300px;
        height: 40px;
        text-align: center;
        padding-top: 20px;
        border: 1px solid red;
        margin-bottom: 50px;
    }
    .get-started-pf:hover {
        box-shadow: inset 0px 0px 1px 4px white;
    }
    .payment-method-logos {
        max-width: 100%;
        overflow: hidden;
        display: flex;
        justify-content: space-evenly;
    }
    .payment-method-logos img {
        max-width: 200px;
        max-height: 110px;
    }
    .welcome-text {
        text-align: center;
        max-width: 450px;
        margin: auto;
        margin-top: 20px;
    }
    .big-payfast-img {
        display: block;
        max-height: 300px!important;
        margin: 50px auto;
    }
    .theme-default-content.custom img {
        max-height: 100px;
    }
</style>
