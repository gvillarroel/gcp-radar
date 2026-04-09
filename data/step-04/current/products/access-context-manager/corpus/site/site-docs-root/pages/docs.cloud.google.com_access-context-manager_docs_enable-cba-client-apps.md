---
title: "Enable certificate-based access in client applications \_|\_ Access Context\
  \ Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/access-context-manager/docs/enable-cba-client-apps
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/access-context-manager/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/access-context-manager/docs/enable-cba-client-apps
  title: "Enable certificate-based access in client applications \_|\_ Access Context\
    \ Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Access Context Manager
Guides
Send feedback
Enable certificate-based access in client applications
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to enable certificate-based access (CBA) in your client
applications for calling the Google APIs using compatible
libraries or tools.
To enable CBA and allow the Google APIs to identify a device, the caller client
must establish mTLS connections with the Google APIs, and then discover
the TLS certificates on the device. This process is illustrated in the following
diagram:
CBA compatible clients
You can use CBA with the following clients:
Google Cloud console (Chrome)
Google Cloud CLI Version 264.0.0 or later
Terraform CLI Version 1.3.6 or later
Google API Client Libraries
Python
Golang
Enable CBA for the gcloud CLI
Have your users
install or update the
gcloud CLI to ensure they have a version that works with CBA, Version
264.0.0 or later.
Users who have the Google Cloud CLI installed can confirm they have Version
264.0.0 or later using the following command:
gcloud --version
If needed, users can update their Google Cloud CLI version using the following
command:
gcloud components
To begin using CBA, users must run the following command:
gcloud config set context_aware/use_client_certificate true
Enable CBA for the Terraform CLI and Google API Client Libraries
To enable CBA for the Terraform CLI and Google API Client Libraries,
users must set the following environment variable:
export GOOGLE_API_USE_CLIENT_CERTIFICATE = 1
Enable CBA for IAP Desktop
To enable certificate-based access in IAP Desktop, do the following:
In the application, select Tools > Options .
Select Secure connections to Google Cloud by using certificate-based access .
Click OK .
Close IAP Desktop and launch it again.
If you're using Active Directory, you can also configure a group policy object
to automatically enable certificate-based access for your users.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
