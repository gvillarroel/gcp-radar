---
title: "Customize map styles \_|\_ Navigation SDK for iOS \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/customize-map-styles
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/cloud-customization?csw=1
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/customize-map-styles
  title: "Customize map styles \_|\_ Navigation SDK for iOS \_|\_ Google for Developers"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Customize map styles | Navigation SDK for iOS | Google for Developers
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
iOS
Navigation SDK for iOS
Get Started
Contact sales
Guides
Reference
Samples
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
Reference
Samples
Resources
Blog
Community
More
Navigation SDK for iOS
Overview
Try the demo
Setup
Setup overview and requirements
Set up the Navigation SDK for iOS
Set up an Xcode project
Tutorials
Navigate a route
Listen for navigation events
Google Navigation Experience
Introduction
Modify the navigation UI
Adjust the camera
Configure speedometer alerts
Normal and low-light modes
Configure real-time disruptions
Customize map styles
Custom Navigation Experience
Introduction
Create customized guidance
Details about the turn-by-turn data feed
Enable Navigation for Car Play
Route Experience
Introduction
Route to navigation points
Adjust routing preferences
Manage waypoints
Get route information
Plan a route
Cross-Platform Libraries
Navigation for Flutter and React Native
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
Define map styles
Apply map styles
Light and dark mode styles
Billing
Policies and use
Home
Products
Google Maps Platform
Documentation
iOS
Navigation SDK for iOS
Was this helpful?
Send feedback
Customize map styles
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Define map styles
Apply map styles
Light and dark mode styles
Billing
Policies and use
This product or feature is in Preview (pre-GA).
Pre-GA products and features might have limited support, and changes to pre-GA products and
features might not be compatible with other pre-GA versions. Pre-GA Offerings are covered by
the Google
Maps Platform Service Specific Terms . For more information, see the
launch stage
descriptions .
Paid feature:
Features accessed by adding a map ID triggers a map
load charged against the Dynamic Maps SKU for Android and iOS. See
Google Maps Billing for more information.
You can use cloud-based map styling to define reusable map styles for the Google navigation
experience in the Navigation SDK. This page provides an overview of how you can define and apply map
styles, as well as specific implementation details for the Navigation SDK. For complete information
about cloud-based map styling, see the
Overview
page in Maps SDK for iOS documentation.
Define map styles
The first step in customizing map styles for the Navigation SDK is creating a map style and
associating it with a map ID. Map styles are created, stored, and edited in the Google Maps
Platform Cloud Console. You then reference the map ID in your app code to display the customized
map.
There are two map types in the Navigation SDK that can be styled: the navigation map, which is
visible during an active navigation session, and the road map, which is visible whenever there is
no navigation session active. The styles that you define and associate with a map ID apply to both
the navigation and road map types.
For complete details about defining map styles, see
Create and use map styles in the Maps SDK for iOS documentation.
Note: While it is technically possible to define separate styles for the navigation
and road map types by associating separate styles with different map IDs, this implementation is not
recommended because it requires reloading the map to load the different map ID.
Apply map styles
Once you have map styles associated with a map ID, you can add the ID by creating a
GMSMapID
with the map string from the Cloud Console, and then creating a
GMSMapView
specifying the map ID.
For more information about applying map styles, see
Add the map ID to your app in the Maps SDK for iOS documentation.
Light and dark mode styles
Cloud-based map styling lets you define light mode and dark mode styles. In the Navigation SDK,
road maps (non-navigation maps) can have light and dark modes, and navigation maps can have
daylight and low-light or night modes. When you associate styles with maps in the Navigation SDK,
the styles apply to both road and navigation maps:
Light mode styles in the Cloud Console apply to both light mode road maps
and daylight navigation maps.
Dark mode styles in the Cloud Console apply to both dark mode road maps
and low-light/night mode navigation maps.
Billing
When an app loads a map that has a map ID applied, a map load charged against the Dynamic Maps
SKU is triggered. Note that this trigger is different from that of map loads that don't have map
IDs applied. Map loads without map IDs are charged against the Maps SDK SKU . For more information
about triggers and pricing for each SKU, see Pricing and Billing .
Policies and use
When customizing map styles in the Navigation SDK, you must adhere to the policies
regarding acceptable modifications to the navigation UI. In particular, you must not
remove road networks from the navigation map or significantly reduce color contrast
of map features on the navigation map.
For complete details about acceptable modifications to the Navigation UI, see
Policies for Navigation SDK for
iOS .
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
Stack Overflow
Ask a question under the google-maps-sdk-ios tag.
GitHub
Fork our samples and try them yourself.
Discord
Chat with fellow developers about Google Maps Platform.
Issue Tracker
Something wrong? Send us a bug report!
Learn More
FAQ
Capabilities Explorer
Places SDK for iOS
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
