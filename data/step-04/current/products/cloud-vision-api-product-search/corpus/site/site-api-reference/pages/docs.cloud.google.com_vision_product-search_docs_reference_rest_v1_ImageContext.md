---
title: "ImageContext \_|\_ Vision API Product Search \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vision/product-search/docs/reference/rest/v1/ImageContext
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vision/product-search/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/vision/product-search/docs/reference/rest/v1/ImageContext
  title: "ImageContext \_|\_ Vision API Product Search \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Vision API Product Search
Reference
ImageContext
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
LatLongRect
JSON representation
CropHintsParams
JSON representation
ProductSearchParams
JSON representation
WebDetectionParams
JSON representation
Image context and/or feature-specific parameters.
JSON representation
{
"latLongRect" : {
object ( LatLongRect )
} ,
"languageHints" : [
string
] ,
"cropHintsParams" : {
object ( CropHintsParams )
} ,
"productSearchParams" : {
object ( ProductSearchParams )
} ,
"webDetectionParams" : {
object ( WebDetectionParams )
}
}
Fields
latLongRect
object ( LatLongRect )
Not used.
languageHints[]
string
List of languages to use for TEXT_DETECTION. In most cases, an empty value yields the best results since it enables automatic language detection. For languages based on the Latin alphabet, setting languageHints is not needed. In rare cases, when the language of the text in the image is known, setting a hint will help get better results (although it will be a significant hindrance if the hint is wrong). Text detection returns an error if one or more of the specified languages is not one of the supported languages .
cropHintsParams
object ( CropHintsParams )
Parameters for crop hints annotation request.
productSearchParams
object ( ProductSearchParams )
Parameters for product search.
webDetectionParams
object ( WebDetectionParams )
Parameters for web detection.
LatLongRect
Rectangle determined by min and max LatLng pairs.
JSON representation
{
"minLatLng" : {
object ( LatLng )
} ,
"maxLatLng" : {
object ( LatLng )
}
}
Fields
minLatLng
object ( LatLng )
Min lat/long pair.
maxLatLng
object ( LatLng )
Max lat/long pair.
CropHintsParams
Parameters for crop hints annotation request.
JSON representation
{
"aspectRatios" : [
number
]
}
Fields
aspectRatios[]
number
Aspect ratios in floats, representing the ratio of the width to the height of the image. For example, if the desired aspect ratio is 4/3, the corresponding float value should be 1.33333. If not specified, the best possible crop is returned. The number of provided aspect ratios is limited to a maximum of 16; any aspect ratios provided after the 16th are ignored.
ProductSearchParams
Parameters for a product search request.
JSON representation
{
"boundingPoly" : {
object ( BoundingPoly )
} ,
"productSet" : string ,
"productCategories" : [
string
] ,
"filter" : string
}
Fields
boundingPoly
object ( BoundingPoly )
The bounding polygon around the area of interest in the image. Optional. If it is not specified, system discretion will be applied.
productSet
string
The resource name of a ProductSet to be searched for similar images.
Format is: projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID .
productCategories[]
string
The list of product categories to search in. Currently, we only consider the first category, and either "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1", or "general-v1" should be specified. The legacy categories "homegoods", "apparel", and "toys" are still supported but will be deprecated. For new products, please use "homegoods-v2", "apparel-v2", or "toys-v2" for better product search accuracy. It is recommended to migrate existing products to these categories as well.
filter
string
The filtering expression. This can be used to restrict search results based on Product labels. We currently support an AND of OR of key-value expressions, where each expression within an OR must have the same key. An '=' should be used to connect the key and value.
For example, "(color = red OR color = blue) AND brand = Google" is acceptable, but "(color = red OR brand = Google)" is not acceptable. "color: red" is not acceptable because it uses a ':' instead of an '='.
WebDetectionParams
Parameters for web detection request.
JSON representation
{
"includeGeoResults" : boolean
}
Fields
includeGeoResults
boolean
Whether to include results derived from the geo information in the image.
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
