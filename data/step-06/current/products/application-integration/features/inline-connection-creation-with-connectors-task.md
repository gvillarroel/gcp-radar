---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:28:26.479Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Inline connection creation with Connectors task"
feature_slug: "inline-connection-creation-with-connectors-task"
latest_feature_date: "2023-06-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini"
  - "https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing"
  - "https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order"
keywords:
  - "connection"
  - "inline"
  - "creation"
  - "connectors"
  - "application"
  - "integration"
  - "with"
  - "task"
---

# Inline connection creation with Connectors task

Product: Application Integration
Coverage: LOW

## Step 02 Summary

Application Integration now supports directly creating new Integration Connectors connections from the Connectors task.

## Extended Definition

Application Integration now supports directly creating new Integration Connectors connections from the Connectors task.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing)
- [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order)

## Supporting Pages

### "Build integrations with Gemini Code Assist \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- Source ID: `site-iam-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- Supported tasks and triggers Gemini can assist you to add the following tasks and triggers: Triggers Tasks API trigger Cloud Pub/Sub trigger Salesforce trigger Jira Cloud ServiceNow Zendesk Cloud Scheduler trigger Data mapper task Approval task Suspend task Javascript task Cloud Run functions Timer task Return task Send email task Connectors task Call REST endpoint task Doc AI - Process task Gemini also assists you to create the following control flow tasks but can't generate sub-integrations: For Each Loop task For Each Parallel task While Loop task Call Integration task Create an integration Gemini assists you to create and build integrations using your natural language statements (or prompts ) as input.
- In Application Integration, Gemini Code Assist can assist you to do the following: Create integrations Configure connector tasks in an integration Configure Call REST API tasks in an integration Add edge conditions and append additional tasks to an integration Configure JavaScript tasks ( Preview ) Generate integration description For detailed information about Gemini for Google Cloud, see Gemini for Google Cloud overview .
- Configure Call REST API tasks If you have API Hub enabled in your project, then Gemini in Application Integration can assist you in providing contextually appropriate Call REST Endpoint task and task configuration recommendations based on the logical flow of your existing integration.
- Note: Gemini suggests one or more integration flows that qualifies your prompt: If you have enabled API Hub and Integration Connectors and met all prerequisites , then recommendations will contain Call REST Endpoint and Connectors tasks.

### "Automate Salesforce case routing assignments \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- The following edge condition controls the flow of the integration based on the type of the Salesforce case: Add an edge connection from the Get case type task to the Mapping for issue creation task with the following edge condition: $sf case type$ = "Engineering" Add another edge connection from the Get case type task to the Mapping for incident creation task with the following edge condition: $sf case type$ = "Sales" Sample integration flow The following figure shows a sample layout of the integration created using this tutorial.
- Costs In this tutorial, you use the following billable components of Google Cloud: Application Integration Integration Connectors Secret Manager The instructions in this tutorial are designed to keep your resource usage within the limits of Google Cloud's Always Free tier .
- Connect to the Salesforce account Perform the following steps to add and configure a Connectors task to retrieve the case details using the Salesforce connection: In the integration editor, click Tasks to display a list of available tasks.
- Home Documentation Application development Application Integration Guides Send feedback Automate Salesforce case routing assignments Stay organized with collections Save and categorize content based on your preferences.

### "Automate Salesforce opportunity to BigQuery order \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following edge condition controls the flow of the integration based on the validation of the account information: Add an edge connection from the Check account task to the Mapping for Account Creation task with the following edge condition: $account exists$ = False Add another edge connection from the Check account task to the Mapping for Order Creation task with the following edge condition: $account exists$ = True Sample integration flow The following figure shows a sample layout of the integration created using this tutorial.
- Costs In this tutorial, you use the following billable components of Google Cloud: Application Integration Integration Connectors BigQuery Secret Manager The instructions in this tutorial are designed to keep your resource usage within the limits of Google Cloud's Always Free tier .
- Connect to the Salesforce account Perform the following steps to add and configure a Connectors task to retrieve the opportunity details using the Salesforce connection: In the integration editor, click Tasks to display a list of available tasks.
- Connect to the BigQuery table Perform the following steps to configure a Connectors task that reads the BigQuery Accounts tables using the BigQuery connection: In the integration editor, click Tasks to display a list of available tasks.

