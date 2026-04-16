---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.467Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Integration templates"
feature_slug: "integration-templates"
latest_feature_date: "2024-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task"
  - "https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini"
  - "https://docs.cloud.google.com/application-integration/docs/reference/rest"
keywords:
  - "reusable"
  - "defined"
  - "templates"
  - "provides"
---

# Integration templates

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

Application Integration now provides pre-defined integration templates as reusable blueprints to accelerate building common integration flows.

## Extended Definition

Application Integration now provides pre-defined integration templates as reusable blueprints to accelerate building common integration flows.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task)
- [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- [https://docs.cloud.google.com/application-integration/docs/reference/rest](https://docs.cloud.google.com/application-integration/docs/reference/rest)

## Supporting Pages

### Data Transformer task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task)
- Source ID: `site-docs-reference-2`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- Jsonnet script local f = impor t "functions" ; // Import predefined Data Transformer function library local s tr 1 = f .ex t Var( "inputVar1" ); // Access integration input variable "Inputstr1" with value "Hello" local s tr 2 = f .ex t Var( "inputVar2" ); // Access integration input variable "Inputstr2" with value "World" { Ou t pu t Var : s tr 1 + " " + s tr 2 + "!" , // Write to Jsonnet output variable "OutputVar" "output-str-var" : s tr 1 + " Integration " + s tr 2 + "!" , // Write to Jsonnet output variable "output-str-var" } Output Jsonnet usage reference Jsonnet is a purely functional language and its programs are composed of expressions.
- The following image shows the sample layout of the Data Transformer Script editor : Access integration variables To read an existing integration variable from the Data Transformer Script editor use the extVar function from the predefined functions library.
- The Data Transformer Script editor provides the following features to enrich your scripting experience: Syntax/code highlighting, indentation, and line numbering for easier code readability and structure recognition.
- Use the Diagram mode The Diagram mode provides a console-based experience to select the input and output variables and perform transformations in the data transformation editor.

### "Build integrations with Gemini Code Assist \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- Source ID: `site-docs-reference-2`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- Generate integration description The integration description feature available in Gemini in Application Integration provides a description summary of the integration that you've created in your integration editor .
- Note: Gemini provides connector- and API Hub-based recommendations or suggestions for your integrations using the configured connections in Integration Connectors and APIs in Apigee API Hub .
- Build integrations with Gemini Code Assist Gemini Code Assist is an AI-powered collaborator in Google Cloud that provides help to users of all skill levels where they need it.
- Then, do the following: If you want to select a prompt template, select one from the Sample prompt templates .

### Application Integration API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/reference/rest](https://docs.cloud.google.com/application-integration/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 39
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST Resource: v1.projects.locations.templates Methods create POST /v1/{parent=projects/ /locations/ }/templates Creates a new template delete DELETE /v1/{name=projects/ /locations/ /templates/ } Deletes a template download GET /v1/{name=projects/ /locations/ /templates/ }:download Downloads a template. get GET /v1/{name=projects/ /locations/ /templates/ } Get a template in the specified project. import POST /v1/{name=projects/ /locations/ /templates/ }:import Import the template to an existing integration. list GET /v1/{parent=projects/ /locations/ }/templates Lists all templates matching the filter. patch PATCH /v1/{template.name=projects/ /locations/ /templates/ } Updates the template by given id. search GET /v1/{parent=projects/ /locations/ }/templates:search Search templates based on user query and filters. share POST /v1/{name=projects/ /locations/ /templates/ }:share Share a template with other clients. unshare POST /v1/{name=projects/ /locations/ /templates/ }:unshare Unshare a template from given clients. upload POST /v1/{parent=projects/ /locations/ }/templates:upload Uploads a template. use POST /v1/{name=projects/ /locations/ /templates/ }:use Use the template to create integration.
- REST Resource: v2.projects.locations.integrations REST Resource: v2.projects.locations.integrations.executions REST Resource: v2.projects.locations.integrations.executions.taskExecutions REST Resource: v1.projects.locations.authConfigs REST Resource: v1.projects.locations.certificates REST Resource: v1.projects.locations.clients REST Resource: v1.projects.locations.integrations REST Resource: v1.projects.locations.integrations.executions REST Resource: v1.projects.locations.integrations.executions.suspensions REST Resource: v1.projects.locations.integrations.versions REST Resource: v1.projects.locations.integrations.versions.testCases REST Resource: v1.projects.locations.sfdcInstances REST Resource: v1.projects.locations.sfdcInstances.sfdcChannels REST Resource: v1.projects.locations.templates Service: integrations.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- This service provides the following discovery documents: https://integrations.googleapis.com/$discovery/rest?version=v2 https://integrations.googleapis.com/$discovery/rest?version=v1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.

