---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.161Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "oauth2l tool in Dataproc images"
feature_slug: "oauth2l-tool-in-dataproc-images"
latest_feature_date: "2020-07-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images"
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial"
keywords:
  - "oauth2l"
  - "tool"
  - "command"
  - "include"
  - "line"
  - "images"
---

# oauth2l tool in Dataproc images

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc images include the oauth2l command-line tool for all VM users.

## Extended Definition

Dataproc images include the oauth2l command-line tool for all VM users.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)

## Supporting Pages

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Full URI: https://www.googleapis.com/compute/beta/projects/ PROJECT ID /global/images/family/ CUSTOM IMAGE FAMILY NAME/var> Partial URI: projects/ PROJECT ID /global/images/family/ CUSTOM IMAGE FAMILY NAME Find the custom image URI Google Cloud CLI Run the following command to list the names of your custom images. gcloud compute images list Pass the name of your custom image to the following command to list the URI ( selfLink ) of your custom image. gcloud compute images describe custom-image-name Output snippet: ... name: CUSTOM IMAGE NAME selfLink: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/images/ CUSTOM IMAGE NAME ...
- The REST response lists additional information about the image, including the selfLink , which is the image URI. { ... "name": "my-custom-image", "selfLink": "projects/ PROJECT ID /global/images/ CUSTOM IMAGE NAME " , "sourceDisk": ..., ... } Create a cluster with a custom image create a cluster with using the gcloud CLI, the Managed Service for Apache Spark API, or the Google Cloud console. gcloud CLI Create a Managed Service for Apache Spark cluster with a custom image using the dataproc clusters create command with the --image flag.
- Custom image limitation: New images announced in Managed Service for Apache Spark Release Notes are not available for use as the base for custom images until one week from their announcement date. --customization-script : a local path to your script that the tool will run to install your custom packages or perform other customizations.
- If you don't want to use secure-boot with your custom image, include the --trusted-cert="" (empty flag value) to the generate custom image.py command when you generate your custom image .

### "Create a Google Kubernetes Engine custom container image \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Custom container image requirements and settings Base images You can use docker tools for building customized docker based upon one of the published Managed Service for Apache Spark on GKE base Spark images .
- The entrypoint script calls the initialization script with all command line args ( $@ ) before starting the Spark driver, Spark executor, and other processes.
- These utilities are included in the base Spark images , so custom images do not need to re-install them.
- Create a Python example file. cat >test util.py <<'EOF' def hello(name): print("hello {}".format(name)) def read lines(path): with open(path) as f: return f.readlines() EOF Create an example init script. cat >init-script.sh <<EOF echo "hello world" >/tmp/init-script.out EOF Build and push the image. docker build -t "${IMAGE}" . && docker push "${IMAGE}" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Use the Cloud Storage connector with Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- Source ID: `site-docs-root`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- SparkContext () lines = sc . textFile ( sys . argv [ 1 ] ) words = lines . flatMap ( lambda line : line . split ()) wordCounts = words . map ( lambda word : ( word , 1 )). reduceByKey ( lambda count1 , count2 : count1 + count2 ) wordCounts . saveAsTextFile ( sys . argv [ 2 ] ) Submit the job Run the following gcloud command to submit the wordcount job to your Managed Service for Apache Spark cluster.
- Command line Delete the bucket: gcloud storage buckets delete BUCKET NAME Important: Your bucket must be empty before you can delete it.
- Cloud Shell includes tools used in this tutorial, including Apache Maven, Python, and the Google Cloud CLI.
- Create a set of directories with the path src/main/java/dataproc/codelab : mkdir -p src/main/java/dataproc/codelab Copy WordCount.java to your local machine into src/main/java/dataproc/codelab : cp WordCount.java src/main/java/dataproc/codelab WordCount.java is a Spark job in Java that reads text files from Cloud Storage, performs a word count, then writes the text file results to Cloud Storage. package dataproc.codelab ; import java.util.Arrays ; import org.apache.spark.SparkConf ; import org.apache.spark.api.java.JavaPairRDD ; import org.apache.spark.api.java.JavaRDD ; import org.apache.spark.api.java.JavaSparkContext ; import scala.Tuple2 ; public class WordCount { public static void main ( String [] args ) { if ( args . length != 2 ) { throw new IllegalArgumentException ( "Exactly 2 arguments are required: <inputUri> <outputUri>" ); } String inputPath = args [ 0 ] ; String outputPath = args [ 1 ] ; JavaSparkContext sparkContext = new JavaSparkContext ( new SparkConf (). setAppName ( "Word Count" )); JavaRDD<String> lines = sparkContext . textFile ( inputPath ); JavaRDD<String> words = lines . flatMap ( ( String line ) - > Arrays . asList ( line . split ( " " )). iterator () ); JavaPairRDD<String , Integer > wordCounts = words . mapToPair ( ( String word ) - > new Tuple2 <> ( word , 1 ) ). reduceByKey ( ( Integer count1 , Integer count2 ) - > count1 + count2 ); wordCounts . saveAsTextFile ( outputPath ); } } Build the package. mvn clean package If the build is successful, a target/word-count-1.0.jar is created.

