<template>
        <!-- html in here -->
        <div class="policy-bar">
            <div class="container">
                <div class="policy-bar__pci-dss-level-1-serv"><span>PCI-DSS Level 1 Service Provider Compliant</span></div>
                <div class="policy-bar__end-user-agreement"><span><a href="/end-user-agreement">End User Agreement</a>  |  <a href="/privacy-policy">Privacy Policy</a></span></div>
                <div class="policy-bar__desk"><span>©2020 - PayFast  |   All right reserved</span></div>
            </div>
        </div>
</template>

<script>

</script>
<style lang="stylus" scoped>
    a {
        color white
    }
    a:hover {
        color red
    }
    .policy-bar {
        margin-top 50px
    }

    .policy-bar, .policy-bar .container {
        background-color: #041b2b;
        display: flex;
        justify-content center
    }

    .policy-bar {
        height: 50px;
        color: #fff;
        font-size: 13px;
        letter-spacing: -.2px;
        line-height: 18px;
    }
    .container {
        max-width: 1140px;
        width: 100%;
    }
    .policy-bar .container div {
        width: 30%;
        background-color: #041b2b;
        margin: 15px;
        text-align: center;
    }
</style>
