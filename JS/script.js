window.onscroll = function() {scrollFunction()};

function scrollFunction()
{
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    {
        document.getElementById("navbar").style.backgroundColor = "white";
    }
    else
    {
        document.getElementById("navbar").style.backgroundColor = "transparent"
    }
}

var showText = function (target, message, index, interval) {   
    if (index < message.length) {
      $(target).append(message[index++]);
      setTimeout(function () { showText(target, message, index, interval); }, interval);
    }
  }
  $(function () {
    showText("#msg", "Hello, World!", 0, 500);   
  });