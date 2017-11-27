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

// Set the date we're counting down to
var countDownDate = new Date("Dec 1, 2017 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  var daysCont = '<div class="time-cont"><p class="time-header">Days</p><p>'+ days +'</p></div>';
  var hoursCont = '<div class="time-cont"><p class="time-header">Hours</p><p>'+ hours +'</p></div>';
  var minutesCont = '<div class="time-cont"><p class="time-header">Minutes</p><p>'+ minutes +'</p></div>';
  var secondsCont = '<div class="time-cont"><p class="time-header">Seconds</p><p>'+ seconds +'</p></div>';

  document.getElementById("countdown").innerHTML = daysCont + hoursCont + minutesCont + secondsCont;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

function light_func(){
  var answer = document.getElementById('light-ans').value.toLowerCase();
  switch (answer) {
    case 'ptrdape':
      document.getElementById('lightDiv').innerHTML = '<p class="info-text">The scrambled letters have been saved to the <span class="clue-text">Clue Bank</span>!</p> <button id="light-btn" onclick="next_loc_func()" class="hollow button alert info-btn">Next Clue <i class="fa fa-bicycle" aria-hidden="true"></i></button>';
      localStorage.setItem('lights-answer', answer);

      break;
    case 'trapped':
      document.getElementById('lightDiv').innerHTML = '<p class="info-text">Congratulations, you "correctly" guessed the first piece to the puzzle. This HINT has been saved to the <span class="clue-text">Clue Bank</span>!</p><button id="light-btn" onclick="next_loc_func()" class="hollow button alert info-btn">Next Clue <i class="fa fa-bicycle" aria-hidden="true"></i></button>';
      localStorage.setItem('lights-answer', answer);

      break;
    default:
      document.getElementById('light-ans').value = '';
  }
}

function location_func(){
  var lat = document.getElementById('latLocAns').value;
  var long = document.getElementById('longLocAns').value;
  if ((lat == '40.6909n') || (lat == '40.6909N') || (lat == '40.6909 N') || (lat == '40.6909 n')) {
    if ((long == '74.9216w') || (long == '74.9216W') || (long == '74.9216 W') || (long == '74.9216 w') || (long == '74.9216west') || (long == '74.9216 west')) {
      document.getElementById('latLocDiv').innerHTML = '';
      document.getElementById('longLocDiv').innerHTML = '<p class="info-text" style="padding:1rem 0 2rem">You have successfully found the coordinates to the approximate location of your adventure! This clue has been saved to the <span class="clue-text">Clue Bank</span>!</p><button id="light-btn" onclick="next_date_func()" class="hollow button alert info-btn">Next Clue <i class="fa fa-bicycle" aria-hidden="true"></i></button>';
      localStorage.setItem('lat-answer', lat);
      localStorage.setItem('long-answer', long);
      add_page_link(1);
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
    if ((endDate == '12/10') || (endDate == 'December 10th') || (endDate == 'December 10') || (endDate == 'december 10') || (endDate == 'Dec 10th') || (endDate == 'Dec 10') || (endDate == 'dec 10th')) {
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
  if ((answer == 'bike') || (answer == 'mountain bike') || (answer == 'mountain bikes') || (answer == 'bikes')) {
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
    localStorage.setItem('finished', 'finished');
  } else{
    document.getElementById('sleepAns').value = '';
  }
}

function add_page_link(pageNum){
  var pageCont = $('#clueBank');
  var childCont = pageCont.children();
  var desiredCont = childCont.slice(0,pageNum + 1);
  console.log(desiredCont);
  desiredCont.each(function(index){
    var htmlFileNames = ['light.html', 'coors.html', 'famous.html', 'et.html', 'jesus.html'];
    var wrapHtml = '<a href="' + htmlFileNames[index] + '"></a>';
    $(this).wrap(wrapHtml);
  });
}

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
