---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:03:12.337Z"
product_name: "Apigee Integration"
product_slug: "apigee-integration"
feature_name: "IAM Conditions for Apigee Integration"
feature_slug: "iam-conditions-for-apigee-integration"
latest_feature_date: "2023-10-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/add-iam-conditions"
  - "https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order"
  - "https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini"
keywords:
  - "conditions"
  - "attribute"
  - "enable"
  - "based"
  - "adds"
---

# IAM Conditions for Apigee Integration

Product: Apigee Integration
Coverage: MEDIUM

## Step 02 Summary

Adds support for IAM Conditions to enable attribute-based access control on Apigee Integration resources.

## Extended Definition

Adds support for IAM Conditions to enable attribute-based access control on Apigee Integration resources.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/add-iam-conditions](https://docs.cloud.google.com/application-integration/docs/add-iam-conditions)
- [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order)
- [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)

## Supporting Pages

### Add IAM conditions \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/add-iam-conditions](https://docs.cloud.google.com/application-integration/docs/add-iam-conditions)
- Source ID: `site-docs-reference-required-2`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Add IAM conditions Identity and Access Management (IAM) Conditions lets you to define and enforce conditional, attribute-based access control for Google Cloud resources, including Application Integration resources.
- In Application Integration, you can enforce conditional access based on the following attributes: Date/time attributes: Use to set temporary (expiring), scheduled, or limited-duration access to Application Integration resources.
- Resource attributes : Use to configure conditional access based on a resource name, resource type, or resource service attributes.
- Resource attribute values The following table lists the values that the resource type attribute can contain for Application Integration: Resource name Resource type Reference Location integrations.googleapis.com/Location API reference Integration integrations.googleapis.com/Integration API reference IntegrationVersion integrations.googleapis.com/IntegrationVersion API reference Execution integrations.googleapis.com/Execution API reference Suspension integrations.googleapis.com/Suspension API reference AuthConfig integrations.googleapis.com/AuthConfig API reference Examples of using IAM Condtions for Application Integration Example 1: Limit access to any IntegrationVersion resource in a region You can use the following condition expression in the Condition editor to limit access to the IntegrationVersion resource.

### "Build integrations with Gemini Code Assist \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- Source ID: `site-docs-reference-required-2`
- Final score: 85
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Configure Call REST API tasks If you have API Hub enabled in your project, then Gemini in Application Integration can assist you in providing contextually appropriate Call REST Endpoint task and task configuration recommendations based on the logical flow of your existing integration.
- In Application Integration, Gemini Code Assist can assist you to do the following: Create integrations Configure connector tasks in an integration Configure Call REST API tasks in an integration Add edge conditions and append additional tasks to an integration Configure JavaScript tasks ( Preview ) Generate integration description For detailed information about Gemini for Google Cloud, see Gemini for Google Cloud overview .
- Note: Gemini suggests one or more integration flows that qualifies your prompt: If you have enabled API Hub and Integration Connectors and met all prerequisites , then recommendations will contain Call REST Endpoint and Connectors tasks.
- Note: Gemini provides connector- and API Hub-based recommendations or suggestions for your integrations using the configured connections in Integration Connectors and APIs in Apigee API Hub .

### "Automate Salesforce opportunity to BigQuery order \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order)
- Source ID: `site-docs-reference-required-2`
- Final score: 81
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following edge condition controls the flow of the integration based on the validation of the account information: Add an edge connection from the Check account task to the Mapping for Account Creation task with the following edge condition: $account exists$ = False Add another edge connection from the Check account task to the Mapping for Order Creation task with the following edge condition: $account exists$ = True Sample integration flow The following figure shows a sample layout of the integration created using this tutorial.
- Home Documentation Application development Application Integration Guides Send feedback Automate Salesforce opportunity to BigQuery order Stay organized with collections Save and categorize content based on your preferences.
- Create a new ServiceNow account Perform the following steps to configure a Connectors task that adds a new account to your ServiceNow instance: In the integration editor, click Tasks to display a list of available tasks.
- Enable the API Create a service account: Ensure that you have the Create Service Accounts IAM role ( roles/iam.serviceAccountCreator ) and the Project IAM Admin role ( roles/resourcemanager.projectIamAdmin ).

