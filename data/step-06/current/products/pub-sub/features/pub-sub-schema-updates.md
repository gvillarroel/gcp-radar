---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.311Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Pub/Sub schema updates"
feature_slug: "pub-sub-schema-updates"
latest_feature_date: "2023-03-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/associate-schema-topic"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription"
  - "https://docs.cloud.google.com/pubsub/docs/access-control"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_topic"
keywords:
  - "pub"
  - "sub"
  - "schema"
  - "updates"
  - "schemas"
  - "can"
  - "be"
  - "updated"
---

# Pub/Sub schema updates

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

Pub/Sub schemas can be updated after creation.

## Extended Definition

Pub/Sub schemas can be updated after creation.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/associate-schema-topic](https://docs.cloud.google.com/pubsub/docs/associate-schema-topic)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription)
- [https://docs.cloud.google.com/pubsub/docs/access-control](https://docs.cloud.google.com/pubsub/docs/access-control)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_topic](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_topic)

## Supporting Pages

### Associate a schema with a topic \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/associate-schema-topic](https://docs.cloud.google.com/pubsub/docs/associate-schema-topic)
- Source ID: `site-docs-root-2`
- Final score: 284
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see the Pub/Sub Python API reference documentation . from google . api core . exceptions import InvalidArgument , NotFound from google . cloud . pubsub import PublisherClient TODO ( developer ): Replace these variables before running the sample . project id = "your-project-id" topic id = "your-topic-id" first revision id = "your-revision-id" last revision id = "your-revision-id" publisher client = PublisherClient () topic path = publisher client . topic path ( project id , topic id ) try : response = publisher client . update topic ( request = { "topic" : { "name" : topic path , "schema settings" : { "first revision id" : first revision id , "last revision id" : last revision id , }, }, "update mask" : "schemaSettings.firstRevisionId,schemaSettings.lastRevisionId" , } ) print ( f "Updated a topic schema:\n{response}" ) except NotFound : print ( f "{topic id} not found." ) except InvalidArgument : print ( "Schema settings are not valid." ) What's next Commit a schema revision Publish messages to a topic with a schema Validate a schema definition Validate a message for a schema Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For more information, see the Pub/Sub PHP API reference documentation . use Google\Cloud\PubSub\PubSubClient; use Google\Cloud\PubSub\Schema; / Create a topic with a schema. @param string $projectId @param string $topicId @param string $schemaId @param string $encoding / function create topic with schema($projectId, $topicId, $schemaId, $encoding) { $pubsub = new PubSubClient([ 'projectId' => $projectId, ]); $schema = $pubsub->schema($schemaId); $topic = $pubsub->createTopic($topicId, [ 'schemaSettings' => [ // The schema may be provided as an instance of the schema type, // or by using the schema ID directly. 'schema' => $schema, // Encoding may be either BINARY or JSON`. // Provide a string or a constant from Google\Cloud\PubSub\V1\Encoding. 'encoding' => $encoding, ] ]); printf('Topic %s created', $topic->name()); } Python Before trying this sample, follow the Python setup instructions in Quickstart: Using Client Libraries .
- For more information, see the Pub/Sub Python API reference documentation . from google.api core.exceptions import AlreadyExists , InvalidArgument from google.cloud.pubsub import PublisherClient , SchemaServiceClient from google.pubsub v1.types import Encoding TODO(developer): Replace these variables before running the sample. project id = "your-project-id" topic id = "your-topic-id" schema id = "your-schema-id" first revision id = "your-revision-id" last revision id = "your-revision-id" Choose either BINARY or JSON as valid message encoding in this topic. message encoding = "BINARY" publisher client = PublisherClient () topic path = publisher client . topic path ( project id , topic id ) schema client = SchemaServiceClient () schema path = schema client . schema path ( project id , schema id ) if message encoding == "BINARY" : encoding = Encoding .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to associate and manage schemas: Create schema: pubsub.schemas.create Attach schema to topic: pubsub.schemas.attach Commit a schema revision: pubsub.schemas.commit Delete a schema or a schema revision: pubsub.schemas.delete Get a schema or schema revisions: pubsub.schemas.get List schemas: pubsub.schemas.list List schema revisions: pubsub.schemas.listRevisions Rollback a schema: pubsub.schemas.rollback Validate a message: pubsub.schemas.validate Get the IAM policy for a schema: pubsub.schemas.getIamPolicy Configure the IAM policy for a schema: pubsub.schemas.setIamPolicy You might also be able to get these permissions with custom roles or other predefined roles .

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription)
- Source ID: `site-api-reference`
- Final score: 280
- Re-rank relevance: N/A

Evidence snippets:
- PushConfig JSON representation { "pushEndpoint" : string , "attributes" : { string : string , ... } , // Union field authentication method can be only one of the following: "oidcToken" : { object ( OidcToken ) } // End of list of possible types for union field authentication method . // Union field wrapper can be only one of the following: "pubsubWrapper" : { object ( PubsubWrapper ) } , "noWrapper" : { object ( NoWrapper ) } // End of list of possible types for union field wrapper . } Fields pushEndpoint string Optional.
- PushConfig JSON representation { "pushEndpoint" : string , "attributes" : { string : string , ... } , // Union field authentication method can be only one of the following: "oidcToken" : { object ( OidcToken ) } // End of list of possible types for union field authentication method . // Union field wrapper can be only one of the following: "pubsubWrapper" : { object ( PubsubWrapper ) } , "noWrapper" : { object ( NoWrapper ) } // End of list of possible types for union field wrapper . } Fields pushEndpoint string Optional.
- Curl Request curl --location 'https://pubsub.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "update subscription", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request for the UpdateSubscription method.
- Otherwise, the schemas must be kept in sync and any messages with extra fields are not written and remain in the subscription's backlog. state enum ( State ) Output only.

### "Access control with Identity and Access Management \_|\_ Pub/Sub \_|\_ Google\

- URL: [https://docs.cloud.google.com/pubsub/docs/access-control](https://docs.cloud.google.com/pubsub/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 274
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Lowest-level resources where you can grant this role: Schema Snapshot Subscription Topic cloudkms.keyHandles. cloudkms.keyHandles.create cloudkms.keyHandles.get cloudkms.keyHandles.list cloudkms.operations.get cloudkms. projects. showEffectiveAutokeyConfig pubsub. pubsub. messageTransforms. validate pubsub.schemas.attach pubsub.schemas.commit pubsub.schemas.create pubsub.schemas.delete pubsub.schemas.get pubsub.schemas.getIamPolicy pubsub.schemas.list pubsub.schemas.listRevisions pubsub.schemas.rollback pubsub.schemas.setIamPolicy pubsub.schemas.validate pubsub.snapshots.create pubsub. snapshots. createTagBinding pubsub.snapshots.delete pubsub. snapshots. deleteTagBinding pubsub.snapshots.get pubsub.snapshots.getIamPolicy pubsub.snapshots.list pubsub. snapshots. listEffectiveTags pubsub. snapshots. listTagBindings pubsub.snapshots.seek pubsub.snapshots.setIamPolicy pubsub.snapshots.update pubsub.subscriptions.consume pubsub.subscriptions.create pubsub. subscriptions. createTagBinding pubsub.subscriptions.delete pubsub. subscriptions. deleteTagBinding pubsub.subscriptions.get pubsub. subscriptions. getIamPolicy pubsub.subscriptions.list pubsub. subscriptions. listEffectiveTags pubsub. subscriptions. listTagBindings pubsub. subscriptions. setIamPolicy pubsub.subscriptions.update pubsub. topics. attachSubscription pubsub.topics.create pubsub.topics.createTagBinding pubsub.topics.delete pubsub.topics.deleteTagBinding pubsub. topics. detachSubscription pubsub.topics.get pubsub.topics.getIamPolicy pubsub.topics.list pubsub. topics. listEffectiveTags pubsub.topics.listTagBindings pubsub.topics.publish pubsub.topics.setIamPolicy pubsub.topics.update pubsub.topics.updateTag resourcemanager.projects.get serviceusage. consumerpolicy. analyze serviceusage. consumerpolicy. get serviceusage. effectivepolicy. get serviceusage.groups. serviceusage.groups.list serviceusage. groups. listExpandedMembers serviceusage. groups. listMembers serviceusage.quotas.get serviceusage.services.get serviceusage.services.list serviceusage.values.test Pub/Sub Editor ( roles/ pubsub.editor ) Provides access to modify topics and subscriptions, and access to publish and consume messages.
- Lowest-level resources where you can grant this role: Schema Snapshot Subscription Topic cloudkms.keyHandles. cloudkms.keyHandles.create cloudkms.keyHandles.get cloudkms.keyHandles.list cloudkms.operations.get cloudkms. projects. showEffectiveAutokeyConfig pubsub. messageTransforms. validate pubsub.schemas.attach pubsub.schemas.commit pubsub.schemas.create pubsub.schemas.delete pubsub.schemas.get pubsub.schemas.list pubsub.schemas.listRevisions pubsub.schemas.rollback pubsub.schemas.validate pubsub.snapshots.create pubsub. snapshots. createTagBinding pubsub.snapshots.delete pubsub. snapshots. deleteTagBinding pubsub.snapshots.get pubsub.snapshots.list pubsub. snapshots. listEffectiveTags pubsub. snapshots. listTagBindings pubsub.snapshots.seek pubsub.snapshots.update pubsub.subscriptions.consume pubsub.subscriptions.create pubsub. subscriptions. createTagBinding pubsub.subscriptions.delete pubsub. subscriptions. deleteTagBinding pubsub.subscriptions.get pubsub.subscriptions.list pubsub. subscriptions. listEffectiveTags pubsub. subscriptions. listTagBindings pubsub.subscriptions.update pubsub. topics. attachSubscription pubsub.topics.create pubsub.topics.createTagBinding pubsub.topics.delete pubsub.topics.deleteTagBinding pubsub. topics. detachSubscription pubsub.topics.get pubsub.topics.list pubsub. topics. listEffectiveTags pubsub.topics.listTagBindings pubsub.topics.publish pubsub.topics.update pubsub.topics.updateTag resourcemanager.projects.get serviceusage. consumerpolicy. analyze serviceusage. consumerpolicy. get serviceusage. effectivepolicy. get serviceusage.groups. serviceusage.groups.list serviceusage. groups. listExpandedMembers serviceusage. groups. listMembers serviceusage.quotas.get serviceusage.services.get serviceusage.services.list serviceusage.values.test Pub/Sub Subscriber ( roles/ pubsub.subscriber ) Provides access to consume messages from a subscription and to attach subscriptions to a topic.
- Lowest-level resources where you can grant this role: Schema Snapshot Subscription Topic pubsub. messageTransforms. validate pubsub.schemas.get pubsub.schemas.list pubsub.schemas.listRevisions pubsub.schemas.validate pubsub.snapshots.get pubsub.snapshots.list pubsub. snapshots. listEffectiveTags pubsub. snapshots. listTagBindings pubsub.subscriptions.get pubsub.subscriptions.list pubsub. subscriptions. listEffectiveTags pubsub. subscriptions. listTagBindings pubsub.topics.get pubsub.topics.list pubsub. topics. listEffectiveTags pubsub.topics.listTagBindings resourcemanager.projects.get serviceusage. consumerpolicy. analyze serviceusage. consumerpolicy. get serviceusage. effectivepolicy. get serviceusage.groups. serviceusage.groups.list serviceusage. groups. listExpandedMembers serviceusage. groups. listMembers serviceusage.quotas.get serviceusage.services.get serviceusage.services.list serviceusage.values.test Pub/Sub Publisher ( roles/ pubsub.publisher ) Provides access to publish messages to a topic.
- In this case, user identity info can be captured in Project B's audit logs. projects.subscriptions.delete Deletes an existing subscription. pubsub.subscriptions.delete on the requested subscription projects.subscriptions.detach Detaches a subscription from a topic. pubsub.topics.detachSubscription on the topic that the subscription is attached to. projects.subscriptions.get Gets the configuration details of a subscription. pubsub.subscriptions.get on the requested subscription projects.subscriptions.getIamPolicy Gets the IAM access control policy for a subscription. pubsub.subscriptions.getIamPolicy on the requested subscription projects.subscriptions.list Lists matching subscriptions. pubsub.subscriptions.list on the requested Cloud project projects.subscriptions.modifyAckDeadline Modifies the ack deadline for a specific message. pubsub.subscriptions.consume on the requested subscription projects.subscriptions.modifyPushConfig Modifies the pushConfig for a specified subscription. pubsub.subscriptions.update on the requested subscription projects.subscriptions.patch Updates an existing subscription. pubsub.subscriptions.update on the requested subscription projects.subscriptions.pull Pulls messages from the server. pubsub.subscriptions.consume on the requested subscription projects.subscriptions.seek Seeks an existing subscription to a point in time or a snapshot. pubsub.subscriptions.consume on the requested subscription and pubsub.snapshots.seek on the requested snapshot, if any. projects.subscriptions.setIamPolicy Sets the IAM access control policy for a subscription. pubsub.subscriptions.setIamPolicy on the requested subscription projects.subscriptions.testIamPermissions Returns permissions that a caller has on the specified resource.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_topic](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_topic)
- Source ID: `site-api-reference`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CloudStorage JSON representation { "state" : enum ( State ) , "bucket" : string , "minimumObjectCreateTime" : string , "matchGlob" : string , // Union field input format can be only one of the following: "textFormat" : { object ( TextFormat ) } , "avroFormat" : { object ( AvroFormat ) } , "pubsubAvroFormat" : { object ( PubSubAvroFormat ) } // End of list of possible types for union field input format . } Fields state enum ( State ) Output only.
- CloudStorage JSON representation { "state" : enum ( State ) , "bucket" : string , "minimumObjectCreateTime" : string , "matchGlob" : string , // Union field input format can be only one of the following: "textFormat" : { object ( TextFormat ) } , "avroFormat" : { object ( AvroFormat ) } , "pubsubAvroFormat" : { object ( PubSubAvroFormat ) } // End of list of possible types for union field input format . } Fields state enum ( State ) Output only.
- Topic JSON representation { "name" : string , "labels" : { string : string , ... } , "messageStoragePolicy" : { object ( MessageStoragePolicy ) } , "kmsKeyName" : string , "schemaSettings" : { object ( SchemaSettings ) } , "satisfiesPzs" : boolean , "messageRetentionDuration" : string , "state" : enum ( State ) , "ingestionDataSourceSettings" : { object ( IngestionDataSourceSettings ) } , "messageTransforms" : [ { object ( MessageTransform ) } ] , "tags" : { string : string , ... } } Fields name string Required.
- Topic JSON representation { "name" : string , "labels" : { string : string , ... } , "messageStoragePolicy" : { object ( MessageStoragePolicy ) } , "kmsKeyName" : string , "schemaSettings" : { object ( SchemaSettings ) } , "satisfiesPzs" : boolean , "messageRetentionDuration" : string , "state" : enum ( State ) , "ingestionDataSourceSettings" : { object ( IngestionDataSourceSettings ) } , "messageTransforms" : [ { object ( MessageTransform ) } ] , "tags" : { string : string , ... } } Fields name string Required.

