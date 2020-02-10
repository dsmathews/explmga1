<?php
   // takes the value from variables and Post the data
   $fname = $_POST["firstName"];
   $lname = $_POST['lastName'];
   $suff = $_POST['suffix'];
   $phone = $_POST['phone'];
   $email = $_POST['email'];
   $gradYear = $_POST['gradYear'];
   $degree = $_POST['degreeConcentration'];
   $jobTitle = $_POST['jobTitle'];
   $employer = $_POST['employer'];
   $photo = $_POST['photo'];
   $jobDescriptiton = $_POST['jobDescription'];
   $receivedFromMGA = $_POST['receivedFromMGA'];
   $biography = $_POST['biography'];
   $agreement = $_POST['agreement']; 
   $to = "dsmathews@icloud.com";
   $subject = "Successful Alumni Form Data";

   
   // Email Template
   $message = "<b>Name: </b>".$fname .$lname .$suff."\r\n";
   $message .= "<b>Phone Number: </b>".$phone."\r\n";
   $message .= "<b>Email Address : </b>".$email."\r\n";
   $message .= "<b>Graduation Year : </b>".$gradYear."\r\n";
   $message .= "<b>Degree : </b>".$degree."\r\n";
   $message .= "<b>Job Title : </b>".$jobTitle."\r\n";
   $message .= "<b>Employer : </b>".$employer."\r\n";
   $message .= "<b>Photo : </b><img src=".$photo."><br>\n";
   $message .= "<b>Job Description : </b>".$jobDescriptiton."\r\n";
   $message .= "<b>How did MGA help me be to be successful? : </b>".$receivedFromMGA."\r\n";
   $message .= "<b>Biography : </b>".$biography."\r\n";
   $message .= "<b>Consent to use of information : </b>".$agreement."\r\n";
   
   $messages = wordwrap($message, 70, "\r\n");
   
   $headers = "From: $fname. $lname\r\n";
   $headers .="Reply-to: $email. \r\n";
   $headers .= "X-Mailer: PHP/" . phpversion();
   $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
   $headers .= "MIME-Version: 1.0\r\n";
   $retval = mail($to,$subject,$message,$headers);
   if( $retval == true ) {
      header('Location: thank-you.html');
   } else {
      echo "Error sending mail.";
   }
   
   // message Notification
