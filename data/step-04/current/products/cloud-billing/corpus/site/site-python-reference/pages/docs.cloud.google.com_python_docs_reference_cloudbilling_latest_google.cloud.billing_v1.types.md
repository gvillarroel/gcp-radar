---
title: "Package types (1.18.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.types
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.types
  title: "Package types (1.18.0) \_|\_ Python client libraries \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Package types (1.18.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
1.18.0 (latest)
1.17.0
1.16.3
1.15.0
1.14.1
1.13.6
1.12.1
1.11.5
1.10.1
1.9.1
1.8.0
1.7.3
1.6.1
1.5.1
1.4.1
1.3.4
1.2.1
1.1.1
1.0.0
0.1.0
API documentation for billing_v1.types package.
Classes
AggregationInfo
Represents the aggregation level and interval for pricing of
a single SKU.
BillingAccount
A billing account in the Google Cloud
Console <https://console.cloud.google.com/> __. You can assign a
billing account to one or more projects.
Category
Represents the category hierarchy of a SKU.
CreateBillingAccountRequest
Request message for CreateBillingAccount .
GeoTaxonomy
Encapsulates the geographic taxonomy data for a sku.
GetBillingAccountRequest
Request message for GetBillingAccount .
GetProjectBillingInfoRequest
Request message for GetProjectBillingInfo .
ListBillingAccountsRequest
Request message for ListBillingAccounts .
ListBillingAccountsResponse
Response message for ListBillingAccounts .
ListProjectBillingInfoRequest
Request message for ListProjectBillingInfo .
ListProjectBillingInfoResponse
Request message for ListProjectBillingInfoResponse .
ListServicesRequest
Request message for ListServices .
ListServicesResponse
Response message for ListServices .
ListSkusRequest
Request message for ListSkus .
ListSkusResponse
Response message for ListSkus .
MoveBillingAccountRequest
Request message for MoveBillingAccount RPC.
PricingExpression
Expresses a mathematical pricing formula. For Example:-
usage_unit: GBy tiered_rates:
[start_usage_amount: 20, unit_price: $10]
[start_usage_amount: 100, unit_price: $5]
The above expresses a pricing formula where the first 20GB is free,
the next 80GB is priced at $10 per GB followed by $5 per GB for
additional usage.
PricingInfo
Represents the pricing information for a SKU at a single
point of time.
ProjectBillingInfo
Encapsulation of billing information for a Google Cloud
Console project. A project has at most one associated billing
account at a time (but a billing account can be assigned to
multiple projects).
Service
Encapsulates a single service in Google Cloud Platform.
Sku
Encapsulates a single SKU in Google Cloud
UpdateBillingAccountRequest
Request message for UpdateBillingAccount .
UpdateProjectBillingInfoRequest
Request message for UpdateProjectBillingInfo .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
