---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.467Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "OpenAPI specification generation for integrations"
feature_slug: "openapi-specification-generation-for-integrations"
latest_feature_date: "2024-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/configure-api-trigger"
  - "https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini"
  - "https://docs.cloud.google.com/application-integration/docs/reference/rest"
keywords:
  - "specification"
  - "generation"
  - "published"
  - "openapi"
  - "integrations"
  - "triggers"
---

# OpenAPI specification generation for integrations

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

Published integrations using API triggers can now generate and display an OpenAPI Specification for easier understanding and analysis of API interactions.

## Extended Definition

Published integrations using API triggers can now generate and display an OpenAPI Specification for easier understanding and analysis of API interactions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/configure-api-trigger](https://docs.cloud.google.com/application-integration/docs/configure-api-trigger)
- [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- [https://docs.cloud.google.com/application-integration/docs/reference/rest](https://docs.cloud.google.com/application-integration/docs/reference/rest)

## Supporting Pages

### API trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-api-trigger](https://docs.cloud.google.com/application-integration/docs/configure-api-trigger)
- Source ID: `site-docs-reference-2`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- View OpenAPI Specification for your API trigger Application Integration provides the ability to dynamically generate and view the OpenAPI Specifications of your published integrations that are configured with one or more API triggers.
- Invoke an API trigger using an API call After you have published an integration that has an API trigger configured, you can use the projects.locations.integrations.execute method to invoke that trigger from any application.
- The OpenAPI Specification generated for your integration might include definitions for other API versions, such as v2.
- For information about how to view the OpenAPI Specification, see View OpenAPI Specification for your integration .

### "Build integrations with Gemini Code Assist \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- Source ID: `site-docs-reference-2`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Supported tasks and triggers Gemini can assist you to add the following tasks and triggers: Triggers Tasks API trigger Cloud Pub/Sub trigger Salesforce trigger Jira Cloud ServiceNow Zendesk Cloud Scheduler trigger Data mapper task Approval task Suspend task Javascript task Cloud Run functions Timer task Return task Send email task Connectors task Call REST endpoint task Doc AI - Process task Gemini also assists you to create the following control flow tasks but can't generate sub-integrations: For Each Loop task For Each Parallel task While Loop task Call Integration task Create an integration Gemini assists you to create and build integrations using your natural language statements (or prompts ) as input.
- In Application Integration, Gemini Code Assist can assist you to do the following: Create integrations Configure connector tasks in an integration Configure Call REST API tasks in an integration Add edge conditions and append additional tasks to an integration Configure JavaScript tasks ( Preview ) Generate integration description For detailed information about Gemini for Google Cloud, see Gemini for Google Cloud overview .
- Note: Gemini provides connector- and API Hub-based recommendations or suggestions for your integrations using the configured connections in Integration Connectors and APIs in Apigee API Hub .
- Build integrations with Gemini Code Assist Gemini Code Assist is an AI-powered collaborator in Google Cloud that provides help to users of all skill levels where they need it.

### Application Integration API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/reference/rest](https://docs.cloud.google.com/application-integration/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 82
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST Resource: v1.projects.locations Methods generateOpenApiSpec POST /v1/{name=projects/ /locations/ }:generateOpenApiSpec Generate OpenAPI spec for the requested integrations and api triggers REST Resource: v1.projects.locations.authConfigs Methods create POST /v1/{parent=projects/ /locations/ }/authConfigs Creates an auth config record. delete DELETE /v1/{name=projects/ /locations/ /authConfigs/ } Deletes an auth config. get GET /v1/{name=projects/ /locations/ /authConfigs/ } Gets a complete auth config. list GET /v1/{parent=projects/ /locations/ }/authConfigs Lists all auth configs that match the filter. patch PATCH /v1/{authConfig.name=projects/ /locations/ /authConfigs/ } Updates an auth config.
- REST Resource: v1.projects.locations.integrations.versions Methods create POST /v1/{parent=projects/ /locations/ /integrations/ }/versions Create a integration with a draft version in the specified project. delete DELETE /v1/{name=projects/ /locations/ /integrations/ /versions/ } Soft-deletes the integration. download GET /v1/{name=projects/ /locations/ /integrations/ /versions/ }:download Downloads an integration. downloadJsonPackage GET /v1/{name=projects/ /locations/ /integrations/ /versions/ }:downloadJsonPackage Downloads an Integration version package like IntegrationVersion,Integration Config etc. get GET /v1/{name=projects/ /locations/ /integrations/ /versions/ } Get a integration in the specified project. list GET /v1/{parent=projects/ /locations/ /integrations/ }/versions Returns the list of all integration versions in the specified project. patch PATCH /v1/{integrationVersion.name=projects/ /locations/ /integrations/ /versions/ } Update a integration with a draft version in the specified project. publish POST /v1/{name=projects/ /locations/ /integrations/ /versions/ }:publish This RPC throws an exception if the integration is in ARCHIVED or ACTIVE state. unpublish POST /v1/{name=projects/ /locations/ /integrations/ /versions/ }:unpublish Sets the status of the ACTIVE integration to SNAPSHOT with a new tag "PREVIOUSLY PUBLISHED" after validating it. upload POST /v1/{parent=projects/ /locations/ /integrations/ }/versions:upload Uploads an integration.
- REST Resource: v1.projects.locations.clients Methods changeConfig POST /v1/{parent=projects/ /locations/ }/clients:changeConfig Updates the client customer configuration for the given project and location resource name provision POST /v1/{parent=projects/ /locations/ }/clients:provision Perform the provisioning steps to enable a user GCP project to use IP. provisionClientPostProcessor POST /v1/{parent=projects/ /locations/ }/clients:provisionClientPostProcessor Perform post provisioning steps after client is provisioned. switchVariableMasking POST /v1/{parent=projects/ /locations/ }/clients:switchVariableMasking Update variable masking for provisioned client toggleHttp POST /v1/{parent=projects/ /locations/ }/clients:toggleHttp Enable/Disable http call for provisioned client REST Resource: v1.projects.locations.integrations Methods execute POST /v1/{name=projects/ /locations/ /integrations/ }:execute Executes integrations synchronously by passing the trigger id in the request body. list GET /v1/{parent=projects/ /locations/ }/integrations Returns the list of all integrations in the specified project. schedule POST /v1/{name=projects/ /locations/ /integrations/ }:schedule Schedules an integration for execution by passing the trigger id and the scheduled time in the request body. search GET /v1/{parent=projects/ /locations/ }/integrations:search Searches and returns the list of integrations in the specified project. test POST /v1/{integrationVersion.name=projects/ /locations/ /integrations/ }:test Execute the integration in draft state REST Resource: v1.projects.locations.integrations.executions Methods cancel POST /v1/{name=projects/ /locations/ /integrations/ /executions/ }:cancel Cancellation of an execution and associated sub-executions. list GET /v1/{parent=projects/ /locations/ /integrations/ }/executions Lists the results of all the integration executions. replay POST /v1/{name=projects/ /locations/ /integrations/ /executions/ }:replay Re-execute an existing execution, with same request parameters and execution strategy.
- REST Resource: v1.projects.locations.integrations.versions.testCases Methods create POST /v1/{parent=projects/ /locations/ /integrations/ /versions/ }/testCases Creates a new test case delete DELETE /v1/{name=projects/ /locations/ /integrations/ /versions/ /testCases/ } Deletes a test case download GET /v1/{name=projects/ /locations/ /integrations/ /versions/ /testCases/ }:download Downloads a test case. execute POST /v1/{parent=projects/ /locations/ /integrations/ /versions/ }/testCases:execute Executes all test cases in an integration version. executeTest POST /v1/{testCaseName=projects/ /locations/ /integrations/ /versions/ /testCases/ }:executeTest Executes functional test get GET /v1/{name=projects/ /locations/ /integrations/ /versions/ /testCases/ } Get a test case list GET /v1/{parent=projects/ /locations/ /integrations/ /versions/ }/testCases Lists all the test cases that satisfy the filters. patch PATCH /v1/{testCase.name=projects/ /locations/ /integrations/ /versions/ /testCases/ } Updates a test case takeoverEditLock POST /v1/{name=projects/ /locations/ /integrations/ /versions/ /testCases/ }:takeoverEditLock Clear the lock fields and assign them to current user upload POST /v1/{parent=projects/ /locations/ /integrations/ /versions/ }/testCases:upload Uploads a test case.

