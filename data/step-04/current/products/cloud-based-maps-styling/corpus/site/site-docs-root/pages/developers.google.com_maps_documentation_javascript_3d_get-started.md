---
title: "Get started \_|\_ Maps JavaScript API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/javascript/3d/get-started
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/cloud-customization?csw=1
source_metadata:
  url: https://developers.google.com/maps/documentation/javascript/3d/get-started
  title: "Get started \_|\_ Maps JavaScript API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

reviews Get a Maps Demo Key : Try out select Maps JavaScript API and Places UI Kit features at no cost with a Maps Demo Key—no billing information required.
Home
Products
Google Maps Platform
Documentation
Web
Maps JavaScript API
Send feedback
Get started
Stay organized with collections
Save and categorize content based on your preferences.
Select platform:
Android
iOS
JavaScript
In this tutorial, you'll guide yourself through creating your first JavaScript
application using 3D Maps in Maps JavaScript: a basic window that displays
an overhead view of the Golden Gate Bridge with the Marin Headlands in the
background.
Upon completing the tutorial, you should see the following map in your
development environment:
Set up your environment
Before you begin writing code, you must set up an environment that runs
JavaScript. For this tutorial, you'll use a web browser as your environment. All
modern web browsers have built-in support for JavaScript, so you don't need to
install any additional software.
Open a text editor of your choosing.
Create a new file and save it with an .html extension (e.g., hello-p3djs.html ).
Write an HTML page
To start, you'll create a web page with a basic HTML structure:
<!DOCTYPE html>
<html>
<head>
<title>Hello 3D Maps in Maps JavaScript</title>
</head>
<body>
<!-- Your JavaScript code will go here -->
</body>
</html>
Add JavaScript
Next, you'll add a custom HTML element to load the map. The code contains two
elements:
gmp-map-3d contains the parameters used for initializing the starting
camera position and view.
script contains the call to load the Maps JavaScript API. Be sure to
replace YOUR_KEY with your API key.
<!DOCTYPE html>
<html>
<head>
<title>Hello 3D Maps in Maps JavaScript</title>
<style>
html,
body {
height:100%;
margin: 0;
padding: 0;
}
</style>
</head>
<body>
<gmp-map-3d mode="hybrid" center="37.841157, -122.551679" range="2000" tilt="75" heading="330"></gmp-map-3d>
<script async src="https://maps.googleapis.com/maps/api/js?key=<YOUR_KEY>&v=beta&libraries=maps3d"></script>
</body>
</html>
Run the application
To run the application and see the output, follow these steps:
Save the HTML file you created.
Open the file in a web browser (you can double-click the file, drag
it into a browser window, or right-click and use "Open with").
You should see the map in your browser window.
Congratulations! You've just written an application using Google's
3D Maps in Maps JavaScript API.
Next steps
Build more complicated 3D map experiences using Google's existing
samples .
Discover the full potential of the 3D Maps in Maps JavaScript API by reading the
reference documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
