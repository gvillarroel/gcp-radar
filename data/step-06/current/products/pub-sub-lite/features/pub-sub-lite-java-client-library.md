---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.922Z"
product_name: "Pub/Sub Lite"
product_slug: "pub-sub-lite"
feature_name: "Pub/Sub Lite Java client library"
feature_slug: "pub-sub-lite-java-client-library"
latest_feature_date: "2020-05-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/lite/docs/publishing"
  - "https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.publisher_client.AsyncPublisherClient"
  - "https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.publisher_client.PublisherClient"
  - "https://docs.cloud.google.com/pubsub/lite/docs/publish-receive-messages-console"
keywords:
  - "pub"
  - "sub"
  - "lite"
  - "java"
  - "client"
  - "library"
  - "the"
  - "is"
---

# Pub/Sub Lite Java client library

Product: Pub/Sub Lite
Coverage: MEDIUM

## Step 02 Summary

The Pub/Sub Lite Java client library is available in beta.

## Extended Definition

The Pub/Sub Lite Java client library is available in beta.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/lite/docs/publishing](https://docs.cloud.google.com/pubsub/lite/docs/publishing)
- [https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.publisher_client.AsyncPublisherClient](https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.publisher_client.AsyncPublisherClient)
- [https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.publisher_client.PublisherClient](https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.publisher_client.PublisherClient)
- [https://docs.cloud.google.com/pubsub/lite/docs/publish-receive-messages-console](https://docs.cloud.google.com/pubsub/lite/docs/publish-receive-messages-console)

## Supporting Pages

### "Publishing messages to Lite topics \_|\_ Pub/Sub Lite \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/lite/docs/publishing](https://docs.cloud.google.com/pubsub/lite/docs/publishing)
- Source ID: `site-docs-root`
- Final score: 366
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can publish messages with the Pub/Sub Lite client library for Java.
- Specify any of the following in the message: The message data An ordering key An event time Attributes with additional metadata The client library automatically assigns the message to a partition, and the Pub/Sub Lite service adds the following fields to the message: A message ID unique within the partition A timestamp for when the Pub/Sub Lite service stores the message in the partition Publishing messages To publish messages, request a streaming connection to the Lite topic and then send messages over the streaming connection.
- Publish Idempotency Pub/Sub Lite client libraries support idempotent publishing, from the following versions: java-pubsublite : version 1.10.0. python-pubsublite : version 1.8.0. google-cloud-go : pubsublite version 1.7.0.
- Error ()) } } Java Before running this sample, follow the Java setup instructions in Pub/Sub Lite Client Libraries . import com.google.api.core.

### "Class AsyncPublisherClient (1.13.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.publisher_client.AsyncPublisherClient](https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.publisher_client.AsyncPublisherClient)
- Source ID: `site-python-reference`
- Final score: 365
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ClientOptions ] = None , enable idempotence : bool = False ) Create a new AsyncPublisherClient. aenter aenter () Return self upon entering the runtime context. aexit aexit ( exc type , exc value , traceback ) Raise any exception triggered within the runtime context. publish publish ( topic : typing .
- ClientOptions ] = None , enable idempotence : bool = False ) An AsyncPublisherClient publishes messages similar to Google Pub/Sub, but must be used in an async context.
- Version latest keyboard arrow down 1.13.0 (latest) 1.12.0 1.11.1 1.10.0 1.9.0 1.8.3 1.7.0 1.6.0 1.5.0 1.4.3 1.3.0 1.2.0 1.1.4 1.0.2 0.6.1 0.5.0 0.4.1 0.3.0 0.2.0 0.1.0 AsyncPublisherClient ( , per partition batching settings : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class AsyncPublisherClient (1.13.0) Stay organized with collections Save and categorize content based on your preferences.

### "Class PublisherClient (1.13.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.publisher_client.PublisherClient](https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.publisher_client.PublisherClient)
- Source ID: `site-python-reference`
- Final score: 365
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ClientOptions ] = None , enable idempotence : bool = False ) Create a new PublisherClient. enter enter () Return self upon entering the runtime context. exit exit ( exc type , exc value , traceback ) Raise any exception triggered within the runtime context. publish publish ( topic : typing .
- ClientOptions ] = None , enable idempotence : bool = False ) A PublisherClient publishes messages similar to Google Pub/Sub.
- Version latest keyboard arrow down 1.13.0 (latest) 1.12.0 1.11.1 1.10.0 1.9.0 1.8.3 1.7.0 1.6.0 1.5.0 1.4.3 1.3.0 1.2.0 1.1.4 1.0.2 0.6.1 0.5.0 0.4.1 0.3.0 0.2.0 0.1.0 PublisherClient ( , per partition batching settings : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class PublisherClient (1.13.0) Stay organized with collections Save and categorize content based on your preferences.

### "Quickstart: Publish and receive messages in Pub/Sub by using the client\

- URL: [https://docs.cloud.google.com/pubsub/lite/docs/publish-receive-messages-console](https://docs.cloud.google.com/pubsub/lite/docs/publish-receive-messages-console)
- Source ID: `site-docs-root`
- Final score: 362
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about BOMs, see The Google Cloud Platform Libraries BOM . <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-pubsublite</artifactId> <version>1.15.6</version> </dependency> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-pubsub</artifactId> <version>1.150.0</version> </dependency> If you are using Gradle , add the following to your dependencies: implementation 'com.google.cloud:google-cloud-pubsublite:1.16.3' If you are using sbt , add the following to your dependencies: libraryDependencies += "com.google.cloud" % "google-cloud-pubsublite" % "1.16.3" If you're using Visual Studio Code or IntelliJ, you can add client libraries to your project using the following IDE plugins: Cloud Code for VS Code Cloud Code for IntelliJ The plugins provide additional functionality, such as key management for service accounts.
- Printf ( "Received %d messages\n" , receiveCount ) } Java Before trying this sample, follow the Java setup instructions in the Pub/Sub Lite quickstart using client libraries .
- Install the client library Go go get cloud.google.com/go/pubsublite Java If you are using Maven , add the following to your pom.xml file.
- Send and receive messages using the Pub/Sub Lite client library for Go, Java, and Python.

