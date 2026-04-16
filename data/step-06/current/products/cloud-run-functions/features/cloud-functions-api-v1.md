---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:19.170Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Cloud Functions API v1"
feature_slug: "cloud-functions-api-v1"
latest_feature_date: "2017-10-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/functions/docs/securing/authenticating"
  - "https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions"
  - "https://docs.cloud.google.com/functions/docs/reference/rest"
keywords:
  - "functions"
  - "v1"
  - "generally"
  - "available"
  - "managing"
---

# Cloud Functions API v1

Product: Cloud Run functions
Coverage: MEDIUM

## Step 02 Summary

Cloud Functions API v1 is the generally available API for managing functions.

## Extended Definition

Cloud Functions API v1 is the generally available API for managing functions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/securing/authenticating](https://docs.cloud.google.com/functions/docs/securing/authenticating)
- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)
- [https://docs.cloud.google.com/functions/docs/reference/rest](https://docs.cloud.google.com/functions/docs/reference/rest)

## Supporting Pages

### "Authenticate for invocation \_|\_ Cloud Run functions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/functions/docs/securing/authenticating](https://docs.cloud.google.com/functions/docs/securing/authenticating)
- Source ID: `site-iam-reference`
- Final score: 56
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Run functions supports two different kinds of identities, which are also called principals : Service accounts: These are special accounts that serve as the identity of a non-person, like a function or an application or a VM.
- Authenticate for invocation This document provides supplemental information on how to invoke functions created using the Cloud Functions v2 API —for example, using gcloud functions , the REST API, or Terraform.
- HTTP functions, however, can be invoked by different identity types originating from different places, such as by a developer testing the function or by another service using the function.
- The topics covered in the Cloud Run guides also apply to functions created using the Cloud Functions v2 API , since v2 functions also use the Cloud Run Invoker role ( roles/run.invoker ).

### "REST Resource: projects.locations.functions \_|\_ Cloud Run functions \_\

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)
- Source ID: `site-docs-root`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "name" : string , "description" : string , "status" : enum ( CloudFunctionStatus ) , "entryPoint" : string , "runtime" : string , "timeout" : string , "availableMemoryMb" : integer , "serviceAccountEmail" : string , "updateTime" : string , "versionId" : string , "labels" : { string : string , ... } , "environmentVariables" : { string : string , ... } , "buildEnvironmentVariables" : { string : string , ... } , "network" : string , "maxInstances" : integer , "minInstances" : integer , "vpcConnector" : string , "vpcConnectorEgressSettings" : enum ( VpcConnectorEgressSettings ) , "ingressSettings" : enum ( IngressSettings ) , "kmsKeyName" : string , "buildWorkerPool" : string , "buildId" : string , "buildName" : string , "secretEnvironmentVariables" : [ { object ( SecretEnvVar ) } ] , "secretVolumes" : [ { object ( SecretVolume ) } ] , "sourceToken" : string , "dockerRepository" : string , "dockerRegistry" : enum ( DockerRegistry ) , "buildServiceAccount" : string , "satisfiesPzs" : boolean , "satisfiesPzi" : boolean , // Union field source code can be only one of the following: "sourceArchiveUrl" : string , "sourceRepository" : { object ( SourceRepository ) } , "sourceUploadUrl" : string // End of list of possible types for union field source code . // Union field trigger can be only one of the following: "httpsTrigger" : { object ( HttpsTrigger ) } , "eventTrigger" : { object ( EventTrigger ) } // End of list of possible types for union field trigger . // Union field runtime update policy can be only one of the following: "automaticUpdatePolicy" : { object ( AutomaticUpdatePolicy ) } , "onDeployUpdatePolicy" : { object ( OnDeployUpdatePolicy ) } // End of list of possible types for union field runtime update policy . } Fields name string A user-defined name of the function.
- Methods call Synchronously invokes a deployed Cloud Function. create Creates a new function. delete Deletes a function with the given name from the specified project. generateDownloadUrl Returns a signed URL for downloading deployed function source code. generateUploadUrl Returns a signed URL for uploading a function source code. get Returns a function with the given name from the requested project. getIamPolicy Gets the IAM access control policy for a function. list Returns a list of functions that belong to the requested project. patch Updates existing function. setIamPolicy Sets the IAM access control policy on the specified function. testIamPermissions Tests the specified permissions against the IAM access control policy for a function.
- Resource: CloudFunction JSON representation SourceRepository JSON representation HttpsTrigger JSON representation SecurityLevel EventTrigger JSON representation FailurePolicy JSON representation Retry CloudFunctionStatus VpcConnectorEgressSettings IngressSettings SecretEnvVar JSON representation SecretVolume JSON representation SecretVersion JSON representation DockerRegistry AutomaticUpdatePolicy OnDeployUpdatePolicy JSON representation Methods Resource: CloudFunction Describes a Cloud Function that contains user computation executed in response to an event.
- The location of the function source code. source code can be only one of the following: sourceArchiveUrl string The Google Cloud Storage URL, starting with gs:// , pointing to the zip archive which contains the function. sourceRepository object ( SourceRepository ) Beta Feature The source repository where a function is hosted. sourceUploadUrl string The Google Cloud Storage signed URL used for source uploading, generated by calling [google.cloud.functions.v1.GenerateUploadUrl].

### Cloud Functions API \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest](https://docs.cloud.google.com/functions/docs/reference/rest)
- Source ID: `site-docs-reference-2`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v2alpha.projects.locations.functions Methods abortFunctionUpgrade POST /v2alpha/{name}:abortFunctionUpgrade Aborts generation upgrade process for a function with the given name from the specified project. commitFunctionUpgrade POST /v2alpha/{name}:commitFunctionUpgrade Finalizes the upgrade after which function upgrade can not be rolled back. create POST /v2alpha/{parent}/functions Creates a new function. delete DELETE /v2alpha/{name} Deletes a function with the given name from the specified project. detachFunction POST /v2alpha/{name}:detachFunction Detaches 2nd Gen function to Cloud Run function. generateDownloadUrl POST /v2alpha/{name}:generateDownloadUrl Returns a signed URL for downloading deployed function source code. generateUploadUrl POST /v2alpha/{parent}/functions:generateUploadUrl Returns a signed URL for uploading a function source code. get GET /v2alpha/{name} Returns a function with the given name from the requested project. getIamPolicy GET /v2alpha/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v2alpha/{parent}/functions Returns a list of functions that belong to the requested project. patch PATCH /v2alpha/{function.name} Updates existing function. redirectFunctionUpgradeTraffic POST /v2alpha/{name}:redirectFunctionUpgradeTraffic Changes the traffic target of a function from the original 1st Gen function to the 2nd Gen copy. rollbackFunctionUpgradeTraffic POST /v2alpha/{name}:rollbackFunctionUpgradeTraffic Reverts the traffic target of a function from the 2nd Gen copy to the original 1st Gen function. setIamPolicy POST /v2alpha/{resource}:setIamPolicy Sets the access control policy on the specified resource. setupFunctionUpgradeConfig POST /v2alpha/{name}:setupFunctionUpgradeConfig Creates a 2nd Gen copy of the function configuration based on the 1st Gen function with the given name. testIamPermissions POST /v2alpha/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v2beta.projects.locations.functions Methods abortFunctionUpgrade POST /v2beta/{name}:abortFunctionUpgrade Aborts generation upgrade process for a function with the given name from the specified project. commitFunctionUpgrade POST /v2beta/{name}:commitFunctionUpgrade Finalizes the upgrade after which function upgrade can not be rolled back. create POST /v2beta/{parent}/functions Creates a new function. delete DELETE /v2beta/{name} Deletes a function with the given name from the specified project. detachFunction POST /v2beta/{name}:detachFunction Detaches 2nd Gen function to Cloud Run function. generateDownloadUrl POST /v2beta/{name}:generateDownloadUrl Returns a signed URL for downloading deployed function source code. generateUploadUrl POST /v2beta/{parent}/functions:generateUploadUrl Returns a signed URL for uploading a function source code. get GET /v2beta/{name} Returns a function with the given name from the requested project. getIamPolicy GET /v2beta/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v2beta/{parent}/functions Returns a list of functions that belong to the requested project. patch PATCH /v2beta/{function.name} Updates existing function. redirectFunctionUpgradeTraffic POST /v2beta/{name}:redirectFunctionUpgradeTraffic Changes the traffic target of a function from the original 1st Gen function to the 2nd Gen copy. rollbackFunctionUpgradeTraffic POST /v2beta/{name}:rollbackFunctionUpgradeTraffic Reverts the traffic target of a function from the 2nd Gen copy to the original 1st Gen function. setIamPolicy POST /v2beta/{resource}:setIamPolicy Sets the access control policy on the specified resource. setupFunctionUpgradeConfig POST /v2beta/{name}:setupFunctionUpgradeConfig Creates a 2nd Gen copy of the function configuration based on the 1st Gen function with the given name. testIamPermissions POST /v2beta/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v2.projects.locations.functions Methods abortFunctionUpgrade POST /v2/{name}:abortFunctionUpgrade Aborts generation upgrade process for a function with the given name from the specified project. commitFunctionUpgrade POST /v2/{name}:commitFunctionUpgrade Finalizes the upgrade after which function upgrade can not be rolled back. create POST /v2/{parent}/functions Creates a new function. delete DELETE /v2/{name} Deletes a function with the given name from the specified project. detachFunction POST /v2/{name}:detachFunction Detaches 2nd Gen function to Cloud Run function. generateDownloadUrl POST /v2/{name}:generateDownloadUrl Returns a signed URL for downloading deployed function source code. generateUploadUrl POST /v2/{parent}/functions:generateUploadUrl Returns a signed URL for uploading a function source code. get GET /v2/{name} Returns a function with the given name from the requested project. getIamPolicy GET /v2/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v2/{parent}/functions Returns a list of functions that belong to the requested project. patch PATCH /v2/{function.name} Updates existing function. redirectFunctionUpgradeTraffic POST /v2/{name}:redirectFunctionUpgradeTraffic Changes the traffic target of a function from the original 1st Gen function to the 2nd Gen copy. rollbackFunctionUpgradeTraffic POST /v2/{name}:rollbackFunctionUpgradeTraffic Reverts the traffic target of a function from the 2nd Gen copy to the original 1st Gen function. setIamPolicy POST /v2/{resource}:setIamPolicy Sets the access control policy on the specified resource. setupFunctionUpgradeConfig POST /v2/{name}:setupFunctionUpgradeConfig Creates a 2nd Gen copy of the function configuration based on the 1st Gen function with the given name. testIamPermissions POST /v2/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v1.projects.locations.functions Methods call POST /v1/{name}:call Synchronously invokes a deployed Cloud Function. create POST /v1/{location}/functions Creates a new function. delete DELETE /v1/{name} Deletes a function with the given name from the specified project. generateDownloadUrl POST /v1/{name}:generateDownloadUrl Returns a signed URL for downloading deployed function source code. generateUploadUrl POST /v1/{parent}/functions:generateUploadUrl Returns a signed URL for uploading a function source code. get GET /v1/{name} Returns a function with the given name from the requested project. getIamPolicy GET /v1/{resource}:getIamPolicy Gets the IAM access control policy for a function. list GET /v1/{parent}/functions Returns a list of functions that belong to the requested project. patch PATCH /v1/{function.name} Updates existing function. setIamPolicy POST /v1/{resource}:setIamPolicy Sets the IAM access control policy on the specified function. testIamPermissions POST /v1/{resource}:testIamPermissions Tests the specified permissions against the IAM access control policy for a function.

