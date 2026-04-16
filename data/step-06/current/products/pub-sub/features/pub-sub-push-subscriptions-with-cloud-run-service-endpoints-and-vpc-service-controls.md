---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.315Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Pub/Sub push subscriptions with Cloud Run service endpoints and VPC Service Controls"
feature_slug: "pub-sub-push-subscriptions-with-cloud-run-service-endpoints-and-vpc-service-controls"
latest_feature_date: "2021-07-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/authenticate-push-subscriptions"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription"
keywords:
  - "pub"
  - "sub"
  - "push"
  - "subscriptions"
  - "with"
  - "run"
  - "endpoints"
  - "and"
---

# Pub/Sub push subscriptions with Cloud Run service endpoints and VPC Service Controls

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

Pub/Sub push subscriptions can use Cloud Run service endpoints protected by VPC Service Controls; Pub/Sub push subscriptions can use Cloud Run service endpoints protected by VPC Service Controls in Preview.

## Extended Definition

Pub/Sub push subscriptions can use Cloud Run service endpoints protected by VPC Service Controls; Pub/Sub push subscriptions can use Cloud Run service endpoints protected by VPC Service Controls in Preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/authenticate-push-subscriptions](https://docs.cloud.google.com/pubsub/docs/authenticate-push-subscriptions)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription)

## Supporting Pages

### Authentication for push subscriptions \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/authenticate-push-subscriptions](https://docs.cloud.google.com/pubsub/docs/authenticate-push-subscriptions)
- Source ID: `site-docs-root-2`
- Final score: 340
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See the following guides and tutorials for different use cases with these services: Cloud Run Triggering from Pub/Sub push : Your push auth service account must have the roles/run.invoker role and be bound to a Cloud Run service to invoke a corresponding Cloud Run service Using Pub/Sub with Cloud Run tutorial App Engine Writing and Responding to Pub/Sub Messages Note: If your App Engine application is secured with Identity-Aware Proxy , you must grant your push auth service account the IAP-secured Web App User role on the App Engine application for Pub/Sub push requests to come through.
- Home Documentation Data analytics Pub/Sub Guides Send feedback Authentication for push subscriptions Stay organized with collections Save and categorize content based on your preferences.
- Cloud Run functions HTTP Triggers : Your push auth service account must have the roles/cloudfunctions.invoker role to invoke a function if you intend to use Pub/Sub push requests as HTTP triggers to the function Google Cloud Pub/Sub Triggers : IAM roles and permissions are auto-configured if you use Pub/Sub triggers to invoke a function Note: In first-generation App Engine runtimes, push requests to endpoint URLs of the form / ah/push-handlers/. in the same project are authorized as admin users .
- SC BAD REQUEST ); } } private Message getMessage ( HttpServletRequest request ) throws IOException { String requestBody = request . getReader (). lines (). collect ( Collectors . joining ( "\n" )); JsonElement jsonRoot = JsonParser . parseString ( requestBody ). getAsJsonObject (); String messageStr = jsonRoot . getAsJsonObject (). get ( "message" ). toString (); Message message = gson . fromJson ( messageStr , Message . class ); // decode from base64 String decoded = decode ( message . getData ()); message . setData ( decoded ); return message ; } private String decode ( String data ) { return new String ( Base64 . getDecoder (). decode ( data )); } PubSubAuthenticatedPush ( MessageRepository messageRepository ) { this . messageRepository = messageRepository ; } public PubSubAuthenticatedPush () { this ( MessageRepositoryImpl . getInstance ()); } } Node.js app . post ( '/pubsub/authenticated-push' , jsonBodyParser , async ( req , res ) = > { // Verify that the request originates from the application. if ( req . query . token !== PUBSUB VERIFICATION TOKEN ) { res . status ( 400 ). send ( 'Invalid request' ); return ; } // Verify that the push request originates from Cloud Pub/Sub. try { // Get the Cloud Pub/Sub-generated JWT in the "Authorization" header. const bearer = req . header ( 'Authorization' ); const [, token ] = bearer . match ( /Bearer (. )/ ); tokens . push ( token ); // Verify and decode the JWT. // Note: For high volume push requests, it would save some network // overhead if you verify the tokens offline by decoding them using // Google's Public Cert; caching already seen tokens works best when // a large volume of messages have prompted a single push server to // handle them, in which case they would all share the same token for // a limited time window. const ticket = await authClient . verifyIdToken ({ idToken : token , audience : 'example.com' , }); const claim = ticket . getPayload (); // IMPORTANT: you should validate claim details not covered // by signature and audience verification above, including: // - Ensure that claim.email is equal to the expected service // account set up in the push subscription settings. // - Ensure that claim.email verified is set to true. claims . push ( claim ); } catch ( e ) { res . status ( 400 ). send ( 'Invalid token' ); return ; } // The message is a unicode string encoded in base64. const message = Buffer . from ( req . body . message . data , 'base64' ). toString ( 'utf-8' ); messages . push ( message ); res . status ( 200 ). send (); }); Python @app . route ( "/push-handlers/receive messages" , methods = [ "POST" ]) def receive messages handler (): Verify that the request originates from the application. if request . args . get ( "token" , "" ) != current app . config [ "PUBSUB VERIFICATION TOKEN" ]: return "Invalid request" , 400 Verify that the push request originates from Cloud Pub/Sub. try : Get the Cloud Pub/Sub-generated JWT in the "Authorization" header. bearer token = request . headers . get ( "Authorization" ) token = bearer token . split ( " " )[ 1 ] TOKENS . append ( token ) Verify and decode the JWT. verify oauth2 token verifies the JWT signature, the aud claim, and the exp claim.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions)
- Source ID: `site-api-reference`
- Final score: 302
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This can be used with push endpoints that are private by default to allow requests only from the Pub/Sub system, for example.
- It must have the format "projects/{project}/subscriptions/{subscription}" . {subscription} must start with a letter, and contain only letters ( [A-Za-z] ), numbers ( [0-9] ), dashes ( - ), underscores ( ), periods ( . ), tildes ( ), plus ( + ) or percent signs ( % ).
- The Pub/Sub service account associated with this subscriptions's parent project (i.e., service-{project number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have permission to Acknowledge() messages on this subscription. retryPolicy object ( RetryPolicy ) Optional.
- Home Documentation Data analytics Pub/Sub Reference Send feedback MCP Tools Reference: pubsub.googleapis.com Stay organized with collections Save and categorize content based on your preferences.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)
- Source ID: `site-api-reference`
- Final score: 296
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This can be used with push endpoints that are private by default to allow requests only from the Pub/Sub system, for example.
- This can be used with push endpoints that are private by default to allow requests only from the Pub/Sub system, for example.
- It must have the format "projects/{project}/subscriptions/{subscription}" . {subscription} must start with a letter, and contain only letters ( [A-Za-z] ), numbers ( [0-9] ), dashes ( - ), underscores ( ), periods ( . ), tildes ( ), plus ( + ) or percent signs ( % ).
- It must have the format "projects/{project}/subscriptions/{subscription}" . {subscription} must start with a letter, and contain only letters ( [A-Za-z] ), numbers ( [0-9] ), dashes ( - ), underscores ( ), periods ( . ), tildes ( ), plus ( + ) or percent signs ( % ).

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription)
- Source ID: `site-api-reference`
- Final score: 296
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This can be used with push endpoints that are private by default to allow requests only from the Pub/Sub system, for example.
- This can be used with push endpoints that are private by default to allow requests only from the Pub/Sub system, for example.
- It must have the format "projects/{project}/subscriptions/{subscription}" . {subscription} must start with a letter, and contain only letters ( [A-Za-z] ), numbers ( [0-9] ), dashes ( - ), underscores ( ), periods ( . ), tildes ( ), plus ( + ) or percent signs ( % ).
- It must have the format "projects/{project}/subscriptions/{subscription}" . {subscription} must start with a letter, and contain only letters ( [A-Za-z] ), numbers ( [0-9] ), dashes ( - ), underscores ( ), periods ( . ), tildes ( ), plus ( + ) or percent signs ( % ).

