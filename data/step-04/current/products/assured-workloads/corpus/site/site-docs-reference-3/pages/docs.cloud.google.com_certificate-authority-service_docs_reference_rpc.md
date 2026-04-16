---
title: "Certificate Authority API \_|\_ Certificate Authority Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/certificate-authority-service/docs/reference/rpc
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-authority-service/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/certificate-authority-service/docs/reference/rpc
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
Reference
Send feedback
Certificate Authority API
Stay organized with collections
Save and categorize content based on your preferences.
The Certificate Authority Service API is a highly-available, scalable service that enables you to simplify and automate the management of private certificate authorities (CAs) while staying in control of your private keys.
Service: privateca.googleapis.com
The Service name privateca.googleapis.com is needed to create RPC client stubs.
google.cloud.location.Locations
Methods
GetLocation
Gets information about a location.
ListLocations
Lists information about the supported locations for this service.
google.cloud.security.privateca.v1.CertificateAuthorityService
Methods
ActivateCertificateAuthority
Activate a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE .
CreateCaPool
Create a CaPool .
CreateCertificate
Create a new Certificate in a given Project, Location from a particular CaPool .
CreateCertificateAuthority
Create a new CertificateAuthority in a given Project and Location.
CreateCertificateTemplate
Create a new CertificateTemplate in a given Project and Location.
DeleteCaPool
Delete a CaPool .
DeleteCertificateAuthority
Delete a CertificateAuthority .
DeleteCertificateTemplate
DeleteCertificateTemplate deletes a CertificateTemplate .
DisableCertificateAuthority
Disable a CertificateAuthority .
EnableCertificateAuthority
Enable a CertificateAuthority .
FetchCaCerts
FetchCaCerts returns the current trust anchor for the CaPool .
FetchCertificateAuthorityCsr
Fetch a certificate signing request (CSR) from a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE .
GetCaPool
Returns a CaPool .
GetCertificate
Returns a Certificate .
GetCertificateAuthority
Returns a CertificateAuthority .
GetCertificateRevocationList
Returns a CertificateRevocationList .
GetCertificateTemplate
Returns a CertificateTemplate .
ListCaPools
Lists CaPools .
ListCertificateAuthorities
Lists CertificateAuthorities .
ListCertificateRevocationLists
Lists CertificateRevocationLists .
ListCertificateTemplates
Lists CertificateTemplates .
ListCertificates
Lists Certificates .
RevokeCertificate
Revoke a Certificate .
UndeleteCertificateAuthority
Undelete a CertificateAuthority that has been deleted.
UpdateCaPool
Update a CaPool .
UpdateCertificate
Update a Certificate .
UpdateCertificateAuthority
Update a CertificateAuthority .
UpdateCertificateRevocationList
Update a CertificateRevocationList .
UpdateCertificateTemplate
Update a CertificateTemplate .
google.iam.v1.IAMPolicy
Methods
GetIamPolicy
Gets the access control policy for a resource.
SetIamPolicy
Sets the access control policy on the specified resource.
TestIamPermissions
Returns permissions that a caller has on the specified resource.
google.longrunning.Operations
Methods
CancelOperation
Starts asynchronous cancellation on a long-running operation.
DeleteOperation
Deletes a long-running operation.
GetOperation
Gets the latest state of a long-running operation.
ListOperations
Lists operations that match the specified filter in the request.
WaitOperation
Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
