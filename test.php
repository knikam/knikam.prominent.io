<?php
if(isset($_POST['submit'])){
	$mobile='91'.$_POST['mobile'];
	
	
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];
        
        
        $thk = "Thank you for reaching out us. We will get in touch with you soon.";
        
        $txt = "Name : $name \n Email-Id : $email \n Phone no : $mobile \n Message : $message ";
        
        $t = "Name : $name \n Email-Id : $email \n Phone no : $mobile  \n Message : $message \n\n\n$thk";
        
        function email_validation($str) { 
            return (!preg_match( "^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$^", $str)) 
                ? FALSE : TRUE; 
        } 
        
        function phonevalidate($phone) {
            return (!preg_match('/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/', $phone))
                ? FALSE : TRUE; 
        }
        
        
        
        
        if (empty($name) || empty($email) || empty($message))
        {
        echo ('Please fill all the fields');
        return;
        }
        else if(!email_validation("$email")) { 
            echo "Invalid email address."; 
            return;
        } 
        else if(!phonevalidate($mobile))
        {
            echo "Invalid phone number."; 
            return;
        }
        
        else
        {
            mail($email,"Course Enquiry", $t);
        mail("************@gmail.com", "Course Enquiry", $txt, "From: $name < $email>");
        
        echo '<script type="text/javascript">'; 
        echo 'alert("Your Message has been sent successfully");';
        echo 'window.location= "index.html";';
         echo '</script>';
        }
	
	
	
	
	
	
	
	
	$apiKey = urlencode('kMYxhH7NETo-UEOEy3XDwdnvijaM89xIu2PcB3ZSj2');
	$numbers = array($mobile);
	$sender = urlencode('TXTLCL');
	$message = rawurlencode('Thank You for Contacting SG Multimedia & Tech
for more details contact +91 9762257535 / +91 9145733569');
	$numbers = implode(',', $numbers);
 	$data = array('apikey' => $apiKey, 'numbers' => $numbers, "sender" => $sender, "message" => $message);
 	$ch = curl_init('https://api.textlocal.in/send/');
	curl_setopt($ch, CURLOPT_POST, true);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$response = curl_exec($ch);
	curl_close($ch);
  header("Location:index.html");
}	
?>





