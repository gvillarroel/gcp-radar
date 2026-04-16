---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.921Z"
product_name: "Pub/Sub Lite"
product_slug: "pub-sub-lite"
feature_name: "Apache Spark connector for Pub/Sub Lite"
feature_slug: "apache-spark-connector-for-pub-sub-lite"
latest_feature_date: "2021-02-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-managed-service-for-apache-kafka"
  - "https://docs.cloud.google.com/pubsub/lite/docs/write-messages-apache-spark"
  - "https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-pubsub"
  - "https://docs.cloud.google.com/pubsub/lite/docs/subscriptions"
keywords:
  - "apache"
  - "spark"
  - "connector"
  - "for"
  - "pub"
  - "sub"
  - "lite"
  - "the"
---

# Apache Spark connector for Pub/Sub Lite

Product: Pub/Sub Lite
Coverage: MEDIUM

## Step 02 Summary

The Apache Spark connector lets Spark clusters read messages from Pub/Sub Lite.

## Extended Definition

The Apache Spark connector lets Spark clusters read messages from Pub/Sub Lite.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-managed-service-for-apache-kafka](https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-managed-service-for-apache-kafka)
- [https://docs.cloud.google.com/pubsub/lite/docs/write-messages-apache-spark](https://docs.cloud.google.com/pubsub/lite/docs/write-messages-apache-spark)
- [https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-pubsub](https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-pubsub)
- [https://docs.cloud.google.com/pubsub/lite/docs/subscriptions](https://docs.cloud.google.com/pubsub/lite/docs/subscriptions)

## Supporting Pages

### "Migrate from Pub/Sub Lite to Google Cloud Managed Service for Apache Kafka\

- URL: [https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-managed-service-for-apache-kafka](https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-managed-service-for-apache-kafka)
- Source ID: `site-docs-root`
- Final score: 360
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the K8s.yaml file. kubectl create -f k8s.yaml This creates a Kafka Connect workload running in your Google Kubernetes Engine cluster and launches the Pub/Sub Lite connector to move data from your Pub/Sub Lite topic to Google Cloud Managed Service for Apache Kafka.
- The default link that you get from setting up port forwarding returns an output similar to the following: {"version":"3.4.0","commit":"2e1947d240607d53","kafka cluster id":"6H6qWA0dQnuK31hBPqYUDg"} If you append the /connectors to the link, it lists the running connector, For example: ["PubSubLiteSourceConnector"] For example, checking this link url:8083/connectors/PubSubLiteSourceConnector/status yields a list of tasks, and their status. {"name":"PubSubLiteSourceConnector","connector":{"state":"RUNNING","worker id":"10.53.0.157:8083"},"tasks":[{"id":0,"state":"RUNNING","worker id":"10.53.0.139:8083"},{"id":1,"state":"RUNNING","worker id":"10.53.0.157:8083"},{"id":2,"state":"RUNNING","worker id":"10.53.0.139:8083"},{"id":3,"state":"RUNNING","worker id":"10.53.0.157:8083"},{"id":4,"state":"RUNNING","worker id":"10.53.0.157:8083"},{"id":5,"state":"RUNNING","worker id":"10.53.0.139:8083"},{"id":6,"state":"RUNNING","worker id":"10.53.0.139:8083"},{"id":7,"state":"RUNNING","worker id":"10.53.0.157:8083"},{"id":8,"state":"RUNNING","worker id":"10.53.0.139:8083"},{"id":9,"state":"RUNNING","worker id":"10.53.0.157:8083"}],"type":"source"} Phased Migration After your Pub/Sub Lite topic is migrated to Kafka, you can migrate your subscribers and publishers.
- Inside the image, Kafka Connect and the Pub/Sub Lite plugin for Kafka Connect are used to subscribe to a new Pub/Sub Lite subscription, and publish to Managed Service for Apache Kafka.
- For example, Linux base64 -w 0 < my service account.json > password.txt Mac base64 < account key json > password.txt In the secrets files in the GitHub repository, update the following files with the appropriate information to link the repository to your Google Cloud project, Pub/Sub Lite, and Kafka. .gcp/gmk sasl service account → sensitive <service-account-name>@<gcp-project>.iam.gserviceaccount.com .gcp/gmk sasl service account key → sensitive <base64 encoded sasl service account key> .gcp/kafka ssl truststore location → sensitive <full path of the ssl truststore jks file location> .gcp/kafka ssl truststore password → sensitive <password for the ssl truststore jks> .gcp/gmk bootstrap servers → environment specific bootstrap.<google-managed-kafka-cluster-name>.<google-managed-kafka-cluster-region name>.managedkafka.<google-managed-cluster-host-project-name>.cloud.goog:9092 .gcp/kafka connect group id → environment specific <Kafka Connect group id (unique per worker group) for the Kafka connect workers in distributed mode> .gcp/kafka config storage topic → environment specific <Kafka topic name used by Kafka Connect for tracking the config> .gcp/kafka offset storage topic → environment specific <Kafka topic name used by Kafka Connect for tracking the offsets> .gcp/kafka status storage topic → environment specific <Kafka topic name used by Kafka Connect for tracking the status> .gcp/kafka sink topic → environment specific <target sink Kafka topic name used by Kafka Connect for migrating the data from the Pub/Sub Lite topic> .gcp/pubsub lite gcp project → environment specific <Google Cloud project that hosts the Pub/Sub Lite source subscription to be used for migrating the Pub/Sub Lite topic to sink the Kafka topic> .gcp/pubsub lite gcp location → environment specific <Google Cloud location for the Pub/Sub Lite source subscription tor migrate the Pub/Sub Lite topic to sink Kafka topic> .gcp/pubsub lite subscription → environment specific <Pub/Sub Lite source subscription name to be used for migrating the pubsub lite topic to Kafka topic> Build the docker image by running the docker/build-image.sh file. ./push-image.sh Update the docker/push-image.sh image with your Google Cloud project name.

### "Quickstart: Write Pub/Sub Lite messages by using Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/pubsub/lite/docs/write-messages-apache-spark](https://docs.cloud.google.com/pubsub/lite/docs/write-messages-apache-spark)
- Source ID: `site-docs-root`
- Final score: 355
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The connector will output messages that conforms to the fixed table schema formatted as spark.sql.Row . from pyspark.sql import SparkSession from pyspark.sql.types import StringType TODO(developer): project number = 11223344556677 location = "us-central1-a" subscription id = "your-subscription-id" spark = SparkSession . builder . appName ( "read-app" ) . master ( "yarn" ) . getOrCreate () sdf = ( spark . readStream . format ( "pubsublite" ) . option ( "pubsublite.subscription" , f "projects/ { project number } /locations/ { location } /subscriptions/ { subscription id } " , ) . load () ) sdf = sdf . withColumn ( "data" , sdf . data . cast ( StringType ())) query = ( sdf . writeStream . format ( "console" ) . outputMode ( "append" ) . trigger ( processingTime = "1 second" ) . start () ) Wait 120 seconds (must be >= 60 seconds) to start receiving messages. query . awaitTermination ( 120 ) query . stop () To submit the read job to Managed Service for Apache Spark: Console Upload the PySpark script to your Cloud Storage bucket.
- Click Submit . gcloud Use the gcloud dataproc jobs submit pyspark command again to submit the job to Managed Service for Apache Spark: gcloud dataproc jobs submit pyspark spark streaming to pubsublite example.py \ --region=$DATAPROC REGION \ --cluster=$CLUSTER ID \ --jars=gs://spark-lib/pubsublite/pubsublite-spark-sql-streaming-LATEST-with-dependencies.jar \ --driver-log-levels=root=INFO \ --properties=spark.master=yarn \ -- --project number=$PROJECT NUMBER --location=$PUBSUBLITE LOCATION --subscription id=$SUBSCRIPTION --region : the pre-selected Managed Service for Apache Spark region . --cluster : the Managed Service for Apache Spark cluster name. --jars : the Pub/Sub Lite Spark Connector's uber jar with dependencies in a public Cloud Storage bucket.
- Click Submit . gcloud Use the gcloud dataproc jobs submit pyspark command to submit the job to Managed Service for Apache Spark: gcloud dataproc jobs submit pyspark spark streaming to pubsublite example.py \ --region=$DATAPROC REGION \ --cluster=$CLUSTER ID \ --jars=gs://spark-lib/pubsublite/pubsublite-spark-sql-streaming-LATEST-with-dependencies.jar \ --driver-log-levels=root=INFO \ --properties=spark.master=yarn \ -- --project number=$PROJECT NUMBER --location=$PUBSUBLITE LOCATION --topic id=$TOPIC --region : the pre-selected Managed Service for Apache Spark region . --cluster : the Managed Service for Apache Spark cluster name. --jars : the Pub/Sub Lite Spark Connector's uber jar with dependencies in a public Cloud Storage bucket.
- Delete the topic and subscription. gcloud pubsub lite-topics delete $TOPIC gcloud pubsub lite-subscriptions delete $SUBSCRIPTION Delete the Managed Service for Apache Spark cluster. gcloud dataproc clusters delete $CLUSTER ID --region=$DATAPROC REGION Remove the Cloud Storage bucket. gcloud storage rm gs://$BUCKET What's next Check out the word count example in Java for the Pub/Sub Lite Spark Connector.

### Migrate from Pub/Sub Lite to Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-pubsub](https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-pubsub)
- Source ID: `site-docs-root`
- Final score: 309
- Re-rank relevance: N/A

Evidence snippets:
- Key migration point If you want to replicate Pub/Sub Lite behavior in Pub/Sub (for example, low latency and high efficiency), implement your consumer clients using the StreamingPull API.
- Create Pub/Sub Lite export subscriptions For every topic, create a Pub/Sub Lite export subscription to export messages from the Pub/Sub Lite topic to its corresponding Pub/Sub topic.
- For each subscriber application, run the Pub/Sub Lite subscriber and the new Pub/Sub subscriber in parallel, so you can verify the behavior and performance of the new subscriber.
- Before you begin Evaluate your existing Pub/Sub Lite application and map out the corresponding Pub/Sub features that you need.

### "Create and manage Lite subscriptions \_|\_ Pub/Sub Lite \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/lite/docs/subscriptions](https://docs.cloud.google.com/pubsub/lite/docs/subscriptions)
- Source ID: `site-docs-root`
- Final score: 277
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- False if using a zonal location. // https://cloud.google.com/pubsub/lite/docs/topics boolean regional = false ; listSubscriptionsInTopicExample ( cloudRegion , zoneId , projectNumber , topicId , regional ); } public static void listSubscriptionsInTopicExample ( String cloudRegion , char zoneId , long projectNumber , String topicId , boolean regional ) throws Exception { CloudRegionOrZone location ; if ( regional ) { location = CloudRegionOrZone . of ( CloudRegion . of ( cloudRegion )); } else { location = CloudRegionOrZone . of ( CloudZone . of ( CloudRegion . of ( cloudRegion ), zoneId )); } TopicPath topicPath = TopicPath . newBuilder () . setProject ( ProjectNumber . of ( projectNumber )) . setLocation ( location ) . setName ( TopicName . of ( topicId )) . build (); AdminClientSettings adminClientSettings = AdminClientSettings . newBuilder (). setRegion ( CloudRegion . of ( cloudRegion )). build (); try ( AdminClient adminClient = AdminClient . create ( adminClientSettings )) { List<SubscriptionPath> subscriptionPaths = adminClient . listTopicSubscriptions ( topicPath ). get (); for ( SubscriptionPath subscription : subscriptionPaths ) { System . out . println ( subscription . toString ()); } if ( regional ) { System . out . println ( subscriptionPaths . size () + " subscription(s) listed in the regional topic " + topicPath ); } else { System . out . println ( subscriptionPaths . size () + " subscription(s) listed in the zonal topic " + topicPath ); } } } } Python Before running this sample, follow the Python setup instructions in Pub/Sub Lite Client Libraries . from google.cloud.pubsublite import AdminClient from google.cloud.pubsublite.types import CloudRegion , CloudZone , TopicPath TODO(developer): project number = 1122334455 cloud region = "us-central1" zone id = "a" topic id = "your-topic-id" regional = True if regional : location = CloudRegion ( cloud region ) else : location = CloudZone ( CloudRegion ( cloud region ), zone id ) topic path = TopicPath ( project number , location , topic id ) client = AdminClient ( cloud region ) response = client . list topic subscriptions ( topic path ) for subscription path in response : print ( subscription path ) print ( f " { len ( response ) } subscription(s) listed in your topic." ) Delete a Lite subscription You can delete Lite subscriptions with the Google Cloud console, the Google Cloud CLI, or the Pub/Sub Lite API.
- False if using a zonal location. // https://cloud.google.com/pubsub/lite/docs/topics boolean regional = false ; getSubscriptionExample ( cloudRegion , zoneId , projectNumber , subscriptionId , regional ); } public static void getSubscriptionExample ( String cloudRegion , char zoneId , long projectNumber , String subscriptionId , boolean regional ) throws Exception { CloudRegionOrZone location ; if ( regional ) { location = CloudRegionOrZone . of ( CloudRegion . of ( cloudRegion )); } else { location = CloudRegionOrZone . of ( CloudZone . of ( CloudRegion . of ( cloudRegion ), zoneId )); } SubscriptionPath subscriptionPath = SubscriptionPath . newBuilder () . setLocation ( location ) . setProject ( ProjectNumber . of ( projectNumber )) . setName ( SubscriptionName . of ( subscriptionId )) . build (); AdminClientSettings adminClientSettings = AdminClientSettings . newBuilder (). setRegion ( CloudRegion . of ( cloudRegion )). build (); try ( AdminClient adminClient = AdminClient . create ( adminClientSettings )) { Subscription subscription = adminClient . getSubscription ( subscriptionPath ). get (); System . out . println ( subscription . getAllFields ()); } catch ( ExecutionException e ) { try { throw e . getCause (); } catch ( NotFoundException notFound ) { System . out . println ( "This subscription is not found." ); } catch ( Throwable throwable ) { throwable . printStackTrace (); } } } } Python Before running this sample, follow the Python setup instructions in Pub/Sub Lite Client Libraries . from google.api core.exceptions import NotFound from google.cloud.pubsublite import AdminClient from google.cloud.pubsublite.types import CloudRegion , CloudZone , SubscriptionPath TODO(developer): project number = 1122334455 cloud region = "us-central1" zone id = "a" subscription id = "your-subscription-id" regional = True if regional : location = CloudRegion ( cloud region ) else : location = CloudZone ( CloudRegion ( cloud region ), zone id ) subscription path = SubscriptionPath ( project number , location , subscription id ) client = AdminClient ( cloud region ) try : response = client . get subscription ( subscription path ) print ( f " { response . name } exists." ) except NotFound : print ( f " { subscription path } not found." ) List Lite subscriptions You can list the Lite subscriptions in a project or the Lite subscriptions to a Lite topic .
- False if using a zonal location. // https://cloud.google.com/pubsub/lite/docs/topics boolean regional = false ; deleteSubscriptionExample ( cloudRegion , zoneId , projectNumber , subscriptionId , regional ); } public static void deleteSubscriptionExample ( String cloudRegion , char zoneId , long projectNumber , String subscriptionId , boolean regional ) throws Exception { CloudRegionOrZone location ; if ( regional ) { location = CloudRegionOrZone . of ( CloudRegion . of ( cloudRegion )); } else { location = CloudRegionOrZone . of ( CloudZone . of ( CloudRegion . of ( cloudRegion ), zoneId )); } SubscriptionPath subscriptionPath = SubscriptionPath . newBuilder () . setLocation ( location ) . setProject ( ProjectNumber . of ( projectNumber )) . setName ( SubscriptionName . of ( subscriptionId )) . build (); AdminClientSettings adminClientSettings = AdminClientSettings . newBuilder (). setRegion ( CloudRegion . of ( cloudRegion )). build (); try ( AdminClient adminClient = AdminClient . create ( adminClientSettings )) { adminClient . deleteSubscription ( subscriptionPath ). get (); System . out . println ( subscriptionPath + " deleted successfully." ); } catch ( ExecutionException e ) { try { throw e . getCause (); } catch ( NotFoundException notFound ) { System . out . println ( "This subscription is not found." ); } catch ( Throwable throwable ) { throwable . printStackTrace (); } } } } Python Before running this sample, follow the Python setup instructions in Pub/Sub Lite Client Libraries . from google.api core.exceptions import NotFound from google.cloud.pubsublite import AdminClient from google.cloud.pubsublite.types import CloudRegion , CloudZone , SubscriptionPath TODO(developer): project number = 1122334455 cloud region = "us-central1" zone id = "a" subscription id = "your-subscription-id" regional = True if regional : location = CloudRegion ( cloud region ) else : location = CloudZone ( CloudRegion ( cloud region ), zone id ) subscription path = SubscriptionPath ( project number , location , subscription id ) client = AdminClient ( cloud region ) try : client . delete subscription ( subscription path ) print ( f " { subscription path } deleted successfully." ) except NotFound : print ( f " { subscription path } not found." ) What's Next Create and manage a Lite topic .
- False if using a zonal location. // https://cloud.google.com/pubsub/lite/docs/topics boolean regional = true ; listSubscriptionsInProjectExample ( cloudRegion , zoneId , projectNumber , regional ); } public static void listSubscriptionsInProjectExample ( String cloudRegion , char zoneId , long projectNumber , boolean regional ) throws Exception { AdminClientSettings adminClientSettings = AdminClientSettings . newBuilder (). setRegion ( CloudRegion . of ( cloudRegion )). build (); CloudRegionOrZone location ; if ( regional ) { location = CloudRegionOrZone . of ( CloudRegion . of ( cloudRegion )); } else { location = CloudRegionOrZone . of ( CloudZone . of ( CloudRegion . of ( cloudRegion ), zoneId )); } LocationPath locationPath = LocationPath . newBuilder () . setProject ( ProjectNumber . of ( projectNumber )) . setLocation ( location ) . build (); try ( AdminClient adminClient = AdminClient . create ( adminClientSettings )) { List<Subscription> subscriptions = adminClient . listSubscriptions ( locationPath ). get (); for ( Subscription subscription : subscriptions ) { System . out . println ( subscription . getAllFields ()); } System . out . println ( subscriptions . size () + " subscription(s) listed in the project." ); } } } Python Before running this sample, follow the Python setup instructions in Pub/Sub Lite Client Libraries . from google.cloud.pubsublite import AdminClient from google.cloud.pubsublite.types import CloudRegion , CloudZone , LocationPath TODO(developer): project number = 1122334455 cloud region = "us-central1" zone id = "a" regional = True if regional : location = CloudRegion ( cloud region ) else : location = CloudZone ( CloudRegion ( cloud region ), zone id ) location path = LocationPath ( project number , location ) client = AdminClient ( cloud region ) response = client . list subscriptions ( location path ) for subscription in response : print ( subscription . name ) print ( f " { len ( response ) } subscription(s) listed in your project and location." ) Listing Lite subscriptions to a Lite topic You can list Lite subscriptions to a Lite topic using the Google Cloud console, the Google Cloud CLI, or the Pub/Sub Lite API.

