# web playground
This is a very fake ecommece website to play around w GA, GTM, dataLayers and what not
Works well with the web data playground tool here: https://github.com/elenanesimm/the_fairy_codemother

CONFIGURATION STEPS:

1) Apache, PHP and MySQL are needed (MAMP is a good option for MAC)

2) Save this repo where your server points at (MAMP/htdocs if you are using MAMP)

3) Turn your MAMP on!

4) In the file "analytics.js":
	1) Change the GTM ID at the second line of the script, with your own GTM ID: const GTM_ID = "GTM-ABCDEFGH"
	2) Change the GA stream ID at the 3rd line of the script with your own GA ID for the similation of retuning users
	2) Change CoMo default as you see fit
