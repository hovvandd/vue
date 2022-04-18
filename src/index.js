import Vue from 'vue';
import App from './components/app/App.vue';

Vue.config.productionTip = false

// for (var i = 0; i < 1000000000; i++) { } // проверка прелодера
window.onload = function () {
    document.querySelector(".preloader").remove();
    new Vue({
        el: '#app',
        render: h => h(App)
    })
}