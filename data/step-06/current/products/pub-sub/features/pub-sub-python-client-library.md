---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.322Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Pub/Sub Python client library"
feature_slug: "pub-sub-python-client-library"
latest_feature_date: "2019-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/access-control"
  - "https://docs.cloud.google.com/python/docs/reference/pubsub/latest/google.cloud.pubsub_v1.publisher.client.Client"
  - "https://docs.cloud.google.com/python/docs/reference/pubsub/latest/google.cloud.pubsub_v1.subscriber.client.Client"
  - "https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library"
keywords:
  - "pub"
  - "sub"
  - "python"
  - "client"
  - "library"
  - "the"
  - "provides"
  - "access"
---

# Pub/Sub Python client library

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

The Python client library provides Pub/Sub access from Python applications.

## Extended Definition

The Python client library provides Pub/Sub access from Python applications.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/access-control](https://docs.cloud.google.com/pubsub/docs/access-control)
- [https://docs.cloud.google.com/python/docs/reference/pubsub/latest/google.cloud.pubsub_v1.publisher.client.Client](https://docs.cloud.google.com/python/docs/reference/pubsub/latest/google.cloud.pubsub_v1.publisher.client.Client)
- [https://docs.cloud.google.com/python/docs/reference/pubsub/latest/google.cloud.pubsub_v1.subscriber.client.Client](https://docs.cloud.google.com/python/docs/reference/pubsub/latest/google.cloud.pubsub_v1.subscriber.client.Client)
- [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library)

## Supporting Pages

### "Access control with Identity and Access Management \_|\_ Pub/Sub \_|\_ Google\

- URL: [https://docs.cloud.google.com/pubsub/docs/access-control](https://docs.cloud.google.com/pubsub/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 315
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see the Pub/Sub Node.js API reference documentation . / TODO(developer): Uncomment this variable before running the sample. / // const subscriptionNameOrId = 'YOUR SUBSCRIPTION NAME OR ID'; // Imports the Google Cloud client library const { PubSub } = require ( ' @google-cloud/pubsub ' ); // Creates a client; cache this for further use const pubSubClient = new PubSub (); async function setSubscriptionPolicy ( subscriptionNameOrId ) { // The new IAM policy const newPolicy = { bindings : [ { // Add a group as editors role : 'roles/pubsub.editor' , members : [ 'group:cloud-logs@google.com' ], }, { // Add all users as viewers role : 'roles/pubsub.viewer' , members : [ 'allUsers' ], }, ], }; // Updates the IAM policy for the subscription const [ updatedPolicy ] = await pubSubClient . subscription ( subscriptionNameOrId ) . iam . setPolicy ( newPolicy ); console . log ( 'Updated policy for subscription: %j' , updatedPolicy . bindings ); } PHP use Google\Cloud\PubSub\PubSubClient; / Adds a user to the policy for a Pub/Sub subscription. @param string $projectId The Google project ID. @param string $subscriptionName The Pub/Sub subscription name. @param string $userEmail The user email to add to the policy. / function set subscription policy($projectId, $subscriptionName, $userEmail) { $pubsub = new PubSubClient([ 'projectId' => $projectId, ]); $subscription = $pubsub->subscription($subscriptionName); $policy = $subscription->iam()->policy(); $policy['bindings'][] = [ 'role' => 'roles/pubsub.subscriber', 'members' => ['user:' . $userEmail] ]; $subscription->iam()->setPolicy($policy); printf( 'User %s added to policy for %s' .
- For more information, see the Pub/Sub Node.js API reference documentation . / TODO(developer): Uncomment this variable before running the sample. / // const topicNameOrId = 'YOUR TOPIC NAME OR ID'; // Imports the Google Cloud client library const { PubSub } = require ( ' @google-cloud/pubsub ' ); // Creates a client; cache this for further use const pubSubClient = new PubSub (); async function setTopicPolicy ( topicNameOrId ) { // The new IAM policy const newPolicy = { bindings : [ { // Add a group as editors role : 'roles/pubsub.editor' , members : [ 'group:cloud-logs@google.com' ], }, { // Add all users as viewers role : 'roles/pubsub.viewer' , members : [ 'allUsers' ], }, ], }; // Updates the IAM policy for the topic const [ updatedPolicy ] = await pubSubClient . topic ( topicNameOrId ) . iam . setPolicy ( newPolicy ); console . log ( 'Updated policy for topic: %j' , updatedPolicy . bindings ); } PHP use Google\Cloud\PubSub\PubSubClient; / Adds a user to the policy for a Pub/Sub topic. @param string $projectId The Google project ID. @param string $topicName The Pub/Sub topic name. @param string $userEmail The user email to add to the policy. / function set topic policy($projectId, $topicName, $userEmail) { $pubsub = new PubSubClient([ 'projectId' => $projectId, ]); $topic = $pubsub->topic($topicName); $policy = $topic->iam()->policy(); $policy['bindings'][] = [ 'role' => 'roles/pubsub.publisher', 'members' => ['user:' . $userEmail] ]; $topic->iam()->setPolicy($policy); printf( 'User %s added to policy for %s' .
- For more information, see the Pub/Sub Node.js API reference documentation . / TODO(developer): Uncomment this variable before running the sample. / // const subscriptionNameOrId = 'YOUR SUBSCRIPTION NAME OR ID'; // Imports the Google Cloud client library const { PubSub } = require ( ' @google-cloud/pubsub ' ); // Creates a client; cache this for further use const pubSubClient = new PubSub (); async function testSubscriptionPermissions ( subscriptionNameOrId ) { const permissionsToTest = [ 'pubsub.subscriptions.consume' , 'pubsub.subscriptions.update' , ]; // Tests the IAM policy for the specified subscription const [ permissions ] = await pubSubClient . subscription ( subscriptionNameOrId ) . iam . testPermissions ( permissionsToTest ); console . log ( 'Tested permissions for subscription: %j' , permissions ); } PHP Before trying this sample, follow the PHP setup instructions in Quickstart: Using Client Libraries .
- For more information, see the Pub/Sub Node.js API reference documentation . / TODO(developer): Uncomment this variable before running the sample. / // const topicNameOrId = 'YOUR TOPIC NAME OR ID'; // Imports the Google Cloud client library const { PubSub } = require ( ' @google-cloud/pubsub ' ); // Creates a client; cache this for further use const pubSubClient = new PubSub (); async function testTopicPermissions ( topicNameOrId ) { const permissionsToTest = [ 'pubsub.topics.attachSubscription' , 'pubsub.topics.publish' , 'pubsub.topics.update' , ]; // Tests the IAM policy for the specified topic const [ permissions ] = await pubSubClient . topic ( topicNameOrId ) . iam . testPermissions ( permissionsToTest ); console . log ( 'Tested permissions for topic: %j' , permissions ); } PHP Before trying this sample, follow the PHP setup instructions in Quickstart: Using Client Libraries .

### Class Client (2.35.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/pubsub/latest/google.cloud.pubsub_v1.publisher.client.Client](https://docs.cloud.google.com/python/docs/reference/pubsub/latest/google.cloud.pubsub_v1.publisher.client.Client)
- Source ID: `site-python-reference`
- Final score: 315
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google import pubsub v1 def sample list topic subscriptions(): Create a client client = pubsub v1.PublisherClient() Initialize request argument(s) request = pubsub v1.ListTopicSubscriptionsRequest( topic="topic value", ) Make the request page result = client.list topic subscriptions(request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[google.pubsub v1.types.ListTopicSubscriptionsRequest, dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google import pubsub v1 def sample list topic snapshots(): Create a client client = pubsub v1.PublisherClient() Initialize request argument(s) request = pubsub v1.ListTopicSnapshotsRequest( topic="topic value", ) Make the request page result = client.list topic snapshots(request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[google.pubsub v1.types.ListTopicSnapshotsRequest, dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google import pubsub v1 def sample update topic(): Create a client client = pubsub v1.PublisherClient() Initialize request argument(s) topic = pubsub v1.Topic() topic.name = "name value" request = pubsub v1.UpdateTopicRequest( topic=topic, ) Make the request response = client.update topic(request=request) Handle the response print(response) Parameters Name Description request Union[google.pubsub v1.types.UpdateTopicRequest, dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google import pubsub v1 def sample detach subscription(): Create a client client = pubsub v1.PublisherClient() Initialize request argument(s) request = pubsub v1.DetachSubscriptionRequest( subscription="subscription value", ) Make the request response = client.detach subscription(request=request) Handle the response print(response) Parameters Name Description request Union[google.pubsub v1.types.DetachSubscriptionRequest, dict] The request object.

### Class Client (2.35.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/pubsub/latest/google.cloud.pubsub_v1.subscriber.client.Client](https://docs.cloud.google.com/python/docs/reference/pubsub/latest/google.cloud.pubsub_v1.subscriber.client.Client)
- Source ID: `site-python-reference`
- Final score: 311
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google import pubsub v1 def sample streaming pull(): Create a client client = pubsub v1.SubscriberClient() Initialize request argument(s) request = pubsub v1.StreamingPullRequest( subscription="subscription value", stream ack deadline seconds=2813, ) This method expects an iterator which contains 'pubsub v1.StreamingPullRequest' objects Here we create a generator that yields a single request for demonstrative purposes. requests = [request] def request generator(): for request in requests: yield request Make the request stream = client.streaming pull(requests=request generator()) Handle the response for response in stream: print(response) Parameters Name Description requests Iterator[google.pubsub v1.types.StreamingPullRequest] The request object iterator.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google import pubsub v1 def sample update subscription(): Create a client client = pubsub v1.SubscriberClient() Initialize request argument(s) subscription = pubsub v1.Subscription() subscription.name = "name value" subscription.topic = "topic value" request = pubsub v1.UpdateSubscriptionRequest( subscription=subscription, ) Make the request response = client.update subscription(request=request) Handle the response print(response) Parameters Name Description request Union[google.pubsub v1.types.UpdateSubscriptionRequest, dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google import pubsub v1 def sample modify ack deadline(): Create a client client = pubsub v1.SubscriberClient() Initialize request argument(s) request = pubsub v1.ModifyAckDeadlineRequest( subscription="subscription value", ack ids=['ack ids value1', 'ack ids value2'], ack deadline seconds=2066, ) Make the request client.modify ack deadline(request=request) Parameters Name Description request Union[google.pubsub v1.types.ModifyAckDeadlineRequest, dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google import pubsub v1 def sample list subscriptions(): Create a client client = pubsub v1.SubscriberClient() Initialize request argument(s) request = pubsub v1.ListSubscriptionsRequest( project="project value", ) Make the request page result = client.list subscriptions(request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[google.pubsub v1.types.ListSubscriptionsRequest, dict] The request object.

### "Quickstart: Publish and receive messages in Pub/Sub by using a client library\

- URL: [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library)
- Source ID: `site-docs-root`
- Final score: 305
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Install the client libraries The following samples show you how to install the client libraries: Python For more on setting up your Python development environment, refer to Python Development Environment Setup Guide . ensure that you are using virtualenv # as described in the python dev setup guide pip install --upgrade google-cloud-pubsub C++ For more information about installing the C++ library, see the GitHub README C# Install-Package Google.Cloud.PubSub.V1 -Pre Go go get cloud.google.com/go/pubsub Java If you are using Maven , add the following to your pom.xml file.
- MINUTES ); } } } } Node.js / TODO(developer): Uncomment these variables before running the sample. / // const topicNameOrId = 'YOUR TOPIC NAME OR ID'; // const data = JSON.stringify({foo: 'bar'}); // Imports the Google Cloud client library const { PubSub } = require ( ' @google-cloud/pubsub ' ); // Creates a client; cache this for further use const pubSubClient = new PubSub (); async function publishMessage ( topicNameOrId , data ) { // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject) const dataBuffer = Buffer . from ( data ); // Cache topic objects (publishers) and reuse them. const topic = pubSubClient . topic ( topicNameOrId ); try { const messageId = await topic . publishMessage ({ data : dataBuffer }); console . log ( Message ${ messageId } published. ); } catch ( error ) { console . error ( Received error while publishing: ${ error . message } ); process . exitCode = 1 ; } } Node.js / TODO(developer): Uncomment these variables before running the sample. / // const topicNameOrId = 'YOUR TOPIC NAME OR ID'; // const data = JSON.stringify({foo: 'bar'}); // Imports the Google Cloud client library import { PubSub } from '@google-cloud/pubsub' ; // Creates a client; cache this for further use const pubSubClient = new PubSub (); async function publishMessage ( topicNameOrId : string , data : string ) { // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject) const dataBuffer = Buffer . from ( data ); // Cache topic objects (publishers) and reuse them. const topic = pubSubClient . topic ( topicNameOrId ); try { const messageId = await topic . publishMessage ({ data : dataBuffer }); console . log ( Message ${ messageId } published. ); } catch ( error ) { console . error ( Received error while publishing: ${ ( error as Error ). message } , ); process . exitCode = 1 ; } } PHP use Google\Cloud\PubSub\MessageBuilder; use Google\Cloud\PubSub\PubSubClient; / Publishes a message for a Pub/Sub topic. @param string $projectId The Google project ID. @param string $topicName The Pub/Sub topic name. @param string $message The message to publish. / function publish message($projectId, $topicName, $message) { $pubsub = new PubSubClient([ 'projectId' => $projectId, ]); $topic = $pubsub->topic($topicName); $topic->publish((new MessageBuilder)->setData($message)->build()); print('Message published' .
- Stop receiving messages. subscriber . stopAsync (); } } } Node.js / TODO(developer): Uncomment these variables before running the sample. / // const subscriptionNameOrId = 'YOUR SUBSCRIPTION NAME OR ID'; // const timeout = 60; // Imports the Google Cloud client library const { PubSub } = require ( ' @google-cloud/pubsub ' ); // Creates a client; cache this for further use const pubSubClient = new PubSub (); function listenForMessages ( subscriptionNameOrId , timeout ) { // References an existing subscription; if you are unsure if the // subscription will exist, try the optimisticSubscribe sample. const subscription = pubSubClient . subscription ( subscriptionNameOrId ); // Create an event handler to handle messages let messageCount = 0 ; const messageHandler = message = > { console . log ( Received message ${ message . id } : ); console . log ( \tData: ${ message . data } ); console . log ( \tAttributes: ${ message . attributes } ); messageCount += 1 ; // "Ack" (acknowledge receipt of) the message message . ack (); }; // Listen for new messages until timeout is hit subscripti on . on ( 'message' , messageHandler ); // Wait a while for the subscription to run. (Part of the sample only.) setTimeout (() = > { subscription . removeListener ( 'message' , messageHandler ); console . log ( ${ messageCount } message(s) received. ); }, timeout 1000 ); } PHP use Google\Cloud\PubSub\PubSubClient; / Pulls all Pub/Sub messages for a subscription. @param string $projectId The Google project ID. @param string $subscriptionName The Pub/Sub subscription name. / function pull messages($projectId, $subscriptionName) { $pubsub = new PubSubClient([ 'projectId' => $projectId, ]); $subscription = $pubsub->subscription($subscriptionName); foreach ($subscription->pull() as $message) { printf('Message: %s' .
- For more information about BOMs, see The Google Cloud Platform Libraries BOM . <dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>libraries-bom</artifactId> <version>26.76.0</version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-pubsub</artifactId> </dependency> </dependencies> If you are using Gradle , add the following to your dependencies: implementation platform('com.google.cloud:libraries-bom:26.78.0') implementation 'com.google.cloud:google-cloud-pubsub' If you are using sbt , add the following to your dependencies: libraryDependencies += "com.google.cloud" % "google-cloud-pubsub" % "1.150.0" If you're using Visual Studio Code or IntelliJ, you can add client libraries to your project using the following IDE plugins: Cloud Code for VS Code Cloud Code for IntelliJ The plugins provide additional functionality, such as key management for service accounts.

