---
title: "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSCoordinateBounds
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSCoordinateBounds
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
GMSCoordinateBounds represents a rectangular area on the Earth's surface, defined by its northeast and southwest corners.
It's immutable, meaning it cannot be changed after creation, but methods provide ways to create new, expanded bounds.
You can initialize a GMSCoordinateBounds using two coordinates, a region, or a path.
This class offers functionalities like checking if a coordinate or another bounds is contained or intersects with the current bounds.
It is considered invalid if it does not contain any points, such as when initialized without coordinates, but can become valid through methods like includingCoordinate: or includingBounds: .
GMSCoordinateBounds
@interface GMSCoordinateBounds : NSObject
GMSCoordinateBounds represents a rectangular bounding box on the Earth’s surface.
GMSCoordinateBounds is immutable and can’t be modified after construction.
northEast
The North-East corner of these bounds.
Declaration
Swift
var northEast : CLLocationCoordinate2D { get }
Objective-C
@property ( nonatomic , readonly ) CLLocationCoordinate2D northEast ;
southWest
The South-West corner of these bounds.
Declaration
Swift
var southWest : CLLocationCoordinate2D { get }
Objective-C
@property ( nonatomic , readonly ) CLLocationCoordinate2D southWest ;
valid
Returns NO if this bounds does not contain any points. For example, [[GMSCoordinateBounds alloc]
init].valid == NO.
When an invalid bounds is expanded with valid coordinates via includingCoordinate: or
includingBounds:, the resulting bounds will be valid but contain only the new coordinates.
Declaration
Swift
var isValid : Bool { get }
Objective-C
@property ( nonatomic , readonly , getter = isValid ) BOOL valid ;
-initWithCoordinate:coordinate:
Inits the northEast and southWest bounds corresponding to the rectangular region defined by the
two corners.
It is ambiguous whether the longitude of the box extends from |coord1| to |coord2| or vice-versa;
the box is constructed as the smaller of the two variants, eliminating the ambiguity.
Declaration
Swift
init ( coordinate coord1 : CLLocationCoordinate2D , coordinate coord2 : CLLocationCoordinate2D )
Objective-C
- ( nonnull id ) initWithCoordinate :( CLLocationCoordinate2D ) coord1
coordinate :( CLLocationCoordinate2D ) coord2 ;
-includingCoordinate:
Returns a GMSCoordinateBounds representing the current bounds extended to include the passed-in
coordinate.
If the current bounds is invalid, the result is a valid bounds containing only |coordinate|.
Declaration
Swift
func includingCoordinate ( _ coordinate : CLLocationCoordinate2D ) -> GMSCoordinateBounds
Objective-C
- ( nonnull GMSCoordinateBounds * ) includingCoordinate :
( CLLocationCoordinate2D ) coordinate ;
-includingBounds:
Returns a GMSCoordinateBounds representing the current bounds extended to include the entire
other bounds.
If the current bounds is invalid, the result is a valid bounds equal to |other|.
Declaration
Swift
func includingBounds ( _ other : GMSCoordinateBounds ) -> GMSCoordinateBounds
Objective-C
- ( nonnull GMSCoordinateBounds * ) includingBounds :
( nonnull GMSCoordinateBounds * ) other ;
-containsCoordinate:
Returns YES if |coordinate| is contained within this bounds. This includes points that lie
exactly on the edge of the bounds.
Declaration
Swift
func contains ( _ coordinate : CLLocationCoordinate2D ) -> Bool
Objective-C
- ( BOOL ) containsCoordinate :( CLLocationCoordinate2D ) coordinate ;
-intersectsBounds:
Returns YES if |other| overlaps with this bounds. Two bounds are overlapping if there is at least
one coordinate point contained by both.
Declaration
Swift
func intersects ( _ other : GMSCoordinateBounds ) -> Bool
Objective-C
- ( BOOL ) intersectsBounds :( nonnull GMSCoordinateBounds * ) other ;
GoogleMaps
-initWithRegion:
Inits with bounds that encompass region .
Declaration
Swift
init ( region : GMSVisibleRegion )
Objective-C
- ( nonnull id ) initWithRegion :( GMSVisibleRegion ) region ;
-initWithPath:
Inits with bounds that encompass path .
Declaration
Swift
init ( path : GMSPath )
Objective-C
- ( nonnull id ) initWithPath :( nonnull GMSPath * ) path ;
-includingPath:
Returns a GMSCoordinateBounds representing the current bounds extended to include path .
Declaration
Swift
func includingPath ( _ path : GMSPath ) -> GMSCoordinateBounds
Objective-C
- ( nonnull GMSCoordinateBounds * ) includingPath :( nonnull GMSPath * ) path ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["`GMSCoordinateBounds` defines a rectangular area on Earth's surface, represented by `northEast` and `southWest` corners. Key actions include initializing bounds with two coordinates, a region, or a path. Bounds can be extended to include a coordinate, another bounds, or a path. You can check if bounds are valid or contain a specific coordinate, or if they intersect with another bounds. It is immutable.\n"]]
