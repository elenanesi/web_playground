<?php
    $clientIds = [];
    $filename = 'client_ids.json';

    if (file_exists($filename)) {
        $jsonStr = file_get_contents($filename);
        $clientIds = json_decode($jsonStr, true);
    }
?>

<!DOCTYPE html>
<html>
<head>
    <title>Home</title>
    <link rel="stylesheet" type="text/css" href="FairyStyleSheet.css">

    <!-- set GA cookies to simulate returningUsers -->
    <script src="/demo_project/returningUsers.js"></script>
    <script src="/demo_project/consent.js"></script>
    <script src="/demo_project/analytics.js"></script>
        <script type="text/javascript">
    window.onload = function() {
        try {
            // Get the query string from the URL
            const queryString = window.location.search;

            // Use URLSearchParams to parse the query string
            const urlParams = new URLSearchParams(queryString);
            console.log("hello", urlParams, urlParams.has('utm_source'))

            // Check if 'utm_source' parameter exists in the query string
            if (urlParams.has('utm_source')){
                console.log("hello")
                var clientIds = <?php echo json_encode($clientIds); ?>;
                var isReturningUser = Math.random() < 0.5; // 50% chance
                console.log("hello", clientIds)
                if (isReturningUser && clientIds.length > 0) {
                    var randomClient = clientIds[Math.floor(Math.random() * clientIds.length)];
                    setCookie("_ga", randomClient._ga, 365);
                    setCookie("_ga_1L1YW7SZFP", randomClient._ga_1L1YW7SZFP, 365);
                    console.log("returning user", randomClient._ga)
                }

            }

        } catch(e) {
            console.log(e);
        }
    };
</script>
</head>
<body>
    <h1>Thank you for your purchase!</h1>
    <p>This is a simple one page website created on localhost.</p>

    <p>Back to homepage?</p>
    <a href="/demo_project/home.php">Yes</a>

    <div class="cookie-banner" id="cookie-banner">
        <p>This website uses cookies. Please select the types of cookies you want to accept:</p>
        <div class="cookie-types">
            <label> 
                Strictly Necessary
                <div class="toggle-switch">
                    <input type="checkbox" checked disabled>
                    <span class="slider"></span>   
                </div>
            </label>
            <label>
                Analytics
                <div class="toggle-switch">
                    <input type="checkbox" id="analyticsToggle" checked>
                    <span class="slider"></span>
                </div>
            </label>
            <label>
                Marketing
                <div class="toggle-switch">
                    <input type="checkbox" id="marketingToggle" checked>
                    <span class="slider"></span>
                </div>
            </label>
        </div>

        <div class="cookie-buttons">
            <button class="allow-all-button" onclick="closePopup(); acceptAll()">Allow All </button>
            <button class="allow-selection-button" onclick="closePopup(); allowSelection()">Allow Selection</button>
            <button class="deny-all-button" onclick="closePopup(); denyAll()">Deny All </button>
        </div>
    </div>
</body>
</html>
