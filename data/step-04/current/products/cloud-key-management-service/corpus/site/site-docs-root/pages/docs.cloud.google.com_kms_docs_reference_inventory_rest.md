---
title: "KMS Inventory API \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/inventory/rest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/inventory/rest
  title: "KMS Inventory API \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud KMS
Reference
Send feedback
KMS Inventory API
Stay organized with collections
Save and categorize content based on your preferences.
REST Resource: v1.organizations.protectedResources
REST Resource: v1.projects.cryptoKeys
REST Resource: v1.projects.locations.keyRings.cryptoKeys
Service: kmsinventory.googleapis.com
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://kmsinventory.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://kmsinventory.googleapis.com
REST Resource: v1.organizations.protectedResources
Methods
search
GET /v1/{scope=organizations/*}/protectedResources:search
Returns metadata about the resources protected by the given Cloud KMS CryptoKey in the given Cloud organization.
REST Resource: v1.projects.cryptoKeys
Methods
list
GET /v1/{parent=projects/*}/cryptoKeys
Returns cryptographic keys managed by Cloud KMS in a given Cloud project.
REST Resource: v1.projects.locations.keyRings.cryptoKeys
Methods
getProtectedResourcesSummary
GET /v1/{name=projects/*/locations/*/keyRings/*/cryptoKeys/**}/protectedResourcesSummary
Returns aggregate information about the resources protected by the given Cloud KMS CryptoKey .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
