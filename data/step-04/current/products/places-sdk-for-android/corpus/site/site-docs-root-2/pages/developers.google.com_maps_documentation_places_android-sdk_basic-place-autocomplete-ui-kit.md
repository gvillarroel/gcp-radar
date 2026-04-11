---
title: "Places SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/basic-place-autocomplete-ui-kit
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/basic-place-autocomplete-ui-kit
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
Basic Place Autocomplete component
The Basic Place Autocomplete component of the Places UI Kit lets you add an individual UI component that returns a place ID when a user selects a place. The component is a full screen cover that provides a search bar for users to enter a query. As the user types, a list of autocomplete results will be shown below the search bar. When the user taps on a place, a place object with only place ID is returned to the developer. This component is customizable.
The Basic Place Autocomplete component has the following customization options: list density, and whether to include location icons. Use AutocompleteUICustomization to customize the component.
You can use the Basic Place Autocomplete component independently or in conjunction with other Google Maps Platform APIs and services.
Billing
You are billed each time the component is opened and a query is made. You won't be billed again for that session unless the session expires or a place is selected from the list.
Add the Basic Autocomplete component to your app
Set the autocomplete filter parameters (for example, the types to return, the country to limit results to, the region coordinates for results, the origin of the request to display distance information, if available) as you would to use Place Autocomplete (New) without the Places UI Kit. See the Place Autocomplete (New) documentation for full instructions and an example of the code to create an autocomplete filter .
Once you've created your autocomplete filter, add your UI customizations. See customization options and instructions.
Kotlin
AutocompleteUiCustomization . create (
listDensity = AutocompleteListDensity . MULTI_LINE ,
listItemIcon = AutocompleteUiIcon . noIcon (),
theme = R . style . CustomizedTheme ,
)
Java
AutocompleteUiCustomization . builder ()
. listItemIcon ( AutocompleteUiIcon . noIcon ())
. listDensity ( AutocompleteListDensity . MULTI_LINE )
. theme ( R . style . CustomizedTheme )
. build ()
See the full example .
Customize the Basic Autocomplete component
Customize content
List density
You can choose to either display a two-line list or a multiline list. Use the options in AutocompleteListDensity ( TWO_LINE or MULTI_LINE ) in the AutocompleteUICustomization class. If you don't specify the list density, the component will display a two-line list.
Location icon
You can choose whether to display a default place icon on the results list. Use the options in AutocompleteUIIcon ( listItemDefaultIcon or noIcon ) in the AutocompleteUICustomization class.
Customize the theme
You can specify a theme that overrides any of the default style attributes. You can customize the colors, typography, spacing, borders, and corners of your Place Details component. The default is PlacesMaterialTheme .
Any theme attributes that are not overridden use the default styles.
The Places UI Kit provides a dark theme by default, so you may need to customize both dark and light themes. To customize the dark theme, add an entry for the color in values-night/colors.xml .
See the Custom styling section for more information on theming.
Add content and theme customizations to the Basic Autocomplete component
Use the AutocompleteUICustomization class to customize the Basic Autocomplete component.
Kotlin
. setAutocompleteUiCustomization (
AutocompleteUiCustomization . create (
listDensity = AutocompleteListDensity . MULTI_LINE ,
listItemIcon = AutocompleteUiIcon . noIcon (),
theme = R . style . CustomizedTheme ,
)
)
Java
. setAutocompleteUiCustomization (
AutocompleteUiCustomization . builder ()
. listItemIcon ( AutocompleteUiIcon . noIcon ())
. listDensity ( AutocompleteListDensity . MULTI_LINE )
. theme ( R . style . CustomizedTheme )
. build ()
)
Example
Add a custom Basic Autocomplete component.
Kotlin
val basicPlaceAutocompleteActivityResultLauncher :
ActivityResultLauncher<Intent> =
registerForActivityResult ( ActivityResultContracts . StartActivityForResult ()) {
result : ActivityResult - >
val intent = result . data
val place : Place? = BasicPlaceAutocomplete . getPlaceFromIntent ( intent !! )
val status : Status? =
BasicPlaceAutocomplete . getResultStatusFromIntent ( intent !! )
// ...
}
val autocompleteIntent : Intent =
BasicPlaceAutocomplete . createIntent ( this ) {
setInitialQuery ( "INSERT_QUERY_TEXT" )
setOrigin ( LatLng ( 10.0 , 10.0 ))
// ...
setAutocompleteUiCustomization (
AutocompleteUiCustomization . create (
listDensity = AutocompleteListDensity . MULTI_LINE ,
listItemIcon = AutocompleteUiIcon . noIcon (),
theme = R . style . CustomizedTheme ,
)
)
}
basicPlaceAutocompleteActivityResultLauncher . launch ( autocompleteIntent )
Java
ActivityResultLauncher<Intent> basicPlaceAutocompleteActivityResultLauncher =
registerForActivityResult (
new ActivityResultContracts . StartActivityForResult (),
new ActivityResultCallback<ActivityResult> () {
@Override
public void onActivityResult ( ActivityResult result ) {
Intent intent = result . getData ();
if ( intent != null ) {
Place place =
BasicPlaceAutocomplete . getPlaceFromIntent ( intent );
Status status =
BasicPlaceAutocomplete . getResultStatusFromIntent ( intent );
//...
}
}
}
);
Intent basicPlaceAutocompleteIntent =
new BasicPlaceAutocomplete . IntentBuilder ()
. setInitialQuery ( "INSERT_QUERY_TEXT" )
. setOrigin ( new LatLng ( 10.0 , 10.0 ))
//...
. setAutocompleteUiCustomization (
AutocompleteUiCustomization . builder ()
. listItemIcon ( AutocompleteUiIcon . noIcon ())
. listDensity ( AutocompleteListDensity . MULTI_LINE )
. theme ( R . style . CustomizedTheme )
. build ())
. build ( this );
basicPlaceAutocompleteActivityResultLauncher . launch ( basicPlaceAutocompleteIntent );
Customize the theme
The Places UI Kit provides a dark theme by default, so you may need to customize both dark and light themes. To customize the dark theme, add an entry for the color in values-night/colors.xml .
<style name="CustomizedTheme" parent="PlacesMaterialTheme">
<item name="placesColorPrimary">@color/app_primary_color</item>
<item name="placesColorOnSurface">@color/app_color_on_surface</item>
<item name="placesColorOnSurfaceVariant">@color/app_color_on_surface</item>
<item name="placesTextAppearanceBodySmall">@style/app_text_appearence_small</item>
<item name="placesCornerRadius">20dp</item>
</style>
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
