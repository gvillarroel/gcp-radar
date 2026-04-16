---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:01.315Z"
product_name: "Navigation SDK for iOS"
product_slug: "navigation-sdk-for-ios"
feature_name: "Turn card header and footer designs"
feature_slug: "turn-card-header-and-footer-designs"
latest_feature_date: "2024-05-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/controls"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/nav-only-feed"
keywords:
  - "turn"
  - "card"
  - "header"
  - "and"
  - "footer"
  - "designs"
  - "the"
  - "default"
---

# Turn card header and footer designs

Product: Navigation SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

The default turn card header and footer designs were updated to match the newer rounded-corner turn cards.

## Extended Definition

The default turn card header and footer designs were updated to match the newer rounded-corner turn cards.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions](https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/nav-only-feed](https://developers.google.com/maps/documentation/navigation/ios-sdk/nav-only-feed)

## Supporting Pages

### Modify the navigation UI \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- You can toggle the visibility of the navigation header and footer and set its colors programmatically using the following properties: navigationHeaderEnabled — controls whether the navigation header is visible (default is true ). navigationFooterEnabled — controls whether the navigation footer is visible (default is true ). navigationHeaderPrimaryBackgroundColor — sets the primary background color for the navigation header. navigationHeaderSecondaryBackgroundColor — sets the secondary background color for the navigation header.
- The following code example shows turning on visibility for the header and footer, then setting navigationHeaderPrimaryBackgroundColor to blue, and navigationHeaderSecondaryBackgroundColor to red.
- Swift class MyCustomView : UIView , GMSNavigationAccessoryView { … func heightForAccessoryViewConstrained ( to size : CGSize , on mapView : GMSMapView ) - > CGFloat { // viewHeight gets calculated as the height your view needs. return viewHeight } … } let customView = MyCustomView (...) mapView . setHeaderAccessory ( customView ) // At some later point customView changes size. mapView . invalidateLayout ( forAccessoryView : customView ) // Remove the custom header accessory view. mapView . setHeaderAccessory ( nil ) Objective-C @interface MyCustomView : UIView < GMSNavigationAccessoryView > … @end @implementation MyCustomView … - ( CGFloat ) heightForAccessoryViewConstrainedToSize : ( CGSize ) size onMapView : ( GMSMapView ) mapView { // viewHeight gets calculated as the height your view needs. return viewHeight ; } … @end MyCustomView customView = [[ MyCustomView alloc ] init … ]; [ mapView setHeaderAccessoryView : customView ]; // At some later point customView changes size. [ mapView invalidateLayoutForAccessoryView : customView ]; // Remove the custom header accessory view. [ mapView setHeaderAccessoryView : nil ]; Normal and low-light modes The GMSNavigatorListener.didChangeSuggestedLightingMode listener method is triggered when estimated lighting conditions are updated.
- Swift mapView . settings . scrollGestures = false mapView . settings . zoomGestures = false Objective-C mapView . settings . scrollGestures = NO ; mapView . settings . zoomGestures = NO ; Position controls and UI elements You can position controls and other UI elements relative to the position of the navigation header and footer, by using the following properties: navigationHeaderLayoutGuide navigationFooterLayoutGuide bottomTrailingButtonsLayoutGuide Note: To make sure that custom UI elements don't block any prompts that appear in the Navigation SDK, make sure that custom UI elements are implemented in a subview of the mapView , not in the root view.

### "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Declaration Swift var bottomTrailingButtonsLayoutGuide : UILayoutGuide ! { get set } Objective-C @property ( nonatomic , null resettable ) UILayoutGuide bottomTrailingButtonsLayoutGuide ; bottomTrailingButtonsAlternateLayoutGuide Experimental feature The layout guide that is used to position the bottom trailing buttons when the navigation footer and header do not span the full width of the screen.
- Declaration Swift func enableNavigation ( with navigationSession : GMSNavigationSession ) -> Bool Objective-C - ( BOOL ) enableNavigationWithSession : ( nonnull GMSNavigationSession ) navigationSession ; Return Value Whether navigation was successfully started (for instance, NO will be returned if the terms and conditions have not yet been accepted).
- Declaration Swift var isNavigationEnabled : Bool { get set } Objective-C @property ( nonatomic , assign , unsafe unretained , readwrite , getter = isNavigationEnabled ) BOOL navigationEnabled ; navigator The navigator for this GMSMapView which allows routes to be requested and turn-by-turn guidance to be started.
- Declaration Swift var navigationFooterLayoutGuide : UILayoutGuide { get } Objective-C @property ( nonatomic , readonly ) UILayoutGuide Nonnull navigationFooterLayoutGuide ; reportIncidentsAvailable Experimental feature Returns whether incident reporting is available.

### Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions](https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Swift // Create a new layout guide let topRightLayoutGuide = UILayoutGuide () self . view . addLayoutGuide ( topRightLayoutGuide ) // Activate constraints using fixed constants here as an example // assuming the current reporting button is of fixed height topRightLayoutGuide . topAnchor . constraint ( equalTo : mapView . navigationHeaderLayoutGuide . bottomAnchor , constant : 50 ). isActive = true topRightLayoutGuide . trailingAnchor . constraint ( equalTo : self . view . safeAreaLayoutGuide . trailingAnchor , constant : - 14 ). isActive = true // Assign the layout guide mapView . bottomTrailingButtonsLayoutGuide = topRightLayoutGuide // Create an alternate layout guide to use when the header and the footer are not full width let topRightAlternateLayoutGuide = UILayoutGuide () self . view . addLayoutGuide ( topRightAlternateLayoutGuide ) // Activate constraints using fixed constants here as an example // assuming the current RTD button is of fixed height topRightAlternateLayoutGuide . topAnchor . constraint ( equalTo : mapView . navigationHeaderLayoutGuide . bottomAnchor , constant : 20 ). isActive = true topRightAlternateLayoutGuide . trailingAnchor . constraint ( equalTo : self . view . safeAreaLayoutGuide . trailingAnchor , constant : - 10 ). isActive = true // Assign the layout guide mapView . bottomTrailingButtonsAlternateLayoutGuide = topRightAlternateLayoutGuide Objective-C // Create a new layout guide UILayoutGuide topRightLayoutGuide = [[ UILayoutGuide alloc ] init ]; [ self . view addLayoutGuide : topRightLayoutGuide ]; // Activate constraints using fixed constants here as an example // assuming the current RTD button is of fixed height [[ topRightLayoutGuide . topAnchor constraintEqualToAnchor : mapView . navigationHeaderLayoutGuide . bottomAnchor constant : 50 ] setActive : YES ]; [[ topRightLayoutGuide . trailingAnchor constraintEqualToAnchor : self . view . safeAreaLayoutGuide . trailingAnchor constant : -14 ] setActive : YES ]; // Assign the layout guide mapView . bottomTrailingButtonsLayoutGuide = topRightLayoutGuide ; // Create an alternate layout guide to use when the header and the footer are not full width UILayoutGuide topRightAlternateLayoutGuide = [[ UILayoutGuide alloc ] init ]; [ self . view addLayoutGuide : topRightAlternateLayoutGuide ]; // Activate constraints using fixed constants here as an example // assuming the current RTD button is of fixed height [[ topRightAlternateLayoutGuide . topAnchor constraintEqualToAnchor : mapView . navigationHeaderLayoutGuide . bottomAnchor constant : 50 ] setActive : YES ]; [[ topRightAlternateLayoutGuide . trailingAnchor constraintEqualToAnchor : self . view . safeAreaLayoutGuide . trailingAnchor constant : -14 ] setActive : YES ]; // Assign the layout guide mapView . bottomTrailingButtonsAlternateLayoutGuide = topRightAlternateLayoutGuide ; Prompt Visibility API (Experimental) The Prompt Visibility API helps you avoid conflicts between UI elements generated by the Navigation SDK and your own custom UI elements by adding a listener to receive a callback before a Navigation SDK UI element is about to appear and as soon as the element is removed.
- Note: If you are implementing a custom reporting button, make sure to set navigationReportIncidentButtonEnabled to false (Swift) or NO ` (Objective-C) to hide the standard reporting button. // Check if reporting is available before displaying your button let isReportingAvailable = mapview . isIncidentReportingAvailable () customReportingIncidentButton . isHidden = ! isReportingAvailable customReportingIncidentButton . addTarget ( self , action : # selector ( didTapReportIncidentButton ), for : . touchUpInside ) // Trigger the reporting flow if the button is clicked func didTapReportIncidentButton () { mapView . presentReportIncidentsPanel ( self ) { [ weak self ] error in guard let self = self else { return } if let error = error as NSError ? { if error . domain == GMSMapViewPresentReportIncidentPanelErrorDomain { let errorCode = GMSMapViewPresentReportIncidentPanelErrorCode ( rawValue : error . code ) switch errorCode { case . internal : self . showErrorMessage ( title : "Error Presenting Report Incident Panel" , message : "An internal error occurred." ) case . reportingNotAvailable : self . showErrorMessage ( title : "Error Presenting Report Incident Panel" , message : "Reporting is not available." ) case . none : self . showErrorMessage ( title : "Error Presenting Report Incident Panel" , message : "An unknown error occurred." ) } } else { // Handle other potential errors (e.g., network errors) self . showErrorMessage ( title : "Error Presenting Report Incident Panel" , message : "An unexpected error occurred: \(error.localizedDescription)" ) } } // If error is nil, the panel was presented successfully.
- You can control the ability of users to tap disruption callouts on route overviews to display more information using showsIncidentCards . mapView . settings . showsIncidentCards = true Callout info cards during active navigation When a disruption callout appears along a route during active navigation, users can tap the callout to display an info card with more information about the disruption, including the disruption type and the time it was last reported, as well as buttons for voting on whether the disruption is still present.
- You can control the display of disruption callouts along routes using shouldDisplayPrompts , which also controls the display of automated alerts when a user approaches a disruption . mapView . navigator . shouldDisplayPrompts = true Display disruption details when a user taps a callout Users can tap a callout to display an info card with more information about the disruption, including the disruption type, the time it was last reported, and in some cases, an option for voting on whether the disruption is still present.

### "Details about the turn-by-turn data feed \_|\_ Navigation SDK for iOS \_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/nav-only-feed](https://developers.google.com/maps/documentation/navigation/ios-sdk/nav-only-feed)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Lane guidance The Navigation SDK represents lanes in the navigation turn card as GMSNavigationLane and GMSNavigationLaneDirection data objects.
- Expand to see examples icons for different maneuvers Sample Icon Turn-By-Turn Maneuvers DEPART UNKNOWN STRAIGHT ON RAMP UNSPECIFIED OFF RAMP UNSPECIFIED NAME CHANGE TURN RIGHT ON RAMP RIGHT TURN LEFT ON RAMP LEFT TURN SLIGHT RIGHT ON RAMP SLIGHT RIGHT OFF RAMP SLIGHT RIGHT TURN SLIGHT LEFT ON RAMP SLIGHT LEFT OFF RAMP SLIGHT LEFT TURN SHARP RIGHT ON RAMP SHARP RIGHT OFF RAMP SHARP RIGHT TURN SHARP LEFT ON RAMP SHARP LEFT OFF RAMP SHARP LEFT TURN U TURN COUNTERCLOCKWISE ON RAMP U TURN COUNTERCLOCKWISE OFF RAMP U TURN COUNTERCLOCKWISE TURN U TURN CLOCKWISE ON RAMP U TURN CLOCKWISE OFF RAMP U TURN CLOCKWISE ROUNDABOUT SHARP RIGHT COUNTERCLOCKWISE ROUNDABOUT SHARP RIGHT CLOCKWISE ROUNDABOUT RIGHT COUNTERCLOCKWISE ROUNDABOUT RIGHT CLOCKWISE ROUNDABOUT SLIGHT RIGHT COUNTERCLOCKWISE ROUNDABOUT SLIGHT RIGHT CLOCKWISE ROUNDABOUT STRAIGHT COUNTERCLOCKWISE ROUNDABOUT STRAIGHT CLOCKWISE ROUNDABOUT SLIGHT LEFT COUNTERCLOCKWISE ROUNDABOUT SLIGHT LEFT CLOCKWISE ROUNDABOUT LEFT COUNTERCLOCKWISE ROUNDABOUT LEFT CLOCKWISE ROUNDABOUT SHARP LEFT COUNTERCLOCKWISE ROUNDABOUT SHARP LEFT CLOCKWISE ROUNDABOUT U TURN COUNTERCLOCKWISE ROUNDABOUT U TURN CLOCKWISE ROUNDABOUT COUNTERCLOCKWISE ROUNDABOUT CLOCKWISE ROUNDABOUT EXIT COUNTERCLOCKWISE ROUNDABOUT EXIT CLOCKWISE MERGE RIGHT OFF RAMP RIGHT MERGE LEFT OFF RAMP LEFT FORK RIGHT TURN KEEP RIGHT ON RAMP KEEP RIGHT OFF RAMP KEEP RIGHT FORK LEFT TURN KEEP LEFT ON RAMP KEEP LEFT OFF RAMP KEEP LEFT MERGE UNSPECIFIED DESTINATION DESTINATION RIGHT DESTINATION LEFT FERRY BOAT FERRY TRAIN Use generated icons The Navigation SDK supports generation of maneuver icons for a given GMSNavigationStepInfo .
- It provides upcoming maneuvers with elements you supply: icons (left, right, U-turn) turn numbers in roundabouts road names estimated distances and time to the next navigation step or final destination You can use the turn-by-turn feed to create experiences where the full Navigation SDK UI is not appropriate, such as for small screen displays.
- Home Products Google Maps Platform Documentation iOS Navigation SDK for iOS Send feedback Details about the turn-by-turn data feed Stay organized with collections Save and categorize content based on your preferences.

