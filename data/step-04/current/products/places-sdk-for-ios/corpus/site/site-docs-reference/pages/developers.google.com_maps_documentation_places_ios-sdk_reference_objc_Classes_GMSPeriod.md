---
title: "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPeriod
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPeriod
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
GMSPeriod represents the operational hours of a place, defined by an opening and closing time.
It includes an openEvent , which is mandatory and indicates the start time of the operational period.
A closeEvent is optional and specifies the closing time; if absent, it implies 24-hour operation indicated by "0000" in openEvent 's time.
GMSPeriod
@interface GMSPeriod : NSObject
A class representing a period of time where the place is operating for a GMSPlace .
It contains an open GMSEvent and an optional close GMSEvent . The close event will be nil
if the period is open 24hrs.
openEvent
The open event of this period.
Each GMSPeriod is guaranteed to have an open event.
If the period is representing open 24hrs, it will only have the openEvent with time as “0000”.
Declaration
Swift
var openEvent : GMSEvent { get }
Objective-C
@property ( nonatomic , strong , readonly ) GMSEvent * _Nonnull openEvent ;
closeEvent
The close event of this period. Can be nil if period is open 24hrs.
Declaration
Swift
var closeEvent : GMSEvent ? { get }
Objective-C
@property ( nonatomic , strong , readonly , nullable ) GMSEvent * closeEvent ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]
