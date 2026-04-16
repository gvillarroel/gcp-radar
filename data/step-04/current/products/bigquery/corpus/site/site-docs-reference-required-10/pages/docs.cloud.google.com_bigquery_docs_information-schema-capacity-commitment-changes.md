---
title: "CAPACITY_COMMITMENT_CHANGES view \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/information-schema-capacity-commitment-changes
knowledge_key: corpus
source_id: site-docs-reference-required-10
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/information-schema-organization-options-changes
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/information-schema-capacity-commitment-changes
  title: "CAPACITY_COMMITMENT_CHANGES view \_|\_ BigQuery \_|\_ Google Cloud Documentation"
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
CAPACITY_COMMITMENT_CHANGES view
The INFORMATION_SCHEMA.CAPACITY_COMMITMENT_CHANGES view contains a near
real-time list of all changes to capacity commitments within the administration
project. Each row represents a single change to a single capacity commitment.
For more information, see Slot commitments .
Note: The view names INFORMATION_SCHEMA.CAPACITY_COMMITMENT_CHANGES and
INFORMATION_SCHEMA.CAPACITY_COMMITMENT_CHANGES_BY_PROJECT are synonymous and
can be used interchangeably.
Required permission
To query the INFORMATION_SCHEMA.CAPACITY_COMMITMENT_CHANGES view,
you need the bigquery.capacityCommitments.list Identity and Access Management (IAM)
permission for the project.
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
The INFORMATION_SCHEMA.CAPACITY_COMMITMENT_CHANGES view has the
following schema:
Column name
Data type
Value
change_timestamp
TIMESTAMP
Time when the change occurred.
project_id
STRING
ID of the administration project.
project_number
INTEGER
Number of the administration project.
capacity_commitment_id
STRING
ID that uniquely identifies the capacity commitment.
commitment_plan
STRING
Commitment plan of the capacity commitment.
state
STRING
State the capacity commitment is in. Can be PENDING or
ACTIVE .
slot_count
INTEGER
Slot count associated with the capacity commitment.
action
STRING
Type of event that occurred with the capacity commitment. Can be
CREATE , UPDATE , or DELETE .
user_email
STRING
Email address of the user or subject of the workforce identity
federation that made the change. google for changes
made by Google. NULL if the email address is unknown.
commitment_start_time
TIMESTAMP
The start of the current commitment period. Only applicable for
ACTIVE capacity commitments, otherwise this is
NULL .
commitment_end_time
TIMESTAMP
The end of the current commitment period. Only applicable for
ACTIVE capacity commitments, otherwise this is
NULL .
failure_status
RECORD
For a FAILED commitment plan, provides the failure
reason, otherwise this is NULL . RECORD
consists of code and message .
renewal_plan
STRING
The plan this capacity commitment is converted to after
commitment_end_time passes. After the plan is changed,
the committed period is extended according to the commitment plan. Only
applicable for ANNUAL and TRIAL
commitments, otherwise this is NULL .
edition
STRING
The edition associated with this reservation. For more information about editions, see Introduction to BigQuery editions .
is_flat_rate
BOOL
Whether the commitment is associated with the legacy flat-rate capacity model or an edition. If FALSE , the current commitment is associated with an edition. If TRUE , the commitment is the legacy flat-rate capacity model.
For stability, we recommend that you explicitly list columns in your information schema queries instead of
using a wildcard ( SELECT * ). Explicitly listing columns prevents queries from
breaking if the underlying schema changes.
Data retention
This view contains current capacity commitments and the deleted capacity
commitments that are kept for a maximum of 41 days after which they are removed
from the view.
Scope and syntax
Queries against this view must include a region qualifier .
If you don't specify a regional qualifier, metadata is retrieved from all
regions. The following table explains the region scope for this view:
View name
Resource scope
Region scope
[ PROJECT_ID .]`region- REGION `.INFORMATION_SCHEMA.CAPACITY_COMMITMENT_CHANGES[_BY_PROJECT]
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
The following query displays the user who has made the latest capacity commitment
update to the current project within the specified date.
SELECT
user_email ,
change_timestamp
FROM
`region-us` . INFORMATION_SCHEMA . CAPACITY_COMMITMENT_CHANGES
WHERE
change_timestamp BETWEEN '2021-09-30' AND '2021-10-01'
ORDER BY
change_timestamp DESC
LIMIT 1 ;
The result is similar to the following:
+--------------------------------+-------------------------+
| user_email | change_timestamp |
+--------------------------------+-------------------------+
| 222larabrown@gmail.com | 2021-09-30 09:30:00 UTC |
+--------------------------------+-------------------------+
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
