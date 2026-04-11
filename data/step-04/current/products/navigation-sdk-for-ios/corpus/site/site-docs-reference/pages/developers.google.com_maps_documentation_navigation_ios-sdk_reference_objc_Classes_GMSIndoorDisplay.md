---
title: "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSIndoorDisplay
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSIndoorDisplay
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
GMSIndoorDisplay allows observation and control of indoor level data display, similar to GMSMapView .
It provides access to the currently focused building ( activeBuilding ) and its active level ( activeLevel ).
The activeLevel property can be manipulated to change the displayed level or hide the building while keeping it active.
A delegate ( delegate ) can be assigned to receive updates and events related to indoor display changes.
GMSIndoorDisplay operations should be performed on the main thread to ensure proper functionality.
GMSIndoorDisplay
@interface GMSIndoorDisplay : NSObject
Provides ability to observe or control the display of indoor level data.
Like GMSMapView , GMSIndoorDisplay may only be used from the main thread.
delegate
GMSIndoorDisplay delegate
Declaration
Swift
weak var delegate : ( any GMSIndoorDisplayDelegate )? { get set }
Objective-C
@property ( nonatomic , weak , nullable ) id < GMSIndoorDisplayDelegate > delegate ;
activeBuilding
Provides the currently focused building, will be nil if there is no building with indoor data
currently under focus.
Declaration
Swift
var activeBuilding : GMSIndoorBuilding ? { get }
Objective-C
@property ( nonatomic , readonly , nullable ) GMSIndoorBuilding * activeBuilding ;
activeLevel
Provides and controls the active level for activeBuilding. Will be updated whenever
activeBuilding changes, and may be set to any member of activeBuilding’s levels property. May
also be set to nil if the building is underground, to stop showing the building (the building
will remain active).
Will always be nil if activeBuilding is nil.
Any attempt to set it to an invalid value will be ignored.
Declaration
Swift
var activeLevel : GMSIndoorLevel ? { get set }
Objective-C
@property ( nonatomic , nullable ) GMSIndoorLevel * activeLevel ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-18 UTC."],[],["`GMSIndoorDisplay` manages indoor level data display and must be used on the main thread. It allows observation and control via a delegate. `activeBuilding` property provides the currently focused building. `activeLevel` manages the visible level within the `activeBuilding`, updating with building changes. `activeLevel` can be set to a valid building's level or nil to hide the underground building, if no building is focused then it will be nil. Invalid `activeLevel` values are ignored.\n"]]
