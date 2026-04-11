---
title: "AutocompleteSessionToken \_|\_ Places SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AutocompleteSessionToken
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AutocompleteSessionToken
  title: "AutocompleteSessionToken \_|\_ Places SDK for Android \_|\_ Google for Developers"
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
AutocompleteSessionToken
public abstract class AutocompleteSessionToken implements Parcelable
A token which identifies an Autocomplete session for billing purposes. Multiple instances of com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest can be created using the same session token. Once that is done, the token can then be used in a subsequent com.google.android.libraries.places.api.net.FetchPlaceRequest to conclude the session.
Summary
Public constructors
AutocompleteSessionToken ()
Public methods
static AutocompleteSessionToken
newInstance ()
final String
toString ()
Inherited Constants
From android.os.Parcelable
static final int
CONTENTS_FILE_DESCRIPTOR = 1
static final int
PARCELABLE_STABILITY_LOCAL = 0
static final int
PARCELABLE_STABILITY_VINTF = 1
static final int
PARCELABLE_WRITE_RETURN_VALUE = 1
Inherited methods
From android.os.Parcelable
abstract int
describeContents ()
int
getStability ()
abstract void
writeToParcel ( Parcel p, int p1)
Public constructors
AutocompleteSessionToken
public AutocompleteSessionToken ()
Public methods
newInstance
public static AutocompleteSessionToken newInstance ()
toString
public final String toString ()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],["`AutocompleteSessionToken` identifies an Autocomplete session for billing. Use the `newInstance` method to create a token. This token can be used for multiple `FindAutocompletePredictionsRequest` instances. After these requests, use the token in a `FetchPlaceRequest` to conclude the session. The `toString` method returns a string representation of the token. The class implements `Parcelable`, with constants and methods related to the parcelable interface.\n"]]
