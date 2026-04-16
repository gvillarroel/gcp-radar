---
title: "Use Hashicorp Vault CA with CA Service \_|\_ Certificate Authority Service\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/certificate-authority-service/docs/hashicorp-integration
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-authority-service/docs
source_metadata:
  url: https://docs.cloud.google.com/certificate-authority-service/docs/hashicorp-integration
  title: "Use Hashicorp Vault CA with CA Service \_|\_ Certificate Authority Service\
    \ \_|\_ Google Cloud Documentation"
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
Stay organized with collections
Save and categorize content based on your preferences.
Use Hashicorp Vault CA with CA Service
This page contains a sample provided for demonstration purposes. Google does
not officially support this sample. Carefully evaluate any solution before
deploying it in your production environment.
Hashicorp Vault lets you
manage and store secrets on-premises. This page provides information about
how you can configure Hashicorp Vault CA to act as a proxy that forwards all
certificate issuance requests to Certificate Authority Service. This configuration allows a
currently deployed solution to work natively with CA Service.
The Vault plugin for CA Service
issues certificates through Hashicorp Vault by generating the private key and
certificate signing request (CSR), or by receiving a user-provided CSR. The
plugin doesn't perform create and delete CA operations, or manage other aspects
of the certificate authority (CA) lifecycle.
At a high level, the plugin acts as a proxy to issue certificates.
Note: The Vault plugin doesn't retain any public or private key that is generated
during certificate issuance. The certificate requester should retain the
certificate and keys that the Vault plugin generates.
Using the Vault plugin has the following advantages:
Administrators can use a familiar workflow and the existing access-control
list (ACL) permissions in the Vault.
The administrator can define who gets to request certificates and what
specifications and limits those certificates have.
For more information about setting up and using the plugin, see the README:
Vault Plugin for CA Service .
What's next
GitHub: Vault Plugin for CA Service
Hashicorp Vault documentation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
