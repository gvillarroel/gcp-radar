---
title: "AddressComponent.Builder \_|\_ Places SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AddressComponent.Builder
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AddressComponent.Builder
  title: "AddressComponent.Builder \_|\_ Places SDK for Android \_|\_ Google for Developers"
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
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
AddressComponent.Builder
public abstract class AddressComponent.Builder
Builder for AddressComponent .
Summary
Public constructors
Builder ()
Public methods
AddressComponent
build ()
Builds the AddressComponent .
abstract @ Nullable String
getShortName ()
abstract AddressComponent.Builder
setShortName (@ Nullable String shortName)
Public constructors
Builder
public Builder ()
Public methods
build
public AddressComponent build ()
Builds the AddressComponent .
Mutable members (e.g List) will be converted to immutable versions.
Throws
java.lang.IllegalArgumentException
If name or types is empty, or if
types contains null or empty values.
getShortName
public abstract @ Nullable String getShortName ()
setShortName
public abstract AddressComponent.Builder setShortName (@ Nullable String shortName)
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],["The `AddressComponent.Builder` class facilitates the creation of `AddressComponent` objects. It has a constructor `Builder()` and a `build()` method to finalize and create the `AddressComponent`. The `getShortName()` method retrieves the short name, while `setShortName(String)` allows setting it. The `build()` function throws `IllegalArgumentException` if `name` or `types` is empty or `types` contains null or empty values. The class creates an object with immutable components.\n"]]
