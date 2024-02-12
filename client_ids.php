<?php
$clientIds = [];
$filename = '/Applications/MAMP/htdocs/web_playground/client_ids.json';

if (file_exists($filename)) {
    $jsonStr = file_get_contents($filename);
    $clientIds = json_decode($jsonStr, true);
}
?>
