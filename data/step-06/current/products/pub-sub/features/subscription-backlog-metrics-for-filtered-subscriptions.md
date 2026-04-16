---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.307Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Subscription backlog metrics for filtered subscriptions"
feature_slug: "subscription-backlog-metrics-for-filtered-subscriptions"
latest_feature_date: "2024-02-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/monitoring"
  - "https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription"
  - "https://docs.cloud.google.com/pubsub/docs/authenticate-push-subscriptions"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions"
keywords:
  - "subscription"
  - "backlog"
  - "metrics"
  - "for"
  - "filtered"
  - "subscriptions"
  - "when"
  - "filtering"
---

# Subscription backlog metrics for filtered subscriptions

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

When filtering is enabled, backlog metrics include only messages that match the filter.

## Extended Definition

When filtering is enabled, backlog metrics include only messages that match the filter.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/monitoring](https://docs.cloud.google.com/pubsub/docs/monitoring)
- [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription)
- [https://docs.cloud.google.com/pubsub/docs/authenticate-push-subscriptions](https://docs.cloud.google.com/pubsub/docs/authenticate-push-subscriptions)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions)

## Supporting Pages

### Monitor Pub/Sub in Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/monitoring](https://docs.cloud.google.com/pubsub/docs/monitoring)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- The dashboard can show the following backlog metrics, aggregated by resource, for all your subscriptions: Unacknowledged messages ( subscription/num unacked messages by region ) to see the number of unacknowledged messages.
- Monitor subscriptions with SMTs If your subscription contains an SMT that filters out messages, the backlog metrics include the filtered-out messages until the SMT actually runs on them.
- Replace the placeholder values for $PROJECT NAME and $SUBSCRIPTION NAME with your actual project and topic identifiers. sum( increase({ " name "="pubsub.googleapis.com/subscription/sent message count", "monitored resource"="pubsub subscription", "project id"="$PROJECT NAME", "subscription id"="$SUBSCRIPTION NAME" }[10m]) ) Monitor push subscriptions For push subscriptions, monitor these metrics: subscription/push request count Group the metric by response code and subscription id .
- Because push subscriptions exponentially back off when they encounter timeouts or errors, your backlog can grow quickly based on how your endpoint responds.

### Create BigQuery subscriptions \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription)
- Source ID: `site-docs-root-2`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the Pub/Sub Ruby API reference documentation . project id = "your-project-id" topic id = "your-topic-id" subscription id = "your-subscription-id" bigquery table id = "my-project:dataset-id.table-id" pubsub = Google :: Cloud :: PubSub . new project id : project id subscription admin = pubsub . subscription admin subscription = subscription admin . create subscription \ name : pubsub . subscription path ( subscription id ), topic : pubsub . topic path ( topic id ), bigquery config : { table : bigquery table id , write metadata : true } puts "BigQuery subscription created: #{ subscription id } ." puts "Table for subscription is: #{ bigquery table id } " Monitor a BigQuery subscription Cloud Monitoring provides a number of metrics to monitor subscriptions .
- BigQueryConfig ( table = bigquery table id , write metadata = True ) Wrap the subscriber in a 'with' block to automatically call close() to close the underlying gRPC channel when done. with subscriber : subscription = subscriber . create subscription ( request = { "name" : subscription path , "topic" : topic path , "bigquery config" : bigquery config , } ) print ( f "BigQuery subscription created: { subscription } ." ) print ( f "Table for subscription is: { bigquery table id } " ) Ruby The following sample uses Ruby Pub/Sub client library v3.
- For more information, see the Pub/Sub C# API reference documentation . using Google.Cloud.PubSub.V1 ; public class CreateBigQuerySubscriptionSample { public Subscription CreateBigQuerySubscription ( string projectId , string topicId , string subscriptionId , string bigqueryTableId ) { SubscriberServiceApiClient subscriber = SubscriberServiceApiClient .
- Cross-project subscriptions If you create a subscription in one project for a topic in another project, you must have pubsub.subscriptions.create permission on the project in which you are creating the subscription, and pubsub.topics.attachSubscription permission on the topic.

### Authentication for push subscriptions \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/authenticate-push-subscriptions](https://docs.cloud.google.com/pubsub/docs/authenticate-push-subscriptions)
- Source ID: `site-docs-root-2`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- SC BAD REQUEST ); } } private Message getMessage ( HttpServletRequest request ) throws IOException { String requestBody = request . getReader (). lines (). collect ( Collectors . joining ( "\n" )); JsonElement jsonRoot = JsonParser . parseString ( requestBody ). getAsJsonObject (); String messageStr = jsonRoot . getAsJsonObject (). get ( "message" ). toString (); Message message = gson . fromJson ( messageStr , Message . class ); // decode from base64 String decoded = decode ( message . getData ()); message . setData ( decoded ); return message ; } private String decode ( String data ) { return new String ( Base64 . getDecoder (). decode ( data )); } PubSubAuthenticatedPush ( MessageRepository messageRepository ) { this . messageRepository = messageRepository ; } public PubSubAuthenticatedPush () { this ( MessageRepositoryImpl . getInstance ()); } } Node.js app . post ( '/pubsub/authenticated-push' , jsonBodyParser , async ( req , res ) = > { // Verify that the request originates from the application. if ( req . query . token !== PUBSUB VERIFICATION TOKEN ) { res . status ( 400 ). send ( 'Invalid request' ); return ; } // Verify that the push request originates from Cloud Pub/Sub. try { // Get the Cloud Pub/Sub-generated JWT in the "Authorization" header. const bearer = req . header ( 'Authorization' ); const [, token ] = bearer . match ( /Bearer (. )/ ); tokens . push ( token ); // Verify and decode the JWT. // Note: For high volume push requests, it would save some network // overhead if you verify the tokens offline by decoding them using // Google's Public Cert; caching already seen tokens works best when // a large volume of messages have prompted a single push server to // handle them, in which case they would all share the same token for // a limited time window. const ticket = await authClient . verifyIdToken ({ idToken : token , audience : 'example.com' , }); const claim = ticket . getPayload (); // IMPORTANT: you should validate claim details not covered // by signature and audience verification above, including: // - Ensure that claim.email is equal to the expected service // account set up in the push subscription settings. // - Ensure that claim.email verified is set to true. claims . push ( claim ); } catch ( e ) { res . status ( 400 ). send ( 'Invalid token' ); return ; } // The message is a unicode string encoded in base64. const message = Buffer . from ( req . body . message . data , 'base64' ). toString ( 'utf-8' ); messages . push ( message ); res . status ( 200 ). send (); }); Python @app . route ( "/push-handlers/receive messages" , methods = [ "POST" ]) def receive messages handler (): Verify that the request originates from the application. if request . args . get ( "token" , "" ) != current app . config [ "PUBSUB VERIFICATION TOKEN" ]: return "Invalid request" , 400 Verify that the push request originates from Cloud Pub/Sub. try : Get the Cloud Pub/Sub-generated JWT in the "Authorization" header. bearer token = request . headers . get ( "Authorization" ) token = bearer token . split ( " " )[ 1 ] TOKENS . append ( token ) Verify and decode the JWT. verify oauth2 token verifies the JWT signature, the aud claim, and the exp claim.
- PUBSUB SERVICE ACCOUNT = "service- ${ PROJECT NUMBER } @gcp-sa-pubsub.iam.gserviceaccount.com" gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ PUBSUB SERVICE ACCOUNT } " \ --role = 'roles/iam.serviceAccountTokenCreator' When you're enabling authentication for a push subscription, you might encounter a permission denied or not authorized error.
- For more information, see Authentication in "Create push subscriptions." If you use an authenticated push subscription with an App Engine application that is secured with Identity-Aware Proxy , you must provide the IAP Client ID as your push auth token audience.
- Home Documentation Data analytics Pub/Sub Guides Send feedback Authentication for push subscriptions Stay organized with collections Save and categorize content based on your preferences.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions)
- Source ID: `site-api-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- Pattern: "projects/{project}/locations/{location}/subscriptions/{subscription}" MessageTransform JSON representation { "enabled" : boolean , "disabled" : boolean , // Union field transform can be only one of the following: "javascriptUdf" : { object ( JavaScriptUDF ) } , "aiInference" : { object ( AIInference ) } // End of list of possible types for union field transform . } Fields enabled (deprecated) boolean This item is deprecated!
- Curl Request curl --location 'https://pubsub.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "list subscriptions", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request for the ListSubscriptions method.
- It must have the format "projects/{project}/subscriptions/{subscription}" . {subscription} must start with a letter, and contain only letters ( [A-Za-z] ), numbers ( [0-9] ), dashes ( - ), underscores ( ), periods ( . ), tildes ( ), plus ( + ) or percent signs ( % ).
- Parameters project : The ID of the Google Cloud project to list subscriptions in, in the format projects/{project id} .

