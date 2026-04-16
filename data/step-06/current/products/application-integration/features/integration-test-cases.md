---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.469Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Integration test cases"
feature_slug: "integration-test-cases"
latest_feature_date: "2024-10-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing"
  - "https://docs.cloud.google.com/application-integration/docs/reference/rest"
  - "https://docs.cloud.google.com/application-integration/docs/reference/rest/v1"
keywords:
  - "cases"
  - "case"
  - "complex"
  - "test"
  - "creating"
  - "enables"
  - "integrations"
---

# Integration test cases

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

Test case support for complex integrations enables creating, configuring, managing, and running integration test cases.

## Extended Definition

Test case support for complex integrations enables creating, configuring, managing, and running integration test cases.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing)
- [https://docs.cloud.google.com/application-integration/docs/reference/rest](https://docs.cloud.google.com/application-integration/docs/reference/rest)
- [https://docs.cloud.google.com/application-integration/docs/reference/rest/v1](https://docs.cloud.google.com/application-integration/docs/reference/rest/v1)

## Supporting Pages

### "Automate Salesforce case routing assignments \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Test case 2: To check if a ServiceNow incident is created for a sales case Test the integration by logging in to the Salesforce instance and creating a new case.
- Test case 1: To check if a Jira issue is created for an enginnering case Test the integration by logging in to the Salesforce instance and creating a new case.
- You must enter Engineering in the Type field while creating the case.
- You must enter Sales in the Type field while creating the case.

### Application Integration API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/reference/rest](https://docs.cloud.google.com/application-integration/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST Resource: v1.projects.locations.integrations.versions.testCases Methods create POST /v1/{parent=projects/ /locations/ /integrations/ /versions/ }/testCases Creates a new test case delete DELETE /v1/{name=projects/ /locations/ /integrations/ /versions/ /testCases/ } Deletes a test case download GET /v1/{name=projects/ /locations/ /integrations/ /versions/ /testCases/ }:download Downloads a test case. execute POST /v1/{parent=projects/ /locations/ /integrations/ /versions/ }/testCases:execute Executes all test cases in an integration version. executeTest POST /v1/{testCaseName=projects/ /locations/ /integrations/ /versions/ /testCases/ }:executeTest Executes functional test get GET /v1/{name=projects/ /locations/ /integrations/ /versions/ /testCases/ } Get a test case list GET /v1/{parent=projects/ /locations/ /integrations/ /versions/ }/testCases Lists all the test cases that satisfy the filters. patch PATCH /v1/{testCase.name=projects/ /locations/ /integrations/ /versions/ /testCases/ } Updates a test case takeoverEditLock POST /v1/{name=projects/ /locations/ /integrations/ /versions/ /testCases/ }:takeoverEditLock Clear the lock fields and assign them to current user upload POST /v1/{parent=projects/ /locations/ /integrations/ /versions/ }/testCases:upload Uploads a test case.
- REST Resource: v2.projects.locations.integrations REST Resource: v2.projects.locations.integrations.executions REST Resource: v2.projects.locations.integrations.executions.taskExecutions REST Resource: v1.projects.locations.authConfigs REST Resource: v1.projects.locations.certificates REST Resource: v1.projects.locations.clients REST Resource: v1.projects.locations.integrations REST Resource: v1.projects.locations.integrations.executions REST Resource: v1.projects.locations.integrations.executions.suspensions REST Resource: v1.projects.locations.integrations.versions REST Resource: v1.projects.locations.integrations.versions.testCases REST Resource: v1.projects.locations.sfdcInstances REST Resource: v1.projects.locations.sfdcInstances.sfdcChannels REST Resource: v1.projects.locations.templates Service: integrations.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v1.projects.locations.clients Methods changeConfig POST /v1/{parent=projects/ /locations/ }/clients:changeConfig Updates the client customer configuration for the given project and location resource name provision POST /v1/{parent=projects/ /locations/ }/clients:provision Perform the provisioning steps to enable a user GCP project to use IP. provisionClientPostProcessor POST /v1/{parent=projects/ /locations/ }/clients:provisionClientPostProcessor Perform post provisioning steps after client is provisioned. switchVariableMasking POST /v1/{parent=projects/ /locations/ }/clients:switchVariableMasking Update variable masking for provisioned client toggleHttp POST /v1/{parent=projects/ /locations/ }/clients:toggleHttp Enable/Disable http call for provisioned client REST Resource: v1.projects.locations.integrations Methods execute POST /v1/{name=projects/ /locations/ /integrations/ }:execute Executes integrations synchronously by passing the trigger id in the request body. list GET /v1/{parent=projects/ /locations/ }/integrations Returns the list of all integrations in the specified project. schedule POST /v1/{name=projects/ /locations/ /integrations/ }:schedule Schedules an integration for execution by passing the trigger id and the scheduled time in the request body. search GET /v1/{parent=projects/ /locations/ }/integrations:search Searches and returns the list of integrations in the specified project. test POST /v1/{integrationVersion.name=projects/ /locations/ /integrations/ }:test Execute the integration in draft state REST Resource: v1.projects.locations.integrations.executions Methods cancel POST /v1/{name=projects/ /locations/ /integrations/ /executions/ }:cancel Cancellation of an execution and associated sub-executions. list GET /v1/{parent=projects/ /locations/ /integrations/ }/executions Lists the results of all the integration executions. replay POST /v1/{name=projects/ /locations/ /integrations/ /executions/ }:replay Re-execute an existing execution, with same request parameters and execution strategy.
- REST Resource: v1.projects.locations.integrations.versions Methods create POST /v1/{parent=projects/ /locations/ /integrations/ }/versions Create a integration with a draft version in the specified project. delete DELETE /v1/{name=projects/ /locations/ /integrations/ /versions/ } Soft-deletes the integration. download GET /v1/{name=projects/ /locations/ /integrations/ /versions/ }:download Downloads an integration. downloadJsonPackage GET /v1/{name=projects/ /locations/ /integrations/ /versions/ }:downloadJsonPackage Downloads an Integration version package like IntegrationVersion,Integration Config etc. get GET /v1/{name=projects/ /locations/ /integrations/ /versions/ } Get a integration in the specified project. list GET /v1/{parent=projects/ /locations/ /integrations/ }/versions Returns the list of all integration versions in the specified project. patch PATCH /v1/{integrationVersion.name=projects/ /locations/ /integrations/ /versions/ } Update a integration with a draft version in the specified project. publish POST /v1/{name=projects/ /locations/ /integrations/ /versions/ }:publish This RPC throws an exception if the integration is in ARCHIVED or ACTIVE state. unpublish POST /v1/{name=projects/ /locations/ /integrations/ /versions/ }:unpublish Sets the status of the ACTIVE integration to SNAPSHOT with a new tag "PREVIOUSLY PUBLISHED" after validating it. upload POST /v1/{parent=projects/ /locations/ /integrations/ }/versions:upload Uploads an integration.

### Application Integration API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/reference/rest/v1](https://docs.cloud.google.com/application-integration/docs/reference/rest/v1)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST Resource: v1.projects.locations.integrations.versions.testCases Methods create POST /v1/{parent=projects/ /locations/ /integrations/ /versions/ }/testCases Creates a new test case delete DELETE /v1/{name=projects/ /locations/ /integrations/ /versions/ /testCases/ } Deletes a test case download GET /v1/{name=projects/ /locations/ /integrations/ /versions/ /testCases/ }:download Downloads a test case. execute POST /v1/{parent=projects/ /locations/ /integrations/ /versions/ }/testCases:execute Executes all test cases in an integration version. executeTest POST /v1/{testCaseName=projects/ /locations/ /integrations/ /versions/ /testCases/ }:executeTest Executes functional test get GET /v1/{name=projects/ /locations/ /integrations/ /versions/ /testCases/ } Get a test case list GET /v1/{parent=projects/ /locations/ /integrations/ /versions/ }/testCases Lists all the test cases that satisfy the filters. patch PATCH /v1/{testCase.name=projects/ /locations/ /integrations/ /versions/ /testCases/ } Updates a test case takeoverEditLock POST /v1/{name=projects/ /locations/ /integrations/ /versions/ /testCases/ }:takeoverEditLock Clear the lock fields and assign them to current user upload POST /v1/{parent=projects/ /locations/ /integrations/ /versions/ }/testCases:upload Uploads a test case.
- REST Resource: v2.projects.locations.integrations REST Resource: v2.projects.locations.integrations.executions REST Resource: v2.projects.locations.integrations.executions.taskExecutions REST Resource: v1.projects.locations.authConfigs REST Resource: v1.projects.locations.certificates REST Resource: v1.projects.locations.clients REST Resource: v1.projects.locations.integrations REST Resource: v1.projects.locations.integrations.executions REST Resource: v1.projects.locations.integrations.executions.suspensions REST Resource: v1.projects.locations.integrations.versions REST Resource: v1.projects.locations.integrations.versions.testCases REST Resource: v1.projects.locations.sfdcInstances REST Resource: v1.projects.locations.sfdcInstances.sfdcChannels REST Resource: v1.projects.locations.templates Service: integrations.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v1.projects.locations.clients Methods changeConfig POST /v1/{parent=projects/ /locations/ }/clients:changeConfig Updates the client customer configuration for the given project and location resource name provision POST /v1/{parent=projects/ /locations/ }/clients:provision Perform the provisioning steps to enable a user GCP project to use IP. provisionClientPostProcessor POST /v1/{parent=projects/ /locations/ }/clients:provisionClientPostProcessor Perform post provisioning steps after client is provisioned. switchVariableMasking POST /v1/{parent=projects/ /locations/ }/clients:switchVariableMasking Update variable masking for provisioned client toggleHttp POST /v1/{parent=projects/ /locations/ }/clients:toggleHttp Enable/Disable http call for provisioned client REST Resource: v1.projects.locations.integrations Methods execute POST /v1/{name=projects/ /locations/ /integrations/ }:execute Executes integrations synchronously by passing the trigger id in the request body. list GET /v1/{parent=projects/ /locations/ }/integrations Returns the list of all integrations in the specified project. schedule POST /v1/{name=projects/ /locations/ /integrations/ }:schedule Schedules an integration for execution by passing the trigger id and the scheduled time in the request body. search GET /v1/{parent=projects/ /locations/ }/integrations:search Searches and returns the list of integrations in the specified project. test POST /v1/{integrationVersion.name=projects/ /locations/ /integrations/ }:test Execute the integration in draft state REST Resource: v1.projects.locations.integrations.executions Methods cancel POST /v1/{name=projects/ /locations/ /integrations/ /executions/ }:cancel Cancellation of an execution and associated sub-executions. list GET /v1/{parent=projects/ /locations/ /integrations/ }/executions Lists the results of all the integration executions. replay POST /v1/{name=projects/ /locations/ /integrations/ /executions/ }:replay Re-execute an existing execution, with same request parameters and execution strategy.
- REST Resource: v1.projects.locations.integrations.versions Methods create POST /v1/{parent=projects/ /locations/ /integrations/ }/versions Create a integration with a draft version in the specified project. delete DELETE /v1/{name=projects/ /locations/ /integrations/ /versions/ } Soft-deletes the integration. download GET /v1/{name=projects/ /locations/ /integrations/ /versions/ }:download Downloads an integration. downloadJsonPackage GET /v1/{name=projects/ /locations/ /integrations/ /versions/ }:downloadJsonPackage Downloads an Integration version package like IntegrationVersion,Integration Config etc. get GET /v1/{name=projects/ /locations/ /integrations/ /versions/ } Get a integration in the specified project. list GET /v1/{parent=projects/ /locations/ /integrations/ }/versions Returns the list of all integration versions in the specified project. patch PATCH /v1/{integrationVersion.name=projects/ /locations/ /integrations/ /versions/ } Update a integration with a draft version in the specified project. publish POST /v1/{name=projects/ /locations/ /integrations/ /versions/ }:publish This RPC throws an exception if the integration is in ARCHIVED or ACTIVE state. unpublish POST /v1/{name=projects/ /locations/ /integrations/ /versions/ }:unpublish Sets the status of the ACTIVE integration to SNAPSHOT with a new tag "PREVIOUSLY PUBLISHED" after validating it. upload POST /v1/{parent=projects/ /locations/ /integrations/ }/versions:upload Uploads an integration.

