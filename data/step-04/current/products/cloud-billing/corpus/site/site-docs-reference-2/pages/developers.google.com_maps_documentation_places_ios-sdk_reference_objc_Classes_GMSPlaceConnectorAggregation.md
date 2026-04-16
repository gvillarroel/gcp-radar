---
title: "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlaceConnectorAggregation
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlaceConnectorAggregation
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
GMSPlaceConnectorAggregation
@interface GMSPlaceConnectorAggregation : NSObject
A class that represents an EV charging connector aggregation.
type
The type of the EV charging connector.
Declaration
Swift
var type : GMSPlaceEVConnectorType { get }
Objective-C
@property ( nonatomic , readonly ) GMSPlaceEVConnectorType type ;
maxChargeRateKW
The max charge rate of the EV charging connector in kilowatts.
Declaration
Swift
var maxChargeRateKW : Double { get }
Objective-C
@property ( nonatomic , readonly ) double maxChargeRateKW ;
count
The number of EV charging connectors.
Declaration
Swift
var count : UInt { get }
Objective-C
@property ( nonatomic , readonly ) NSUInteger count ;
availableCount
The number of available EV charging connectors.
Declaration
Swift
var availableCount : UInt { get }
Objective-C
@property ( nonatomic , readonly ) NSUInteger availableCount ;
outOfServiceCount
The number of out of service EV charging connectors.
Declaration
Swift
var outOfServiceCount : UInt { get }
Objective-C
@property ( nonatomic , readonly ) NSUInteger outOfServiceCount ;
availabilityLastUpdateTime
The time that the availability of the EV charging connector was updated.
Declaration
Swift
var availabilityLastUpdateTime : Date ? { get }
Objective-C
@property ( nonatomic , copy , readonly , nullable ) NSDate * availabilityLastUpdateTime ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-20 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-20 UTC."],[],[]]
