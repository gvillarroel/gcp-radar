---
title: "Create customized guidance \_|\_ Navigation SDK for iOS \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/create-customized-guidance
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/create-customized-guidance
  title: "Create customized guidance \_|\_ Navigation SDK for iOS \_|\_ Google for\
    \ Developers"
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
Create customized guidance
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Create custom turn-by-turn navigation experiences on iOS by establishing an independent navigation session using GMSNavigationServices .
Implement the GMSNavigatorListener protocol to receive and utilize detailed guidance information for your custom UI elements.
Utilize a road-snapped location provider for continuous location updates and accurate positioning on the route.
Set up a navigation simulator for development and testing purposes to ensure the functionality of your custom navigation experience.
Transition seamlessly from a custom navigation experience to the full Google Maps navigation experience, optionally sharing the existing map instance.
This page covers the high-level steps you follow to create customized guidance
as part of a custom navigation
experience .
This process differs from the process described in
Navigate a
route as follows:
You first establish a navigation session independently and obtain a navigator
instance through the session rather than by calling the view controller.
You set up an event listener to respond to and manage navigation events.
Create a navigation session using
GMSNavigationService.createNavigationSession
and begin navigation with a setDestination call. Where the Google
navigation experience invokes the navigator through the navigation map view,
the GMSNavigationServices controls and receives a stream of events from a
navigation session independently from a UI instance. This means it can
either run without a UI, or get passed to any UI-based experience. With
this approach, the navigation session continues to run in your app until the
last reference is removed from it.
Establish a road-snapped location provider . Use the location provider if
you want your app to have continuous location monitoring, such as when
displaying a navigation view with a blue dot along the route.
Set up a listener for detailed turn-by-turn guidance by implementing the
GMSNavigatorListener protocol. Then, transform that information into
whatever is needed for your custom navigation experience. For example:
Implement text-only fields for simple screen casting of directions.
Design and populate fields for your own UI.
Set up a navigation simulator . This is necessary for development and
testing.
Create an independent navigation session
The following code snippet from the demo shows navigation established
independently from the view controller. The code then adds an overview map
configured to show the current road-snapped location.
// Create the navigation session.
_navigationSession = [ GMSNavigationServices createNavigationSession ];
GMSRoadSnappedLocationProvider * roadSnappedLocationProvider =
_navigationSession . roadSnappedLocationProvider ;
[ roadSnappedLocationProvider startUpdatingLocation ];
GMSNavigator * navigator = _navigationSession . navigator ;
[ navigator addListener : self ];
navigator . voiceGuidance = GMSNavigationVoiceGuidanceSilent ;
navigator . sendsBackgroundNotifications = NO ;
_navigationSession . started = YES ;
​​ [ navigator setDestinations : @[ destination ]
callback : ^ ( GMSRouteStatus routeStatus ) {
// …handle changes in route status.
}];
// Add an overview map.
_mapView = [[ GMSMapView alloc ] initWithFrame : CGRectZero ];
[ self . mainStackView addArrangedSubview : _mapView ];
[ self . mainStackView setNeedsLayout ];
_mapView . settings . compassButton = YES ;
_mapView . delegate = self ;
_mapView . myLocationEnabled = YES ;
_mapView . roadSnappedMyLocationSource = roadSnappedLocationProvider ;
Passing navigation from a custom experience to the Google experience
This code snippet illustrates how your app can allow the user to enter the
Google navigation experience from a custom navigation experience. This code
snippet also shows how your app makes this transition while sharing the map.
` UIButton * button = [ UIButton buttonWithType : UIButtonTypePlain ` ];
[ ` button addTarget : self action : @selector ( didTapEnterGoogleNavigationButton : )
forControlState :[ _directionsButton addTarget : self ` ];
`…`
[ ` _mapView enableNavigationWithSession : _navigationSession ` ];
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The core process involves creating a navigation session independently using `GMSNavigationService.createNavigationSession`, distinct from route navigation. A road-snapped location provider is established for continuous monitoring. Implement `GMSNavigatorListener` to set up turn-by-turn guidance, translating the information into your app's custom navigation UI. Set up a navigation simulator for testing. The navigation session persists until the last reference is removed. A custom experience can also be transition to the default google navigation experience.\n"]]
