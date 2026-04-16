---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.328Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Pub/Sub publish timestamp field"
feature_slug: "pub-sub-publish-timestamp-field"
latest_feature_date: "2015-11-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-console"
  - "https://docs.cloud.google.com/pubsub/docs/publisher"
  - "https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library"
  - "https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription"
keywords:
  - "pub"
  - "sub"
  - "publish"
  - "timestamp"
  - "field"
  - "pulled"
  - "messages"
  - "include"
---

# Pub/Sub publish timestamp field

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

Pulled messages include the original publish timestamp.

## Extended Definition

Pulled messages include the original publish timestamp.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-console](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-console)
- [https://docs.cloud.google.com/pubsub/docs/publisher](https://docs.cloud.google.com/pubsub/docs/publisher)
- [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library)
- [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription)

## Supporting Pages

### "Quickstart: Publish and receive messages in Pub/Sub using the Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-console](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-console)
- Source ID: `site-docs-root`
- Final score: 298
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Publish and receive messages in Pub/Sub using the Google Cloud console This page shows you how to perform basic tasks in Pub/Sub using the Google Cloud console.
- Pull the messages from the subscription In the Google Cloud console, go to the Pub/Sub subscriptions page.
- Publish a message to the topic In the Google Cloud console, go to the Pub/Sub topics page.
- Pub/Sub delivers all messages sent to MyTopic to the MySub and MyTopic-sub subscriptions.

### Publish messages to topics \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/publisher](https://docs.cloud.google.com/pubsub/docs/publisher)
- Source ID: `site-docs-root`
- Final score: 279
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Publish . gcloud To publish a message with an ordering key, use the gcloud pubsub topics publish command and the --ordering-key flag: gcloud pubsub topics publish TOPIC ID \ --message= MESSAGE DATA \ --ordering-key= ORDERING KEY Replace the following: TOPIC ID : the ID of the topic MESSAGE DATA : a string with the message data ORDERING KEY : a string with an ordering key REST To publish a message with an ordering key, send a POST request like the following: POST https://pubsub.googleapis.com/v1/projects/ PROJECT ID /topics/ TOPIC ID :publish Content-Type: application/json Authorization: Bearer $(gcloud auth application-default print-access-token) Replace the following: PROJECT ID : the project ID of the project with the topic TOPIC ID : the ID of the topic Specify the following fields in the request body: { "messages": [ { "attributes": { " KEY ": " VALUE ", ... }, "data": " MESSAGE DATA ", "ordering key": " ORDERING KEY ", } ] } Replace the following: KEY : the key of a message attribute VALUE : the value for the key of the message attribute MESSAGE DATA : a base64-encoded string with the message data ORDERING KEY : a string with an ordering key The message must contain either a non-empty data field or at least one attribute.
- Click Publish . gcloud To publish a message, use the gcloud pubsub topics publish command: gcloud pubsub topics publish TOPIC ID \ --message= MESSAGE DATA \ [--attribute= KEY =" VALUE ",...] Replace the following: TOPIC ID : the ID of the topic MESSAGE DATA : a string with the message data KEY : the key of a message attribute VALUE : the value for the key of the message attribute REST To publish a message, send a POST request like the following: POST https://pubsub.googleapis.com/v1/projects/ PROJECT ID /topics/ TOPIC ID :publish Content-Type: application/json Authorization: Bearer $(gcloud auth application-default print-access-token) Replace the following: PROJECT ID : the project ID of the project with the topic TOPIC ID : the ID of the topic Specify the following fields in the request body: { "messages": [ { "attributes": { " KEY ": " VALUE ", ... }, "data": " MESSAGE DATA ", } ] } Replace the following: KEY : the key of a message attribute VALUE : the value for the key of the message attribute MESSAGE DATA : a base64-encoded string with the message data The message must contain either a non-empty data field or at least one attribute.
- Specify at least one of the following in the message: The message data An ordering key Attributes with additional metadata The Pub/Sub service adds the following fields to the message: A message ID unique to the topic A timestamp for when the Pub/Sub service receives the message To learn more about messages, see Message format .
- String projectId = "your-project-id" ; String topicId = "your-topic-id" ; publishWithErrorHandlerExample ( projectId , topicId ); } public static void publishWithErrorHandlerExample ( String projectId , String topicId ) throws IOException , InterruptedException { TopicName topicName = TopicName . of ( projectId , topicId ); Publisher publisher = null ; try { // Create a publisher instance with default settings bound to the topic publisher = Publisher . newBuilder ( topicName ). build (); List<String> messages = Arrays . asList ( "first message" , "second message" ); for ( final String message : messages ) { ByteString data = ByteString . copyFromUtf8 ( message ); PubsubMessage pubsubMessage = PubsubMessage . newBuilder (). setData ( data ). build (); // Once published, returns a server-assigned message id (unique within the topic) ApiFuture<String> future = publish er . publish ( pubsubMessage ); // Add an asynchronous callback to handle success / failure ApiFutures . addCallback ( future , new ApiFutureCallback<String> () { @Override public void onFailure ( Throwable throwable ) { if ( throwable instanceof ApiException ) { ApiException apiException = (( ApiException ) throwable ); // details on the API exception System . out . println ( apiException . getStatusCode (). getCode ()); System . out . println ( apiException . isRetryable ()); } System . out . println ( "Error publishing message : " + message ); } @Override public void onSuccess ( String messageId ) { // Once published, returns server-assigned message ids (unique within the topic) System . out . println ( "Published message ID: " + messageId ); } }, MoreExecutors . directExecutor ()); } } finally { if ( publisher != null ) { // When finished with the publisher, shutdown to free up resources. publisher . shutdown (); publisher . awaitTermination ( 1 , TimeUnit .

### "Quickstart: Publish and receive messages in Pub/Sub by using a client library\

- URL: [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library)
- Source ID: `site-docs-root`
- Final score: 271
- Re-rank relevance: N/A

Evidence snippets:
- PublisherClient () The topic path method creates a fully qualified identifier in the form projects/{project id}/topics/{topic id} topic path = publisher . topic path ( project id , topic id ) for n in range ( 1 , 10 ): data str = f "Message number { n } " Data must be a bytestring data = data str . encode ( "utf-8" ) When you publish a message, the client returns a future. future = publish er . publish ( topic path , data ) print ( future . result ()) print ( f "Published messages to { topic path } ." ) C++ #include "google/cloud/pubsub/publisher.h" #include <iostream> int main ( int argc , char argv []) try { if ( argc != 3 ) { std :: cerr << "Usage: " << argv [ 0 ] << " <project-id> <topic-id> \n " ; return 1 ; } std :: string const project id = argv [ 1 ]; std :: string const topic id = argv [ 2 ]; // Create a namespace alias to make the code easier to read. namespace pubsub = :: google :: cloud :: pubsub ; auto publisher = pubsub :: Publisher ( pubsub :: MakePublisherConnection ( pubsub :: Topic ( project id , topic id ))); auto id = publisher .
- Build ()) . get (); if ( ! id ) throw std :: move ( id ). status (); std :: cout << "Hello World published with id=" << id << " \n " ; return 0 ; } catch ( google :: cloud :: Status const & status ) { std :: cerr << "google::cloud::Status thrown: " << status << " \n " ; return 1 ; } C# using Google.Cloud.PubSub.V1 ; using System ; using System.Collections.Generic ; using System.Linq ; using System.Threading ; using System.Threading.Tasks ; public class PublishMessagesAsyncSample { public async Task<int> PublishMessagesAsync ( string projectId , string topicId , IEnumerable<string> messageTexts ) { TopicName topicName = TopicName .
- PHP EOL, $message->data()); // Acknowledge the Pub/Sub message has been received, so it will not be pulled multiple times. $subscription->acknowledge($message); } } Ruby subscription id = "your-subscription-id" pubsub = Google :: Cloud :: PubSub . new subscriber = pubsub . subscriber subscription id listener = subscriber . listen do received message puts "Received message: #{ received message . data } " received message . acknowledge! end listener . start Let the main thread sleep for 60 seconds so the thread for listening messages does not quit sleep 60 listener . stop . wait!
- Only messages published to the topic after the subscription is created are available to subscriber applications. gcloud pubsub subscriptions create my-sub --topic my-topic Note: If you get an error that states 400 Invalid resource name given , your resource name contains an invalid character.

### Create BigQuery subscriptions \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription)
- Source ID: `site-docs-root-2`
- Final score: 267
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if the Drop unknown fields option is enabled and a field is present in the Pub/Sub schema, but not the BigQuery schema, messages written to the BigQuery table might still not contain the field after adding it to the BigQuery schema.
- Parameters subscription name STRING Name of a subscription. message id STRING ID of a message publish time TIMESTAMP The time of publishing a message. data BYTES, STRING, or JSON The message body.
- Any messages that validated against a deleted schema revision at the time of publish cannot be written to BigQuery using a BigQuery subscription with Use topic schema enabled.
- In addition, Pub/Sub writes the fields in messages to the corresponding columns in the BigQuery table.

