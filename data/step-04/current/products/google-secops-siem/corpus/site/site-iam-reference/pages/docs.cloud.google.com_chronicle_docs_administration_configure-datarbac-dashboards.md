---
title: "Configure data RBAC for Dashboards \_|\_ Google Security Operations \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-dashboards
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs/onboard/configure-cloud-authentication
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-dashboards
  title: "Configure data RBAC for Dashboards \_|\_ Google Security Operations \_|\_\
    \ Google Cloud Documentation"
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
Configure data RBAC for Dashboards
Supported in:
Google secops
SIEM
This document explains how Google Security Operations administrators can assign scopes
to dashboards. The Dashboards feature of Google Security Operations
is built from charts populated using YARA-L 2.0 properties.
Scopes assigned to a user determine the results that appear on a user's dashboard.
Data RBAC implementation may vary based on the data source in the chart query.
For more information, see Events, entity graph, and IoC matches .
To understand how data RBAC works, see Overview of Data RBAC .
Before you begin
Review the core concepts of data RBAC, including access types, user roles, the function of labels and scopes, and the impact of
data RBAC on Google SecOps features. For details about data RBAC, see Data RBAC overview .
Onboard your Google SecOps instance. For more information, see
Onboard a Google SecOps instance .
Confirm you have the required roles to manage Identity and Access Management permissions.
Grant user access to Dashboards
To grant a user or group access to Dashboards, follow these steps:
In the Google Cloud console, click IAM > Grant Access .
In the New principals field, enter the email address for the user or group.
To simplify management, we recommend to grant roles to Google groups, not individual users.
In the Select a role list, search for "Chronicle SIEM", and then select the
required predefined or custom role. For example, Chronicle SIEM Restricted Viewer .
If you assigned a scoped role (like Restricted Viewer ), you must also assign the
user to a specific Log Scope to filter their data view. For more information, see Configure data access control using Log Scopes .
Click Save .
The user now has the granted permissions for all dashboards they're authorized to see within the project.
Need more help? Get answers from Community members and Google SecOps professionals.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
