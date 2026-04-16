---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.307Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "BigQuery subscriptions parse JSON messages with table schema"
feature_slug: "bigquery-subscriptions-parse-json-messages-with-table-schema"
latest_feature_date: "2024-01-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/associate-schema-topic"
  - "https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription"
  - "https://docs.cloud.google.com/pubsub/docs/access-control"
  - "https://docs.cloud.google.com/pubsub/docs/bigquery-troubleshooting"
keywords:
  - "subscriptions"
  - "parse"
  - "json"
  - "messages"
  - "with"
  - "table"
  - "schema"
  - "can"
---

# BigQuery subscriptions parse JSON messages with table schema

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

BigQuery subscriptions can parse JSON messages by using the schema of a BigQuery table.

## Extended Definition

BigQuery subscriptions can parse JSON messages by using the schema of a BigQuery table.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/associate-schema-topic](https://docs.cloud.google.com/pubsub/docs/associate-schema-topic)
- [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription)
- [https://docs.cloud.google.com/pubsub/docs/access-control](https://docs.cloud.google.com/pubsub/docs/access-control)
- [https://docs.cloud.google.com/pubsub/docs/bigquery-troubleshooting](https://docs.cloud.google.com/pubsub/docs/bigquery-troubleshooting)

## Supporting Pages

### Associate a schema with a topic \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/associate-schema-topic](https://docs.cloud.google.com/pubsub/docs/associate-schema-topic)
- Source ID: `site-docs-root-2`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you associate a schema with a topic, you must also specify the encoding of the messages to be published as BINARY or JSON .
- For more information, see the Pub/Sub Python API reference documentation . from google . api core . exceptions import InvalidArgument , NotFound from google . cloud . pubsub import PublisherClient TODO ( developer ): Replace these variables before running the sample . project id = "your-project-id" topic id = "your-topic-id" first revision id = "your-revision-id" last revision id = "your-revision-id" publisher client = PublisherClient () topic path = publisher client . topic path ( project id , topic id ) try : response = publisher client . update topic ( request = { "topic" : { "name" : topic path , "schema settings" : { "first revision id" : first revision id , "last revision id" : last revision id , }, }, "update mask" : "schemaSettings.firstRevisionId,schemaSettings.lastRevisionId" , } ) print ( f "Updated a topic schema:\n{response}" ) except NotFound : print ( f "{topic id} not found." ) except InvalidArgument : print ( "Schema settings are not valid." ) What's next Commit a schema revision Publish messages to a topic with a schema Validate a schema definition Validate a message for a schema Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For more information, see the Pub/Sub PHP API reference documentation . use Google\Cloud\PubSub\PubSubClient; use Google\Cloud\PubSub\Schema; / Create a topic with a schema. @param string $projectId @param string $topicId @param string $schemaId @param string $encoding / function create topic with schema($projectId, $topicId, $schemaId, $encoding) { $pubsub = new PubSubClient([ 'projectId' => $projectId, ]); $schema = $pubsub->schema($schemaId); $topic = $pubsub->createTopic($topicId, [ 'schemaSettings' => [ // The schema may be provided as an instance of the schema type, // or by using the schema ID directly. 'schema' => $schema, // Encoding may be either BINARY or JSON`. // Provide a string or a constant from Google\Cloud\PubSub\V1\Encoding. 'encoding' => $encoding, ] ]); printf('Topic %s created', $topic->name()); } Python Before trying this sample, follow the Python setup instructions in Quickstart: Using Client Libraries .
- For more information, see the Pub/Sub Node.js API reference documentation . / TODO(developer): Uncomment these variables before running the sample. / // const topicNameOrId = 'YOUR TOPIC NAME OR ID'; // const schemaName = 'YOUR SCHEMA NAME OR ID'; // const encodingType = 'BINARY'; // Imports the Google Cloud client library import { PubSub } from '@google-cloud/pubsub' ; // Creates a client; cache this for further use const pubSubClient = new PubSub (); async function createTopicWithSchema ( topicNameOrId : string , schemaNameOrId : string , encodingType : 'BINARY' 'JSON' , ) { // Get the fully qualified schema name. const schema = pubSubClient . schema ( schemaNameOrId ); const fullName = await schema . getName (); // Creates a new topic with a schema.

### Create BigQuery subscriptions \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription)
- Source ID: `site-docs-root-2`
- Final score: 209
- Re-rank relevance: N/A

Evidence snippets:
- Any messages that validated against a deleted schema revision at the time of publish cannot be written to BigQuery using a BigQuery subscription with Use topic schema enabled.
- You might not see changes to the Pub/Sub topics schema or BigQuery table schema take effect immediately with messages written to the BigQuery table.
- You might not see changes to the BigQuery table schema take effect immediately with messages written to the BigQuery table.
- Service account You have the following options to write messages to a BigQuery table: Configure a custom service account so that only users who have the iam.serviceAccounts.actAs permission on the service account can create a subscription that writes to the table.

### "Access control with Identity and Access Management \_|\_ Pub/Sub \_|\_ Google\

- URL: [https://docs.cloud.google.com/pubsub/docs/access-control](https://docs.cloud.google.com/pubsub/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Lowest-level resources where you can grant this role: Schema Snapshot Subscription Topic cloudkms.keyHandles. cloudkms.keyHandles.create cloudkms.keyHandles.get cloudkms.keyHandles.list cloudkms.operations.get cloudkms. projects. showEffectiveAutokeyConfig pubsub. pubsub. messageTransforms. validate pubsub.schemas.attach pubsub.schemas.commit pubsub.schemas.create pubsub.schemas.delete pubsub.schemas.get pubsub.schemas.getIamPolicy pubsub.schemas.list pubsub.schemas.listRevisions pubsub.schemas.rollback pubsub.schemas.setIamPolicy pubsub.schemas.validate pubsub.snapshots.create pubsub. snapshots. createTagBinding pubsub.snapshots.delete pubsub. snapshots. deleteTagBinding pubsub.snapshots.get pubsub.snapshots.getIamPolicy pubsub.snapshots.list pubsub. snapshots. listEffectiveTags pubsub. snapshots. listTagBindings pubsub.snapshots.seek pubsub.snapshots.setIamPolicy pubsub.snapshots.update pubsub.subscriptions.consume pubsub.subscriptions.create pubsub. subscriptions. createTagBinding pubsub.subscriptions.delete pubsub. subscriptions. deleteTagBinding pubsub.subscriptions.get pubsub. subscriptions. getIamPolicy pubsub.subscriptions.list pubsub. subscriptions. listEffectiveTags pubsub. subscriptions. listTagBindings pubsub. subscriptions. setIamPolicy pubsub.subscriptions.update pubsub. topics. attachSubscription pubsub.topics.create pubsub.topics.createTagBinding pubsub.topics.delete pubsub.topics.deleteTagBinding pubsub. topics. detachSubscription pubsub.topics.get pubsub.topics.getIamPolicy pubsub.topics.list pubsub. topics. listEffectiveTags pubsub.topics.listTagBindings pubsub.topics.publish pubsub.topics.setIamPolicy pubsub.topics.update pubsub.topics.updateTag resourcemanager.projects.get serviceusage. consumerpolicy. analyze serviceusage. consumerpolicy. get serviceusage. effectivepolicy. get serviceusage.groups. serviceusage.groups.list serviceusage. groups. listExpandedMembers serviceusage. groups. listMembers serviceusage.quotas.get serviceusage.services.get serviceusage.services.list serviceusage.values.test Pub/Sub Editor ( roles/ pubsub.editor ) Provides access to modify topics and subscriptions, and access to publish and consume messages.
- Lowest-level resources where you can grant this role: Schema Snapshot Subscription Topic cloudkms.keyHandles. cloudkms.keyHandles.create cloudkms.keyHandles.get cloudkms.keyHandles.list cloudkms.operations.get cloudkms. projects. showEffectiveAutokeyConfig pubsub. messageTransforms. validate pubsub.schemas.attach pubsub.schemas.commit pubsub.schemas.create pubsub.schemas.delete pubsub.schemas.get pubsub.schemas.list pubsub.schemas.listRevisions pubsub.schemas.rollback pubsub.schemas.validate pubsub.snapshots.create pubsub. snapshots. createTagBinding pubsub.snapshots.delete pubsub. snapshots. deleteTagBinding pubsub.snapshots.get pubsub.snapshots.list pubsub. snapshots. listEffectiveTags pubsub. snapshots. listTagBindings pubsub.snapshots.seek pubsub.snapshots.update pubsub.subscriptions.consume pubsub.subscriptions.create pubsub. subscriptions. createTagBinding pubsub.subscriptions.delete pubsub. subscriptions. deleteTagBinding pubsub.subscriptions.get pubsub.subscriptions.list pubsub. subscriptions. listEffectiveTags pubsub. subscriptions. listTagBindings pubsub.subscriptions.update pubsub. topics. attachSubscription pubsub.topics.create pubsub.topics.createTagBinding pubsub.topics.delete pubsub.topics.deleteTagBinding pubsub. topics. detachSubscription pubsub.topics.get pubsub.topics.list pubsub. topics. listEffectiveTags pubsub.topics.listTagBindings pubsub.topics.publish pubsub.topics.update pubsub.topics.updateTag resourcemanager.projects.get serviceusage. consumerpolicy. analyze serviceusage. consumerpolicy. get serviceusage. effectivepolicy. get serviceusage.groups. serviceusage.groups.list serviceusage. groups. listExpandedMembers serviceusage. groups. listMembers serviceusage.quotas.get serviceusage.services.get serviceusage.services.list serviceusage.values.test Pub/Sub Subscriber ( roles/ pubsub.subscriber ) Provides access to consume messages from a subscription and to attach subscriptions to a topic.
- Lowest-level resources where you can grant this role: Schema Snapshot Subscription Topic pubsub. messageTransforms. validate pubsub.schemas.get pubsub.schemas.list pubsub.schemas.listRevisions pubsub.schemas.validate pubsub.snapshots.get pubsub.snapshots.list pubsub. snapshots. listEffectiveTags pubsub. snapshots. listTagBindings pubsub.subscriptions.get pubsub.subscriptions.list pubsub. subscriptions. listEffectiveTags pubsub. subscriptions. listTagBindings pubsub.topics.get pubsub.topics.list pubsub. topics. listEffectiveTags pubsub.topics.listTagBindings resourcemanager.projects.get serviceusage. consumerpolicy. analyze serviceusage. consumerpolicy. get serviceusage. effectivepolicy. get serviceusage.groups. serviceusage.groups.list serviceusage. groups. listExpandedMembers serviceusage. groups. listMembers serviceusage.quotas.get serviceusage.services.get serviceusage.services.list serviceusage.values.test Pub/Sub Publisher ( roles/ pubsub.publisher ) Provides access to publish messages to a topic.
- In this case, user identity info can be captured in Project B's audit logs. projects.subscriptions.delete Deletes an existing subscription. pubsub.subscriptions.delete on the requested subscription projects.subscriptions.detach Detaches a subscription from a topic. pubsub.topics.detachSubscription on the topic that the subscription is attached to. projects.subscriptions.get Gets the configuration details of a subscription. pubsub.subscriptions.get on the requested subscription projects.subscriptions.getIamPolicy Gets the IAM access control policy for a subscription. pubsub.subscriptions.getIamPolicy on the requested subscription projects.subscriptions.list Lists matching subscriptions. pubsub.subscriptions.list on the requested Cloud project projects.subscriptions.modifyAckDeadline Modifies the ack deadline for a specific message. pubsub.subscriptions.consume on the requested subscription projects.subscriptions.modifyPushConfig Modifies the pushConfig for a specified subscription. pubsub.subscriptions.update on the requested subscription projects.subscriptions.patch Updates an existing subscription. pubsub.subscriptions.update on the requested subscription projects.subscriptions.pull Pulls messages from the server. pubsub.subscriptions.consume on the requested subscription projects.subscriptions.seek Seeks an existing subscription to a point in time or a snapshot. pubsub.subscriptions.consume on the requested subscription and pubsub.snapshots.seek on the requested snapshot, if any. projects.subscriptions.setIamPolicy Sets the IAM access control policy for a subscription. pubsub.subscriptions.setIamPolicy on the requested subscription projects.subscriptions.testIamPermissions Returns permissions that a caller has on the specified resource.

### "Troubleshooting BigQuery subscriptions \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/bigquery-troubleshooting](https://docs.cloud.google.com/pubsub/docs/bigquery-troubleshooting)
- Source ID: `site-docs-root-2`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Hourly partitioned table showing UNPARTITIONED in partition ID column When a BigQuery destination table is partitioned by hour, rows initially land in a special partition labeled UNPARTITIONED within the INFORMATION SCHEMA.PARTITIONS view .
- Check if the service account has the correct permissions . table schema mismatch : The table schema is no longer compatible with the BigQuery subscription settings.
- Subscription state shows a red exclamation If you edit the table after creating a subscription, it can affect how Pub/Sub writes messages to the table.
- To resolve the issue, create the table and make sure you can check its state before using it with a BigQuery subscription.

