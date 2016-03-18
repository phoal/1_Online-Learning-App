var show = false;
var toggle1 = false;
var toggle2 = false;
window.onload = function() {
  function dismiss() {
    if (toggle1) {
      document.getElementById('dropdown').removeAttribute('class');
      document.getElementById('dropdown').setAttribute('class', 'dropdown-menu dropdown-left');
      toggle1 = false;
    } else if (toggle2) {
      document.getElementById('dropdown-si').removeAttribute('class');
      document.getElementById('dropdown-si').setAttribute('class', 'dropdown-menu dropdown-left lg');
      toggle2 = false;
    }
  }
  function display() {
    document.getElementsByTagName("body")[0].removeAttribute('class');
    if (!show) {
    document.getElementsByTagName("body")[0].setAttribute('class', 'expanded');
    document.getElementById("arrow").setAttribute('class', 'fa fa-arrow-left');
    show = true;
  } else {
    document.getElementsByTagName("body")[0].removeAttribute('class');
    document.getElementById("arrow").setAttribute('class', 'fa fa-arrow-right');
    show = false;
  }
}
  function toggle(e) {
    e.stopPropagation();
    document.getElementById('dropdown').removeAttribute('class');
    if (!toggle1) {
      document.getElementById('dropdown').setAttribute('class', 'dropdown-menu dropdown-left expanded');
    } else {
      document.getElementById('dropdown').setAttribute('class', 'dropdown-menu dropdown-left');
    }
    toggle1 = !toggle1;
  }
  function toggleSi(e) {
    e.stopPropagation();
    document.getElementById('dropdown-si').removeAttribute('class');
    if (!toggle2) {
      document.getElementById('dropdown-si').setAttribute('class', 'dropdown-menu dropdown-left lg expanded');
    } else {
      document.getElementById('dropdown-si').setAttribute('class', 'dropdown-menu dropdown-left lg');
    }
    toggle2 = !toggle2;
  }
  function setDone(e) {
    e.target.setAttribute('class', 'done');
  }

  document.getElementById("show").addEventListener("click", display);
  document.getElementById('toggle').addEventListener('click', toggle);
  document.getElementById('toggle-si').addEventListener('click', toggleSi);
  document.getElementsByTagName("body")[0].addEventListener('click', dismiss);

  function removeDismiss(id) {
    document.getElementById(id).addEventListener('click', function(e) {
      e.stopPropagation();
      //e.preventDefault();
    });
  }
  removeDismiss('dropdown');
  removeDismiss('dropdown-si');

  var as = document.getElementsByClassName('nav-left')[0]
                    .getElementsByTagName('a');

  for (var i = 0; i < as.length; i++)  {
    as[i].addEventListener('click', setDone);
    console.log('done');
  }
};
