---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:22:23.507Z"
product_name: "Workflows"
product_slug: "workflows"
feature_name: "Deployment-time environment variables"
feature_slug: "deployment-time-environment-variables"
latest_feature_date: "2024-01-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/workflows/docs/best-practice"
  - "https://docs.cloud.google.com/workflows/docs/overview"
  - "https://docs.cloud.google.com/workflows/docs/reference/googleapis/workflows/v1/Overview"
keywords:
  - "variables"
  - "environment"
  - "deployment"
  - "defining"
  - "time"
  - "supports"
---

# Deployment-time environment variables

Product: Workflows
Coverage: LOW

## Step 02 Summary

Workflows supports defining environment variables at deployment time.

## Extended Definition

Workflows supports defining environment variables at deployment time.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/workflows/docs/best-practice](https://docs.cloud.google.com/workflows/docs/best-practice)
- [https://docs.cloud.google.com/workflows/docs/overview](https://docs.cloud.google.com/workflows/docs/overview)
- [https://docs.cloud.google.com/workflows/docs/reference/googleapis/workflows/v1/Overview](https://docs.cloud.google.com/workflows/docs/reference/googleapis/workflows/v1/Overview)

## Supporting Pages

### Best practices for Workflows \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/best-practice](https://docs.cloud.google.com/workflows/docs/best-practice)
- Source ID: `site-api-reference-required-2`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- For example: gcloud workflows run multi-env --data='{"urls":{"url1" : " URL ONE " , "url2" : " URL TWO " }} ' Use environment variables and create a workflow that is dynamically configured depending on the environment to which it is deployed.
- Or, you can use Terraform to provision your infrastructure and define a configuration file that creates workflows for each environment by using input variables .
- Or, create a workflow that can be reused as a template and configured according to separately maintained environment variables.
- Example main : params : [ input ] steps : - callWikipedia : steps : - checkSearchTermInInput : switch : - condition : ${"searchTerm" in input} assign : - searchTerm : ${input.searchTerm} next : readWikipedia - getCurrentDate : call : http.get args : url : https://timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam result : currentDate - setFromCallResult : assign : - searchTerm : ${currentDate.body.dayOfWeek} - readWikipedia : call : http.get args : url : https://en.wikipedia.org/w/api.php query : action : opensearch search : ${searchTerm} result : wikiResult - returnOutput : return : ${wikiResult.body[1]} Wrap expressions All expressions must begin with a $ and be enclosed in curly brackets: ${ EXPRESSION } To avoid YAML parsing issues, you can wrap expressions in quotes.

### Types overview \_|\_ Workflows \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/reference/googleapis/workflows/v1/Overview](https://docs.cloud.google.com/workflows/docs/reference/googleapis/workflows/v1/Overview)
- Source ID: `site-api-reference`
- Final score: 29
- Re-rank relevance: N/A

Evidence snippets:
- Fields apiVersion string API version used to start the operation. createTime string ( Timestamp format) The time the operation was created. endTime string ( Timestamp format) The time the operation finished running. target string Server-defined resource path for the target of the operation. verb string Name of the verb executed by the operation.
- Status The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs.
- Format: projects/{project}/locations/{location}/workflows/{workflow} revisionCreateTime string ( Timestamp format) Output only.
- ACTIVE The workflow has been deployed successfully and is serving. updateTime string ( Timestamp format) Output only.

### Workflows overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/overview](https://docs.cloud.google.com/workflows/docs/overview)
- Source ID: `site-docs-root`
- Final score: 29
- Re-rank relevance: N/A

Evidence snippets:
- When deploying a workflow, you can set arbitrary key and value string pairs as user-defined environment variables that are accessible by your workflow at runtime.
- Standard library and environment variables The Workflows standard library, built-in environment variables, and user-defined environment variables allow you to efficiently construct arguments for services and process responses.
- You can access a workflow's environment information (such as its location or project identifier) using built-in environment variables.
- Built-in environment variables require no declaration and are available in every workflow execution.

