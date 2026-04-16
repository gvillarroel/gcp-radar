---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:19.016Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Internal ingress from Workflows"
feature_slug: "internal-ingress-from-workflows"
latest_feature_date: "2021-12-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/functions/docs/troubleshooting"
  - "https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions"
  - "https://docs.cloud.google.com/functions/docs/running/direct-vpc"
keywords:
  - "internal"
  - "ingress"
  - "workflows"
  - "run"
  - "functions"
  - "supports"
---

# Internal ingress from Workflows

Product: Cloud Run functions
Coverage: LOW

## Step 02 Summary

Cloud Run functions supports internal ingress from Workflows.

## Extended Definition

Cloud Run functions supports internal ingress from Workflows.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)
- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)
- [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)

## Supporting Pages

### Troubleshoot Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)
- Source ID: `site-iam-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Serving error due to allow internal traffic only configuration Ingress settings restrict whether an HTTP function can be invoked by resources outside of your Google Cloud project or VPC Service Controls service perimeter.
- When you configure allow internal traffic only setting for ingress networking, this error message indicates that only requests from VPC networks in the same project or VPC Service Controls perimeter are allowed.
- If you are triggering Cloud Run functions from Workflows , you can use the try/retry syntax to achieve this.
- For background or event-driven functions, Cloud Run functions supports at-least-once delivery .

### "Configure Direct VPC egress for 2nd gen functions \_|\_ Cloud Run functions\

- URL: [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- Source ID: `site-iam-reference`
- Final score: 27
- Re-rank relevance: N/A

Evidence snippets:
- BACKEND URL ; if ( ! backendUrl ) { console . error ( 'BACKEND URL environment variable not set.' ); res . status ( 500 ). send ( 'BACKEND URL not configured.' ); return ; } try { const metadataServerURL = 'http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/identity?audience=' ; const tokenUrl = metadataServerURL + backendUrl ; const tokenResponse = await axios . get ( tokenUrl , { headers : { 'Metadata-Flavor' : 'Google' , }, }); const token = tokenResponse . data ; const response = await axios . get ( backendUrl , { headers : { Authorization : bearer ${ token } , }, }); res . status ( 200 ). send ( Response from backend: ${ response . data } ); } catch ( error ) { console . error ( Error calling backend service: ${ error . message } ); res . status ( 500 ). send ( Error calling backend: ${ error . message } ); } }; functions . http ( 'callVPCService' , callVPCService ); Deploy the function with Direct VPC egress configured to route all traffic to your default VPC network: gcloud functions deploy my-2ndgen-function \ --source . \ --runtime nodejs20 \ --trigger-http \ --entry-point callVPCService \ --network = default \ --subnet = default \ --direct-vpc-egress = all \ --region = REGION \ --allow-unauthenticated \ --set-env-vars BACKEND URL = BACKEND URL Replace the following: REGION : the region where you deployed the backend service.
- PORT ) 8080 ; app . listen ( port , () = > { console . log ( helloworld: listening on port ${ port } ); }); Deploy the service to Cloud Run with internal ingress: gcloud run deploy backend \ --source . \ --no-allow-unauthenticated \ --region = REGION \ --ingress internal Replace REGION with your region, for example, us-west1 .
- This code makes an authenticated request to the internal backend service. const axios = require ( 'axios' ); const functions = require ( '@google-cloud/functions-framework' ); const callVPCService = async ( req , res ) = > { const backendUrl = process . env .
- Example: Call an internal service from a function This example shows how to create an internal Cloud Run service and then call it from a Cloud Run functions (2nd gen) function that uses Direct VPC egress.

### "REST Resource: projects.locations.functions \_|\_ Cloud Run functions \_\

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)
- Source ID: `site-docs-root`
- Final score: 27
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "name" : string , "description" : string , "status" : enum ( CloudFunctionStatus ) , "entryPoint" : string , "runtime" : string , "timeout" : string , "availableMemoryMb" : integer , "serviceAccountEmail" : string , "updateTime" : string , "versionId" : string , "labels" : { string : string , ... } , "environmentVariables" : { string : string , ... } , "buildEnvironmentVariables" : { string : string , ... } , "network" : string , "maxInstances" : integer , "minInstances" : integer , "vpcConnector" : string , "vpcConnectorEgressSettings" : enum ( VpcConnectorEgressSettings ) , "ingressSettings" : enum ( IngressSettings ) , "kmsKeyName" : string , "buildWorkerPool" : string , "buildId" : string , "buildName" : string , "secretEnvironmentVariables" : [ { object ( SecretEnvVar ) } ] , "secretVolumes" : [ { object ( SecretVolume ) } ] , "sourceToken" : string , "dockerRepository" : string , "dockerRegistry" : enum ( DockerRegistry ) , "buildServiceAccount" : string , "satisfiesPzs" : boolean , "satisfiesPzi" : boolean , // Union field source code can be only one of the following: "sourceArchiveUrl" : string , "sourceRepository" : { object ( SourceRepository ) } , "sourceUploadUrl" : string // End of list of possible types for union field source code . // Union field trigger can be only one of the following: "httpsTrigger" : { object ( HttpsTrigger ) } , "eventTrigger" : { object ( EventTrigger ) } // End of list of possible types for union field trigger . // Union field runtime update policy can be only one of the following: "automaticUpdatePolicy" : { object ( AutomaticUpdatePolicy ) } , "onDeployUpdatePolicy" : { object ( OnDeployUpdatePolicy ) } // End of list of possible types for union field runtime update policy . } Fields name string A user-defined name of the function.
- Resource: CloudFunction JSON representation SourceRepository JSON representation HttpsTrigger JSON representation SecurityLevel EventTrigger JSON representation FailurePolicy JSON representation Retry CloudFunctionStatus VpcConnectorEgressSettings IngressSettings SecretEnvVar JSON representation SecretVolume JSON representation SecretVersion JSON representation DockerRegistry AutomaticUpdatePolicy OnDeployUpdatePolicy JSON representation Methods Resource: CloudFunction Describes a Cloud Function that contains user computation executed in response to an event.
- Google Cloud Functions delegates access to service agents to protect function resources in internal projects that are not accessible by the end user. buildWorkerPool string Name of the Cloud Build Custom Worker Pool that should be used to build the function.
- Methods call Synchronously invokes a deployed Cloud Function. create Creates a new function. delete Deletes a function with the given name from the specified project. generateDownloadUrl Returns a signed URL for downloading deployed function source code. generateUploadUrl Returns a signed URL for uploading a function source code. get Returns a function with the given name from the requested project. getIamPolicy Gets the IAM access control policy for a function. list Returns a list of functions that belong to the requested project. patch Updates existing function. setIamPolicy Sets the IAM access control policy on the specified function. testIamPermissions Tests the specified permissions against the IAM access control policy for a function.

