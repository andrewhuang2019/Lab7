<?php

$number = $_POST['number'];

for ($x = 0; $x <= $number; $x++){
    
    if ($x == 0){
        echo "<table border=1><tr><td></td>";
        for ($y = 1; $y <= $number; $y++){
            echo "<td>$y</td>";
        }
        echo "</tr>";

        continue;

    }


    echo "<tr>";

    for ($y = 0; $y <= $number; $y++){
        
        if ($y == 0){
            echo "<td>$x</td>";
        } else {
            echo "<td>", $x * $y, "</td>";
        }
    }

    echo "</tr>";
}

?>