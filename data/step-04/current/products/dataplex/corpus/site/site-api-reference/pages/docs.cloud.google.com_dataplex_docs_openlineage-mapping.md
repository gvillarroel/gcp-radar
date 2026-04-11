---
title: "OpenLineage mapping \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataplex/docs/openlineage-mapping
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/openlineage-mapping
  title: "OpenLineage mapping \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

As of April 10, 2026, Dataplex Universal Catalog is now called Knowledge Catalog. The API, client library, CLI, and IAM names remain unchanged.
Home
Documentation
Data analytics
Knowledge Catalog
Reference
Send feedback
OpenLineage mapping
Stay organized with collections
Save and categorize content based on your preferences.
The Data Lineage API can ingest lineage information from systems that integrate with
OpenLineage , an open standard for lineage collection.
When you send OpenLineage-formatted events to the Data Lineage API using the
ProcessOpenLineageRunEvent
method, the Data Lineage API maps attributes from the OpenLineage message to corresponding
attributes in the Data Lineage API.
This document provides reference tables for these mappings.
Attribute mapping
The ProcessOpenLineageRunEvent
REST API method maps OpenLineage attributes to Data Lineage API attributes as
follows:
Data Lineage API attributes
OpenLineage attributes
Process .name
projects/ PROJECT_NUMBER /locations/ LOCATION /processes/ HASH_OF_NAMESPACE_AND_NAME
Process .displayName
Job.namespace + ":" + Job.name
Process .attributes
Job.facets (see Stored data )
Run .name
projects/ PROJECT_NUMBER /locations/ LOCATION /processes/ HASH_OF_NAMESPACE_AND_NAME /runs/ HASH_OF_RUNID
Run .displayName
Run.runId
Run .attributes
Run.facets (see Stored data )
Run .startTime
eventTime
Run .endTime
eventTime
Run .state
eventType
LineageEvent .name
projects/ PROJECT_NUMBER /locations/ LOCATION /processes/ HASH_OF_NAMESPACE_AND_NAME /runs/ HASH_OF_RUNID /lineageEvents/ HASH_OF_JOB_RUN_INPUT_OUTPUTS_OF_EVENT (for example, projects/11111111/locations/us/processes/1234/runs/4321/lineageEvents/111-222-333)
LineageEvent .EventLinks.source
inputs ( fqn is namespace and name concatenation)
LineageEvent .EventLinks.target
outputs ( fqn is namespace and name concatenation)
LineageEvent .startTime
eventTime
LineageEvent .endTime
eventTime
requestId
Defined by the method user
FQN mapping
The following table provides examples of OpenLineage namespace and name
pairs for various systems, and their equivalent Knowledge Catalog (formerly Dataplex Universal Catalog)
fully qualified names (FQN):
System
OpenLineage namespace
OpenLineage name
Knowledge Catalog FQN
Athena
awsathena://athena.{region_name}.amazonaws.com
{catalog}
{catalog}.{database}
{catalog}.{database}.{table}
athena:{catalogId}.{region}
athena:{catalogId}.{region}.{databaseId}
athena:{catalogId}.{region}.{databaseId}.{tableId}
AWS Glue
arn:aws:glue:{region}:{account id}
table/{database name}/{table name}
aws_glue:table:{region}.{account id}.{database name}.{table name}
Azure Cosmos DB
azurecosmos://{host}/dbs/{database}
colls/{table}
cosmos-db:{host}.{database}
cosmos-db:{host}.{database}.{table}
Azure Data Explorer
azurekusto://{host}.kusto.windows.net
{database}/{table}
kusto:{host}.{region}.{database}
kusto:{host}.{region}.{database}.{table}
Azure Synapse
sqlserver://{host}:{port}
{database}
{database}.{schema}
{database}.{schema}.{table}
Not supported
BigQuery
bigquery
{project id}.{dataset name}
{project id}.{dataset name}.{table name}
bigquery:{projectId}.{datasetId}
bigquery:{projectId}.{datasetId}.{assetId}
Cassandra
cassandra://{host}:{port}
{keyspace}
{keyspace}.{table}
cassandra:{hostWithPort}.{keyspaceId}
cassandra:{hostWithPort}.{keyspaceId}.{tableId}
MySQL
mysql://{host}:{port}
{database}
{database}.{table}
mysql:{hostWithPort}.{databaseId}
mysql:{hostWithPort}.{databaseId}.{tableId}
CrateDB
crate://{host}:{port}
{database}.{schema}.{table}
Not supported
DB2
db2://{host}:{port}
{database}
{database}.{schema}
{database}.{schema}.{table}
db2:{dns}.{databaseId}
db2:{dns}.{databaseId}.{schemaId}
db2:{dns}.{databaseId}.{schemaId}.{tableId}
Hive
hive://{host}:{port}
{database}.{table}
Not supported
MSSQL
mssql://{host}:{port}
{database}.{schema}.{table}
Not supported
OceanBase
oceanbase://{host}:{port}
{database}.{table}
Not supported
Oracle
oracle://{host}:{port}
{serviceName}.{schema}.{table} or {sid}.{schema}.{table}
oracle:{hostWithPort}.{databaseId}
oracle:{hostWithPort}.{databaseId}.{schemaId}
oracle:{hostWithPort}.{databaseId}.{schemaId}.{tableId}
Postgres
postgres://{host}:{port}
{database}
{database}.{schema}
{database}.{schema}.{table}
postgresql:{hostWithPort}.{databaseId}
postgresql:{hostWithPort}.{databaseId}.{schemaId}
postgresql:{hostWithPort}.{databaseId}.{schemaId}.{tableId}
Teradata
teradata://{host}:{port}
{database}.{table}
Not supported
Redshift
redshift://{cluster_identifier}.{region_name}:{port}
{database}
{database}.{schema}
{database}.{schema}.{table}
redshift:{clusterId}.{region}.{port}.{databaseId}
redshift:{clusterId}.{region}.{port}.{databaseId}.{schemaId}
redshift:{clusterId}.{region}.{port}.{databaseId}.{schemaId}.{tableId}
Snowflake
snowflake://{organization name}-{account name} or snowflake://{account-locator}(.{compliance})(.{cloud_region_id})(.{cloud})
{database}
{database}.{schema}
{database}.{schema}.{table}
snowflake:{accountName}.{databaseId}
snowflake:{accountName}.{databaseId}.{schemaId}
snowflake:{accountName}.{databaseId}.{schemaId}.{tableId}
Spanner
spanner://{projectId}:{instanceId}
{database}.{schema}.{table}
Supported in Knowledge Catalog, but not supported in Data lineage
Trino
trino://{host}:{port}
{catalog}
{catalog}.{schema}
{catalog}.{schema}.{table}
trino:{hostWithPort}.{catalogId}
trino:{hostWithPort}.{catalogId}.{schemaId}
trino:{hostWithPort}.{catalogId}.{schemaId}.{tableId}
ABFSS (Azure Data Lake Gen2)
abfss://{container name}@{service name}.dfs.core.windows.net
{path}
abs:{serviceName}.{containerName}
abs:{serviceName}.{containerName}.{path}
DBFS (Databricks File System)
dbfs://{workspace name}
{path}
dbfs:{workspace}
dbfs:{workspace}.{path}
Cloud Storage
gs://{bucket name}
{object key}
gcs:{bucketName}
gcs:{bucketName}.{virtualPath}
HDFS
hdfs://{namenode host}:{namenode port}
{path}
hdfs:{namenodeHostWithPort}
hdfs:{namenodeHostWithPort}.{path}
Kafka
kafka://{bootstrap server host}:{port}
{topic}
kafka:{serverHostWithPort}.{topicId}
Local file system
file
{path}
filesystem:localhost.{path}
Remote file system
file://{host}
{path}
filesystem:{hostWithPort}.{path}
S3
s3://{bucket name}
{object key}
s3:{bucketName}
s3:{bucketName}.{objectKey}
Namespace prefixes s3a and s3n are also accepted and converted to s3
WASBS (Azure Blob Storage)
wasbs://{container name}@{service name}.dfs.core.windows.net
{object key}
abs:{serviceName}.{containerName}
abs:{serviceName}.{containerName}.{objectKey}
Pub/Sub Topic
pubsub
topic:{projectId}:{topicId}
pubsub:topic:{projectId}.{topicId}
Pub/Sub Subscription
pubsub
subscription:{projectId}:{subscriptionId}
pubsub:subscription:{projectId}.{subscriptionId}
Additional accepted formats
While OpenLineage doesn't define standard namespace / name pairs for the
following systems, the Data Lineage API accepts lineage events for them when
formatted as described in the following table. Resources that are referenced in
OpenLineage messages with the namespace custom are interpreted as custom
fully qualified names.
System
OpenLineage namespace
OpenLineage name
Knowledge Catalog FQN
Custom FQN
custom
{some reference}
custom:{someReference}
Dataproc Metastore
dataproc_metastore
dataproc_metastore:{projectId}.{location}.{instanceId}
dataproc_metastore:{projectId}.{location}.{instanceId}.{databaseId}
dataproc_metastore:{projectId}.{location}.{instanceId}.{databaseId}.{tableId}
dataproc_metastore:{projectId}.{location}.{instanceId}
dataproc_metastore:{projectId}.{location}.{instanceId}.{databaseId}
dataproc_metastore:{projectId}.{location}.{instanceId}.{databaseId}.{tableId}
What's next
Learn how to integrate with OpenLineage .
See the reference for fully qualified names .
Explore the Data Lineage API .
Learn how to view lineage information .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
