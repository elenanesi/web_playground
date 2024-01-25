// Define dataLayer and the gtag function.

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
  console.log("add_to_cart called!")
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
})(window,document,'script','dataLayer','GTM-WZ4DNGJW');

const urlPath = window.location.pathname;
console.log(urlPath)
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
