---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.309Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Push subscription payload unwrapping"
feature_slug: "push-subscription-payload-unwrapping"
latest_feature_date: "2023-07-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/authenticate-push-subscriptions"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription"
keywords:
  - "push"
  - "subscription"
  - "payload"
  - "unwrapping"
  - "delivers"
  - "pub"
  - "sub"
  - "messages"
---

# Push subscription payload unwrapping

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

Payload unwrapping delivers Pub/Sub messages with only the message data in the HTTP body.

## Extended Definition

Payload unwrapping delivers Pub/Sub messages with only the message data in the HTTP body.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/authenticate-push-subscriptions](https://docs.cloud.google.com/pubsub/docs/authenticate-push-subscriptions)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription)

## Supporting Pages

### Authentication for push subscriptions \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/authenticate-push-subscriptions](https://docs.cloud.google.com/pubsub/docs/authenticate-push-subscriptions)
- Source ID: `site-docs-root-2`
- Final score: 295
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SC BAD REQUEST ); } } private Message getMessage ( HttpServletRequest request ) throws IOException { String requestBody = request . getReader (). lines (). collect ( Collectors . joining ( "\n" )); JsonElement jsonRoot = JsonParser . parseString ( requestBody ). getAsJsonObject (); String messageStr = jsonRoot . getAsJsonObject (). get ( "message" ). toString (); Message message = gson . fromJson ( messageStr , Message . class ); // decode from base64 String decoded = decode ( message . getData ()); message . setData ( decoded ); return message ; } private String decode ( String data ) { return new String ( Base64 . getDecoder (). decode ( data )); } PubSubAuthenticatedPush ( MessageRepository messageRepository ) { this . messageRepository = messageRepository ; } public PubSubAuthenticatedPush () { this ( MessageRepositoryImpl . getInstance ()); } } Node.js app . post ( '/pubsub/authenticated-push' , jsonBodyParser , async ( req , res ) = > { // Verify that the request originates from the application. if ( req . query . token !== PUBSUB VERIFICATION TOKEN ) { res . status ( 400 ). send ( 'Invalid request' ); return ; } // Verify that the push request originates from Cloud Pub/Sub. try { // Get the Cloud Pub/Sub-generated JWT in the "Authorization" header. const bearer = req . header ( 'Authorization' ); const [, token ] = bearer . match ( /Bearer (. )/ ); tokens . push ( token ); // Verify and decode the JWT. // Note: For high volume push requests, it would save some network // overhead if you verify the tokens offline by decoding them using // Google's Public Cert; caching already seen tokens works best when // a large volume of messages have prompted a single push server to // handle them, in which case they would all share the same token for // a limited time window. const ticket = await authClient . verifyIdToken ({ idToken : token , audience : 'example.com' , }); const claim = ticket . getPayload (); // IMPORTANT: you should validate claim details not covered // by signature and audience verification above, including: // - Ensure that claim.email is equal to the expected service // account set up in the push subscription settings. // - Ensure that claim.email verified is set to true. claims . push ( claim ); } catch ( e ) { res . status ( 400 ). send ( 'Invalid token' ); return ; } // The message is a unicode string encoded in base64. const message = Buffer . from ( req . body . message . data , 'base64' ). toString ( 'utf-8' ); messages . push ( message ); res . status ( 200 ). send (); }); Python @app . route ( "/push-handlers/receive messages" , methods = [ "POST" ]) def receive messages handler (): Verify that the request originates from the application. if request . args . get ( "token" , "" ) != current app . config [ "PUBSUB VERIFICATION TOKEN" ]: return "Invalid request" , 400 Verify that the push request originates from Cloud Pub/Sub. try : Get the Cloud Pub/Sub-generated JWT in the "Authorization" header. bearer token = request . headers . get ( "Authorization" ) token = bearer token . split ( " " )[ 1 ] TOKENS . append ( token ) Verify and decode the JWT. verify oauth2 token verifies the JWT signature, the aud claim, and the exp claim.
- CLAIMS . append ( claim ) except Exception as e : return f "Invalid token: { e } \n " , 400 envelope = json . loads ( request . data . decode ( "utf-8" )) payload = base64 . b64decode ( envelope [ "message" ][ "data" ]) MESSAGES . append ( payload ) Returning any 2xx status indicates successful receipt of the message. return "OK" , 200 Ruby post "/pubsub/authenticated-push" do halt 400 if params [ :token ] != PUBSUB VERIFICATION TOKEN begin bearer = request . env [ "HTTP AUTHORIZATION" ] token = /Bearer (. )/ . match ( bearer ) [ 1 ] claim = Google :: Auth :: IDTokens . verify oidc token , aud : "example.com" IMPORTANT: you should validate claim details not covered by signature and audience verification above, including: - Ensure that claim["email"] is equal to the expected service account set up in the push subscription settings. - Ensure that claim["email verified"] is set to true. claims . push claim rescue Google :: Auth :: IDTokens :: VerificationError = > e puts "VerificationError: #{ e . message } " halt 400 , "Invalid token" end message = JSON . parse request . body . read payload = Base64 . decode64 message [ "message" ][ "data" ] messages . push payload end For information on the environment variable PUBSUB VERIFICATION TOKEN used in the code samples above, see Writing and responding to Pub/Sub messages .
- Payload payload = idToken . getPayload (); // IMPORTANT: you should validate claim details not covered by signature // and audience verification above, including: // - Ensure that payload.getEmail() is equal to the expected service // account set up in the push subscription settings. // - Ensure that payload.getEmailVerified() is set to true. messageRepository . saveToken ( authorization ); messageRepository . saveClaim ( payload . toPrettyString ()); // parse message object from "message" field in the request body json // decode message data from base64 Message message = getMessage ( req ); messageRepository . save ( message ); // 200, 201, 204, 102 status codes are interpreted as success by the Pub/Sub system resp . setStatus ( 102 ); super . doPost ( req , resp ); } catch ( Exception e ) { resp . setStatus ( HttpServletResponse .
- VerifySignedTokenAsync<PubSubPayload> ( authToken ); // IMPORTANT: you should validate payload details not covered // by signature and audience verification above, including: // - Ensure that payload.Email is equal to the expected service // account set up in the push subscription settings. // - Ensure that payload.Email verified is set to true. var messageBytes = Convert .

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)
- Source ID: `site-api-reference`
- Final score: 253
- Re-rank relevance: N/A

Evidence snippets:
- Subscription JSON representation { "name" : string , "topic" : string , "pushConfig" : { object ( PushConfig ) } , "bigqueryConfig" : { object ( BigQueryConfig ) } , "cloudStorageConfig" : { object ( CloudStorageConfig ) } , "ackDeadlineSeconds" : integer , "retainAckedMessages" : boolean , "messageRetentionDuration" : string , "labels" : { string : string , ... } , "enableMessageOrdering" : boolean , "expirationPolicy" : { object ( ExpirationPolicy ) } , "filter" : string , "deadLetterPolicy" : { object ( DeadLetterPolicy ) } , "retryPolicy" : { object ( RetryPolicy ) } , "detached" : boolean , "enableExactlyOnceDelivery" : boolean , "topicMessageRetentionDuration" : string , "state" : enum ( State ) , "analyticsHubSubscriptionInfo" : { object ( AnalyticsHubSubscriptionInfo ) } , "messageTransforms" : [ { object ( MessageTransform ) } ] , "tags" : { string : string , ... } } Fields name string Required.
- Subscription JSON representation { "name" : string , "topic" : string , "pushConfig" : { object ( PushConfig ) } , "bigqueryConfig" : { object ( BigQueryConfig ) } , "cloudStorageConfig" : { object ( CloudStorageConfig ) } , "ackDeadlineSeconds" : integer , "retainAckedMessages" : boolean , "messageRetentionDuration" : string , "labels" : { string : string , ... } , "enableMessageOrdering" : boolean , "expirationPolicy" : { object ( ExpirationPolicy ) } , "filter" : string , "deadLetterPolicy" : { object ( DeadLetterPolicy ) } , "retryPolicy" : { object ( RetryPolicy ) } , "detached" : boolean , "enableExactlyOnceDelivery" : boolean , "topicMessageRetentionDuration" : string , "state" : enum ( State ) , "analyticsHubSubscriptionInfo" : { object ( AnalyticsHubSubscriptionInfo ) } , "messageTransforms" : [ { object ( MessageTransform ) } ] , "tags" : { string : string , ... } } Fields name string Required.
- The Pub/Sub service account associated with this subscriptions's parent project (i.e., service-{project number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have permission to Acknowledge() messages on this subscription. retryPolicy object ( RetryPolicy ) Optional.
- The Pub/Sub service account associated with this subscriptions's parent project (i.e., service-{project number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have permission to Acknowledge() messages on this subscription. retryPolicy object ( RetryPolicy ) Optional.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription)
- Source ID: `site-api-reference`
- Final score: 253
- Re-rank relevance: N/A

Evidence snippets:
- Subscription JSON representation { "name" : string , "topic" : string , "pushConfig" : { object ( PushConfig ) } , "bigqueryConfig" : { object ( BigQueryConfig ) } , "cloudStorageConfig" : { object ( CloudStorageConfig ) } , "ackDeadlineSeconds" : integer , "retainAckedMessages" : boolean , "messageRetentionDuration" : string , "labels" : { string : string , ... } , "enableMessageOrdering" : boolean , "expirationPolicy" : { object ( ExpirationPolicy ) } , "filter" : string , "deadLetterPolicy" : { object ( DeadLetterPolicy ) } , "retryPolicy" : { object ( RetryPolicy ) } , "detached" : boolean , "enableExactlyOnceDelivery" : boolean , "topicMessageRetentionDuration" : string , "state" : enum ( State ) , "analyticsHubSubscriptionInfo" : { object ( AnalyticsHubSubscriptionInfo ) } , "messageTransforms" : [ { object ( MessageTransform ) } ] , "tags" : { string : string , ... } } Fields name string Required.
- Subscription JSON representation { "name" : string , "topic" : string , "pushConfig" : { object ( PushConfig ) } , "bigqueryConfig" : { object ( BigQueryConfig ) } , "cloudStorageConfig" : { object ( CloudStorageConfig ) } , "ackDeadlineSeconds" : integer , "retainAckedMessages" : boolean , "messageRetentionDuration" : string , "labels" : { string : string , ... } , "enableMessageOrdering" : boolean , "expirationPolicy" : { object ( ExpirationPolicy ) } , "filter" : string , "deadLetterPolicy" : { object ( DeadLetterPolicy ) } , "retryPolicy" : { object ( RetryPolicy ) } , "detached" : boolean , "enableExactlyOnceDelivery" : boolean , "topicMessageRetentionDuration" : string , "state" : enum ( State ) , "analyticsHubSubscriptionInfo" : { object ( AnalyticsHubSubscriptionInfo ) } , "messageTransforms" : [ { object ( MessageTransform ) } ] , "tags" : { string : string , ... } } Fields name string Required.
- The Pub/Sub service account associated with this subscriptions's parent project (i.e., service-{project number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have permission to Acknowledge() messages on this subscription. retryPolicy object ( RetryPolicy ) Optional.
- The Pub/Sub service account associated with this subscriptions's parent project (i.e., service-{project number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have permission to Acknowledge() messages on this subscription. retryPolicy object ( RetryPolicy ) Optional.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription)
- Source ID: `site-api-reference`
- Final score: 245
- Re-rank relevance: N/A

Evidence snippets:
- Subscription JSON representation { "name" : string , "topic" : string , "pushConfig" : { object ( PushConfig ) } , "bigqueryConfig" : { object ( BigQueryConfig ) } , "cloudStorageConfig" : { object ( CloudStorageConfig ) } , "ackDeadlineSeconds" : integer , "retainAckedMessages" : boolean , "messageRetentionDuration" : string , "labels" : { string : string , ... } , "enableMessageOrdering" : boolean , "expirationPolicy" : { object ( ExpirationPolicy ) } , "filter" : string , "deadLetterPolicy" : { object ( DeadLetterPolicy ) } , "retryPolicy" : { object ( RetryPolicy ) } , "detached" : boolean , "enableExactlyOnceDelivery" : boolean , "topicMessageRetentionDuration" : string , "state" : enum ( State ) , "analyticsHubSubscriptionInfo" : { object ( AnalyticsHubSubscriptionInfo ) } , "messageTransforms" : [ { object ( MessageTransform ) } ] , "tags" : { string : string , ... } } Fields name string Required.
- The Pub/Sub service account associated with this subscriptions's parent project (i.e., service-{project number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have permission to Acknowledge() messages on this subscription. retryPolicy object ( RetryPolicy ) Optional.
- When set, the payload to the push endpoint is in the form of the JSON representation of a PubsubMessage ( https://cloud.google.com/pubsub/docs/reference/rpc/google.pubsub.v1#pubsubmessage) . noWrapper object ( NoWrapper ) Optional.
- Users should ensure that there is a subscription attached to this topic since messages published to a topic with no subscriptions are lost. maxDeliveryAttempts integer Optional.

