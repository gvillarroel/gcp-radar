---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:07.464Z"
product_name: "Places SDK for iOS"
product_slug: "places-sdk-for-ios"
feature_name: "PlacesMaterialTheme.bodyLarge property"
feature_slug: "placesmaterialtheme-bodylarge-property"
latest_feature_date: "2025-10-02"
deprecation_date: "2025-10-02"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAddressComponent"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/basic-place-autocomplete-ui-kit"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/place-details-ui-kit"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompletePlaceSuggestion"
keywords:
  - "placesmaterialtheme"
  - "bodylarge"
  - "property"
  - "the"
  - "is"
  - "no"
  - "longer"
  - "supported"
---

# PlacesMaterialTheme.bodyLarge property

Product: Places SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

The PlacesMaterialTheme.bodyLarge property is no longer supported; deprecated on 2025-10-02.

## Extended Definition

The PlacesMaterialTheme.bodyLarge property is no longer supported; deprecated on 2025-10-02.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAddressComponent](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAddressComponent)
- [https://developers.google.com/maps/documentation/places/ios-sdk/basic-place-autocomplete-ui-kit](https://developers.google.com/maps/documentation/places/ios-sdk/basic-place-autocomplete-ui-kit)
- [https://developers.google.com/maps/documentation/places/ios-sdk/place-details-ui-kit](https://developers.google.com/maps/documentation/places/ios-sdk/place-details-ui-kit)
- [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompletePlaceSuggestion](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompletePlaceSuggestion)

## Supporting Pages

### "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAddressComponent](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAddressComponent)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Declaration Swift var types : [ String ] { get } Objective-C @property ( nonatomic , strong , readonly ) NSArray < NSString > Nonnull types ; name Name of the address component, e.g. “Sydney” Declaration Swift var name : String { get } Objective-C @property ( nonatomic , copy , readonly ) NSString Nonnull name ; shortName Short name of the address component, e.g. “AU” Declaration Swift var shortName : String ? { get } Objective-C @property ( nonatomic , copy , readonly ) NSString Nullable shortName ; Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- GMSAddressComponent @interface GMSAddressComponent : NSObject Represents a component of an address, e.g., street number, postcode, city, etc. type Deprecated type property is deprecated in favor of types Type of the address component.
- Declaration Swift var type : String { get } Objective-C @property ( nonatomic , copy , readonly ) GMS AVAILABLE BUT DEPRECATED MSG NSString type ; types Types associated with the address component.
- The type property is deprecated; use types instead for an array of type constants from GMSPlaceTypes.h .

### Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/basic-place-autocomplete-ui-kit](https://developers.google.com/maps/documentation/places/ios-sdk/basic-place-autocomplete-ui-kit)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AutocompleteUICustomization (), show : $ showWidget , onSelection : { place in guard let placeID = place . placeID else { self . placesError = . internal ( "Could not fetch place details because place ID from selected suggestion not found." ) return } Task { let placesClient = await PlacesClient . shared let fetchPlaceRequest = FetchPlaceRequest ( placeID : placeID , placeProperties : [. displayName , . formattedAddress ] ) switch await placesClient . fetchPlace ( with : fetchPlaceRequest ) { case . success ( let place ): print ( "Fetched place: \( place ) " ) self . fetchedPlace = place case . failure ( let placesError ): print ( "Failed to fetch place: \( placesError ) " ) self . placesError = placesError } } }, onError : { placesError in self . placesError = placesError } ) if let placesError = $ placesError . wrappedValue { Text ( placesError . localizedDescription ) . frame ( maxWidth : . infinity , alignment : . leading ) } else if let fetchedPlace = $ fetchedPlace . wrappedValue { Text ( " \( fetchedPlace ) " ) . frame ( maxWidth : . infinity , alignment : . leading ) } } } } Customize the theme Swift @ Environment ( \ . colorScheme ) var colorScheme var theme : PlacesMaterialTheme { if customTheme { var theme = PlacesMaterialTheme () var color = PlacesMaterialColor () color . surface = ( colorScheme == . dark ? . blue : . gray ) color . outlineDecorative = ( colorScheme == . dark ? . white : . black ) color . onSurface = ( colorScheme == . dark ? . yellow : . red ) color . onSurfaceVariant = ( colorScheme == . dark ? . white : . blue ) color . onSecondaryContainer = ( colorScheme == . dark ? . white : . red ) color . secondaryContainer = ( colorScheme == . dark ? . green : . purple ) color . positive = ( colorScheme == . dark ? . yellow : . red ) color . primary = ( colorScheme == . dark ? . yellow : . purple ) color . info = ( colorScheme == . dark ? . yellow : . purple ) var shape = PlacesMaterialShape () shape . cornerRadius = 10 var font = PlacesMaterialFont () font . labelLarge = . system ( size : UIFontMetrics . default . scaledValue ( for : 18 )) font . headlineMedium = . system ( size : UIFontMetrics . default . scaledValue ( for : 15 )) font . bodyLarge = . system ( size : UIFontMetrics . default . scaledValue ( for : 15 )) font . bodyMedium = . system ( size : UIFontMetrics . default . scaledValue ( for : 12 )) font . bodySmall = . system ( size : UIFontMetrics . default . scaledValue ( for : 11 )) var attribution = PlacesMaterialAttribution () attribution . lightModeColor = . black attribution . darkModeColor = . white theme . color = color theme . shape = shape theme . font = font theme . attribution = attribution } else { return PlacesMaterialTheme () } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Swift // Note: You must provide an API key in your app entry point first. // A demo view of the basic place autocomplete widget. public struct BasicPlaceAutocompleteView : View { @ State private var fetchedPlace : Place ? @ State private var placesError : PlacesError ? @ State private var showWidget = false public var body : some View { let types : Set<PlaceType> = [. accounting ] let countries : Set<String> = [ "US" ] let origin = CLLocation ( latitude : 36.19030535579595 , longitude : - 115.25397680618019 ) let coordinateRegion = RectangularCoordinateRegion ( northEast : CLLocationCoordinate2D ( latitude : 36.25290087640495 , longitude : - 115.08025549571225 ), southWest : CLLocationCoordinate2D ( latitude : 36.06607422287787 , longitude : - 115.33431432920293 ) ) let regionCode = "US" let inputOffset = 10 let filter = AutocompleteFilter ( types : types , countries : countries , origin : origin , coordinateRegionBias : coordinateRegion , regionCode : regionCode ) let uiCustomization = AutocompleteUICustomization ( listDensity : . multiLine , listItemIcon : . noIcon , theme : PlacesMaterialTheme () ) VStack { Button ( "Search for a place" ) { showWidget . toggle () } . basicPlaceAutocomplete ( filter : filter , uiCustomization : uiCustomization ??
- Swift let uiCustomization = AutocompleteUICustomization ( listDensity : . multiLine , listItemIcon : . noIcon , theme : PlacesMaterialTheme () ) Example Add a Basic Autocomplete component Important: Set the initial value of showWidget to false in order to have your customized component appear when the user clicks the button.
- The default is PlacesMaterialTheme .

### Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/place-details-ui-kit](https://developers.google.com/maps/documentation/places/ios-sdk/place-details-ui-kit)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Swift // Same for compact and full func makeTemplateTheme ( colorScheme : ColorScheme ) - > PlacesMaterialTheme { var theme = PlacesMaterialTheme () var color = PlacesMaterialColor () color . surface = ( colorScheme == . dark ? . blue : . gray ) color . buttonBorder = ( colorScheme == . dark ? . pink : . orange ) color . outlineDecorative = ( colorScheme == . dark ? . white : . black ) color . onSurface = ( colorScheme == . dark ? . yellow : . red ) color . onSurfaceVariant = ( colorScheme == . dark ? . white : . blue ) color . onSecondaryContainer = ( colorScheme == . dark ? . white : . red ) color . secondaryContainer = ( colorScheme == . dark ? . green : . purple ) color . positive = ( colorScheme == . dark ? . yellow : . red ) color . primary = ( colorScheme == . dark ? . yellow : . purple ) color . info = ( colorScheme == . dark ? . yellow : . purple ) var shape = PlacesMaterialShape () shape . cornerRadius = 10 var font = PlacesMaterialFont () font . labelLarge = . system ( size : UIFontMetrics . default . scaledValue ( for : 18 )) font . headlineMedium = . system ( size : UIFontMetrics . default . scaledValue ( for : 15 )) font . bodyLarge = . system ( size : UIFontMetrics . default . scaledValue ( for : 15 )) font . bodyMedium = . system ( size : UIFontMetrics . default . scaledValue ( for : 12 )) font . bodySmall = . system ( size : UIFontMetrics . default . scaledValue ( for : 11 )) var attribution = PlacesMaterialAttribution () attribution . lightModeColor = . black attribution . darkModeColor = . white theme . measurement . borderWidthButton = 1 theme . color = color theme . shape = shape theme . font = font theme . attribution = attribution return theme } Display specific content This sample creates a compact view that only displays media, address, rating, and type, using the theme created in the previous example.
- Compact view Full view Place photo Lightbox enabled for full-screen photo enlargement Place address Rating and rating count Place type Price Accessible entrance information Open now status Place photo collage Place address Rating and rating count Place type Price Accessibility info Open now status Open hours Editorial summary Website Phone number Reviews rendered in dedicated tab Plus code Feature list, rendered in a dedicated tab Type-specific highlights, such as gas prices for gas stations Billing When using the Place Details UI Kit, you are billed for each time the PlaceDetailsQuery method is called.
- Swift @ State var query : PlaceDetailsQuery = PlaceDetailsQuery ( identifier : . placeID ( "ChIJT7FdmYiAhYAROFOvrIxRJDU" )) var body : some View { PlaceDetailsCompactView ( orientation : . vertical , query : $ query , contentType : [. media (), . address (), . rating (), . type (), . price ()], theme : theme , placeDetailsCallback : placeDetailsCallback , preferTruncation : false ) . frame ( width : 350 ) } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Place Details component examples Note: If you don't specify a visual customization, it will retain the default value.

### "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompletePlaceSuggestion](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompletePlaceSuggestion)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Declaration Swift var distanceMeters : NSNumber ? { get } Objective-C @property ( nonatomic , readonly , nullable ) NSNumber distanceMeters ; Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Declaration Swift var types : [ String ] { get } Objective-C @property ( nonatomic , copy , readonly ) NSArray < NSString > Nonnull types ; distanceMeters The straight line distance in meters between the origin and this suggestion if a valid origin is specified in the GMSAutocompleteFilter of the request.
- For example, you can make every match bold using enumerateAttribute: UIFont regularFont = [UIFont systemFontOfSize:[UIFont labelFontSize]]; UIFont boldFont = [UIFont boldSystemFontOfSize:[UIFont labelFontSize]]; NSMutableAttributedString bolded = [suggestion.attributedFullText mutableCopy]; [bolded enumerateAttribute:kGMSAutocompleteMatchAttribute inRange:NSMakeRange(0, bolded.length) options:0 usingBlock:^(id value, NSRange range, BOOL stop) { UIFont font = (value == nil) ? regularFont : boldFont; [bolded addAttribute:NSFontAttributeName value:font range:range]; }]; label.attributedText = bolded; Declaration Swift @NSCopying var attributedFullText : NSAttributedString { get } Objective-C @property ( nonatomic , copy , readonly ) NSAttributedString Nonnull attributedFullText ; attributedPrimaryText The primary text of a suggestion as a NSAttributedString, usually the name of the place.
- Declaration Swift @NSCopying var attributedPrimaryText : NSAttributedString { get } Objective-C @property ( nonatomic , copy , readonly ) NSAttributedString Nonnull attributedPrimaryText ; attributedSecondaryText The secondary text of a suggestion as a NSAttributedString, usually the location of the place.

