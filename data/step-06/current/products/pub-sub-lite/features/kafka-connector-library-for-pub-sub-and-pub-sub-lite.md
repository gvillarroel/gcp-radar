---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.917Z"
product_name: "Pub/Sub Lite"
product_slug: "pub-sub-lite"
feature_name: "Kafka Connector library for Pub/Sub and Pub/Sub Lite"
feature_slug: "kafka-connector-library-for-pub-sub-and-pub-sub-lite"
latest_feature_date: "2022-11-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-managed-service-for-apache-kafka"
  - "https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-pubsub"
  - "https://docs.cloud.google.com/pubsub/lite/docs/publishing"
  - "https://docs.cloud.google.com/pubsub/lite/docs/subscribing"
keywords:
  - "kafka"
  - "connector"
  - "library"
  - "for"
  - "pub"
  - "sub"
  - "and"
  - "lite"
---

# Kafka Connector library for Pub/Sub and Pub/Sub Lite

Product: Pub/Sub Lite
Coverage: MEDIUM

## Step 02 Summary

The Kafka Connector library for Pub/Sub and Pub/Sub Lite is generally available; The Kafka Connector library for Pub/Sub and Pub/Sub Lite is in preview.

## Extended Definition

The Kafka Connector library for Pub/Sub and Pub/Sub Lite is generally available; The Kafka Connector library for Pub/Sub and Pub/Sub Lite is in preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-managed-service-for-apache-kafka](https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-managed-service-for-apache-kafka)
- [https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-pubsub](https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-pubsub)
- [https://docs.cloud.google.com/pubsub/lite/docs/publishing](https://docs.cloud.google.com/pubsub/lite/docs/publishing)
- [https://docs.cloud.google.com/pubsub/lite/docs/subscribing](https://docs.cloud.google.com/pubsub/lite/docs/subscribing)

## Supporting Pages

### "Migrate from Pub/Sub Lite to Google Cloud Managed Service for Apache Kafka\

- URL: [https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-managed-service-for-apache-kafka](https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-managed-service-for-apache-kafka)
- Source ID: `site-docs-root`
- Final score: 362
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The default link that you get from setting up port forwarding returns an output similar to the following: {"version":"3.4.0","commit":"2e1947d240607d53","kafka cluster id":"6H6qWA0dQnuK31hBPqYUDg"} If you append the /connectors to the link, it lists the running connector, For example: ["PubSubLiteSourceConnector"] For example, checking this link url:8083/connectors/PubSubLiteSourceConnector/status yields a list of tasks, and their status. {"name":"PubSubLiteSourceConnector","connector":{"state":"RUNNING","worker id":"10.53.0.157:8083"},"tasks":[{"id":0,"state":"RUNNING","worker id":"10.53.0.139:8083"},{"id":1,"state":"RUNNING","worker id":"10.53.0.157:8083"},{"id":2,"state":"RUNNING","worker id":"10.53.0.139:8083"},{"id":3,"state":"RUNNING","worker id":"10.53.0.157:8083"},{"id":4,"state":"RUNNING","worker id":"10.53.0.157:8083"},{"id":5,"state":"RUNNING","worker id":"10.53.0.139:8083"},{"id":6,"state":"RUNNING","worker id":"10.53.0.139:8083"},{"id":7,"state":"RUNNING","worker id":"10.53.0.157:8083"},{"id":8,"state":"RUNNING","worker id":"10.53.0.139:8083"},{"id":9,"state":"RUNNING","worker id":"10.53.0.157:8083"}],"type":"source"} Phased Migration After your Pub/Sub Lite topic is migrated to Kafka, you can migrate your subscribers and publishers.
- Run the K8s.yaml file. kubectl create -f k8s.yaml This creates a Kafka Connect workload running in your Google Kubernetes Engine cluster and launches the Pub/Sub Lite connector to move data from your Pub/Sub Lite topic to Google Cloud Managed Service for Apache Kafka.
- For example, Linux base64 -w 0 < my service account.json > password.txt Mac base64 < account key json > password.txt In the secrets files in the GitHub repository, update the following files with the appropriate information to link the repository to your Google Cloud project, Pub/Sub Lite, and Kafka. .gcp/gmk sasl service account → sensitive <service-account-name>@<gcp-project>.iam.gserviceaccount.com .gcp/gmk sasl service account key → sensitive <base64 encoded sasl service account key> .gcp/kafka ssl truststore location → sensitive <full path of the ssl truststore jks file location> .gcp/kafka ssl truststore password → sensitive <password for the ssl truststore jks> .gcp/gmk bootstrap servers → environment specific bootstrap.<google-managed-kafka-cluster-name>.<google-managed-kafka-cluster-region name>.managedkafka.<google-managed-cluster-host-project-name>.cloud.goog:9092 .gcp/kafka connect group id → environment specific <Kafka Connect group id (unique per worker group) for the Kafka connect workers in distributed mode> .gcp/kafka config storage topic → environment specific <Kafka topic name used by Kafka Connect for tracking the config> .gcp/kafka offset storage topic → environment specific <Kafka topic name used by Kafka Connect for tracking the offsets> .gcp/kafka status storage topic → environment specific <Kafka topic name used by Kafka Connect for tracking the status> .gcp/kafka sink topic → environment specific <target sink Kafka topic name used by Kafka Connect for migrating the data from the Pub/Sub Lite topic> .gcp/pubsub lite gcp project → environment specific <Google Cloud project that hosts the Pub/Sub Lite source subscription to be used for migrating the Pub/Sub Lite topic to sink the Kafka topic> .gcp/pubsub lite gcp location → environment specific <Google Cloud location for the Pub/Sub Lite source subscription tor migrate the Pub/Sub Lite topic to sink Kafka topic> .gcp/pubsub lite subscription → environment specific <Pub/Sub Lite source subscription name to be used for migrating the pubsub lite topic to Kafka topic> Build the docker image by running the docker/build-image.sh file. ./push-image.sh Update the docker/push-image.sh image with your Google Cloud project name.
- Home Documentation Data analytics Pub/Sub Pub/Sub Lite Guides Send feedback Migrate from Pub/Sub Lite to Google Cloud Managed Service for Apache Kafka Stay organized with collections Save and categorize content based on your preferences.

### Migrate from Pub/Sub Lite to Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-pubsub](https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-pubsub)
- Source ID: `site-docs-root`
- Final score: 322
- Re-rank relevance: N/A

Evidence snippets:
- Dual-subscribe to Pub/Sub Lite and Pub/Sub topics In a development environment, update your subscriber clients to read messages directly from Pub/Sub topics, using the appropriate Pub/Sub client library .
- Key migration point If you want to replicate Pub/Sub Lite behavior in Pub/Sub (for example, low latency and high efficiency), implement your consumer clients using the StreamingPull API.
- For each subscriber application, run the Pub/Sub Lite subscriber and the new Pub/Sub subscriber in parallel, so you can verify the behavior and performance of the new subscriber.
- Before you begin Evaluate your existing Pub/Sub Lite application and map out the corresponding Pub/Sub features that you need.

### "Publishing messages to Lite topics \_|\_ Pub/Sub Lite \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/lite/docs/publishing](https://docs.cloud.google.com/pubsub/lite/docs/publishing)
- Source ID: `site-docs-root`
- Final score: 306
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Specify any of the following in the message: The message data An ordering key An event time Attributes with additional metadata The client library automatically assigns the message to a partition, and the Pub/Sub Lite service adds the following fields to the message: A message ID unique within the partition A timestamp for when the Pub/Sub Lite service stores the message in the partition Publishing messages To publish messages, request a streaming connection to the Lite topic and then send messages over the streaming connection.
- ApiFuture<String> future = publish er . publish ( pubsubMessage ); futures . add ( future ); } } finally { ArrayList<MessageMetadata> metadata = new ArrayList <> (); List<String> ackIds = ApiFutures . allAsList ( futures ). get (); for ( String id : ackIds ) { // Decoded metadata contains partition and offset. metadata . add ( MessageMetadata . decode ( id )); } System . out . println ( metadata + "\nPublished " + ackIds . size () + " messages." ); if ( publisher != null ) { // Shut down the publisher. publisher . stopAsync (). awaitTerminated (); System . out . println ( "Publisher is shut down." ); } } } } Python Before running this sample, follow the Python setup instructions in Pub/Sub Lite Client Libraries . from google.cloud.pubsublite.cloudpubsub import PublisherClient from google.cloud.pubsublite.types import ( CloudRegion , CloudZone , MessageMetadata , TopicPath , ) TODO(developer): project number = 1122334455 cloud region = "us-central1" zone id = "a" topic id = "your-topic-id" regional = True if regional : location = CloudRegion ( cloud region ) else : location = CloudZone ( CloudRegion ( cloud region ), zone id ) topic path = TopicPath ( project number , location , topic id ) PublisherClient() must be used in a with block or have enter () called before use. with PublisherClient () as publisher client : data = "Hello world!" api future = publisher client . publish ( topic path , data . encode ( "utf-8" )) result() blocks.
- For MacOS, Linux, and Cloud Shell users, run: sudo pip3 install grpcio export CLOUDSDK PYTHON SITEPACKAGES = 1 To publish a message, use the gcloud pubsub lite-topics publish command: gcloud pubsub lite-topics publish TOPIC ID \ --location = LITE LOCATION \ --message = MESSAGE DATA Replace the following: TOPIC ID : the ID of the Lite topic LITE LOCATION : the location of the Lite topic MESSAGE DATA : a string with the message data Go Before running this sample, follow the Go setup instructions in Pub/Sub Lite Client Libraries . package main import ( "context" "flag" "fmt" "log" "sync" "cloud.google.com/go/pubsub" "cloud.google.com/go/pubsublite/pscompat" "golang.org/x/sync/errgroup" ) func main () { // NOTE: Set these flags for an existing Pub/Sub Lite topic when running this // sample. projectID := flag .
- For MacOS, Linux, and Cloud Shell users, run: sudo pip3 install grpcio export CLOUDSDK PYTHON SITEPACKAGES = 1 To publish a message, use the gcloud pubsub lite-topics publish command: gcloud pubsub lite-topics publish TOPIC ID \ --location = LITE LOCATION \ --ordering-key = ORDERING KEY \ --message = MESSAGE DATA Replace the following: TOPIC ID : the ID of the Lite topic LITE LOCATION : the location of the Lite topic ORDERING KEY : a string used to assign messages to partitions MESSAGE DATA : a string with the message data Go Before running this sample, follow the Go setup instructions in Pub/Sub Lite Client Libraries . import ( "context" "fmt" "io" "cloud.google.com/go/pubsub" "cloud.google.com/go/pubsublite/pscompat" ) func publishWithOrderingKey ( w io .

### "Receiving messages from Lite subscriptions \_|\_ Pub/Sub Lite \_|\_ Google\

- URL: [https://docs.cloud.google.com/pubsub/lite/docs/subscribing](https://docs.cloud.google.com/pubsub/lite/docs/subscribing)
- Source ID: `site-docs-root`
- Final score: 306
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Must be greater than the allowed size of the largest message (1 MiB). bytes outstanding = 10 1024 1024 , ) def callback ( message : PubsubMessage ): message data = message . data . decode ( "utf-8" ) metadata = MessageMetadata . decode ( message . message id ) print ( f "Received { message data } of ordering key { message . ordering key } with id { metadata } ." ) message . ack () SubscriberClient() must be used in a with block or have enter () called before use. with SubscriberClient () as subscriber client : streaming pull future = subscriber client . subscribe ( subscription path , callback = callback , per partition flow control settings = per partition flow control settings , ) print ( f "Listening for messages on { str ( subscription path ) } ..." ) try : streaming pull future . result ( timeout = timeout ) except TimeoutError or KeyboardInterrupt : streaming pull future . cancel () assert streaming pull future . done () The client library establishes bidirectional streaming connections to each of the partitions in the Lite topic.
- This will change the state of the subscriber to TERMINATED. subscriber . stopAsync (). awaitTerminated (); System . out . println ( "Subscriber is shut down: " + subscriber . state ()); } } } Python Before running this sample, follow the Python setup instructions in Pub/Sub Lite Client Libraries . from concurrent.futures. base import TimeoutError from google.pubsub v1 import PubsubMessage from google.cloud.pubsublite.cloudpubsub import SubscriberClient from google.cloud.pubsublite.types import ( CloudRegion , CloudZone , FlowControlSettings , MessageMetadata , SubscriptionPath , ) TODO(developer): project number = 1122334455 cloud region = "us-central1" zone id = "a" subscription id = "your-subscription-id" timeout = 90 regional = True if regional : location = CloudRegion ( cloud region ) else : location = CloudZone ( CloudRegion ( cloud region ), zone id ) subscription path = SubscriptionPath ( project number , location , subscription id ) Configure when to pause the message stream for more incoming messages based on the maximum size or number of messages that a single-partition subscriber has received, whichever condition is met first. per partition flow control settings = FlowControlSettings ( 1,000 outstanding messages.
- For MacOS, Linux, and Cloud Shell users, run: sudo pip3 install grpcio export CLOUDSDK PYTHON SITEPACKAGES = 1 To receive messages, use the gcloud pubsub lite-subscriptions subscribe command: gcloud pubsub lite-subscriptions subscribe SUBSCRIPTION ID \ --location = LITE LOCATION \ --auto-ack Replace the following: SUBSCRIPTION ID : the ID of the Lite subscription LITE LOCATION : the location of the Lite subscription Go Before running this sample, follow the Go setup instructions in Pub/Sub Lite Client Libraries . package main import ( "context" "flag" "fmt" "log" "sync/atomic" "time" "cloud.google.com/go/pubsub" "cloud.google.com/go/pubsublite/pscompat" ) func main () { // NOTE: Set these flags for an existing Pub/Sub Lite subscription containing // published messages when running this sample. projectID := flag .
- Before receiving messages from a Lite subscription, create a Lite topic , create a Lite subscription to the Lite topic, and publish messages to the Lite topic.

