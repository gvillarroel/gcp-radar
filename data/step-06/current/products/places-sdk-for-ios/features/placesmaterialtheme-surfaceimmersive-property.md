---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:07.465Z"
product_name: "Places SDK for iOS"
product_slug: "places-sdk-for-ios"
feature_name: "PlacesMaterialTheme.surfaceImmersive property"
feature_slug: "placesmaterialtheme-surfaceimmersive-property"
latest_feature_date: "2025-10-02"
deprecation_date: "2025-10-02"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAddressComponent"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompletePlaceSuggestion"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompletePrediction"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteFilter"
keywords:
  - "placesmaterialtheme"
  - "surfaceimmersive"
  - "property"
  - "the"
  - "is"
  - "no"
  - "longer"
  - "supported"
---

# PlacesMaterialTheme.surfaceImmersive property

Product: Places SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

The PlacesMaterialTheme.surfaceImmersive property is no longer supported; deprecated on 2025-10-02.

## Extended Definition

The PlacesMaterialTheme.surfaceImmersive property is no longer supported; deprecated on 2025-10-02.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAddressComponent](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAddressComponent)
- [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompletePlaceSuggestion](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompletePlaceSuggestion)
- [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompletePrediction](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompletePrediction)
- [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteFilter](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteFilter)

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

### "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompletePrediction](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompletePrediction)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Declaration Objective-C - ( nonnull instancetype ) init ; Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Declaration Swift var types : [ String ] { get } Objective-C @property ( nonatomic , copy , readonly ) GMS AVAILABLE BUT DEPRECATED MSG NSArray < NSString > types ; distanceMeters Deprecated Use GMSAutocompleteSuggestion instead.
- Declaration Swift var distanceMeters : NSNumber ? { get } Objective-C @property ( nonatomic , readonly , nullable ) NSNumber distanceMeters ; -init Deprecated Use GMSAutocompleteSuggestion instead.
- For example, you can make every match bold using enumerateAttribute: UIFont regularFont = [UIFont systemFontOfSize:[UIFont labelFontSize]]; UIFont boldFont = [UIFont boldSystemFontOfSize:[UIFont labelFontSize]]; NSMutableAttributedString bolded = [prediction.attributedFullText mutableCopy]; [bolded enumerateAttribute:kGMSAutocompleteMatchAttribute inRange:NSMakeRange(0, bolded.length) options:0 usingBlock:^(id value, NSRange range, BOOL stop) { UIFont font = (value == nil) ? regularFont : boldFont; [bolded addAttribute:NSFontAttributeName value:font range:range]; }]; label.attributedText = bolded; Declaration Swift @NSCopying var attributedFullText : NSAttributedString { get } Objective-C @property ( nonatomic , copy , readonly ) GMS AVAILABLE BUT DEPRECATED MSG NSAttributedString attributedFullText ; attributedPrimaryText Deprecated Use GMSAutocompleteSuggestion instead.

### "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteFilter](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteFilter)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Declaration Swift var shouldIncludePureServiceAreaBusinesses : Bool { get set } Objective-C @property ( nonatomic ) BOOL shouldIncludePureServiceAreaBusinesses ; Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Declaration Swift var countries : [ String ]? { get set } Objective-C @property ( nonatomic , copy , nullable ) NSArray < NSString > countries ; origin The straight line distance origin location for measuring the straight line distance between the origin location and autocomplete predictions.
- Declaration Swift var regionCode : String ? { get set } Objective-C @property ( nonatomic , nullable ) NSString regionCode ; inputOffset inputOffset is the character offset of the input that indicates where the completions may start from.
- NOTE: Overrides the deprecated “country” property if that is set.

