function getvalues()
{
    let hide = document.getElementById("hidediv");

    let tripd = document.getElementById("tripdis").value;
    let ga = document.getElementById("gallons").value;
    let gprice = document.getElementById("gprice").value;

    let dataresults = parseFloat(tripd / ga * gprice);

    if(tripd != "" && ga != "" && gprice != "")
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
  let r = document.createRange();
  r.selectNode(document.getElementById(id));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
}

let mybutton = document.getElementById("myBtn");

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
