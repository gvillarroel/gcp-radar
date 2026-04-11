---
title: "View brokers in a Google Cloud Managed Service for Apache Kafka cluster \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/brokers/view-brokers
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/brokers/view-brokers
  title: "View brokers in a Google Cloud Managed Service for Apache Kafka cluster\
    \ \_|\_ Google Cloud Documentation"
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
View brokers in a Google Cloud Managed Service for Apache Kafka cluster
Stay organized with collections
Save and categorize content based on your preferences.
Managed Service for Apache Kafka automatically provisions the brokers for
a cluster. A broker has the following properties:
brokerIndex : The zero-based index of the broker.
nodeId : The node ID for the broker.
rack : The zone where the broker is
provisioned, for example us-central1-a .
To view the brokers for a cluster, perform the following steps.
Console
Go to the Managed Service for Apache Kafka >
Clusters page.
Go to Clusters
Click the name of the cluster.
Select the Configurations tab. The cluster's brokers are listed under
Active Brokers .
gcloud
To get a list of the cluster's brokers, use the
managed-kafka clusters describe
command with the --full flag.
gcloud managed-kafka clusters describe CLUSTER_ID \
--location = LOCATION \
--full \
--format = "yaml(brokerDetails)"
Replace the following:
CLUSTER_ID : The ID or name of the cluster.
LOCATION : The location of the cluster.
The output looks similar to the following:
brokerDetails :
- brokerIndex : '0'
nodeId : '10'
rack : us-central1-c
- brokerIndex : '1'
nodeId : '11'
rack : us-central1-f
- brokerIndex : '2'
nodeId : '12'
rack : us-central1-b
Kafka CLI
Before running this command, install the Kafka command-line tools on a Compute Engine VM. The
VM must be able to reach a subnet that is connected to your Managed Service for Apache Kafka
cluster. Follow the instructions in
Produce and consume messages with the Kafka command-line tools .
To get a list of the cluster's brokers, use the kafka-configs.sh --describe
command with the --entity-type=brokers flag.
kafka-configs.sh --describe --entity-type brokers \
--bootstrap-server = BOOTSTRAP_ADDRESS \
--command-config client.properties
Replace BOOTSTRAP_ADDRESS with the cluster's
bootstrap address .
This command returns a list of broker IDs, along with their dynamic
configuration settings, if any. It does not return the rack property.
What's next
Overview of brokers in Managed Service for Apache Kafka
Broker provisioning
View a Managed Service for Apache Kafka cluster
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
