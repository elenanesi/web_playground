//Add your own GTM ID
const GTM_ID = "GTM-ABCDEF";
//Add your own GA measurement ID, skip the "G-" prefix
const GA_MEASUREMENT_ID = "ABCDEFG";
const ga_cookie_name = "_ga_"+GA_MEASUREMENT_ID;


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

function returningUser(clientIds){
  var randomClient = clientIds[Math.floor(Math.random() * clientIds.length)];
  setCookie("_ga", randomClient._ga, 365);
  setCookie(ga_cookie_name, randomClient[ga_cookie_name], 365);
  // assuming cookie consent has been given in the past
  acceptAll()
  console.log("returning user", randomClient[ga_cookie_name])
    }

function pdp_analytics() {
  window.dataLayer.push({
    'content_group': 'product_category'
  })

}

function plp_analytics() {
  var url = window.location.pathname;
  var category = url.split('/')[2]

  window.dataLayer.push({
    'content_group': 'product_detail'
  });

  window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
  window.dataLayer.push({
    event: "view_item",
    ecommerce: {
      currency: "EUR",
      value: 7.77,
      items: [
      {
        item_id: url.split('/')[2] + "-" + url.split('/')[3].split('.')[0],
        item_name: document.title,
        affiliation: "The Fairy Code Mother",
        coupon: "SUMMER_FUN",
        discount: 2.22,
        index: 0,
        item_brand: "Elena",
        item_category: category,
        price: 9.99,
        quantity: 1
      }
      ]
    }
  });

}

function checkout_analytics() {
  var url = window.location.pathname;
  var category = url.split('/')[2]
  window.dataLayer.push({
    'content_group': 'checkout'
  });

  const params = new URLSearchParams(window.location.search);
  const cat = params.get('cat'); // 'value1'
  const prod = params.get('prod'); // 'value2'
  var item_stem = cat.charAt(0).toUpperCase() + cat.slice(1,cat.length-1)

  dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
  dataLayer.push({
  event: "begin_checkout",
  ecommerce: {
      currency: "EUR",
      items: [
       {
        item_id: (cat + "-" + prod).toLowerCase(),
        item_name:  item_stem + " " + prod,
        coupon: "SUMMER_FUN",
        discount: 2.22,
        index: 0,
        item_brand: "Elena",
        item_category: cat,
        price: 9.99,
        quantity: 1
      }]
  }
});

}

function purchase_analytics() {
    var url = window.location.pathname;
    var category = url.split('/')[2]

    window.dataLayer.push({
    'content_group': 'purchase'
  });

  const params = new URLSearchParams(window.location.search);
  const cat = params.get('cat'); // 'value1'
  const prod = params.get('prod'); // 'value2'
  var item_stem = cat.charAt(0).toUpperCase() + cat.slice(1,cat.length-1)

  dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
  dataLayer.push({
  event: "purchase",
  ecommerce: {
      transaction_id: Date.now(),
      value: 7.77,
      tax: 0.90,
      shipping: 2.99,
      currency: "EUR",
      coupon: "SUMMER_SALE",
      items: [
       {
        item_id: (cat + "-" + prod).toLowerCase(),
        item_name: item_stem + " " + prod,
        coupon: "SUMMER_FUN",
        discount: 2.22,
        index: 0,
        item_brand: "Elena",
        item_category: cat,
        price: 9.99,
        quantity: 1
      }]
  }
});

}

function add_to_cart(){
  var url = window.location.pathname;
  var category = url.split('/')[2]
  window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
  window.dataLayer.push({
    event: "add_to_cart",
    ecommerce: {
      currency: "EUR",
      value: 7.77,
      items: [
      {
        item_id: url.split('/')[2] + "-" + url.split('/')[3].split('.')[0],
        item_name: document.title,
        affiliation: "The Fairy Code Mother",
        coupon: "SUMMER_FUN",
        discount: 2.22,
        index: 0,
        item_brand: "Elena",
        item_category: category,
        price: 9.99,
        quantity: 1
      }
      ]
    }
  });
}

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

// Set default consent to 'denied' as a placeholder
// Determine actual values based on your own requirements
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'analytics_storage': 'denied',
  'wait_for_update' : 500
});
gtag('set', 'ads_data_redaction', true);

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer',GTM_ID);

const urlPath = window.location.pathname;
if (/home/.test(urlPath)) {
  console.log("home!")
  window.dataLayer.push({
    'content_group': 'home'
  })
}
else if (/checkout/.test(urlPath)) {
  console.log("checkout!")
  checkout_analytics()
}

else if (/purchase/.test(urlPath)) {
  console.log("purchase!")
  purchase_analytics()
}

else if (/\/\w+\/\w+\/[1-9]\.php/.test(urlPath)) {
  console.log("plp!")
  plp_analytics()
}

else if (/\/\w+\/\w+(\/)?\.php(.*)$/.test(urlPath)) {
  console.log("pdp!")
  pdp_analytics()
}
