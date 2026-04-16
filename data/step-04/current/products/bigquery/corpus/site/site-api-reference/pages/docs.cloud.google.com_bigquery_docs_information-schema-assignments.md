---
title: "ASSIGNMENTS view \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/information-schema-assignments
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/information-schema-assignments
  title: "ASSIGNMENTS view \_|\_ BigQuery \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
ASSIGNMENTS view
The INFORMATION_SCHEMA.ASSIGNMENTS view contains a near real-time list of all
current assignments within the administration project. Each row represents a
single, current assignment. A current assignment is either pending or active and
has not been deleted. For more information about reservations, see Introduction
to Reservations .
Note: The view names INFORMATION_SCHEMA.ASSIGNMENTS and
INFORMATION_SCHEMA.ASSIGNMENTS_BY_PROJECT are synonymous and can be
used interchangeably.
Required permission
To query the INFORMATION_SCHEMA.ASSIGNMENTS view, you need the
bigquery.reservationAssignments.list Identity and Access Management (IAM) permission for
the project.
Each of the following predefined IAM roles includes the required
permission:
roles/bigquery.resourceAdmin
roles/bigquery.resourceEditor
roles/bigquery.resourceViewer
roles/bigquery.user
roles/bigquery.admin
For more information about BigQuery permissions, see
Access control with IAM .
Schema
The INFORMATION_SCHEMA.ASSIGNMENTS view has the following
schema:
Column name
Data type
Value
ddl
STRING
The DDL statement used to create this assignment.
project_id
STRING
ID of the administration project.
project_number
INTEGER
Number of the administration project.
assignment_id
STRING
ID that uniquely identifies the assignment.
reservation_name
STRING
Name of the reservation that the assignment uses.
job_type
STRING
The type of job that can use the reservation. Can be
PIPELINE , QUERY , CONTINUOUS ,
ML_EXTERNAL , or BACKGROUND .
assignee_id
STRING
ID that uniquely identifies the assignee resource.
assignee_number
INTEGER
Number that uniquely identifies the assignee resource.
assignee_type
STRING
Type of assignee resource. Can be organization ,
folder or project .
For stability, we recommend that you explicitly list columns in your information schema queries instead of
using a wildcard ( SELECT * ). Explicitly listing columns prevents queries from
breaking if the underlying schema changes.
Scope and syntax
Queries against this view must include a region qualifier .
If you don't specify a regional qualifier, metadata is retrieved from all
regions. The following table explains the region scope for this view:
View name
Resource scope
Region scope
[ PROJECT_ID .]`region- REGION `.INFORMATION_SCHEMA.ASSIGNMENTS[_BY_PROJECT]
Project level
REGION
Replace the following:
Optional: PROJECT_ID : the ID of your
Google Cloud project. If not specified, the default project is used.
REGION : any dataset region name .
For example, `region-us` .
Note: You must use a region qualifier
to query INFORMATION_SCHEMA views. The location of the query
execution must match the region of the INFORMATION_SCHEMA view.
Example
To run the query against a project other than your default project, add the
project ID in the following format:
` PROJECT_ID `.`region- REGION_NAME `.INFORMATION_SCHEMA.ASSIGNMENTS .
Replace the following:
PROJECT_ID : the ID of the project to which you have assigned
reservations.
REGION_NAME : the name of the region.
For example, `myproject`.`region-us`.INFORMATION_SCHEMA.ASSIGNMENTS .
The following example gets a project's currently assigned reservation and its
slot capacity. This information is useful for debugging job performance by
comparing the project's slot usage with the slot capacity of the reservation
assigned to that project.
SELECT
reservation . reservation_name ,
reservation . slot_capacity
FROM
` RESERVATION_ADMIN_PROJECT .region- REGION_NAME ` .
INFORMATION_SCHEMA . ASSIGNMENTS_BY_PROJECT assignment
INNER JOIN
` RESERVATION_ADMIN_PROJECT .region- REGION_NAME ` .
INFORMATION_SCHEMA . RESERVATIONS_BY_PROJECT AS reservation
ON
( assignment . reservation_name = reservation . reservation_name )
WHERE
assignment . assignee_id = " PROJECT_ID "
AND job_type = "QUERY" ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
