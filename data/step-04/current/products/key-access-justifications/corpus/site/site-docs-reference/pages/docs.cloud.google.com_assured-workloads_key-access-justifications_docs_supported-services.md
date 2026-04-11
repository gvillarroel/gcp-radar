---
title: "Supported services \_|\_ Key Access Justifications \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/key-access-justifications/docs/supported-services
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/key-access-justifications/docs/justification-codes
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/key-access-justifications/docs/supported-services
  title: "Supported services \_|\_ Key Access Justifications \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Assured Workloads
Cloud provider access management
Key Access Justifications
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Supported services
Key Access Justifications supports all services supported by Assured Workloads for
EU Data Boundary with Access Justifications .
In addition, Key Access Justifications supports the following Google Cloud products:
Service Status
AlloyDB for PostgreSQL
GA
Backup for GKE
GA
Firestore
GA
Vertex AI Workbench
GA
If Key Access Justifications is in Preview for a service, Google recommends that you don't
use Key Access Justifications in production for that service. You should use Key Access Justifications for
a service in production only if Key Access Justifications for that service is in
General Availability (GA). This includes transitive usage of unintegrated or
Preview services that don't themselves store data encrypted using customer keys,
because all services involved in servicing a request must have a GA Key Access Justifications
integration status for Google to reliably generate justifications.
If you are unable to avoid using a service for which Key Access Justifications isn't in GA in
your workloads that depend on Key Access Justifications, then you must also allow
REASON_NOT_EXPECTED , REASON_UNSPECIFIED , and
CUSTOMER_AUTHORIZED_WORKFLOW_SERVICING justifications in your Key Access Justifications
policies or risk outages.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
