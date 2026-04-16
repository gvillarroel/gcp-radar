---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.304Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Cloud Storage import topics"
feature_slug: "cloud-storage-import-topics"
latest_feature_date: "2024-11-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/create-cloud-storage-import-topic"
  - "https://docs.cloud.google.com/pubsub/docs/cloud-storage-import-topic-troubleshooting"
  - "https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic"
  - "https://docs.cloud.google.com/pubsub/docs/create-azure-event-hub-import-topic"
keywords:
  - "storage"
  - "import"
  - "topics"
  - "let"
  - "you"
  - "ingest"
  - "from"
  - "into"
---

# Cloud Storage import topics

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

Cloud Storage import topics let you ingest data from Cloud Storage into Pub/Sub.

## Extended Definition

Cloud Storage import topics let you ingest data from Cloud Storage into Pub/Sub.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/create-cloud-storage-import-topic](https://docs.cloud.google.com/pubsub/docs/create-cloud-storage-import-topic)
- [https://docs.cloud.google.com/pubsub/docs/cloud-storage-import-topic-troubleshooting](https://docs.cloud.google.com/pubsub/docs/cloud-storage-import-topic-troubleshooting)
- [https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic](https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic)
- [https://docs.cloud.google.com/pubsub/docs/create-azure-event-hub-import-topic](https://docs.cloud.google.com/pubsub/docs/create-azure-event-hub-import-topic)

## Supporting Pages

### Create a Cloud Storage import topic \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/create-cloud-storage-import-topic](https://docs.cloud.google.com/pubsub/docs/create-cloud-storage-import-topic)
- Source ID: `site-docs-root-2`
- Final score: 322
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A Cloud Storage import topic lets you continuously ingest data from Cloud Storage into Pub/Sub.
- FromJsonString ( minimum object create time ) cloud storage settings . minimum object create time = ( minimum object create time timestamp ) except ValueError : print ( "Invalid minimum object create time: " + minimum object create time ) return request = Topic ( name = topic path , ingestion data source settings = IngestionDataSourceSettings ( cloud storage = cloud storage settings , ), ) topic = publisher . create topic ( request = request ) print ( f "Created topic: { topic . name } with Cloud Storage Ingestion Settings" ) If you run into issues, see Troubleshooting a Cloud Storage import topic .
- For more information, see the Pub/Sub Node.js API reference documentation . / TODO ( developer ): Uncomment these variables before running the sample . / // const topicNameOrId = 'YOUR TOPIC NAME OR ID' ; // const bucket = 'YOUR BUCKET NAME' ; // const inputFormat = 'text' ; // const textDelimiter = ' \n ' ; // const matchGlob = ' .txt' ; // const minimumObjectCreateTime = 'YYYY-MM-DDThh:mm:ssZ; // Imports the Google Cloud client library import { PubSub , TopicMetadata } from '@google-cloud/pubsub' ; // Creates a client ; cache this for further use const pubSubClient = new PubSub (); async function createTopicWithCloudStorageIngestion ( topicNameOrId : string , bucket : string , inputFormat : string , textDelimiter : string , matchGlob : string , minimumObjectCreateTime : string , ) { const minimumDate = Date . parse ( minimumObjectCreateTime ); const topicMetadata : TopicMetadata = { name : topicNameOrId , ingestionDataSourceSettings : { cloudStorage : { bucket , minimumObjectCreateTime : { seconds : minimumDate / 1000 , nanos : ( minimumDate % 1000 ) 1000 , }, matchGlob , }, }, }; // Make a format appropriately . switch ( inputFormat ) { case 'text' : topicMetadata . ingestionDataSourceSettings ! . cloudStorage ! . textFormat = { delimiter : textDelimiter , }; break ; case 'avro' : topicMetadata . ingestionDataSourceSettings ! . cloudStorage ! . avroFormat = {}; break ; case 'pubsub avro' : topicMetadata . ingestionDataSourceSettings ! . cloudStorage ! . pubsubAvroFormat = {}; break ; default : console . error ( 'inputFormat must be in ("text", "avro", "pubsub avro")' ); return ; } // Creates a new topic with Cloud Storage ingestion . await pubSubClient . createTopic ( topicMetadata ); console . log ( Topic $ { topicNameOrId } created with Cloud Storage ingestion . ); } Python Before trying this sample, follow the Python setup instructions in Quickstart: Using Client Libraries .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create and manage a Cloud Storage import topic: Create an import topic: pubsub.topics.create Delete an import topic: pubsub.topics.delete Get an import topic: pubsub.topics.get List an import topic: pubsub.topics.list Publish to an import topic: pubsub.topics.publish Update an import topic: pubsub.topics.update Get the IAM policy for an import topic: pubsub.topics.getIamPolicy Configure the IAM policy for an import topic: pubsub.topics.setIamPolicy You might also be able to get these permissions with custom roles or other predefined roles .

### "Troubleshooting a Cloud Storage import topic \_|\_ Pub/Sub \_|\_ Google\

- URL: [https://docs.cloud.google.com/pubsub/docs/cloud-storage-import-topic-troubleshooting](https://docs.cloud.google.com/pubsub/docs/cloud-storage-import-topic-troubleshooting)
- Source ID: `site-docs-root-2`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These logs help you troubleshoot issues when you have issues ingesting objects into Pub/Sub import topics.
- Go to Topics Click the Cloud Storage import topic that you want to troubleshoot.
- Home Documentation Data analytics Pub/Sub Guides Send feedback Troubleshooting a Cloud Storage import topic Stay organized with collections Save and categorize content based on your preferences.
- After you configure the import topic and start ingesting messages, you can check the relevant Cloud Monitoring metrics to see if data is ingested.

### "Create an Amazon Kinesis Data Streams import topic \_|\_ Pub/Sub \_|\_ Google\

- URL: [https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic](https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic)
- Source ID: `site-docs-root-2`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- An Amazon Kinesis Data Streams import topic lets you continuously ingest data from Amazon Kinesis Data Streams as an external source and into Pub/Sub.
- For more information, see the Pub/Sub Node.js API reference documentation . / TODO ( developer ): Uncomment these variables before running the sample . / // const topicNameOrId = 'YOUR TOPIC NAME OR ID' ; // const roleArn = 'arn:aws:iam:...' ; // const gcpServiceAccount = 'ingestion-account@...' ; // const streamArn = 'arn:aws:kinesis:...' ; // const consumerArn = 'arn:aws:kinesis:...' ; // Imports the Google Cloud client library import { PubSub } from '@google-cloud/pubsub' ; // Creates a client ; cache this for further use const pubSubClient = new PubSub (); async function createTopicWithKinesisIngestion ( topicNameOrId : string , awsRoleArn : string , gcpServiceAccount : string , streamArn : string , consumerArn : string , ) { // Creates a new topic with Kinesis ingestion . await pubSubClient . createTopic ({ name : topicNameOrId , ingestionDataSourceSettings : { awsKinesis : { awsRoleArn , gcpServiceAccount , streamArn , consumerArn , }, }, }); console . log ( Topic $ { topicNameOrId } created with AWS Kinesis ingestion . ); } Python Before trying this sample, follow the Python setup instructions in Quickstart: Using Client Libraries .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create and manage Amazon Kinesis Data Streams import topics: Create an import topic: pubsub.topics.create Delete an import topic: pubsub.topics.delete Get an import topic: pubsub.topics.get List an import topic: pubsub.topics.list Publish to an import topic: pubsub.topics.publish and pubsub.serviceAgent Update an import topic: pubsub.topics.update Get the IAM policy for an import topic: pubsub.topics.getIamPolicy Configure the IAM policy for an import topic: pubsub.topics.setIamPolicy You might also be able to get these permissions with custom roles or other predefined roles .
- For more information, see the Pub/Sub Python API reference documentation . from google.cloud import pubsub v1 from google.pubsub v1.types import Topic from google.pubsub v1.types import IngestionDataSourceSettings TODO(developer) project id = "your-project-id" topic id = "your-topic-id" stream arn = "your-stream-arn" consumer arn = "your-consumer-arn" aws role arn = "your-aws-role-arn" gcp service account = "your-gcp-service-account" publisher = pubsub v1 .

### "Create an Azure Event Hubs import topic \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/create-azure-event-hub-import-topic](https://docs.cloud.google.com/pubsub/docs/create-azure-event-hub-import-topic)
- Source ID: `site-docs-root-2`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- An Azure Event Hubs import topic lets you continuously ingest data from Azure Event Hubs as an external source and into Pub/Sub.
- For more information, see the Pub/Sub Node.js API reference documentation . / TODO ( developer ): Uncomment these variables before running the sample . / // const topicNameOrId = 'YOUR TOPIC NAME OR ID' ; // const resourceGroup = 'YOUR RESOURCE GROUP' ; // const namespace = 'YOUR NAMESPACE' ; // const eventHub = 'YOUR EVENT HUB' ; // const clientId = 'YOUR CLIENT ID' ; // const tenantId = 'YOUR TENANT ID' ; // const subscriptionId = 'YOUR SUBSCRIPTION ID' ; // const gcpServiceAccount = 'ingestion-account@...' ; // Imports the Google Cloud client library import { PubSub } from '@google-cloud/pubsub' ; // Creates a client ; cache this for further use const pubSubClient = new PubSub (); async function createTopicWithAzureEventHubsIngestion ( topicNameOrId : string , resourceGroup : string , namespace : string , eventHub : string , clientId : string , tenantId : string , subscriptionId : string , gcpServiceAccount : string , ) { // Creates a new topic with Azure Event Hubs ingestion . await pubSubClient . createTopic ({ name : topicNameOrId , ingestionDataSourceSettings : { azureEventHubs : { resourceGroup , namespace , eventHub , clientId , tenantId , subscriptionId , gcpServiceAccount , }, }, }); console . log ( Topic $ { topicNameOrId } created with Azure Event Hubs ingestion . , ); } Python Before trying this sample, follow the Python setup instructions in Quickstart: Using Client Libraries .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create and manage Azure Event Hubs import topics: Create an import topic: pubsub.topics.create Delete an import topic: pubsub.topics.delete Get an import topic: pubsub.topics.get List an import topic: pubsub.topics.list Publish to an import topic: pubsub.topics.publish and pubsub.serviceAgent Update an import topic: pubsub.topics.update Get the IAM policy for an import topic: pubsub.topics.getIamPolicy Configure the IAM policy for an import topic: pubsub.topics.setIamPolicy You might also be able to get these permissions with custom roles or other predefined roles .
- For more information, see the Pub/Sub Python API reference documentation . from google.cloud import pubsub v1 from google.pubsub v1.types import Topic from google.pubsub v1.types import IngestionDataSourceSettings TODO(developer) project id = "your-project-id" topic id = "your-topic-id" resource group = "your-resource-group" namespace = "your-namespace" event hub = "your-event-hub" client id = "your-client-id" tenant id = "your-tenant-id" subscription id = "your-subscription-id" gcp service account = "your-gcp-service-account" publisher = pubsub v1 .

