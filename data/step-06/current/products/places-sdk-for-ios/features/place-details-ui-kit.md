---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:07.467Z"
product_name: "Places SDK for iOS"
product_slug: "places-sdk-for-ios"
feature_name: "Place Details UI Kit"
feature_slug: "place-details-ui-kit"
latest_feature_date: "2025-05-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/ios-sdk/place-details-ui-kit"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/places-ui-kit-custom-styling"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/places-ui-kit-overview"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/basic-place-autocomplete-ui-kit"
keywords:
  - "place"
  - "details"
  - "ui"
  - "kit"
  - "component"
  - "that"
  - "displays"
  - "in"
---

# Place Details UI Kit

Product: Places SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

A UI component that displays place details in an app; A UI component that displays place details in an app.

## Extended Definition

A UI component that displays place details in an app; A UI component that displays place details in an app.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/ios-sdk/place-details-ui-kit](https://developers.google.com/maps/documentation/places/ios-sdk/place-details-ui-kit)
- [https://developers.google.com/maps/documentation/places/ios-sdk/places-ui-kit-custom-styling](https://developers.google.com/maps/documentation/places/ios-sdk/places-ui-kit-custom-styling)
- [https://developers.google.com/maps/documentation/places/ios-sdk/places-ui-kit-overview](https://developers.google.com/maps/documentation/places/ios-sdk/places-ui-kit-overview)
- [https://developers.google.com/maps/documentation/places/ios-sdk/basic-place-autocomplete-ui-kit](https://developers.google.com/maps/documentation/places/ios-sdk/basic-place-autocomplete-ui-kit)

## Supporting Pages

### Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/place-details-ui-kit](https://developers.google.com/maps/documentation/places/ios-sdk/place-details-ui-kit)
- Source ID: `site-docs-root`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Select platform: Android iOS JavaScript Place Details component The Place Details component of the Places UI Kit lets you add an individual UI component that displays place details in your app.
- Swift // Same for compact and full func makeTemplateTheme ( colorScheme : ColorScheme ) - > PlacesMaterialTheme { var theme = PlacesMaterialTheme () var color = PlacesMaterialColor () color . surface = ( colorScheme == . dark ? . blue : . gray ) color . buttonBorder = ( colorScheme == . dark ? . pink : . orange ) color . outlineDecorative = ( colorScheme == . dark ? . white : . black ) color . onSurface = ( colorScheme == . dark ? . yellow : . red ) color . onSurfaceVariant = ( colorScheme == . dark ? . white : . blue ) color . onSecondaryContainer = ( colorScheme == . dark ? . white : . red ) color . secondaryContainer = ( colorScheme == . dark ? . green : . purple ) color . positive = ( colorScheme == . dark ? . yellow : . red ) color . primary = ( colorScheme == . dark ? . yellow : . purple ) color . info = ( colorScheme == . dark ? . yellow : . purple ) var shape = PlacesMaterialShape () shape . cornerRadius = 10 var font = PlacesMaterialFont () font . labelLarge = . system ( size : UIFontMetrics . default . scaledValue ( for : 18 )) font . headlineMedium = . system ( size : UIFontMetrics . default . scaledValue ( for : 15 )) font . bodyLarge = . system ( size : UIFontMetrics . default . scaledValue ( for : 15 )) font . bodyMedium = . system ( size : UIFontMetrics . default . scaledValue ( for : 12 )) font . bodySmall = . system ( size : UIFontMetrics . default . scaledValue ( for : 11 )) var attribution = PlacesMaterialAttribution () attribution . lightModeColor = . black attribution . darkModeColor = . white theme . measurement . borderWidthButton = 1 theme . color = color theme . shape = shape theme . font = font theme . attribution = attribution return theme } Display specific content This sample creates a compact view that only displays media, address, rating, and type, using the theme created in the previous example.
- Compact view Full view Place photo Lightbox enabled for full-screen photo enlargement Place address Rating and rating count Place type Price Accessible entrance information Open now status Place photo collage Place address Rating and rating count Place type Price Accessibility info Open now status Open hours Editorial summary Website Phone number Reviews rendered in dedicated tab Plus code Feature list, rendered in a dedicated tab Type-specific highlights, such as gas prices for gas stations Billing When using the Place Details UI Kit, you are billed for each time the PlaceDetailsQuery method is called.
- The Place Details component is fully themeable, allowing you to customize fonts, colors, and corner radii to match your use case and visual brand guidelines.

### Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/places-ui-kit-custom-styling](https://developers.google.com/maps/documentation/places/ios-sdk/places-ui-kit-custom-styling)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Select platform: Android iOS JavaScript Customizeable style properties Visual customization examples You can customize the colors, typography, spacing, borders, and corners of these Places UI kit components and non-UI kit features: Place Details component Place Search component Basic Place Autocomplete component Non-UI Kit Place Autocomplete widget Places UI kit offers a design system approach to visual customization roughly based on Material Design (with some Google-Maps-specific modifications).
- Swift // Same for compact and full func makeTemplateTheme ( colorScheme : ColorScheme ) - > PlacesMaterialTheme { var theme = PlacesMaterialTheme () var color = PlacesMaterialColor () color . surface = ( colorScheme == . dark ? . blue : . gray ) color . buttonBorder = ( colorScheme == . dark ? . pink : . orange ) color . outlineDecorative = ( colorScheme == . dark ? . white : . black ) color . onSurface = ( colorScheme == . dark ? . yellow : . red ) color . onSurfaceVariant = ( colorScheme == . dark ? . white : . blue ) color . onSecondaryContainer = ( colorScheme == . dark ? . white : . red ) color . secondaryContainer = ( colorScheme == . dark ? . green : . purple ) color . positive = ( colorScheme == . dark ? . yellow : . red ) color . primary = ( colorScheme == . dark ? . yellow : . purple ) color . info = ( colorScheme == . dark ? . yellow : . purple ) var shape = PlacesMaterialShape () shape . cornerRadius = 10 var font = PlacesMaterialFont () font . labelLarge = . system ( size : UIFontMetrics . default . scaledValue ( for : 18 )) font . headlineMedium = . system ( size : UIFontMetrics . default . scaledValue ( for : 15 )) font . bodyLarge = . system ( size : UIFontMetrics . default . scaledValue ( for : 15 )) font . bodyMedium = . system ( size : UIFontMetrics . default . scaledValue ( for : 12 )) font . bodySmall = . system ( size : UIFontMetrics . default . scaledValue ( for : 11 )) var attribution = PlacesMaterialAttribution () attribution . lightModeColor = . black attribution . darkModeColor = . white theme . measurement . borderWidthButton = 1 theme . color = color theme . shape = shape theme . font = font theme . attribution = attribution return theme } Full examples for each component or feature Place Details component styling example .
- Style properties You can customize the following styles: Theme attribute Usage Color theme.color.surface Container and dialog background theme.color.outlineDecorative Container border theme.color.primary Links, loading indicator, overview icons theme.color.onSurface Headings, dialog content theme.color.onSurfaceVariant Place information theme.color.secondaryContainer Button background theme.color.onSecondaryContainer Button text and icon theme.color.neutralContainer Review date badge, loading placeholder shapes theme.color.onNeutralContainer Review date, loading error theme.color.positiveContainer Available EV charger badge theme.color.onPositiveContainer Available EV charger badge content theme.color.positive Place "Open" now label theme.color.negative Place "Closed" now label theme.color.info Accessible entrance icon theme.measurement.borderWidthButton Open in maps and OK buttons Typography theme.font.bodySmall Place information theme.font.bodyMedium Place information, dialog content theme.font.labelMedium Badge content theme.font.labelLarge Button content theme.font.headlineMedium Dialog headings theme.font.displaySmall Place name theme.font.titleSmall Place name Spacing theme.measurement.spacingExtraSmall theme.measurement.spacingSmall theme.measurement.spacingMedium theme.measurement.spacinglarge theme.measurement.spacingExtraLarge theme.measurement.spacingTwoExtraLarge Measurement borderWidth Container theme.measurement.borderWidthButton Shape theme.shape.cornerRadius Container theme.shape.cornerRadiusButton Open in Maps and OK buttons (excludes round icon button) theme.shape.cornerRadiusThumbnail Place thumbnail image theme.shape.cornerRadiusCollageOuter Media collage theme.shape.cornerRadiusCard Place card, User review card theme.shape.cornerRadiusDialog Google Maps disclosure dialog Google Maps Brand Attribution attribution.lightModeColor Light theme Google Maps attribution and disclosure button (enums for white, gray, and black) attribution.darkModeColor Dark theme Google Maps attribution and disclosure button (enums for white, gray, and black) Attribution colors Attribution Google Maps' terms of service require you to use one of three brand colors for the Google Maps attribution.
- Customization tool Use this tool to visualize custom configurations in a Places UI Kit element.

### Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/places-ui-kit-overview](https://developers.google.com/maps/documentation/places/ios-sdk/places-ui-kit-overview)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Select platform: Android iOS JavaScript Places UI Kit The Places UI Kit component library lets you bring the familiar Google Maps user experience for Places to your apps and web pages, using the same data that powers the Places API.
- The Places UI Kit provides the following components for rendering Places data: Place Details renders details for a selected place.
- It includes an individual UI component that can be used independently, together, or in conjunction with other Google Maps Platform APIs to deliver a Places-rich experience with minimal cost and code.
- Similarly, a Places UI Kit Place Details request may return photos, price, and rating for a selected place, but you will only be billed for the Places UI Kit Place Details request.

### Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/basic-place-autocomplete-ui-kit](https://developers.google.com/maps/documentation/places/ios-sdk/basic-place-autocomplete-ui-kit)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Select platform: Android iOS JavaScript Basic Place Autocomplete component The Basic Place Autocomplete component of the Places UI Kit lets you add an individual UI component that returns a place ID when a user selects a place.
- Add the Basic Autocomplete component to your app Set the autocomplete filter parameters (for example, the types to return, the country to limit results to, the region coordinates for results, and distance information if the users origin is set) as you would to use Place Autocomplete (New) without the Places UI Kit.
- AutocompleteUICustomization (), show : $ showWidget , onSelection : { place in guard let placeID = place . placeID else { self . placesError = . internal ( "Could not fetch place details because place ID from selected suggestion not found." ) return } Task { let placesClient = await PlacesClient . shared let fetchPlaceRequest = FetchPlaceRequest ( placeID : placeID , placeProperties : [. displayName , . formattedAddress ] ) switch await placesClient . fetchPlace ( with : fetchPlaceRequest ) { case . success ( let place ): print ( "Fetched place: \( place ) " ) self . fetchedPlace = place case . failure ( let placesError ): print ( "Failed to fetch place: \( placesError ) " ) self . placesError = placesError } } }, onError : { placesError in self . placesError = placesError } ) if let placesError = $ placesError . wrappedValue { Text ( placesError . localizedDescription ) . frame ( maxWidth : . infinity , alignment : . leading ) } else if let fetchedPlace = $ fetchedPlace . wrappedValue { Text ( " \( fetchedPlace ) " ) . frame ( maxWidth : . infinity , alignment : . leading ) } } } } Customize the theme Swift @ Environment ( \ . colorScheme ) var colorScheme var theme : PlacesMaterialTheme { if customTheme { var theme = PlacesMaterialTheme () var color = PlacesMaterialColor () color . surface = ( colorScheme == . dark ? . blue : . gray ) color . outlineDecorative = ( colorScheme == . dark ? . white : . black ) color . onSurface = ( colorScheme == . dark ? . yellow : . red ) color . onSurfaceVariant = ( colorScheme == . dark ? . white : . blue ) color . onSecondaryContainer = ( colorScheme == . dark ? . white : . red ) color . secondaryContainer = ( colorScheme == . dark ? . green : . purple ) color . positive = ( colorScheme == . dark ? . yellow : . red ) color . primary = ( colorScheme == . dark ? . yellow : . purple ) color . info = ( colorScheme == . dark ? . yellow : . purple ) var shape = PlacesMaterialShape () shape . cornerRadius = 10 var font = PlacesMaterialFont () font . labelLarge = . system ( size : UIFontMetrics . default . scaledValue ( for : 18 )) font . headlineMedium = . system ( size : UIFontMetrics . default . scaledValue ( for : 15 )) font . bodyLarge = . system ( size : UIFontMetrics . default . scaledValue ( for : 15 )) font . bodyMedium = . system ( size : UIFontMetrics . default . scaledValue ( for : 12 )) font . bodySmall = . system ( size : UIFontMetrics . default . scaledValue ( for : 11 )) var attribution = PlacesMaterialAttribution () attribution . lightModeColor = . black attribution . darkModeColor = . white theme . color = color theme . shape = shape theme . font = font theme . attribution = attribution } else { return PlacesMaterialTheme () } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Swift let uiCustomization = AutocompleteUICustomization ( listDensity : . multiLine , listItemIcon : . noIcon , theme : PlacesMaterialTheme () ) Example Add a Basic Autocomplete component Important: Set the initial value of showWidget to false in order to have your customized component appear when the user clicks the button.

