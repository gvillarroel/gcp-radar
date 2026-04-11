---
title: "AddressComponent \_|\_ Places SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AddressComponent
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AddressComponent
  title: "AddressComponent \_|\_ Places SDK for Android \_|\_ Google for Developers"
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
AddressComponent
public abstract class AddressComponent implements Parcelable
Represents a component of an address, e.g., street number, postcode, city, etc.
Summary
Nested types
public abstract class AddressComponent.Builder
Builder for AddressComponent .
Public constructors
AddressComponent ()
Public methods
static AddressComponent.Builder
builder ( String name, List < String > types)
Returns an Builder
abstract String
getName ()
Name of the address component, e.g. "Sydney".
abstract @ Nullable String
getShortName ()
Short name of the address component, e.g. "AU".
abstract List < String >
getTypes ()
Types of the AddressComponent .
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
AddressComponent
public AddressComponent ()
Public methods
builder
public static AddressComponent.Builder builder ( String name, List < String > types)
Returns an Builder
getName
public abstract String getName ()
Name of the address component, e.g. "Sydney".
getShortName
public abstract @ Nullable String getShortName ()
Short name of the address component, e.g. "AU".
getTypes
public abstract List < String > getTypes ()
Types of the AddressComponent .
For a list of supported types, see Address Component Types .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
