export const lang_en_name = 'en';

export const lang_en_trans = {
  'modalTag': {
    'title': 'Add tag',
    'set1': 'Species',
    'set2': 'Comment',
    'set3': 'coordinates and time',
    'set4': 'Cancel',
    'set5': 'Send'
  },
  'modalHelp': {
    'title': 'Help',
    'p1': {
      'title': 'How to add tag?',
      'text': `
                <div class="ui celled ordered list">
                  <div class="item">
                    Click on the button "Add tag"
                    <img class="ui rounded image modalHelpImg" src="../../assets/img/modalImg1.png">
                  </div>
                  <div class="item"> After click on the button, move the cursor on the map, cursor will look like how a cross. </div>
                  <div class="item"> Click on the place, where live the ants. </div>
                  <div class="item">
                    Appear a modal window, in him necessary fill a two input field. The first field,
                    it is species of ant. The second field, it is comment for landmark,
                    by which to you can find a colony of ants.
                    <img class="ui rounded image modalHelpImg" src="../../assets/img/modalImg2.png">
                  </div>
                  <div class="item">
                    When all of the input fields will filled, click on the button "Send" for add the tag on the map.
                    <img class="ui rounded image modalHelpImg" src="../../assets/img/modalImg3.png">
                  </div>
                </div>
                `
    },
    'p2': {
      'title': 'How to filter the tags?',
      'text': `
              <div class="ui celled ordered list">
                <div class="item">
                  To filter the tags, enter species ant in the input field "search".
                  <img class="ui rounded image modalHelpImg" src="../../assets/img/modalImg4.png">
                </div>
              </div>
              `
    },
    'p3': {
      'title': 'How to change style the map?',
      'text':  `
               <div class="ui celled ordered list">
                 <div class="item">
                   To change a style of the map, move the cursor on the icon "layers" .
                   <img class="ui rounded image modalHelpImg" src="../../assets/img/modalImg5.png">
                 </div>
                 <div class="item">
                   Select the style of the map.
                   <img class="ui rounded image modalHelpImg" src="../../assets/img/modalImg6.png">
                 </div>
               </div>
               `
    },
    'button': 'Cancel'
  },
  'modalContact': {
    'title': 'Contacts',
    'p1': `If you have some suggestions or comments about working this a service, write on this mail: `,
    'button': 'Cancel'
  }
}
