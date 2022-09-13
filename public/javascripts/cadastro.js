const password = document.getElementById('password2')
const toggle = document.getElementById('toggle2');

toggle.onclick = function ()
{
  if(password.className == 'active')
  {
     password.setAttribute('type', 'text');
     toggle.className = 'fa fa-eye';
    password.className = '';
  }
  else
  {
     password.setAttribute('type', 'password');
     toggle.className = 'fa fa-eye-slash';
     password.className = 'active';
 }
}

function updatemenu()
{
    if (document.getElementById('responsive-menu').checked === true)
    {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }
    else
    {
      document.getElementById('menu').style.borderRadius = '0px';
    }
  }
