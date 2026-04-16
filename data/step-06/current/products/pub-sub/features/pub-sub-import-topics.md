---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.304Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Pub/Sub import topics"
feature_slug: "pub-sub-import-topics"
latest_feature_date: "2025-03-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/create-amazon-msk-import-topic"
  - "https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic"
  - "https://docs.cloud.google.com/pubsub/docs/create-azure-event-hub-import-topic"
  - "https://docs.cloud.google.com/pubsub/docs/create-confluent-cloud-import-topic"
keywords:
  - "pub"
  - "sub"
  - "import"
  - "topics"
  - "let"
  - "you"
  - "ingest"
  - "streaming"
---

# Pub/Sub import topics

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

Import topics let you ingest streaming data into Pub/Sub from Azure Event Hubs, Amazon Managed Streaming for Apache Kafka, and Confluent Cloud.

## Extended Definition

Import topics let you ingest streaming data into Pub/Sub from Azure Event Hubs, Amazon Managed Streaming for Apache Kafka, and Confluent Cloud.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/create-amazon-msk-import-topic](https://docs.cloud.google.com/pubsub/docs/create-amazon-msk-import-topic)
- [https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic](https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic)
- [https://docs.cloud.google.com/pubsub/docs/create-azure-event-hub-import-topic](https://docs.cloud.google.com/pubsub/docs/create-azure-event-hub-import-topic)
- [https://docs.cloud.google.com/pubsub/docs/create-confluent-cloud-import-topic](https://docs.cloud.google.com/pubsub/docs/create-confluent-cloud-import-topic)

## Supporting Pages

### "Create a Amazon Managed Streaming for Apache Kafka import topic \_|\_ Pub/Sub\

- URL: [https://docs.cloud.google.com/pubsub/docs/create-amazon-msk-import-topic](https://docs.cloud.google.com/pubsub/docs/create-amazon-msk-import-topic)
- Source ID: `site-docs-root-2`
- Final score: 308
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- An Amazon Managed Streaming for Apache Kafka (Amazon MSK) import topic lets you continuously ingest data from Amazon MSK as an external source and into Pub/Sub.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create and manage Amazon MSK import topics: Create an import topic: pubsub.topics.create Delete an import topic: pubsub.topics.delete Get an import topic: pubsub.topics.get List an import topic: pubsub.topics.list Publish to an import topic: pubsub.topics.publish and pubsub.serviceAgent Update an import topic: pubsub.topics.update Get the IAM policy for an import topic: pubsub.topics.getIamPolicy Configure the IAM policy for an import topic: pubsub.topics.setIamPolicy You might also be able to get these permissions with custom roles or other predefined roles .
- Ensure that you have completed the following procedures: Set up federated identity to access Amazon MSK Add the Pub/Sub publisher role to the Pub/Sub service account Add the service account user role to the service account To create an Amazon MSK import topic, follow these steps: Console In the Google Cloud console, go to the Topics page.
- For more information, see the Pub/Sub Node.js API reference documentation . / TODO ( developer ): Uncomment these variables before running the sample . / // const topicNameOrId = 'YOUR TOPIC NAME OR ID' ; // const clusterArn = 'arn:aws:kafka:...' ; // const mskTopic = 'YOUR MSK TOPIC' ; // const roleArn = 'arn:aws:iam:...' ; // const gcpServiceAccount = 'ingestion-account@...' ; // Imports the Google Cloud client library import { PubSub } from '@google-cloud/pubsub' ; // Creates a client ; cache this for further use const pubSubClient = new PubSub (); async function createTopicWithAwsMskIngestion ( topicNameOrId : string , clusterArn : string , mskTopic : string , awsRoleArn : string , gcpServiceAccount : string , ) { // Creates a new topic with AWS MSK ingestion . await pubSubClient . createTopic ({ name : topicNameOrId , ingestionDataSourceSettings : { awsMsk : { clusterArn , topic : mskTopic , awsRoleArn , gcpServiceAccount , }, }, }); console . log ( Topic $ { topicNameOrId } created with AWS MSK ingestion . ); } Python Before trying this sample, follow the Python setup instructions in Quickstart: Using Client Libraries .

### "Create an Amazon Kinesis Data Streams import topic \_|\_ Pub/Sub \_|\_ Google\

- URL: [https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic](https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic)
- Source ID: `site-docs-root-2`
- Final score: 290
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create and manage Amazon Kinesis Data Streams import topics: Create an import topic: pubsub.topics.create Delete an import topic: pubsub.topics.delete Get an import topic: pubsub.topics.get List an import topic: pubsub.topics.list Publish to an import topic: pubsub.topics.publish and pubsub.serviceAgent Update an import topic: pubsub.topics.update Get the IAM policy for an import topic: pubsub.topics.getIamPolicy Configure the IAM policy for an import topic: pubsub.topics.setIamPolicy You might also be able to get these permissions with custom roles or other predefined roles .
- Ensure that you have completed the following procedures: Set up federated identity to access Kinesis Data Streams Add the Pub/Sub publisher role to the Pub/Sub service account Add the service account user role to the service account To create an Amazon Kinesis Data Streams import topic, follow these steps: Console In the Google Cloud console, go to the Topics page.
- An Amazon Kinesis Data Streams import topic lets you continuously ingest data from Amazon Kinesis Data Streams as an external source and into Pub/Sub.
- For more information, see the Pub/Sub Node.js API reference documentation . / TODO ( developer ): Uncomment these variables before running the sample . / // const topicNameOrId = 'YOUR TOPIC NAME OR ID' ; // const roleArn = 'arn:aws:iam:...' ; // const gcpServiceAccount = 'ingestion-account@...' ; // const streamArn = 'arn:aws:kinesis:...' ; // const consumerArn = 'arn:aws:kinesis:...' ; // Imports the Google Cloud client library import { PubSub } from '@google-cloud/pubsub' ; // Creates a client ; cache this for further use const pubSubClient = new PubSub (); async function createTopicWithKinesisIngestion ( topicNameOrId : string , awsRoleArn : string , gcpServiceAccount : string , streamArn : string , consumerArn : string , ) { // Creates a new topic with Kinesis ingestion . await pubSubClient . createTopic ({ name : topicNameOrId , ingestionDataSourceSettings : { awsKinesis : { awsRoleArn , gcpServiceAccount , streamArn , consumerArn , }, }, }); console . log ( Topic $ { topicNameOrId } created with AWS Kinesis ingestion . ); } Python Before trying this sample, follow the Python setup instructions in Quickstart: Using Client Libraries .

### "Create an Azure Event Hubs import topic \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/create-azure-event-hub-import-topic](https://docs.cloud.google.com/pubsub/docs/create-azure-event-hub-import-topic)
- Source ID: `site-docs-root-2`
- Final score: 286
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create and manage Azure Event Hubs import topics: Create an import topic: pubsub.topics.create Delete an import topic: pubsub.topics.delete Get an import topic: pubsub.topics.get List an import topic: pubsub.topics.list Publish to an import topic: pubsub.topics.publish and pubsub.serviceAgent Update an import topic: pubsub.topics.update Get the IAM policy for an import topic: pubsub.topics.getIamPolicy Configure the IAM policy for an import topic: pubsub.topics.setIamPolicy You might also be able to get these permissions with custom roles or other predefined roles .
- Ensure that you have completed the following procedures: Set up federated identity to access Azure Event Hubs Add the Pub/Sub publisher role to the Pub/Sub service account Add the service account user role to the IAM principal To create an Azure Event Hubs import topic, follow these steps: Console In the Google Cloud console, go to the Topics page.
- An Azure Event Hubs import topic lets you continuously ingest data from Azure Event Hubs as an external source and into Pub/Sub.
- For more information, see the Pub/Sub Node.js API reference documentation . / TODO ( developer ): Uncomment these variables before running the sample . / // const topicNameOrId = 'YOUR TOPIC NAME OR ID' ; // const resourceGroup = 'YOUR RESOURCE GROUP' ; // const namespace = 'YOUR NAMESPACE' ; // const eventHub = 'YOUR EVENT HUB' ; // const clientId = 'YOUR CLIENT ID' ; // const tenantId = 'YOUR TENANT ID' ; // const subscriptionId = 'YOUR SUBSCRIPTION ID' ; // const gcpServiceAccount = 'ingestion-account@...' ; // Imports the Google Cloud client library import { PubSub } from '@google-cloud/pubsub' ; // Creates a client ; cache this for further use const pubSubClient = new PubSub (); async function createTopicWithAzureEventHubsIngestion ( topicNameOrId : string , resourceGroup : string , namespace : string , eventHub : string , clientId : string , tenantId : string , subscriptionId : string , gcpServiceAccount : string , ) { // Creates a new topic with Azure Event Hubs ingestion . await pubSubClient . createTopic ({ name : topicNameOrId , ingestionDataSourceSettings : { azureEventHubs : { resourceGroup , namespace , eventHub , clientId , tenantId , subscriptionId , gcpServiceAccount , }, }, }); console . log ( Topic $ { topicNameOrId } created with Azure Event Hubs ingestion . , ); } Python Before trying this sample, follow the Python setup instructions in Quickstart: Using Client Libraries .

### Create a Confluent Cloud import topic \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/create-confluent-cloud-import-topic](https://docs.cloud.google.com/pubsub/docs/create-confluent-cloud-import-topic)
- Source ID: `site-docs-root-2`
- Final score: 286
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create and manage Confluent Cloud import topics: Create an import topic: pubsub.topics.create Delete an import topic: pubsub.topics.delete Get an import topic: pubsub.topics.get List an import topic: pubsub.topics.list Publish to an import topic: pubsub.topics.publish and pubsub.serviceAgent Update an import topic: pubsub.topics.update Get the IAM policy for an import topic: pubsub.topics.getIamPolicy Configure the IAM policy for an import topic: pubsub.topics.setIamPolicy You might also be able to get these permissions with custom roles or other predefined roles .
- Ensure that you have completed the following procedures: Set up federated identity to access Confluent Cloud Add the Pub/Sub publisher role to the Pub/Sub service account Add the service account user role to the service account To create a Confluent Cloud import topic, follow these steps: Console In the Google Cloud console, go to the Topics page.
- A Confluent Cloud import topic lets you continuously ingest data from Confluent Cloud as an external source and into Pub/Sub.
- For more information, see the Pub/Sub Node.js API reference documentation . / TODO ( developer ): Uncomment these variables before running the sample . / // const topicNameOrId = 'YOUR TOPIC NAME OR ID' ; // const bootstrapServer = 'url:port' ; // const clusterId = 'YOUR CLUSTER ID' ; // const confluentTopic = 'YOUR CONFLUENT TOPIC' ; // const identityPoolId = 'pool-ID' ; // const gcpServiceAccount = 'ingestion-account@...' ; // Imports the Google Cloud client library import { PubSub } from '@google-cloud/pubsub' ; // Creates a client ; cache this for further use const pubSubClient = new PubSub (); async function createTopicWithConfluentCloudIngestion ( topicNameOrId : string , bootstrapServer : string , clusterId : string , confluentTopic : string , identityPoolId : string , gcpServiceAccount : string , ) { // Creates a new topic with Confluent Cloud ingestion . await pubSubClient . createTopic ({ name : topicNameOrId , ingestionDataSourceSettings : { confluentCloud : { bootstrapServer , clusterId , topic : confluentTopic , identityPoolId , gcpServiceAccount , }, }, }); console . log ( Topic $ { topicNameOrId } created with Confluent Cloud ingestion . ); } Python Before trying this sample, follow the Python setup instructions in Quickstart: Using Client Libraries .

