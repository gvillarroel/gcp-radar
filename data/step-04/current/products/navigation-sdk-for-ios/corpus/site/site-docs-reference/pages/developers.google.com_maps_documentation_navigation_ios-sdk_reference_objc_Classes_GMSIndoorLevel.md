---
title: "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSIndoorLevel
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSIndoorLevel
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
GMSIndoorLevel objects represent a single level within a building, and multiple buildings can share the same level instance.
Each level has a localized name property for full display (e.g., "Ground floor") and a shortName property for abbreviated display (e.g., "1").
Instances of GMSIndoorLevel are compared based on the level itself, not the level number or name, meaning levels with different names/numbers can be considered equal if they represent the same physical level.
You cannot directly initialize a GMSIndoorLevel object using init ; it is marked as unavailable.
GMSIndoorLevel
@interface GMSIndoorLevel : NSObject
- ( instancetype ) init NS_UNAVAILABLE ;
/** Localized display name for the level, e.g. "Ground floor". */
@property ( nonatomic , copy , readonly , nullable ) NSString * name ;
/** Localized short display name for the level, e.g. "1". */
@property ( nonatomic , copy , readonly , nullable ) NSString * shortName ;
@end
-init
Unavailable
Declaration
Objective-C
- ( instancetype ) init NS_UNAVAILABLE ;
name
Localized display name for the level, e.g. “Ground floor”.
Declaration
Swift
var name : String ? { get }
Objective-C
@property ( nonatomic , copy , readonly , nullable ) NSString * name ;
shortName
Localized short display name for the level, e.g. “1”.
Declaration
Swift
var shortName : String ? { get }
Objective-C
@property ( nonatomic , copy , readonly , nullable ) NSString * shortName ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["GMSIndoorLevel describes a building's level, allowing multiple buildings to share one. It includes two main properties: `name`, a localized display name (e.g., \"Ground floor\"), and `shortName`, a localized short display name (e.g., \"1\"). The `init` method is unavailable. Level instances can compare as equal despite differing names or numbers when shared between buildings. The information provided can be accessed via Swift and Objective-C.\n"]]
