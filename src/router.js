import productDetail from './components/product-detail-website.vue'
import cart from './components/cart-website.vue'
import home from './components/container-website.vue'
export default [{
        path: '/',
        component: home,
        name: 'home'
    },
    {
        path: '/productDetail/:id',
        component: productDetail,
        name: 'productDetail',
        props: true
    },
    {
        path: '/cart',
        component: cart,
        name: 'cart'
    }
]