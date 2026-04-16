---
title: "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteResultsViewController
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteResultsViewController
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
GMSAutocompleteResultsViewController displays place autocomplete predictions in a table view, updating automatically with text input changes.
It's designed to be the search results controller for a UISearchController , handling place selection through the GMSAutocompleteResultsViewControllerDelegate .
Developers can customize the appearance, including table cell colors, text colors, and a tint color for controls.
Filtering of autocomplete suggestions is possible using the autocompleteFilter property.
Control the details fetched for selected places by setting placeProperties or placeFields to retrieve specific information.
GMSAutocompleteResultsViewController
Deprecated
Use the placeAutocomplete View extension in Places Swift SDK ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) instead.
@interface GMSAutocompleteResultsViewController
: UIViewController < UISearchResultsUpdating >
GMSAutocompleteResultsViewController provides an interface that displays place autocomplete
predictions in a table view. The table view will be automatically updated as input text
changes.
This class is intended to be used as the search results controller of a UISearchController. Pass
an instance of GMSAutocompleteResultsViewController to UISearchController’s
initWithSearchResultsController method, then set the controller as the UISearchController’s
searchResultsUpdater property.
Use the GMSAutocompleteResultsViewControllerDelegate delegate protocol to be notified when a
place is selected from the list.
delegate
Deprecated
Use the placeAutocomplete View extension in Places Swift SDK ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) instead.
Delegate to be notified when a place is selected.
Declaration
Swift
weak var delegate : ( any GMSAutocompleteResultsViewControllerDelegate )? { get set }
Objective-C
@property ( nonatomic , weak , nullable ) id < GMSAutocompleteResultsViewControllerDelegate > delegate ;
autocompleteFilter
Deprecated
Use the placeAutocomplete View extension in Places Swift SDK ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) instead.
Filter to apply to autocomplete suggestions (can be nil).
Declaration
Swift
var autocompleteFilter : GMSAutocompleteFilter ? { get set }
Objective-C
@property ( nonatomic , strong , nullable ) GMSAutocompleteFilter * autocompleteFilter ;
tableCellBackgroundColor
Deprecated
Use the placeAutocomplete View extension in Places Swift SDK ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) instead.
The background color of table cells.
Declaration
Swift
var tableCellBackgroundColor : UIColor { get set }
Objective-C
@property ( nonatomic , strong ) __GMS_AVAILABLE_BUT_DEPRECATED_MSG UIColor * tableCellBackgroundColor ;
tableCellSeparatorColor
Deprecated
Use the placeAutocomplete View extension in Places Swift SDK ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) instead.
The color of the separator line between table cells.
Declaration
Swift
var tableCellSeparatorColor : UIColor { get set }
Objective-C
@property ( nonatomic , strong ) __GMS_AVAILABLE_BUT_DEPRECATED_MSG UIColor * tableCellSeparatorColor ;
primaryTextColor
Deprecated
Use the placeAutocomplete View extension in Places Swift SDK ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) instead.
The color of result name text in autocomplete results
Declaration
Swift
var primaryTextColor : UIColor { get set }
Objective-C
@property ( nonatomic , strong ) __GMS_AVAILABLE_BUT_DEPRECATED_MSG UIColor * primaryTextColor ;
primaryTextHighlightColor
Deprecated
Use the placeAutocomplete View extension in Places Swift SDK ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) instead.
The color used to highlight matching text in autocomplete results
Declaration
Swift
var primaryTextHighlightColor : UIColor { get set }
Objective-C
@property ( nonatomic , strong ) __GMS_AVAILABLE_BUT_DEPRECATED_MSG UIColor * primaryTextHighlightColor ;
secondaryTextColor
Deprecated
Use the placeAutocomplete View extension in Places Swift SDK ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) instead.
The color of the second row of text in autocomplete results.
Declaration
Swift
var secondaryTextColor : UIColor { get set }
Objective-C
@property ( nonatomic , strong ) __GMS_AVAILABLE_BUT_DEPRECATED_MSG UIColor * secondaryTextColor ;
tintColor
Deprecated
Use the placeAutocomplete View extension in Places Swift SDK ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) instead.
The tint color applied to controls in the Autocomplete view.
Declaration
Swift
var tintColor : UIColor ? { get set }
Objective-C
@property ( nonatomic , strong , nullable ) UIColor * tintColor ;
placeProperties
Deprecated
Use the placeAutocomplete View extension in Places Swift SDK ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) instead.
Specify array of place property names to fetch for object GMSPlace . Defaults to returning all
details if not overridden.
Declaration
Swift
var placeProperties : [ String ] { get set }
Objective-C
@property ( nonatomic , strong ) __GMS_AVAILABLE_BUT_DEPRECATED_MSG NSArray < NSString *> * placeProperties ;
placeFields
Deprecated
Use the placeAutocomplete View extension in Places Swift SDK ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) instead.
Specify individual place details to fetch for object GMSPlace . Defaults to returning all
details if not overridden.
Declaration
Swift
var placeFields : GMSPlaceField { get set }
Objective-C
@property ( nonatomic ) GMSPlaceField placeFields ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-26 UTC."],[],["`GMSAutocompleteResultsViewController` displays place autocomplete predictions in a table view, updating as text changes. It's used with `UISearchController` by setting it as the `searchResultsController` and `searchResultsUpdater`. Key actions include setting a delegate to handle place selections, applying filters to suggestions, and customizing table cell and text colors. You can also specify place properties or fields to retrieve and customize the view's tint color.\n"]]
