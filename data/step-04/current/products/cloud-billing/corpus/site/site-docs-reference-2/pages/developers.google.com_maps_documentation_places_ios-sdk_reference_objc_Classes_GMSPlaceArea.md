---
title: "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlaceArea
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlaceArea
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
GMSPlaceArea
@interface GMSPlaceArea : NSObject
Area information and the area’s relationship with the target location.
Areas include precise sublocality, neighborhoods, and large compounds that are
useful for describing a location.
resourceName
The area’s resource name.
Declaration
Swift
var resourceName : String ? { get }
Objective-C
@property ( nonatomic , readonly , nullable ) NSString * resourceName ;
placeID
The area’s place ID.
Declaration
Swift
var placeID : String ? { get }
Objective-C
@property ( nonatomic , readonly , nullable ) NSString * placeID ;
displayName
The area’s display name.
Declaration
Swift
var displayName : String ? { get }
Objective-C
@property ( nonatomic , readonly , nullable ) NSString * displayName ;
displayNameLanguageCode
The area’s display name language code.
Declaration
Swift
var displayNameLanguageCode : String ? { get }
Objective-C
@property ( nonatomic , readonly , nullable ) NSString * displayNameLanguageCode ;
containment
Defines the spatial relationship between the target location and the area.
Defaults to GMSPlaceAreaContainmentUnspecified if the relationship is not defined.
Declaration
Swift
var containment : GMSPlaceAreaContainment { get }
Objective-C
@property ( nonatomic , readonly ) GMSPlaceAreaContainment containment ;
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
