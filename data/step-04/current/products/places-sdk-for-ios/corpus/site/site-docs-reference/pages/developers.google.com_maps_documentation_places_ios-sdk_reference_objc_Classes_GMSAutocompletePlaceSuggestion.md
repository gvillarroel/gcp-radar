---
title: "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompletePlaceSuggestion
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompletePlaceSuggestion
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
GMSAutocompletePlaceSuggestion objects represent place suggestions generated from partial user input.
These suggestions provide attributed text representations for the full description, primary name, and secondary location details.
Each suggestion includes a place ID for further place details requests and an array of relevant place types.
Optionally, a distance in meters from a specified origin may be included.
GMSAutocompletePlaceSuggestion
@interface GMSAutocompletePlaceSuggestion : NSObject
This class represents a place suggestion of a full query based on a partially typed string.
attributedFullText
The full description of the suggestion as a NSAttributedString. E.g., “Sydney Opera House,
Sydney, New South Wales, Australia”.
Every text range that matches the user input has a kGMSAutocompleteMatchAttribute . For
example, you can make every match bold using enumerateAttribute:
UIFont *regularFont = [UIFont systemFontOfSize:[UIFont labelFontSize]];
UIFont *boldFont = [UIFont boldSystemFontOfSize:[UIFont labelFontSize]];
NSMutableAttributedString *bolded = [suggestion.attributedFullText mutableCopy];
[bolded enumerateAttribute:kGMSAutocompleteMatchAttribute
inRange:NSMakeRange(0, bolded.length)
options:0
usingBlock:^(id value, NSRange range, BOOL *stop) {
UIFont *font = (value == nil) ? regularFont : boldFont;
[bolded addAttribute:NSFontAttributeName value:font range:range];
}];
label.attributedText = bolded;
Declaration
Swift
@NSCopying var attributedFullText : NSAttributedString { get }
Objective-C
@property ( nonatomic , copy , readonly ) NSAttributedString * _Nonnull attributedFullText ;
attributedPrimaryText
The primary text of a suggestion as a NSAttributedString, usually the name of the place.
E.g. “Sydney Opera House”.
Text ranges that match user input have a kGMSAutocompleteMatchAttribute ,
like attributedFullText .
Declaration
Swift
@NSCopying var attributedPrimaryText : NSAttributedString { get }
Objective-C
@property ( nonatomic , copy , readonly ) NSAttributedString * _Nonnull attributedPrimaryText ;
attributedSecondaryText
The secondary text of a suggestion as a NSAttributedString, usually the location of the place.
E.g. “Sydney, New South Wales, Australia”.
Text ranges that match user input have a kGMSAutocompleteMatchAttribute , like
attributedFullText .
May be nil .
Declaration
Swift
@NSCopying var attributedSecondaryText : NSAttributedString ? { get }
Objective-C
@property ( nonatomic , copy , readonly , nullable ) NSAttributedString * attributedSecondaryText ;
placeID
A property representing the place ID of the suggestion, suitable for use in a place details
request.
Declaration
Swift
var placeID : String { get }
Objective-C
@property ( nonatomic , copy , readonly ) NSString * _Nonnull placeID ;
types
Autocomplete result types. Types are NSStrings, valid values are any types
documented at https://developers.google.com/places/ios-sdk/supported_types .
Declaration
Swift
var types : [ String ] { get }
Objective-C
@property ( nonatomic , copy , readonly ) NSArray < NSString *> * _Nonnull types ;
distanceMeters
The straight line distance in meters between the origin and this suggestion if a valid origin is
specified in the GMSAutocompleteFilter of the request.
Declaration
Swift
var distanceMeters : NSNumber ? { get }
Objective-C
@property ( nonatomic , readonly , nullable ) NSNumber * distanceMeters ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]
