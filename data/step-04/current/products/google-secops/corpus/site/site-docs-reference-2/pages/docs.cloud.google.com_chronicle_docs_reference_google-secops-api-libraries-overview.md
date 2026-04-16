---
title: "Google SecOps APIs and libraries overview \_|\_ Google Security Operations\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/chronicle/docs/reference/google-secops-api-libraries-overview
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/reference/google-secops-api-libraries-overview
  title: "Google SecOps APIs and libraries overview \_|\_ Google Security Operations\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Google Security Operations
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Google SecOps APIs and libraries overview
Supported in:
Google secops
SIEM
This page provides an overview of the APIs available for Google Security Operations.
While you can use the APIs directly by making raw requests to the server, client
libraries let you code in your preferred language and provide simplifications that
significantly reduce the amount of code you need to write. For a more general
overview of client libraries within Google Cloud, see
Client libraries explained .
To use the APIs, you must authenticate your client's identity. You can learn more
about per API authentication in the respective API documentation.
Chronicle API
The Chronicle API is the new-generation, unified API for Google SecOps.
You can use it to programmatically manage the product suite, including
UDM search, detection rules, and incident response workflows. Built on Google's
API Improvement Proposals (AIP) standards, it provides a consistent,
resource-oriented design that simplifies integration and accelerates development
with idiomatic client libraries. This modern foundation empowers security teams
to build robust automation and extend their capabilities using a single, cohesive
standard across the platform.
For more information about this API and its usage, see
Chronicle API .
Backstory API
The Backstory API is the previous-generation API for Google SecOps SOAR
workflows. It includes the Feed Management, Detection Engine, Search, Forwarder
Management, Data Export and Customer Management APIs. You can authenticate to
this API through a Google Developer Service Account Credential. Your Google SecOps
representative provides the service account and the credentials (JSON key) to let
the API client communicate with the API.
Google SecOps recommends using the newer generation Chronicle API
for a more robust, secure, and extensible experience.
For more information about this API and its usage, see
Backstory API .
Ingestion API
The Ingestion API provides a high-volume interface designed for sending unstructured
logs and telemetry data to Google SecOps. You can authenticate to
this API through a Google Developer Service Account Credential. Your
Google SecOps representative provides the service account and the
credentials (JSON key) to let the API client communicate with the API.
Google SecOps recommends using the newer generation Chronicle API
because it improves and expands on the functionality offered by Ingestion API.
For more information about this API and its usage, see
Ingestion API .
SOAR API
The SOAR API is a legacy API originally designed for SOAR modules in
Google SecOps.
Google SecOps recommends using the unified Chronicle API for the
modern platform, case management and response workflows that provide a secure,
compliant and extensible experience. Chronicle API also enables various services,
including IAM for access control, Cloud Monitoring, and Cloud Audit Logs.
For more information about this API, see
SOAR API . You can
switch to Chronicle API as part of stage 2 of
SOAR migration to Google Cloud .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
