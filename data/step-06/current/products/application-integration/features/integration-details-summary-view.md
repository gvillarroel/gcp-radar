---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.479Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Integration details summary view"
feature_slug: "integration-details-summary-view"
latest_feature_date: "2023-10-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/configure-connectors-task"
  - "https://docs.cloud.google.com/application-integration/docs/cloud-logging"
  - "https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing"
keywords:
  - "designer"
  - "detailed"
  - "details"
  - "summary"
  - "view"
  - "supports"
---

# Integration details summary view

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

The Integration designer now supports a detailed summary view for an integration.

## Extended Definition

The Integration designer now supports a detailed summary view for an integration.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/configure-connectors-task](https://docs.cloud.google.com/application-integration/docs/configure-connectors-task)
- [https://docs.cloud.google.com/application-integration/docs/cloud-logging](https://docs.cloud.google.com/application-integration/docs/cloud-logging)
- [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing)

## Supporting Pages

### Connectors task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-connectors-task](https://docs.cloud.google.com/application-integration/docs/configure-connectors-task)
- Source ID: `site-docs-reference-2`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin Add a Connector task Create new connection To create a new connection from Application Integration, perform the following steps: Click the Connectors task element on the designer to view the Connectors task configuration pane.
- To view the updated schema in your existing connector tasks, follow these steps: In Integration Connectors, open the Connection details page of the connection, and then click Refresh connection schema .
- Add a filter clause To add a filter clause, perform the following steps: Click the Connectors task element on the designer to view the Connectors task configuration pane.
- To configure the authentication override, do the following: Click the connectors task element on the designer to view the Connectors task configuration pane.

### "Automate Salesforce case routing assignments \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Select the Connectors task element on the designer to view the Connectors task configuration pane .
- Click the Connectors task element on the designer to view the Connectors task configuration pane .
- Click the Connectors task element on the designer to view the Connectors task configuration pane .
- Select the Data Mapping element on the designer to view the task configuration pane.

### "View logs in Cloud Logging \_|\_ Application Integration \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-integration/docs/cloud-logging](https://docs.cloud.google.com/application-integration/docs/cloud-logging)
- Source ID: `site-docs-reference-2`
- Final score: 107
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Sample queries You can use the following queries to view logs in Cloud Logging: To view all integration execution logs: resource.type="integrations.googleapis.com/IntegrationVersion" You can view integration execution logs for a specific execution ID: Searches only the parents executions with the given execution ID: resource.type="integrations.googleapis.com/IntegrationVersion" jsonPayload.executionId=" EXECUTION ID " Searches for both parent and child executions launched from the given execution ID: resource.type="integrations.googleapis.com/IntegrationVersion" " EXECUTION ID " To view integration execution logs for a specific integration: resource.type="integrations.googleapis.com/IntegrationVersion" " INTEGRATION NAME " Or resource.type="integrations.googleapis.com/IntegrationVersion" jsonPayload.integration=" INTEGRATION NAME " To view failed integration executions for a specific integration: resource.type="integrations.googleapis.com/IntegrationVersion" jsonPayload.integrationExecutionDetails.integrationExecutionState="FAILED" jsonPayload.integration=" INTEGRATION NAME " To view logs with specific request param name.
- View logs in Cloud Logging In Cloud Logging, you can view the Integration execution logs containing integration details, such as status, performance, integration version, request and response parameters, and the trigger and task configurations.
- Click settings ( Integration summary ) in the designer toolbar.
- Go to Application Integration To view the integration execution logs in Cloud Logging, use one of the following methods: In the navigation menu, click Logs , and then, click View Cloud Logs .

