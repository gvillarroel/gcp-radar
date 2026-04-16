---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.305Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Platform logs for Cloud Storage import topics"
feature_slug: "platform-logs-for-cloud-storage-import-topics"
latest_feature_date: "2024-11-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/cloud-storage-import-topic-troubleshooting"
  - "https://docs.cloud.google.com/pubsub/docs/create-cloud-storage-import-topic"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_topics"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_topic"
keywords:
  - "platform"
  - "logs"
  - "for"
  - "storage"
  - "import"
  - "topics"
  - "can"
  - "be"
---

# Platform logs for Cloud Storage import topics

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

Google Cloud platform logs can be enabled to help troubleshoot Cloud Storage import topics.

## Extended Definition

Google Cloud platform logs can be enabled to help troubleshoot Cloud Storage import topics.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/cloud-storage-import-topic-troubleshooting](https://docs.cloud.google.com/pubsub/docs/cloud-storage-import-topic-troubleshooting)
- [https://docs.cloud.google.com/pubsub/docs/create-cloud-storage-import-topic](https://docs.cloud.google.com/pubsub/docs/create-cloud-storage-import-topic)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_topics](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_topics)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_topic](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_topic)

## Supporting Pages

### "Troubleshooting a Cloud Storage import topic \_|\_ Pub/Sub \_|\_ Google\

- URL: [https://docs.cloud.google.com/pubsub/docs/cloud-storage-import-topic-troubleshooting](https://docs.cloud.google.com/pubsub/docs/cloud-storage-import-topic-troubleshooting)
- Source ID: `site-docs-root-2`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can also enable platform logs for a Cloud Storage import topic.
- This document provides some common troubleshooting tips for Cloud Storage import topics.
- These logs help you troubleshoot issues when you have issues ingesting objects into Pub/Sub import topics.
- Go to Topics Click the Cloud Storage import topic that you want to troubleshoot.

### Create a Cloud Storage import topic \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/create-cloud-storage-import-topic](https://docs.cloud.google.com/pubsub/docs/create-cloud-storage-import-topic)
- Source ID: `site-docs-root-2`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create and manage a Cloud Storage import topic: Create an import topic: pubsub.topics.create Delete an import topic: pubsub.topics.delete Get an import topic: pubsub.topics.get List an import topic: pubsub.topics.list Publish to an import topic: pubsub.topics.publish Update an import topic: pubsub.topics.update Get the IAM policy for an import topic: pubsub.topics.getIamPolicy Configure the IAM policy for an import topic: pubsub.topics.setIamPolicy You might also be able to get these permissions with custom roles or other predefined roles .
- Input format When you create a Cloud Storage import topic, you can specify the format of the objects to be ingested as Text , Avro , or Pub/Sub Avro .
- Enable platform logs for a Cloud Storage import topic.
- For more information, see the Pub/Sub Node.js API reference documentation . / TODO ( developer ): Uncomment these variables before running the sample . / // const topicNameOrId = 'YOUR TOPIC NAME OR ID' ; // const bucket = 'YOUR BUCKET NAME' ; // const inputFormat = 'text' ; // const textDelimiter = ' \n ' ; // const matchGlob = ' .txt' ; // const minimumObjectCreateTime = 'YYYY-MM-DDThh:mm:ssZ; // Imports the Google Cloud client library import { PubSub , TopicMetadata } from '@google-cloud/pubsub' ; // Creates a client ; cache this for further use const pubSubClient = new PubSub (); async function createTopicWithCloudStorageIngestion ( topicNameOrId : string , bucket : string , inputFormat : string , textDelimiter : string , matchGlob : string , minimumObjectCreateTime : string , ) { const minimumDate = Date . parse ( minimumObjectCreateTime ); const topicMetadata : TopicMetadata = { name : topicNameOrId , ingestionDataSourceSettings : { cloudStorage : { bucket , minimumObjectCreateTime : { seconds : minimumDate / 1000 , nanos : ( minimumDate % 1000 ) 1000 , }, matchGlob , }, }, }; // Make a format appropriately . switch ( inputFormat ) { case 'text' : topicMetadata . ingestionDataSourceSettings ! . cloudStorage ! . textFormat = { delimiter : textDelimiter , }; break ; case 'avro' : topicMetadata . ingestionDataSourceSettings ! . cloudStorage ! . avroFormat = {}; break ; case 'pubsub avro' : topicMetadata . ingestionDataSourceSettings ! . cloudStorage ! . pubsubAvroFormat = {}; break ; default : console . error ( 'inputFormat must be in ("text", "avro", "pubsub avro")' ); return ; } // Creates a new topic with Cloud Storage ingestion . await pubSubClient . createTopic ( topicMetadata ); console . log ( Topic $ { topicNameOrId } created with Cloud Storage ingestion . ); } Python Before trying this sample, follow the Python setup instructions in Quickstart: Using Client Libraries .

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_topics](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_topics)
- Source ID: `site-api-reference`
- Final score: 219
- Re-rank relevance: N/A

Evidence snippets:
- IngestionDataSourceSettings JSON representation { "platformLogsSettings" : { object ( PlatformLogsSettings ) } , // Union field source can be only one of the following: "awsKinesis" : { object ( AwsKinesis ) } , "cloudStorage" : { object ( CloudStorage ) } , "azureEventHubs" : { object ( AzureEventHubs ) } , "awsMsk" : { object ( AwsMsk ) } , "confluentCloud" : { object ( ConfluentCloud ) } // End of list of possible types for union field source . } Fields platformLogsSettings object ( PlatformLogsSettings ) Optional.
- CloudStorage JSON representation { "state" : enum ( State ) , "bucket" : string , "minimumObjectCreateTime" : string , "matchGlob" : string , // Union field input format can be only one of the following: "textFormat" : { object ( TextFormat ) } , "avroFormat" : { object ( AvroFormat ) } , "pubsubAvroFormat" : { object ( PubSubAvroFormat ) } // End of list of possible types for union field input format . } Fields state enum ( State ) Output only.
- The minimum severity level of Platform Logs that will be written.
- If unset, no Platform Logs will be generated.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_topic](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_topic)
- Source ID: `site-api-reference`
- Final score: 209
- Re-rank relevance: N/A

Evidence snippets:
- IngestionDataSourceSettings JSON representation { "platformLogsSettings" : { object ( PlatformLogsSettings ) } , // Union field source can be only one of the following: "awsKinesis" : { object ( AwsKinesis ) } , "cloudStorage" : { object ( CloudStorage ) } , "azureEventHubs" : { object ( AzureEventHubs ) } , "awsMsk" : { object ( AwsMsk ) } , "confluentCloud" : { object ( ConfluentCloud ) } // End of list of possible types for union field source . } Fields platformLogsSettings object ( PlatformLogsSettings ) Optional.
- IngestionDataSourceSettings JSON representation { "platformLogsSettings" : { object ( PlatformLogsSettings ) } , // Union field source can be only one of the following: "awsKinesis" : { object ( AwsKinesis ) } , "cloudStorage" : { object ( CloudStorage ) } , "azureEventHubs" : { object ( AzureEventHubs ) } , "awsMsk" : { object ( AwsMsk ) } , "confluentCloud" : { object ( ConfluentCloud ) } // End of list of possible types for union field source . } Fields platformLogsSettings object ( PlatformLogsSettings ) Optional.
- CloudStorage JSON representation { "state" : enum ( State ) , "bucket" : string , "minimumObjectCreateTime" : string , "matchGlob" : string , // Union field input format can be only one of the following: "textFormat" : { object ( TextFormat ) } , "avroFormat" : { object ( AvroFormat ) } , "pubsubAvroFormat" : { object ( PubSubAvroFormat ) } // End of list of possible types for union field input format . } Fields state enum ( State ) Output only.
- CloudStorage JSON representation { "state" : enum ( State ) , "bucket" : string , "minimumObjectCreateTime" : string , "matchGlob" : string , // Union field input format can be only one of the following: "textFormat" : { object ( TextFormat ) } , "avroFormat" : { object ( AvroFormat ) } , "pubsubAvroFormat" : { object ( PubSubAvroFormat ) } // End of list of possible types for union field input format . } Fields state enum ( State ) Output only.

