import Vue from 'vue';
import root from './components/root/root';
import router from './router';

new Vue({
	el: '#app',
	router,
	render: h => h(root)
});


