---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:07.465Z"
product_name: "Places SDK for iOS"
product_slug: "places-sdk-for-ios"
feature_name: "Review visit month and year"
feature_slug: "review-visit-month-and-year"
latest_feature_date: "2025-10-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/ios-sdk/text-search"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/attributions"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/nearby-search"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace"
keywords:
  - "review"
  - "visit"
  - "month"
  - "and"
  - "year"
  - "objects"
  - "now"
  - "include"
---

# Review visit month and year

Product: Places SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

Review objects now include visit month and year metadata; Review objects now include visit month and year metadata.

## Extended Definition

Review objects now include visit month and year metadata; Review objects now include visit month and year metadata.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/ios-sdk/text-search](https://developers.google.com/maps/documentation/places/ios-sdk/text-search)
- [https://developers.google.com/maps/documentation/places/ios-sdk/attributions](https://developers.google.com/maps/documentation/places/ios-sdk/attributions)
- [https://developers.google.com/maps/documentation/places/ios-sdk/nearby-search](https://developers.google.com/maps/documentation/places/ios-sdk/nearby-search)
- [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace)

## Supporting Pages

### Text Search (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/text-search](https://developers.google.com/maps/documentation/places/ios-sdk/text-search)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Places Swift SDK let restriction = GMSPlaceRectangularLocationOption ( northEast : CLLocationCoordinate2D ( latitude : 20 , longitude : 30 ), southWest : CLLocationCoordinate2D ( latitude : 40 , longitude : 50 ) ) let searchByTextRequest = SearchByTextRequest ( textQuery : "pizza in New York" , placeProperties : [ . name , . placeID ], locationRestriction : restriction , includedType : . restaurant , maxResultCount : 5 , minRating : 3.5 , priceLevels : [ . moderate , . inexpensive ], isStrictTypeFiltering : true ) switch await placesClient . searchByText ( with : searchByTextRequest ) { case . success ( let places ): // Handle places case . failure ( let placesError ): // Handle error } Swift // Create the GMSPlaceSearchByTextRequest object. let myProperties = [ GMSPlaceProperty . name , GMSPlaceProperty . placeID ]. map { $0 . rawValue } let request = GMSPlaceSearchByTextRequest ( textQuery : "pizza in New York" , placeProperties : myProperties ) request . isOpenNow = true request . includedType = "restaurant" request . maxResultCount = 5 request . minRating = 3.5 request . rankPreference = . distance request . isStrictTypeFiltering = true request . locationBias = GMSPlaceCircularLocationOption ( CLLocationCoordinate2DMake ( 40.7 , - 74.0 ), 200.0 ) // Array to hold the places in the response var placeResults : [ GMSPlace ] = [] let callback : GMSPlaceSearchByTextResultCallback = { [ weak self ] results , error in guard let self , error == nil else { if let error { print ( error . localizedDescription ) } return } guard let results = results as ? [ GMSPlace ] else { return } placeResults = results } GMSPlacesClient . shared (). searchByText ( with : request , callback : callback ) Objective-C // Create the GMSPlaceSearchByTextRequest object.
- GMSPlaceSearchByTextRequest request = [[ GMSPlaceSearchByTextRequest alloc ] initWithTextQuery : @"pizza in New York" placeProperties : @[ GMSPlacePropertyName , GMSPlacePropertyPlaceID ] ]; request . isOpenNow = YES ; request . includedType = @"restaurant" ; request . maxResultCount = 5 ; request . minRating = 3.5 ; request . rankPreference = GMSPlaceSearchByTextRankPreferenceDistance ; request . isStrictTypeFiltering = YES ; request . priceLevels = @[ @( kGMSPlacesPriceLevelFree ) , @( kGMSPlacesPriceLevelCheap ) ] ; request . locationBias = GMSPlaceCircularLocationOption ( CLLocationCoordinate2DMake ( 40.7 , -74.0 ), 200.0 ); // Array to hold the places in the response placeResults = [ NSArray array ]; // Create the GMSPlaceSearchByTextRequest object. [ placesClient searchByTextWithRequest : request callback : ^ ( NSArray<GMSPlace > Nullable placeResults , NSError Nullable error ) { if ( error != nil ) { NSLog ( @"An error occurred %@" , [ error localizedDescription ]); return ; } else { if ( placeResults . count > 0 ) { // Get list of places. placeResults = placeResults ; } } } ]; Text Search responses The Text Search API returns an array of matches in the form of GMSPlace objects, with one GMSPlace object per matching place.
- For example: Places Swift SDK let request = SearchByTextRequest () request . shouldIncludePureServiceAreaBusinesses = true Swift let request = SearchByTextRequest () request . shouldIncludePureServiceAreaBusinesses : true Objective-C GMSPlaceSearchByTextRequest request = [[ GMSPlaceSearchByTextRequest alloc ] initWithTextQuery : @"pizza in New York" placeProperties : @[ GMSPlacePropertyAll ] ]; request . shouldIncludePureServiceAreaBusinesses = YES ; Display attributions in your app When your app displays information obtained from GMSPlacesClient , such as photos and reviews, the app must also display the required attributions.
- Specify one or more of the following fields: The following fields trigger the Text Search Essentials ID Only SKU : GMSPlacePropertyPlaceID The following fields trigger the Text Search Pro SKU : GMSPlacePropertyAddressComponents GMSPlacePropertyBusinessStatus GMSPlacePropertyCoordinate GMSPlacePropertyFormattedAddress GMSPlacePropertyIconBackgroundColor GMSPlacePropertyIconImageURL GMSPlacePropertyName GMSPlacePropertyPhotos GMSPlacePropertyPlusCode GMSPlacePropertyTypes GMSPlacePropertyUTCOffsetMinutes GMSPlacePropertyViewport GMSPlacePropertyWheelchairAccessibleEntrance The following fields trigger the Text Search Enterprise SKU : GMSPlacePropertyCurrentOpeningHours GMSPlacePropertySecondaryOpeningHours GMSPlacePropertyPhoneNumber GMSPlacePropertyPriceLevel GMSPlacePropertyRating GMSPlacePropertyOpeningHours GMSPlacePropertyUserRatingsTotal GMSPlacePropertyWebsite The following fields trigger the Text Search Enterprise Plus SKU : GMSPlacePropertyCurbsidePickup GMSPlacePropertyDelivery GMSPlacePropertyDineIn GMSPlacePropertyEditorialSummary GMSPlacePropertyReservable GMSPlacePropertyReviews GMSPlacePropertyServesBeer GMSPlacePropertyServesBreakfast GMSPlacePropertyServesBrunch GMSPlacePropertyServesDinner GMSPlacePropertyServesLunch GMSPlacePropertyServesVegetarianFood GMSPlacePropertyServesWine GMSPlacePropertyTakeout textQuery The text string on which to search, for example: "restaurant", "123 Main Street", or "best place to visit in San Francisco".

### Policies and attributions for Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/attributions](https://developers.google.com/maps/documentation/places/ios-sdk/attributions)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- GMSPlaceReview firstReview = [ place reviews ][ 0 ]; // Use firstReview to access review text, authorAttribution, and other fields. } }]; Display third-party attributions Attributions to third-party providers are provided as NSAttributedString objects that contain content and links that you must preserve and display to the user.
- Ensure that photo attributions include author details when available and are displayed alongside the image, while review display requires author name, photo, and profile link if available.
- When available in the author attribution field of the GMSPlaceReview object, we recommend you include the author's photo and link to their profile as well.
- To access the reviews: Swift // Define a Place ID. let placeID = "ChIJV4k8 9UodTERU5KXbkYpSYs" // Specify the place data types to return. let myProperties : [ GMSPlaceProperty ] = [. name , . website , . reviews ] // Create the GMSFetchPlaceRequest object. let fetchPlaceRequest = GMSFetchPlaceRequest ( placeID : placeID , placeProperties : myProperties ) client . fetchPlaceWithRequest ( fetchPlaceRequest : fetchPlaceRequest , callback : { ( place : GMSPlace ?, error : Error ?) in if let error = error { print ( "An error occurred: \( error . localizedDescription ) " ) return } if let place = place { let firstReview : GMSPlaceReview = place . reviews ![ 0 ] // Use firstReview to access review text, authorAttribution, and other fields. } }) Objective-C // Define a Place ID.

### Nearby Search (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/nearby-search](https://developers.google.com/maps/documentation/places/ios-sdk/nearby-search)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Responses include an array of GMSPlace objects containing place details, and you can further request the open status of a place using GMSPlacesClient isOpenWithRequest: .
- Places Swift SDK let restriction = CircularCoordinateRegion ( center : CLLocationCoordinate2DMake ( 37.7937 , - 122.3965 ), radius : 500 ) let searchNearbyRequest = SearchNearbyRequest ( locationRestriction : restriction , placeProperties : [ . name , . coordinate ], includedTypes : [ . restaurant , . cafe ], ) switch await placesClient . searchNearby ( with : searchNearbyRequest ) { case . success ( let places ): // Handle places case . failure ( let placesError ): // Handle error } Swift // Array to hold the places in the response var placeResults : [ GMSPlace ] = [] // Define the search area as a 500 meter diameter circle in San Francisco, CA. let circularLocationRestriction = GMSPlaceCircularLocationOption ( CLLocationCoordinate2DMake ( 37.7937 , - 122.3965 ), 500 ) // Specify the fields to return in the GMSPlace object for each place in the response. let placeProperties = [ GMSPlaceProperty . name , GMSPlaceProperty . coordinate ]. map { $0 . rawValue } // Create the GMSPlaceSearchNearbyRequest, specifying the search area and GMSPlace fields to return. var request = GMSPlaceSearchNearbyRequest ( locationRestriction : circularLocationRestriction , placeProperties : placeProperties ) let includedTypes = [ "restaurant" , "cafe" ] request . includedTypes = includedTypes let callback : GMSPlaceSearchNearbyResultCallback = { [ weak self ] results , error in guard let self , error == nil else { if let error { print ( error . localizedDescription ) } return } guard let results = results as ? [ GMSPlace ] else { return } placeResults = results } GMSPlacesClient . shared (). searchNearby ( with : request , callback : callback ) Objective-C // Array to hold the places in the response placeResults = [ NSArray array ]; // Define the search area as a 500 meter diameter circle in San Francisco, CA. id<GMSPlaceLocationRestriction> circularLocation = GMSPlaceCircularLocationOption ( CLLocationCoordinate2DMake ( 37.7937 , -122.3965 ), 500 ); // Create the GMSPlaceSearchNearbyRequest, specifying the search area and GMSPlace fields to return.
- Specify one or more of the following fields: The following fields trigger the Nearby Search Pro SKU : GMSPlacePropertyAddressComponents GMSPlacePropertyBusinessStatus GMSPlacePropertyCoordinate GMSPlacePropertyFormattedAddress GMSPlacePropertyName GMSPlacePropertyIconBackgroundColor GMSPlacePropertyIconImageURL GMSPlacePropertyPhotos GMSPlacePropertyPlaceID GMSPlacePropertyPlusCode GMSPlacePropertyTypes GMSPlacePropertyUTCOffsetMinutes GMSPlacePropertyViewport GMSPlacePropertyWheelchairAccessibleEntrance The following fields trigger the Nearby Search Enterprise SKU : GMSPlacePropertyCurrentOpeningHours GMSPlacePropertySecondaryOpeningHours GMSPlacePropertyPhoneNumber GMSPlacePropertyPriceLevel GMSPlacePropertyRating GMSPlacePropertyOpeningHours GMSPlacePropertyUserRatingsTotal GMSPlacePropertyWebsite The following fields trigger the Nearby Search Enterprise Plus SKU : GMSPlacePropertyCurbsidePickup GMSPlacePropertyDelivery GMSPlacePropertyDineIn GMSPlacePropertyEditorialSummary GMSPlacePropertyReservable GMSPlacePropertyReviews GMSPlacePropertyServesBeer GMSPlacePropertyServesBreakfast GMSPlacePropertyServesBrunch GMSPlacePropertyServesDinner GMSPlacePropertyServesLunch GMSPlacePropertyServesVegetarianFood GMSPlacePropertyServesWine GMSPlacePropertyTakeout The following example passes a list of two field values to specify that the GMSPlace object returned by a request contains the name and placeID fields: Places Swift SDK // Specify the place data types to return. let fields : [ PlaceProperty ] = [. placeID , . displayName ] Swift // Specify the place data types to return. let fields : [ GMSPlaceProperty ] = [. placeID , . name ] Objective-C // Specify the place data types to return.
- Places Swift SDK let isOpenRequest = IsPlaceOpenRequest ( place : place ) switch await placesClient . isPlaceOpen ( with : isOpenRequest ) { case . success ( let isOpenResponse ): switch isOpenResponse . status { case true : // Handle open case false : // Handle closed case nil : // Handle unknown case . failure ( let placesError ): // Handle error } Swift let isOpenRequest = GMSPlaceIsOpenRequest ( place : place , date : nil ) GMSPlacesClient . shared (). isOpen ( with : isOpenRequest ) { response , error in if let error = error { // Handle Error } switch response . status { case . open : // Handle open case . closed : // Handle closed case . unknown : // Handle unknown } } Objective-C GMSPlaceIsOpenRequest isOpenRequest = [[ GMSPlaceIsOpenRequest alloc ] initWithPlace : place date : nil ]; [[ GMSPlacesClient sharedClient ] isOpenWithRequest : isOpenRequest callback :^ ( GMSPlaceIsOpenResponse response , NSError Nullable error ) { if ( error ) { // Handle error } switch ( response . status ) { case GMSPlaceOpenStatusOpen : // Handle open case GMSPlaceOpenStatusClosed : // Handle closed case GMSPlaceOpenStatusUnknown : // Handle unknown } }]; Required parameters Use the GMSPlaceSearchNearbyRequest object to specify the required parameters for the search.

### "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace)
- Source ID: `site-docs-reference`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Declaration Swift func isOpen () -> GMSPlaceOpenStatus Objective-C - ( GMSPlaceOpenStatus ) isOpen ; Return Value GMSPlaceOpenStatusOpen if the place is open, GMSPlaceOpenStatusClosed if the place is closed, and GMSPlaceOpenStatusUnknown if the open status is unknown. iconBackgroundColor Background color of the icon according to Place type, to color the view behind the icon.
- Return Value GMSPlaceOpenStatusOpen if the place is open, GMSPlaceOpenStatusClosed if the place is closed, and GMSPlaceOpenStatusUnknown if the open status is unknown. -isOpen Deprecated (This method is deprecated in favor of GMSPlacesClient#isOpen:place:callback and will be removed in a future release.
- Declaration Swift var rating : Float { get } Objective-C @property ( nonatomic , readonly ) float rating ; reviews An array of GMSPlaceReview objects representing the user reviews of the place.
- Additionally, it includes attributes about dining options (like takeout, delivery, dine-in), service offerings (serves breakfast, lunch, etc.), and accessibility features.

