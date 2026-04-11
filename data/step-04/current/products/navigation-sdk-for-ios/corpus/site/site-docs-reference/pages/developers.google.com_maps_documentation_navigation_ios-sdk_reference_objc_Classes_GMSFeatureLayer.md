---
title: "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSFeatureLayer
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSFeatureLayer
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
GMSFeatureLayer represents a collection of features with the same type, allowing for client-side style overrides.
Each feature type has a corresponding GMSFeatureLayer to manage its features.
The style property allows applying a styling block to all features in the layer, enabling customization of their appearance.
Data-driven styling requires the Metal Framework, a valid map ID, and the feature type to be applied; availability can be checked with isAvailable .
GMSFeatureLayer instances should be created by the SDK in production; the initWithFeatureType: initializer is for testing purposes only.
GMSFeatureLayer
@interface GMSFeatureLayer < __covariant T : id < GMSFeature >> : NSObject
A class representing a collection of all features of the same GMSFeatureType , whose style can
be overridden on the client. Each GMSFeatureType will have one corresponding GMSFeatureLayer .
featureType
The feature type associated with this layer. All features associated with the layer will be of
this type.
Declaration
Swift
var featureType : FeatureType { get }
Objective-C
@property ( nonatomic , readonly ) GMSFeatureType _Nonnull featureType ;
available
Determines if the data-driven GMSFeatureLayer is available. Data-driven styling requires
the Metal Framework, a valid map ID and that the feature type be applied.
If NO , styling for the GMSFeatureLayer returns to the default and events are not triggered.
Declaration
Swift
var isAvailable : Bool { get }
Objective-C
@property ( nonatomic , readonly , getter = isAvailable ) BOOL available ;
style
Styling block to be applied to all features in this layer.
The style block is applied to all visible features in the viewport when the setter is called, and
is run multiple times for the subsequent features entering the viewport.
The function is required to be deterministic and return consistent results when it is applied
over the map tiles. If any styling specs of any feature would be changed, style must be set
again. Changing behavior of the style block without calling the style setter will result in
undefined behavior, including stale and/or shattered map renderings. See the example below:
var selectedPlaceIDs = Set<String>()
var style = FeatureStyle(fill: .red, stroke: .clear, strokeWidth: 0)
layer.style = { feature in
selectedPlaceIDs.contains(feature.placeID) ? style : nil
}
selectedPlaceIDs.insert("foo")
style = FeatureStyle(fill: .clear, stroke: .blue, strokeWidth: 1.5)
layer.style = { feature in
selectedPlaceIDs.contains(feature.placeID) ? style : nil
}
Declaration
Swift
var style : (( T ) -> FeatureStyle ?)? { get set }
Objective-C
@property ( nonatomic , nullable ) GMSFeatureStyle * _Nullable ( ^ )( T _Nonnull ) style ;
-initWithFeatureType:
Create a feature layer instance for testing.
This method should be used for your unit tests only. In production, GMSFeatureLayer instances
should only be created by the SDK.
Declaration
Swift
convenience init ( featureType : FeatureType )
Objective-C
- ( nonnull instancetype ) initWithFeatureType :( nonnull GMSFeatureType ) featureType ;
-init
Unavailable
Declaration
Objective-C
- ( instancetype ) init NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["`GMSFeatureLayer` represents a collection of features of the same `GMSFeatureType`, allowing client-side style overrides. Key actions involve setting the `featureType`, checking if the layer is `available` for data-driven styling, and setting a `style` block to customize feature appearances. Styling changes require resetting the `style`. A unit test constructor `initWithFeatureType` is provided; production instances are managed by the SDK. The `init` method is unavailable.\n"]]
