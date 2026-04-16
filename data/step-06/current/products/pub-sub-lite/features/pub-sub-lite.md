---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.922Z"
product_name: "Pub/Sub Lite"
product_slug: "pub-sub-lite"
feature_name: "Pub/Sub Lite"
feature_slug: "pub-sub-lite"
latest_feature_date: "2020-10-09"
deprecation_date: "2026-03-18"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/lite/docs/publishing"
  - "https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-pubsub"
  - "https://docs.cloud.google.com/pubsub/lite/docs/subscribing"
  - "https://docs.cloud.google.com/pubsub/lite/docs/subscriptions"
keywords:
  - "pub"
  - "sub"
  - "lite"
  - "is"
  - "deprecated"
  - "and"
  - "will"
  - "be"
---

# Pub/Sub Lite

Product: Pub/Sub Lite
Coverage: MEDIUM

## Step 02 Summary

Pub/Sub Lite is deprecated and will be turned down on the announced shutdown date; Pub/Sub Lite is generally available; deprecated on 2026-03-18.

## Extended Definition

Pub/Sub Lite is deprecated and will be turned down on the announced shutdown date; Pub/Sub Lite is generally available; deprecated on 2026-03-18.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/lite/docs/publishing](https://docs.cloud.google.com/pubsub/lite/docs/publishing)
- [https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-pubsub](https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-pubsub)
- [https://docs.cloud.google.com/pubsub/lite/docs/subscribing](https://docs.cloud.google.com/pubsub/lite/docs/subscribing)
- [https://docs.cloud.google.com/pubsub/lite/docs/subscriptions](https://docs.cloud.google.com/pubsub/lite/docs/subscriptions)

## Supporting Pages

### "Publishing messages to Lite topics \_|\_ Pub/Sub Lite \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/lite/docs/publishing](https://docs.cloud.google.com/pubsub/lite/docs/publishing)
- Source ID: `site-docs-root`
- Final score: 403
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ApiFuture<String> future = publish er . publish ( pubsubMessage ); futures . add ( future ); } } finally { ArrayList<MessageMetadata> metadata = new ArrayList <> (); List<String> ackIds = ApiFutures . allAsList ( futures ). get (); for ( String id : ackIds ) { // Decoded metadata contains partition and offset. metadata . add ( MessageMetadata . decode ( id )); } System . out . println ( metadata + "\nPublished " + ackIds . size () + " messages." ); if ( publisher != null ) { // Shut down the publisher. publisher . stopAsync (). awaitTerminated (); System . out . println ( "Publisher is shut down." ); } } } } Python Before running this sample, follow the Python setup instructions in Pub/Sub Lite Client Libraries . from google.cloud.pubsublite.cloudpubsub import PublisherClient from google.cloud.pubsublite.types import ( CloudRegion , CloudZone , MessageMetadata , TopicPath , ) TODO(developer): project number = 1122334455 cloud region = "us-central1" zone id = "a" topic id = "your-topic-id" regional = True if regional : location = CloudRegion ( cloud region ) else : location = CloudZone ( CloudRegion ( cloud region ), zone id ) topic path = TopicPath ( project number , location , topic id ) PublisherClient() must be used in a with block or have enter () called before use. with PublisherClient () as publisher client : data = "Hello world!" api future = publisher client . publish ( topic path , data . encode ( "utf-8" )) result() blocks.
- ApiFuture<String> future = publish er . publish ( pubsubMessage ); // Shut down the publisher. publisher . stopAsync (). awaitTerminated (); String ackId = future . get (); MessageMetadata metadata = MessageMetadata . decode ( ackId ); System . out . println ( "Published a message with ordering key:\n" + metadata ); } } Python Before running this sample, follow the Python setup instructions in Pub/Sub Lite Client Libraries . from google.cloud.pubsublite.cloudpubsub import PublisherClient from google.cloud.pubsublite.types import ( CloudRegion , CloudZone , MessageMetadata , TopicPath , ) TODO(developer): project number = 1122334455 cloud region = "us-central1" zone id = "a" topic id = "your-topic-id" num messages = 100 regional = True if regional : location = CloudRegion ( cloud region ) else : location = CloudZone ( CloudRegion ( cloud region ), zone id ) topic path = TopicPath ( project number , location , topic id ) PublisherClient() must be used in a with block or have enter () called before use. with PublisherClient () as publisher client : for message in range ( num messages ): data = f " { message } " Messages of the same ordering key will always get published to the same partition.
- For MacOS, Linux, and Cloud Shell users, run: sudo pip3 install grpcio export CLOUDSDK PYTHON SITEPACKAGES = 1 To publish a message, use the gcloud pubsub lite-topics publish command: gcloud pubsub lite-topics publish TOPIC ID \ --location = LITE LOCATION \ --message = MESSAGE DATA Replace the following: TOPIC ID : the ID of the Lite topic LITE LOCATION : the location of the Lite topic MESSAGE DATA : a string with the message data Go Before running this sample, follow the Go setup instructions in Pub/Sub Lite Client Libraries . package main import ( "context" "flag" "fmt" "log" "sync" "cloud.google.com/go/pubsub" "cloud.google.com/go/pubsublite/pscompat" "golang.org/x/sync/errgroup" ) func main () { // NOTE: Set these flags for an existing Pub/Sub Lite topic when running this // sample. projectID := flag .
- For MacOS, Linux, and Cloud Shell users, run: sudo pip3 install grpcio export CLOUDSDK PYTHON SITEPACKAGES = 1 To publish a message, use the gcloud pubsub lite-topics publish command: gcloud pubsub lite-topics publish TOPIC ID \ --location = LITE LOCATION \ --ordering-key = ORDERING KEY \ --message = MESSAGE DATA Replace the following: TOPIC ID : the ID of the Lite topic LITE LOCATION : the location of the Lite topic ORDERING KEY : a string used to assign messages to partitions MESSAGE DATA : a string with the message data Go Before running this sample, follow the Go setup instructions in Pub/Sub Lite Client Libraries . import ( "context" "fmt" "io" "cloud.google.com/go/pubsub" "cloud.google.com/go/pubsublite/pscompat" ) func publishWithOrderingKey ( w io .

### Migrate from Pub/Sub Lite to Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-pubsub](https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-pubsub)
- Source ID: `site-docs-root`
- Final score: 403
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Turn down Pub/Sub Lite After you have successfully migrated all your subscribers and publishers to Pub/Sub, you can shut down your Pub/Sub Lite resources.
- Before you begin Evaluate your existing Pub/Sub Lite application and map out the corresponding Pub/Sub features that you need.
- After all subscribers are successfully migrated and validated, decommission the old Pub/Sub Lite subscriber clients.
- Turn down Pub/Sub Lite publishers and subscribers.

### "Receiving messages from Lite subscriptions \_|\_ Pub/Sub Lite \_|\_ Google\

- URL: [https://docs.cloud.google.com/pubsub/lite/docs/subscribing](https://docs.cloud.google.com/pubsub/lite/docs/subscribing)
- Source ID: `site-docs-root`
- Final score: 379
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This will change the state of the subscriber to TERMINATED. subscriber . stopAsync (). awaitTerminated (); System . out . println ( "Subscriber is shut down: " + subscriber . state ()); } } } Python Before running this sample, follow the Python setup instructions in Pub/Sub Lite Client Libraries . from concurrent.futures. base import TimeoutError from google.pubsub v1 import PubsubMessage from google.cloud.pubsublite.cloudpubsub import SubscriberClient from google.cloud.pubsublite.types import ( CloudRegion , CloudZone , FlowControlSettings , MessageMetadata , SubscriptionPath , ) TODO(developer): project number = 1122334455 cloud region = "us-central1" zone id = "a" subscription id = "your-subscription-id" timeout = 90 regional = True if regional : location = CloudRegion ( cloud region ) else : location = CloudZone ( CloudRegion ( cloud region ), zone id ) subscription path = SubscriptionPath ( project number , location , subscription id ) Configure when to pause the message stream for more incoming messages based on the maximum size or number of messages that a single-partition subscriber has received, whichever condition is met first. per partition flow control settings = FlowControlSettings ( 1,000 outstanding messages.
- Must be greater than the allowed size of the largest message (1 MiB). bytes outstanding = 10 1024 1024 , ) def callback ( message : PubsubMessage ): message data = message . data . decode ( "utf-8" ) metadata = MessageMetadata . decode ( message . message id ) print ( f "Received { message data } of ordering key { message . ordering key } with id { metadata } ." ) message . ack () SubscriberClient() must be used in a with block or have enter () called before use. with SubscriberClient () as subscriber client : streaming pull future = subscriber client . subscribe ( subscription path , callback = callback , per partition flow control settings = per partition flow control settings , ) print ( f "Listening for messages on { str ( subscription path ) } ..." ) try : streaming pull future . result ( timeout = timeout ) except TimeoutError or KeyboardInterrupt : streaming pull future . cancel () assert streaming pull future . done () The client library establishes bidirectional streaming connections to each of the partitions in the Lite topic.
- For MacOS, Linux, and Cloud Shell users, run: sudo pip3 install grpcio export CLOUDSDK PYTHON SITEPACKAGES = 1 To receive messages, use the gcloud pubsub lite-subscriptions subscribe command: gcloud pubsub lite-subscriptions subscribe SUBSCRIPTION ID \ --location = LITE LOCATION \ --auto-ack Replace the following: SUBSCRIPTION ID : the ID of the Lite subscription LITE LOCATION : the location of the Lite subscription Go Before running this sample, follow the Go setup instructions in Pub/Sub Lite Client Libraries . package main import ( "context" "flag" "fmt" "log" "sync/atomic" "time" "cloud.google.com/go/pubsub" "cloud.google.com/go/pubsublite/pscompat" ) func main () { // NOTE: Set these flags for an existing Pub/Sub Lite subscription containing // published messages when running this sample. projectID := flag .
- Before receiving messages from a Lite subscription, create a Lite topic , create a Lite subscription to the Lite topic, and publish messages to the Lite topic.

### "Create and manage Lite subscriptions \_|\_ Pub/Sub Lite \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/lite/docs/subscriptions](https://docs.cloud.google.com/pubsub/lite/docs/subscriptions)
- Source ID: `site-docs-root`
- Final score: 377
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- False if using a zonal location. // https://cloud.google.com/pubsub/lite/docs/topics boolean regional = false ; deleteSubscriptionExample ( cloudRegion , zoneId , projectNumber , subscriptionId , regional ); } public static void deleteSubscriptionExample ( String cloudRegion , char zoneId , long projectNumber , String subscriptionId , boolean regional ) throws Exception { CloudRegionOrZone location ; if ( regional ) { location = CloudRegionOrZone . of ( CloudRegion . of ( cloudRegion )); } else { location = CloudRegionOrZone . of ( CloudZone . of ( CloudRegion . of ( cloudRegion ), zoneId )); } SubscriptionPath subscriptionPath = SubscriptionPath . newBuilder () . setLocation ( location ) . setProject ( ProjectNumber . of ( projectNumber )) . setName ( SubscriptionName . of ( subscriptionId )) . build (); AdminClientSettings adminClientSettings = AdminClientSettings . newBuilder (). setRegion ( CloudRegion . of ( cloudRegion )). build (); try ( AdminClient adminClient = AdminClient . create ( adminClientSettings )) { adminClient . deleteSubscription ( subscriptionPath ). get (); System . out . println ( subscriptionPath + " deleted successfully." ); } catch ( ExecutionException e ) { try { throw e . getCause (); } catch ( NotFoundException notFound ) { System . out . println ( "This subscription is not found." ); } catch ( Throwable throwable ) { throwable . printStackTrace (); } } } } Python Before running this sample, follow the Python setup instructions in Pub/Sub Lite Client Libraries . from google.api core.exceptions import NotFound from google.cloud.pubsublite import AdminClient from google.cloud.pubsublite.types import CloudRegion , CloudZone , SubscriptionPath TODO(developer): project number = 1122334455 cloud region = "us-central1" zone id = "a" subscription id = "your-subscription-id" regional = True if regional : location = CloudRegion ( cloud region ) else : location = CloudZone ( CloudRegion ( cloud region ), zone id ) subscription path = SubscriptionPath ( project number , location , subscription id ) client = AdminClient ( cloud region ) try : client . delete subscription ( subscription path ) print ( f " { subscription path } deleted successfully." ) except NotFound : print ( f " { subscription path } not found." ) What's Next Create and manage a Lite topic .
- False if using a zonal location. // https://cloud.google.com/pubsub/lite/docs/topics boolean regional = true ; listSubscriptionsInProjectExample ( cloudRegion , zoneId , projectNumber , regional ); } public static void listSubscriptionsInProjectExample ( String cloudRegion , char zoneId , long projectNumber , boolean regional ) throws Exception { AdminClientSettings adminClientSettings = AdminClientSettings . newBuilder (). setRegion ( CloudRegion . of ( cloudRegion )). build (); CloudRegionOrZone location ; if ( regional ) { location = CloudRegionOrZone . of ( CloudRegion . of ( cloudRegion )); } else { location = CloudRegionOrZone . of ( CloudZone . of ( CloudRegion . of ( cloudRegion ), zoneId )); } LocationPath locationPath = LocationPath . newBuilder () . setProject ( ProjectNumber . of ( projectNumber )) . setLocation ( location ) . build (); try ( AdminClient adminClient = AdminClient . create ( adminClientSettings )) { List<Subscription> subscriptions = adminClient . listSubscriptions ( locationPath ). get (); for ( Subscription subscription : subscriptions ) { System . out . println ( subscription . getAllFields ()); } System . out . println ( subscriptions . size () + " subscription(s) listed in the project." ); } } } Python Before running this sample, follow the Python setup instructions in Pub/Sub Lite Client Libraries . from google.cloud.pubsublite import AdminClient from google.cloud.pubsublite.types import CloudRegion , CloudZone , LocationPath TODO(developer): project number = 1122334455 cloud region = "us-central1" zone id = "a" regional = True if regional : location = CloudRegion ( cloud region ) else : location = CloudZone ( CloudRegion ( cloud region ), zone id ) location path = LocationPath ( project number , location ) client = AdminClient ( cloud region ) response = client . list subscriptions ( location path ) for subscription in response : print ( subscription . name ) print ( f " { len ( response ) } subscription(s) listed in your project and location." ) Listing Lite subscriptions to a Lite topic You can list Lite subscriptions to a Lite topic using the Google Cloud console, the Google Cloud CLI, or the Pub/Sub Lite API.
- In the Lite topics details page, the Lite subscriptions section includes a list of Lite subscriptions to the Lite topic. gcloud To list the Lite subscriptions to a topic, use the gcloud pubsub lite-topics list-subscriptions command: gcloud pubsub lite-topics list-subscriptions TOPIC ID \ --location = LOCATION Replace the following: TOPIC ID : the ID of the Lite topic that the Lite subscriptions are attached to LOCATION : the name of the location that the Lite subscription is in If the request is successful, the command line displays the Lite subscriptions: --- deliveryConfig: deliveryRequirement: DELIVERY REQUIREMENT name: projects/ PROJECT NUMBER /locations/ LOCATION /subscriptions/ SUBSCRIPTION ID topic: projects/ PROJECT NUMBER /locations/ LOCATION /topics/ TOPIC ID --- deliveryConfig: deliveryRequirement: DELIVERY REQUIREMENT name: projects/ PROJECT NUMBER /locations/ LOCATION /subscriptions/ SUBSCRIPTION ID topic: projects/ PROJECT NUMBER /locations/ LOCATION /topics/ TOPIC ID Protocol To list the Lite subscriptions to a Lite topic, send a GET request like the following: GET https:// REGION -pubsublite.googleapis.com/v1/admin/projects/ PROJECT NUMBER /lite-topics/ TOPIC ID /subscriptions Authorization: Bearer $(gcloud auth print-access-token) Replace the following: REGION : the region to store the Lite subscription in PROJECT NUMBER : the project number of the project with the Lite subscription LOCATION : the name of the location that the Lite subscription is in TOPIC ID : the ID of the Lite topic that the Lite subscriptions are attached to If the request is successful, the response is a list of Lite subscriptions in JSON format: { "subscriptions": [ { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /subscriptions/ SUBSCRIPTION ID " }, { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /subscriptions/ SUBSCRIPTION ID " } ] } Go Before running this sample, follow the Go setup instructions in Pub/Sub Lite Client Libraries . import ( "context" "fmt" "io" "cloud.google.com/go/pubsublite" "google.golang.org/api/iterator" ) func listSubscriptionsInTopic ( w io .
- In the Lite subscription details page, click the Details tab. gcloud To get details about a Lite subscription, use the gcloud pubsub lite-subscriptions describe command: gcloud pubsub lite-subscriptions describe SUBSCRIPTION ID \ --location = LOCATION Replace the following: SUBSCRIPTION ID : the ID of the Lite subscription LOCATION : the name of the location that the Lite subscription is in If the request is successful, the command line displays the Lite topic: deliveryConfig: deliveryRequirement: DELIVERY REQUIREMENT name: projects/ PROJECT NUMBER /locations/ LOCATION /subscriptions/ SUBSCRIPTION ID topic: projects/ PROJECT NUMBER /locations/ LOCATION /topics/ TOPIC ID Protocol To get details about a Lite subscription, send a GET request like the following: GET https:// REGION -pubsublite.googleapis.com/v1/admin/projects/ PROJECT NUMBER /locations/ LOCATION /subscriptions/ SUBSCRIPTION ID Authorization: Bearer $(gcloud auth print-access-token) Replace the following: REGION : the region to store the Lite subscription in PROJECT NUMBER : the project number of the project with the Lite subscription LOCATION : the name of the location that the Lite subscription is in SUBSCRIPTION ID : the ID of the Lite subscription If the request is successful, the response is the Lite topic in JSON format: { "deliveryConfig": { "deliveryRequirement": DELIVERY REQUIREMENT , } "name": "projects/ PROJECT NUMBER /locations/ LOCATION /subscriptions/ SUBSCRIPTION ID ", "topic": "projects/ PROJECT NUMBER /locations/ LOCATION /topics/ TOPIC ID ", } Go Before running this sample, follow the Go setup instructions in Pub/Sub Lite Client Libraries . import ( "context" "fmt" "io" "cloud.google.com/go/pubsublite" ) func getSubscription ( w io .

