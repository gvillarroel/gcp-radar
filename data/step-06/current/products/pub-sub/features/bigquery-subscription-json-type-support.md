---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.312Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "BigQuery subscription JSON type support"
feature_slug: "bigquery-subscription-json-type-support"
latest_feature_date: "2022-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/authenticate-push-subscriptions"
  - "https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription"
  - "https://docs.cloud.google.com/pubsub/docs/bigquery"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions"
keywords:
  - "subscription"
  - "json"
  - "type"
  - "subscriptions"
  - "the"
  - "for"
  - "string"
  - "fields"
---

# BigQuery subscription JSON type support

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

BigQuery subscriptions support the JSON type for string fields, including data and attributes.

## Extended Definition

BigQuery subscriptions support the JSON type for string fields, including data and attributes.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/authenticate-push-subscriptions](https://docs.cloud.google.com/pubsub/docs/authenticate-push-subscriptions)
- [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription)
- [https://docs.cloud.google.com/pubsub/docs/bigquery](https://docs.cloud.google.com/pubsub/docs/bigquery)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions)

## Supporting Pages

### Authentication for push subscriptions \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/authenticate-push-subscriptions](https://docs.cloud.google.com/pubsub/docs/authenticate-push-subscriptions)
- Source ID: `site-docs-root-2`
- Final score: 272
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SC BAD REQUEST ); } } private Message getMessage ( HttpServletRequest request ) throws IOException { String requestBody = request . getReader (). lines (). collect ( Collectors . joining ( "\n" )); JsonElement jsonRoot = JsonParser . parseString ( requestBody ). getAsJsonObject (); String messageStr = jsonRoot . getAsJsonObject (). get ( "message" ). toString (); Message message = gson . fromJson ( messageStr , Message . class ); // decode from base64 String decoded = decode ( message . getData ()); message . setData ( decoded ); return message ; } private String decode ( String data ) { return new String ( Base64 . getDecoder (). decode ( data )); } PubSubAuthenticatedPush ( MessageRepository messageRepository ) { this . messageRepository = messageRepository ; } public PubSubAuthenticatedPush () { this ( MessageRepositoryImpl . getInstance ()); } } Node.js app . post ( '/pubsub/authenticated-push' , jsonBodyParser , async ( req , res ) = > { // Verify that the request originates from the application. if ( req . query . token !== PUBSUB VERIFICATION TOKEN ) { res . status ( 400 ). send ( 'Invalid request' ); return ; } // Verify that the push request originates from Cloud Pub/Sub. try { // Get the Cloud Pub/Sub-generated JWT in the "Authorization" header. const bearer = req . header ( 'Authorization' ); const [, token ] = bearer . match ( /Bearer (. )/ ); tokens . push ( token ); // Verify and decode the JWT. // Note: For high volume push requests, it would save some network // overhead if you verify the tokens offline by decoding them using // Google's Public Cert; caching already seen tokens works best when // a large volume of messages have prompted a single push server to // handle them, in which case they would all share the same token for // a limited time window. const ticket = await authClient . verifyIdToken ({ idToken : token , audience : 'example.com' , }); const claim = ticket . getPayload (); // IMPORTANT: you should validate claim details not covered // by signature and audience verification above, including: // - Ensure that claim.email is equal to the expected service // account set up in the push subscription settings. // - Ensure that claim.email verified is set to true. claims . push ( claim ); } catch ( e ) { res . status ( 400 ). send ( 'Invalid token' ); return ; } // The message is a unicode string encoded in base64. const message = Buffer . from ( req . body . message . data , 'base64' ). toString ( 'utf-8' ); messages . push ( message ); res . status ( 200 ). send (); }); Python @app . route ( "/push-handlers/receive messages" , methods = [ "POST" ]) def receive messages handler (): Verify that the request originates from the application. if request . args . get ( "token" , "" ) != current app . config [ "PUBSUB VERIFICATION TOKEN" ]: return "Invalid request" , 400 Verify that the push request originates from Cloud Pub/Sub. try : Get the Cloud Pub/Sub-generated JWT in the "Authorization" header. bearer token = request . headers . get ( "Authorization" ) token = bearer token . split ( " " )[ 1 ] TOKENS . append ( token ) Verify and decode the JWT. verify oauth2 token verifies the JWT signature, the aud claim, and the exp claim.
- CLAIMS . append ( claim ) except Exception as e : return f "Invalid token: { e } \n " , 400 envelope = json . loads ( request . data . decode ( "utf-8" )) payload = base64 . b64decode ( envelope [ "message" ][ "data" ]) MESSAGES . append ( payload ) Returning any 2xx status indicates successful receipt of the message. return "OK" , 200 Ruby post "/pubsub/authenticated-push" do halt 400 if params [ :token ] != PUBSUB VERIFICATION TOKEN begin bearer = request . env [ "HTTP AUTHORIZATION" ] token = /Bearer (. )/ . match ( bearer ) [ 1 ] claim = Google :: Auth :: IDTokens . verify oidc token , aud : "example.com" IMPORTANT: you should validate claim details not covered by signature and audience verification above, including: - Ensure that claim["email"] is equal to the expected service account set up in the push subscription settings. - Ensure that claim["email verified"] is set to true. claims . push claim rescue Google :: Auth :: IDTokens :: VerificationError = > e puts "VerificationError: #{ e . message } " halt 400 , "Invalid token" end message = JSON . parse request . body . read payload = Base64 . decode64 message [ "message" ][ "data" ] messages . push payload end For information on the environment variable PUBSUB VERIFICATION TOKEN used in the code samples above, see Writing and responding to Pub/Sub messages .
- For example, the following authorization header includes an encoded JWT: "Authorization" : "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjdkNjgwZDhjNzBkNDRlOTQ3MTMzY2JkNDk5ZWJjMWE2MWMzZDVh YmMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJodHRwczovL2V4YW1wbGUuY29tIiwiYXpwIjoiMTEzNzc0M jY0NDYzMDM4MzIxOTY0IiwiZW1haWwiOiJnYWUtZ2NwQGFwcHNwb3QuZ3NlcnZpY2VhY2NvdW50LmNvb SIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJleHAiOjE1NTAxODU5MzUsImlhdCI6MTU1MDE4MjMzNSwia XNzIjoiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tIiwic3ViIjoiMTEzNzc0MjY0NDYzMDM4MzIxO TY0In0.QVjyqpmadTyDZmlX2u3jWd1kJ68YkdwsRZDo-QxSPbxjug4ucLBwAs2QePrcgZ6hhkvdc4UHY 4YF3fz9g7XHULNVIzX5xh02qXEH8dK6PgGndIWcZQzjSYfgO-q-R2oo2hNM5HBBsQN4ARtGK acG-NGG WM3CQfahbEjZPAJe B8M7HfIu G5jOLZCw2EUcGo8BvEwGcLWB2WqEgRM0-xt5-UPzoa3-FpSPG7DHk7 z9zRUeq6eB ldb-2o4RciJmjVwHgnYqn3VvlX9oVKEgXpNFhKuYA-mWh5o7BCwhujSMmFoBOh6mbIXF cyf5UiVqKjpqEbqPGo AvKvIQ9VTQ" The header and claim set are JSON strings.
- Payload payload = idToken . getPayload (); // IMPORTANT: you should validate claim details not covered by signature // and audience verification above, including: // - Ensure that payload.getEmail() is equal to the expected service // account set up in the push subscription settings. // - Ensure that payload.getEmailVerified() is set to true. messageRepository . saveToken ( authorization ); messageRepository . saveClaim ( payload . toPrettyString ()); // parse message object from "message" field in the request body json // decode message data from base64 Message message = getMessage ( req ); messageRepository . save ( message ); // 200, 201, 204, 102 status codes are interpreted as success by the Pub/Sub system resp . setStatus ( 102 ); super . doPost ( req , resp ); } catch ( Exception e ) { resp . setStatus ( HttpServletResponse .

### Create BigQuery subscriptions \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription)
- Source ID: `site-docs-root-2`
- Final score: 255
- Re-rank relevance: N/A

Evidence snippets:
- String projectId = "your-project-id" ; String topicId = "your-topic-id" ; String subscriptionId = "your-subscription-id" ; String bigqueryTableId = "your-project.your-dataset.your-table" ; createBigQuerySubscription ( projectId , topicId , subscriptionId , bigqueryTableId ); } public static void createBigQuerySubscription ( String projectId , String topicId , String subscriptionId , String bigqueryTableId ) throws IOException { try ( SubscriptionAdminClient subscriptionAdminClient = SubscriptionAdminClient . create ()) { ProjectTopicName topicName = ProjectTopicName . of ( projectId , topicId ); ProjectSubscriptionName subscriptionName = ProjectSubscriptionName . of ( projectId , subscriptionId ); BigQueryConfig bigqueryConfig = BigQueryConfig . newBuilder (). setTable ( bigqueryTableId ). setWriteMetadata ( true ). build (); Subscription subscription = subscriptionAdminClient . createSubscription ( Subscription . newBuilder () . setName ( subscriptionName . toString ()) . setTopic ( topicName . toString ()) . setBigqueryConfig ( bigqueryConfig ) . build ()); System . out . println ( "Created a BigQuery subscription: " + subscription . getAllFields ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in Quickstart: Using Client Libraries .
- For more information, see the Pub/Sub C# API reference documentation . using Google.Cloud.PubSub.V1 ; public class CreateBigQuerySubscriptionSample { public Subscription CreateBigQuerySubscription ( string projectId , string topicId , string subscriptionId , string bigqueryTableId ) { SubscriberServiceApiClient subscriber = SubscriberServiceApiClient .
- For more information, see the Pub/Sub Node.js API reference documentation . / TODO ( developer ): Uncomment these variables before running the sample . / // const topicNameOrId = 'YOUR TOPIC NAME OR ID' ; // const subscriptionNameOrId = 'YOUR SUBSCRIPTION NAME OR ID' ; // const bigqueryTableId = 'YOUR TABLE ID' ; // Imports the Google Cloud client library import { PubSub , CreateSubscriptionOptions } from '@google-cloud/pubsub' ; // Creates a client ; cache this for further use const pubSubClient = new PubSub (); async function createBigQuerySubscription ( topicNameOrId : string , subscriptionNameOrId : string , bigqueryTableId : string , ) { const options : CreateSubscriptionOptions = { bigqueryConfig : { table : bigqueryTableId , writeMetadata : true , }, }; await pubSubClient . topic ( topicNameOrId ) . createSubscription ( subscriptionNameOrId , options ); console . log ( Subscription $ { subscriptionNameOrId } created . ); } PHP Before trying this sample, follow the PHP setup instructions in Quickstart: Using Client Libraries .
- For more information, see the Pub/Sub PHP API reference documentation . use Google\Cloud\PubSub\PubSubClient; use Google\Cloud\PubSub\V1\BigQueryConfig; / Creates a Pub/Sub BigQuery subscription. @param string $projectId The Google project ID. @param string $topicName The Pub/Sub topic name. @param string $subscriptionName The Pub/Sub subscription name. @param string $table The BigQuery table to which to write. / function create bigquery subscription($projectId, $topicName, $subscriptionName, $table) { $pubsub = new PubSubClient([ 'projectId' => $projectId, ]); $topic = $pubsub->topic($topicName); $subscription = $topic->subscription($subscriptionName); $config = new BigQueryConfig(['table' => $table]); $subscription->create([ 'bigqueryConfig' => $config ]); printf('Subscription created: %s' .

### BigQuery subscriptions \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/bigquery](https://docs.cloud.google.com/pubsub/docs/bigquery)
- Source ID: `site-docs-root-2`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When the type in the topic schema is a string and the type in the BigQuery table is JSON , TIMESTAMP , DATETIME , DATE , TIME , NUMERIC , or BIGNUMERIC , then any value for this field in a Pub/Sub message must adhere to the format specified for the BigQuery data type .
- Avro types Avro Type BigQuery Data Type null Any NULLABLE boolean BOOLEAN int INTEGER , NUMERIC , or BIGNUMERIC long INTEGER , NUMERIC , or BIGNUMERIC float FLOAT64 , NUMERIC , or BIGNUMERIC double FLOAT64 , NUMERIC , or BIGNUMERIC bytes BYTES , NUMERIC , or BIGNUMERIC string STRING , JSON , TIMESTAMP , DATETIME , DATE , TIME , NUMERIC , or BIGNUMERIC record RECORD/STRUCT array of Type REPEATED Type map with value type ValueType REPEATED STRUCT <key STRING, value ValueType> union with two types, one that is null and the other Type NULLABLE Type other union s Unmappable fixed BYTES , NUMERIC , or BIGNUMERIC enum INTEGER Avro logical types Avro Logical Type BigQuery Data Type timestamp-micros TIMESTAMP timestamp-millis TIMESTAMP date DATE time-micros TIME time-millis TIME duration INTERVAL decimal NUMERIC or BIGNUMERIC Protocol Buffer types Protocol Buffer Type BigQuery Data Type double FLOAT64 , NUMERIC , or BIGNUMERIC float FLOAT64 , NUMERIC , or BIGNUMERIC int32 INTEGER , NUMERIC , BIGNUMERIC , or DATE int64 INTEGER , NUMERIC , BIGNUMERIC , DATE , DATETIME , or TIMESTAMP uint32 INTEGER , NUMERIC , BIGNUMERIC , or DATE uint64 NUMERIC or BIGNUMERIC sint32 INTEGER , NUMERIC , or BIGNUMERIC sint64 INTEGER , NUMERIC , BIGNUMERIC , DATE , DATETIME , or TIMESTAMP fixed32 INTEGER , NUMERIC , BIGNUMERIC , or DATE fixed64 NUMERIC or BIGNUMERIC sfixed32 INTEGER , NUMERIC , BIGNUMERIC , or DATE sfixed64 INTEGER , NUMERIC , BIGNUMERIC , DATE , DATETIME , or TIMESTAMP bool BOOLEAN string STRING , JSON , TIMESTAMP , DATETIME , DATE , TIME , NUMERIC , or BIGNUMERIC bytes BYTES , NUMERIC , or BIGNUMERIC enum INTEGER message RECORD/STRUCT oneof Unmappable map<KeyType, ValueType> REPEATED RECORD<key KeyType, value ValueType> enum INTEGER repeated/array of Type REPEATED Type Date and time integer representation When mapping from an integer to one of the date or time types, the number must represent the correct value.
- BigQuery Data Type Integer Representation DATE The number of days since the Unix epoch, January 1, 1970 DATETIME The date and time in microseconds expressed as civil time using the CivilTimeEncoder TIME The time in microseconds expressed as civil time using the CivilTimeEncoder TIMESTAMP The number of microseconds since the Unix epoch, January 1, 1970 00:00:00 UTC BigQuery change data capture ingestion BigQuery subscriptions support change data capture (CDC) ingestion updates when use topic schema or use table schema is set to true in the subscription properties.
- Properties of a BigQuery subscription The properties that you configure for a BigQuery subscription determine the BigQuery table to which Pub/Sub writes messages and the type of schema of that table.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions)
- Source ID: `site-api-reference`
- Final score: 231
- Re-rank relevance: N/A

Evidence snippets:
- Pattern: "projects/{project}/locations/{location}/subscriptions/{subscription}" MessageTransform JSON representation { "enabled" : boolean , "disabled" : boolean , // Union field transform can be only one of the following: "javascriptUdf" : { object ( JavaScriptUDF ) } , "aiInference" : { object ( AIInference ) } // End of list of possible types for union field transform . } Fields enabled (deprecated) boolean This item is deprecated!
- CloudStorageConfig JSON representation { "bucket" : string , "filenamePrefix" : string , "filenameSuffix" : string , "filenameDatetimeFormat" : string , "maxDuration" : string , "maxBytes" : string , "maxMessages" : string , "state" : enum ( State ) , "serviceAccountEmail" : string , // Union field output format can be only one of the following: "textConfig" : { object ( TextConfig ) } , "avroConfig" : { object ( AvroConfig ) } // End of list of possible types for union field output format . } Fields bucket string Required.
- PushConfig JSON representation { "pushEndpoint" : string , "attributes" : { string : string , ... } , // Union field authentication method can be only one of the following: "oidcToken" : { object ( OidcToken ) } // End of list of possible types for union field authentication method . // Union field wrapper can be only one of the following: "pubsubWrapper" : { object ( PubsubWrapper ) } , "noWrapper" : { object ( NoWrapper ) } // End of list of possible types for union field wrapper . } Fields pushEndpoint string Optional.
- Keys: - (optional) 'message id' : {string} - (optional) 'publish time': {string} YYYY-MM-DDTHH:MM:SSZ format - (optional) 'ordering key': {string} / function <function name>(message, metadata) { } AIInference JSON representation { "endpoint" : string , "serviceAccountEmail" : string , // Union field inference mode can be only one of the following: "unstructuredInference" : { object ( UnstructuredInference ) } // End of list of possible types for union field inference mode . } Fields endpoint string Required.

