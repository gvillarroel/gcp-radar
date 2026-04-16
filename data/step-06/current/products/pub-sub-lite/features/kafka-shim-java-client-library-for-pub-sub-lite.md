---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.918Z"
product_name: "Pub/Sub Lite"
product_slug: "pub-sub-lite"
feature_name: "Kafka Shim Java client library for Pub/Sub Lite"
feature_slug: "kafka-shim-java-client-library-for-pub-sub-lite"
latest_feature_date: "2022-05-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.subscriber_client.AsyncSubscriberClient"
  - "https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.subscriber_client.SubscriberClient"
  - "https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.publisher_client.AsyncPublisherClient"
  - "https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.publisher_client.PublisherClient"
keywords:
  - "kafka"
  - "shim"
  - "java"
  - "client"
  - "library"
  - "for"
  - "pub"
  - "sub"
---

# Kafka Shim Java client library for Pub/Sub Lite

Product: Pub/Sub Lite
Coverage: MEDIUM

## Step 02 Summary

The Kafka Shim Java client library for Pub/Sub Lite is generally available; The Kafka Shim Java client library lets you use the Kafka API with Pub/Sub Lite as a backend.

## Extended Definition

The Kafka Shim Java client library for Pub/Sub Lite is generally available; The Kafka Shim Java client library lets you use the Kafka API with Pub/Sub Lite as a backend.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.subscriber_client.AsyncSubscriberClient](https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.subscriber_client.AsyncSubscriberClient)
- [https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.subscriber_client.SubscriberClient](https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.subscriber_client.SubscriberClient)
- [https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.publisher_client.AsyncPublisherClient](https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.publisher_client.AsyncPublisherClient)
- [https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.publisher_client.PublisherClient](https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.publisher_client.PublisherClient)

## Supporting Pages

### "Class AsyncSubscriberClient (1.13.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.subscriber_client.AsyncSubscriberClient](https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.subscriber_client.AsyncSubscriberClient)
- Source ID: `site-python-reference`
- Final score: 280
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ClientOptions ] = None ) An AsyncSubscriberClient reads messages similar to Google Pub/Sub, but must be used in an async context.
- Optional [ google . cloud . pubsublite . cloudpubsub . message transformer .
- Optional [ google . cloud . pubsublite . cloudpubsub . message transformer .
- ClientOptions ] = None ) Create a new AsyncSubscriberClient. aenter aenter () Return self upon entering the runtime context. aexit aexit ( exc type , exc value , traceback ) Raise any exception triggered within the runtime context. subscribe subscribe ( subscription : typing .

### "Class SubscriberClient (1.13.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.subscriber_client.SubscriberClient](https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.subscriber_client.SubscriberClient)
- Source ID: `site-python-reference`
- Final score: 280
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ClientOptions ] = None ) A SubscriberClient reads messages similar to Google Pub/Sub.
- Optional [ google . cloud . pubsublite . cloudpubsub . message transformer .
- Optional [ google . cloud . pubsublite . cloudpubsub . message transformer .
- ClientOptions ] = None ) Create a new SubscriberClient. enter enter () Return self upon entering the runtime context. exit exit ( exc type , exc value , traceback ) Raise any exception triggered within the runtime context. subscribe subscribe ( subscription : typing .

### "Class AsyncPublisherClient (1.13.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.publisher_client.AsyncPublisherClient](https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.publisher_client.AsyncPublisherClient)
- Source ID: `site-python-reference`
- Final score: 276
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ClientOptions ] = None , enable idempotence : bool = False ) An AsyncPublisherClient publishes messages similar to Google Pub/Sub, but must be used in an async context.
- ClientOptions ] = None , enable idempotence : bool = False ) Create a new AsyncPublisherClient. aenter aenter () Return self upon entering the runtime context. aexit aexit ( exc type , exc value , traceback ) Raise any exception triggered within the runtime context. publish publish ( topic : typing .
- Version latest keyboard arrow down 1.13.0 (latest) 1.12.0 1.11.1 1.10.0 1.9.0 1.8.3 1.7.0 1.6.0 1.5.0 1.4.3 1.3.0 1.2.0 1.1.4 1.0.2 0.6.1 0.5.0 0.4.1 0.3.0 0.2.0 0.1.0 AsyncPublisherClient ( , per partition batching settings : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class AsyncPublisherClient (1.13.0) Stay organized with collections Save and categorize content based on your preferences.

### "Class PublisherClient (1.13.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.publisher_client.PublisherClient](https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.publisher_client.PublisherClient)
- Source ID: `site-python-reference`
- Final score: 276
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ClientOptions ] = None , enable idempotence : bool = False ) A PublisherClient publishes messages similar to Google Pub/Sub.
- ClientOptions ] = None , enable idempotence : bool = False ) Create a new PublisherClient. enter enter () Return self upon entering the runtime context. exit exit ( exc type , exc value , traceback ) Raise any exception triggered within the runtime context. publish publish ( topic : typing .
- Version latest keyboard arrow down 1.13.0 (latest) 1.12.0 1.11.1 1.10.0 1.9.0 1.8.3 1.7.0 1.6.0 1.5.0 1.4.3 1.3.0 1.2.0 1.1.4 1.0.2 0.6.1 0.5.0 0.4.1 0.3.0 0.2.0 0.1.0 PublisherClient ( , per partition batching settings : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class PublisherClient (1.13.0) Stay organized with collections Save and categorize content based on your preferences.

