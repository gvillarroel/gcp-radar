---
title: "RxJava Library \_|\_ Places SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/rx
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/rx
  title: "RxJava Library \_|\_ Places SDK for Android \_|\_ Google for Developers"
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
RxJava Library
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Places Rx library enables the use of RxJava features for asynchronous events in the Maps SDK and Places SDK for Android.
It provides observable sequences for events like fetching place details, allowing developers to handle them reactively.
You need to add specific dependencies to your build.gradle file to integrate the Places Rx library into your project.
Refer to the official GitHub project page and API reference for further details and usage examples.
RxJava is a reactive programming library for composing asynchronous and event-based programs by
using observable sequences.
The Places Rx library
lets you receive observable sequences for asynchronus events on the Maps SDK for Android
and Places SDK for Android so you can take advantage of the rich set of RxJava features.
Installation
Note: See the
Places Rx library
documentation on GitHub for the latest system requirements and installation instructions.
To install the Places Rx library in your Google Maps project:
Add the following dependencies to your module-level build.gradle file:
dependencies {
// RxJava bindings for the Maps SDK
implementation(libs.maps.rx)
// RxJava bindings for the Places SDK
implementation(libs.places.rx)
// It is recommended to also include the latest Maps SDK, Places SDK and RxJava so you
// have the latest features and bug fixes.
implementation("com.google.android.gms:play-services-maps:19.2.0")
implementation("com.google.android.libraries.places:places:4.4.1")
implementation("io.reactivex.rxjava3:rxjava:3.1.12")
Rebuild your project in Android Studio to sync these changes.
Example Usage
The following example shows how you can receive a
Single ,
and subscribe to it, when fetching place details:
placesClient.fetchPlace(
placeId = "thePlaceId",
placeFields = listOf(Place.Field.ID, Place.Field.NAME, Place.Field.ADDRESS),
actions = {}
).subscribe(
{ response - >
Log.d("PlacesRx", "Successfully got place ${response.place.id}")
},
{ error - >
Log.e("PlacesRx", "Could not get place : ${error.message}")
}
)
}
What's next
View the Places Rx library
GitHub project page.
View the Places Rx library API reference .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
