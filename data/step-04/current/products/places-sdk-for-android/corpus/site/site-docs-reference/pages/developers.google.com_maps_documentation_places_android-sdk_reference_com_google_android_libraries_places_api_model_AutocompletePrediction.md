---
title: "AutocompletePrediction \_|\_ Places SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AutocompletePrediction
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AutocompletePrediction
  title: "AutocompletePrediction \_|\_ Places SDK for Android \_|\_ Google for Developers"
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
AutocompletePrediction
public abstract class AutocompletePrediction implements Parcelable
Represents an autocomplete suggestion of a place, based on a particular text query.
An AutocompletePrediction includes the description of the suggested place as well as basic details including place ID and types.
Summary
Nested types
public abstract class AutocompletePrediction.Builder
Builder for AutocompletePrediction .
Public constructors
AutocompletePrediction ()
Public methods
static AutocompletePrediction.Builder
builder ( String placeId)
Returns a Builder .
abstract @ Nullable Integer
getDistanceMeters ()
Returns the straight-line distance between the place being referred to by getPlaceId and the origin specified in the request.
SpannableString
getFullText (@ Nullable CharacterStyle matchStyle)
The full text of a place.
abstract String
getPlaceId ()
Returns the place ID of the place being referred to by this prediction.
SpannableString
getPrimaryText (@ Nullable CharacterStyle matchStyle)
Returns the primary text of a place.
SpannableString
getSecondaryText (@ Nullable CharacterStyle matchStyle)
Returns the secondary text of a place.
abstract List < String >
getTypes ()
Returns the list of place types associated with the place referred to by getPlaceId .
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
AutocompletePrediction
public AutocompletePrediction ()
Public methods
builder
public static AutocompletePrediction.Builder builder ( String placeId)
Returns a Builder .
Any values, besides placeId , that are not explicitly set, default to an empty String or List.
getDistanceMeters
public abstract @ Nullable Integer getDistanceMeters ()
Returns the straight-line distance between the place being referred to by getPlaceId and the origin specified in the request.
Will return null if the request did not include an origin, or if the predicted place is of a certain type, such as route . See more details about the distance_meters result field .
getFullText
public SpannableString getFullText (@ Nullable CharacterStyle matchStyle)
The full text of a place. This is a combination of the primary text and the secondary text.
Example: "Eiffel Tower, Avenue Anatole France, Paris, France"
If you do not wish to highlight matches, you can pass null.
getPlaceId
public abstract String getPlaceId ()
Returns the place ID of the place being referred to by this prediction. For more information on place IDs, see the place ID overview .
getPrimaryText
public SpannableString getPrimaryText (@ Nullable CharacterStyle matchStyle)
Returns the primary text of a place. This will usually be the name of the place.
Example: "Eiffel Tower", "123 Pitt Street"
See getFullText for more information on formatting.
getSecondaryText
public SpannableString getSecondaryText (@ Nullable CharacterStyle matchStyle)
Returns the secondary text of a place. This provides extra context on the place, and can be used as a second line when showing autocomplete predictions.
Example: "Avenue Anatole France, Paris, France", "Sydney, New South Wales"
See getFullText for more information on formatting.
getTypes
public abstract List < String > getTypes ()
Returns the list of place types associated with the place referred to by getPlaceId . For more information on place types, see the place types overview .
This list should not be modified.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],["`AutocompletePrediction` represents a place suggestion based on a text query. Key actions include using `builder` to create instances with a `placeId`, retrieving the `placeId` to identify the suggested place, and obtaining `getFullText`, `getPrimaryText`, and `getSecondaryText` for detailed place descriptions. It also provides `getTypes` to list the place types and `getDistanceMeters` for the distance to the origin. The `getPlaceTypes` method is deprecated, and instead use `getTypes`.\n"]]
