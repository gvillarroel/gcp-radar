---
title: "Navigation SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/faq
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/faq
  title: "Navigation SDK for Android \_|\_ Google for Developers"
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
Stay organized with collections
Save and categorize content based on your preferences.
Frequently Asked Questions
Product details
How should the Navigation SDK Terms
of Service notice be shown?
Which languages does voice guidance support?
Is the bearing maintained when the user
exits navigation mode?
Are polylines available when starting
or changing a route?
Do app users need to have Google Maps
mobile installed?
Can the Navigation SDK
identify parking near restaurants and other destinations?
Does the Navigation SDK
show traffic direction in the lanes when approaching a turning point?
Which versions of the JDK does the Navigation SDK
support?
Network and connectivity
How does the
Navigation SDK handle poor network connectivity?
How does the
Navigation SDK handle poor or lost GPS signals?
Is an offline mode available?
Data
Can I retrieve all of the
stops/destinations in a journey before starting the route?
Is turn-by-turn route guidance available
at the start of a route?
How is the Estimated Time of Arrival
(ETA) communicated to the app users?
Can the RoadSnappedLocationProvider be used to obtain the user's
current snapped location if navigation is not in the foreground?
Does the Navigation SDK
support geofencing?
Can I disable notifications when
the Navigation app is in the background?
How do I see the log of transactions kept by Google?
UI Customization
Can I color code the best
route option?
Can the Navigation SDK
show the ETA for the final destination?
How can I hide the ETA updates?
Which UI customizations are
available for the header and footer cards?
Routing
Can I provide a specific route
to a user or remove alternative routes?
Can I show the user a different label
for the destination than the default destination location?
Can I use the Navigation SDK
to track deviations from a defined path?
Can the user exit navigation without
completing the route?
Simulator
Does the simulator support changes to
the route?
Workflows
How do I dismiss the notification after closing an activity that contains a
navigation fragment? (Android only)
Mobility Services
How is using the Navigation SDK different for Mobility Services customers?
How can I tell if I'm a Mobility Services customer?
How is the Navigation SDK billed for Mobility Services customers?
Which Navigation SDK
APIs should only be used by Mobility Services customers?
If I'm a Mobility Services customer, can I also use a non-Mobility Services implementation of the Navigation SDK?
Product details
How should the Navigation SDK Terms of Service notice be shown?
Your app must implement a dialog with the Navigation SDK
Terms of Service notice that each user must accept. This dialog gives the
user the opportunity to agree with the Terms of Service. A text file of the
terms is provided with the Navigation SDK.
Use the NavigationApi.showTermsAndConditionsDialog
method to display the dialog containing the terms.
Which languages does voice guidance support?
Any languages supported by Google Maps Mobile are automatically
available for the Navigation SDK.
A device has a default system language and an app cannot change that setting; however,
the app has access to over 70 languages.
Is the bearing maintained when the user exits navigation mode?
Yes. Once started, the LocationListener continues to
run in the background. Your app continues road snapping the position and maintains
the bearing.
Are polylines available when starting or changing a route?
Yes. When a route is created or changed, the RouteChangeListener
provides polylines.
Do app users need to have Google Maps Mobile installed?
No, the Navigation SDK does not require Google Maps Mobile
to be installed on the device.
Can the Navigation SDK identify parking near restaurants
and other points of interest?
No, the Navigation SDK does not provide this feature at this
time.
Does the Navigation SDK show traffic direction in the lanes
when approaching a turning point?
Yes. The traffic direction is available and displayed by default.
Which versions of the JDK does the Navigation SDK support?
The Navigation SDK supports LTS versions of Java SE that are actively supported by Oracle. These versions are listed as having Premier Support on the Oracle Java SE Support Roadmap .
Network and connectivity
How does the Navigation SDK handle poor network connectivity?
The Navigation SDK pre-caches the route for each journey.
The pre-cached information includes routing information for 15-20 minutes,
and route alternatives in case the user deviates from the route. The
Navigation SDK approximates position using the device GPS and
sensors.
How does the Navigation SDK handle poor or lost GPS signals?
After navigation starts and the Navigation SDK receives a
GPS signal at least once, it will display a "Searching for GPS..." message
in the following situations:
If more than 10 seconds have passed since it last received a GPS signal.
If the routing position has moved more than 500m since it last received a GPS signal.
If the SDK does not receive a GPS signal for an extended period of time, the progress along the route, indicated in the app by the position of the chevron, may slow down until it comes to a complete stop. In this case, the chevron on the map will remain at the location indicated by the last GPS signal. The SDK will not automatically exit navigation mode as a result of not receiving a GPS signal. However, it may not be able to provide guidance until it receives a signal again.
Is an offline mode available?
No, the Navigation SDK does not offer an
offline mode at this time; however, the SDK does provide pre-cached information
for a journey.
Data
Can I retrieve all of the stops/destinations in a journey before starting
the route?
Yes. To retrieve the directions for a route, call
Navigator.getRouteSegments() .
Is turn-by-turn route guidance available at the start of a route?
Yes. The Navigation SDK provides a list of route segments.
In addition, the user can swipe through the directions card in the header
to see each maneuver.
How is ETA communicated to the app users?
Use the following steps to give ETA information to app users:
Retrieve the time and distance for all waypoints using
Navigator.getTimeAndDistanceList() .
Forward this information to the client application as you
do for the driver ETA.
Can the RoadSnappedLocationProvider be used to obtain the user's
current snapped location if navigation is not in the foreground?
Yes. The RoadSnappedLocationProvider runs in the
background by default.
Does the Navigation SDK support geofencing?
No. In the context of navigation, remainingTimeOrdistanceChangeListener
has an advantage over a geofence. The geofence might not account for
road geometry, and might not be centered on the exact point to which the
user is navigating.
You can approximate this feature using
remainingTimeOrdistanceChangeListener .
Set the threshold to determine the frequency of the callbacks.
Check the remaining distance to the destination.
For example, if you set the threshold to 100m,
you receive a callback when the distance to the destination changes
by 100m. As the distance decreases, you can update this threshold to a smaller
value and receive more frequent callbacks. Then, inspect the remaining distance to
determine if you are close enough to the pickup/drop-off location.
Can I disable notifications when the Navigation app is in the background?
Yes. Use Navigator.setHeadsUpNotificationEnabled
to control notifications. This method has a boolean argument. FALSE
disables notifications; TRUE enables notifications.
How do I see the log of transactions kept by Google?
The transaction recorder tracks pickups and dropoffs with a unique ID,
which Google logs for product analytics purposes. If you are a Mobility Services customer, Google
recommends that you implement the
NavigationTransactionRecorder to
log a record of your transactions.
UI Customization
Can I color code the best route option?
No. Color coding a specific route option is not supported at this time.
Can the Navigation SDK show the ETA for the final destination?
Yes. Use the following methods:
Retrieve the time and distance for all waypoints using
Navigator.getTimeAndDistanceList() .
Hide the ETA of the current waypoint using
NavigationFragment.setEtaCardEnabled(false) .
Render the final destination ETA.
How can I hide ETA updates?
You can disable ETA cards by calling navigationView.setEtaCardEnabled(false) .
Which UI customizations are available for the header and footer cards?
Use StylingOptions to set the background
color styling. To hide or show the header and
footer, use the setHeaderEnabled and
setFooterEnabled member functions of
NavigationFragment .
Routing
Can I provide a specific route
to a user or remove alternative routes?
No. By default, multiple routes are provided and the fastest route has priority.
You can affect the default route by adding preferences, such as "avoid
highways and tolls," to your request. Adding waypoints also affects the route.
Can I show the app user a different label for the destination than the default
destination location?
Yes. Create a Marker with a
custom title for the destination and the latitude/longitude. The
Navigation SDK displays the custom title and the coordinates
on the NavigationMap .
Can I use the Navigation SDK to track deviations from a defined path?
Yes. Use Navigator.setRouteChangedListener to
receive notifications when a route changes or a new route is recommended:
Register a listener that checks the device position along the route
using the Navigator.setRouteChangedListener method.
Add code to the callback event handler, onRouteChanged :
Send a message to the app user with updated ETA and distance information.
Track the device's location.
[optional] Add other features required by your app to handle
when the user is off the prescribed route.
Can the user exit navigation without completing the route?
Yes. Call the Navigator.stopGuidance() method to
stop navigation.
Simulator
Does the simulator support route changes?
Yes. Call simulateLocationsAlongNewRoute to
simulate a journey that includes a route change. The simulateLocationsAlongExistingRoute
method ignores changes to the existing route.
Workflows
How do I dismiss the notification after closing an activity that contains a
navigation fragment?
The navigation notification remains visible during navigation,
when the activity is closed. When the vehicle arrives at the
destination, navigation stops, and the notification disappears.
To handle clicks on the notification, use the Navigator.startGuidance(intent resumeIntent) .
The resume intent fires when the app user clicks the notification.
Typically, the Navigator.startguidance(getIntent()) is called from
the main Activity, which recalls the Activity when the app user clicks the notification.
Mobility Services
How is using the Navigation SDK different for Mobility Services customers?
Google Maps Platform Mobility Services offer a collection of APIs and SDKs to help support enterprise needs for transportation and logistics businesses. For Mobility Services customers, the Navigation SDK is typically used in conjunction with related services for route optimization, dispatch, task tracking, fleet analytics, and more. The Navigation SDK is also billed differently for Mobility Services customers. For more information, see the Mobility Services documentation.
Mobility products are currently available only to select customers. Contact your sales representative for more information.
How can I tell if I'm a Mobility Services customer?
If you're not sure if you're currently implementing the Navigation SDK as a Mobility Services customer, look for a ReportBillableEvent call in your code. Only Mobility Services customers should call the ReportBillableEvent method.
How is the Navigation SDK billed for Mobility Services customers?
For Mobility Services customers, billing and pricing for the Navigation SDK depend on the service agreement you have with Google Maps Platform. For information on verifying that your Mobility Services implementation is being billed correctly, see Billing validation . For additional information about Mobility Services billing, contact your sales representative.
Which Navigation SDK
APIs should only be used by Mobility Services customers?
There are several APIs in the Navigation SDK that are only intended for use by Mobility Services customers, who are billed by Google on a per-transaction basis. If you are not a Mobility Services customer, the following methods are no-ops:
NavigationTransactionRecorder.pickup()
NavigationTransactionRecorder.dropoff()
NavigationTransactionRecorder.generatedTransactionId()
Navigator.fetchRouteInfo()
Navigator.setTransactionIds()
If I'm a Mobility Services customer, can I also use a non-Mobility Services implementation of the Navigation SDK?
Yes, Mobility Services customers can use both Mobility Services and non-Mobility Services implementations of the Navigation SDK. However, you can only use one implementation type in an app at one time. You also need to create a new Google Cloud project, billing account, and API key, separate from those that you use with your Mobility Services implementation. For more information, see the Navigation SDK setup overview .
For more information about using a non-Mobility Services implementation of the Navigation SDK, including migrating an app from one implementation type to the other, contact your Google account representative.
Note: If you are not currently a Mobility Services customer and are interested in learning more about the Mobility Services collection of APIs and SDKs, contact Google Maps Platform sales .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
