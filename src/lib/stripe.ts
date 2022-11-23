import Stripe from "stripe";

// const key = process.env.STRIPE_SECRET_KEY; //development
const key = 'sk_test_51M4v0WB25TU3K2wx2BVAg1rtptgf2txUOyj7QMggvmSYTYrpdp4BeVSdXupUX5bLilRS3eCU0WuB9jOG0ncJT7Yz00MPYUytUw'; //production

export const stripe = new Stripe(key, {
    apiVersion: '2022-11-15',
    appInfo: {
        name: 'Ignite Shop'
    }
})