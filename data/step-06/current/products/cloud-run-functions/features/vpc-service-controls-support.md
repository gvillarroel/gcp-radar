---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:19.143Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "VPC Service Controls support"
feature_slug: "vpc-service-controls-support"
latest_feature_date: "2020-01-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/functions/docs/building"
  - "https://docs.cloud.google.com/functions/docs/troubleshooting"
  - "https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions"
keywords:
  - "vpc"
  - "controls"
  - "lets"
  - "functions"
  - "operate"
  - "within"
  - "secure"
  - "perimeter"
---

# VPC Service Controls support

Product: Cloud Run functions
Coverage: MEDIUM

## Step 02 Summary

VPC Service Controls support lets functions operate within a secure service perimeter to reduce data exfiltration risk.

## Extended Definition

VPC Service Controls support lets functions operate within a secure service perimeter to reduce data exfiltration risk.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)
- [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)
- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)

## Supporting Pages

### Build process overview \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)
- Source ID: `site-iam-reference`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VPC Service Controls considerations If you have a VPC Service Controls perimeter protecting both your project and the Cloud Run functions API, and if you're using the Compute Engine default service account as the Cloud Build Service Account role for Cloud Run functions, you must create the following ingress rules: Allow Compute Engine default service account ingress to all methods on both Cloud Storage and Cloud Logging APIs.
- To use Cloud Run functions with VPC Service Controls, you must configure your Cloud Build service account (whether default or custom ) to have access to your service perimeter.
- Grant the Cloud Build service account access to the VPC Service Controls perimeter Cloud Run functions uses Cloud Build to build your source code into a runnable container.
- VPC Service Controls configurations: Ensure that the build service account can reach the target REPOSITORY within the VPC-SC perimeter.

### Troubleshoot Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)
- Source ID: `site-iam-reference`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- If your functions are not inside a VPC Service Controls perimeter, this might cause them to receive HTTP 403 responses when attempting to access Google Cloud services protected by VPC Service Controls, due to service perimeter denials.
- The error message In Audited Resources logs, an entry like the following: "protoPayload": { "@type": "type.googleapis.com/google.cloud.audit.AuditLog", "status": { "code": 7, "details": [ { "@type": "type.googleapis.com/google.rpc.PreconditionFailure", "violations": [ { "type": "VPC SERVICE CONTROLS", ... "authenticationInfo": { "principalEmail": " CLOUD FUNCTION RUNTIME SERVICE ACCOUNT ", ... "metadata": { "violationReason": "NO MATCHING ACCESS LEVEL", "securityPolicyInfo": { "organizationId": " ORGANIZATION ID ", "servicePerimeterName": "accessPolicies/ NUMBER /servicePerimeters/ SERVICE PERIMETER NAME " ...
- The error message HTTP Error Response code: 404 NOT FOUND The solution To resolve this error, follow any of these solutions: Ensure that the request is coming from your Google Cloud project or VPC Service Controls service perimeter.
- Serving error due to allow internal traffic only configuration Ingress settings restrict whether an HTTP function can be invoked by resources outside of your Google Cloud project or VPC Service Controls service perimeter.

### "REST Resource: projects.locations.functions \_|\_ Cloud Run functions \_\

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)
- Source ID: `site-docs-root`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "name" : string , "description" : string , "status" : enum ( CloudFunctionStatus ) , "entryPoint" : string , "runtime" : string , "timeout" : string , "availableMemoryMb" : integer , "serviceAccountEmail" : string , "updateTime" : string , "versionId" : string , "labels" : { string : string , ... } , "environmentVariables" : { string : string , ... } , "buildEnvironmentVariables" : { string : string , ... } , "network" : string , "maxInstances" : integer , "minInstances" : integer , "vpcConnector" : string , "vpcConnectorEgressSettings" : enum ( VpcConnectorEgressSettings ) , "ingressSettings" : enum ( IngressSettings ) , "kmsKeyName" : string , "buildWorkerPool" : string , "buildId" : string , "buildName" : string , "secretEnvironmentVariables" : [ { object ( SecretEnvVar ) } ] , "secretVolumes" : [ { object ( SecretVolume ) } ] , "sourceToken" : string , "dockerRepository" : string , "dockerRegistry" : enum ( DockerRegistry ) , "buildServiceAccount" : string , "satisfiesPzs" : boolean , "satisfiesPzi" : boolean , // Union field source code can be only one of the following: "sourceArchiveUrl" : string , "sourceRepository" : { object ( SourceRepository ) } , "sourceUploadUrl" : string // End of list of possible types for union field source code . // Union field trigger can be only one of the following: "httpsTrigger" : { object ( HttpsTrigger ) } , "eventTrigger" : { object ( EventTrigger ) } // End of list of possible types for union field trigger . // Union field runtime update policy can be only one of the following: "automaticUpdatePolicy" : { object ( AutomaticUpdatePolicy ) } , "onDeployUpdatePolicy" : { object ( OnDeployUpdatePolicy ) } // End of list of possible types for union field runtime update policy . } Fields name string A user-defined name of the function.
- Methods call Synchronously invokes a deployed Cloud Function. create Creates a new function. delete Deletes a function with the given name from the specified project. generateDownloadUrl Returns a signed URL for downloading deployed function source code. generateUploadUrl Returns a signed URL for uploading a function source code. get Returns a function with the given name from the requested project. getIamPolicy Gets the IAM access control policy for a function. list Returns a list of functions that belong to the requested project. patch Updates existing function. setIamPolicy Sets the IAM access control policy on the specified function. testIamPermissions Tests the specified permissions against the IAM access control policy for a function.
- Resource: CloudFunction JSON representation SourceRepository JSON representation HttpsTrigger JSON representation SecurityLevel EventTrigger JSON representation FailurePolicy JSON representation Retry CloudFunctionStatus VpcConnectorEgressSettings IngressSettings SecretEnvVar JSON representation SecretVolume JSON representation SecretVersion JSON representation DockerRegistry AutomaticUpdatePolicy OnDeployUpdatePolicy JSON representation Methods Resource: CloudFunction Describes a Cloud Function that contains user computation executed in response to an event.
- The location of the function source code. source code can be only one of the following: sourceArchiveUrl string The Google Cloud Storage URL, starting with gs:// , pointing to the zip archive which contains the function. sourceRepository object ( SourceRepository ) Beta Feature The source repository where a function is hosted. sourceUploadUrl string The Google Cloud Storage signed URL used for source uploading, generated by calling [google.cloud.functions.v1.GenerateUploadUrl].

