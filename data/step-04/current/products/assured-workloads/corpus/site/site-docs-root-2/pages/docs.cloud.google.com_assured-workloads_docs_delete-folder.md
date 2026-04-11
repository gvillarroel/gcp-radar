---
title: "Delete an Assured Workloads folder \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/docs/delete-folder
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/docs/delete-folder
  title: "Delete an Assured Workloads folder \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The names for some Assured Workloads control packages have changed. For information about the name change, see Control package renaming notice .
Home
Documentation
Security
Assured Workloads
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Delete an Assured Workloads folder
This page guides you through deleting an Assured Workloads folder and
using the Google Cloud console.
Important: Before deleting an Assured Workloads folder, make sure that
you first delete all projects within the folder.
To delete an Assured Workloads folder, do the following:
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
Note: This step is only necessary if you have an
Assured Workloads-created customer-managed encryption keys (CMEK)
project .
In the project list, select the project with the same name as your
Assured Workloads folder but with cmek- at the beginning. Then,
click delete
Delete .
In the dialog that appears, type the project ID as instructed, and then
click Shut down to delete the project.
In the folder list, select the Assured Workloads folder, and then
click delete
Delete .
In the dialog that appears, type the folder ID as instructed, and then click
Shut down to delete the folder.
Note: Folders and projects may still be listed for up to 24 hours after they
have been deleted.
Click the
menu
Navigation menu , and then click Compliance .
From the list of Assured Workloads folders, locate the folder you
want to delete, and click
delete
Delete . In the dialog that appears, type the folder name as instructed,
and then click Confirm to delete the folder.
What's next
Learn how to delete a Google Cloud folder .
Learn how to migrate a workload .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
