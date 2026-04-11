---
title: "AccessibilityOptions \_|\_ Places SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AccessibilityOptions
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AccessibilityOptions
  title: "AccessibilityOptions \_|\_ Places SDK for Android \_|\_ Google for Developers"
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
AccessibilityOptions
public abstract class AccessibilityOptions implements Parcelable
Information about the accessibility options a place offers.
Summary
Nested types
public abstract class AccessibilityOptions.Builder
Builder for AccessibilityOptions .
Public constructors
AccessibilityOptions ()
Public methods
static AccessibilityOptions.Builder
builder ()
Returns a Builder of AccessibilityOptions .
abstract Place.BooleanPlaceAttributeValue
getWheelchairAccessibleEntrance ()
Returns the BooleanPlaceAttributeValue for a wheelchair accessible entrance.
abstract Place.BooleanPlaceAttributeValue
getWheelchairAccessibleParking ()
Returns the BooleanPlaceAttributeValue for a wheelchair accessible parking.
abstract Place.BooleanPlaceAttributeValue
getWheelchairAccessibleRestroom ()
Returns the BooleanPlaceAttributeValue for a wheelchair accessible restroom.
abstract Place.BooleanPlaceAttributeValue
getWheelchairAccessibleSeating ()
Returns the BooleanPlaceAttributeValue for a wheelchair accessible seating.
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
AccessibilityOptions
public AccessibilityOptions ()
Public methods
builder
public static AccessibilityOptions.Builder builder ()
Returns a Builder of AccessibilityOptions .
getWheelchairAccessibleEntrance
public abstract Place.BooleanPlaceAttributeValue getWheelchairAccessibleEntrance ()
Returns the BooleanPlaceAttributeValue for a wheelchair accessible entrance.
getWheelchairAccessibleParking
public abstract Place.BooleanPlaceAttributeValue getWheelchairAccessibleParking ()
Returns the BooleanPlaceAttributeValue for a wheelchair accessible parking.
getWheelchairAccessibleRestroom
public abstract Place.BooleanPlaceAttributeValue getWheelchairAccessibleRestroom ()
Returns the BooleanPlaceAttributeValue for a wheelchair accessible restroom.
getWheelchairAccessibleSeating
public abstract Place.BooleanPlaceAttributeValue getWheelchairAccessibleSeating ()
Returns the BooleanPlaceAttributeValue for a wheelchair accessible seating.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
