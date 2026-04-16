---
title: "Overview and requirements \_|\_ Navigation SDK for Android \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/setup-overview
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/setup-overview
  title: "Overview and requirements \_|\_ Navigation SDK for Android \_|\_ Google\
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
Overview and requirements
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This guide explains how to set up the Navigation SDK for Android, including build configuration requirements for versions 5.0.0 and later.
You need a Google Cloud project with the Navigation SDK enabled and an API key to start using the SDK.
Your Android app must target Android 13 (API level 33) or higher and have a minimum SDK version of Android 6 (API level 23) or higher.
The Android device running your app needs Google Play services, at least 2GB of RAM, and OpenGL ES 2.0 support.
You cannot use the Navigation SDK and the Maps SDK in the same app, as the Navigation SDK replaces the Maps SDK's functionalities.
This page explains the process for setting up the Navigation SDK for Android,
and lists the build configuration requirements for
Navigation SDK version
5.0.0 and later. The instructions assume you have Android Studio installed and
are familiar with Android development.
Note: If your app already uses the Maps SDK ,
the Navigation SDK replaces the Maps SDK for both map layer and navigation
features. You cannot use the Navigation SDK and Maps SDK in the same app. Note: European Economic Area (EEA) : The default user interface and
functionality of the Navigation SDK are deemed fully compliant with the
EEA Safety Requirements .
Navigation SDK setup process
To set up and start using the Navigation SDK, you first
need to configure your Google Cloud project and obtain an API key that has the
Navigation SDK enabled. Then you can set up your Android
Studio project by adding both the SDK and your API key.
Minimum requirements for using the Navigation SDK
These requirements apply to Navigation SDK for Android versions 5.0.0 and later.
A Google Cloud console
project with the Navigation SDK enabled.
Your app must specify Android versions as follows:
the target version must be Android 13 (API level 33) or higher.
the minimum version must be Android 6 (API level 23) or higher.
To run an app built with the Navigation SDK, the
Android device must meet the following requirements:
Google Play
services
installed and enabled.
2GB of RAM or more.
OpenGL ES 2.0 support. See the Android Open Source Android 6.0
Compatibility documentation for 2D and 3D Graphics
Acceleration
Attributions and licensing text
must be added to the app.
Note: If your project uses the Navigation SDK for Android without using the Maven
dependency, available in versions up to 4.99.2, follow the setup instructions
under Set up your project -- Version 4.99.2 and earlier .
What's next
The first step for setting up the Navigation SDK for Android is to create and configure a Google Cloud project.
Set up the Navigation SDK for Android
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
