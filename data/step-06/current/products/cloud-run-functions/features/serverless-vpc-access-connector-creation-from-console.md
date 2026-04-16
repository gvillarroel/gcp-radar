---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:18.943Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Serverless VPC Access connector creation from console"
feature_slug: "serverless-vpc-access-connector-creation-from-console"
latest_feature_date: "2023-06-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/functions/docs/troubleshooting"
  - "https://docs.cloud.google.com/functions/docs/concepts/iam"
  - "https://docs.cloud.google.com/functions/docs/running/direct-vpc"
keywords:
  - "serverless"
  - "vpc"
  - "access"
  - "connector"
  - "creation"
  - "console"
  - "run"
  - "functions"
---

# Serverless VPC Access connector creation from console

Product: Cloud Run functions
Coverage: MEDIUM

## Step 02 Summary

Cloud Run functions lets users create and configure a Serverless VPC Access connector directly from the Google Cloud console create form.

## Extended Definition

Cloud Run functions lets users create and configure a Serverless VPC Access connector directly from the Google Cloud console create form.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)
- [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam)
- [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)

## Supporting Pages

### Troubleshoot Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)
- Source ID: `site-iam-reference`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Serverless VPC Access connector is not ready or does not exist If a Serverless VPC Access connector fails, it might not be using a /28 subnet mask dedicated to the connector as required .
- If the connector is created in the host project, ensure that the Serverless VPC Access User role is granted on Cloud Run Service Agent in your host project.
- The error message Problem connecting to VPC Connector projects/xxxxx/locations/ REGION /connectors/xxxx: Serverless VPC Access is not found.
- The error message Console ERROR: (gcloud.functions.deploy) ResponseError: status=[403], code=[Ok], message=[Validation failed for trigger projects/ PROJECT ID /locations/ LOCATION /triggers/ FUNCTION NAME - EVENTARC ID : Permission "iam.serviceAccounts.ActAs" denied on "EndUserCredentials to PROJECT NUMBER -compute@developer.gserviceaccount.com"] gcloud ERROR: (gcloud.functions.deploy) ResponseError: status=[403], code=[Ok], message=[Validation failed for trigger projects/<project-id>/locations/ LOCATION /triggers/ FUNCTION NAME - EVENTARC ID : Permission "iam.serviceAccounts.ActAs" denied on "EndUserCredentials to PROJECT NUMBER -compute@developer.gserviceaccount.com"] The solution To resolve this issue, reset this service account to the default role.

### Access control with IAM \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam)
- Source ID: `site-iam-reference`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here's a few of the notable permissions that the cloudfunctions.serviceAgent uses: Permission Description roles/artifactregistry.admin Manage repositories and store build images in Artifact Registry. roles/cloudbuild.builds.editor Required to use Cloud Build to perform builds in user project. roles/cloudbuild.customworkers.builder Create builds in Cloud Build custom workers. compute.globalOperations.get , compute.networks.access , vpcaccess.connectors.{get, use} Provision functions with access to the consumer projects VPC. roles/eventarc.developer Manage Eventarc triggers for functions. firebasedatabase.instances.{get, update} Create functions triggered by the Firebase Realtime Database. iam.serviceAccounts.{actAs, getAccessToken, signBlob} Ability to get runtime service account credentials. iam.serviceAccounts.getOpenIdToken Needed for the agent to get an OpenID token on a user-specified authority.
- Administrative service accounts To perform administrative actions on your project during the creation, updating, or deletion of functions, all projects in Cloud Run functions require the Google Cloud Functions Service Agent service account ( service-PROJECT NUMBER@gcf-admin-robot.iam.gserviceaccount.com ).
- If you've created or deployed functions using Cloud Run, see Access control with IAM and Cloud Run roles for a detailed description of Cloud Run predefined roles, controlling access to individual services, making a service public, or configuring organization policy for the Cloud Run invoker IAM.
- This page provides supplemental information for using Identity and Access Management (IAM) roles to set access controls at a project level, to determine the level of access to your Google Cloud project and functions created using gcloud functions commands or the Cloud Functions v2 API .

### "Configure Direct VPC egress for 2nd gen functions \_|\_ Cloud Run functions\

- URL: [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- Source ID: `site-iam-reference`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can't use Direct VPC egress and Serverless VPC Access connectors at the same time.
- BACKEND URL ; if ( ! backendUrl ) { console . error ( 'BACKEND URL environment variable not set.' ); res . status ( 500 ). send ( 'BACKEND URL not configured.' ); return ; } try { const metadataServerURL = 'http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/identity?audience=' ; const tokenUrl = metadataServerURL + backendUrl ; const tokenResponse = await axios . get ( tokenUrl , { headers : { 'Metadata-Flavor' : 'Google' , }, }); const token = tokenResponse . data ; const response = await axios . get ( backendUrl , { headers : { Authorization : bearer ${ token } , }, }); res . status ( 200 ). send ( Response from backend: ${ response . data } ); } catch ( error ) { console . error ( Error calling backend service: ${ error . message } ); res . status ( 500 ). send ( Error calling backend: ${ error . message } ); } }; functions . http ( 'callVPCService' , callVPCService ); Deploy the function with Direct VPC egress configured to route all traffic to your default VPC network: gcloud functions deploy my-2ndgen-function \ --source . \ --runtime nodejs20 \ --trigger-http \ --entry-point callVPCService \ --network = default \ --subnet = default \ --direct-vpc-egress = all \ --region = REGION \ --allow-unauthenticated \ --set-env-vars BACKEND URL = BACKEND URL Replace the following: REGION : the region where you deployed the backend service.
- Configure Direct VPC egress Configure Direct VPC egress for new or existing 2nd gen functions. gcloud To configure Direct VPC egress when you deploy a function, use the gcloud functions deploy command with flags for your network settings. gcloud functions deploy FUNCTION NAME \ --source . \ --runtime RUNTIME \ --trigger-http \ --region REGION \ --network = NETWORK \ --subnet = SUBNET \ --network-tags = NETWORK TAG NAMES \ --direct-vpc-egress = EGRESS SETTING Replace the following: FUNCTION NAME : the name of your function.
- Create and deploy the function Create a new directory for the function and change into it: cd .. mkdir dvpc-function cd dvpc-function Create a package.json file with the following content: { "name" : "sample-http" , "version" : "0.0.1" , "dependencies" : { "axios" : "0.21.1" , "@google-cloud/functions-framework" : "^3.0.0" } } Create an index.js file with the following content.

