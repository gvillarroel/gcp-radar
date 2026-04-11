---
title: "Overview \_|\_ Navigation SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/reference
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/reference
  title: "Overview \_|\_ Navigation SDK for Android \_|\_ Google for Developers"
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
Reference
Send feedback
Overview
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Navigation SDK for Android provides navigation features on top of the Maps SDK for Android and is a required dependency for apps needing navigation.
Most Maps SDK functionalities remain the same in the Navigation SDK, accessible via the com.google.android.gms.maps package.
Certain APIs behave differently in the Navigation SDK, either throwing exceptions (like LiteMode) or having no functionality (like wearable APIs and custom LocationSource).
For wearable apps, the TBT feed should be used instead of ambient mode functionalities.
Some APIs are exclusively for Mobility Services customers and function as no-ops for other users.
The Navigation SDK for Android adds navigation features to the
Maps SDK for Android. If your Google Maps-powered Android application
needs navigation features, it must depend on the Navigation SDK for Android.
That said, most functions in the Maps SDK for Android behave the same in
the Navigation SDK for Android. You access them using the same
com.google.android.gms.maps package, no matter which SDK dependency you use.
This means that, if your app previously depended on the
Maps SDK for Android, you can change its dependency to the
Navigation SDK for Android without affecting the existing functionality of your app, with
two notable exceptions:
APIs that throw an exception.
APIs that don't function in the NavSDK and have no impact when called.
These exceptions are described below.
APIs that throw an exception
The following function throws an exception if your application enables it:
LiteMode
APIs with no functionality in Navigation SDK
The following APIs have no functionality in the Navigation SDK, but also have no
impact if your code calls them. They fall into the following categories:
APIs for wearable activity.
Enable TBT feed instead if you want this functionality in
the Navigation SDK for Android.
Other APIs.
APIs for wearables
GoogleMapOptions.ambientEnabled(boolean enabled) would
normally allow you to disable or enable ambient mode for
wearable apps. Additionally,
onEnterAmbient
and
onExitAmbient
methods exist in MapView and MapFragment , but have
no impact when called. For wearables, use the TBT feed instead.
Other APIs
Setting a custom LocationSource does nothing in the
NavSDK.
All MapsInitializer APIs.
RuntimeRemoteException .
APIs that are only intended for use by Mobility Services customers
There are several APIs in the Navigation SDK that are only intended for use by Mobility Services customers, who are billed by Google on a per-transaction basis. If you are not a Mobility Services customer, the following methods are no-ops:
NavigationTransactionRecorder.pickup()
NavigationTransactionRecorder.dropoff()
NavigationTransactionRecorder.generatedTransactionId()
Navigator.fetchRouteInfo()
Navigator.setTransactionIds()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]
