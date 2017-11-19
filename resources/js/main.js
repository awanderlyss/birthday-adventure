function enter_func(){
  location.href = "light.html";
}

function next_loc_func(){
  location.href = "coors.html";
}

function next_date_func(){
  location.href = "famous.html";
}

function next_bike_func(){
  location.href = "et.html";
}

function next_sleep_func(){
  location.href = "jesus.html";
}

function exit_func(){
  location.href = "exit.html";
}

function light_func(){
  var answer = document.getElementById('light-ans').value.toLowerCase();
  switch (answer) {
    case 'ptrdape':
      document.getElementById('lightDiv').innerHTML = '<p class="info-text">The scrambled letters have been saved to the <span class="clue-text">Clue Bank</span>!</p> <button id="light-btn" onclick="next_loc_func()" class="hollow button alert info-btn">Next Clue <i class="fa fa-bicycle" aria-hidden="true"></i></button>';
      localStorage.setItem('lights-answer', answer);
      var retrievedObject = localStorage.getItem('lights-answer');
      var p = document.createElement('p');
      p.innerHTML = retrievedObject;
      document.getElementById('lightClue').appendChild(p);
      break;
    case 'trapped':
      document.getElementById('lightDiv').innerHTML = '<p class="info-text">Congratulations, you "correctly" guessed the first piece to the puzzle. This HINT has been saved to the <span class="clue-text">Clue Bank</span>!</p><button id="light-btn" onclick="next_loc_func()" class="hollow button alert info-btn">Next Clue <i class="fa fa-bicycle" aria-hidden="true"></i></button>';
      localStorage.setItem('lights-answer', answer);
      var retrievedObject = localStorage.getItem('lights-answer');
      var p = document.createElement('p');
      p.innerHTML = retrievedObject;
      document.getElementById('lightClue').appendChild(p);
      break;
    default:
      document.getElementById('light-ans').value = '';
  }
}

function location_func(){
  var lat = document.getElementById('latLocAns').value;
  var long = document.getElementById('longLocAns').value;
  if ((lat == '40.6909n') || (lat == '40.6909N') || (lat == '40.6909 N') || (lat == '40.6909 n')) {
    if ((long == '74.9216w') || (long == '74.9216W') || (long == '74.9216 W') || (long == '74.9216 w')) {
      document.getElementById('latLocDiv').innerHTML = '';
      document.getElementById('longLocDiv').innerHTML = '<p class="info-text" style="padding:1rem 0 2rem">You have successfully found the coordinates to the approximate location of your adventure! This clue has been saved to the <span class="clue-text">Clue Bank</span>!</p><button id="light-btn" onclick="next_date_func()" class="hollow button alert info-btn">Next Clue <i class="fa fa-bicycle" aria-hidden="true"></i></button>';
      localStorage.setItem('lat-answer', lat);
      localStorage.setItem('long-answer', long);

    } else{
      document.getElementById('longLocAns').value = '';
    }

  } else{
    document.getElementById('latLocAns').value = '';
  }
}

function date_func(){
  var startDate = document.getElementById('startDateAns').value;
  var endDate = document.getElementById('endDateAns').value;
  if ((startDate == '12/8') || (startDate == '12/08') || (startDate == 'December 8') || (startDate == 'december 8') || (startDate == 'December 8th') || (startDate == 'Dec 8') || (startDate == 'dec 8') || (startDate == 'Dec 8th')) {
    if ((endDate == '12/10') || (endDate == 'December 10th') || (endDate == 'December 10') || (endDate == 'december 10') || (endDate == 'Dec 10th') || (endDate == 'Dec 10') || (endDate == 'dec 10')) {
      document.getElementById('startDateDiv').innerHTML = '';
      document.getElementById('endDateDiv').innerHTML = '<p class="info-text" style="padding:1rem 0 2rem">Use this time frame to help you put the puzzle together. This clue has been saved to the <span class="clue-text">Clue Bank</span>!</p><button id="light-btn" onclick="next_bike_func()" class="hollow button alert info-btn">Next Clue <i class="fa fa-bicycle" aria-hidden="true"></i></button>';
      localStorage.setItem('startDate-answer', '12/8');
      localStorage.setItem('endDate-answer', '12/10');

    } else{
      document.getElementById('endDateAns').value = '';
    }
  } else{
    document.getElementById('startDateAns').value = '';
  }
}

function bike_func(){
  var answer = document.getElementById('bikeAns').value.toLowerCase();
  if ((answer == 'bike') || (answer == 'mountain bike')) {
    document.getElementById('bikeDiv').innerHTML = '<p class="info-text" style="padding:1rem 0 2rem">You just got another piece to the puzzle. This clue has been saved to the <span class="clue-text">Clue Bank</span>!</p><button id="light-btn" onclick="next_sleep_func()" class="hollow button alert info-btn">Next Clue <i class="fa fa-bicycle" aria-hidden="true"></i></button>';
    localStorage.setItem('bike-answer', answer);

  } else{
    document.getElementById('bikeAns').value = '';
  }
}

function sleep_func(){
  var answer = document.getElementById('sleepAns').value.toLowerCase();
  if ((answer == 'nazareth') || (answer == 'nasarat')) {
    document.getElementById('sleepDiv').innerHTML = '<p class="info-text" style="padding:1rem 0 2rem">You just got another piece to the puzzle. This clue has been saved to the <span class="clue-text">Clue Bank</span>!</p><button id="light-btn" onclick="exit_func()" class="hollow button alert info-btn">Next <i class="fa fa-bicycle" aria-hidden="true"></i></button>';
    localStorage.setItem('sleep-answer', answer);

  } else{
    document.getElementById('sleepAns').value = '';
  }
}

var i;

if (localStorage) {
  var retrievedObject = localStorage.getItem('lights-answer');
  var p = document.createElement('p');
  p.innerHTML = retrievedObject
  document.getElementById('lightClue').appendChild(p);
  var retrievedObject = localStorage.getItem('lat-answer');
  var p = document.createElement('p');
  if (localStorage.getItem("lat-answer") !== null) {
    p.innerHTML = 'Lat: ' + retrievedObject;
  }
  document.getElementById('locationClue').appendChild(p);
  var retrievedObject = localStorage.getItem('long-answer');
  var p = document.createElement('p');
  if (localStorage.getItem("long-answer") !== null) {
    p.innerHTML = 'Long: ' + retrievedObject;
  }
  document.getElementById('locationClue').appendChild(p);
  var retrievedStart = localStorage.getItem('startDate-answer');
  var retrievedEnd = localStorage.getItem('endDate-answer');
  var p = document.createElement('p');
  if (localStorage.getItem("startDate-answer") !== null) {
    p.innerHTML = 'Date: ' + retrievedStart + ' - ' + retrievedEnd;
  }
  document.getElementById('dateClue').appendChild(p);
  var retrievedObject = localStorage.getItem('bike-answer');
  var p = document.createElement('p');
  p.innerHTML = retrievedObject
  document.getElementById('bikeClue').appendChild(p);
  var retrievedObject = localStorage.getItem('sleep-answer');
  var p = document.createElement('p');
  p.innerHTML = retrievedObject
  document.getElementById('sleepClue').appendChild(p);
}
