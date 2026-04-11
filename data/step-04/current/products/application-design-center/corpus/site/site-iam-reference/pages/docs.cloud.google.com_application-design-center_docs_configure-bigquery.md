---
title: "Configure a BigQuery dataset \_|\_ Application Design Center \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/application-design-center/docs/configure-bigquery
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/application-design-center/docs/grant-roles-service-account
source_metadata:
  url: https://docs.cloud.google.com/application-design-center/docs/configure-bigquery
  title: "Configure a BigQuery dataset \_|\_ Application Design Center \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Application Design Center
Guides
Send feedback
Configure a BigQuery dataset
Stay organized with collections
Save and categorize content based on your preferences.
BigQuery is a fully managed, petabyte-scale, and cost-effective
analytics data warehouse that lets you run analytics over vast amounts of data
in near real time. For more information, see BigQuery introduction .
This document describes the components and parameters you can configure when
using App Design Center to create a BigQuery
dataset. The configuration parameters are based on the terraform-google-bigquery Terraform module.
Component connections
The following table includes the components that you can connect to a
BigQuery dataset, and the resulting updates to your
application and its generated Terraform code.
Connected component
Application updates
Background information
Compute Engine instance template
The Compute Engine instances can read and write data to the BigQuery dataset.
The BigQuery resource metadata is added to the Compute Engine instance template.
The roles/bigquery.dataEditor role is added to Compute Engine instance template service account.
Instance templates
Service account
The service account can be used by services, such as Cloud Run, to read and modify data in the BigQuery dataset.
The BigQuery roles/bigquery.dataEditor role is added to the service account.
BigQuery IAM roles and permissions
Cloud Run
The Cloud Run service can interact with the BigQuery dataset.
The BigQuery resource metadata is added to the Cloud Run environment variables.
The BigQuery roles/bigquery.dataEditor role is added to the Cloud Run service account.
What is Cloud Run
Pub/Sub
The Pub/Sub subscription can write messages to the BigQuery dataset.
The BigQuery dataset information is added to the BigQuery subscription fields.
BigQuery subscriptions
Required configuration parameters
If your template includes a BigQuery component, you must
configure the following parameters before you deploy.
Parameter name
Description and constraints
Background information
Dataset ID
id
Introduction to datasets
Project ID
The project where you want to deploy the BigQuery dataset and table.
Configure components
Optional configuration parameters
The following parameters are optional. To display advanced parameters, in the
Configuration area, select Show advanced fields .
Feature
Subfeature
Parameter name
Description and constraint information
Background information
Tables
Table ID
id
Introduction to tables
Description
description
Introduction to tables
Table Name
friendlyName
Table naming
Schema
schema
Specifying a schema
Clustering
clustering
Introduction to clustered tables
Require Partition Filter
requirePartitionFilter
Set partition filter requirements
Time Partitioning
Expiration MS
expirationMs
Set the partition expiration
Field
field
Create a time-unit column-partitioned table
Type
type
Create a time-unit column-partitioned table
Range Partitioning
Field
field
Set partition filter requirements
Range Start
range.start
Integer range partitioning
Range End
range.end
Integer range partitioning
Range Interval
range.interval
Integer range partitioning
Expiration Time
expirationTime
Update a table's expiration time
Deletion Protection
Select the checkbox to prevent this table from being deleted by Terraform. If not selected, the component-level Deletion Protection setting is used.
deletion_protection
Labels
Key
labels
Add labels to tables and views
Value
labels
Add labels to tables and views
Dataset Name
friendlyName
Name datasets
Description
description
Update dataset description
Region
location
BigQuery locations
Delete Contents on Destroy
Select to delete all tables in the dataset when destroying the resource. If not selected, destroying the resource fails if tables are present.
delete_contents_on_destroy
Deletion Protection
When selected, a terraform apply or terraform destroy that would delete tables will fail. When not selected, tables can be deleted. You can override this setting using the deletion protection setting for each table.
deletion_protection
Default Table Expiration MS
defaultTableExpirationMs
Update default table expiration times
Default Partition Expiration MS
defaultPartitionExpirationMs
Update default partition expiration times
Max Time Travel Hours
maxTimeTravelHours
Update time travel windows
Storage Billing Model
StorageBillingModel
Storage billing models
Encryption Key
kmsKeyName
Encryption at rest
Dataset Labels
Key
labels
Add labels to datasets
Value
value
Add labels to datasets
Resource Tags
Key
resourceTags
Tag definitions and identifiers
Value
resourceTags
Tag definitions and identifiers
Views
View ID
id
View naming
Description
description
Introduction to views
Query
query
Updating a view's SQL query
Use Legacy SQL
useLegacySql
Migrating to GoogleSQL
Labels
Key
labels
Add labels to tables and views
Value
labels
Add labels to tables and views
Materialized Views
View ID
id
View naming
Description
description
Introduction to materialized views
Query
query
Materialized view query support
Enable Refresh
enableRefresh
Refresh materialized views
Refresh Interval MS
refreshIntervalMs
Set the refresh frequency cap
Clustering
fields[]
Cluster materialized views
Time Partitioning
Expiration MS
expirationMs
Set the partition expiration
Field
field
Create a time-unit column-partitioned table
Type
type
Create a time-unit column-partitioned table
Require Partition Filter
requirePartitionFilter
Set partition filter requirements
Range Partitioning
Field
field
Partitioned materialized views
Range Start
range.start
Integer range partitioning
Range End
range.end
Integer range partitioning
Range Interval
range.interval
Integer range partitioning
Expiration Time
expirationTime
Updating a view's expiration time
Max Staleness
maxStaleness
Use materialized views with max_staleness option
Labels
Key
labels
Add labels to tables and views
Value
labels
Add labels to tables and views
External Tables
Table ID
id
Introduction to external tables
Description
A description of the external table.
description
Autodetect
autodetect
Use the autodetect flag
Compression
compression
Loading compressed and uncompressed data
Ignore Unknown Values
ignoreUnknownValues
Create a table definition file for an external data source
Max Bad Records
maxBadRecords
Create a table definition file for an external data source
Schema
schema
Create a table definition file for an external data source
Source Format
sourceFormat
Create a table definition file for an external data source
Source URIs
sourceUris
Create a table definition file for an external data source
CSV Options
Quote
quote
Loading CSV data from Cloud Storage
Allow Jagged Rows
allowJaggedRows
Loading CSV data from Cloud Storage
Allow Quoted Newlines
allowQuotedNewlines
Loading CSV data from Cloud Storage
Encoding
encoding
Encoding
Field Delimiter
FieldDelimiter
Field delimiters
Skip Leading Rows
skipLeadingRows
CSV options
Google Sheets Options
Range
range
Create Google Drive external tables
Skip Leading Rows
skipLeadingRows
Create Google Drive external tables
Hive Partitioning Options
Mode
mode
Detection modes
Source URI Prefix
sourceUriPrefix
Use externally partitioned data
Expiration Time
expirationTime
Update a table's expiration time
Max Staleness
maxStaleness
Manage table staleness
Deletion Protection
Select the checkbox to prevent this table from being deleted by Terraform. If not selected, the component-level Deletion Protection setting is used.
deletion_protection
Labels
Key
labels
Add labels to tables and views
Value
labels
Add labels to tables and views
Routines
Routine ID
routineId
Manage routines
Routine Type
routineType
RoutineType
Language
language
Language
Definition Body
definitionBody
View the body of a routine
Return Type
returnType
StandardSqlDataType
Description
A description of the routine.
description
Arguments
Name
The name of the argument.
name
Data Type
dataType
StandardSqlDataType
Argument Kind
argumentKind
ArgumentKind
Mode
mode
Mode
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
