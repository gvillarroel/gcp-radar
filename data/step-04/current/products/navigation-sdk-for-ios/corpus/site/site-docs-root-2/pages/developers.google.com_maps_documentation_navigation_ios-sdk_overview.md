---
title: "Navigation SDK overview \_|\_ Navigation SDK for iOS \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/overview
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/overview
  title: "Navigation SDK overview \_|\_ Navigation SDK for iOS \_|\_ Google for Developers"
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
Navigation SDK overview
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Navigation SDK enables seamless integration of Google Maps turn-by-turn navigation into your mobile applications, offering UI customization and advanced route configuration.
Enhance user engagement and operational efficiency by providing a branded, in-app navigation experience without requiring users to switch between apps.
Utilize location and event data from trip routing for valuable insights into analytics, optimizations, customer communications, and real-time monitoring.
Leverage the Navigation SDK to support various modes of transportation, including driving, walking, cycling, and two-wheel vehicles, and customize UI elements for a personalized user experience.
The Navigation SDK requires the Maps SDK and allows for either the Google Navigation experience or building a custom navigation experience using its two main components: Map Layer and Navigation Experience.
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
You can integrate the Navigation SDK into your app with or without an existing
Maps SDK implementation. The two main components of the Navigation SDK are:
Map Layer : Begin with a map layer from the Maps SDK, including map view,
styling, UI controls, camera, and interaction behavior.
Navigation Experience : Add the navigation experience using the
Navigation SDK, which includes the turn-by-turn navigation overlay, turn
cards, and additional UI elements. You can either use the Google Navigation
experience or
build your own custom navigation
experience .
Note: The Navigation SDK extends the Maps SDK .
If your app uses the Maps SDK for its map layer, you can add the Navigation SDK
to your app to enable the navigation experience. You cannot use the Navigation
SDK without also having the Maps SDK installed in your app.
How to use the Navigation SDK
The steps below cover a typical use case scenario for using the Navigation SDK:
1
Get set up
Create a Google Cloud project, add the Maps and Navigation SDKs to your API, and set up your Xcode project. For more information, see Set up your project .
2
Navigate to your first route
Plot a route within your app to a single destination. For more information, see Navigate a route .
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
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
