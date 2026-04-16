---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.476Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Custom connectors"
feature_slug: "custom-connectors"
latest_feature_date: "2024-01-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/configure-connectors-task"
  - "https://docs.cloud.google.com/application-integration/docs/configure-sap-erp-trigger"
  - "https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini"
keywords:
  - "openapi"
  - "connectors"
  - "custom"
  - "based"
  - "supports"
---

# Custom connectors

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

Application Integration now supports custom connectors based on the OpenAPI specification so custom integrations can be built with non-standard connectors.

## Extended Definition

Application Integration now supports custom connectors based on the OpenAPI specification so custom integrations can be built with non-standard connectors.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/configure-connectors-task](https://docs.cloud.google.com/application-integration/docs/configure-connectors-task)
- [https://docs.cloud.google.com/application-integration/docs/configure-sap-erp-trigger](https://docs.cloud.google.com/application-integration/docs/configure-sap-erp-trigger)
- [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)

## Supporting Pages

### Connectors task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-connectors-task](https://docs.cloud.google.com/application-integration/docs/configure-connectors-task)
- Source ID: `site-docs-reference-2`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Configure task input and output variables The Connectors task configuration pane displays Task Input and Task Output variables that are automatically generated based on the Entity and Operation or Action selected in the Configure connector task dialog.
- Action: Execute custom SQL query To create a custom query, follow these steps: Follow the detailed instructions to add a connectors task .
- If the connector supports custom SQL queries, you can select the Execute custom query option from the Actions list.
- The following example shows the JSON snippet of a row data to be added in a table: { "employee first name": "John", "employee emailID": "test-05@test.com" } In this example, employee first name and employee emailID are the column names with the corresponding values John and test-05@test.com . filterClause String Restricts the result of the operations based on a condition.

### "Build integrations with Gemini Code Assist \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- Source ID: `site-docs-reference-2`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Note: Gemini provides connector- and API Hub-based recommendations or suggestions for your integrations using the configured connections in Integration Connectors and APIs in Apigee API Hub .
- Supported tasks and triggers Gemini can assist you to add the following tasks and triggers: Triggers Tasks API trigger Cloud Pub/Sub trigger Salesforce trigger Jira Cloud ServiceNow Zendesk Cloud Scheduler trigger Data mapper task Approval task Suspend task Javascript task Cloud Run functions Timer task Return task Send email task Connectors task Call REST endpoint task Doc AI - Process task Gemini also assists you to create the following control flow tasks but can't generate sub-integrations: For Each Loop task For Each Parallel task While Loop task Call Integration task Create an integration Gemini assists you to create and build integrations using your natural language statements (or prompts ) as input.
- Configure Call REST API tasks If you have API Hub enabled in your project, then Gemini in Application Integration can assist you in providing contextually appropriate Call REST Endpoint task and task configuration recommendations based on the logical flow of your existing integration.
- Note: Gemini suggests one or more integration flows that qualifies your prompt: If you have enabled API Hub and Integration Connectors and met all prerequisites , then recommendations will contain Call REST Endpoint and Connectors tasks.

### SAP ERP trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-sap-erp-trigger](https://docs.cloud.google.com/application-integration/docs/configure-sap-erp-trigger)
- Source ID: `site-docs-reference-2`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Call API method: connectors.projects.locations.connections.listenEvent CALL METHOD lo client->listen event connections EXPORTING iv p projects id = lv p projects id iv p locations id = lv p locations id iv p connections id = lv p connections id is input = ls input IMPORTING es raw = es output = DATA(ls output) ev ret code = DATA(lv ret code) ev err text = DATA(lv err text) es err resp = DATA(ls err resp).
- The ls event payload field changes based on your requirements: &--------------------------------------------------------------------- & Report ZR TEST INT CONNECTOR &--------------------------------------------------------------------- & &--------------------------------------------------------------------- REPORT zr test int connector.
- Before you begin If you plan to create or configure a new connection for the SAP ERP trigger , make sure that you have the following IAM role on the project: Connector Admin ( roles/connectors.admin ) For information about granting roles, see Manage access .
- Custom read table functions The connector includes a custom read-table RFC, Z CUSTOM READ TABLE that is similar to the SAP RFC READ TABLE , but with a larger buffer to address the DATA BUFFER EXCEEDED problem and bypass RFC READ TABLE limitations.

