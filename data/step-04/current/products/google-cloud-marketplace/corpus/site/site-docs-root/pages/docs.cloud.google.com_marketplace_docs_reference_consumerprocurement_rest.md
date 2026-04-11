---
title: "Cloud Commerce Consumer Procurement API \_|\_ Google Cloud Marketplace \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/marketplace/docs/reference/consumerprocurement/rest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/marketplace/docs
source_metadata:
  url: https://docs.cloud.google.com/marketplace/docs/reference/consumerprocurement/rest
  title: "Cloud Commerce Consumer Procurement API \_|\_ Google Cloud Marketplace \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Google Cloud Marketplace
Reference
Send feedback
Cloud Commerce Consumer Procurement API
Stay organized with collections
Save and categorize content based on your preferences.
Enables consumers to procure products served by Cloud Marketplace platform
REST Resource: v1alpha1.billingAccounts.orders
REST Resource: v1alpha1.billingAccounts.orders.licensePool
REST Resource: v1alpha1.billingAccounts.orders.operations
REST Resource: v1alpha1.billingAccounts.orders.orderAttributions.operations
REST Resource: v1.billingAccounts.orders
REST Resource: v1.billingAccounts.orders.licensePool
REST Resource: v1.billingAccounts.orders.operations
Service: cloudcommerceconsumerprocurement.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://cloudcommerceconsumerprocurement.googleapis.com/$discovery/rest?version=v1
https://cloudcommerceconsumerprocurement.googleapis.com/$discovery/rest?version=v1alpha1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://cloudcommerceconsumerprocurement.googleapis.com
REST Resource: v1alpha1.billingAccounts.orders
Methods
cancel
POST /v1alpha1/{name=billingAccounts/*/orders/*}:cancel
Cancels an existing Order .
get
GET /v1alpha1/{name=billingAccounts/*/orders/*}
Returns the requested Order resource.
getLicensePool
GET /v1alpha1/{name=billingAccounts/*/orders/*/licensePool}
Gets the license pool.
list
GET /v1alpha1/{parent=billingAccounts/*}/orders
Lists Order resources that the user has access to, within the scope of the parent resource.
modify
POST /v1alpha1/{name=billingAccounts/*/orders/*}:modify
Modifies an existing Order resource.
place
POST /v1alpha1/{parent=billingAccounts/*}/orders:place
Creates a new Order .
REST Resource: v1alpha1.billingAccounts.orders.licensePool
Methods
assign
POST /v1alpha1/{parent=billingAccounts/*/orders/*/licensePool}:assign
Assigns a license to a user.
enumerateLicensedUsers
GET /v1alpha1/{parent=billingAccounts/*/orders/*/licensePool}:enumerateLicensedUsers
Enumerates all users assigned a license.
patch
PATCH /v1alpha1/{licensePool.name=billingAccounts/*/orders/*/licensePool/*}
Updates the license pool if one exists for this Order.
unassign
POST /v1alpha1/{parent=billingAccounts/*/orders/*/licensePool}:unassign
Unassigns a license from a user.
REST Resource: v1alpha1.billingAccounts.orders.operations
Methods
get
GET /v1alpha1/{name=billingAccounts/*/orders/*/operations/*}
Gets the latest state of a long-running operation.
REST Resource: v1alpha1.billingAccounts.orders.orderAttributions.operations
Methods
get
GET /v1alpha1/{name=billingAccounts/*/orders/*/orderAttributions/*/operations/*}
Gets the latest state of a long-running operation.
REST Resource: v1.billingAccounts.orders
Methods
cancel
POST /v1/{name=billingAccounts/*/orders/*}:cancel
Cancels an existing Order .
get
GET /v1/{name=billingAccounts/*/orders/*}
Returns the requested Order resource.
getLicensePool
GET /v1/{name=billingAccounts/*/orders/*/licensePool}
Gets the license pool.
list
GET /v1/{parent=billingAccounts/*}/orders
Lists Order resources that the user has access to, within the scope of the parent resource.
modify
POST /v1/{name=billingAccounts/*/orders/*}:modify
Modifies an existing Order resource.
place
POST /v1/{parent=billingAccounts/*}/orders:place
Creates a new Order .
REST Resource: v1.billingAccounts.orders.licensePool
Methods
assign
POST /v1/{parent=billingAccounts/*/orders/*/licensePool}:assign
Assigns a license to a user.
enumerateLicensedUsers
GET /v1/{parent=billingAccounts/*/orders/*/licensePool}:enumerateLicensedUsers
Enumerates all users assigned a license.
patch
PATCH /v1/{licensePool.name=billingAccounts/*/orders/*/licensePool/*}
Updates the license pool if one exists for this Order.
unassign
POST /v1/{parent=billingAccounts/*/orders/*/licensePool}:unassign
Unassigns a license from a user.
REST Resource: v1.billingAccounts.orders.operations
Methods
get
GET /v1/{name=billingAccounts/*/orders/*/operations/*}
Gets the latest state of a long-running operation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-19 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-19 UTC."],[],[]]
