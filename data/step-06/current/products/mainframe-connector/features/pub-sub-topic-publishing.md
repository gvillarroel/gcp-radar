---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.227Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "Pub/Sub topic publishing"
feature_slug: "pub-sub-topic-publishing"
latest_feature_date: "2025-06-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/pubsub-publish-configuration"
  - "https://docs.cloud.google.com/mainframe-connector/docs/pub-sub"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-reference"
keywords:
  - "pub"
  - "sub"
  - "topic"
  - "publishing"
  - "the"
  - "qsam"
  - "decode"
  - "command"
---

# Pub/Sub topic publishing

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

The QSAM decode command or the pubsub topics publish command can send messages to a Pub/Sub topic.

## Extended Definition

The QSAM decode command or the pubsub topics publish command can send messages to a Pub/Sub topic.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/pubsub-publish-configuration](https://docs.cloud.google.com/mainframe-connector/docs/pubsub-publish-configuration)
- [https://docs.cloud.google.com/mainframe-connector/docs/pub-sub](https://docs.cloud.google.com/mainframe-connector/docs/pub-sub)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)

## Supporting Pages

### Pub/Sub configuration \_|\_ Mainframe Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/pubsub-publish-configuration](https://docs.cloud.google.com/mainframe-connector/docs/pubsub-publish-configuration)
- Source ID: `site-docs-reference`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can configure Mainframe Connector transcoder's Pub/Sub publish formatting by adding the required configuration in a JSON file, and specifying this file using the --input-parameter pubsub-publish-configuration = DataPath option with the qsam decode command.
- PubsubPublishConfiguration The PubsubPublishConfiguration object lets you configure the messages that get sent to Pub/Sub and is used with the qsam decode command.
- For example, if the input topic is projects/project example/topics/topic example , the default spillover topic would be projects/project example/topics/topic example spillover . batching settings object ( BatchingSettings ) Specify the batch settings for publishing messages.
- If the number of threads is 0, publishing is handled synchronously. result processing threads int Specify the number of threads for processing Pub/Sub message results.

### "Publish messages to Pub/Sub from your mainframe \_|\_ Mainframe Connector\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/pub-sub](https://docs.cloud.google.com/mainframe-connector/docs/pub-sub)
- Source ID: `site-docs-root-2`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To publish mainframe records to Pub/Sub using the qsam decode command , run the following JCL: //STEP01 EXEC BQSH //STDIN DD qsam decode INPUT OUTPUT \ --copybook COPYBOOK --transcode-configuration TRANSCODE-CONFIG --output-format=JSONL --input-parameter=json-dialect= JSON CONFIGURATION --input-parameter=pubsub-publish-configuration= PUBSUB CONFIGURATION / Replace the following: INPUT : the data path of the QSAM file.
- Publish a message to a Pub/Sub topic To publish an unstructured Pub/Sub message from your mainframe, use the pubsub topics publish command as follows: //STEP01 EXEC BQSH //STDIN DD pubsub topics publish TOPIC --data="Hello,World" / Replace TOPIC with the name of the Pub/Sub topic.
- For information on creating a Pub/Sub topic, see Create a topic . (Optional) To convert the records to JSON before sending them to Pub/Sub, configure the JSON configuration file .
- To publish structured messages from your mainframe to a Pub/Sub topic, use the following steps: Create a Pub/Sub topic to publish messages.

### Mainframe Connector command-line reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- Source ID: `site-docs-reference`
- Final score: 211
- Re-rank relevance: N/A

Evidence snippets:
- TOPIC Flags and arguments The pubsub topics publish command uses the following flags and arguments: TOPIC Specify the name of the topic in the format projects/{project}/topics/{topic} . --attributes = NAME=VALUE (Optional) Specify a comma-separated list of attributes.
- INPUT OUTPUT Flags and arguments The qsam decode command uses the following flags and arguments: INPUT : DataPath Specify the data path of the QSAM file you want to decode.
- You must ensure that your substitution values are properly JSON-escaped if you intend for the final message to remain valid JSON. qsam decode Decode QSAM data.
- Does not throw an error if the directory or object does not exist. pubsub topics publish Publish a message to a Pub/Sub topic.

### Mainframe Connector API commands \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- Source ID: `site-docs-reference`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- Query file SELECT FROM bigquery-public-data.samples.wikipedia WHERE title = @mytitle AND num characters > @min chars; Execution example bq query \ --project id=mainframe-connector-dev \ --location="US" \ --parameters=mytitle::Hippocrates,min chars:INT64:42600 Perform a dry run of the gsutil cp command The gsutil cp command decodes a QSAM file using a COBOL copybook, and generates an ORC file on Cloud Storage.
- No qsam and vsam commands qsam decode Use this command to transcode QSAM file records to the format you want using the --output-format argument.
- No Pub/Sub commands pubsub topics publish Use this command to publish a message to a Pub/Sub topic.
- Note: We recommend that you use the qsam decode and qsam encode commands to perform this task.

