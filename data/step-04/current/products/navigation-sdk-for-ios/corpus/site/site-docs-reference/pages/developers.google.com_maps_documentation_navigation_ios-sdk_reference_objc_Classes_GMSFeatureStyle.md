---
title: "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSFeatureStyle
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSFeatureStyle
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
GMSFeatureStyle defines the visual appearance of map features, such as fill color, border color, and border width.
It can be used to style points, lines, and polygons on a Google Map.
Developers can create and customize GMSFeatureStyle instances to achieve desired visual effects.
The GMSFeatureStyle class provides properties to control fill color, stroke color, stroke width, and point radius.
It is immutable and can be copied to create modified versions using mutableCopy .
GMSFeatureStyle
@interface GMSFeatureStyle : NSObject < NSCopying , NSMutableCopying >
Specifies how a map feature should appear when displayed on a map.
+styleWithFillColor:strokeColor:strokeWidth:
Creates a new style.
Declaration
Objective-C
+ ( nonnull instancetype ) styleWithFillColor :( nullable UIColor * ) fillColor
strokeColor :( nullable UIColor * ) strokeColor
strokeWidth :( CGFloat ) strokeWidth ;
-initWithFillColor:strokeColor:strokeWidth:
Initializes a new style.
Declaration
Swift
init ( fill fillColor : UIColor ?, stroke strokeColor : UIColor ?, strokeWidth : CGFloat )
Objective-C
- ( nonnull instancetype ) initWithFillColor :( nullable UIColor * ) fillColor
strokeColor :( nullable UIColor * ) strokeColor
strokeWidth :( CGFloat ) strokeWidth ;
-init
Initializes a default style.
Declaration
Swift
init ()
Objective-C
- ( nonnull instancetype ) init ;
fillColor
Specifies the fill color, including the alpha channel.
Declaration
Swift
@NSCopying var fillColor : UIColor ? { get }
Objective-C
@property ( nonatomic , copy , readonly , nullable ) UIColor * fillColor ;
strokeColor
Specifies the border color, including the alpha channel.
Declaration
Swift
@NSCopying var strokeColor : UIColor ? { get }
Objective-C
@property ( nonatomic , copy , readonly , nullable ) UIColor * strokeColor ;
strokeWidth
Specifies the border width, in screen points.
Declaration
Swift
var strokeWidth : CGFloat { get }
Objective-C
@property ( nonatomic , readonly ) CGFloat strokeWidth ;
pointRadius
Specifies the radius of a point. Only applies to point geometries.
Declaration
Swift
var pointRadius : CGFloat { get }
Objective-C
@property ( nonatomic , readonly ) CGFloat pointRadius ;
-copy
Declaration
Swift
func copy () -> FeatureStyle
Objective-C
- ( GMSFeatureStyle * ) copy ;
-mutableCopy
Declaration
Swift
func mutableCopy () -> MutableFeatureStyle
Objective-C
- ( GMSMutableFeatureStyle * ) mutableCopy ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]
