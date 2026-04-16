---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:22:23.525Z"
product_name: "Workflows"
product_slug: "workflows"
feature_name: "Invocation of internal-ingress Cloud Functions and Cloud Run"
feature_slug: "invocation-of-internal-ingress-cloud-functions-and-cloud-run"
latest_feature_date: "2022-01-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workflows/docs/calling-run-functions"
  - "https://docs.cloud.google.com/workflows/docs/authenticate-from-workflow"
  - "https://docs.cloud.google.com/workflows/docs/overview"
keywords:
  - "internal"
  - "ingress"
  - "functions"
  - "invocation"
  - "invoke"
---

# Invocation of internal-ingress Cloud Functions and Cloud Run

Product: Workflows
Coverage: MEDIUM

## Step 02 Summary

Workflows can invoke Cloud Functions and Cloud Run services that restrict ingress to internal traffic.

## Extended Definition

Workflows can invoke Cloud Functions and Cloud Run services that restrict ingress to internal traffic.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/workflows/docs/calling-run-functions](https://docs.cloud.google.com/workflows/docs/calling-run-functions)
- [https://docs.cloud.google.com/workflows/docs/authenticate-from-workflow](https://docs.cloud.google.com/workflows/docs/authenticate-from-workflow)
- [https://docs.cloud.google.com/workflows/docs/overview](https://docs.cloud.google.com/workflows/docs/overview)

## Supporting Pages

### "Invoke Cloud Run functions or Cloud Run \_|\_ Workflows \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/workflows/docs/calling-run-functions](https://docs.cloud.google.com/workflows/docs/calling-run-functions)
- Source ID: `site-docs-root-2`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Invoke services that are restricted to internal ingress Workflows can invoke Cloud Run functions or Cloud Run services in the same Google Cloud project that have ingress restricted to internal traffic.
- Invoke Cloud Run functions In Cloud Run functions, invocation permissions are available by managing the underlying Cloud Run service.
- In this example, a request is sent to invoke a Cloud Run function: YAML - step A : call : http.get args : url : https://us-central1-project.cloudfunctions.net/functionA query : firstNumber : 4 secondNumber : 6 operation : sum auth : type : OIDC audience : OIDC AUDIENCE JSON [ { "step A" : { "call" : "http.get" , "args" : { "url" : "https://us-central1-project.cloudfunctions.net/functionA" , "query" : { "firstNumber" : 4 , "secondNumber" : 6 , "operation" : "sum" }, "auth" : { "type" : "OIDC" , "audience" : " OIDC AUDIENCE " } } } } ] The audience parameter can be used to specify the OIDC audience for the token.
- For example, to configure a receiving Cloud Run function to accept requests from a specific calling function or service, you need to add the caller's service account as a principal on the receiving function and grant that principal the Cloud Run functions Invoker ( roles/cloudfunctions.invoker ) role.

### "Make authenticated requests from a workflow \_|\_ Workflows \_|\_ Google\

- URL: [https://docs.cloud.google.com/workflows/docs/authenticate-from-workflow](https://docs.cloud.google.com/workflows/docs/authenticate-from-workflow)
- Source ID: `site-docs-root-2`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Note that it's possible for Workflows to invoke Cloud Run functions or Cloud Run services that have ingress restricted to internal traffic.
- In this example, a request is sent to invoke a Cloud Run function: YAML - step A : call : http.get args : url : https://us-central1-project.cloudfunctions.net/functionA query : firstNumber : 4 secondNumber : 6 operation : sum auth : type : OIDC audience : OIDC AUDIENCE JSON [ { "step A" : { "call" : "http.get" , "args" : { "url" : "https://us-central1-project.cloudfunctions.net/functionA" , "query" : { "firstNumber" : 4 , "secondNumber" : 6 , "operation" : "sum" }, "auth" : { "type" : "OIDC" , "audience" : " OIDC AUDIENCE " } } } } ] The audience key is optional, but can be used to specify the OIDC audience for the token.
- For more information, see Invoke Cloud Run functions or Cloud Run .
- For more information, see Invoke an IAP-secured endpoint and learn how to authenticate to an IAP-secured resource from a user or service account .

### Workflows overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/overview](https://docs.cloud.google.com/workflows/docs/overview)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- For example, you can invoke a Google Cloud service such as Cloud Run functions or Cloud Run through an HTTP request.
- For details, see Make an HTTP request and Invoke Cloud Run functions or Cloud Run .
- You can execute a workflow using the client libraries, in the Google Cloud console, using the Google Cloud CLI, or by sending an HTTP POST request to the workflow's invocation URL using the Workflows REST API.
- These workflows can combine services including custom services hosted on Cloud Run or Cloud Run functions, Google Cloud services such as Cloud Vision AI and BigQuery, and any HTTP-based API.

