---
title: "Background location usage best practices \_|\_ Navigation SDK for Android\
  \ \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/background-location-usage
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/background-location-usage
  title: "Background location usage best practices \_|\_ Navigation SDK for Android\
    \ \_|\_ Google for Developers"
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
Background location usage best practices
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This page outlines best practices for requesting and managing background location permissions in Android apps using the Navigation SDK.
To ensure optimal navigation, request "Allow all the time" location permission to maximize accuracy, especially when the app is in the background.
Properly manage navigation notifications and foreground services to prevent battery drain and potential memory leaks.
Android 14 introduces new location restrictions; the Navigation SDK is updated to mitigate these but requesting background location permission is still recommended.
By following these practices, developers can improve location accuracy and provide a seamless navigation experience for users.
This page explains best practices for requesting and managing background
location usage permissions.
Request "Allow all the time" location permissions
Starting with Android 14 , apps must have the
ACCESS_BACKGROUND_LOCATION permission in order to access the user's location.
The Navigation SDK includes this permission in its manifest file, so you don't
need to explicitly request it (if not needed for other purposes), since the
Gradle manifest merger will ensure it is merged with the app's manifest.
However, having the ACCESS_BACKGROUND_LOCATION permission is not enough to
access location in the background and we recommend that you request "Allow all
the time" location permissions from users. This ensures that the app can run in
the background and show notifications, which maximizes location accuracy during
navigation.
The prompt should explain to users how granting the permission will improve
location accuracy and improve their navigation experience when the app is
running in the background.
For more information on prompting users for location access, see Request
location permissions | Sensors and location | Android
Developers
in the Android developer documentation.
Ensure proper cleanup of navigation notifications
To ensure that your app doesn't keep notifications alive after they're no longer
needed, make sure you perform the following cleanup steps:
After invoking startGuidance() , be sure to invoke either stopGuidance()
or clearDestination() .
After registering ArrivalListener , make sure to unregister it.
After registering RoadSnappedLocationProvider , make sure to unregister it.
Completing these steps ensures that notifications aren't kept alive when they're
no longer needed, which could lead to battery drains and possible memory leaks.
When re-invoking NavigationApi#initForegroundServiceManager methods, invoke NavigationApi#clearForegroundServiceManager first
If your app is using the ForegroundServiceManager , invoke
NavigationApi#clearForegroundServiceManager before invoking
NavigationApi#initForegroundServiceManagerProvider , and if you have already
initialized the ForegroundServiceManager , invoke
NavigationApi#initForegroundServiceManagerMessageAndIntent . You can do this to
update the notification ID or the notification content after you have
initialized the foreground service manager.
About the new restrictions introduced in Android 14
Android 14 (Android U) introduced new
restrictions
on apps accessing the user's location in the background. To help mitigate these
changes, the Navigation SDK was updated in version 5.4.0 to better manage
background location access. We also recommend that you update your
implementation to ensure that your app continues to have access to the most
precise location data.
How changes in Android 14 impact the Navigation SDK
When you invoke
startGuidance()
in your app, the foreground service starts showing user notifications for
turn-by-turn navigation. Turn-by-turn navigation is dependent on being able to
access the user's location in order to update the route and show the correct
visual and audio guidance. Starting in Android 14, accessing the user's precise
location in the background requires permission from the user. By default, if an
app does not have the user's permission for background location access and
attempts to start a foreground service for location updates, the system throws a
SecurityException , causing the app to crash.
How the Navigation SDK mitigates this issue
Starting with version 5.4.0, the Navigation SDK handles this SecurityException
without impacting the app, allowing navigation to continue running in the
background. Additionally, the Navigation SDK includes the
ACCESS_BACKGROUND_LOCATION permission in its AndroidManifest . This way, your
app doesn't need to declare the permission itself, as Gradle merging will handle
it. However, if a notification is not displayed to the user before the app goes
into the background, the Navigation SDK will rely on the system to provide
location updates. These system updates may not be frequent or precise and result
in suboptimal navigation experience. For this reason, we recommend that you also
prompt users for background location access.
What app developers can do to improve location accuracy for navigation
You can improve the accuracy of the location signal used by the Navigation SDK
by updating your app to prompt users for background location access. For more
information, see Request "Allow all the time" location
permissions .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
