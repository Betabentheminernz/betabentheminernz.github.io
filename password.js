var password;
var pass1="4356";
password=prompt('Enter password to view page. ', ' ');
if (password==pass1)
    alert('Correct password')
    else
    {
        window.location="/incorrectpassword.html"
    }