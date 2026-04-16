---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.780Z"
product_name: "Places SDK for Android"
product_slug: "places-sdk-for-android"
feature_name: "ConsumerAlert.getVisitDate()"
feature_slug: "consumeralert-getvisitdate"
latest_feature_date: "2025-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/android-sdk/attributions"
  - "https://developers.google.com/maps/documentation/places/android-sdk/text-search"
  - "https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete"
  - "https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AccessibilityOptions"
keywords:
  - "consumeralert"
  - "getvisitdate"
  - "the"
  - "method"
  - "returns"
  - "visit"
  - "date"
  - "for"
---

# ConsumerAlert.getVisitDate()

Product: Places SDK for Android
Coverage: MEDIUM

## Step 02 Summary

The getVisitDate() method returns the visit date for a ConsumerAlert.

## Extended Definition

The getVisitDate() method returns the visit date for a ConsumerAlert.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/android-sdk/attributions](https://developers.google.com/maps/documentation/places/android-sdk/attributions)
- [https://developers.google.com/maps/documentation/places/android-sdk/text-search](https://developers.google.com/maps/documentation/places/android-sdk/text-search)
- [https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete)
- [https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AccessibilityOptions](https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AccessibilityOptions)

## Supporting Pages

### Policies and attributions for Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/attributions](https://developers.google.com/maps/documentation/places/android-sdk/attributions)
- Source ID: `site-docs-root-2`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["Applications using the Places SDK for Android must display publicly available Terms of Use and a Privacy Policy, including Google's terms and privacy policy.
- Note: The following updated attribution requirements now use "Google Maps" instead of only "Google." We acknowledge that your existing implementations may use the attribution of "Google," in alignment with prior guidance, and you may continue using "Google" as an attribution for now.
- The method returns an HTML character sequence, or an empty string if there are no attributions to display. // Get the photo metadata from the Place object.
- The method returns a List of String objects, or null if there are no attributions to display.

### Text Search (New) \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/text-search](https://developers.google.com/maps/documentation/places/android-sdk/text-search)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Place.Field.WEBSITE URI The following fields trigger the Text Search Enterprise Plus SKU : Place.Field.ALLOWS DOGS Place.Field.CURBSIDE PICKUP Place.Field.DELIVERY Place.Field.DINE IN Place.Field.EDITORIAL SUMMARY Place.Field.EV CHARGE OPTIONS Place.Field.FUEL OPTIONS Place.Field.GOOD FOR CHILDREN Place.Field.GOOD FOR GROUPS Place.Field.GOOD FOR WATCHING SPORTS Place.Field.LIVE MUSIC Place.Field.MENU FOR CHILDREN Place.Field.OUTDOOR SEATING Place.Field.PARKING OPTIONS Place.Field.PAYMENT OPTIONS Place.Field.RESERVABLE Place.Field.RESTROOM Place.Field.REVIEWS Place.Field.SERVES BEER Place.Field.SERVES BREAKFAST Place.Field.SERVES BRUNCH Place.Field.SERVES COCKTAILS Place.Field.SERVES COFFEE Place.Field.SERVES DESSERT Place.Field.SERVES DINNER Place.Field.SERVES LUNCH Place.Field.SERVES VEGETARIAN FOOD Place.Field.SERVES WINE Place.Field.TAKEOUT To set the field list parameter, call the setPlaceFields() method when building the SearchByTextRequest object.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["Text Search retrieves place information via a text string, supporting various queries like business names, addresses, and phone numbers.
- For more examples of accessing data in a Place object, see Access Place object data fields Pagination Text Search's SearchByTextResponse class provides access to text search result pagination through its getPagination() method, which returns a Pagination object.
- Text query The text string on which to search, for example: "restaurant", "123 Main Street", or "best place to visit in San Francisco".

### Autocomplete (New) \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The Autocomplete feature returns place predictions based on a text query.
- For each predicted place, you can call the following methods to retrieve place details: getFullText(CharacterStyle) returns the full text of a place description.
- For general information about place IDs, see the Place ID overview . getTypes() returns the list of place types associated with this place. getDistanceMeters() returns the straight-line distance in meters between this place and the origin specified in the request.
- The Autocomplete (New) service returns candidate matches based on this string and orders results based on their perceived relevance.

### AccessibilityOptions \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AccessibilityOptions](https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AccessibilityOptions)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Inherited Constants From android.os.Parcelable static final int CONTENTS FILE DESCRIPTOR = 1 static final int PARCELABLE STABILITY LOCAL = 0 static final int PARCELABLE STABILITY VINTF = 1 static final int PARCELABLE WRITE RETURN VALUE = 1 Inherited methods From android.os.Parcelable abstract int describeContents () int getStability () abstract void writeToParcel ( Parcel p, int p1) Public constructors AccessibilityOptions public AccessibilityOptions () Public methods builder public static AccessibilityOptions.Builder builder () Returns a Builder of AccessibilityOptions . getWheelchairAccessibleEntrance public abstract Place.BooleanPlaceAttributeValue getWheelchairAccessibleEntrance () Returns the BooleanPlaceAttributeValue for a wheelchair accessible entrance. getWheelchairAccessibleParking public abstract Place.BooleanPlaceAttributeValue getWheelchairAccessibleParking () Returns the BooleanPlaceAttributeValue for a wheelchair accessible parking. getWheelchairAccessibleRestroom public abstract Place.BooleanPlaceAttributeValue getWheelchairAccessibleRestroom () Returns the BooleanPlaceAttributeValue for a wheelchair accessible restroom. getWheelchairAccessibleSeating public abstract Place.BooleanPlaceAttributeValue getWheelchairAccessibleSeating () Returns the BooleanPlaceAttributeValue for a wheelchair accessible seating.
- Public constructors AccessibilityOptions () Public methods static AccessibilityOptions.Builder builder () Returns a Builder of AccessibilityOptions . abstract Place.BooleanPlaceAttributeValue getWheelchairAccessibleEntrance () Returns the BooleanPlaceAttributeValue for a wheelchair accessible entrance. abstract Place.BooleanPlaceAttributeValue getWheelchairAccessibleParking () Returns the BooleanPlaceAttributeValue for a wheelchair accessible parking. abstract Place.BooleanPlaceAttributeValue getWheelchairAccessibleRestroom () Returns the BooleanPlaceAttributeValue for a wheelchair accessible restroom. abstract Place.BooleanPlaceAttributeValue getWheelchairAccessibleSeating () Returns the BooleanPlaceAttributeValue for a wheelchair accessible seating.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- AccessibilityOptions public abstract class AccessibilityOptions implements Parcelable Information about the accessibility options a place offers.

