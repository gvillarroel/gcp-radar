---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.033Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc Agent high availability mode"
feature_slug: "dataproc-agent-high-availability-mode"
latest_feature_date: "2023-02-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore"
keywords:
  - "dataproc"
  - "agent"
  - "high"
  - "availability"
  - "mode"
  - "can"
  - "be"
  - "enabled"
---

# Dataproc Agent high availability mode

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc Agent high availability mode can be enabled with the dataproc:agent.ha.enabled property on image versions 2.0 and later.

## Extended Definition

Dataproc Agent high availability mode can be enabled with the dataproc:agent.ha.enabled property on image versions 2.0 and later.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg](https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg)
- [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- March 02, 2023 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.5 2.0.13 2.1.0-RC1 Change Release Dataproc Serverless for Spark runtime 2.1 preview : Spark 3.4.0-rc1 BigQuery Spark Connector 0.28.0 Cloud Storage Connector 2.2.11 Conda 22.11 Java 17 Python 3.10 R 4.2 Scala 2.13 February 28, 2023 Feature --properties=dataproc:agent.ha.enabled=true can now be used to enable the Dataproc Agent in high availability mode.
- September 29, 2016 Feature Hadoop High Availability Mode [BETA] – Cloud Dataproc clusters can be created with high availability mode enabled.
- Cloud Dataproc clusters can be created with high availability mode enabled.
- Change Dataproc on Compute Engine : Properties dataproc:agent.ha.enabled and dataproc:componentgateway.ha.enabled now default to true to provide high availability for the Dataproc Agent and Component Gateway.

### Use Apache Iceberg tables with Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg](https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg)
- Source ID: `site-docs-root-2`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a table called example under default database: val catalog = new HiveCatalog(); catalog.setConf(spark.sparkContext.hadoopConfiguration); catalog.initialize("hive", new HashMapString,String); val name = TableIdentifier.of("default","example"); Insert sample data: val df1 = Seq((1,"Vincent","Computer Science"),(2,"Dan", "Economics"),(3,"Bob", "Politics"),(4,"Cindy", "UX Design")).toDF("id","name","major"); val df1 schema = SparkSchemaUtil.convert(df1.schema); Specify partition strategy based on column id : val partition spec=PartitionSpec.builderFor(df1 schema).identity("id").build; Create the table: val table=catalog.createTable(name,df1 schema,partition spec); Add the Iceberg Storage Handler and SerDe as the table property: table.updateProperties().set("engine.hive.enabled", "true").commit(); Write the data to the table: df1.write.format("iceberg").mode("overwrite").save("default.example"); Read the data: val read df1 = spark . read . format ( "iceberg" ) . load ( "default.example" ); read df1 . show ; Change the table schema.
- Add new data to the table: val df2=Seq((5,"Amy","UX Design","Sophomore")).toDF("id","name","major","grade"); df2.write.format("iceberg").mode("append").save(table location); val df3=Seq((6,"Rachael","Economics","Freshman")).toDF("id","name","major","grade"); df3.write.format("iceberg").mode("append").save(table location); Check the inserted new data: val read df2 = spark . read . format ( "iceberg" ) . load ( table location ); read df2 . show ; View the table history: spark . read . format ( "iceberg" ) . load ( "gs://<gcs-bucket-name>/hive-warehouse/<database-name>#history" ) . show ( truncate = false ); View the snapshots: spark . read . format ( "iceberg" ) . load ( "gs://<gcs-bucket-name>/hive-warehouse/<database-name>#snapshots" ) . show ( truncate = false ); View the manifest files: spark . read . format ( "iceberg" ) . load ( "gs://<gcs-bucket-name>/hive-warehouse/<database-name>#manifests" ) . show ( truncate = false ); View the data files: spark . read . format ( "iceberg" ) . load ( "gs://<gcs-bucket-name>/hive-warehouse/<database-name>#files" ) . show ( truncate = false ); Go back to see a specific version of the table: spark . read . format ( "iceberg" ) . option ( "snapshot-id" , "3943776515926014142L" ) . format ( "iceberg" ) . load ( table location ) . show ; Replace snapshot-id with the version you want to go back to and add "L" to the end.
- Add new data to the table: val df2=Seq((5,"Amy","UX Design","Sophomore")).toDF("id","name","major","grade"); df2.write.format("iceberg").mode("append").save("default.example"); val df3=Seq((6,"Rachael","Economics","Freshman")).toDF("id","name","major","grade"); df3.write.format("iceberg").mode("append").save("default.example"); Check the inserted new data: val read df2 = spark . read . format ( "iceberg" ) . load ( "default.example" ); read df2 . show ; View the table history: spark . read . format ( "iceberg" ) . load ( "default.example.history" ) . show ( truncate = false ); View the snapshots: spark . read . format ( "iceberg" ) . load ( "default.example.snapshots" ) . show ( truncate = false ); View the manifest files: spark . read . format ( "iceberg" ) . load ( "default.example.manifests" ) . show ( truncate = false ); View the data files: spark . read . format ( "iceberg" ) . load ( "default.example.files" ) . show ( truncate = false ); Assume you made a mistake by adding the row with the value of id=6 and want to go back to see a correct version of the table: spark . read . format ( "iceberg" ) . option ( "snapshot-id" , "2273922295095144317" ) . load ( "default.example" ) . show (); Replace snapshot-id with the version you want to go back to.
- Create a table called example under default database: val conf = new Configuration(); val tables = new HadoopTables(conf); Insert sample data: val df1 = Seq((1,"Vincent","Computer Science"),(2,"Dan", "Economics"),(3,"Bob", "Politics"),(4,"Cindy", "UX Design")).toDF("id","name","major"); val df1 schema = SparkSchemaUtil.convert(df1.schema); Specify partition strategy based on column id : val partition spec=PartitionSpec.builderFor(df1 schema).identity("id").build; Create the table: val table location = "gs://<gcs-bucket-name>/hive-warehouse/<database-name>" ; val table = tables . create ( df1 schema , partition spec , table location ); Write the data to the table: df1.write.format("iceberg").mode("overwrite").save(table location); Read the data: val read df1 = spark . read . format ( "iceberg" ) . load ( table location ); read df1 . show ; Change the table schema.

### Disaster recovery for Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)
- Source ID: `site-docs-root-2`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Populate the metastore In Cloud Shell, update the sample retail.hql provided in this tutorial's repository with the name of the Hive data bucket: sed -i -- 's/ ${ WAREHOUSE BUCKET } /'" $WAREHOUSE BUCKET "'/g' retail.hql Run the queries contained in the retail.hql file to create the table definitions in the metastore: gcloud dataproc jobs submit hive \ --cluster= ${ HADOOP PRIMARY } \ --region= ${ DPMS PRIMARY REGION } \ --file=retail.hql Verify that the table definitions were correctly created: gcloud dataproc jobs submit hive \ --cluster= ${ HADOOP PRIMARY } \ --region= ${ DPMS PRIMARY REGION } \ --execute=" desc departments; desc categories; desc products; desc order items; desc orders; desc customers; select count( ) as num departments from departments; select count( ) as num categories from categories; select count( ) as num products from products; select count( ) as num order items from order items; select count( ) as num orders from orders; select count( ) as num customers from customers; " The output resembles the following: +------------------+------------+----------+ col name data type comment +------------------+------------+----------+ department id int department name string +------------------+------------+----------+ The output also contains the number of elements in each table—for example: +----------------+ num customers +----------------+ 12435 +----------------+ Failing over to the standby region This section provides the steps to failover from the primary region (region A) to the standby region (region B).
- Update the environment variables based on these new roles: export DPMS PRIMARY REGION = us - east1 export DPMS STANDBY REGION = us - central1 ] export DPMS PRIMARY INSTANCE = dpms2 export DPMS STANDBY INSTANCE = dpms1 export HADOOP PRIMARY = dataproc - cluster2 export HADOOP STANDBY = dataproc - cluster1 Verify that you can write to the new primary Managed Service for Apache Spark Metastore in region B: gcloud dataproc jobs submit hive \ --cluster ${ DPMS PRIMARY INSTANCE } \ --region ${ DPMS PRIMARY REGION } \ --execute "create view completed orders as select from orders where order status = 'COMPLETE';" gcloud dataproc jobs submit hive \ --cluster ${ HADOOP PRIMARY } \ --region ${ DPMS PRIMARY REGION } \ --execute "select from completed orders limit 5;" The output contains the following: +----------------------------+------------------------------+-------------------------------------+--------------------------------+ completed orders.order id completed orders.order date completed orders.order customer id completed orders.order status +----------------------------+------------------------------+-------------------------------------+--------------------------------+ 3 2013-07-25 00:00:00.0 12111 COMPLETE 5 2013-07-25 00:00:00.0 11318 COMPLETE 6 2013-07-25 00:00:00.0 7130 COMPLETE 7 2013-07-25 00:00:00.0 4530 COMPLETE 15 2013-07-25 00:00:00.0 2568 COMPLETE +----------------------------+------------------------------+-------------------------------------+--------------------------------+ The failover is now complete.
- Roles required to select or create a project Select a project : Selecting a project doesn't require a specific IAM role—you can select any project that you've been granted a role on.
- Roles required to select or create a project Select a project : Selecting a project doesn't require a specific IAM role—you can select any project that you've been granted a role on.

