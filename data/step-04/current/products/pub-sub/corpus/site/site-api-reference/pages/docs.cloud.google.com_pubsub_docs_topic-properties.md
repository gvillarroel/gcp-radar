---
title: "Topic properties \_|\_ Pub/Sub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/docs/topic-properties
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/pubsub/docs/topic-properties
  title: "Topic properties \_|\_ Pub/Sub \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Pub/Sub
Reference
Send feedback
Topic properties
Stay organized with collections
Save and categorize content based on your preferences.
Pub/Sub topic properties are the characteristics of a topic.
You can set topic properties when you create or update a topic.
This document describes the different topic properties
you can set for a topic.
Before you begin
Learn about topics and the publish messages workflow.
Create a topic .
Common topic properties
When you create a topic, you must specify a number of options to
set up the topic. Some of these properties are common to all types of
topics and are discussed in the next sections.
Add a default subscription
Adds a default subscription to the Pub/Sub topic. You can create
another subscription for the topic after the topic is created. The default
subscription has the following properties:
Subscription ID of -sub
Pull delivery type
Message retention duration of seven days
Expiration after 31 days of inactivity
Acknowledgment deadline of 10 seconds
Immediate retry policy
Schema
A schema is a format that the message data field must follow. A
schema is a contract between the publisher and subscriber that
Pub/Sub enforces.
Topic schemas help standardize message types and
permissions to allow them to be consumed by different teams in your
organization. Pub/Sub creates a central authority for message
types and permissions. To create a topic with schema, see
Create and manage schemas .
Message retention duration
Specifies how long the Pub/Sub topic retains messages after
publication. After the message retention duration is over, Pub/Sub
might discard the message regardless of its acknowledgment state. Message
storage fees are charged for storing all messages published to the topic.
Default = Not enabled
Minimum value = 10 minutes
Maximum value = 31 days
Use a customer-managed encryption key (CMEK)
Specifies if the topic is encrypted with a CMEK. Pub/Sub encrypts
messages with Google-owned and Google-managed encryption keys by default. If you specify this option,
Pub/Sub uses the envelope encryption pattern with CMEK. In this
approach, Cloud KMS does not encrypt the messages. Instead, Cloud KMS encrypts
the Data Encryption Keys (DEKs) that Pub/Sub creates for each
topic.
Pub/Sub encrypts the messages using the newest DEK that was
generated for the topic. Pub/Sub decrypts the messages shortly
before they are delivered to subscribers.
For more information about creating a key, see Configure message
encryption .
Single Message Transforms (SMTs)
Specifies lightweight modifications to message attributes and data directly
within Pub/Sub. This enables data cleaning, filtering, or format
conversion before the messages are published to the topic.
For more information, see SMTs Overview and
Create a topic with SMTs .
What's next
Create a pull subscription .
Create a push subscription .
Create a BigQuery subscription .
Create a Cloud Storage subscription .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
