<?php
include_once("mail-function.php");
$logo='https://www.assurepathlabs.com/complete-wellness-package/images/assure-logo.png';
$lp_name = "Full Body Health Checkup";
// Retrieve the JSON data from the POST request
$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);

// Validate the data
if (!isset($data['name']) || empty($data['name']) ||
    !isset($data['mobileNumber']) || empty($data['mobileNumber'])
) {
    die(json_encode(['success' => false, 'message' => 'Please fill in all required fields.']));
}

// Validate the mobile number format (10 digits)
if (!preg_match('/^[0-9]{10}$/', $data['mobileNumber'])) {
    die(json_encode(['success' => false, 'message' => 'Invalid mobile number format (should be 10 digits).']));
}

// Connect to the database (you need to replace database credentials with your own)
// $connection = mysqli_connect('localhost', 'assureadmin', 'bM(l=,k2H9a(', 'assure_db');
// if (!$connection) {
//     die(json_encode(['success' => false, 'message' => 'Database connection failed']));
// }

// Prepare the data for insertion using prepared statements
$name = mysqli_real_escape_string($connection, $data['name']);
$mobileNumber = mysqli_real_escape_string($connection, $data['mobileNumber']);

// Insert the data into the database using prepared statements
// $query = "INSERT INTO lp_enquiry (lp_name, name, mobileNumber) VALUES (?, ?, ?)";
// $stmt = mysqli_prepare($connection, $query);
// mysqli_stmt_bind_param($stmt, 'sss', $lp_name, $name, $mobileNumber);
// $result = mysqli_stmt_execute($stmt);

// Check if the insertion was successful
// if ($result) {
//     echo json_encode(['success' => true, 'message' => 'Data inserted successfully']);
// } else {
//     echo json_encode(['success' => false, 'message' => 'Data insertion failed']);
// }

// Close the database connection
// mysqli_stmt_close($stmt);
// mysqli_close($connection);

// Send SMTP Email

$subject = $lp_name. "Campaign Enquiry from Landing Page";
	$message = "<table style='width:100%;' bgcolor='#fff'>
            <tbody>co
            <tr>
            <td><br><br>
            <table style='width:100%;' cellspacing='10' cellpadding='15'
            align='center' bgcolor='#efefef'>
            <tbody>
            <tr>
            <td bgcolor='#efefef'>
            <div style='
    background: #fff;
    width: 400px;
    margin: 30px auto;
    padding: 50px;
    border: 1px solid #ddd;
'>
            <div style='border-bottom: 1px dashed #ededed;
                padding-bottom: 10px;'>
            <img src='".$logo."' border='0'  alt='logo' width='180px'>
            </div>
            
            <br> <b>Dear Admin</b>,<br>
            
           <p>We've got the new enquiry from the Landing page please check details:</p>
           <table style='width: 100%;
    border: 1px solid #ddd;
    border-collapse: collapse;'>
            
            
            <tr>
            <th colspan='2' style='border: 1px solid #ddd;
    padding: 10px 20px;
    background: #008845;
    color: #fff;'>Enquiry Details</th>
            </tr>
            <tr>
            <th style='text-align: left;
    padding: 10px 20px;
    border: 1px solid #ddd;'>Name</th><td style='text-align: left;
    padding: 10px 20px;
    border: 1px solid #ddd;'>".ucwords(strtolower($name))."</td>
            </tr>
            <tr>
            <th style='text-align: left;
    padding: 10px 20px;
    border: 1px solid #ddd;'>Mobile No.</th><td style='text-align: left;
    padding: 10px 20px;
    border: 1px solid #ddd;'>".$mobileNumber."</td>
            </tr>
            <tr>
            <th style='text-align: left;
    padding: 10px 20px;
    border: 1px solid #ddd;'>IP Address</th><td style='text-align: left;
    padding: 10px 20px;
    border: 1px solid #ddd;'>".$_SERVER['REMOTE_ADDR']."</td>
            </tr>
            <tr>
            <th style='text-align: left;
    padding: 10px 20px;
    border: 1px solid #ddd;'>DateTime</th><td style='text-align: left;
    padding: 10px 20px;
    border: 1px solid #ddd;'>".date('d-m-Y g:i A',strtotime(date('Y-m-d H:i:s')))."</td>
            </tr>
            
            
            
            
            </table>
            <p style='margin-top: 30px;
    font-size: 16px;
    color: #2d2d2d;'>
            <b>Thanks & Regards</b><br>
            Assure Pathlabs Team<br>
            </div>
            </td>
            </tr>
            </tbody>
            </table>
            <br><br></td>
            </tr>
            </tbody>
            </table>";
// $addcc="assurepathlabs@gmail.com, assurejalandhardigital@gmail.com";
$addcc="akash.triverse@gmail.com";

// $mail=email("askassurepathlabs@gmail.com","Assure Pathlabs",$subject,$message,"",$addcc);
$mail=email("deepak@triverseadvertising.com","Assure Pathlabs",$subject,$message,"",$addcc);

?>
