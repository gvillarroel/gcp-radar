---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:18.925Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Serverless VPC Access connector updates"
feature_slug: "serverless-vpc-access-connector-updates"
latest_feature_date: "2024-01-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/functions/docs/running/direct-vpc"
  - "https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse"
  - "https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/LogType"
keywords:
  - "serverless"
  - "vpc"
  - "access"
  - "connector"
  - "updates"
  - "run"
  - "functions"
  - "supports"
---

# Serverless VPC Access connector updates

Product: Cloud Run functions
Coverage: LOW

## Step 02 Summary

Cloud Run functions supports updating Serverless VPC Access connectors, including instance type and scaling limits.

## Extended Definition

Cloud Run functions supports updating Serverless VPC Access connectors, including instance type and scaling limits.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse)
- [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/LogType](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/LogType)

## Supporting Pages

### "Configure Direct VPC egress for 2nd gen functions \_|\_ Cloud Run functions\

- URL: [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- Source ID: `site-iam-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- You can't use Direct VPC egress and Serverless VPC Access connectors at the same time.
- BACKEND URL ; if ( ! backendUrl ) { console . error ( 'BACKEND URL environment variable not set.' ); res . status ( 500 ). send ( 'BACKEND URL not configured.' ); return ; } try { const metadataServerURL = 'http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/identity?audience=' ; const tokenUrl = metadataServerURL + backendUrl ; const tokenResponse = await axios . get ( tokenUrl , { headers : { 'Metadata-Flavor' : 'Google' , }, }); const token = tokenResponse . data ; const response = await axios . get ( backendUrl , { headers : { Authorization : bearer ${ token } , }, }); res . status ( 200 ). send ( Response from backend: ${ response . data } ); } catch ( error ) { console . error ( Error calling backend service: ${ error . message } ); res . status ( 500 ). send ( Error calling backend: ${ error . message } ); } }; functions . http ( 'callVPCService' , callVPCService ); Deploy the function with Direct VPC egress configured to route all traffic to your default VPC network: gcloud functions deploy my-2ndgen-function \ --source . \ --runtime nodejs20 \ --trigger-http \ --entry-point callVPCService \ --network = default \ --subnet = default \ --direct-vpc-egress = all \ --region = REGION \ --allow-unauthenticated \ --set-env-vars BACKEND URL = BACKEND URL Replace the following: REGION : the region where you deployed the backend service.
- Configure Direct VPC egress Configure Direct VPC egress for new or existing 2nd gen functions. gcloud To configure Direct VPC egress when you deploy a function, use the gcloud functions deploy command with flags for your network settings. gcloud functions deploy FUNCTION NAME \ --source . \ --runtime RUNTIME \ --trigger-http \ --region REGION \ --network = NETWORK \ --subnet = SUBNET \ --network-tags = NETWORK TAG NAMES \ --direct-vpc-egress = EGRESS SETTING Replace the following: FUNCTION NAME : the name of your function.
- Create and deploy the function Create a new directory for the function and change into it: cd .. mkdir dvpc-function cd dvpc-function Create a package.json file with the following content: { "name" : "sample-http" , "version" : "0.0.1" , "dependencies" : { "axios" : "0.21.1" , "@google-cloud/functions-framework" : "^3.0.0" } } Create an index.js file with the following content.

### ListOperationsResponse \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse)
- Source ID: `site-docs-reference-2`
- Final score: 36
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting Cloud Run Cloud Run functions Reference Send feedback ListOperationsResponse Stay organized with collections Save and categorize content based on your preferences.

### LogType \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/LogType](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/LogType)
- Source ID: `site-docs-reference-2`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting Cloud Run Cloud Run functions Reference Send feedback LogType Stay organized with collections Save and categorize content based on your preferences.

