---
title: "Cloud-based maps styling overview \_|\_ Maps Static API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/maps-static/cloud-customization
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/cloud-customization?csw=1
source_metadata:
  url: https://developers.google.com/maps/documentation/maps-static/cloud-customization
  title: "Cloud-based maps styling overview \_|\_ Maps Static API \_|\_ Google for\
    \ Developers"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Cloud-based maps styling overview | Maps Static API | Google for Developers
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
Maps Static API
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
Maps Static API
Overview
Get Started
Setup
Set up the Maps Static API
Use a Digital Signature
Customize maps
Overview
Manage map IDs
Map ID overview
Create map IDs
Cloud-based maps styling
Overview
Get Started
Get started and set up
Tutorial - Highlight a road network
Verify an auto-migrated map style
Map feature changes
Create and use map styles
Create and use map styles
Navigate the preview map and find features
Use JSON with map styles
Use JSON with cloud-based maps styling
JSON reference for cloud-based maps styling
Learn about modes and map types
Test map style updates
Style zoom levels
Work with map style versions
What you can style on a map
Understand map style inheritance and hierarchy
Manage styles that overlap
Modify map settings
Control the density of Points of interest
Filter which map features to display
Change the style of buildings
Change the style of landmarks
Change the app background color
Style examples and guidelines
Style examples
Design checklist
Troubleshoot
JSON styling
Add a styled map
Style reference
Web Services
Best Practices
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
Why use cloud-based maps styling
What can you do with cloud-based maps styling
How cloud-based maps styling works
How to use cloud-based maps styling
What's next
Home
Products
Google Maps Platform
Documentation
Web
Maps Static API
Was this helpful?
Send feedback
Cloud-based maps styling overview
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Why use cloud-based maps styling
What can you do with cloud-based maps styling
How cloud-based maps styling works
How to use cloud-based maps styling
What's next
Page Summary
outlined_flag
Cloud-based maps styling allows you to customize the appearance of your Google Maps using a no-code editor, enabling you to create unique and on-brand map experiences.
You can update the style of your maps through the Google Cloud Console without requiring code changes to your application, simplifying the process of maintaining consistent map designs across platforms.
Cloud-based styling offers extensive customization options for nearly 100 map features, including points of interest, roads, buildings, and more, providing granular control over the visual elements of your maps.
After the initial style download, subsequent map loads and interactions are faster due to caching, ensuring a smooth and responsive user experience.
Select platform:
Android
iOS
JavaScript
Web Service
Paid feature:
Features accessed by adding a map ID triggers a map
load charged against the Dynamic Maps SKU for Android and iOS. See
Google Maps Billing for more information.
Features in this document marked with the
science science icon are in
Preview (Pre-GA) .
Customize and update the road map experience for your users without updating your apps'
code or reload the map. With the Google Maps Platform cloud-based maps styling in the Google Cloud console,
you can select colors and set visibility for features. This applies to both light and dark modes for the
following map types:
roadmap
science navigation
science hybrid
science terrain
science 3D roadmap
science 3D hybrid
The changes you make can be reflected across all
of your JavaScript, iOS, and Android apps.
Note: When customizing map styles in the Navigation SDK, you must adhere to the policies
regarding acceptable modifications to the navigation UI. For more information, see the customize
map styles overview for the Navigation SDK for Android
and the Navigation SDK for iOS .
For information on other ways to customize your map, see Customize Maps .
Why use cloud-based maps styling
With cloud-based maps styling, you can create more engaging and informative maps
and update them without code changes:
More map features : Customize almost 100 individual
map features, in four categories. Points of interest includes features such as Entertainment,
Recreation, and Services, which each also have several child features. For example,
Services includes ATM, Bank, Gas station, and Restroom. For the full list, see
What you can style on a map .
More ways to customize maps : Cloud-based maps styling makes it easier
and more intuitive for you to style your map. Recent updates give you more granular control
over the look and feel of the basemap with labels and geometries not previously available for
map features. For example, you can customize labels applied to
tourist attractions, restaurants, recreational areas, emergency services, retail, and more.
Maps load quickly after the first use : After the initial startup time as
a map style is downloaded and cached, subsequent views and pan/zoom movement of
the map are faster.
science Seamless switching between map modes and map types : Customize styles for
light and dark modes, apply those styles across various map types, and switch between them without
having to reload the tiles.
Improved map style editor interface : Map settings let you define map style
properties, such as building and landmark styles and POI density levels. Styleable elements
are all shown on a single panel, giving you more visible map area when making customizations.
Find your map feature with more intuitive categories that expand and collapse, plus a filter box
to scope the list to the map feature you need. You can also click anywhere on the map and see
what features you can style at that location using the map inspector.
What can you do with cloud-based maps styling
You can do the following with cloud-based maps styling:
Use a no-code style editor : A designer can create and preview a style
to match your goals and branding without needing to code.
Change styles without code changes : Draft and test map style changes
without any changes to your code once the map ID is in place.
Style more map features : Change the visibility and color of more map
features, such as roads, buildings, bodies of water, points of interest, and transit routes.
How cloud-based maps styling works
Map styles are stored and edited in the Google Maps Platform Cloud Console. Your
application uses a map ID to request a map style from the cloud console, and then
applies it to your application. You can have several map IDs associated with the same map style,
so your maps can look the same across your application platforms.
How to use cloud-based maps styling
1
Get started
Head over to Get started and set up , and
then check out the Tutorial .
2
Create a cloud-based map style
See Create and use map styles .
3
Associate your map style with a map ID
Create or open a map ID for your application type, and assign a map style to it.
You can create additional map IDs for applications on other platforms and assign
the same map style to them. For details, see
Associate or remove map IDs on your style .
4
Add the map ID to your application
Your maps then use the map style associated with that map ID. For details, see
Add the map ID to your map .
5
Adjust your map style online
Whenever you need to change your map style, edit it in cloud styling. For details, see
Update a map style .
6
Publish your changed map style
When you're ready to update a map style, publish it, and your new map style shows up in
your application. For details, see Publish a map style .
What's next
Try out the Tutorial .
Check out cloud styling application requirements.
See Application requirements .
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
