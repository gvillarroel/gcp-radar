---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:18.940Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Node.js 20 runtime"
feature_slug: "node-js-20-runtime"
latest_feature_date: "2023-06-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/functions/docs/managing"
  - "https://docs.cloud.google.com/functions/docs/building"
  - "https://docs.cloud.google.com/functions/docs/running/direct-vpc"
keywords:
  - "node"
  - "js"
  - "20"
  - "runtime"
  - "run"
  - "functions"
  - "supports"
---

# Node.js 20 runtime

Product: Cloud Run functions
Coverage: LOW

## Step 02 Summary

Cloud Run functions supports the Node.js 20 runtime; Cloud Run functions supports the Node.js 20 runtime.

## Extended Definition

Cloud Run functions supports the Node.js 20 runtime; Cloud Run functions supports the Node.js 20 runtime.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing)
- [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)
- [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)

## Supporting Pages

### Manage functions \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing)
- Source ID: `site-iam-reference`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, you can update an existing function using either gcloud functions or gcloud run commands: gcloud functions gcloud functions deploy FUNCTION NAME \ --runtime=nodejs24 \ --source= . \ --entry-point= ENTRYPOINT --trigger-http gcloud run gcloud run deploy FUNCTION NAME \ --source= . \ --function= ENTRYPOINT --base-image=google-22-full/nodejs24 Detach The gcloud functions detach command lets you detach a Cloud Functions v2 function from its existing API environment.
- During the detach operation, Cloud Run functions modifies the triggers attached to functions configured with no retry on failure , to ensure that the underlying Pub/Sub topic makes a maximum of five delivery attempts.
- Functions created using the Cloud Functions v2 API (for example, by using gcloud functions , the REST API, or Terraform) can be managed with the Cloud Run Admin API as well as the Cloud Functions v2 API.
- Note: If you created a Cloud Run function using gcloud run commands or the Cloud Run Admin API, you can't manage that function with gcloud functions commands or the Cloud Functions v2 API.

### Build process overview \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)
- Source ID: `site-iam-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- You can optionally use a private pool , which you specify using the --build-worker-pool flag. gcloud functions deploy FUNCTION NAME \ -- gen2 \ -- region = REGION \ -- project = PROJECT ID \ -- runtime = RUNTIME \ -- entry - point = CODE ENTRYPOINT \ -- build - service - account = projects / PROJECT ID / serviceAccounts / SA EMAIL \ -- memory = 256 Mi \ -- trigger - http \ -- source = .
- To stop using a given private pool and instead use the default Cloud Build pool, use the --clear-build-worker-pool flag when re-deploying. gcloud functions deploy FUNCTION NAME \ --runtime RUNTIME \ --clear-build-worker-pool [ FLAGS... ] Replace FUNCTION NAME with the name of the function and RUNTIME with the runtime you are using.
- Deploy your function to build using a private pool: gcloud functions deploy FUNCTION NAME \ --runtime RUNTIME \ --build-worker-pool PRIVATE POOL NAME [ FLAGS... ] Replace FUNCTION NAME with the name of the function, RUNTIME with the runtime you are using, and PRIVATE POOL NAME with the name of your pool.
- RUNTIME : The runtime ID of a supported runtime version to run your function, for example, nodejs18 .

### "Configure Direct VPC egress for 2nd gen functions \_|\_ Cloud Run functions\

- URL: [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- Source ID: `site-iam-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- BACKEND URL ; if ( ! backendUrl ) { console . error ( 'BACKEND URL environment variable not set.' ); res . status ( 500 ). send ( 'BACKEND URL not configured.' ); return ; } try { const metadataServerURL = 'http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/identity?audience=' ; const tokenUrl = metadataServerURL + backendUrl ; const tokenResponse = await axios . get ( tokenUrl , { headers : { 'Metadata-Flavor' : 'Google' , }, }); const token = tokenResponse . data ; const response = await axios . get ( backendUrl , { headers : { Authorization : bearer ${ token } , }, }); res . status ( 200 ). send ( Response from backend: ${ response . data } ); } catch ( error ) { console . error ( Error calling backend service: ${ error . message } ); res . status ( 500 ). send ( Error calling backend: ${ error . message } ); } }; functions . http ( 'callVPCService' , callVPCService ); Deploy the function with Direct VPC egress configured to route all traffic to your default VPC network: gcloud functions deploy my-2ndgen-function \ --source . \ --runtime nodejs20 \ --trigger-http \ --entry-point callVPCService \ --network = default \ --subnet = default \ --direct-vpc-egress = all \ --region = REGION \ --allow-unauthenticated \ --set-env-vars BACKEND URL = BACKEND URL Replace the following: REGION : the region where you deployed the backend service.
- Configure Direct VPC egress Configure Direct VPC egress for new or existing 2nd gen functions. gcloud To configure Direct VPC egress when you deploy a function, use the gcloud functions deploy command with flags for your network settings. gcloud functions deploy FUNCTION NAME \ --source . \ --runtime RUNTIME \ --trigger-http \ --region REGION \ --network = NETWORK \ --subnet = SUBNET \ --network-tags = NETWORK TAG NAMES \ --direct-vpc-egress = EGRESS SETTING Replace the following: FUNCTION NAME : the name of your function.
- RUNTIME : the runtime for your function, for example, nodejs20 .
- Create the internal backend service Create a new directory for the backend service and change into it: mkdir backend-service cd backend-service Create a package.json file with the following content: { "name" : "backend-service" , "version" : "1.0.0" , "description" : "" , "scripts" : { "start" : "node index.js" }, "dependencies" : { "express" : "^4.18.1" } } Create an index.js file with the following content: const express = require ( 'express' ); const app = express (); app . get ( '/' , ( req , res ) = > { res . send ( "hello world" ); }); const port = parseInt ( process . env .

