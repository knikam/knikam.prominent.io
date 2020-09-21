<?php
           // UserInput Test
            function test_input($data) {
              $data = trim($data);
              $data = stripslashes($data);
              $data = htmlspecialchars($data);

              return $data;
            } 

			if(isset($_POST['sendopt'])) {
				require('textlocal.class.php');
				require('credential.php');
        $t_mobile= test_input($_POST['mobile']);
              if(mysqli_num_rows($query)==1)
              {
                  $textlocal = new Textlocal(false, false, API_KEY);

                        // You can access MOBILE from credential.php
                // $numbers = array(MOBILE);
                        // Access enter mobile number in input box
                        $numbers = array($_POST['mobile']);

                $sender = 'TXTLCL';
                $message = "Thank you";
                echo "hi";


                try {
                    $result = $textlocal->sendSms($numbers, $message, $sender);
                    
                } catch (Exception $e) {
                  echo 'Message: ' .$e->getMessage();
                }

      }
    }
		?>