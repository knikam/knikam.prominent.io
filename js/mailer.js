function sendmail() { 
    Email.send({ 
      Host: "smtp.gmail.com", 
      Username: "mitramandali1999@gmail.com", 
      Password: "Googlebaba", 
      To: `${id}`, 
      From: "mitramandali1999@gmail.com", 
      Subject: "Sending Email using javascript", 
      Body: "Well that was easy!!", 
    }) 
      .then(function (message) { 
        alert("mail sent successfully") 
      }); 
  } 