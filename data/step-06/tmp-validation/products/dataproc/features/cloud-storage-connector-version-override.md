---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.181Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Cloud Storage connector version override"
feature_slug: "cloud-storage-connector-version-override"
latest_feature_date: "2019-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial"
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/auxiliary-versions"
keywords:
  - "override"
  - "update"
  - "connector"
  - "version"
  - "storage"
  - "users"
  - "lets"
---

# Cloud Storage connector version override

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc lets users update the installed Cloud Storage connector version by setting a metadata key.

## Extended Definition

Dataproc lets users update the installed Cloud Storage connector version by setting a metadata key.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example](https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example)
- [https://docs.cloud.google.com/dataproc-metastore/docs/auxiliary-versions](https://docs.cloud.google.com/dataproc-metastore/docs/auxiliary-versions)

## Supporting Pages

### "Use the Cloud Storage connector with Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When a Spark job accesses Cloud Storage cluster files (files with URIs that start with gs:// ), the system automatically uses the Cloud Storage connector to access the files in Cloud Storage Check your cluster image version.
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Use the Cloud Storage connector with Apache Spark Stay organized with collections Save and categorize content based on your preferences.
- When a Spark job accesses Cloud Storage cluster files (files with URIs that start with gs:// ), the system automatically uses the Cloud Storage connector to access the files in Cloud Storage Check your cluster image verison.
- The improved Cloud Storage connector minimizes metadata operations to reduce costs, while an optimized file output committer unlocks performance and reliability for Spark workloads.

### "Write a MapReduce job with the BigQuery connector \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example](https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Reducer for the sample WordCount job is shown below. / Reducer function for WordCount . / public static class Reduce extends Reducer<Text , LongWritable , JsonObject , NullWritable > { @ Override public void reduce ( Text key , Iterable<LongWritable> values , Context context ) throws IOException , InterruptedException { // Add up the values to get a total number of occurrences of our word . long count = 0 ; for ( LongWritable val : values ) { count = count + val . get (); } JsonObject jsonObject = new JsonObject (); jsonObject . addProperty ( "Word" , key . toString ()); jsonObject . addProperty ( "Count" , count ); // Key does not matter . context . write ( jsonObject , NullWritable . get ()); } } Clean up After the job completes, clean up Cloud Storage export paths. job.waitForCompletion(true); GsonBigQueryInputFormat.cleanupJob(job.getConfiguration(), job.getJobID()); You can view word counts in the BigQuery output table in the Google Cloud console .
- To Avoid Conflicts : If your application uses a connector version that is different from the connector version deployed on your Managed Service for Apache Spark cluster , you must either: Create a new cluster with an initialization action that installs the connector version used by your application, or Include and relocate the connector classes and connector dependencies for the version you are using into your application's jar to avoid conflict between your connector version and the connector version deployed on your Managed Service for Apache Spark cluster (see this example of dependencies relocation in Maven ).
- Apache Maven Dependency Information <dependency> <groupId>com.google.cloud.bigdataoss</groupId> <artifactId>bigquery-connector</artifactId> <version> insert "hadoopX-X.X.X" connector version number here </version> </dependency> For detailed information, see the BigQuery connector release notes and Javadoc reference .
- GsonBigQueryInputFormat . cleanupJob ( job . getConfiguration (), job . getJobID ()); // You can view word counts in the BigQuery output table at // https://console.cloud.google.com/ . } } Java version The BigQuery connector requires Java 8.

### Auxiliary versions \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/auxiliary-versions](https://docs.cloud.google.com/dataproc-metastore/docs/auxiliary-versions)
- Source ID: `site-docs-root-2`
- Final score: 127
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Properties Common Separate Endpoint ✓ Hive config overrides ✓ Kerberos config ✓ Endpoint protocol (Thrift/gRPC) ✓ Thrift port ✓ Artifacts Cloud Storage bucket ✓ Tier ✓ Maintenance window ✓ Release channel ✓ Encryption config ✓ Database type ✓ Data Catalog sync toggle ✓ Request count metric ✓ Network configurations ✓ The Hive configuration overrides remain separate between the auxiliary and the primary version.
- You can check the active account by running gcloud auth list . curl -X PATCH -s -i \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -d '{"hive metastore config": {"auxiliary versions": {"aux-version1": {"version": " AUX VERSION } } } }' \ -H "Content-Type:application/json" \ https://metastore.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /services/ SERVICE ID ?update mask=hive metastore config.auxiliary versions Replace the following: SERVICE ID : the name of your Dataproc Metastore service.
- Click Submit . gcloud CLI To update a Dataproc Metastore service that uses an auxiliary version, run one of the following gcloud metastore services update commands: gcloud metastore services update SERVICE \ --location= LOCATION \ --add-auxiliary-versions= AUXILIARY VERSIONS , ... or gcloud metastore services update SERVICE \ --location= LOCATION \ --update-auxiliary-versions-from-file= AUXILIARY VERSIONS FROM FILE Replace the following: SERVICE : the name of your Dataproc Metastore service.
- Update an auxiliary version for an existing service The following instructions show you how to update an existing Dataproc Metastore service that uses auxiliary versions.

