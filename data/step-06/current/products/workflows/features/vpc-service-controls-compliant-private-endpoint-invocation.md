---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:22:23.508Z"
product_name: "Workflows"
product_slug: "workflows"
feature_name: "VPC Service Controls-compliant private endpoint invocation"
feature_slug: "vpc-service-controls-compliant-private-endpoint-invocation"
latest_feature_date: "2024-01-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workflows/docs/overview"
  - "https://docs.cloud.google.com/workflows/docs/http-requests"
  - "https://docs.cloud.google.com/workflows/docs/compliance-controls"
keywords:
  - "compliant"
  - "endpoint"
  - "controls"
  - "private"
  - "invocation"
---

# VPC Service Controls-compliant private endpoint invocation

Product: Workflows
Coverage: MEDIUM

## Step 02 Summary

Workflows can invoke private endpoints that comply with VPC Service Controls.

## Extended Definition

Workflows can invoke private endpoints that comply with VPC Service Controls.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/workflows/docs/overview](https://docs.cloud.google.com/workflows/docs/overview)
- [https://docs.cloud.google.com/workflows/docs/http-requests](https://docs.cloud.google.com/workflows/docs/http-requests)
- [https://docs.cloud.google.com/workflows/docs/compliance-controls](https://docs.cloud.google.com/workflows/docs/compliance-controls)

## Supporting Pages

### Workflows overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/overview](https://docs.cloud.google.com/workflows/docs/overview)
- Source ID: `site-docs-root`
- Final score: 93
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When you create a private endpoint within a Virtual Private Cloud (VPC) network, you can set up a service perimeter and use VPC Service Controls with Workflows to mitigate data exfiltration risks.
- You can target a private endpoint for HTTP calls from your workflow execution by using Service Directory's service registry with Workflows.
- For more information, see Invoke a private endpoint using Service Directory's service registry .
- You can execute a workflow using the client libraries, in the Google Cloud console, using the Google Cloud CLI, or by sending an HTTP POST request to the workflow's invocation URL using the Workflows REST API.

### Make an HTTP request \_|\_ Workflows \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/http-requests](https://docs.cloud.google.com/workflows/docs/http-requests)
- Source ID: `site-api-reference-required-3`
- Final score: 58
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- YAML Use a custom exception handler to catch exceptions and return predefined error messages; if the exception isn't recognized, the workflow execution fails and throws the exception returned by the GET request - read item : try : call : http.get args : url : https://example.com/someapi auth : type : OIDC result : API response except : as : e steps : - known errors : switch : - condition : ${not("HttpError" in e.tags)} next : connection problem - condition : ${e.code == 404} next : url not found - condition : ${e.code == 403} next : auth problem - unhandled exception : raise : ${e} - url found : return : ${API response.body} - connection problem : return : "Connection problem; check URL" - url not found : return : "Sorry, URL wasn't found" - auth problem : return : "Authentication error" JSON [ { "read item" : { "try" : { "call" : "http.get" , "args" : { "url" : "https://example.com/someapi" , "auth" : { "type" : "OIDC" } }, "result" : "API response" }, "except" : { "as" : "e" , "steps" : [ { "known errors" : { "switch" : [ { "condition" : "${not(\"HttpError\" in e.tags)}" , "next" : "connection problem" }, { "condition" : "${e.code == 404}" , "next" : "url not found" }, { "condition" : "${e.code == 403}" , "next" : "auth problem" } ] } }, { "unhandled exception" : { "raise" : "${e}" } } ] } } }, { "url found" : { "return" : "${API response.body}" } }, { "connection problem" : { "return" : "Connection problem; check URL" } }, { "url not found" : { "return" : "Sorry, URL wasn't found" } }, { "auth problem" : { "return" : "Authentication error" } } ] What's next Use Workflows with Cloud Run and Cloud Run functions tutorial Invoke a private endpoint using Service Directory's service registry Invoke an IAP-secured endpoint Workflows syntax reference Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For more information, see Invoke a private endpoint using Service Directory's service registry .
- YAML main : params : [ input ] steps : - checkSearchTermInInput : switch : - condition : '${"searchTerm" in input}' assign : - searchTerm : '${input.searchTerm}' next : readWikipedia - getLocation : call : sys.get env args : name : GOOGLE CLOUD LOCATION result : location - setFromCallResult : assign : - searchTerm : '${text.split(location, "-")[0]}' - readWikipedia : call : http.get args : url : 'https://en.wikipedia.org/w/api.php' query : action : opensearch search : '${searchTerm}' result : wikiResult - returnOutput : return : '${wikiResult.body[1]}' JSON { "main" : { "params" : [ "input" ], "steps" : [ { "checkSearchTermInInput" : { "switch" : [ { "condition" : "${\"searchTerm\" in input}" , "assign" : [ { "searchTerm" : "${input.searchTerm}" } ], "next" : "readWikipedia" } ] } }, { "getLocation" : { "call" : "sys.get env" , "args" : { "name" : "GOOGLE CLOUD LOCATION" }, "result" : "location" } }, { "setFromCallResult" : { "assign" : [ { "searchTerm" : "${text.split(location, \"-\")[0]}" } ] } }, { "readWikipedia" : { "call" : "http.get" , "args" : { "url" : "https://en.wikipedia.org/w/api.php" , "query" : { "action" : "opensearch" , "search" : "${searchTerm}" } }, "result" : "wikiResult" } }, { "returnOutput" : { "return" : "${wikiResult.body[1]}" } } ] } } Make an external HTTP POST request This sample makes a POST request to an external HTTP endpoint.
- YAML - STEP NAME : call : HTTP REQUEST args : url : URL VALUE method : REQUEST METHOD private service name : " REGISTERED SERVICE " headers : HEADER KEY : HEADER VALUE ... body : BODY KEY : BODY VALUE ... query : QUERY KEY : QUERY VALUE ... auth : type : AUTH TYPE scope : AUTH SCOPE scopes : AUTH SCOPE audience : AUDIENCE timeout : TIMEOUT IN SECONDS result : RESULT VALUE JSON [ { " STEP NAME " : { "call" : " HTTP REQUEST " , "args" : { "url" : " URL VALUE " , "method" : " REQUEST METHOD " , "private service name" : " REGISTERED SERVICE " , "headers" : { " HEADER KEY " : " HEADER VALUE " , ... }, "body" : { " BODY KEY " : " BODY VALUE " , ... }, "query" : { " QUERY KEY " : " QUERY VALUE " , ... }, "auth" : { "type" : " AUTH TYPE " , "scope" : " AUTH SCOPE " , "scopes" : " AUTH SCOPE " , "audience" : " AUDIENCE " }, "timeout" : " TIMEOUT IN SECONDS " }, "result" : " RESULT VALUE " } } ] Replace the following: HTTP REQUEST : required.

### Compliance controls \_|\_ Workflows \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/compliance-controls](https://docs.cloud.google.com/workflows/docs/compliance-controls)
- Source ID: `site-docs-root-2`
- Final score: 51
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Workflows regularly undergoes independent verification of its security, privacy, and compliance controls, achieving certifications, attestations, and audit reports to demonstrate compliance.
- Home Documentation Application development Workflows Guides Send feedback Compliance controls Stay organized with collections Save and categorize content based on your preferences.
- Workflows is compliant with the following certifications and standards.

