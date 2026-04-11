---
title: "App Engine Example Apps \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/guides/app_engine_examples
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/earth-engine/guides/getstarted
source_metadata:
  url: https://developers.google.com/earth-engine/guides/app_engine_examples
  title: "App Engine Example Apps \_|\_ Google Earth Engine \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone. All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default. Tier quotas will take effect for all projects (regardless of tier selection date) on April 27, 2026 . Learn more.
Home
Products
Google Earth Engine
Guides
Send feedback
App Engine Example Apps
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The webpage describes examples in the Earth Engine demos directory on GitHub, organized by how they authenticate with Earth Engine.
Examples are provided for both server authentication using service accounts and client authentication using OAuth2.
Server authentication examples showcase basic map display, more complex data visualization, and integration with Cloud Functions.
Client authentication examples demonstrate the OAuth flow, adding Earth Engine data as a map layer, polygon drawing, and exporting data to Google Drive.
To learn more about authentication and deployment, users can refer to the App Engine & Earth Engine Overview.
The following describes examples in the
Earth Engine demos
directory on GitHub . The title of each example is a link to the source on
GitHub. The examples are organized by how they authenticate with Earth Engine.
To learn more about authentication options and how to deploy these applications,
see the App Engine & Earth Engine Overview .
Authentication with service accounts
server-auth-python
To get started, consider this example the 'hello world' of Earth Engine applications on
the App Engine platform. The app displays an interactive map with an Earth Engine Image
(SRTM elevation). Inspect the config.py file, noting that it needs to be
modified with your project's service account credentials. The only Earth Engine specific
code is in server.py (two lines!). Note that Earth Engine gets a mapid
for the image to be displayed on the the app's page, then passes this value to the
Jinja template used to render the page.
server-auth-nodejs
Same as the example above, using Node.js instead. The server.js file loads
service account credentials from a .private-key.json file, and gets a mapid for
the image to be displayed on the app's page.
trendy-lights
This is a more complex example of using server authentication. It adds several polygons
to the map, displaying details about the polygons when a user clicks them. It uses the
Google Visualization API for charting, and a technique called AJAX to retrieve new data
from the server without needing to refresh the page.
cloud-functions
This example uses a Node.js Cloud
Function for server authentication. With the Earth Engine API and
TurfJS , the function creates GeoJSON for a hexbin
visualization. The webpage is static (hosted in
Cloud Storage ), and displays the hexbin
visualization on a map. Unlike other examples, this demo does not use App Engine.
Authentication with OAuth2
client-auth
This example demonstrates the OAuth flow for authenticating from the client. Specifically,
a user will need to authenticate as themselves (meaning they are already an Earth Engine
user) to use the app. To make that work, JavaScript origins and authorized redirects
need to be set from the Developers Console.
map-layer
This example also uses the client authorization flow. It demonstrates using
ee.MapLayerOverlay to add Earth Engine data to the map with a callback
function to keep track how many tiles have been loaded. (All of the mapping functionality
in this demo can be done with mapids generated on the server, as is done in the
server-auth demo).
polygon-drawing
This example also uses the client authorization flow. The example demonstrates
functionality to draw a polygon over the map, perform a reduce region with the polygon
in Earth Engine, and display the polygon mean. (All of the mapping functionality in
this demo can be done with mapids generated on the server, as is done in the server-auth
demo).
export-to-drive
This is a relatively complex example. It demonstrates the use of two authentication
flows, one for Earth Engine using the application's credentials and one for Google Drive
using the user's personal credentials. It allows the user to select a layer, draw a
polygon and export the layer clipped by the polygon to Drive.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2022-01-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2022-01-26 UTC."],[],[]]
