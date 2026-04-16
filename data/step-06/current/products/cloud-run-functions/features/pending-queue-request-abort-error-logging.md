---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:19.026Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Pending queue request abort error logging"
feature_slug: "pending-queue-request-abort-error-logging"
latest_feature_date: "2021-07-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/functions/docs/troubleshooting"
  - "https://docs.cloud.google.com/functions/docs/monitoring/audit-logging"
  - "https://docs.cloud.google.com/functions/docs/reference/headers"
keywords:
  - "pending"
  - "queue"
  - "request"
  - "abort"
  - "error"
  - "logging"
  - "errors"
  - "logged"
---

# Pending queue request abort error logging

Product: Cloud Run functions
Coverage: MEDIUM

## Step 02 Summary

Pending queue request abort errors are logged for functions.

## Extended Definition

Pending queue request abort errors are logged for functions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)
- [https://docs.cloud.google.com/functions/docs/monitoring/audit-logging](https://docs.cloud.google.com/functions/docs/monitoring/audit-logging)
- [https://docs.cloud.google.com/functions/docs/reference/headers](https://docs.cloud.google.com/functions/docs/reference/headers)

## Supporting Pages

### Troubleshoot Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)
- Source ID: `site-iam-reference`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Logging errors related to pending queue request aborts Scaling failures can occur from the following scenarios: A huge sudden increase in traffic.
- Example import logging import traceback def try catch log(wrapped func): def wrapper( args, kwargs): try: response = wrapped func( args, kwargs) except Exception: Replace new lines with spaces so as to prevent several entries which would trigger several errors. error message = traceback.format exc().replace('\n', ' ') logging.error(error message) return 'Error'; return response; return wrapper; #Example hello world function @try catch log def python hello world(request): request args = request.args if request args and 'name' in request args: 1 + 's' return 'Hello World!' Logs too large in Node.js 10+, Python 3.8, Go 1.13, and Java 11 The maximum size for a regular log entry in these runtimes is 105 KiB.
- The error message The request was aborted because there was no available instance severity=WARNING ( Response code: 429 ) Cloud Run functions cannot scale due to the max-instances limit you set during configuration. severity=ERROR ( Response code: 500 ) Cloud Run functions intrinsically cannot manage the rate of traffic.
- The solution If your function terminates early, you should make sure all your function's asynchronous tasks are complete before your function performs any of the following actions: Returning a value Resolving or rejecting a returned Promise object (Node.js functions only) Throwing uncaught exceptions or errors Sending an HTTP response Calling a callback function If your function fails to terminate after completing asynchronous tasks, you should verify that your function is correctly signaling Cloud Run functions after it has completed.

### Functions audit logging \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/monitoring/audit-logging](https://docs.cloud.google.com/functions/docs/monitoring/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.functions.v1.CloudFunctionsService.GenerateDownloadUrl google.cloud.functions.v1.CloudFunctionsService.GetFunction GetIamPolicy google.cloud.functions.v1.CloudFunctionsService.ListFunctions google.cloud.functions.v2.FunctionService.GenerateDownloadUrl google.cloud.functions.v2.FunctionService.GetFunction google.cloud.functions.v2.FunctionService.ListFunctions google.cloud.functions.v2alpha.FunctionService.GenerateDownloadUrl google.cloud.functions.v2alpha.FunctionService.GetFunction google.cloud.functions.v2alpha.FunctionService.ListFunctions google.cloud.functions.v2beta.FunctionService.GenerateDownloadUrl google.cloud.functions.v2beta.FunctionService.GetFunction google.cloud.functions.v2beta.FunctionService.ListFunctions google.cloud.location.Locations.ListLocations GetIamPolicy google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations ADMIN WRITE google.cloud.functions.v1.CloudFunctionsService.CreateFunction (LRO) google.cloud.functions.v1.CloudFunctionsService.DeleteFunction (LRO) google.cloud.functions.v1.CloudFunctionsService.GenerateUploadUrl SetIamPolicy google.cloud.functions.v1.CloudFunctionsService.UpdateFunction (LRO) google.cloud.functions.v2.FunctionService.AbortFunctionUpgrade (LRO) google.cloud.functions.v2.FunctionService.CommitFunctionUpgrade (LRO) google.cloud.functions.v2.FunctionService.CreateFunction (LRO) google.cloud.functions.v2.FunctionService.DeleteFunction (LRO) google.cloud.functions.v2.FunctionService.DetachFunction (LRO) google.cloud.functions.v2.FunctionService.GenerateUploadUrl google.cloud.functions.v2.FunctionService.RedirectFunctionUpgradeTraffic (LRO) google.cloud.functions.v2.FunctionService.RollbackFunctionUpgradeTraffic (LRO) google.cloud.functions.v2.FunctionService.SetupFunctionUpgradeConfig (LRO) google.cloud.functions.v2.FunctionService.UpdateFunction (LRO) google.cloud.functions.v2alpha.FunctionService.AbortFunctionUpgrade (LRO) google.cloud.functions.v2alpha.FunctionService.CommitFunctionUpgrade (LRO) google.cloud.functions.v2alpha.FunctionService.CreateFunction (LRO) google.cloud.functions.v2alpha.FunctionService.DeleteFunction (LRO) google.cloud.functions.v2alpha.FunctionService.DetachFunction (LRO) google.cloud.functions.v2alpha.FunctionService.GenerateUploadUrl google.cloud.functions.v2alpha.FunctionService.RedirectFunctionUpgradeTraffic (LRO) google.cloud.functions.v2alpha.FunctionService.RollbackFunctionUpgradeTraffic (LRO) google.cloud.functions.v2alpha.FunctionService.SetupFunctionUpgradeConfig (LRO) google.cloud.functions.v2alpha.FunctionService.UpdateFunction (LRO) google.cloud.functions.v2beta.FunctionService.AbortFunctionUpgrade (LRO) google.cloud.functions.v2beta.FunctionService.CommitFunctionUpgrade (LRO) google.cloud.functions.v2beta.FunctionService.CreateFunction (LRO) google.cloud.functions.v2beta.FunctionService.DeleteFunction (LRO) google.cloud.functions.v2beta.FunctionService.DetachFunction (LRO) google.cloud.functions.v2beta.FunctionService.GenerateUploadUrl google.cloud.functions.v2beta.FunctionService.RedirectFunctionUpgradeTraffic (LRO) google.cloud.functions.v2beta.FunctionService.RollbackFunctionUpgradeTraffic (LRO) google.cloud.functions.v2beta.FunctionService.SetupFunctionUpgradeConfig (LRO) google.cloud.functions.v2beta.FunctionService.UpdateFunction (LRO) SetIamPolicy DATA READ google.cloud.functions.v1.CloudFunctionsService.CallFunction API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Cloud Run functions. google.cloud.functions.v1.CloudFunctionsService The following audit logs are associated with methods belonging to google.cloud.functions.v1.CloudFunctionsService .
- AbortFunctionUpgrade Method : google.cloud.functions.v2alpha.FunctionService.AbortFunctionUpgrade Audit log type : Admin activity Permissions : cloudfunctions.functions.generationUpgrade - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.functions.v2alpha.FunctionService.AbortFunctionUpgrade" CommitFunctionUpgrade Method : google.cloud.functions.v2alpha.FunctionService.CommitFunctionUpgrade Audit log type : Admin activity Permissions : cloudfunctions.functions.generationUpgrade - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.functions.v2alpha.FunctionService.CommitFunctionUpgrade" CreateFunction Method : google.cloud.functions.v2alpha.FunctionService.CreateFunction Audit log type : Admin activity Permissions : cloudfunctions.functions.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.functions.v2alpha.FunctionService.CreateFunction" DeleteFunction Method : google.cloud.functions.v2alpha.FunctionService.DeleteFunction Audit log type : Admin activity Permissions : cloudfunctions.functions.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.functions.v2alpha.FunctionService.DeleteFunction" DetachFunction Method : google.cloud.functions.v2alpha.FunctionService.DetachFunction Audit log type : Admin activity Permissions : cloudfunctions.functions.generationUpgrade - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.functions.v2alpha.FunctionService.DetachFunction" GenerateDownloadUrl Method : google.cloud.functions.v2alpha.FunctionService.GenerateDownloadUrl Audit log type : Data access Permissions : cloudfunctions.functions.sourceCodeGet - ADMIN READ Method is a long-running or streaming operation : No.
- AbortFunctionUpgrade Method : google.cloud.functions.v2beta.FunctionService.AbortFunctionUpgrade Audit log type : Admin activity Permissions : cloudfunctions.functions.generationUpgrade - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.functions.v2beta.FunctionService.AbortFunctionUpgrade" CommitFunctionUpgrade Method : google.cloud.functions.v2beta.FunctionService.CommitFunctionUpgrade Audit log type : Admin activity Permissions : cloudfunctions.functions.generationUpgrade - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.functions.v2beta.FunctionService.CommitFunctionUpgrade" CreateFunction Method : google.cloud.functions.v2beta.FunctionService.CreateFunction Audit log type : Admin activity Permissions : cloudfunctions.functions.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.functions.v2beta.FunctionService.CreateFunction" DeleteFunction Method : google.cloud.functions.v2beta.FunctionService.DeleteFunction Audit log type : Admin activity Permissions : cloudfunctions.functions.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.functions.v2beta.FunctionService.DeleteFunction" DetachFunction Method : google.cloud.functions.v2beta.FunctionService.DetachFunction Audit log type : Admin activity Permissions : cloudfunctions.functions.generationUpgrade - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.functions.v2beta.FunctionService.DetachFunction" GenerateDownloadUrl Method : google.cloud.functions.v2beta.FunctionService.GenerateDownloadUrl Audit log type : Data access Permissions : cloudfunctions.functions.sourceCodeGet - ADMIN READ Method is a long-running or streaming operation : No.
- AbortFunctionUpgrade Method : google.cloud.functions.v2.FunctionService.AbortFunctionUpgrade Audit log type : Admin activity Permissions : cloudfunctions.functions.generationUpgrade - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.functions.v2.FunctionService.AbortFunctionUpgrade" CommitFunctionUpgrade Method : google.cloud.functions.v2.FunctionService.CommitFunctionUpgrade Audit log type : Admin activity Permissions : cloudfunctions.functions.generationUpgrade - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.functions.v2.FunctionService.CommitFunctionUpgrade" CreateFunction Method : google.cloud.functions.v2.FunctionService.CreateFunction Audit log type : Admin activity Permissions : cloudfunctions.functions.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.functions.v2.FunctionService.CreateFunction" DeleteFunction Method : google.cloud.functions.v2.FunctionService.DeleteFunction Audit log type : Admin activity Permissions : cloudfunctions.functions.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.functions.v2.FunctionService.DeleteFunction" DetachFunction Method : google.cloud.functions.v2.FunctionService.DetachFunction Audit log type : Admin activity Permissions : cloudfunctions.functions.generationUpgrade - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.functions.v2.FunctionService.DetachFunction" GenerateDownloadUrl Method : google.cloud.functions.v2.FunctionService.GenerateDownloadUrl Audit log type : Data access Permissions : cloudfunctions.functions.sourceCodeGet - ADMIN READ Method is a long-running or streaming operation : No.

### "Request Headers in Cloud Functions \_|\_ Cloud Run functions \_|\_ Google\

- URL: [https://docs.cloud.google.com/functions/docs/reference/headers](https://docs.cloud.google.com/functions/docs/reference/headers)
- Source ID: `site-docs-reference-2`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Headers added for your use Cloud Functions adds the following headers to all requests: X-Cloud-Trace-Context A unique identifier for the request used for Cloud Trace and Cloud Logging .
- In addition, the following headers are removed from incoming requests because they relate to the transfer of HTTP data between the client and server: Connection Keep-Alive Proxy-Authorization TE Trailer Transfer-Encoding Note: Entity headers (headers relating to the request body) are not sanitized or checked, so functions should not rely on them.
- For example: "65011637f09e0a5179677a7429456db7/1027871334010811884;o=1" X-Forwarded-For A comma-delimited list of IP addresses through which the client request has been routed.
- Also, the Content-Encoding request header is not checked by the server, so if the client sends a gzipped request body, it will be sent in compressed form to the application.

