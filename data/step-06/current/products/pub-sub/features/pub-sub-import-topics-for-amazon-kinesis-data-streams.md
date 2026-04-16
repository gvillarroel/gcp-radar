---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.306Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Pub/Sub import topics for Amazon Kinesis Data Streams"
feature_slug: "pub-sub-import-topics-for-amazon-kinesis-data-streams"
latest_feature_date: "2024-04-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic"
  - "https://docs.cloud.google.com/pubsub/docs/aws-kinesis-import-topic-troubleshooting"
  - "https://docs.cloud.google.com/pubsub/docs/create-amazon-msk-import-topic"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_topics"
keywords:
  - "pub"
  - "sub"
  - "import"
  - "topics"
  - "for"
  - "amazon"
  - "kinesis"
  - "streams"
---

# Pub/Sub import topics for Amazon Kinesis Data Streams

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

Import topics can ingest streaming data from Amazon Kinesis Data Streams into Pub/Sub.

## Extended Definition

Import topics can ingest streaming data from Amazon Kinesis Data Streams into Pub/Sub.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic](https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic)
- [https://docs.cloud.google.com/pubsub/docs/aws-kinesis-import-topic-troubleshooting](https://docs.cloud.google.com/pubsub/docs/aws-kinesis-import-topic-troubleshooting)
- [https://docs.cloud.google.com/pubsub/docs/create-amazon-msk-import-topic](https://docs.cloud.google.com/pubsub/docs/create-amazon-msk-import-topic)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_topics](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_topics)

## Supporting Pages

### "Create an Amazon Kinesis Data Streams import topic \_|\_ Pub/Sub \_|\_ Google\

- URL: [https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic](https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic)
- Source ID: `site-docs-root-2`
- Final score: 360
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create and manage Amazon Kinesis Data Streams import topics: Create an import topic: pubsub.topics.create Delete an import topic: pubsub.topics.delete Get an import topic: pubsub.topics.get List an import topic: pubsub.topics.list Publish to an import topic: pubsub.topics.publish and pubsub.serviceAgent Update an import topic: pubsub.topics.update Get the IAM policy for an import topic: pubsub.topics.getIamPolicy Configure the IAM policy for an import topic: pubsub.topics.setIamPolicy You might also be able to get these permissions with custom roles or other predefined roles .
- For Amazon Kinesis Data Streams import topics, Pub/Sub uses the service account as the identity to access resources from AWS.
- Ensure that you have completed the following procedures: Set up federated identity to access Kinesis Data Streams Add the Pub/Sub publisher role to the Pub/Sub service account Add the service account user role to the service account To create an Amazon Kinesis Data Streams import topic, follow these steps: Console In the Google Cloud console, go to the Topics page.
- Run the gcloud pubsub topics add-iam-policy-binding command: gcloud pubsub topics add-iam-policy-binding TOPIC ID \ --member = "serviceAccount:service- PROJECT NUMBER @gcp-sa-pubsub.iam.gserviceaccount.com" \ --role = "roles/pubsub.publisher" Replace the following: TOPIC ID : the topic ID of the Amazon Kinesis Data Streams import topic.

### "Troubleshooting an Amazon Kinesis Data Streams import topic \_|\_ Pub/Sub\

- URL: [https://docs.cloud.google.com/pubsub/docs/aws-kinesis-import-topic-troubleshooting](https://docs.cloud.google.com/pubsub/docs/aws-kinesis-import-topic-troubleshooting)
- Source ID: `site-docs-root-2`
- Final score: 348
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Pub/Sub Guides Send feedback Troubleshooting an Amazon Kinesis Data Streams import topic Stay organized with collections Save and categorize content based on your preferences.
- This document provides some common troubleshooting tips for Amazon Kinesis Data Streams import topics.
- You can enable or disable Platform logs for Amazon Kinesis Data Streams import topics.
- Go to Topics Click the Amazon Kinesis Data Streams import topic that you want to troubleshoot.

### "Create a Amazon Managed Streaming for Apache Kafka import topic \_|\_ Pub/Sub\

- URL: [https://docs.cloud.google.com/pubsub/docs/create-amazon-msk-import-topic](https://docs.cloud.google.com/pubsub/docs/create-amazon-msk-import-topic)
- Source ID: `site-docs-root-2`
- Final score: 293
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create and manage Amazon MSK import topics: Create an import topic: pubsub.topics.create Delete an import topic: pubsub.topics.delete Get an import topic: pubsub.topics.get List an import topic: pubsub.topics.list Publish to an import topic: pubsub.topics.publish and pubsub.serviceAgent Update an import topic: pubsub.topics.update Get the IAM policy for an import topic: pubsub.topics.getIamPolicy Configure the IAM policy for an import topic: pubsub.topics.setIamPolicy You might also be able to get these permissions with custom roles or other predefined roles .
- For Amazon MSK import topics, Pub/Sub uses the service account as the identity to access resources from AWS.
- Ensure that you have completed the following procedures: Set up federated identity to access Amazon MSK Add the Pub/Sub publisher role to the Pub/Sub service account Add the service account user role to the service account To create an Amazon MSK import topic, follow these steps: Console In the Google Cloud console, go to the Topics page.
- Run the gcloud pubsub topics add-iam-policy-binding command: gcloud pubsub topics add-iam-policy-binding TOPIC ID \ --member = "serviceAccount:service- PROJECT NUMBER @gcp-sa-pubsub.iam.gserviceaccount.com" \ --role = "roles/pubsub.publisher" Replace the following: TOPIC ID : the topic ID of the Amazon MSK import topic.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_topics](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_topics)
- Source ID: `site-api-reference`
- Final score: 292
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Curl Request curl --location 'https://pubsub.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "list topics", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request for the ListTopics method.
- The name of the topic in the Amazon MSK cluster that Pub/Sub will import from. awsRoleArn string Required.
- CloudStorage JSON representation { "state" : enum ( State ) , "bucket" : string , "minimumObjectCreateTime" : string , "matchGlob" : string , // Union field input format can be only one of the following: "textFormat" : { object ( TextFormat ) } , "avroFormat" : { object ( AvroFormat ) } , "pubsubAvroFormat" : { object ( PubSubAvroFormat ) } // End of list of possible types for union field input format . } Fields state enum ( State ) Output only.
- To transform a message return a map with the following keys: - (required) 'data' : {string} - (optional) 'attributes' : {Object<string, string>} Returning empty attributes will remove all attributes from the message. @param {(Object<string, (string Object<string, string>)>} Pub/Sub message.

