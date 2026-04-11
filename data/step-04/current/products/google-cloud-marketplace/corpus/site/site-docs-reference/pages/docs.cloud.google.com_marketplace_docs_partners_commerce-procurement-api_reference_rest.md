---
title: "Cloud Commerce Partner Procurement API \_|\_ Google Cloud Marketplace Partners\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest
  title: "Cloud Commerce Partner Procurement API \_|\_ Google Cloud Marketplace Partners\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Google Cloud Marketplace
Partners
APIs and Reference
Send feedback
Cloud Commerce Partner Procurement API
Stay organized with collections
Save and categorize content based on your preferences.
Partner API for the Cloud Commerce Procurement Service.
REST Resource: v1.providers.accounts
REST Resource: v1.providers.entitlements
Service: cloudcommerceprocurement.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://cloudcommerceprocurement.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://cloudcommerceprocurement.googleapis.com
REST Resource: v1.providers.accounts
Methods
approve
POST /v1/{name=providers/*/accounts/*}:approve
Grants an approval on an Account .
get
GET /v1/{name=providers/*/accounts/*}
Gets a requested Account resource.
list
GET /v1/{parent=providers/*}/accounts
Lists Account s that the provider has access to.
reject
POST /v1/{name=providers/*/accounts/*}:reject
Rejects an approval on an Account .
reset
POST /v1/{name=providers/*/accounts/*}:reset
Resets an Account and cancels all associated Entitlement s.
REST Resource: v1.providers.entitlements
Methods
approve
POST /v1/{name=providers/*/entitlements/*}:approve
Approves an entitlement that is in the EntitlementState.ENTITLEMENT_ACTIVATION_REQUESTED state.
approvePlanChange
POST /v1/{name=providers/*/entitlements/*}:approvePlanChange
Approves an entitlement plan change that is in the EntitlementState.ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL state.
get
GET /v1/{name=providers/*/entitlements/*}
Gets a requested Entitlement resource.
list
GET /v1/{parent=providers/*}/entitlements
Lists Entitlement s for which the provider has read access.
patch
PATCH /v1/{name=providers/*/entitlements/*}
Updates an existing Entitlement .
reject
POST /v1/{name=providers/*/entitlements/*}:reject
Rejects an entitlement that is in the EntitlementState.ENTITLEMENT_ACTIVATION_REQUESTED state.
rejectPlanChange
POST /v1/{name=providers/*/entitlements/*}:rejectPlanChange
Rejects an entitlement plan change that is in the EntitlementState.ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL state.
suspend
POST /v1/{name=providers/*/entitlements/*}:suspend
Requests suspension of an active Entitlement .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-19 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-19 UTC."],[],[]]
