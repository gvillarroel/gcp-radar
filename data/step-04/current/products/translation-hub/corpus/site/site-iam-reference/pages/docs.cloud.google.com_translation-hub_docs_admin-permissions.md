---
title: "Admin permissions \_|\_ Translation Hub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/translation-hub/docs/admin-permissions
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/translation-hub/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/translation-hub/docs/admin-permissions
  title: "Admin permissions \_|\_ Translation Hub \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Translation Hub
Guides
Send feedback
Admin permissions
Stay organized with collections
Save and categorize content based on your preferences.
Starting on June 30, 2025, Translation Hub is officially
deprecated and will no longer be supported. You can continue using
Translation Hub until September 20, 2026, when it will be shut down.
As a Google Cloud administrator, you can act as a Translation Hub
administrator. If you want to scope permissions to only Translation Hub
tasks for you or other users, you can use Identity and Access Management (IAM)
roles. A role is a collection of IAM permissions that allow you
to perform specific actions on Google Cloud resources. To set
Translation Hub administrator privileges, use the following predefined
roles:
Translation Hub Admin ( roles/translationhub.admin )
Storage Admin ( roles/storage.admin )
Service Account Token Creator ( roles/iam.serviceAccountTokenCreator )
Translation Hub administrators can, for example, manage glossaries,
portals, and portal users, but they cannot work with other Google Cloud
services like Compute Engine or BigQuery. The Cloud Storage
permissions are required to create glossaries and to import portal users and
translators by using a CSV file.
For more information about setting permissions and IAM roles, see
Manage access to projects, folders, and organizations .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
