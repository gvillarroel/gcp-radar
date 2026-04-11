---
title: "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSGeocoder
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSGeocoder
  title: "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\
    \ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
iOS
Navigation SDK for iOS
Reference
Send feedback
GoogleNavigation Framework Reference
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
GMSGeocoder provides reverse geocoding functionality, converting coordinates into addresses.
It offers a shared instance through the geocoder method for convenient access.
The reverseGeocodeCoordinate function takes coordinates and returns address information asynchronously.
GMSGeocoder
@interface GMSGeocoder : NSObject
Exposes a service for reverse geocoding. This maps Earth coordinates (latitude and longitude) to
a collection of addresses near that coordinate.
+geocoder
Declaration
Objective-C
+ ( GMSGeocoder * ) geocoder ;
-reverseGeocodeCoordinate:completionHandler:
Reverse geocodes a coordinate on the Earth’s surface.
Declaration
Swift
func reverseGeocodeCoordinate ( _ coordinate : CLLocationCoordinate2D ) async throws -> GMSReverseGeocodeResponse
Objective-C
- ( void ) reverseGeocodeCoordinate :( CLLocationCoordinate2D ) coordinate
completionHandler :( nonnull GMSReverseGeocodeCallback ) handler ;
Parameters
coordinate
The coordinate to reverse geocode.
handler
The callback to invoke with the reverse geocode results.
The callback will be invoked asynchronously from the main thread.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]
