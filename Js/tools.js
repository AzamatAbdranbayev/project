const linkToMyCv = new Vue ({
    el:".description__button",
    data: {
        url:"docs/cv.pdf"
    }
})
// Создаем новую сущность Vue.js
const demo = new Vue({
	// DOM элемент, к которому прикреплена сущность
	el: '.content__main',

    // Начало модели.
	// Определяем свойства и присваиваем им необходимые значения.
	data: {
		active: 'about'
	},

	// Функции, которые будем использовать.
	methods: {
		makeActive: function(item){
			// Когда модель будет изменена, представление обновится.
            this.active = item;
            $('.content__info').hide()
            $(`#${item}`).show()
		}
	}
});

// Создаем для объяснения шаблона Vue.js
const myTemplate = new Vue({
    el: '#app',
    data: {
        status: "on"
    },
})