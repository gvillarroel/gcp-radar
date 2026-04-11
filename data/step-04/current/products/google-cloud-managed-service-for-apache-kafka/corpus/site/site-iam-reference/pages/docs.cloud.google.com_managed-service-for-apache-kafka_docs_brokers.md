---
title: "Overview of brokers in Managed Service for Apache Kafka \_|\_ Google Cloud\
  \ Managed Service for Apache Kafka \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/brokers
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/brokers
  title: "Overview of brokers in Managed Service for Apache Kafka \_|\_ Google Cloud\
    \ Managed Service for Apache Kafka \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Google Cloud Managed Service for Apache Kafka
Guides
Send feedback
Overview of brokers in Managed Service for Apache Kafka
Stay organized with collections
Save and categorize content based on your preferences.
A Kafka cluster is made up of one or more brokers . Producer applications
send messages to brokers, and consumer applications connect to brokers to
read messages. Multiple consumers can read messages in parallel, typically using
a consumer group .
Each partition in a topic is assigned a leader broker. The leader is responsible
for replicating the partition data that it receives to other brokers.
When you create a Managed Service for Apache Kafka cluster, the service
provisions a number of brokers based on the cluster's total vCPU and memory
capacity. If you scale the cluster up or down, the service automatically
scales the brokers, adding new brokers if needed. For details, see
broker provisioning .
Managed Service for Apache Kafka provides APIs for viewing the brokers in
your cluster. You can also use the open source Apache Kafka APIs to view and
configure brokers. For more information, see the following pages:
View the brokers in a cluster
Change a partition assignment
Use quotas for load isolation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
