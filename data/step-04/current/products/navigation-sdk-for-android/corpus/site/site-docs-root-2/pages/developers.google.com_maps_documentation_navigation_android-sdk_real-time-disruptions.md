---
title: "Navigation SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/real-time-disruptions
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/real-time-disruptions
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
information, see Navigation SDK country and region coverage . In addition, real-time disruptions are not available on Android Auto.
Real-time disruption features
The Navigation SDK includes the following real-time disruption features as part of the core navigation experience:
Interactive disruption callouts along routes .
Automated disruption alerts with voting during active navigation .
Disruption reporting during active navigation .
These features are configurable and enabled by default. The following sections provide more information about the features and available configuration options.
Interactive disruption callouts along routes
When an app displays a route, either in a route overview or during active navigation, any current disruptions appear as callouts along the route. Callouts include an icon that indicates the type of disruption.
You can control the display of disruption callouts along routes using setTrafficPromptsEnabled , which also controls the display of automated alerts when a user approaches a disruption .
// Using the SupportNavigationFragment
mNavFragment . setTrafficPromptsEnabled ( true );
// Using the NavigationView
navigationView . setTrafficPromptsEnabled ( true );
Notes:
setTrafficPromptsEnabled only controls the
display of callouts for user-reported disruptions. Some disruption types, such as road closures from traffic authorities, may still
be visible even when setTrafficPromptsEnabled is set to false .
Road closure callouts appear on both the current route and alternate routes.
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
setTrafficIncidentCardsEnabled
.
// Using the SupportNavigationFragment
mNavFragment . setTrafficIncidentCardsEnabled ( true );
// Using the NavigationView
navigationView . setTrafficIncidentCardsEnabled ( true );
Callout info cards during active navigation
When a disruption callout appears along a route during active navigation, users can tap the
callout to display an info card with more information about the disruption, including the disruption
type and the time it was last reported, as well as buttons for voting on whether the disruption is
still present. Votes submitted by users are processed by Google and may be surfaced on the map for
other Google Maps users and Navigation SDK users, as well as used to determine whether to continue
showing the disruption.
You can control the display and tappability of disruption callouts during active navigation using
setTrafficPromptsEnabled
, which also controls the
display of callouts along routes and the
display of automated alerts when a user approaches a disruption .
// Using the SupportNavigationFragment
mNavFragment . setTrafficPromptsEnabled ( true );
// Using the NavigationView
navigationView . setTrafficPromptsEnabled ( true );
Note: setTrafficPromptsEnabled only controls the
display of callouts for user-reported disruptions. Some disruption types, such as road closures from traffic authorities, may still
be visible even when setTrafficPromptsEnabled is set to false .
Automated disruption alerts with voting during active navigation
During active navigation, when a user approaches a disruption along a route, a prompt appears with
information about the disruption and buttons for voting on whether the disruption is still present.
Votes submitted by users are processed by Google and may be surfaced on the map for
other Google Maps and Navigation SDK users, as well as used to determine whether to continue showing the disruption.
You can configure the display of alert prompts during active navigation using
setTrafficPromptsEnabled
, which also controls the display
of callouts along routes .
// Using the SupportNavigationFragment
mNavFragment . setTrafficPromptsEnabled ( true );
// Using the NavigationView
navigationView . setTrafficPromptsEnabled ( true );
Note: When a user approaches a disruption along a route during active navigation, the disruption is
announced with an audio alert. Audio alerts are not affected by the prompt display configuration.
However, you can configure all voice prompts during active navigation using
AudioGuidance
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
setReportIncidentButtonEnabled
.
// Enables the incident reporting button to show in situations where incident
// reporting is possible.
// Using the SupportNavigationFragment
mNavFragment . setReportIncidentButtonEnabled ( true );
// Using the NavigationView
navigationView . setReportIncidentButtonEnabled ( true );
Add a custom reporting button
In place of the standard disruption reporting button, you can add a custom reporting button to the
navigation UI. When the user clicks the custom button, you can trigger the display of the reporting
menu by calling the showReportIncidentsPanel method. Before adding a custom reporting
button, verify that the app is in active navigation and the user is in a country where reporting
is enabled by calling isIncidentReportingAvailable . If either of these is not true,
the reporting menu won't appear.
Note: If you are implementing a custom reporting button, make
sure to set setReportIncidentButtonEnabled to false to hide the standard reporting
button.
Button customReportIncidentButton = findViewById ( R . id . custom_reporting_button );
// Check if reporting is available before displaying your button
customReportIncidentButton . setVisibility (
navigationView . isReportingAvailable ? View . VISIBLE : View . GONE );
// Trigger the reporting flow if the button is clicked
customReportIncidentButton . setOnClickListener ( v - >
navigationView . showReportIncidentsPanel ());
Work with custom navigation UIs
If your implementation of the Navigation SDK includes custom UI elements, you need to consider
the real-time disruption elements in order to avoid conflicts.
Note: For more information about working with custom UI elements,
see Modify the navigation UI .
Reporting button positioning
By default, the disruption reporting button is positioned at the bottom end/trailing corner of the
map—on the right side for left-to-right languages and left side for right-to-left languages. If you
need to move the reporting button to make space for custom UI elements,
add a BOTTOM_END_BELOW or FOOTER custom control, which will push the
position of the button up on the screen. Placing your own custom UIs within the custom controls
also ensures that any prompts displayed by the Navigation SDK are properly layered over your
custom UI elements while displayed. If you are not able to use custom controls, use the
Prompt Visibility API to manage potential UI conflicts.
Note: The FOOTER custom control only affects
the position of the reporting button in portrait orientation.
Prompt Visibility API (Experimental)
The Prompt Visibility API helps you avoid conflicts between UI elements generated by the
Navigation SDK and your own custom UI elements by adding a listener to receive a callback before a
Navigation SDK UI element is about to appear and as soon as the element is removed. You can receive
callbacks for real-time disruption elements, including info cards, prompts, and the disruption
reporting menu—as well as for other notifications generated by the Navigation SDK.
// Sample listener
val listener : PromptVisibilityChangedListener = { isVisible - >
if ( isVisible ) {
customFab . visibility = false
customFooter . visibility = false
moveSomeOtherThingsAround ()
} else {
customFab . visibility = true
customFooter . visibility = true
moveSomeThingsBackToWhereTheyWereBefore ()
}
}
// Inside onCreate()
navigationView . addPromptVisibilityChangedListener ( listener )
// Inside onDestroy()
navigationView . removePromptVisibilityChangedListener ( listener )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]
