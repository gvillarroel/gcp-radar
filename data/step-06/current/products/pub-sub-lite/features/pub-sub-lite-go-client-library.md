---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.920Z"
product_name: "Pub/Sub Lite"
product_slug: "pub-sub-lite"
feature_name: "Pub/Sub Lite Go client library"
feature_slug: "pub-sub-lite-go-client-library"
latest_feature_date: "2021-07-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.publisher_client.PublisherClient"
  - "https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.subscriber_client.SubscriberClient"
  - "https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.publisher_client.AsyncPublisherClient"
  - "https://docs.cloud.google.com/pubsub/lite/docs/publishing"
keywords:
  - "pub"
  - "sub"
  - "lite"
  - "go"
  - "client"
  - "library"
  - "the"
  - "is"
---

# Pub/Sub Lite Go client library

Product: Pub/Sub Lite
Coverage: MEDIUM

## Step 02 Summary

The Pub/Sub Lite Go client library is generally available.

## Extended Definition

The Pub/Sub Lite Go client library is generally available.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.publisher_client.PublisherClient](https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.publisher_client.PublisherClient)
- [https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.subscriber_client.SubscriberClient](https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.subscriber_client.SubscriberClient)
- [https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.publisher_client.AsyncPublisherClient](https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.publisher_client.AsyncPublisherClient)
- [https://docs.cloud.google.com/pubsub/lite/docs/publishing](https://docs.cloud.google.com/pubsub/lite/docs/publishing)

## Supporting Pages

### "Class PublisherClient (1.13.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.publisher_client.PublisherClient](https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.publisher_client.PublisherClient)
- Source ID: `site-python-reference`
- Final score: 417
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ClientOptions ] = None , enable idempotence : bool = False ) A PublisherClient publishes messages similar to Google Pub/Sub.
- ClientOptions ] = None , enable idempotence : bool = False ) Create a new PublisherClient. enter enter () Return self upon entering the runtime context. exit exit ( exc type , exc value , traceback ) Raise any exception triggered within the runtime context. publish publish ( topic : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class PublisherClient (1.13.0) Stay organized with collections Save and categorize content based on your preferences.
- Union [ google . cloud . pubsublite . types . paths .

### "Class SubscriberClient (1.13.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.subscriber_client.SubscriberClient](https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.subscriber_client.SubscriberClient)
- Source ID: `site-python-reference`
- Final score: 403
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- StreamingPullFuture This method starts a background thread to begin pulling messages from a Pub/Sub Lite subscription and scheduling them to be processed using the provided callback .
- ClientOptions ] = None ) Create a new SubscriberClient. enter enter () Return self upon entering the runtime context. exit exit ( exc type , exc value , traceback ) Raise any exception triggered within the runtime context. subscribe subscribe ( subscription : typing .
- Message ], None ], per partition flow control settings : google . cloud . pubsublite . types . flow control settings .
- ClientOptions ] = None ) A SubscriberClient reads messages similar to Google Pub/Sub.

### "Class AsyncPublisherClient (1.13.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.publisher_client.AsyncPublisherClient](https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.publisher_client.AsyncPublisherClient)
- Source ID: `site-python-reference`
- Final score: 401
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ClientOptions ] = None , enable idempotence : bool = False ) An AsyncPublisherClient publishes messages similar to Google Pub/Sub, but must be used in an async context.
- ClientOptions ] = None , enable idempotence : bool = False ) Create a new AsyncPublisherClient. aenter aenter () Return self upon entering the runtime context. aexit aexit ( exc type , exc value , traceback ) Raise any exception triggered within the runtime context. publish publish ( topic : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class AsyncPublisherClient (1.13.0) Stay organized with collections Save and categorize content based on your preferences.
- Union [ google . cloud . pubsublite . types . paths .

### "Publishing messages to Lite topics \_|\_ Pub/Sub Lite \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/lite/docs/publishing](https://docs.cloud.google.com/pubsub/lite/docs/publishing)
- Source ID: `site-docs-root`
- Final score: 392
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ApiFuture<String> future = publish er . publish ( pubsubMessage ); futures . add ( future ); } } finally { ArrayList<MessageMetadata> metadata = new ArrayList <> (); List<String> ackIds = ApiFutures . allAsList ( futures ). get (); for ( String id : ackIds ) { // Decoded metadata contains partition and offset. metadata . add ( MessageMetadata . decode ( id )); } System . out . println ( metadata + "\nPublished " + ackIds . size () + " messages." ); if ( publisher != null ) { // Shut down the publisher. publisher . stopAsync (). awaitTerminated (); System . out . println ( "Publisher is shut down." ); } } } } Python Before running this sample, follow the Python setup instructions in Pub/Sub Lite Client Libraries . from google.cloud.pubsublite.cloudpubsub import PublisherClient from google.cloud.pubsublite.types import ( CloudRegion , CloudZone , MessageMetadata , TopicPath , ) TODO(developer): project number = 1122334455 cloud region = "us-central1" zone id = "a" topic id = "your-topic-id" regional = True if regional : location = CloudRegion ( cloud region ) else : location = CloudZone ( CloudRegion ( cloud region ), zone id ) topic path = TopicPath ( project number , location , topic id ) PublisherClient() must be used in a with block or have enter () called before use. with PublisherClient () as publisher client : data = "Hello world!" api future = publisher client . publish ( topic path , data . encode ( "utf-8" )) result() blocks.
- ApiFuture<String> future = publish er . publish ( pubsubMessage ); // Shut down the publisher. publisher . stopAsync (). awaitTerminated (); String ackId = future . get (); MessageMetadata metadata = MessageMetadata . decode ( ackId ); System . out . println ( "Published a message with ordering key:\n" + metadata ); } } Python Before running this sample, follow the Python setup instructions in Pub/Sub Lite Client Libraries . from google.cloud.pubsublite.cloudpubsub import PublisherClient from google.cloud.pubsublite.types import ( CloudRegion , CloudZone , MessageMetadata , TopicPath , ) TODO(developer): project number = 1122334455 cloud region = "us-central1" zone id = "a" topic id = "your-topic-id" num messages = 100 regional = True if regional : location = CloudRegion ( cloud region ) else : location = CloudZone ( CloudRegion ( cloud region ), zone id ) topic path = TopicPath ( project number , location , topic id ) PublisherClient() must be used in a with block or have enter () called before use. with PublisherClient () as publisher client : for message in range ( num messages ): data = f " { message } " Messages of the same ordering key will always get published to the same partition.
- ApiFuture<String> future = publish er . publish ( pubsubMessage ); // Shut down the publisher. publisher . stopAsync (). awaitTerminated (); String ackId = future . get (); MessageMetadata metadata = MessageMetadata . decode ( ackId ); System . out . println ( "Published a message with custom attributes:\n" + metadata ); } } Python Before running this sample, follow the Python setup instructions in Pub/Sub Lite Client Libraries . from google.cloud.pubsublite.cloudpubsub import PublisherClient from google.cloud.pubsublite.types import ( CloudRegion , CloudZone , MessageMetadata , TopicPath , ) TODO(developer): project number = 1122334455 cloud region = "us-central1" zone id = "a" topic id = "your-topic-id" regional = True if regional : location = CloudRegion ( cloud region ) else : location = CloudZone ( CloudRegion ( cloud region ), zone id ) topic path = TopicPath ( project number , location , topic id ) PublisherClient() must be used in a with block or have enter () called before use. with PublisherClient () as publisher client : data = "Hello world!" api future = publisher client . publish ( topic path , data . encode ( "utf-8" ), year = "2020" , author = "unknown" , ) result() blocks.
- ApiFuture<String> future = publish er . publish ( pubsubMessage ); futures . add ( future ); } } finally { ArrayList<MessageMetadata> metadata = new ArrayList <> (); List<String> ackIds = ApiFutures . allAsList ( futures ). get (); System . out . println ( "Published " + ackIds . size () + " messages with batch settings." ); if ( publisher != null ) { // Shut down the publisher. publisher . stopAsync (). awaitTerminated (); } } } } Python Before running this sample, follow the Python setup instructions in Pub/Sub Lite Client Libraries . from google.cloud.pubsub v1.types import BatchSettings from google.cloud.pubsublite.cloudpubsub import PublisherClient from google.cloud.pubsublite.types import ( CloudRegion , CloudZone , MessageMetadata , TopicPath , ) TODO(developer): project number = 1122334455 cloud region = "us-central1" zone id = "a" topic id = "your-topic-id" num messages = 100 regional = True if regional : location = CloudRegion ( cloud region ) else : location = CloudZone ( CloudRegion ( cloud region ), zone id ) topic path = TopicPath ( project number , location , topic id ) batch setttings = BatchSettings ( 2 MiB.

