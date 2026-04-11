---
title: "Area \_|\_ Places SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/Area
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/Area
  title: "Area \_|\_ Places SDK for Android \_|\_ Google for Developers"
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
Area
public abstract class Area implements Parcelable
Area information and the area's relationship with the target location.
Areas includes precise sublocality, neighborhoods, and large compounds that are useful for describing a location.
Summary
Nested types
public abstract class Area.Builder
A builder for Area .
public enum Area.Containment
Defines the spatial relationship between the target location and the area.
Public constructors
Area ()
Public methods
static Area.Builder
builder ()
Returns a new instance of Builder .
abstract @ Nullable Area.Containment
getContainment ()
Defines the spatial relationship between the target location and the area.
abstract @ Nullable String
getDisplayName ()
The area's display name.
abstract @ Nullable String
getDisplayNameLanguageCode ()
The area's display name language code.
abstract @ Nullable String
getId ()
The area's Place ID.
abstract @ Nullable String
getResourceName ()
The area's resource name.
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
Area
public Area ()
Public methods
builder
public static Area.Builder builder ()
Returns a new instance of Builder .
getContainment
public abstract @ Nullable Area.Containment getContainment ()
Defines the spatial relationship between the target location and the area.
getDisplayName
public abstract @ Nullable String getDisplayName ()
The area's display name.
getDisplayNameLanguageCode
public abstract @ Nullable String getDisplayNameLanguageCode ()
The area's display name language code.
getId
public abstract @ Nullable String getId ()
The area's Place ID.
getResourceName
public abstract @ Nullable String getResourceName ()
The area's resource name.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
