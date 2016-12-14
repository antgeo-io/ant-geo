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
  'placeholder': 'Поиск...',
  'modalHelp': {
    'title': 'Помощь',
    'p1': {
      'title': 'Как добавить метку?',
      'text':  `
                <div class="ui celled ordered list">
                  <div class="item">
                    Что бы добавить метку, нажмите на кнопку "Добавить метку" в левом верхнем углу.
                    <img class="ui rounded image modalHelpImg" src="../../assets/img/modalImg1_ru.png">
                  </div>
                  <div class="item">После нажатия переведите курсор мыши на карту, он должен отобразиться в крестообразном виде.</div>
                  <div class="item">Нажмите на место где обитают муравьи.</div>
                  <div class="item">
                    После нажатия выйдет окно, в нем необходимо заполнить два поля, название вида муравья, и комментарий
                    по которому можно найти колонию данного вида.
                    <img class="ui rounded image modalHelpImg" src="../../assets/img/modalImg2_ru.png">
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
                  <img class="ui rounded image modalHelpImg" src="../../assets/img/modalImg4_ru.png">
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
    'p4': {
      'title': 'Как получить ссылку на конкретную метку?',
      'text': `
              <div class="ui celled ordered list">
                <div class="item">
                  Для получения ссылки на метку, нажмите на маркер что бы высветилось окно.
                  <img class="ui rounded image modalHelpImg" src="../../assets/img/modalImg7.png">
                </div>
                <div class="item">
                  Далее просто нажмите на данную кнопку, ссылка сама скопируется в буфер обмена.
                  <img class="ui rounded image modalHelpImg" src="../../assets/img/modalImg8.png">
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
  },
  'modalAbout': {
    'title': 'О проекте',
    'p1': `Задача сервиса antgeo получить информацию мирмикиперов о местоположении тех или иных
           видов муравьев, и выдать ее в виде точной карты распростронения видов.
           Antgeo может быть интересен для тех кто изучает муравьев и для тех кто содержит муравьев в
           качестве домашних питомцев. Интерес может быть построен на разных целях,
           Основное приемущество antgeo заключается в возможности внесения информации,
           иными словами каждый мирмикипер имеет возможность внести материал в базу данных,
           а также не менее важное приемущество заключается в простоте использования сервиса.`,
    'button': 'Закрыть'
  },
  'copyLinkButton': 'Скопировать ссылку на метку',
  'errorWindow': {
    'p1': {
      'title': 'Поле "Вид муравья" не заполнен либо заполнен некорректно',
      'text': `Вид муравья допустимо писать только латинским алфавитом, так же допустимы следующие знаки:
              (); -; .;`
    },
    'p2': {
      'title': 'Поле "Комментарий" не заполнено',
      'text': 'Пожалуйста, заполните поле. Например: Колония находится возле большого камня.'
    }
  },
  'errorGetMarkersWindow': {
    'title': 'Сервер не отвечает',
    'text': `К сожалению, сервер с информацией о метках не отвечает. Возможен только просмотр карты,
             добавление новых меток в данный момент невозможно.`
  },
  'successAddMarker': 'Ваша метка добавлена!',
  'addingMarkerOnMap': 'Нажмите на место где обитают муравьи'
}
