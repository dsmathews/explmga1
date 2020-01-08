<?php
   // Takes raw data from the request
   $json = file_get_contents('php://input');

   // Converts it into a PHP object
   $data = json_decode($json);

   echo $data;

   // data sent in header are in JSON format
   header('Content-Type: application/json');
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
   $to = "darrell.mathews@mga.edu";
   $subject = "Successful Alumni Form Data";

   
   // Email Template
   $message = "<b>Name : </b>".$fname.$lname.$suff."<br>\n";
   $message .= "<b>Phone Number : </b>".$phone."<br>\n";
   $message .= "<b>Email Address : </b>".$email."<br>\n";
   $message .= "<b>Graduation Year : </b>".$gradYear."<br>\n";
   $message .= "<b>Degree : </b>".$degree."<br>\n";
   $message .= "<b>Job Title : </b>".$jobTitle."<br>\n";
   $message .= "<b>Employer : </b>".$employer."<br>\n";
   $message .= "<b>Photo : </b><img src=".$photo."><br>\n";
   $message .= "<b>Job Description : </b>".$jobDescriptiton."<br>\n";
   $message .= "<b>How did MGA help me be to be successful? : </b>".$receivedFromMGA."<br>\n";
   $message .= "<b>Biography : </b>".$biography."<br>\n";
   $message .= "<b>Consent to use of information : </b>".$agreement."<br>\n";
   
   $message = wordwrap($message, 70);
   
   $header = "From:".$email."\r\n";
   $header .= "MIME-Version: 1.0\r\n";
   $header .= "Content-type: text/html\r\n";
   $retval = mail($to,$subject,$message,$header);
   // message Notification
   if( $retval == true ) {
      echo json_encode(array(
         'success'=> true,
         'message' => $to,$subject,$message,$header
      ));
   }else {
      echo "<pre>";
      print_r($_POST);
      echo "</pre>";
      // echo json_encode(array(
      //    'error'=> true,
      //    'message' => $to,$subject,$message,$header

      // ));
   };
