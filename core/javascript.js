function getvalues()
{
    var hide = document.getElementById("hidediv");

    var tripd = document.getElementById("tripdis").value;
    var ga = document.getElementById("gallons").value;
    var gprice = document.getElementById("gprice").value;

    var dataresults = parseFloat(tripd / ga * gprice);

    if(tripd != "" && tripd != "" && gprice != "")
    {
      if(hide.style.display === "none") 
      {
        hide.style.display = "block";
      } 
      // else 
      // {
      //   hide.style.display = "none";
      // }
      document.getElementById('dataresults').innerHTML = '$' + dataresults.toFixed(2)
    }
    else
      console.log("inputs must be filled");
}

function CopyToClipboard(id)
{
  var r = document.createRange();
  r.selectNode(document.getElementById(id));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
}

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}