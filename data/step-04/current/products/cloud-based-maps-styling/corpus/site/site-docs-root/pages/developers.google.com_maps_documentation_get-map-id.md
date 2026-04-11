---
title: "Map ID overview \_|\_ Maps JavaScript API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/get-map-id
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/cloud-customization?csw=1
source_metadata:
  url: https://developers.google.com/maps/documentation/get-map-id
  title: "Map ID overview \_|\_ Maps JavaScript API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Web
Maps JavaScript API
Send feedback
Map ID overview
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Map IDs are unique identifiers used to represent a single Google Map instance, enabling features like cloud-based styling and advanced markers.
You can create map IDs for various platforms (JavaScript, Android, iOS, Static Maps) through the Google Cloud Console.
Cloud-based map styling allows you to customize and manage map styles centrally, with automatic updates across platforms.
A variety of features and APIs utilize map IDs, including Advanced markers, Data-driven styling, and the Maps Embed API.
Using a map ID with Maps SDK for Android or iOS will result in charges against the Dynamic Maps SKU.
Select platform:
Android
iOS
JavaScript
Web Service
Paid feature:
Features accessed by adding a map ID triggers a map
load charged against the Dynamic Maps SKU for Android and iOS. See
Google Maps Billing for more information.
A map ID is a unique identifier that represents Google Map styling and configuration settings that are stored in Google Cloud. You use map IDs to enable features or manage or style maps on your websites and in your applications. You can create map IDs for each platform you need--JavaScript, Android, iOS, or Static maps--in your Google Cloud console project on the Map Management page.
For how to create map IDs, see How to create map IDs .
What you can do with map IDs
Use map IDs to enable features and styling. Here are some examples of how to
use map IDs. For a full list, see Features that use map IDs :
Cloud-based maps styling : Associate a map ID with a map style to
style, customize, and manage your maps using the Google Cloud console.
Available on all platforms:
Android ,
iOS ,
JavaScript ,
and Maps Static API .
Vector maps : Use a map ID to use a map composed of vector-based tiles
that are drawn at load time on the client side using WebGL.
Available on JavaScript .
Advanced markers : Use a map ID to enable Advanced markers. Available on
Android ,
iOS , and
JavaScript .
Example for cloud-based maps styling
To use cloud-based maps styling to style maps on your website and Android apps,
follow these steps:
Create map IDs for each platform you are using. For example, create a
JavaScript and an Android map ID. For details, see
Create map IDs .
Configure a map style on the Google Cloud console. For details, see
cloud-based maps styling .
Associate both of your map IDs with the map style in the Google Cloud console.
For details, see Associate map IDs with your style .
Reference the map ID in your website JavaScript and your Android app code.
For details, see Add a map ID to your app .
The map style associated with your map IDs is then displayed on your website and
in your Android app. You can make updates to your map style in the
Cloud console, and changes appear in both places automatically,
without the need for any app updates by your customers.
Features that use map IDs
The following table shows the Google Maps Platform features and APIs that use
map IDs:
Feature or API
Uses map IDs to accomplish these goals
Advanced markers
Enable advanced markers. You don't need to create a
map ID, and can instead use the demo map ID DEMO_MAP_ID .
Data-driven styling for boundaries
Associate the map ID with a set of boundaries and styling to style
the map according to the boundaries.
Data-driven styling for datasets
Associate the map ID with a set of data and styling to style the map according to the dataset.
Flutter
Style the Google maps used in your Flutter apps.
Maps JavaScript API
Style the map to be displayed on a web page.
Maps SDK for Android
Style the map to be displayed in an Android application. 1
Maps SDK for iOS
Style the map to be displayed in an iOS application. 1
Maps Static API
Specify and style the map to be rendered as a static image.
Mobility solutions
Use the Maps JavaScript API and SDKs for Android and iOS to style maps in Mobility solutions. 1
Navigation SDK for Android
Style the map to be displayed in an Android application. 1
Navigation SDK for iOS
Style the map to be displayed in an iOS application. 1
WebGL (Vector maps)
Enable WebGL features using a JavaScript vector map ID.
1 Using a map ID on Maps SDK for Android, Maps SDK for iOS, Navigation SDK for Android, or Navigation SDK for iOS triggers a map load that is charged against the Dynamic Maps SKU .
Next steps
Create a map ID
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["Map IDs, unique identifiers stored in Google Cloud, enable feature activation and map styling across platforms (JavaScript, Android, iOS, Static). Create them in the Google Cloud console for each platform. Use map IDs to enable cloud-based styling, vector maps, and advanced markers. Map IDs are used to accomplish goals such as styling maps, and enable advanced markers. Map ID usage on Android/iOS incurs Dynamic Maps SKU charges. Update map styles in the console; changes auto-update without app updates.\n"]]
