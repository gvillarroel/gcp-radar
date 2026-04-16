---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:07.480Z"
product_name: "Places SDK for iOS"
product_slug: "places-sdk-for-ios"
feature_name: "GMSAutocompleteFilter.types property"
feature_slug: "gmsautocompletefilter-types-property"
latest_feature_date: "2022-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteFilter"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/place-types"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompletePlaceSuggestion"
keywords:
  - "gmsautocompletefilter"
  - "types"
  - "property"
  - "the"
  - "lets"
  - "callers"
  - "restrict"
  - "place"
---

# GMSAutocompleteFilter.types property

Product: Places SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

The types property lets callers restrict Place Autocomplete results to up to five values.

## Extended Definition

The types property lets callers restrict Place Autocomplete results to up to five values.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteFilter](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteFilter)
- [https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete)
- [https://developers.google.com/maps/documentation/places/ios-sdk/place-types](https://developers.google.com/maps/documentation/places/ios-sdk/place-types)
- [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompletePlaceSuggestion](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompletePlaceSuggestion)

## Supporting Pages

### "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteFilter](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteFilter)
- Source ID: `site-docs-reference`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Declaration Swift var type : GMSPlacesAutocompleteTypeFilter { get set } Objective-C @property ( nonatomic ) GMSPlacesAutocompleteTypeFilter type ; types The filter applied to an autocomplete request to restrict results using up to 5 different place types.
- Declaration Swift var locationBias : ( any GMSPlaceLocationBias )? { get set } Objective-C @property ( nonatomic , nullable ) id < GMSPlaceLocationBias > locationBias ; locationRestriction The optional location restriction to limit place results.
- Page Summary outlined flag GMSAutocompleteFilter customizes autocomplete suggestions by restricting results based on criteria like place types, countries, and location.
- It can filter results by place types using the types property (up to five).

### Place Autocomplete (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- The next example changes the previous request to use location bias: Places Swift SDK let center = ( 37.775061 , - 122.419400 ) let radius = 5000.0 let bias = CircularCoordinateRegion ( center : center , radius : radius ) let filter = AutocompleteFilter ( coordinateRegionBias : bias ) let token = AutocompleteSessionToken () let autocompleteRequest = AutocompleteRequest ( query : "Sicilian piz" , sessionToken : token , filter : filter ) switch await placesClient . fetchAutocompleteSuggestions ( with : autocompleteRequest ) { case . success ( let autocompleteSuggestions ): for suggestion in autocompleteSuggestions { switch suggestion { case . place : // Show place suggestion data. } } case . failure ( let placesError ): // Handle error. } Swift let token = GMSAutocompleteSessionToken () let center = CLLocationCoordinate2DMake ( 37.775061 , - 122.419400 ) let radius = 5000.0 let filter = GMSAutocompleteFilter () filter . locationBias = GMSPlaceCircularLocationOption ( center , radius ) let request = GMSAutocompleteRequest ( query : "Piz" ) request . filter = filter request . sessionToken = token GMSPlacesClient . shared (). fetchAutocompleteSuggestions ( from : request , callback : { ( results , error ) in if let error = error { print ( "Autocomplete error: \( error ) " ) return } if let autocompleteResults = results { for result in autocompleteResults { print ( "Result \( String ( describing : result . placeSuggestion ?. placeID )) with \( String ( describing : result . placeSuggestion ?. attributedFullText )) " ) } } }) Objective-C CLLocationCoordinate2D center = CLLocationCoordinate2DMake ( 37.775061 , -122.419400 ); radius = 5000.0 ; GMSAutocompleteFilter filter = [[ GMSAutocompleteFilter alloc ] init ]; filter . locationBias = GMSPlaceCircularLocationOption ( center , radius ); GMSAutocompleteRequest request = [[ GMSAutocompleteRequest alloc ] initWithQuery : @"Sicilian piz" ]; request . sessionToken = token ; request . filter = filter ; [[ GMSPlacesClient sharedClient ] fetchAutocompleteSuggestionsFromRequest : request callback :^ ( NSArray<GMSAutocompleteSuggestion > results , NSError error ){ // Handle response for ( GMSAutocompleteSuggestion suggestion in results ) { if ( suggestion . placeSuggestion ) { // Show place suggestion data. } } }]; Use types Use the types parameter to restrict results from a request to be of a certain type as listed in Table A and Table B .
- The following example specifies a query string of "Soccer" and uses the types parameter to restrict results to establishments of type "sporting goods store" : Places Swift SDK let filter = AutocompleteFilter ( types : [ PlaceType ( rawValue : "sporting goods store" ) ]) let token = AutocompleteSessionToken () let autocompleteRequest = AutocompleteRequest ( query : "Soccer" , sessionToken : token , filter : filter ) switch await placesClient . fetchAutocompleteSuggestions ( with : autocompleteRequest ) { case . success ( let autocompleteSuggestions ): for suggestion in autocompleteSuggestions { switch suggestion { case . place : // Show place suggestion data. } } case . failure ( let placesError ): // Handle error. } Swift let token = GMSAutocompleteSessionToken () let filter = GMSAutocompleteFilter () filter . types = [ "sporting goods store" ] let request = GMSAutocompleteRequest ( query : "Soccer" ) request . filter = filter request . sessionToken = token GMSPlacesClient . shared (). fetchAutocompleteSuggestions ( from : request , callback : { ( results , error ) in if let error = error { print ( "Autocomplete error: \( error ) " ) return } if let autocompleteResults = results { for result in autocompleteResults { print ( "Result \( String ( describing : result . placeSuggestion ?. placeID )) with \( String ( describing : result . placeSuggestion ?. attributedFullText )) " ) } } }) Objective-C GMSAutocompleteFilter filter = [[ GMSAutocompleteFilter alloc ] init ]; filter . types = @[ "sporting goods store" ] ; GMSAutocompleteRequest request = [[ GMSAutocompleteRequest alloc ] initWithQuery : @"Soccer" ]; request . sessionToken = token ; request . filter = filter ; [[ GMSPlacesClient sharedClient ] fetchAutocompleteSuggestionsFromRequest : request callback :^ ( NSArray<GMSAutocompleteSuggestion > results , NSError error ){ // Handle response for ( GMSAutocompleteSuggestion suggestion in results ) { if ( suggestion . placeSuggestion ) { // Show place suggestion data. } } }]; Use origin When you include the origin parameter in the request, specified as latitude and longitude coordinates, the API includes the straight-line distance from the origin to the destination in the response.
- The following example uses location restriction to limit the request to a circular location restriction with a 5000-meter radius centered on San Francisco: Places Swift SDK let center = ( 37.775061 , - 122.419400 ) let radius = 5000.0 let restriction = CircularCoordinateRegion ( center : center , radius : radius ) let filter = AutocompleteFilter ( coordinateRegionRestriction : restriction ) let token = AutocompleteSessionToken () let autocompleteRequest = AutocompleteRequest ( query : "Sicilian piz" , sessionToken : token , filter : filter ) switch await placesClient . fetchAutocompleteSuggestions ( with : autocompleteRequest ) { case . success ( let autocompleteSuggestions ): for suggestion in autocompleteSuggestions { switch suggestion { case . place : // Show place suggestion data. } } case . failure ( let placesError ): // Handle error. } Swift let token = GMSAutocompleteSessionToken () let center = CLLocationCoordinate2DMake ( 37.775061 , - 122.419400 ) let radius = 5000.0 let filter = GMSAutocompleteFilter () filter . locationRestriction = GMSPlaceCircularLocationOption ( center , radius ) let request = GMSAutocompleteRequest ( query : "Piz" ) request . filter = filter request . sessionToken = token GMSPlacesClient . shared (). fetchAutocompleteSuggestions ( from : request , callback : { ( results , error ) in if let error = error { print ( "Autocomplete error: \( error ) " ) return } if let autocompleteResults = results { for result in autocompleteResults { print ( "Result \( String ( describing : result . placeSuggestion ?. placeID )) with \( String ( describing : result . placeSuggestion ?. attributedFullText )) " ) } } }) Objective-C CLLocationCoordinate2D center = CLLocationCoordinate2DMake ( 37.775061 , -122.419400 ); radius = 5000.0 ; GMSAutocompleteFilter filter = [[ GMSAutocompleteFilter alloc ] init ]; filter . locationRestriction = GMSPlaceCircularLocationOption ( center , radius ); GMSAutocompleteRequest request = [[ GMSAutocompleteRequest alloc ] initWithQuery : @"Sicilian piz" ]; request . sessionToken = token ; request . filter = filter ; [[ GMSPlacesClient sharedClient ] fetchAutocompleteSuggestionsFromRequest : request callback :^ ( NSArray<GMSAutocompleteSuggestion > results , NSError error ){ // Handle response for ( GMSAutocompleteSuggestion suggestion in results ) { if ( suggestion . placeSuggestion ) { // Show place suggestion data. } } }]; With location bias, the location serves as a bias, which means results around the specified location can be returned, including results outside the specified area.
- Places Swift SDK let center = ( 37.3913916 , - 122.0879074 ) let northEast = ( 37.388162 , - 122.088137 ) let southWest = ( 37.395804 , - 122.077023 ) let bias = RectangularCoordinateRegion ( northEast : northEast , southWest : southWest ) let filter = AutocompleteFilter ( types : [ . restaurant ], origin : center , coordinateRegionBias : bias ) let autocompleteRequest = AutocompleteRequest ( query : "Sicilian piz" , filter : filter ) switch await placesClient . fetchAutocompleteSuggestions ( with : autocompleteRequest ) { case . success ( let autocompleteSuggestions ): // Handle suggestions. case . failure ( let placesError ): // Handle error. } Swift let token = GMSAutocompleteSessionToken () let northWestBounds = CLLocationCoordinate2DMake ( 40.921628 , - 73.700051 ) let southEastBounds = CLLocationCoordinate2DMake ( 40.477398 , - 74.259087 ) let filter = GMSAutocompleteFilter () filter . types = [ kGMSPlaceTypeRestaurant ] filter . locationBias = GMSPlaceRectangularLocationOption ( northWestBounds , southEastBounds ) let request = GMSAutocompleteRequest ( query : "Spagh" ) request . filter = filter request . sessionToken = token GMSPlacesClient . shared (). fetchAutocompleteSuggestions ( from : request , callback : { ( results , error ) in if let error = error { print ( "Autocomplete error: \( error ) " ) return } if let autocompleteResults = results { for result in autocompleteResults { print ( "Result \( String ( describing : result . placeSuggestion ?. placeID )) with \( String ( describing : result . placeSuggestion ?. attributedFullText )) " ) } } }) Objective-C CLLocationCoordinate2D northEast = CLLocationCoordinate2DMake ( 37.388162 , -122.088137 ); CLLocationCoordinate2D southWest = CLLocationCoordinate2DMake ( 37.395804 , -122.077023 ); GMSAutocompleteFilter filter = [[ GMSAutocompleteFilter alloc ] init ]; filter . types = @[ kGMSPlaceTypeRestaurant ] ; filter . locationBias = GMSPlaceRectangularLocationOption ( northEast , southWest ); GMSAutocompleteRequest request = [[ GMSAutocompleteRequest alloc ] initWithQuery : @"Sicilian piz" ]; request . sessionToken = token ; request . filter = filter ; [[ GMSPlacesClient sharedClient ] fetchAutocompleteSuggestionsFromRequest : request callback :^ ( NSArray<GMSAutocompleteSuggestion > results , NSError error ){ // Handle response for ( GMSAutocompleteSuggestion suggestion in results ) { if ( suggestion . placeSuggestion ) { // Show place suggestion data. } } }]; Autocomplete (New) responses Autocomplete returns an array of up to five GMSAutocompleteSuggestion instances.

### Places Types (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/place-types](https://developers.google.com/maps/documentation/places/ios-sdk/place-types)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- About the type tables Table A lists the types that are used in the following ways: As part of a response from Place Details (New), Nearby Search (New), and Text Search (New), the values in Table A are used to populate the types property of the GMSPlace instance.
- When specified in the request, the type acts as a filter to restrict the response to only include places that match the specified types.
- As part of a Place Autocomplete (New) response used to populate the types property of the GMSAutocompletePlaceSuggestion instance.
- The request must specify GMSPlacePropertyTypes in the field list.

### "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompletePlaceSuggestion](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompletePlaceSuggestion)
- Source ID: `site-docs-reference`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Declaration Swift var types : [ String ] { get } Objective-C @property ( nonatomic , copy , readonly ) NSArray < NSString > Nonnull types ; distanceMeters The straight line distance in meters between the origin and this suggestion if a valid origin is specified in the GMSAutocompleteFilter of the request.
- For example, you can make every match bold using enumerateAttribute: UIFont regularFont = [UIFont systemFontOfSize:[UIFont labelFontSize]]; UIFont boldFont = [UIFont boldSystemFontOfSize:[UIFont labelFontSize]]; NSMutableAttributedString bolded = [suggestion.attributedFullText mutableCopy]; [bolded enumerateAttribute:kGMSAutocompleteMatchAttribute inRange:NSMakeRange(0, bolded.length) options:0 usingBlock:^(id value, NSRange range, BOOL stop) { UIFont font = (value == nil) ? regularFont : boldFont; [bolded addAttribute:NSFontAttributeName value:font range:range]; }]; label.attributedText = bolded; Declaration Swift @NSCopying var attributedFullText : NSAttributedString { get } Objective-C @property ( nonatomic , copy , readonly ) NSAttributedString Nonnull attributedFullText ; attributedPrimaryText The primary text of a suggestion as a NSAttributedString, usually the name of the place.
- Declaration Swift @NSCopying var attributedPrimaryText : NSAttributedString { get } Objective-C @property ( nonatomic , copy , readonly ) NSAttributedString Nonnull attributedPrimaryText ; attributedSecondaryText The secondary text of a suggestion as a NSAttributedString, usually the location of the place.
- Declaration Swift @NSCopying var attributedSecondaryText : NSAttributedString ? { get } Objective-C @property ( nonatomic , copy , readonly , nullable ) NSAttributedString attributedSecondaryText ; placeID A property representing the place ID of the suggestion, suitable for use in a place details request.

