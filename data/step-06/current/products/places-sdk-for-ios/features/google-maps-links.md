---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:07.459Z"
product_name: "Places SDK for iOS"
product_slug: "places-sdk-for-ios"
feature_name: "Google Maps links"
feature_slug: "google-maps-links"
latest_feature_date: "2026-02-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/reference"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/attributions"
keywords:
  - "maps"
  - "links"
  - "now"
  - "appear"
  - "in"
  - "place"
  - "results"
  - "route"
---

# Google Maps links

Product: Places SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

Google Maps links now appear in Place results, route summaries, and text search responses; Google Maps links now appear in Place results, route summaries, and text search responses.

## Extended Definition

Google Maps links now appear in Place results, route summaries, and text search responses; Google Maps links now appear in Place results, route summaries, and text search responses.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace)
- [https://developers.google.com/maps/documentation/places/ios-sdk/reference](https://developers.google.com/maps/documentation/places/ios-sdk/reference)
- [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes)
- [https://developers.google.com/maps/documentation/places/ios-sdk/attributions](https://developers.google.com/maps/documentation/places/ios-sdk/attributions)

## Supporting Pages

### "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace)
- Source ID: `site-docs-reference`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Declaration Swift var googleMapsLinks : GMSPlaceGoogleMapsLinks ? { get } Objective-C @property ( nonatomic , readonly , nullable ) GMSPlaceGoogleMapsLinks googleMapsLinks ; containingPlaces List of parent places in which the current place is located.
- Declaration Swift var paymentOptions : GMSPlacePaymentOptions ? { get } Objective-C @property ( nonatomic , readonly , nullable ) GMSPlacePaymentOptions paymentOptions ; googleMapsLinks Returns the links to trigger different Google Maps actions.
- Google Maps links information is only available through the Places API (New).
- Declaration Swift func isOpen () -> GMSPlaceOpenStatus Objective-C - ( GMSPlaceOpenStatus ) isOpen ; Return Value GMSPlaceOpenStatusOpen if the place is open, GMSPlaceOpenStatusClosed if the place is closed, and GMSPlaceOpenStatusUnknown if the open status is unknown. iconBackgroundColor Background color of the icon according to Place type, to color the view behind the icon.

### "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/reference](https://developers.google.com/maps/documentation/places/ios-sdk/reference)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Declaration Swift class GMSPlaceRouteModifiers : NSObject Objective-C @interface GMSPlaceRouteModifiers : NSObject GMSPlaceRoutingParameters Parameters to configure the routing calculations to the places in the response, both along a route (where result ranking will be influenced) and for calculating travel times on results.
- Declaration Swift class GMSAutocompleteRequest : NSObject Objective-C @interface GMSAutocompleteRequest : NSObject GMSAutocompleteResultsViewController Deprecated Use the placeAutocomplete View extension in Places Swift SDK ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) instead.
- Declaration Swift class GMSPlaceGenerativeSummary : NSObject , GMSPlaceAISummary Objective-C @interface GMSPlaceGenerativeSummary : NSObject < GMSPlaceAISummary > GMSPlaceGoogleMapsLinks Links to trigger different Google Maps actions for a place.
- Declaration Swift class GMSPlaceGoogleMapsLinks : NSObject Objective-C @interface GMSPlaceGoogleMapsLinks : NSObject GMSPlaceIsOpenRequest Represents an is open request definition to be sent via GMSPlacesClient .

### "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Declaration Swift class GMSPlaceRouteModifiers : NSObject Objective-C @interface GMSPlaceRouteModifiers : NSObject GMSPlaceRoutingParameters Parameters to configure the routing calculations to the places in the response, both along a route (where result ranking will be influenced) and for calculating travel times on results.
- Declaration Swift class GMSAutocompleteRequest : NSObject Objective-C @interface GMSAutocompleteRequest : NSObject GMSAutocompleteResultsViewController Deprecated Use the placeAutocomplete View extension in Places Swift SDK ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) instead.
- Declaration Swift class GMSPlaceGenerativeSummary : NSObject , GMSPlaceAISummary Objective-C @interface GMSPlaceGenerativeSummary : NSObject < GMSPlaceAISummary > GMSPlaceGoogleMapsLinks Links to trigger different Google Maps actions for a place.
- Declaration Swift class GMSPlaceGoogleMapsLinks : NSObject Objective-C @interface GMSPlaceGoogleMapsLinks : NSObject GMSPlaceIsOpenRequest Represents an is open request definition to be sent via GMSPlacesClient .

### Policies and attributions for Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/attributions](https://developers.google.com/maps/documentation/places/ios-sdk/attributions)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Explainer text: Header: About these results Body: When you search for businesses or places near a location, Google Maps will show you local results.
- Swift GMSPlacesClient . sharedClient (). lookUpPhotosForPlaceID ( placeID ) { ( photos , error ) - > Void in if let error = error { // TODO: handle the error. print ( "Error: \( error . description ) " ) } else { // Get attribution for the first photo in the list. if let photo = photos ?. results . first { let attributions = photo . attributions } } } Objective-C [[ GMSPlacesClient sharedClient ] lookUpPhotosForPlaceID : placeID callback : ^ ( GMSPlacePhotoMetadataList Nullable photos , NSError Nullable error ) { if ( error ) { // TODO: handle the error.
- Example of Google Maps attribution positioned at the top, at the bottom, and to the side of the content Example of three approaches to differentiating Google Maps Content (the place rating) from other content Don't obscure the Google Maps attribution or mix it with content from other sources Third-party data providers Some of the data and images on our mapping products come from providers other than Google.
- NSLog ( @"Error: %@" , [ error description ]); } else { // Get attribution for the first photo in the list. if ( photos . results . count > 0 ) { GMSPlacePhotoMetadata photo = photos . results . firstObject ; NSAttributedString attributions = photo . attributions ; } } }]; Display a review A GMSPlace object can contain up to five reviews, where each review is represented by a GMSPlaceReview object.

