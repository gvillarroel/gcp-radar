---
title: "Delete an organization \_|\_ Resource Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/resource-manager/docs/delete-org
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/resource-manager/docs/access-control-folders
source_metadata:
  url: https://docs.cloud.google.com/resource-manager/docs/delete-org
  title: "Delete an organization \_|\_ Resource Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Resource Manager
Guides
Send feedback
Delete an organization
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to delete an organization and describes the consequences of this action.
The organization is bound to your Google Workspace (formerly G Suite)
account.
If you prefer not to use the organization, consider restoring the
organization's Identity and Access Management (IAM) allow policy to its original
state by completing the following steps:
Add your domain to the Project Creator and Billing Account Creator
roles.
Remove all other entries in the organization's allow policy.
This lets your users continue to create projects and billing accounts while
letting the Google Workspace Super Admin recover central administration if
needed.
How to delete an organization
To delete your organization and all the resources associated with
it , delete your Google Workspace account .
For Cloud Identity
users, cancel all other Google services, and then delete your user account. This
action is potentially very damaging and might be impossible to reverse
completely, so you should only take this action if you are certain no resources
are in active use.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
