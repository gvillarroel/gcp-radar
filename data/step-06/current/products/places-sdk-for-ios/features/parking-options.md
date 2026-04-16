---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:07.463Z"
product_name: "Places SDK for iOS"
product_slug: "places-sdk-for-ios"
feature_name: "Parking options"
feature_slug: "parking-options"
latest_feature_date: "2025-10-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/reference"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlaceAccessibilityOptions"
keywords:
  - "parking"
  - "options"
  - "place"
  - "attributes"
  - "now"
  - "include"
---

# Parking options

Product: Places SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

Place attributes now include parking options; Place attributes now include parking options.

## Extended Definition

Place attributes now include parking options; Place attributes now include parking options.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace)
- [https://developers.google.com/maps/documentation/places/ios-sdk/reference](https://developers.google.com/maps/documentation/places/ios-sdk/reference)
- [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes)
- [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlaceAccessibilityOptions](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlaceAccessibilityOptions)

## Supporting Pages

### "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Declaration Swift var parkingOptions : GMSPlaceParkingOptions ? { get } Objective-C @property ( nonatomic , readonly , nullable ) GMSPlaceParkingOptions parkingOptions ; evChargeAmenitySummary Returns this place’s EV charge amenity summary.
- Declaration Swift var evChargeOptions : GMSPlaceEVChargeOptions ? { get } Objective-C @property ( nonatomic , readonly , nullable ) GMSPlaceEVChargeOptions evChargeOptions ; parkingOptions Returns this place’s parking options.
- Additionally, it includes attributes about dining options (like takeout, delivery, dine-in), service offerings (serves breakfast, lunch, etc.), and accessibility features.
- Declaration Swift func isOpen () -> GMSPlaceOpenStatus Objective-C - ( GMSPlaceOpenStatus ) isOpen ; Return Value GMSPlaceOpenStatusOpen if the place is open, GMSPlaceOpenStatusClosed if the place is closed, and GMSPlaceOpenStatusUnknown if the open status is unknown. iconBackgroundColor Background color of the icon according to Place type, to color the view behind the icon.

### "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/reference](https://developers.google.com/maps/documentation/places/ios-sdk/reference)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Declaration Swift class GMSPlacePagination : NSObject Objective-C @interface GMSPlacePagination : NSObject GMSPlaceParkingOptions This class represents the parking options for a place.
- Declaration Swift class GMSPlaceParkingOptions : NSObject Objective-C @interface GMSPlaceParkingOptions : NSObject GMSPlacePaymentOptions Payment options at a place.
- Declaration Swift class GMSPlaceEVChargeAmenitySummary : NSObject , GMSPlaceAISummary Objective-C @interface GMSPlaceEVChargeAmenitySummary : NSObject < GMSPlaceAISummary > GMSPlaceEVChargeOptions A class that represents a place’s EV charging options.
- Declaration Swift class GMSPlaceEncodedPolyline : NSObject , GMSPlacePolyline Objective-C @interface GMSPlaceEncodedPolyline : NSObject < GMSPlacePolyline > GMSPlaceFuelOptions The most recent information about fuel options in a gas station.

### "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Declaration Swift class GMSPlacePagination : NSObject Objective-C @interface GMSPlacePagination : NSObject GMSPlaceParkingOptions This class represents the parking options for a place.
- Declaration Swift class GMSPlaceParkingOptions : NSObject Objective-C @interface GMSPlaceParkingOptions : NSObject GMSPlacePaymentOptions Payment options at a place.
- Declaration Swift class GMSPlaceEVChargeAmenitySummary : NSObject , GMSPlaceAISummary Objective-C @interface GMSPlaceEVChargeAmenitySummary : NSObject < GMSPlaceAISummary > GMSPlaceEVChargeOptions A class that represents a place’s EV charging options.
- Declaration Swift class GMSPlaceEncodedPolyline : NSObject , GMSPlacePolyline Objective-C @interface GMSPlaceEncodedPolyline : NSObject < GMSPlacePolyline > GMSPlaceFuelOptions The most recent information about fuel options in a gas station.

### "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlaceAccessibilityOptions](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlaceAccessibilityOptions)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GMSPlaceAccessibilityOptions @interface GMSPlaceAccessibilityOptions : NSObject Information about the accessibility options a place offers. wheelchairAccessibleParking Returns the GMSBooleanPlaceAttribute for a wheelchair accessible parking.
- Declaration Swift var wheelchairAccessibleParking : GMSBooleanPlaceAttribute { get } Objective-C @property ( nonatomic , readonly ) GMSBooleanPlaceAttribute wheelchairAccessibleParking ; wheelchairAccessibleEntrance Returns the GMSBooleanPlaceAttribute for a wheelchair accessible entrance.
- Declaration Swift var wheelchairAccessibleSeating : GMSBooleanPlaceAttribute { get } Objective-C @property ( nonatomic , readonly ) GMSBooleanPlaceAttribute wheelchairAccessibleSeating ; Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Declaration Swift var wheelchairAccessibleEntrance : GMSBooleanPlaceAttribute { get } Objective-C @property ( nonatomic , readonly ) GMSBooleanPlaceAttribute wheelchairAccessibleEntrance ; wheelchairAccessibleRestroom Returns the GMSBooleanPlaceAttribute for a wheelchair accessible restroom.

