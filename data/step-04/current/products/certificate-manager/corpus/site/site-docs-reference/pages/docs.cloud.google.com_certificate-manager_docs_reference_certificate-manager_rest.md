---
title: "Certificate Manager API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/certificate-manager/docs/reference/certificate-manager/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-manager/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/certificate-manager/docs/reference/certificate-manager/rest
  title: "Certificate Manager API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Certificate Manager
Reference
Send feedback
Certificate Manager API
Stay organized with collections
Save and categorize content based on your preferences.
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.certificateIssuanceConfigs
REST Resource: v1.projects.locations.certificateMaps
REST Resource: v1.projects.locations.certificateMaps.certificateMapEntries
REST Resource: v1.projects.locations.certificates
REST Resource: v1.projects.locations.dnsAuthorizations
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.trustConfigs
Service: certificatemanager.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://certificatemanager.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://certificatemanager.googleapis.com
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.certificateIssuanceConfigs
Methods
create
POST /v1/{parent=projects/*/locations/*}/certificateIssuanceConfigs
Creates a new CertificateIssuanceConfig in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/certificateIssuanceConfigs/*}
Deletes a single CertificateIssuanceConfig.
get
GET /v1/{name=projects/*/locations/*/certificateIssuanceConfigs/*}
Gets details of a single CertificateIssuanceConfig.
list
GET /v1/{parent=projects/*/locations/*}/certificateIssuanceConfigs
Lists CertificateIssuanceConfigs in a given project and location.
patch
PATCH /v1/{certificateIssuanceConfig.name=projects/*/locations/*/certificateIssuanceConfigs/*}
Updates a CertificateIssuanceConfig.
REST Resource: v1.projects.locations.certificateMaps
Methods
create
POST /v1/{parent=projects/*/locations/*}/certificateMaps
Creates a new CertificateMap in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/certificateMaps/*}
Deletes a single CertificateMap.
get
GET /v1/{name=projects/*/locations/*/certificateMaps/*}
Gets details of a single CertificateMap.
list
GET /v1/{parent=projects/*/locations/*}/certificateMaps
Lists CertificateMaps in a given project and location.
patch
PATCH /v1/{certificateMap.name=projects/*/locations/*/certificateMaps/*}
Updates a CertificateMap.
REST Resource: v1.projects.locations.certificateMaps.certificateMapEntries
Methods
create
POST /v1/{parent=projects/*/locations/*/certificateMaps/*}/certificateMapEntries
Creates a new CertificateMapEntry in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/certificateMaps/*/certificateMapEntries/*}
Deletes a single CertificateMapEntry.
get
GET /v1/{name=projects/*/locations/*/certificateMaps/*/certificateMapEntries/*}
Gets details of a single CertificateMapEntry.
list
GET /v1/{parent=projects/*/locations/*/certificateMaps/*}/certificateMapEntries
Lists CertificateMapEntries in a given project and location.
patch
PATCH /v1/{certificateMapEntry.name=projects/*/locations/*/certificateMaps/*/certificateMapEntries/*}
Updates a CertificateMapEntry.
REST Resource: v1.projects.locations.certificates
Methods
create
POST /v1/{parent=projects/*/locations/*}/certificates
Creates a new Certificate in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/certificates/*}
Deletes a single Certificate.
get
GET /v1/{name=projects/*/locations/*/certificates/*}
Gets details of a single Certificate.
list
GET /v1/{parent=projects/*/locations/*}/certificates
Lists Certificates in a given project and location.
patch
PATCH /v1/{certificate.name=projects/*/locations/*/certificates/*}
Updates a Certificate.
REST Resource: v1.projects.locations.dnsAuthorizations
Methods
create
POST /v1/{parent=projects/*/locations/*}/dnsAuthorizations
Creates a new DnsAuthorization in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/dnsAuthorizations/*}
Deletes a single DnsAuthorization.
get
GET /v1/{name=projects/*/locations/*/dnsAuthorizations/*}
Gets details of a single DnsAuthorization.
list
GET /v1/{parent=projects/*/locations/*}/dnsAuthorizations
Lists DnsAuthorizations in a given project and location.
patch
PATCH /v1/{dnsAuthorization.name=projects/*/locations/*/dnsAuthorizations/*}
Updates a DnsAuthorization.
REST Resource: v1.projects.locations.operations
Methods
cancel
POST /v1/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1.projects.locations.trustConfigs
Methods
create
POST /v1/{parent=projects/*/locations/*}/trustConfigs
Creates a new TrustConfig in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/trustConfigs/*}
Deletes a single TrustConfig.
get
GET /v1/{name=projects/*/locations/*/trustConfigs/*}
Gets details of a single TrustConfig.
list
GET /v1/{parent=projects/*/locations/*}/trustConfigs
Lists TrustConfigs in a given project and location.
patch
PATCH /v1/{trustConfig.name=projects/*/locations/*/trustConfigs/*}
Updates a TrustConfig.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-17 UTC."],[],[]]
