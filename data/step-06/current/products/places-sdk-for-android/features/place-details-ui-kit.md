---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.785Z"
product_name: "Places SDK for Android"
product_slug: "places-sdk-for-android"
feature_name: "Place Details UI Kit"
feature_slug: "place-details-ui-kit"
latest_feature_date: "2025-05-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/android-sdk/place-details-ui-kit"
  - "https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-custom-styling"
  - "https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-overview"
  - "https://developers.google.com/maps/documentation/places/android-sdk/details-place"
keywords:
  - "place"
  - "details"
  - "ui"
  - "kit"
  - "the"
  - "provides"
  - "components"
  - "for"
---

# Place Details UI Kit

Product: Places SDK for Android
Coverage: MEDIUM

## Step 02 Summary

The Place Details UI Kit provides UI components for displaying place details in an app; The Place Details UI Kit was available as an experimental UI component for displaying place details.

## Extended Definition

The Place Details UI Kit provides UI components for displaying place details in an app; The Place Details UI Kit was available as an experimental UI component for displaying place details.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/android-sdk/place-details-ui-kit](https://developers.google.com/maps/documentation/places/android-sdk/place-details-ui-kit)
- [https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-custom-styling](https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-custom-styling)
- [https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-overview](https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-overview)
- [https://developers.google.com/maps/documentation/places/android-sdk/details-place](https://developers.google.com/maps/documentation/places/android-sdk/details-place)

## Supporting Pages

### Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/place-details-ui-kit](https://developers.google.com/maps/documentation/places/android-sdk/place-details-ui-kit)
- Source ID: `site-docs-root`
- Final score: 294
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Compact view Full view Place photo Lightbox enabled for full-screen photo enlargement Place address Rating and rating count Place type Price Accessible entrance information Open now status Place photo collage Place address Rating and rating count Place type Price Accessibility info Open now status Open hours Editorial summary Website Phone number Reviews rendered in dedicated tab Plus code Feature list, rendered in a dedicated tab Type-specific highlights, such as gas prices for gas stations Billing When using the Place Details UI Kit, you are billed for each time the .loadWithPlaceId() , .loadWithResourceName() , or loadWithCoordinates() method is called.
- Select platform: Android iOS JavaScript Place Details component The Place Details component of the Places UI Kit lets you add an individual UI component that displays place details in your app.
- LENGTH LONG ). show () moveToSydney () } } // enableEdgeToEdge() allows the app to draw behind the system bars for a more immersive experience. enableEdgeToEdge () binding = ActivityMainBinding . inflate ( layoutInflater ) setContentView ( binding . root ) binding . dismissButton . setOnClickListener { dismissPlaceDetails () } // --- Crucial: Initialize Places SDK --- // It&#39;s essential to initialize the Places SDK before making any other Places API calls. // This should ideally be done once, for example, in the Application&#39;s onCreate. val apiKey = BuildConfig .
- It creates, configures, and displays the [PlaceDetailsCompactFragment]. @param placeId The unique identifier for the place to be displayed. / private fun showPlaceDetailsFragment ( placeId : String ) { Log . d ( TAG , & quot ; Showing PlaceDetailsFragment for place ID : $ placeId&quot ;) // We manage the visibility of UI elements to provide feedback to the user. // The wrapper is shown, and a loading indicator is displayed while the data is fetched. binding . placeDetailsWrapper . visibility = View .

### Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-custom-styling](https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-custom-styling)
- Source ID: `site-docs-root`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Select platform: Android iOS JavaScript Customizeable style properties Visual customization examples You can customize the colors, typography, spacing, borders, and corners of these Places UI kit components and non-UI kit features: Place Details component Place Search component Basic Place Autocomplete component Non-UI Kit Place Autocomplete widget Places UI kit offers a design system approach to visual customization roughly based on Material Design (with some Google-Maps-specific modifications).
- Any theme attributes that are not overridden use the default styles. < style name = "CustomizedPlaceDetailsTheme" parent = "PlacesMaterialTheme" > < item name = "placesColorPrimary" > @color / app primary color < / item > < item name = "placesColorOnSurface" > @color / app color on surface < / item > < item name = "placesColorOnSurfaceVariant" > @color / app color on surface < / item > < item name = "placesTextAppearanceBodySmall" > @style / app text appearence small < / item > < item name = "placesCornerRadius" > 20 dp < / item > < / style > Important: The Places UI Kit provides a dark theme by default, so you may need to customize both dark and light themes.
- To create a dark theme, add an entry for the colors in values-night/colors.xml Customization tool Use this tool to visualize custom configurations in a Places UI Kit element.
- Style properties You can customize the following styles: Theme attribute Usage Color placesColorSurface Container and dialog background placesColorOutlineDecorative Container border placesColorPrimary Links, loading indicator, overview icons placesColorOnSurface Headings, dialog content placesColorOnSurfaceVariant Place information placesColorSecondaryContainer Button background placesColorOnSecondaryContainer Button text and icon placesColorNeutralContainer Review date badge, loading placeholder shapes placesColorOnNeutralContainer Review date, loading error placesColorPositiveContainer Available EV charger badge placesColorOnPositiveContainer Available EV charger badge content placesColorPositive Place "Open" now label placesColorNegative Place "Closed" now label placesColorInfo Accessible entrance icon placesColorButtonBorder Open in maps and OK buttons Typography placesTextAppearanceBodySmall Place information placesTextAppearanceBodyMedium Place information, dialog content placesTextAppearanceLabelMedium Badge content placesTextAppearanceLabelLarge Button content placesTextAppearanceHeadlineMedium Dialog headings placesTextAppearanceDisplaySmall Place name placesTextAppearanceTitleSmall Place name Spacing placesSpacingExtraSmall placesSpacingSmall placesSpacingMedium placesSpacingLarge placesSpacingExtraLarge placesSpacingTwoExtraLarge Measurement placesBorderWidth Container placesBorderWidthButton Shape placesCornerRadius Container placesCornerRadiusButton Open in Maps and OK buttons (excludes round icon button) placesCornerRadiusThumbnail Place thumbnail image placesCornerRadiusCollageOuter Media collage placesCornerRadiusCard Place card, User review card placesCornerRadiusDialog Google Maps disclosure dialog Google Maps Brand Attribution placesColorAttributionLightTheme Light theme Google Maps attribution and disclosure button (enums for white, gray, and black) placesColorAttributionDarkTheme Dark theme Google Maps attribution and disclosure button (enums for white, gray, and black) Attribution colors Attribution Google Maps' terms of service require you to use one of three brand colors for the Google Maps attribution.

### Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-overview](https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-overview)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Places UI Kit provides the following components for rendering Places data: Place Details renders details for a selected place.
- Similarly, a Places UI Kit Place Details request may return photos, price, and rating for a selected place, but you will only be billed for the Places UI Kit Place Details request.
- Select platform: Android iOS JavaScript Places UI Kit The Places UI Kit component library lets you bring the familiar Google Maps user experience for Places to your apps and web pages, using the same data that powers the Places API.
- Places UI Kit Tip: There is no extra charge for customization using the Places UI Kit.

### Place Details (New) \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/details-place](https://developers.google.com/maps/documentation/places/android-sdk/details-place)
- Source ID: `site-docs-root`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Place Details example The following example requests the ID , DISPLAY NAME , and FORMATTED ADDRESS fields for the Empire State Building in New York City. // Define a place ID. final String placeId = "ChIJaXQRs6lZwokRY6EFpJnhNNE" ; // Specify the list of fields to return. final List<Place .
- The following fields trigger the Place Details Essentials SKU : Place.Field.ADDRESS COMPONENTS ADR FORMAT ADDRESS Place.Field.FORMATTED ADDRESS Use instead of Place.Field.ADDRESS (deprecated).
- Place.Field.WEBSITE URI The following fields trigger the Place Details Enterprise Plus SKU : Place.Field.ALLOWS DOGS Place.Field.CURBSIDE PICKUP Place.Field.DELIVERY Place.Field.DINE IN Place.Field.EDITORIAL SUMMARY Place.Field.EV CHARGE OPTIONS Place.Field.FUEL OPTIONS Place.Field.GOOD FOR CHILDREN Place.Field.GOOD FOR GROUPS Place.Field.GOOD FOR WATCHING SPORTS Place.Field.LIVE MUSIC Place.Field.MENU FOR CHILDREN Place.Field.OUTDOOR SEATING Place.Field.PARKING OPTIONS Place.Field.PAYMENT OPTIONS Place.Field.RESERVABLE Place.Field.RESTROOM Place.Field.REVIEWS Place.Field.SERVES BEER Place.Field.SERVES BREAKFAST Place.Field.SERVES BRUNCH Place.Field.SERVES COCKTAILS Place.Field.SERVES COFFEE Place.Field.SERVES DESSERT Place.Field.SERVES DINNER Place.Field.SERVES LUNCH Place.Field.SERVES VEGETARIAN FOOD Place.Field.SERVES WINE Place.Field.TAKEOUT Optional parameters The optional parameters for FetchPlaceRequest are: Region code The region code used to format the response, specified as a two-character CLDR code value.
- Specify one or more of the following fields: The following fields trigger the Place Details Essentials IDs Only SKU : Place.Field.ID Place.Field.PHOTO METADATAS Place.Field.RESOURCE NAME Note: The RESOURCE NAME field contains the place resource name in the form: places/PLACE ID .

