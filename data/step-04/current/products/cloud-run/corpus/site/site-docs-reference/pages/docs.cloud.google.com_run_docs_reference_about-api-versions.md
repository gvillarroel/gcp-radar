---
title: "About Cloud Run Admin API versions \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/run/docs/reference/about-api-versions
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/run/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/run/docs/reference/about-api-versions
  title: "About Cloud Run Admin API versions \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Cloud Run
Reference
Send feedback
About Cloud Run Admin API versions
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Run provides two Cloud Run Admin API versions: v1 and v2. Each version is generally available (GA)
and serves a different use case, so v2 does not obsolete v1. To determine which API version works best for you, refer to the following table:
Characteristic
v1
v2
Release level
Generally available (GA)
Generally available (GA)
Resources covered
Service, Job, Worker pool, DomainMapping
Service, Job, Worker pool
API style
Similar to Kubernetes Resource Model
Similar to Google Cloud APIs
Who should use v1?
You should only use v1 if you need Knative or Kubernetes compatibility.
The Service resource of the Cloud Run Admin API v1 is compatible with
the Knative Serving API.
The v1 Admin API is used when deploying from a YAML file .
Who should use v2?
All other usages should use v2, in particular, anyone making API calls. The
Cloud Client Libraries ,
which are the client libraries recommended by Google, use v2.
What's next
Learn about available client library options .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
