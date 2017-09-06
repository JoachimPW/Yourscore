
// Button - add to favorite //

$('.add').click( function(){
    $(this).find('i').toggleClass('glyphicon-star-empty').toggleClass('glyphicon-arrow-left');
});

$('#menu-toggle').click( function(){
    $(this).find('i').toggleClass('glyphicon-arrow-right').toggleClass('glyphicon-arrow-left');
});

// The basic check
if(document.readyState === 'complete') {
    // good to go!
}


/*function copytable() {
  var source = document.getElementsByClassName('TableB');
  var destination = document.getElementsByClassName('urgames');
  var copy = source.cloneNode(true);
  copy.class = 'urgames';

  /* you can change what you want already here, e.g: 
  [].forEach.call(copy.querySelectorAll('td'), function(item, index) {
    switch (item.textContent.trim()) {
     
    }
  });

  destination.parentNode.replaceChild(copy, destination);
}

function deleteTableB() {
  var tableB = document.getElementById('TableB');
  tableB.parentNode.removeChild(tableB);
} */


$(document).ready(function() {
  $(".favourite").click(function() {
    var html = $(this).closest("tr").clone().find('td:last').remove().end().prop('outerHTML');
    $(".yourgames").append(html);
  });
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}
