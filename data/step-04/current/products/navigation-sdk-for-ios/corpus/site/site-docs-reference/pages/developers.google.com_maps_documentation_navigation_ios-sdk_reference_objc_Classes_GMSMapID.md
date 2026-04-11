---
title: "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapID
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapID
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
GMSMapID is an opaque identifier used for custom map configurations.
You can create a GMSMapID instance using a unique string identifier.
A demo GMSMapID is available for code samples, but it's not suitable for production and incurs charges.
Using DEMO_MAP_ID in your application will trigger map load charges under the Dynamic Maps SKU.
GMSMapID
@interface GMSMapID : NSObject < NSCopying >
An opaque identifier for a custom map configuration.
-init
Unavailable
Declaration
Objective-C
- ( instancetype ) init NS_UNAVAILABLE ;
-initWithIdentifier:
Creates a new mapID with the given string value.
Declaration
Swift
init ( identifier : String )
Objective-C
- ( nonnull instancetype ) initWithIdentifier :( nonnull NSString * ) identifier ;
+mapIDWithIdentifier:
Creates a new mapID with the given string value.
Declaration
Objective-C
+ ( nonnull instancetype ) mapIDWithIdentifier :( nonnull NSString * ) identifier ;
demoMapID
Returns the DEMO_MAP_ID, which can be used for code samples which require a map ID. This map ID
is not intended for use in production applications and cannot be used for features which require
cloud configuration (such as Cloud Styling).
Note
Usage of DEMO_MAP_ID triggers a map load charge against the Dynamic Maps SKU for Android
and iOS. For more Information see Google Maps Billing:
https://developers.google.com/maps/billing-and-pricing/pricing#dynamic-maps
Declaration
Swift
class var demoMapID : GMSMapID { get }
Objective-C
@property ( class , nonatomic , readonly ) NS_SWIFT_NAME GMSMapID * demoMapID ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]
