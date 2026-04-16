---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:18.913Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Detach v2 functions to Cloud Run Admin API"
feature_slug: "detach-v2-functions-to-cloud-run-admin-api"
latest_feature_date: "2025-02-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/functions/docs/managing"
  - "https://docs.cloud.google.com/functions/docs/monitoring/audit-logging"
  - "https://docs.cloud.google.com/functions/docs/securing/managing-access-iam"
keywords:
  - "detach"
  - "v2"
  - "functions"
  - "run"
  - "admin"
  - "created"
  - "can"
  - "detached"
---

# Detach v2 functions to Cloud Run Admin API

Product: Cloud Run functions
Coverage: MEDIUM

## Step 02 Summary

Cloud Run functions created with the Cloud Functions v2 API can be detached for management only through the Cloud Run Admin API.

## Extended Definition

Cloud Run functions created with the Cloud Functions v2 API can be detached for management only through the Cloud Run Admin API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing)
- [https://docs.cloud.google.com/functions/docs/monitoring/audit-logging](https://docs.cloud.google.com/functions/docs/monitoring/audit-logging)
- [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam)

## Supporting Pages

### Manage functions \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing)
- Source ID: `site-iam-reference`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Functions created using the Cloud Functions v2 API (for example, by using gcloud functions , the REST API, or Terraform) can be managed with the Cloud Run Admin API as well as the Cloud Functions v2 API.
- Note: If you created a Cloud Run function using gcloud run commands or the Cloud Run Admin API, you can't manage that function with gcloud functions commands or the Cloud Functions v2 API.
- Manage functions This guide shows you how to manage and detach a function that was created with the gcloud functions command.
- When a function is successfully detached, a new Cloud Run revision is created.

### Functions audit logging \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/monitoring/audit-logging](https://docs.cloud.google.com/functions/docs/monitoring/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.functions.v1.CloudFunctionsService.GenerateDownloadUrl google.cloud.functions.v1.CloudFunctionsService.GetFunction GetIamPolicy google.cloud.functions.v1.CloudFunctionsService.ListFunctions google.cloud.functions.v2.FunctionService.GenerateDownloadUrl google.cloud.functions.v2.FunctionService.GetFunction google.cloud.functions.v2.FunctionService.ListFunctions google.cloud.functions.v2alpha.FunctionService.GenerateDownloadUrl google.cloud.functions.v2alpha.FunctionService.GetFunction google.cloud.functions.v2alpha.FunctionService.ListFunctions google.cloud.functions.v2beta.FunctionService.GenerateDownloadUrl google.cloud.functions.v2beta.FunctionService.GetFunction google.cloud.functions.v2beta.FunctionService.ListFunctions google.cloud.location.Locations.ListLocations GetIamPolicy google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations ADMIN WRITE google.cloud.functions.v1.CloudFunctionsService.CreateFunction (LRO) google.cloud.functions.v1.CloudFunctionsService.DeleteFunction (LRO) google.cloud.functions.v1.CloudFunctionsService.GenerateUploadUrl SetIamPolicy google.cloud.functions.v1.CloudFunctionsService.UpdateFunction (LRO) google.cloud.functions.v2.FunctionService.AbortFunctionUpgrade (LRO) google.cloud.functions.v2.FunctionService.CommitFunctionUpgrade (LRO) google.cloud.functions.v2.FunctionService.CreateFunction (LRO) google.cloud.functions.v2.FunctionService.DeleteFunction (LRO) google.cloud.functions.v2.FunctionService.DetachFunction (LRO) google.cloud.functions.v2.FunctionService.GenerateUploadUrl google.cloud.functions.v2.FunctionService.RedirectFunctionUpgradeTraffic (LRO) google.cloud.functions.v2.FunctionService.RollbackFunctionUpgradeTraffic (LRO) google.cloud.functions.v2.FunctionService.SetupFunctionUpgradeConfig (LRO) google.cloud.functions.v2.FunctionService.UpdateFunction (LRO) google.cloud.functions.v2alpha.FunctionService.AbortFunctionUpgrade (LRO) google.cloud.functions.v2alpha.FunctionService.CommitFunctionUpgrade (LRO) google.cloud.functions.v2alpha.FunctionService.CreateFunction (LRO) google.cloud.functions.v2alpha.FunctionService.DeleteFunction (LRO) google.cloud.functions.v2alpha.FunctionService.DetachFunction (LRO) google.cloud.functions.v2alpha.FunctionService.GenerateUploadUrl google.cloud.functions.v2alpha.FunctionService.RedirectFunctionUpgradeTraffic (LRO) google.cloud.functions.v2alpha.FunctionService.RollbackFunctionUpgradeTraffic (LRO) google.cloud.functions.v2alpha.FunctionService.SetupFunctionUpgradeConfig (LRO) google.cloud.functions.v2alpha.FunctionService.UpdateFunction (LRO) google.cloud.functions.v2beta.FunctionService.AbortFunctionUpgrade (LRO) google.cloud.functions.v2beta.FunctionService.CommitFunctionUpgrade (LRO) google.cloud.functions.v2beta.FunctionService.CreateFunction (LRO) google.cloud.functions.v2beta.FunctionService.DeleteFunction (LRO) google.cloud.functions.v2beta.FunctionService.DetachFunction (LRO) google.cloud.functions.v2beta.FunctionService.GenerateUploadUrl google.cloud.functions.v2beta.FunctionService.RedirectFunctionUpgradeTraffic (LRO) google.cloud.functions.v2beta.FunctionService.RollbackFunctionUpgradeTraffic (LRO) google.cloud.functions.v2beta.FunctionService.SetupFunctionUpgradeConfig (LRO) google.cloud.functions.v2beta.FunctionService.UpdateFunction (LRO) SetIamPolicy DATA READ google.cloud.functions.v1.CloudFunctionsService.CallFunction API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Cloud Run functions. google.cloud.functions.v1.CloudFunctionsService The following audit logs are associated with methods belonging to google.cloud.functions.v1.CloudFunctionsService .
- AbortFunctionUpgrade Method : google.cloud.functions.v2alpha.FunctionService.AbortFunctionUpgrade Audit log type : Admin activity Permissions : cloudfunctions.functions.generationUpgrade - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.functions.v2alpha.FunctionService.AbortFunctionUpgrade" CommitFunctionUpgrade Method : google.cloud.functions.v2alpha.FunctionService.CommitFunctionUpgrade Audit log type : Admin activity Permissions : cloudfunctions.functions.generationUpgrade - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.functions.v2alpha.FunctionService.CommitFunctionUpgrade" CreateFunction Method : google.cloud.functions.v2alpha.FunctionService.CreateFunction Audit log type : Admin activity Permissions : cloudfunctions.functions.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.functions.v2alpha.FunctionService.CreateFunction" DeleteFunction Method : google.cloud.functions.v2alpha.FunctionService.DeleteFunction Audit log type : Admin activity Permissions : cloudfunctions.functions.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.functions.v2alpha.FunctionService.DeleteFunction" DetachFunction Method : google.cloud.functions.v2alpha.FunctionService.DetachFunction Audit log type : Admin activity Permissions : cloudfunctions.functions.generationUpgrade - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.functions.v2alpha.FunctionService.DetachFunction" GenerateDownloadUrl Method : google.cloud.functions.v2alpha.FunctionService.GenerateDownloadUrl Audit log type : Data access Permissions : cloudfunctions.functions.sourceCodeGet - ADMIN READ Method is a long-running or streaming operation : No.
- AbortFunctionUpgrade Method : google.cloud.functions.v2beta.FunctionService.AbortFunctionUpgrade Audit log type : Admin activity Permissions : cloudfunctions.functions.generationUpgrade - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.functions.v2beta.FunctionService.AbortFunctionUpgrade" CommitFunctionUpgrade Method : google.cloud.functions.v2beta.FunctionService.CommitFunctionUpgrade Audit log type : Admin activity Permissions : cloudfunctions.functions.generationUpgrade - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.functions.v2beta.FunctionService.CommitFunctionUpgrade" CreateFunction Method : google.cloud.functions.v2beta.FunctionService.CreateFunction Audit log type : Admin activity Permissions : cloudfunctions.functions.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.functions.v2beta.FunctionService.CreateFunction" DeleteFunction Method : google.cloud.functions.v2beta.FunctionService.DeleteFunction Audit log type : Admin activity Permissions : cloudfunctions.functions.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.functions.v2beta.FunctionService.DeleteFunction" DetachFunction Method : google.cloud.functions.v2beta.FunctionService.DetachFunction Audit log type : Admin activity Permissions : cloudfunctions.functions.generationUpgrade - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.functions.v2beta.FunctionService.DetachFunction" GenerateDownloadUrl Method : google.cloud.functions.v2beta.FunctionService.GenerateDownloadUrl Audit log type : Data access Permissions : cloudfunctions.functions.sourceCodeGet - ADMIN READ Method is a long-running or streaming operation : No.
- AbortFunctionUpgrade Method : google.cloud.functions.v2.FunctionService.AbortFunctionUpgrade Audit log type : Admin activity Permissions : cloudfunctions.functions.generationUpgrade - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.functions.v2.FunctionService.AbortFunctionUpgrade" CommitFunctionUpgrade Method : google.cloud.functions.v2.FunctionService.CommitFunctionUpgrade Audit log type : Admin activity Permissions : cloudfunctions.functions.generationUpgrade - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.functions.v2.FunctionService.CommitFunctionUpgrade" CreateFunction Method : google.cloud.functions.v2.FunctionService.CreateFunction Audit log type : Admin activity Permissions : cloudfunctions.functions.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.functions.v2.FunctionService.CreateFunction" DeleteFunction Method : google.cloud.functions.v2.FunctionService.DeleteFunction Audit log type : Admin activity Permissions : cloudfunctions.functions.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.functions.v2.FunctionService.DeleteFunction" DetachFunction Method : google.cloud.functions.v2.FunctionService.DetachFunction Audit log type : Admin activity Permissions : cloudfunctions.functions.generationUpgrade - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.functions.v2.FunctionService.DetachFunction" GenerateDownloadUrl Method : google.cloud.functions.v2.FunctionService.GenerateDownloadUrl Audit log type : Data access Permissions : cloudfunctions.functions.sourceCodeGet - ADMIN READ Method is a long-running or streaming operation : No.

### Authorize access with IAM \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam)
- Source ID: `site-iam-reference`
- Final score: 70
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Viewing principals To view principals, use the gcloud functions get-iam-policy command: gcloud functions get-iam-policy FUNCTION NAME Allowing unauthenticated HTTP function invocation Note: If you created functions using the Cloud Run Admin API, see the Allowing public (unauthenticated) access guide instead.
- Authorize access with IAM You use Identity and Access Management (IAM) to authorize identities to perform administrative actions on functions created using the Cloud Functions v2 API —for example, using gcloud functions , the REST API, or Terraform.
- Before you begin To get the permission that you need to control access for a specific function or all functions in a project, ask your administrator to grant you the Cloud Functions Admin ( roles/roles/cloudfunctions.admin ) IAM role on the function or the project.
- For functions created with the Cloud Functions v2 API, you must specify allow unauthenticated invocations at or after deployment.

