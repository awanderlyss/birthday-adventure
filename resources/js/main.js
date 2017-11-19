function enter_func(){
  location.href = "light.html";
}

function next_loc_func(){
  location.href = "location.html";
}

function next_date_func(){
  location.href = "date.html";
}

function next_bike_func(){
  location.href = "bike.html";
}

function light_func(){
  var answer = document.getElementById('light-ans').value.toLowerCase();
  switch (answer) {
    case 'ptrdape':
      document.getElementById('lightDiv').innerHTML = '<p class="info-text">The scrambled letters have been saved to the <span class="clue-text">Clue Bank</span>!</p> <button id="light-btn" onclick="next_loc_func()" class="hollow button alert info-btn">Next Clue <i class="fa fa-bicycle" aria-hidden="true"></i></button>';
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

function location_func(){
  var lat = document.getElementById('latLocAns').value;
  var long = document.getElementById('longLocAns').value;
  if ((lat == '40.6909n') || (lat == '40.6909N') || (lat == '40.6909 N') || (lat == '40.6909 n')) {
    if ((long == '74.9216w') || (long == '74.9216W') || (long == '74.9216 W') || (long == '74.9216 w')) {
      document.getElementById('latLocDiv').innerHTML = '';
      document.getElementById('longLocDiv').innerHTML = '<p class="info-text" style="padding:1rem 0 2rem">You have successfully found the coordinates to the approximate location of your adventure! This clue has been saved to the <span class="clue-text">Clue Bank</span>!</p><button id="light-btn" onclick="next_date_func()" class="hollow button alert info-btn">Next Clue <i class="fa fa-bicycle" aria-hidden="true"></i></button>';
      localStorage.setItem('lat-answer', lat);
      localStorage.setItem('long-answer', long);
      var retrievedObject = localStorage.getItem('lat-answer');
      document.getElementById('clueBank').append(retrievedObject);
      var retrievedObject = localStorage.getItem('long-answer');
      document.getElementById('clueBank').append(retrievedObject);
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
  if ((startDate == '12/8') || (startDate == '12/08') || (startDate == 'December 8') || (startDate == 'December 8th') || (startDate == 'Dec 8') || (startDate == 'Dec 8th')) {
    if ((endDate == '12/10') || (endDate == 'December 10th') || (endDate == 'December 10') || (endDate == 'Dec 10th') || (endDate == 'Dec 10')) {
      document.getElementById('startDateDiv').innerHTML = '';
      document.getElementById('endDateDiv').innerHTML = '<p class="info-text" style="padding:1rem 0 2rem">You have successfully found the coordinates to the approximate location of your adventure! This clue has been saved to the <span class="clue-text">Clue Bank</span>!</p><button id="light-btn" onclick="next_bike_func()" class="hollow button alert info-btn">Next Clue <i class="fa fa-bicycle" aria-hidden="true"></i></button>';
      localStorage.setItem('startDate-answer', startDate);
      localStorage.setItem('endDate-answer', endDate);
      var retrievedObject = localStorage.getItem('startDate-answer');
      document.getElementById('clueBank').append(retrievedObject);
      var retrievedObject = localStorage.getItem('endDate-answer');
      document.getElementById('clueBank').append(retrievedObject);
    } else{
      document.getElementById('endDateAns').value = '';
    }
  } else{
    document.getElementById('startDateAns').value = '';
  }
}
