---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:19.001Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: ".NET Core 6.0 runtime"
feature_slug: "net-core-6-0-runtime"
latest_feature_date: "2022-09-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions"
  - "https://docs.cloud.google.com/functions/docs/running/direct-vpc"
  - "https://docs.cloud.google.com/functions/docs/building"
keywords:
  - "net"
  - "core"
  - "runtime"
  - "run"
  - "functions"
  - "supports"
---

# .NET Core 6.0 runtime

Product: Cloud Run functions
Coverage: LOW

## Step 02 Summary

Cloud Run functions supports the .NET Core 6.0 runtime.

## Extended Definition

Cloud Run functions supports the .NET Core 6.0 runtime.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)
- [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)

## Supporting Pages

### Build process overview \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)
- Source ID: `site-iam-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- You can optionally use a private pool , which you specify using the --build-worker-pool flag. gcloud functions deploy FUNCTION NAME \ -- gen2 \ -- region = REGION \ -- project = PROJECT ID \ -- runtime = RUNTIME \ -- entry - point = CODE ENTRYPOINT \ -- build - service - account = projects / PROJECT ID / serviceAccounts / SA EMAIL \ -- memory = 256 Mi \ -- trigger - http \ -- source = .
- To stop using a given private pool and instead use the default Cloud Build pool, use the --clear-build-worker-pool flag when re-deploying. gcloud functions deploy FUNCTION NAME \ --runtime RUNTIME \ --clear-build-worker-pool [ FLAGS... ] Replace FUNCTION NAME with the name of the function and RUNTIME with the runtime you are using.
- Deploy your function to build using a private pool: gcloud functions deploy FUNCTION NAME \ --runtime RUNTIME \ --build-worker-pool PRIVATE POOL NAME [ FLAGS... ] Replace FUNCTION NAME with the name of the function, RUNTIME with the runtime you are using, and PRIVATE POOL NAME with the name of your pool.
- If your private worker pool is in a different project than your function, you need to grant the Cloud Functions Service Agent Service Account ( service-FUNCTION PROJECT NUMBER@gcf-admin-robot.iam.gserviceaccount.com ) the cloudbuild.workerPoolUser role so that the Cloud Build service can access the worker pool. gcloud projects add-iam-policy-binding PRIVATE POOL PROJECT ID \ --member serviceAccount:service- FUNCTION PROJECT NUMBER @gcf-admin-robot.iam.gserviceaccount.com --role roles/cloudbuild.workerPoolUser Replace FUNCTION PROJECT NUMBER with the number of the project where the function runs and PRIVATE POOL PROJECT ID with the ID of the project in which the worker pool is located.

### "Configure Direct VPC egress for 2nd gen functions \_|\_ Cloud Run functions\

- URL: [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- Source ID: `site-iam-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- BACKEND URL ; if ( ! backendUrl ) { console . error ( 'BACKEND URL environment variable not set.' ); res . status ( 500 ). send ( 'BACKEND URL not configured.' ); return ; } try { const metadataServerURL = 'http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/identity?audience=' ; const tokenUrl = metadataServerURL + backendUrl ; const tokenResponse = await axios . get ( tokenUrl , { headers : { 'Metadata-Flavor' : 'Google' , }, }); const token = tokenResponse . data ; const response = await axios . get ( backendUrl , { headers : { Authorization : bearer ${ token } , }, }); res . status ( 200 ). send ( Response from backend: ${ response . data } ); } catch ( error ) { console . error ( Error calling backend service: ${ error . message } ); res . status ( 500 ). send ( Error calling backend: ${ error . message } ); } }; functions . http ( 'callVPCService' , callVPCService ); Deploy the function with Direct VPC egress configured to route all traffic to your default VPC network: gcloud functions deploy my-2ndgen-function \ --source . \ --runtime nodejs20 \ --trigger-http \ --entry-point callVPCService \ --network = default \ --subnet = default \ --direct-vpc-egress = all \ --region = REGION \ --allow-unauthenticated \ --set-env-vars BACKEND URL = BACKEND URL Replace the following: REGION : the region where you deployed the backend service.
- Configure Direct VPC egress Configure Direct VPC egress for new or existing 2nd gen functions. gcloud To configure Direct VPC egress when you deploy a function, use the gcloud functions deploy command with flags for your network settings. gcloud functions deploy FUNCTION NAME \ --source . \ --runtime RUNTIME \ --trigger-http \ --region REGION \ --network = NETWORK \ --subnet = SUBNET \ --network-tags = NETWORK TAG NAMES \ --direct-vpc-egress = EGRESS SETTING Replace the following: FUNCTION NAME : the name of your function.
- Create and deploy the function Create a new directory for the function and change into it: cd .. mkdir dvpc-function cd dvpc-function Create a package.json file with the following content: { "name" : "sample-http" , "version" : "0.0.1" , "dependencies" : { "axios" : "0.21.1" , "@google-cloud/functions-framework" : "^3.0.0" } } Create an index.js file with the following content.
- Using the Cloud Run functions (2nd gen) Direct VPC egress example as a starting point, update the following fields: service config.direct vpc network interface.network : the name of your VPC network. service config.direct vpc network interface.subnetwork : the name of your VPC subnetwork. service config.direct vpc egress : which traffic to send to the VPC network.

### "REST Resource: projects.locations.functions \_|\_ Cloud Run functions \_\

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "name" : string , "description" : string , "status" : enum ( CloudFunctionStatus ) , "entryPoint" : string , "runtime" : string , "timeout" : string , "availableMemoryMb" : integer , "serviceAccountEmail" : string , "updateTime" : string , "versionId" : string , "labels" : { string : string , ... } , "environmentVariables" : { string : string , ... } , "buildEnvironmentVariables" : { string : string , ... } , "network" : string , "maxInstances" : integer , "minInstances" : integer , "vpcConnector" : string , "vpcConnectorEgressSettings" : enum ( VpcConnectorEgressSettings ) , "ingressSettings" : enum ( IngressSettings ) , "kmsKeyName" : string , "buildWorkerPool" : string , "buildId" : string , "buildName" : string , "secretEnvironmentVariables" : [ { object ( SecretEnvVar ) } ] , "secretVolumes" : [ { object ( SecretVolume ) } ] , "sourceToken" : string , "dockerRepository" : string , "dockerRegistry" : enum ( DockerRegistry ) , "buildServiceAccount" : string , "satisfiesPzs" : boolean , "satisfiesPzi" : boolean , // Union field source code can be only one of the following: "sourceArchiveUrl" : string , "sourceRepository" : { object ( SourceRepository ) } , "sourceUploadUrl" : string // End of list of possible types for union field source code . // Union field trigger can be only one of the following: "httpsTrigger" : { object ( HttpsTrigger ) } , "eventTrigger" : { object ( EventTrigger ) } // End of list of possible types for union field trigger . // Union field runtime update policy can be only one of the following: "automaticUpdatePolicy" : { object ( AutomaticUpdatePolicy ) } , "onDeployUpdatePolicy" : { object ( OnDeployUpdatePolicy ) } // End of list of possible types for union field runtime update policy . } Fields name string A user-defined name of the function.
- Methods call Synchronously invokes a deployed Cloud Function. create Creates a new function. delete Deletes a function with the given name from the specified project. generateDownloadUrl Returns a signed URL for downloading deployed function source code. generateUploadUrl Returns a signed URL for uploading a function source code. get Returns a function with the given name from the requested project. getIamPolicy Gets the IAM access control policy for a function. list Returns a list of functions that belong to the requested project. patch Updates existing function. setIamPolicy Sets the IAM access control policy on the specified function. testIamPermissions Tests the specified permissions against the IAM access control policy for a function.
- Resource: CloudFunction JSON representation SourceRepository JSON representation HttpsTrigger JSON representation SecurityLevel EventTrigger JSON representation FailurePolicy JSON representation Retry CloudFunctionStatus VpcConnectorEgressSettings IngressSettings SecretEnvVar JSON representation SecretVolume JSON representation SecretVersion JSON representation DockerRegistry AutomaticUpdatePolicy OnDeployUpdatePolicy JSON representation Methods Resource: CloudFunction Describes a Cloud Function that contains user computation executed in response to an event.
- The location of the function source code. source code can be only one of the following: sourceArchiveUrl string The Google Cloud Storage URL, starting with gs:// , pointing to the zip archive which contains the function. sourceRepository object ( SourceRepository ) Beta Feature The source repository where a function is hosted. sourceUploadUrl string The Google Cloud Storage signed URL used for source uploading, generated by calling [google.cloud.functions.v1.GenerateUploadUrl].

