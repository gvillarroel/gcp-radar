---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:07:05.500Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc Agent high availability mode"
feature_slug: "dataproc-agent-high-availability-mode"
latest_feature_date: "2023-02-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg"
keywords:
  - "dataproc"
  - "agent"
  - "high"
  - "availability"
  - "mode"
  - "can"
  - "enabled"
  - "ha"
---

# Dataproc Agent high availability mode

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc Agent high availability mode can be enabled with the dataproc:agent.ha.enabled property on image versions 2.0 and later.

## Extended Definition

Dataproc Agent high availability mode can be enabled with the dataproc:agent.ha.enabled property on image versions 2.0 and later.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)
- [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)
- [https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg](https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg)

## Supporting Pages

### "InstanceGroupConfig \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)
- Source ID: `site-docs-reference`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- Hyperdisk Balanced High Availability is not supported because that's for cross-zone usages, which is not supported in Dataproc.
- Dataproc will first try to create a VM based on the machine-type with priority rank and fallback to next rank based on availability.
- ProvisioningModelMix Defines how Dataproc should create VMs with a mixture of provisioning models.
- This will include instance creation, agent registration, and service registration (if enabled).

### Disaster recovery for Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)
- Source ID: `site-docs-root-2`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- This tutorial is designed for Google Cloud customers who require high availability for their Hive data and metadata.
- In Cloud Shell, export the metadata from the DPMS instance: gcloud metastore services export gcs $ { DPMS PRIMARY INSTANCE } \ -- location =$ { DPMS PRIMARY REGION } \ -- destination - folder = gs : //$ { BACKUP BUCKET } Retrieve the path of the latest metadata backup: IMPORT DIR=gcloud storage ls gs:// ${ BACKUP BUCKET } sort -k 1 tail -1 IMPORT SQL=" ${ IMPORT DIR } hive.sql" echo ${ IMPORT SQL } Import the metadata into the standby DPMS instance in the original region (region A): gcloud metastore services import gcs $ { DPMS STANDBY INSTANCE } \ -- location = $ { DPMS STANDBY REGION } \ -- dump - type = mysql \ -- database - dump = $ { IMPORT SQL } \ -- import - id = import - $ ( date + "%Y-%m- %d -%H-%M-%S" ) Verify that the metadata was correctly imported: gcloud dataproc jobs submit hive \ --cluster ${ HADOOP STANDBY } \ --region ${ DPMS STANDBY REGION } \ --execute "select from completed orders limit 5;" The output includes the following: +----------------------------+------------------------------+-------------------------------------+--------------------------------+ completed orders.order id completed orders.order date completed orders.order customer id completed orders.order status +----------------------------+------------------------------+-------------------------------------+--------------------------------+ 3 2013-07-25 00:00:00.0 12111 COMPLETE 5 2013-07-25 00:00:00.0 11318 COMPLETE 6 2013-07-25 00:00:00.0 7130 COMPLETE 7 2013-07-25 00:00:00.0 4530 COMPLETE 15 2013-07-25 00:00:00.0 2568 COMPLETE +----------------------------+------------------------------+-------------------------------------+--------------------------------+ The primary Managed Service for Apache Spark Metastore and standby Managed Service for Apache Spark Metastore have swapped roles again.
- Populate the metastore In Cloud Shell, update the sample retail.hql provided in this tutorial's repository with the name of the Hive data bucket: sed -i -- 's/ ${ WAREHOUSE BUCKET } /'" $WAREHOUSE BUCKET "'/g' retail.hql Run the queries contained in the retail.hql file to create the table definitions in the metastore: gcloud dataproc jobs submit hive \ --cluster= ${ HADOOP PRIMARY } \ --region= ${ DPMS PRIMARY REGION } \ --file=retail.hql Verify that the table definitions were correctly created: gcloud dataproc jobs submit hive \ --cluster= ${ HADOOP PRIMARY } \ --region= ${ DPMS PRIMARY REGION } \ --execute=" desc departments; desc categories; desc products; desc order items; desc orders; desc customers; select count( ) as num departments from departments; select count( ) as num categories from categories; select count( ) as num products from products; select count( ) as num order items from order items; select count( ) as num orders from orders; select count( ) as num customers from customers; " The output resembles the following: +------------------+------------+----------+ col name data type comment +------------------+------------+----------+ department id int department name string +------------------+------------+----------+ The output also contains the number of elements in each table—for example: +----------------+ num customers +----------------+ 12435 +----------------+ Failing over to the standby region This section provides the steps to failover from the primary region (region A) to the standby region (region B).
- Update the environment variables based on these new roles: export DPMS PRIMARY REGION = us - east1 export DPMS STANDBY REGION = us - central1 ] export DPMS PRIMARY INSTANCE = dpms2 export DPMS STANDBY INSTANCE = dpms1 export HADOOP PRIMARY = dataproc - cluster2 export HADOOP STANDBY = dataproc - cluster1 Verify that you can write to the new primary Managed Service for Apache Spark Metastore in region B: gcloud dataproc jobs submit hive \ --cluster ${ DPMS PRIMARY INSTANCE } \ --region ${ DPMS PRIMARY REGION } \ --execute "create view completed orders as select from orders where order status = 'COMPLETE';" gcloud dataproc jobs submit hive \ --cluster ${ HADOOP PRIMARY } \ --region ${ DPMS PRIMARY REGION } \ --execute "select from completed orders limit 5;" The output contains the following: +----------------------------+------------------------------+-------------------------------------+--------------------------------+ completed orders.order id completed orders.order date completed orders.order customer id completed orders.order status +----------------------------+------------------------------+-------------------------------------+--------------------------------+ 3 2013-07-25 00:00:00.0 12111 COMPLETE 5 2013-07-25 00:00:00.0 11318 COMPLETE 6 2013-07-25 00:00:00.0 7130 COMPLETE 7 2013-07-25 00:00:00.0 4530 COMPLETE 15 2013-07-25 00:00:00.0 2568 COMPLETE +----------------------------+------------------------------+-------------------------------------+--------------------------------+ The failover is now complete.

### Use Apache Iceberg tables with Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg](https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg)
- Source ID: `site-docs-root-2`
- Final score: 67
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a table called example under default database: val catalog = new HiveCatalog(); catalog.setConf(spark.sparkContext.hadoopConfiguration); catalog.initialize("hive", new HashMapString,String); val name = TableIdentifier.of("default","example"); Insert sample data: val df1 = Seq((1,"Vincent","Computer Science"),(2,"Dan", "Economics"),(3,"Bob", "Politics"),(4,"Cindy", "UX Design")).toDF("id","name","major"); val df1 schema = SparkSchemaUtil.convert(df1.schema); Specify partition strategy based on column id : val partition spec=PartitionSpec.builderFor(df1 schema).identity("id").build; Create the table: val table=catalog.createTable(name,df1 schema,partition spec); Add the Iceberg Storage Handler and SerDe as the table property: table.updateProperties().set("engine.hive.enabled", "true").commit(); Write the data to the table: df1.write.format("iceberg").mode("overwrite").save("default.example"); Read the data: val read df1 = spark . read . format ( "iceberg" ) . load ( "default.example" ); read df1 . show ; Change the table schema.
- Add new data to the table: val df2=Seq((5,"Amy","UX Design","Sophomore")).toDF("id","name","major","grade"); df2.write.format("iceberg").mode("append").save(table location); val df3=Seq((6,"Rachael","Economics","Freshman")).toDF("id","name","major","grade"); df3.write.format("iceberg").mode("append").save(table location); Check the inserted new data: val read df2 = spark . read . format ( "iceberg" ) . load ( table location ); read df2 . show ; View the table history: spark . read . format ( "iceberg" ) . load ( "gs://<gcs-bucket-name>/hive-warehouse/<database-name>#history" ) . show ( truncate = false ); View the snapshots: spark . read . format ( "iceberg" ) . load ( "gs://<gcs-bucket-name>/hive-warehouse/<database-name>#snapshots" ) . show ( truncate = false ); View the manifest files: spark . read . format ( "iceberg" ) . load ( "gs://<gcs-bucket-name>/hive-warehouse/<database-name>#manifests" ) . show ( truncate = false ); View the data files: spark . read . format ( "iceberg" ) . load ( "gs://<gcs-bucket-name>/hive-warehouse/<database-name>#files" ) . show ( truncate = false ); Go back to see a specific version of the table: spark . read . format ( "iceberg" ) . option ( "snapshot-id" , "3943776515926014142L" ) . format ( "iceberg" ) . load ( table location ) . show ; Replace snapshot-id with the version you want to go back to and add "L" to the end.
- Add new data to the table: val df2=Seq((5,"Amy","UX Design","Sophomore")).toDF("id","name","major","grade"); df2.write.format("iceberg").mode("append").save("default.example"); val df3=Seq((6,"Rachael","Economics","Freshman")).toDF("id","name","major","grade"); df3.write.format("iceberg").mode("append").save("default.example"); Check the inserted new data: val read df2 = spark . read . format ( "iceberg" ) . load ( "default.example" ); read df2 . show ; View the table history: spark . read . format ( "iceberg" ) . load ( "default.example.history" ) . show ( truncate = false ); View the snapshots: spark . read . format ( "iceberg" ) . load ( "default.example.snapshots" ) . show ( truncate = false ); View the manifest files: spark . read . format ( "iceberg" ) . load ( "default.example.manifests" ) . show ( truncate = false ); View the data files: spark . read . format ( "iceberg" ) . load ( "default.example.files" ) . show ( truncate = false ); Assume you made a mistake by adding the row with the value of id=6 and want to go back to see a correct version of the table: spark . read . format ( "iceberg" ) . option ( "snapshot-id" , "2273922295095144317" ) . load ( "default.example" ) . show (); Replace snapshot-id with the version you want to go back to.
- Create a table called example under default database: val conf = new Configuration(); val tables = new HadoopTables(conf); Insert sample data: val df1 = Seq((1,"Vincent","Computer Science"),(2,"Dan", "Economics"),(3,"Bob", "Politics"),(4,"Cindy", "UX Design")).toDF("id","name","major"); val df1 schema = SparkSchemaUtil.convert(df1.schema); Specify partition strategy based on column id : val partition spec=PartitionSpec.builderFor(df1 schema).identity("id").build; Create the table: val table location = "gs://<gcs-bucket-name>/hive-warehouse/<database-name>" ; val table = tables . create ( df1 schema , partition spec , table location ); Write the data to the table: df1.write.format("iceberg").mode("overwrite").save(table location); Read the data: val read df1 = spark . read . format ( "iceberg" ) . load ( table location ); read df1 . show ; Change the table schema.

