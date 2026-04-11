---
title: "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSCircle
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSCircle
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
GMSCircle represents a circle on the Earth's surface, defined by its center position and radius.
It offers properties to customize the appearance, including stroke width, color, and fill color.
By default, the circle has a black outline with a width of 1 screen point and no fill.
You can create a GMSCircle instance using the convenience constructor, providing the position and radius.
Stroke width of 0 results in no stroke, and a nil fill color results in no fill.
GMSCircle
@interface GMSCircle : GMSOverlay
A circle on the Earth’s surface (spherical cap).
position
Position on Earth of circle center. Ignores invalid positions.
Declaration
Swift
var position : CLLocationCoordinate2D { get set }
Objective-C
@property ( nonatomic ) CLLocationCoordinate2D position ;
radius
Radius of the circle in meters; must be positive.
Declaration
Swift
var radius : CLLocationDistance { get set }
Objective-C
@property ( nonatomic ) CLLocationDistance radius ;
strokeWidth
The width of the circle’s outline in screen points. Defaults to 1. As per GMSPolygon , the width
does not scale when the map is zoomed.
Setting strokeWidth to 0 results in no stroke.
Declaration
Swift
var strokeWidth : CGFloat { get set }
Objective-C
@property ( nonatomic ) CGFloat strokeWidth ;
strokeColor
The color of this circle’s outline. The default value is black.
Declaration
Swift
var strokeColor : UIColor ? { get set }
Objective-C
@property ( nonatomic , nullable ) UIColor * strokeColor ;
fillColor
The interior of the circle is painted with fillColor. The default value is nil, resulting in no
fill.
Declaration
Swift
var fillColor : UIColor ? { get set }
Objective-C
@property ( nonatomic , nullable ) UIColor * fillColor ;
+circleWithPosition:radius:
Convenience constructor for GMSCircle for a particular position and radius. Other properties
will have default values. An invalid position will result in an overlay object that cannot be
drawn on the map.
Declaration
Swift
convenience init ( position : CLLocationCoordinate2D , radius : CLLocationDistance )
Objective-C
+ ( nonnull instancetype ) circleWithPosition :( CLLocationCoordinate2D ) position
radius :( CLLocationDistance ) radius ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]
