---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:18.953Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Customer-managed encryption keys"
feature_slug: "customer-managed-encryption-keys"
latest_feature_date: "2023-03-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/functions/docs/securing/cmek"
  - "https://docs.cloud.google.com/functions/docs/managing"
  - "https://docs.cloud.google.com/functions/docs/running/direct-vpc"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "run"
  - "functions"
  - "supports"
  - "2nd"
---

# Customer-managed encryption keys

Product: Cloud Run functions
Coverage: LOW

## Step 02 Summary

Cloud Run functions supports customer-managed encryption keys for 2nd gen functions; Cloud Run functions supports customer-managed encryption keys.

## Extended Definition

Cloud Run functions supports customer-managed encryption keys for 2nd gen functions; Cloud Run functions supports customer-managed encryption keys.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek)
- [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing)
- [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)

## Supporting Pages

### "Configure Direct VPC egress for 2nd gen functions \_|\_ Cloud Run functions\

- URL: [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- Source ID: `site-iam-reference`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- BACKEND URL ; if ( ! backendUrl ) { console . error ( 'BACKEND URL environment variable not set.' ); res . status ( 500 ). send ( 'BACKEND URL not configured.' ); return ; } try { const metadataServerURL = 'http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/identity?audience=' ; const tokenUrl = metadataServerURL + backendUrl ; const tokenResponse = await axios . get ( tokenUrl , { headers : { 'Metadata-Flavor' : 'Google' , }, }); const token = tokenResponse . data ; const response = await axios . get ( backendUrl , { headers : { Authorization : bearer ${ token } , }, }); res . status ( 200 ). send ( Response from backend: ${ response . data } ); } catch ( error ) { console . error ( Error calling backend service: ${ error . message } ); res . status ( 500 ). send ( Error calling backend: ${ error . message } ); } }; functions . http ( 'callVPCService' , callVPCService ); Deploy the function with Direct VPC egress configured to route all traffic to your default VPC network: gcloud functions deploy my-2ndgen-function \ --source . \ --runtime nodejs20 \ --trigger-http \ --entry-point callVPCService \ --network = default \ --subnet = default \ --direct-vpc-egress = all \ --region = REGION \ --allow-unauthenticated \ --set-env-vars BACKEND URL = BACKEND URL Replace the following: REGION : the region where you deployed the backend service.
- Configure Direct VPC egress Configure Direct VPC egress for new or existing 2nd gen functions. gcloud To configure Direct VPC egress when you deploy a function, use the gcloud functions deploy command with flags for your network settings. gcloud functions deploy FUNCTION NAME \ --source . \ --runtime RUNTIME \ --trigger-http \ --region REGION \ --network = NETWORK \ --subnet = SUBNET \ --network-tags = NETWORK TAG NAMES \ --direct-vpc-egress = EGRESS SETTING Replace the following: FUNCTION NAME : the name of your function.
- Create and deploy the function Create a new directory for the function and change into it: cd .. mkdir dvpc-function cd dvpc-function Create a package.json file with the following content: { "name" : "sample-http" , "version" : "0.0.1" , "dependencies" : { "axios" : "0.21.1" , "@google-cloud/functions-framework" : "^3.0.0" } } Create an index.js file with the following content.
- Using the Cloud Run functions (2nd gen) Direct VPC egress example as a starting point, update the following fields: service config.direct vpc network interface.network : the name of your VPC network. service config.direct vpc network interface.subnetwork : the name of your VPC subnetwork. service config.direct vpc egress : which traffic to send to the VPC network.

### "Protect your data with CMEK \_|\_ Cloud Run functions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek)
- Source ID: `site-iam-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Protect your data with CMEK This page provides supplemental information for protecting your data with customer-managed encryption keys (CMEKs) for functions created using gcloud functions commands or the Cloud Functions v2 API .
- Cloud Run functions CMEK protection only applies to Google-managed Cloud Run functions resources; you are responsible for protecting data and resources managed by you, such as your source code repositories, event channels that live in the customer project, or any services used by your functions.
- To learn how to create a key, see Creating symmetric encryption keys .
- Granting service accounts access to the key For all functions, you must grant the following service accounts access to the key: Cloud Run functions service agent ( service- PROJECT NUMBER @gcf-admin-robot.iam.gserviceaccount.com ) Artifact Registry service agent ( service- PROJECT NUMBER @gcp-sa-artifactregistry.iam.gserviceaccount.com ) Cloud Storage service agent ( service- PROJECT NUMBER @gs-project-accounts.iam.gserviceaccount.com ) Cloud Run service agent ( service- PROJECT NUMBER @serverless-robot-prod.iam.gserviceaccount.com ) Eventarc service agent ( service- PROJECT NUMBER @gcp-sa-eventarc.iam.gserviceaccount.com ) To grant these service accounts access to the key, add each service account as a principal of the key and then grant the service account the Cloud KMS CryptoKey Encrypter/Decrypter role: Console Go to the Cloud Key Management Service page in the Google Cloud console: Go to the Cloud KMS page Click the name of the key ring that contains the chosen key.

### Manage functions \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing)
- Source ID: `site-iam-reference`
- Final score: 37
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you want to use a customer-managed encryption key for the DLQ topic, you can update CMEK for the topic after detach.
- Functions created using the Cloud Functions v2 API (for example, by using gcloud functions , the REST API, or Terraform) can be managed with the Cloud Run Admin API as well as the Cloud Functions v2 API.
- For example, you can update an existing function using either gcloud functions or gcloud run commands: gcloud functions gcloud functions deploy FUNCTION NAME \ --runtime=nodejs24 \ --source= . \ --entry-point= ENTRYPOINT --trigger-http gcloud run gcloud run deploy FUNCTION NAME \ --source= . \ --function= ENTRYPOINT --base-image=google-22-full/nodejs24 Detach The gcloud functions detach command lets you detach a Cloud Functions v2 function from its existing API environment.
- During the detach operation, Cloud Run functions modifies the triggers attached to functions configured with no retry on failure , to ensure that the underlying Pub/Sub topic makes a maximum of five delivery attempts.

