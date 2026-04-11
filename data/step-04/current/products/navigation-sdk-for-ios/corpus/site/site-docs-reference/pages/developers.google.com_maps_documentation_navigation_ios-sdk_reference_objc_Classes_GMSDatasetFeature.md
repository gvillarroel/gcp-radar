---
title: "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSDatasetFeature
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSDatasetFeature
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
GMSDatasetFeature represents a feature from a dataset and always has a feature type of GMSFeatureTypeDataset .
Each GMSDatasetFeature is associated with a specific dataset, identified by its datasetID .
Features contain key-value pairs in datasetAttributes to store their properties.
Although an initializer is provided for testing, GMSDatasetFeature instances should ideally be created by the SDK in production environments.
GMSDatasetFeature
@interface GMSDatasetFeature : NSObject < GMSFeature >
An interface representing a feature from a dataset.
The featureType of a DatasetFeature will always be GMSFeatureTypeDataset .
datasetID
Dataset id of the dataset that this feature belongs to.
Declaration
Swift
var datasetID : String { get }
Objective-C
@property ( nonatomic , readonly ) NSString * _Nonnull datasetID ;
datasetAttributes
Key-value mapping of the attributes associated with the feature in the dataset.
Declaration
Swift
var datasetAttributes : [ String : String ] { get }
Objective-C
@property ( nonatomic , readonly ) NSDictionary < NSString * , NSString *> * _Nonnull datasetAttributes ;
-initWithDatasetID:datasetAttributes:
Create a dataset feature instance for testing uses.
This method should be used for testing purposes only; GMSDatasetFeature instances should only
be created by the SDK in production code.
Declaration
Swift
init ( datasetID : String , datasetAttributes : [ String : String ] = [:])
Objective-C
- ( nonnull instancetype ) initWithDatasetID :( nonnull NSString * ) datasetID
datasetAttributes :
( nonnull NSDictionary < NSString * , NSString *> * )
datasetAttributes ;
-init
Unavailable
Declaration
Objective-C
- ( instancetype ) init NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["`GMSDatasetFeature` represents a feature from a dataset, always of `GMSFeatureTypeDataset`. It has a `datasetID`, indicating the dataset it belongs to, and `datasetAttributes`, a key-value map of associated attributes. Instances are created by the SDK in production. For testing, `initWithDatasetID:datasetAttributes:` creates a feature. The standard `init` method is unavailable, ensuring SDK-managed creation. All properties are read-only.\n"]]
