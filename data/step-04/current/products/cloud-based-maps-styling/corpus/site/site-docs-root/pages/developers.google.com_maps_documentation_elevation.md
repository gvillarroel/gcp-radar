---
title: "Elevation API overview \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/elevation
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/cloud-customization?csw=1
source_metadata:
  url: https://developers.google.com/maps/documentation/elevation
  title: "Elevation API overview \_|\_ Google for Developers"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Elevation API overview | Google for Developers
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
Web Services
Elevation API
Get Started
Contact sales
Guides
Resources
More
Google
Maps Platform
Overview
Products
Pricing
Documentation
More
Guides
Resources
Blog
Community
More
Overview
Setup
Get Started
Set up the Elevation API
Developer Guides
Elevation requests and responses
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
Why use the Elevation API
What you can do with the Elevation API
How the Elevation API works Resources
How to use the Elevation API Available client libraries
What's next
Home
Products
Google Maps Platform
Documentation
Web Services
Elevation API
Guides
Was this helpful?
Send feedback
Elevation API overview
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Why use the Elevation API
What you can do with the Elevation API
How the Elevation API works Resources
How to use the Elevation API Available client libraries
What's next
Page Summary
outlined_flag
The Elevation API provides elevation data for locations on Earth, enabling applications with elevation-sensitive features.
You can retrieve elevation for single points or calculate elevation differences along paths, useful for activities like hiking or biking.
The API accepts latitude/longitude coordinates and returns elevation data in meters relative to local mean sea level, with resolution information.
Developers can access the Elevation API through various client libraries (Java, Python, Go, Node.js) and integrate it into their applications.
To get started, set up a Google Cloud project, try sample requests, and explore the documentation for detailed usage instructions.
The Elevation API is a service that returns elevation data for
a location on the earth, or sampled elevation data along paths.
Why use the Elevation API
With the Elevation API, you can develop applications to support your
customers with elevation-sensitive activities, positioning applications, or low-surveying
applications that include elevations and elevation changes along routes. For example,
you can provide elevation gain and loss data to enhance a sports application for activities such
as hiking, biking, or scuba diving.
What you can do with the Elevation API
With the Elevation API, you can include elevation data in your
applications or on a map. For example:
Get the elevation for a particular place.
Calculate the differences in elevation along a route or between two
points.
How the Elevation API works
The Elevation API accepts a request as an encoded URL with latitude/longitude coordinates
provided as either discrete locations, or as a series of locations along a path. This request,
for example, queries elevation for the center of Denver, Colorado, specifying a return in JSON format.
https://maps.googleapis.com/maps/api/elevation/json
?locations=39.7391536%2C-104.9847034
&key= YOUR_API_KEY
The service derives the elevation for the provided coordinates. It also interpolates
elevation for a location without elevation, providing an average returned from the four
nearest locations that do provide elevation data. Finally, it determines the overall
resolution for the location.
Resources
The following table summarizes the resources available through the
Elevation API along with the data it returns.
Data resources
Data returned
Return format
Latitude/longitude coordinates
You can provide data as a set of one or more locations, or as a series along a path. You
can also provide encoded coordinates. Pass up to 512 coordinates.
The Elevation API provides elevation in meters relative
to the local mean sea level (LMSL). Elevation can be returned as positive
or negative values as indicated below:
Positive values indicate locations above LMSL,
including surface locations or the bottom of high-altitude lakes.
Negative values indicate locations that are below LMSL, including
locations on the surface or the ocean floor.
Resolution indicates the distance between the data point and the
elevation, in meters.
JSON
XML
How to use the Elevation API
1
Get set up.
Start with Set up your
Google Cloud project
and complete the setup
instructions that follow.
2
Try an elevation request
Once you have an API key, you can start testing out the Elevation API directly from
your browser. See Sample requests
in the Getting started guide for details.
3
Compose a more complex request
Once you are set up with a project, try a request that supplies a location data along a
path. See Specifying paths
for details.
4
Understand response basics
Explore the elevation data responses to prepare to use elevation data for your app. See
Elevation responses
for details.
5
Incorporate elevation data into your own app!
You can use elevation data to enhance location-based apps, such as apps for sports
activities or for survey data.
Available client libraries
Call this API in the language of
your choice through one of the following client libraries:
Java
Client for Google Maps Services
Python
Client for Google Maps Services
Go Client
for Google Maps Services
Node.js
Client for Google Maps Services
The Java Client, Python Client, Go Client and Node.js Client for Google Maps
Services are community-supported client libraries, open sourced under the
Apache 2.0 License .
Download them from GitHub, where you can also find installation instructions and sample code.
What's next
Start using the Elevation API : Go to
Set up your
Google Cloud project .
Try getting path-based elevation data : Go to
Specifying paths
Follow best practices : Go to Web Service
Best Practices .
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
API security best practices
Optimizing Web Service Usage
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
