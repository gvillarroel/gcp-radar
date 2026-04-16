---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.320Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Pub/Sub Lite Java client library"
feature_slug: "pub-sub-lite-java-client-library"
latest_feature_date: "2020-05-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.SchemaServiceClient"
  - "https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/overview"
keywords:
  - "pub"
  - "sub"
  - "lite"
  - "java"
  - "client"
  - "library"
  - "the"
  - "provides"
---

# Pub/Sub Lite Java client library

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

The Pub/Sub Lite Java client library provides Java access to Pub/Sub Lite.

## Extended Definition

The Pub/Sub Lite Java client library provides Java access to Pub/Sub Lite.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.SchemaServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.SchemaServiceClient)
- [https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries](https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/overview)

## Supporting Pages

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

### "Class SchemaServiceClient (1.149.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.SchemaServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.SchemaServiceClient)
- Source ID: `site-java-reference`
- Final score: 291
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) { ListSchemasRequest request = ListSchemasRequest . newBuilder () . setParent ( ProjectName . of ( "[PROJECT]" ). toString ()) . setView ( SchemaView . forNumber ( 0 )) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); ApiFuture<Schema> future = schemaServiceClient . listSchemasPagedCallable (). futureCall ( request ); // Do something. for ( Schema element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListSchemasRequest , ListSchemasPagedResponse > rollbackSchema(RollbackSchemaRequest request) public final Schema rollbackSchema ( RollbackSchemaRequest request ) Creates a new schema revision that is a copy of the provided revision id.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) { ListSchemaRevisionsRequest request = ListSchemaRevisionsRequest . newBuilder () . setName ( SchemaName . of ( "[PROJECT]" , "[SCHEMA]" ). toString ()) . setView ( SchemaView . forNumber ( 0 )) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); ApiFuture<Schema> future = schemaServiceClient . listSchemaRevisionsPagedCallable (). futureCall ( request ); // Do something. for ( Schema element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListSchemaRevisionsRequest , ListSchemaRevisionsPagedResponse > listSchemas(ListSchemasRequest request) public final SchemaServiceClient .
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) { DeleteSchemaRequest request = DeleteSchemaRequest . newBuilder () . setName ( SchemaName . of ( "[PROJECT]" , "[SCHEMA]" ). toString ()) . build (); ApiFuture<Empty> future = schemaServiceClient . deleteSchemaCallable (). futureCall ( request ); // Do something. future . get (); } Returns Type Description UnaryCallable < DeleteSchemaRequest , Empty > deleteSchemaRevision(DeleteSchemaRevisionRequest request) public final Schema deleteSchemaRevision ( DeleteSchemaRevisionRequest request ) Deletes a specific schema revision.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) { DeleteSchemaRequest request = DeleteSchemaRequest . newBuilder () . setName ( SchemaName . of ( "[PROJECT]" , "[SCHEMA]" ). toString ()) . build (); schemaServiceClient . deleteSchema ( request ); } Parameter Name Description request DeleteSchemaRequest The request object containing all of the parameters for the API call. deleteSchema(SchemaName name) public final void deleteSchema ( SchemaName name ) Deletes a schema.

### "Quickstart: Publish and receive messages in Pub/Sub by using a client library\

- URL: [https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries](https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries)
- Source ID: `site-docs-reference`
- Final score: 285
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Install the client libraries The following samples show you how to install the client libraries: Python For more on setting up your Python development environment, refer to Python Development Environment Setup Guide . ensure that you are using virtualenv # as described in the python dev setup guide pip install --upgrade google-cloud-pubsub C++ For more information about installing the C++ library, see the GitHub README C# Install-Package Google.Cloud.PubSub.V1 -Pre Go go get cloud.google.com/go/pubsub Java If you are using Maven , add the following to your pom.xml file.
- MINUTES ); } } } } Node.js / TODO(developer): Uncomment these variables before running the sample. / // const topicNameOrId = 'YOUR TOPIC NAME OR ID'; // const data = JSON.stringify({foo: 'bar'}); // Imports the Google Cloud client library const { PubSub } = require ( ' @google-cloud/pubsub ' ); // Creates a client; cache this for further use const pubSubClient = new PubSub (); async function publishMessage ( topicNameOrId , data ) { // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject) const dataBuffer = Buffer . from ( data ); // Cache topic objects (publishers) and reuse them. const topic = pubSubClient . topic ( topicNameOrId ); try { const messageId = await topic . publishMessage ({ data : dataBuffer }); console . log ( Message ${ messageId } published. ); } catch ( error ) { console . error ( Received error while publishing: ${ error . message } ); process . exitCode = 1 ; } } Node.js / TODO(developer): Uncomment these variables before running the sample. / // const topicNameOrId = 'YOUR TOPIC NAME OR ID'; // const data = JSON.stringify({foo: 'bar'}); // Imports the Google Cloud client library import { PubSub } from '@google-cloud/pubsub' ; // Creates a client; cache this for further use const pubSubClient = new PubSub (); async function publishMessage ( topicNameOrId : string , data : string ) { // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject) const dataBuffer = Buffer . from ( data ); // Cache topic objects (publishers) and reuse them. const topic = pubSubClient . topic ( topicNameOrId ); try { const messageId = await topic . publishMessage ({ data : dataBuffer }); console . log ( Message ${ messageId } published. ); } catch ( error ) { console . error ( Received error while publishing: ${ ( error as Error ). message } , ); process . exitCode = 1 ; } } PHP use Google\Cloud\PubSub\MessageBuilder; use Google\Cloud\PubSub\PubSubClient; / Publishes a message for a Pub/Sub topic. @param string $projectId The Google project ID. @param string $topicName The Pub/Sub topic name. @param string $message The message to publish. / function publish message($projectId, $topicName, $message) { $pubsub = new PubSubClient([ 'projectId' => $projectId, ]); $topic = $pubsub->topic($topicName); $topic->publish((new MessageBuilder)->setData($message)->build()); print('Message published' .
- Stop receiving messages. subscriber . stopAsync (); } } } Node.js / TODO(developer): Uncomment these variables before running the sample. / // const subscriptionNameOrId = 'YOUR SUBSCRIPTION NAME OR ID'; // const timeout = 60; // Imports the Google Cloud client library const { PubSub } = require ( ' @google-cloud/pubsub ' ); // Creates a client; cache this for further use const pubSubClient = new PubSub (); function listenForMessages ( subscriptionNameOrId , timeout ) { // References an existing subscription; if you are unsure if the // subscription will exist, try the optimisticSubscribe sample. const subscription = pubSubClient . subscription ( subscriptionNameOrId ); // Create an event handler to handle messages let messageCount = 0 ; const messageHandler = message = > { console . log ( Received message ${ message . id } : ); console . log ( \tData: ${ message . data } ); console . log ( \tAttributes: ${ message . attributes } ); messageCount += 1 ; // "Ack" (acknowledge receipt of) the message message . ack (); }; // Listen for new messages until timeout is hit subscripti on . on ( 'message' , messageHandler ); // Wait a while for the subscription to run. (Part of the sample only.) setTimeout (() = > { subscription . removeListener ( 'message' , messageHandler ); console . log ( ${ messageCount } message(s) received. ); }, timeout 1000 ); } PHP use Google\Cloud\PubSub\PubSubClient; / Pulls all Pub/Sub messages for a subscription. @param string $projectId The Google project ID. @param string $subscriptionName The Pub/Sub subscription name. / function pull messages($projectId, $subscriptionName) { $pubsub = new PubSubClient([ 'projectId' => $projectId, ]); $subscription = $pubsub->subscription($subscriptionName); foreach ($subscription->pull() as $message) { printf('Message: %s' .
- For more information about BOMs, see The Google Cloud Platform Libraries BOM . <dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>libraries-bom</artifactId> <version>26.76.0</version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-pubsub</artifactId> </dependency> </dependencies> If you are using Gradle , add the following to your dependencies: implementation platform('com.google.cloud:libraries-bom:26.78.0') implementation 'com.google.cloud:google-cloud-pubsub' If you are using sbt , add the following to your dependencies: libraryDependencies += "com.google.cloud" % "google-cloud-pubsub" % "1.150.0" If you're using Visual Studio Code or IntelliJ, you can add client libraries to your project using the following IDE plugins: Cloud Code for VS Code Cloud Code for IntelliJ The plugins provide additional functionality, such as key management for service accounts.

### "google-cloud-pubsub overview (1.149.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/overview)
- Source ID: `site-java-reference`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Pub/Sub Product Reference GitHub Repository Maven artifact Getting Started In order to use this library, you first need to go through the following steps: Install a JDK (Java Development Kit) Select or create a Cloud Platform project Enable billing for your project Enable the API Set up authentication Use the Cloud Pub/Sub for Java To ensure that your project uses compatible versions of the libraries and their component artifacts, import com.google.cloud:libraries-bom and use the BOM to specify dependency versions.
- Home Documentation Developer tools Java Client libraries Send feedback google-cloud-pubsub overview (1.149.0) Stay organized with collections Save and categorize content based on your preferences.
- To use the latest version of this library, add this to your dependencies: libraryDependencies += "com.google.cloud" % "google-cloud-pubsub" % "1.149.0" Which version ID should I get started with?
- Managing Library Versions We recommend using the com.google.cloud:libraries-bom installation method detailed above to streamline dependency management across multiple Cloud Java client libraries.

