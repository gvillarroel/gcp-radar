---
title: "Enabling Access Transparency \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/access-transparency/docs/enable
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/access-transparency/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/access-transparency/docs/enable
  title: "Enabling Access Transparency \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud provider access management
Access Transparency
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Enabling Access Transparency
Requirements for enabling Access Transparency
Access Transparency is a default security control for every Google Cloud organization.
Configuring Access Transparency using the Google Cloud console
To verify that Access Transparency is enabled for audit purposes:
Confirm the enablement checkbox is selected on the Compliance Folder creation page in the Google Cloud console.
or
Check your organization-level permissions:
Go to the Identity and Access Management page on the
Google Cloud console.
Verify that you have the IAM role
Access Transparency Admin ( roles/axt.admin ) listed in the Role
column for your Principal listing under the organization.
Note: If you don't have this role granted to you, then contact an
Organization Adminstrator before you proceed to the next step. An
Organization Administrator can also create a custom IAM
role for you that contains the axt.labels.get and axt.labels.set
permissions. To learn more about granting these permissions, see the
IAM documentation on
custom roles .
Select any Google Cloud organization or project within the organization using the
selector menu.
Go to the IAM > Settings page.
Verify that Access Transparency is enabled.
What's next
For information about the pricing of Access Transparency, see
Pricing .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
