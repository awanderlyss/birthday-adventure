function enter_func(){
  location.href = "light.html";
}

function next_loc_func(){
  location.href = "location.html";
}

function light_func(){

  var answer = document.getElementById('light-ans').value.toLowerCase();
  switch (answer) {
    case 'ptrdape':
      document.getElementById('lightDiv').innerHTML = '<p class="info-text">The scramble letters have been saved to the <span class="clue-text">Clue Bank</span>!</p> <button id="light-btn" onclick="next_loc_func()" class="hollow button alert info-btn">Next Clue <i class="fa fa-bicycle" aria-hidden="true"></i></button>';
      localStorage.setItem('lights-answer', answer);
      var retrievedObject = localStorage.getItem('lights-answer');
      document.getElementById('clueBank').append(retrievedObject);
      break;
    case 'trapped':
      document.getElementById('lightDiv').innerHTML = '<p class="info-text">Congratulations!! You guessed "corerctly"!! This HINT has been saved to the <span class="clue-text">Clue Bank</span>!</p><button id="light-btn" onclick="next_loc_func()" class="hollow button alert info-btn">Next Clue <i class="fa fa-bicycle" aria-hidden="true"></i></button>';
      localStorage.setItem('lights-answer', answer);
      document.getElementById('clueBank').append(retrievedObject);
      break;
    default:
      document.getElementById('light-ans').value = '';
  }

}
