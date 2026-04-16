---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:07.463Z"
product_name: "Places SDK for iOS"
product_slug: "places-sdk-for-ios"
feature_name: "EV charge options"
feature_slug: "ev-charge-options"
latest_feature_date: "2025-10-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/details-place"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/support"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/nearby-search"
keywords:
  - "ev"
  - "charge"
  - "options"
  - "place"
  - "attributes"
  - "now"
  - "include"
---

# EV charge options

Product: Places SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

Place attributes now include EV charge options; Place attributes now include EV charge options.

## Extended Definition

Place attributes now include EV charge options; Place attributes now include EV charge options.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace)
- [https://developers.google.com/maps/documentation/places/ios-sdk/details-place](https://developers.google.com/maps/documentation/places/ios-sdk/details-place)
- [https://developers.google.com/maps/documentation/places/ios-sdk/support](https://developers.google.com/maps/documentation/places/ios-sdk/support)
- [https://developers.google.com/maps/documentation/places/ios-sdk/nearby-search](https://developers.google.com/maps/documentation/places/ios-sdk/nearby-search)

## Supporting Pages

### "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace)
- Source ID: `site-docs-reference`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Declaration Swift var parkingOptions : GMSPlaceParkingOptions ? { get } Objective-C @property ( nonatomic , readonly , nullable ) GMSPlaceParkingOptions parkingOptions ; evChargeAmenitySummary Returns this place’s EV charge amenity summary.
- Declaration Swift var evChargeOptions : GMSPlaceEVChargeOptions ? { get } Objective-C @property ( nonatomic , readonly , nullable ) GMSPlaceEVChargeOptions evChargeOptions ; parkingOptions Returns this place’s parking options.
- Declaration Swift var editorialSummary : String ? { get } Objective-C @property ( nonatomic , copy , readonly , nullable ) NSString editorialSummary ; evChargeOptions Returns this place’s EV charging options.
- Declaration Swift var evChargeAmenitySummary : GMSPlaceEVChargeAmenitySummary ? { get } Objective-C @property ( nonatomic , readonly , nullable ) GMSPlaceEVChargeAmenitySummary evChargeAmenitySummary ; generativeSummary Returns this place’s generative summary.

### Place Details (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/details-place](https://developers.google.com/maps/documentation/places/ios-sdk/details-place)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Language Value if open Value if closed Value if status unknown Places Swift true false nil Swift .open .closed .unknown Objective-C GMSPlaceOpenStatusOpen GMSPlaceOpenStatusClosed GMSPlaceOpenStatusUnknown Billing for isOpenWithRequest The GMSPlacePropertyUTCOffsetMinutes and GMSPlacePropertyBusinessStatus fields are charged under the Basic Data SKU .
- If your GMSPlace object already has these fields from a previous request, you won't be charged again.
- Specify one or more of the following fields: The following fields trigger the Place Details Essentials ID Only SKU : GMSPlacePropertyPlaceID GMSPlacePropertyPhotos The following fields trigger the Place Details Essentials SKU : GMSPlacePropertyAddressComponents GMSPlacePropertyFormattedAddress GMSPlacePropertyCoordinate GMSPlacePropertyPlusCode GMSPlacePropertyTypes GMSPlacePropertyViewport The following fields trigger the Place Details Pro SKU : GMSPlacePropertyBusinessStatus GMSPlacePropertyIconBackgroundColor GMSPlacePropertyIconImageURL GMSPlacePropertyName GMSPlacePropertyUTCOffsetMinutes GMSPlacePropertyWheelchairAccessibleEntrance The following fields trigger the Place Details Pro SKU : GMSPlacePropertyCurrentOpeningHours GMSPlacePropertySecondaryOpeningHours GMSPlacePropertyPhoneNumber GMSPlacePropertyPriceLevel GMSPlacePropertyRating GMSPlacePropertyOpeningHours GMSPlacePropertyUserRatingsTotal GMSPlacePropertyWebsite The following fields trigger the Place Details Enterprise SKU : GMSPlacePropertyCurbsidePickup GMSPlacePropertyDelivery GMSPlacePropertyDineIn GMSPlacePropertyEditorialSummary GMSPlacePropertyReservable GMSPlacePropertyReviews GMSPlacePropertyServesBeer GMSPlacePropertyServesBreakfast GMSPlacePropertyServesBrunch GMSPlacePropertyServesDinner GMSPlacePropertyServesLunch GMSPlacePropertyServesVegetarianFood GMSPlacePropertyServesWine GMSPlacePropertyTakeout The following example passes a list of two field values to specify that the GMSPlace object returned by a request contains the name and placeID fields: Places Swift SDK // Specify the place data types to return. let fields : [ PlaceProperty ] = [. placeID , . displayName ] Swift // Specify the place data types to return. let fields : [ GMSPlaceProperty ] = [. placeID , . name ] Objective-C // Specify the place data types to return.
- Places Swift SDK let isOpenRequest = IsPlaceOpenRequest ( place : place ) switch await placesClient . isPlaceOpen ( with : isOpenRequest ) { case . success ( let isOpenResponse ): switch isOpenResponse . status { case true : // Handle open case false : // Handle closed case nil : // Handle unknown case . failure ( let placesError ): // Handle error } Swift let isOpenRequest = GMSPlaceIsOpenRequest ( place : place , date : nil ) GMSPlacesClient . shared (). isOpen ( with : isOpenRequest ) { response , error in if let error = error { // Handle Error } switch response . status { case . open : // Handle open case . closed : // Handle closed case . unknown : // Handle unknown } } Objective-C GMSPlaceIsOpenRequest isOpenRequest = [[ GMSPlaceIsOpenRequest alloc ] initWithPlace : place date : nil ]; [[ GMSPlacesClient sharedClient ] isOpenWithRequest : isOpenRequest callback :^ ( GMSPlaceIsOpenResponse response , NSError Nullable error ) { if ( error ) { // Handle error } switch ( response . status ) { case GMSPlaceOpenStatusOpen : // Handle open case GMSPlaceOpenStatusClosed : // Handle closed case GMSPlaceOpenStatusUnknown : // Handle unknown } }]; Required parameters Use the GMSFetchPlaceRequest object to specify the required parameters.

### Support Options for Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/support](https://developers.google.com/maps/documentation/places/ios-sdk/support)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Google Maps Platform Documentation iOS Places SDK for iOS Resources Send feedback Support Options for Places SDK for iOS Stay organized with collections Save and categorize content based on your preferences.
- The incident report will include information about the impact and mitigation of the incident, and prevention steps that are taken to avoid such incidents in the future.
- Members of the Google Maps and Google Places APIs team monitor several Google Maps and Google Places related tags on Stack Overflow.
- It's a great place to ask technical questions about developing and maintaining your app.

### Nearby Search (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/nearby-search](https://developers.google.com/maps/documentation/places/ios-sdk/nearby-search)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Language Value if open Value if closed Value if status unknown Places Swift true false nil Swift .open .closed .unknown Objective-C GMSPlaceOpenStatusOpen GMSPlaceOpenStatusClosed GMSPlaceOpenStatusUnknown Billing for isOpenWithRequest The GMSPlacePropertyUTCOffsetMinutes and GMSPlacePropertyBusinessStatus fields are charged under the Basic Data SKU .
- If your GMSPlace object already has these fields from a previous request, you won't be charged again.
- Places Swift SDK let restriction = CircularCoordinateRegion ( center : CLLocationCoordinate2DMake ( 37.7937 , - 122.3965 ), radius : 500 ) let searchNearbyRequest = SearchNearbyRequest ( locationRestriction : restriction , placeProperties : [ . name , . coordinate ], includedTypes : [ . restaurant , . cafe ], ) switch await placesClient . searchNearby ( with : searchNearbyRequest ) { case . success ( let places ): // Handle places case . failure ( let placesError ): // Handle error } Swift // Array to hold the places in the response var placeResults : [ GMSPlace ] = [] // Define the search area as a 500 meter diameter circle in San Francisco, CA. let circularLocationRestriction = GMSPlaceCircularLocationOption ( CLLocationCoordinate2DMake ( 37.7937 , - 122.3965 ), 500 ) // Specify the fields to return in the GMSPlace object for each place in the response. let placeProperties = [ GMSPlaceProperty . name , GMSPlaceProperty . coordinate ]. map { $0 . rawValue } // Create the GMSPlaceSearchNearbyRequest, specifying the search area and GMSPlace fields to return. var request = GMSPlaceSearchNearbyRequest ( locationRestriction : circularLocationRestriction , placeProperties : placeProperties ) let includedTypes = [ "restaurant" , "cafe" ] request . includedTypes = includedTypes let callback : GMSPlaceSearchNearbyResultCallback = { [ weak self ] results , error in guard let self , error == nil else { if let error { print ( error . localizedDescription ) } return } guard let results = results as ? [ GMSPlace ] else { return } placeResults = results } GMSPlacesClient . shared (). searchNearby ( with : request , callback : callback ) Objective-C // Array to hold the places in the response placeResults = [ NSArray array ]; // Define the search area as a 500 meter diameter circle in San Francisco, CA. id<GMSPlaceLocationRestriction> circularLocation = GMSPlaceCircularLocationOption ( CLLocationCoordinate2DMake ( 37.7937 , -122.3965 ), 500 ); // Create the GMSPlaceSearchNearbyRequest, specifying the search area and GMSPlace fields to return.
- Specify one or more of the following fields: The following fields trigger the Nearby Search Pro SKU : GMSPlacePropertyAddressComponents GMSPlacePropertyBusinessStatus GMSPlacePropertyCoordinate GMSPlacePropertyFormattedAddress GMSPlacePropertyName GMSPlacePropertyIconBackgroundColor GMSPlacePropertyIconImageURL GMSPlacePropertyPhotos GMSPlacePropertyPlaceID GMSPlacePropertyPlusCode GMSPlacePropertyTypes GMSPlacePropertyUTCOffsetMinutes GMSPlacePropertyViewport GMSPlacePropertyWheelchairAccessibleEntrance The following fields trigger the Nearby Search Enterprise SKU : GMSPlacePropertyCurrentOpeningHours GMSPlacePropertySecondaryOpeningHours GMSPlacePropertyPhoneNumber GMSPlacePropertyPriceLevel GMSPlacePropertyRating GMSPlacePropertyOpeningHours GMSPlacePropertyUserRatingsTotal GMSPlacePropertyWebsite The following fields trigger the Nearby Search Enterprise Plus SKU : GMSPlacePropertyCurbsidePickup GMSPlacePropertyDelivery GMSPlacePropertyDineIn GMSPlacePropertyEditorialSummary GMSPlacePropertyReservable GMSPlacePropertyReviews GMSPlacePropertyServesBeer GMSPlacePropertyServesBreakfast GMSPlacePropertyServesBrunch GMSPlacePropertyServesDinner GMSPlacePropertyServesLunch GMSPlacePropertyServesVegetarianFood GMSPlacePropertyServesWine GMSPlacePropertyTakeout The following example passes a list of two field values to specify that the GMSPlace object returned by a request contains the name and placeID fields: Places Swift SDK // Specify the place data types to return. let fields : [ PlaceProperty ] = [. placeID , . displayName ] Swift // Specify the place data types to return. let fields : [ GMSPlaceProperty ] = [. placeID , . name ] Objective-C // Specify the place data types to return.

