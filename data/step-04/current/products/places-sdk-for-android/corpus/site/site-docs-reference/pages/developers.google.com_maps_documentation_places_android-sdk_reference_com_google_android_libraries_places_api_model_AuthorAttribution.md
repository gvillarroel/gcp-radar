---
title: "AuthorAttribution \_|\_ Places SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AuthorAttribution
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AuthorAttribution
  title: "AuthorAttribution \_|\_ Places SDK for Android \_|\_ Google for Developers"
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
AuthorAttribution
public abstract class AuthorAttribution implements Parcelable
Information about the author of the data.
The author attribution field is only supported by Places API (New). Please enable your API key for the Places API (New) in the Google Cloud Console to access the data.
Summary
Nested types
public abstract class AuthorAttribution.Builder
Builder for AuthorAttribution .
Public constructors
AuthorAttribution ()
Public methods
static AuthorAttribution.Builder
builder ( String name)
Returns a AuthorAttribution.Builder .
abstract String
getName ()
Returns the name of the author.
abstract @ Nullable String
getPhotoUri ()
Returns the profile photo URI of the author.
abstract @ Nullable String
getUri ()
Returns the URI of the author.
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
AuthorAttribution
public AuthorAttribution ()
Public methods
builder
public static AuthorAttribution.Builder builder ( String name)
Returns a AuthorAttribution.Builder .
getName
public abstract String getName ()
Returns the name of the author.
getPhotoUri
public abstract @ Nullable String getPhotoUri ()
Returns the profile photo URI of the author.
getUri
public abstract @ Nullable String getUri ()
Returns the URI of the author.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
