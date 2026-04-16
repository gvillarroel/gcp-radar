---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:07.470Z"
product_name: "Places SDK for iOS"
product_slug: "places-sdk-for-ios"
feature_name: "Place Photos API (New)"
feature_slug: "place-photos-api-new"
latest_feature_date: "2024-05-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/ios-sdk/place-photos"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/details-place"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/nearby-search"
keywords:
  - "place"
  - "photos"
  - "api"
  - "new"
  - "lets"
  - "applications"
  - "request"
  - "for"
---

# Place Photos API (New)

Product: Places SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

Lets applications request place photos for display.

## Extended Definition

Lets applications request place photos for display.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/ios-sdk/place-photos](https://developers.google.com/maps/documentation/places/ios-sdk/place-photos)
- [https://developers.google.com/maps/documentation/places/ios-sdk/details-place](https://developers.google.com/maps/documentation/places/ios-sdk/details-place)
- [https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete)
- [https://developers.google.com/maps/documentation/places/ios-sdk/nearby-search](https://developers.google.com/maps/documentation/places/ios-sdk/nearby-search)

## Supporting Pages

### Place Photos (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/place-photos](https://developers.google.com/maps/documentation/places/ios-sdk/place-photos)
- Source ID: `site-docs-root`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The Places SDK for iOS (New) allows requesting place photos, sourced from business owners and users, for display in apps.
- Another way to request photos for a place is to make a Place Details (New) request, including GMSPlacePropertyPhotos in the field list.
- You can use the Places SDK for iOS (New) to request place photos to display in your application.
- Places Swift SDK // First fetch place details // A hotel in Saigon with an attribution. let placeID = "ChIJV4k8 9UodTERU5KXbkYpSYs" let fetchPlaceRequest = FetchPlaceRequest ( placeID : placeID , placeProperties : [ . name , . website ] ) var fetchedPlace : Place switch await placesClient . fetchPlace ( with : fetchPlaceRequest ) { case . success ( let place ): fetchedPlace = place case . failure ( let placesError ): // Handle error } // Use the place details to fetch a photo's image. guard let photo = fetchedPlace . photos ?. first else { // Handle place without photos. } let fetchPhotoRequest = FetchPhotoRequest ( photo : photo , maxSize : CGSizeMake ( 4800 , 4800 )) switch await placesClient . fetchPhoto ( with : fetchPhotoRequest ) { case . success ( let uiImage ): // Handle image. case . failure ( let placesError ): // Handle error } Swift // A hotel in Saigon with an attribution. let placeID = "ChIJV4k8 9UodTERU5KXbkYpSYs" // Request list of photos for a place placesClient . lookUpPhotos ( forPlaceID : placeID ) { ( photos , error ) in guard let photoMetadata : GMSPlacePhotoMetadata = photos ?. results [ 0 ] else { return } // Request individual photos in the response list let fetchPhotoRequest = GMSFetchPhotoRequest ( photoMetadata : photoMetadata , maxSize : CGSizeMake ( 4800 , 4800 )) self . client . fetchPhoto ( with : fetchPhotoRequest , callback : { ( photoImage : UIImage ?, error : Error ?) in guard let photoImage , error == nil else { print ( "Handle photo error: " ) return } print ( "Display photo Image: " ) } ) } Objective-C // A hotel in Saigon with an attribution.

### Place Details (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/details-place](https://developers.google.com/maps/documentation/places/ios-sdk/details-place)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Specify one or more of the following fields: The following fields trigger the Place Details Essentials ID Only SKU : GMSPlacePropertyPlaceID GMSPlacePropertyPhotos The following fields trigger the Place Details Essentials SKU : GMSPlacePropertyAddressComponents GMSPlacePropertyFormattedAddress GMSPlacePropertyCoordinate GMSPlacePropertyPlusCode GMSPlacePropertyTypes GMSPlacePropertyViewport The following fields trigger the Place Details Pro SKU : GMSPlacePropertyBusinessStatus GMSPlacePropertyIconBackgroundColor GMSPlacePropertyIconImageURL GMSPlacePropertyName GMSPlacePropertyUTCOffsetMinutes GMSPlacePropertyWheelchairAccessibleEntrance The following fields trigger the Place Details Pro SKU : GMSPlacePropertyCurrentOpeningHours GMSPlacePropertySecondaryOpeningHours GMSPlacePropertyPhoneNumber GMSPlacePropertyPriceLevel GMSPlacePropertyRating GMSPlacePropertyOpeningHours GMSPlacePropertyUserRatingsTotal GMSPlacePropertyWebsite The following fields trigger the Place Details Enterprise SKU : GMSPlacePropertyCurbsidePickup GMSPlacePropertyDelivery GMSPlacePropertyDineIn GMSPlacePropertyEditorialSummary GMSPlacePropertyReservable GMSPlacePropertyReviews GMSPlacePropertyServesBeer GMSPlacePropertyServesBreakfast GMSPlacePropertyServesBrunch GMSPlacePropertyServesDinner GMSPlacePropertyServesLunch GMSPlacePropertyServesVegetarianFood GMSPlacePropertyServesWine GMSPlacePropertyTakeout The following example passes a list of two field values to specify that the GMSPlace object returned by a request contains the name and placeID fields: Places Swift SDK // Specify the place data types to return. let fields : [ PlaceProperty ] = [. placeID , . displayName ] Swift // Specify the place data types to return. let fields : [ GMSPlaceProperty ] = [. placeID , . name ] Objective-C // Specify the place data types to return.
- For example, if the field list includes GMSPlacePropertyPhotos to request the photos field in response, and the photos field in the response is empty, it is omitted from the response GMSPlace object.
- Key actions include: enabling Places API (New), using GMSPlacesClient to fetch place details with GMSFetchPlaceRequest, and specifying required place ID and data fields.
- Language Value if open Value if closed Value if status unknown Places Swift true false nil Swift .open .closed .unknown Objective-C GMSPlaceOpenStatusOpen GMSPlaceOpenStatusClosed GMSPlaceOpenStatusUnknown Billing for isOpenWithRequest The GMSPlacePropertyUTCOffsetMinutes and GMSPlacePropertyBusinessStatus fields are charged under the Basic Data SKU .

### Place Autocomplete (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete)
- Source ID: `site-docs-root`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When requesting Place Details (New) about the selected prediction, include the following parameters: The place ID from the Autocomplete (New) response The session token used in the Autocomplete (New) request The fields parameter specifying the Autocomplete (New) data fields you need No, needs only address and location Geocoding API could be a more cost-effective option than Place Details (New) for your application, depending on the performance of your Autocomplete (New) usage.
- Per-request pricing paired with Geocoding API is more cost-effective than per-session (session-based) pricing if both of the following conditions are met: If you only need the latitude/longitude or address of the user's selected place, the Geocoding API delivers this information for less than a Place Details (New) call.
- The API handles billing through session tokens and allows retrieval of detailed place information via a separate Place Details (New) request.
- This example sets the origin to the center of San Francisco: Places Swift SDK let filter = AutocompleteFilter ( origin : CLLocation ( latitude : 37.7749 , longitude : - 122.4194 )) let token = AutocompleteSessionToken () let autocompleteRequest = AutocompleteRequest ( query : "Amoeba" , sessionToken : token , filter : filter ) switch await placesClient . fetchAutocompleteSuggestions ( with : autocompleteRequest ) { case . success ( let autocompleteSuggestions ): for suggestion in autocompleteSuggestions { switch suggestion { case . place : // Show place suggestion data. } } case . failure ( let placesError ): // Handle error. } Swift let token = GMSAutocompleteSessionToken () let origin = CLLocation ( latitude : 37.7749 , longitude : - 122.4194 ) let filter = GMSAutocompleteFilter () filter . origin = origin let request = GMSAutocompleteRequest ( query : "Amoeba" ) request . filter = filter request . sessionToken = token GMSPlacesClient . shared (). fetchAutocompleteSuggestions ( from : request , callback : { ( results , error ) in if let error = error { print ( "Autocomplete error: \( error ) " ) return } if let autocompleteResults = results { for result in autocompleteResults { print ( "Result \( String ( describing : result . placeSuggestion ?. placeID )) with \( String ( describing : result . placeSuggestion ?. attributedFullText )) and distance: \( String ( describing : result . placeSuggestion ?. distanceMeters )) " ) } } }) Objective-C GMSAutocompleteFilter filter = [[ GMSAutocompleteFilter alloc ] init ]; filter . origin = [[ CLLocation alloc ] initWithLatitude : 37.395804 longitude : -122.077023 ]; GMSAutocompleteRequest request = [[ GMSAutocompleteRequest alloc ] initWithQuery : @"Amoeba" ]; request . sessionToken = token ; request . filter = filter ; [[ GMSPlacesClient sharedClient ] fetchAutocompleteSuggestionsFromRequest : request callback :^ ( NSArray<GMSAutocompleteSuggestion > results , NSError error ){ // Handle response for ( GMSAutocompleteSuggestion suggestion in results ) { if ( suggestion . placeSuggestion ) { // Show place suggestion data. } } }]; Customize content and theme Swift let uiCustomization = AutocompleteUICustomization ( listDensity : . multiLine , listItemIcon : . noIcon , theme : PlacesMaterialTheme () ) Add a Places Autocomplete widget (full code) Places Swift SDK struct PlaceAutocompleteDemoView : View { @ State private var fetchedPlace : Place ? @ State private var placesError : PlacesError ? @ State private var showWidget = false public var body : some View { VStack { Button ( "Search for a place" ) { showWidget . toggle () } . placeAutocomplete ( show : $ showWidget , onSelection : { ( autocompletePlaceSuggestion , autocompleteSessionToken ) in Task { let placesClient = await PlacesClient . shared let fetchPlaceRequest = FetchPlaceRequest ( placeID : autocompletePlaceSuggestion . placeID , placeProperties : [. displayName , . formattedAddress ], sessionToken : autocompleteSessionToken ) switch await placesClient . fetchPlace ( with : fetchPlaceRequest ) { case . success ( let place ): print ( "Fetched place: \( place ) " ) self . fetchedPlace = place case . failure ( let placesError ): print ( "Failed to fetch place: \( placesError ) " ) self . placesError = placesError } } }, onError : { placesError in self . placesError = placesError } ) } } } Autocomplete (New) optimization This section describes best practices to help you make the most of the Autocomplete (New) service.

### Nearby Search (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/nearby-search](https://developers.google.com/maps/documentation/places/ios-sdk/nearby-search)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Specify one or more of the following fields: The following fields trigger the Nearby Search Pro SKU : GMSPlacePropertyAddressComponents GMSPlacePropertyBusinessStatus GMSPlacePropertyCoordinate GMSPlacePropertyFormattedAddress GMSPlacePropertyName GMSPlacePropertyIconBackgroundColor GMSPlacePropertyIconImageURL GMSPlacePropertyPhotos GMSPlacePropertyPlaceID GMSPlacePropertyPlusCode GMSPlacePropertyTypes GMSPlacePropertyUTCOffsetMinutes GMSPlacePropertyViewport GMSPlacePropertyWheelchairAccessibleEntrance The following fields trigger the Nearby Search Enterprise SKU : GMSPlacePropertyCurrentOpeningHours GMSPlacePropertySecondaryOpeningHours GMSPlacePropertyPhoneNumber GMSPlacePropertyPriceLevel GMSPlacePropertyRating GMSPlacePropertyOpeningHours GMSPlacePropertyUserRatingsTotal GMSPlacePropertyWebsite The following fields trigger the Nearby Search Enterprise Plus SKU : GMSPlacePropertyCurbsidePickup GMSPlacePropertyDelivery GMSPlacePropertyDineIn GMSPlacePropertyEditorialSummary GMSPlacePropertyReservable GMSPlacePropertyReviews GMSPlacePropertyServesBeer GMSPlacePropertyServesBreakfast GMSPlacePropertyServesBrunch GMSPlacePropertyServesDinner GMSPlacePropertyServesLunch GMSPlacePropertyServesVegetarianFood GMSPlacePropertyServesWine GMSPlacePropertyTakeout The following example passes a list of two field values to specify that the GMSPlace object returned by a request contains the name and placeID fields: Places Swift SDK // Specify the place data types to return. let fields : [ PlaceProperty ] = [. placeID , . displayName ] Swift // Specify the place data types to return. let fields : [ GMSPlaceProperty ] = [. placeID , . name ] Objective-C // Specify the place data types to return.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The Nearby Search (New) API, available on multiple platforms, finds places within a circular region using a center point and radius.
- NSArray<NSString > includedTypes = @[ @"restaurant" , @"cafe" ] ; request . includedTypes = [[ NSMutableArray alloc ] initWithArray : includedTypes ]; [ placesClient searchNearbyWithRequest : request callback : ^ ( NSArray<GMSPlace > Nullable places , NSError Nullable error ) { if ( error != nil ) { NSLog ( @"An error occurred %@" , [ error localizedDescription ]); return ; } else { // Get list of places. placeResults = places ; } } ]; Nearby Search responses The Nearby Search API returns an array of matches in the form of GMSPlace objects, with one GMSPlace object per matching place.
- Optional parameters Use the GMSPlaceSearchNearbyRequest object to specify the optional parameters for the search. includedTypes/excludedTypes, includedPrimaryTypes/excludedPrimaryTypes Lets you specify a list of types from types Table A used to filter the search results.

