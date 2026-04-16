---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:03.704Z"
product_name: "Firestore with MongoDB compatibility"
product_slug: "firestore-with-mongodb-compatibility"
feature_name: "Private Google Access"
feature_slug: "private-google-access"
latest_feature_date: "2025-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/configure-private-google-access"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/extend-with-cloud-run-functions"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/connect"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars"
keywords:
  - "private"
  - "access"
  - "firestore"
  - "with"
  - "mongodb"
  - "compatibility"
  - "supports"
---

# Private Google Access

Product: Firestore with MongoDB compatibility
Coverage: MEDIUM

## Step 02 Summary

Firestore with MongoDB compatibility supports Private Google Access.

## Extended Definition

Firestore with MongoDB compatibility supports Private Google Access.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/configure-private-google-access](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/configure-private-google-access)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/extend-with-cloud-run-functions](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/extend-with-cloud-run-functions)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/connect](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/connect)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars)

## Supporting Pages

### "Configure Private Google Access in Firestore with MongoDB compatibility\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/configure-private-google-access](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/configure-private-google-access)
- Source ID: `site-iam-reference`
- Final score: 371
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- About Private Google Access in Firestore with MongoDB compatibility By default, when a Compute Engine VM lacks an external IP address assigned to its network interface, it can only send packets to other internal IP address destinations.
- Unlike other Google APIs, the Firestore with MongoDB compatibility API uses different domain names and IP addresses for Private Google Access: restricted.firestore.goog enables API access to the Firestore with MongoDB compatibility API.
- Configure Private Google Access in Firestore with MongoDB compatibility This page describes how to enable and configure Private Google Access in Firestore with MongoDB compatibility.
- You can allow these VMs to connect to the Firestore with MongoDB compatibility service by enabling Private Google Access on the subnet used by the VM's network interface.

### "Extend Firestore with MongoDB compatibility with event triggers using Cloud\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/extend-with-cloud-run-functions](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/extend-with-cloud-run-functions)
- Source ID: `site-iam-reference`
- Final score: 269
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Extend Firestore with MongoDB compatibility with event triggers using Cloud Run functions With Cloud Run functions, you can deploy code to handle events triggered by changes in your Cloud Run database.
- Home Documentation Databases Firestore with MongoDB compatibility Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Write a Firestore-triggered function To write a function that responds to Firestore events, prepare to specify the following during deployment: a trigger event type a trigger event filter to select the documents associated with the function the function code to run Event types Firestore supports create , update , delete , and write events.
- InvalidProtocolBufferException ; import io.cloudevents.CloudEvent ; import java.util.Map ; import java.util.concurrent.ExecutionException ; import java.util.logging.Logger ; public class FirebaseFirestoreReactive implements CloudEventsFunction { private static final Logger logger = Logger . getLogger ( FirebaseFirestoreReactive . class . getName ()); private final Firestore firestore ; private static final String FIELD KEY = "original" ; private static final String APPLICATION PROTOBUF = "application/protobuf" ; public FirebaseFirestoreReactive () { this ( FirestoreOptions . getDefaultInstance (). getService ()); } public FirebaseFirestoreReactive ( Firestore firestore ) { this . firestore = firestore ; } @Override public void accept ( CloudEvent event ) throws InvalidProtocolBufferException , InterruptedException , ExecutionException { if ( event . getData () == null ) { logger . warning ( "No data found in event!" ); return ; } if ( ! event . getDataContentType (). equals ( APPLICATION PROTOBUF )) { logger . warning ( String . format ( "Found unexpected content type %s, expected %s" , event . getDataContentType (), APPLICATION PROTOBUF )); return ; } DocumentEventData firestoreEventData = DocumentEventData . parseFrom ( event . getData (). toBytes ()); // Get the fields from the post-operation document snapshot // https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents#Document Map<String , Value > fields = firestoreEventData . getValue (). getFieldsMap (); if ( ! fields . containsKey ( FIELD KEY )) { logger . warning ( "Document does not contain original field" ); return ; } String currValue = fields . get ( FIELD KEY ). getStringValue (); String newValue = currValue . toUpperCase (); if ( currValue . equals ( newValue )) { logger . info ( "Value is already upper-case" ); return ; } // Retrieve the document name from the resource path: // projects/{project id}/databases/{database id}/documents/{document path} String affectedDoc = firestoreEventData . getValue () . getName () . split ( "/documents/" ) [ 1 ] . replace ( "\"" , "" ); logger . info ( String . format ( "Replacing values: %s --> %s" , currValue , newValue )); // Wait for the async call to complete this . firestore . document ( affectedDoc ) . set ( Map . of ( FIELD KEY , newValue ), SetOptions . merge ()) . get (); } } C# using CloudNative.CloudEvents ; using Google.Cloud.Firestore ; using Google.Cloud.Functions.Framework ; using Google.Cloud.Functions.Hosting ; using Google.Events.Protobuf.Cloud.Firestore.V1 ; using Microsoft.AspNetCore.Hosting ; using Microsoft.Extensions.DependencyInjection ; using Microsoft.Extensions.Logging ; using System.Collections.Generic ; using System.Threading ; using System.Threading.Tasks ; namespace FirestoreReactive ; public class Startup : FunctionsStartup { public override void ConfigureServices ( WebHostBuilderContext context , IServiceCollection services ) = > services .

### "Authenticate and connect to a database \_|\_ Firestore with MongoDB compatibility\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/connect](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/connect)
- Source ID: `site-iam-reference`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This requires adding the auth library as a dependency : // Maven <dependency> <groupId>com.google.auth</groupId> <artifactId>google-auth-library-oauth2-http</artifactId> <version>1.19.0</version> </dependency> // Gradle implementation 'com.google.auth:google-auth-library-oauth2-http:1.19.0' The following code sample demonstrates how to connect: val db = MongoClients . create ( clientSettings ( " DATABASE UID " , " LOCATION " ). build () ). getDatabase ( " DATABASE ID " ) / Creates a connection to a Firestore with MongoDB Compatibility database. @param databaseUid The uid of the database to connect to as a string.
- Expr ; public class FirestoreUserCredsExample { / Provision user credentials and configure an IAM policy to allow SCRAM authentication into the specified Firestore with Mongo Compatibility database. / private static void provisionFirestoreUserCredsAndIAM ( String projectId , String databaseId , String userName ) throws Exception { UserCreds userCreds = createUserCreds ( projectId , databaseId , userName ); // Note the password returned in the UserCreds proto - it cannot be retrieved again // after the initial call to the createUserCreds API.
- Create a user and connect to a database To create a user for your Firestore with MongoDB compatibility database, use one of the following method: Google Cloud console In the Google Cloud console, go to the Databases page.
- Connect from a Google Cloud compute environment This section describes connecting to Firestore with MongoDB compatibility from a Google Cloud compute environment, such as Compute Engine or a Cloud Run service or job.

### "Configure environment variables \_|\_ Firestore with MongoDB compatibility\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars)
- Source ID: `site-iam-reference`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Firestore with MongoDB compatibility Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Dataflow template parameters for managing the pipeline that will copy data from the Cloud Storage bucket into your Firestore with MongoDB compatibility database.
- Firestore connection parameters: FIRESTORE DATABASE NAME : The name of the Firestore with MongoDB compatibility database where you migrate the data.
- Firestore connection parameters for establishing a connection to your destination Firestore with MongoDB compatibility database.

