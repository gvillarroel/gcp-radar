---
title: "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteMatchFragment
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteMatchFragment
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
GMSAutocompleteMatchFragment highlights contiguous characters within a string for autocompletion UI purposes.
It provides the offset (starting position) and length of the matched fragment within the original string.
This class is intended for highlighting matched text segments and cannot be directly initialized.
GMSAutocompleteMatchFragment
@interface GMSAutocompleteMatchFragment : NSObject
This class represents a matched fragment of a string. This is a contiguous range of characters
in a string, suitable for highlighting in an autocompletion UI.
offset
The offset of the matched fragment. This is an index into a string. The character at this index
is the first matched character.
Declaration
Swift
var offset : UInt { get }
Objective-C
@property ( nonatomic , readonly ) NSUInteger offset ;
length
The length of the matched fragment.
Declaration
Swift
var length : UInt { get }
Objective-C
@property ( nonatomic , readonly ) NSUInteger length ;
-init
Unavailable
Initializer is not available.
Declaration
Objective-C
- ( nonnull instancetype ) init ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["`GMSAutocompleteMatchFragment` represents a substring within a larger string, designated for highlighting in autocompletion interfaces. It defines two key properties: `offset`, which indicates the starting index of the matched substring, and `length`, which specifies the number of characters in the matched fragment. The initializer is unavailable, implying that instances are created elsewhere, and not directly instantiated. These properties are accessible for read operations.\n"]]
