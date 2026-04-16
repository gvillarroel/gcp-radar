---
title: "Navigation SDK for iOS release notes \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/release-notes
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/release-notes
  title: "Navigation SDK for iOS release notes \_|\_ Google for Developers"
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
Resources
Send feedback
Navigation SDK for iOS release notes
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Navigation SDK for iOS has undergone significant updates, including modernized UI with new map colors, turn card designs, and CarPlay support.
The SDK has improved functionality with bug fixes, API updates for better navigation accuracy and developer control, and enhanced developer tools like Swift Package Manager and CocoaPods support.
Platform updates ensure compatibility with newer iOS and Xcode versions, while freezing support for older ones, as well as providing greater map customization capabilities through cloud-based and data-driven styling, and advanced markers.
Early versions focused on basic navigation features, while recent releases prioritize advanced functionalities like traffic updates, alternative routes, two-wheeler mode, and developer customization options.
The SDK has continuously evolved to enhance user experience, reliability, and developer control with each release, addressing bugs, improving stability, and introducing new features.
This page is updated with each product release. The changelog lists releases by date and includes
any new features, bug fixes and significant performance improvements.
You can also browse and filter all release notes for all products in the
Google API Console .
To subscribe to these release notes, add the feed URL of this page to your RSS feed
reader .
Release versions
For major releases (for example, 10.0.0), expect a major feature or
features, additional smaller features and bug fixes, backwards incompatibility
with the previous version, and dependency upgrade requirements.
For minor releases (for example, 9.2.0), expect minor features and bug
fixes, backwards compatibility with the previous version, and minor version
upgrades of a dependency.
For patch releases (for example, 9.2.1), expect bug fixes, backwards
compatibility with the previous version, and patch upgrades of a dependency.
Dependencies and requirements
The table below shows the dependencies and requirements for the latest version
of the Navigation SDK for iOS.
SDK version
Minimum iOS deployment target
Minimum Xcode version
10.x
16.0
16.x.x
April 07, 2026
10.12.0
Announcement
The Navigation SDK for iOS version 10.12.0 is now available . See the Release
Notes
for information about this release and for all previous releases or subscribe to
the Release Notes XML
feed .
If you are a new user, see Set up your Google Cloud
project
to start the installation process. If you are an existing customer, see the
upgrade instructions at Overview and
requirements .
10.12.0
Change
The continueToNextDestinationWithCompletion method of GMSNavigator provides a recommended replacement for GMSNavigator continueToNextDestination , which is deprecated.
10.12.0
Change
Improved arrival triggering . Improved arrival triggering for more accurate detection and a more consistent experience when reaching a destination.
February 26, 2026
10.10.0
Announcement
The Navigation SDK for iOS version 10.10.0 is now available . See the Release
Notes
for information about this release and for all previous releases or subscribe to
the Release Notes XML
feed .
If you are a new user, see Set up your Google Cloud
project
to start the installation process. If you are an existing customer, see the
upgrade instructions at Overview and
requirements .
10.10.0
Feature
Added support for providing enhanced location context. The GMSNavigationWaypoint class now provides enhanced location context by allowing you to specify both a location and a Place ID, or to specify a navigationPointToken with key contextual information. This context improves routing accuracy and the arrival experience, especially for large locations with multiple entrances or specific access points. See the documentation .
10.10.0
Feature
Cycling chevron update . In active guidance, the cycling travel mode chevron now points in the direction of the device movement along the course, rather than reflecting the device orientation from the compass.
January 27, 2026
10.8.0
Announcement
The Navigation SDK for iOS version 10.8.0 is now available . See the Release
Notes
for information about this release and for all previous releases or subscribe to
the Release Notes XML
feed .
If you are a new user, see Set up your Google Cloud
project
to start the installation process. If you are an existing customer, see the
upgrade instructions at Overview and
requirements .
10.8.0
Change
All Google Maps SDKs for iOS now require you to build with Xcode version 26.
January 16, 2026
10.7.0
Issue
When a prompt is dismissed, prompts may exhibit a visual bounce where the
container momentarily moves up before closing.
December 18, 2025
10.7.0
Announcement
The Navigation SDK for iOS version 10.7.0 is now available . See the Release
Notes
for information about this release and for all previous releases or subscribe to
the Release Notes XML
feed .
If you are a new user, see Set up your Google Cloud
project
to start the installation process. If you are an existing customer, see the
upgrade instructions at Overview and
requirements .
10.7.0
Feature
Route-aware road labeling . This feature declutters the map by using the
current route as context. Route-aware labeling removes road labels for
low-priority roads that don't intersect with the route.
10.7.0
Change
Reduced visual noise during navigation by limiting the display of identical road
labels and shields to three per viewport.
10.7.0
Fixed
Voice guidance improvements . Improvements to voice guidance are included in
this release, including more varied messages. This means users will hear
messages like, "take the next left" in addition to or instead of messages like,
"in 0.2 miles, turn left."
10.7.0
Fixed
Crash in Unusual Initialization Cases . A crash that occurred in unusual (but
supported) initialization conditions was fixed.
November 20, 2025
10.6.0
Announcement
The Navigation SDK for iOS version 10.6.0 is now available . See the Release
Notes
for information about this release and for all previous releases or subscribe to
the Release Notes XML
feed .
If you are a new user, see Set up your Google Cloud
project
to start the installation process. If you are an existing customer, see the
upgrade instructions at Overview and
requirements .
10.6.0
Announcement
Real-time disruption configuration is now generally available . See the documentation .
October 13, 2025
Feature
Navigation voice guidance now references stop signs when describing upcoming
maneuvers in the US, Japan, and Sweden.
October 02, 2025
10.4.0
Announcement
The Navigation SDK for iOS version 10.4.0 is now available . See the Release
Notes
for information about this release and for all previous releases or subscribe to
the Release Notes XML
feed .
If you are a new user, see Set up your Google Cloud
project
to start the installation process. If you are an existing customer, see the
upgrade instructions at Overview and
requirements .
10.4.0
Issue
A crash can occur in Navigation SDK for iOS version 10.4.0 when using Real Time
Disruption features. Interaction with on-route incidents can lead to this crash.
We recommend customers who use Real Time Disruption features not upgrade to
version 10.4 at this time.
10.4.0
Feature
Narrow roads callouts now appear on users' routes. This feature is available for
some areas in India when users are in four wheeled driving mode.
10.4.0
Feature
Callouts for unpaved road segments now appear on users' routes. This feature is
available in the USA, Canada, and Sweden, when users are in four wheeled driving
mode.
10.4.0
Fixed
Callouts are no longer duplicated when the traffic layer is enabled.
10.4.0
Fixed
Fixed a long-standing, low-probability bug that could cause crashes. The crashes
were caused by a thread-safety issue that was exposed in improved iOS 26 crash
analysis.
September 25, 2025
10.2.0
Feature
You can now use cloud-based maps styling to style both the navigation map and
the road map by creating reusable styles associated with map IDs. See the
documentation .
September 08, 2025
10.3.0
Announcement
The Navigation SDK for iOS version 10.3.0 is now available . See the Release Notes for information about this release and for all previous releases or subscribe to the Release Notes XML feed .
If you are a new user, see Set up your Google Cloud project to start the installation process.
If you are an existing customer, see the upgrade instructions at Overview and requirements .
10.3.0
Feature
Railroad crossing callouts now appear on users' routes. Only available in the USA and Canada.
10.3.0
Feature
Improved voice guidance messages. Guidance now includes counted turns and mention railway crossings.
10.3.0
Fixed
Fixed an issue where the Trip Progress Bar could become too small to be usable when a large accessory view was displayed. The progress bar will now be hidden if its available height is below a minimum threshold (200 points).
August 18, 2025
Deprecated
CocoaPods is in maintenance mode as of 8/18/2025 and we won't release more versions of CocoaPods after Q2 2026. Use Swift Package Manager instead. See the installation page for information about using Swift Package Manager.
August 12, 2025
10.2.0
Announcement
The Navigation SDK for iOS version 10.2.0 is now available . See the Release Notes for information about this release and for all previous releases or subscribe to the Release Notes XML feed .
If you are a new user, see Set up your Google Cloud project to start the installation process.
If you are an existing customer, see the upgrade instructions at Overview and requirements .
10.2.0
Feature
3D buildings display during navigation. Displays 3D buildings (polygons with height) during turn-by-turn navigation. You can toggle this feature by using the Maps SDK buildingsEnabled: method. See the documentation .
10.2.0
Feature
Proximity check added for user-initiated voting mid-trip . To enhance map data quality, the Navigation SDK for iOS now checks whether a user-initiated vote on a real-time disruption was initiated near the incident.
10.2.0
Change
The number of users who have reported an incident no longer appears in the incident callout .
10.2.0
Fixed
The real-time disruptions button is not re-enabled if disabled programmatically when the reporting panel is dismissed.
10.2.0
Fixed
The setDestinations() methods now reset the traveledPath property.
July 14, 2025
10.1.0
Announcement
The Navigation SDK for iOS version 10.1.0 is now available . See the Release Notes for information about this release and for all previous releases or subscribe to the Release Notes XML feed .
If you are a new user, see Set up your Google Cloud project to start the installation process.
If you are an existing customer, see the upgrade instructions at Overview and requirements .
10.1.0
Deprecated
showsTrafficLights and showsStopSigns are deprecated and will be removed in a future release.
10.1.0
Feature
Custom buttons for real-time disruptions .
You can now create custom buttons to initiate the real-time disruptions (RTD) reporting flow.
The new reportIncidentsAvailable and presentReportIncidentsPanel methods have been added to the GMSMapView class. These methods allow you to:
Check if incident reporting is available for the current navigation context.
Display the incident reporting panel programmatically, enabling you to implement custom incident reporting buttons.
See the full documentation .
10.1.0
Feature
Maneuver callouts enabled . Callouts now appear before the next maneuver(s) that a user needs to make, not at the moment they need to make the maneuver.
10.1.0
Feature
Slowdown and stalled vehicle callouts disabled . Callouts now do not appear for slowdowns and stalled vehicles, and users are no longer able to vote or report on stalled vehicle incidents. This creates a more streamlined experience.
10.1.0
Feature
Added the ability to control the visibility of real-time disruption callouts using the shouldDisplayPrompts method. For more information, see Interactive disruption callouts along routes .
10.1.0
Fixed
Fixed : Issue where background notifications were not replaced.
10.1.0
Fixed
Fixed : The corner radius of the ETA card has been adjusted to match other Google UI elements.
10.1.0
Fixed
Fixed : The real-time disruption button now moves vertically when mapPadding is added.
May 19, 2025
10.0.0
Breaking
According to the Mobile OS version support policy , we are freezing support for iOS 15 as of Navigation SDK for iOS v10.0.0. The new minimum supported OS is iOS 16. Earlier SDK versions will continue supporting iOS 15.
If your dependencies do not specify a version number, your IDE will load the newest SDK version and new builds of your app will not support iOS 15.
Specify a version of the Navigation SDK for iOS in your application's build dependencies in order to control when you raise the minimum supported OS for new versions of your app.
10.0.0
Announcement
The Navigation SDK for iOS version 10.0.0 is now available . See the Release Notes for information about this release and for all previous releases or subscribe to the Release Notes XML feed .
If you are a new user, see Set up your Google Cloud project to start the installation process.
If you are an existing customer, see the upgrade instructions at Overview and requirements .
10.0.0
Deprecated
The showsTrafficLights and showsStopSigns properties in GMSUISettings are now deprecated. Traffic lights and stop signs will be shown along the route during navigation by default, when the data is available.
10.0.0
Announcement
In the next major version of Navigation SDK, traffic lights and stop signs in GMSUISettings will be shown by default.
10.0.0
Announcement
In the next major version of Navigation SDK, compassButton in GMSUISettings will be shown by default.
10.0.0
Feature
Destination and entrance highlighting . When a destination is created with a placeID , the destination building will now be highlighted and an entrance icon will be shown whenever possible. These visual cues aid users in distinguishing and navigating to their intended destination. See the documentation .
10.0.0
Feature
Route-relevant orientation landmark POIs . Landmark POIs, featuring visibly prominent chains, are displayed by default along routes and near key intersections where maneuvers are required. These pins appear in both the route overview and during active navigation. This feature is on by default.
10.0.0
Announcement
The new minimum version of Xcode is 16.0.
10.0.0
Change
The compass button in active navigation mode has been updated.
The size and style has been updated to match other Google Maps Mobile offerings, though the default position has not changed.
To avoid driver distraction, the compass will remain in the same position if the header (in portrait mode) expands and conflicts with the default position of the compass. If you add a secondary header custom control or header accessory view, the compass is now hidden to avoid UI conflicts. The compass now supports day and night modes, as well as dark mode.
March 24, 2025
9.4.0
Announcement
The Navigation SDK for iOS version 9.4.0 is now available . See the Release Notes for information about this release and for all previous releases or subscribe to the Release Notes XML feed .
If you are a new user, see Set up your Google Cloud project to start the installation process.
If you are an existing customer, see the upgrade instructions at Overview and requirements .
9.4.0
Feature
Enable and configure real-time disruption features . Real-time disruptions are a collection of features that alert users about disruptions along their route and allow users to report and verify disruptions that they encounter. Real-time disruption features are enabled for all customers by default, but can be disabled. All drivers who haven't accepted the in-app terms from Navigation SDK for iOS v9.1.0 or later will be prompted to accept them in this release to provide awareness of the disruption reporting. See the full documentation .
9.4.0
Fixed
Trip Progress Bar
The trip progress bar location is now aligned to the left side of the screen. For right-to-left languages, the progress bar will be on the right.
The trip progress bar is automatically hidden when the GMSMapView height is not at least 552pts.
The trip progress bar is now disabled for CarPlay screens.
9.4.0
Fixed
The compass and Google logo are now mirrored for right-to-left languages. The compass is on the left and the logo is on the right for right-to-left languages.
9.4.0
Fixed
Updated the default camera bounds in landscape mode. Camera bounds are now centered in the end half (right half in left-to-right layouts) of the screen to provide more space around the chevron.
February 04, 2025
All versions
Feature
Navigation voice guidance now references traffic lights when describing upcoming maneuvers in US, CA, FR, NO and JP.
January 27, 2025
9.3.0
Announcement
The Navigation SDK for iOS version 9.3.0 is now available . See the Release Notes for information about this release and for all previous releases or subscribe to the Release Notes XML feed .
If you are a new user, see Set up your Google Cloud project to start the installation process.
If you are an existing customer, see the upgrade instructions at Overview and requirements .
9.3.0
Fixed
Swift Preview no longer breaks when the Navigation SDK for iOS and Maps SDK for iOS are added using Swift Package Manager.
9.3.0
Breaking
If you are creating a purely Objective-C project, you must also create an empty .swift file in your project, or add the following into the Other Linker Flags section of the Xcode project:
- L$(DEVELOPER_DIR)/Toolchains/XcodeDefault.xctoolchain/usr/lib/swift/$(PLATFORM_NAME)
9.3.0
Announcement
As of this release, crosswalks, sidewalks, and road lane markings may be visible on the map in certain metropolitan areas worldwide. The areas where these elements are visible may vary over time. When visible, crosswalks and sidewalk elements can be styled using Cloud Based Map Styling .
November 18, 2024
9.2.0
Announcement
The Navigation SDK for iOS version 9.2.0 is now available. See the Release Notes for information about this release and for all previous releases or subscribe to the Release Notes XML feed .
If you are a new user, see Set up your Google Cloud project to start the installation process.
If you are an existing customer, see the upgrade instructions at Overview and requirements .
9.2.0
Feature
New navigation component colors. Updated all the navigation component colors on maps to match the new colors that are already available in the Google Maps app. For more information, see New map style for Google Maps Platform .
9.2.0
Change
All GoogleMapsBase references are now part of GoogleMaps . GoogleMaps.xcframework now includes GoogleMapsBase and GoogleMapsCore . Any configuration references to either framework can be removed.
9.2.0
Change
Updated API reference. The look and organization of the Navigation SDK for iOS has changed.
Note: The URLs for the API references pages have changed, so any pages you may have bookmarked will redirect you to the API reference homepage.
Visit the new API reference .
September 19, 2024
9.1.2
Fixed
Bug fixes.
August 28, 2024
9.1.1
Fixed
Bug fixes.
9.1.1
Fixed
Export the classes GMSNavigationLane , GMSNavigationLaneDirection , and GMSNavigationTermsAndConditionsOptions .
August 14, 2024
9.1.0
Announcement
The Navigation SDK for iOS version 9.1.0 is now available. See the Release Notes for information about this release and for all previous releases or subscribe to the Release Notes XML feed.
If you are a new user, see Set up your Google Cloud project to start the installation process.
If you are an existing customer, see the upgrade instructions at Overview and requirements .
9.1.0
Feature
This release introduces a new Skip Terms of Service Options API.
This is a new GMSNavigtionTermsAndConditionsOptions API to present the terms and conditions dialog. Developers are recommended to use GMSNavigationServices.showTermsAndConditionsDialogIfNeededWithOptions:callback: to present the dialog.
9.1.0
Fixed
Fixed a bug where the reported GMSNavigationNavState could be incorrect when a reroute is about to occur.
9.1.0
Fixed
Fixed a bug where GMSNavigationNavInfo was not always reported when navigation is stopped.
9.1.0
Fixed
Fixed a bug where the wrong maneuver icon was sometimes displayed.
May 28, 2024
9.0.0
Announcement
Release 9.0.0
New Features. The navigation SDK for iOS now offers updated map colors, CarPlay support, and updated default turn card design.
The version numbering for Navigation SDK for iOS is advancing from v4.x to v9 to match the version numbers of the Maps and Places SDKs for iOS.
9.0.0
Announcement
iOS version support. According to the Mobile OS version support policy , we are freezing support for iOS 15 in an upcoming major version of Maps, Places, and Navigation SDKs for iOS.
Versions of Maps, Places, and Navigation SDKs for iOS released beginning the second quarter of 2025 will support a minimum of iOS 16. Earlier SDK versions will continue supporting iOS 15.
If your dependencies do not specify a version number, your IDE will load the newest SDK version and new builds of your app will not support iOS 15.
Specify a version of the Maps, Places, and Navigation SDKs for iOS in your application's build dependencies in order to control when you raise the minimum supported OS for new versions of your app.
9.0.0
Feature
Updated headers: The default turn card header and footer designs are updated to match the new turn cards that are already available in the Google Maps app. Developers may wish to refresh the design of any custom headers to better match the new rounded-corner look.
9.0.0
Feature
New map colors. Updated the default colors for maps to match the new colors that are already available in the Google Maps app. For more information, see New map style for Google Maps Platform .
9.0.0
Feature
Privacy manifest: The Apple Privacy Manifest file is now included in the resources bundle for the SDK. For more information, see Inspect Apple privacy manifest file .
9.0.0
Feature
CarPlay: The Navigation SDK for iOS now allows developers to support Apple's CarPlay feature. You can display your app's navigation experience on in-dash head units , and drivers can use your app directly by connecting their iPhone to the unit. Voice guidance can also run on the car's speakers. See Enable navigation for CarPlay for more information.
9.0.0
Change
The terms and conditions dialog no longer has a decline button. Drivers must acknowledge the terms and conditions from the dialog in order to continue using navigation.
9.0.0
Deprecated
The cancelButtonTextColor property in GMSNavigationTermsDialogUIParams is now deprecated.
9.0.0
Deprecated
In order to provide a safer environment for drivers, terrain mode during active navigation in the Navigation SDK for iOS is deprecated as of 9.0, and will be unsupported in the major version that will be released in the second quarter of 2025.
Instead, normal mode will be displayed.
9.0.0
Deprecated
Since Apple has deprecated OpenGL support as of iOS 12 (2018), support for the OpenGL renderer and the setMetalRendererEnabled boolean in the Maps SDK for iOS is deprecated as of v9.0.0 , and will be unsupported in the major version that will be released in the second quarter of 2025.
Instead, use the Metal renderer, which has been default since Maps SDK for iOS v8.0.0, and remove setMetalRendererEnabled from your codebase.
May 03, 2024
4.1.0
Feature
Traffic lights and stop sign icons along the route are now supported in JP, GB, and DE, in addition to BE, CA, ES, FR, IT, NL, SE, US. This change is available in SDK versions 4.1.0 and higher. For more information, see Traffic lights or stop sign icons .
April 25, 2024
5.3.0
Issue
The Cloud-based maps styling in the Navigation SDK does not support map styling in navigation when GMSMapView.navigationEnabled is set.
April 01, 2024
5.4.0
Announcement
The new minimum supported version of Xcode is 15.0.
5.4.0
Announcement
With the release of the Places SDK for iOS version 8.5, the latest version of the Nav SDK for iOS remains v.5.4.0.
February 06, 2024
5.4.0
Change
The driven part of the route polyline is now updated to be gray.
December 14, 2023
5.3.1
Announcement
Release 5.3.1
Infrastructure update . The Navigation SDK for iOS now supports Swift Package Manager .
Using Xcode's Swift Package Manager integration, you can add or update the Maps SDK dependency directly from Xcode. Select the version of the Navigation SDK for iOS that you want to use. For new projects, Google recommends you specify the latest version and use the option "Exact Version."
To learn how to add the Navigation SDK for iOS to a project through Swift Package Manager, see the Set up your project guide.
November 22, 2023
5.3.0
Feature
Advanced markers are now supported for Navigation SDK versions 5.3.0 and higher. For information on advanced markers, see Advanced Markers Overview .
5.3.0
Feature
Data-driven styling is now supported for Navigation SDK versions 5.3.0 and higher. For information on data-driven styling, see Data-driven styling for boundaries .
5.3.0
Announcement
Release 5.3.0
The Navigation SDK for iOS version 5.3.0 is now available. For information about this release, and for all previous releases, see the Release notes or subscribe to the release notes XML feed .
If you are a new user, see Set up your project to get started.
5.3.0
Feature
Cloud-based styling is now supported for Navigation SDK versions 5.3.0 and higher. For information on cloud-based styling, see the New Cloud Styling Overview.
September 19, 2023
5.2.0
Announcement
Release 5.2.0
The Navigation SDK for iOS version 5.2.0 is now available. For information about this release, and for all previous releases, see the Release notes or subscribe to the release notes XML feed .
If you are a new user, see Set up your project to get started.
5.2.0
Fixed
Fixes a bug in which navigation stops when there is no internet connection.
July 24, 2023
5.1.0
Fixed
Fixes a bug in which some arrival notifications were empty. Now, arrival notifications send the waypoint title.
May 17, 2023
5.0.0
Breaking
The navigationMapStyle API and the GMSNavigationMapStyle enumerator is removed. Deprecation announcement was released on Aug 29th 2022.
5.0.0
Breaking
According to the Mobile OS version support policy , we are freezing support for iOS 13 as of Maps SDK for iOS v8.0.0. The new minimum supported OS is iOS 14. Earlier SDK versions will continue supporting iOS 13.
If your dependencies do not specify a version number, your IDE will load the newest SDK version and new builds of your app will not support iOS 13.
Specify a version of the Maps SDK for iOS in your application's build dependencies in order to control when you raise the minimum supported OS for new versions of your app.
5.0.0
Fixed
The TurnByTurn roundaboutTurnNumber now returns the maneuver number instead of the degree radius of the turn.
5.0.0
Feature
Introduces a new class GMSNavigatorSession which can be created from a new class method on GMSNavigationServices and then used to programmatically control a navigation session.
5.0.0
Announcement
The new minimum supported version of Xcode is 14.0. Note the deprecations in the Xcode 14 release notes about the end of support for building with bitcode.
5.0.0
Change
You can now set 25 waypoints as maximum destinations. Providing more than 25 waypoints will get a GMSRouteStatusWaypointError error code.
May 15, 2023
4.4.0
Announcement
Freezing support for iOS 14
According to the Mobile OS version support policy , we are freezing support for iOS 14 in an upcoming major version of Navigation SDK for iOS.
Versions of SDK for iOS released beginning the second quarter of 2024 will support a minimum of iOS 15. Earlier SDK versions will continue supporting iOS 14.
If your dependencies do not specify a version number, your IDE will load the newest SDK version and new builds of your app will not support iOS 14.
Specify a version of the Navigation SDK for iOS in your application's build dependencies in order to control when you raise the minimum supported OS for new versions of your app.
February 27, 2023
4.4.0
Change
The Navigation SDK for iOS version 4.4.0 is now available. Version bump, no changes . This version is functionally identical to v.4.3.0. See the Release Notes for information about this release and for all previous releases, or subscribe to the Release Notes XML feed .
4.4.0
Change
Navigation SDK for iOS is now available as a CocoaPods pod. See Set up your project in the SDK documentation to learn more.
4.4.0
Change
If your project must show the Terms and Conditions dialog, setting shouldOnlyShowDriverAwarenesssDisclaimer to YES has no effect.
January 11, 2023
4.3.0
Fixed
257934849 : Fixes a bug where a map's custom style disappears if navigation is enabled and subsequently disabled in the map view.
November 03, 2022
4.2.0
Fixed
243163913 : Fixes a crash when displaying the Terms of Service dialog on the mobile device while connected to CarPlay. (Note: CarPlay is not yet supported in Navigation SDK)
4.2.0
Change
The Terms of Service dialogue shows updated language.
August 29, 2022
4.1.0
Deprecated
Deprecates the GMSNavigationMapStyle API and the GMSNavigationMapStyleDefault and GMSNavigationMapStyleHighDetail enumerators. These enumerators enabled you to switch your app's default map view from a simple base map style to a detailed map style showing extra detailed tiles, including 2D building outlines on zoom level 18+ and 2D building numbers on zoom level 19+. Due to changes in the base map for iOS, these details are now enabled by default, so this enumerator is no longer necessary.
4.1.0
Feature
Allow customers to show traffic lights and stop signs during navigation.
Version 4.0.0 (June 27, 2022)
The Terms of Service dialogue shows new language.
The Terms of Service dialogue shows new language.
Features
You can now include ferries as part of your routing strategy. See Routes
that include
ferries .
Support freezes
Support for iOS 12 is now frozen. The minimum iOS version is now 13.0.
The new minimum version of Xcode is 13.0.
Version 3.2.1 (May 9, 2022)
Features
Version bump with no feature changes. This version is functionally identical
to v.3.2.0.
Version 3.2.0 (April 25, 2022)
Features
Version bump with no feature changes. This version is functionally identical
to v.3.1.1.
Version 3.1.1 (March 22, 2022)
Bug fixes
Previous versions closed the terms of services dialog when a user clicked on
the dimmed background.
Version 3.1.0 (March 9, 2022)
Features
You can now add a trip progress bar to display
the details of the trip in a linear view on the trailing edge of the map.
Enable it by setting the new navigationTripProgressBarEnabled property in
GMSUISettings .
You can now subscribe to navigation state information (including step info,
ETA, and remaining distance) through the didUpdateNaveInfo: event listener
in
GMSNavigatorListener .
See Building TurnByTurn navigation on small external
screens .
Bug fixes
Previous versions could trigger a single navigation event for multiple
arrival events in a navigation session.
Version 3.0.3 (February 16, 2022)
Bug fixes Previous versions failed to launch for apps developed with
SceneDelegate because the Terms of Service dialog did not display. Now,
scene-based apps should correctly display the Terms of Service dialog and the
app will launch after user acknowledgement.
Version 3.0.2 (January 24, 2022)
Bug fixes
Previous versions failed to launch for apps developed with SwiftUI because
the Terms of Service dialog did not display. Now, SwiftUI-based apps should
correctly display the Terms of Service dialog and the app will launch after
user acknowledgement.
Version 3.0.1 (December 9, 2021)
Features
Added stability improvements to the release.
Version 3.0 (November 29, 2021)
Features
Alternative map
types ,
including Satellite, Terrain, and Hybrid maps, are now supported in
navigation mode.
(Beta) This release contains a preview of support for the XCFramework
format. You can now
install
the Navigation SDK for iOS as an XCFramework, a binary package that you can
use on multiple platforms including machines using the M1 chipset.
Google recommends that you only use this Beta release for development and testing,
and rely on the .framework version of the SDK for your production apps.
Support freezes
Support for iOS 11 is now frozen. The minimum iOS version is now 12.0.
The new minimum version of Xcode is 12.0.
Version 2.2 (October 19, 2021)
Features
During navigation, display a dotted line from the last navigation point to
the destination.
Freezing support for iOS 12 - October 18, 2021
In response to changes in our internal dependencies, we are freezing support for
iOS 12 in an upcoming major version of Google Maps Platform SDKs for iOS.
Navigation SDK for iOS v4.0 or higher will only support devices running a
minimum of iOS 13.
Apps built with v3.x of the Maps SDK for iOS will continue to work for iOS 12.
If your dependencies in CocoaPods or Carthage don't specify a version number,
Xcode will load the newest version and new builds of your app won't support iOS 12.
Steps to take
In your Podfile or Cartfile, specify the 3.x versions of
Navigation SDK for iOS.
See examples of CocoaPods and Carthage dependencies for
Maps and
Places SDK
for iOS.
Each time you build a new version of your app, run pod outdated or
carthage outdated to check for new versions of your CocoaPods or
Carthage dependencies. See the guidance on
app maintenance best practices .
Don't upgrade to v4.0 or higher for Navigation SDK for iOS until you are
ready to drop support of iOS 12 for your app.
Version 2.2 - Freezing support for iOS 11 (July 20, 2021)
In response to changes in our internal dependencies, we are freezing support of
iOS 11 in an upcoming major version of Google Maps Platform
SDKs for iOS. Earlier SDK versions will continue supporting iOS 11.
The following SDK versions will only support devices running a minimum of iOS
12:
Maps SDK for iOS or Places SDK for iOS v6.0 or higher
Navigation SDK for iOS v3.0 or higher
Rides & Deliveries Driver or Consumer SDK v1.0 or higher
Apps built with v5.x of the Maps and Places SDKs for iOS and v2.x of the
Navigation SDK will continue to work for iOS 11. If your dependencies
in CocoaPods or Carthage don't specify a version number, Xcode will load
the newest version and new builds of your app won't support iOS 11.
Steps to take
In your Podfile or Cartfile, specify the 5.x versions of
Maps and Places SDKs,
and version 2.0 for Navigation SDK, which were released earlier
this year. See examples of CocoaPods and Carthage dependencies for
Maps and
Places SDK
for iOS.
Each time you build a new version of your app, run pod outdated or
carthage outdated to check for new versions of your CocoaPods or
Carthage dependencies. See the guidance on
app maintenance best practices .
Don't upgrade to v6.0 or higher for Maps and Places SDKs, or v3.0 or higher
for Navigation SDK, until you are ready to drop support of
iOS 11 for your app.
Version 2.1 (June 28, 2021)
Features
Setting destinations with a route token
now supports two-wheeler travel mode.
Setting followingZoomLevel now takes effect immediately in following mode;
after starting a new navigation session, the camera does not zoom out.
Added a setTransactionIDs:errorHandler
method in GMSNavigator . Use this method to set the ongoing transaction IDs
which apply to the navigation events during the current navigation session.
Support freezes
Support for iOS 11 will be frozen in an upcoming major version.
Version 2.0 (May 13, 2021)
Decommissions
iOS 10 is no longer supported. The minimum OS is now 11.0.
ARMv7 32-bit architecture no longer supported.
The deprecated GMSNavigatorDelegate and
GMSRoadSnappedLocationProviderDelegate protocols will change the protocol
names to GMSNavigatorListener and GMSRoadSnappedLocationProviderListener ,
respectively. All previous delegate methods will exist in the new listeners,
with the following exceptions.
GMSNavigator and GMSRoadSnappedLocationProvider removed the
deprecated property delegate . Instead, call methods -addListener:
and -removeListener , respectively, to add or remove the replacement
listeners.
GMSNavigatorDelegate methods -
(NSTimeInterval)navigatorTimeUpdateThreshold:(GMSNavigator *)navigator
and - (CLLocationDistance)navigatorDistanceUpdateThreshold:(GMSNavigator
*)navigator are removed. Instead, set the timeUpdateThreshold and
distanceUpdateThreshold properties on GMSNavigator directly.
GooglePlaces.framework won't be included in the Navigation SDK for iOS
Zip package in the next Navigation SDK release. If you need the
Places SDK in your application, follow the Places SDK for iOS
installation instructions .
Version 1.16.0 (March 8, 2021)
Support for iOS 10 will be dropped in version 2.0.0.
Features:
Added a navigationMapStyle property to the
GMSUISettings
class. The map will display 2D building outlines at zoom level 18+ when this
property is set to GMSNavigationMapStyleHighDetail .
Added a followingZoomLevel property to the
GMSMapView
class. You can use this property to set the zoom level when the camera is in
following mode during navigation.
Added a stopGuidanceAtArrival property to the GMSNavigator
class. You can use this property to determine whether guidance should
automatically stop when navigator:didArriveAtWaypoint: is called.
Updated the Objective-C and Swift demos.
Bug fixes:
Fixed an issue where the SDK would crash when attempting to get the traveled
path upon a navigator route change.
Version 1.15.1 (January 21, 2021)
Bug fixes:
Fixes an issue where the camera mode
wouldn't switch to
GMSNavigationCameraModeFree
if set to
GMSNavigationCameraModeFollowing .
Version 1.15.0 (December 8, 2020)
Features:
Added crash detection during SDK initialization. In cases where two or more
consecutive crashes are detected at initialization time, the SDK will attempt
to restore functionality by automatically resetting cached client parameters
and map tile data. A recovery attempt event will be logged unless the client
has opted out of unexpected termination reporting.
Version 1.14.0 (October 13, 2020)
Features:
Support for iOS 9.0 has been dropped. The new minimum is iOS 10.0.
The new minimum version of Xcode is 11.7.
By default, unexpected SDK terminations, such as app crashes while the SDK is
still running, are monitored to let Google to improve SDK stability when
applicable. There is also an option to opt-out by using the setAbnormalTerminationReportingEnabled:
API on GMSNavigationServices .
Version 1.13.0 (August 24, 2019)
Features:
You can now pass a route token to the Navigation SDK to retrieve the
route represented by that route token. The route token is associated with a
route response when you call the Routes Preferred
API . Learn more about custom
routes .
Added a vehicleStopover
property to the GMSNavigationWaypoint class. This feature relocates the
waypoint to a nearby place if its location is not suitable for a vehicle to
make a stop.
Added a mutable waypoint class, GMSNavigationMutableWaypoint
which lets you change some waypoint properties.
Added GMSNavigatorListener and
GMSRoadSnappedLocationProviderListener
protocols, which enable multiple classes to listen to important navigation
and road snapping events.
Deprecations
GMSNavigatorDelegate and GMSRoadSnappedLocationProviderDelegate
protocols are deprecated as of August 24, 2020. Instead, use
GMSNavigatorListener
and
GMSRoadSnappedLocationProviderListener .
Note:
To build apps using the Navigation SDK, the current minimum IDE
version supported is Xcode 11.5.
Version 1.12.0 (December 2, 2019)
Features:
You can now request routes with a target distance, so that routes will be
ranked by their absolute delta to the target distance from smallest to
largest. To do this, initialize routingOptions using the
initWithTargetDistancesMeters (GMSNavigationRoutingOptions.h), and then
call setDistinations (GMSNavigator.h), passing the routing options.
Note:
To build apps using the Navigation SDK, the current minimum IDE
version supported is Xcode 11.0.
Version 1.11.0 (October 28, 2019)
Features:
Drivers can now receive speed alerts when they exceed speed limits. Speed
alerts are enabled through shouldDisplaySpeedometer and configurable
through GMSNavigationSpeedAlertOptions and
GMSNavigationSpeedometerUIOptions .
Note: As set out in the Google Maps Enterprise terms of service, Google makes
no warranties regarding the quality of any feature including the accuracy of
the speed alert feature. This feature is intended to be used by operators
for informational purposes only
Updated the Terms of Service dialogue language.
Version 1.10.1 (October 9, 2019)
Stability and Bug fixes
Fixed a race condition where getting the route leg can cause a crash during
certain situations.
Version 1.10.0 (September 4, 2019)
Features:
Added alternateRoutesStrategy to GMSNavigationRoutingOptions . This lets
the user select the number of alternate routes shown.
Added routingStrategy to GMSNavigationRoutingOptions . This allows the
returned routes to be ordered by either time or distance.
Added the ability to set the navigation header accessory view (secondary
header).
The visual appearance of the Terms and Conditions dialog is now fully
customizable.
Stability and Bug fixes
Fixed the Terms and Conditions dialog button text to match standard
language.
Version 1.9.1 (July 29, 2019)
Stability and Bug fixes
Improved how certain internal event listeners are deregistered when
destinations are cleared.
Version 1.9.0 (June 26, 2019)
Features:
The title of the 'Terms and Conditions' and 'Driver Awareness' dialogs are
now customizable.
Destinations can now be set with a side-of-the-road preference used for
routing considerations.
Two-Wheeler travel mode (Beta): You can now set the travel mode to
TWO-WHEELER to get motorcycle and scooter routes. This feature is
only available in India and Indonesia.
Version 1.8.1 (February 6, 2019)
Stability and Bug fixes
Taxi mode Fixed the camera and road snapping behaviors.
Version 1.8 (December 21, 2018)
Features:
Taxi mode - BETA : Your app can use the lanes and streets that are
specifically dedicated to taxicabs to provide routing and Estimated Time of
Arrival (ETA)s for vehicles identified as taxicabs.
The following geographical areas are supported:
Brazil: Rio de Janeiro
England: Birmingham, Coventry, London Metro Area, Manchester
Israel: Tel Aviv
Ireland: Edinburgh, Dublin
Russia: Moscow
Scotland: Glasgow
Spain: Madrid, Barcelona
Traffic status : Your app can report the level of congestion along a route
using the getSeverity method of the TimeAndDistance class.
Version 1.7.0 (Aug 27, 2018)
Features:
A Directions List for the remaining turn instructions of the ride can be
displayed through [GMSNavigationDirectionsListController
directionsListView].
The speed limit sign can be enabled and will be displayed when data is
available through [GMSMapView shouldDisplaySpeedLimit].
Known issues
A recent change in the map tile rendering code may cause a low-volume crash
with signature 'gmscore::renderer::GLState::BindBuffer'. This bug is not
known to occur on the Navigation API, but other google maps products with
shared code. We advise caution when using the 1.7.0 release. The iOS 1.3.4
release has an older version of the renderer and wouldn't exhibit this
release has an older version of the renderer and wouldn't exhibit this
crash.
New Style Default Opt-In for Nav SDK 1.6+ (Aug 21, 2018)
The new basemap style has been enabled by default in the Maps SDK for iOS,
however it is NOT enabled for Nav SDK users. Compiling the Nav SDK and Maps
SDK together will cause your project to be opted out of the new basemap
style. Therefore, contrary to the instructions for the Maps
SDK ,
Nav SDK users will need to explicitly opt-in.
To opt-in, use the code snippet below. The best place to do this in your
app is right after providing your API key, using GMSServices provideAPIKey.
You must be using at least Version 1.6 in order to opt-in.
NSArray * options = @[ @"B3MWHUG2MR0DQW" ] ;
BOOL didSetApiOptions = [ GMSServices provideAPIOptions : options ];
NSLog ( @"Options were set: %d" , didSetApiOptions );
Version 1.6.1 (July 13, 2018)
Stability and Bug fixes
Fixed a compiler setting issue where movi.2d instructions are not generated
as movi.16b
Removed third-party BoringSSL dependency
Major Dependency Updates
Added third-party OpenLocationCode dependency
(https://github.com/google/open-location-code)
Removed third-party BoringSSL dependency
Known issues
A recent change in the map tile rendering code may cause a low-volue crash
with signature 'gmscore::renderer::GLState::BindBuffer'. This bug is not known to
occur on the Navigation API, but other google maps products with shared code.
We advise caution when using the 1.6.1 release. The iOS 1.3.4 release has an older
version of the renderer and wouldn't exhibit this crash.
Version 1.3.4 (July 13, 2018)
Stability and Bug fixes
Fixed a compiler setting issue where movi.2d instructions are not generated
as movi.16b
Removed third-party BoringSSL dependency
Major Dependency Updates
Added third-party OpenLocationCode dependency
(https://github.com/google/open-location-code)
Removed third-party BoringSSL dependency
Version 1.6 (May 10, 2018)
Stability and Bug fixes
Added an error code which is returned when a stale Place ID is provided.
Made sure the navigation header starts updating again automatically after
being scrolled if the user catches up to the maneuver which they
scrolled to.
Route callouts no longer disappear while a user pans the map.
When using simulated locations, guidance cards are no longer blank.
Version 1.3.3 (March 26, 2017)
Known issues
Nav SDK doesn't have built-in support for iPhone X safe areas. When
mapView.navigationEnabled is YES, the mapView won't automatically place
map controls within the safe areas and the paddingAdjustmentBehavior
property will have no effect.
The location simulator may sometimes get into a state where multiple
simulated location sources are active simultaneously. This can cause the
navigation engine to stop working and present a grey navigation header to
the user. This has not been observed when using real GPS location updates.
Route ETA labels sometimes disappear whilst the user is panning the map.
The navigation header won't automatically start updating again if the
user scrolls the header and then drives past the maneuver they have scrolled
to.
Bug fixes and improvements.
This version is functionally identical to v1.3.
Version 1.3.2 (Jan 23, 2017)
Added a mitigation for Open GL crashes with stack traces containing
gmscore::renderer::ios::GLRenderTarget::FrameEnd() where the process is killed
by SIGABRT . This change is expected to reduce the rate of these crashes but
not fix them completely. The underlying issue is believed to be in Apple's Open
GL implementation.
Version 1.3.1 (December 21, 2017)
Changed the build process for the frameworks to stop using the
-bitcode_hide_symbols flag in the prelinking stage. This causes non-exported
symbols to be included in the bitcode bundle which may allow app stack traces to
be symbolicated to a greater extent.
This version is functionally identical to v1.3.
Version 1.3 (November 6, 2017)
Features:
Added a mapViewDidTapRecenterButton: method which is called on the
GMSMapViewNavigationUIDelegate when the user taps the re-center button.
Resolved Issues:
Fixed an issue where the distance to the next turn was not shown in the
navigation header.
Fixed an issue where the ETA for the current route was displayed
unnecessarily when guidance is active and was not updated as navigation
progressed.
Version 1.2 (October 26, 2017)
Resolved Issues:
Fixed an issue where Google Navigation SDK for iOS would sometimes report a
location unavailable error if the user was stationary.
Note: Support for Xcode 7.3 has been dropped. The new minimum is Xcode 8.0.
Version 1.1.1 (October 24, 2017)
Features:
Added the option to disable bluetooth audio output using the new
audioDeviceType property on GMSNavigator .
Resolved Issues:
Fixed an issue where setting the navigationFooterEnabled property to NO
sometimes didn't work.
Version 1.1 (August 24, 2017)
Miscellaneous bug fixes and improvements.
NOTICE: Xcode 7 is no longer supported as of version 1.2.
Version 1.0 (July 5, 2017)
Launch of the Navigation SDK for iOS.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
