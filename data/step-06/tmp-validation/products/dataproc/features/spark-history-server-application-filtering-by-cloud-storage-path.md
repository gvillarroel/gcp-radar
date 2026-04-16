---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.141Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Spark History Server application filtering by Cloud Storage path"
feature_slug: "spark-history-server-application-filtering-by-cloud-storage-path"
latest_feature_date: "2021-11-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial"
  - "https://docs.cloud.google.com/dataproc/docs/support/diagnose-command"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster"
keywords:
  - "application"
  - "path"
  - "filtering"
  - "server"
  - "history"
  - "storage"
  - "spark"
---

# Spark History Server application filtering by Cloud Storage path

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc images 1.5 and 2.0 support filtering Spark History Server applications by Cloud Storage path.

## Extended Definition

Dataproc images 1.5 and 2.0 support filtering Spark History Server applications by Cloud Storage path.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- [https://docs.cloud.google.com/dataproc/docs/support/diagnose-command](https://docs.cloud.google.com/dataproc/docs/support/diagnose-command)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster)

## Supporting Pages

### "Use the Cloud Storage connector with Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- Source ID: `site-docs-root`
- Final score: 165
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a set of directories with the path src/main/java/dataproc/codelab : mkdir -p src/main/java/dataproc/codelab Copy WordCount.java to your local machine into src/main/java/dataproc/codelab : cp WordCount.java src/main/java/dataproc/codelab WordCount.java is a Spark job in Java that reads text files from Cloud Storage, performs a word count, then writes the text file results to Cloud Storage. package dataproc.codelab ; import java.util.Arrays ; import org.apache.spark.SparkConf ; import org.apache.spark.api.java.JavaPairRDD ; import org.apache.spark.api.java.JavaRDD ; import org.apache.spark.api.java.JavaSparkContext ; import scala.Tuple2 ; public class WordCount { public static void main ( String [] args ) { if ( args . length != 2 ) { throw new IllegalArgumentException ( "Exactly 2 arguments are required: <inputUri> <outputUri>" ); } String inputPath = args [ 0 ] ; String outputPath = args [ 1 ] ; JavaSparkContext sparkContext = new JavaSparkContext ( new SparkConf (). setAppName ( "Word Count" )); JavaRDD<String> lines = sparkContext . textFile ( inputPath ); JavaRDD<String> words = lines . flatMap ( ( String line ) - > Arrays . asList ( line . split ( " " )). iterator () ); JavaPairRDD<String , Integer > wordCounts = words . mapToPair ( ( String word ) - > new Tuple2 <> ( word , 1 ) ). reduceByKey ( ( Integer count1 , Integer count2 ) - > count1 + count2 ); wordCounts . saveAsTextFile ( outputPath ); } } Build the package. mvn clean package If the build is successful, a target/word-count-1.0.jar is created.
- This is a Spark job in Java that reads text files from Cloud Storage, performs a word count, then writes the text file results to Cloud Storage. package dataproc.codelab import org.apache.spark.SparkContext import org.apache.spark.SparkConf object WordCount { def main ( args : Array [ String ] ) { if ( args . length != 2 ) { throw new IllegalArgumentException ( "Exactly 2 arguments are required: <inputPath> <outputPath>" ) } val inputPath = args ( 0 ) val outputPath = args ( 1 ) val sc = new SparkContext ( new SparkConf (). setAppName ( "Word Count" )) val lines = sc . textFile ( inputPath ) val words = lines . flatMap ( line = > line . split ( " " )) val wordCounts = words . map ( word = > ( word , 1 )). reduceByKey ( + ) wordCounts . saveAsTextFile ( outputPath ) } } Build the package. sbt clean package If the build is successful, a target/scala-2.11/word-count 2.11-1.0.jar is created.
- Java gcloud dataproc jobs submit spark \ --cluster=${CLUSTER} \ --class=dataproc.codelab.WordCount \ --jars=gs://${BUCKET NAME}/java/word-count-1.0.jar \ --region=${REGION} \ -- gs://${BUCKET NAME}/input/ gs://${BUCKET NAME}/output/ Scala gcloud dataproc jobs submit spark \ --cluster=${CLUSTER} \ --class=dataproc.codelab.WordCount \ --jars=gs://${BUCKET NAME}/scala/word-count 2.11-1.0.jar \ --region=${REGION} \ -- gs://${BUCKET NAME}/input/ gs://${BUCKET NAME}/output/ Python gcloud dataproc jobs submit pyspark word-count.py \ --cluster=${CLUSTER} \ --region=${REGION} \ -- gs://${BUCKET NAME}/input/ gs://${BUCKET NAME}/output/ View the output After the job finishes, run the following gcloud CLI command to view the wordcount output. gcloud storage cat gs://${BUCKET NAME}/output/ The wordcount output should be similar to the following: (a,2) (call,1) (What's,1) (sweet.,1) (we,1) (as,1) (name?,1) (any,1) (other,1) (rose,1) (smell,1) (name,1) (would,1) (in,1) (which,1) (That,1) (By,1) Clean up After you finish the tutorial, you can clean up the resources that you created so that they stop using quota and incurring charges.
- This is a Spark job in Python using PySpark that reads text files from Cloud Storage, performs a word count, then writes the text file results to Cloud Storage. !/ usr / bin / env python import pyspark import sys if len ( sys . argv ) != 3 : raise Exception ( "Exactly 2 arguments are required: <inputUri> <outputUri>" ) inputUri = sys . argv [ 1 ] outputUri = sys . argv [ 2 ] sc = pyspark .

### "View cluster diagnostic data \_|\_ Managed Service for Apache Spark \_|\_\

- URL: [https://docs.cloud.google.com/dataproc/docs/support/diagnose-command](https://docs.cloud.google.com/dataproc/docs/support/diagnose-command)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Bucket access and scope of shared content : The access setting on the Cloud Storage bucket that contains the diagnostic tar file determines the scope of the content shared with Google Cloud support: Uniform bucket-level access : If uniform bucket-level access is enabled on the Managed Service for Apache Spark staging bucket or, if a TARBALL DIR is specified, on the bucket that contains the TARBALL DIR , all of the bucket contents are shared with Google Cloud support.
- Checkpoint data location Managed Service for Apache Spark saves checkpoint diagnostic data in the cluster temp bucket in Cloud Storage in the following folder (the checkpoint diagnostic data folder ): gs:// TEMP BUCKET /google-cloud-dataproc-diagnostic/ CLUSTER UUID You can run the gcloud dataproc clusters describe CLUSTER NAME command to list the cluster temp bucket The default cluster temp bucket has a TTL retention period of 90 days.
- Command Location in diagnostics folder sysctl -a .../system/sysctl.log cat /proc/sys/fs/file-nr .../system/fs-file-nr.log ping -c 1 .../system/cluster-ping.log cp /etc/hosts .../system/hosts entries.log cp /etc/resolv.conf .../system/resolv.conf Configuration files: Managed Service for Apache Spark saves the following configuration files in the following locations in the checkpoint diagnostic data folder in Cloud Storage.
- Example: The following command gives read permissions to the archive to owners of the project test-project : gcloud storage objects update PATH TO ARCHIVE --add-acl-grant=entity=project-owners-test-project,role=READER Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Run a Spark job on Google Kubernetes Engine \_|\_ Managed Service for Apache\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https://dataproc.googleapis.com/v1/projects/ project-id /regions/ region /clusters" Select-Object -Expand Content You should receive a JSON response similar to the following: { "projectId":" PROJECT ", "clusterName":" DP CLUSTER ", "status":{ "state":"RUNNING", "stateStartTime":"2022-04-01T19:16:39.865716Z" }, "clusterUuid":"98060b77-...", "statusHistory":[ { "state":"CREATING", "stateStartTime":"2022-04-01T19:14:27.340544Z" } ], "labels":{ "goog-dataproc-cluster-name":" DP CLUSTER ", "goog-dataproc-cluster-uuid":"98060b77-...", "goog-dataproc-location":" REGION ", "goog-dataproc-environment":"prod" }, "virtualClusterConfig":{ "stagingBucket":" BUCKET ", "kubernetesClusterConfig":{ "kubernetesNamespace":"dp-cluster", "gkeClusterConfig":{ "gkeClusterTarget":"projects/ PROJECT /locations/ REGION /clusters/ GKE CLUSTER ", "nodePoolTarget":[ { "nodePool":"projects/ PROJECT /locations/ REGION /clusters/ GKE CLUSTER /nodePools/ NODE POOL ", "roles":[ "DEFAULT" ] } ] }, "kubernetesSoftwareConfig":{ "componentVersion":{ "SPARK":"3.1-..." }, "properties":{ "dpgke:dpgke.unstable.outputOnly.endpoints.sparkHistoryServer":"https://...", "spark:spark.eventLog.dir":"gs:// BUCKET /.../spark-job-history", "spark:spark.eventLog.enabled":"true" } } }, "auxiliaryServicesConfig":{ "sparkHistoryServerConfig":{ "dataprocCluster":"projects/ PROJECT /regions/ REGION /clusters/ PHS CLUSTER " } } } Submit a Spark job After your Managed Service for Apache Spark on GKE virtual cluster is running, submit a Spark job using the Google Cloud console, gcloud CLI , or the Managed Service for Apache Spark jobs.submit API (by using direct HTTP requests or the Cloud Client Libraries ).
- HTTP method and URL: POST https://dataproc.googleapis.com/v1/projects/ project-id /regions/ region /clusters Request JSON body: { "clusterName":" DP CLUSTER ", "projectId":" PROJECT ", "virtualClusterConfig":{ "auxiliaryServicesConfig":{ "sparkHistoryServerConfig":{ "dataprocCluster":"projects/ PROJECT /regions/ REGION /clusters/ PHS CLUSTER " } }, "kubernetesClusterConfig":{ "gkeClusterConfig":{ "gkeClusterTarget":"projects/ PROJECT /locations/ REGION /clusters/ GKE CLUSTER ", "nodePoolTarget":[ { "nodePool":"projects/ PROJECT /locations/ REGION /clusters/ GKE CLUSTER /nodePools/ NODE POOL ", "roles":[ "DEFAULT" ] } ] }, "kubernetesSoftwareConfig":{ "componentVersion":{ "SPARK":"latest" } } }, "stagingBucket":" BUCKET " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Set environment variables: DP CLUSTER= Managed Service for Apache Spark on GKE cluster-name \ REGION= region \ GKE CLUSTER= GKE cluster-name \ BUCKET= Cloud Storage bucket-name \ DP POOLNAME= node pool-name PHS CLUSTER= Managed Service for Apache Spark PHS server name Notes: DP CLUSTER : Set the Managed Service for Apache Spark virtual cluster name, which must start with a lowercase letter, followed by up to 54 lowercase letters, numbers, or hyphens.
- Run the command: gcloud dataproc clusters gke create ${DP CLUSTER} \ --region=${REGION} \ --gke-cluster=${GKE CLUSTER} \ --spark-engine-version=latest \ --staging-bucket=${BUCKET} \ --pools="name=${DP POOLNAME},roles=default" \ --setup-workload-identity \ --history-server-cluster=${PHS CLUSTER} Notes: --spark-engine-version : The Spark image version used on the Managed Service for Apache Spark cluster.

