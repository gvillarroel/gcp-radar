---
title: "Optimize power consumption for your app \_|\_ Navigation SDK for Android \_\
  |\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/optimize-power
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/optimize-power
  title: "Optimize power consumption for your app \_|\_ Navigation SDK for Android\
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
Optimize power consumption for your app
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This guide provides best practices for optimizing power consumption in mobile navigation apps built with the Navigation SDK, while highlighting important performance trade-offs.
High power consumption in navigation apps is primarily due to screen rendering and, to a lesser extent, location updates (GPS and cellular communication).
Key optimization strategies include reducing frame rate, offering navigation without a map display, using a dark map style, and adjusting GPS update frequency if applicable.
Educating users on power-saving techniques, such as locking the phone, reducing screen brightness, and keeping the device cool, can significantly extend battery life.
While professional tools offer precise power consumption measurement, readily available app profiling tools and IDEs can provide useful insights, although it can be difficult to isolate app-specific power usage.
This document describes best practices for how you can optimize power
consumption in a mobile navigation app you build using the
Navigation SDK. At the same time, it describes the trade-offs to
consider when employing these practices. In particular, this document covers the
following:
Sources of high-power consumption, ranked from the highest to lowest.
Strategies for optimizing power consumption, in order of importance,
starting with frame rate.
End-user strategies for educating your app users how to manage their
device usage while navigating.
Why optimize your navigation app?
Depending on their situation, your app users might run navigation guidance for
long periods of time. For example, driver and delivery couriers can work long
hours, completing assignments in unfamiliar territory. In these cases, they rely
heavily on in-app turn-by-turn guidance. This results in some typical issues:
Battery drain and availability of chargers . Heavy navigation use can
cause device batteries to drain faster than expected. While many users can
address this by charging their device in the vehicle, two-wheeler drivers
cannot.
Device throttling due to heat . Even users who continuously charge their
device can experience issues. High power consumption over long periods of time
can cause the device to heat up, resulting in thermal throttling and
subsequent performance loss.
Turn-by-turn navigation apps rely on power-heavy features such as screen, GPS,
and radio communication with cell towers, so it's a best-practice to optimize
the power usage of your mobile app. Additionally, you should consider the power
usage needs of your target audience so that you can make the appropriate
tradeoffs between performance and optimizing power consumption.
What consumes the most power?
This section divides the in-app activities associated with high power
consumption into two categories:
Screen rendering
Location updates
Screen rendering
Screen rendering usually causes the highest power consumption in mobile
navigation apps. Each time the device draws a map and other UI elements on the
screen, it relies on GPU and CPU processing. Similarly, when the user leaves
that screen on for long durations, that also uses more power.
To some extent, you can expect high power consumption from drivers or riders who
rely on a visible map to navigate, especially if they use the app continuously
for many hours. In this scenario, the app also performs a higher rate of rendering
on the screen because the map then updates in real time. In some cases, the
screen can redraw almost continuously, especially when the user drives from
location to location without stopping.
Location updates
In addition to screen rendering, two other navigation activities consume device
power:
Radio cell tower and GPS usage
Location updates and sharing, such as to provide an ETA or to report the
positions of a vehicle in a fleet.
GPS and cell radio communication both rely on power-hungry start-up operations:
GPS must find satellites and cell radios must negotiate with towers and
establish a connection. For these reasons, they essentially run continuously
during navigation, even though cell radios remain active for 20-30 seconds in an
attempt to minimize start up costs. The operating system controls these settings
which you cannot easily configure in your app.
For location updates, power usage varies based on unpredictable factors. For
example, the distance between the device and the cellular base station
determines power usage, since the device will use the minimum signal necessary
to continue navigation in order to avoid switching towers. Therefore, a device
navigating in an area with poor connectivity will use more power than one that
is close to a base station. Additionally, some apps may share location updates
with a central fleet management service, and therefore will need to communicate
with a server to accomplish this.
Optimize your app's power usage
The challenge for optimizing power usage in navigation apps is that these apps depend
heavily on power-hungry resources, which limits your options for mitigating the
impact without making tradeoffs such as restricting usage of the screen. This
section provides a list of approaches you can take when optimizing your app, in
order from the most to least impactful.
Change the frame rate
The screen updates what it is showing at a frequency known as the frame rate.
Frame rate is usually measured in Frames Per Second (FPS). Because screen rendering uses a lot of CPU or GPU, you can reduce the frame rate to save power
consumption.
The tradeoff when reducing frame rate is that screen rendering can appear less
smooth, especially if the map updates frequently. This might be most obvious
when the map is zoomed in, when the user is traveling at
high speed, or when changing speed or direction by a large amount.
See the Frame rate section in the Android Media Dev Center developer
documentation to learn more about modifying frame rates.
Navigate without a map
While you cannot control how the end user sets their device screen brightness or
how long they keep their screen on, you can provide an option for navigation
guidance without a map. This would allow the end user to choose that option in
order to conserve power. For example, if drivers regularly work in the same
neighborhood, they might not need map-based guidance as often. Navigation
without a map can be enabled by
setting a destination and starting guidance
in the Navigation SDK but not displaying a map.
To hide the navigation UI, don't add a NavigationView or
SupportNavigationFragment , or if you have done this already,
remove the code that adds them. The following code is modified from the
Navigation SDK Android demo app and shows the use of
comments to remove the code that adds the navigation UI:
//Obtain a reference to the NavigationFragment
//setContentView(R.layout.activity_nav_fragment);
//mNavFragment = (SupportNavigationFragment) getSupportFragmentManager().findFragmentById(R.id.navigation_fragment);
Navigation SDK will continue to update road snapped locations, ETA, and
remaining journey distance, and your app can still subscribe to all the
events raised by the SDK
as the driver proceeds. This is not appropriate for every use case and of
course is not be good advice in cases where the driver needs to see the map and follow
visual guidance. The following screenshots illustrate a side-by-side comparison
of toggling map views during active navigation.
Figure 1. Navigation SDK iOS demo app showing the Data Back demo
Figure 2. Demo app running with no map view visible. Note the remaining time and distance, as well as the road-snapped location are still updating.
Use a dark map style
Consider styling the map to use a dark theme to reduce the amount of energy
needed to render the map on screen.
The Navigation SDK renders its maps using the
Google Maps SDK for Android ,
which contain options for
styling any non-navigation map views in your app. The navigation view also
supports forcing dark mode. This may not affect every device in the same way due
to differences in screen type, but does allow for potential power savings in
some cases. A recent study found that the amount of power
saved by dark mode on some screens depends on how bright the screen is to start
with. For example, dark mode saves more power on screens set to full brightness
than it does with screens whose brightness is already adjusted to 30-50% of
maximum. This is important to consider when using dark mode for your apps,
because the power savings will be relative to how the end user sets their screen
brightness.
To learn more about modifying the Navigation UI see
Modify the navigation UI .
Figure 3. Navigation SDK configured with a dark map style
To create a dark style for your map, use a MapStyleOptions
object with a JSON style that represents your choice of dark
map style. Legacy JSON styles can be created using the legacy styling editor at
https://mapstyle.withgoogle.com/ .
Change GPS location update frequency
When considering power usage from location updates sent from the device, focus
more on the frequency of location updates rather than the amount of data sent in
the transmission.
This is not something that you can directly control in the
Navigation SDK
, but if your Android app requests location independently, then you should
consider the advice in the Optimize Location for Battery article in the
Android developer documentation.
The same advice applies for using non-GPS location sources (Cell and WiFi).
Educate your users
The users of your app might want to know how to optimize their power
consumption. To help them reduce power consumption on their apps, advise your
users to do the following:
Lock the phone
Put the navigation app in the background
Use navigation without a map if possible
Reduce screen brightness, either by using dark mode for OLED and AMOLED
screens, or by enabling adaptive brightness
Keep the device cool
Connect to in-vehicle Wi-Fi if available
See get the most life from your Android device's battery for
end-user advice on extending battery life on Android. Remember that this advice
includes actions that could deteriorate the effectiveness of a navigation app as
discussed in Optimize your app's power usage in this guide.
Measure power consumption
You can use professional-grade tools to measure power consumption, but it's often difficult or costly to obtain them.
Apps and IDE profiling tools such as Power
Profiler in Android Studio and the Battery Usage pane in XCode
Organizer measure power consumption, but it can be difficult
to remove the effect of background processes or set a performance baseline to
measure against. In some cases device restrictions may prevent gaining
access to the necessary data.
You can use special purpose power monitoring hardware and modify the
battery connection configuration, and commercial products and services
exist to help you do this. Note that modifying devices in this way may void
the device's warranty.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
