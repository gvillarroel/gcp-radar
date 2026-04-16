---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.894Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Firestore triggers for Cloud Functions"
feature_slug: "firestore-triggers-for-cloud-functions"
latest_feature_date: "2021-09-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/docs/extend-with-functions-2nd-gen"
  - "https://docs.cloud.google.com/firestore/docs/eventarc"
  - "https://docs.cloud.google.com/firestore/docs/cmek"
keywords:
  - "firestore"
  - "triggers"
  - "functions"
---

# Firestore triggers for Cloud Functions

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

Firestore triggers are supported for Cloud Functions.

## Extended Definition

Firestore triggers are supported for Cloud Functions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/docs/extend-with-functions-2nd-gen](https://docs.cloud.google.com/firestore/docs/extend-with-functions-2nd-gen)
- [https://docs.cloud.google.com/firestore/docs/eventarc](https://docs.cloud.google.com/firestore/docs/eventarc)
- [https://docs.cloud.google.com/firestore/docs/cmek](https://docs.cloud.google.com/firestore/docs/cmek)

## Supporting Pages

### "Extend Firestore with event triggers using Cloud Run functions \_|\_ Firestore\

- URL: [https://docs.cloud.google.com/firestore/docs/extend-with-functions-2nd-gen](https://docs.cloud.google.com/firestore/docs/extend-with-functions-2nd-gen)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example 1: Hello Firestore function The following sample prints the fields of a triggering Firestore event: Node.js / Cloud Event Function triggered by a change to a Firestore document. / const functions = require ( '@google-cloud/functions-framework' ); const protobuf = require ( 'protobufjs' ); functions . cloudEvent ( 'helloFirestore' , async cloudEvent = > { console . log ( Function triggered by event on: ${ cloudEvent . source } ); console . log ( Event type: ${ cloudEvent . type } ); console . log ( 'Loading protos...' ); const root = await protobuf . load ( 'data.proto' ); const DocumentEventData = root . lookupType ( 'google.events.cloud.firestore.v1.DocumentEventData' ); console . log ( 'Decoding data...' ); const firestoreReceived = DocumentEventData . decode ( cloudEvent . data ); console . log ( '\nOld value:' ); console . log ( JSON . stringify ( firestoreReceived . oldValue , null , 2 )); console . log ( '\nNew value:' ); console . log ( JSON . stringify ( firestoreReceived . value , null , 2 )); }); Python from cloudevents.http import CloudEvent import functions framework from google.events.cloud import firestore @functions framework . cloud event def hello firestore ( cloud event : CloudEvent ) - > None : """Triggers by a change to a Firestore document.
- This guide describes how to create triggers for Cloud Run functions from Firestore events.
- InvalidProtocolBufferException ; import io.cloudevents.CloudEvent ; import java.util.Map ; import java.util.concurrent.ExecutionException ; import java.util.logging.Logger ; public class FirebaseFirestoreReactive implements CloudEventsFunction { private static final Logger logger = Logger . getLogger ( FirebaseFirestoreReactive . class . getName ()); private final Firestore firestore ; private static final String FIELD KEY = "original" ; private static final String APPLICATION PROTOBUF = "application/protobuf" ; public FirebaseFirestoreReactive () { this ( FirestoreOptions . getDefaultInstance (). getService ()); } public FirebaseFirestoreReactive ( Firestore firestore ) { this . firestore = firestore ; } @Override public void accept ( CloudEvent event ) throws InvalidProtocolBufferException , InterruptedException , ExecutionException { if ( event . getData () == null ) { logger . warning ( "No data found in event!" ); return ; } if ( ! event . getDataContentType (). equals ( APPLICATION PROTOBUF )) { logger . warning ( String . format ( "Found unexpected content type %s, expected %s" , event . getDataContentType (), APPLICATION PROTOBUF )); return ; } DocumentEventData firestoreEventData = DocumentEventData . parseFrom ( event . getData (). toBytes ()); // Get the fields from the post-operation document snapshot // https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents#Document Map<String , Value > fields = firestoreEventData . getValue (). getFieldsMap (); if ( ! fields . containsKey ( FIELD KEY )) { logger . warning ( "Document does not contain original field" ); return ; } String currValue = fields . get ( FIELD KEY ). getStringValue (); String newValue = currValue . toUpperCase (); if ( currValue . equals ( newValue )) { logger . info ( "Value is already upper-case" ); return ; } // Retrieve the document name from the resource path: // projects/{project id}/databases/{database id}/documents/{document path} String affectedDoc = firestoreEventData . getValue () . getName () . split ( "/documents/" ) [ 1 ] . replace ( "\"" , "" ); logger . info ( String . format ( "Replacing values: %s --> %s" , currValue , newValue )); // Wait for the async call to complete this . firestore . document ( affectedDoc ) . set ( Map . of ( FIELD KEY , newValue ), SetOptions . merge ()) . get (); } } C# using CloudNative.CloudEvents ; using Google.Cloud.Firestore ; using Google.Cloud.Functions.Framework ; using Google.Cloud.Functions.Hosting ; using Google.Events.Protobuf.Cloud.Firestore.V1 ; using Microsoft.AspNetCore.Hosting ; using Microsoft.Extensions.DependencyInjection ; using Microsoft.Extensions.Logging ; using System.Collections.Generic ; using System.Threading ; using System.Threading.Tasks ; namespace FirestoreReactive ; public class Startup : FunctionsStartup { public override void ConfigureServices ( WebHostBuilderContext context , IServiceCollection services ) = > services .
- InvalidProtocolBufferException ; import io.cloudevents.CloudEvent ; import java.util.logging.Logger ; public class FirebaseFirestore implements CloudEventsFunction { private static final Logger logger = Logger . getLogger ( FirebaseFirestore . class . getName ()); @Override public void accept ( CloudEvent event ) throws InvalidProtocolBufferException { DocumentEventData firestoreEventData = DocumentEventData . parseFrom ( event . getData (). toBytes ()); logger . info ( "Function triggered by event on: " + event . getSource ()); logger . info ( "Event type: " + event . getType ()); logger . info ( "Old value:" ); logger . info ( firestoreEventData . getOldValue (). toString ()); logger . info ( "New value:" ); logger . info ( firestoreEventData . getValue (). toString ()); } } C# using CloudNative.CloudEvents ; using Google.Cloud.Functions.Framework ; using Google.Events.Protobuf.Cloud.Firestore.V1 ; using Microsoft.Extensions.Logging ; using System.Collections.Generic ; using System.Linq ; using System.Threading ; using System.Threading.Tasks ; namespace FirebaseFirestore ; public class Function : ICloudEventFunction<DocumentEventData> { private readonly ILogger logger ; public Function ( ILogger<Function> logger ) = > logger = logger ; public Task HandleAsync ( CloudEvent cloudEvent , DocumentEventData data , CancellationToken cancellationToken ) { logger .

### "Create event-driven architectures with Eventarc \_|\_ Firestore in Native\

- URL: [https://docs.cloud.google.com/firestore/docs/eventarc](https://docs.cloud.google.com/firestore/docs/eventarc)
- Source ID: `site-docs-reference`
- Final score: 75
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Firestore triggers for Eventarc support additional destinations besides Cloud Run functions.
- Cloud Run functions (1st gen) retrieves the trigger definition during the evaluation of the database write, and changes to the trigger during evaluation can affect if Firestore emits an event or not.
- Firestore triggers for Eventarc retrieve the trigger definition at the start of a database write operation and uses that definition to decide if Firestore should emit an event.
- Limitations Note the following limitations for Firestore triggers for Eventarc: Ordering is not guaranteed.

### "Customer-managed encryption keys (CMEK) \_|\_ Firestore in Native mode \_\

- URL: [https://docs.cloud.google.com/firestore/docs/cmek](https://docs.cloud.google.com/firestore/docs/cmek)
- Source ID: `site-docs-reference`
- Final score: 39
- Re-rank relevance: N/A

Evidence snippets:
- If you want to have CMEK protection, use Cloud Run functions Firestore Triggers (2nd gen) .
- CMEK and key availability When keys are unavailable or disabled, be aware of the following behaviors that can occur in CMEK-enabled databases: You can change Firestore point-in-time recovery (PITR) settings on a CMEK-enabled database even if the key is unavailable because PITR settings are database metadata, which isn't encrypted by CMEK.
- If the system detects that the key is unavailable, within 10 minutes any subsequent calls to the Firestore database, including reads, writes, and queries, return a FAILED PRECONDITION error with the The customer-managed encryption key required by the requested resource is not accessible message.
- For more information about CMEK in general, including when and why to enable it, see the following Cloud KMS documentation: Customer-managed encryption keys (CMEK) Best practices for using CMEKs For instructions on performing CMEK-related tasks with Firestore, see Use CMEK .

