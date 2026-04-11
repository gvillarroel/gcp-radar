---
title: "Navigation SDK for iOS \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions
  title: "Navigation SDK for iOS \_|\_ Google for Developers"
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
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Select platform:
Android
iOS
Configure real-time disruptions
Real-time disruptions are a collection of features that alert users about disruptions
along their route and allow users to report and verify disruptions that they encounter.
Examples of disruptions include vehicle accidents, traffic congestion,
police and speed camera presence, construction, lane closures, and certain weather
conditions. This page explains the real-time disruption features and their configuration
options, including considerations for apps that use custom navigation UIs.
Note: The availability of real-time
disruption features and of specific disruption types vary by region. For more
information, see Navigation SDK country and region coverage . In addition, real-time disruptions are not available on Apple CarPlay.
Real-time disruption features
The Navigation SDK includes the following real-time disruption features as part of the core navigation experience:
Interactive disruption callouts along routes .
Automated disruption alerts with voting during active navigation .
Disruption reporting during active navigation .
These features are configurable and enabled by default. The following sections provide more information about the features and available configuration options.
Interactive disruption callouts along routes
When an app displays a route, either in a route overview or during active navigation, any current disruptions appear as callouts along the route. Callouts include an icon that indicates the type of disruption.
You can control the display of disruption callouts along routes using shouldDisplayPrompts , which also controls the display of automated alerts when a user approaches a disruption .
mapView . navigator . shouldDisplayPrompts = true
Display disruption details when a user taps a callout
Users can tap a callout to display an info card with more information about the disruption,
including the disruption type, the time it was last reported, and in some cases, an option for
voting on whether the disruption is still present. There are two different types of info cards
that may appear, depending on whether the user is in active navigation, and the configuration
options vary for each type.
Callout info cards on route overviews, prior to starting active navigation
When a user taps a callout on a route overview, prior to starting active navigation, an info card
appears with more information about the disruption.
You can control the ability of users to tap disruption callouts on route overviews to display more
information using
showsIncidentCards .
mapView . settings . showsIncidentCards = true
Callout info cards during active navigation
When a disruption callout appears along a route during active navigation, users can tap the
callout to display an info card with more information about the disruption, including the disruption
type and the time it was last reported, as well as buttons for voting on whether the disruption is
still present. Votes submitted by users are processed by Google and may be surfaced on the map for
other Google Maps users and Navigation SDK users, as well as used to determine whether to continue
showing the disruption.
You can control the display and tappability of disruption callouts during active navigation using
shouldDisplayPrompts , which also controls the
display of callouts along routes and the
display of automated alerts when a user approaches a disruption .
mapView . navigator . shouldDisplayPrompts = true
Automated disruption alerts with voting during active navigation
During active navigation, when a user approaches a disruption along a route, a prompt appears with
information about the disruption and buttons for voting on whether the disruption is still present.
Votes submitted by users are processed by Google and may be surfaced on the map for
other Google Maps and Navigation SDK users, as well as used to determine whether to continue showing the disruption.
You can configure the display of alert prompts during active navigation using
shouldDisplayPrompts , which also controls the display
of callouts along routes .
mapView . navigator . shouldDisplayPrompts = true
Note: When a user approaches a disruption along a route during active navigation, the disruption is
announced with an audio alert. Audio alerts are not affected by the prompt display configuration.
However, you can configure all voice prompts during active navigation using
VoiceGuidance
.
Disruption reporting during active navigation
During active navigation mode, a button appears on the navigation UI that allows users to report new
disruptions along their route. When a user taps the button, a menu with the available disruption types to report appears.
Reports that users submit are processed by Google and may be surfaced on the map for other Google
Maps and Navigation SDK users.
Note: When a user first starts active navigation, the
reporting button appears in an expanded state with the label "Report". The button then collapses
to only show the icon.
Show or hide the standard reporting button
You can configure the visibility of the standard reporting button during active navigation using
navigationReportIncidentButtonEnabled .
// Enables the incident reporting FAB to show in situations where incident
// reporting is possible.
mapView . settings . navigationReportIncidentButtonEnabled = true
Add a custom reporting button
In place of the standard disruption reporting button, you can add a custom reporting button to the navigation UI. When the user clicks the custom button, you can trigger the display of the reporting menu by calling the presentReportIncidentsPanel
method. Before adding a custom reporting button, verify that the app is in active navigation and the user is in a country where reporting is enabled by calling reportIncidentsAvailable . If either of these is not true, the reporting menu won't appear.
Note: If you are implementing a custom reporting button, make sure to set navigationReportIncidentButtonEnabled to false (Swift) or NO ` (Objective-C) to hide the standard reporting button.
// Check if reporting is available before displaying your button
let isReportingAvailable = mapview . isIncidentReportingAvailable ()
customReportingIncidentButton . isHidden = ! isReportingAvailable
customReportingIncidentButton . addTarget ( self , action : # selector ( didTapReportIncidentButton ), for : . touchUpInside )
// Trigger the reporting flow if the button is clicked
func didTapReportIncidentButton () {
mapView . presentReportIncidentsPanel ( self ) { [ weak self ] error in
guard let self = self else { return }
if let error = error as NSError ? {
if error . domain == GMSMapViewPresentReportIncidentPanelErrorDomain {
let errorCode = GMSMapViewPresentReportIncidentPanelErrorCode ( rawValue : error . code )
switch errorCode {
case . internal :
self . showErrorMessage (
title : "Error Presenting Report Incident Panel" ,
message : "An internal error occurred."
)
case . reportingNotAvailable :
self . showErrorMessage (
title : "Error Presenting Report Incident Panel" ,
message : "Reporting is not available."
)
case . none :
self . showErrorMessage (
title : "Error Presenting Report Incident Panel" ,
message : "An unknown error occurred."
)
}
} else {
// Handle other potential errors (e.g., network errors)
self . showErrorMessage (
title : "Error Presenting Report Incident Panel" ,
message : "An unexpected error occurred: \(error.localizedDescription)"
)
}
}
// If error is nil, the panel was presented successfully. You can add any extra logic here.
}
}
Work with custom navigation UIs
If your implementation of the Navigation SDK includes custom UI elements, you need to consider
the real-time disruption elements in order to avoid conflicts.
Note: For more information about working with custom UI elements,
see Modify the navigation UI .
Reporting button positioning
By default, the disruption reporting button is positioned at the bottom end/trailing corner of the
map—on the right side for left-to-right languages and left side for right-to-left languages. If you
need to move the reporting button to make space for custom UI elements, use a bottomTrailingButtonsLayoutGuide .
Swift
// Create a new layout guide
let topRightLayoutGuide = UILayoutGuide ()
self . view . addLayoutGuide ( topRightLayoutGuide )
// Activate constraints using fixed constants here as an example
// assuming the current reporting button is of fixed height
topRightLayoutGuide . topAnchor . constraint ( equalTo : _mapView . navigationHeaderLayoutGuide . bottomAnchor , constant : 50 ). isActive = true
topRightLayoutGuide . trailingAnchor . constraint ( equalTo : self . view . safeAreaLayoutGuide . trailingAnchor , constant : - 14 ). isActive = true
// Assign the layout guide
_mapView . bottomTrailingButtonsLayoutGuide = topRightLayoutGuide
// Create an alternate layout guide to use when the header and the footer are not full width
let topRightAlternateLayoutGuide = UILayoutGuide ()
self . view . addLayoutGuide ( topRightAlternateLayoutGuide )
// Activate constraints using fixed constants here as an example
// assuming the current RTD button is of fixed height
topRightAlternateLayoutGuide . topAnchor . constraint ( equalTo : _mapView . navigationHeaderLayoutGuide . bottomAnchor , constant : 20 ). isActive = true
topRightAlternateLayoutGuide . trailingAnchor . constraint ( equalTo : self . view . safeAreaLayoutGuide . trailingAnchor , constant : - 10 ). isActive = true
// Assign the layout guide
_mapView . bottomTrailingButtonsAlternateLayoutGuide = topRightAlternateLayoutGuide
Objective-C
// Create a new layout guide
UILayoutGuide * topRightLayoutGuide = [[ UILayoutGuide alloc ] init ];
[ self . view addLayoutGuide : topRightLayoutGuide ];
// Activate constraints using fixed constants here as an example
// assuming the current RTD button is of fixed height
[[ topRightLayoutGuide . topAnchor
constraintEqualToAnchor : _mapView . navigationHeaderLayoutGuide . bottomAnchor
constant : 50 ]
setActive : YES ];
[[ topRightLayoutGuide . trailingAnchor
constraintEqualToAnchor : self . view . safeAreaLayoutGuide . trailingAnchor
constant : -14 ]
setActive : YES ];
// Assign the layout guide
_mapView . bottomTrailingButtonsLayoutGuide = topRightLayoutGuide ;
// Create an alternate layout guide to use when the header and the footer are not full width
UILayoutGuide * topRightAlternateLayoutGuide = [[ UILayoutGuide alloc ] init ];
[ self . view addLayoutGuide : topRightAlternateLayoutGuide ];
// Activate constraints using fixed constants here as an example
// assuming the current RTD button is of fixed height
[[ topRightAlternateLayoutGuide . topAnchor
constraintEqualToAnchor : _mapView . navigationHeaderLayoutGuide . bottomAnchor
constant : 50 ]
setActive : YES ];
[[ topRightAlternateLayoutGuide . trailingAnchor
constraintEqualToAnchor : self . view . safeAreaLayoutGuide . trailingAnchor
constant : -14 ]
setActive : YES ];
// Assign the layout guide
_mapView . bottomTrailingButtonsAlternateLayoutGuide = topRightAlternateLayoutGuide ;
Prompt Visibility API (Experimental)
The Prompt Visibility API helps you avoid conflicts between UI elements generated by the
Navigation SDK and your own custom UI elements by adding a listener to receive a callback before a
Navigation SDK UI element is about to appear and as soon as the element is removed. You can receive
callbacks for real-time disruption elements, including info cards, prompts, and the disruption
reporting menu—as well as for other notifications generated by the Navigation SDK.
Swift
// Additional methods added to GMSNavigatorListener
...
func navigatorWillPresentPrompt ( _ navigator : GMSNavigator ) {
// Hide any sort of custom UI element.
}
func navigatorDidDismissPrompt ( _ navigator : GMSNavigator ) {
// Show any sort of custom UI element.
}
...
Objective-C
// Additional methods added to GMSNavigatorListener
...
- ( void ) navigatorWillPresentPrompt : ( GMSNavigator * ) navigator {
// Hide any sort of custom UI element.
}
- ( void ) navigatorDidDismissPrompt : ( GMSNavigator * ) navigator {
// Show any sort of custom UI element.
}
...
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
