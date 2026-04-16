---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.793Z"
product_name: "Places SDK for Android"
product_slug: "places-sdk-for-android"
feature_name: "Place Details wheelchair accessible entrance field"
feature_slug: "place-details-wheelchair-accessible-entrance-field"
latest_feature_date: "2023-04-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/android-sdk/details-place"
  - "https://developers.google.com/maps/documentation/places/android-sdk/place-details-ui-kit"
  - "https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AccessibilityOptions"
  - "https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AccessibilityOptions.Builder"
keywords:
  - "place"
  - "details"
  - "wheelchair"
  - "accessible"
  - "entrance"
  - "field"
  - "now"
  - "exposes"
---

# Place Details wheelchair accessible entrance field

Product: Places SDK for Android
Coverage: MEDIUM

## Step 02 Summary

Place Details now exposes a field for wheelchair accessible entrances.

## Extended Definition

Place Details now exposes a field for wheelchair accessible entrances.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/android-sdk/details-place](https://developers.google.com/maps/documentation/places/android-sdk/details-place)
- [https://developers.google.com/maps/documentation/places/android-sdk/place-details-ui-kit](https://developers.google.com/maps/documentation/places/android-sdk/place-details-ui-kit)
- [https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AccessibilityOptions](https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AccessibilityOptions)
- [https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AccessibilityOptions.Builder](https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AccessibilityOptions.Builder)

## Supporting Pages

### Place Details (New) \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/details-place](https://developers.google.com/maps/documentation/places/android-sdk/details-place)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Place.Field.PLUS CODE Place.Field.SHORT FORMATTED ADDRESS Place.Field.TYPES Place.Field.VIEWPORT The following fields trigger the Place Details Pro SKU : Place.Field.ACCESSIBILITY OPTIONS Use instead of Place.Field.WHEELCHAIR ACCESSIBLE ENTRANCE (deprecated).
- Place.Field.WEBSITE URI The following fields trigger the Place Details Enterprise Plus SKU : Place.Field.ALLOWS DOGS Place.Field.CURBSIDE PICKUP Place.Field.DELIVERY Place.Field.DINE IN Place.Field.EDITORIAL SUMMARY Place.Field.EV CHARGE OPTIONS Place.Field.FUEL OPTIONS Place.Field.GOOD FOR CHILDREN Place.Field.GOOD FOR GROUPS Place.Field.GOOD FOR WATCHING SPORTS Place.Field.LIVE MUSIC Place.Field.MENU FOR CHILDREN Place.Field.OUTDOOR SEATING Place.Field.PARKING OPTIONS Place.Field.PAYMENT OPTIONS Place.Field.RESERVABLE Place.Field.RESTROOM Place.Field.REVIEWS Place.Field.SERVES BEER Place.Field.SERVES BREAKFAST Place.Field.SERVES BRUNCH Place.Field.SERVES COCKTAILS Place.Field.SERVES COFFEE Place.Field.SERVES DESSERT Place.Field.SERVES DINNER Place.Field.SERVES LUNCH Place.Field.SERVES VEGETARIAN FOOD Place.Field.SERVES WINE Place.Field.TAKEOUT Optional parameters The optional parameters for FetchPlaceRequest are: Region code The region code used to format the response, specified as a two-character CLDR code value.
- Place.Field.PRIMARY TYPE Place.Field.PRIMARY TYPE DISPLAY NAME Place.Field.SUB DESTINATIONS Place.Field.UTC OFFSET The following fields trigger the Place Details Enterprise SKU : Place.Field.CURRENT OPENING HOURS Place.Field.CURRENT SECONDARY OPENING HOURS Place.Field.INTERNATIONAL PHONE NUMBER Use instead of Place.Field.PHONE NUMBER , which is deprecated.
- Place Details (New) requests You can request place details by calling PlacesClient.fetchPlace() and passing a FetchPlaceRequest object containing a place ID and field list , as well as any optional parameters : // Define a place ID. final String placeId = "INSERT PLACE ID HERE" ; // Specify the list of fields to return. final List<Place .

### Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/place-details-ui-kit](https://developers.google.com/maps/documentation/places/android-sdk/place-details-ui-kit)
- Source ID: `site-docs-root`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- Compact view Full view Place photo Lightbox enabled for full-screen photo enlargement Place address Rating and rating count Place type Price Accessible entrance information Open now status Place photo collage Place address Rating and rating count Place type Price Accessibility info Open now status Open hours Editorial summary Website Phone number Reviews rendered in dedicated tab Plus code Feature list, rendered in a dedicated tab Type-specific highlights, such as gas prices for gas stations Billing When using the Place Details UI Kit, you are billed for each time the .loadWithPlaceId() , .loadWithResourceName() , or loadWithCoordinates() method is called.
- To customize the dark theme, add an entry for the color in values-night/colors.xml . < style name = "CustomizedPlaceDetailsTheme" parent = "PlacesMaterialTheme" > < item name = "placesColorPrimary" > @color / app primary color < / item > < item name = "placesColorOnSurface" > @color / app color on surface < / item > < item name = "placesColorOnSurfaceVariant" > @color / app color on surface < / item > < item name = "placesTextAppearanceBodySmall" > @style / app text appearence small < / item > < item name = "placesCornerRadius" > 20 dp < / item > < / style > Use standard content This sample uses the standard content. val fragmentStandardContent = PlaceDetailsCompactFragment.newInstance( PlaceDetailsCompactFragment.STANDARD CONTENT, orientation, R.style.CustomizedPlaceDetailsTheme ) Customize specific content This sample selects only the address, accessible entrance, and media Content options for a compact view, and renders them with the CustomizedPlaceDetailsTheme . val placeDetailsFragment = PlaceDetailsCompactFragment.newInstance( orientation, listOf( Content.ADDRESS, Content.ACCESSIBLE ENTRANCE, Content.MEDIA ), R.style.CustomizedPlaceDetailsTheme ) Use all content This sample uses all Content options of a compact view. val fragmentAllContent = PlaceDetailsCompactFragment.newInstance( orientation, PlaceDetailsCompactFragment.ALL CONTENT, R.style.CustomizedPlaceDetailsTheme ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- LENGTH SHORT ). show () } }) } // We add the fragment to our layout&#39;s container view. // commitNow() is used to ensure the fragment is immediately added and available, // which is important because we need to call a method on it right after. supportFragmentManager . beginTransaction () . replace ( binding . placeDetailsContainer . id , fragment ) . commitNow () // This is the key step : After adding the fragment, we call loadWithPlaceId // to trigger the data loading process for the selected place. // We use post to ensure this runs after the layout has been measured, // which can prevent potential timing issues. binding . root . post { fragment . loadWithPlaceId ( placeId ) } } / Hides the place details view and clears the selected place ID from the ViewModel. / private fun dismissPlaceDetails () { binding . placeDetailsWrapper . visibility = View .
- LENGTH SHORT ). show () } }) } // We add the fragment to our layout&#39;s container view. // commitNow() is used to ensure the fragment is immediately added and available, // which is important because we need to call a method on it right after. supportFragmentManager . beginTransaction () . replace ( binding . placeDetailsContainer . id , fragment ) . commitNow () // This is the key step : After adding the fragment, we call loadWithPlaceId // to trigger the data loading process for the selected place. // We use post to ensure this runs after the layout has been measured, // which can prevent potential timing issues. binding . root . post { fragment . loadWithPlaceId ( placeId ) } } Java PlaceDetailsCompactFragment fragment = PlaceDetailsCompactFragment . newInstance ( Orientation .

### AccessibilityOptions \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AccessibilityOptions](https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AccessibilityOptions)
- Source ID: `site-docs-reference`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Inherited Constants From android.os.Parcelable static final int CONTENTS FILE DESCRIPTOR = 1 static final int PARCELABLE STABILITY LOCAL = 0 static final int PARCELABLE STABILITY VINTF = 1 static final int PARCELABLE WRITE RETURN VALUE = 1 Inherited methods From android.os.Parcelable abstract int describeContents () int getStability () abstract void writeToParcel ( Parcel p, int p1) Public constructors AccessibilityOptions public AccessibilityOptions () Public methods builder public static AccessibilityOptions.Builder builder () Returns a Builder of AccessibilityOptions . getWheelchairAccessibleEntrance public abstract Place.BooleanPlaceAttributeValue getWheelchairAccessibleEntrance () Returns the BooleanPlaceAttributeValue for a wheelchair accessible entrance. getWheelchairAccessibleParking public abstract Place.BooleanPlaceAttributeValue getWheelchairAccessibleParking () Returns the BooleanPlaceAttributeValue for a wheelchair accessible parking. getWheelchairAccessibleRestroom public abstract Place.BooleanPlaceAttributeValue getWheelchairAccessibleRestroom () Returns the BooleanPlaceAttributeValue for a wheelchair accessible restroom. getWheelchairAccessibleSeating public abstract Place.BooleanPlaceAttributeValue getWheelchairAccessibleSeating () Returns the BooleanPlaceAttributeValue for a wheelchair accessible seating.
- Public constructors AccessibilityOptions () Public methods static AccessibilityOptions.Builder builder () Returns a Builder of AccessibilityOptions . abstract Place.BooleanPlaceAttributeValue getWheelchairAccessibleEntrance () Returns the BooleanPlaceAttributeValue for a wheelchair accessible entrance. abstract Place.BooleanPlaceAttributeValue getWheelchairAccessibleParking () Returns the BooleanPlaceAttributeValue for a wheelchair accessible parking. abstract Place.BooleanPlaceAttributeValue getWheelchairAccessibleRestroom () Returns the BooleanPlaceAttributeValue for a wheelchair accessible restroom. abstract Place.BooleanPlaceAttributeValue getWheelchairAccessibleSeating () Returns the BooleanPlaceAttributeValue for a wheelchair accessible seating.
- Home Products Google Maps Platform Documentation Android Places SDK for Android Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.
- AccessibilityOptions public abstract class AccessibilityOptions implements Parcelable Information about the accessibility options a place offers.

### "AccessibilityOptions.Builder \_|\_ Places SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AccessibilityOptions.Builder](https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AccessibilityOptions.Builder)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Summary Public constructors Builder () Public methods abstract AccessibilityOptions build () abstract Place.BooleanPlaceAttributeValue getWheelchairAccessibleEntrance () abstract Place.BooleanPlaceAttributeValue getWheelchairAccessibleParking () abstract Place.BooleanPlaceAttributeValue getWheelchairAccessibleRestroom () abstract Place.BooleanPlaceAttributeValue getWheelchairAccessibleSeating () abstract AccessibilityOptions.Builder setWheelchairAccessibleEntrance ( Place.BooleanPlaceAttributeValue wheelchairAccessibleEntrance ) abstract AccessibilityOptions.Builder setWheelchairAccessibleParking ( Place.BooleanPlaceAttributeValue wheelchairAccessibleParking ) abstract AccessibilityOptions.Builder setWheelchairAccessibleRestroom ( Place.BooleanPlaceAttributeValue wheelchairAccessibleRestroom ) abstract AccessibilityOptions.Builder setWheelchairAccessibleSeating ( Place.BooleanPlaceAttributeValue wheelchairAccessibleSeating ) Public constructors Builder public Builder () Public methods build public abstract AccessibilityOptions build () getWheelchairAccessibleEntrance public abstract Place.BooleanPlaceAttributeValue getWheelchairAccessibleEntrance () getWheelchairAccessibleParking public abstract Place.BooleanPlaceAttributeValue getWheelchairAccessibleParking () getWheelchairAccessibleRestroom public abstract Place.BooleanPlaceAttributeValue getWheelchairAccessibleRestroom () getWheelchairAccessibleSeating public abstract Place.BooleanPlaceAttributeValue getWheelchairAccessibleSeating () setWheelchairAccessibleEntrance public abstract AccessibilityOptions.Builder setWheelchairAccessibleEntrance ( Place.BooleanPlaceAttributeValue wheelchairAccessibleEntrance ) setWheelchairAccessibleParking public abstract AccessibilityOptions.Builder setWheelchairAccessibleParking ( Place.BooleanPlaceAttributeValue wheelchairAccessibleParking ) setWheelchairAccessibleRestroom public abstract AccessibilityOptions.Builder setWheelchairAccessibleRestroom ( Place.BooleanPlaceAttributeValue wheelchairAccessibleRestroom ) setWheelchairAccessibleSeating public abstract AccessibilityOptions.Builder setWheelchairAccessibleSeating ( Place.BooleanPlaceAttributeValue wheelchairAccessibleSeating ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Products Google Maps Platform Documentation Android Places SDK for Android Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.
- For details, see the Google Developers Site Policies .

