---
title: "Integration with third-party tools \_|\_ Certificate Authority Service \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/certificate-authority-service/docs/cas-integrations-third-party
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-authority-service/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/certificate-authority-service/docs/cas-integrations-third-party
  title: "Integration with third-party tools \_|\_ Certificate Authority Service \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Certificate Authority Service
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Integration with third-party tools
This page contains a sample provided for demonstration purposes. Google does
not officially support this sample. Carefully evaluate any solution before
deploying it in your production environment.
This document provides an overview of the third-party tools that have an
integration with Certificate Authority Service.
Hashicorp Vault
Hashicorp Vault lets you
manage and store secrets on-premises. You can configure Hashicorp Vault CA to
act as a proxy that forwards all certificate issuance requests to Certificate Authority Service.
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
Cert-Manager
Jetstack Cert-Manager is an open source Kubernetes
add-on that automates the management and issuance of TLS certificates from various
issuing sources.
Cert-Manager manages the lifecycle of certificates issued by CA pools that are
created using Certificate Manager. Cert-Manager ensures certificates are
valid and duly renewed before they expire.
For instructions on using Cert-Manager with Certificate Manager, see
README: Certificate Authority Service Issuer for
Cert-Manager .
Note: CA Service has a built-in integration with Google Cloud's
Certificate Manager for global load balancers.
For more information, see Use CA Service with Certificate Manager .
What's next
Prepare your environment for Certificate Authority Service .
Get started with CA Service .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
