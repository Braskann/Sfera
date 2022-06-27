// const App = 

const app = Vue.createApp({
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
                // menu.style.opacity = '1'
                menu.style.display = 'flex'
            } else {
                // menu.style.opacity = '0'
                menu.style.display = 'none'
            }
        }
    }
});
app.mount('#burger');



const eLearning = Vue.createApp({
    data() {
        return {
            lessonVisible: 'lesson-1',
        }
    },
    methods: {
        openLesson(e) {
            const listItem = e.target
            if (listItem.tagName == 'LI') {
                const items = document.querySelectorAll('.lesson-tabs__menu ul li')
                for (item of items) {
                    item.classList.remove('lesson-tabs-active')
                }
                listItem.classList.add('lesson-tabs-active')
            }
            switch(listItem.getAttribute('id')) {
                case 'lesson-1':
                    this.lessonVisible = 'lesson-1'
                    break;
                case 'lesson-2':
                    this.lessonVisible = 'lesson-2'
                    break;
                case 'lesson-3':
                    this.lessonVisible = 'lesson-3'
                    break;
                case 'lesson-4':
                    this.lessonVisible = 'lesson-4'
                    break;
                        
            }
        }
    }

});
eLearning.mount('#eLearning');