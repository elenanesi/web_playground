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
	 <title>Apple 3</title>

    <link rel="stylesheet" type="text/css" href="FairyStyleSheet.css">
   
    <script src="/demo_website/analytics.js"></script>
    <script type="text/javascript">
        try {
            //simulate returning users
            //is the cookie already set? we want the simulation to happen on landing pages only
            if (getCookie("cookie_consent")===null){
                //get clientIds
                var clientIds = <?php echo json_encode($clientIds); ?>;
                //decide if returningUser
                var isReturningUser = Math.random() < 0.5; // 50% chance
                if (isReturningUser && clientIds.length > 0) 
                returningUser(clientIds)
            } 
        } catch(e) {
            console.log(e);
        }
    </script>
    <script src="/demo_website/consent_update.js"></script>
</head>

<body>
	<h1>Apple 3</h1>
	<p>PDP of Apple 3</p>

	
	
	 <p>Click to second page?</p>
	 <a href="/demo_website/apples/1.php">Yes</a>
    
     <button class="cart" onclick="add_to_cart()">Add to Cart</button>


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
        <button class="deny-all-button" onclick="closePopup(); denyAll()">Deny All  </button>
    </div>
</div>

</body>
</html>
