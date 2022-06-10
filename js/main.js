const App = {
    data() {
        return {
            headerCompu: false,
        }
    },
    methods: {
        openBurger(){
            const burger = document.querySelector('.header__burger')
            burger.classList.toggle('open')
            const menu = document.querySelector('.header__nav')
            if (burger.classList.contains('open')) {
                menu.style.opacity = '1'
                menu.style.height = '100%'
            } else {
                menu.style.opacity = '0'
                menu.style.height = '0'
            }
        }
    }
}

const app = Vue.createApp(App);
app.mount('#burger');
