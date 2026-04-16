---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:48.473Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Data exploration workbench (Explore)"
feature_slug: "data-exploration-workbench-explore"
latest_feature_date: "2022-10-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/support/getting-support"
  - "https://docs.cloud.google.com/dataplex/docs/develop-custom-connector"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1"
  - "https://docs.cloud.google.com/dataplex/docs/fully-qualified-names"
keywords:
  - "exploration"
  - "workbench"
  - "explore"
  - "provides"
  - "fully"
  - "managed"
  - "serverless"
  - "environment"
---

# Data exploration workbench (Explore)

Product: Dataplex
Coverage: MEDIUM

## Step 02 Summary

Data exploration workbench provides a fully managed, serverless environment for governed collaboration, scheduling, and interactive querying with Spark SQL and Jupyter notebooks; Data exploration workbench provides a fully managed, serverless environment for querying data with Spark SQL and Jupyter notebooks.

## Extended Definition

Data exploration workbench provides a fully managed, serverless environment for governed collaboration, scheduling, and interactive querying with Spark SQL and Jupyter notebooks; Data exploration workbench provides a fully managed, serverless environment for querying data with Spark SQL and Jupyter notebooks.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/support/getting-support](https://docs.cloud.google.com/dataplex/docs/support/getting-support)
- [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
- [https://docs.cloud.google.com/dataplex/docs/fully-qualified-names](https://docs.cloud.google.com/dataplex/docs/fully-qualified-names)

## Supporting Pages

### Customer Care | Google Cloud

- URL: [https://docs.cloud.google.com/dataplex/docs/support/getting-support](https://docs.cloud.google.com/dataplex/docs/support/getting-support)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- See all security and identity products Serverless Cloud Run Fully managed environment for running containerized apps.
- Go Serverless Fully managed environment for developing, deploying and scaling apps.
- Data Analytics Generate instant insights from data at any scale with a serverless, fully managed analytics platform that significantly simplifies analytics.
- Cloud Run Fully managed environment for running containerized apps.

### "Develop a custom connector for metadata import \_|\_ Knowledge Catalog \_\

- URL: [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector)
- Source ID: `site-docs-root-2`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Managed Service for Apache Spark provides a serverless Spark execution environment.
- In a production environment, you run the connector as part of a managed connectivity pipeline, by using an orchestration platform like Workflows.
- Update the src/entry builder.py file with shared methods for applying Spark transformations. """Creates entries with PySpark.""" import pyspark.sql.functions as F from pyspark.sql.types import StringType from src.constants import EntryType , SOURCE TYPE from src import name builder as nb @F . udf ( returnType = StringType ()) def choose metadata type udf ( data type : str ): """Choose the metadata type based on Oracle native type.""" if data type . startswith ( "NUMBER" ) or data type in [ "FLOAT" , "LONG" ]: return "NUMBER" if data type . startswith ( "VARCHAR" ) or data type . startswith ( "NVARCHAR2" ): return "STRING" if data type == "DATE" : return "DATETIME" return "OTHER" def create entry source ( column ): """Create Entry Source segment.""" return F . named struct ( F . lit ( "display name" ), column , F . lit ( "system" ), F . lit ( SOURCE TYPE )) def create entry aspect ( entry aspect name ): """Create aspect with general information (usually it is empty).""" return F . create map ( F . lit ( entry aspect name ), F . named struct ( F . lit ( "aspect type" ), F . lit ( entry aspect name ), F . lit ( "data" ), F . create map () ) ) def convert to import items ( df , aspect keys ): """Convert entries to import items.""" entry columns = [ "name" , "fully qualified name" , "parent entry" , "entry source" , "aspects" , "entry type" ] Puts entry to "entry" key, a list of keys from aspects in "aspects keys" and "aspects" string in "update mask" return df . withColumn ( "entry" , F . struct ( entry columns )) \ . withColumn ( "aspect keys" , F . array ([ F . lit ( key ) for key in aspect keys ])) \ . withColumn ( "update mask" , F . array ( F . lit ( "aspects" ))) \ . drop ( entry columns ) def build schemas ( config , df raw schemas ): """Create a dataframe with database schemas from the list of usernames.
- Fields are becoming a part of a schema struct There is also an entry aspect that is repeats entry type as aspect type entry aspect name = nb . create entry aspect name ( config , entry type ) df = df . withColumn ( "schema" , F . create map ( F . lit ( schema key ), F . named struct ( F . lit ( "aspect type" ), F . lit ( schema key ), F . lit ( "data" ), F . create map ( F . lit ( "fields" ), F . col ( "fields" ))) ) ) \ . withColumn ( "entry aspect" , create entry aspect ( entry aspect name )) \ . drop ( "fields" ) Merge separate aspect columns into the one map called 'aspects' df = df . select ( F . col ( "TABLE NAME" ), F . map concat ( "schema" , "entry aspect" ) . alias ( "aspects" )) Define user-defined functions to fill the general information and hierarchy names create name udf = F . udf ( lambda x : nb . create name ( config , entry type , db schema , x ), StringType ()) create fqn udf = F . udf ( lambda x : nb . create fqn ( config , entry type , db schema , x ), StringType ()) parent name = nb . create parent name ( config , entry type , db schema ) full entry type = entry type . value . format ( project = config [ "target project id" ], location = config [ "target location id" ]) Fill the top-level fields column = F . col ( "TABLE NAME" ) df = df . withColumn ( "name" , create name udf ( column )) \ . withColumn ( "fully qualified name" , create fqn udf ( column )) \ . withColumn ( "entry type" , F . lit ( full entry type )) \ . withColumn ( "parent entry" , F . lit ( parent name )) \ . withColumn ( "entry source" , create entry source ( column )) \ . drop ( column ) df = convert to import items ( df , [ schema key , entry aspect name ]) return df Note the following: The methods build the metadata resources that the connector creates for your Oracle resources.

### "Package com.google.cloud.dataplex.v1 (1.86.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
- Source ID: `site-java-reference`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Cmek Service Client Service Description: Dataplex Universal Catalog Customer Managed Encryption Keys (CMEK) Service This class provides the ability to make remote calls to the backing service through method calls that map to API methods.
- This class provides the ability to make remote calls to the backing service through method Settings Classes Settings classes can be used to configure credentials, endpoints, and retry settings for a Client.
- Encryption Config A Resource designed to manage encryption configurations for customers to support Customer Managed Encryption Keys (CMEK). com. google. cloud. dataplex. v1.
- Builder A Resource designed to manage encryption configurations for customers to support Customer Managed Encryption Keys (CMEK). com. google. cloud. dataplex. v1.

### Fully qualified names \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/fully-qualified-names](https://docs.cloud.google.com/dataplex/docs/fully-qualified-names)
- Source ID: `site-api-reference`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Apache Cassandra Resource Format Cluster cassandra:{dns} Keyspace cassandra:{dns}.{keyspaceId} Table cassandra:{dns}.{keyspaceId}.{tableId} Apache Hive Resource Format Instance hive metastore:{dns} Database hive metastore:{dns}.{database} Table hive metastore:{dns}.{database}.{table} Apache Kafka Resource Format Cluster kafka:{dns} Topic kafka:{dns}.{topicId} AWS Athena Resource Format Catalog athena:{catalogId}.{region} Database athena:{catalogId}.{region}.{databaseId} Table athena:{catalogId}.{region}.{databaseId}.{tableId} AWS Redshift Resource Format Instance redshift:{clusterId}.{region}.{port} Database redshift:{clusterId}.{region}.{port}.{databaseId} Schema redshift:{clusterId}.{region}.{port}.{databaseId}.{schemaId} Table redshift:{clusterId}.{region}.{port}.{databaseId}.{schemaId}.{tableId} AWS S3 Resource Format Bucket s3:{bucket} Path s3:{bucket}.{virtualPath} AWS Glue Resource Format Table aws glue:table:{region}.{accountId}.{dbName}.{tableName} Azure Blob Storage Resource Format Account abs:{account} Container abs:{account}.{container} Path abs:{account}.{container}.{virtualPath} Azure Cosmos DB Resource Format Account cosmos-db:{accountName} Database cosmos-db:{accountName}.{databaseId} Container cosmos-db:{accountName}.{databaseId}.{containerId} Azure Data Explorer Resource Format Cluster kusto:{clusterName}.{region} Database kusto:{clusterName}.{region}.{databaseId} Table kusto:{clusterName}.{region}.{databaseId}.{tableId} Databricks Resource Format Metastore databricks:{metastoreId} Catalog databricks:{metastoreId}.{catalogId} Schema databricks:{metastoreId}.{catalogId}.{schemaId} Table databricks:table:{metastoreId}.{catalogId}.{schemaId}.{tableId} View databricks:view:{metastoreId}.{catalogId}.{schemaId}.{viewId} Routine databricks:routine:{metastoreId}.{catalogId}.{schemaId}.{routineId} Volume databricks:volume:{metastoreId}.{catalogId}.{schemaId}.{volumeId} Model databricks:model:{metastoreId}.{catalogId}.{schemaId}.{modelId} Databricks File System Resource Format Instance dbfs:{workspace} Path dbfs:{workspace}.{path} Generic File System Resource Format Instance filesystem:{dns} Path filesystem:{dns}.{path} Hadoop Distributed File System Resource Format Instance hdfs:{dns} Path hdfs:{dns}.{path} IBM DB2 Resource Format Instance db2:{dns} Database db2:{dns}.{databaseId} Schema db2:{dns}.{databaseId}.{schemaId} Table db2:{dns}.{databaseId}.{schemaId}.{tableId} IBM Informix Resource Format Instance informix:{dns} Database informix:{dns}.{databaseId} Schema informix:{dns}.{databaseId}.{schemaId} Table informix:{dns}.{databaseId}.{schemaId}.{tableId} Microsoft SQL Server Resource Format Instance sqlserver:{dns} Database sqlserver:{dns}.{databaseId} Schema sqlserver:{dns}.{databaseId}.{schemaId} Table sqlserver:{dns}.{databaseId}.{schemaId}.{tableId} MySQL Resource Format Instance mysql:{dns} Schema mysql:{dns}.{schemaId} Table mysql:{dns}.{schemaId}.{tableId} Oracle Database Resource Format Instance oracle:{dns} Database oracle:{dns}.{databaseId} Schema oracle:{dns}.{databaseId}.{schemaId} Table oracle:{dns}.{databaseId}.{schemaId}.{tableId} PostgreSQL Resource Format Instance postgresql:{dns} Database postgresql:{dns}.{databaseId} Schema postgresql:{dns}.{databaseId}.{schemaId} Table postgresql:{dns}.{databaseId}.{schemaId}.{tableId} Salesforce Resource Format SObject salesforce:{environment}.{orgId}.{sobject} Snowflake Resource Format Account snowflake:{accountName} Database snowflake:{accountName}.{databaseId} Schema snowflake:{accountName}.{databaseId}.{schemaId} Table snowflake:{accountName}.{databaseId}.{schemaId}.{tableId} Tableau Resource Format Server tableau:{dns} Site tableau:{dns}.{site} Project tableau:project:{dns}.{site}.{projectId} Data source tableau:datasource:{dns}.{site}.{projectId}.{datasourceId} Workbook tableau:workbook:{dns}.{site}.{projectId}.{workbookId} Sheet tableau:sheet:{dns}.{site}.{projectId}.{workbookId}.{sheetId} Dashboard tableau:dashboard:{dns}.{site}.{projectId}.{workbookId}.{dashboardId} Trino Resource Format Instance trino:{dns} Catalog trino:{dns}.{catalogId} Schema trino:{dns}.{catalogId}.{schemaId} Table trino:{dns}.{catalogId}.{schemaId}.{tableId} Custom formats You can create a custom fully qualified name format by using the custom: prefix.
- Resource Format Lake dataplex:{projectId}.{location}.{lakeId} Zone dataplex:{projectId}.{location}.{lakeId}.{zoneId} Table dataplex:{projectId}.{location}.{lakeId}.{zoneId}.{tableId} Fileset dataplex:{projectId}.{location}.{lakeId}.{zoneId}.{filesetId} Dataproc Metastore Resource Format Service dataproc metastore:{projectId}.{location}.{instanceId} Database dataproc metastore:{projectId}.{location}.{instanceId}.{databaseId} Table dataproc metastore:{projectId}.{location}.{instanceId}.{databaseId}.{tableId} Looker Resource Format Instance looker:{instanceId} Dashboard looker:dashboard:{instanceId}.{folderId}.{dashboardId} Explore looker:explore:{instanceId}.{folderId}.{exploreId} Look looker:look:{instanceId}.{folderId}.{lookId} Pub/Sub Resource Format Topic pubsub:topic:{projectId}.{topicId} Subscription pubsub:subscription:{projectId}.{subscriptionId} Spanner Resource Format Instance spanner:{projectId}.{instanceConfigId}.{instanceId} Database spanner:{projectId}.{instanceConfigId}.{instanceId}.{databaseId} Table spanner:{projectId}.{instanceConfigId}.{instanceId}.{databaseId}.{tableId} View spanner:{projectId}.{instanceConfigId}.{instanceId}.{databaseId}.{viewId} Vertex AI Resource Format Model vertex ai:model:{projectId}.{locationId}.{modelId}.{version} Dataset vertex ai:dataset:{projectId}.{locationId}.{datasetId} FeatureGroup vertex ai:featuregroup:{projectId}.{locationId}.{featureGroupId} FeatureOnlineStore vertex ai:featureonlinestore:{projectId}.{locationId}.{featureOnlineStoreId} FeatureView vertex ai:featureonlinestore:{projectId}.{locationId}.{featureOnlineStoreId}.{FeatureViewId} Predefined formats for non-Google Cloud resources The following tables list the predefined formats for fully qualified names that are supported for third-party resources.
- Fully qualified names are globally unique, case-sensitive resource identifiers that you can use with Knowledge Catalog (formerly Dataplex Universal Catalog) to refer to Google Cloud and non-Google Cloud resources.
- If you catalog your non-Google Cloud resources in Knowledge Catalog, you can provide fully qualified names when you create the custom entries that represent those third-party resources.

