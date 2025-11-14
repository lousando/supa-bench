<?php

// Define the Fibonacci function
function fibonacci($n) {
   if ($n <= 1) {
       return $n;
   } else {
       return fibonacci($n-1) + fibonacci($n-2);
   }
}

// Generate the Fibonacci sequence up to 256
$fibSeq = '';
for ($i = 0; $i <= 32; $i++) {
   $fibSeq .= fibonacci($i) . ' ';
}

// Output the sequence
echo $fibSeq;
