---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:19.000Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Cloud Functions v2 API support for reading 1st gen functions"
feature_slug: "cloud-functions-v2-api-support-for-reading-1st-gen-functions"
latest_feature_date: "2022-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/functions/docs/reference/rest"
  - "https://docs.cloud.google.com/functions/docs/securing/custom-constraints"
  - "https://docs.cloud.google.com/functions/docs/monitoring/audit-logging"
keywords:
  - "functions"
  - "v2"
  - "reading"
  - "1st"
  - "gen"
  - "cloudfunctions"
  - "googleapis"
  - "com"
---

# Cloud Functions v2 API support for reading 1st gen functions

Product: Cloud Run functions
Coverage: MEDIUM

## Step 02 Summary

The cloudfunctions.googleapis.com/v2 API supports get and list operations for 1st gen functions and exposes environment filtering.

## Extended Definition

The cloudfunctions.googleapis.com/v2 API supports get and list operations for 1st gen functions and exposes environment filtering.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/reference/rest](https://docs.cloud.google.com/functions/docs/reference/rest)
- [https://docs.cloud.google.com/functions/docs/securing/custom-constraints](https://docs.cloud.google.com/functions/docs/securing/custom-constraints)
- [https://docs.cloud.google.com/functions/docs/monitoring/audit-logging](https://docs.cloud.google.com/functions/docs/monitoring/audit-logging)

## Supporting Pages

### Cloud Functions API \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest](https://docs.cloud.google.com/functions/docs/reference/rest)
- Source ID: `site-docs-reference-2`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v2beta.projects.locations REST Resource: v2beta.projects.locations.functions REST Resource: v2beta.projects.locations.operations REST Resource: v2beta.projects.locations.runtimes REST Resource: v2alpha.projects.locations REST Resource: v2alpha.projects.locations.functions REST Resource: v2alpha.projects.locations.operations REST Resource: v2alpha.projects.locations.runtimes REST Resource: v2.projects.locations REST Resource: v2.projects.locations.functions REST Resource: v2.projects.locations.operations REST Resource: v2.projects.locations.runtimes REST Resource: v1.operations REST Resource: v1.projects.locations REST Resource: v1.projects.locations.functions Service: cloudfunctions.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- This service provides the following discovery documents: https://cloudfunctions.googleapis.com/$discovery/rest?version=v2 https://cloudfunctions.googleapis.com/$discovery/rest?version=v2beta https://cloudfunctions.googleapis.com/$discovery/rest?version=v2alpha https://cloudfunctions.googleapis.com/$discovery/rest?version=v1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://cloudfunctions.googleapis.com REST Resource: v2beta.projects.locations Methods list GET /v2beta/{name}/locations Lists information about the supported locations for this service.
- REST Resource: v2alpha.projects.locations.functions Methods abortFunctionUpgrade POST /v2alpha/{name}:abortFunctionUpgrade Aborts generation upgrade process for a function with the given name from the specified project. commitFunctionUpgrade POST /v2alpha/{name}:commitFunctionUpgrade Finalizes the upgrade after which function upgrade can not be rolled back. create POST /v2alpha/{parent}/functions Creates a new function. delete DELETE /v2alpha/{name} Deletes a function with the given name from the specified project. detachFunction POST /v2alpha/{name}:detachFunction Detaches 2nd Gen function to Cloud Run function. generateDownloadUrl POST /v2alpha/{name}:generateDownloadUrl Returns a signed URL for downloading deployed function source code. generateUploadUrl POST /v2alpha/{parent}/functions:generateUploadUrl Returns a signed URL for uploading a function source code. get GET /v2alpha/{name} Returns a function with the given name from the requested project. getIamPolicy GET /v2alpha/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v2alpha/{parent}/functions Returns a list of functions that belong to the requested project. patch PATCH /v2alpha/{function.name} Updates existing function. redirectFunctionUpgradeTraffic POST /v2alpha/{name}:redirectFunctionUpgradeTraffic Changes the traffic target of a function from the original 1st Gen function to the 2nd Gen copy. rollbackFunctionUpgradeTraffic POST /v2alpha/{name}:rollbackFunctionUpgradeTraffic Reverts the traffic target of a function from the 2nd Gen copy to the original 1st Gen function. setIamPolicy POST /v2alpha/{resource}:setIamPolicy Sets the access control policy on the specified resource. setupFunctionUpgradeConfig POST /v2alpha/{name}:setupFunctionUpgradeConfig Creates a 2nd Gen copy of the function configuration based on the 1st Gen function with the given name. testIamPermissions POST /v2alpha/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource.

### "Manage function resources using custom constraints \_|\_ Cloud Run functions\

- URL: [https://docs.cloud.google.com/functions/docs/securing/custom-constraints](https://docs.cloud.google.com/functions/docs/securing/custom-constraints)
- Source ID: `site-iam-reference`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Common organization policy examples The following table provides the syntax of some custom organization policies that you might find useful: Description Constraint syntax Prevent functions from being created with a specific language name : organizations/ ORGANIZATION ID /customConstraints/custom.cloudFunctionRuntimeBlock resource types : cloudfunctions.googleapis.com/Function method types : - CREATE - UPDATE condition : resource.buildConfig.runtime == "python312" action type : DENY display name : Deny functions using Python 3.12 description : Functions cannot be created with Python 3.12 as the language runtime Require functions to use a specific worker pool name : organizations/ ORGANIZATION ID /customConstraints/custom.cloudFunctionsWorkerPool resource types : cloudfunctions.googleapis.com/Function method types : - CREATE - UPDATE condition : resource.buildConfig.workerPool == " WORKER POOL " action type : DENY display name : Require worker pool description : Functions must use a worker pool Replace WORKER POOL with the name of your Cloud Build worker pool.
- Require that functions store all container images in a specific image repository name : organizations/ ORGANIZATION ID /customConstraints/custom.cloudFunctionsRepository resource types : cloudfunctions.googleapis.com/Function method types : - CREATE - UPDATE condition : resource.buildConfig.dockerRepository.startsWith(" REPO PATH ") action type : DENY display name : Image repository constraint description : Functions must push images to a central image repository under REPO PATH Replace REPO PATH with the URI of the image repository URL that you want all functions to store their container images in.
- Manage function resources using custom constraints Note: If you've created or deployed functions using Cloud Run, see Cloud Run's Manage custom constraints for projects guide for a detailed description of how to use custom constraints.
- This page provides supplemental information for setting custom constraints on functions created using the Cloud Functions v2 API , such as through the gcloud functions commands.

### Functions audit logging \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/monitoring/audit-logging](https://docs.cloud.google.com/functions/docs/monitoring/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Cloud Run functions audit logs use the service name cloudfunctions.googleapis.com .
- Filter for this service: protoPayload . serviceName = "cloudfunctions.googleapis.com" Methods by permission type Each IAM permission has a type property, whose value is an enum that can be one of four values: ADMIN READ , ADMIN WRITE , DATA READ , or DATA WRITE .
- Permission type Methods ADMIN READ google.cloud.functions.v1.CloudFunctionsService.GenerateDownloadUrl google.cloud.functions.v1.CloudFunctionsService.GetFunction GetIamPolicy google.cloud.functions.v1.CloudFunctionsService.ListFunctions google.cloud.functions.v2.FunctionService.GenerateDownloadUrl google.cloud.functions.v2.FunctionService.GetFunction google.cloud.functions.v2.FunctionService.ListFunctions google.cloud.functions.v2alpha.FunctionService.GenerateDownloadUrl google.cloud.functions.v2alpha.FunctionService.GetFunction google.cloud.functions.v2alpha.FunctionService.ListFunctions google.cloud.functions.v2beta.FunctionService.GenerateDownloadUrl google.cloud.functions.v2beta.FunctionService.GetFunction google.cloud.functions.v2beta.FunctionService.ListFunctions google.cloud.location.Locations.ListLocations GetIamPolicy google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations ADMIN WRITE google.cloud.functions.v1.CloudFunctionsService.CreateFunction (LRO) google.cloud.functions.v1.CloudFunctionsService.DeleteFunction (LRO) google.cloud.functions.v1.CloudFunctionsService.GenerateUploadUrl SetIamPolicy google.cloud.functions.v1.CloudFunctionsService.UpdateFunction (LRO) google.cloud.functions.v2.FunctionService.AbortFunctionUpgrade (LRO) google.cloud.functions.v2.FunctionService.CommitFunctionUpgrade (LRO) google.cloud.functions.v2.FunctionService.CreateFunction (LRO) google.cloud.functions.v2.FunctionService.DeleteFunction (LRO) google.cloud.functions.v2.FunctionService.DetachFunction (LRO) google.cloud.functions.v2.FunctionService.GenerateUploadUrl google.cloud.functions.v2.FunctionService.RedirectFunctionUpgradeTraffic (LRO) google.cloud.functions.v2.FunctionService.RollbackFunctionUpgradeTraffic (LRO) google.cloud.functions.v2.FunctionService.SetupFunctionUpgradeConfig (LRO) google.cloud.functions.v2.FunctionService.UpdateFunction (LRO) google.cloud.functions.v2alpha.FunctionService.AbortFunctionUpgrade (LRO) google.cloud.functions.v2alpha.FunctionService.CommitFunctionUpgrade (LRO) google.cloud.functions.v2alpha.FunctionService.CreateFunction (LRO) google.cloud.functions.v2alpha.FunctionService.DeleteFunction (LRO) google.cloud.functions.v2alpha.FunctionService.DetachFunction (LRO) google.cloud.functions.v2alpha.FunctionService.GenerateUploadUrl google.cloud.functions.v2alpha.FunctionService.RedirectFunctionUpgradeTraffic (LRO) google.cloud.functions.v2alpha.FunctionService.RollbackFunctionUpgradeTraffic (LRO) google.cloud.functions.v2alpha.FunctionService.SetupFunctionUpgradeConfig (LRO) google.cloud.functions.v2alpha.FunctionService.UpdateFunction (LRO) google.cloud.functions.v2beta.FunctionService.AbortFunctionUpgrade (LRO) google.cloud.functions.v2beta.FunctionService.CommitFunctionUpgrade (LRO) google.cloud.functions.v2beta.FunctionService.CreateFunction (LRO) google.cloud.functions.v2beta.FunctionService.DeleteFunction (LRO) google.cloud.functions.v2beta.FunctionService.DetachFunction (LRO) google.cloud.functions.v2beta.FunctionService.GenerateUploadUrl google.cloud.functions.v2beta.FunctionService.RedirectFunctionUpgradeTraffic (LRO) google.cloud.functions.v2beta.FunctionService.RollbackFunctionUpgradeTraffic (LRO) google.cloud.functions.v2beta.FunctionService.SetupFunctionUpgradeConfig (LRO) google.cloud.functions.v2beta.FunctionService.UpdateFunction (LRO) SetIamPolicy DATA READ google.cloud.functions.v1.CloudFunctionsService.CallFunction API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Cloud Run functions. google.cloud.functions.v1.CloudFunctionsService The following audit logs are associated with methods belonging to google.cloud.functions.v1.CloudFunctionsService .
- AbortFunctionUpgrade Method : google.cloud.functions.v2alpha.FunctionService.AbortFunctionUpgrade Audit log type : Admin activity Permissions : cloudfunctions.functions.generationUpgrade - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.functions.v2alpha.FunctionService.AbortFunctionUpgrade" CommitFunctionUpgrade Method : google.cloud.functions.v2alpha.FunctionService.CommitFunctionUpgrade Audit log type : Admin activity Permissions : cloudfunctions.functions.generationUpgrade - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.functions.v2alpha.FunctionService.CommitFunctionUpgrade" CreateFunction Method : google.cloud.functions.v2alpha.FunctionService.CreateFunction Audit log type : Admin activity Permissions : cloudfunctions.functions.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.functions.v2alpha.FunctionService.CreateFunction" DeleteFunction Method : google.cloud.functions.v2alpha.FunctionService.DeleteFunction Audit log type : Admin activity Permissions : cloudfunctions.functions.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.functions.v2alpha.FunctionService.DeleteFunction" DetachFunction Method : google.cloud.functions.v2alpha.FunctionService.DetachFunction Audit log type : Admin activity Permissions : cloudfunctions.functions.generationUpgrade - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.functions.v2alpha.FunctionService.DetachFunction" GenerateDownloadUrl Method : google.cloud.functions.v2alpha.FunctionService.GenerateDownloadUrl Audit log type : Data access Permissions : cloudfunctions.functions.sourceCodeGet - ADMIN READ Method is a long-running or streaming operation : No.

