---
title: "Control column access \_|\_ Dataform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataform/docs/policy-tags
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataform/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/dataform/docs/policy-tags
  title: "Control column access \_|\_ Dataform \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataform
Guides
Send feedback
Control column access
Stay organized with collections
Save and categorize content based on your preferences.
This document shows you how to control column access by adding BigQuery
policy tags to table columns with
Dataform core .
You can set
BigQuery policy tags
on table columns in the config block in a table definition SQLX file.
Before you begin
In the Google Cloud console, go to the Dataform page.
Go to the Dataform page
Select or create a repository .
Select or create a development workspace .
Create a table .
Required roles
To get the permissions that
you need to add a BigQuery policy tag to a table in Dataform,
ask your administrator to grant you the
Dataform Editor ( roles/dataform.editor )
IAM role on workspaces.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Additionally, you must grant the
BigQuery roles for column-level access control
to your
Dataform service agent or custom service account .
Add a BigQuery policy tag
To add a BigQuery policy tag to a table column, follow these steps:
Go to your development workspace.
In the Files pane, expand definitions/ .
Select a table definition SQLX file.
In the config block, add a full tag identifier to a selected
column in the following format:
columns: {
column_name: {
bigqueryPolicyTags: [" FULL_TAG_IDENTIFIER "]
}
}
Replace FULL_TAG_IDENTIFIER with the full identifier
of the selected tag.
Optional: Click Format .
The following code sample shows the
projects/example-project/locations/us/taxonomies/123456789/policyTags/123456789
sample BigQuery policy tag added to column1 :
config {
type: "table",
columns: {
column1: {
description: "Some description",
bigqueryPolicyTags: ["projects/example-project/locations/us/taxonomies/123456789/policyTags/123456789"]
}
}
}
SELECT "test" AS column1
What's next
To learn more about BigQuery policy tags, see
Introduction to column-level access control .
To learn how to add BigQuery labels in Dataform, see
Add BigQuery labels .
To learn how to add Dataform tags to create collections of tables, see
Add execution tags .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
