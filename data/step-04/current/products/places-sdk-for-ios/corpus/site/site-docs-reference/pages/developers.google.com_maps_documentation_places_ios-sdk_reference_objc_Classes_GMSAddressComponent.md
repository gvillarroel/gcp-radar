---
title: "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAddressComponent
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAddressComponent
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
Page Summary
outlined_flag
GMSAddressComponent represents parts of an address like street number, city, or postcode.
It provides the component's name (e.g., "Sydney"), type (e.g., "locality"), and potentially a short name (e.g., "AU").
The type property is deprecated; use types instead for an array of type constants from GMSPlaceTypes.h .
You can find supported type values at: https://developers.google.com/places/ios-sdk/supported_types#table2 .
GMSAddressComponent
@interface GMSAddressComponent : NSObject
Represents a component of an address, e.g., street number, postcode, city, etc.
type
Deprecated
type property is deprecated in favor of types
Type of the address component. For a list of supported types, see
https://developers.google.com/places/ios-sdk/supported_types#table2 . This string will be one
of the constants defined in GMSPlaceTypes.h.
Declaration
Swift
var type : String { get }
Objective-C
@property ( nonatomic , copy , readonly ) __GMS_AVAILABLE_BUT_DEPRECATED_MSG NSString * type ;
types
Types associated with the address component. For a list of supported types, see
https://developers.google.com/places/ios-sdk/supported_types#table2 . This array will contain
one or more of the constants strings defined in GMSPlaceTypes.h.
Declaration
Swift
var types : [ String ] { get }
Objective-C
@property ( nonatomic , strong , readonly ) NSArray < NSString *> * _Nonnull types ;
name
Name of the address component, e.g. “Sydney”
Declaration
Swift
var name : String { get }
Objective-C
@property ( nonatomic , copy , readonly ) NSString * _Nonnull name ;
shortName
Short name of the address component, e.g. “AU”
Declaration
Swift
var shortName : String ? { get }
Objective-C
@property ( nonatomic , copy , readonly ) NSString * _Nullable shortName ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]
