const stick = document.getElementById('stick');

const fN = document.getElementById(firstName); 
 const lN = document.getElementById(lastName);




  function sendEmail(e) {
    e.preventDefault();
          Email.send({
          SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
          Username: 'emmanuelojelade7@gmail.com',
          Password: '7C6E5948A9769E73D89A405A94CCAF103DF5',
          To : 'sophieivy566@gmail.com',
          From : document.getElementById('email').value,
          Subject : "New Content from rquest",
          Body : "First Name: " + fN.value
          +      "<br> Last Name: " + lN.value
          +      "<br> Email: "  + document.getElementById('email').value
          +      "<br>  Message:" +   document.getElementById('msg').value  
      }).then(
        message => alert("message sent successfully")
      );
  }