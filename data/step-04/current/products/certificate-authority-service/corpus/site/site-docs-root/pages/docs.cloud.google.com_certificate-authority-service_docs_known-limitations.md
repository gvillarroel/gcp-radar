---
title: "Known limitations \_|\_ Certificate Authority Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/certificate-authority-service/docs/known-limitations
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-authority-service/docs
source_metadata:
  url: https://docs.cloud.google.com/certificate-authority-service/docs/known-limitations
  title: "Known limitations \_|\_ Certificate Authority Service \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Certificate Authority Service
Resources
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Known limitations
This page documents the known limitations of Certificate Authority Service.
Revocation support
Certificate revocation is only supported through Certificate Revocation Lists
(CRLs). Online Certificate Status Protocol (OCSP) isn't supported by CA Service, but you can implement and run a delegated OCSP responder.
For more information on implementing an OCSP responder, see OCSP support .
Client-generated keys
The Google Cloud CLI and Google Cloud console surfaces support
automatically generating an asymmetric key-pair when issuing certificates for
added convenience. Keys generated using Google Cloud CLI are limited to RSA-2048,
while keys generated using Google Cloud console support a wider selection of
algorithms.
Certificate subject
CA Service only supports the following attribute types in the subject of a certificate:
Common Name (CN)
Country Code (C)
Organization (O)
Organizational Unit (OU)
Locality (L)
Province (ST)
Street Address
Postal Code
This limitation applies to the subject field in both CA certificates and
end-entity certificates. Each of these attribute types is limited to only one
value.
For more information, see the Subject message in the REST API documentation.
What's next
Read answers to the frequently asked questions .
Learn how to troubleshoot common issues encountered in CA Service .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
