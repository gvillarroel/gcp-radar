---
title: "Automate IAM recommendations using playbooks \_|\_ Security Command Center\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/automate-recommendations-playbook
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/automate-recommendations-playbook
  title: "Automate IAM recommendations using playbooks \_|\_ Security Command Center\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Security Command Center
Guides
Send feedback
Automate IAM recommendations using playbooks
Stay organized with collections
Save and categorize content based on your preferences.
Enterprise service tier
This document explains how to enable the IAM Recommender Response playbook
in Security Command Center Enterprise to identify the over-permissioned identities and
automatically and safely remove the excess permissions.
Overview
The IAM recommender provides you with security insights that
assess how your principals use resources and recommends you to take an action on
the encountered insight. For example, when a permission was not used for
the last 90 days, the IAM recommender highlights it as an excess
permission and recommends you to remove it safely.
The IAM Recommender Response playbook uses the IAM recommender
to scan your environment for the workload identities that possess excess
permissions or service account impersonations. Instead of reviewing and applying
recommendations
manually in Identity and Access Management, enable the playbook to do it automatically in
Security Command Center.
Prerequisites
Before activating the IAM Recommender Response playbook, complete the following
prerequisite steps:
Create a custom IAM role and configure a specific permission
for it.
Define the Workload Identity Email value.
Grant the custom role you've created to an existing principal.
Create a custom IAM role
In the Google Cloud console, go to the IAM Roles page.
Go to IAM Roles
Click Create role to create a custom role with the required permissions for
the integration.
For a new custom role, provide the Title , Description , and a unique
ID .
Set the Role Launch Stage to General Availability .
Add the following permission to the created role:
resourcemanager.organizations.setIamPolicy
Click Create .
Define the Workload Identity Email value
To define what identity to grant the custom
role to, complete the following steps:
In the Google Cloud console, go to Response > Playbooks to open
the Security Operations console navigation.
In the Security Operations console navigation, go to Response >
Integrations Setup .
In the integration Search field, type in Google Cloud Recommender .
Click settings Configure Instance .
The dialog window opens.
Copy the value of the Workload Identity Email parameter to your
clipboard. The value must be in the following format: username@example.com
Grant a custom role to an existing principal
After you grant your new custom role to a selected principal, they can change
permissions for any user in your organization.
In the Google Cloud console, go to the IAM page.
Go to IAM
In the Filter field, paste the Workload Identity Email value and
search for the existing principal.
Click edit Edit principal . The
dialog window opens.
In the Edit access pane under the Assign roles , click
add Add another role .
Select the custom role that you've created and click Save .
Enable playbook
By default, the IAM Recommender Response playbook is disabled. To use the
playbook, enable it manually:
In the Security Operations console, go to Response > Playbooks .
In the playbook Search field, input IAM Recommender .
In the search result, select the IAM Recommender Response playbook.
In the playbook header, switch the toggle to enable the playbook .
In the playbook header, click Save .
Configure the automatic approval flow
Changing the playbook settings is an advanced and optional configuration.
By default, every time the playbook identifies unused permissions, it awaits for
you to approve or decline the remediation before completing the run.
To configure the playbook flow to automatically remove the unused
permissions every time they are found without requesting your approval, complete
the following steps:
In the Google Cloud console, go to Response > Playbooks .
Select the IAM Recommender Response playbook.
In the playbook building blocks, select the IAM Setup Block_1 . The block
configuration window opens. By default, the remediation_mode parameter
is set to Manual .
In the remediation_mode parameter field, enter Automatic .
Click Save to confirm the new remediation mode settings.
In the playbook header, click Save .
What's next?
Learn more about playbooks in the Google SecOps
documentation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
