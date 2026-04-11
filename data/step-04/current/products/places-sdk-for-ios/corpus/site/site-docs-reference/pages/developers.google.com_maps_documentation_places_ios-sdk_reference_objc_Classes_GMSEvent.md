---
title: "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSEvent
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSEvent
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
GMSEvent represents an opening or closing event within a GMSPeriod , specifying the day, time, and potential date.
It includes a truncated property indicating if the event's time extends beyond a seven-day window from the request time.
GMSEvent uses GMSDayOfWeek for the day of the week and GMSTime for the time in a 24-hour format.
An optional date property provides the specific date of the event.
GMSEvent
@interface GMSEvent : NSObject
A class representing a open/close event in GMSPeriod .
day
Day of week the associated with the event.
Declaration
Swift
var day : GMSDayOfWeek { get }
Objective-C
@property ( nonatomic , readonly ) GMSDayOfWeek day ;
time
The representation of time of the event in 24hr clock. 0000
Declaration
Swift
var time : GMSTime { get }
Objective-C
@property ( nonatomic , strong , readonly ) GMSTime * _Nonnull time ;
date
The date of the event.
Declaration
Swift
var date : Date ? { get }
Objective-C
@property ( nonatomic , strong , readonly , nullable ) NSDate * date ;
truncated
Boolean value indicating whether or not the opening or close details were truncated due to the
seven day window, where the window starts at midnight of the day of the request, and ends at
11:59 pm six days later.
Returns true if the open or close times for this period extends past this seven day window.
Declaration
Swift
var truncated : Bool { get }
Objective-C
@property ( nonatomic , readonly ) BOOL truncated ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["`GMSEvent` represents an open/close event, characterized by the `day` of the week, represented as a `GMSDayOfWeek` enum. The `time` of the event is defined using a 24-hour clock via `GMSTime`. The `date` attribute indicates the specific date of the event and is nullable. The `truncated` property, a boolean, indicates whether event details were cut off due to a seven-day window limitation.\n"]]
