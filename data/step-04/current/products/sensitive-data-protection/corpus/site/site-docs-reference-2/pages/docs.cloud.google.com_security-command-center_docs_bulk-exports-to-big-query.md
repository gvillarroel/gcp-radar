---
title: "Bulk export findings to BigQuery \_|\_ Security Command Center \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/bulk-exports-to-big-query
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/bulk-exports-to-big-query
  title: "Bulk export findings to BigQuery \_|\_ Security Command Center \_|\_ Google\
    \ Cloud Documentation"
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
Bulk export findings to BigQuery
Stay organized with collections
Save and categorize content based on your preferences.
Standard-legacy, Standard, Premium, and Enterprise service tiers
The document describes how to initiate on-demand bulk exports of Security Command Center
findings to BigQuery.
BigQuery is Google Cloud's fully managed, petabyte-scale, and
cost-effective analytics data warehouse that lets you run analytics over vast
amounts of data in near real time. To learn more about BigQuery,
see the BigQuery documentation .
Overview
This feature delivers a snapshot of findings up to a certain point in time.
This feature complements the continuous BigQuery export
to provide comprehensive analytics and reporting.
With bulk exports, you can do the following:
Create a BigQuery bulk export
View the status of a BigQuery bulk export
Note: You can configure a bulk export and a continuous export to the
same BigQuery dataset, but doing so can result in duplicated or
missing findings. For more information, see
BigQuery bulk exports and continuous exports .
for more information.
Dataset structure
Findings are exported to BigQuery as rows in the findings
table, which is clustered by source_id , finding_id ,
and event_time .
Each dataset contains a findings table, which has the following fields:
Field
Description
source_id
A unique identifier that Security Command Center assigns to the
source of a finding .
For example, all findings from the Cloud Anomaly Detection source have
the same source_id value.
Example: 1234567890
finding_id
Unique identifier that represents the finding. It is unique within a
source for an organization. It is alphanumeric and has less than or
equal to 32 characters.
event_time
The time that the event took place or the time that an update to the
finding occurred. For example, if the finding represents an open
firewall, then event_time captures the time the detector
believes the firewall was opened. If the finding is resolved
afterward, then this time reflects when that finding was resolved.
Example: 2019-09-26 12:48:00.985000 UTC
bulk_export_id
For bulk exports, this is a UUID.
For continuous exports, this field is empty.
finding
A record of assessment data like security, risk, health, or privacy,
that is ingested into Security Command Center for presentation,
notification, analysis, policy testing, and enforcement. For example,
a cross-site scripting (XSS) vulnerability in an App Engine
application is a finding.
For more information about the nested fields, see the API reference
for the
Finding
object.
resource
Information related to the Google Cloud resource that is
associated with this finding.
For more information about the nested fields, see the API reference
for the
Resource
object.
Cost
You incur BigQuery charges related to this feature for storing
data in BigQuery. For more information, see BigQuery storage pricing .
Before you begin
You must complete these steps before you enable this feature.
Set up permissions
To complete this guide, you must have the following Identity and Access Management (IAM)
roles:
On the organization where you want to export findings
from, one of the following:
Security Center BigQuery Exports Editor
( roles/securitycenter.bigQueryExportsEditor )
Security Center Admin
( roles/securitycenter.admin )
To learn more about Security Command Center roles, see
Access control .
On the BigQuery dataset,
BigQuery Data Owner
( roles/bigquery.dataOwner )
To learn more about BigQuery roles, see BigQuery IAM roles and permissions .
On the project that the destination BigQuery dataset belongs to, ProjectIAMAdmin ( roles/resourcemanager.projectIamAdmin )
Create a BigQuery dataset
Create a BigQuery dataset by using the steps in Create datasets .
Note: You must enable billing on the project that the dataset belongs to
and set the BigQuery table to never expire .
Otherwise, the default table expiration is set to 60 days, meaning you would
only see findings from the past 60 days in your BigQuery dataset.
To modify the table expiration setting, billing must be enabled on the project.
Enable the Security Command Center API
To export findings, you must enable the Security Command Center API by following
these steps:
Go to the API Library page in the Google Cloud console.
Go to API Library
Select the project for which you want to enable the Security Command Center API.
In the Search field, enter Security Command Center , and then click
Security Command Center in the search results.
On the API page that appears, click Enable .
The Security Command Center API is enabled for your project.
Grant perimeter access in VPC Service Controls
If you use VPC Service Controls , review
Granting perimeter access in VPC Service Controls
and employ those steps, if necessary.
This step needs to be repeated for each user that creates a bulk export for a
given service perimeter.
Create an ingress rule for the new BigQuery bulk export
If you use VPC Service Controls , review
Create an ingress rule for the new export to BigQuery
and employ those steps, if necessary.
Limitations for BigQuery bulk exports
Consider the following constraints when creating BigQuery bulk
exports:
Only three concurrent bulk exports are allowed at any given time for a single
organization.
If you request multiple non-concurrent bulk exports to the same BigQuery
dataset, newer findings within the export are appended to the BigQuery
findings table. Findings are not overwritten.
Create a BigQuery bulk export
A bulk export of findings can be performed for an organization, a project, or
a folder.
To initiate a bulk export of findings to a BigQuery instance,
use the gcloud CLI and follow these steps:
Go to the Google Cloud console.
Go to the Google Cloud console
Select the project for which you enabled the Security Command Center API.
Click Activate Cloud Shell . terminal
To create a new export configuration, run the following command:
gcloud scc findings export-to-bigquery PARENT \
--dataset = DATASET_NAME \
[ --location = LOCATION ; default = "global" ] \
Replace the following:
PARENT : The relative name of the export scope:
organization, project, or folder.
Example formats: organizations/ ORGANIZATION_ID ,
projects/ PROJECT_ID , folders/ FOLDER_ID
DATASET_NAME : The name of the BigQuery
dataset. Example format:
projects/ PROJECT_ID /datasets/ DATASET_ID
LOCATION :
the
Security Command Center
location in which to create an export configuration; if data residency is enabled, use eu ,
sa , or us ; otherwise, use the value global .
This variable is optional.
For example, to create a bulk export of all findings, run the following
command:
gcloud scc findings export-to-bigquery organizations/123
--dataset = projects/123/datasets/DATASET
In terms of data residency ,
the preceding example calls the global endpoint.
To create the same bulk export for the eu endpoint, run the
following command:
gcloud scc findings export-to-bigquery organizations/123
--dataset = projects/123/datasets/DATASET
--location = locations/eu
This command returns a long-running operation object that contains a name
string that is required when tracking the status of the export. To track the
status of this BigQuery bulk export, see View the status of a bulk export .
To review your findings, see Review findings .
Queries
For a variety of queries you can use to analyze findings data, see
Useful queries .
Note: Duplicate entries might exist in your dataset. To parse them out, you
can use the DISTINCT clause, as shown in the
first example query .
View the status of a bulk export
To view the status of a bulk export, you need the long running operation name
string that was returned to you when you created the bulk export .
Go to the Google Cloud console.
Go to the Google Cloud console
Select the project for which you enabled the Security Command Center API.
Click Activate Cloud Shell . terminal
To verify the details of the bulk export configuration, run the following
command:
gcloud scc operations describe LONG_RUNNING_OPERATION_NAME \
--organization = ORGANIZATION_ID
Replace the following:
LONG_RUNNING_OPERATION_NAME : The name string returned
when you created the bulk export.
ORGANIZATION_ID
For example, to see the status of a bulk export request the returned
name: "long-running-operation-name" from an organization with an
organization ID set to 123 , run the following command:
gcloud scc operations describe long-running-operation-name \
--organization = 123
If an export has succeeded, the response contains done: true .
If an export has failed, the response contains an error code.
If an export is still in progress, the response contains neither done: true
nor an error code.
BigQuery bulk exports and continuous exports
If you want to use bulk and continuous BigQuery exports together
on the same BigQuery dataset, there are two possible approaches:
Create a continuous export first, and then backfill with a bulk export.
Set up a continuous export to a BigQuery dataset. Once the
export is successfully created, you start receiving Security Command Center findings in
real time.
Create a bulk export using the same destination BigQuery
dataset. A snapshot of all the Security Command Center findings at the time of the export
is exported to the selected dataset.
A bulk export takes time to execute. Thus, if the continuous export is
created at T1, the bulk export is triggered at T2, and the snapshot of the
findings for the bulk export completes at T3, then duplicate records could be
seen between T1 and T3. However, there are no finding gaps.
Create a bulk export first, and then create a continuous export.
Create a bulk export. A snapshot of all the Security Command Center findings at the
time the export runs are exported to the selected BigQuery
dataset.
Set up a continuous export to the same destination BigQuery
dataset. Once the export is successfully created, you start receiving
Security Command Center findings in real time.
If the bulk export is created at T1, the snapshot of the findings for bulk
export completes at T2, and the continuous export is triggered at T3, then
findings between T2 and T3 could be missing in the BigQuery
dataset.
What's next
Learn how to perform one-time exports in Security Command Center .
Learn how to continuously stream findings to BigQuery for analysis .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
