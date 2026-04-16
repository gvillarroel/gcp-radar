---
title: "Rules for including VPC networks in service perimeters \_|\_ VPC Service Controls\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc-service-controls/docs/vpc-networks-rules
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/vpc-service-controls/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/vpc-service-controls/docs/vpc-networks-rules
  title: "Rules for including VPC networks in service perimeters \_|\_ VPC Service\
    \ Controls \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
VPC Service Controls
Guides
Send feedback
Rules for including VPC networks in service perimeters
Stay organized with collections
Save and categorize content based on your preferences.
This document lists the rules to add VPC networks to VPC Service Controls.
When you add VPC networks to service perimeters, the following rules apply:
If the host project is not protected by a perimeter, you can add VPC networks in the host project to separate perimeters under the same access policy.
VPC networks in the same host project must exist under the same access policy.
You can add VPC networks and their host project to the same perimeter.
VPC networks and their host project must not exist in different perimeters.
You cannot add a VPC network to multiple perimeters.
You cannot use VPC networks in a perimeter bridge.
If a VPC network's parent project is in a perimeter bridge,
you cannot add the VPC network to a perimeter.
What's next
Learn about how to create service perimeters .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
