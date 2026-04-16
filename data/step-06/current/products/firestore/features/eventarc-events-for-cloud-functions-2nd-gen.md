---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.885Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Eventarc events for Cloud Functions (2nd gen)"
feature_slug: "eventarc-events-for-cloud-functions-2nd-gen"
latest_feature_date: "2023-04-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/docs/eventarc"
  - "https://docs.cloud.google.com/firestore/docs/extend-with-functions-2nd-gen"
  - "https://docs.cloud.google.com/python/docs/reference/firestore/latest"
keywords:
  - "eventarc"
  - "events"
  - "functions"
  - "2nd"
  - "gen"
  - "firestore"
  - "can"
  - "emit"
---

# Eventarc events for Cloud Functions (2nd gen)

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

Firestore can emit Eventarc events for Cloud Functions (2nd gen).

## Extended Definition

Firestore can emit Eventarc events for Cloud Functions (2nd gen).

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/docs/eventarc](https://docs.cloud.google.com/firestore/docs/eventarc)
- [https://docs.cloud.google.com/firestore/docs/extend-with-functions-2nd-gen](https://docs.cloud.google.com/firestore/docs/extend-with-functions-2nd-gen)
- [https://docs.cloud.google.com/python/docs/reference/firestore/latest](https://docs.cloud.google.com/python/docs/reference/firestore/latest)

## Supporting Pages

### "Create event-driven architectures with Eventarc \_|\_ Firestore in Native\

- URL: [https://docs.cloud.google.com/firestore/docs/eventarc](https://docs.cloud.google.com/firestore/docs/eventarc)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The trigger can route events to a supported destination : Cloud Run functions (2nd gen) which supports the Cloud Client Libraries and the Firebase SDK Cloud Run Google Kubernetes Engine Workflows Eventarc offers a standardized solution to manage the flow of state changes, called events , between decoupled microservices.
- Cloud Run functions (1st gen) retrieves the trigger definition during the evaluation of the database write, and changes to the trigger during evaluation can affect if Firestore emits an event or not.
- Firestore triggers for Eventarc retrieve the trigger definition at the start of a database write operation and uses that definition to decide if Firestore should emit an event.
- Differences between Cloud Run functions 2nd gen and 1st gen Cloud Run functions (2nd gen) uses Eventarc events for all runtimes.

### "Extend Firestore with event triggers using Cloud Run functions \_|\_ Firestore\

- URL: [https://docs.cloud.google.com/firestore/docs/extend-with-functions-2nd-gen](https://docs.cloud.google.com/firestore/docs/extend-with-functions-2nd-gen)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- InvalidProtocolBufferException ; import io.cloudevents.CloudEvent ; import java.util.Map ; import java.util.concurrent.ExecutionException ; import java.util.logging.Logger ; public class FirebaseFirestoreReactive implements CloudEventsFunction { private static final Logger logger = Logger . getLogger ( FirebaseFirestoreReactive . class . getName ()); private final Firestore firestore ; private static final String FIELD KEY = "original" ; private static final String APPLICATION PROTOBUF = "application/protobuf" ; public FirebaseFirestoreReactive () { this ( FirestoreOptions . getDefaultInstance (). getService ()); } public FirebaseFirestoreReactive ( Firestore firestore ) { this . firestore = firestore ; } @Override public void accept ( CloudEvent event ) throws InvalidProtocolBufferException , InterruptedException , ExecutionException { if ( event . getData () == null ) { logger . warning ( "No data found in event!" ); return ; } if ( ! event . getDataContentType (). equals ( APPLICATION PROTOBUF )) { logger . warning ( String . format ( "Found unexpected content type %s, expected %s" , event . getDataContentType (), APPLICATION PROTOBUF )); return ; } DocumentEventData firestoreEventData = DocumentEventData . parseFrom ( event . getData (). toBytes ()); // Get the fields from the post-operation document snapshot // https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents#Document Map<String , Value > fields = firestoreEventData . getValue (). getFieldsMap (); if ( ! fields . containsKey ( FIELD KEY )) { logger . warning ( "Document does not contain original field" ); return ; } String currValue = fields . get ( FIELD KEY ). getStringValue (); String newValue = currValue . toUpperCase (); if ( currValue . equals ( newValue )) { logger . info ( "Value is already upper-case" ); return ; } // Retrieve the document name from the resource path: // projects/{project id}/databases/{database id}/documents/{document path} String affectedDoc = firestoreEventData . getValue () . getName () . split ( "/documents/" ) [ 1 ] . replace ( "\"" , "" ); logger . info ( String . format ( "Replacing values: %s --> %s" , currValue , newValue )); // Wait for the async call to complete this . firestore . document ( affectedDoc ) . set ( Map . of ( FIELD KEY , newValue ), SetOptions . merge ()) . get (); } } C# using CloudNative.CloudEvents ; using Google.Cloud.Firestore ; using Google.Cloud.Functions.Framework ; using Google.Cloud.Functions.Hosting ; using Google.Events.Protobuf.Cloud.Firestore.V1 ; using Microsoft.AspNetCore.Hosting ; using Microsoft.Extensions.DependencyInjection ; using Microsoft.Extensions.Logging ; using System.Collections.Generic ; using System.Threading ; using System.Threading.Tasks ; namespace FirestoreReactive ; public class Startup : FunctionsStartup { public override void ConfigureServices ( WebHostBuilderContext context , IServiceCollection services ) = > services .
- InvalidProtocolBufferException ; import io.cloudevents.CloudEvent ; import java.util.logging.Logger ; public class FirebaseFirestore implements CloudEventsFunction { private static final Logger logger = Logger . getLogger ( FirebaseFirestore . class . getName ()); @Override public void accept ( CloudEvent event ) throws InvalidProtocolBufferException { DocumentEventData firestoreEventData = DocumentEventData . parseFrom ( event . getData (). toBytes ()); logger . info ( "Function triggered by event on: " + event . getSource ()); logger . info ( "Event type: " + event . getType ()); logger . info ( "Old value:" ); logger . info ( firestoreEventData . getOldValue (). toString ()); logger . info ( "New value:" ); logger . info ( firestoreEventData . getValue (). toString ()); } } C# using CloudNative.CloudEvents ; using Google.Cloud.Functions.Framework ; using Google.Events.Protobuf.Cloud.Firestore.V1 ; using Microsoft.Extensions.Logging ; using System.Collections.Generic ; using System.Linq ; using System.Threading ; using System.Threading.Tasks ; namespace FirebaseFirestore ; public class Function : ICloudEventFunction<DocumentEventData> { private readonly ILogger logger ; public Function ( ILogger<Function> logger ) = > logger = logger ; public Task HandleAsync ( CloudEvent cloudEvent , DocumentEventData data , CancellationToken cancellationToken ) { logger .
- ParseFromString ( cloud event . data ) path parts = firestore payload . value . name . split ( "/" ) separator idx = path parts . index ( "documents" ) collection path = path parts [ separator idx + 1 ] document path = "/" . join ( path parts [( separator idx + 2 ) :]) print ( f "Collection path: { collection path } " ) print ( f "Document path: { document path } " ) affected doc = client . collection ( collection path ) . document ( document path ) cur value = firestore payload . value . fields [ "original" ] . string value new value = cur value . upper () if cur value != new value : print ( f "Replacing value: { cur value } --> { new value } " ) affected doc . set ({ "original" : new value }) else : Value is already upper-case Don't perform a second write (which can trigger an infinite loop) print ( "Value is already upper-case." ) Go // Package upper contains a Firestore Cloud Function. package upper import ( "context" "errors" "fmt" "log" "os" "strings" "cloud.google.com/go/firestore" firebase "firebase.google.com/go/v4" "github.com/GoogleCloudPlatform/functions-framework-go/functions" "github.com/cloudevents/sdk-go/v2/event" "github.com/googleapis/google-cloudevents-go/cloud/firestoredata" "google.golang.org/protobuf/proto" ) // set the GOOGLE CLOUD PROJECT environment variable when deploying. var projectID = os .
- Example 1: Hello Firestore function The following sample prints the fields of a triggering Firestore event: Node.js / Cloud Event Function triggered by a change to a Firestore document. / const functions = require ( '@google-cloud/functions-framework' ); const protobuf = require ( 'protobufjs' ); functions . cloudEvent ( 'helloFirestore' , async cloudEvent = > { console . log ( Function triggered by event on: ${ cloudEvent . source } ); console . log ( Event type: ${ cloudEvent . type } ); console . log ( 'Loading protos...' ); const root = await protobuf . load ( 'data.proto' ); const DocumentEventData = root . lookupType ( 'google.events.cloud.firestore.v1.DocumentEventData' ); console . log ( 'Decoding data...' ); const firestoreReceived = DocumentEventData . decode ( cloudEvent . data ); console . log ( '\nOld value:' ); console . log ( JSON . stringify ( firestoreReceived . oldValue , null , 2 )); console . log ( '\nNew value:' ); console . log ( JSON . stringify ( firestoreReceived . value , null , 2 )); }); Python from cloudevents.http import CloudEvent import functions framework from google.events.cloud import firestore @functions framework . cloud event def hello firestore ( cloud event : CloudEvent ) - > None : """Triggers by a change to a Firestore document.

### Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/firestore/latest](https://docs.cloud.google.com/python/docs/reference/firestore/latest)
- Source ID: `site-python-reference`
- Final score: 55
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This configures handling of logging events (at level logging.DEBUG or higher) from this library in a default manner, emitting the logged messages in a structured format.
- Code-Based Examples Configuring a handler for all Google-based loggers import logging from google.cloud import library v1 base logger = logging.getLogger("google") base logger.addHandler(logging.StreamHandler()) base logger.setLevel(logging.DEBUG) Configuring a handler for a specific Google module (for a client library called library v1 ): import logging from google.cloud import library v1 base logger = logging.getLogger("google.cloud.library v1") base logger.addHandler(logging.StreamHandler()) base logger.setLevel(logging.DEBUG) Logging details Regardless of which of the mechanisms above you use to configure logging for this library, by default logging events are not propagated up to the root logger from the google-level logger.
- The Google-specific logging configurations (default handlers for environment-based configuration; not propagating logging events to the root logger) get executed the first time any client library is instantiated in your application, and only if the affected loggers have not been previously configured. (This is the reason for 2.i. above.) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Version latest keyboard arrow down 2.23.0 (latest) 2.22.0 2.21.0 2.20.2 2.19.0 2.18.0 2.17.2 2.16.1 2.15.0 2.14.0 2.13.1 2.12.0 2.11.1 2.10.1 2.9.1 2.8.0 2.7.3 2.6.1 2.5.3 2.4.0 2.3.4 2.2.0 2.1.3 2.0.2 1.9.2 1.8.1 1.7.0 1.6.2 1.5.0 1.4.0 1.3.0 Python Client for Cloud Firestore API Cloud Firestore API : is a fully-managed NoSQL document database for mobile, web, and server development from Firebase and Google Cloud Platform.

