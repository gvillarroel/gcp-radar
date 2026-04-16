---
title: "Create and manage resources in BigLake metastore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/bqms-manage-resources
knowledge_key: corpus
source_id: site-docs-reference-5
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/bqms-manage-resources
  title: "Create and manage resources in BigLake metastore \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
BigLake
Guides
Send feedback
Create and manage resources in BigLake metastore
Stay organized with collections
Save and categorize content based on your preferences.
BigLake metastore is a single, shared metastore that enables data sharing across
data processing engines, eliminating the need to maintain separate metastores
for your open source workloads.
This document explains how to create, view, modify, and delete resources in
BigLake metastore.
Before you begin
Verify that billing is enabled for your Google Cloud project .
Enable the BigQuery, BigQuery Storage, and Managed Service for Apache Spark APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Required roles
To get the permissions that
you need to manage Iceberg resources in BigLake metastore,
ask your administrator to grant you the
following IAM roles on your project:
BigQuery Data Editor ( roles/bigquery.dataEditor )
Storage Object User ( roles/storage.objectUser )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Create metastore resources
The following sections describe how to create resources in BigLake metastore.
Create namespaces
Select one of the following options:
API
Use the
datasets.insert method ,
and specify the
ExternalCatalogDatasetOptions field
in the dataset resource that you
pass in.
{
"datasetReference": {
"projectId": " PROJECT_ID ",
"datasetId": " DATASET_ID "
},
"externalCatalogDatasetOptions": {
"defaultStorageLocationUri": " URI ",
"parameters": {
...
}
},
"location": " LOCATION "
}
Replace the following:
PROJECT_ID : the ID of the project that contains your
target dataset
DATASET_ID : the ID of your target dataset
URI : the
Cloud Storage URI for
all tables in the dataset
LOCATION : the
BigQuery location that you want
to create the dataset in
Spark SQL
CREATE NAMESPACE SPARK_CATALOG . NAMESPACE ;
Replace the following:
SPARK_CATALOG : the name of your
Spark catalog
NAMESPACE : the name of your new namespace
Terraform
provider "google" {
project = " PROJECT_ID "
}
resource "google_bigquery_dataset" "default" {
dataset_id = " DATASET_ID "
location = " LOCATION "
external_catalog_dataset_options {
default_storage_location_uri = " URI "
parameters = {
...
}
}
}
Replace the following:
PROJECT_ID : the ID of the project that contains your
target dataset
DATASET_ID : the ID of your target dataset
LOCATION : the
BigQuery location that you want
to create the dataset in
URI : the
Cloud Storage URI for
all tables in the dataset
Create Iceberg tables
Select one of the following options:
API
Use the
tables.insert method ,
and specify the
ExternalCatalogTableOptions field
in the table resource that you pass
in.
{
"tableReference" : {
"projectId" : " PROJECT_ID " ,
"datasetId" : " DATASET_ID " ,
"tableId" : " TABLE_ID "
},
"externalCatalogTableOptions" : {
"parameters" : {
"table_type" : "iceberg" ,
"metadata_location" : " METADATA_URI "
},
"connection_id" : " CONNECTION_ID "
}
}
Replace the following:
PROJECT_ID : the ID of the project that contains your
target table.
DATASET_ID : the ID of the dataset that contains your
target table.
TABLE_ID : the ID of your target table.
METADATA_URI : the
Cloud Storage URI for
the latest Iceberg metadata file. For example,
gs://mybucket/mytable/metadata/1234.metadata.json .
CONNECTION_ID : the ID of your connection to
Cloud Storage.
Spark SQL
CREATE TABLE SPARK_CATALOG . NAMESPACE . TABLE
( id bigint , data string ) USING iceberg ;
Replace the following:
SPARK_CATALOG : the name of your
Spark catalog
NAMESPACE : the name of your namespace
TABLE : the name of your new table
Terraform
resource "google_bigquery_table" "default" {
deletion_protection = false
dataset_id = google_bigquery_dataset.default.dataset_id
table_id = " TABLE "
external_catalog_table_options {
storage_descriptor {
location_uri = " STORAGE_URI "
input_format = "org.apache.hadoop.mapred.FileInputFormat"
output_format = "org.apache.hadoop.mapred.FileOutputFormat"
}
parameters = {
"table_type" = "iceberg"
"metadata_location" = " METADATA_URI "
"write.parquet.compression-codec" : "zstd"
"EXTERNAL" : "TRUE"
}
}
}
Replace the following:
TABLE : the name of the target table.
STORAGE_URI : the Cloud Storage URI where
the table data is stored, starting with gs:// .
METADATA_URI : the
Cloud Storage URI for
the latest Iceberg metadata file. For example,
gs://mybucket/mytable/metadata/1234.metadata.json .
View metastore resources
The following sections describe how to view resources in BigLake metastore.
View namespaces
Select one of the following options:
API
Use the
datasets.list method
to view all namespaces, or use the
datasets.get method
to view information about a defined namespace.
Spark SQL
To view all namespaces in a catalog, use the following statement:
SHOW { DATABASES | NAMESPACES } IN SPARK_CATALOG ;
Replace SPARK_CATALOG with the name of your
Spark catalog.
To view information about a defined namespace, use the following statement:
DESCRIBE { DATABASE | NAMESPACE } [ EXTENDED ]
SPARK_CATALOG . NAMESPACE ;
Replace the following:
SPARK_CATALOG : the name of your
Spark catalog
NAMESPACE : the name of your namespace
View tables
Select one of the following options:
API
Use the
tables.list method
to view all tables in a namespace, or use the
tables.get method
to view information about a defined table.
Spark SQL
To view all tables in a namespace, use the following statement:
SHOW TABLES IN SPARK_CATALOG . NAMESPACE ;
Replace the following:
SPARK_CATALOG : the name of your
Spark catalog
NAMESPACE : the name of your namespace
To view information about a defined table, use the following statement:
DESCRIBE TABLE [ EXTENDED ]
SPARK_CATALOG . NAMESPACE . TABLE ;
Replace the following:
SPARK_CATALOG : the name of your
Spark catalog
NAMESPACE : the name of your namespace
TABLE : the name of your table
Modify metastore resources
Caution: Modifying BigLake metastore resources using the BigQuery API
risks making changes that are incompatible with the external engine.
The following sections describe how to modify resources in BigLake metastore.
Update namespaces
Select one of the following options:
API
Use the
datasets.patch method ,
and update the
ExternalCatalogDatasetOptions field
in the dataset resource . The
datasets.update method is not recommended because it replaces the entire
dataset resource.
Spark SQL
Use the
ALTER DATABASE statement .
Update Iceberg tables
Select one of the following options:
API
Use the
tables.patch method ,
and update the
ExternalCatalogTableOptions field
in the table resource . The
tables.update method is not recommended because it replaces the entire
table resource.
To update the schema or metadata file, use the tables.patch method and set
the autodetect_schema property to true:
PATCH https://bigquery.googleapis.com/bigquery/v2/projects/ PROJECT_ID /datasets/ DATASET_ID /tables/ TABLE_ID ?autodetect_schema=true
Replace the following:
PROJECT_ID : the ID of the project that contains the
table that you want to update
DATASET_ID : the ID of the dataset that contains the
table that you want to update
TABLE_ID : the ID of the table that you want to
update
In the body of the request, specify the updated value for each field. For
example, to update the Iceberg table's
metadata location, specify the updated value for the metadata_location
field:
{
"externalCatalogTableOptions": {
"parameters": {"metadata_location": " METADATA_URI "}
},
"schema": null
}'
Replace METADATA_URI with the
Cloud Storage URI for
the latest Iceberg metadata file. For example,
gs://mybucket/mytable/metadata/1234.metadata.json .
Spark SQL
Use the
ALTER TABLE statement .
Delete metastore resources
The following sections describe how to delete resources in BigLake metastore.
Delete namespaces
Select one of the following options:
API
Use the
datasets.delete method .
Set the deleteContents parameter to true to delete the tables in your
namespace.
Spark SQL
DROP NAMESPACE SPARK_CATALOG . NAMESPACE ;
Replace the following:
SPARK_CATALOG : the name of your
Spark catalog
NAMESPACE : the name of your namespace
Delete tables
Select one of the following options:
API
Use the
tables.delete method and
specify the name of the table. This method doesn't delete the associated files
in Cloud Storage.
Spark SQL
To only drop the table, use the following statement:
DROP TABLE SPARK_CATALOG . NAMESPACE . TABLE ;
Replace the following:
SPARK_CATALOG : the name of your
Spark catalog
NAMESPACE : the name of your namespace
TABLE : the name of the table to drop
To drop the table and delete the associated files in Cloud Storage,
use the following statement:
DROP TABLE SPARK_CATALOG . NAMESPACE . TABLE PURGE ;
Replace the following:
SPARK_CATALOG : the name of your
Spark catalog
NAMESPACE : the name of your namespace
TABLE : the name of the table to delete
What's next
Learn about
additional BigLake metastore features .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
