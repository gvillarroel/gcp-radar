---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:58.539Z"
product_name: "Eventarc"
product_slug: "eventarc"
feature_name: "Customer-managed encryption keys (CMEK)"
feature_slug: "customer-managed-encryption-keys-cmek"
latest_feature_date: "2022-12-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/eventarc/docs/use-cmek"
  - "https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient"
  - "https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "cmek"
  - "eventarc"
  - "supports"
---

# Customer-managed encryption keys (CMEK)

Product: Eventarc
Coverage: MEDIUM

## Step 02 Summary

Eventarc supports customer-managed encryption keys.

## Extended Definition

Eventarc supports customer-managed encryption keys.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/eventarc/docs/use-cmek](https://docs.cloud.google.com/eventarc/docs/use-cmek)
- [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient)
- [https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition](https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition)

## Supporting Pages

### "Use customer-managed encryption keys \_|\_ Eventarc Standard \_|\_ Google\

- URL: [https://docs.cloud.google.com/eventarc/docs/use-cmek](https://docs.cloud.google.com/eventarc/docs/use-cmek)
- Source ID: `site-docs-root-2`
- Final score: 313
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- On the Trigger details page, the Encryption status displays, the message, Events encrypted using Customer-managed encryption keys . gcloud To confirm the CMEK key, you can use the google-channels describe command. gcloud eventarc google-channels describe \ --location = LOCATION The output should be similar to the following: cryptoKeyName: projects/ PROJECT ID /locations/ LOCATION /keyRings/ RING NAME /cryptoKeys/ KEY NAME name: projects/ PROJECT ID /locations/ LOCATION /googleChannelConfig updateTime: '2022-06-28T17:24:56.365866104Z' The cryptokeyName value shows the Cloud KMS key used for the Google channel.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Eventarc.
- In the Trigger details page, the status of Encryption displays the message, Events encrypted using Customer-managed encryption keys . gcloud gcloud eventarc channels describe CHANNEL NAME \ --location = LOCATION The output should be similar to the following: createTime: '2022-06-28T18:05:52.403999904Z' cryptoKeyName: projects/ PROJECT ID /locations/ LOCATION /keyRings/ RING NAME /cryptoKeys/ KEY NAME name: projects/ PROJECT ID /locations/ LOCATION /googleChannelConfig pubsubTopic: projects/ PROJECT ID /topics/ PUBSUB TOPIC ID state: ACTIVE uid: 5ea277f9-b4b7-4e7f-a8e0-6ca9d7204fa3 updateTime: '2022-06-28T18:09:18.650727516Z' The cryptokeyName value shows the Cloud KMS key used for the third-party channel.
- Home Documentation Application development Eventarc Standard Guides Send feedback Use customer-managed encryption keys Stay organized with collections Save and categorize content based on your preferences.

### "Class EventarcAsyncClient (1.20.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient)
- Source ID: `site-python-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Once configured, first-party event data will be protected using the specified custom managed encryption key instead of Google-managed encryption keys. update message bus update message bus ( request : typing .
- Once configured, first-party event data will be protected using the specified custom managed encryption key instead of Google-managed encryption keys. get iam policy get iam policy ( request : typing .
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . channel connection path channel connection path ( project : str , location : str , channel connection : str ) - > str Returns a fully-qualified channel connection string. channel path channel path ( project : str , location : str , channel : str ) - > str Returns a fully-qualified channel string. cloud function path cloud function path ( project : str , location : str , function : str ) - > str Returns a fully-qualified cloud function string. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create channel create channel ( request : typing .
- Returns Type Description google.cloud.eventarc v1.types.Trigger A representation of the trigger resource. google api source path google api source path ( project : str , location : str , google api source : str ) - > str Returns a fully-qualified google api source string. google channel config path google channel config path ( project : str , location : str ) - > str Returns a fully-qualified google channel config string. list channel connections list channel connections ( request : typing .

### "Class EventarcClient (1.20.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient)
- Source ID: `site-python-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Once configured, first-party event data will be protected using the specified custom managed encryption key instead of Google-managed encryption keys. update message bus update message bus ( request : typing .
- Once configured, first-party event data will be protected using the specified custom managed encryption key instead of Google-managed encryption keys. get iam policy get iam policy ( request : typing .
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . channel connection path channel connection path ( project : str , location : str , channel connection : str ) - > str Returns a fully-qualified channel connection string. channel path channel path ( project : str , location : str , channel : str ) - > str Returns a fully-qualified channel string. cloud function path cloud function path ( project : str , location : str , function : str ) - > str Returns a fully-qualified cloud function string. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create channel create channel ( request : typing .
- Returns Type Description google.cloud.eventarc v1.types.Trigger A representation of the trigger resource. google api source path google api source path ( project : str , location : str , google api source : str ) - > str Returns a fully-qualified google api source string. google channel config path google channel config path ( project : str , location : str ) - > str Returns a fully-qualified google channel config string. list channel connections list channel connections ( request : typing .

### Choose Eventarc Advanced or Eventarc Standard \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition](https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition)
- Source ID: `site-iam-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Feature Eventarc Advanced Eventarc Standard Access control Per message access control and central governance with IAM See Access control with IAM See Access control with IAM Capacity Automatically provisioned Automatically provisioned Client library languages Java, Python, Go, Node.js, C++, C#, PHP, Ruby See Eventarc client libraries Java, Python, Go, Node.js, C++, C#, PHP, Ruby See Eventarc client libraries Compliance standards See Compliance standards See Compliance standards Cross-project event delivery Supported See Publish events from Google sources Not supported Customer managed encryption keys Yes See Use customer-managed encryption keys Yes See Use customer-managed encryption keys Dead letter queues supported No Yes, through Pub/Sub dead letter topic See Retry events Event format Events are delivered to the destination in a CloudEvents format See Event format Optionally, you can override this behavior by defining an HTTP binding Events are delivered to the destination in a CloudEvents format See Event format Event size 1 MB maximum See Quotas and limits 512 KB maximum See Quotas and limits Locations See Eventarc Advanced locations See Eventarc Standard locations Message filtering Filtering on any and all event attributes Filtering on event type and specific attributes Message routing Many providers to many destinations Provider to destination Message schema conversion Yes See Convert the format of received events No Message transformation Yes, through CEL expressions See Transform received events No Observability Through Google Cloud Observability such as Cloud Logging and Cloud Monitoring See Eventarc audit logging Through Google Cloud Observability such as Cloud Logging and Cloud Monitoring See Eventarc audit logging Ordered delivery There is no in-order, first-in-first-out delivery guarantee There is no in-order, first-in-first-out delivery guarantee Pricing See Eventarc pricing See Eventarc pricing Regionality Regional See Understand regionality Regional, Global See Understand Eventarc locations REST endpoints https://eventarc.googleapis.com See Eventarc API https://eventarcpublishing.googleapis.com See Eventarc Publishing API https://eventarc.googleapis.com See Eventarc API Retry and retention At-least-once event delivery to targets; default message retention duration is 24 hours with an exponential backoff delay See Retry events At-least-once event delivery to targets; default message retention duration is 24 hours with an exponential backoff delay See Retry events Service limits One bus and 100 pipelines per Google Cloud project per supported region See Quotas and limits 500 triggers per Google Cloud project per supported region See Quotas and limits Service perimeter using VPC Service Controls Yes See Set up a service perimeter using VPC Service Controls Yes See Set up a service perimeter using VPC Service Controls Supported sources Google providers Direct publishers using the Eventarc Publishing API See Event providers and destinations Google providers Google providers through audit logs Third-party providers See Event providers and destinations Supported targets Cloud Run functions (including 1st gen) Cloud Run jobs and services Eventarc Advanced buses Internal HTTP endpoints in VPC networks Pub/Sub topics Workflows See Event providers and destinations Cloud Run functions Cloud Run services Internal HTTP endpoints in VPC networks Public endpoints of private and public GKE services Workflows See Event providers and destinations Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Eventarc Advanced Eventarc Advanced is a fully managed platform for building event-driven architectures.
- Both editions offer a scalable, serverless, and fully managed eventing solution that lets you asynchronously route messages from sources to targets using loosely coupled services that are triggered by and react to state changes known as events .
- Eventarc Advanced is feature rich and is ideal for organizations with complex eventing and messaging needs, particularly those grappling with managing numerous Pub/Sub topics, Kafka queues, or other third-party messaging systems.

