---
title: "Migrate from legacy authentication to Google Cloud authentication \_|\_ Google\
  \ Security Operations \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/chronicle/docs/administration/migrate-from-legacy-auth-to-gcp-auth
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs/yara-l/functions
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/administration/migrate-from-legacy-auth-to-gcp-auth
  title: "Migrate from legacy authentication to Google Cloud authentication \_|\_\
    \ Google Security Operations \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Google Security Operations
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Migrate from legacy authentication to Google Cloud authentication
Supported in:
Google secops
SIEM
This document explains how to migrate an existing Google SecOps instance from legacy SIEM authentication to Google Cloud authentication.
Prerequisite: Your Google SecOps instance has been migrated to your Google Cloud project.
In the Google Cloud console, go to Security > Google SecOps .
Under Configure single sign-on , select one of the following options based on which identity provider you use to manage user and group access to Google SecOps:
If you are using Cloud Identity or Google Workspace, select Google Cloud Identity .
If you are using a third-party identity provider, select Workforce Identity Federation , and then select the workforce provider you want to use. You set this up when configuring workforce identity federation .
If you select Workforce Identity Federation , right-click Test SSO setup , and then open it in a private or incognito window.
If you see a login screen, then SSO setup is successful.
If you don't see a login screen, then check the configuration of the third-party identity provider. For more information, see Configure a third-party identity provider for Google SecOps .
Need more help? Get answers from Community members and Google SecOps professionals.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
