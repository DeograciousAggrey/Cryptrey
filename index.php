<?php 


error_reporting(0);
//require_once'jsonRPCClient.php';
//require_once'auth.php';



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><?php echo $script_title; ?></title>
   <link rel="shortcut icon" href="img\favicon-16x16.png">
   <script src="js/jquery-1.9.1.js"></script>
   <script type="text/javascript">
       $(document).ready(function () {
        setInterval(function () {
            $("#orderspast").load("ajax.php?id=orderspast-<?php echo $BTC; ?>");
            $("#buyorders").load("ajax.php?id=buyorders-<?php echo $BTC; ?>");
            $("#sellorders").load("ajax.php?id=sellorders-<?php echo $BTC; ?>");
            $(".count").load("online.php");
            $("#stats").load("ajax.php?id=stats");
        }, 60000);
        $("#buy-sells").load("ajax.php?id=buy-sells");
    });
    </script>
   <script type="text/javascript">
      function buycalculator() {
         m = document.getElementById('buy-quantity').value;
         n = document.getElementById('buy-rate').value;
         if(m=='') { m = 0; }
         if(n=='') { n = 0; }
         o = m*n;
         g = o.toFixed(8);
         b = o/100;
         c = b/5;
         l = c.toFixed(8);
         document.getElementById('buy-subtotal').innerHTML = g;
         document.getElementById('buy-fee').innerHTML = l;
      }
      function sellcalculator() {
         x = document.getElementById('sell-quantity').value;
         y = document.getElementById('sell-rate').value;
         if(x=='') { x = 0; }
         if(x=='') { x = 0; }
         z = x*y;
         r = z.toFixed(8);
         e = z/100;
         f = e/5;
         s = f.toFixed(8);
         document.getElementById('sell-subtotal').innerHTML = r;
         document.getElementById('sell-fee').innerHTML = s;
      }
      function setbuyamounts(text) {
         document.getElementById('buy-quantity').value = text;
         buycalculator();
      }
      function setbuyrates(text) {
         document.getElementById('buy-rate').value = text;
         buycalculator();
      }
      function setsellamounts(text) {
         document.getElementById('sell-quantity').value = text;
         sellcalculator();
      }
      function setsellrates(text) {
         document.getElementById('sell-rate').value = text;
         sellcalculator();
      }
      function setbuyrateamounts(text) {
         pla = document.getElementById('buy-rate').value;
         plb = text/pla;
         plc = plb.toFixed(8);
         document.getElementById('buy-quantity').value = plc;
         buycalculator();
      }
   </script>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>



</body>
</html>