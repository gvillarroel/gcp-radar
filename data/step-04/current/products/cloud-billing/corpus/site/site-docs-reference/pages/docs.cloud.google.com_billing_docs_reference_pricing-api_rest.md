---
title: "Pricing API \_|\_ Cloud Billing \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/billing/docs/reference/pricing-api/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/billing/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/billing/docs/reference/pricing-api/rest
  title: "Pricing API \_|\_ Cloud Billing \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Costs and usage management
Cloud Billing
APIs & Reference
Send feedback
Pricing API
Stay organized with collections
Save and categorize content based on your preferences.
Use the Cloud Billing Pricing API to get pricing information about all Google Cloud Services. If you have a custom pricing contract with Google Cloud, you can also use the API to get information about your contract prices.
REST Resource: v2beta.billingAccounts.skus.price
REST Resource: v2beta.billingAccounts.skus.prices
REST Resource: v2beta.services
REST Resource: v2beta.skus
REST Resource: v2beta.skus.price
REST Resource: v2beta.skus.prices
REST Resource: v1beta.billingAccounts.services
REST Resource: v1beta.billingAccounts.skuGroups
REST Resource: v1beta.billingAccounts.skuGroups.skus
REST Resource: v1beta.billingAccounts.skus
REST Resource: v1beta.billingAccounts.skus.price
REST Resource: v1beta.billingAccounts.skus.prices
REST Resource: v1beta.skuGroups
REST Resource: v1beta.skuGroups.skus
REST Resource: v1beta.skus.price
REST Resource: v1beta.skus.prices
Service: cloudbilling.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://cloudbilling.googleapis.com/$discovery/rest?version=v2beta
https://cloudbilling.googleapis.com/$discovery/rest?version=v1beta
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://cloudbilling.googleapis.com
REST Resource: v2beta.billingAccounts.skus.price
Methods
get
GET /v2beta/{name=billingAccounts/*/skus/*/price}
Gets the latest price for SKUs available to your Cloud Billing account .
REST Resource: v2beta.billingAccounts.skus.prices
Methods
list
GET /v2beta/{parent=billingAccounts/*/skus/*}/prices
Lists the latest prices for SKUs available to your Cloud Billing account .
REST Resource: v2beta.services
Methods
get
GET /v2beta/{name=services/*}
Gets a publicly listed Google Cloud service .
list
GET /v2beta/services
Lists all publicly listed Google Cloud services .
REST Resource: v2beta.skus
Methods
get
GET /v2beta/{name=skus/*}
Gets a publicly listed SKU .
list
GET /v2beta/skus
Lists all publicly listed SKUs .
REST Resource: v2beta.skus.price
Methods
get
GET /v2beta/{name=skus/*/price}
Gets the latest consumption model price for the given SKU .
REST Resource: v2beta.skus.prices
Methods
list
GET /v2beta/{parent=skus/*}/prices
Lists the latest consumption model prices for all SKUs .
REST Resource: v1beta.billingAccounts.services
Methods
get
GET /v1beta/{name=billingAccounts/*/services/*}
Gets a Google Cloud service visible to a billing account .
list
GET /v1beta/{parent=billingAccounts/*}/services
Lists services visible to a billing account .
REST Resource: v1beta.billingAccounts.skuGroups
Methods
get
GET /v1beta/{name=billingAccounts/*/skuGroups/*}
Gets a SKU group visible to a billing account .
list
GET /v1beta/{parent=billingAccounts/*}/skuGroups
Lists SKU groups visible to a billing account .
REST Resource: v1beta.billingAccounts.skuGroups.skus
Methods
get
GET /v1beta/{name=billingAccounts/*/skuGroups/*/skus/*}
Gets a SKU that is part of a billing account SKU group .
list
GET /v1beta/{parent=billingAccounts/*/skuGroups/*}/skus
Lists SKUs that is part of billing account SKU groups .
REST Resource: v1beta.billingAccounts.skus
Methods
get
GET /v1beta/{name=billingAccounts/*/skus/*}
Gets a SKU visible to a billing account .
list
GET /v1beta/{parent=billingAccounts/*}/skus
Lists SKUs visible to a billing account .
REST Resource: v1beta.billingAccounts.skus.price
Methods
get
GET /v1beta/{name=billingAccounts/*/skus/*/price}
Gets the latest price for SKUs available to your Cloud Billing account .
REST Resource: v1beta.billingAccounts.skus.prices
Methods
list
GET /v1beta/{parent=billingAccounts/*/skus/*}/prices
Lists the latest prices for SKUs available to your Cloud Billing account .
REST Resource: v1beta.skuGroups
Methods
get
GET /v1beta/{name=skuGroups/*}
Gets a publicly listed SKU group .
list
GET /v1beta/skuGroups
Lists all publicly listed SKU groups .
REST Resource: v1beta.skuGroups.skus
Methods
get
GET /v1beta/{name=skuGroups/*/skus/*}
Gets a publicly listed SKU that is part of a publicly listed SKU group .
list
GET /v1beta/{parent=skuGroups/*}/skus
Lists all publicly listed SKUs contained by a publicly listed SKU group .
REST Resource: v1beta.skus.price
Methods
get
GET /v1beta/{name=skus/*/price}
Gets the latest price for the given SKU .
REST Resource: v1beta.skus.prices
Methods
list
GET /v1beta/{parent=skus/*}/prices
Lists the latest prices for all SKUs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-22 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-22 UTC."],[],[]]
