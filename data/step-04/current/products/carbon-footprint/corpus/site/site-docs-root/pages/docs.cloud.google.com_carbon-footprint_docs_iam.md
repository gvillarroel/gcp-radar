---
title: "IAM permissions and roles \_|\_ Carbon Footprint \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/carbon-footprint/docs/iam
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/carbon-footprint/docs/view-carbon-data
source_metadata:
  url: https://docs.cloud.google.com/carbon-footprint/docs/iam
  title: "IAM permissions and roles \_|\_ Carbon Footprint \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Costs and usage management
Carbon Footprint
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
IAM permissions and roles
This page describes how you use Identity and Access Management (IAM) roles and
permissions to control access to Carbon Footprint data.
Overview
Identity and Access Management permissions and
roles determine your ability
to access data through the Google Cloud console and data export .
A role is a collection of permissions. You can't grant a permission to a
principal (user or service account) directly; instead, you grant principals a
role. When you grant a role to a principal, you grant them all the permissions
that the role contains. You can grant multiple roles to the same principal.
To access Carbon Footprint data associated with a billing account, a billing
account administrator must grant you one or more IAM roles on the billing
account that contain the appropriate carbon data permission.
To learn how to grant these roles, see
Update user permissions for a Cloud Billing account .
Note: These permissions must be granted from the Billing account settings page, not the project-level IAM page. If you don't know who your administrator is, see Find a Billing Account Administrator .
Permissions
The following table list the IAM
permissions associated with Carbon Footprint.
Permission
Description
billing.accounts.getCarbonInformation
View Carbon Footprint of a billing account.
Predefined roles
The following table describes IAM roles
associated with Carbon Footprint, and lists the permissions
that are contained in each role.
Role
Description
Permissions
Carbon Footprint Viewer ( roles/billing.carbonViewer )
Can list billing accounts and view carbon information.
Cannot see detailed billing data.
billing.accounts.list
billing.accounts.get
billing.accounts.getCarbonInformation
Billing Account Administrator ( roles/billing.admin )
Provides access to see and manage all aspects of billing accounts, including carbon information.
See Billing IAM roles documentation for complete list of permissions of this role. Includes but not limited to: billing.accounts.list
billing.accounts.get
billing.accounts.getCarbonInformation
Billing Account Viewer ( roles/billing.viewer )
View billing account cost and pricing information, transactions, and billing and commitment recommendations, including carbon information.
See Billing IAM roles documentation for complete list of permissions of this role. Includes but not limited to: billing.accounts.list
billing.accounts.get
billing.accounts.getCarbonInformation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
