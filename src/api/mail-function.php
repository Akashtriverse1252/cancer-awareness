<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

function email($to,$name,$subject,$content,$attach = "",$addcc=""){
    $mail = new PHPMailer(true);

 //Server settings
    $mail->SMTPDebug = 0;                                 // Enable verbose debug output
    //$mail->isSMTP();                                      // Set mailer to use SMTP
   
   
       
    // $mail->Host = 'mail.dhbh.in';  // Specify main and backup SMTP servers
    // $mail->SMTPAuth = true;                               // Enable SMTP authentication
   
    // $mail->Username = 'no-reply@dhbh.in';                 // SMTP username
    // $mail->Password = 'admin@1234#@dhbh';                           // SMTP password
    // $mail->SMTPSecure = '';                            // Enable TLS encryption, `ssl` also accepted
    // $mail->Port = 587;                                    // TCP port to connect to
   
    //Recipients
    $mail->setFrom('no-reply@assurepathlabs.com', 'Assure Pathlabs');
   
   
   
    $mail->addAddress($to, $name);     // Add a recipient
    //$mail->addAddress('ellen@example.com');               // Name is optional
    //$mail->addReplyTo('info@example.com', 'Information');
   
    //$mail->addBCC('bcc@example.com');
    
    if(!empty($addcc)){
        $cc_arr = explode(",",$addcc);
        for($i=0;$i<count($cc_arr);$i++){
        $mail->addCC($cc_arr[$i]);
        }
    }

    //Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    if($attach!=""){
       
    foreach($attach as $row=>$att){
        $mail->addAttachment($att['file'], $att['name']);    // Optional name
    }
    }
    // }
    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $subject;
    $mail->Body    = $content;
    //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    if($mail->send())
        return true;
        //echo 'Mail sent! Check inbox';
    else
        return false;
        //echo 'Mail sent failed!';
}

// $to = "virendra@qstindia.com";
// $name = "virendra";
// $subject = "mail test with attachement";
// echo $content = '<p>Dear Admin,<br>We have received the feedback form. Please find the details below.</p><table width="600" border="1" style="border-collapse: collapse;"><tbody><tr><th colspan="2">Cutomer Details</th></tr><tr><td width="200px"><b>Name</b></td><td width="400px">virendra yadav</td></tr><tr><td width="200px"><b>Email</b></td><td width="400px">vickyadav97@gmail.com</td></tr><tr><td width="200px"><b>Phone</b></td><td width="400px">8178004083</td></tr><tr><th colspan="2">Home Collection Details</th></tr><tr><td width="200px"><b> Home Collection City</b></td><td width="400px">Faridabad</td></tr><tr><td width="200px"><b> Home Collection Date</b></td><td width="400px">12-10-2020</td></tr><tr><td width="200px"><b> Did the Phlebotomist reach on scheduled time ?</b></td><td width="400px">Yes</td></tr><tr><td width="200px"><b> Suggestion</b></td><td width="400px"></td></tr><tr><td width="200px"><b> Was the phlebotomist efficient and able to answer all your queries?</b></td><td width="400px">Yes</td></tr><tr><td width="200px"><b> Suggestion</b></td><td width="400px"></td></tr><tr><th colspan="2">Test Center Details</th></tr><tr><td width="200px"><b> Center Address</b></td><td width="400px"></td></tr><tr><td width="200px"><b> Center Visit Date</b></td><td width="400px">01-01-1970</td></tr><tr><td width="200px"><b> How long was the waiting time before drawing blood?</b></td><td width="400px"></td></tr><tr><td width="200px"><b> Was the Registration procedure convenient and pretest information confirmed?</b></td><td width="400px"></td></tr><tr><td width="200px"><b> Suggestion</b></td><td width="400px"></td></tr></tbody></table>';

// if(email($to,$name,$subject,$content)){
//     echo "mail sent";
// }
// else{
//     echo "not sent";
// }
?>