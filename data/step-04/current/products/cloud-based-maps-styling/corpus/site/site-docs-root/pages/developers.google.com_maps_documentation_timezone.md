---
title: "Time Zone API overview \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/timezone
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/cloud-customization?csw=1
source_metadata:
  url: https://developers.google.com/maps/documentation/timezone
  title: "Time Zone API overview \_|\_ Google for Developers"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Time Zone API overview | Google for Developers
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
Time Zone API
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
Get Started
Setup
Set up the Time Zone API
Developer guides
Requests and responses
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
Why use the Time Zone API
What you can do with the Time Zone API
How the Time Zone API works Resources
How to use the Time Zone API Available client libraries
What's next
Home
Products
Google Maps Platform
Documentation
Web Services
Time Zone API
Guides
Was this helpful?
Send feedback
Time Zone API overview
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Why use the Time Zone API
What you can do with the Time Zone API
How the Time Zone API works Resources
How to use the Time Zone API Available client libraries
What's next
Page Summary
outlined_flag
The Time Zone API provides time zone data, including UTC and daylight savings offsets, for specific locations based on latitude/longitude and timestamp.
You can use the API to display localized time zone names, offsets, and enhance time-based data in your applications.
The API accepts HTTPS requests with location and timestamp parameters and returns data in JSON or XML format.
Client libraries are available in Java, Python, Go, and Node.js for easy integration into your projects.
The Time Zone API is a service that accepts an HTTP request of
latitude/longitude coordinates and a chosen date and time. It returns the time
zone data for the location, including offsets for UTC and daylight savings
time.
Why use the Time Zone API
With the Time Zone API, you can develop applications that provide
the time zone ID and name for dates and times at specific locations
on a map. For example, you can show the following
time zone data:
Localized time zone names for map locations from the Google Maps Platform.
Time zone offsets from UTC and for daylight savings.
Time zone data can be particularly useful when you want to have your
website or app display time-based data relevant to your users.
What you can do with the Time Zone API
With the Time Zone API, you can request the time zone for
locations on the surface of the earth, with the time offset from
UTC and for daylight savings time for each of
those locations.
How the Time Zone API works
The Time Zone API accepts an HTTPS request of latitude/longitude
coordinates, the desired date and time as a timestamp, and optionally,
a language code. It returns data in the format specified by the request.
The following example shows a request for
Nevada, USA, with a requested output in JSON.
https://maps.googleapis.com/maps/api/timezone/json
?location=39.6034810%2C-119.6822510
&timestamp=1733428634
&key= YOUR_API_KEY
Resources
The following table summarizes the resources available through the
Time Zone API along with the data it returns.
Data resources
Data returned
Return format
Timezone
You provide your request along with location and timestamp. See
required
parameters .
Time zone ID.
Time zone name, optionally localized
Offset from UTC, in seconds
Offset for DST, in seconds
See Time Zone for specific response examples.
JSON
XML
How to use the Time Zone API
1
Get set up
Start with Set up your
Google Cloud project
and complete the setup
instructions that follow.
2
Try a timezone request
Once you have an API key, you can start testing out the Time Zone API directly from
your browser. See Time Zone examples
in the Timezone requests and responses guide for details.
3
Understand response basics
Explore how to use timezone data in your app or website.
See Time Zone responses
for details.
5
Incorporate timezone data into your own app!
You can use timezone data to enhance apps and websites for users across
different time-based locales.
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
Learn how to make Time Zone requests : Go to
Time Zone Requests and responses .
Follow best practices : Go to
Web Services Best Practices .
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],["The Time Zone API retrieves time zone data for specific locations using latitude/longitude coordinates and a timestamp. It returns the time zone ID, localized name, UTC offset, and daylight saving time offset in JSON or XML format. To use it, you send an HTTPS request with location and timestamp and you can then utilize the data in your website or apps to show time-based information relevant to users' locations. You can also use one of the provided client libraries to access the API.\n"]]
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
