---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.709Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Default command-line tools"
feature_slug: "default-command-line-tools"
latest_feature_date: "2015-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/support/diagnose-command"
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example"
  - "https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud"
keywords:
  - "default"
  - "command"
  - "line"
  - "tools"
  - "dataproc"
  - "cluster"
  - "nodes"
  - "include"
---

# Default command-line tools

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc cluster nodes include vim, git, and bash-completion by default.

## Extended Definition

Dataproc cluster nodes include vim, git, and bash-completion by default.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/support/diagnose-command](https://docs.cloud.google.com/dataproc/docs/support/diagnose-command)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example](https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example)
- [https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud](https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud)

## Supporting Pages

### "View cluster diagnostic data \_|\_ Managed Service for Apache Spark \_|\_\

- URL: [https://docs.cloud.google.com/dataproc/docs/support/diagnose-command](https://docs.cloud.google.com/dataproc/docs/support/diagnose-command)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Daemons and services information Command executed Location in archive yarn node -list -all /system/yarn-nodes.log hdfs dfsadmin -report -live -decommissioning /system/hdfs-nodes.log hdfs dfs -du -h /system/hdfs-du.log service --status-all /system/service.log systemctl --type service /system/systemd-services.log curl "http://${HOSTNAME}:8088/jmx" /metrics/resource manager jmx curl "http://${HOSTNAME}:8088/ws/v1/cluster/apps" /metrics/yarn app info curl "http://${HOSTNAME}:8088/ws/v1/cluster/nodes" /metrics/yarn node info curl "http://${HOSTNAME}:9870/jmx" /metrics/namenode jmx JVM information Command executed Location in archive jstack -l "${DATAPROC AGENT PID}" jstack/agent ${DATAPROC AGENT PID}.jstack jstack -l "${PRESTO PID}" jstack/agent ${PRESTO PID}.jstack jstack -l "${JOB DRIVER PID}" jstack/driver ${JOB DRIVER PID}.jstack jinfo "${DATAPROC AGENT PID}" jinfo/agent ${DATAPROC AGENT PID}.jstack jinfo "${PRESTO PID}" jinfo/agent ${PRESTO PID}.jstack jinfo "${JOB DRIVER PID}" jinfo/agent ${JOB DRIVER PID}.jstack Linux system information Command executed Location in archive df -h /system/df.log ps aux /system/ps.log free -m /system/free.log netstat -anp /system/netstat.log sysctl -a /system/sysctl.log uptime /system/uptime.log cat /proc/sys/fs/file-nr /system/fs-file-nr.log ping -c 1 /system/cluster-ping.log Log files Item included Location in archive All logs in /var/log with the following prefixes in their filename: cloud-sql-proxy dataproc druid gcdp google hadoop hdfs hive knox presto spark syslog yarn zookeeper Files are placed in the archive logs folder, and keep their original filenames.
- Checkpoint data location Managed Service for Apache Spark saves checkpoint diagnostic data in the cluster temp bucket in Cloud Storage in the following folder (the checkpoint diagnostic data folder ): gs:// TEMP BUCKET /google-cloud-dataproc-diagnostic/ CLUSTER UUID You can run the gcloud dataproc clusters describe CLUSTER NAME command to list the cluster temp bucket The default cluster temp bucket has a TTL retention period of 90 days.
- Command executed Location in diagnostic folder yarn node -list -all .../nodes/ timestamp /yarn-nodes.log hdfs dfsadmin -report -live -decommissioning .../nodes/ timestamp /hdfs-nodes.log cp gs:// STAGING BUCKET /google-cloud-dataproc-metainfo/ CLUSTER UUID /nodes exclude.xml .../nodes/ timestamp /nodes exclude.xml Note: Node detail snapshots capture cluster updates.
- Item(s) included Location in diagnostics folder Managed Service for Apache Spark properties .../configs/dataproc/dataproc.properties All files in /etc/google-dataproc/ .../configs/dataproc/ All files in /etc/hadoop/conf/ .../configs/hadoop/ All files in /etc/hive/conf/ .../configs/hive/ All files in /etc/hive-hcatalog/conf/ .../configs/hive-hcatalog/ All files in /etc/knox/conf/ .../configs/knox/ All files in /etc/pig/conf/ .../configs/pig/ All files in /etc/presto/conf/ .../configs/presto/ All files in /etc/spark/conf/ .../configs/spark/ All files in /etc/tez/conf/ .../configs/tez/ All files in /etc/zookeeper/conf/ .../configs/zookeeper/ Share checkpoint diagnostic data with support You can enable sharing checkpoint diagnostic data with Google Cloud support in the following ways: Enable sharing at cluster creation : Add the following optional cluster property when you create a cluster : dataproc:diagnostic.capture.access=GOOGLE DATAPROC DIAGNOSE This property automatically shares collected checkpoint diagnostic data with Google Cloud support so that you don't have to manually share after cluster creation each time.

### "Create a cluster by using the gcloud CLI \_|\_ Managed Service for Apache\

- URL: [https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud](https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To decrease the number of worker nodes to the original value of 2 , run the following command: gcloud dataproc clusters update example-cluster \ --region= REGION \ --num-workers 2 Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, follow these steps.
- User roles To get the permissions that you need to create a Managed Service for Apache Spark cluster, ask your administrator to grant you the following IAM roles: Dataproc Editor ( roles/dataproc.editor ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the Compute Engine default service account Service account role To ensure that the Compute Engine default service account has the necessary permissions to create a Managed Service for Apache Spark cluster, ask your administrator to grant the Dataproc Worker ( roles/dataproc.worker ) IAM role to the Compute Engine default service account on the project.
- Update a cluster To change the number of workers in the cluster to five, run the following command: gcloud dataproc clusters update example-cluster \ --region= REGION \ --num-workers 5 The command output displays cluster details: workerConfig: ... instanceNames: - example-cluster-w-0 - example-cluster-w-1 - example-cluster-w-2 - example-cluster-w-3 - example-cluster-w-4 numInstances: 5 statusHistory: ... - detail: Add 3 workers.
- Submit a job To submit a sample Spark job that calculates a rough value for pi , run the following gcloud Managed Service for Apache Spark jobs submit spark command: gcloud dataproc jobs submit spark --cluster example-cluster \ --region= REGION \ --class org.apache.spark.examples.SparkPi \ --jars file:///usr/lib/spark/examples/jars/spark-examples.jar -- 1000 Notes: Replace the following: REGION : Specify the cluster region.

### "Write a MapReduce job with the BigQuery connector \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example](https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Also serves " + "as the default project for table IDs that don't explicitly specify a project for " + "the table. \n " + " QualifiedInputTableId - Input table ID of the form " + "(Optional ProjectId):[DatasetId].[TableId] \n " + " InputTableFieldName - Name of the field to count in the input table, e.g., " + "'word' in publicdata:samples.shakespeare or 'repository name' in " + "publicdata:samples.github timeline. \n " + " QualifiedOutputTableId - Input table ID of the form " + "(Optional ProjectId):[DatasetId].[TableId] \n " + " GcsOutputPath - The output path to store temporary Cloud Storage data, e.g., " + "gs://bucket/dir/" ); System . exit ( 1 ); } // Get the individual parameters from the command line .
- The Hadoop BigQuery connector is installed by default on all Managed Service for Apache Spark 1.0-1.2 cluster nodes under /usr/lib/hadoop/lib/ .
- QualifiedOutputTableId - Input table ID of the form ( Optional ProjectId ):[ DatasetId ] . [ TableId ] GcsOutputPath - The output path to store temporary Cloud Storage data , e . g . , gs : // bucket / dir / @param args a String [] containing ProjectId , QualifiedInputTableId , InputTableFieldName , QualifiedOutputTableId , and GcsOutputPath . @throws IOException on IO Error . @throws InterruptedException on Interrupt . @throws ClassNotFoundException if not all classes are present . / public static void main ( String [] args ) throws IOException , InterruptedException , ClassNotFoundException { // GenericOptionsParser is a utility to parse command line arguments // generic to the Hadoop framework .
- This is required if the jar is being // passed on the command line to Hadoop . job . setJarByClass ( WordCount . class ); // Tell the job what data the mapper will output . job . setOutputKeyClass ( Text . class ); job . setOutputValueClass ( LongWritable . class ); job . setMapperClass ( Map . class ); job . setReducerClass ( Reduce . class ); job . setInputFormatClass ( GsonBigQueryInputFormat . class ); // Instead of using BigQueryOutputFormat , we use the newer // IndirectBigQueryOutputFormat , which works by first buffering all the data // into a Cloud Storage temporary file , and then on commitJob , copies all data from // Cloud Storage into BigQuery in one operation .

