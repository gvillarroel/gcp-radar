---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:53.035Z"
product_name: "Cloud Product Registry API"
product_slug: "cloud-product-registry-api"
feature_name: "Cloud Product Registry API"
feature_slug: "cloud-product-registry-api"
latest_feature_date: "2026-02-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/product-registry/overview"
  - "https://docs.cloud.google.com/product-registry/reference/cloudproductregistry-api/rest/v1/logicalProducts/get"
  - "https://docs.cloud.google.com/product-registry/reference/cloudproductregistry-api/rest/v1/logicalProducts/list"
  - "https://docs.cloud.google.com/product-registry/reference/cloudproductregistry-api/rest/v1/logicalProducts/lookupEntity"
keywords:
  - "product"
  - "registry"
  - "api"
  - "provides"
  - "programmatic"
  - "access"
  - "to"
  - "the"
---

# Cloud Product Registry API

Product: Cloud Product Registry API
Coverage: MEDIUM

## Step 02 Summary

Cloud Product Registry API provides programmatic access to the official hierarchy of first-party Google Cloud products and variants with basic product attributes.

## Extended Definition

Cloud Product Registry API provides programmatic access to the official hierarchy of first-party Google Cloud products and variants with basic product attributes.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/product-registry/overview](https://docs.cloud.google.com/product-registry/overview)
- [https://docs.cloud.google.com/product-registry/reference/cloudproductregistry-api/rest/v1/logicalProducts/get](https://docs.cloud.google.com/product-registry/reference/cloudproductregistry-api/rest/v1/logicalProducts/get)
- [https://docs.cloud.google.com/product-registry/reference/cloudproductregistry-api/rest/v1/logicalProducts/list](https://docs.cloud.google.com/product-registry/reference/cloudproductregistry-api/rest/v1/logicalProducts/list)
- [https://docs.cloud.google.com/product-registry/reference/cloudproductregistry-api/rest/v1/logicalProducts/lookupEntity](https://docs.cloud.google.com/product-registry/reference/cloudproductregistry-api/rest/v1/logicalProducts/lookupEntity)

## Supporting Pages

### "Cloud Product Registry overview \_|\_ Cloud Product Registry API \_|\_ Google\

- URL: [https://docs.cloud.google.com/product-registry/overview](https://docs.cloud.google.com/product-registry/overview)
- Source ID: `site-docs-root`
- Final score: 338
- Re-rank relevance: N/A

Evidence snippets:
- You can use this API to programmatically access the official hierarchy of Google Cloud tools, ensuring your internal catalogs and governance policies rely on accurate, real-time data.
- Access and authentication Since Cloud Product Registry API exposes public Google data, no additional IAM permissions are required at project level for accessing this API.
- What's next Explore the following resources to learn more about using the Cloud Product Registry: Learn how to List and Get Product Suites Explore how to lookup entities using resource names Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Access and resource management Cloud Product Registry API Guides Send feedback Cloud Product Registry overview Stay organized with collections Save and categorize content based on your preferences.

### "Method: logicalProducts.get \_|\_ Cloud Product Registry API \_|\_ Google\

- URL: [https://docs.cloud.google.com/product-registry/reference/cloudproductregistry-api/rest/v1/logicalProducts/get](https://docs.cloud.google.com/product-registry/reference/cloudproductregistry-api/rest/v1/logicalProducts/get)
- Source ID: `site-api-reference`
- Final score: 270
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Access and resource management Cloud Product Registry API APIs & Reference Send feedback Method: logicalProducts.get Stay organized with collections Save and categorize content based on your preferences.
- HTTP request GET https://cloudproductregistry.googleapis.com/v1/{name=logicalProducts/ } The URL uses gRPC Transcoding syntax.
- The name of the LogicalProduct to retrieve.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-05 UTC."],[],[]]

### "Method: logicalProducts.list \_|\_ Cloud Product Registry API \_|\_ Google\

- URL: [https://docs.cloud.google.com/product-registry/reference/cloudproductregistry-api/rest/v1/logicalProducts/list](https://docs.cloud.google.com/product-registry/reference/cloudproductregistry-api/rest/v1/logicalProducts/list)
- Source ID: `site-api-reference`
- Final score: 270
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Access and resource management Cloud Product Registry API APIs & Reference Send feedback Method: logicalProducts.list Stay organized with collections Save and categorize content based on your preferences.
- HTTP request GET https://cloudproductregistry.googleapis.com/v1/logicalProducts The URL uses gRPC Transcoding syntax.
- If successful, the response body contains data with the following structure: JSON representation { "logicalProducts" : [ { object ( LogicalProduct ) } ] , "nextPageToken" : string } Fields logicalProducts[] object ( LogicalProduct ) Matched LogicalProducts nextPageToken string A token, which can be sent as pageToken to retrieve the next page.
- When paginating, all other parameters provided to logicalProducts.list must match the call that provided the page token.

### "Method: logicalProducts.lookupEntity \_|\_ Cloud Product Registry API \_\

- URL: [https://docs.cloud.google.com/product-registry/reference/cloudproductregistry-api/rest/v1/logicalProducts/lookupEntity](https://docs.cloud.google.com/product-registry/reference/cloudproductregistry-api/rest/v1/logicalProducts/lookupEntity)
- Source ID: `site-api-reference`
- Final score: 270
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Access and resource management Cloud Product Registry API APIs & Reference Send feedback Method: logicalProducts.lookupEntity Stay organized with collections Save and categorize content based on your preferences.
- HTTP request GET https://cloudproductregistry.googleapis.com/v1/{lookupUri=logicalProducts/ }:lookupEntity The URL uses gRPC Transcoding syntax.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-05 UTC."],[],[]]
- Supported Formats: logicalProducts/{logicalProduct} logicalProducts/{logicalProduct}/variants/{variant} productSuites/{productSuite} Request body The request body must be empty.

