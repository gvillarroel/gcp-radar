---
title: "Snowflake to BigQuery migration tutorials \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials
knowledge_key: corpus
source_id: site-docs-reference-required-8
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/migration/snowflake-tutorials
  title: "Snowflake to BigQuery migration tutorials \_|\_ Google Cloud Documentation"
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
Snowflake to BigQuery migration tutorials
This document provides end-to-end examples and tutorials for the different ways you
can set up a Snowflake to BigQuery migration pipeline.
Snowflake migration pipeline examples
You can migrate your data from Snowflake
to BigQuery using three different processes: ELT,
ETL, or using partner tools.
Extract, load, and transform
You can set up an extract, load, and transform (ELT) process with two methods:
Use a pipeline to extract data from Snowflake and load the data to BigQuery
Extract data from Snowflake using other Google Cloud products.
Use a pipeline to extract data from Snowflake
To extract data from Snowflake
and load directly into Cloud Storage, use the snowflake2bq
tool.
You can then load your data from Cloud Storage to BigQuery
using one of the following tools:
The BigQuery Data Transfer Service for Cloud Storage connector
The LOAD command using the bq command-line tool
BigQuery API client libraries
Other tools to extract data from Snowflake
You can also use the following tools to extract data from Snowflake:
Dataflow
JDBC to BigQuery template
SnowflakeIO connector
Cloud Data Fusion
JDBC drivers
Managed Service for Apache Spark
Apache Spark BigQuery connector
Snowflake connector for Apache Spark
Hadoop BigQuery connector
The JDBC driver from Snowflake and Sqoop to extract data from Snowflake into
Cloud Storage:
Moving data with Apache Sqoop in Managed Service for Apache Spark
Other tools to load data to BigQuery
You can also use the following tools to load data to BigQuery:
Dataflow
Read from Cloud Storage
Write to BigQuery
Cloud Storage Text to BigQuery template
Cloud Data Fusion
Create a target campaign pipeline
Managed Service for Apache Spark
Cloud Storage connector with Spark
Spark BigQuery connector
Hadoop Cloud Storage connector
Hadoop BigQuery connector
Dataprep by Trifacta
Read from Cloud Storage
Write to BigQuery
Extract, transform, and load
If you want to transform your data before loading it into
BigQuery, consider the following tools:
Dataflow
Clone the JDBC to BigQuery
template code
and modify the template to add Apache Beam
transforms .
Cloud Data Fusion
Create a reusable pipeline and transform your data using CDAP plugins .
Managed Service for Apache Spark
Transform your data using Spark SQL
or custom code in any of the supported Spark languages, such as Scala,
Java, Python, or R.
Partner tools for migration
There are multiple vendors that specialize in the EDW migration space. For a
list of key partners and their provided solutions, see
BigQuery partners .
Snowflake export tutorial
The following tutorial show a sample data export from Snowflake to
BigQuery that uses the COPY INTO <location> Snowflake command.
For a detailed, step-by step process that includes code samples, see
the Google Cloud professional services Snowflake to BigQuery tool
Prepare for the export
You can prepare your Snowflake data for an export by extracting
your Snowflake data into a Cloud Storage or an Amazon Simple Storage Service (Amazon S3)
bucket with the following steps:
Cloud Storage
This tutorial prepares the file in PARQUET format.
Use Snowflake SQL statements to create a named file format specification .
create or replace file format NAMED_FILE_FORMAT
type = 'PARQUET'
Replace NAMED_FILE_FORMAT with a name for the file format. For example, my_parquet_unload_format .
Create an integration with the CREATE STORAGE INTEGRATION
command.
create storage integration INTEGRATION_NAME
type = external_stage
storage_provider = gcs
enabled = true
storage_allowed_locations = ( ' BUCKET_NAME ' )
Replace the following:
INTEGRATION_NAME : a name for the storage integration. For example, gcs_int
BUCKET_NAME : the path to the Cloud Storage bucket. For example, gcs://mybucket/extract/
Retrieve the Cloud Storage service account for
Snowflake
with the DESCRIBE INTEGRATION
command.
desc storage integration INTEGRATION_NAME ;
The output is similar to the following:
+-----------------------------+---------------+-----------------------------------------------------------------------------+------------------+
| property | property_type | property_value | property_default |
+-----------------------------+---------------+-----------------------------------------------------------------------------+------------------ |
| ENABLED | Boolean | true | false |
| STORAGE_ALLOWED_LOCATIONS | List | gcs://mybucket1/path1/,gcs://mybucket2/path2/ | [] |
| STORAGE_BLOCKED_LOCATIONS | List | gcs://mybucket1/path1/sensitivedata/,gcs://mybucket2/path2/sensitivedata/ | [] |
| STORAGE_GCP_SERVICE_ACCOUNT | String | service-account-id@iam.gserviceaccount.com | |
+-----------------------------+---------------+-----------------------------------------------------------------------------+------------------+
Grant the service account listed as STORAGE_GCP_SERVICE_ACCOUNT read
and write access to the bucket specified in the storage integration
command. In this example, grant the service-account-id@ service account
read and write access to the <var>UNLOAD_BUCKET</var> bucket.
Create an external Cloud Storage stage that references the integration that
you created previously.
create or replace stage STAGE_NAME
url = ' UNLOAD_BUCKET '
storage_integration = INTEGRATION_NAME
file_format = NAMED_FILE_FORMAT ;
Replace the following:
STAGE_NAME : a name for the Cloud Storage stage object.
For example, my_ext_unload_stage
Amazon S3
The following example shows how to
move data from a Snowflake table to an Amazon S3 bucket :
In Snowflake,
configure a storage integration object
to allow Snowflake to write to an Amazon S3 bucket referenced in an
external Cloud Storage stage.
This step involves
configuring access permissions
to the Amazon S3 bucket,
creating the Amazon Web Services (AWS) IAM role ,
and creating a storage integration in Snowflake with the CREATE STORAGE INTEGRATION command:
create storage integration INTEGRATION_NAME
type = external_stage
storage_provider = s3
enabled = true
storage_aws_role_arn = 'arn:aws:iam::001234567890:role/myrole'
storage_allowed_locations = ( ' BUCKET_NAME ' )
Replace the following:
INTEGRATION_NAME : a name for the storage integration. For example, s3_int
BUCKET_NAME : the path to the Amazon S3 bucket to load files to. For example, s3://unload/files/
Retrieve the AWS IAM user
with the DESCRIBE INTEGRATION
command.
desc integration INTEGRATION_NAME ;
The output is similar to the following:
+---------------------------+---------------+ ================================================================================ +------------------+
| property | property_type | property_value | property_default |
+---------------------------+---------------+ ================================================================================ +------------------ |
| ENABLED | Boolean | true | false |
| STORAGE_ALLOWED_LOCATIONS | List | s3://mybucket1/mypath1/,s3://mybucket2/mypath2/ | [] |
| STORAGE_BLOCKED_LOCATIONS | List | s3://mybucket1/mypath1/sensitivedata/,s3://mybucket2/mypath2/sensitivedata/ | [] |
| STORAGE_AWS_IAM_USER_ARN | String | arn:aws:iam::123456789001:user/abc1-b-self1234 | |
| STORAGE_AWS_ROLE_ARN | String | arn:aws:iam::001234567890:role/myrole | |
| STORAGE_AWS_EXTERNAL_ID | String | MYACCOUNT_SFCRole = | |
+---------------------------+---------------+ ================================================================================ +------------------+
Create a role that has the CREATE STAGE privilege for the schema, and the USAGE privilege for the storage integration:
CREATE role ROLE_NAME ;
GRANT CREATE STAGE ON SCHEMA public TO ROLE ROLE_NAME ;
GRANT USAGE ON INTEGRATION s3_int TO ROLE ROLE_NAME ;
Replace ROLE_NAME with a name for the role. For example, myrole .
Grant the AWS IAM user permissions to access the Amazon S3 bucket, and create an external stage
with the CREATE STAGE command:
USE SCHEMA mydb.public ;
create or replace stage STAGE_NAME
url = ' BUCKET_NAME '
storage_integration = INTEGRATION_NAME t
file_format = NAMED_FILE_FORMAT ;
Replace the following:
STAGE_NAME : a name for the Cloud Storage stage object.
For example, my_ext_unload_stage
Export Snowflake data
After you have prepared your data, you can move your data to Google Cloud.
Use the COPY INTO command to copy data from the Snowflake database table into a Cloud Storage or Amazon S3 bucket by specifying the external stage object, STAGE_NAME .
copy into @ STAGE_NAME /d1
from TABLE_NAME ;
Replace TABLE_NAME with the name of your Snowflake database table.
As a result of this command, the table data is copied to the stage object, which is linked to the Cloud Storage or Amazon S3 bucket. The file includes the d1 prefix.
Other export methods
To use Azure Blob Storage for your data exports, follow the steps detailed in
Unloading into Microsoft Azure .
Then, transfer the exported files into Cloud Storage using
Storage Transfer Service .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
