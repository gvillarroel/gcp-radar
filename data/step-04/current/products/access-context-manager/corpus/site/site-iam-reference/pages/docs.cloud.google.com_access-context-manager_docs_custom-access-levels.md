---
title: "Custom access levels \_|\_ Access Context Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/access-context-manager/docs/custom-access-levels
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/access-context-manager/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/access-context-manager/docs/custom-access-levels
  title: "Custom access levels \_|\_ Access Context Manager \_|\_ Google Cloud Documentation"
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
Custom access levels
Stay organized with collections
Save and categorize content based on your preferences.
Using Access Context Manager, you can create access levels that permit access
to data based on the context of a request. While Access Context Manager
already provides a method of creating
basic access levels , you can also create custom
access levels. Custom access levels enable your organization to use the device
and context data of third-party security and endpoint management vendors to
permit access to Google Cloud resources.
Custom access levels use boolean expressions written in a subset of
Common Expression Language (CEL)
to test the attributes of a client making a request.
In the Google Cloud console, custom access levels are configured using
Advanced Mode when you create an access level.
To learn more about building CEL expressions for custom access levels, see the
custom access level specification .
To start using custom access levels, see
Creating custom access levels .
After custom access levels are created, they can be
managed like other access levels .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
