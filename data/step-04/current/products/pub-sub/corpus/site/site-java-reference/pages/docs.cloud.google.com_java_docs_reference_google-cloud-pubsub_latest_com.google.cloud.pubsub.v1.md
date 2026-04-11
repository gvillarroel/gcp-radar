---
title: "Package com.google.cloud.pubsub.v1 (1.149.0) \_|\_ Java client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1
  title: "Package com.google.cloud.pubsub.v1 (1.149.0) \_|\_ Java client libraries\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Package com.google.cloud.pubsub.v1 (1.149.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.149.0 (latest)
1.148.0
1.147.0
1.145.0
1.143.1
1.142.0
1.141.5
1.140.2
1.139.4
1.138.0
1.137.1
1.136.1
1.135.0
1.134.2
1.133.1
1.132.2
1.131.0
1.130.0
1.129.6
1.127.3
1.126.6
1.125.13
1.123.18
1.122.2
1.121.1
1.120.24
1.119.1
1.118.0
1.117.0
1.116.4
1.115.5
GitHub Repository
Client Classes
Client classes are the main entry point to using a package.
They contain several variations of Java methods for each of the API's methods.
Client
Description
com. google. cloud. pubsub. v1. Schema Service Client
Service Description: Service for doing schema-related operations.
This class provides the ability to make remote calls to the backing service through method
calls that map to API methods. Sample code to get started:
com. google. cloud. pubsub. v1. Subscription Admin Client
Service Description: The service that an application uses to manipulate subscriptions and to
consume messages from a subscription via the Pull method or by establishing a bi-directional
stream using the StreamingPull method.
com. google. cloud. pubsub. v1. Topic Admin Client
Service Description: The service that an application uses to manipulate topics, and to send
messages to a topic.
This class provides the ability to make remote calls to the backing service through method
Settings Classes
Settings classes can be used to configure credentials, endpoints, and retry settings for a Client.
Settings
Description
com. google. cloud. pubsub. v1. Schema Service Settings
Settings class to configure an instance of SchemaServiceClient .
The default instance has everything set to sensible defaults:
com. google. cloud. pubsub. v1. Subscriber Shutdown Settings
Settings for configuring the shutdown behavior of a Subscriber .
This class allows customization of how the subscriber handles outstanding messages during
shutdown, including whether to wait for processing to complete or to immediately nack messages,
com. google. cloud. pubsub. v1. Subscription Admin Settings
Settings class to configure an instance of SubscriptionAdminClient .
The default instance has everything set to sensible defaults:
com. google. cloud. pubsub. v1. Topic Admin Settings
Settings class to configure an instance of TopicAdminClient .
The default instance has everything set to sensible defaults:
Classes
Class
Description
com. google. cloud. pubsub. v1. Ack Reply Consumer Impl
com. google. cloud. pubsub. v1. Ack Reply Consumer With Response Impl
com. google. cloud. pubsub. v1. Ack Request Data
com. google. cloud. pubsub. v1. Ack Request Data. Builder
Builder of AckRequestData .
com. google. cloud. pubsub. v1. Logging Util
com. google. cloud. pubsub. v1. Open Census Util
Utilities for propagating OpenCensus TagContext and SpanContext from publishers
to subscribers.
com. google. cloud. pubsub. v1. Open Census Util. Open Census Message Receiver
Wrapper class for MessageReceiver that decodes any received trace and tag contexts and
puts them in scope.
com. google. cloud. pubsub. v1. Open Telemetry Pubsub Tracer
com. google. cloud. pubsub. v1. Publisher
A Cloud Pub/Sub publisher , that is
associated with a specific topic at creation.
A Publisher provides built-in capabilities to automatically handle batching of
com. google. cloud. pubsub. v1. Publisher. Builder
A builder of Publisher s.
com. google. cloud. pubsub. v1. Pubsub Message Wrapper
A wrapper class for a PubsubMessage object that handles creation and tracking of
OpenTelemetry Span objects for different operations that occur during publishing.
com. google. cloud. pubsub. v1. Schema Service Client. List Schema Revisions Fixed Size Collection
com. google. cloud. pubsub. v1. Schema Service Client. List Schema Revisions Page
com. google. cloud. pubsub. v1. Schema Service Client. List Schema Revisions Paged Response
com. google. cloud. pubsub. v1. Schema Service Client. List Schemas Fixed Size Collection
com. google. cloud. pubsub. v1. Schema Service Client. List Schemas Page
com. google. cloud. pubsub. v1. Schema Service Client. List Schemas Paged Response
com. google. cloud. pubsub. v1. Schema Service Settings. Builder
Builder for SchemaServiceSettings.
com. google. cloud. pubsub. v1. Subscriber
A Cloud Pub/Sub subscriber that is
associated with a specific subscription at creation.
A Subscriber allows you to provide an implementation of a receiver to which messages are going to be delivered as soon as they are received by the
com. google. cloud. pubsub. v1. Subscriber. Builder
Builder of Subscribers .
com. google. cloud. pubsub. v1. Subscriber Shutdown Settings. Builder
Builder for SubscriberShutdownSettings .
com. google. cloud. pubsub. v1. Subscription Admin Client. List Snapshots Fixed Size Collection
com. google. cloud. pubsub. v1. Subscription Admin Client. List Snapshots Page
com. google. cloud. pubsub. v1. Subscription Admin Client. List Snapshots Paged Response
com. google. cloud. pubsub. v1. Subscription Admin Client. List Subscriptions Fixed Size Collection
com. google. cloud. pubsub. v1. Subscription Admin Client. List Subscriptions Page
com. google. cloud. pubsub. v1. Subscription Admin Client. List Subscriptions Paged Response
com. google. cloud. pubsub. v1. Subscription Admin Settings. Builder
Builder for SubscriptionAdminSettings.
com. google. cloud. pubsub. v1. Topic Admin Client. List Topic Snapshots Fixed Size Collection
com. google. cloud. pubsub. v1. Topic Admin Client. List Topic Snapshots Page
com. google. cloud. pubsub. v1. Topic Admin Client. List Topic Snapshots Paged Response
com. google. cloud. pubsub. v1. Topic Admin Client. List Topic Subscriptions Fixed Size Collection
com. google. cloud. pubsub. v1. Topic Admin Client. List Topic Subscriptions Page
com. google. cloud. pubsub. v1. Topic Admin Client. List Topic Subscriptions Paged Response
com. google. cloud. pubsub. v1. Topic Admin Client. List Topics Fixed Size Collection
com. google. cloud. pubsub. v1. Topic Admin Client. List Topics Page
com. google. cloud. pubsub. v1. Topic Admin Client. List Topics Paged Response
com. google. cloud. pubsub. v1. Topic Admin Settings. Builder
Builder for TopicAdminSettings.
Interfaces
Interface
Description
com. google. cloud. pubsub. v1. Ack Reply Consumer
Accepts a reply, sending it to the service.
com. google. cloud. pubsub. v1. Ack Reply Consumer With Response
Acknowledging a message in Pub/Sub means that you are done with it, and it will not be delivered
to this subscription again. You should avoid acknowledging messages until you have finished
processing them, so that in the event of a failure, you receive the message again.
com. google. cloud. pubsub. v1. Message Receiver
This interface can be implemented by users of Subscriber to receive messages.
com. google. cloud. pubsub. v1. Message Receiver With Ack Response
com. google. cloud. pubsub. v1. Publisher Interface
An interface for a Cloud Pub/Sub publisher .
com. google. cloud. pubsub. v1. Subscriber Interface
The core interface for a Cloud Pub/Sub subscriber , consisting only of
ApiService methods.
Enums
Enum
Description
com. google. cloud. pubsub. v1. Ack Response
com. google. cloud. pubsub. v1. Logging Util. Sub System
com. google. cloud. pubsub. v1. Subscriber Shutdown Settings. Shutdown Mode
Defines the behavior for handling outstanding messages during subscriber shutdown.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
