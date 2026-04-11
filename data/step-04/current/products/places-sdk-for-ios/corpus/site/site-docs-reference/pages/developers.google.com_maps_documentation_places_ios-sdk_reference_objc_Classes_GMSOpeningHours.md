---
title: "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSOpeningHours
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSOpeningHours
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
GMSOpeningHours stores and manages the opening hours information for a GMSPlace .
It provides access to the weekly opening and closing periods using the periods property, which contains an array of GMSPeriod objects.
Localized daily opening hours are available through the weekdayText property, presented as an array of strings.
The hoursType property indicates the type of opening hours using the GMSPlaceHoursType enum.
specialDays stores an array of GMSPlaceSpecialDay objects representing exceptions or variations in opening hours for the next seven days.
GMSOpeningHours
@interface GMSOpeningHours : NSObject
A class to handle storing and accessing opening hours information for GMSPlace .
periods
Contains all GMSPeriod s of open and close events for the week.
Note: Multiple periods can be associated with a day (eg. Monday 7am - Monday 2pm,
Monday 5pm - Monday 10pm).
Periods may also span multiple days ( eg Friday 7 pm - Saturday 2 am ).
Declaration
Swift
var periods : [ GMSPeriod ]? { get }
Objective-C
@property ( nonatomic , strong , readonly , nullable ) NSArray < GMSPeriod *> * periods ;
weekdayText
Contains localized strings of the daily opening hours for the week.
Note: The order of the text depends on the language and may begin on Monday or Sunday.
Do not use the GMSDayOfWeek enum to index into the array.
Declaration
Swift
var weekdayText : [ String ]? { get }
Objective-C
@property ( nonatomic , strong , readonly , nullable ) NSArray < NSString *> * weekdayText ;
hoursType
Returns the GMSPlaceHoursType of the opening hours.
Declaration
Swift
var hoursType : GMSPlaceHoursType { get }
Objective-C
@property ( nonatomic , readonly ) GMSPlaceHoursType hoursType ;
specialDays
Returns a list of GMSPlaceSpecialDay entries, corresponding to the next
seven days which may have opening hours that differ from the normal operating hours.
Declaration
Swift
var specialDays : [ GMSPlaceSpecialDay ]? { get }
Objective-C
@property ( nonatomic , copy , readonly , nullable ) NSArray < GMSPlaceSpecialDay *> * specialDays ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]
