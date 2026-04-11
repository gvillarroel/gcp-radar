---
title: "Publish messages to Pub/Sub from your mainframe \_|\_ Mainframe Connector\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/mainframe-connector/docs/pub-sub
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/mainframe-connector/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/mainframe-connector/docs/pub-sub
  title: "Publish messages to Pub/Sub from your mainframe \_|\_ Mainframe Connector\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Mainframe Connector
Guides
Send feedback
Publish messages to Pub/Sub from your mainframe
Stay organized with collections
Save and categorize content based on your preferences.
Mainframe Connector lets you publish messages to Pub/Sub
from your mainframe. You can use this feature, for example, to integrate your
mainframe with BigQuery or Cloud Storage, augment message data with
Dataflow, or trigger Cloud Run functions.
Before you begin
If you haven't already, then install Mainframe Connector on your mainframe .
To run Pub/Sub commands, verify that you assign the
Pub/Sub Publisher
role to your user account. For information about assigning roles to a user
account, see Managing access using IAM .
Set up Application Default Credentials .
Publish a message to a Pub/Sub topic
To publish an unstructured Pub/Sub message from your mainframe,
use the pubsub topics publish command as follows:
//STEP01 EXEC BQSH
//STDIN DD *
pubsub topics publish TOPIC --data="Hello,World"
/*
Replace TOPIC with the name of the Pub/Sub
topic. The required format is projects/{project}/topics/{topic} .
Publish messages to a Pub/Sub topic
Mainframe Connector lets you publish structured messages from a
mainframe to a Pub/Sub topic. For example, you can use this
capability to transfer Queued Sequential Access Method (QSAM) records from your
mainframe to BigQuery using Pub/Sub. The following are
some of the advantages of using this approach:
You can transform data or augment data with AI through Dataflow or
through Pub/Sub simultaneous multithreading (SMTs).
You can move records from a mainframe to Cloud Storage.
You can synchronize mainframe application updates to cloud-based systems
similar to change data capture (CDC).
To publish structured messages from your mainframe to a Pub/Sub
topic, use the following steps:
Create a Pub/Sub topic to publish messages. Optionally, you can
create a topic with a schema for more restrictions. For more information, see
Create a topic or
Create and associate a schema when you create a topic .
Create a Pub/Sub topic to capture information about records
that fail to be transcoded. This topic is called a spillover topic. For
information on creating a Pub/Sub topic, see
Create a topic .
(Optional) To convert the records to JSON before sending them to
Pub/Sub, configure the JSON configuration file .
If you don't provide a configuration file, the default JSON configuration is
used.
(Optional) By default, Pub/Sub messages don't contain ordering
keys, and attributes. Spillover messages are sent to the spillover topic
with the _spillover suffix. To change the defaults, you can
configure the Pub/Sub publish configuration file . For example, you can use the following configuration:
{
"spillover-configuration": {
"name": SPILLOVER_TOPIC_NAME
}
}
Replace SPILLOVER_TOPIC_NAME with the name of the
spillover topic you created in step 2. The required format is
projects/{project}/topics/{topic} . Information about messages
that are not decoded properly is saved to this spillover topic.
To publish mainframe records to Pub/Sub using the
qsam decode command ,
run the following JCL:
//STEP01 EXEC BQSH
//STDIN DD *
qsam decode INPUT OUTPUT \
--copybook COPYBOOK
--transcode-configuration TRANSCODE-CONFIG
--output-format=JSONL
--input-parameter=json-dialect= JSON_CONFIGURATION
--input-parameter=pubsub-publish-configuration= PUBSUB_CONFIGURATION
/*
Replace the following:
INPUT : the
data path of the
QSAM file.
OUTPUT : the
data path
of the Pub/Sub topic you created in step 1. The required
format is pubsub:projects/{project}/topics/{topic} .
TRANSCODE-CONFIG : the
data path of
the file containing the transcoding configuration. For more information on
the transcoder configuration format, see Transcoder configuration .
JSON_CONFIGURATION : (optional) the
data path of the
JSON configuration file . If
you don't provide a configuration file, the default JSON configuration is
used.
PUBSUB_CONFIGURATION : (optional) the
data path of the
Pub/Sub publish configuration file .
If you don't specify a configuration file, the default Pub/Sub
configuration is used.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
