---
title: "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteFetcher
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteFetcher
  title: "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\
    \ Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
iOS
Places SDK for iOS
Reference
Send feedback
GooglePlaces Framework Reference
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
GMSAutocompleteFetcher simplifies the process of getting autocomplete predictions as the user types.
It might not request predictions for every text change to optimize performance.
Predictions are only returned for the most recent text provided.
A delegate is notified with the prediction results.
You can customize the predictions using a filter and track queries with a session token.
GMSAutocompleteFetcher
Deprecated
Use GMSPlacesClient#fetchAutocompleteSuggestionsFromRequest:callback: instead.
@interface GMSAutocompleteFetcher : NSObject
/**
* Initialize the fetcher.
*
* @param filter The filter to apply to the results. This parameter may be nil.
*/
- ( instancetype ) initWithFilter :( nullable GMSAutocompleteFilter * ) filter NS_DESIGNATED_INITIALIZER
__GMS_AVAILABLE_BUT_DEPRECATED_MSG (
"Use <code>GMSPlacesClient#fetchAutocompleteSuggestionsFromRequest:callback:</code> "
"instead." )
;
/** Delegate to be notified with autocomplete prediction results. */
@property ( nonatomic , weak , nullable ) id < GMSAutocompleteFetcherDelegate > delegate
__GMS_AVAILABLE_BUT_DEPRECATED_MSG (
"Use <code>GMSPlacesClient#fetchAutocompleteSuggestionsFromRequest:callback:</code> "
"instead." )
;
/** Filter to apply to autocomplete suggestions (can be nil). */
@property ( nonatomic , strong , nullable ) GMSAutocompleteFilter * autocompleteFilter
__GMS_AVAILABLE_BUT_DEPRECATED_MSG (
"Use <code>GMSPlacesClient#fetchAutocompleteSuggestionsFromRequest:callback:</code> "
"instead." )
;
/** Provide a `GMSAutocompleteSessionToken` for tracking the specific autocomplete query flow. */
- ( void ) provideSessionToken :( nullable GMSAutocompleteSessionToken * ) sessionToken
__GMS_AVAILABLE_BUT_DEPRECATED_MSG (
"Use <code>GMSPlacesClient#fetchAutocompleteSuggestionsFromRequest:callback:</code> "
"instead." )
;
/**
* Notify the fetcher that the source text to autocomplete has changed.
*
* This method should only be called from the main thread. Calling this method from another thread
* will result in undefined behavior. Calls to `GMSAutocompleteFetcherDelegate` methods will also be
* called on the main thread.
*
* This method is non-blocking.
* @param text The partial text to autocomplete.
*/
- ( void ) sourceTextHasChanged :( nullable NSString * ) text
__GMS_AVAILABLE_BUT_DEPRECATED_MSG (
"Use <code>GMSPlacesClient#fetchAutocompleteSuggestionsFromRequest:callback:</code> "
"instead." )
;
@end
-initWithFilter:
Deprecated
Use GMSPlacesClient#fetchAutocompleteSuggestionsFromRequest:callback: instead.
Initialize the fetcher.
Declaration
Swift
init ( filter : GMSAutocompleteFilter ?)
Objective-C
- ( nonnull instancetype ) initWithFilter :( nullable GMSAutocompleteFilter * ) filter ;
Parameters
filter
The filter to apply to the results. This parameter may be nil.
delegate
Deprecated
Use GMSPlacesClient#fetchAutocompleteSuggestionsFromRequest:callback: instead.
Delegate to be notified with autocomplete prediction results.
Declaration
Swift
weak var delegate : ( any GMSAutocompleteFetcherDelegate )? { get set }
Objective-C
@property ( nonatomic , weak , nullable ) id < GMSAutocompleteFetcherDelegate > delegate ;
autocompleteFilter
Deprecated
Use GMSPlacesClient#fetchAutocompleteSuggestionsFromRequest:callback: instead.
Filter to apply to autocomplete suggestions (can be nil).
Declaration
Swift
var autocompleteFilter : GMSAutocompleteFilter ? { get set }
Objective-C
@property ( nonatomic , strong , nullable ) GMSAutocompleteFilter * autocompleteFilter ;
-provideSessionToken:
Deprecated
Use GMSPlacesClient#fetchAutocompleteSuggestionsFromRequest:callback: instead.
Provide a GMSAutocompleteSessionToken for tracking the specific autocomplete query flow.
Declaration
Swift
func provide ( _ sessionToken : GMSAutocompleteSessionToken ?)
Objective-C
- ( void ) provideSessionToken :
( nullable GMSAutocompleteSessionToken * ) sessionToken ;
-sourceTextHasChanged:
Deprecated
Use GMSPlacesClient#fetchAutocompleteSuggestionsFromRequest:callback: instead.
Notify the fetcher that the source text to autocomplete has changed.
This method should only be called from the main thread. Calling this method from another thread
will result in undefined behavior. Calls to GMSAutocompleteFetcherDelegate methods will also be
called on the main thread.
This method is non-blocking.
Declaration
Swift
func sourceTextHasChanged ( _ text : String ?)
Objective-C
- ( void ) sourceTextHasChanged :( nullable NSString * ) text ;
Parameters
text
The partial text to autocomplete.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-26 UTC."],[],[]]
