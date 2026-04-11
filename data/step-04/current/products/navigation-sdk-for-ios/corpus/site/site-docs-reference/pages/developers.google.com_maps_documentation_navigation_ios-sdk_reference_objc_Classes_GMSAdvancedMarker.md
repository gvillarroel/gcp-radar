---
title: "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSAdvancedMarker
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSAdvancedMarker
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
GMSAdvancedMarker is an icon placed at a specific point on the map, similar to GMSMarker but with advanced features.
The collisionBehavior property controls if the marker's visibility is affected by other markers or map elements.
GMSAdvancedMarker
@interface GMSAdvancedMarker : GMSMarker
An advanced marker is an icon placed at a particular point on the map’s surface.
collisionBehavior
The marker’s collision behavior, which determines whether or not the marker’s visibility can be
affected by other markers or labeled content on the map.
Declaration
Swift
var collisionBehavior : GMSCollisionBehavior { get set }
Objective-C
@property ( nonatomic ) GMSCollisionBehavior collisionBehavior ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["The `GMSAdvancedMarker` class represents an icon on a map's surface. Its key property is `collisionBehavior`, which dictates how the marker's visibility is affected by other markers or labeled content. This property can be both read and set, using the `GMSCollisionBehavior` enum to define the desired behavior. The `collisionBehavior` property can be declared in both Swift and Objective-C.\n"]]
