---
title: "Migrate to the Route Matrix class \_|\_ Maps JavaScript API \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/javascript/routes/route-matrix-js-migration
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/cloud-customization?csw=1
source_metadata:
  url: https://developers.google.com/maps/documentation/javascript/routes/route-matrix-js-migration
  title: "Migrate to the Route Matrix class \_|\_ Maps JavaScript API \_|\_ Google\
    \ for Developers"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Migrate to the Route Matrix class | Maps JavaScript API | Google for Developers
Skip to main content
Google
Maps Platform
Overview
Products
Pricing
Documentation
Get Started
Get Started with Google Maps Platform
Capabilities Explorer
Pricing & Billing
Security & Compliance
Reporting & Monitoring
FAQ
Support and Resources
Customer Care
Incident Management
Maps
Maps JavaScript API
Maps SDK for Android
Maps SDK for iOS
Google Maps for Flutter
Maps Embed API
Maps Static API
Street View Insights
Street View Static API
Maps URLs
Aerial View API
Elevation API
Map Tiles API
Maps Datasets API
Web Components
Routes
Routes API
Navigation SDK for Android
Navigation SDK for iOS
Navigation for Flutter
Navigation for React Native
Roads API
Route Optimization API
Analytics
Google Earth
Places Insights
Imagery Insights
Roads Management Insights
Places
Places API
Places SDK for Android
Places SDK for iOS
Places Library, Maps JavaScript API
Geocoding API
Geolocation API
Address Validation API
Time Zone API
Places Aggregate API
Environment
Air Quality API
Pollen API
Solar API
Weather API
Solutions
Maps Builder agent
Industry solutions
Mobility services
Additional Resources
API Security Best Practices
Digital Signature Guide
Map Coverage Details
Optimization Guide
Mobile OS and software support
Launch stages
Legacy products
Deprecations
URL Encoding
WordPress Users
Blog
More
Community
GitHub
YouTube
LinkedIn
Discord
Innovators
Issue Tracker
/
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Polski
Português – Brasil
Tiếng Việt
Türkçe
Русский
עברית
العربيّة
فارسی
हिंदी
বাংলা
ภาษาไทย
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Web
Maps JavaScript API
Get Started
Contact sales
Guides
Reference
Samples
Resources
Legacy
More
Google
Maps Platform
Overview
Products
Pricing
Documentation
More
Guides
Reference
Samples
Resources
Legacy
Blog
Community
More
Places Service (Legacy)
Place Search and Details
Place Autocomplete
Place Data Fields
Place Types
Directions and Distance Matrix (Legacy)
Directions
Distance Matrix
Migrate to Places (New)
Migration Overview
Migrate to the new Place Details
Migrate to the new Place Search
Migrate to the new Nearby Search
Migrate to the new Place Photos
Migrate to the new Place Reviews
Migrate to the new Place Autocomplete
Migrate to the new Autocomplete Widget
Migrate to the Routes Library, Maps Java Script API
Migrate to the new Route class
Migrate to the new Route Matrix class
Migrate to the new rendering methods
Get Started
Get Started with Google Maps Platform
Capabilities Explorer
Pricing & Billing
Security & Compliance
Reporting & Monitoring
FAQ
Support and Resources
Customer Care
Incident Management
Maps
Maps JavaScript API
Maps SDK for Android
Maps SDK for iOS
Google Maps for Flutter
Maps Embed API
Maps Static API
Street View Insights
Street View Static API
Maps URLs
Aerial View API
Elevation API
Map Tiles API
Maps Datasets API
Web Components
Routes
Routes API
Navigation SDK for Android
Navigation SDK for iOS
Navigation for Flutter
Navigation for React Native
Roads API
Route Optimization API
Analytics
Google Earth
Places Insights
Imagery Insights
Roads Management Insights
Places
Places API
Places SDK for Android
Places SDK for iOS
Places Library, Maps JavaScript API
Geocoding API
Geolocation API
Address Validation API
Time Zone API
Places Aggregate API
Environment
Air Quality API
Pollen API
Solar API
Weather API
Solutions
Maps Builder agent
Industry solutions
Mobility services
Additional Resources
API Security Best Practices
Digital Signature Guide
Map Coverage Details
Optimization Guide
Mobile OS and software support
Launch stages
Legacy products
Deprecations
URL Encoding
WordPress Users
GitHub
YouTube
LinkedIn
Discord
Innovators
Issue Tracker
On this page
Distance Matrix API (Legacy) versus Route Matrix class
Code comparison
reviews Get a Maps Demo Key : Try out select Maps JavaScript API and Places UI Kit features at no cost with a Maps Demo Key—no billing information required.
Home
Products
Google Maps Platform
Documentation
Web
Maps JavaScript API
Legacy
Was this helpful?
Send feedback
Migrate to the Route Matrix class
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Distance Matrix API (Legacy) versus Route Matrix class
Code comparison
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
The RouteMatrix class replaces the
Distance Matrix Service, Maps JavaScript API (Legacy) .
This page explains the differences between the legacy Distance Matrix service and the new
JavaScript library, and provides some code for comparison.
Distance Matrix API (Legacy) versus Route Matrix class
The following table compares the request parameters for the legacy
Distance Matrix API and
the RouteMatrix class.
Distance Matrix Service (Legacy)
RouteMatrix
Required Parameters
origins
origins
destinations
destinations
Optional Parameters
travelMode
travelMode
transitOptions
transitPreference
arrivalTime
arrivalTime
drivingOptions
departureTime ,
trafficModel
unitSystem
units
avoidHighways ,
avoidTolls
RouteModifiers
Code comparison
This section compares two similar pieces of code to illustrate the differences between the
legacy Distance Matrix API and the new RouteMatrix class. The code snippets show
the code required on each respective API to make a directions request, and view the results.
Directions API (Legacy)
The following code makes a distance matrix request using the legacy Distance Matrix API.
// Define the request.
const request = {
origins : [{ lat : 55.93 , lng : - 3.118 }, 'Greenwich, England' ],
destinations : [ 'Stockholm, Sweden' , { lat : 50.087 , lng : 14.421 }],
travelMode : 'DRIVING' ,
drivingOptions : {
departureTime : new Date ( Date . now ()),
trafficModel : 'optimistic'
}
};
// Make the request.
service . getDistanceMatrix ( request ). then (( response ) => {
// Display the response.
document . getElementById ( "response" ). textContent = JSON . stringify (
response ,
null ,
2 ,
);
});
Route Matrix class
The following code makes a distance matrix request using the new Route Matrix class:
// Define the request.
const request = {
origins : [{ lat : 55.93 , lng : - 3.118 }, 'Greenwich, England' ],
destinations : [ 'Stockholm, Sweden' , { lat : 50.087 , lng : 14.421 }],
travelMode : 'DRIVING' ,
departureTime : new Date (),
trafficModel : 'optimistic'
};
// Make the request.
const response = await RouteMatrix . computeRouteMatrix ( request );
// Display the response.
document . getElementById ( "response" ). setValue ( JSON . stringify ( response , null , 2 ,));
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
Stack Overflow
Ask a question under the google-maps tag.
GitHub
Fork our samples and try them yourself.
Discord
Chat with fellow developers about Google Maps Platform.
Issue Tracker
Something wrong? Send us a bug report!
Learn More
FAQ
Capabilities Explorer
Tutorials
Platforms
Android
iOS
Web
Web Services
Product Info
Pricing and Plans
Contact Sales
Support
Terms of Service
Android
Chrome
Firebase
Google Cloud Platform
Google AI
All products
Terms
Privacy
Manage cookies
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Polski
Português – Brasil
Tiếng Việt
Türkçe
Русский
עברית
العربيّة
فارسی
हिंदी
বাংলা
ภาษาไทย
中文 – 简体
中文 – 繁體
日本語
한국어
