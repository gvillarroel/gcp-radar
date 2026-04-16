---
title: "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView
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
GMSMapView is the central class in Google Maps SDK for iOS, managing map display, interactions, and properties like camera, markers, and UI settings.
It offers functionalities for feature layers, accessory view management, and navigation including route requests, turn-by-turn guidance, and camera control.
Developers can customize map styles, zoom levels, 3D buildings, indoor maps, and control UI elements like padding and accessibility.
GMSMapView supports navigation with session initiation, CarPlay pan gesture handling, and camera animation for smooth transitions.
All interactions with GMSMapView should occur on the main thread, and developers are encouraged to avoid deprecated methods for future compatibility.
GMSMapView
@interface GMSMapView : UIView
This is the main class of the Google Maps SDK for iOS and is the entry point for all methods
related to the map.
The map should be instantiated with one of the constructors -init or -initWithOptions: .
GMSMapView can only be read and modified from the main thread, similar to all UIKit objects.
Calling these methods from another thread will result in an exception or undefined behavior.
delegate
GMSMapView delegate.
Declaration
Swift
@IBOutlet weak var delegate : ( any GMSMapViewDelegate )? { get set }
Objective-C
@property ( nonatomic , weak , nullable ) id < GMSMapViewDelegate > delegate ;
camera
Controls the camera, which defines how the map is oriented. Modification of this property is
instantaneous.
Declaration
Swift
@NSCopying var camera : GMSCameraPosition { get set }
Objective-C
@property ( nonatomic , copy ) GMSCameraPosition * _Nonnull camera ;
projection
Returns a GMSProjection object that you can use to convert between screen coordinates and
latitude/longitude coordinates.
This is a snapshot of the current projection, and will not automatically update when the camera
moves. It represents either the projection of the last drawn GMSMapView frame, or; where the
camera has been explicitly set or the map just created, the upcoming frame. It will never be nil.
Declaration
Swift
var projection : GMSProjection { get }
Objective-C
@property ( nonatomic , readonly ) GMSProjection * _Nonnull projection ;
myLocationEnabled
Controls whether the My Location dot and accuracy circle is enabled. Defaults to NO.
Declaration
Swift
var isMyLocationEnabled : Bool { get set }
Objective-C
@property ( nonatomic , assign , unsafe_unretained , readwrite ,
getter = isMyLocationEnabled ) BOOL myLocationEnabled ;
myLocation
If My Location is enabled, reveals where the device location dot is being drawn. If it is
disabled, or it is enabled but no location data is available, this will be nil. This property is
observable using KVO.
Declaration
Swift
var myLocation : CLLocation ? { get }
Objective-C
@property ( nonatomic , readonly , nullable ) CLLocation * myLocation ;
selectedMarker
The marker that is selected. Setting this property selects a particular marker, showing an info
window on it. If this property is non-nil, setting it to nil deselects the marker, hiding the
info window. This property is observable using KVO.
Declaration
Swift
var selectedMarker : GMSMarker ? { get set }
Objective-C
@property ( nonatomic , nullable ) GMSMarker * selectedMarker ;
trafficEnabled
Controls whether the map is drawing traffic data, if available. This is subject to the
availability of traffic data. Defaults to NO.
Declaration
Swift
var isTrafficEnabled : Bool { get set }
Objective-C
@property ( nonatomic , assign , unsafe_unretained , readwrite ,
getter = isTrafficEnabled ) BOOL trafficEnabled ;
transitEnabled
Controls whether the map is drawing transit data, if available. This is subject to the
availability of transit data. Defaults to NO.
Declaration
Swift
var isTransitEnabled : Bool { get set }
Objective-C
@property ( nonatomic , assign , unsafe_unretained , readwrite ,
getter = isTransitEnabled ) BOOL transitEnabled ;
mapType
Controls the type of map tiles that should be displayed. Defaults to kGMSTypeNormal.
Declaration
Swift
var mapType : GMSMapViewType { get set }
Objective-C
@property ( nonatomic ) GMSMapViewType mapType ;
mapStyle
Controls the style of the map.
A non-nil mapStyle will only apply if mapType is Normal.
Declaration
Swift
var mapStyle : GMSMapStyle ? { get set }
Objective-C
@property ( nonatomic , nullable ) GMSMapStyle * mapStyle ;
overrideUserInterfaceStyle
Declaration
Swift
var overrideUserInterfaceStyle : UIUserInterfaceStyle { get set }
Objective-C
@property ( nonatomic ) UIUserInterfaceStyle overrideUserInterfaceStyle
minZoom
Minimum zoom (the farthest the camera may be zoomed out). Defaults to kGMSMinZoomLevel. Modified
with -setMinZoom:maxZoom:.
Declaration
Swift
var minZoom : Float { get }
Objective-C
@property ( nonatomic , readonly ) float minZoom ;
maxZoom
Maximum zoom (the closest the camera may be to the Earth). Defaults to kGMSMaxZoomLevel. Modified
with -setMinZoom:maxZoom:.
Declaration
Swift
var maxZoom : Float { get }
Objective-C
@property ( nonatomic , readonly ) float maxZoom ;
buildingsEnabled
If set, 3D buildings will be shown where available. Defaults to YES.
This may be useful when adding a custom tile layer to the map, in order to make it clearer at
high zoom levels. Changing this value will cause all tiles to be briefly invalidated.
Declaration
Swift
var isBuildingsEnabled : Bool { get set }
Objective-C
@property ( nonatomic , assign , unsafe_unretained , readwrite ,
getter = isBuildingsEnabled ) BOOL buildingsEnabled ;
indoorEnabled
Sets whether indoor maps are shown, where available. Defaults to YES.
If this is set to NO, caches for indoor data may be purged and any floor currently selected by
the end-user may be reset.
Declaration
Swift
var isIndoorEnabled : Bool { get set }
Objective-C
@property ( nonatomic , assign , unsafe_unretained , readwrite ,
getter = isIndoorEnabled ) BOOL indoorEnabled ;
indoorDisplay
Gets the GMSIndoorDisplay instance which allows to observe or control aspects of indoor data
display.
Declaration
Swift
var indoorDisplay : GMSIndoorDisplay { get }
Objective-C
@property ( nonatomic , readonly ) GMSIndoorDisplay * _Nonnull indoorDisplay ;
settings
Gets the GMSUISettings object, which controls user interface settings for the map.
Declaration
Swift
var settings : GMSUISettings { get }
Objective-C
@property ( nonatomic , readonly ) GMSUISettings * _Nonnull settings ;
padding
Controls the ‘visible’ region of the view. By applying padding an area around the edge of the
view can be created which will contain map data but will not contain UI controls.
If the padding is not balanced, the visual center of the view will move as appropriate. Padding
will also affect the projection property so the visible region will not include the padding
area. GMSCameraUpdate fitToBounds will ensure that both this padding and any padding requested
will be taken into account.
This property may be animated within a UIView-based animation block.
Declaration
Swift
var padding : UIEdgeInsets { get set }
Objective-C
@property ( nonatomic ) UIEdgeInsets padding ;
paddingAdjustmentBehavior
Controls how safe area insets are added to the padding values. Like padding, safe area insets
position map controls such as the compass, my location button and floor picker within the device
safe area.
Defaults to kGMSMapViewPaddingAdjustmentBehaviorAlways .
Declaration
Swift
var paddingAdjustmentBehavior : GMSMapViewPaddingAdjustmentBehavior { get set }
Objective-C
@property ( nonatomic ) GMSMapViewPaddingAdjustmentBehavior paddingAdjustmentBehavior ;
accessibilityElementsHidden
Defaults to YES . If set to NO , GMSMapView will generate accessibility elements for overlay
objects, such as GMSMarker and GMSPolyline .
This property follows the informal UIAccessibility protocol, except for the default value of
YES .
Declaration
Swift
var accessibilityElementsHidden : Bool { get set }
Objective-C
@property ( nonatomic ) BOOL accessibilityElementsHidden ;
layer
Accessor for the custom CALayer type used for the layer.
Declaration
Swift
var layer : GMSMapLayer { get }
Objective-C
@property ( nonatomic , retain , readonly ) GMSMapLayer * _Nonnull layer ;
preferredFrameRate
Controls the rendering frame rate. Default value is kGMSFrameRateMaximum .
Declaration
Swift
var preferredFrameRate : GMSFrameRate { get set }
Objective-C
@property ( nonatomic ) GMSFrameRate preferredFrameRate ;
cameraTargetBounds
If not nil, constrains the camera target so that gestures cannot cause it to leave the specified
bounds.
Declaration
Swift
var cameraTargetBounds : GMSCoordinateBounds ? { get set }
Objective-C
@property ( nonatomic , nullable ) GMSCoordinateBounds * cameraTargetBounds ;
mapCapabilities
All conditionally-available (dependent on mapID or other map settings) capabilities that are
available at the current moment in time. Does not include always-available capabilities.
Declaration
Swift
var mapCapabilities : GMSMapCapabilityFlags { get }
Objective-C
@property ( nonatomic , readonly ) GMSMapCapabilityFlags mapCapabilities ;
-init
Initializes with CGRectZero and default options.
Declaration
Swift
convenience init ()
Objective-C
- ( nonnull instancetype ) init ;
-initWithOptions:
Creates a new map view with the given options. The value of the options object is copied by this
method.
Declaration
Swift
init ( options : GMSMapViewOptions )
Objective-C
- ( nonnull instancetype ) initWithOptions :( nonnull GMSMapViewOptions * ) options ;
-initWithFrame:
Deprecated
Use -init or -initWithOptions: instead.
Declaration
Swift
convenience init ( frame : CGRect )
Objective-C
- ( instancetype ) initWithFrame :( CGRect ) frame
__GMS_AVAILABLE_BUT_DEPRECATED_MSG ( "Use -init or -initWithOptions: instead." );
-initWithCoder:
Deprecated
Use -init or -initWithOptions: instead.
Declaration
Swift
convenience init ?( coder : NSCoder )
Objective-C
- ( nullable instancetype ) initWithCoder :( NSCoder * ) coder
__GMS_AVAILABLE_BUT_DEPRECATED_MSG ( "Use -init or -initWithOptions: instead." );
+mapWithFrame:camera:
Deprecated
Use -init or -initWithOptions: instead.
Builds and returns a map view with a frame and camera target.
Declaration
Swift
class func map ( withFrame frame : CGRect , camera : GMSCameraPosition ) -> Self
Objective-C
+ ( nonnull instancetype ) mapWithFrame :( CGRect ) frame
camera :( nonnull GMSCameraPosition * ) camera ;
+mapWithFrame:mapID:camera:
Deprecated
Use -init or -initWithOptions: instead.
Convenience initializer to build and return a map view with a frame, map ID, and camera target.
Declaration
Objective-C
+ ( nonnull instancetype ) mapWithFrame :( CGRect ) frame
mapID :( nonnull GMSMapID * ) mapID
camera :( nonnull GMSCameraPosition * ) camera ;
-initWithFrame:camera:
Deprecated
Use -init or -initWithOptions: instead.
Builds and returns a map view, with a frame and camera target.
Declaration
Swift
convenience init ( frame : CGRect , camera : GMSCameraPosition )
Objective-C
- ( nonnull instancetype ) initWithFrame :( CGRect ) frame
camera :( nonnull GMSCameraPosition * ) camera ;
-initWithFrame:mapID:camera:
Deprecated
Use -init or -initWithOptions: instead.
Builds and returns a map view with a frame, map ID, and camera target.
Declaration
Swift
convenience init ( frame : CGRect , mapID : GMSMapID , camera : GMSCameraPosition )
Objective-C
- ( nonnull instancetype ) initWithFrame :( CGRect ) frame
mapID :( nonnull GMSMapID * ) mapID
camera :( nonnull GMSCameraPosition * ) camera ;
-startRendering
Deprecated
This method is obsolete and will be removed in a future release.
Tells this map to power up its renderer. This is optional and idempotent.
Declaration
Swift
func startRendering ()
Objective-C
- ( void ) startRendering ;
-stopRendering
Deprecated
This method is obsolete and will be removed in a future release.
Tells this map to power down its renderer. This is optional and idempotent.
Declaration
Swift
func stopRendering ()
Objective-C
- ( void ) stopRendering ;
-clear
Clears all markup that has been added to the map, including markers, polylines and ground
overlays. This will not clear the visible location dot or reset the current mapType.
Declaration
Swift
func clear ()
Objective-C
- ( void ) clear ;
-setMinZoom:maxZoom:
Sets minZoom and maxZoom . This method expects the minimum to be less than or equal to the
maximum, and will throw an exception with name NSRangeException otherwise.
Declaration
Swift
func setMinZoom ( _ minZoom : Float , maxZoom : Float )
Objective-C
- ( void ) setMinZoom :( float ) minZoom maxZoom :( float ) maxZoom ;
-cameraForBounds:insets:
Build a GMSCameraPosition that presents bounds with padding . The camera will have a zero
bearing and tilt (i.e., facing north and looking directly at the Earth). This takes the frame and
padding of this GMSMapView into account.
If the bounds is invalid this method will return a nil camera.
Declaration
Swift
func camera ( for bounds : GMSCoordinateBounds , insets : UIEdgeInsets ) -> GMSCameraPosition ?
Objective-C
- ( nullable GMSCameraPosition * ) cameraForBounds :
( nonnull GMSCoordinateBounds * ) bounds
insets :( UIEdgeInsets ) insets ;
-moveCamera:
Changes the camera according to update . The camera change is instantaneous (with no
animation).
Declaration
Swift
func moveCamera ( _ update : GMSCameraUpdate )
Objective-C
- ( void ) moveCamera :( nonnull GMSCameraUpdate * ) update ;
-areEqualForRenderingPosition:position:
Check whether the given camera positions would practically cause the camera to be rendered the
same, taking into account the level of precision and transformations used internally.
Declaration
Swift
func areEqual ( forRenderingPosition position : GMSCameraPosition , position otherPosition : GMSCameraPosition ) -> Bool
Objective-C
- ( BOOL ) areEqualForRenderingPosition :( nonnull GMSCameraPosition * ) position
position :( nonnull GMSCameraPosition * ) otherPosition ;
-featureLayerOfFeatureType:
Returns a feature layer of the specified type. Feature layers must be configured in the Cloud
Console.
If a layer of the specified type does not exist on this map, or if data-driven styling is not
enabled, or if the Metal rendering framework is not used, the resulting layer’s isAvailable
will be NO , and will not respond to any calls.
Requires the Metal renderer. Learn how to enable Metal at
https://developers.google.com/maps/documentation/ios-sdk/config#use-metal
Declaration
Swift
func featureLayer ( of featureType : FeatureType ) -> FeatureLayer < PlaceFeature >
Objective-C
- ( nonnull GMSFeatureLayer < GMSPlaceFeature *> * ) featureLayerOfFeatureType :
( nonnull GMSFeatureType ) featureType ;
-datasetFeatureLayerOfDatasetID:
Returns a dataset feature layer of the specified dataset. Dataset IDs must be configured in the
Cloud Console.
If a dataset of the specified ID does not exist on this map, or if data-driven styling is not
enabled, the resulting layer’s isAvailable will be NO , and will not respond to any calls.
Declaration
Swift
func datasetFeatureLayer ( of datasetID : String ) -> DatasetFeatureLayer
Objective-C
- ( nonnull GMSDatasetFeatureLayer * ) datasetFeatureLayerOfDatasetID :
( nonnull NSString * ) datasetID ;
AccessoryViewManagement
-invalidateLayoutForAccessoryView:
Invalidates an accessory view and triggers a re-layout for that view. The view must be one of the
current accessory views. If guidance is inactive, this call is a NO-OP instruction.
Declaration
Swift
func invalidateLayout ( forAccessoryView accessoryView : any UIView & GMSNavigationAccessoryView )
Objective-C
- ( void ) invalidateLayoutForAccessoryView :
( nonnull UIView < GMSNavigationAccessoryView > * ) accessoryView ;
-setHeaderAccessoryView:
Sets the position of the accessory view below the primary header of the navigation UI. Passing a
nil value removes the accessory view. If guidance is inactive, this call is a NO-OP instruction.
@note: If the map view is short, the SDK hides the accessory view due to limited space. The views
are internally managed to optimize display of the map.
Declaration
Swift
func setHeaderAccessory ( _ headerAccessoryView : ( any UIView & GMSNavigationAccessoryView )?)
Objective-C
- ( void ) setHeaderAccessoryView :
( nullable UIView < GMSNavigationAccessoryView > * ) headerAccessoryView ;
CarPlay
-didBeginPanGesture
Preview feature
This method should be called from the application’s implementation of the CPMapTemplateDelegate
method -mapTemplateDidBeginPanGesture: in order to implement pan gestures for CarPlay map
templates.
Declaration
Swift
func didBeginPanGesture ()
Objective-C
- ( void ) didBeginPanGesture ;
-didUpdatePanGestureWithTranslation:velocity:
Preview feature
This method should be called from the application’s implementation of the CPMapTemplateDelegate
method -mapTemplate:didUpdatePanGestureWithTranslation: in order to implement pan gestures for
CarPlay map templates.
Declaration
Swift
func didUpdatePanGesture ( withTranslation translation : CGPoint , velocity : CGPoint )
Objective-C
- ( void ) didUpdatePanGestureWithTranslation :( CGPoint ) translation
velocity :( CGPoint ) velocity ;
-didEndPanGestureWithVelocity:
Preview feature
This method should be called from the application’s implementation of the CPMapTemplateDelegate
method -mapTemplate:didEndPanGestureWithVelocity: in order to implement pan gestures for
CarPlay map templates.
Declaration
Swift
func didEndPanGesture ( withVelocity velocity : CGPoint )
Objective-C
- ( void ) didEndPanGestureWithVelocity :( CGPoint ) velocity ;
Navigation
navigationUIDelegate
A delegate of GMSMapView which receives callbacks for navigation UI events.
Declaration
Swift
@IBOutlet weak var navigationUIDelegate : ( any GMSMapViewNavigationUIDelegate )? { get set }
Objective-C
@property ( nonatomic , weak , nullable ) id < GMSMapViewNavigationUIDelegate > navigationUIDelegate ;
navigationEnabled
Whether navigation functionality is enabled for this map. If this is YES, routes and turn-by-turn
directions can be displayed on the map, the camera can enter following mode, and the re-center
button appears when the camera is not following the device location.
If the user has not accepted the Google Navigation terms and conditions, setting this property
will have no effect. To show the terms and conditions dialog, see the methods on
GMSNavigationServices .
Declaration
Swift
var isNavigationEnabled : Bool { get set }
Objective-C
@property ( nonatomic , assign , unsafe_unretained , readwrite ,
getter = isNavigationEnabled ) BOOL navigationEnabled ;
navigator
The navigator for this GMSMapView which allows routes to be requested and turn-by-turn guidance
to be started.
If the user has not accepted the Google Navigation terms and conditions, this will be nil. To
show the terms and conditions dialog, see the methods on GMSNavigationServices .
Declaration
Swift
var navigator : GMSNavigator ? { get }
Objective-C
@property ( nonatomic , readonly , nullable ) GMSNavigator * navigator ;
roadSnappedLocationProvider
Allows subscription to road-snapped location updates.
If the user has not accepted the Google Navigation terms and conditions, this will be nil. To
show the terms and conditions dialog, see the methods on GMSNavigationServices .
Declaration
Swift
var roadSnappedLocationProvider : GMSRoadSnappedLocationProvider ? { get }
Objective-C
@property ( nonatomic , readonly , nullable ) GMSRoadSnappedLocationProvider * roadSnappedLocationProvider ;
locationSimulator
Allows you to simulate the device location. The simulated location affects the position of the
chevron on the map, the progress of turn-by-turn guidance, and the updates provided by the
road-snapped location provider.
If the user has not accepted the Google Navigation terms and conditions, this will be nil. To
show the terms and conditions dialog, see the methods on GMSNavigationServices .
Declaration
Swift
var locationSimulator : GMSLocationSimulator ? { get }
Objective-C
@property ( nonatomic , readonly , nullable ) GMSLocationSimulator * locationSimulator ;
cameraMode
The mode of the camera which determines its behavior when the navigationEnabled property is set
to YES. See GMSNavigationCameraMode for the available modes.
Declaration
Swift
var cameraMode : GMSNavigationCameraMode { get set }
Objective-C
@property ( nonatomic ) GMSNavigationCameraMode cameraMode ;
followingPerspective
The camera perspective that will be used when following the device’s location. The
navigationEnabled property must be set to YES and cameraMode must be set to
GMSNavigationCameraModeFollowing for this perspective to take effect.
Declaration
Swift
var followingPerspective : GMSNavigationCameraPerspective { get set }
Objective-C
@property ( nonatomic ) GMSNavigationCameraPerspective followingPerspective ;
travelMode
The travel mode which determines what type of routes will be fetched and the way that device
course is determined.
In driving mode, device course is based on the direction of movement, while in cycling or walking
mode the course is based on the compass direction the device is facing. Device course is
represented by the direction of the device location marker and reported by the
GMSRoadSnappedLocationProvider .
Declaration
Swift
var travelMode : GMSNavigationTravelMode { get set }
Objective-C
@property ( nonatomic ) GMSNavigationTravelMode travelMode ;
lightingMode
The lighting mode determines which color scheme should be used for rendering the map. It is also
used to determine the default colors of various interface elements.
Declaration
Swift
var lightingMode : GMSNavigationLightingMode { get set }
Objective-C
@property ( nonatomic ) GMSNavigationLightingMode lightingMode ;
shouldDisplaySpeedLimit
Determines whether the speed limit should be displayed when guidance is active and speed limit
data is available. The default value is NO.
Declaration
Swift
var shouldDisplaySpeedLimit : Bool { get set }
Objective-C
@property ( nonatomic ) BOOL shouldDisplaySpeedLimit ;
shouldDisplaySpeedometer
Specifies whether the speedometer icon is shown.
When enabled, a speedometer icon that indicates the vehicle speed appears in the bottom corner
during guidance. When reliable speed limit data is available, the speed limit icon is also
visible, and is attached with the speedometer icon. The speedometer icon can have different
colors for text and background, depending on the speed alert severity.
If the recenter button is enabled, then the speed limit and the speedometer icon are temporarily
hidden when the recenter button displays.
Declaration
Swift
var shouldDisplaySpeedometer : Bool { get set }
Objective-C
@property ( nonatomic ) BOOL shouldDisplaySpeedometer ;
navigationHeaderLayoutGuide
The rectangle that is covered by the navigation header. Height is zero when the header is hidden.
Declaration
Swift
var navigationHeaderLayoutGuide : UILayoutGuide { get }
Objective-C
@property ( nonatomic , readonly ) UILayoutGuide * _Nonnull navigationHeaderLayoutGuide ;
navigationFooterLayoutGuide
The rectangle that is covered by the navigation footer. Height is zero when the footer is hidden.
Declaration
Swift
var navigationFooterLayoutGuide : UILayoutGuide { get }
Objective-C
@property ( nonatomic , readonly ) UILayoutGuide * _Nonnull navigationFooterLayoutGuide ;
reportIncidentsAvailable
Experimental feature
Returns whether incident reporting is available.
Availability may depend on factors such as user location, network
connectivity, and the current state of the application.
Declaration
Swift
var isIncidentReportingAvailable : Bool { get }
Objective-C
@property ( nonatomic , readonly , getter = isIncidentReportingAvailable ) BOOL reportIncidentsAvailable ;
-presentReportIncidentsPanel:completion:
Experimental feature
Presents a panel allowing users to report an incident.
This method should only be called during active navigation and when incident reporting is
available. Ensure that reporting is available by checking the reportIncidentsAvailable property
before calling this method.
Declaration
Swift
func presentReportIncidentsPanel ( _ presentingViewController : UIViewController ?) async throws
Objective-C
- ( void ) presentReportIncidentsPanel :
( nullable UIViewController * ) presentingViewController
completion :
( nullable void ( ^ )( NSError * _Nullable )) completion ;
Parameters
presentingViewController
The view controller to present the report
incident panel from. If nil, the SDK will attempt to use the topmost view controller in the view
controller hierarchy.
completion
A block to be executed after the panel is presented or if an error occurs.
If an error occurs, the error parameter in the completion block will be non-nil and contain an
error from the domain GMSMapViewPresentReportIncidentPanelErrorDomain .
bottomTrailingButtonsLayoutGuide
Experimental
feature
The layout guide that is used to position the bottom trailing buttons.
Defaults to the navigationFooterLayoutGuide if not set.
To use the default position, do not set this property or set it to nil .
Declaration
Swift
var bottomTrailingButtonsLayoutGuide : UILayoutGuide ! { get set }
Objective-C
@property ( nonatomic , null_resettable ) UILayoutGuide * bottomTrailingButtonsLayoutGuide ;
bottomTrailingButtonsAlternateLayoutGuide
Experimental
feature
The layout guide that is used to position the bottom trailing buttons when the navigation footer
and header do not span the full width of the screen.
If not set, defaults to a layoutGuide where only the top anchor is constrained. To use the
default position, do not set this property or set it to nil .
Declaration
Swift
var bottomTrailingButtonsAlternateLayoutGuide : UILayoutGuide ! { get set }
Objective-C
@property ( nonatomic , null_resettable ) UILayoutGuide * bottomTrailingButtonsAlternateLayoutGuide ;
routeCalloutFormat
Specifies which route callout format (default, time, or distance) to use.
Declaration
Swift
var routeCalloutFormat : GMSNavigationRouteCalloutFormat { get set }
Objective-C
@property ( nonatomic ) GMSNavigationRouteCalloutFormat routeCalloutFormat ;
followingZoomLevel
Customized zoom level during navigation. Setting this value will override the default Navigation
SDK zoom level when the camera is following device location (i.e. cameraMode equals
GMSNavigationCameraModeFollowing). This can be set to GMSNavigationNoFollowingZoomLevel
if no zoom level override should be used.
Declaration
Swift
var followingZoomLevel : Float { get set }
Objective-C
@property ( nonatomic ) float followingZoomLevel ;
roadSnappedMyLocationSource
Sets the My Location provider for this map view.
Normally the My Location dot and accuracy circle for a map view are driven by the actual device
location. By setting this property, the My Location dot and accuracy circle will be driven by
the road-snapped location from the given location provider instead. To return to the normal
behavior, set this property to nil.
This has no effect when navigationEnabled is on for this map view.
Declaration
Swift
var roadSnappedMyLocationSource : GMSRoadSnappedLocationProvider ? { get set }
Objective-C
@property ( nonatomic , nullable ) GMSRoadSnappedLocationProvider * roadSnappedMyLocationSource ;
-enableNavigationWithSession:
Begins navigation in this map view using the given navigation session.
Note: for the most efficient use of memory and CPU, call this method before
invoking any other navigation-related methods on this map view.
Declaration
Swift
func enableNavigation ( with navigationSession : GMSNavigationSession ) -> Bool
Objective-C
- ( BOOL ) enableNavigationWithSession :
( nonnull GMSNavigationSession * ) navigationSession ;
Return Value
Whether navigation was successfully started (for instance, NO will
be returned if the terms and conditions have not yet been accepted).
Animation
-animateToCameraPosition:
Animates the camera of this map to cameraPosition .
Declaration
Swift
func animate ( to cameraPosition : GMSCameraPosition )
Objective-C
- ( void ) animateToCameraPosition :( nonnull GMSCameraPosition * ) cameraPosition ;
-animateToLocation:
As -animateToCameraPosition: , but changes only the location of the camera (i.e., from the
current location to location ).
Declaration
Swift
func animate ( toLocation location : CLLocationCoordinate2D )
Objective-C
- ( void ) animateToLocation :( CLLocationCoordinate2D ) location ;
-animateToZoom:
As -animateToCameraPosition: , but changes only the zoom level of the camera.
This value is clamped by [kGMSMinZoomLevel, kGMSMaxZoomLevel].
Declaration
Swift
func animate ( toZoom zoom : Float )
Objective-C
- ( void ) animateToZoom :( float ) zoom ;
-animateToBearing:
As -animateToCameraPosition: , but changes only the bearing of the camera (in degrees). Zero
indicates true north.
Declaration
Swift
func animate ( toBearing bearing : CLLocationDirection )
Objective-C
- ( void ) animateToBearing :( CLLocationDirection ) bearing ;
-animateToViewingAngle:
As -animateToCameraPosition: , but changes only the viewing angle of the camera (in degrees).
This value will be clamped to a minimum of zero (i.e., facing straight down) and between 30 and
45 degrees towards the horizon, depending on the relative closeness to the earth.
Declaration
Swift
func animate ( toViewingAngle viewingAngle : Double )
Objective-C
- ( void ) animateToViewingAngle :( double ) viewingAngle ;
-animateWithCameraUpdate:
Applies cameraUpdate to the current camera, and then uses the result as per
-animateToCameraPosition: .
Declaration
Swift
func animate ( with cameraUpdate : GMSCameraUpdate )
Objective-C
- ( void ) animateWithCameraUpdate :( nonnull GMSCameraUpdate * ) cameraUpdate ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-18 UTC."],[],[]]
