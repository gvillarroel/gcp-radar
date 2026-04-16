---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.316Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Pub/Sub Lite Python client library"
feature_slug: "pub-sub-lite-python-client-library"
latest_feature_date: "2021-07-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library"
  - "https://docs.cloud.google.com/python/docs/reference/pubsub/latest"
  - "https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries"
  - "https://docs.cloud.google.com/python/docs/reference/pubsub/latest/google.cloud.pubsub_v1.publisher.client.Client"
keywords:
  - "pub"
  - "sub"
  - "lite"
  - "python"
  - "client"
  - "library"
  - "the"
  - "reached"
---

# Pub/Sub Lite Python client library

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

The Pub/Sub Lite Python client library reached GA; The Pub/Sub Lite Python client library provides Python access to Pub/Sub Lite.

## Extended Definition

The Pub/Sub Lite Python client library reached GA; The Pub/Sub Lite Python client library provides Python access to Pub/Sub Lite.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library)
- [https://docs.cloud.google.com/python/docs/reference/pubsub/latest](https://docs.cloud.google.com/python/docs/reference/pubsub/latest)
- [https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries](https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries)
- [https://docs.cloud.google.com/python/docs/reference/pubsub/latest/google.cloud.pubsub_v1.publisher.client.Client](https://docs.cloud.google.com/python/docs/reference/pubsub/latest/google.cloud.pubsub_v1.publisher.client.Client)

## Supporting Pages

### "Quickstart: Publish and receive messages in Pub/Sub by using a client library\

- URL: [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library)
- Source ID: `site-docs-root`
- Final score: 317
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Install the client libraries The following samples show you how to install the client libraries: Python For more on setting up your Python development environment, refer to Python Development Environment Setup Guide . ensure that you are using virtualenv # as described in the python dev setup guide pip install --upgrade google-cloud-pubsub C++ For more information about installing the C++ library, see the GitHub README C# Install-Package Google.Cloud.PubSub.V1 -Pre Go go get cloud.google.com/go/pubsub Java If you are using Maven , add the following to your pom.xml file.
- MINUTES ); } } } } Node.js / TODO(developer): Uncomment these variables before running the sample. / // const topicNameOrId = 'YOUR TOPIC NAME OR ID'; // const data = JSON.stringify({foo: 'bar'}); // Imports the Google Cloud client library const { PubSub } = require ( ' @google-cloud/pubsub ' ); // Creates a client; cache this for further use const pubSubClient = new PubSub (); async function publishMessage ( topicNameOrId , data ) { // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject) const dataBuffer = Buffer . from ( data ); // Cache topic objects (publishers) and reuse them. const topic = pubSubClient . topic ( topicNameOrId ); try { const messageId = await topic . publishMessage ({ data : dataBuffer }); console . log ( Message ${ messageId } published. ); } catch ( error ) { console . error ( Received error while publishing: ${ error . message } ); process . exitCode = 1 ; } } Node.js / TODO(developer): Uncomment these variables before running the sample. / // const topicNameOrId = 'YOUR TOPIC NAME OR ID'; // const data = JSON.stringify({foo: 'bar'}); // Imports the Google Cloud client library import { PubSub } from '@google-cloud/pubsub' ; // Creates a client; cache this for further use const pubSubClient = new PubSub (); async function publishMessage ( topicNameOrId : string , data : string ) { // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject) const dataBuffer = Buffer . from ( data ); // Cache topic objects (publishers) and reuse them. const topic = pubSubClient . topic ( topicNameOrId ); try { const messageId = await topic . publishMessage ({ data : dataBuffer }); console . log ( Message ${ messageId } published. ); } catch ( error ) { console . error ( Received error while publishing: ${ ( error as Error ). message } , ); process . exitCode = 1 ; } } PHP use Google\Cloud\PubSub\MessageBuilder; use Google\Cloud\PubSub\PubSubClient; / Publishes a message for a Pub/Sub topic. @param string $projectId The Google project ID. @param string $topicName The Pub/Sub topic name. @param string $message The message to publish. / function publish message($projectId, $topicName, $message) { $pubsub = new PubSubClient([ 'projectId' => $projectId, ]); $topic = $pubsub->topic($topicName); $topic->publish((new MessageBuilder)->setData($message)->build()); print('Message published' .
- Stop receiving messages. subscriber . stopAsync (); } } } Node.js / TODO(developer): Uncomment these variables before running the sample. / // const subscriptionNameOrId = 'YOUR SUBSCRIPTION NAME OR ID'; // const timeout = 60; // Imports the Google Cloud client library const { PubSub } = require ( ' @google-cloud/pubsub ' ); // Creates a client; cache this for further use const pubSubClient = new PubSub (); function listenForMessages ( subscriptionNameOrId , timeout ) { // References an existing subscription; if you are unsure if the // subscription will exist, try the optimisticSubscribe sample. const subscription = pubSubClient . subscription ( subscriptionNameOrId ); // Create an event handler to handle messages let messageCount = 0 ; const messageHandler = message = > { console . log ( Received message ${ message . id } : ); console . log ( \tData: ${ message . data } ); console . log ( \tAttributes: ${ message . attributes } ); messageCount += 1 ; // "Ack" (acknowledge receipt of) the message message . ack (); }; // Listen for new messages until timeout is hit subscripti on . on ( 'message' , messageHandler ); // Wait a while for the subscription to run. (Part of the sample only.) setTimeout (() = > { subscription . removeListener ( 'message' , messageHandler ); console . log ( ${ messageCount } message(s) received. ); }, timeout 1000 ); } PHP use Google\Cloud\PubSub\PubSubClient; / Pulls all Pub/Sub messages for a subscription. @param string $projectId The Google project ID. @param string $subscriptionName The Pub/Sub subscription name. / function pull messages($projectId, $subscriptionName) { $pubsub = new PubSubClient([ 'projectId' => $projectId, ]); $subscription = $pubsub->subscription($subscriptionName); foreach ($subscription->pull() as $message) { printf('Message: %s' .
- For more information about BOMs, see The Google Cloud Platform Libraries BOM . <dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>libraries-bom</artifactId> <version>26.76.0</version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-pubsub</artifactId> </dependency> </dependencies> If you are using Gradle , add the following to your dependencies: implementation platform('com.google.cloud:libraries-bom:26.78.0') implementation 'com.google.cloud:google-cloud-pubsub' If you are using sbt , add the following to your dependencies: libraryDependencies += "com.google.cloud" % "google-cloud-pubsub" % "1.150.0" If you're using Visual Studio Code or IntelliJ, you can add client libraries to your project using the following IDE plugins: Cloud Code for VS Code Cloud Code for IntelliJ The plugins provide additional functionality, such as key management for service accounts.

### "Python Client for Google Cloud Pub / Sub \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/pubsub/latest](https://docs.cloud.google.com/python/docs/reference/pubsub/latest)
- Source ID: `site-python-reference`
- Final score: 299
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, to use JSON Web Tokens, provide a google.auth.jwt.Credentials instance: import json from google.auth import jwt service account info = json.load(open("service-account-info.json")) audience = "https://pubsub.googleapis.com/google.pubsub.v1.Subscriber" credentials = jwt.Credentials.from service account info( service account info, audience=audience ) subscriber = pubsub v1.SubscriberClient(credentials=credentials) The same for the publisher, except that the "audience" claim needs to be adjusted publisher audience = "https://pubsub.googleapis.com/google.pubsub.v1.Publisher" credentials pub = credentials.with claims(audience=publisher audience) publisher = pubsub v1.PublisherClient(credentials=credentials pub) Versioning This library follows Semantic Versioning .
- Supported Python Versions Python >= 3.9 Deprecated Python Versions Python < 3.9 The last version of this library compatible with Python 3.7 and 3.8 is google-cloud-pubsub==2.34.0.
- The last version of this library compatible with Python 2.7 is google-cloud-pubsub==1.7.0.
- Home Documentation Developer tools Python Client libraries Send feedback Python Client for Google Cloud Pub / Sub Stay organized with collections Save and categorize content based on your preferences.

### "Quickstart: Publish and receive messages in Pub/Sub by using a client library\

- URL: [https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries](https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries)
- Source ID: `site-docs-reference`
- Final score: 297
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Install the client libraries The following samples show you how to install the client libraries: Python For more on setting up your Python development environment, refer to Python Development Environment Setup Guide . ensure that you are using virtualenv # as described in the python dev setup guide pip install --upgrade google-cloud-pubsub C++ For more information about installing the C++ library, see the GitHub README C# Install-Package Google.Cloud.PubSub.V1 -Pre Go go get cloud.google.com/go/pubsub Java If you are using Maven , add the following to your pom.xml file.
- MINUTES ); } } } } Node.js / TODO(developer): Uncomment these variables before running the sample. / // const topicNameOrId = 'YOUR TOPIC NAME OR ID'; // const data = JSON.stringify({foo: 'bar'}); // Imports the Google Cloud client library const { PubSub } = require ( ' @google-cloud/pubsub ' ); // Creates a client; cache this for further use const pubSubClient = new PubSub (); async function publishMessage ( topicNameOrId , data ) { // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject) const dataBuffer = Buffer . from ( data ); // Cache topic objects (publishers) and reuse them. const topic = pubSubClient . topic ( topicNameOrId ); try { const messageId = await topic . publishMessage ({ data : dataBuffer }); console . log ( Message ${ messageId } published. ); } catch ( error ) { console . error ( Received error while publishing: ${ error . message } ); process . exitCode = 1 ; } } Node.js / TODO(developer): Uncomment these variables before running the sample. / // const topicNameOrId = 'YOUR TOPIC NAME OR ID'; // const data = JSON.stringify({foo: 'bar'}); // Imports the Google Cloud client library import { PubSub } from '@google-cloud/pubsub' ; // Creates a client; cache this for further use const pubSubClient = new PubSub (); async function publishMessage ( topicNameOrId : string , data : string ) { // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject) const dataBuffer = Buffer . from ( data ); // Cache topic objects (publishers) and reuse them. const topic = pubSubClient . topic ( topicNameOrId ); try { const messageId = await topic . publishMessage ({ data : dataBuffer }); console . log ( Message ${ messageId } published. ); } catch ( error ) { console . error ( Received error while publishing: ${ ( error as Error ). message } , ); process . exitCode = 1 ; } } PHP use Google\Cloud\PubSub\MessageBuilder; use Google\Cloud\PubSub\PubSubClient; / Publishes a message for a Pub/Sub topic. @param string $projectId The Google project ID. @param string $topicName The Pub/Sub topic name. @param string $message The message to publish. / function publish message($projectId, $topicName, $message) { $pubsub = new PubSubClient([ 'projectId' => $projectId, ]); $topic = $pubsub->topic($topicName); $topic->publish((new MessageBuilder)->setData($message)->build()); print('Message published' .
- Stop receiving messages. subscriber . stopAsync (); } } } Node.js / TODO(developer): Uncomment these variables before running the sample. / // const subscriptionNameOrId = 'YOUR SUBSCRIPTION NAME OR ID'; // const timeout = 60; // Imports the Google Cloud client library const { PubSub } = require ( ' @google-cloud/pubsub ' ); // Creates a client; cache this for further use const pubSubClient = new PubSub (); function listenForMessages ( subscriptionNameOrId , timeout ) { // References an existing subscription; if you are unsure if the // subscription will exist, try the optimisticSubscribe sample. const subscription = pubSubClient . subscription ( subscriptionNameOrId ); // Create an event handler to handle messages let messageCount = 0 ; const messageHandler = message = > { console . log ( Received message ${ message . id } : ); console . log ( \tData: ${ message . data } ); console . log ( \tAttributes: ${ message . attributes } ); messageCount += 1 ; // "Ack" (acknowledge receipt of) the message message . ack (); }; // Listen for new messages until timeout is hit subscripti on . on ( 'message' , messageHandler ); // Wait a while for the subscription to run. (Part of the sample only.) setTimeout (() = > { subscription . removeListener ( 'message' , messageHandler ); console . log ( ${ messageCount } message(s) received. ); }, timeout 1000 ); } PHP use Google\Cloud\PubSub\PubSubClient; / Pulls all Pub/Sub messages for a subscription. @param string $projectId The Google project ID. @param string $subscriptionName The Pub/Sub subscription name. / function pull messages($projectId, $subscriptionName) { $pubsub = new PubSubClient([ 'projectId' => $projectId, ]); $subscription = $pubsub->subscription($subscriptionName); foreach ($subscription->pull() as $message) { printf('Message: %s' .
- For more information about BOMs, see The Google Cloud Platform Libraries BOM . <dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>libraries-bom</artifactId> <version>26.76.0</version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-pubsub</artifactId> </dependency> </dependencies> If you are using Gradle , add the following to your dependencies: implementation platform('com.google.cloud:libraries-bom:26.78.0') implementation 'com.google.cloud:google-cloud-pubsub' If you are using sbt , add the following to your dependencies: libraryDependencies += "com.google.cloud" % "google-cloud-pubsub" % "1.150.0" If you're using Visual Studio Code or IntelliJ, you can add client libraries to your project using the following IDE plugins: Cloud Code for VS Code Cloud Code for IntelliJ The plugins provide additional functionality, such as key management for service accounts.

### Class Client (2.35.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/pubsub/latest/google.cloud.pubsub_v1.publisher.client.Client](https://docs.cloud.google.com/python/docs/reference/pubsub/latest/google.cloud.pubsub_v1.publisher.client.Client)
- Source ID: `site-python-reference`
- Final score: 291
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google import pubsub v1 def sample list topic subscriptions(): Create a client client = pubsub v1.PublisherClient() Initialize request argument(s) request = pubsub v1.ListTopicSubscriptionsRequest( topic="topic value", ) Make the request page result = client.list topic subscriptions(request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[google.pubsub v1.types.ListTopicSubscriptionsRequest, dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google import pubsub v1 def sample list topic snapshots(): Create a client client = pubsub v1.PublisherClient() Initialize request argument(s) request = pubsub v1.ListTopicSnapshotsRequest( topic="topic value", ) Make the request page result = client.list topic snapshots(request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[google.pubsub v1.types.ListTopicSnapshotsRequest, dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google import pubsub v1 def sample update topic(): Create a client client = pubsub v1.PublisherClient() Initialize request argument(s) topic = pubsub v1.Topic() topic.name = "name value" request = pubsub v1.UpdateTopicRequest( topic=topic, ) Make the request response = client.update topic(request=request) Handle the response print(response) Parameters Name Description request Union[google.pubsub v1.types.UpdateTopicRequest, dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google import pubsub v1 def sample detach subscription(): Create a client client = pubsub v1.PublisherClient() Initialize request argument(s) request = pubsub v1.DetachSubscriptionRequest( subscription="subscription value", ) Make the request response = client.detach subscription(request=request) Handle the response print(response) Parameters Name Description request Union[google.pubsub v1.types.DetachSubscriptionRequest, dict] The request object.

