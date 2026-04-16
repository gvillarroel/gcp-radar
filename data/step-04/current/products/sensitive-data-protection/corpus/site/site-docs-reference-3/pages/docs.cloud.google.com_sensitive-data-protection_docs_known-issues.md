---
title: "Known issues \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/known-issues
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/known-issues
  title: "Known issues \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Data Loss Prevention (Cloud DLP) is now a part of Sensitive Data Protection. The API name remains the same: Cloud Data Loss Prevention API (DLP API). For information about the services that make up Sensitive Data Protection, see Sensitive Data Protection overview .
Home
Documentation
Security
Sensitive Data Protection
Resources
Send feedback
Known issues
Stay organized with collections
Save and categorize content based on your preferences.
This page lists known issues with Sensitive Data Protection, along with
ways you can avoid or recover from the following issues.
Storing results to BigQuery
When a job or discovery scan is storing results to BigQuery, an
Already exists error appears in the logs. The error does not indicate that
there is a problem; your results will be stored as expected.
BigQuery scanning
This section describes issues you might encounter when inspecting
or profiling BigQuery data.
Issues common to inspection and profiling operations
The following issues are applicable to both BigQuery inspection and profiling
operations.
Rows with row-level security can't be scanned
Row-level security policies can
prevent Sensitive Data Protection from inspecting and profiling
the protected BigQuery tables.
If you have row-level security policies applied to your BigQuery
tables, we recommend that you set a TRUE filter and
include the service agent in the grantee list:
If you're profiling data at the organization or folder level , include the service agent of the container
project in the grantee list.
If you're profiling data at the project level or
running an inspection job on a table, include
the service agent of
the project in the grantee list.
Duplicate rows
When writing data to a BigQuery table, Sensitive Data Protection
might write duplicate rows.
Recently streamed data
Sensitive Data Protection doesn't scan recently streamed data (formerly known as
streaming buffer ). For more information, see Streaming data
availability in the
BigQuery documentation.
BigQuery inspection issues
The following issues are only applicable to inspection operations on BigQuery
data. They don't affect data profiles.
Exported findings do not have values for the row_number field
When you configure Sensitive Data Protection to save findings to BigQuery, the
location.content_locations.record_location.record_key.big_query_key.row_number
field in the generated BigQuery table is inferred at the time the input
table is scanned. Its value is nondeterministic, can't be queried, and can be
null for inspection jobs.
If you need to identify specific rows where findings are present, specify
inspectJob.storageConfig.bigQueryOptions.identifyingFields at job creation
time.
Identifying fields can be found in the generated BigQuery table, in
the location.content_locations.record_location.record_key.id_values field.
Limiting scans to new BigQuery content
If you're limiting scans to only new
content , and
you use the BigQuery Storage Write API to
populate the input table, Sensitive Data Protection might skip scanning some rows.
To mitigate this issue, in your inspection job , make sure the timestampField of the
TimespanConfig
object is a commit timestamp that BigQuery auto-generates.
However, there's still no guarantee that no rows are skipped, because
Sensitive Data Protection doesn't read from
recently streamed data .
If you want to auto-generate commit timestamps for a column, and you use
the legacy streaming API to populate
your input table, do the following:
In the input table's schema, make sure that the timestamp column is of type
TIMESTAMP .
Example schema
The following example defines the commit_time_stamp field and sets its
type to TIMESTAMP :
...
{
"name" : "commit_time_stamp" ,
"type" : "TIMESTAMP"
}
...
In the rows[].json field of the
tabledata.insertAll
method, make sure that the values in the timestamp column are set to AUTO .
Example JSON
The following example sets the value of the commit_time_stamp field to
AUTO :
{
...
"commit_time_stamp": "AUTO",
...
}
Limiting scans by setting a maximum percentage or rows
When you set a sampling limit based on a percentage of the total number of table
rows
( rowsLimitPercent ),
Sensitive Data Protection can inspect more rows than expected. If you need to
put a hard limit on the number of rows to scan, we recommend setting a maximum
number of rows
( rowsLimit )
instead.
BigQuery profiling issues
The following issues are only applicable to profiling operations on BigQuery
data. For more information, see Data profiles for BigQuery data .
Organizations or projects with more than 500 million tables
Sensitive Data Protection returns an error if you attempt to profile an
organization or project that has more than 500 million tables. If you encounter
this error, follow the instructions in the error message.
If your organization's table count has more than 500 million tables, and you
have a project with a lower table count, try to do a project-level scan instead.
For information about table and column limits, see Data profiling limits .
Inspection templates
The inspection template must be in the same
region as the data to be profiled. If you have data in multiple regions, use
multiple inspection templates—one for each region where you have data.
You can also use an inspection template that is stored in the global region.
If you include a template in the global region, Sensitive Data Protection uses it
for any data that doesn't have a region-specific template. For more information,
see Data residency considerations .
Stored infoTypes
A stored infoType (also known as a
stored custom dictionary detector ) that is referenced in your inspection
template must be stored in either of the following:
The global region.
The same region as the inspection template.
Otherwise, the profiling operation fails with the error, Resource not found .
Resource visibility
In a table data profile, the resource visibility classification given to a
BigQuery table depends on the visibility of the dataset that
contains the table, rather than the visibility of the table. Therefore, if a
table's IAM permissions differ from the dataset's
IAM permissions, then the resource visibility of the table
indicated in the data profile can be incorrect. This issue affects discovery
for BigQuery and
discovery for Vertex AI .
In the Google Cloud console, the resource visibility is indicated in the table data
profile's Public field. In the Cloud Data Loss Prevention API, the resource visibility is
indicated in the resourceVisibility
field of the
TableDataProfile .
Cloud Storage scanning
This section describes issues you might encounter when inspecting
or de-identifying data.
Inspection of Strict XLSX files is not supported
A file with an .xlsx extension can be one of two types. One type is a
Strict Office Open XML spreadsheet, which is not supported by Sensitive Data Protection.
The other type is a default Microsoft Excel workbook, which is supported.
Structured files being scanned in binary mode
In certain cases, files that are typically scanned in structured parsing mode
might be scanned in binary mode, which doesn't include the enhancements of the
structured parsing mode. For more information, see Scanning structured files in
structured parsing
mode .
De-identifying delimited files
When you de-identify
a delimited file (for example, a CSV file) with an inspection job ,
the output might have additional empty cells in some rows. A workaround to
avoid these extra cells is to instead de-identify data using the content.deidentify
method.
Discovery for Cloud SQL
Security Command Center duplicate findings
Cloud SQL data profiling supports publishing findings to Security Command Center .
Prior to April 25, 2024, a bug caused Sensitive Data Protection to occasionally
generate duplicate findings for Cloud SQL instances in Security Command Center.
These findings were generated with unique finding IDs, but they pertain to the
same Cloud SQL instances. The issue has been resolved, but the
duplicate findings still exist. You can
mute the duplicates to
hide them on the Security Command Center Findings page.
Discovery for Amazon S3
Findings for Amazon S3 that Sensitive Data Protection sends to
Security Command Center might not have information about the affected resource's AWS
account ID or display name. This typically happens in the following cases:
The AWS connector had
only been valid for about 24 hours by the time the finding was sent to
Security Command Center.
The AWS account had only been included in the AWS connector for about 24 hours
by the time the finding was sent to Security Command Center.
To resolve this issue, after approximately 24 hours, regenerate the data
profiles by deleting
them or
by setting a profiling
schedule .
The full finding details are sent to Security Command Center.
Intelligent document parsing
This section contains known issues related to document parsing.
The DocumentLocation object isn't populated
The location.content_locations.document_location.file_offset field isn't
populated for Intelligent Document Parsing scanning mode.
Detection
The following known issues describe issues with detection, regardless of the
operation you're performing—inspection, de-identification, or discovery.
Dictionary words
Dictionary words containing characters in the Supplementary
Multilingual Plane of the Unicode standard can yield unexpected findings.
Examples of such characters are emojis, scientific symbols, and historical scripts.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
