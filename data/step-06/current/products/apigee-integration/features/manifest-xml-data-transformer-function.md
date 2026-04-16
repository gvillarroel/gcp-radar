---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:03:12.338Z"
product_name: "Apigee Integration"
product_slug: "apigee-integration"
feature_name: "Manifest XML data transformer function"
feature_slug: "manifest-xml-data-transformer-function"
latest_feature_date: "2023-10-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub"
  - "https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task"
  - "https://docs.cloud.google.com/application-integration/docs/data-transformer-functions-reference"
keywords:
  - "manifest"
  - "converts"
  - "transformer"
  - "object"
  - "into"
  - "introduces"
  - "json"
---

# Manifest XML data transformer function

Product: Apigee Integration
Coverage: MEDIUM

## Step 02 Summary

Introduces a data transformer function that converts a JSON object into an XML string.

## Extended Definition

Introduces a data transformer function that converts a JSON object into an XML string.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub)
- [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task)
- [https://docs.cloud.google.com/application-integration/docs/data-transformer-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-transformer-functions-reference)

## Supporting Pages

### Data Transformer task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task)
- Source ID: `site-docs-root-required-2`
- Final score: 99
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Jsonnet script local f = impor t "functions" ; // Import predefined Data Transformer function library local s tr 1 = f .ex t Var( "inputVar1" ); // Access integration input variable "Inputstr1" with value "Hello" local s tr 2 = f .ex t Var( "inputVar2" ); // Access integration input variable "Inputstr2" with value "World" { Ou t pu t Var : s tr 1 + " " + s tr 2 + "!" , // Write to Jsonnet output variable "OutputVar" "output-str-var" : s tr 1 + " Integration " + s tr 2 + "!" , // Write to Jsonnet output variable "output-str-var" } Output Jsonnet usage reference Jsonnet is a purely functional language and its programs are composed of expressions.
- The Data Transformer Script editor by default imports functions , a predefined custom library containing a set of Jsonnet functions for data mapping in Application Integration.
- The Data Transformer editor appears displaying a default commented Jsonnet template example.
- The following image shows the sample layout of the Data Transformer Script editor : Access integration variables To read an existing integration variable from the Data Transformer Script editor use the extVar function from the predefined functions library.

### "Data Transformer functions \_|\_ Application Integration \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-integration/docs/data-transformer-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-transformer-functions-reference)
- Source ID: `site-docs-reference-required-1`
- Final score: 98
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Data Transformer functions This page describes the additional set of predefined Jsonnet functions for Data Transformer Script task available in Application Integration.
- Importing the functions library lets you use both the standard Jsonnet functions and the predefined Data Transformer functions.
- Recommendation Lean how to add and configure a Data Transformer Script task ( Preview ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Preview — Data Transformer Script task This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

### "Ingest Microsoft Azure API data into API hub \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub)
- Source ID: `site-docs-root`
- Final score: 93
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JavaScript Task taskId: 38 Executes a JavaScript task that transforms the raw Azure specification from $openaispecs-list$ into a valid OpenAPI 3.0 specification object and saves it to $specJson$ .
- Data Mapping Task taskId: 39 Converts the $specJson$ object to a Base64-encoded string ( $finalBase64Content$ ), as required by the API hub ingestion endpoint.
- The following diagram illustrates the workflow you'll be setting up: Objectives In this tutorial, you will complete the following steps: Step 1: Create an Azure App Step 2: Configure Google Cloud resources Step 3: Create and publish an integration in Application Integration Step 4: Execute the integration to ingest API data from Azure APIM to API hub Step 5: Verify and view the ingested API data in API hub Costs In this document, you use the following billable components of Google Cloud: Application Integration To generate a cost estimate based on your projected usage, use the pricing calculator .
- File Description env.sh Main configuration file for the scripts. azure setup.sh Script to configure Azure resources. gcp setup.sh Script to configure Google Cloud resources. azure ip template.json The prebuilt integration JSON file. deploy integration.sh Script to deploy and publish the integration. execute integration.sh Script to trigger the integration.

