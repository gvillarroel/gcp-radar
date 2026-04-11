---
title: "Cloud Product Registry API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/product-registry/reference/cloudproductregistry-api/rest
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/product-registry/overview
source_metadata:
  url: https://docs.cloud.google.com/product-registry/reference/cloudproductregistry-api/rest
  title: "Cloud Product Registry API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Cloud Product Registry API
APIs & Reference
Send feedback
Cloud Product Registry API
Stay organized with collections
Save and categorize content based on your preferences.
cloudproductregistry.googleapis.com API.
REST Resource: v1.logicalProducts
REST Resource: v1.logicalProducts.variants
REST Resource: v1.productSuites
Service: cloudproductregistry.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://cloudproductregistry.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://cloudproductregistry.googleapis.com
REST Resource: v1.logicalProducts
Methods
get
GET /v1/{name=logicalProducts/*}
Gets details of a LogicalProduct.
list
GET /v1/logicalProducts
Lists LogicalProducts matching given criteria.
lookupEntity
GET /v1/{lookupUri=logicalProducts/*}:lookupEntity
Look up entities.
REST Resource: v1.logicalProducts.variants
Methods
get
GET /v1/{name=logicalProducts/*/variants/*}
Get details of a LogicalProductVariant.
list
GET /v1/{parent=logicalProducts/*}/variants
Lists LogicalProductVariants matching given criteria.
lookupEntity
GET /v1/{lookupUri=logicalProducts/*/variants/*}:lookupEntity
Look up entities.
REST Resource: v1.productSuites
Methods
get
GET /v1/{name=productSuites/*}
Get details of a ProductSuite.
list
GET /v1/productSuites
Lists ProductSuites.
lookupEntity
GET /v1/{lookupUri=productSuites/*}:lookupEntity
Look up entities.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-27 UTC."],[],[]]
