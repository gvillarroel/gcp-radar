---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:58.541Z"
product_name: "Eventarc"
product_slug: "eventarc"
feature_name: "Third-party SaaS event delivery"
feature_slug: "third-party-saas-event-delivery"
latest_feature_date: "2022-08-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition"
  - "https://docs.cloud.google.com/eventarc/docs/reference/publishing/rpc/google.cloud.eventarc.publishing.v1"
  - "https://docs.cloud.google.com/eventarc/docs/overview"
  - "https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient"
keywords:
  - "third"
  - "party"
  - "saas"
  - "event"
  - "delivery"
  - "eventarc"
  - "can"
  - "deliver"
---

# Third-party SaaS event delivery

Product: Eventarc
Coverage: MEDIUM

## Step 02 Summary

Eventarc can deliver third-party events from SaaS providers to interested subscribers.

## Extended Definition

Eventarc can deliver third-party events from SaaS providers to interested subscribers.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition](https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition)
- [https://docs.cloud.google.com/eventarc/docs/reference/publishing/rpc/google.cloud.eventarc.publishing.v1](https://docs.cloud.google.com/eventarc/docs/reference/publishing/rpc/google.cloud.eventarc.publishing.v1)
- [https://docs.cloud.google.com/eventarc/docs/overview](https://docs.cloud.google.com/eventarc/docs/overview)
- [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient)

## Supporting Pages

### Choose Eventarc Advanced or Eventarc Standard \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition](https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition)
- Source ID: `site-iam-reference`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Feature Eventarc Advanced Eventarc Standard Access control Per message access control and central governance with IAM See Access control with IAM See Access control with IAM Capacity Automatically provisioned Automatically provisioned Client library languages Java, Python, Go, Node.js, C++, C#, PHP, Ruby See Eventarc client libraries Java, Python, Go, Node.js, C++, C#, PHP, Ruby See Eventarc client libraries Compliance standards See Compliance standards See Compliance standards Cross-project event delivery Supported See Publish events from Google sources Not supported Customer managed encryption keys Yes See Use customer-managed encryption keys Yes See Use customer-managed encryption keys Dead letter queues supported No Yes, through Pub/Sub dead letter topic See Retry events Event format Events are delivered to the destination in a CloudEvents format See Event format Optionally, you can override this behavior by defining an HTTP binding Events are delivered to the destination in a CloudEvents format See Event format Event size 1 MB maximum See Quotas and limits 512 KB maximum See Quotas and limits Locations See Eventarc Advanced locations See Eventarc Standard locations Message filtering Filtering on any and all event attributes Filtering on event type and specific attributes Message routing Many providers to many destinations Provider to destination Message schema conversion Yes See Convert the format of received events No Message transformation Yes, through CEL expressions See Transform received events No Observability Through Google Cloud Observability such as Cloud Logging and Cloud Monitoring See Eventarc audit logging Through Google Cloud Observability such as Cloud Logging and Cloud Monitoring See Eventarc audit logging Ordered delivery There is no in-order, first-in-first-out delivery guarantee There is no in-order, first-in-first-out delivery guarantee Pricing See Eventarc pricing See Eventarc pricing Regionality Regional See Understand regionality Regional, Global See Understand Eventarc locations REST endpoints https://eventarc.googleapis.com See Eventarc API https://eventarcpublishing.googleapis.com See Eventarc Publishing API https://eventarc.googleapis.com See Eventarc API Retry and retention At-least-once event delivery to targets; default message retention duration is 24 hours with an exponential backoff delay See Retry events At-least-once event delivery to targets; default message retention duration is 24 hours with an exponential backoff delay See Retry events Service limits One bus and 100 pipelines per Google Cloud project per supported region See Quotas and limits 500 triggers per Google Cloud project per supported region See Quotas and limits Service perimeter using VPC Service Controls Yes See Set up a service perimeter using VPC Service Controls Yes See Set up a service perimeter using VPC Service Controls Supported sources Google providers Direct publishers using the Eventarc Publishing API See Event providers and destinations Google providers Google providers through audit logs Third-party providers See Event providers and destinations Supported targets Cloud Run functions (including 1st gen) Cloud Run jobs and services Eventarc Advanced buses Internal HTTP endpoints in VPC networks Pub/Sub topics Workflows See Event providers and destinations Cloud Run functions Cloud Run services Internal HTTP endpoints in VPC networks Public endpoints of private and public GKE services Workflows See Event providers and destinations Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Both editions support a range of event providers and destinations—including Google Cloud services, custom applications, SaaS applications, and third-party services—while managing delivery, security, authorization, observability, and error-handling for you.
- Eventarc Advanced is feature rich and is ideal for organizations with complex eventing and messaging needs, particularly those grappling with managing numerous Pub/Sub topics, Kafka queues, or other third-party messaging systems.
- You can use the bus to route events from multiple sources in real time and publish them to multiple destinations, and optionally transform events prior to delivery to a target.

### "Package google.cloud.eventarc.publishing.v1 \_|\_ Eventarc \_|\_ Google\

- URL: [https://docs.cloud.google.com/eventarc/docs/reference/publishing/rpc/google.cloud.eventarc.publishing.v1](https://docs.cloud.google.com/eventarc/docs/reference/publishing/rpc/google.cloud.eventarc.publishing.v1)
- Source ID: `site-api-reference`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- An event provider is a software-as-a-service (SaaS) system or product that can generate and deliver events through Eventarc.
- A partner is a third-party event provider that is integrated with Eventarc.
- Index Publisher (interface) CloudEvent (message) CloudEvent.CloudEventAttributeValue (message) PublishChannelConnectionEventsRequest (message) PublishChannelConnectionEventsResponse (message) PublishEventsRequest (message) PublishEventsResponse (message) PublishRequest (message) PublishResponse (message) Publisher Eventarc processes events generated by an event provider and delivers them to a subscriber.
- A third-party event provider is an event provider from outside of Google.

### Eventarc overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/eventarc/docs/overview](https://docs.cloud.google.com/eventarc/docs/overview)
- Source ID: `site-api-reference`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Feature Eventarc Advanced Eventarc Standard Access control Per message access control and central governance with IAM See Access control with IAM See Access control with IAM Capacity Automatically provisioned Automatically provisioned Client library languages Java, Python, Go, Node.js, C++, C#, PHP, Ruby See Eventarc client libraries Java, Python, Go, Node.js, C++, C#, PHP, Ruby See Eventarc client libraries Compliance standards See Compliance standards See Compliance standards Cross-project event delivery Supported See Publish events from Google sources Not supported Customer managed encryption keys Yes See Use customer-managed encryption keys Yes See Use customer-managed encryption keys Dead letter queues supported No Yes, through Pub/Sub dead letter topic See Retry events Event format Events are delivered to the destination in a CloudEvents format See Event format Optionally, you can override this behavior by defining an HTTP binding Events are delivered to the destination in a CloudEvents format See Event format Event size 1 MB maximum See Quotas and limits 512 KB maximum See Quotas and limits Locations See Eventarc Advanced locations See Eventarc Standard locations Message filtering Filtering on any and all event attributes Filtering on event type and specific attributes Message routing Many providers to many destinations Provider to destination Message schema conversion Yes See Convert the format of received events No Message transformation Yes, through CEL expressions See Transform received events No Observability Through Google Cloud Observability such as Cloud Logging and Cloud Monitoring See Eventarc audit logging Through Google Cloud Observability such as Cloud Logging and Cloud Monitoring See Eventarc audit logging Ordered delivery There is no in-order, first-in-first-out delivery guarantee There is no in-order, first-in-first-out delivery guarantee Pricing See Eventarc pricing See Eventarc pricing Regionality Regional See Understand regionality Regional, Global See Understand Eventarc locations REST endpoints https://eventarc.googleapis.com See Eventarc API https://eventarcpublishing.googleapis.com See Eventarc Publishing API https://eventarc.googleapis.com See Eventarc API Retry and retention At-least-once event delivery to targets; default message retention duration is 24 hours with an exponential backoff delay See Retry events At-least-once event delivery to targets; default message retention duration is 24 hours with an exponential backoff delay See Retry events Service limits One bus and 100 pipelines per Google Cloud project per supported region See Quotas and limits 500 triggers per Google Cloud project per supported region See Quotas and limits Service perimeter using VPC Service Controls Yes See Set up a service perimeter using VPC Service Controls Yes See Set up a service perimeter using VPC Service Controls Supported sources Google providers Direct publishers using the Eventarc Publishing API See Event providers and destinations Google providers Google providers through audit logs Third-party providers See Event providers and destinations Supported targets Cloud Run functions (including 1st gen) Cloud Run jobs and services Eventarc Advanced buses Internal HTTP endpoints in VPC networks Pub/Sub topics Workflows See Event providers and destinations Cloud Run functions Cloud Run services Internal HTTP endpoints in VPC networks Public endpoints of private and public GKE services Workflows See Event providers and destinations Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Both editions support a range of event providers and destinations—including Google Cloud services, custom applications, SaaS applications, and third-party services—while managing delivery, security, authorization, observability, and error-handling for you.
- Eventarc Advanced is feature rich and is ideal for organizations with complex eventing and messaging needs, particularly those grappling with managing numerous Pub/Sub topics, Kafka queues, or other third-party messaging systems.
- You can use the bus to route events from multiple sources in real time and publish them to multiple destinations, and optionally transform events prior to delivery to a target.

### "Class EventarcAsyncClient (1.20.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient)
- Source ID: `site-python-reference`
- Final score: 234
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.eventarc v1.types.GoogleChannelConfig A GoogleChannelConfig is a resource that stores the custom settings respected by Eventarc first-party triggers in the matching region.
- Returns Type Description google.cloud.eventarc v1.types.GoogleChannelConfig A GoogleChannelConfig is a resource that stores the custom settings respected by Eventarc first-party triggers in the matching region.
- Returns Type Description google.cloud.eventarc v1.types.Trigger A representation of the trigger resource. google api source path google api source path ( project : str , location : str , google api source : str ) - > str Returns a fully-qualified google api source string. google channel config path google channel config path ( project : str , location : str ) - > str Returns a fully-qualified google channel config string. list channel connections list channel connections ( request : typing .
- CreateChannelConnectionRequest ( parent="parent value", channel connection=channel connection, channel connection id="channel connection id value", ) Make the request operation = client. create channel connection (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.eventarc v1.types.CreateChannelConnectionRequest , dict]] The request object.

