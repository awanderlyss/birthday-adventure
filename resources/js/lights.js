(function lights(){
  var messarray = " ptrdape";

  var messarray = messarray.replace(/ /gi, "6");
  messarray = messarray.replace(/(\S{1})/g,"$16");
  console.log(messarray);
   var images = messarray.split("");
      var links = ["http://www.cockeyed.com","http://www.cockeyed.com","http://www.cockeyed.com"];
      var i = 0;
      var renew = setInterval(function(){
          if(images.length == i){
              i = 0;
          }
          else {
          document.getElementById("bannerImage").src = "resources/images/lights/alphabet" + images[i] + ".jpg";
          // document.getElementById("bannerLink").href = link;
          document.getElementById("bannerImage").title = images[i];
          i++;

      }
    },600);
})();
