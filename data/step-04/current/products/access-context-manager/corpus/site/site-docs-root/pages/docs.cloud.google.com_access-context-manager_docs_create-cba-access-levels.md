---
title: "Create access levels for certificate-based access \_|\_ Access Context Manager\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/access-context-manager/docs/create-cba-access-levels
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/access-context-manager/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/access-context-manager/docs/create-cba-access-levels
  title: "Create access levels for certificate-based access \_|\_ Access Context Manager\
    \ \_|\_ Google Cloud Documentation"
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
Create access levels for certificate-based access
Stay organized with collections
Save and categorize content based on your preferences.
To secure your resources with certificate-based access, create an access level that requires certificates when
determining access to resources. To create access levels, see
Creating a custom access level .
The values you use when creating a custom access level can be whatever makes
sense for you, but the expression for the custom access level must be:
certificateBindingState ( origin, device ) == CertificateBindingState.CERT_MATCHES_EXISTING_DEVICE
For example, you can use the gcloud CLI to create your custom
access level by running the following command:
gcloud access-context-manager levels create LEVEL_NAME \
--title = TITLE \
--custom-level-spec = FILE \
--description = DESCRIPTION \
--policy = POLICY_NAME
The content of the .yaml file referenced by FILE is the
following custom expression:
expression: "certificateBindingState(origin, device) == CertificateBindingState.CERT_MATCHES_EXISTING_DEVICE"
What's next
Enable CBA with VPC Service Controls
Enable CBA with user groups
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
