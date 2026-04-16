---
title: "Identity reflection for federated workloads \_|\_ Certificate Authority Service\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/certificate-authority-service/docs/using-identity-reflection
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-authority-service/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/certificate-authority-service/docs/using-identity-reflection
  title: "Identity reflection for federated workloads \_|\_ Certificate Authority\
    \ Service \_|\_ Google Cloud Documentation"
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
Identity reflection for federated workloads
You can use Certificate Authority Service with workload identity pools
and identity reflection to federate a third-party identity and obtain a certificate
that attests to this identity.
Identity reflection is a special certificate issuance mode that limits an
unprivileged certificate requester to requesting certificates with a subject
alternative name (SAN) corresponding to the identity in their credential. For
example, an Cloud Service Mesh
workload with a federated third-party identity token might be able to request a
certificate with a SAN corresponding to its Mesh identity, but cannot request a
certificate with any other SAN.
What's next
Learn how to reflect third-party identities
using IAM workload identity federation.
Learn more about SPIFFE .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
