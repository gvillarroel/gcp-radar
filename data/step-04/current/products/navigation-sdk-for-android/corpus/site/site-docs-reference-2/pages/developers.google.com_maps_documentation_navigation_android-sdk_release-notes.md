---
title: "Navigation SDK for Android release notes \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/release-notes
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/release-notes
  title: "Navigation SDK for Android release notes \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Android
Navigation SDK for Android
Resources
Send feedback
Navigation SDK for Android release notes
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Navigation SDK for Android has undergone various updates, focusing on stability, performance, and compatibility.
Updates address issues like crashes, ANRs, memory leaks, UI inconsistencies, and Android version compatibility.
Major releases introduced or updated features including custom controls, camera bounds, route handling, traffic management, and Android system requirements.
Support for older Android versions and certain APIs/methods have been frozen or deprecated in recent releases.
Developers should review individual release notes to ensure their apps remain compatible and leverage new features.
This page is updated with each product release. The changelog lists releases by date and includes
any new features, bug fixes and significant performance improvements.
You can also browse and filter all release notes for all products in the
Google API Console .
To subscribe to these release notes, add the feed URL of this page to your RSS feed
reader .
Release versions
For major releases (for example, 6.0.0), expect a major feature or features,
additional smaller features and bug fixes, backwards incompatibility with the
previous version, and dependency upgrade requirements.
For minor releases (for example, 6.2.0), expect minor features and bug
fixes, backwards compatibility with the previous version, and minor version
upgrades of a dependency.
For patch releases (for example, 6.2.1), expect bug fixes, backwards
compatibility with the previous version, and patch upgrades of a dependency.
Kotlin version compatibility and migration information are available here .
April 13, 2026
7.6.0
Feature
Reduced consumer APK sizes by updating R8 keep rules to remove broad exclusions of the internal Navigation SDK surface. This change enables more effective code shrinking and obfuscation.
7.6.0
Feature
Added the NavigationApi.setApiKey() method to enable dynamic API key configuration at runtime. This method provides a programmatic alternative to specifying the API key in the AndroidManifest.xml file. Call this method before initializing the Navigation SDK. For more information, see Add the API key to your app .
March 16, 2026
7.5.0
Feature
Improved arrival triggering for more accurate detection and a more consistent experience when reaching a destination.
7.5.0
Change
Updated the desugaring configuration to require desugar_jdk_libs_nio .
7.5.0
Change
Reduced the startup latency of the Navigation SDK.
7.5.0
Fixed
Fixed the issue that could trigger the IllegalArgumentException: Service not registered error under certain conditions.
7.5.0
Fixed
Fixed a bug where disputed borders were not displaying correctly in certain countries.
7.5.0
Fixed
Fixed a bug where a traffic incident card changed the position of other UI elements instead of being displayed on top of them as a modal UI element.
7.5.0
Fixed
Fixed a bug where the recenter button isn't dismissed and the camera doesn't zoom in to the current location after arrival.
February 13, 2026
7.4.0
Feature
Added support for providing enhanced location context. When calling the Waypoint API , provide enhanced location context by specifying both a Place ID and latitude/longitude coordinates, or by using the navigationPointToken field. This context improves routing accuracy and the arrival experience, especially for large locations with multiple entrances or specific navigation points.
7.4.0
Fixed
Fixed a memory leak in NavigationView caused by an internal listener not being properly unregistered.
7.4.0
Fixed
Fixed a crash on Android 10-12 devices caused by an incompatible URL encoding method.
7.4.0
Fixed
Improved voice guidance playback event sequencing to prevent overlapping instructions.
7.4.0
Fixed
Fixed a memory leak by ensuring background executors are correctly cleaned up.
December 23, 2025
7.3.0
Change
Updated the minimum Kotlin version to 2.2.10. Our recommended Android Gradle Plugin (AGP) is now 8.10.0 and Gradle is now 8.11.1.
For more information, see Kotlin version compatibility and migration .
7.3.0
Change
Reduced visual noise during navigation by limiting the display of identical road labels and shields to three per viewport.
7.3.0
Fixed
setAudioGuidance can now be called at any point before navigation has started, as well as during active navigation.
November 24, 2025
7.2.0
Announcement
Real-time disruption features are now in general availability (GA)
generally available .
7.2.0
Feature
3D buildings (polygons with height) now appear during turn-by-turn navigation, where available. You can toggle this feature by using the GoogleMap.setBuildingsEnabled() method, which is set to true by default.
7.2.0
Feature
Railroad crossing callouts now appear on navigation routes in the USA and Canada.
7.2.0
Feature
In DRIVING mode, narrow roads callouts now appear on navigation routes, where available.
7.2.0
Feature
In DRIVING mode, unpaved road callouts now appear on navigation routes in the USA, Canada, and Sweden.
7.2.0
Feature
Road labeling during turn-by-turn navigation now uses the current route as context to declutter the map by automatically removing road labels for low-priority roads that do not intersect with the route. This feature is on by default.
Note: This feature is only available when no Map ID is used for styling.
7.2.0
Change
Added a new dependency on Jetpack Datastore. This change is handled by the Navigation SDK and doesn't require any action by developers or changes to apps that use the SDK, except in cases where an app is already using a non-compatible version of the library.
7.2.0
Change
The height of the Trip Progress Bar now adjusts dynamically to prevent overlap with other elements on the screen.The element disappears when its height falls below a minimum threshold and doesn't expand beyond a maximum threshold.
7.2.0
Fixed
Fixed an issue that could cause the report incident button to not expand when navigation is started.
October 22, 2025
6.3.3
Fixed
Fixed an ANR caused by a deadlock when triggering camera animations.
6.3.3
Fixed
Fixed a NoSuchElementException crash that occurred during navigation.
October 16, 2025
6.3.2
Deprecated
The onGpsAvailabilityUpdate callback in the experimental GpsAvailabilityEnhancedLocationListener is now deprecated. Use onGpsAvailabilityChange instead.
6.3.2
Fixed
Improved terms of service processing to prevent timeouts leading to invalid TERMS_NOT_ACCEPTED errors.
6.3.2
Fixed
Fixed an issue that resulted in ANR errors.
6.3.2
Fixed
Added a new callback, onGpsAvailabilityChange, to the experimental GpsAvailabilityEnhancedLocationListener, which provides changes to the internal GPS state. See GpsAvailabilityChangeEvent for more details.
6.3.2
Fixed
Improved terms of service initialization to prevent ANR errors during NavSDK initialization.
October 14, 2025
7.1.0
Fixed
Fixed an issue caused by a deadlock when Navigator.stopGuidance() was called that resulted in ANR errors.
7.1.0
Fixed
Fixed an issue that resulted in ANR errors.
7.1.0
Fixed
Improve performance around the NavigationApi.areTermsAccepted() API that was leading to ANR's on certain cases.
October 13, 2025
Feature
Navigation voice guidance now references stop signs when describing upcoming
maneuvers in the US, Japan, and Sweden.
September 24, 2025
7.0.0
Breaking
Removed the navigator.fetchRouteInfo() and com.google.android.libraries.navigation.RouteInfo APIs, as announced in the v6.0 release.
7.0.0
Breaking
Added javax.annotation.Nullable and androidx.annotation.Nullable annotations, which provide instructions for properly handling null pointers to avoid exceptions. For Java, these annotations are suggestions and do not require code changes if already handling potential null values. For Kotlin, you must properly use nullable types.
7.0.0
Breaking
NavSDK API calls now throw specific NavSDK exceptions when invalid calls are made, replacing the previous general Maps API exceptions. This change can cause compilation errors if your app directly references Maps API exceptions. The new NavSDK exceptions still inherit from their corresponding Java Runtime exceptions.
7.0.0
Breaking
Updated setDestinations to return a DUPLICATE_WAYPOINTS_ERROR error if consecutive duplicate waypoints are set.
7.0.0
Deprecated
The DisplayOptions showTrafficLights and showStopSigns APIs are now deprecated and now default to true. These APis will be removed in the next major SDK release (8.0).
7.0.0
Announcement
The targetSdk is now API level 36. This will be a requirement for all apps that deploy to Google Play Store as of August 2025. See Meet Google Play's target API level requirement .
7.0.0
Announcement
Updated the minimum supported Android API Level from 23 to 24.
7.0.0
Announcement
Removed library desugaring from Navigation SDK. You must update your app to use com.android.tools:desugar_jdk_libs_nio:2.0.3 for desugaring. We also recommend that you upgrade to Gradle 8.11.1 and the Android Gradle plugin version 8.10.0. For more information, see Set up your Android Studio project or the Navigation SDK sample app on GitHub.
7.0.0
Announcement
In accordance with the Mobile OS version support policy , we are freezing support for Android 7.0 and 7.1 (API level 24 and 25) in upcoming major versions of Navigation SDK for Android.
7.0.0
Feature
Added road closure callouts to alternate routes, in addition to the callouts on the current route.
7.0.0
Feature
You can now use Cloud-based maps styling to style both the navigation map and the road map by creating reusable styles associated with Map IDs.
7.0.0
Change
Updated the style and positioning of the compass in the navigation map
7.0.0
Change
Removed the count of the number of users who have reported an incident from the incident callout.
7.0.0
Change
Added a new dependency on the fastutil library. This change is handled by the Navigation SDK and doesn't require any action by developers or changes to apps that use the SDK, except in cases where an app is already using a non-compatible version of the library.
7.0.0
Change
Added a proximity check for user-initiated voting during active navigation. To enhance map data quality, the Navigation SDK now checks whether a user-initiated vote on a real-time disruption was initiated near the incident.
7.0.0
Change
Updated road closures to display regardless of whether traffic prompts are enabled.
7.0.0
Fixed
Fixed an issue with calls to getCurrentRouteSegment() that could cause incorrect waypoint values in the returned RouteSegment destinationWaypoint.
7.0.0
Fixed
Fix an issue in which the limit reached popup for reported incidents would not display until the next map initialization.
July 28, 2025
6.3.1
Fixed
Fixed an issue that could cause the app to crash due to a NullPointerException when NavigationView.setTrafficPromptsEnabled is called.
6.3.1
Fixed
Fixed an issue that caused the camera to jump down when a user tapped or held on the screen while the camera was following the chevron. The camera now pauses and continues following the chevron when the user lifts their finger. If the user taps and drags, the camera will stop following the chevron.
6.3.1
Fixed
Fixed an issue that resulted in an ANR when starting guidance.
6.3.1
Fixed
Fixed an issue that could cause the app to crash due to a NullPointerException when NavigationView.setTrafficIncidentCardsEnabled is called.
6.3.1
Fixed
Fixed an issue that could cause the app to crash due to an uncaught ArithmeticException when the trip progress bar is displayed.
6.3.1
Fixed
Fixed an issue that could cause the app to crash when the NavigationService is restarted in the background after a previous crash.
6.3.1
Fixed
Fixed an issue that resulted in an ANR when the navigator is initializing in the main thread.
June 25, 2025
6.3.0
Feature
Added route-relevant orientation landmark POIs. Landmark POIs, featuring visibly prominent chains, are now displayed by default along routes and near key intersections where maneuvers are required. These pins appear in both the route overview and during active navigation. This feature is on by default.
6.3.0
Feature
Added the isIncidentReportingAvailable and showReportIncidentsPanel APIs to NavigationView and SupportNavigationFragment . These methods allow you to:
Check if incident reporting is available for the current navigation context.
Display the incident reporting panel programmatically, enabling you to implement custom incident reporting buttons.
For more information, see Add a custom reporting button .
6.3.0
Feature
Destination and entrance highlighting.
Added visual highlighting to destination buildings created with a placeID to aid users in distinguishing and navigating to their intended destination. For more information, see Destination highlighting and entrances .
6.3.0
Fixed
The Navigation SDK no longer intermittently causes application crashes (ANR: Input dispatching timed out) and deadlocks on various Android devices. See the public bug .
6.3.0
Fixed
Fixed visible incident cards not being dismissed after setTrafficIncidentCardsEnabled is disabled
6.3.0
Fixed
Fixed an issue in landscape where turn card width was determined based on device screen size rather than the actual size of the map container, which caused problems in landscape mode in certain cases where the map container was not full width.
6.3.0
Fixed
Fixed visible prompts not being dismissed after setTrafficPromptsEnabled is disabled
6.3.0
Fixed
Updated the Trip Progress Bar position to better align with other Navigation UI elements.
6.3.0
Change
Updated the Gradle project configuration validation. Starting with this SDK version, Gradle will checks the following project configurations:
Android Gradle Plugin minimum version
Desugar library enablement
Desugar library minimum version
If your implementation does not meet the minimum requirements, Gradle will return a compiler error starting with " An issue was found when checking AAR metadata: …". Any future changes to the requirements for these configurations will be included in the Navigation SDK release notes.
6.3.0
Change
Added the ability to control the visibility of real-time disruption callouts using the setTrafficPromptsEnabled API. For more information, see Interactive disruption callouts along routes
June 20, 2025
6.2.3
Fixed
Fixed an issue that prevented marker info windows from showing up when programmatically requested shortly after marker creation.
6.2.3
Fixed
Fixed ForegroundServiceDidNotStartInTimeException for Android S+ devices when the Navigation Service couldn't start due to incorrect dependency injection setup.
6.2.3
Fixed
Fixed a race condition that occurred when polygons were simultaneously updated and added to the map.
6.2.3
Fixed
Fixed a NullPointerException that could occur due to a race condition when retrieving map styles for route callouts.
6.2.3
Fixed
Fixed an Application Not Responding (ANR) error caused by a deadlock occurring when navigation was stopped.
May 07, 2025
6.2.2
Fixed
Fixed an issue that added extra padding to prompt layouts.
April 25, 2025
6.2.1
Change
Moved the Report Incident button 4 dp toward the edge of the map to better match other navigation UI elements.
6.2.1
Change
Updated the size and position of the trip progress bar to provide an optimal experience for a larger range of devices.
6.2.1
Fixed
Fixed an issue that caused polylines to reappear after destinations had been cleared.
6.2.1
Fixed
Updated traffic prompts to no longer incorporate map padding.To prevent collisions with prompts and UI elements outside of Nav SDK, adjust affected elements using a PromptVisibilityListener.
6.2.1
Fixed
Fixed an issue that caused the Report Incident panel to appear in Android Auto projections.
April 01, 2025
6.2.0
Feature
Added the Prompt Visibility API, helps you avoid conflicts between UI elements generated by the Navigation SDK and your own custom UI elements.
For more information see Prompt Visibility API (Experimental) .
6.2.0
Feature
Updated the default turn card header and footer designs to match the turn cards in the Google Maps app. Turn card height now adjusts dynamically to adapt to the text displayed in the card. You may want to update any existing custom headers to better match the new turn card style.
6.2.0
Feature
Added configurable real-time disruptions features, which alert users about disruptions along their route and allow users to report and verify disruptions that they encounter.
For more information, see Configure real-time-disruptions .
6.2.0
Change
Updated the minimum Kotlin version to 2.1.
For more information, see Kotlin version compatibility and migration .
6.2.0
Fixed
Fixed a crash that was occurring after capturing a snapshot.
6.2.0
Change
Disabled the Trip progress bar for Android Auto.
6.2.0
Change
Moved the Trip progress bar to the start side (left side in LTR) of the screen.
6.2.0
Fixed
Fixed a bug in landscape where the camera viewport was incorrectly adjusted while a prompt was being displayed.
6.2.0
Fixed
Fixed a bug that caused the Trip progress bar to be rendered incorrectly on tablets.
February 11, 2025
6.1.0
Fixed
Fix an issue that would cause apps that implement the Navigation SDK to crash and throw IncompatibleClassChangeError and ClassCastException errors.
6.1.0
Feature
Updated the map to include Road Level Details in select metropolitan areas worldwide. New details include crosswalks, sidewalks, and road lane markings. The areas where these elements are visible may vary over time.
February 04, 2025
6.0.2
Fixed
Fixed an issue that could result in Java type check errors at runtime.
All versions
Feature
Navigation voice guidance now references traffic lights when describing upcoming maneuvers in US, CA, FR, NO and JP.
January 21, 2025
6.0.1
Breaking
The SDK now throws a ForegroundExpectedException from ForegroundServiceManager.startForeground(), instead of a RuntimeException, when the service can't be started in Foreground. This ForegroundExpectedException can be caught by apps that implement the SDK when ForegroundServiceManager.startForeground() is used.
6.0.1
Feature
Updated the setCustomControl method to add support for a footer position. This fixes the issue of positioning custom control in relation to the ETA card.
For more information, see CustomControlPosition.FOOTER .
6.0.1
Fixed
Fixed an issue that would cause apps that implement the Navigation SDK to crash and throw a java.lang.IllegalStateException on the MediaPlayer.getDuration() method.
6.0.1
Change
Enabled enforcement of the targetSdk increase to API level 34. This breaking change was announced in 6.0.0.
6.0.1
Fixed
Updated the position of the compass in landscape mode. The compass now aligns with the top of the map, instead of the bottom of the header, in order to better accommodate the half-width header.
6.0.1
Fixed
Fixed an issue that resulted in ANR errors while switching from Navigation to Map UI.
6.0.1
Fixed
Fixed a race condition that was causing native crashes in certain situations for apps that use the Navigation SDK.
6.0.1
Fixed
Updated the default camera bounds in landscape mode. Camera bounds are now centered in the end half (right half in left-to-right layouts) of the screen to provide more space around the chevron.
6.0.1
Fixed
Fixed an issue that resulted in an ANR error while inflating the SupportMapFragment.
6.0.1
Fixed
Improved concurrency management within the SDK to address potential ANR errors caused by accessing artifacts from different threads.
6.0.1
Fixed
Re-enabled default jetification so that it no longer needs to be manually enabled in your project-level gradle.properties file.
This fixes an issue that would cause apps that implement the Navigation SDK to crash and throw a NoClassDefFound error.
December 02, 2024
5.99.1
Feature
Updated the setCustomControl method to add support for a footer position. This fixes the issue of positioning custom control in relation to the ETA card.
For more information, see CustomControlPosition.FOOTER .
5.99.1
Fixed
Fixed an issue that resulted in ANR errors while switching from Navigation to Map UI.
5.99.1
Fixed
Fixed an issue that would cause apps that implement the Navigation SDK to crash and throw a NoClassDefFound error due to a Jetification problem.
5.99.1
Fixed
Fixed an issue that resulted in an ANR error while inflating the SupportMapFragment.
5.99.1
Fixed
Updated the position of the compass in landscape mode. The compass now aligns with the top of the map, instead of the bottom of the header, in order to better accommodate the half-width header.
5.99.1
Fixed
Updated the default camera bounds in landscape mode. Camera bounds are now centered in the end half (right half in left-to-right layouts) of the screen to provide more space around the chevron.
5.99.1
Fixed
Fixed a race condition that was causing native crashes in certain situations for apps that use the Navigation SDK.
5.99.1
Fixed
Fixed an issue that would cause apps that implement the Navigation SDK to crash and throw a java.lang.IllegalStateException on the MediaPlayer.getDuration() method.
5.99.1
Fixed
Improved concurrency management within the SDK to address potential ANR errors caused by accessing artifacts from different threads.
November 11, 2024
5.2.5
Fixed
Fixed an issue that would throw a SecurityException and cause the app to crash on devices running Android 14. This issue would occur if the app attempted to start a foreground service for guidance notifications without obtaining the users permission for background location access. For more information, see Background location usage .
November 06, 2024
5.5.2
Feature
Updated the setCustomControl method to add support for a footer position. This fixes the issue of positioning custom control in relation to the ETA card.
For more information, see Map UI Controls .
5.5.2
Fixed
Updated the default camera bounds for landscape mode. Camera bounds are now centered in the end half (right half in left-to-right layouts) of the screen to provide more space around the chevron.
October 18, 2024
5.5.1
Fixed
Fixed a race condition that was causing native crashes in certain situations for apps that use the Navigation SDK.
5.5.1
Fixed
Updated the position of custom control elements in landscape mode. Custom control elements in the BOTTOM_END_BELOW position now align with the bottom of the map, instead of the top of the footer, to better accommodate the half-width footer.
5.5.1
Fixed
Updated the position of the compass in landscape mode. The compass now aligns with the top of the map, instead of the bottom of the header, in order to better accommodate the half-width header.
September 13, 2024
6.0.0
Breaking
Removed the GoogleMap.addMarker(AdvancedMarkerOptions) method. This method was previously exposed because the Navigation SDK includes the Maps SDK API. However, the method was only included in the preview channel of the Maps SDK and was not used by the Navigation SDK. To add Markers or AdvancedMarkers to the map with the Nav SDK, use GoogleMap.addMarker(MarkerOptions) instead.
6.0.0
Breaking
Starting with version 6.0.0 of the Navigation SDK for Android, apps must upgrade to Kotlin 2.0.
For more information, see Migrate to Kotlin 2.0 .
6.0.0
Breaking
The targetSdk is now API level 34. This will be a requirement for all apps that deploy to Google Play Store as of August 2024. See Meet Google Play's target API level requirement .
6.0.0
Breaking
Removed all of the ExternalCache methods and classes, which were deprecated in v5.0.
These include the following methods from GoogleMap model class, the following methods were removed:
GoogleMap#setExternalCache
GoogleMap#setNetworkEnabled
GoogleMap#isNetworkEnabled
The following model classes were removed:
ExternalCache
ResourceDescriptor
TileDescriptor
6.0.0
Deprecated
Deprecated the navigator.fetchRouteInfo() method, which was previously only available to Mobility Services customers. Use the computeCustomRoutes() method from the Routes Preferred API instead.
6.0.0
Deprecated
Support for providing the Navigator with the same destination (waypoint) more than once consecutively has been deprecated.
Note: The SDK does not currently throw an error in these cases.
6.0.0
Deprecated
The use of MAP_TYPE_TERRAIN during navigation is deprecated.
6.0.0
Announcement
In the next major version of Navigation SDK, traffic lights and stop signs in DisplayOptions will be shown by default.
6.0.0
Issue
An issue related to the use of earlier versions of desugaring libraries may cause some apps that implement the Navigation SDK to crash with the following NoSuchMethod error at runtime:
No virtual method toSeconds()J in class Ljava/time/Duration; or its super classes (declaration of 'java.time.Duration' appears in ...)
If you experience this issue, update your app to use com.android.tools:desugar_jdk_libs_nio:2.0.3 for desugaring. You may also need to upgrade to Gradle 8.4 and the Android Gradle plugin version 8.3.0. For more information, see Set up your Android Studio project or the Navigation SDK sample app on GitHub.
6.0.0
Breaking
Removed default jetification from the Navigation. If your app relies on non-AndroidX libraries, set android.useAndroidX=true and android.enableJetifier=true in your project-level gradle.properties file. For more information, see the Navigation SDK sample app on GitHub.
5.99.0
Feature
Updated the handling of quotas for destination requests to ensure quota tracking persists when an app is restarted.
6.0.0
Announcement
In accordance with the Mobile OS version support policy , we are freezing support for Android 6 and 7 (API Level 23, 24, and 25) in upcoming major versions of Navigation SDK for Android.
Versions of Navigation SDK for Android released beginning the third quarter of 2025 will support a minimum of Android 8 (API Level 26). Earlier SDK versions will continue supporting Android 6 and 7.
If your dependencies do not specify a version number, your IDE will load the newest SDK version and new builds of your app will not support Android 6 and 7.
Specify a version of the Navigation SDK for Android in your application's build dependencies in order to control when you raise the minimum supported OS for new versions of your app.
5.99.0
Issue
An issue related to AndroidX migration may cause some apps that implement the Navigation SDK to crash with the following NoClassDefFoundError error:
Fatal Exception: java.lang.NoClassDefFoundError: Failed resolution of: Landroid/support/v7/...
Fatal Exception: java.lang.NoClassDefFoundError: Failed resolution of: Landroid/support/v4/...
If you experience this issue, please use the following configuration in the project root gradle.properties file.
android.useAndroidX=true
android.enableJetifier=true
For more information, see the Navigation SDK sample app on GitHub.
6.0.0
Change
Updated the default colors for maps to match the new colors that are already available in the Google Maps app. For more information, see New map style for Google Maps Platform .
6.0.0
Feature
Updated the handling of quotas for destination requests to ensure quota tracking persists when an app is restarted.
6.0.0
Fixed
Fixed issues that could affect GPS accuracy and cause GPS error messages to appear during navigation.
August 08, 2024
5.4.1
Fixed
Fixed an issue that caused an "application not responding" error when using R8 full mode .
5.4.1
Fixed
Fixed a bug that prevented the Navigation SDK from executing native Java methods when the application was built on certain JDK versions.
August 06, 2024
5.5.0
Feature
Added the ability for developers to set the map color scheme to dark, light, or to use the system settings.
For more information and examples, see Configure a map .
5.5.0
Feature
Updated the behavior of headers for the turn and ETA navigation cards that appear during turn-by-turn guidance. The headers now extend to only half of the screen width in landscape orientation in order to make more of the map visible.
5.5.0
Announcement
Updated the Terms and Conditions dialogue to show new text that covers new features being added to the product.
5.5.0
Fixed
Fixed an issue that caused an "application not responding" error when using R8 full mode .
5.5.0
Issue
An issue related to the use of earlier versions of desugaring libraries may cause some apps that implement the Navigation SDK to crash with the following NoSuchMethod error at runtime:
No virtual method toSeconds()J in class Ljava/time/Duration; or its super classes (declaration of 'java.time.Duration' appears in ...)
If you experience this issue, update your app to use com.android.tools:desugar_jdk_libs_nio:2.0.3 for desugaring. You may also need to upgrade to Gradle 8.4 and the Android Gradle plugin version 8.3.0. For more information, see Set up your Android Studio project or the Navigation SDK sample app on GitHub.
June 18, 2024
5.4.0
Feature
Added additional triggers for RouteChangedListener after a route is generated, after the driver selects an alternative route (before starting navigation), and after a route is cleared.
5.4.0
Feature
Made improvements to rendering performance during guidance.
5.4.0
Change
Fixed an issue that would throw TransactionException errors stating a project was not allowed to use the setTransactionIds() API.
5.4.0
Change
Fixed an issue that would throw a TransactionException when calling Navigator.setTransactionIds() if Project Properties were not yet available.
5.4.0
Change
Fixed an issue that would throw a NullPointerException when calling NavigationTransactionRecorder.getTransactionRecorder() if Project Properties were not yet available.
May 30, 2024
5.3.2
Fixed
Fixed an issue that would throw a SecurityException and cause the app to crash on devices running Android 14. This issue would occur if the app attempted to start a foreground service for guidance notifications without obtaining the users permission for background location access. For more information, see Background location usage .
5.3.2
Fixed
Fixed an issue that caused a NullPointerException when using R8 full mode .
May 03, 2024
4.3.0
Feature
Traffic lights and stop sign icons along the route are now supported in JP, GB, and DE, in addition to BE, CA, ES, FR, IT, NL, SE, US. This change is available in SDK versions 4.3.0 and higher. For more information, see Traffic lights or stop sign icons .
April 30, 2024
5.3.1
Fixed
Fixed an issue where apps using targetSDK 34 would throw a SecurityException. For more information about declaring new permission to use foreground service types in Android, see https://developer.android.com/about/versions/14/changes/fgs-types-required#permission-for-fgs-type .
5.3.1
Fixed
Fixed an issue where users of the Android Gradle Plugin < 7.3.0 would experience bugs associated with JDK-8272564, such as NPE, java.lang.ExceptionInInitializerError, and java.lang.IncompatibleClassChangeError.
April 26, 2024
5.2.4
Fixed
Fixed an issue where users of Android Gradle Plugin < 7.3.0 would experience bugs associated with JDK-8272564, such as NPE, java.lang.ExceptionInInitializerError, and java.lang.IncompatibleClassChangeError.
5.2.4
Fixed
Fixed a bug that caused NullPointerException errors to be thrown arbitrarily within apps using the Navigation SDK.
5.2.4
Fixed
Fixed an issue where apps using targetSDK 34 would throw a SecurityException. For more information about declaring new permission to use foreground service types in Android, see https://developer.android.com/about/versions/14/changes/fgs-types-required#permission-for-fgs-type.
April 04, 2024
5.3.0
Fixed
Added an example of how to work around an Android 12 PermissionUsageHelper leak in the demo app.
5.3.0
Change
The terms and conditions dialog no longer has a decline button. Drivers must acknowledge the terms and conditions from the dialog in order to continue using navigation.
5.3.0
Fixed
Fixed a demo app memory leak by using attach/detach in place of replace for swapping fragments.
5.3.0
Change
Reduced initialization latency of the Navigation SDK.
5.3.0
Fixed
Fixed a bug that caused NullPointerException errors to be thrown arbitrarily within apps using the Navigation SDK.
5.3.0
Fixed
Fixed memory leaks that occurred after guidance has started.
March 19, 2024
5.2.3
Announcement
The Navigation SDK for Android version 5.2.3 is now available. For information about this release and for all previous releases, subscribe to the Release Notes XML feed .
5.2.3
Fixed
Fixed an issue that caused flickering of the route in the MapView while following the users location.
5.2.3
Fixed
Fixed an issue where overview mode would not zoom in close enough to the route when the destination and origin were in close proximity to each other. This issue would only occur after navigation had started.
5.2.3
Fixed
Fixed an issue that caused flickering of the selected route when starting and stopping navigation.
5.2.3
Fixed
Fixed an IllegalArgumentException crash caused by marker updates while sorting the markers.
5.2.3
Fixed
Fixed an issue where the GoogleMap class could potentially leak NavigationView .
5.2.3
Fixed
Reduced latency when switching from navigation to overview mode.
5.2.3
Fixed
Fixed an issue where NavigationView#onCreate would recreate expensive components and potentially trigger an out-of-memory error.
February 22, 2024
5.2.2
Announcement
The Navigation SDK for Android version 5.2.2 is now available. For information about this release and for all previous releases, subscribe to the Release Notes XML feed .
5.2.2
Fixed
Previously, the re-center button did not respond to interaction after the user reached the destination. Now the re-center button responds to input after arrival.
February 06, 2024
5.2.1
Announcement
Release 5.2.1
The Navigation SDK for Android version 5.2.1 is now available. See also the retroactive release note update to the Navigation SDK version 5.2.0.
5.2.1
Change
Updated the dependency on org.chromium.net:cronet-fallback to 119.6045.31 in order to resolve the NoSuchMethodError crash.
January 22, 2024
5.2.0
Fixed
Fixed an issue that causes map freezing and recenter button to disappear in some situations.
5.2.0
Announcement
The Navigation SDK for Android 5.2.0 was released on January 22, 2024. This is a retroactive release note update.
5.2.0
Fixed
Fixed a few potential sources of memory leaks.
5.2.0
Fixed
Fixed some issues that resulted in ANR errors when SupportMapFragment is destroyed.
5.2.0
Fixed
Fixed a potential java.lang.IncompatibleClassChangeError that can occur in some cases.
5.2.0
Issue
Apps that depend on any of the following libraries can experience a NoSuchMethodError crash at runtime:
com.google.android.gms:play-services-cronet
com.github.bumptech.glide:cronet-integration
Driver SDK
To resolve the crash, upgrade to the Navigation SDK 5.2.1. Alternatively, add the following dependency to the module-level build.gradle:
dependencies {
...
implementation ' org . chromium . net : cronet - fallback : 119.6045.31 '
...
}
January 10, 2024
5.1.2
Fixed
Fixed IllegalStateException in MediaRouter. This exception happened after getting a MediaRouter instance after stopping navigation.
November 16, 2023
5.1.1
Fixed
Fixed IllegalStateException in MediaRouter caused by getting an instance of MediaRouter from a non-main thread.
November 02, 2023
5.1.0
Change
Implemented an improvement around the location listeners to reduce the amount of stale location updates generated.
5.1.0
Announcement
Apps that use Proguard or Dexguard must migrate to R8. See https://developer.android.com/build/shrink-code for more information.
5.1.0
Fixed
Fixed an app crash on Android versions 13 and 14 after the end user taps the navigation button and accepts the terms of service.
5.1.0
Change
Usage of the Android Foreground Service APIs have been updated internally to address known crashes with the NavigationService caused by Android foreground service restrictions.
5.1.0
Breaking
Versions of Navigation SDK for Android released beginning the fourth quarter of 2023 now require a minimum of 1.9.0 for Kotlin dependency. Earlier SDK versions continue to support Kotlin 1.6.0 and higher.
To control when you raise the Kotlin dependency version for new app versions, specify a Kotlin version of the Navigation SDK for Android in your application's build dependencies.
If you are bumping from Kotlin version 1.6/1.7 to 1.9:
Follow the migration guide if your app uses Kotlin synthetics
Ensure the Gradle/Android Gradle plugin versions are in the range defined by Kotlin Gradle plugin version 1.9.0
5.1.0
Feature
You can now disable guidance notifications and shut down the app and background services when the user dismisses/swipes away the app from Android's recent tasks.
5.1.0
Fixed
Fixed a crash related to camera animation when the zoom value was not calculated properly.
5.1.0
Deprecated
Advanced marker method deprecated.
AdvancedMarker addMarker(AdvancedMarkerOptions)
5.1.0
Change
Added logic to handle android android.app.ForegroundServiceStartNotAllowedException crash that happened due to the foreground service restrictions on Android S.
October 20, 2023
4.99.2
Fixed
Fixed getting stale location with updated time stamp.
September 22, 2023
5.0.0
Announcement
Due to downstream dependencies affected by a Kotlin version upgrade, the adoption of future version v5.1.0 will require some migration effort if your project uses Kotlin.
We recommend you upgrade to Kotlin v1.9.0+ as soon as possible to minimize friction of adopting future features or bug fixes in the Navigation SDK for Android. If you build your application using Kotlin, update to Kotlin version 1.9.0 in your project-level build.gradle file (both Kotlin stdlib and Kotlin Gradle Plugin).
Review our resources for upgrading Kotlin language versions:
If you are migrating from Kotlin 1.6 or 1.7, follow the migration guide if your app uses Kotlin synthetics
Use the compatibility guide for Kotlin 1.9 to understand differences between 1.8 and 1.9
Ensure the Gradle/Android Gradle plugin versions are in the range defined by Kotlin Gradle plugin version 1.9.0
September 21, 2023
4.99.1 & 5.0.1
Announcement
Releases 4.99.1 and 5.0.1
The Navigation SDK for Android release for versions 4.99.1 and 5.0.1 is now available. For information about this release, and for all previous releases, see the Release notes or subscribe to the release notes XML feed .
If you are a new user, see Set up your project to get started.
4.99.1 & 5.0.1
Fixed
Fixed an issue of out-of-memory crashes when renderer is paused, but labeling
continues. Labeling now pauses when renderer is paused.
4.99.1 & 5.0.1
Fixed
Fixed an issue where the app stops responding when
NavigationApi#areTermsAccepted accepted is called.
4.99.1 & 5.0.1
Fixed
Fixed ANR triggered during android.app.ActivityThread.acquireProvider .
4.99.1 & 5.0.1
Fixed
Fixed an issue where the app stops responding after a user taps on direction
options multiple times.
4.99.1 & 5.0.1
Fixed
Fixed an issue where the traveled portion of the route polyline does not gray
out as traversed.
4.99.1 & 5.0.1
Fixed
Removed a legacy startup operation that is no longer necessary in N+ Android
that could cause an ANR in rare cases.
4.99.1 & 5.0.1
Fixed
Fixed an edge case nullPointerException when onConfiguration is triggered
in NavigationView .
July 07, 2023
5.0.0
Announcement
Release 5.0.0
The Navigation SDK for Android version 5.0.0 is now available.
For information about this release, and for all previous releases, see the Release Notes page or subscribe to the Release Notes XML feed .
If you are a new user, see Set up your project to start using the SDK.
5.0.0
Breaking
The minSdk for the NavSDK is now api level 23.
5.0.0
Breaking
Removes NavigationView#setSpeedAlertOptions and
SupportNavigationFragment#setSpeedAlertOptions . Use
Navigator#setSpeedAlertOptions instead .
5.0.0
Breaking
Removes Navigator#setDestinations(List<Waypoint> destinations, String routeToken)
and
Navigator#setDestinations(List<Waypoint> destinations, String routeToken, DisplayOptions
displayOptions) .
Use Navigator#setDestinations(List<Waypoint> destinations,
CustomRoutesOptions customRoutesOptions) , and
Navigator#setDestinations(List<Waypoint> destinations, CustomRoutesOptions customRoutesOptions,
DisplayOptions displayOptions)
instead, respectively.
5.0.0
Breaking
The targetSdk is now API level 33. This will be a requirement for all apps
that deploy to Google play as of August 2023. See
https://developer.android.com/google/play/requirements/target-sdk .
5.0.0
Breaking
Removes NavigationView#setLocationMarkerEnabled and
SupportNavigationFragment#setLocationMarkerEnabled . Use
GoogleMap#setMyLocationEnabled instead.
5.0.0
Breaking
Removes the NavigationMapStyle class.
5.0.0
Breaking
Due to the change in
privacy requirements
apps displaying the notification drawer in Android 13, the
Navigation SDK mobile notifications
will no longer work unless customers request the runtime permission in their
apps.
5.0.0
Deprecated
All ExternalCache methods and classes are deprecated and will be removed in
NavSDK v6. These include the following methods on
GoogleMap
model class.
GoogleMap#setExternalCache
GoogleMap#setNetworkEnabled
GoogleMap#isNetworkEnabled
And the following model classes:
ExternalCache
ResourceDescriptor
TileDescriptor
5.0.0
Breaking
The NavSDK AAR bundle will no longer be directly distributed. Customers must
update their build dependencies to use the GMaven repository instead. See
https://developers.google.com/maps/documentation/navigation/android-sdk/set-up-project .
5.0.0
Change
Apps that use the Navigation SDK must now enable Java 8 library support. See
https://developer.android.com/studio/write/java8-support
for instructions to update.
July 06, 2023
4.99.0
Announcement
Release 4.99.0
The Navigation SDK for Android version 4.99.0 is now available.
For information about this release, and for all previous releases, see the Release Notes page or subscribe to the Release Notes XML feed .
If you are a new user, see Set up your project to start the installation process.
4.99.0
Feature
UiSettings#isMyLocationButtonEnabled() MapsSDK method now available in the NavSDK.
4.99.0
Feature
Update maneuver and lane icons to the latest Material design.
4.99.0
Feature
The following methods have been ported to Navigation SDK from Maps SDK:
GoogleMapOptions#backgroundColor and GoogleMapOptions#getBackgroundColor .
These make it possible to set the background color while map tiles are loading.
4.99.0
Change
NavSDK now requires androidx.appcompat:appcompat:1.6.X+ . This library also
requires a compileSDK of 33+.
4.99.0
Change
All public apis from the Maps SDK are now available in the NavSDK. Not all of
these apis are applicable to the NavSDK and these differences are documented at
http://developers.google.com/maps/documentation/navigation/android-sdk/reference .
4.99.0
Fixed
Fixed a potential ClassCastException when executing
GoogleMap#addPolygon() .
4.99.0
Fixed
FIxes a potential java.lang.SecurityException :
Permission Denial: opening provider
com.google.android.gsf.gservices.GservicesProvider
from {...} requires
com.google.android.providers.gsf.permission.READ_GSERVICES
or
com.google.android.providers.gsf.permission.WRITE_GSERVICES
4.99.0
Fixed
Fixes a crash seen in the native library libgmm-jni.so .
4.99.0
Fixed
Fixed some null-pointer exceptions by adding null-checks for listeners at callback time.
4.99.0
Fixed
Fixed a potential ConcurrentModificationException when executing
GoogleMap#clear().
4.99.0
Fixed
Fixed timing edge cases with the terms of service controller.
4.99.0
Fixed
Fixed issue where map would no longer zoom out when repeatedly zooming out with two fingers.
4.99.0
Fixed
Fixed issue where
ArrivalListener#onArrival(ArrivalEvent event) event was not triggered in certain scenarios.
April 06, 2023
4.5.0
Change
Navigation SDK for Android is now available in a public Maven repository. See Set up your project in the SDK documentation to learn more.
4.5.0
Change
If your project must show the Terms and Conditions dialog, getNavigatorNoToS has no functionality.
4.5.0
Fixed
267285618 : Reduce file system reads when initializing Navigator.
4.5.0
Fixed
Refactored map tile loading and caching for memory improvements.
March 07, 2023
4.4.1
Fixed
260918253 : Resolved an issue related to setMyLocationEnabled and failing to get user location immediately after granting access.
4.4.1
Fixed
265111259 : Resolved an ANR issue that can be triggered when checking the user's acceptance of terms and conditions.
4.4.1
Fixed
260300835 : Resolved IndexOutOfBoundsException crashes related to previewing alternate routes.
4.4.1
Fixed
265137693 : Resolved an ANR related to blocked I/O operation.
4.4.1
Fixed
269564057 : Resolved NullPointerException when user clicks the directions button in the toolbar when no marker is selected.
4.4.1
Fixed
269761562, 265356198, 269484016 : Fixes some memory leaks.
February 28, 2023
4.3.3
Fixed
269761562, 265356198, 269484016 : Fixes some memory leaks.
January 18, 2023
4.4.0
Change
260300835 : Prevents the IndexOutOfBoundsException issue related to previewing alternate routes.
4.4.0
Fixed
245127201 : The distant view of the map no longer disappears during full tilt.
4.4.0
Change
Replaces the Google Navigation SDK sample app, originally in Java, with a Kotlin version. The Kotlin version of the sample app has the same features and functionalities as the Java version. The Java version is no longer supported.
4.4.0
Fixed
260676765 : This fix prevents ANRs that can happen during main-thread initialization I/O errors.
4.4.0
Feature
Support Android Auto so that developers can enable their app to provide a driver-optimized navigation experience with Android Auto .
4.4.0
Change
Tapping on the Trip Progress Bar no longer changes the camera to birds eye view/overview mode.
December 12, 2022
4.3.2
Change
260565043 : Mitigates ANRs related to fetching parameters from server at startup.
4.3.2
Change
203940646 : Relaxes constraints on GoogleMap.setPadding to reduce crashes due to insufficient view height or width.
4.3.2
Change
247717885 : Adds precondition checks for invalid NaN in camera zoom parameter.
4.3.2
Fixed
259569583 : Mitigates ANR and deadlock during audio guidance playback by improving internal core synchronization.
4.3.2
Fixed
193137126 : Fixes day/night rendering across antimeridian.
November 02, 2022
4.3.1
Fixed
245357703 : Fixes an issue that results in OutOfMemoryError and ANR.
4.3.1
Change
Enables the Map Toolbar related methods UiSettings#isMapToolbarEnabled() , UiSettings#setMapToolbarEnabled(boolean) , GoogleMapOptions#mapToolbarEnabled(boolean) , GoogleMapOptions#getMapToolbarEnabled() .
4.3.1
Fixed
247461649 : Fixes a NullPointerException issue.
October 25, 2022
4.3.0
Feature
Allow developers to show traffic lights and stop signs during navigation.
4.3.0
Change
Adds UI improvements to the trip progress bar .
4.3.0
Feature
Introduces previewing alternate routes before starting navigation, and selecting the number of alternate routes shown using alternateRoutesStrategy .
4.3.0
Deprecated
Deprecates the NavigationMapStyle API and the DEFAULT and HIGH_DETAIL constants. These constants enabled you to switch your app's default map view from a simple base map style to a detailed map style showing extra detailed tiles, including 2D building outlines on zoom level 18+ and 2D building numbers on zoom level 19+. Due to changes in the default base map for Android, these details are now enabled by default, so this constant is no longer necessary.
4.3.0
Fixed
254523699 : Fixes an issue that results in memory leak.
4.3.0
Fixed
253307316 : Fixes an issue that impacts memory usage and garbage collection.
4.3.0
Change
The Terms of Service dialogue shows a new text.
Announcement: Freezing support for Android 5 (July 21, 2022)
For our latest SDK version (v4.1.2 and the later versions in v4.x), we are
providing an additional year of support for apps running on Android 5, for both
API levels 21 and 22.
What this means:
Navigation SDK and Driver SDK running on your Android apps will support a
minimum Android 5 (API level 21) until June 30, 2023.
After June 30, 2023, we will support only Android API levels 23 and above.
In other words, we will stop supporting Android API levels 21 and 22 across
all SDK versions after that date. This means that bugs related to Android 21
or 22 in any SDK version (including 4.x) will not be fixed, and we do not
guarantee that the SDKs will behave correctly.
This notice overrides the Android 21 and 22 support freezing notice from June
21, 2021, and the Android 23, 24, and 25 support freezing from October 18, 2021.
Version 4.2.2 (September 8, 2022)
Stability and Bug Fixes
Fixes a gRPC crash where io.grpc.util.SecretRoundRobinLoadBalancerProvider$Provider
cannot be instantiated. The error frequently surfaced for apps depending on
com.google.firebase:firebase-firestore alongside Navigation SDK for Android.
Version 4.2.1 (August 17, 2022)
Stability and Bug Fixes
Fixes a null pointer issue when processing deferred map click events.
Fixes a null pointer issue in GoogleMap.setMyLocationEnabled .
Version 4.2.0 (July 01, 2022)
API changes
Provides the ability to expose the trip to ferry segments.
Stability and Bug Fixes
Fixes a memory leak in Marker.setIcon .
Fixes issue where GoogleMap.setPadding was not working.
Updates all dependencies.
Version 4.1.4 (June 23, 2022)
Bug Fixes
Some customers experienced a NoSuchFieldError for style
mod_text_appearance_headline7 on confirmation popups. This patch replaces
the missing style and eliminates references to the missing style in the
Navigation SDK artifacts.
Version 4.1.3 (May 25, 2022)
Bug Fixes
Fixes padding for the Google logo, compass, and the camera. Previously, these were not respecting the padding set by GoogleMap.setPadding() .
Version 4.1.2 (May 20, 2022)
API changes
Downgrades the minimum Android API level for the Navigation SDK to 21.
Version 4.1.1 (March 29, 2022)
Bug Fixes
Some clients received a Terms of Service dialog error when the Android Activity was destroyed. Now clients will not longer experience this dialog error when an activity is destroyed.
Fixes a broken hyperlink in the Terms of Service dialog.
Previously, the progress bar was only visible in portrait mode. It is now visible in landscape mode as well..
The progress bar remains visible throughout navigation - even when camera is not in follow mode, and user is interacting with the map.
Version 4.1 (March 2, 2022)
API Changes
Introduces the setTripProgressBarEnabled method on
SupportNavigationFragment .
Previously, this method was only available on the NavigationView .
See Trip Progress Bar for more information.
Introduces the StreetView APIs into the Navigation SDK. The primary
entry-points are the SupportStreetViewPanoramaFragment ,
StreetViewPanoramaFragment
and StreetViewPanoramaView ,
just as they are in Google Maps SDK for Android. To get started using
StreetView within the Navigation SDK, view the
corresponding documentation .
Then see the "GoogleMap Demo"
to understand how the APIs are integrated in the sample app.
Introduces the setNavigationUiEnabled method on NavigationView
and SupportNavigationFragment .
These methods allow you to switch between a "map-focused" and
"navigation-focused" user-experience in your UI. These methods may take effect
asynchronously; e.g. if the Navigator
has not been created yet, the requested setting will not be honored right
away. We recommend registering the OnNavigationUiChangedListener
to be informed when the requested setting for setNavigationUiEnabled has
been honored by the UI.
Deprecates the setLocationMarkerEnabled API on NavigationView
and SupportNavigationFragment
in favor of a newly-added method, GoogleMap.setMyLocationEnabled .
You can also register the GoogleMap.OnMyLocationClickListener
to react to click events on the location marker.
Adds the method GoogleMap.getMyLocation
and the related listener GoogleMap.OnMyLocationChangeListener .
These methods are already deprecated in the Google Maps APIs,
but we supply them for your convenience and to ease the migration from the
Google Maps APIs.
Bug Fixes
Updates the error-handling for the CustomRoutesOptions.Builder
to be more informative when a malformed route token is passed in.
Handles an edge-case from Android framework with respect to the lifecycle of
the navigation service.
Sample App Changes
Starting Navigation SDK v4.1, sample apps for the SDK are now
released independently of the SDK artifact. Both can be found in the shared
Google Drive , but they will no longer be bundled into
the same .zip file.
The existing sample app, now called the "GoogleNavigation Demo" has been
revamped significantly. Now, you can test a number of Navigation APIs at
runtime (instead of having to recompile) with the new customization overlays.
Also, the sample app build variants have been consolidated into one target.
A new sample app, the "GoogleMap Demo", has been added. This sample app
demonstrates many of the behaviors developers are familiar with from the
Google Maps APIs. The primary difference is the presence of a toggle
button that switches the inflated view-variant between the MapView
and the NavigationView ,
where applicable.
For more information, view the Getting Started
page.
Version 4.0.3 (April 1, 2022)
Bug fixes
Fixes a broken hyperlink in the Terms of Service dialog.
Previously, the progress bar was only visible in portrait mode. It is now visible in landscape mode as well.
The progress bar remains visible throughout navigation - even when camera is not in follow mode, and user is interacting with the map.
Version 4.0.2 (February 25, 2022)
Bug fixes
Some clients received a Terms of Service dialog error when the activity was
destroyed. The error has been fixed and clients will no longer experience the
error.
Version 4.0.1 (February 15, 2022)
Bug fixes
Some Android clients experienced an "Application Not Responding" (ANR) error
when the app initially loaded due to a network call that blocked the load. Now,
app initialization should proceed without issue.
Version 4.0 (December 14, 2021)
API changes
Bumps the minimum Android API level for the Navigation SDK to 23, and bumps
the target API level to 30. This target version is in-line with the
Google Play requirements .
Adds the MapView ,
MapFragment and
SupportMapFragment classes. Customers may
find these classes useful in helping to transition off of the Maps SDK when
migrating from v1 to v4.
Adds an API that enables a Trip Progress Bar .
It displays a progress bar that lets drivers see the upcoming traffic along their
route.
Note: The Trip Progress Bar is visible only in portrait mode.
Updates the sample app
to pull the Navigation SDK for Android artifact using the Maven artifact
repository where it is housed. Previously, the sample app was built against the
local .aar artifact.
Renders the polyline that trails the navigation chevron in the color "gray" to
indicate that the user has already driven through that section of the route.
Stability and bug fixes
Fixes a ConcurrentModificationException that arises from certain usage
patterns of the arrival listener.
Version 3.2.1 (December 16, 2021)
Stability and bug fixes
Fixes a crash that happens when navigation starts on Android API Level < 21.
Fixes a ConcurrentModificationException that arises from certain usage
patterns of the arrival listener.
Announcement (October 18, 2021)
Freezing support for API Level 23, 24 and 25
Caution: This announcement has been revoked. Please see an updated announcement on
July 21, 2022 .
Read revoked announcement
In response to changes in our internal dependencies, Android API Level 23,
24, and 25 (Android 6, 7.0 and 7.1) will not be supported in new versions of the
Navigation and Driver SDKs for Android, beginning in the third
quarter of 2022.
Navigation and Driver SDKs for Android versions released beginning in the third
quarter of 2022 will only support devices running a minimum of
Android API Level 26.
App versions built with v3.x or lower of the Navigation and Driver SDKs for
Android will continue to work on devices running Android API Level 25 and below.
Version 3.2 (October 07, 2021)
API changes
Expose zoom control and indoor APIs from maps SDK.
Update attribute in GoogleMapOptions to specify the background color for the view which can be specified in the Android Manifest XML file for an Android app or programmatically during initialization.
Stability and bug fixes
Fixes a potential memory leak issue.
Fixes a bug that was producing ANR issues.
Prevents a crash originated by the Terms of Service dialog.
Deprecations
Deprecates Navigator#setDestinations with route token in favor of a new API that uses the new CustomRoutesOptions class.
** New Features **
Adds 2-Wheeler support for Custom Routes.
Version 3.1.3 (September 27, 2021)
Stability and bug fixes
The Navigation SDK for Android UI now automatically surfaces visual cues,
like a greyed out location-marker and a “Searching for GPS” callout. This
visual change occurs when the last-valid location becomes somewhat stale, and
will automatically revert when the SDK receives new valid location updates.
Version 3.1.2 (September 17, 2021)
API changes
EXPERIMENTAL : Added a new API, GpsAvailabilityEnhancedLocationListener ,
that allows developers to listen to transitions in the GPS availability on the
device.
This API is experimental, which means it is subject to removal or breaking
changes in future releases. Please exercise discretion before adoption.
Version 3.1.1 (July 26, 2021)
Stability and bug fixes
Fixes an IllegalStateException associated with an overly restrictive
preconditions check in implementation code.
Fixes a NullPointerException when panning to a screen location that cannot
be translated into a geographic location.
Version 3.1.0 (June 23, 2021)
API changes
Speeding listeners are now supported in headless navigation. This makes it
possible to monitor speeding without first rendering a View or a Fragment
from the Navigation SDK.
Deprecations
The following methods have been deprecated in favor of Navigator.setSpeedAlertOptions() :
NavigationView.setSpeedAlertOptions()
SupportNavigationFragment.setSpeedAlertOptions()
Stability and bug fixes
Fixed a crash in followMyLocation() .
Fixed "Metadata key must not be null" NullPointerException .
Version 3.0.2 (July 26, 2021)
Stability and bug fixes
Fixes an IllegalStateException associated with an overly restrictive
preconditions check in implementation code.
Fixes a NullPointerException when panning to a screen location that cannot
be translated into a geographic location.
Deprecation announcement (June 21, 2021)
This announcement describes deprecations to the Navigation SDK for Android
and Driver SDK for Android as of the date listed above.
This announcement was also sent out as a Mandatory Service Announcement (MSA)
to affected customers.
Navigation SDK for Android and Driver SDK for Android v1.x deprecation
Nav/Driver SDK v1 was released in 2018, and with our v3 versions soon to be
released, it’s time to deprecate v1 to avoid the unsustainability of
supporting many major versions.
The time saved by not having to support this additional version will allow
us to better support the latest major version and build more features that
are important to our customers.
Thus, Nav/Driver SDK v1.x is now deprecated and will no longer be maintained
after June 21, 2022.
Please take a moment to see
how deprecations in SDK versions work .
Navigation and Driver SDK Android 21 and 22 end of support
Caution: This announcement has been revoked. Please see an updated announcement on
July 21, 2022 .
Read revoked announcement
The upcoming v4.0 of Navigation SDK for Android and
Driver SDK for Android will support a minimum
[Android 6.0 (API level 23)](https://developer.android.com/studio/releases/platforms#6.0){: .external}.
The current minimum supported version is Android 5.0 (API level 21).
We forecast releasing v4.0 in Q4 2021. This means:
App versions built with versions earlier than v4.x will continue to work on
Android 21 and 22 devices. Your driver apps that have integrated our
current SDKs will continue to work on devices running Android 21+.
This is the same as before.
App versions built with Driver SDK for Android and
Navigation SDK for Android v4.x (targeted for
Q4 2021, subject to change) and after won’t be able to be installed on
devices running Android 21 and 22. v4.x will run on minimum Android 6.0 (API level 23),
so versions of your app built with the forthcoming v4.x can only be
received by drivers with devices that have Android 23+. To reiterate,
this means that both our SDK-related changes and any app changes you’ve
made won’t reach drivers with devices running Android 21 and 22.
The versions of Navigation SDK for Android v3 and
Driver SDK for Android v3 that you will want to upgrade to
are explained in the following table along with when they’ll be available.
Which Driver platform features do you use?
Do you use these capabilities ?
Then the first versions available that you should upgrade to are...
Expected Availability (subject to change)
Migration Links
Navigation only (NavSDK methods)
No
NavSDK v3.0.1
Now
Guide
Yes
NavSDK v3.5 (projected)
Sep 2021
Navigation and Fleet Engine Tracking (NavSDK and DriverSDK methods)
No
Nav SDK v3.0 and Driver SDK v3.0
Driver v3.0 migration guide available at release
Yes
NavSDK v3.x and DriverSDK v3.0
To continue using the removed methods, you may stay on v1.x, but without
expectation of support or maintenance after June 21, 2022 (see next section).
We recommend you migrate to v3.x. This means:
The last release of v1.x will occur on Q4 2021 (and thus v1 is
“feature frozen” from then).
This last release can be patched for 6 months thereafter, until June 21, 2022.
After this time, we will not be able to respond to bug or feature requests
for v1.x.
Please take a moment to review the following table and the
[migration guide](/maps/documentation/navigation/android-sdk/migration) in
order to help you navigate these changes.
What can I do by when?
If you're currently on...
Do you use these capabilities ?
To upgrade now
To upgrade in Sep 2021
Migration Links
v1.x ( not using FleetEngine.java / Driver functionality)
No
NavSDK v3.0
Guide
Yes
No option
NavSDK 3.x
v1.x (using FleetEngine.java / Driver functionality)
No
No option
NavSDK 3.x + DriverSDK 3.x
The guide above, plus the Driver v3.0 migration guide available at release
Yes
We’d recommend that you notify your drivers with devices on Android 21 and 22
to upgrade to a newer version of Android (minimum Android 6.0) before you
integrate Driver SDK for Android and Navigation SDK for Android
version v4.x and above into your driver app.
Version 3.0.1 (May 20, 2021)
Stability and bug fixes
Fixed a crash in followMyLocation() .
Fixed "Metadata key must not be null" NullPointerException .
Version 3.0 (May 10, 2021)
The Driver SDK for Android has been decoupled from the
Navigation SDK for Android, and the two SDKs will be delivered as separate
binaries on separate maintenance schedules. This change was done to make
Driver SDK updates easier to test and integrate for
customers. More details and guidance:
Navigation SDK usage is the same for version 2.x and version 3.0.
FleetEngine.java is in the Driver SDK AAR.
Driver SDK users should pick up
Driver SDK version 3.0 from Maven
( when available )
and specify the 3.x version of Navigation SDK they wish to use.
New features
The TurnByTurn SDK lets you provide small-screen users,
such as two-wheeled vehicle riders,
with navigation information and visual cues such as upcoming maneuvers
with icons (left, right, U-turn), turn numbers in roundabouts, road names,
estimated distance and time to the next navigation step or final destination,
and navigation state (en route, rerouting, stopped).
A new attribute has been added to
GoogleMapOptions
to specify the background color for the view, which you can specify in the
Android Manifest XML file for an Android app or programmatically during
initialization.
Stability and bug fixes
Fixed a camera bug where the recenter button appeared after moving the
app to the background.
Decommissions
The following methods, which were marked deprecated in version 2.x, have been
removed:
Navigator#startGuidance(resumeIntent)
NavigationApi#initForegroundServiceManager(*)
Waypoint#fromLatLng(*)
Waypoint#fromPlaceId(*)
Version 2.7.2 (July 14, 2021)
Stability and bug fixes
Fixes an IllegalStateException associated with an overly restrictive
preconditions check in implementation code.
Fixes a NullPointerException when panning to a screen location that cannot
be translated into a geographic location.
Adjusts some internal memory management in the Navigation SDK.
Version 2.7.1 (May 19, 2021)
Stability and bug fixes
Fixed a crash in followMyLocation() .
Fixed "Metadata key must not be null" NullPointerException .
Version 2.7 (April 5, 2021)
New features
Added the FollowMyLocationOptions class, which allows you to set the zoom
level during navigation. Added a
followMyLocation
method overload that takes a FollowMyLocationOptions object as a parameter.
Added the setNavigationMapStyle method, which allows you to enable the
high detail navigation map style. The high definition navigation map style
displays 2D building outlines at zoom level 19 or higher.
Stability and bug fixes
Fixed an issue that caused the camera's recenter button to appear after an app
runs in the background.
Version 2.6 (March 15, 2021)
Added a new mandatory dependency. Add the following dependencies to your
Gradle dependency lists to avoid runtime crashes:
api 'joda-time:joda-time:2.9.9' .
New features
Updated the demo app to have a variant that stresses navigation behaviors
through SupportNavigationFragment .
Updated the demo app to showcase some additional location-following behaviors.
Stability and bug fixes
Fixed an issue where 'follow my location' mode was not canceled upon camera
movement.
Fixed an issue where the camera stops following the user's location after the
caller stops turn-by-turn guidance.
Fixed an issue where consumers of the Navigation SDK using Joda-Time run into
conflicts with the obfuscated version of jodatime which was packaged into our
library.
Fixed an issue in which the Navigation SDK accidentally hides consumer-app
notifications it does not own upon launching a navigation session.
Driver SDK
The Fleet Engine createInstance method now requires the caller to pass in a Navigator instance.
This is a breaking change, and your app will fail to compile unless you update
all relevant invocation sites in your code.
Adds methods to Navigator to register and remove listeners for updates to
traffic data.
Version 2.5.2 (March 29, 2021)
Fixed an issue where the camera stops following the user's location after the
caller stops turn-by-turn guidance.
Version 2.5.1 (January 29, 2021)
Fixed an issue where 'follow my location' mode was not canceled upon camera
movement.
Version 2.5 (December 15, 2020)
API changes
Added two new methods to the Navigator API to allow setting and removing
listeners for new navigation sessions.
Added a new method to the Navigator API to obtain transaction IDs for the
ongoing navigation session. This API should be used when a new navigation
session starts and when the transaction IDs change in an ongoing navigation
session (e.g. when the list of journey segments is updated).
Version 2.4.1 (January 29, 2021)
Fixed an issue where 'follow my location' mode was not canceled upon camera
movement.
Version 2.4 (November 5, 2020)
Added the Navigator.ReroutingListener
class. Register the ReroutingListener on the Navigator instance by calling
addReroutingListener ; use removeReroutingListener to unregister.
Modified the FleetEngine.createInstance class constructor, added wrappers for AuthTokenFactory
and StatusListener .
Fixed a race condition that could cause a crash under the right conditions.
Version 2.3.1 (January 26, 2021)
Fixed an issue where 'follow my location' mode was not canceled upon camera
movement.
Version 2.3 (September 18, 2020)
You can now pass a route token to NavSDK to retrieve the route represented by
that route token. The route token is associated with a route response when you
call the Routes Preferred API. The new API is
Navigator#setDestination(List<Waypoint> destinations, String routeToken) .
Added some new mandatory dependencies. Add the following dependencies to your
Gradle dependency lists to avoid runtime crashes:
api 'com.google.android.datatransport:transport-api:2.2.0'
api 'com.google.android.datatransport:transport-backend-cct:2.2.0'
api 'com.google.android.datatransport:transport-runtime:2.2.0'
Version 2.2 (August 10, 2020)
New features
Repackaged the embedded Google Maps SDK's package name from libraries.maps
to gms.maps . To migrate, take these steps:
Change all references of com.google.android.libraries.maps to com.google.android.gms .
Update your build.gradle to exclude the Google Play Services version of the
Maps SDK for Android. See the build.gradle file in the sample app for an example.
Reintroduced the Waypoint parameter in NavigationTransactionRecorder
pickup and dropoff methods.
Added the Waypoint.Builder.setVehicleStopover
API that enables/disables the automatic relocation of stopovers in the route
when waypoints are set in a place where it is not possible to stop.
Added a parameter SpeedAlertSeverity
to the SpeedAlert callback. Use this parameter with the SpeedingListener .
Stability and bug fixes
Deprecated NavigationApi.cleanUp method due to unwanted side effects like
NullPointerExceptions leading to crashes.
Deprecated Waypoint.fromLatLng() and Waypoint.fromPlaceId() in favor of
Waypoint.builder() .
Deprecated the AddressListener class, contained in the NavigationTransactionRecorder ,
because it is unused.
Version 2.1 (April 9, 2020)
New features
Customizable fonts/colors/icons for the Navigation header.
Support customization of the color of the recommended lane(s) in the
Navigation Header UI.
Updates several APIs to follow the add-remove pattern for setting
callbacks/listeners. Previous set* methods have been marked deprecated and
will be removed in a future release. The deprecated methods are listed here:
SupportNavigationFragment.setOnNightModeChangedListener
SupportNavigationFragment.setOnRecenterButtonClickedListener
NavigationFragment.setOnNightModeChangedListener
NavigationFragment.setOnRecenterButtonClickedListener
NavigationView.setOnNightModeChangedListener
NavigationView.setOnRecenterButtonClickedListener
Navigator.setArrivalListener
Navigator.setRouteChangedListener
Navigator.setRemainingTimeOrDistanceChangedListener
Stability and bug fixes
Bump up the minSdkVersion for navsdk to 19.
Fixed a bug where lat/lng Waypoint names were not honored in case server-side
reverse geocoding fails.
Version 2.0 (October 15, 2019)
New features
Navigation SDK 2.0 incorporates the Maps SDK map renderer and surfaces Maps SDK
APIs. This NavSDK version enables developers to access most of the Maps API
features while navigating such as drawing polygons, overlays and polylines.
Developers can also control the map styling for navigation and have some
additional camera controls. The driver experience improves with this version as
the MapView --> Navigation switch will be instantaneous since the map is shared
across the two modes.
API changes
The following classes have been removed:
com.google.android.libraries.navigation.LatLng
com.google.android.libraries.navigation.LatLngBounds
com.google.android.libraries.navigation.Marker
com.google.android.libraries.navigation.MarkerOptions
They have been replaced by:
com.google.android.gms.maps.model.LatLng
com.google.android.gms.maps.model.LatLngBounds
com.google.android.gms.maps.model.Marker
com.google.android.gms.maps.model.MarkerOptions
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
