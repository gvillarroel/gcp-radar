---
title: "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSFetchPhotoRequest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSFetchPhotoRequest
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
GMSFetchPhotoRequest objects are used with GMSPlacesClient to retrieve photos for places.
The designated initializer, initWithPhotoMetadata:maxSize: , allows specifying the photo metadata and the desired maximum size for the image.
The photoMetadata parameter provides details about the photo being requested.
The maxSize parameter determines the maximum dimensions of the returned image, ensuring it's scaled appropriately while preserving its aspect ratio.
The default initializer, init , is unavailable; use the designated initializer instead.
GMSFetchPhotoRequest
@interface GMSFetchPhotoRequest : NSObject
Request object to use with GMSPlacesClient to fetch a photo.
-initWithPhotoMetadata:maxSize:
Request object to use with GMSPlacesClient to fetch a photo.
Declaration
Swift
init ( photoMetadata : GMSPlacePhotoMetadata , maxSize : CGSize )
Objective-C
- ( nonnull instancetype ) initWithPhotoMetadata :
( nonnull GMSPlacePhotoMetadata * ) photoMetadata
maxSize :( CGSize ) maxSize ;
Parameters
photoMetadata
GMSPlacePhotoMetadata The maximum desired size in pixels
of the image returned by the Place Photos service.
maxSize
CGSize The photo metadata to request.
If the image is smaller than the values specified, the original image will be returned. If the
image is larger in either dimension, it will be scaled to match the smaller of the two
dimensions, restricted to its original aspect ratio. CGSize height and width should be set to an
integer between 1 and 4800. If not, the GMSPlacesClient request callback will return an error.
-init
Unavailable
Default init is not available. Please use the designated initializer.
Declaration
Objective-C
- ( nonnull instancetype ) init ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]
