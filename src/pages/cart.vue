<template>
    <div>
        <order-header></order-header>
        cart
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import orderHeader from './../components/OrderHeader'
import NavFooter from './../components/NavFooter'

export default {
    name: 'cart',
    components: {
        orderHeader,
        NavFooter
    }
};
</script>