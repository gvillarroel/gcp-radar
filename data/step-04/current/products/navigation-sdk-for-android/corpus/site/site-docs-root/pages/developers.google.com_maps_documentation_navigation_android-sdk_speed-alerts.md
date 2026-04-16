---
title: "Configure speedometer alerts \_|\_ Navigation SDK for Android \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/speed-alerts
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/speed-alerts
  title: "Configure speedometer alerts \_|\_ Navigation SDK for Android \_|\_ Google\
    \ for Developers"
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
Configure speedometer alerts
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Navigation SDK for Android provides a built-in speedometer that displays the current speed limit and alerts users when they exceed it, with customizable alert thresholds and visual cues.
Developers can customize the speed alert thresholds for minor and major alerts, including the percentage over the speed limit and the duration before an alert is triggered.
The appearance of the speedometer can be customized, allowing developers to change the background and text colors for both minor and major speed alerts to enhance visibility.
The Navigation SDK enables access to user speed information, which can be utilized by applications like ridesharing services to monitor and manage driver speeds for safety purposes, even without displaying a navigation view.
When navigation is enabled, the Navigation SDK for Android displays a speed
limit control in the lower left corner of the map that shows the current speed
limit. If a user exceeds the speed limit, the control expands to display a
speedometer next to the speed limit display and triggers alerts when the speed
reaches a certain threshold.
By default, the Navigation SDK triggers a minor speed alert when the user
exceeds the speed limit by 5 mph (or 10 kph), and changes the color of the
speedometer text to red. It triggers a major speed alert when the user exceeds
the speed limit by 10 mph (or 20 kph), and changes the speedometer background
color to red.
You can customize both the threshold for triggering the alerts and the text and
background colors the speedometer displays. You can also use the Navigation SDK
to make the user's speed information available in accordance with the thresholds
you have set. For example, you could make speed information available to
rideshare operators to help them encourage their users to adhere to the speed
limit and improve safety.
Customize thresholds for speed alerts
You can customize the speed alert threshold for both minor and major speed
alerts as a percentage over the speed limit of the current speed. You can also
specify how long the threshold is exceeded before the map displays the alert.
The following code example sets the threshold for a minor speed alert to five
percent over the speed limit, and the threshold for a major speed alert to 10
percent over the speed limit. It specifies that the map displays an alert after
an alert threshold has been exceeded for five seconds.
float minorSpeedAlertThresholdPercentage = 5 ; float
majorSpeedAlertThresholdPercentage = 10 ; double severityUpgradeDurationSeconds =
5 ;
// Configure SpeedAlertOptions SpeedAlertOptions.Builder
speedAlertOptionsBuilder = new SpeedAlertOptions . Builder ();
speedAlertOptionsBuilder . setSpeedAlertThresholdPercentage (
SpeedAlertSeverity . MINOR , minorSpeedAlertThresholdPercentage );
speedAlertOptionsBuilder . setSpeedAlertThresholdPercentage (
SpeedAlertSeverity . MAJOR , majorSpeedAlertThresholdPercentage );
speedAlertOptionsBuilder . setSeverityUpgradeDurationSeconds ( severityUpgradeDurationSeconds );
// Set SpeedAlertOptions to Navigator.
navigator . setSpeedAlertOptions ( speedAlertOptionsBuilder . build ());
Customize how the speedometer displays speed alerts
To make speed alerts more attention-getting, you can customize the colors of the
speedometer display for each alert level.
The following table shows the default colors for speed alerts in the
NavigationView class:
Element Color
MinorSpeedAlertBackgroundColorDayMode
0xffffff(white)
MinorSpeedAlertBackgroundColorNightMode
0x000000
MinorSpeedAlertTextColorDayMode
0xd93025
MinorSpeedAlertTextColorNightMode
0xd93025
MajorSpeedAlertBackgroundColorDayMode
0xd93025
MajorSpeedAlertBackgroundColorNightMode
0xd93025
MajorSpeedAlertTextColorDayMode
0xffffff(white)
MajorSpeedAlertTextColorNightMode
0xffffff(white)
You can specify the text and background color of the speedometer for both minor
and major speed alerts:
SpeedometerUiOptions speedometerUiOptions = new SpeedometerUiOptions . Builder ()
. setBackgroundColorDayMode ( MINOR , some_color )
. setBackgroundColorNightMode ( MINOR , some_color ) . setTextColorDayMode ( MINOR ,
some_color ) . setTextColorNightMode ( MINOR , some_color )
. setBackgroundColorDayMode ( MAJOR , some_color )
. setBackgroundColorNightMode ( MAJOR , some_color ) . setTextColorDayMode ( MAJOR ,
some_color ) . setTextColorNightMode ( MAJOR , some_color ) . build ();
// Set SpeedometerUiOptions to NavigationView.
navigationView . setSpeedometerUiOptions ( speedometerUiOptionsBuilder . build ());
navigationView . setSpeedometerEnabled ( true );
// Set SpeedometerUiOptions to SupportNavigationFragment.
supportNavigationFragment . setSpeedometerUiOptions ( speedometerUiOptionsBuilder . build ());
supportNavigationFragment . setSpeedometerEnabled ( true );
Receive speed information from users
If your application requires sharing information about user speed, you can also
use the Navigation SDK to make the user's speed information available. For
example, this can be useful for rideshare applications in which an operator may
want to monitor excessive speeding by users to improve safety. This can also be
done without needing to render a navigation view to the user in your app.
For example, the following example shares speed information when the speed is a
specified percentage over the speed limit:
// Existing flow for creating Navigator. NavigationApi.getNavigator();
// Set the SpeedAlertOptions for the MAJOR and MINOR alerts. (Note that the //
severityUpgradeDurationSeconds field is by design not used in this flow .)
SpeedAlertOptions speedAlertOptions = ...;
navigator . setSpeedAlertOptions ( speedAlertOptions );
// Implement SpeedingListener. SpeedingListener speedingListener = new
SpeedingListener () { @Override public void onSpeedingUpdated ( float
percentageAboveLimit , SpeedAlertSeverity speedAlertSeverity ) { ... } };
// Set speedingListener to Navigator.
navigator . setSpeedingListener ( speedingListener );
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
