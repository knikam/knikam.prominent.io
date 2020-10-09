function checkAll(e,value) {
    var checkboxes = document.getElementsByName('check');
  
    if (e.checked) {
      for (var i = 0; i < value; i++) { 
        checkboxes[i].checked = true;
      }
    } 
    else {
        
      for (var i = value; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
        //console.log(i);
        
      }
     
    } 
    
  }
  function grandtotal(e){
    var checkboxes = document.getElementsByName('check');
    var b=0; 
    for(var i = 0; i<checkboxes.length;i++){
        if(checkboxes[i].checked  == true){
            b=b+1;
        }
    }
    b=b+1;
    const btn=document.getElementById("proceedbtn");
    if(b == 1){
        document.write(`<center style="
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;">
       <img src="images/logo.png" alt="Image" style=" position: relative;
        font-weight: 900;
        font-size: 1.3rem; ">
        <h1>Prominent English Institute</h1>
        <h3>Secure Payment Gateaway....</h3>Press This button to proceed!<br> :<form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_FcQr9WUAFE0FJi"> </script> </form></center>`);
   
    }
    else if(b == 2){
        document.write(`<center style="
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;">
       <img src="images/logo.png" alt="Image" style=" position: relative;
        font-weight: 900;
        font-size: 1.3rem; ">
        <h1>Prominent English Institute</h1>
        <h3>Secure Payment Gateaway....</h3>Press This button to proceed!<br> <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_Fcu5Its04mFZ38"> </script> </form>        </center>`);
   
    }
    else if(b == 3){
        document.write(`<center style="
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;">
       <img src="images/logo.png" alt="Image" style=" position: relative;
        font-weight: 900;
        font-size: 1.3rem; ">
        <h1>Prominent English Institute</h1>
        <h3>Secure Payment Gateaway....</h3>Press This button to proceed!<br><form><script src="https://cdn.razorpay.com/static/widget/payment-button.js" data-payment_button_id="pl_Fcu7s8CkNEQtPB"> </script> </form>
        </center>`);
   
    }
    else if(b == 4){
        document.write(`<center style="
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;">
       <img src="images/logo.png" alt="Image" style=" position: relative;
        font-weight: 900;
        font-size: 1.3rem; ">
        <h1>Prominent English Institute</h1>
        <h3>Secure Payment Gateaway....</h3>Press This button to proceed!<br> <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_FcuGPLXXIQ4F4i"> </script> </form>
        </center>`);
   
    }
    else if(b == 5){
        document.write(`<center style="
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;">
       <img src="images/logo.png" alt="Image" style=" position: relative;
        font-weight: 900;
        font-size: 1.3rem; ">
        <h1>Prominent English Institute</h1>
        <h3>Secure Payment Gateaway....</h3>Press This button to proceed!<br><form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_FcqoUFuvew33gZ"> </script> </form>
        </center>`);
   
    }

  }

  function grandtotalInnovator(e){
    var checkboxes = document.getElementsByName('check');
    var b=0; 
    for(var i = 0; i<checkboxes.length;i++){
        if(checkboxes[i].checked  == true){
            b=b+1;
        }
    }
    b=b+1;
    const btn=document.getElementById("proceedbtn");
    if(b == 1){
        document.write(`<center style="
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;">
       <img src="images/logo.png" alt="Image" style=" position: relative;
        font-weight: 900;
        font-size: 1.3rem; ">
        <h1>Prominent English Institute</h1>
        <h3>Secure Payment Gateaway....</h3>Press This button to proceed!<br><form><script src="https://cdn.razorpay.com/static/widget/payment-button.js" data-payment_button_id="pl_FcR9yLRnROBBbW"> </script> </form>
        </center>`);
   
    }
    else if(b == 2){

        document.write(`<center style="
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;">
       <img src="images/logo.png" alt="Image" style=" position: relative;
        font-weight: 900;
        font-size: 1.3rem; ">
        <h1>Prominent English Institute</h1>
        <h3>Secure Payment Gateaway....</h3>Press This button to proceed!<br><form><script src="https://cdn.razorpay.com/static/widget/payment-button.js" data-payment_button_id="pl_FcuKwaXyNwrleD"> </script> </form>
        </center>`);
   
    }
    else if(b == 3){

        document.write(`<center style="
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;">
       <img src="images/logo.png" alt="Image" style=" position: relative;
        font-weight: 900;
        font-size: 1.3rem; ">
        <h1>Prominent English Institute</h1>
        <h3>Secure Payment Gateaway....</h3>Press This button to proceed!<br><form><script src="https://cdn.razorpay.com/static/widget/payment-button.js" data-payment_button_id="pl_FcuQQPAXX47eMd"> </script> </form>
        </center>`);
   
    }
    else if(b == 4){

        document.write(`<center style="
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;">
       <img src="images/logo.png" alt="Image" style=" position: relative;
        font-weight: 900;
        font-size: 1.3rem; ">
        <h1>Prominent English Institute</h1>
        <h3>Secure Payment Gateaway....</h3>Press This button to proceed!<br> <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_FcuTyAL7XsIFlH"> </script> </form>
        </center>`);
   
    }
    

  }




  function grandtotalStimulator(e){
    var checkboxes = document.getElementsByName('check');
    var b=0; 
    for(var i = 0; i<checkboxes.length;i++){
        if(checkboxes[i].checked  == true){
            b=b+1;
        }
    }
    b=b+1;
    const btn=document.getElementById("proceedbtn");
    if(b == 1){
        document.write(`<center style="
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;">
       <img src="images/logo.png" alt="Image" style=" position: relative;
        font-weight: 900;
        font-size: 1.3rem; ">
        <h1>Prominent English Institute</h1>
        <h3>Secure Payment Gateaway....</h3>Press This button to proceed!<br><form><script src="https://cdn.razorpay.com/static/widget/payment-button.js" data-payment_button_id="pl_FcRCkfWiQk5bWL"> </script> </form>
        </center>`);
   
    }
    else if(b == 2){

        document.write(`<center style="
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;">
       <img src="images/logo.png" alt="Image" style=" position: relative;
        font-weight: 900;
        font-size: 1.3rem; ">
        <h1>Prominent English Institute</h1>
        <h3>Secure Payment Gateaway....</h3>Press This button to proceed!<br><form><script src="https://cdn.razorpay.com/static/widget/payment-button.js" data-payment_button_id="pl_Fcua6DNgrH97vU"> </script> </form>
        </center>`);
   
    }
    else if(b == 3){

        document.write(`<center style="
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;">
       <img src="images/logo.png" alt="Image" style=" position: relative;
        font-weight: 900;
        font-size: 1.3rem; ">
        <h1>Prominent English Institute</h1>
        <h3>Secure Payment Gateaway....</h3>Press This button to proceed!<br> <form><script src="https://cdn.razorpay.com/static/widget/payment-button.js" data-payment_button_id="pl_FcucERS5pJyumZ"> </script> </form>
        </center>`);
   
    }

  }


  function grandtotalProminent(e){
    var checkboxes = document.getElementsByName('check');
    var b=0; 
    for(var i = 0; i<checkboxes.length;i++){
        if(checkboxes[i].checked  == true){
            b=b+1;
        }
    }
    b=b+1;
    const btn=document.getElementById("proceedbtn");
    if(b == 1){
        document.write(`<center style="
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;">
       <img src="images/logo.png" alt="Image" style=" position: relative;
        font-weight: 900;
        font-size: 1.3rem; ">
        <h1>Prominent English Institute</h1>
        <h3>Secure Payment Gateaway....</h3>Press This button to proceed!<br><form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_FcRd3NVlJ91z2w"> </script> </form>
        </center>`);
   
    }
    else if(b == 2){

        document.write(`<center style="
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;">
       <img src="images/logo.png" alt="Image" style=" position: relative;
        font-weight: 900;
        font-size: 1.3rem; ">
        <h1>Prominent English Institute</h1>
        <h3>Secure Payment Gateaway....</h3>Press This button to proceed!<br><form><script src="https://cdn.razorpay.com/static/widget/payment-button.js" data-payment_button_id="pl_FcudcBjaBkbzUL"> </script> </form>
        </center>`);
   
    }

  }

  function grandtotalPersonality(e){
   
    const btn=document.getElementById("proceedbtn");
   
        document.write(`<center style="
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;">
       <img src="images/logo.png" alt="Image" style=" position: relative;
        font-weight: 900;
        font-size: 1.3rem; ">
        <h1>Prominent English Institute</h1>
        <h3>Secure Payment Gateaway....</h3>Press This button to proceed!<br><form><script src="https://cdn.razorpay.com/static/widget/payment-button.js" data-payment_button_id="pl_FcqeyDisXoaxg6"> </script> </form>
        </center>`);
   
    
  }

  function grandtotalDigital(e){
   
    const btn=document.getElementById("proceedbtn");
   
        document.write(`<center style="
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;">
       <img src="images/logo.png" alt="Image" style=" position: relative;
        font-weight: 900;
        font-size: 1.3rem; ">
        <h1>Prominent English Institute</h1>
        <h3>Secure Payment Gateaway....</h3>Press This button to proceed!<br><form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_FdMz5F6iKXrqxQ"> </script> </form>
        </center>`);
   
    
  }



  function grandtotalInterview(e){
   
    const btn=document.getElementById("proceedbtn");
   
        document.write(`<center style="
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;">
       <img src="images/logo.png" alt="Image" style=" position: relative;
        font-weight: 900;
        font-size: 1.3rem; ">
        <h1>Prominent English Institute</h1>
        <h3>Secure Payment Gateaway....</h3>Press This button to proceed!<br><form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_FdN1nVrGSNwzBB"> </script> </form>
        </center>`);
   
    
  }

 
  function grandtotalVocab(e){
   
    const btn=document.getElementById("proceedbtn");
   
        document.write(`<center style="
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;">
       <img src="images/logo.png" alt="Image" style=" position: relative;
        font-weight: 900;
        font-size: 1.3rem; "><br>
        <h1>Prominent English Institute</h1><br>
        <h3>Secure Payment Gateaway....</h3><br>Press This button to proceed!<br> <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_FdMZ6rHga0RoMG"> </script> </form>
        </center>`);
   
    
  }




  function grandtotalEssentialSingle(e){
   
    const btn=document.getElementById("proceedbtn");
   
        document.write(`<center style="
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;">
       <img src="images/logo.png" alt="Image" style=" position: relative;
        font-weight: 900;
        font-size: 1.3rem; ">
        <h1>Prominent English Institute</h1>
        <h3>Secure Payment Gateaway....</h3>Press This button to proceed!<br><form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_FcQr9WUAFE0FJi"> </script> </form>
        </center>`);
   
    
  }

  function grandtotalInnovatorSingle(e){
   
    const btn=document.getElementById("proceedbtn");
   
        document.write(`<center style="
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;">
       <img src="images/logo.png" alt="Image" style=" position: relative;
        font-weight: 900;
        font-size: 1.3rem; ">
        <h1>Prominent English Institute</h1>
        <h3>Secure Payment Gateaway....</h3>Press This button to proceed!<br><form><script src="https://cdn.razorpay.com/static/widget/payment-button.js" data-payment_button_id="pl_FcR9yLRnROBBbW"> </script> </form>
        </center>`);
   
    
  }

  function grandtotalStimulatorSingle(e){
   
    const btn=document.getElementById("proceedbtn");
   
        document.write(`<center style="
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;">
       <img src="images/logo.png" alt="Image" style=" position: relative;
        font-weight: 900;
        font-size: 1.3rem; ">
        <h1>Prominent English Institute</h1>
        <h3>Secure Payment Gateaway....</h3>Press This button to proceed!<br><form><script src="https://cdn.razorpay.com/static/widget/payment-button.js" data-payment_button_id="pl_FcRCkfWiQk5bWL"> </script> </form>
        </center>`);
   
    
  }


  function grandtotalProminentSingle(e){
   
    const btn=document.getElementById("proceedbtn");
   
        document.write(`<center style="
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;">
       <img src="images/logo.png" alt="Image" style=" position: relative;
        font-weight: 900;
        font-size: 1.3rem; ">
        <h1>Prominent English Institute</h1>
        <h3>Secure Payment Gateaway....</h3>Press This button to proceed!<br><form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_FcRd3NVlJ91z2w"> </script> </form>
        </center>`);
   
    
  }





  