export const lang_ru_name = 'ru';

export const lang_ru_trans = {
  'modalTag': {
    'title': 'Добавить метку',
    'set1': 'Вид муравья',
    'set2': 'Комментарий',
    'set3': 'Координаты и время',
    'set4': 'Закрыть',
    'set5': 'Отправить'
  },
  'modalHelp': {
    'title': 'Помощь',
    'p1': {
      'title': 'Как добавить метку?',
      'text':  `
                <div class="ui celled ordered list">
                  <div class="item">
                    Что бы добавить метку, нажмите на кнопку "Добавить метку" в левом верхнем углу.
                    <img class="ui rounded image modalHelpImg" src="../../assets/img/modalImg1.png">
                  </div>
                  <div class="item">После нажатия переведите курсор мыши на карту, он должен отобразиться в крестообразном виде.</div>
                  <div class="item">Нажмите на место где обитают муравьи.</div>
                  <div class="item">
                    После нажатия выйдет окно, в нем необходимо заполнить два поля, название вида муравья, и комментарий
                    по которому можно найти колонию данного вида.
                    <img class="ui rounded image modalHelpImg" src="../../assets/img/modalImg2.png">
                  </div>
                  <div class="item">
                    После заполнения добавьте метку нажав на кнопку "Отправить".
                    <img class="ui rounded image modalHelpImg" src="../../assets/img/modalImg3.png">
                  </div>
                </div>
                `
    },
    'p2': {
      'title': 'Как фильтровать виды?',
      'text': `
              <div class="ui celled ordered list">
                <div class="item">
                  Для фильтрации меток введите вид муравья в поле.
                  <img class="ui rounded image modalHelpImg" src="../../assets/img/modalImg4.png">
                </div>
              </div>
              `
    },
    'p3': {
      'title': 'Как поменять стиль карты?',
      'text':  `
               <div class="ui celled ordered list">
                 <div class="item">
                   Для того что бы сменить стилизацию карты со схемы на спутник или наоборот, наведите курсор на значек.
                   <img class="ui rounded image modalHelpImg" src="../../assets/img/modalImg5.png">
                 </div>
                 <div class="item">
                   Выберите стиль карты.
                   <img class="ui rounded image modalHelpImg" src="../../assets/img/modalImg6.png">
                 </div>
               </div>
               `
    },
    'button': 'Закрыть'
  },
  'modalContact': {
    'title': 'Контакты',
    'p1': `Если у вас есть какие либо предложения или замечания по работе сервиса, пишите на почту: `,
    'button': 'Закрыть'
  }
}
