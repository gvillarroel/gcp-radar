---
title: "Navigation SDK overview \_|\_ Navigation SDK for Android \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/overview
  title: "Navigation SDK overview \_|\_ Navigation SDK for Android \_|\_ Google for\
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
Android
Navigation SDK for Android
Send feedback
Navigation SDK overview
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Navigation SDK enables integrating Google Maps turn-by-turn navigation directly into your mobile apps, offering UI customization and advanced route configuration.
It enhances user engagement by providing a seamless in-app navigation experience, eliminating the need to switch between apps.
Businesses can leverage the SDK to personalize the navigation experience with custom branding, optimize routes, and gain valuable data-driven insights from trip data.
The Navigation SDK replaces the Maps SDK for both map layer and navigation features within your app, providing a comprehensive solution for in-app navigation.
You can seamlessly guide users with turn-by-turn directions, support various transportation modes, implement custom UI elements, and access trip data for analysis and optimizations.
The Navigation SDK lets you seamlessly integrate the Google Maps turn-by-turn
navigation experience directly into your mobile applications. The SDK offers UI
customization for brand look and feel and advanced route configuration.
Providing customizable, in-app navigation experiences helps you enhance
operational efficiency, improve user engagement, and gain valuable data-driven
insights.
Note: European Economic Area (EEA) : The default user interface and functionality of the Navigation SDK are deemed fully compliant with the EEA Safety Requirements .
Why use the Navigation SDK?
Integrating navigation into your app lets you provide a superior experience for
your users, while applying your own branding and leveraging trip data:
Control the end-to-end experience and increase engagement by keeping users
within your app during navigation, eliminating the need to switch between
apps.
Personalize the navigation experience to match your brand's look and feel
with customizable UI elements.
Optimize the route experience by managing routing preferences, destinations,
and waypoints.
Utilize location and event data from trip routing for analytics,
optimizations, customer communications, and real-time monitoring.
What can you do with the Navigation SDK?
The Navigation SDK lets you create a comprehensive in-app navigation experience:
Provide your users with a seamless and reliable turn-by-turn navigation
experience powered by Google Maps.
Support various modes of transportation, including driving, walking,
cycling, and two-wheel vehicles.
Implement custom markers, overlays, and UI elements to highlight key
navigation information and to personalize the navigation experience to match
your brand.
Access trip data to analyze trends, identify areas for improvement, and
optimize operations.
How the Navigation SDK works
You can use the Navigation SDK to incorporate both maps and navigation features
into your app. The two main components of the Navigation SDK are:
Map Layer : Begin with a map layer, including map view, styling, UI
controls, camera, and interaction behavior. The Navigation SDK includes the
map functionality from the Maps SDK , and
apps that include the Navigation SDK cannot include the Maps SDK. If your
app uses the Maps SDK, you need to remove it in order to use the Navigation
SDK. However, the maps API is nearly identical in the Navigation SDK, so you
typically don't need to update your implementation, other than removing the
Maps SDK. For information on the maps API and functionality differences
between the Maps SDK and the Navigation SDK, see the
Overview
page in the Reference section
Navigation Experience : Add the navigation experience using the
Navigation SDK, which includes the turn-by-turn navigation overlay, turn
cards, and additional UI elements. You can either use the Google Navigation
experience or
build your own custom navigation
experience .
Note: If your app already uses the Maps SDK ,
the Navigation SDK replaces the Maps SDK for both map layer and navigation
features. You cannot use the Navigation SDK and Maps SDK in the same app.
How to use the Navigation SDK
The steps below cover a typical use case scenario for using the Navigation SDK:
1
Get set up
Create a Google Cloud project, add the Navigation SDK to your API key, and set up your Android Studio project. For more information, see Set up your project .
2
Navigate to your first route
Plot a route within your app to a single destination. For more information, see Navigate a single-destination route .
3
Modify the navigation UI
Customize the navigation experience and visual appearance by modifying the built-in UI controls and elements appear on the map. For more information, see Modify the navigation UI .
4
Adjust routing details
Modify routing preferences and manage waypoints. For more information, see Route experience .
For more information about the Navigation SDK features, see
Reference , or Try
the demo .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
