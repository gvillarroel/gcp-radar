---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:18.950Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Yarn 2 support for private Node.js modules"
feature_slug: "yarn-2-support-for-private-node-js-modules"
latest_feature_date: "2023-04-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/functions/docs/running/direct-vpc"
  - "https://docs.cloud.google.com/functions/docs/securing/cmek"
  - "https://docs.cloud.google.com/functions/docs/securing/managing-access-iam"
keywords:
  - "yarn"
  - "private"
  - "node"
  - "js"
  - "modules"
  - "run"
  - "functions"
  - "supports"
---

# Yarn 2 support for private Node.js modules

Product: Cloud Run functions
Coverage: LOW

## Step 02 Summary

Cloud Run functions supports using the Yarn 2 package manager with private Node.js modules.

## Extended Definition

Cloud Run functions supports using the Yarn 2 package manager with private Node.js modules.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek)
- [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam)

## Supporting Pages

### "Protect your data with CMEK \_|\_ Cloud Run functions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek)
- Source ID: `site-iam-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Granting service accounts access to the key For all functions, you must grant the following service accounts access to the key: Cloud Run functions service agent ( service- PROJECT NUMBER @gcf-admin-robot.iam.gserviceaccount.com ) Artifact Registry service agent ( service- PROJECT NUMBER @gcp-sa-artifactregistry.iam.gserviceaccount.com ) Cloud Storage service agent ( service- PROJECT NUMBER @gs-project-accounts.iam.gserviceaccount.com ) Cloud Run service agent ( service- PROJECT NUMBER @serverless-robot-prod.iam.gserviceaccount.com ) Eventarc service agent ( service- PROJECT NUMBER @gcp-sa-eventarc.iam.gserviceaccount.com ) To grant these service accounts access to the key, add each service account as a principal of the key and then grant the service account the Cloud KMS CryptoKey Encrypter/Decrypter role: Console Go to the Cloud Key Management Service page in the Google Cloud console: Go to the Cloud KMS page Click the name of the key ring that contains the chosen key.
- Cloud Run functions CMEK protection only applies to Google-managed Cloud Run functions resources; you are responsible for protecting data and resources managed by you, such as your source code repositories, event channels that live in the customer project, or any services used by your functions.
- Protect your data with CMEK This page provides supplemental information for protecting your data with customer-managed encryption keys (CMEKs) for functions created using gcloud functions commands or the Cloud Functions v2 API .
- Enabling CMEK for a function After setting up an Artifact Registry repository with CMEK enabled and granting Cloud Run functions access to your key, you're ready to enable CMEK for your function.

### Authorize access with IAM \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam)
- Source ID: `site-iam-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Removing roles from principals Use the gcloud functions remove-iam-policy-binding command: gcloud functions remove-iam-policy-binding FUNCTION NAME \ --member = PRINCIPAL ID \ --role = ROLE where FUNCTION NAME is the function name, PRINCIPAL ID is the email address that identifies the service account, prefaced with serviceAccount: , and ROLE is the role.
- Bulk addition of principals Create an IAM policy named, for example, policy.json : { "bindings" : [ { "role" : ROLE , "members" : [ PRINCIPAL ID ] } ] } Use the gcloud functions set-iam-policy command: gcloud functions set-iam-policy FUNCTION NAME policy.json For a list of acceptable sources for PRINCIPAL ID , see Principal identifiers .
- Adding principals and granting roles Use the gcloud functions add-iam-policy-binding command: gcloud functions add-iam-policy-binding FUNCTION NAME \ --member = PRINCIPAL ID \ --role = ROLE where FUNCTION NAME is the function name, PRINCIPAL ID is the principal's identifier, usually an email, and ROLE is the role.
- Viewing principals To view principals, use the gcloud functions get-iam-policy command: gcloud functions get-iam-policy FUNCTION NAME Allowing unauthenticated HTTP function invocation Note: If you created functions using the Cloud Run Admin API, see the Allowing public (unauthenticated) access guide instead.

### "Configure Direct VPC egress for 2nd gen functions \_|\_ Cloud Run functions\

- URL: [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- Source ID: `site-iam-reference`
- Final score: 29
- Re-rank relevance: N/A

Evidence snippets:
- BACKEND URL ; if ( ! backendUrl ) { console . error ( 'BACKEND URL environment variable not set.' ); res . status ( 500 ). send ( 'BACKEND URL not configured.' ); return ; } try { const metadataServerURL = 'http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/identity?audience=' ; const tokenUrl = metadataServerURL + backendUrl ; const tokenResponse = await axios . get ( tokenUrl , { headers : { 'Metadata-Flavor' : 'Google' , }, }); const token = tokenResponse . data ; const response = await axios . get ( backendUrl , { headers : { Authorization : bearer ${ token } , }, }); res . status ( 200 ). send ( Response from backend: ${ response . data } ); } catch ( error ) { console . error ( Error calling backend service: ${ error . message } ); res . status ( 500 ). send ( Error calling backend: ${ error . message } ); } }; functions . http ( 'callVPCService' , callVPCService ); Deploy the function with Direct VPC egress configured to route all traffic to your default VPC network: gcloud functions deploy my-2ndgen-function \ --source . \ --runtime nodejs20 \ --trigger-http \ --entry-point callVPCService \ --network = default \ --subnet = default \ --direct-vpc-egress = all \ --region = REGION \ --allow-unauthenticated \ --set-env-vars BACKEND URL = BACKEND URL Replace the following: REGION : the region where you deployed the backend service.
- Create the internal backend service Create a new directory for the backend service and change into it: mkdir backend-service cd backend-service Create a package.json file with the following content: { "name" : "backend-service" , "version" : "1.0.0" , "description" : "" , "scripts" : { "start" : "node index.js" }, "dependencies" : { "express" : "^4.18.1" } } Create an index.js file with the following content: const express = require ( 'express' ); const app = express (); app . get ( '/' , ( req , res ) = > { res . send ( "hello world" ); }); const port = parseInt ( process . env .
- Configure Direct VPC egress Configure Direct VPC egress for new or existing 2nd gen functions. gcloud To configure Direct VPC egress when you deploy a function, use the gcloud functions deploy command with flags for your network settings. gcloud functions deploy FUNCTION NAME \ --source . \ --runtime RUNTIME \ --trigger-http \ --region REGION \ --network = NETWORK \ --subnet = SUBNET \ --network-tags = NETWORK TAG NAMES \ --direct-vpc-egress = EGRESS SETTING Replace the following: FUNCTION NAME : the name of your function.
- Create and deploy the function Create a new directory for the function and change into it: cd .. mkdir dvpc-function cd dvpc-function Create a package.json file with the following content: { "name" : "sample-http" , "version" : "0.0.1" , "dependencies" : { "axios" : "0.21.1" , "@google-cloud/functions-framework" : "^3.0.0" } } Create an index.js file with the following content.

