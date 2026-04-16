---
title: "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlaceAddressDescriptor
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlaceAddressDescriptor
  title: "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\
    \ Developers"
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
Places SDK for iOS
Reference
Send feedback
GooglePlaces Framework Reference
Stay organized with collections
Save and categorize content based on your preferences.
GMSPlaceAddressDescriptor
@interface GMSPlaceAddressDescriptor : NSObject
A relational description of a location.
Includes a ranked set of nearby landmarks and precise containing areas and their
relationship to the target location.
landmarks
A ranked list of nearby landmarks.
The most recognizable and nearby landmarks are ranked first.
Declaration
Swift
var landmarks : [ GMSPlaceLandmark ] { get }
Objective-C
@property ( nonatomic , readonly , nonnull ) NSArray < GMSPlaceLandmark *> * landmarks ;
areas
A ranked list of containing or adjacent areas.
The most recognizable and precise areas are ranked first.
Declaration
Swift
var areas : [ GMSPlaceArea ] { get }
Objective-C
@property ( nonatomic , readonly , nonnull ) NSArray < GMSPlaceArea *> * areas ;
-init
Unavailable
Declaration
Objective-C
- ( instancetype ) init NS_UNAVAILABLE ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
