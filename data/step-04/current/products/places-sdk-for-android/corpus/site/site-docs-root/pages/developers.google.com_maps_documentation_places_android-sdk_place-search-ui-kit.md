---
title: "Places SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/place-search-ui-kit
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/place-search-ui-kit
  title: "Places SDK for Android \_|\_ Google for Developers"
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
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Select platform:
Android
iOS
JavaScript
Place Search component
The Place Search component of the Places UI Kit renders the results of a place search in a list.
You can customize the Place Search list. You can specify:
The content to display
Media size in vertical orientation
Text truncation
The orientation
Theme overrides that match your brand and app's design language
The position of the attribution
Whether a place is selectable
You can also customize the request to perform either a SearchByTextRequest or a SearchNearbyRequest .
Billing
You are billed each time the configureFromSearchByTextRequest() or configureFromSearchNearbyRequest() binding value is changed.
Add Place Search to your app
Tip: See the complete example .
Use the Place Search widget by adding the PlaceSearchFragment fragment to your layout.
When you want your app to load a text search or nearby search result, call configureFromSearchByTextRequest() or configureFromSearchNearbyRequest() with the request.
Kotlin
fragment . configureFromSearchByTextRequest ( searchByTextRequest )
// or fragment.configureFromSearchNearbyRequest(searchNearbyRequest) for nearby search
Java
fragment . configureFromSearchByTextRequest ( searchByTextRequest )
// or fragment.configureFromSearchNearbyRequest(searchNearbyRequest) for nearby search
You can also add an optional PlaceSearchFragmentListener to the component to receive callbacks when the component loads, a place is selected (if set to be selectable) or when there is an error loading the component.
Kotlin
fragment . registerListener (
object : PlaceSearchFragmentListener {
override fun onLoad ( places : List<Place> ) {...}
override fun onRequestError ( e : Exception ) {...}
override fun onPlaceSelected ( place : Place ) {...}
}
)
Java
fragment . registerListener (
new PlaceSearchFragmentListener () {
@Override public void onLoad ( List < ? extends Place > places ) {...}
@Override public void onRequestError ( Exception e ) {...}
@Override public void onPlaceSelected ( Place place ) {...}
}
)
Customize the Place Search component
Customize content
You must specify which content your component will display.
Note: The Place name will always appear.
This example configures the component to display the address and rating of the Place.
Kotlin
val fragment = PlaceSearchFragment . newInstance ( listOf ( Content . ADDRESS , Content . RATING ))
Java
PlaceSearchFragment fragment = PlaceSearchFragment . newInstance ( listOf ( Content . ADDRESS , Content . RATING ));
You can also optionally customize the following aspects of the content that appears in your Place Search component:
PlaceSearchFragment.Content : The content shown in the component.
mediaSize : The photo size in the vertical orientation of the fragment. The default is SMALL .
preferTruncation : Whether to truncate text of each Place Details view.
attributionPosition : Whether to show the Google Maps attribution at the top or bottom of the component.
selectable : Whether each place in the list is selectable.
Add your customization configuration to PlaceSearchFragment .
Kotlin
fragment . preferTruncation = false
fragment . attributionPosition = AttributionPosition . BOTTOM
fragment . mediaSize = MediaSize . SMALL
fragment . selectable = true
Java
fragment . setPreferTruncation ( false )
fragment . setAttributionPosition ( AttributionPosition . BOTTOM )
fragment . setMediaSize ( MediaSize . SMALL )
fragment . setSelectable ( true )
Customize orientation
The default orientation is vertical. For horizontal orientation, specify Orientation.HORIZONTAL in PlaceSearchFragment.newInstance() .
Kotlin
PlaceSearchFragment . newInstance (
PlaceSearchFragment . ALL_CONTENT ,
Orientation . HORIZONTAL
)
Java
PlaceSearchFragment . newInstance (
PlaceSearchFragment . ALL_CONTENT ,
Orientation . HORIZONTAL
)
Customize the theme
When instantiating a fragment, you can specify a theme that overrides any of the default style attributes. You can customize the colors, typography, spacing, borders, and corners of your Place Details component. The default is PlacesMaterialTheme .
Any theme attributes that are not overridden use the default styles.
The Places UI Kit provides a dark theme by default, so you may need to customize both dark and light themes. To customize the dark theme, add an entry for the color in values-night/colors.xml .
See the Custom styling section for more information on theming.
Examples
Instantiate the Place Search component
Kotlin
val fragment : PlaceSearchFragment =
PlaceSearchFragment . newInstance ( PlaceSearchFragment . STANDARD_CONTENT )
fragment . preferTruncation = false
fragment . attributionPosition = AttributionPosition . BOTTOM
fragment . mediaSize = MediaSize . SMALL
fragment . selectable = true
fragment . registerListener (
object : PlaceSearchFragmentListener {
override fun onLoad ( places : List<Place> ) {...}
override fun onRequestError ( e : Exception ) {...}
override fun onPlaceSelected ( place : Place ) {...}
}
)
supportFragmentManager
. beginTransaction ()
. replace ( R . id . fragment_container , fragment )
. commitNow ()
fragment . configureFromSearchByTextRequest ( searchByTextRequest )
Java
PlaceSearchFragment fragment = PlaceSearchFragment . newInstance ( PlaceSearchFragment . STANDARD_CONTENT );
fragment . setPreferTruncation ( false )
fragment . setAttributionPosition ( AttributionPosition . BOTTOM )
fragment . setMediaSize ( MediaSize . SMALL )
fragment . setSelectable ( true )
fragment . registerListener (
new PlaceSearchFragmentListener () {
@Override public void onLoad ( List < ? extends Place > places ) {...}
@Override public void onRequestError ( Exception e ) {...}
@Override public void onPlaceSelected ( Place place ) {...}
}
)
getSupportFragmentManager ()
. beginTransaction ()
. replace ( R . id . fragment_container , fragment )
. commitNow ();
fragment . configureFromSearchByTextRequest ( searchByTextRequest )
Customize the theme
The Places UI Kit provides a dark theme by default, so you may need to customize both dark and light themes. To customize the dark theme, add an entry for the color in values-night/colors.xml .
< style name = "CustomizedTheme" parent = "PlacesMaterialTheme" >
< item name = "placesColorPrimary" > @color / app_primary_color < / item >
< item name = "placesColorOnSurface" > @color / app_color_on_surface < / item >
< item name = "placesColorOnSurfaceVariant" > @color / app_color_on_surface < / item >
< item name = "placesTextAppearanceBodySmall" > @style / app_text_appearence_small < / item >
< item name = "placesCornerRadius" > 20 dp < / item >
< / style >
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
