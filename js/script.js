
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


function hideDiv() {
    var x = document.getElementsByClassName('mid-section');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
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

// Button - add to favorite //

$(document).ready(function() {
  $(".favourite").click(function() {
    var html = $(this).closest("tr").clone().find('td:last').remove().end().prop('outerHTML');
<<<<<<< HEAD
    $(".yourgames").append(html); 
    $(".yourgames").find("td:last").closest("tr").addClass('animated lightSpeedIn');
    
});

      
    });
      


  
=======
    $(".yourgames").append(html);
    $(".yourgames").find("td:last").closest("tr").addClass('animated lightSpeedIn');

});


    });




>>>>>>> 5657ee5956839f2e38ad881049ad239668d3989c


$(document).ready(function() {
  $('.glyphicon').click(function(){
    $(this).toggleClass('glyphicon glyphicon-star-empty').toggleClass('glyphicon glyphicon-star');
  });
});
/*$(document).ready(function() {
 $('.glyphicon').click(function(){
   $(".yourgames tr:last").remove();
<<<<<<< HEAD
   }); 
   
 });*/
$("#button").click(function() {
  $('.transform').toggleClass('transform-active');
});
=======
   });

 });*/
$("#button").click(function() {
  $('.transform').toggleClass('transform-active');
});
>>>>>>> 5657ee5956839f2e38ad881049ad239668d3989c
