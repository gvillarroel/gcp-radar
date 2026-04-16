---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:18.946Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Deployment restriction by product generation"
feature_slug: "deployment-restriction-by-product-generation"
latest_feature_date: "2023-05-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/functions/docs/securing/gen-org-policy"
  - "https://docs.cloud.google.com/functions/docs/securing/overview"
  - "https://docs.cloud.google.com/functions/docs/running/direct-vpc"
keywords:
  - "deployment"
  - "restriction"
  - "generation"
  - "run"
  - "functions"
  - "supports"
  - "restricting"
  - "deployments"
---

# Deployment restriction by product generation

Product: Cloud Run functions
Coverage: LOW

## Step 02 Summary

Cloud Run functions supports restricting new deployments by 1st gen or 2nd gen product generation.

## Extended Definition

Cloud Run functions supports restricting new deployments by 1st gen or 2nd gen product generation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/securing/gen-org-policy](https://docs.cloud.google.com/functions/docs/securing/gen-org-policy)
- [https://docs.cloud.google.com/functions/docs/securing/overview](https://docs.cloud.google.com/functions/docs/securing/overview)
- [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)

## Supporting Pages

### "Restrict new deployments by product version \_|\_ Cloud Run functions \_\

- URL: [https://docs.cloud.google.com/functions/docs/securing/gen-org-policy](https://docs.cloud.google.com/functions/docs/securing/gen-org-policy)
- Source ID: `site-iam-reference`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create a policy that restricts new Cloud Run functions, run the following command: gcloud resource-manager org-policies \ allow cloudfunctions.restrictAllowedGenerations \ --organization = ORGANIZATION NUMBER VERSION where ORGANIZATION NUMBER is the number of the organization to which you want to apply the policy, and VERSION is the Cloud Run functions version that must be used for new deployments.
- If your organization wants to enforce a restriction specifying that only one of the versions can be used to deploy new functions, you can define a new organization policy with the constraint constraints/cloudfunctions.restrictAllowedGenerations .
- Use a policy to set and enforce restrictions You can use Google Cloud CLI to create a policy restricting new Cloud Run functions from being deployed for the first time within a given organization to the specified environment.
- Restrict new deployments by product version Note: In this document, "Cloud Run functions (2nd gen)" refers to Cloud Run functions created with the Google Cloud Functions v2 APIs.

### "Configure Direct VPC egress for 2nd gen functions \_|\_ Cloud Run functions\

- URL: [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- Source ID: `site-iam-reference`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- BACKEND URL ; if ( ! backendUrl ) { console . error ( 'BACKEND URL environment variable not set.' ); res . status ( 500 ). send ( 'BACKEND URL not configured.' ); return ; } try { const metadataServerURL = 'http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/identity?audience=' ; const tokenUrl = metadataServerURL + backendUrl ; const tokenResponse = await axios . get ( tokenUrl , { headers : { 'Metadata-Flavor' : 'Google' , }, }); const token = tokenResponse . data ; const response = await axios . get ( backendUrl , { headers : { Authorization : bearer ${ token } , }, }); res . status ( 200 ). send ( Response from backend: ${ response . data } ); } catch ( error ) { console . error ( Error calling backend service: ${ error . message } ); res . status ( 500 ). send ( Error calling backend: ${ error . message } ); } }; functions . http ( 'callVPCService' , callVPCService ); Deploy the function with Direct VPC egress configured to route all traffic to your default VPC network: gcloud functions deploy my-2ndgen-function \ --source . \ --runtime nodejs20 \ --trigger-http \ --entry-point callVPCService \ --network = default \ --subnet = default \ --direct-vpc-egress = all \ --region = REGION \ --allow-unauthenticated \ --set-env-vars BACKEND URL = BACKEND URL Replace the following: REGION : the region where you deployed the backend service.
- Configure Direct VPC egress Configure Direct VPC egress for new or existing 2nd gen functions. gcloud To configure Direct VPC egress when you deploy a function, use the gcloud functions deploy command with flags for your network settings. gcloud functions deploy FUNCTION NAME \ --source . \ --runtime RUNTIME \ --trigger-http \ --region REGION \ --network = NETWORK \ --subnet = SUBNET \ --network-tags = NETWORK TAG NAMES \ --direct-vpc-egress = EGRESS SETTING Replace the following: FUNCTION NAME : the name of your function.
- Create and deploy the function Create a new directory for the function and change into it: cd .. mkdir dvpc-function cd dvpc-function Create a package.json file with the following content: { "name" : "sample-http" , "version" : "0.0.1" , "dependencies" : { "axios" : "0.21.1" , "@google-cloud/functions-framework" : "^3.0.0" } } Create an index.js file with the following content.
- Using the Cloud Run functions (2nd gen) Direct VPC egress example as a starting point, update the following fields: service config.direct vpc network interface.network : the name of your VPC network. service config.direct vpc network interface.subnetwork : the name of your VPC subnetwork. service config.direct vpc egress : which traffic to send to the VPC network.

### Security overview \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/securing/overview](https://docs.cloud.google.com/functions/docs/securing/overview)
- Source ID: `site-iam-reference`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For details on configuring security for functions created using the Cloud Functions V2 API (for example, using gcloud functions , the REST API, or Terraform), see the following guides: Roles Function Identity Identity and Access Management (IAM) Authenticate for invocation Protect your data with CMEK Restrict new deployments by product version Custom constraints Execution environment security Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To learn how to configure security for functions created with the Cloud Functions v1 API for 1st gen functions with a cloudfunctions.net URL endpoint, see Secure your Cloud Run function .
- Home Documentation Application hosting Cloud Run Cloud Run functions Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

