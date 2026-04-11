---
title: "Interface AddProductToProductSetRequestOrBuilder (3.86.0) \_|\_ Java client\
  \ libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/com.google.cloud.vision.v1.AddProductToProductSetRequestOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/com.google.cloud.vision.v1.AddProductToProductSetRequestOrBuilder
  title: "Interface AddProductToProductSetRequestOrBuilder (3.86.0) \_|\_ Java client\
    \ libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Interface AddProductToProductSetRequestOrBuilder (3.86.0)
Stay organized with collections
Save and categorize content based on your preferences.
3.86.0 (latest)
3.85.0
3.83.0
3.81.0
3.80.0
3.78.0
3.76.0
3.74.0
3.73.0
3.72.0
3.71.0
3.70.0
3.68.0
3.66.0
3.65.0
3.62.0
3.61.0
3.60.0
3.58.0
3.57.0
3.56.0
3.55.0
3.54.0
3.53.0
3.52.0
3.51.0
3.50.0
3.49.0
3.47.0
3.46.0
3.45.0
3.44.0
3.43.0
3.42.0
3.41.0
3.40.0
3.39.0
3.38.0
3.37.0
3.35.0
3.34.0
3.33.0
3.32.0
3.31.0
3.30.0
3.29.0
3.28.0
3.27.0
3.26.0
3.25.0
3.22.0
3.21.0
3.20.0
3.19.0
3.18.0
3.17.0
3.16.0
3.15.0
3.14.0
3.13.0
3.12.0
3.11.0
3.10.0
3.9.0
3.7.0
3.6.0
3.5.0
3.4.0
3.3.0
3.2.0
3.1.3
2.1.4
2.0.29
public interface AddProductToProductSetRequestOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
getName()
public abstract String getName ()
Required. The resource name for the ProductSet to modify.
Format is:
projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID
string name = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }
Returns
Type
Description
String
The name.
getNameBytes()
public abstract ByteString getNameBytes ()
Required. The resource name for the ProductSet to modify.
Format is:
projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID
string name = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }
Returns
Type
Description
ByteString
The bytes for name.
getProduct()
public abstract String getProduct ()
Required. The resource name for the Product to be added to this ProductSet.
Format is:
projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID
string product = 2 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }
Returns
Type
Description
String
The product.
getProductBytes()
public abstract ByteString getProductBytes ()
Required. The resource name for the Product to be added to this ProductSet.
Format is:
projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID
string product = 2 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }
Returns
Type
Description
ByteString
The bytes for product.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
