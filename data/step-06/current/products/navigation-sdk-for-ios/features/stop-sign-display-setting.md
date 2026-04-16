---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:01.310Z"
product_name: "Navigation SDK for iOS"
product_slug: "navigation-sdk-for-ios"
feature_name: "Stop sign display setting"
feature_slug: "stop-sign-display-setting"
latest_feature_date: "2025-05-19"
deprecation_date: "2025-05-19"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/controls"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/carplay"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/reference"
keywords:
  - "stop"
  - "sign"
  - "display"
  - "setting"
  - "the"
  - "gmsuisettings"
  - "property"
  - "for"
---

# Stop sign display setting

Product: Navigation SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

The GMSUISettings property for showing stop signs is deprecated because stop signs now appear during navigation by default when data is available; deprecated on 2025-05-19.

## Extended Definition

The GMSUISettings property for showing stop signs is deprecated because stop signs now appear during navigation by default when data is available; deprecated on 2025-05-19.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/carplay](https://developers.google.com/maps/documentation/navigation/ios-sdk/carplay)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference)

## Supporting Pages

### Modify the navigation UI \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Swift mapView . settings . showsTrafficLights = true mapView . settings . showsStopSigns = true Objective-C mapView . settings . showsTrafficLights = YES ; mapView . settings . showsStopSigns = YES ; Speedometer control When navigation is enabled and the travel mode is set to driving, the Navigation SDK for iOS displays a speed limit control in the lower corner of the map that shows the current speed limit.
- Traffic lights and stop signs You can enable the display of traffic lights and stop signs during active navigation in the mapView , which provides additional context for routes and trip maneuvers.
- Destination markers You can show or hide the destination markers for a given route by setting the showsDestinationMarkers property of GMSUISettings .
- To enable this feature, call the GMSMapView settings for each option independently: showsTrafficLights and showsStopSigns .

### "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView)
- Source ID: `site-docs-reference`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Declaration Swift var indoorDisplay : GMSIndoorDisplay { get } Objective-C @property ( nonatomic , readonly ) GMSIndoorDisplay Nonnull indoorDisplay ; settings Gets the GMSUISettings object, which controls user interface settings for the map.
- Declaration Swift var isNavigationEnabled : Bool { get set } Objective-C @property ( nonatomic , assign , unsafe unretained , readwrite , getter = isNavigationEnabled ) BOOL navigationEnabled ; navigator The navigator for this GMSMapView which allows routes to be requested and turn-by-turn guidance to be started.
- Declaration Swift var isIndoorEnabled : Bool { get set } Objective-C @property ( nonatomic , assign , unsafe unretained , readwrite , getter = isIndoorEnabled ) BOOL indoorEnabled ; indoorDisplay Gets the GMSIndoorDisplay instance which allows to observe or control aspects of indoor data display.
- Declaration Swift var isTransitEnabled : Bool { get set } Objective-C @property ( nonatomic , assign , unsafe unretained , readwrite , getter = isTransitEnabled ) BOOL transitEnabled ; mapType Controls the type of map tiles that should be displayed.

### "Enable navigation for CarPlay \_|\_ Navigation SDK for iOS \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/carplay](https://developers.google.com/maps/documentation/navigation/ios-sdk/carplay)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ManeuverUserInfo { return maneuverUserInfo . isLaneGuidance ? . symbolOnly : . leadingSymbol } return . leadingSymbol } // Get a CPManeuver with instructionVariants and symbolImage from GMSNavigationStepInfo func getManeuver ( for stepInfo : GMSNavigationStepInfo ) - > CPManeuver { let maneuver = CPManeuver () maneuver . userInfo = ManeuverUserInfo ( stepInfo : stepInfo , isLaneGuidance : false ) switch stepInfo . maneuver { case . destination : maneuver . instructionVariants = [ "Your destination is ahead." ] break case . destinationLeft : maneuver . instructionVariants = [ "Your destination is ahead on your left." ] break case . destinationRight : maneuver . instructionVariants = [ "Your destination is ahead on your right." ] break default : maneuver . attributedInstructionVariants = currentNavInfo ?. instructions ( forStep : stepInfo , options : instructionOptions ) break } maneuver . symbolImage = stepInfo . maneuverImage ( with : instructionOptions . imageOptions ) return maneuver } // Get the lane image for a CPManeuver from GMSNavigationStepInfo func laneGuidanceManeuver ( for stepInfo : GMSNavigationStepInfo ) - > CPManeuver ? { let maneuver = CPManeuver () maneuver . userInfo = ManeuverUserInfo ( stepInfo : stepInfo , isLaneGuidance : true ) let lanesImage = stepInfo . lanesImage ( with : imageOptions ) guard let lanesImage = lanesImage else { return nil } maneuver . symbolImage = lanesImage return maneuver } Objective-C // Get a CPTravelEstimate from GMSNavigationNavInfo - ( nonull CPTravelEstimates ) travelEstimates: ( GMSNavigationNavInfo Nonnull navInfo ) { NSMeasurement<NSUnitLength > distanceRemaining = [ navInfo roundedDistance : navInfo . distanceToCurrentStepMeters ]; NSTimeInterval timeRemaining = [ navInfo roundedTime : navInfo . timeToCurrentStepSeconds ]; CPTravelEstimate travelEstimate = [[ CPTravelEstimates alloc ] initWithDistanceRemaining : distanceRemaining timeRemaining : timeRemaining ]; } // Create an object to be stored in the userInfo field of CPManeuver to determine the CPManeuverDisplayStyle. / An object to be stored in the userInfo field of a CPManeuver. / @interface ManeuverUserInfo : NSObject @property ( nonatomic , readonly , nonnull ) GMSNavigationStepInfo stepInfo ; @property ( nonatomic , readonly , getter = isLaneGuidance ) BOOL laneGuidance ; - ( nonnull instancetype ) initWithStepInfo: ( GMSNavigationStepInfo ) stepInfo isLaneGuidance :( BOOL ) isLaneGuidance NS DESIGNATED INITIALIZER ; - ( instancetype ) init NS UNAVAILABLE ; @end - ( CPManeuverDisplayStyle ) mapTemplate : ( CPMapTemplate ) mapTemplate displayStyleForManeuver :( nonnull CPManeuver ) maneuver { ManeuverUserInfo userInfo = maneuver . userInfo ; return userInfo . laneGuidance ?
- PanDirection ) - > CGPoint { let scrollDistance = 80.0 var scrollAmount = CGPoint ( x : 0 , y : 0 ) switch panDirection { case . left : scrollAmount . x -= scrollDistance break ; case . right : scrollAmount . x += scrollDistance break ; case . up : scrollAmount . y += scrollDistance break ; case . down : scrollAmount . y -= scrollDistance break ; default : break ; } if scrollAmount . x != 0 && scrollAmount . y != 0 { // Adjust length if scrolling diagonally. scrollAmount = CGPointMake ( scrollAmount . x sqrt ( 1.0 / 2.0 ), scrollAmount . y sqrt ( 1.0 / 2.0 )) } return scrollAmount } Objective-C #pragma mark - CPMapTemplateDelegate - ( void ) mapTemplate: ( CPMapTemplate ) mapTemplate panBeganWithDirection: ( CPPanDirection ) direction { } - ( void ) mapTemplate: ( CPMapTemplate ) mapTemplate panWithDirection: ( CPPanDirection ) direction { CGPoint scrollAmount = [ self scrollAmountForPanDirection : direction ]; GMSCameraUpdate scroll = [ GMSCameraUpdate scrollByX : scrollAmount . x Y : scrollAmount . y ]; [ mapView animateWithCameraUpdate : scroll ]; } - ( void ) mapTemplate: ( CPMapTemplate ) mapTemplate panEndedWithDirection: ( CPPanDirection ) direction { } - ( CGPoint ) scrollAmountForPanDirection: ( CPPanDirection ) direction { static const CGFloat scrollDistance = 80. ; CGPoint scrollAmount = { 0. , 0. }; if ( direction & CPPanDirectionLeft ) { scrollAmount . x = - scrollDistance ; } if ( direction & CPPanDirectionRight ) { scrollAmount . x = scrollDistance ; } if ( direction & CPPanDirectionUp ) { scrollAmount . y = - scrollDistance ; } if ( direction & CPPanDirectionDown ) { scrollAmount . y = scrollDistance ; } if ( scrollAmount . x != 0 && scrollAmount . y != 0 ) { // Adjust length if scrolling diagonally. scrollAmount = CGPointMake ( scrollAmount . x ( CGFloat ) M SQRT1 2 , scrollAmount . y ( CGFloat ) M SQRT1 2 ); } return scrollAmount ; } Common button usages Swift // MARK: Create Buttons func createMapButtons () - > [ CPMapButton ] { let panButton = mapButton ( systemImageName : "dpad.fill" ) { [ weak self ] in self ?. didTapPanButton () } let zoomOutButton = mapButton ( systemImageName : "minus.magnifyingglass" ) { [ weak self ] in self ?. didTapZoomOutButton () } let zoomInButton = mapButton ( systemImageName : "plus.magnifyingglass" ) { [ weak self ] in self ?. didTapZoomInButton () } let myLocationButton = mapButton ( systemImageName : "location" ) { [ weak self ] in self ?. didTapMyLocationButton () } let mapButtons = [ panButton , zoomOutButton , zoomInButton , myLocationButton ] return mapButtons } func mapButton ( systemImageName : String , handler : @ escaping () - > Void ) - > CPMapButton { } // MARK: Button callbacks @objc func didTapPanButton () { mapTemplate ?. showPanningInterface ( animated : true ) } @objc func didTapZoomOutButton () { mapView . animate ( with : GMSCameraUpdate . zoomOut ()) } @objc func didTapZoomInButton () { mapView . animate ( with : GMSCameraUpdate . zoomIn ()) } @objc func didTapMyLocationButton () { if let lastLocation = lastLocation { let cameraPosition = GMSCameraPosition ( target : lastLocation . coordinate , zoom : 15 ) mapView . animate ( to : cameraPosition ) } } Objective-C #pragma mark - Create Buttons - ( NSArray<CPMapButton > ) createMapButtons { NSMutableArray<CPMapButton > mapButtons = [ NSMutableArray<CPMapButton > array ]; weak typeof ( self ) weakSelf = self ; CPMapButton panButton = [ self mapButtonWithSystemImageNamed : @"dpad.fill" handler : ^ ( CPMapButton ) { [ weakSelf didTapPanButton ]; }]; [ mapButtons addObject : panButton ]; CPMapButton zoomOutButton = [ self mapButtonWithSystemImageNamed : @"minus.magnifyingglass" handler : ^ ( CPMapButton Nonnull mapButon ) { [ weakSelf didTapZoomOutButton ]; }]; [ mapButtons addObject : zoomOutButton ]; CPMapButton zoomInButton = [ self mapButtonWithSystemImageNamed : @"plus.magnifyingglass" handler : ^ ( CPMapButton Nonnull mapButon ) { [ weakSelf didTapZoomInButton ]; }]; [ mapButtons addObject : zoomInButton ]; CPMapButton myLocationButton = [ self mapButtonWithSystemImageNamed : @"location" handler : ^ ( CPMapButton Nonnull mapButton ) { [ weakSelf didTapMyLocationButton ]; }]; [ mapButtons addObject : myLocationButton ]; return mapButtons ; } #pragma mark - Button Callbacks - ( void ) didTapZoomOutButton { [ mapView animateWithCameraUpdate : [ GMSCameraUpdate zoomOut ]]; } - ( void ) didTapZoomInButton { [ mapView animateWithCameraUpdate : [ GMSCameraUpdate zoomIn ]]; } - ( void ) didTapMyLocationButton { CLLocation location = self . lastLocation ; if ( location ) { GMSCameraPosition position = [[ GMSCameraPosition alloc ] initWithTarget : self . lastLocation . coordinate zoom : 15. ]; [ mapView animateToCameraPosition : position ]; } } - ( void ) didTapPanButton { [ mapTemplate showPanningInterfaceAnimated : YES ]; isPanningInterfaceEnabled = YES ; } - ( void ) didTapStopPanningButton { [ mapTemplate dismissPanningInterfaceAnimated : YES ]; isPanningInterfaceEnabled = NO ; } Note: Alternate routes cannot be selected on the CarPlay screen.
- Swift init ( window : CPWindow ) { super . init ( nibName : nil , bundle : nil ) self . window = window // More CPMapTemplate initialization } override func viewDidLoad () { super . viewDidLoad () let mapViewOptions = GMSMapViewOptions () mapViewOptions . screen = window . screen mapViewOptions . frame = self . view . bounds mapView = GMSMapView ( options : mapViewOptions ) mapView . autoresizingMask = [. flexibleHeight , . flexibleWidth ] mapView . settings . isNavigationHeaderEnabled = false mapView . settings . isNavigationFooterEnabled = false // Disable buttons: in CarPlay, no part of the map is clickable. // The app should instead place these buttons in the appropriate slots of the CarPlay template. mapView . settings . compassButton = false mapView . settings . isRecenterButtonEnabled = false mapView . shouldDisplaySpeedometer = false mapView . isMyLocationEnabled = true self . view . addSubview ( mapView ) } Objective-C - ( instancetype ) initWithWindow: ( CPWindow ) window { self = [ super initWithNibName : nil bundle : nil ]; if ( self ) { window = window ; // More CPMapTemplate initialization } } - ( void ) viewDidLoad { [ super viewDidLoad ]; GMSMapViewOptions options = [[ GMSMapViewOptions alloc ] init ]; options . screen = window . screen ; options . frame = self . view . bounds ; mapView = [[ GMSMapView alloc ] initWithOptions : options ]; mapView . autoresizingMask = UIViewAutoresizingFlexibleHeight UIViewAutoresizingFlexibleWidth ; mapView . settings . navigationHeaderEnabled = NO ; mapView . settings . navigationFooterEnabled = NO ; // Disable buttons: in CarPlay, no part of the map is clickable. // The app should instead place these buttons in the appropriate slots of the CarPlay template. mapView . settings . compassButton = NO ; mapView . settings . recenterButtonEnabled = NO ; mapView . shouldDisplaySpeedometer = NO ; mapView . myLocationEnabled = YES ; [ self . view addSubview : mapView ]; } Enable map interaction To ensure driver safety, CarPlay limits screen surface interaction to a series of CPMapTemplateDelegate methods.
- CPManeuverDisplayStyleSymbolOnly : CPManeuverDisplayStyleDefault ; } // Get a CPManeuver with instructionVariants and symbolImage from GMSNavigationStepInfo - ( nonnull CPManeuver ) maneuverForStep : ( nonnull GMSNavigationStepInfo ) stepInfo { CPManeuver maneuver = [[ CPManeuver alloc ] init ]; maneuver . userInfo = [[ ManeuverUserInfo alloc ] initWithStepInfo : stepInfo isLaneGuidance : NO ]; switch ( stepInfo . maneuver ) { case GMSNavigationManeuverDestination : maneuver . instructionVariants = @[ @"Your destination is ahead." ] ; break ; case GMSNavigationManeuverDestinationLeft : maneuver . instructionVariants = @[ @"Your destination is ahead on your left." ] ; break ; case GMSNavigationManeuverDestinationRight : maneuver . instructionVariants = @[ @"Your destination is ahead on your right." ] ; break ; default : { maneuver . attributedInstructionVariants = [ currentNavInfo instructionsForStep : stepInfo options : instructionOptions ]; break ; } } maneuver . symbolImage = [ stepInfo maneuverImageWithOptions : instructionOptions . imageOptions ]; return maneuver ; } // Get the lane image for a CPManeuver from GMSNavigationStepInfo - ( nullable CPManeuver ) laneGuidanceManeuverForStep : ( nonnull GMSNavigationStepInfo ) stepInfo { CPManeuver maneuver = [[ CPManeuver alloc ] init ]; maneuver . userInfo = [[ ManeuverUserInfo alloc ] initWithStepInfo : stepInfo isLaneGuidance : YES ]; UIImage lanesImage = [ stepInfo lanesImageWithOptions : imageOptions ]; if ( ! lanesImage ) { return nil ; } maneuver . symbolImage = lanesImage ; return maneuver ; } Maneuvers CarPlay uses the CPManeuver class to provide turn-by-turn guidance.

### "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Declaration Swift class GMSIndoorDisplay : NSObject Objective-C @interface GMSIndoorDisplay : NSObject GMSIndoorLevel Declaration Swift class GMSIndoorLevel : NSObject Objective-C @interface GMSIndoorLevel : NSObject - ( instancetype ) init NS UNAVAILABLE ; / Localized display name for the level, e.g. "Ground floor". / @property ( nonatomic , copy , readonly , nullable ) NSString name ; / Localized short display name for the level, e.g. "1". / @property ( nonatomic , copy , readonly , nullable ) NSString shortName ; @end GMSMapID An opaque identifier for a custom map configuration.
- Defaults to GMSNavigationManeuverImageSizeSquare96. / @property ( nonatomic ) GMSNavigationManeuverImageSize maneuverImageSize ; - ( instancetype ) init NS DESIGNATED INITIALIZER ; @end GMSNavigationTermsAndConditionsOptions Options for displaying terms and conditions.
- Declaration Swift class GMSRouteLeg : NSObject Objective-C @interface GMSRouteLeg : NSObject GMSUISettings Settings for the user interface of a GMSMapView.
- Declaration Swift class GMSNavigationStepInfo : NSObject Objective-C @interface GMSNavigationStepInfo : NSObject GMSNavigationStepInfoImageOptions Declaration Swift class GMSNavigationStepInfoImageOptions : NSObject Objective-C @interface GMSNavigationStepInfoImageOptions : NSObject / The object which provides screen metrics for the screen the image will be displayed on.

