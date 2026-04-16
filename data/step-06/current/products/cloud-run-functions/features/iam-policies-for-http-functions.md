---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:19.148Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "IAM policies for HTTP functions"
feature_slug: "iam-policies-for-http-functions"
latest_feature_date: "2019-06-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/functions/docs/securing/managing-access-iam"
  - "https://docs.cloud.google.com/functions/docs/troubleshooting"
  - "https://docs.cloud.google.com/functions/docs/running/direct-vpc"
keywords:
  - "iam"
  - "policies"
  - "http"
  - "functions"
  - "let"
  - "access"
  - "triggered"
  - "controlled"
---

# IAM policies for HTTP functions

Product: Cloud Run functions
Coverage: MEDIUM

## Step 02 Summary

IAM policies for HTTP functions let access to HTTP-triggered functions be controlled with IAM.

## Extended Definition

IAM policies for HTTP functions let access to HTTP-triggered functions be controlled with IAM.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam)
- [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)
- [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)

## Supporting Pages

### Authorize access with IAM \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam)
- Source ID: `site-iam-reference`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Viewing principals To view principals, use the gcloud functions get-iam-policy command: gcloud functions get-iam-policy FUNCTION NAME Allowing unauthenticated HTTP function invocation Note: If you created functions using the Cloud Run Admin API, see the Allowing public (unauthenticated) access guide instead.
- Before you begin To get the permission that you need to control access for a specific function or all functions in a project, ask your administrator to grant you the Cloud Functions Admin ( roles/roles/cloudfunctions.admin ) IAM role on the function or the project.
- Authorize access with IAM You use Identity and Access Management (IAM) to authorize identities to perform administrative actions on functions created using the Cloud Functions v2 API —for example, using gcloud functions , the REST API, or Terraform.
- This predefined role contains the cloudfunctions.functions.setIamPolicy permission, which is required to control access for a specific function or all functions in a project.

### Troubleshoot Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)
- Source ID: `site-iam-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- If your functions are not inside a VPC Service Controls perimeter, this might cause them to receive HTTP 403 responses when attempting to access Google Cloud services protected by VPC Service Controls, due to service perimeter denials.
- Serving permission error due to the function requiring authentication HTTP functions without Allow unauthenticated invocations enabled, restrict access to end users and service accounts that don't have appropriate permissions .
- Step #2 - "build": ERROR: failed to create image cache: accessing cache image " LOCATION -docker.pkg.dev/ PROJECT /gcf-artifacts/ FUNCTION NAME /cache:latest": connect to repo store " LOCATION -docker.pkg.dev/ PROJECT /gcf-artifacts/ FUNCTION NAME /cache:latest": GET https:// LOCATION -docker.pkg.dev/v2/token?scope=repository%3A PROJECT %2Fgcf-artifacts%2F FUNCTION NAME %2Fcache%3Apull&service=: DENIED: Permission "artifactregistry.repositories.downloadArtifacts" denied on resource "projects/ PROJECT /locations/ LOCATION /repositories/gcf-artifacts" (or it may not exist) Could not build the function due to a missing permission on the build service account.
- The error message In Audited Resources logs, an entry like the following: "protoPayload": { "@type": "type.googleapis.com/google.cloud.audit.AuditLog", "status": { "code": 7, "details": [ { "@type": "type.googleapis.com/google.rpc.PreconditionFailure", "violations": [ { "type": "VPC SERVICE CONTROLS", ... "authenticationInfo": { "principalEmail": " CLOUD FUNCTION RUNTIME SERVICE ACCOUNT ", ... "metadata": { "violationReason": "NO MATCHING ACCESS LEVEL", "securityPolicyInfo": { "organizationId": " ORGANIZATION ID ", "servicePerimeterName": "accessPolicies/ NUMBER /servicePerimeters/ SERVICE PERIMETER NAME " ...

### "Configure Direct VPC egress for 2nd gen functions \_|\_ Cloud Run functions\

- URL: [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- Source ID: `site-iam-reference`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BACKEND URL ; if ( ! backendUrl ) { console . error ( 'BACKEND URL environment variable not set.' ); res . status ( 500 ). send ( 'BACKEND URL not configured.' ); return ; } try { const metadataServerURL = 'http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/identity?audience=' ; const tokenUrl = metadataServerURL + backendUrl ; const tokenResponse = await axios . get ( tokenUrl , { headers : { 'Metadata-Flavor' : 'Google' , }, }); const token = tokenResponse . data ; const response = await axios . get ( backendUrl , { headers : { Authorization : bearer ${ token } , }, }); res . status ( 200 ). send ( Response from backend: ${ response . data } ); } catch ( error ) { console . error ( Error calling backend service: ${ error . message } ); res . status ( 500 ). send ( Error calling backend: ${ error . message } ); } }; functions . http ( 'callVPCService' , callVPCService ); Deploy the function with Direct VPC egress configured to route all traffic to your default VPC network: gcloud functions deploy my-2ndgen-function \ --source . \ --runtime nodejs20 \ --trigger-http \ --entry-point callVPCService \ --network = default \ --subnet = default \ --direct-vpc-egress = all \ --region = REGION \ --allow-unauthenticated \ --set-env-vars BACKEND URL = BACKEND URL Replace the following: REGION : the region where you deployed the backend service.
- Configure Direct VPC egress Configure Direct VPC egress for new or existing 2nd gen functions. gcloud To configure Direct VPC egress when you deploy a function, use the gcloud functions deploy command with flags for your network settings. gcloud functions deploy FUNCTION NAME \ --source . \ --runtime RUNTIME \ --trigger-http \ --region REGION \ --network = NETWORK \ --subnet = SUBNET \ --network-tags = NETWORK TAG NAMES \ --direct-vpc-egress = EGRESS SETTING Replace the following: FUNCTION NAME : the name of your function.
- Create and deploy the function Create a new directory for the function and change into it: cd .. mkdir dvpc-function cd dvpc-function Create a package.json file with the following content: { "name" : "sample-http" , "version" : "0.0.1" , "dependencies" : { "axios" : "0.21.1" , "@google-cloud/functions-framework" : "^3.0.0" } } Create an index.js file with the following content.
- Using the Cloud Run functions (2nd gen) Direct VPC egress example as a starting point, update the following fields: service config.direct vpc network interface.network : the name of your VPC network. service config.direct vpc network interface.subnetwork : the name of your VPC subnetwork. service config.direct vpc egress : which traffic to send to the VPC network.

