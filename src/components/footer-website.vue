<template>
    <div id="footer">
        <a href="#"><img :class="{arrowUp:true}" src="../assets/arrow-up.png" alt=""></a>
        <div class="container">
            <div class="content row">
                <div class="address col-3">
                    <h3>{{logo}}</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                    <div class="social">
                        <a href="#"><img src="../assets/twitter.png" alt=""></a>
                        <a href="#"><img src="../assets/facebook-app-symbol.png" alt=""></a>
                        <a href="#"><img src="../assets/instagram.png" alt=""></a>
                    </div>
                </div>
                <div class="col-9 row">
                    <div class="menu col">
                        <h3>MENU</h3>
                        <ul>
                            <li><a href="#">shop</a></li>
                            <li><a href="#">about</a></li>
                            <li><a href="#">journal</a></li>
                            <li><a href="#">contact Us</a></li>
                        </ul>
                    </div>
                    <div class="help col">
                        <h3>HELP</h3>
                        <ul>
                            <li><a href="#">Shipping Information</a></li>
                            <li><a href="#">Returns & Exchange</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div class="question col">
                        <h3>HAVE A QUESTIONS?</h3>
                        <ul>
                            <li><img src="../assets/location.png" alt=""><span>	203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                            <li><img src="../assets/phone.png" alt=""><span> +2 392 3929 210</span></li>
                            <li><img src="../assets/email.png" alt=""><span> info@yourdomain.com</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p class="lisence">Copyright ©2022 All rights reserved | This template is made with  by Colorlib</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            logo: "RinShop",
            arrowUp: true
        }
    },
}
</script>
<style scoped>
    #footer {
        background-color: #000;
        color: #fff;
        padding: 98px 0 40px 0;
        font-size: 14px;
        position: relative;
    }
    #footer > a {
        position: absolute;
        display: flex;
        position: absolute;
        width: 60px;
        height: 60px;
        background-color: #fff;
        border-radius: 50%;
        top: 0;
        right: 0;
        transform: translate(-50%,-50%);
        box-shadow: 0px 0px 4px 0px rgba(0 0 0 / 15%);
    }
    #footer > a > img {
        width: 20px;
        height: 20px;
        margin: auto;
    }
    .arrowUp {
        animation: arrowUp 0.5s ease-in-out 1s infinite;
        animation-duration: 1.8s;
        transform: translateY(0);
    }
    @keyframes arrowUp {
        0% {
            transform: translateY(4);
        }
        100% {
            transform: translateY(-4px);
        }
        0% {
            transform: translateY(4px);
        }
    }
    ul {
        padding: 0;
        margin: 0;
    }
    li {
        list-style: none;
        padding: 0;
    }
    a {
        text-decoration: none;
        color: rgba(255,255,255,.8);
        font-size: 14px;
        letter-spacing: 0.8px;
    }
    h3 {
        margin-bottom: 20px;
        font-size: 13px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 3px;
    }
    .social {
        display: flex;
    }
    .social> a {
        display: block;
        background-color: #DBCC8F;
        padding: 12px;
        border-radius: 50% ;
        margin: 0px 4px;
    }
    .social> a > img {
        width: 25px;
        height: 25px;
    }
    .content {
        display: flex;
    }
    .content > .row {
        display: flex;
    }
    .content > .row img {
        width: 16px;
        height: 16px;
    }
    .question {
        background-color: #f2f2f2;
        color: #000;
        border-radius: 4px;
        padding: 12px;
    }
    .question span {
        line-height: 40px;
        margin-left: 8px;
    }
    #footer > .container > p {
        text-align: center;
        margin-top: 32px;
        font-size: 14px;
        letter-spacing: 1.2px;
        font-weight: 100;
    }
    .content .col-9 div ul li a {
        display: block;
        padding: 12px 0;
    }
    .address > p {
        line-height: 40px;
    }
</style>