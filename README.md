# Where i will go after...

## Содержание

- [Обзор](#Обзор)
  - [Задание](#Задание)
  - [Скриншот](#Скриншот)
  - [Ссылки](#Ссылки)
- [Мой процесс](#Мой-процесс)
  - [Построен с](#Построен-с)
  - [Чему я научился](#Чему-я-научился)
  - [Что хочу изучить](#Что-хочу-изучить)
  - [Полезные ресурсы](#Полезные-ресурсы)
- [Авторы](#Авторы)
- [Acknowledgments](#acknowledgments)

## Обзор

### Задание

- Сверстать макет сайта по png
- Продумать адаптив
- **Дополнительно** Добавить собственные фичи

### Скриншот

![](./images/sreenshot_page.png)

### Ссылки

- Reposotory URL: [https://github.com/Zhdko/Where_i_will_go](https://github.com/Zhdko/Where_i_will_go)
- GITpages URL: [https://zhdko.github.io/Where_i_will_go/](https://zhdko.github.io/Where_i_will_go/)

## Мой процесс

### Построен с

- Семантическая разметка HTML5
- Пользователские свойства CSS
- Flexbox
- Grid
- Desctop-first workflow
- [jQuery](https://jquery.com/) - JS library

### Чему я научился

  -Создавать меню бургер с использованием jQuery
```js
$(document).ready(function() {
	$('.menu-burger').click(function(){
        $('.menu-burger').toggleClass('open-menu');
        $('.header__navigation').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
});
```
  - Работать с GIT brances

### Что хочу изучить

  - Больше разобраться в ветках Git
  - Погрузиться в Flex и Grid
  - Разобраться с библиотекой jQuery

### Полезные ресуры

- [https://css-tricks.com/snippets/css/a-guide-to-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Помог мне разобраться со свойствами flex-basis и flex-grow
- [https://webformyself.com/animiruem-ikonki-gamburgery-dlya-menyu-na-chistom-css/(https://webformyself.com/animiruem-ikonki-gamburgery-dlya-menyu-na-chistom-css/) - Это очень подробная статься по созданию меню- бургера

## Авторы

- Александр Жданко - [https://github.com/Zhdko](https://github.com/Zhdko)
- Сергей Васильев - [https://github.com/SergeyVasilev-bee](https://github.com/SergeyVasilev-bee)

