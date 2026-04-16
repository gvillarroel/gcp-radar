---
title: "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlaceConsumerAlert
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlaceConsumerAlert
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
GMSPlaceConsumerAlert
@interface GMSPlaceConsumerAlert : NSObject
The consumer alert message for the place when we detect suspicious review activity on a business
or a business violates our policies.
overview
The overview of the consumer alert.
Declaration
Swift
var overview : String ? { get }
Objective-C
@property ( nonatomic , copy , readonly , nullable ) NSString * overview ;
details
The details of the consumer alert.
Declaration
Swift
@NSCopying var details : GMSPlaceConsumerAlertDetails ? { get }
Objective-C
@property ( nonatomic , copy , readonly , nullable ) GMSPlaceConsumerAlertDetails * details ;
languageCode
The language code of the consumer alert. This is a BCP 47 language code.
Declaration
Swift
var languageCode : String ? { get }
Objective-C
@property ( nonatomic , copy , readonly , nullable ) NSString * languageCode ;
-init
Unavailable
Declaration
Objective-C
- ( instancetype ) init NS_UNAVAILABLE ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-02 UTC."],[],[]]
