<template>
    <div id="header">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <router-link :to="{name:'home'}" class="logo">
                        {{logo}}
                    </router-link>
                </div>
                <div class="col-6">
                    <div>
                        <b-nav fill>
                            <b-nav-item class="item-nav" v-for = "(item, index) in listNav" :key="index"
                                >{{item.name}}</b-nav-item>
                            <b-nav-item class="cart"><b-icon-cart2></b-icon-cart2></b-nav-item>
                        </b-nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            logo: 'RinShop',
            listNav: [
                {name: 'home', active: true},
                {name: 'catalog', active: false},
                {name: 'about', active: false},
                {name: 'blog', active: false},
                {name: 'contact', active: false}
            ],
        }
    },
    methods: {
    },
}
</script>
<style scoped>
    #header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: #fff ;
        height: 40px;
        box-shadow: 0px -4px 4px 6px rgb(0 0 0 / 10%);
        z-index: 100;
    }
    a {
        color: #000;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 12px;
        line-height: 40px;
        padding: 0;
    }
    .item-nav>a:hover, .item-nav>a:focus {
        color: #dbcc8f !important;
    }

    .logo {
        line-height: 40px;
        font-weight: 800;
        font-size: 16px;
        color: #000 !important;
    }

    .cart {
        background-color: #dbcc8f;
    }

    .cart > a {
        color: #000;
    }
</style>