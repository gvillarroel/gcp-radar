---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.919Z"
product_name: "Pub/Sub Lite"
product_slug: "pub-sub-lite"
feature_name: "Regional Lite topics"
feature_slug: "regional-lite-topics"
latest_feature_date: "2022-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/lite/docs/topics"
  - "https://docs.cloud.google.com/pubsub/lite/docs/publishing"
  - "https://docs.cloud.google.com/pubsub/lite/docs/reservations"
  - "https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-pubsub"
keywords:
  - "regional"
  - "lite"
  - "topics"
  - "replicate"
  - "to"
  - "secondary"
  - "zone"
---

# Regional Lite topics

Product: Pub/Sub Lite
Coverage: MEDIUM

## Step 02 Summary

Regional Lite topics replicate data to a secondary zone.

## Extended Definition

Regional Lite topics replicate data to a secondary zone.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/lite/docs/topics](https://docs.cloud.google.com/pubsub/lite/docs/topics)
- [https://docs.cloud.google.com/pubsub/lite/docs/publishing](https://docs.cloud.google.com/pubsub/lite/docs/publishing)
- [https://docs.cloud.google.com/pubsub/lite/docs/reservations](https://docs.cloud.google.com/pubsub/lite/docs/reservations)
- [https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-pubsub](https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-pubsub)

## Supporting Pages

### Create and manage Lite topics \_|\_ Pub/Sub Lite \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/lite/docs/topics](https://docs.cloud.google.com/pubsub/lite/docs/topics)
- Source ID: `site-docs-root`
- Final score: 283
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- False if using a zonal location. // https://cloud.google.com/pubsub/lite/docs/topics boolean regional = false ; deleteTopicExample ( cloudRegion , zoneId , projectNumber , topicId , regional ); } public static void deleteTopicExample ( String cloudRegion , char zoneId , long projectNumber , String topicId , boolean regional ) throws Exception { CloudRegionOrZone location ; if ( regional ) { location = CloudRegionOrZone . of ( CloudRegion . of ( cloudRegion )); } else { location = CloudRegionOrZone . of ( CloudZone . of ( CloudRegion . of ( cloudRegion ), zoneId )); } TopicPath topicPath = TopicPath . newBuilder () . setProject ( ProjectNumber . of ( projectNumber )) . setLocation ( location ) . setName ( TopicName . of ( topicId )) . build (); AdminClientSettings adminClientSettings = AdminClientSettings . newBuilder (). setRegion ( CloudRegion . of ( cloudRegion )). build (); try ( AdminClient adminClient = AdminClient . create ( adminClientSettings )) { adminClient . deleteTopic ( topicPath ). get (); if ( regional ) { System . out . println ( topicPath . toString () + " (regional topic) deleted successfully." ); } else { System . out . println ( topicPath . toString () + " (zonal topic) deleted successfully." ); } } catch ( ExecutionException e ) { try { throw e . getCause (); } catch ( NotFoundException notFound ) { System . out . println ( "This topic is not found." ); } catch ( Throwable throwable ) { throwable . printStackTrace (); } } } Python Before running this sample, follow the Python setup instructions in Pub/Sub Lite Client Libraries . from google.api core.exceptions import NotFound from google.cloud.pubsublite import AdminClient from google.cloud.pubsublite.types import CloudRegion , CloudZone , TopicPath TODO(developer): project number = 1122334455 cloud region = "us-central1" zone id = "a" topic id = "your-topic-id" regional = True cloud region = CloudRegion ( cloud region ) topic path = None if regional : A regional topic. topic path = TopicPath ( project number , cloud region , topic id ) else : A zonal topic topic path = TopicPath ( project number , CloudZone ( cloud region , zone id ), topic id ) client = AdminClient ( cloud region ) try : client . delete topic ( topic path ) if regional : print ( f " { topic path } (regional topic) deleted successfully." ) else : print ( f " { topic path } (zonal topic) deleted successfully." ) except NotFound : print ( f " { topic path } not found." ) If you delete a Lite topic, you can't publish messages to it.
- False if using a zonal location. // https://cloud.google.com/pubsub/lite/docs/topics boolean regional = true ; getTopicExample ( cloudRegion , zoneId , projectNumber , topicId , regional ); } public static void getTopicExample ( String cloudRegion , char zoneId , long projectNumber , String topicId , boolean regional ) throws Exception { CloudRegionOrZone location ; if ( regional ) { location = CloudRegionOrZone . of ( CloudRegion . of ( cloudRegion )); } else { location = CloudRegionOrZone . of ( CloudZone . of ( CloudRegion . of ( cloudRegion ), zoneId )); } TopicPath topicPath = TopicPath . newBuilder () . setProject ( ProjectNumber . of ( projectNumber )) . setLocation ( location ) . setName ( TopicName . of ( topicId )) . build (); AdminClientSettings adminClientSettings = AdminClientSettings . newBuilder (). setRegion ( CloudRegion . of ( cloudRegion )). build (); try ( AdminClient adminClient = AdminClient . create ( adminClientSettings )) { Topic topic = adminClient . getTopic ( topicPath ). get (); long numPartitions = adminClient . getTopicPartitionCount ( topicPath ). get (); System . out . println ( topic . getAllFields () + "\nhas " + numPartitions + " partition(s)." ); } catch ( ExecutionException e ) { try { throw e . getCause (); } catch ( NotFoundException notFound ) { System . out . println ( "This topic is not found." ); } catch ( Throwable throwable ) { throwable . printStackTrace (); } } } } Python Before running this sample, follow the Python setup instructions in Pub/Sub Lite Client Libraries . from google.api core.exceptions import NotFound from google.cloud.pubsublite import AdminClient from google.cloud.pubsublite.types import CloudRegion , CloudZone , TopicPath TODO(developer): project number = 1122334455 cloud region = "us-central1" zone id = "a" topic id = "your-topic-id" regional = True location = None if regional : A region. location = CloudRegion ( cloud region ) else : A zone. location = CloudZone ( CloudRegion ( cloud region ), zone id ) topic path = TopicPath ( project number , location , topic id ) client = AdminClient ( cloud region ) try : response = client . get topic ( topic path ) num partitions = client . get topic partition count ( topic path ) print ( f " { response . name } has { num partitions } partition(s)." ) except NotFound : print ( f " { topic path } not found." ) List Lite topics You can list Lite topics in a project using the Google Cloud console, the Google Cloud CLI, or the Pub/Sub Lite API.
- False if using a zonal location. // https://cloud.google.com/pubsub/lite/docs/topics boolean regional = true ; listTopicsExample ( cloudRegion , zoneId , projectNumber , regional ); } public static void listTopicsExample ( String cloudRegion , char zoneId , long projectNumber , boolean regional ) throws Exception { AdminClientSettings adminClientSettings = AdminClientSettings . newBuilder (). setRegion ( CloudRegion . of ( cloudRegion )). build (); CloudRegionOrZone location ; if ( regional ) { location = CloudRegionOrZone . of ( CloudRegion . of ( cloudRegion )); } else { location = CloudRegionOrZone . of ( CloudZone . of ( CloudRegion . of ( cloudRegion ), zoneId )); } LocationPath locationPath = LocationPath . newBuilder () . setProject ( ProjectNumber . of ( projectNumber )) . setLocation ( location ) . build (); try ( AdminClient adminClient = AdminClient . create ( adminClientSettings )) { List<Topic> topics = adminClient . listTopics ( locationPath ). get (); for ( Topic topic : topics ) { System . out . println ( topic . getAllFields ()); } System . out . println ( topics . size () + " topic(s) listed." ); } } } Python Before running this sample, follow the Python setup instructions in Pub/Sub Lite Client Libraries . from google.cloud.pubsublite import AdminClient from google.cloud.pubsublite.types import CloudRegion , CloudZone , LocationPath TODO(developer): project number = 1122334455 cloud region = "us-central1" zone id = "a" regional = True location = None if regional : A region. location = CloudRegion ( cloud region ) else : A zone. location = CloudZone ( CloudRegion ( cloud region ), zone id ) location path = LocationPath ( project number , location ) client = AdminClient ( cloud region ) response = client . list topics ( location path ) for topic in response : print ( topic ) print ( f " { len ( response ) } topic(s) listed in your project and location." ) Delete a Lite topic You can delete Lite topics with the Google Cloud console, the Google Cloud CLI, or the Pub/Sub Lite API.
- False if using a zonal location. // https://cloud.google.com/pubsub/lite/docs/topics boolean regional = true ; updateTopicExample ( cloudRegion , zoneId , projectNumber , topicId , reservationId , regional ); } public static void updateTopicExample ( String cloudRegion , char zoneId , long projectNumber , String topicId , String reservationId , boolean regional ) throws Exception { CloudRegionOrZone location ; if ( regional ) { location = CloudRegionOrZone . of ( CloudRegion . of ( cloudRegion )); } else { location = CloudRegionOrZone . of ( CloudZone . of ( CloudRegion . of ( cloudRegion ), zoneId )); } TopicPath topicPath = TopicPath . newBuilder () . setProject ( ProjectNumber . of ( projectNumber )) . setLocation ( location ) . setName ( TopicName . of ( topicId )) . build (); ReservationPath reservationPath = ReservationPath . newBuilder () . setProject ( ProjectNumber . of ( projectNumber )) . setLocation ( CloudRegion . of ( cloudRegion )) . setName ( ReservationName . of ( reservationId )) . build (); Iterable<String> iterablePaths = Arrays . asList ( "partition config.scale" , "retention config.per partition bytes" , "retention config.period" , "reservation config.throughput reservation" ); FieldMask fieldMask = FieldMask . newBuilder (). addAllPaths ( iterablePaths ). build (); Topic topic = Topic . newBuilder () . setPartitionConfig ( PartitionConfig . newBuilder () . setCapacity ( Capacity . newBuilder () . setPublishMibPerSec ( 16 ) . setSubscribeMibPerSec ( 32 ) . build ()) . build ()) . setRetentionConfig ( RetentionConfig . newBuilder () // Set storage per partition to 32 GiB.

### "Publishing messages to Lite topics \_|\_ Pub/Sub Lite \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/lite/docs/publishing](https://docs.cloud.google.com/pubsub/lite/docs/publishing)
- Source ID: `site-docs-root`
- Final score: 227
- Re-rank relevance: N/A

Evidence snippets:
- False if using a zonal location. // https://cloud.google.com/pubsub/lite/docs/topics boolean regional = false ; publishWithBatchSettingsExample ( cloudRegion , zoneId , projectNumber , topicId , messageCount , regional ); } // Publish messages to a topic with batch settings. public static void publishWithBatchSettingsExample ( String cloudRegion , char zoneId , long projectNumber , String topicId , int messageCount , boolean regional ) throws ApiException , ExecutionException , InterruptedException { CloudRegionOrZone location ; if ( regional ) { location = CloudRegionOrZone . of ( CloudRegion . of ( cloudRegion )); } else { location = CloudRegionOrZone . of ( CloudZone . of ( CloudRegion . of ( cloudRegion ), zoneId )); } TopicPath topicPath = TopicPath . newBuilder () . setProject ( ProjectNumber . of ( projectNumber )) . setLocation ( location ) . setName ( TopicName . of ( topicId )) . build (); Publisher publisher = null ; List<ApiFuture<String> > futures = new ArrayList <> (); try { // Batch settings control how the publisher batches messages long requestBytesThreshold = 5000L ; // default : 3 500 000 bytes long messageCountBatchSize = 100L ; // default : 1000L message Duration publishDelayThreshold = Duration . ofMillis ( 100 ); // default : 50 ms // Publish request get triggered based on request size, messages count & time since last // publish, whichever condition is met first.
- False if using a zonal location. // https://cloud.google.com/pubsub/lite/docs/topics boolean regional = false ; publisherExample ( cloudRegion , zoneId , projectNumber , topicId , messageCount , regional ); } // Publish messages to a topic. public static void publisherExample ( String cloudRegion , char zoneId , long projectNumber , String topicId , int messageCount , boolean regional ) throws ApiException , ExecutionException , InterruptedException { CloudRegionOrZone location ; if ( regional ) { location = CloudRegionOrZone . of ( CloudRegion . of ( cloudRegion )); } else { location = CloudRegionOrZone . of ( CloudZone . of ( CloudRegion . of ( cloudRegion ), zoneId )); } TopicPath topicPath = TopicPath . newBuilder () . setProject ( ProjectNumber . of ( projectNumber )) . setLocation ( location ) . setName ( TopicName . of ( topicId )) . build (); Publisher publisher = null ; List<ApiFuture<String> > futures = new ArrayList <> (); try { PublisherSettings publisherSettings = PublisherSettings . newBuilder (). setTopicPath ( topicPath ). build (); publisher = Publisher . create ( publisherSettings ); // Start the publisher.
- False if using a zonal location. // https://cloud.google.com/pubsub/lite/docs/topics boolean regional = false ; publishWithCustomAttributesExample ( cloudRegion , zoneId , projectNumber , topicId , regional ); } // Publish messages to a topic with custom attributes. public static void publishWithCustomAttributesExample ( String cloudRegion , char zoneId , long projectNumber , String topicId , boolean regional ) throws ApiException , ExecutionException , InterruptedException { CloudRegionOrZone location ; if ( regional ) { location = CloudRegionOrZone . of ( CloudRegion . of ( cloudRegion )); } else { location = CloudRegionOrZone . of ( CloudZone . of ( CloudRegion . of ( cloudRegion ), zoneId )); } TopicPath topicPath = TopicPath . newBuilder () . setProject ( ProjectNumber . of ( projectNumber )) . setLocation ( location ) . setName ( TopicName . of ( topicId )) . build (); PublisherSettings publisherSettings = PublisherSettings . newBuilder (). setTopicPath ( topicPath ). build (); Publisher publisher = Publisher . create ( publisherSettings ); // Start the publisher.
- False if using a zonal location. // https://cloud.google.com/pubsub/lite/docs/topics boolean regional = false ; publishWithOrderingKeyExample ( cloudRegion , zoneId , projectNumber , topicId , regional ); } // Publish a message to a topic with an ordering key. public static void publishWithOrderingKeyExample ( String cloudRegion , char zoneId , long projectNumber , String topicId , boolean regional ) throws ApiException , ExecutionException , InterruptedException { CloudRegionOrZone location ; if ( regional ) { location = CloudRegionOrZone . of ( CloudRegion . of ( cloudRegion )); } else { location = CloudRegionOrZone . of ( CloudZone . of ( CloudRegion . of ( cloudRegion ), zoneId )); } TopicPath topicPath = TopicPath . newBuilder () . setProject ( ProjectNumber . of ( projectNumber )) . setLocation ( location ) . setName ( TopicName . of ( topicId )) . build (); PublisherSettings publisherSettings = PublisherSettings . newBuilder (). setTopicPath ( topicPath ). build (); Publisher publisher = Publisher . create ( publisherSettings ); // Start the publisher.

### "Create and manage Lite reservations \_|\_ Pub/Sub Lite \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/lite/docs/reservations](https://docs.cloud.google.com/pubsub/lite/docs/reservations)
- Source ID: `site-docs-root`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Create . gcloud To create a Lite reservation, use the gcloud pubsub lite-reservations create command: gcloud pubsub lite-reservations create myRes \ --location = us-central1 \ --throughput-capacity = INTEGER NUMBER OF UNITS gcloud pubsub lite-topics create myTopic \ --throughput-reservation = myRez \ --zone = ZONE \ --location = us-central1a \ --partitions \ --storage Go Before running this sample, follow the Go setup instructions in Pub/Sub Lite Client Libraries . import ( "context" "fmt" "io" "cloud.google.com/go/pubsublite" ) func createReservation ( w io .
- The following is the formula to calculate the capacity units required for a sample Lite reservation: Peak publish throughput of the zonal Lite topics = Pz MiBps Peak publish throughput of the regional Lite topics = Pr MiBps Peak subscribe throughput of the zonal Lite topics = Sz MiBps Peak subscribe throughput of the regional Lite topics = Sr MiBps Number of capacity units required = (Pz / 1 MiBps) + (Pr/0.25 MiBps) + (Sz/2 MiBps) + (Sr/0.5 MiBps) If the number is not whole, you must round up the value.
- Guidelines for using a Lite reservation Provisioning throughput with Lite reservations is required for regional Lite topics and is optional for zonal Lite topics.
- You can attach a single Lite reservation to both zonal and regional Lite topics.

### Migrate from Pub/Sub Lite to Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-pubsub](https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-pubsub)
- Source ID: `site-docs-root`
- Final score: 217
- Re-rank relevance: N/A

Evidence snippets:
- Regional Pub/Sub Lite topics replicate data to a secondary zone within the same region.
- Zonal Pub/Sub Lite topics store data in a single zone without replication.
- Dual-subscribe to Pub/Sub Lite and Pub/Sub topics In a development environment, update your subscriber clients to read messages directly from Pub/Sub topics, using the appropriate Pub/Sub client library .
- Key migration point If you want to replicate Pub/Sub Lite behavior in Pub/Sub (for example, low latency and high efficiency), implement your consumer clients using the StreamingPull API.

