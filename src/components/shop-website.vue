<template>
    <div>
        <headerWeb />
        <router-view></router-view>
        <footerWeb />
    </div>
</template>
<script>
import headerWeb from './header-website.vue'
// import containerWeb from './container-website.vue'
import footerWeb from './footer-website.vue'
import WOW from 'wowjs'
export default {
    components: {
        headerWeb,
        // containerWeb,
        footerWeb
    },
    mounted(){
        let wow = new WOW.WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
        });
        wow.init();
    }
}
</script>
<style lang="">
    
</style>