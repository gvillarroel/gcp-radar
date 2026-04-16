---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:07.464Z"
product_name: "Places SDK for iOS"
product_slug: "places-sdk-for-ios"
feature_name: "Place consumer alert"
feature_slug: "place-consumer-alert"
latest_feature_date: "2025-10-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/reference"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/details-place"
keywords:
  - "place"
  - "consumer"
  - "alert"
  - "objects"
  - "now"
  - "include"
  - "and"
  - "details"
---

# Place consumer alert

Product: Places SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

Place objects now include consumer alert and alert details data; Place objects now include consumer alert and alert details data.

## Extended Definition

Place objects now include consumer alert and alert details data; Place objects now include consumer alert and alert details data.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace)
- [https://developers.google.com/maps/documentation/places/ios-sdk/reference](https://developers.google.com/maps/documentation/places/ios-sdk/reference)
- [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes)
- [https://developers.google.com/maps/documentation/places/ios-sdk/details-place](https://developers.google.com/maps/documentation/places/ios-sdk/details-place)

## Supporting Pages

### "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace)
- Source ID: `site-docs-reference`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Declaration Swift func isOpen () -> GMSPlaceOpenStatus Objective-C - ( GMSPlaceOpenStatus ) isOpen ; Return Value GMSPlaceOpenStatusOpen if the place is open, GMSPlaceOpenStatusClosed if the place is closed, and GMSPlaceOpenStatusUnknown if the open status is unknown. iconBackgroundColor Background color of the icon according to Place type, to color the view behind the icon.
- Return Value GMSPlaceOpenStatusOpen if the place is open, GMSPlaceOpenStatusClosed if the place is closed, and GMSPlaceOpenStatusUnknown if the open status is unknown. -isOpen Deprecated (This method is deprecated in favor of GMSPlacesClient#isOpen:place:callback and will be removed in a future release.
- Declaration Swift @NSCopying var consumerAlert : GMSPlaceConsumerAlert ? { get } Objective-C @property ( nonatomic , copy , readonly , nullable ) GMSPlaceConsumerAlert consumerAlert ; accessibilityOptions Returns this place’s accessibility options.
- Declaration Swift var reviewSummary : GMSPlaceReviewSummary ? { get } Objective-C @property ( nonatomic , readonly , nullable ) GMSPlaceReviewSummary reviewSummary ; consumerAlert Returns this place’s consumer alert.

### "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/reference](https://developers.google.com/maps/documentation/places/ios-sdk/reference)
- Source ID: `site-docs-reference`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- Declaration Swift class GMSPlaceConsumerAlertDetails : NSObject Objective-C @interface GMSPlaceConsumerAlertDetails : NSObject GMSPlaceContainingPlace Represents a parent location that holds another place.
- Declaration Swift class GMSPlaceConsumerAlert : NSObject Objective-C @interface GMSPlaceConsumerAlert : NSObject GMSPlaceConsumerAlertDetails The details of the consumer alert message.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["This document details classes for the Google Places API, covering various functionalities.
- Declaration Swift class GMSPlaceConnectorAggregation : NSObject Objective-C @interface GMSPlaceConnectorAggregation : NSObject GMSPlaceConsumerAlert The consumer alert message for the place when we detect suspicious review activity on a business or a business violates our policies.

### "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes)
- Source ID: `site-docs-reference`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- Declaration Swift class GMSPlaceConsumerAlertDetails : NSObject Objective-C @interface GMSPlaceConsumerAlertDetails : NSObject GMSPlaceContainingPlace Represents a parent location that holds another place.
- Declaration Swift class GMSPlaceConsumerAlert : NSObject Objective-C @interface GMSPlaceConsumerAlert : NSObject GMSPlaceConsumerAlertDetails The details of the consumer alert message.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["This document details classes for the Google Places API, covering various functionalities.
- Declaration Swift class GMSPlaceConnectorAggregation : NSObject Objective-C @interface GMSPlaceConnectorAggregation : NSObject GMSPlaceConsumerAlert The consumer alert message for the place when we detect suspicious review activity on a business or a business violates our policies.

### Place Details (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/details-place](https://developers.google.com/maps/documentation/places/ios-sdk/details-place)
- Source ID: `site-docs-root`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- Key actions include: enabling Places API (New), using GMSPlacesClient to fetch place details with GMSFetchPlaceRequest, and specifying required place ID and data fields.
- Specify one or more of the following fields: The following fields trigger the Place Details Essentials ID Only SKU : GMSPlacePropertyPlaceID GMSPlacePropertyPhotos The following fields trigger the Place Details Essentials SKU : GMSPlacePropertyAddressComponents GMSPlacePropertyFormattedAddress GMSPlacePropertyCoordinate GMSPlacePropertyPlusCode GMSPlacePropertyTypes GMSPlacePropertyViewport The following fields trigger the Place Details Pro SKU : GMSPlacePropertyBusinessStatus GMSPlacePropertyIconBackgroundColor GMSPlacePropertyIconImageURL GMSPlacePropertyName GMSPlacePropertyUTCOffsetMinutes GMSPlacePropertyWheelchairAccessibleEntrance The following fields trigger the Place Details Pro SKU : GMSPlacePropertyCurrentOpeningHours GMSPlacePropertySecondaryOpeningHours GMSPlacePropertyPhoneNumber GMSPlacePropertyPriceLevel GMSPlacePropertyRating GMSPlacePropertyOpeningHours GMSPlacePropertyUserRatingsTotal GMSPlacePropertyWebsite The following fields trigger the Place Details Enterprise SKU : GMSPlacePropertyCurbsidePickup GMSPlacePropertyDelivery GMSPlacePropertyDineIn GMSPlacePropertyEditorialSummary GMSPlacePropertyReservable GMSPlacePropertyReviews GMSPlacePropertyServesBeer GMSPlacePropertyServesBreakfast GMSPlacePropertyServesBrunch GMSPlacePropertyServesDinner GMSPlacePropertyServesLunch GMSPlacePropertyServesVegetarianFood GMSPlacePropertyServesWine GMSPlacePropertyTakeout The following example passes a list of two field values to specify that the GMSPlace object returned by a request contains the name and placeID fields: Places Swift SDK // Specify the place data types to return. let fields : [ PlaceProperty ] = [. placeID , . displayName ] Swift // Specify the place data types to return. let fields : [ GMSPlaceProperty ] = [. placeID , . name ] Objective-C // Specify the place data types to return.
- Places Swift SDK let isOpenRequest = IsPlaceOpenRequest ( place : place ) switch await placesClient . isPlaceOpen ( with : isOpenRequest ) { case . success ( let isOpenResponse ): switch isOpenResponse . status { case true : // Handle open case false : // Handle closed case nil : // Handle unknown case . failure ( let placesError ): // Handle error } Swift let isOpenRequest = GMSPlaceIsOpenRequest ( place : place , date : nil ) GMSPlacesClient . shared (). isOpen ( with : isOpenRequest ) { response , error in if let error = error { // Handle Error } switch response . status { case . open : // Handle open case . closed : // Handle closed case . unknown : // Handle unknown } } Objective-C GMSPlaceIsOpenRequest isOpenRequest = [[ GMSPlaceIsOpenRequest alloc ] initWithPlace : place date : nil ]; [[ GMSPlacesClient sharedClient ] isOpenWithRequest : isOpenRequest callback :^ ( GMSPlaceIsOpenResponse response , NSError Nullable error ) { if ( error ) { // Handle error } switch ( response . status ) { case GMSPlaceOpenStatusOpen : // Handle open case GMSPlaceOpenStatusClosed : // Handle closed case GMSPlaceOpenStatusUnknown : // Handle unknown } }]; Required parameters Use the GMSFetchPlaceRequest object to specify the required parameters.
- Language Value if open Value if closed Value if status unknown Places Swift true false nil Swift .open .closed .unknown Objective-C GMSPlaceOpenStatusOpen GMSPlaceOpenStatusClosed GMSPlaceOpenStatusUnknown Billing for isOpenWithRequest The GMSPlacePropertyUTCOffsetMinutes and GMSPlacePropertyBusinessStatus fields are charged under the Basic Data SKU .

