---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:07.462Z"
product_name: "Places SDK for iOS"
product_slug: "places-sdk-for-ios"
feature_name: "AI summaries for place attributes"
feature_slug: "ai-summaries-for-place-attributes"
latest_feature_date: "2025-10-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/ios-sdk/details-place"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/attributions"
keywords:
  - "ai"
  - "summaries"
  - "for"
  - "place"
  - "attributes"
  - "now"
  - "include"
  - "generated"
---

# AI summaries for place attributes

Product: Places SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

Place attributes now include AI-generated summaries through the AISummary family of types; Place attributes now include AI-generated summaries through the GMSPlaceAISummary family of types.

## Extended Definition

Place attributes now include AI-generated summaries through the AISummary family of types; Place attributes now include AI-generated summaries through the GMSPlaceAISummary family of types.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/ios-sdk/details-place](https://developers.google.com/maps/documentation/places/ios-sdk/details-place)
- [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace)
- [https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete)
- [https://developers.google.com/maps/documentation/places/ios-sdk/attributions](https://developers.google.com/maps/documentation/places/ios-sdk/attributions)

## Supporting Pages

### Place Details (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/details-place](https://developers.google.com/maps/documentation/places/ios-sdk/details-place)
- Source ID: `site-docs-root`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Specify one or more of the following fields: The following fields trigger the Place Details Essentials ID Only SKU : GMSPlacePropertyPlaceID GMSPlacePropertyPhotos The following fields trigger the Place Details Essentials SKU : GMSPlacePropertyAddressComponents GMSPlacePropertyFormattedAddress GMSPlacePropertyCoordinate GMSPlacePropertyPlusCode GMSPlacePropertyTypes GMSPlacePropertyViewport The following fields trigger the Place Details Pro SKU : GMSPlacePropertyBusinessStatus GMSPlacePropertyIconBackgroundColor GMSPlacePropertyIconImageURL GMSPlacePropertyName GMSPlacePropertyUTCOffsetMinutes GMSPlacePropertyWheelchairAccessibleEntrance The following fields trigger the Place Details Pro SKU : GMSPlacePropertyCurrentOpeningHours GMSPlacePropertySecondaryOpeningHours GMSPlacePropertyPhoneNumber GMSPlacePropertyPriceLevel GMSPlacePropertyRating GMSPlacePropertyOpeningHours GMSPlacePropertyUserRatingsTotal GMSPlacePropertyWebsite The following fields trigger the Place Details Enterprise SKU : GMSPlacePropertyCurbsidePickup GMSPlacePropertyDelivery GMSPlacePropertyDineIn GMSPlacePropertyEditorialSummary GMSPlacePropertyReservable GMSPlacePropertyReviews GMSPlacePropertyServesBeer GMSPlacePropertyServesBreakfast GMSPlacePropertyServesBrunch GMSPlacePropertyServesDinner GMSPlacePropertyServesLunch GMSPlacePropertyServesVegetarianFood GMSPlacePropertyServesWine GMSPlacePropertyTakeout The following example passes a list of two field values to specify that the GMSPlace object returned by a request contains the name and placeID fields: Places Swift SDK // Specify the place data types to return. let fields : [ PlaceProperty ] = [. placeID , . displayName ] Swift // Specify the place data types to return. let fields : [ GMSPlaceProperty ] = [. placeID , . name ] Objective-C // Specify the place data types to return.
- Places Swift SDK let isOpenRequest = IsPlaceOpenRequest ( place : place ) switch await placesClient . isPlaceOpen ( with : isOpenRequest ) { case . success ( let isOpenResponse ): switch isOpenResponse . status { case true : // Handle open case false : // Handle closed case nil : // Handle unknown case . failure ( let placesError ): // Handle error } Swift let isOpenRequest = GMSPlaceIsOpenRequest ( place : place , date : nil ) GMSPlacesClient . shared (). isOpen ( with : isOpenRequest ) { response , error in if let error = error { // Handle Error } switch response . status { case . open : // Handle open case . closed : // Handle closed case . unknown : // Handle unknown } } Objective-C GMSPlaceIsOpenRequest isOpenRequest = [[ GMSPlaceIsOpenRequest alloc ] initWithPlace : place date : nil ]; [[ GMSPlacesClient sharedClient ] isOpenWithRequest : isOpenRequest callback :^ ( GMSPlaceIsOpenResponse response , NSError Nullable error ) { if ( error ) { // Handle error } switch ( response . status ) { case GMSPlaceOpenStatusOpen : // Handle open case GMSPlaceOpenStatusClosed : // Handle closed case GMSPlaceOpenStatusUnknown : // Handle unknown } }]; Required parameters Use the GMSFetchPlaceRequest object to specify the required parameters.
- The GMSPlaceIsOpenWithRequest method requires the following fields to be set in the GMSPlace object: GMSPlacePropertyUTCOffsetMinutes GMSPlacePropertyBusinessStatus GMSPlacePropertyOpeningHours GMSPlacePropertyCurrentOpeningHours GMSPlacePropertySecondaryOpeningHours If these fields are not provided in the Place object, or if you pass a place ID, the method uses GMSPlacesClient GMSFetchPlaceRequest: to fetch them. isOpenWithRequest response isOpenWithRequest returns a GMSPlaceIsOpenResponse object containing a boolean value named status that indicates whether the business is open, closed, or if the status is unknown.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The Places SDK for iOS allows apps to retrieve detailed information about places using a place ID.

### "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace)
- Source ID: `site-docs-reference`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Declaration Swift var menuForChildren : GMSBooleanPlaceAttribute { get } Objective-C @property ( nonatomic , readonly ) GMSBooleanPlaceAttribute menuForChildren ; servesCocktails Place Attribute indicating place serves cocktails.
- Page Summary outlined flag GMSPlace is an immutable class that represents a particular physical place, encapsulating information like name, location, and other relevant details.
- Developers can use this class to retrieve and display detailed information about places within their applications using the Google Maps SDK for iOS.
- Google Maps links information is only available through the Places API (New).

### Place Autocomplete (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- The following example specifies a query string of "Soccer" and uses the types parameter to restrict results to establishments of type "sporting goods store" : Places Swift SDK let filter = AutocompleteFilter ( types : [ PlaceType ( rawValue : "sporting goods store" ) ]) let token = AutocompleteSessionToken () let autocompleteRequest = AutocompleteRequest ( query : "Soccer" , sessionToken : token , filter : filter ) switch await placesClient . fetchAutocompleteSuggestions ( with : autocompleteRequest ) { case . success ( let autocompleteSuggestions ): for suggestion in autocompleteSuggestions { switch suggestion { case . place : // Show place suggestion data. } } case . failure ( let placesError ): // Handle error. } Swift let token = GMSAutocompleteSessionToken () let filter = GMSAutocompleteFilter () filter . types = [ "sporting goods store" ] let request = GMSAutocompleteRequest ( query : "Soccer" ) request . filter = filter request . sessionToken = token GMSPlacesClient . shared (). fetchAutocompleteSuggestions ( from : request , callback : { ( results , error ) in if let error = error { print ( "Autocomplete error: \( error ) " ) return } if let autocompleteResults = results { for result in autocompleteResults { print ( "Result \( String ( describing : result . placeSuggestion ?. placeID )) with \( String ( describing : result . placeSuggestion ?. attributedFullText )) " ) } } }) Objective-C GMSAutocompleteFilter filter = [[ GMSAutocompleteFilter alloc ] init ]; filter . types = @[ "sporting goods store" ] ; GMSAutocompleteRequest request = [[ GMSAutocompleteRequest alloc ] initWithQuery : @"Soccer" ]; request . sessionToken = token ; request . filter = filter ; [[ GMSPlacesClient sharedClient ] fetchAutocompleteSuggestionsFromRequest : request callback :^ ( NSArray<GMSAutocompleteSuggestion > results , NSError error ){ // Handle response for ( GMSAutocompleteSuggestion suggestion in results ) { if ( suggestion . placeSuggestion ) { // Show place suggestion data. } } }]; Use origin When you include the origin parameter in the request, specified as latitude and longitude coordinates, the API includes the straight-line distance from the origin to the destination in the response.
- For example, to limit results to sporting goods stores, specify that type in your AutocompleteFilter : Places Swift SDK let filter = AutocompleteFilter ( types : [ PlaceType ( rawValue : "sporting goods store" ) ]) Swift let filter = GMSAutocompleteFilter () filter . types = [ "sporting goods store" ] Objective-C GMSAutocompleteFilter filter = [[ GMSAutocompleteFilter alloc ] init ]; filter . types = @[ "sporting goods store" ] ; countries Only include results from the list of specified regions, specified as an array of up to 15 ccTLD ("top-level domain") two-character values.
- When requesting Place Details (New) about the selected prediction, include the following parameters: The place ID from the Autocomplete (New) response The session token used in the Autocomplete (New) request The fields parameter specifying the Autocomplete (New) data fields you need No, needs only address and location Geocoding API could be a more cost-effective option than Place Details (New) for your application, depending on the performance of your Autocomplete (New) usage.
- This example sets the origin to the center of San Francisco: Places Swift SDK let filter = AutocompleteFilter ( origin : CLLocation ( latitude : 37.7749 , longitude : - 122.4194 )) let token = AutocompleteSessionToken () let autocompleteRequest = AutocompleteRequest ( query : "Amoeba" , sessionToken : token , filter : filter ) switch await placesClient . fetchAutocompleteSuggestions ( with : autocompleteRequest ) { case . success ( let autocompleteSuggestions ): for suggestion in autocompleteSuggestions { switch suggestion { case . place : // Show place suggestion data. } } case . failure ( let placesError ): // Handle error. } Swift let token = GMSAutocompleteSessionToken () let origin = CLLocation ( latitude : 37.7749 , longitude : - 122.4194 ) let filter = GMSAutocompleteFilter () filter . origin = origin let request = GMSAutocompleteRequest ( query : "Amoeba" ) request . filter = filter request . sessionToken = token GMSPlacesClient . shared (). fetchAutocompleteSuggestions ( from : request , callback : { ( results , error ) in if let error = error { print ( "Autocomplete error: \( error ) " ) return } if let autocompleteResults = results { for result in autocompleteResults { print ( "Result \( String ( describing : result . placeSuggestion ?. placeID )) with \( String ( describing : result . placeSuggestion ?. attributedFullText )) and distance: \( String ( describing : result . placeSuggestion ?. distanceMeters )) " ) } } }) Objective-C GMSAutocompleteFilter filter = [[ GMSAutocompleteFilter alloc ] init ]; filter . origin = [[ CLLocation alloc ] initWithLatitude : 37.395804 longitude : -122.077023 ]; GMSAutocompleteRequest request = [[ GMSAutocompleteRequest alloc ] initWithQuery : @"Amoeba" ]; request . sessionToken = token ; request . filter = filter ; [[ GMSPlacesClient sharedClient ] fetchAutocompleteSuggestionsFromRequest : request callback :^ ( NSArray<GMSAutocompleteSuggestion > results , NSError error ){ // Handle response for ( GMSAutocompleteSuggestion suggestion in results ) { if ( suggestion . placeSuggestion ) { // Show place suggestion data. } } }]; Customize content and theme Swift let uiCustomization = AutocompleteUICustomization ( listDensity : . multiLine , listItemIcon : . noIcon , theme : PlacesMaterialTheme () ) Add a Places Autocomplete widget (full code) Places Swift SDK struct PlaceAutocompleteDemoView : View { @ State private var fetchedPlace : Place ? @ State private var placesError : PlacesError ? @ State private var showWidget = false public var body : some View { VStack { Button ( "Search for a place" ) { showWidget . toggle () } . placeAutocomplete ( show : $ showWidget , onSelection : { ( autocompletePlaceSuggestion , autocompleteSessionToken ) in Task { let placesClient = await PlacesClient . shared let fetchPlaceRequest = FetchPlaceRequest ( placeID : autocompletePlaceSuggestion . placeID , placeProperties : [. displayName , . formattedAddress ], sessionToken : autocompleteSessionToken ) switch await placesClient . fetchPlace ( with : fetchPlaceRequest ) { case . success ( let place ): print ( "Fetched place: \( place ) " ) self . fetchedPlace = place case . failure ( let placesError ): print ( "Failed to fetch place: \( placesError ) " ) self . placesError = placesError } } }, onError : { placesError in self . placesError = placesError } ) } } } Autocomplete (New) optimization This section describes best practices to help you make the most of the Autocomplete (New) service.

### Policies and attributions for Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/attributions](https://developers.google.com/maps/documentation/places/ios-sdk/attributions)
- Source ID: `site-docs-root`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Display third-party attributions for places and photos, using UITextView for clickable links, and include explainer text for European users about search ranking factors.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["Applications using the Places SDK for iOS must include a Terms of Use and Privacy Policy, referencing Google's policies.
- NSLog ( @"Error: %@" , [ error description ]); } else { // Get attribution for the first photo in the list. if ( photos . results . count > 0 ) { GMSPlacePhotoMetadata photo = photos . results . firstObject ; NSAttributedString attributions = photo . attributions ; } } }]; Display a review A GMSPlace object can contain up to five reviews, where each review is represented by a GMSPlaceReview object.
- Included Google Maps attribution For Google Maps attribution that is already provided by Google Maps Platform in the user interface, such as in Places UI Kit: Don't remove included attribution regardless of where it is displayed.

