---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.522Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Committed use discounts"
feature_slug: "committed-use-discounts"
latest_feature_date: "2021-07-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/resources"
  - "https://docs.cloud.google.com/run/docs/tutorials/eventarc"
  - "https://docs.cloud.google.com/run/docs/tutorials/pubsub"
keywords:
  - "discounted"
  - "receive"
  - "committed"
  - "discounts"
  - "workloads"
---

# Committed use discounts

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Committed use discounts let Cloud Run workloads receive discounted pricing through committed usage.

## Extended Definition

Committed use discounts let Cloud Run workloads receive discounted pricing through committed usage.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/resources](https://docs.cloud.google.com/run/docs/resources)
- [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc)
- [https://docs.cloud.google.com/run/docs/tutorials/pubsub](https://docs.cloud.google.com/run/docs/tutorials/pubsub)

## Supporting Pages

### "Use Eventarc to receive events from Cloud Storage \_|\_ Cloud Run \_|\_\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc)
- Source ID: `site-docs-root-2`
- Final score: 71
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Grant the Eventarc Event Receiver role ( roles/eventarc.eventReceiver ) on the project to the Compute Engine default service account so that the Eventarc trigger can receive events from event providers. gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com \ --role = roles/eventarc.eventReceiver Optional role for the Pub/Sub service agent If you enabled the Cloud Pub/Sub service agent on or before April 8, 2021, to support authenticated Pub/Sub push requests, grant the Service Account Token Creator role ( roles/iam.serviceAccountTokenCreator ) to the service agent.
- Home Documentation Application hosting Cloud Run Guides Send feedback Use Eventarc to receive events from Cloud Storage Stay organized with collections Save and categorize content based on your preferences.
- This tutorial shows you how to deploy a containerized application using an authenticated Cloud Run service that receives events through Eventarc.
- Success: You deployed a containerized application using an authenticated Cloud Run service that receives events through Eventarc.

### Resources \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/resources](https://docs.cloud.google.com/run/docs/resources)
- Source ID: `site-api-reference`
- Final score: 69
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Compute flexible committed use discounts Flexible CUD details for Cloud Run.

### Use Pub/Sub with Cloud Run tutorial \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/tutorials/pubsub](https://docs.cloud.google.com/run/docs/tutorials/pubsub)
- Source ID: `site-docs-root`
- Final score: 51
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Buffer . from ( pubSubMessage . data , 'base64' ). toString (). trim () : 'World' ; console . log ( Hello ${ name } ! ); res . status ( 204 ). send (); }); Python @app . route ( "/" , methods = [ "POST" ]) def index (): """Receive and parse Pub/Sub messages.""" envelope = request . get json () if not envelope : msg = "no Pub/Sub message received" print ( f "error: { msg } " ) return f "Bad Request: { msg } " , 400 if not isinstance ( envelope , dict ) or "message" not in envelope : msg = "invalid Pub/Sub message format" print ( f "error: { msg } " ) return f "Bad Request: { msg } " , 400 pubsub message = envelope [ "message" ] name = "World" if isinstance ( pubsub message , dict ) and "data" in pubsub message : name = base64 . b64decode ( pubsub message [ "data" ]) . decode ( "utf-8" ) . strip () print ( f "Hello { name } !" ) return ( "" , 204 ) Go // WrappedMessage is the payload of a Pub/Sub event. // // For more information about receiving messages from a Pub/Sub event // see: https://cloud.google.com/pubsub/docs/push#receive push type WrappedMessage struct { Message struct { Data [] byte json:"data,omitempty" ID string json:"id" } json:"message" Subscription string json:"subscription" } // HelloPubSub receives and processes a Pub/Sub push message. func HelloPubSub ( w http .
- Node.js app . post ( '/' , ( req , res ) = > { if ( ! req . body ) { const msg = 'no Pub/Sub message received' ; console . error ( error: ${ msg } ); res . status ( 400 ). send ( Bad Request: ${ msg } ); return ; } if ( ! req . body . message ) { const msg = 'invalid Pub/Sub message format' ; console . error ( error: ${ msg } ); res . status ( 400 ). send ( Bad Request: ${ msg } ); return ; } const pubSubMessage = req . body . message ; const name = pubSubMessage . data ?
- POST ) public ResponseEntity<String> receiveMessage ( @RequestBody Body body ) { // Get PubSub message from request body.
- New customers also get $300 in free credits to run, test, and deploy workloads.

