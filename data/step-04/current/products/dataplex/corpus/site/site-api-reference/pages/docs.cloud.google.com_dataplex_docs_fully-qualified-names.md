---
title: "Fully qualified names \_|\_ Dataplex Universal Catalog \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/dataplex/docs/fully-qualified-names
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/fully-qualified-names
  title: "Fully qualified names \_|\_ Dataplex Universal Catalog \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataplex Universal Catalog
Reference
Send feedback
Fully qualified names
Stay organized with collections
Save and categorize content based on your preferences.
Fully qualified names are globally unique, case-sensitive resource identifiers
that you can use with Dataplex Universal Catalog to refer to Google Cloud
and non-Google Cloud resources.
For example, fully qualified names are used for systems that support the
automatic ingestion
of metadata from Google Cloud. If you
catalog your non-Google Cloud resources
in Dataplex Universal Catalog, you can provide fully qualified names when you
create the custom entries that represent those third-party resources.
Fully qualified names are composed of a prefix followed by
segments delimited with dots. The maximum length is 4,000 characters.
Surround segments that contain reserved characters, such as colons, dots,
and whitespace, with backticks. Use double backticks to specify a
backtick within a segment.
Predefined formats for Google Cloud resources
The following tables list the predefined formats for fully qualified names that
are supported for Google Cloud resources.
BigQuery
Resource
Format
Dataset
bigquery:{projectId}.{datasetId}
Table
bigquery:{projectId}.{datasetId}.{tableId}
View
bigquery:{projectId}.{datasetId}.{viewId}
Model
bigquery:{projectId}.{datasetId}.{modelId}
Sharded table
bigquery:sharded:{projectId}.{datasetId}.{tablePrefix}
Routine
bigquery:routine:{projectId}.{datasetId}.{routineId}
Connection
bigquery:connection:{projectId}.{location}.{connectionId}
BigQuery sharing (formerly Analytics Hub)
Resource
Format
Exchange
analytics_hub:{projectId}.{location}.{exchangeId}
Listing
analytics_hub:{projectId}.{location}.{exchangeId}.{listingId}
Bigtable
Resource
Format
Instance
bigtable:{projectId}.{instanceId}
Table
bigtable:{projectId}.{instanceId}.{tableId}
Cloud SQL for MySQL
Resource
Format
Instance
cloudsql_mysql:{projectId}.{location}.{instanceId}
Schema
cloudsql_mysql:{projectId}.{location}.{instanceId}.{schemaId}
Table
cloudsql_mysql:{projectId}.{location}.{instanceId}.{schemaId}.{tableId}
Cloud SQL for PostgreSQL
Resource
Format
Instance
cloudsql_postgresql:{projectId}.{location}.{instanceId}
Database
cloudsql_postgresql:{projectId}.{location}.{instanceId}.{databaseId}
Schema
cloudsql_postgresql:{projectId}.{location}.{instanceId}.{databaseId}.{schemaId}
Table
cloudsql_postgresql:{projectId}.{location}.{instanceId}.{databaseId}.{schemaId}.{tableId}
Cloud Storage
Resource
Format
Bucket
gcs:{bucketName}
Path
gcs:{bucketName}.{virtualPath}
Dataplex Universal Catalog
Caution: The ingestion of Dataplex Universal Catalog entities under lakes and zones into
Data Catalog (including those
created as the output of Dataplex Universal Catalog Discovery) is
deprecated and will stop functioning by
September 30, 2025. External tables in BigQuery that are
published by Discovery will be ingested into
Dataplex Universal Catalog as entries.
Resource
Format
Lake
dataplex:{projectId}.{location}.{lakeId}
Zone
dataplex:{projectId}.{location}.{lakeId}.{zoneId}
Table
dataplex:{projectId}.{location}.{lakeId}.{zoneId}.{tableId}
Fileset
dataplex:{projectId}.{location}.{lakeId}.{zoneId}.{filesetId}
Dataproc Metastore
Resource
Format
Service
dataproc_metastore:{projectId}.{location}.{instanceId}
Database
dataproc_metastore:{projectId}.{location}.{instanceId}.{databaseId}
Table
dataproc_metastore:{projectId}.{location}.{instanceId}.{databaseId}.{tableId}
Looker
Resource
Format
Instance
looker:{instanceId}
Dashboard
looker:dashboard:{instanceId}.{folderId}.{dashboardId}
Explore
looker:explore:{instanceId}.{folderId}.{exploreId}
Look
looker:look:{instanceId}.{folderId}.{lookId}
Pub/Sub
Resource
Format
Topic
pubsub:topic:{projectId}.{topicId}
Subscription
pubsub:subscription:{projectId}.{subscriptionId}
Spanner
Resource
Format
Instance
spanner:{projectId}.{instanceConfigId}.{instanceId}
Database
spanner:{projectId}.{instanceConfigId}.{instanceId}.{databaseId}
Table
spanner:{projectId}.{instanceConfigId}.{instanceId}.{databaseId}.{tableId}
View
spanner:{projectId}.{instanceConfigId}.{instanceId}.{databaseId}.{viewId}
Vertex AI
Resource
Format
Model
vertex_ai:model:{projectId}.{locationId}.{modelId}.{version}
Dataset
vertex_ai:dataset:{projectId}.{locationId}.{datasetId}
FeatureGroup
vertex_ai:featuregroup:{projectId}.{locationId}.{featureGroupId}
FeatureOnlineStore
vertex_ai:featureonlinestore:{projectId}.{locationId}.{featureOnlineStoreId}
FeatureView
vertex_ai:featureonlinestore:{projectId}.{locationId}.{featureOnlineStoreId}.{FeatureViewId}
Predefined formats for non-Google Cloud resources
The following tables list the predefined formats for fully qualified names that
are supported for third-party resources.
Apache Cassandra
Resource
Format
Cluster
cassandra:{dns}
Keyspace
cassandra:{dns}.{keyspaceId}
Table
cassandra:{dns}.{keyspaceId}.{tableId}
Apache Hive
Resource
Format
Instance
hive_metastore:{dns}
Database
hive_metastore:{dns}.{database}
Table
hive_metastore:{dns}.{database}.{table}
Apache Kafka
Resource
Format
Cluster
kafka:{dns}
Topic
kafka:{dns}.{topicId}
AWS Athena
Resource
Format
Catalog
athena:{catalogId}.{region}
Database
athena:{catalogId}.{region}.{databaseId}
Table
athena:{catalogId}.{region}.{databaseId}.{tableId}
AWS Redshift
Resource
Format
Instance
redshift:{clusterId}.{region}.{port}
Database
redshift:{clusterId}.{region}.{port}.{databaseId}
Schema
redshift:{clusterId}.{region}.{port}.{databaseId}.{schemaId}
Table
redshift:{clusterId}.{region}.{port}.{databaseId}.{schemaId}.{tableId}
AWS S3
Resource
Format
Bucket
s3:{bucket}
Path
s3:{bucket}.{virtualPath}
AWS Glue
Resource
Format
Table
aws_glue:table:{region}.{accountId}.{dbName}.{tableName}
Azure Blob Storage
Resource
Format
Account
abs:{account}
Container
abs:{account}.{container}
Path
abs:{account}.{container}.{virtualPath}
Azure Cosmos DB
Resource
Format
Account
cosmos-db:{accountName}
Database
cosmos-db:{accountName}.{databaseId}
Container
cosmos-db:{accountName}.{databaseId}.{containerId}
Azure Data Explorer
Resource
Format
Cluster
kusto:{clusterName}.{region}
Database
kusto:{clusterName}.{region}.{databaseId}
Table
kusto:{clusterName}.{region}.{databaseId}.{tableId}
Databricks
Resource
Format
Metastore
databricks:{metastoreId}
Catalog
databricks:{metastoreId}.{catalogId}
Schema
databricks:{metastoreId}.{catalogId}.{schemaId}
Table
databricks:table:{metastoreId}.{catalogId}.{schemaId}.{tableId}
View
databricks:view:{metastoreId}.{catalogId}.{schemaId}.{viewId}
Routine
databricks:routine:{metastoreId}.{catalogId}.{schemaId}.{routineId}
Volume
databricks:volume:{metastoreId}.{catalogId}.{schemaId}.{volumeId}
Model
databricks:model:{metastoreId}.{catalogId}.{schemaId}.{modelId}
Databricks File System
Resource
Format
Instance
dbfs:{workspace}
Path
dbfs:{workspace}.{path}
Generic File System
Resource
Format
Instance
filesystem:{dns}
Path
filesystem:{dns}.{path}
Hadoop Distributed File System
Resource
Format
Instance
hdfs:{dns}
Path
hdfs:{dns}.{path}
IBM DB2
Resource
Format
Instance
db2:{dns}
Database
db2:{dns}.{databaseId}
Schema
db2:{dns}.{databaseId}.{schemaId}
Table
db2:{dns}.{databaseId}.{schemaId}.{tableId}
IBM Informix
Resource
Format
Instance
informix:{dns}
Database
informix:{dns}.{databaseId}
Schema
informix:{dns}.{databaseId}.{schemaId}
Table
informix:{dns}.{databaseId}.{schemaId}.{tableId}
Microsoft SQL Server
Resource
Format
Instance
sqlserver:{dns}
Database
sqlserver:{dns}.{databaseId}
Schema
sqlserver:{dns}.{databaseId}.{schemaId}
Table
sqlserver:{dns}.{databaseId}.{schemaId}.{tableId}
MySQL
Resource
Format
Instance
mysql:{dns}
Schema
mysql:{dns}.{schemaId}
Table
mysql:{dns}.{schemaId}.{tableId}
Oracle Database
Resource
Format
Instance
oracle:{dns}
Database
oracle:{dns}.{databaseId}
Schema
oracle:{dns}.{databaseId}.{schemaId}
Table
oracle:{dns}.{databaseId}.{schemaId}.{tableId}
PostgreSQL
Resource
Format
Instance
postgresql:{dns}
Database
postgresql:{dns}.{databaseId}
Schema
postgresql:{dns}.{databaseId}.{schemaId}
Table
postgresql:{dns}.{databaseId}.{schemaId}.{tableId}
Salesforce
Resource
Format
SObject
salesforce:{environment}.{orgId}.{sobject}
Snowflake
Resource
Format
Account
snowflake:{accountName}
Database
snowflake:{accountName}.{databaseId}
Schema
snowflake:{accountName}.{databaseId}.{schemaId}
Table
snowflake:{accountName}.{databaseId}.{schemaId}.{tableId}
Tableau
Resource
Format
Server
tableau:{dns}
Site
tableau:{dns}.{site}
Project
tableau:project:{dns}.{site}.{projectId}
Data source
tableau:datasource:{dns}.{site}.{projectId}.{datasourceId}
Workbook
tableau:workbook:{dns}.{site}.{projectId}.{workbookId}
Sheet
tableau:sheet:{dns}.{site}.{projectId}.{workbookId}.{sheetId}
Dashboard
tableau:dashboard:{dns}.{site}.{projectId}.{workbookId}.{dashboardId}
Trino
Resource
Format
Instance
trino:{dns}
Catalog
trino:{dns}.{catalogId}
Schema
trino:{dns}.{catalogId}.{schemaId}
Table
trino:{dns}.{catalogId}.{schemaId}.{tableId}
Custom formats
You can create a custom fully qualified name format by using the custom:
prefix. Custom formats are not validated, and might not be compatible with
Dataplex Universal Catalog features. To ease future migration,
create custom formats that are similar to predefined formats.
Resources that are referenced in OpenLineage messages with the namespace custom are
interpreted as custom fully qualified names.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
