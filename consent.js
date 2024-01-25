
function getCookie(name) {
  var cookieString = document.cookie;
  var cookies = cookieString.split("; ");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].split("=");
    var cookieName = cookie[0];
    var cookieValue = cookie[1];
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null; // Return null if cookie not found
}


function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function closePopup() { 
  var Popup = document.getElementById("cookie-banner");
  Popup.style.display = "none";
  //document.querySelector('.overlay').style.display = 'none';
}

function acceptAll(){
        // Define dataLayer and the gtag function.
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'update', {
          'ad_storage': 'granted',
          'ad_user_data': 'granted',
          'ad_personalization': 'granted',
          'analytics_storage': 'granted'
        });
        setCookie("cookie_consent", "11")
    };
    function denyAll(){
    // Define dataLayer and the gtag function.
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}

    gtag('consent', 'update', {
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'analytics_storage': 'denied'
    });
    setCookie("cookie_consent", "00")
};
function allowSelection(){
    var analyticsToggle = document.getElementById('analyticsToggle')  || "denied";
    var marketingToggle = document.getElementById('marketingToggle') || "denied";
    var analytics_storage = analyticsToggle.checked ? "granted" : "denied"
    var ad_storage = marketingToggle.checked ? "granted" : "denied"
    var analytics_cookie = analyticsToggle.checked ? "1" : "0"
    var ad_storage_cookie = marketingToggle.checked ? "1" : "0"
    setCookie("cookie_consent", analytics_cookie+ad_storage_cookie)


    // Define dataLayer and the gtag function.
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('consent', 'update', {
      'ad_storage': ad_storage,
      'ad_user_data': ad_storage,
      'ad_personalization': ad_storage,
      'analytics_storage': analytics_storage
    });
};

// main
// get cookie consent if it has been given already
try{
  var cookie_consent = getCookie("cookie_consent");
  document.addEventListener('DOMContentLoaded', function() {
    if (!cookie_consent) { 
        //no consent has been given yet
        document.querySelector('.cookie-banner').style.display = 'block';
        //document.querySelector('.overlay').style.display = 'block';
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
  console.log('hey ele this is the cookie consent from cookies', cookie_consent)
} catch(e) {console.log("Error w consent.js: ", e)}





