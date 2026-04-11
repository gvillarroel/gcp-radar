---
title: "Delete, restore, and rename standalone organizations \_|\_ Resource Manager\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/resource-manager/docs/delete-standalone-org
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/resource-manager/docs/access-control-folders
source_metadata:
  url: https://docs.cloud.google.com/resource-manager/docs/delete-standalone-org
  title: "Delete, restore, and rename standalone organizations \_|\_ Resource Manager\
    \ \_|\_ Google Cloud Documentation"
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
Delete, restore, and rename standalone organizations
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to manage the lifecycle of a standalone organization.
Delete a standalone organization
To delete a standalone organization, you must be either be an Organization Owner or an
Organization Administrator.
Before deleting the standalone organization, ensure the following:
Delete all projects and folders that you created under that organization. For more information, see Shut down projects .
Remove any active resources, such as access tags, hierarchical firewall rules, or access
policies.
The organization deletion process has two stages:
A 30-day soft-delete phase, during which you can recover your organization.
A purge phase, which occurs 30 days after soft delete. After this phase, the
system permanently deletes your organization.
To delete your organization, follow these steps:
In the Google Cloud console, go to the Organization details page.
Go to Organization details
Click Delete .
Enter the Organization ID in the confirmation dialog, and then click Delete .
This process might take a few minutes. The system sends a confirmation email to all organization owners after the organization is deleted.
Restore a deleted organization
You can restore an organization within 30 days of its deletion. You must have
the Organization Administrator role to view organizations pending deletion.
To restore a deleted organization, follow these steps:
In the Google Cloud console, go to the My organizations page.
Go to My organizations
Select the organization that you want to restore.
In the Organization details page, click Restore .
In the confirmation dialog that appears, click Restore . Organization
restoration might take a few minutes.
Rename an organization
To rename an organization, follow these steps:
In the Google Cloud console, go to the Organization details page.
Go to Organization details
Click Rename .
In the dialog, enter the new name for your organization. Ensure that the
new organization name meets the following requirements:
Contains only letters, numbers, or hyphens.
Doesn't use a domain name. Domain names are reserved for Cloud Identity and
Google Workspace organizations only.
Doesn't contain common words such as 'Google Cloud'.
Click Rename to save your changes.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
