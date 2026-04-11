---
title: "Package certificate_manager (1.12.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager
  title: "Package certificate_manager (1.12.0) \_|\_ Python client libraries \_|\_\
    \ Google Cloud Documentation"
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
Package certificate_manager (1.12.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
1.12.0 (latest)
1.11.0
1.10.2
1.9.0
1.8.1
1.7.2
1.6.3
1.5.0
1.4.3
1.3.1
1.2.0
1.1.1
1.0.1
0.2.1
0.1.3
API documentation for certificate_manager_v1.services.certificate_manager package.
Classes
CertificateManagerAsyncClient
API Overview
Certificates Manager API allows customers to see and manage all
their TLS certificates.
Certificates Manager API service provides methods to manage
certificates, group them into collections, and create serving
configuration that can be easily applied to other Cloud resources
e.g. Target Proxies.
Data Model
The Certificates Manager service exposes the following resources:
Certificate that describes a single TLS certificate.
CertificateMap that describes a collection of certificates
that can be attached to a target resource.
CertificateMapEntry that describes a single configuration
entry that consists of a SNI and a group of certificates. It's a
subresource of CertificateMap.
Certificate, CertificateMap and CertificateMapEntry IDs have to
fully match the regexp [a-z0-9-]{1,63} . In other words,
only lower case letters, digits, and hyphen are allowed
length of the resource ID has to be in [1,63] range.
Provides methods to manage Cloud Certificate Manager entities.
CertificateManagerClient
API Overview
Certificates Manager API allows customers to see and manage all
their TLS certificates.
Certificates Manager API service provides methods to manage
certificates, group them into collections, and create serving
configuration that can be easily applied to other Cloud resources
e.g. Target Proxies.
Data Model
The Certificates Manager service exposes the following resources:
Certificate that describes a single TLS certificate.
CertificateMap that describes a collection of certificates
that can be attached to a target resource.
CertificateMapEntry that describes a single configuration
entry that consists of a SNI and a group of certificates. It's a
subresource of CertificateMap.
Certificate, CertificateMap and CertificateMapEntry IDs have to
fully match the regexp [a-z0-9-]{1,63} . In other words,
only lower case letters, digits, and hyphen are allowed
length of the resource ID has to be in [1,63] range.
Provides methods to manage Cloud Certificate Manager entities.
Modules
pagers
API documentation for certificate_manager_v1.services.certificate_manager.pagers module.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
