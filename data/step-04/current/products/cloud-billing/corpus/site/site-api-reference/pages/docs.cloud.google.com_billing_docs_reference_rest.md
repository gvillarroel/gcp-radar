---
title: "Cloud Billing API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/billing/docs/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/billing/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/billing/docs/reference/rest
  title: "Cloud Billing API \_|\_ Google Cloud Documentation"
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
Cloud Billing API
Stay organized with collections
Save and categorize content based on your preferences.
Allows developers to manage billing for their Google Cloud Platform projects programmatically.
REST Resource: v1.billingAccounts
REST Resource: v1.billingAccounts.projects
REST Resource: v1.billingAccounts.subAccounts
REST Resource: v1.organizations.billingAccounts
REST Resource: v1.projects
REST Resource: v1.services
REST Resource: v1.services.skus
Service: cloudbilling.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://cloudbilling.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://cloudbilling.googleapis.com
REST Resource: v1.billingAccounts
Methods
create
POST /v1/billingAccounts
This method creates billing subaccounts .
get
GET /v1/{name=billingAccounts/*}
Gets information about a billing account.
getIamPolicy
GET /v1/{resource=billingAccounts/*}:getIamPolicy
Gets the access control policy for a billing account.
list
GET /v1/billingAccounts
Lists the billing accounts that the current authenticated user has permission to view .
move
POST /v1/{name=billingAccounts/*}:move
Changes which parent organization a billing account belongs to.
patch
PATCH /v1/{name=billingAccounts/*}
Updates a billing account's fields.
setIamPolicy
POST /v1/{resource=billingAccounts/*}:setIamPolicy
Sets the access control policy for a billing account.
testIamPermissions
POST /v1/{resource=billingAccounts/*}:testIamPermissions
Tests the access control policy for a billing account.
REST Resource: v1.billingAccounts.projects
Methods
list
GET /v1/{name=billingAccounts/*}/projects
Lists the projects associated with a billing account.
REST Resource: v1.billingAccounts.subAccounts
Methods
create
POST /v1/{parent=billingAccounts/*}/subAccounts
This method creates billing subaccounts .
list
GET /v1/{parent=billingAccounts/*}/subAccounts
Lists the billing accounts that the current authenticated user has permission to view .
REST Resource: v1.organizations.billingAccounts
Methods
create
POST /v1/{parent=organizations/*}/billingAccounts
This method creates billing subaccounts .
list
GET /v1/{parent=organizations/*}/billingAccounts
Lists the billing accounts that the current authenticated user has permission to view .
move
GET /v1/{destinationParent=organizations/*}/{name=billingAccounts/*}:move
Changes which parent organization a billing account belongs to.
REST Resource: v1.projects
Methods
getBillingInfo
GET /v1/{name=projects/*}/billingInfo
Gets the billing information for a project.
updateBillingInfo
PUT /v1/{name=projects/*}/billingInfo
Sets or updates the billing account associated with a project.
REST Resource: v1.services
Methods
list
GET /v1/services
Lists all public cloud services.
REST Resource: v1.services.skus
Methods
list
GET /v1/{parent=services/*}/skus
Lists all publicly available SKUs for a given cloud service.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-04 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-04 UTC."],[],[]]
