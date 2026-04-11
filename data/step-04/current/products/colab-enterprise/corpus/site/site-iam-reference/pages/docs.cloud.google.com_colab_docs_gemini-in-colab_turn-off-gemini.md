---
title: "Turn off Gemini in Colab Enterprise \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/colab/docs/gemini-in-colab/turn-off-gemini
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/colab/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/colab/docs/gemini-in-colab/turn-off-gemini
  title: "Turn off Gemini in Colab Enterprise \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Colab Enterprise
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Turn off Gemini in Colab Enterprise
This document explains how to turn off Gemini in Colab Enterprise.
Before you begin
To update a Gemini in Colab Enterprise subscription, make sure you have the
billing.subscriptions.update Identity and Access Management (IAM) permission. The
billing.subscriptions.update permission is included in the
roles/billing.admin
IAM role, or you can add the permission to a custom role.
Turn off Gemini in Colab Enterprise
To turn off Gemini in Colab Enterprise, you can
remove access for specific users or
turn off features within Colab Enterprise .
Remove access for specific users
You can use the
Policy Analyzer feature
in the Cloud Asset Inventory to find all users with any of the permissions included in
the Gemini for Google Cloud User role and the Service Usage Consumer
role. The most direct way to achieve this is to run a Policy Analyzer
query that checks for the specific role itself, as the role implicitly contains
the set of permissions.
Use the Policy Analyzer to see which users have the Gemini for Google
Cloud User role and the Service Usage Consumer role, or the individual
equivalent permissions.
Query by roles
Go to the Policy Analyzer page.
Go to Policy Analyzer
In the Analyze policies section, click Create custom query .
In the Select query scope field , choose the Organization, Folder,
or Project you want to analyze. This defines the resources (and their
IAM policies) that will be checked.
Set the parameter to Role .
In the Parameter 1 field, select Role from the drop-down
menu.
In the corresponding Select a role field, select or type the
name of the role: Gemini for Google Cloud User . Note that
the full role ID is roles/cloudaicompanion.user .
In the Parameter 2 field, select Role from the drop-down
menu.
In the corresponding Select a role field, select or type the
name of the role: Service Usage Consumer . Note that the full
role ID is roles/serviceusage.serviceUsageConsumer .
Click Analyze (or Run Query) . The results table shows all
principals (users, service accounts, groups) that have been granted
the Gemini for Google Cloud User role and the Service Usage
Consumer role on any resource within your defined scope, whether
directly or inherited from a parent resource.
Query by permissions
Go to the Policy Analyzer page.
Go to Policy Analyzer
In the Analyze policies section, click Create custom query .
In the Select query scope field , choose the Organization, Folder,
or Project you want to analyze. This defines the resources (and
their IAM policies) that will be checked.
Set the parameter to Permission .
In the Parameter 1 field, select Permission from the
drop-down menu.
In the corresponding field, enter
cloudaicompanion.companions.generateChat .
In the Parameter 2 field, select Permission from the
drop-down menu.
In the corresponding field, enter
cloudaicompanion.companions.generateCode .
Click Analyze (or Run Query) . The results table will show all
principals that have any of the listed permissions granted on
resources within the scope, regardless of the role they were granted
through (such as a predefined role, a custom role, or another
predefined role that coincidentally includes those permissions).
Remove all applicable user Identity and Access Management roles or permissions for
Gemini in Colab Enterprise:
Go to the IAM & Admin page.
Go to IAM & Admin
In the Principal column, find a principal for which you want to
remove access to Gemini in Colab Enterprise, and then click
edit Edit principal in that row.
In the Edit access pane, do the following:
Remove predefined roles
Locate the Gemini for Google Cloud User role, and then click
delete Delete role .
Locate the Service Usage Consumer role, and then click
delete Delete role .
Remove custom or alternate roles
Locate the roles that include the
cloudaicompanion.companions.generateChat and
cloudaicompanion.companions.generateCode permissions, and then
click delete Delete role .
Click Save .
Turn off features within Colab Enterprise
You can also turn off Gemini features from the
Colab Enterprise Notebooks page:
In the Google Cloud console, go to the Colab Enterprise Notebooks page.
Go to Colab Enterprise Notebooks
Open a notebook.
In the Colab Enterprise toolbar, click
pen_spark Help
me code .
Clear the Gemini features that you want to turn off.
Optional: If you are disabling all Gemini for Google Cloud products, then turn off
the Gemini for Google Cloud API .
Optional: Turn off the Gemini for Google Cloud API
After you turn off all other Gemini for Google Cloud
products for your project, turn off the Gemini for Google Cloud API
( cloudaicompanion.googleapis.com ). For more information, see
Disabling services .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
