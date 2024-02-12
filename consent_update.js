// get cookie consent if it has been given already
try{
  var cookie_consent = getCookie("cookie_consent");
  document.addEventListener('DOMContentLoaded', function() {
    if (!cookie_consent) { 
        //no consent has been given yet
        document.querySelector('.cookie-banner').style.display = 'block';
    } else {
        //consent has been given already, don't show the cookie banner
        document.querySelector('.cookie-banner').style.display = 'none';
        //document.querySelector('.overlay').style.display = 'none';

        // Define dataLayer and the gtag function.
        var analytics_storage = (cookie_consent === "11" || cookie_consent === "10") ? "granted" : "denied";
        var ad_storage = (cookie_consent === "11" || cookie_consent === "01") ? "granted" : "denied";
        // Define dataLayer and the gtag function.
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'update', {
          'ad_storage': ad_storage,
          'ad_user_data': ad_storage,
          'ad_personalization': ad_storage,
          'analytics_storage': analytics_storage
        });


    }
  });
} catch(e) {console.log("Error w consent.js: ", e)}





