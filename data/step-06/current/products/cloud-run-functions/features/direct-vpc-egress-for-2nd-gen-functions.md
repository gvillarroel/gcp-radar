---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:18.892Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Direct VPC egress for 2nd gen functions"
feature_slug: "direct-vpc-egress-for-2nd-gen-functions"
latest_feature_date: "2026-02-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/functions/docs/running/direct-vpc"
  - "https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions"
  - "https://docs.cloud.google.com/functions/docs/troubleshooting"
keywords:
  - "direct"
  - "vpc"
  - "egress"
  - "2nd"
  - "gen"
  - "functions"
  - "run"
  - "supports"
---

# Direct VPC egress for 2nd gen functions

Product: Cloud Run functions
Coverage: LOW

## Step 02 Summary

Cloud Run functions supports configuring Direct VPC egress for 2nd gen functions; Cloud Run functions supports configuring Direct VPC egress for 2nd gen functions.

## Extended Definition

Cloud Run functions supports configuring Direct VPC egress for 2nd gen functions; Cloud Run functions supports configuring Direct VPC egress for 2nd gen functions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)
- [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)

## Supporting Pages

### "Configure Direct VPC egress for 2nd gen functions \_|\_ Cloud Run functions\

- URL: [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- Source ID: `site-iam-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- BACKEND URL ; if ( ! backendUrl ) { console . error ( 'BACKEND URL environment variable not set.' ); res . status ( 500 ). send ( 'BACKEND URL not configured.' ); return ; } try { const metadataServerURL = 'http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/identity?audience=' ; const tokenUrl = metadataServerURL + backendUrl ; const tokenResponse = await axios . get ( tokenUrl , { headers : { 'Metadata-Flavor' : 'Google' , }, }); const token = tokenResponse . data ; const response = await axios . get ( backendUrl , { headers : { Authorization : bearer ${ token } , }, }); res . status ( 200 ). send ( Response from backend: ${ response . data } ); } catch ( error ) { console . error ( Error calling backend service: ${ error . message } ); res . status ( 500 ). send ( Error calling backend: ${ error . message } ); } }; functions . http ( 'callVPCService' , callVPCService ); Deploy the function with Direct VPC egress configured to route all traffic to your default VPC network: gcloud functions deploy my-2ndgen-function \ --source . \ --runtime nodejs20 \ --trigger-http \ --entry-point callVPCService \ --network = default \ --subnet = default \ --direct-vpc-egress = all \ --region = REGION \ --allow-unauthenticated \ --set-env-vars BACKEND URL = BACKEND URL Replace the following: REGION : the region where you deployed the backend service.
- Configure Direct VPC egress Configure Direct VPC egress for new or existing 2nd gen functions. gcloud To configure Direct VPC egress when you deploy a function, use the gcloud functions deploy command with flags for your network settings. gcloud functions deploy FUNCTION NAME \ --source . \ --runtime RUNTIME \ --trigger-http \ --region REGION \ --network = NETWORK \ --subnet = SUBNET \ --network-tags = NETWORK TAG NAMES \ --direct-vpc-egress = EGRESS SETTING Replace the following: FUNCTION NAME : the name of your function.
- Using the Cloud Run functions (2nd gen) Direct VPC egress example as a starting point, update the following fields: service config.direct vpc network interface.network : the name of your VPC network. service config.direct vpc network interface.subnetwork : the name of your VPC subnetwork. service config.direct vpc egress : which traffic to send to the VPC network.
- Example: Call an internal service from a function This example shows how to create an internal Cloud Run service and then call it from a Cloud Run functions (2nd gen) function that uses Direct VPC egress.

### Troubleshoot Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)
- Source ID: `site-iam-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- For background or event-driven functions, Cloud Run functions supports at-least-once delivery .
- To obtain this permission, you can grant a role that includes it like the Service Account User role, on the project. gcloud Default service account: ERROR: (gcloud.functions.deploy) ResponseError: status=[403], code=[Ok], message=[Caller is missing permission 'iam.serviceaccounts.actAs' on service account projects/-/serviceAccounts/ PROJECT NUMBER -compute@developer.gserviceaccount.com.Grant the role 'roles/iam.serviceAccountUser' to the caller on the service account projects/-/serviceAccounts/ PROJECT NUMBER -compute@developer.gserviceaccount.com.You can do that by running 'gcloud iam service-accounts add-iam-policy-binding projects/-/serviceAccounts/ PROJECT NUMBER -compute@developer.gserviceaccount.com --member MEMBER --role roles/iam.serviceAccountUser'where MEMBER has a prefix like 'user:' or 'serviceAccount:' Non-default service account: ERROR: (gcloud.functions.deploy) ResponseError: status=[403], code=[Ok], message=[Caller is missing permission 'iam.serviceaccounts.actAs' on service account projects/-/serviceAccounts/ SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com.Grant the role 'roles/iam.serviceAccountUser' to the caller on the service account projects/-/serviceAccounts/ SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com.You can do that by running 'gcloud iam service-accounts add-iam-policy-binding projects/-/serviceAccounts/ SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com --member MEMBER --role roles/iam.serviceAccountUser'where MEMBER has a prefix like 'user:' or 'serviceAccount:' Note: PROJECT NUMBER -compute@developer.gserviceaccount.com is the default service account for Cloud Functions.
- The error message Console ERROR: (gcloud.functions.deploy) ResponseError: status=[403], code=[Ok], message=[Validation failed for trigger projects/ PROJECT ID /locations/ LOCATION /triggers/ FUNCTION NAME - EVENTARC ID : Permission "iam.serviceAccounts.ActAs" denied on "EndUserCredentials to PROJECT NUMBER -compute@developer.gserviceaccount.com"] gcloud ERROR: (gcloud.functions.deploy) ResponseError: status=[403], code=[Ok], message=[Validation failed for trigger projects/<project-id>/locations/ LOCATION /triggers/ FUNCTION NAME - EVENTARC ID : Permission "iam.serviceAccounts.ActAs" denied on "EndUserCredentials to PROJECT NUMBER -compute@developer.gserviceaccount.com"] The solution To resolve this issue, reset this service account to the default role.
- The error message Console Validation failed for trigger projects/ PROJECT ID /locations/ LOCATION /triggers/ FUNCTION NAME - EVENTARC ID : Permission "iam.serviceAccounts.ActAs" denied on "EndUserCredentials to PROJECT NUMBER -compute@developer.gserviceaccount.com" gcloud ERROR: (gcloud.functions.deploy) ResponseError: status=[403], code=[Ok], message=[Validation failed for trigger projects/test-project-356312/locations/ LOCATION /triggers/ FUNCTION NAME - EVENTARC ID : Permission "iam.serviceAccounts.ActAs" denied on "EndUserCredentials to PROJECT NUMBER -compute@developer.gserviceaccount.com"] The solution You can reset your service account to the default cloudfunctions.serviceAgent role.

### "REST Resource: projects.locations.functions \_|\_ Cloud Run functions \_\

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)
- Source ID: `site-docs-root`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "name" : string , "description" : string , "status" : enum ( CloudFunctionStatus ) , "entryPoint" : string , "runtime" : string , "timeout" : string , "availableMemoryMb" : integer , "serviceAccountEmail" : string , "updateTime" : string , "versionId" : string , "labels" : { string : string , ... } , "environmentVariables" : { string : string , ... } , "buildEnvironmentVariables" : { string : string , ... } , "network" : string , "maxInstances" : integer , "minInstances" : integer , "vpcConnector" : string , "vpcConnectorEgressSettings" : enum ( VpcConnectorEgressSettings ) , "ingressSettings" : enum ( IngressSettings ) , "kmsKeyName" : string , "buildWorkerPool" : string , "buildId" : string , "buildName" : string , "secretEnvironmentVariables" : [ { object ( SecretEnvVar ) } ] , "secretVolumes" : [ { object ( SecretVolume ) } ] , "sourceToken" : string , "dockerRepository" : string , "dockerRegistry" : enum ( DockerRegistry ) , "buildServiceAccount" : string , "satisfiesPzs" : boolean , "satisfiesPzi" : boolean , // Union field source code can be only one of the following: "sourceArchiveUrl" : string , "sourceRepository" : { object ( SourceRepository ) } , "sourceUploadUrl" : string // End of list of possible types for union field source code . // Union field trigger can be only one of the following: "httpsTrigger" : { object ( HttpsTrigger ) } , "eventTrigger" : { object ( EventTrigger ) } // End of list of possible types for union field trigger . // Union field runtime update policy can be only one of the following: "automaticUpdatePolicy" : { object ( AutomaticUpdatePolicy ) } , "onDeployUpdatePolicy" : { object ( OnDeployUpdatePolicy ) } // End of list of possible types for union field runtime update policy . } Fields name string A user-defined name of the function.
- Resource: CloudFunction JSON representation SourceRepository JSON representation HttpsTrigger JSON representation SecurityLevel EventTrigger JSON representation FailurePolicy JSON representation Retry CloudFunctionStatus VpcConnectorEgressSettings IngressSettings SecretEnvVar JSON representation SecretVolume JSON representation SecretVersion JSON representation DockerRegistry AutomaticUpdatePolicy OnDeployUpdatePolicy JSON representation Methods Resource: CloudFunction Describes a Cloud Function that contains user computation executed in response to an event.
- Methods call Synchronously invokes a deployed Cloud Function. create Creates a new function. delete Deletes a function with the given name from the specified project. generateDownloadUrl Returns a signed URL for downloading deployed function source code. generateUploadUrl Returns a signed URL for uploading a function source code. get Returns a function with the given name from the requested project. getIamPolicy Gets the IAM access control policy for a function. list Returns a list of functions that belong to the requested project. patch Updates existing function. setIamPolicy Sets the IAM access control policy on the specified function. testIamPermissions Tests the specified permissions against the IAM access control policy for a function.
- The location of the function source code. source code can be only one of the following: sourceArchiveUrl string The Google Cloud Storage URL, starting with gs:// , pointing to the zip archive which contains the function. sourceRepository object ( SourceRepository ) Beta Feature The source repository where a function is hosted. sourceUploadUrl string The Google Cloud Storage signed URL used for source uploading, generated by calling [google.cloud.functions.v1.GenerateUploadUrl].

