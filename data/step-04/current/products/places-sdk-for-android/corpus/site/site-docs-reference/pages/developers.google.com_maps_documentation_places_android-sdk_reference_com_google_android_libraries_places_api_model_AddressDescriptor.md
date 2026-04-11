---
title: "AddressDescriptor \_|\_ Places SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AddressDescriptor
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AddressDescriptor
  title: "AddressDescriptor \_|\_ Places SDK for Android \_|\_ Google for Developers"
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
AddressDescriptor
public abstract class AddressDescriptor implements Parcelable
A relational description of a location. Includes a ranked set of nearby landmarks, precise containing areas and their relationship to the target location.
Summary
Nested types
public abstract class AddressDescriptor.Builder
A builder to create instances of AddressDescriptor .
Public constructors
AddressDescriptor ()
Public methods
static AddressDescriptor.Builder
builder ()
Returns a new instance of Builder .
abstract @ Nullable List < Area >
getAreas ()
A ranked list of containing or adjacent areas.
abstract @ Nullable List < Landmark >
getLandmarks ()
A ranked list of nearby landmarks.
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
AddressDescriptor
public AddressDescriptor ()
Public methods
builder
public static AddressDescriptor.Builder builder ()
Returns a new instance of Builder .
getAreas
public abstract @ Nullable List < Area > getAreas ()
A ranked list of containing or adjacent areas. The most recognizable and precise areas are ranked first.
getLandmarks
public abstract @ Nullable List < Landmark > getLandmarks ()
A ranked list of nearby landmarks. The most recognizable and nearby landmarks are ranked first.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
