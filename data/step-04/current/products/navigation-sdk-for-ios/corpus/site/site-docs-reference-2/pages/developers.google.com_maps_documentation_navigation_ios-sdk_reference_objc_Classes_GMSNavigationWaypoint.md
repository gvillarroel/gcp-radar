---
title: "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSNavigationWaypoint
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSNavigationWaypoint
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
GMSNavigationWaypoint is an immutable class used to define destinations for navigation, initialized using coordinates or a Google Place ID.
Waypoints can have a title, coordinates, Place ID, and preferences for side of road and heading.
It provides methods for initialization using location, Place ID, and side of road preferences.
GMSNavigationWaypoint offers properties to access the title, coordinates, Place ID, and road preferences of the waypoint.
While immutable itself, it can be copied or mutated into a GMSNavigationMutableWaypoint .
GMSNavigationWaypoint
@interface GMSNavigationWaypoint : NSObject < NSCopying , NSMutableCopying >
An immutable waypoint class, used to specify navigation destinations. It may be initialized from
a CLLocationCoordinate2D or a Google Place ID.
title
Declaration
Swift
var title : String { get }
Objective-C
@property ( nonatomic , readonly ) NSString * title
coordinate
The coordinates of the waypoint. This is kCLLocationCoordinate2DInvalid if this waypoint was
initialized from a Place ID.
Declaration
Swift
var coordinate : CLLocationCoordinate2D { get }
Objective-C
@property ( nonatomic , readonly ) CLLocationCoordinate2D coordinate ;
placeID
The place ID associated with the waypoint.
For waypoints created via -initWithPlaceID:title: , this is the place ID for the destination to
which routing will be done.
For waypoints created via -initWithLocation:placeID:title: , this is the place ID of the place
to be used for arrival context when routing to the given location.
For other waypoints, this property will be nil.
Declaration
Swift
var placeID : String ? { get }
Objective-C
@property ( nonatomic , copy , readonly , nullable ) NSString * placeID ;
navigationPointToken
The navigation point token of this waypoint.
This is nil if this waypoint was initialized without a navigation point token.
Declaration
Swift
var navigationPointToken : String ? { get }
Objective-C
@property ( nonatomic , copy , readonly , nullable ) NSString * navigationPointToken ;
preferSameSideOfRoad
Whether it is preferred to route the driver to the same side of the
road. The route will arrive on the preferred side of the road unless there is a significant
delay caused by a road closure or slow-moving traffic. Default to NO.
Declaration
Swift
var preferSameSideOfRoad : Bool { get }
Objective-C
@property ( nonatomic , readonly ) BOOL preferSameSideOfRoad ;
preferredHeading
An angle used to express the direction of traffic on the side of the road that the vehicle
should arrive on. Consequently, it is not useful for one-way streets.
Units expressed in degrees [0, 360], where 0 means North and angles increase clockwise.
Default and unset value is -1.
Declaration
Swift
var preferredHeading : Int32 { get }
Objective-C
@property ( nonatomic , readonly ) int32_t preferredHeading ;
vehicleStopover
Indicates that the waypoint is meant for vehicles to stop at, where the intention is to either
pickup or drop-off. When you set this value, waypoints on roads that are unsuitable for pickup
and drop-off may be adjusted to a more suitable location. This option works only for DRIVE and
TWO_WHEELER travel modes. Default to NO. Note: In certain cases, particularly in metro areas,
waypoints can not be set within tunnels even if vehicleStopover is set to NO.
Declaration
Swift
var vehicleStopover : Bool { get }
Objective-C
@property ( nonatomic , readonly ) BOOL vehicleStopover ;
-initWithLocation:title:
Initializes this GMSNavigationWaypoint to represent a location specified by 2D coordinates.
Declaration
Swift
init ?( location : CLLocationCoordinate2D , title : String )
Objective-C
- ( nullable instancetype ) initWithLocation :( CLLocationCoordinate2D ) location
title :( nonnull NSString * ) title ;
Parameters
location
The location of this waypoint.
title
A string representing the name of the waypoint.
Return Value
An instance of GMSNavigationWaypoint, or nil if the location is not valid.
-initWithPlaceID:title:
Initializes this GMSNavigationWaypoint to represent a location specified by a Place ID.
Declaration
Swift
init ?( placeID : String , title : String )
Objective-C
- ( nullable instancetype ) initWithPlaceID :( nonnull NSString * ) placeID
title :( nonnull NSString * ) title ;
Parameters
placeID
The Google Place ID for this waypoint.
title
A string representing the name of the waypoint.
Return Value
An instance of GMSNavigationWaypoint, or nil if the Place ID string is nil or empty.
-initWithLocation:placeID:title:
Initializes a waypoint which will route to the given location using the given placeID as context.
If you only have either a placeID or a location, use initWithPlaceID:title: or
initWithLocation:title:
Declaration
Swift
init ?( location : CLLocationCoordinate2D , placeID : String , title : String )
Objective-C
- ( nullable instancetype ) initWithLocation :( CLLocationCoordinate2D ) location
placeID :( nonnull NSString * ) placeID
title :( nonnull NSString * ) title ;
Parameters
location
The location of this waypoint.
placeID
The ID of a place to be used to provide arrival context for the location.
title
A string representing the name of the waypoint.
Return Value
An instance of GMSNavigationWaypoint , or nil if placeID is nil/empty, or if
location is invalid.
-initWithNavigationPointToken:title:
Initializes this GMSNavigationWaypoint to represent a location specified by a navigation point
token.
Declaration
Swift
init ?( navigationPointToken : String , title : String )
Objective-C
- ( nullable instancetype ) initWithNavigationPointToken :
( nonnull NSString * ) navigationPointToken
title :( nonnull NSString * ) title ;
Parameters
navigationPointToken
An opaque token returned by the Directions API that represents a
precise waypoint location on the Google road network.
title
A string representing the name of the waypoint.
Return Value
An instance of GMSNavigationWaypoint , or nil if the navigation point token is
empty.
-initWithLocation:title:preferSameSideOfRoad:
Initializes GMSNavigationWaypoint to represent a location specified by 2D coordinates and side
of road preferences.
Declaration
Swift
convenience init ?( location : CLLocationCoordinate2D , title : String , preferSameSideOfRoad : Bool )
Objective-C
- ( nullable instancetype ) initWithLocation :( CLLocationCoordinate2D ) location
title :( nonnull NSString * ) title
preferSameSideOfRoad :( BOOL ) preferSameSideOfRoad ;
Parameters
location
The latitude and longitude of the waypoint.
title
A string representing the name of the waypoint.
preferSameSideOfRoad
Whether it is preferred to route the driver to the same side of the
road. The route will arrive on the preferred side of the road unless there is a significant
delay caused by a road closure or slow-moving traffic.
Return Value
An instance of GMSNavigationWaypoint, or nil if the location is not valid.
-initWithLocation:title:preferredSegmentHeading:
Initializes GMSNavigationWaypoint to represent a location specified by 2D coordinates and side
of road preferences.
Declaration
Swift
convenience init ?( location : CLLocationCoordinate2D , title : String , preferredSegmentHeading : Int32 )
Objective-C
- ( nullable instancetype ) initWithLocation :( CLLocationCoordinate2D ) location
title :( nonnull NSString * ) title
preferredSegmentHeading :( int32_t ) preferredSegmentHeading ;
Parameters
location
The latitude and longitude of the waypoint.
title
A string representing the name of the waypoint.
preferredSegmentHeading
An angle used to express the direction of traffic on the side of
the road that the vehicle should arrive on. Consequently, it is not useful for one-way
streets.
Units expressed in degrees [0, 360], where 0 means North.
Return Value
An instance of GMSNavigationWaypoint, or nil if the location or the
preferredSegmentHeading is not valid.
-init
Unavailable
Declaration
Objective-C
- ( null_unspecified instancetype ) init NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE ;
-copy
Declaration
Swift
func copy () -> GMSNavigationWaypoint
Objective-C
- ( GMSNavigationWaypoint * ) copy ;
-mutableCopy
Declaration
Swift
func mutableCopy () -> GMSNavigationMutableWaypoint
Objective-C
- ( GMSNavigationMutableWaypoint * ) mutableCopy ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-26 UTC."],[],[]]
