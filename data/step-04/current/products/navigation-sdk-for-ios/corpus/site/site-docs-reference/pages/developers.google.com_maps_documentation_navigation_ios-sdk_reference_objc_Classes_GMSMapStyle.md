---
title: "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapStyle
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapStyle
  title: "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\
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
Navigation SDK for iOS
Reference
Send feedback
GoogleNavigation Framework Reference
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
GMSMapStyle allows customization of the visual display of Google Maps features like roads, parks, and points of interest.
You can change the style of map features or hide them completely to highlight specific elements or complement your app's content.
Styles can be created using a JSON string with styleWithJSONString:error: or from a JSON file with styleWithContentsOfFileURL:error: .
Invalid JSON, unreadable files, or incorrect URLs will result in a nil return value and populate an error object if provided.
GMSMapStyle
@interface GMSMapStyle : NSObject
GMSMapStyle holds details about a style which can be applied to a map.
With style options you can customize the presentation of the standard Google map styles, changing
the visual display of features like roads, parks, and other points of interest. As well as
changing the style of these features, you can also hide features entirely. This means that you
can emphasize particular components of the map or make the map complement the content of your
app.
For more information see: https://developers.google.com/maps/documentation/ios-sdk/styling
+styleWithJSONString:error:
Creates a style using a string containing JSON.
Returns nil and populates error (if provided) if style is invalid.
Declaration
Swift
convenience init ( jsonString style : String ) throws
Objective-C
+ ( nullable instancetype ) styleWithJSONString :( nonnull NSString * ) style
error :
( NSError * _Nullable * _Nullable ) error ;
+styleWithContentsOfFileURL:error:
Creates a style using a file containing JSON.
Returns nil and populates error (if provided) if style is invalid, the file cannot be read,
or the URL is not a file URL.
Declaration
Swift
convenience init ( contentsOfFileURL fileURL : URL ) throws
Objective-C
+ ( nullable instancetype )
styleWithContentsOfFileURL :( nonnull NSURL * ) fileURL
error :( NSError * _Nullable * _Nullable ) error ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["`GMSMapStyle` allows customization of Google map styles, including visual changes and feature hiding. Styles are created via JSON strings or files. `styleWithJSONString:error:` generates a style from a JSON string, while `styleWithContentsOfFileURL:error:` creates a style from a JSON file. Both methods return nil and provide an error if the style is invalid, the file is unreadable, or the URL is not a file URL.\n"]]
