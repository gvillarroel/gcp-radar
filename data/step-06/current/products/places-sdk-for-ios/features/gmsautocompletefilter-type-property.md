---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:07.473Z"
product_name: "Places SDK for iOS"
product_slug: "places-sdk-for-ios"
feature_name: "GMSAutocompleteFilter.type property"
feature_slug: "gmsautocompletefilter-type-property"
latest_feature_date: "2023-05-17"
deprecation_date: "2023-05-17"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteFilter"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompletePrediction"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/attributions"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteFetcher"
keywords:
  - "gmsautocompletefilter"
  - "type"
  - "property"
  - "the"
  - "on"
  - "is"
  - "deprecated"
  - "and"
---

# GMSAutocompleteFilter.type property

Product: Places SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

The type property on GMSAutocompleteFilter is deprecated and replaced by the types property; deprecated on 2023-05-17.

## Extended Definition

The type property on GMSAutocompleteFilter is deprecated and replaced by the types property; deprecated on 2023-05-17.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteFilter](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteFilter)
- [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompletePrediction](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompletePrediction)
- [https://developers.google.com/maps/documentation/places/ios-sdk/attributions](https://developers.google.com/maps/documentation/places/ios-sdk/attributions)
- [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteFetcher](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteFetcher)

## Supporting Pages

### "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteFilter](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteFilter)
- Source ID: `site-docs-reference`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-26 UTC."],[],["The GMSAutocompleteFilter class customizes autocomplete suggestions.
- Declaration Swift var shouldIncludePureServiceAreaBusinesses : Bool { get set } Objective-C @property ( nonatomic ) BOOL shouldIncludePureServiceAreaBusinesses ; Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Declaration Swift var countries : [ String ]? { get set } Objective-C @property ( nonatomic , copy , nullable ) NSArray < NSString > countries ; origin The straight line distance origin location for measuring the straight line distance between the origin location and autocomplete predictions.
- Declaration Swift var types : [ String ]? { get set } Objective-C @property ( nonatomic , nullable ) NSArray < NSString > types ; country Deprecated country property is deprecated in favor of countries .

### "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompletePrediction](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompletePrediction)
- Source ID: `site-docs-reference`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Declaration Objective-C - ( nonnull instancetype ) init ; Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Declaration Swift var types : [ String ] { get } Objective-C @property ( nonatomic , copy , readonly ) GMS AVAILABLE BUT DEPRECATED MSG NSArray < NSString > types ; distanceMeters Deprecated Use GMSAutocompleteSuggestion instead.
- The straight line distance in meters between the origin and this prediction if a valid origin is specified in the GMSAutocompleteFilter of the request.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-02 UTC."],[],["GMSAutocompletePrediction offers details about a predicted query based on partial input.

### Policies and attributions for Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/attributions](https://developers.google.com/maps/documentation/places/ios-sdk/attributions)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To access the reviews: Swift // Define a Place ID. let placeID = "ChIJV4k8 9UodTERU5KXbkYpSYs" // Specify the place data types to return. let myProperties : [ GMSPlaceProperty ] = [. name , . website , . reviews ] // Create the GMSFetchPlaceRequest object. let fetchPlaceRequest = GMSFetchPlaceRequest ( placeID : placeID , placeProperties : myProperties ) client . fetchPlaceWithRequest ( fetchPlaceRequest : fetchPlaceRequest , callback : { ( place : GMSPlace ?, error : Error ?) in if let error = error { print ( "An error occurred: \( error . localizedDescription ) " ) return } if let place = place { let firstReview : GMSPlaceReview = place . reviews ![ 0 ] // Use firstReview to access review text, authorAttribution, and other fields. } }) Objective-C // Define a Place ID.
- Autocomplete for end user addresses When an end user uses Autocomplete functionality within your Customer Application to type ahead a street address and that street address would have been completely and accurately provided by that end user without Autocomplete, the end user's selected address is then not subject to the Google Maps Content restrictions in your Google Maps Platform Agreement.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["Applications using the Places SDK for iOS must include a Terms of Use and Privacy Policy, referencing Google's policies.
- Before building with Google Maps Platform, review the following EEA-specific terms and information: Google Maps Platform EEA Terms of Service Google Maps Platform EEA Service Specific Terms EEA frequently asked questions (FAQ) Google Maps Platform Road Safety Requirements If your billing address is not in the EEA, the following terms of service apply to you: Google Maps Platform Terms of Service Google Maps Platform Service Specific Terms Google Maps attribution requirements This section provides attribution requirements and guidelines for displaying Google Maps and Content through your applications.

### "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteFetcher](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteFetcher)
- Source ID: `site-docs-reference`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This parameter may be nil. / - ( instancetype ) initWithFilter :( nullable GMSAutocompleteFilter ) filter NS DESIGNATED INITIALIZER GMS AVAILABLE BUT DEPRECATED MSG ( "Use <code>GMSPlacesClient#fetchAutocompleteSuggestionsFromRequest:callback:</code> " "instead." ) ; / Delegate to be notified with autocomplete prediction results. / @property ( nonatomic , weak , nullable ) id < GMSAutocompleteFetcherDelegate > delegate GMS AVAILABLE BUT DEPRECATED MSG ( "Use <code>GMSPlacesClient#fetchAutocompleteSuggestionsFromRequest:callback:</code> " "instead." ) ; / Filter to apply to autocomplete suggestions (can be nil). / @property ( nonatomic , strong , nullable ) GMSAutocompleteFilter autocompleteFilter GMS AVAILABLE BUT DEPRECATED MSG ( "Use <code>GMSPlacesClient#fetchAutocompleteSuggestionsFromRequest:callback:</code> " "instead." ) ; / Provide a GMSAutocompleteSessionToken for tracking the specific autocomplete query flow. / - ( void ) provideSessionToken :( nullable GMSAutocompleteSessionToken ) sessionToken GMS AVAILABLE BUT DEPRECATED MSG ( "Use <code>GMSPlacesClient#fetchAutocompleteSuggestionsFromRequest:callback:</code> " "instead." ) ; / Notify the fetcher that the source text to autocomplete has changed.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-26 UTC."],[],[]]
- This method is non-blocking. @param text The partial text to autocomplete. / - ( void ) sourceTextHasChanged :( nullable NSString ) text GMS AVAILABLE BUT DEPRECATED MSG ( "Use <code>GMSPlacesClient#fetchAutocompleteSuggestionsFromRequest:callback:</code> " "instead." ) ; @end -initWithFilter: Deprecated Use GMSPlacesClient#fetchAutocompleteSuggestionsFromRequest:callback: instead.
- Declaration Swift var autocompleteFilter : GMSAutocompleteFilter ? { get set } Objective-C @property ( nonatomic , strong , nullable ) GMSAutocompleteFilter autocompleteFilter ; -provideSessionToken: Deprecated Use GMSPlacesClient#fetchAutocompleteSuggestionsFromRequest:callback: instead.

