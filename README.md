# web playground
This is a very fake ecommece website to play around w GA, GTM, dataLayers and what not
Works well with the web data playground tool here: https://github.com/elenanesimm/the_fairy_codemother

# CONFIGURATION STEPS:

1) Apache, PHP and MySQL are needed (MAMP is a good option for MAC)

2) Save this repo where your server points at (MAMP/htdocs if you are using MAMP)

3) Turn your MAMP on!

4) In the file "analytics.js":
	1) Change the GTM ID at the second line of the script, with your own GTM ID: const GTM_ID = "GTM-ABCDEFGH"
	2) Change the GA stream ID at the 3rd line of the script with your own GA4 MEASUREMENT ID, for the similation of retuning users.
	Skip the "G-" prefix
	2) Change CoMo default as you see fit

5) In your GTM container, the simplest working setup is:
- a Google tag set to fire at Consent initialization, 
- a GA4 event tag with: 
	- {{Event}} as event name
	- ecommerce enabled (from dataLayer)
	- activated by a custom event trigger that fires for all events, except the ones that contain "gtm" (eg: event name matches regex .+ ; exclude events that contain "gtm")

# FOR BEGINNERS:

- Install Git
- Move to the directory where you want to have your web playground with your terminal.
	You can do this by: 
	- right click on the directory on "Open terminal at Folder"
	- Use the "cd" command to navigate to the directory where you want to clone the repository
- Now your terminal opened and you are in the right directory. 
	Type "sudo git clone https://github.com/elenanesimm/web_playground.git", and provide your password when asked.
- You should now have a new repository "web_playground" in the directory you're in: Good job! you installed a fake website on your laptop. I expect you can access it by typing in your browser: http://localhost/web_playground/home.php
