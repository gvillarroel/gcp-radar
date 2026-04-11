---
title: "Configure speedometer alerts \_|\_ Navigation SDK for iOS \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/speedometer
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/speedometer
  title: "Configure speedometer alerts \_|\_ Navigation SDK for iOS \_|\_ Google for\
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
Configure speedometer alerts
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
When navigation is in driving mode, the Navigation SDK displays the current speed limit and driver's speed, providing visual and configurable speed alerts.
Developers can customize the thresholds for minor and major speed alerts, including the percentage over the speed limit and duration before triggering.
The speedometer's text and background colors can be customized for day and night modes, allowing for clear visual distinction of speed alert levels.
The Navigation SDK enables access to the driver's speed information, which can be used for purposes like monitoring driver behavior in rideshare applications.
When navigation is enabled and the travel mode is set to driving, the Navigation
SDK for iOS displays a speed limit control in the lower left corner of the map
that shows the current speed limit. If a driver exceeds the speed limit, the
control expands to display a speedometer next to the speed limit display and
triggers alerts when the speed reaches a certain threshold.
By default, the Navigation SDK triggers a minor speed alert when the driver
exceeds the speed limit by 5 mph (or 10 kph), and changes the color of the
speedometer text to red. It triggers a major speed alert when the driver exceeds
the speed limit by 10 mph (or 20 kph), and changes the speedometer background
color to red.
You can customize both the threshold for triggering the alerts and the text and
background colors the speedometer displays. You can also use the Navigation SDK
to make the driver's speed information available. For example, you could make
speed information available to rideshare operators to help them encourage their
drivers to adhere to the speed limit and improve safety.
Customizing thresholds for speed alerts
You can customize the speed alert threshold for both minor and major speed
alerts as a percentage over the speed limit of the current speed. You can also
specify how long the threshold is exceeded before the map displays the alert.
The following code example sets the threshold for a minor speed alert to five
percent over the speed limit, and the threshold for a major speed alert to 10
percent over the speed limit. It specifies that the map displays an alert after
an alert threshold has been exceeded for five seconds.
Swift
let minorSpeedAlertThresholdPercentage : CGFloat = 0.05 let
majorSpeedAlertThresholdPercentage : CGFloat = 0.1 let
severityUpgradeDurationSeconds : TimeInterval = 5
// Configure SpeedAlertOptions let mutableSpeedAlertOptions:
GMSNavigationMutableSpeedAlertOptions = GMSNavigationMutableSpeedAlertOptions ()
mutableSpeedAlertOptions . setSpeedAlertThresholdPercentage ( minorSpeedAlertThresholdPercentage ,
for : . minor )
mutableSpeedAlertOptions . setSpeedAlertThresholdPercentage ( majorSpeedAlertThresholdPercentage ,
for : . major ) mutableSpeedAlertOptions . severityUpgradeDurationSeconds =
severityUpgradeDurationSeconds
// Set SpeedAlertOptions to Navigator. mapView.navigator?.speedAlertOptions =
mutableSpeedAlertOptions ; mapView . navigator ?. add ( self ); // Only needed if
listening to the delegate events .
Objective-C
static const CGFloat minorSpeedAlertThresholdPercentage = 0.05 ; static const
CGFloat majorSpeedAlertThresholdPercentage = 0.1 ; static const NSTimeInterval
severityUpgradeDurationSeconds = 5 ;
// Configure SpeedAlertOptions GMSNavigationMutableSpeedAlertOptions
* mutableSpeedAlertOptions = [[ GMSNavigationMutableSpeedAlertOptions alloc ]
init ]; [ mutableSpeedAlertOptions setSpeedAlertThresholdPercentage :
minorSpeedAlertThresholdPercentage
forSpeedAlertSeverity : GMSNavigationSpeedAlertSeverityMinor ];
[ mutableSpeedAlertOptions
setSpeedAlertThresholdPercentage : majorSpeedAlertThresholdPercentage
forSpeedAlertSeverity : GMSNavigationSpeedAlertSeverityMajor ];
[ mutableSpeedAlertOptions
setSeverityUpgradeDurationSeconds : severityUpgradeDurationSeconds ];
// Set SpeedAlertOptions to Navigator. mapView.navigator.speedAlertOptions =
mutableSpeedAlertOptions ; [ mapView . navigator addListener : self ]; // Only needed
if listening to the delegate events .
Customizing how the speedometer displays speed alerts
You can customize the colors of the speedometer display for each alert level.
The following table shows the default colors for speed alerts in the
GMSNavigationSpeedometerUIOptions class:
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
Swift
let mutableSpeedometerUIOptions : GMSNavigationMutableSpeedometerUIOptions =
GMSNavigationMutableSpeedometerUIOptions ()
mutableSpeedometerUIOptions . setTextColor ( minorSpeedAlertTextColor , for : . minor ,
lightingMode : . normal )
mutableSpeedometerUIOptions . setTextColor ( majorSpeedAlertTextColor , for : . major ,
lightingMode : . normal )
mutableSpeedometerUIOptions . setBackgroundColor ( minorSpeedAlertNightModeBackgroundColor ,
for : . minor , lightingMode : . lowLight )
mutableSpeedometerUIOptions . setBackgroundColor ( majorSpeedAlertDayModeBackgroundColor ,
for : . major , lightingMode : . normal )
mapView . settings . speedometerUIOptions = mutableSpeedometerUIOptions
Objective-C
GMSNavigationMutableSpeedometerUIOptions * mutableSpeedometerUIOptions =
[[ GMSNavigationMutableSpeedometerUIOptions alloc ] init ];
[ mutableSpeedometerUIOptions setTextColor : minorSpeedAlertTextColor
forSpeedAlertSeverity : GMSNavigationSpeedAlertSeverityMinor lightingMode :
GMSNavigationLightingModeNormal ]; [ mutableSpeedometerUIOptions setTextColor :
majorSpeedAlertTextColor forSpeedAlertSeverity :
GMSNavigationSpeedAlertSeverityMajor lightingMode :
GMSNavigationLightingModeNormal ]; [ mutableSpeedometerUIOptions
setBackgroundColor : minorSpeedAlertNightModeBackgroundColor
forSpeedAlertSeverity : GMSNavigationSpeedAlertSeverityMinor lightingMode :
GMSNavigationLightingModeLowLight ]; [ mutableSpeedometerUIOptions
setBackgroundColor : majorSpeedAlertDayModeBackgroundColor forSpeedAlertSeverity :
GMSNavigationSpeedAlertSeverityMajor
lightingMode : GMSNavigationLightingModeNormal ];
mapView . settings . speedometerUIOptions = mutableSpeedometerUIOptions ;
Receiving speed information from drivers
If your application requires sharing information about driver speed, you can
also use the Navigation SDK to make the driver's speed information available.
This can be useful for rideshare applications in which an operator may want to
monitor excessive speeding by drivers to improve safety.
For example, the following example shares speed information when the speed is a
specified percentage over the speed limit:
Swift
// Listener method for sharing speed information when the speed exceeds the
speed limit by a specified percentage . # pragma mark GMSNavigatorListener func
navigator ( _ navigator : GMSNavigator , didUpdateSpeedingPercentage
percentageAboveLimit : Float ) { ... }
Objective-C
// Listener method listening to speeding feed. #pragma mark
GMSNavigatorListener - ( void ) navigator : ( GMSNavigator * ) navigator
didUpdateSpeedingPercentage :( float ) percentageAboveLimit { ... }
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The Navigation SDK for iOS displays a speed limit and speedometer when driving. Speed alerts are triggered when the driver exceeds the limit. Minor alerts occur at 5 mph (or 10 kph) over, turning the text red. Major alerts occur at 10 mph (or 20 kph) over, turning the background red. Alert thresholds and colors are customizable, including percentages over the limit and time before the alert. The SDK also provides driver speed data for monitoring purposes, such as in rideshare apps.\n"]]
