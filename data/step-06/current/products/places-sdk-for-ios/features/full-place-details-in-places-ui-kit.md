---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:07.466Z"
product_name: "Places SDK for iOS"
product_slug: "places-sdk-for-ios"
feature_name: "Full Place Details in Places UI Kit"
feature_slug: "full-place-details-in-places-ui-kit"
latest_feature_date: "2025-07-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/ios-sdk/place-details-ui-kit"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/places-ui-kit-custom-styling"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompletePlaceSuggestion"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/places-ui-kit-overview"
keywords:
  - "full"
  - "place"
  - "details"
  - "in"
  - "places"
  - "ui"
  - "kit"
  - "the"
---

# Full Place Details in Places UI Kit

Product: Places SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

The Places UI Kit Place Details component can now display full information about a place.

## Extended Definition

The Places UI Kit Place Details component can now display full information about a place.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/ios-sdk/place-details-ui-kit](https://developers.google.com/maps/documentation/places/ios-sdk/place-details-ui-kit)
- [https://developers.google.com/maps/documentation/places/ios-sdk/places-ui-kit-custom-styling](https://developers.google.com/maps/documentation/places/ios-sdk/places-ui-kit-custom-styling)
- [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompletePlaceSuggestion](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompletePlaceSuggestion)
- [https://developers.google.com/maps/documentation/places/ios-sdk/places-ui-kit-overview](https://developers.google.com/maps/documentation/places/ios-sdk/places-ui-kit-overview)

## Supporting Pages

### Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/place-details-ui-kit](https://developers.google.com/maps/documentation/places/ios-sdk/place-details-ui-kit)
- Source ID: `site-docs-root`
- Final score: 287
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Compact view Full view Place photo Lightbox enabled for full-screen photo enlargement Place address Rating and rating count Place type Price Accessible entrance information Open now status Place photo collage Place address Rating and rating count Place type Price Accessibility info Open now status Open hours Editorial summary Website Phone number Reviews rendered in dedicated tab Plus code Feature list, rendered in a dedicated tab Type-specific highlights, such as gas prices for gas stations Billing When using the Place Details UI Kit, you are billed for each time the PlaceDetailsQuery method is called.
- Select platform: Android iOS JavaScript Place Details component The Place Details component of the Places UI Kit lets you add an individual UI component that displays place details in your app.
- Creaete a full view with vertical layout Swift var selectedType : Set<PlaceDetailsCompactContent> = PlaceDetailsCompactView . standardContent // Query for loading the place details widget. @ State var query : PlaceDetailsQuery = PlaceDetailsQuery ( identifier : . placeID ( "ChIJT7FdmYiAhYAROFOvrIxRJDU" )) var theme : PlacesMaterialTheme () var configuration : PlaceDetailsConfiguration { PlaceDetailsConfiguration ( content : selectedType , theme : theme ) } // Callback for the place details widget. let placeDetailsCallback : ( PlaceDetailsResult ) - > Void = { result in if let place = result . place { print ( "Place: \( place . description ) " ) } else { print ( "Error: \( String ( describing : result . error )) " ) } } PlaceDetailsCompactView ( orientation : . vertical , query : $ query , configuration : configuration , placeDetailsCallback : placeDetailsCallback ) Create a compact view with horizontal layout Swift var selectedType : Set<PlaceDetailsCompactContent> = PlaceDetailsCompactView . standardContent // Query for loading the place details widget. @ State var query : PlaceDetailsQuery = PlaceDetailsQuery ( identifier : . placeID ( "ChIJT7FdmYiAhYAROFOvrIxRJDU" )) var theme : PlacesMaterialTheme () var configuration : PlaceDetailsConfiguration { PlaceDetailsConfiguration ( content : selectedType , theme : theme ) } // Callback for the place details widget. let placeDetailsCallback : ( PlaceDetailsResult ) - > Void = { result in if let place = result . place { print ( "Place: \( place . description ) " ) } else { print ( "Error: \( String ( describing : result . error )) " ) } } PlaceDetailsCompactView ( orientation : . horizontal , query : $ query , configuration : configuration , placeDetailsCallback : placeDetailsCallback ) Create a full view with vertical layout Swift @ State var query : PlaceDetailsQuery = PlaceDetailsQuery ( identifier : . placeID ( "ChIJT7FdmYiAhYAROFOvrIxRJDU" )) var theme : PlacesMaterialTheme () var selectedType : Set<PlaceDetailsContent> = PlaceDetailsCompactView . standardContent var configuration : PlaceDetailsConfiguration { PlaceDetailsConfiguration ( content : selectedType , theme : theme ) } let placeDetailsCallback : ( PlaceDetailsResult ) - > Void = { result in placeIDPickerFocused = true if let place = result . place { print ( "Place: \( place . description ) " ) } else { print ( "Error: \( String ( describing : result . error )) " ) } } GooglePlacesSwift .
- Swift // Same for compact and full func makeTemplateTheme ( colorScheme : ColorScheme ) - > PlacesMaterialTheme { var theme = PlacesMaterialTheme () var color = PlacesMaterialColor () color . surface = ( colorScheme == . dark ? . blue : . gray ) color . buttonBorder = ( colorScheme == . dark ? . pink : . orange ) color . outlineDecorative = ( colorScheme == . dark ? . white : . black ) color . onSurface = ( colorScheme == . dark ? . yellow : . red ) color . onSurfaceVariant = ( colorScheme == . dark ? . white : . blue ) color . onSecondaryContainer = ( colorScheme == . dark ? . white : . red ) color . secondaryContainer = ( colorScheme == . dark ? . green : . purple ) color . positive = ( colorScheme == . dark ? . yellow : . red ) color . primary = ( colorScheme == . dark ? . yellow : . purple ) color . info = ( colorScheme == . dark ? . yellow : . purple ) var shape = PlacesMaterialShape () shape . cornerRadius = 10 var font = PlacesMaterialFont () font . labelLarge = . system ( size : UIFontMetrics . default . scaledValue ( for : 18 )) font . headlineMedium = . system ( size : UIFontMetrics . default . scaledValue ( for : 15 )) font . bodyLarge = . system ( size : UIFontMetrics . default . scaledValue ( for : 15 )) font . bodyMedium = . system ( size : UIFontMetrics . default . scaledValue ( for : 12 )) font . bodySmall = . system ( size : UIFontMetrics . default . scaledValue ( for : 11 )) var attribution = PlacesMaterialAttribution () attribution . lightModeColor = . black attribution . darkModeColor = . white theme . measurement . borderWidthButton = 1 theme . color = color theme . shape = shape theme . font = font theme . attribution = attribution return theme } Display specific content This sample creates a compact view that only displays media, address, rating, and type, using the theme created in the previous example.

### Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/places-ui-kit-custom-styling](https://developers.google.com/maps/documentation/places/ios-sdk/places-ui-kit-custom-styling)
- Source ID: `site-docs-root`
- Final score: 277
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Swift // Same for compact and full func makeTemplateTheme ( colorScheme : ColorScheme ) - > PlacesMaterialTheme { var theme = PlacesMaterialTheme () var color = PlacesMaterialColor () color . surface = ( colorScheme == . dark ? . blue : . gray ) color . buttonBorder = ( colorScheme == . dark ? . pink : . orange ) color . outlineDecorative = ( colorScheme == . dark ? . white : . black ) color . onSurface = ( colorScheme == . dark ? . yellow : . red ) color . onSurfaceVariant = ( colorScheme == . dark ? . white : . blue ) color . onSecondaryContainer = ( colorScheme == . dark ? . white : . red ) color . secondaryContainer = ( colorScheme == . dark ? . green : . purple ) color . positive = ( colorScheme == . dark ? . yellow : . red ) color . primary = ( colorScheme == . dark ? . yellow : . purple ) color . info = ( colorScheme == . dark ? . yellow : . purple ) var shape = PlacesMaterialShape () shape . cornerRadius = 10 var font = PlacesMaterialFont () font . labelLarge = . system ( size : UIFontMetrics . default . scaledValue ( for : 18 )) font . headlineMedium = . system ( size : UIFontMetrics . default . scaledValue ( for : 15 )) font . bodyLarge = . system ( size : UIFontMetrics . default . scaledValue ( for : 15 )) font . bodyMedium = . system ( size : UIFontMetrics . default . scaledValue ( for : 12 )) font . bodySmall = . system ( size : UIFontMetrics . default . scaledValue ( for : 11 )) var attribution = PlacesMaterialAttribution () attribution . lightModeColor = . black attribution . darkModeColor = . white theme . measurement . borderWidthButton = 1 theme . color = color theme . shape = shape theme . font = font theme . attribution = attribution return theme } Full examples for each component or feature Place Details component styling example .
- Select platform: Android iOS JavaScript Customizeable style properties Visual customization examples You can customize the colors, typography, spacing, borders, and corners of these Places UI kit components and non-UI kit features: Place Details component Place Search component Basic Place Autocomplete component Non-UI Kit Place Autocomplete widget Places UI kit offers a design system approach to visual customization roughly based on Material Design (with some Google-Maps-specific modifications).
- Use the Customization tool to visualize custom configurations in a Places UI Kit element.
- The Places UI Kit provides a dark theme by default, so you may need to customize both dark and light themes.

### "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompletePlaceSuggestion](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompletePlaceSuggestion)
- Source ID: `site-docs-reference`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, you can make every match bold using enumerateAttribute: UIFont regularFont = [UIFont systemFontOfSize:[UIFont labelFontSize]]; UIFont boldFont = [UIFont boldSystemFontOfSize:[UIFont labelFontSize]]; NSMutableAttributedString bolded = [suggestion.attributedFullText mutableCopy]; [bolded enumerateAttribute:kGMSAutocompleteMatchAttribute inRange:NSMakeRange(0, bolded.length) options:0 usingBlock:^(id value, NSRange range, BOOL stop) { UIFont font = (value == nil) ? regularFont : boldFont; [bolded addAttribute:NSFontAttributeName value:font range:range]; }]; label.attributedText = bolded; Declaration Swift @NSCopying var attributedFullText : NSAttributedString { get } Objective-C @property ( nonatomic , copy , readonly ) NSAttributedString Nonnull attributedFullText ; attributedPrimaryText The primary text of a suggestion as a NSAttributedString, usually the name of the place.
- Declaration Swift @NSCopying var attributedSecondaryText : NSAttributedString ? { get } Objective-C @property ( nonatomic , copy , readonly , nullable ) NSAttributedString attributedSecondaryText ; placeID A property representing the place ID of the suggestion, suitable for use in a place details request.
- GMSAutocompletePlaceSuggestion @interface GMSAutocompletePlaceSuggestion : NSObject This class represents a place suggestion of a full query based on a partially typed string. attributedFullText The full description of the suggestion as a NSAttributedString.
- Each suggestion includes a place ID for further place details requests and an array of relevant place types.

### Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/places-ui-kit-overview](https://developers.google.com/maps/documentation/places/ios-sdk/places-ui-kit-overview)
- Source ID: `site-docs-root`
- Final score: 266
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Similarly, a Places UI Kit Place Details request may return photos, price, and rating for a selected place, but you will only be billed for the Places UI Kit Place Details request.
- The Places UI Kit provides the following components for rendering Places data: Place Details renders details for a selected place.
- Select platform: Android iOS JavaScript Places UI Kit The Places UI Kit component library lets you bring the familiar Google Maps user experience for Places to your apps and web pages, using the same data that powers the Places API.
- Places UI Kit Note: The Places UI Kit component library is only available in the PlacesSwift SDK .

