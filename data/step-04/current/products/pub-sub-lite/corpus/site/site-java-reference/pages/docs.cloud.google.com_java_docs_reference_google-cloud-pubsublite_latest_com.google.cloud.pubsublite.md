---
title: "Package com.google.cloud.pubsublite (1.16.2) \_|\_ Java client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsublite/latest/com.google.cloud.pubsublite
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsublite/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsublite/latest/com.google.cloud.pubsublite
  title: "Package com.google.cloud.pubsublite (1.16.2) \_|\_ Java client libraries\
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
Package com.google.cloud.pubsublite (1.16.2)
Stay organized with collections
Save and categorize content based on your preferences.
1.16.2 (latest)
1.16.1
1.15.21
1.14.8
1.13.8
1.12.22
1.11.2
1.10.0
1.9.4
1.8.0
1.7.1
1.6.3
1.5.5
1.4.12
GitHub Repository
This package is not the recommended entry point to using this client library!
For this library, we recommend using com.google.cloud.pubsublite.cloudpubsub for new applications.
Client Classes
Client classes are the main entry point to using a package.
They contain several variations of Java methods for each of the API's methods.
Client
Description
com. google. cloud. pubsublite. Admin Client
A client for performing Pub/Sub Lite admin operations.
Settings Classes
Settings classes can be used to configure credentials, endpoints, and retry settings for a Client.
Settings
Description
com. google. cloud. pubsublite. Admin Client Settings
Settings for construction a Pub/Sub Lite AdminClient.
Classes
Class
Description
com. google. cloud. pubsublite. Admin Client Settings. Builder
com. google. cloud. pubsublite. Cloud Region
A wrapped string representing a Google Cloud region.
com. google. cloud. pubsublite. Cloud Region Or Zone
com. google. cloud. pubsublite. Cloud Zone
A representation of a Google Cloud zone.
com. google. cloud. pubsublite. Constants
Useful general constants for Pub/Sub Lite.
com. google. cloud. pubsublite. Endpoints
Constructs regional endpoints from a CloudRegion.
com. google. cloud. pubsublite. Error Codes
Pub/Sub Lite retryable error codes.
com. google. cloud. pubsublite. Location Path
A string wrapper representing a project and location.
com. google. cloud. pubsublite. Location Path. Builder
com. google. cloud. pubsublite. Message
A user message.
com. google. cloud. pubsublite. Message. Builder
com. google. cloud. pubsublite. Message Metadata
Information about a message in Pub/Sub Lite. Can be encoded in the string returned by the Cloud
Pub/Sub com.google.cloud.pubsub.v1.Publisher#publish api or the com.google.pubsub.v1.PubsubMessage#getMessageId field on received messages.
com. google. cloud. pubsublite. Offset
An offset in the partition.
com. google. cloud. pubsublite. Partition
A partition of a topic.
com. google. cloud. pubsublite. Partition Lookup Utils
Utilities for looking up information on partitions.
com. google. cloud. pubsublite. Project Id
com. google. cloud. pubsublite. Project Id Or Number
com. google. cloud. pubsublite. Project Number
A wrapper class for the project
number .
com. google. cloud. pubsublite. Project Path
A string wrapper representing a project.
com. google. cloud. pubsublite. Project Path. Builder
com. google. cloud. pubsublite. Reservation Name
A string wrapper for the name of a reservation.
com. google. cloud. pubsublite. Reservation Path
A string wrapper representing a reservation. Should be structured like:
projects/<project number>/locations/<cloud region>/reservations/<id>
com. google. cloud. pubsublite. Reservation Path. Builder
com. google. cloud. pubsublite. Seek Target
The target location to seek a subscription to.
com. google. cloud. pubsublite. Sequenced Message
A message with its sequencing information in the partition.
com. google. cloud. pubsublite. Subscription Name
A string wrapper for the name of a subscription.
com. google. cloud. pubsublite. Subscription Path
A string wrapper representing a subscription. Should be structured like:
projects/<project number>/locations/<cloud region or
zone>/subscriptions/<id>
com. google. cloud. pubsublite. Subscription Path. Builder
com. google. cloud. pubsublite. Topic Name
A string wrapper for the name of a topic.
com. google. cloud. pubsublite. Topic Path
A string wrapper representing a topic. Should be structured like:
projects/<project number>/locations/<cloud region or zone>/topics/<id>
com. google. cloud. pubsublite. Topic Path. Builder
Interfaces
Interface
Description
com. google. cloud. pubsublite. Message Transformer
A MessageTransformer details how to transform a message of one type to another. It is likely that
either FromT or ToT will be a Message on publish and SequencedMessage on subscribe.
Enums
Enum
Description
com. google. cloud. pubsublite. Backlog Location
BacklogLocation refers to a location with respect to the message backlog.
com. google. cloud. pubsublite. Cloud Region Or Zone. Kind
com. google. cloud. pubsublite. Seek Target. Kind
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
