---
title: "Help prevent cross-organization license usage \_|\_ Gemini for Google Cloud\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/docs/codeassist/cross-org-license-usage
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/docs/codeassist/overview
source_metadata:
  url: https://docs.cloud.google.com/gemini/docs/codeassist/cross-org-license-usage
  title: "Help prevent cross-organization license usage \_|\_ Gemini for Google Cloud\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Gemini for Google Cloud
Guides
Send feedback
Help prevent cross-organization license usage
Stay organized with collections
Save and categorize content based on your preferences.
This document describes methods to help prevent usage of
Gemini Code Assist licenses across an organization, and scenarios
where you might want to limit that usage.
By design, Gemini Code Assist licenses are assigned to individual
users, not organizations or projects. This design lets individual users use
Gemini Code Assist across multiple organizations.
However, some large organizations, such as global system integrators (GSIs),
might want to
prevent cross-organization usage .
For example:
Developers working on projects that have different billing accounts. For
instance, you might let a developer work on one project but limit access to
other projects because they have different billing accounts, even if they are
in the same organization.
Developers working on multiple projects from different customers. For
instance, a developer might work on projects for delivery organizations that
have different tenancies and tools.
Methods to help prevent cross-organization usage
To help prevent cross-organization usage of Gemini Code Assist in
a project, you can do one of the following:
Disable the Gemini for Google Cloud API on a project .
Use Identity and Access Management (IAM) denial policies to
deny user access to the project.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
