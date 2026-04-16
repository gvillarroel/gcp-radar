---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.921Z"
product_name: "Pub/Sub Lite"
product_slug: "pub-sub-lite"
feature_name: "Pub/Sub Lite regional availability"
feature_slug: "pub-sub-lite-regional-availability"
latest_feature_date: "2021-05-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/lite/docs/publishing"
  - "https://docs.cloud.google.com/pubsub/lite/docs/subscribing"
  - "https://docs.cloud.google.com/pubsub/lite/docs/publish-receive-messages-console"
  - "https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-pubsub"
keywords:
  - "pub"
  - "sub"
  - "lite"
  - "regional"
  - "availability"
  - "is"
  - "available"
  - "in"
---

# Pub/Sub Lite regional availability

Product: Pub/Sub Lite
Coverage: MEDIUM

## Step 02 Summary

Pub/Sub Lite is available in additional regions including Hong Kong, Tokyo, Osaka, Seoul, Mumbai, Jakarta, Warsaw, Montreal, Sao Paulo, Northern Virginia, Salt Lake City, and Las Vegas.

## Extended Definition

Pub/Sub Lite is available in additional regions including Hong Kong, Tokyo, Osaka, Seoul, Mumbai, Jakarta, Warsaw, Montreal, Sao Paulo, Northern Virginia, Salt Lake City, and Las Vegas.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/lite/docs/publishing](https://docs.cloud.google.com/pubsub/lite/docs/publishing)
- [https://docs.cloud.google.com/pubsub/lite/docs/subscribing](https://docs.cloud.google.com/pubsub/lite/docs/subscribing)
- [https://docs.cloud.google.com/pubsub/lite/docs/publish-receive-messages-console](https://docs.cloud.google.com/pubsub/lite/docs/publish-receive-messages-console)
- [https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-pubsub](https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-pubsub)

## Supporting Pages

### "Publishing messages to Lite topics \_|\_ Pub/Sub Lite \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/lite/docs/publishing](https://docs.cloud.google.com/pubsub/lite/docs/publishing)
- Source ID: `site-docs-root`
- Final score: 348
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ApiFuture<String> future = publish er . publish ( pubsubMessage ); futures . add ( future ); } } finally { ArrayList<MessageMetadata> metadata = new ArrayList <> (); List<String> ackIds = ApiFutures . allAsList ( futures ). get (); for ( String id : ackIds ) { // Decoded metadata contains partition and offset. metadata . add ( MessageMetadata . decode ( id )); } System . out . println ( metadata + "\nPublished " + ackIds . size () + " messages." ); if ( publisher != null ) { // Shut down the publisher. publisher . stopAsync (). awaitTerminated (); System . out . println ( "Publisher is shut down." ); } } } } Python Before running this sample, follow the Python setup instructions in Pub/Sub Lite Client Libraries . from google.cloud.pubsublite.cloudpubsub import PublisherClient from google.cloud.pubsublite.types import ( CloudRegion , CloudZone , MessageMetadata , TopicPath , ) TODO(developer): project number = 1122334455 cloud region = "us-central1" zone id = "a" topic id = "your-topic-id" regional = True if regional : location = CloudRegion ( cloud region ) else : location = CloudZone ( CloudRegion ( cloud region ), zone id ) topic path = TopicPath ( project number , location , topic id ) PublisherClient() must be used in a with block or have enter () called before use. with PublisherClient () as publisher client : data = "Hello world!" api future = publisher client . publish ( topic path , data . encode ( "utf-8" )) result() blocks.
- False if using a zonal location. // https://cloud.google.com/pubsub/lite/docs/topics boolean regional = false ; publishWithBatchSettingsExample ( cloudRegion , zoneId , projectNumber , topicId , messageCount , regional ); } // Publish messages to a topic with batch settings. public static void publishWithBatchSettingsExample ( String cloudRegion , char zoneId , long projectNumber , String topicId , int messageCount , boolean regional ) throws ApiException , ExecutionException , InterruptedException { CloudRegionOrZone location ; if ( regional ) { location = CloudRegionOrZone . of ( CloudRegion . of ( cloudRegion )); } else { location = CloudRegionOrZone . of ( CloudZone . of ( CloudRegion . of ( cloudRegion ), zoneId )); } TopicPath topicPath = TopicPath . newBuilder () . setProject ( ProjectNumber . of ( projectNumber )) . setLocation ( location ) . setName ( TopicName . of ( topicId )) . build (); Publisher publisher = null ; List<ApiFuture<String> > futures = new ArrayList <> (); try { // Batch settings control how the publisher batches messages long requestBytesThreshold = 5000L ; // default : 3 500 000 bytes long messageCountBatchSize = 100L ; // default : 1000L message Duration publishDelayThreshold = Duration . ofMillis ( 100 ); // default : 50 ms // Publish request get triggered based on request size, messages count & time since last // publish, whichever condition is met first.
- ApiFuture<String> future = publish er . publish ( pubsubMessage ); // Shut down the publisher. publisher . stopAsync (). awaitTerminated (); String ackId = future . get (); MessageMetadata metadata = MessageMetadata . decode ( ackId ); System . out . println ( "Published a message with ordering key:\n" + metadata ); } } Python Before running this sample, follow the Python setup instructions in Pub/Sub Lite Client Libraries . from google.cloud.pubsublite.cloudpubsub import PublisherClient from google.cloud.pubsublite.types import ( CloudRegion , CloudZone , MessageMetadata , TopicPath , ) TODO(developer): project number = 1122334455 cloud region = "us-central1" zone id = "a" topic id = "your-topic-id" num messages = 100 regional = True if regional : location = CloudRegion ( cloud region ) else : location = CloudZone ( CloudRegion ( cloud region ), zone id ) topic path = TopicPath ( project number , location , topic id ) PublisherClient() must be used in a with block or have enter () called before use. with PublisherClient () as publisher client : for message in range ( num messages ): data = f " { message } " Messages of the same ordering key will always get published to the same partition.
- ApiFuture<String> future = publish er . publish ( pubsubMessage ); // Shut down the publisher. publisher . stopAsync (). awaitTerminated (); String ackId = future . get (); MessageMetadata metadata = MessageMetadata . decode ( ackId ); System . out . println ( "Published a message with custom attributes:\n" + metadata ); } } Python Before running this sample, follow the Python setup instructions in Pub/Sub Lite Client Libraries . from google.cloud.pubsublite.cloudpubsub import PublisherClient from google.cloud.pubsublite.types import ( CloudRegion , CloudZone , MessageMetadata , TopicPath , ) TODO(developer): project number = 1122334455 cloud region = "us-central1" zone id = "a" topic id = "your-topic-id" regional = True if regional : location = CloudRegion ( cloud region ) else : location = CloudZone ( CloudRegion ( cloud region ), zone id ) topic path = TopicPath ( project number , location , topic id ) PublisherClient() must be used in a with block or have enter () called before use. with PublisherClient () as publisher client : data = "Hello world!" api future = publisher client . publish ( topic path , data . encode ( "utf-8" ), year = "2020" , author = "unknown" , ) result() blocks.

### "Receiving messages from Lite subscriptions \_|\_ Pub/Sub Lite \_|\_ Google\

- URL: [https://docs.cloud.google.com/pubsub/lite/docs/subscribing](https://docs.cloud.google.com/pubsub/lite/docs/subscribing)
- Source ID: `site-docs-root`
- Final score: 324
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This will change the state of the subscriber to TERMINATED. subscriber . stopAsync (). awaitTerminated (); System . out . println ( "Subscriber is shut down: " + subscriber . state ()); } } } Python Before running this sample, follow the Python setup instructions in Pub/Sub Lite Client Libraries . from concurrent.futures. base import TimeoutError from google.pubsub v1 import PubsubMessage from google.cloud.pubsublite.cloudpubsub import SubscriberClient from google.cloud.pubsublite.types import ( CloudRegion , CloudZone , FlowControlSettings , MessageMetadata , SubscriptionPath , ) TODO(developer): project number = 1122334455 cloud region = "us-central1" zone id = "a" subscription id = "your-subscription-id" timeout = 90 regional = True if regional : location = CloudRegion ( cloud region ) else : location = CloudZone ( CloudRegion ( cloud region ), zone id ) subscription path = SubscriptionPath ( project number , location , subscription id ) Configure when to pause the message stream for more incoming messages based on the maximum size or number of messages that a single-partition subscriber has received, whichever condition is met first. per partition flow control settings = FlowControlSettings ( 1,000 outstanding messages.
- False if using a zonal location. // https://cloud.google.com/pubsub/lite/docs/topics boolean regional = false ; subscriberExample ( cloudRegion , zoneId , projectNumber , subscriptionId , regional ); } public static void subscriberExample ( String cloudRegion , char zoneId , long projectNumber , String subscriptionId , boolean regional ) throws ApiException { CloudRegionOrZone location ; if ( regional ) { location = CloudRegionOrZone . of ( CloudRegion . of ( cloudRegion )); } else { location = CloudRegionOrZone . of ( CloudZone . of ( CloudRegion . of ( cloudRegion ), zoneId )); } SubscriptionPath subscriptionPath = SubscriptionPath . newBuilder () . setLocation ( location ) . setProject ( ProjectNumber . of ( projectNumber )) . setName ( SubscriptionName . of ( subscriptionId )) . build (); // The message stream is paused based on the maximum size or number of messages that the // subscriber has already received, whichever condition is met first.
- Must be greater than the allowed size of the largest message (1 MiB). bytes outstanding = 10 1024 1024 , ) def callback ( message : PubsubMessage ): message data = message . data . decode ( "utf-8" ) metadata = MessageMetadata . decode ( message . message id ) print ( f "Received { message data } of ordering key { message . ordering key } with id { metadata } ." ) message . ack () SubscriberClient() must be used in a with block or have enter () called before use. with SubscriberClient () as subscriber client : streaming pull future = subscriber client . subscribe ( subscription path , callback = callback , per partition flow control settings = per partition flow control settings , ) print ( f "Listening for messages on { str ( subscription path ) } ..." ) try : streaming pull future . result ( timeout = timeout ) except TimeoutError or KeyboardInterrupt : streaming pull future . cancel () assert streaming pull future . done () The client library establishes bidirectional streaming connections to each of the partitions in the Lite topic.
- For MacOS, Linux, and Cloud Shell users, run: sudo pip3 install grpcio export CLOUDSDK PYTHON SITEPACKAGES = 1 To receive messages, use the gcloud pubsub lite-subscriptions subscribe command: gcloud pubsub lite-subscriptions subscribe SUBSCRIPTION ID \ --location = LITE LOCATION \ --auto-ack Replace the following: SUBSCRIPTION ID : the ID of the Lite subscription LITE LOCATION : the location of the Lite subscription Go Before running this sample, follow the Go setup instructions in Pub/Sub Lite Client Libraries . package main import ( "context" "flag" "fmt" "log" "sync/atomic" "time" "cloud.google.com/go/pubsub" "cloud.google.com/go/pubsublite/pscompat" ) func main () { // NOTE: Set these flags for an existing Pub/Sub Lite subscription containing // published messages when running this sample. projectID := flag .

### "Quickstart: Publish and receive messages in Pub/Sub by using the client\

- URL: [https://docs.cloud.google.com/pubsub/lite/docs/publish-receive-messages-console](https://docs.cloud.google.com/pubsub/lite/docs/publish-receive-messages-console)
- Source ID: `site-docs-root`
- Final score: 322
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- False if using a zonal location. // https://cloud.google.com/pubsub/lite/docs/topics boolean regional = false ; publisherExample ( cloudRegion , zoneId , projectNumber , topicId , messageCount , regional ); } // Publish messages to a topic. public static void publisherExample ( String cloudRegion , char zoneId , long projectNumber , String topicId , int messageCount , boolean regional ) throws ApiException , ExecutionException , InterruptedException { CloudRegionOrZone location ; if ( regional ) { location = CloudRegionOrZone . of ( CloudRegion . of ( cloudRegion )); } else { location = CloudRegionOrZone . of ( CloudZone . of ( CloudRegion . of ( cloudRegion ), zoneId )); } TopicPath topicPath = TopicPath . newBuilder () . setProject ( ProjectNumber . of ( projectNumber )) . setLocation ( location ) . setName ( TopicName . of ( topicId )) . build (); Publisher publisher = null ; List<ApiFuture<String> > futures = new ArrayList <> (); try { PublisherSettings publisherSettings = PublisherSettings . newBuilder (). setTopicPath ( topicPath ). build (); publisher = Publisher . create ( publisherSettings ); // Start the publisher.
- For more information, see Set up authentication for a local development environment . from concurrent.futures. base import TimeoutError from google.pubsub v1 import PubsubMessage from google.cloud.pubsublite.cloudpubsub import SubscriberClient from google.cloud.pubsublite.types import ( CloudRegion , CloudZone , FlowControlSettings , MessageMetadata , SubscriptionPath , ) TODO(developer): project number = 1122334455 cloud region = "us-central1" zone id = "a" subscription id = "your-subscription-id" timeout = 90 regional = True if regional : location = CloudRegion ( cloud region ) else : location = CloudZone ( CloudRegion ( cloud region ), zone id ) subscription path = SubscriptionPath ( project number , location , subscription id ) Configure when to pause the message stream for more incoming messages based on the maximum size or number of messages that a single-partition subscriber has received, whichever condition is met first. per partition flow control settings = FlowControlSettings ( 1,000 outstanding messages.
- False if using a zonal location. // https://cloud.google.com/pubsub/lite/docs/topics boolean regional = false ; subscriberExample ( cloudRegion , zoneId , projectNumber , subscriptionId , regional ); } public static void subscriberExample ( String cloudRegion , char zoneId , long projectNumber , String subscriptionId , boolean regional ) throws ApiException { CloudRegionOrZone location ; if ( regional ) { location = CloudRegionOrZone . of ( CloudRegion . of ( cloudRegion )); } else { location = CloudRegionOrZone . of ( CloudZone . of ( CloudRegion . of ( cloudRegion ), zoneId )); } SubscriptionPath subscriptionPath = SubscriptionPath . newBuilder () . setLocation ( location ) . setProject ( ProjectNumber . of ( projectNumber )) . setName ( SubscriptionName . of ( subscriptionId )) . build (); // The message stream is paused based on the maximum size or number of messages that the // subscriber has already received, whichever condition is met first.
- For more information, see Set up authentication for a local development environment . from google.cloud.pubsublite.cloudpubsub import PublisherClient from google.cloud.pubsublite.types import ( CloudRegion , CloudZone , MessageMetadata , TopicPath , ) TODO(developer): project number = 1122334455 cloud region = "us-central1" zone id = "a" topic id = "your-topic-id" regional = True if regional : location = CloudRegion ( cloud region ) else : location = CloudZone ( CloudRegion ( cloud region ), zone id ) topic path = TopicPath ( project number , location , topic id ) PublisherClient() must be used in a with block or have enter () called before use. with PublisherClient () as publisher client : data = "Hello world!" api future = publisher client . publish ( topic path , data . encode ( "utf-8" )) result() blocks.

### Migrate from Pub/Sub Lite to Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-pubsub](https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-pubsub)
- Source ID: `site-docs-root`
- Final score: 320
- Re-rank relevance: N/A

Evidence snippets:
- These include the following considerations: Data locality and replication Delivery modes Parallelism and ordering Replay and purge Capacity management and Pricing Data locality and replication Pub/Sub Lite .
- By the end of this phase, your Pub/Sub Lite and Pub/Sub topics both receive the same messages from the point the export subscriptions were created.
- Configuring these settings is crucial if you need exact parity with Pub/Sub Lite or if your migration requires message replay or purging.
- Pub/Sub Lite capacity is manually provisioned by configuring storage and throughput capacity using Pub/Sub Lite reservations .

