---
title: "Places SDK for Android code samples \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/examples
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/examples
  title: "Places SDK for Android code samples \_|\_ Google for Developers"
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
Samples
Send feedback
Places SDK for Android code samples
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This page provides instructions for setting up and running sample apps that demonstrate the use of the Places SDK for Android.
The sample apps are available in both Kotlin and Java, accessible through a GitHub repository.
You'll need to clone the repository, import the project into Android Studio, and configure your API keys to run the examples.
The provided samples showcase various functionalities like Place Autocomplete, offering a starting point for developing your own Android apps with Places SDK.
Troubleshooting information is included if the map doesn't display, guiding you to verify the API key configuration.
Select platform:
Android
iOS
JavaScript
The Places SDK for Android samples repository on
GitHub
includes sample apps that demonstrate the use of the Places SDK for Android.
Import and build the app, add your API key, view the demo, and use the sample code supplied as a
starting point for your app.
When you run the sample app, it displays a list of available samples that you can
run on your own device. Select one of the options. For example, click
Place Autocomplete .
Troubleshooting: If the sample app runs successfully but you
don't see a map, check that you've added your API key to the app's manifest file, as described in
Using API Keys .
Clone and run the samples
Git is required to run this sample locally. The following command clones the sample
application repository.
git clone git@github.com:googlemaps-samples/android-places-demos.git
Import the sample project into Android Studio:
In Android Studio, select File > New > Import Project .
Go to the location where you saved the repository and select the project directory for
Kotlin or Java:
Kotlin : PATH-REPO /android-places-demos/demo-kotlin
Java : PATH-REPO /android-places-demos/demo-java
Select Open . Android Studio builds your project, using the Gradle build
tool.
In your top-level project directory, create a secrets.properties file.
Get an API key from your project with the Places API and/or Places API (New) enabled .
In the secrets.properties file, add the following strings, replacing YOUR_API_KEY with the value of
your API key:
PLACES_API_KEY= YOUR_API_KEY
MAPS_API_KEY= YOUR_API_KEY
Run the app.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
