---
title: "Certificate Authority API \_|\_ Certificate Authority Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/certificate-authority-service/docs/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-authority-service/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/certificate-authority-service/docs/reference/rest
  title: "Certificate Authority API \_|\_ Certificate Authority Service \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Certificate Authority Service
Send feedback
Certificate Authority API
Stay organized with collections
Save and categorize content based on your preferences.
The Certificate Authority Service API is a highly-available, scalable service that enables you to simplify and automate the management of private certificate authorities (CAs) while staying in control of your private keys.
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.caPools
REST Resource: v1.projects.locations.caPools.certificateAuthorities
REST Resource:
v1.projects.locations.caPools.certificateAuthorities.certificateRevocationLists
REST Resource: v1.projects.locations.caPools.certificates
REST Resource: v1.projects.locations.certificateTemplates
REST Resource: v1.projects.locations.operations
Service: privateca.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://privateca.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://privateca.googleapis.com
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.caPools
Methods
create
POST /v1/{parent=projects/*/locations/*}/caPools
Create a CaPool .
delete
DELETE /v1/{name=projects/*/locations/*/caPools/*}
Delete a CaPool .
fetchCaCerts
POST /v1/{caPool=projects/*/locations/*/caPools/*}:fetchCaCerts
FetchCaCerts returns the current trust anchor for the CaPool .
get
GET /v1/{name=projects/*/locations/*/caPools/*}
Returns a CaPool .
getIamPolicy
GET /v1/{resource=projects/*/locations/*/caPools/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*}/caPools
Lists CaPools .
patch
PATCH /v1/{caPool.name=projects/*/locations/*/caPools/*}
Update a CaPool .
setIamPolicy
POST /v1/{resource=projects/*/locations/*/caPools/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/caPools/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.caPools.certificateAuthorities
Methods
activate
POST /v1/{name=projects/*/locations/*/caPools/*/certificateAuthorities/*}:activate
Activate a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE .
create
POST /v1/{parent=projects/*/locations/*/caPools/*}/certificateAuthorities
Create a new CertificateAuthority in a given Project and Location.
delete
DELETE /v1/{name=projects/*/locations/*/caPools/*/certificateAuthorities/*}
Delete a CertificateAuthority .
disable
POST /v1/{name=projects/*/locations/*/caPools/*/certificateAuthorities/*}:disable
Disable a CertificateAuthority .
enable
POST /v1/{name=projects/*/locations/*/caPools/*/certificateAuthorities/*}:enable
Enable a CertificateAuthority .
fetch
GET /v1/{name=projects/*/locations/*/caPools/*/certificateAuthorities/*}:fetch
Fetch a certificate signing request (CSR) from a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE .
get
GET /v1/{name=projects/*/locations/*/caPools/*/certificateAuthorities/*}
Returns a CertificateAuthority .
list
GET /v1/{parent=projects/*/locations/*/caPools/*}/certificateAuthorities
Lists CertificateAuthorities .
patch
PATCH /v1/{certificateAuthority.name=projects/*/locations/*/caPools/*/certificateAuthorities/*}
Update a CertificateAuthority .
undelete
POST /v1/{name=projects/*/locations/*/caPools/*/certificateAuthorities/*}:undelete
Undelete a CertificateAuthority that has been deleted.
REST Resource: v1.projects.locations.caPools.certificateAuthorities.certificateRevocationLists
Methods
get
GET /v1/{name=projects/*/locations/*/caPools/*/certificateAuthorities/*/certificateRevocationLists/*}
Returns a CertificateRevocationList .
getIamPolicy
GET /v1/{resource=projects/*/locations/*/caPools/*/certificateAuthorities/*/certificateRevocationLists/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*/caPools/*/certificateAuthorities/*}/certificateRevocationLists
Lists CertificateRevocationLists .
patch
PATCH /v1/{certificateRevocationList.name=projects/*/locations/*/caPools/*/certificateAuthorities/*/certificateRevocationLists/*}
Update a CertificateRevocationList .
setIamPolicy
POST /v1/{resource=projects/*/locations/*/caPools/*/certificateAuthorities/*/certificateRevocationLists/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/caPools/*/certificateAuthorities/*/certificateRevocationLists/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.caPools.certificates
Methods
create
POST /v1/{parent=projects/*/locations/*/caPools/*}/certificates
Create a new Certificate in a given Project, Location from a particular CaPool .
get
GET /v1/{name=projects/*/locations/*/caPools/*/certificates/*}
Returns a Certificate .
list
GET /v1/{parent=projects/*/locations/*/caPools/*}/certificates
Lists Certificates .
patch
PATCH /v1/{certificate.name=projects/*/locations/*/caPools/*/certificates/*}
Update a Certificate .
revoke
POST /v1/{name=projects/*/locations/*/caPools/*/certificates/*}:revoke
Revoke a Certificate .
REST Resource: v1.projects.locations.certificateTemplates
Methods
create
POST /v1/{parent=projects/*/locations/*}/certificateTemplates
Create a new CertificateTemplate in a given Project and Location.
delete
DELETE /v1/{name=projects/*/locations/*/certificateTemplates/*}
DeleteCertificateTemplate deletes a CertificateTemplate .
get
GET /v1/{name=projects/*/locations/*/certificateTemplates/*}
Returns a CertificateTemplate .
getIamPolicy
GET /v1/{resource=projects/*/locations/*/certificateTemplates/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*}/certificateTemplates
Lists CertificateTemplates .
patch
PATCH /v1/{certificateTemplate.name=projects/*/locations/*/certificateTemplates/*}
Update a CertificateTemplate .
setIamPolicy
POST /v1/{resource=projects/*/locations/*/certificateTemplates/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/certificateTemplates/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
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
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
