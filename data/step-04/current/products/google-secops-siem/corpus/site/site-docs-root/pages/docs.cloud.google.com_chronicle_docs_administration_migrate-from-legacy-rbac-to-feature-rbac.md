---
title: "Migrate from legacy RBAC to feature RBAC \_|\_ Google Security Operations\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/chronicle/docs/administration/migrate-from-legacy-rbac-to-feature-rbac
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs/secops/secops-overview
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/administration/migrate-from-legacy-rbac-to-feature-rbac
  title: "Migrate from legacy RBAC to feature RBAC \_|\_ Google Security Operations\
    \ \_|\_ Google Cloud Documentation"
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
Migrate from legacy RBAC to feature RBAC
Supported in:
Google secops
SIEM
This document explains how to migrate your existing Google SecOps instance from legacy RBAC to feature RBAC using Google Cloud IAM.
Prerequisite: Your Google SecOps instance has been migrated to your Google Cloud project and has been set up using Google Cloud authentication.
You can use auto-generated commands to migrate legacy RBAC roles and permissions to Google Cloud IAM. Google SecOps creates these commands using your pre-migration feature RBAC access control configuration. When run, they create new IAM policies equivalent to your existing configuration, as defined in Google SecOps on the SIEM Settings > Users and Groups page.
After you run these commands, you can't revert to the previous feature RBAC access control feature. If you encounter an issue, contact Google SecOps Technical Support .
In the Google Cloud console, go to the Security > Google SecOps > Access management tab.
Under Migrate role bindings , you see a set of auto-generated Google Cloud CLI commands.
Review and verify that the commands create the expected permissions. For information about Google SecOps roles and permissions, see How IAM permissions map to each feature RBAC role .
Launch a Cloud Shell session.
Copy the auto-generated commands, and then paste and run them in the gcloud CLI.
After you execute all commands, click Verify access . If successful, you see the message Access verified on the Google SecOps Access management page. Otherwise, you see the message Access denied . This message might take 1-2 minutes to appear.
To complete the migration, return to the Security > Google SecOps > Access management tab, and then click Enable IAM .
Verify that you can access Google SecOps as a user with the Chronicle API Admin role:
Sign in to Google SecOps as a user with the Chronicle API Admin predefined role. For more information, see Sign in to Google SecOps .
Open the SIEM Settings > Users and Groups page. You should see the following message: To manage users and groups, go to Identity Access Management (IAM) in the Google Cloud console. Learn more about managing users and groups.
Sign in to Google SecOps as a user with a different role. For more information, see Sign in to Google SecOps .
Verify that the available features in the application match the permissions defined in IAM.
Need more help? Get answers from Community members and Google SecOps professionals.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
