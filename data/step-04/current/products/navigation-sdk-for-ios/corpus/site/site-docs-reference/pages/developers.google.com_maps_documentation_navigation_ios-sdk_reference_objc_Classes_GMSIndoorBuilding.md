---
title: "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSIndoorBuilding
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSIndoorBuilding
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
GMSIndoorBuilding objects represent buildings with multiple levels, organized in a specific display order.
The levels property provides access to an array of GMSIndoorLevel objects, representing the building's floors.
defaultLevelIndex indicates the index of the default level within the levels array.
The underground property, if true, signifies the building is entirely underground and can be hidden.
Direct initialization of GMSIndoorBuilding is unavailable; it's likely obtained from other Google Maps SDK objects.
GMSIndoorBuilding
@interface GMSIndoorBuilding : NSObject
Describes a building which contains levels.
levels
Array of GMSIndoorLevel describing the levels which make up the building.
The levels are in ‘display order’ from top to bottom.
Declaration
Swift
var levels : [ GMSIndoorLevel ] { get }
Objective-C
@property ( nonatomic , strong , readonly ) NSArray < GMSIndoorLevel *> * _Nonnull levels ;
defaultLevelIndex
Index in the levels array of the default level.
Declaration
Swift
var defaultLevelIndex : UInt { get }
Objective-C
@property ( nonatomic , readonly ) NSUInteger defaultLevelIndex ;
underground
If YES, the building is entirely underground and supports being hidden.
Declaration
Swift
var isUnderground : Bool { get }
Objective-C
@property ( nonatomic , readonly , getter = isUnderground ) BOOL underground ;
-init
Unavailable
Declaration
Objective-C
- ( instancetype ) init NS_UNAVAILABLE ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]
