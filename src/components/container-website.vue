<template>
    <div id="body">
        <div class="slider">
            <div class="container">
                <div class="row">
                    <div class="col-6 content wow fadeInUp" data-wow-duration="1s">
                        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis velit explicabo ea dolore perspiciatis corporis itaque veniam animi sapiente assumenda voluptatibus tempore, earum consequatur ipsam iure quod! Dolores, ab nihil.</p>
                        <button>Discover Now</button>
                    </div>
                    <div class="col-6">
                        <div class="slidering col-12" >
                        <transition-group name="slide-in">
                            <div class="col-12" v-for="(slide,index) in slides" :key="index" v-show="currentSlide===index">
                                <img :src="slide" /> 
                            </div>
                        </transition-group>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="media container">
            <div class="row">
                <div class="col media-contain">
                    <div class="img">
                        <img src="../assets/shopping-bag (1).png" alt="">
                    </div>
                    <div class="media-content">
                        <h3>Free Shipping</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi vero corrupti, eos nam nisi dolorem mollitia repellat quae consequatur quo soluta deleniti magni, neque perferendis ipsum a, esse necessitatibus maiores.</p>
                    </div>
                </div>
                <div class="col media-contain">
                    <div class="img">
                        <img src="../assets/security-payment.png" alt="">
                    </div>
                    <div class="media-content">
                        <h3>Support Customer</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi vero corrupti.</p>
                    </div>
                </div>
                <div class="col media-contain">
                    <div class="img">
                        <img src="../assets/customer-service.png" alt="">
                    </div>
                    <div class="media-content">
                        <h3>Secure Payments</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi vero corrupti, eos nam nisi dolorem mollitia repellat</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="product" wow backInUp>
            <div class="container">
                <div class="row">
                    <h2 class="wow fadeInUp" data-wow-duration="1s">New Shoes Arrival</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    <div class="product-list container">
                        <div class="row">
                            <div class="col-3 product-item wow fadeInUp" data-wow-duration="2s" v-for="(product,index) in productImgs" :key="index">
                                <div class="product-item-img">
                                    <a @click="productDetail(index)">
                                        <img :src="product.url" alt="">
                                         <div class="overlay"></div>
                                    </a>
                                </div>
                                <div class="product-item-content">
                                    <div class="addCart">
                                            <div><span>ADD TO CART +</span></div>
                                            <div><span> BUY NOW</span><img src="../assets/shopping-cart.png" alt=""></div>
                                    </div>
                                    <div class="rating">
                                        <span>LIFESTYLE</span>
                                        <ul>
                                            <li><img src="../assets/star.png" alt=""></li>
                                            <li><img src="../assets/star.png" alt=""></li>
                                            <li><img src="../assets/star.png" alt=""></li>
                                            <li><img src="../assets/star.png" alt=""></li>
                                            <li><img src="../assets/star.png" alt=""></li>
                                        </ul>
                                    </div>
                                    <h3><a @click="productDetail(index)">{{product.name}}</a></h3>
                                    <span class="price">{{product.price | priceFormat}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import WOW from 'wowjs';
export default {
    data() {
        return {
            slides: [
                'https://picsum.photos/id/1013/4256/2832',
                'https://picsum.photos/id/1012/3973/2639',
                'https://picsum.photos/id/1011/5472/3648',
                'https://picsum.photos/id/1/5616/3744',
            ],
            currentSlide: 0,
            slideInterval: null,
            productImgs: [
                {url:"https://preview.colorlib.com/theme/minishop/images/xproduct-1.png.pagespeed.ic.e2iB2moctH.webp",name:"Nike Free RN 2019 iD",price:120000},
                {url:"https://preview.colorlib.com/theme/minishop/images/xproduct-8.png.pagespeed.ic.gVnJiJYGuF.webp",name:"Nike Free RN 2019 iD",price:140000},
                {url:"https://preview.colorlib.com/theme/minishop/images/xproduct-2.png.pagespeed.ic.lW0UvXu5cp.webp",name:"Nike Free RN 2019 iD",price:220000},
                {url:"https://preview.colorlib.com/theme/minishop/images/xproduct-3.png.pagespeed.ic.PDnANzj-_t.webp",name:"Nike Free RN 2019 iD",price:320000},
                {url:"https://preview.colorlib.com/theme/minishop/images/xproduct-4.png.pagespeed.ic.MqpXAOzjcz.webp",name:"Nike Free RN 2019 iD",price:185000},
                {url:"https://preview.colorlib.com/theme/minishop/images/xproduct-5.png.pagespeed.ic.IEch5OhiSM.webp",name:"Nike Free RN 2019 iD",price:150000},
                {url:"https://preview.colorlib.com/theme/minishop/images/xproduct-6.png.pagespeed.ic.8fV_4xVNkW.webp",name:"Nike Free RN 2019 iD",price:120000},
                {url:"https://preview.colorlib.com/theme/minishop/images/xproduct-7.png.pagespeed.ic.VCVt_px_Ow.webp",name:"Nike Free RN 2019 iD",price:400000},
            ]
        }
    },
    mounted() {
        this.slideInterval = setInterval(()=>{
            const index = this.currentSlide < this.slides.length - 1 ? this.currentSlide + 1 : 0
            this.setCurrrentSlide(index)
        }, 3000)
        let wow = new WOW.WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
        });
        wow.init();
    },
    beforeUnMount(){
        clearInterval(this.slideInterval)
    },
    methods: {
        setCurrrentSlide(index){
            this.currentSlide = index
        },
        productDetail(id){
            this.$router.push('/productDetail/' + id)
        }
    },
    filters: {
        priceFormat(value){
            if (typeof value !== "number") {
                return value
            }
            var formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            })
            return formatter.format(value)
        }
    }
}
</script>
<style scoped>
    #body {
        background-color: #fff;
        width: 100%;
        margin-top: 40px;
    }
    /* slider */
     .slider {
        height: 750px;
        background-color: #DBCC8F;
     }
     .slider div {
         height: 100%;
     }
    .slidering  {
        width: 100%;
        height: 100%;
        overflow: hidden;
        align-items: center;
        position: relative;
        flex-direction: column;

    }

    .slidering> div {
        /* width: 100%;
        height: 100%; */
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .slidering img {
        width: 100%;
        transform: translateY(25%);
    }
    .slide-in-move,
    .slide-in-enter-active,
    .slide-in-leave-active {
        transition: all 1s ease-in-out;
    }
    .slide-in-enter-from {
        opacity: 0;
        transform: translateX(50%);
    }
    .slide-in-leave-to {
        opacity: 0;
        transform: translateX(100%);
    }

    .slide-in-leave-active {
        position: absolute;
    }
    .content {
        margin-top: 200px;
    }
    h1 {
        font-weight: 100;
        font-size: 40px;
        letter-spacing: 1.2px;
    }
    .content>p {
        font-size: 16px;
        letter-spacing: 1px;
    }
    .content> button {
        text-transform: uppercase;
        font-size: 16px;
        color: #fff;
        background-color: #C2A942;
        padding: 8px 12px;
        border: none;
        font-weight: 400;
    }
    .content> button:hover {
        opacity: 0.8;
    }
    /* media */
    .media {
        padding: 52px;
    }
    .media img {
        width: 70px;
    }
    .media .img {
        margin-bottom: 24px;
    }
    .media-contain {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 40px;
    }
    .media-contain h3 {
        text-align: center;
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 20px;
    }
    .media-contain p {
        display: block;
        text-align: center;
        margin-bottom: 16px;
        font-size: 15px;
        line-height: 1.8;
        font-weight: 400;
        color: gray;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        visibility: visible;
        overflow:hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
    }
    /* product */
    .product {
        background-color: #F8F9FA;
        padding: 104px 0;
    }
    .product h2 {
        font-size: 40px;
        font-weight: 400;
        color: #000000;
        text-align: center;
        margin-bottom: 24px;
    }
    .product > .container > .row > p {
        text-align: center;
        font-size: 15px;
        line-height: 1.8;
        font-weight: 400;
        color: gray;
        letter-spacing: 0.5px;
        margin-bottom: 16px;
    }
    .product-list {
        margin-top: 16px;

    }
    .product-list > div {
        justify-content: center;
    }
    .product-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 16px;
        width: 255px;
        padding: 0;
        margin: 16px 16px 0 16px;
    }
    .product-item-img {
        width: 100%;
        height: 382px;
        overflow: hidden;
        background-color: #EFEFEF;
       
    }
    .product-item-img > a{
        display: block;
        position: relative;
        z-index: 1;
    }
    .product-item-img .overlay{
        display: block;
        width: 230px;
        height: 230px;
        background-color: #DBCC8F;
        border-radius:  50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        transition: all linear 0.2s;
        opacity: 0;
        z-index: -1;
    }
    .product-item:hover .overlay{
       opacity: 1;
    }
    .product-item:hover .product-item-img img {
       transform: scale(1.1);
       
    }
    .product-item:hover .product-item-content .addCart{
        visibility: visible;
    }
    .product-item-content .addCart {
        position: absolute;
        top: -65px;
        left: 0;
        display: flex;
        width: 100%;
        justify-content: center;
        opacity: 1;
        z-index: 1;
        visibility: hidden;
        transition: all linear 0.2s;
        cursor: pointer;
    }
    .product-item-content .addCart div:hover {
        background-color: #DBCC8F;
        color: #fff;
    }
    .addCart div {
        display: flex;
        padding: 12px 8px;
    }
     .addCart div:first-child {
        background-color: #000;
        color: #fff;
        font-size: 13px;
        text-transform: uppercase;
        font-weight: 300;
        margin-right: 4px;
    }
    .addCart div:last-child {
        background-color: #fff;
        color: #000;
        font-size: 13px;
        text-transform: uppercase;
        font-weight: 300;
    }
    .addCart div img {
        width: 16px !important;
        height: 16px !important;
        margin-left: 4px;
        transform: scale(1) !important;
    }
    .product-item-img a img {
        display: block;
        width: 255px;
        height: 382px;
        transition: all 0.2s linear;
    }
    .product-item-content {
        width: 100%;
        padding: 12px 16px;
        width: 255px;
        background-color: #fff;
        position: relative;
    }
    .rating {
        display: flex;
        justify-content: space-between;
    }
    .rating > span {
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: rgba(0,0,0,.3);
    }
    .rating ul {
        padding: 0;
        margin: 0;
        display: flex;
        transform: translateY(-4px);
    }
    .rating ul li{
        list-style: none;
        padding: 0 2px;
    }
    .rating>ul>li>img{
        width: 12px !important;
    }
    .product-item-content h3 a {
        font-size: 14px;
        margin-bottom: 5px;
        font-weight: 700;
        text-transform: uppercase;
        text-decoration: none;
        color: #000000;
        display: block;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        text-overflow: ellipsis;
    }
    .price {
         font-size: 15px;
        line-height: 1.8;
    }
</style>