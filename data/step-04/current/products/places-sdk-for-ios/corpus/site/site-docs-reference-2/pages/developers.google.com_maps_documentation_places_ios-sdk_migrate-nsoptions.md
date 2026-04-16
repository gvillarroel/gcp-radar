---
title: "Migrating to GMSPlaceField as NS_OPTIONS \_|\_ Places SDK for iOS \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/migrate-nsoptions
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/migrate-nsoptions
  title: "Migrating to GMSPlaceField as NS_OPTIONS \_|\_ Places SDK for iOS \_|\_\
    \ Google for Developers"
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
Legacy
Send feedback
Migrating to GMSPlaceField as NS_OPTIONS
Stay organized with collections
Save and categorize content based on your preferences.
Beginning with Version 4.0.0 of the Places SDK for iOS, the GMSPlaceField
type now uses the NS_OPTIONS macro. Versions 3.x of the SDK have GMSPlaceField
as NS_ENUM and are still supported.
If you are using Objective-C: there are no implications. You can continue
using GMSPlaceField as before.
If you are using Swift: Your implementation will break if you are using
the GMSPlaceField(rawValue:) syntax as the constructor, which older versions
of the SDK returned as an optional GMSPlaceField? . Version 4.0.0 and higher
returns a non-optional GMSPlaceField value; any operations that are
performed on the optional, such as conditional checks or force unwraps, will
fail. In addition, you may now use array syntax to combine GMSPlaceField s
Migrating your code
Certain conditional unwrapping or force unwrapping syntaxes will break in Swift.
The following examples show how to fix these issues, and also demonstrate using
array syntax to declare GMSPlaceField :
Conditional unwrapping
The statement in the following example shows using if to create a
GMSPlaceField array which requires conditional unwrapping. This will result
in a compiler error ("Initializer for conditional binding must have Optional
type, not GMSPlaceField ".)
// Before.
if let field = GMSPlaceField (
rawValue : GMSPlaceField . name . rawValue | GMSPlaceField . photos . rawValue
) { // Do something }
To fix this issue, remove the if statement, as shown here:
// After.
let field = GMSPlaceField (
rawValue : GMSPlaceField . name . rawValue | GMSPlaceField . photos . rawValue
)
// Do something
You can also use array syntax, as shown here:
let field = [GMSPlaceField.name, GMSPlaceField.photos]
// or
let field: GMSPlaceField = [.name, .photos]
Force unwrapping
The statement in the following example shows using GMSPlaceField as a non-
optional type. This will result in a compiler error ("Cannot force unwrap value
of non-optional type GMSPlaceField."):
// Before.
let field = GMSPlaceField (
rawValue : GMSPlaceField . name . rawValue | GMSPlaceField . photos . rawValue
) !
To fix this issue, use GMSPlaceField as an optional type, as shown here:
// After.
let field = GMSPlaceField (
rawValue : GMSPlaceField . name . rawValue | GMSPlaceField . photos . rawValue
)
You can also use array syntax, as shown here:
let field = [GMSPlaceField.name, GMSPlaceField.photos]
// or
let field: GMSPlaceField = [.name, .photos]
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
