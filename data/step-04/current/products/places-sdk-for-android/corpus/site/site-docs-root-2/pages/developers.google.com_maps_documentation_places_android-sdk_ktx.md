---
title: "Places Android KTX Overview and Setup \_|\_ Places SDK for Android \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/ktx
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/ktx
  title: "Places Android KTX Overview and Setup \_|\_ Places SDK for Android \_|\_\
    \ Google for Developers"
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
Places SDK for Android
Guides
Send feedback
Places Android KTX Overview and Setup
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Places Android KTX offers Kotlin extensions for streamlined Places SDK interaction using idiomatic Kotlin.
Native Kotlin APIs within the Places SDK for Android (version 4.0.0 and later) can be used as an alternative to Places Android KTX extensions.
Developers can easily integrate Places KTX by adding the specified dependency to their app's build.gradle.kts file.
A demo application within the GitHub repository provides practical examples of utilizing the Places KTX library.
Places Android KTX is a collection of Kotlin extensions for the
Places SDK for Android. These extensions provide Kotlin
language features that enable you to write concise and idiomatic Kotlin when
developing for the Places SDK for Android.
Places KTX is open-sourced and available on
GitHub
along with examples.
Note: As of version
4.0.0 , the
Places SDK for Android includes native Kotlin APIs that can
be used instead of the Places Android KTX extensions. For more
information, see the Places SDK for Android Reference
Overview .
Install KTX for the Places SDK
To install KTX for the Places SDK for Android, add the
following dependencies to your app-level build.gradle.kts file.
dependencies {
// KTX for the Places SDK for Android library
implementation ( "com.google.maps.android:places-ktx:3.5.0" )
}
Try the sample application
The GitHub repository for this library also contains a demo
application
that shows how you can use the Places KTX library in your own app.
To try the demo application, follow these steps:
From
GitHub ,
clone the or download the ZIP file.
In Android Studio, choose File -> Open and navigate to
the directory and open the folder that you just cloned or downloaded.
Add an API key to the demo app.
Get a Places API key .
In the root directory, create a file called
secrets.properties . This file should NOT be under version
control to protect your API key.
Add this single line to secrets.properties
PLACES_API_KEY="YOUR_API_KEY"
where YOUR_API_KEY is the actual API key you obtained in the
first step. You can look at the
local.defaults.properties
as an example.
Under the run configuration, select the module
app-places-ktx .
Select Run 'app-places-ktx'.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["Places KTX provides Kotlin extensions for the Places SDK for Android, enabling concise Kotlin development. Install it by adding the `com.google.maps.android:places-ktx:3.3.1` dependency to your app's `build.gradle.kts` file. A demo app is available on GitHub; to run it, clone the repository, obtain a Places API key, and store it in a `secrets.properties` file in the root directory. Select and Run the **app-places-ktx** module in Android Studio. The Places SDK also offers native Kotlin APIs as of version 4.0.0.\n"]]
