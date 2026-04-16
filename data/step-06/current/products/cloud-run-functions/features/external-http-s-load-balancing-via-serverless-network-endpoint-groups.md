---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:19.133Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "External HTTP(S) Load Balancing via serverless network endpoint groups"
feature_slug: "external-http-s-load-balancing-via-serverless-network-endpoint-groups"
latest_feature_date: "2020-07-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/functions/docs/troubleshooting"
  - "https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions"
  - "https://docs.cloud.google.com/functions/docs/reference/rest"
keywords:
  - "external"
  - "http"
  - "load"
  - "balancing"
  - "via"
  - "serverless"
  - "network"
  - "endpoint"
---

# External HTTP(S) Load Balancing via serverless network endpoint groups

Product: Cloud Run functions
Coverage: MEDIUM

## Step 02 Summary

External HTTP(S) Load Balancing via serverless network endpoint groups lets functions use load balancing and integrate with Cloud CDN and Cloud Armor.

## Extended Definition

External HTTP(S) Load Balancing via serverless network endpoint groups lets functions use load balancing and integrate with Cloud CDN and Cloud Armor.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)
- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)
- [https://docs.cloud.google.com/functions/docs/reference/rest](https://docs.cloud.google.com/functions/docs/reference/rest)

## Supporting Pages

### Troubleshoot Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)
- Source ID: `site-iam-reference`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Step #2 - "build": ERROR: failed to create image cache: accessing cache image " LOCATION -docker.pkg.dev/ PROJECT /gcf-artifacts/ FUNCTION NAME /cache:latest": connect to repo store " LOCATION -docker.pkg.dev/ PROJECT /gcf-artifacts/ FUNCTION NAME /cache:latest": GET https:// LOCATION -docker.pkg.dev/v2/token?scope=repository%3A PROJECT %2Fgcf-artifacts%2F FUNCTION NAME %2Fcache%3Apull&service=: DENIED: Permission "artifactregistry.repositories.downloadArtifacts" denied on resource "projects/ PROJECT /locations/ LOCATION /repositories/gcf-artifacts" (or it may not exist) Could not build the function due to a missing permission on the build service account.
- The error message In Audited Resources logs, an entry like the following: "protoPayload": { "@type": "type.googleapis.com/google.cloud.audit.AuditLog", "status": { "code": 7, "details": [ { "@type": "type.googleapis.com/google.rpc.PreconditionFailure", "violations": [ { "type": "VPC SERVICE CONTROLS", ... "authenticationInfo": { "principalEmail": " CLOUD FUNCTION RUNTIME SERVICE ACCOUNT ", ... "metadata": { "violationReason": "NO MATCHING ACCESS LEVEL", "securityPolicyInfo": { "organizationId": " ORGANIZATION ID ", "servicePerimeterName": "accessPolicies/ NUMBER /servicePerimeters/ SERVICE PERIMETER NAME " ...
- The solution If your function terminates early, you should make sure all your function's asynchronous tasks are complete before your function performs any of the following actions: Returning a value Resolving or rejecting a returned Promise object (Node.js functions only) Throwing uncaught exceptions or errors Sending an HTTP response Calling a callback function If your function fails to terminate after completing asynchronous tasks, you should verify that your function is correctly signaling Cloud Run functions after it has completed.
- The error message HTTP Error Response code: 404 NOT FOUND The solution To re-enable the default cloudfunctions.net URL for Cloud Run functions (2nd gen), you must re-enable the run.app URL in Cloud Run by replacing the service.yaml file with a new configuration where annotations:run.googleapis.com/default-url-disabled: false Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "REST Resource: projects.locations.functions \_|\_ Cloud Run functions \_\

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "name" : string , "description" : string , "status" : enum ( CloudFunctionStatus ) , "entryPoint" : string , "runtime" : string , "timeout" : string , "availableMemoryMb" : integer , "serviceAccountEmail" : string , "updateTime" : string , "versionId" : string , "labels" : { string : string , ... } , "environmentVariables" : { string : string , ... } , "buildEnvironmentVariables" : { string : string , ... } , "network" : string , "maxInstances" : integer , "minInstances" : integer , "vpcConnector" : string , "vpcConnectorEgressSettings" : enum ( VpcConnectorEgressSettings ) , "ingressSettings" : enum ( IngressSettings ) , "kmsKeyName" : string , "buildWorkerPool" : string , "buildId" : string , "buildName" : string , "secretEnvironmentVariables" : [ { object ( SecretEnvVar ) } ] , "secretVolumes" : [ { object ( SecretVolume ) } ] , "sourceToken" : string , "dockerRepository" : string , "dockerRegistry" : enum ( DockerRegistry ) , "buildServiceAccount" : string , "satisfiesPzs" : boolean , "satisfiesPzi" : boolean , // Union field source code can be only one of the following: "sourceArchiveUrl" : string , "sourceRepository" : { object ( SourceRepository ) } , "sourceUploadUrl" : string // End of list of possible types for union field source code . // Union field trigger can be only one of the following: "httpsTrigger" : { object ( HttpsTrigger ) } , "eventTrigger" : { object ( EventTrigger ) } // End of list of possible types for union field trigger . // Union field runtime update policy can be only one of the following: "automaticUpdatePolicy" : { object ( AutomaticUpdatePolicy ) } , "onDeployUpdatePolicy" : { object ( OnDeployUpdatePolicy ) } // End of list of possible types for union field runtime update policy . } Fields name string A user-defined name of the function.
- An event that triggers the function. trigger can be only one of the following: httpsTrigger object ( HttpsTrigger ) An HTTPS endpoint type of source that can be triggered via URL. eventTrigger object ( EventTrigger ) A source that fires events in response to a condition in another service.
- Methods call Synchronously invokes a deployed Cloud Function. create Creates a new function. delete Deletes a function with the given name from the specified project. generateDownloadUrl Returns a signed URL for downloading deployed function source code. generateUploadUrl Returns a signed URL for uploading a function source code. get Returns a function with the given name from the requested project. getIamPolicy Gets the IAM access control policy for a function. list Returns a list of functions that belong to the requested project. patch Updates existing function. setIamPolicy Sets the IAM access control policy on the specified function. testIamPermissions Tests the specified permissions against the IAM access control policy for a function.
- Resource: CloudFunction JSON representation SourceRepository JSON representation HttpsTrigger JSON representation SecurityLevel EventTrigger JSON representation FailurePolicy JSON representation Retry CloudFunctionStatus VpcConnectorEgressSettings IngressSettings SecretEnvVar JSON representation SecretVolume JSON representation SecretVersion JSON representation DockerRegistry AutomaticUpdatePolicy OnDeployUpdatePolicy JSON representation Methods Resource: CloudFunction Describes a Cloud Function that contains user computation executed in response to an event.

### Cloud Functions API \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest](https://docs.cloud.google.com/functions/docs/reference/rest)
- Source ID: `site-docs-reference-2`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This service provides the following discovery documents: https://cloudfunctions.googleapis.com/$discovery/rest?version=v2 https://cloudfunctions.googleapis.com/$discovery/rest?version=v2beta https://cloudfunctions.googleapis.com/$discovery/rest?version=v2alpha https://cloudfunctions.googleapis.com/$discovery/rest?version=v1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://cloudfunctions.googleapis.com REST Resource: v2beta.projects.locations Methods list GET /v2beta/{name}/locations Lists information about the supported locations for this service.
- REST Resource: v2alpha.projects.locations.functions Methods abortFunctionUpgrade POST /v2alpha/{name}:abortFunctionUpgrade Aborts generation upgrade process for a function with the given name from the specified project. commitFunctionUpgrade POST /v2alpha/{name}:commitFunctionUpgrade Finalizes the upgrade after which function upgrade can not be rolled back. create POST /v2alpha/{parent}/functions Creates a new function. delete DELETE /v2alpha/{name} Deletes a function with the given name from the specified project. detachFunction POST /v2alpha/{name}:detachFunction Detaches 2nd Gen function to Cloud Run function. generateDownloadUrl POST /v2alpha/{name}:generateDownloadUrl Returns a signed URL for downloading deployed function source code. generateUploadUrl POST /v2alpha/{parent}/functions:generateUploadUrl Returns a signed URL for uploading a function source code. get GET /v2alpha/{name} Returns a function with the given name from the requested project. getIamPolicy GET /v2alpha/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v2alpha/{parent}/functions Returns a list of functions that belong to the requested project. patch PATCH /v2alpha/{function.name} Updates existing function. redirectFunctionUpgradeTraffic POST /v2alpha/{name}:redirectFunctionUpgradeTraffic Changes the traffic target of a function from the original 1st Gen function to the 2nd Gen copy. rollbackFunctionUpgradeTraffic POST /v2alpha/{name}:rollbackFunctionUpgradeTraffic Reverts the traffic target of a function from the 2nd Gen copy to the original 1st Gen function. setIamPolicy POST /v2alpha/{resource}:setIamPolicy Sets the access control policy on the specified resource. setupFunctionUpgradeConfig POST /v2alpha/{name}:setupFunctionUpgradeConfig Creates a 2nd Gen copy of the function configuration based on the 1st Gen function with the given name. testIamPermissions POST /v2alpha/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v2beta.projects.locations.functions Methods abortFunctionUpgrade POST /v2beta/{name}:abortFunctionUpgrade Aborts generation upgrade process for a function with the given name from the specified project. commitFunctionUpgrade POST /v2beta/{name}:commitFunctionUpgrade Finalizes the upgrade after which function upgrade can not be rolled back. create POST /v2beta/{parent}/functions Creates a new function. delete DELETE /v2beta/{name} Deletes a function with the given name from the specified project. detachFunction POST /v2beta/{name}:detachFunction Detaches 2nd Gen function to Cloud Run function. generateDownloadUrl POST /v2beta/{name}:generateDownloadUrl Returns a signed URL for downloading deployed function source code. generateUploadUrl POST /v2beta/{parent}/functions:generateUploadUrl Returns a signed URL for uploading a function source code. get GET /v2beta/{name} Returns a function with the given name from the requested project. getIamPolicy GET /v2beta/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v2beta/{parent}/functions Returns a list of functions that belong to the requested project. patch PATCH /v2beta/{function.name} Updates existing function. redirectFunctionUpgradeTraffic POST /v2beta/{name}:redirectFunctionUpgradeTraffic Changes the traffic target of a function from the original 1st Gen function to the 2nd Gen copy. rollbackFunctionUpgradeTraffic POST /v2beta/{name}:rollbackFunctionUpgradeTraffic Reverts the traffic target of a function from the 2nd Gen copy to the original 1st Gen function. setIamPolicy POST /v2beta/{resource}:setIamPolicy Sets the access control policy on the specified resource. setupFunctionUpgradeConfig POST /v2beta/{name}:setupFunctionUpgradeConfig Creates a 2nd Gen copy of the function configuration based on the 1st Gen function with the given name. testIamPermissions POST /v2beta/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource.

