---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.483Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Inline connection creation with Connectors task"
feature_slug: "inline-connection-creation-with-connectors-task"
latest_feature_date: "2023-06-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/configure-connectors-task"
  - "https://docs.cloud.google.com/application-integration/docs/configure-hubspot-trigger"
  - "https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing"
keywords:
  - "connection"
  - "inline"
  - "creation"
  - "connectors"
  - "task"
---

# Inline connection creation with Connectors task

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

Application Integration now supports directly creating new Integration Connectors connections from the Connectors task.

## Extended Definition

Application Integration now supports directly creating new Integration Connectors connections from the Connectors task.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/configure-connectors-task](https://docs.cloud.google.com/application-integration/docs/configure-connectors-task)
- [https://docs.cloud.google.com/application-integration/docs/configure-hubspot-trigger](https://docs.cloud.google.com/application-integration/docs/configure-hubspot-trigger)
- [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing)

## Supporting Pages

### Connectors task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-connectors-task](https://docs.cloud.google.com/application-integration/docs/configure-connectors-task)
- Source ID: `site-docs-reference-2`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Inline connection creation You can use the Connectors task to directly create a new connection in Integration Connectors .
- Before you begin Add a Connector task Create new connection To create a new connection from Application Integration, perform the following steps: Click the Connectors task element on the designer to view the Connectors task configuration pane.
- To view the updated schema in your existing connector tasks, follow these steps: In Integration Connectors, open the Connection details page of the connection, and then click Refresh connection schema .
- Configure the Connectors task To configure a Connectors task, do the following: Note: Configuration details such as authentication will vary depending upon the connection type.

### HubSpot trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-hubspot-trigger](https://docs.cloud.google.com/application-integration/docs/configure-hubspot-trigger)
- Source ID: `site-docs-reference-2`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To configure the HubSpot trigger , you can either use an existing HubSpot connection available in Integration Connectors, or create a new HubSpot connection using the inline connection creation option.
- Before you begin If you plan to create or configure a new connection for the HubSpot trigger , make sure that you have the following Identity and Access Management (IAM) role on the project: Connector Admin ( roles/connectors.admin ) For information about granting roles, see Manage access .
- Therefore, after the connection creation is successful, perform the following additional steps: Go the connection details page of the newly created connection, and copy the webhook URL for event subscription.
- View event subscriptions To view and manage all the event subscriptions associated with a connection in Integration Connectors, do the following: Go to Integration Connectors > Connections page.

### "Automate Salesforce case routing assignments \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following edge condition controls the flow of the integration based on the type of the Salesforce case: Add an edge connection from the Get case type task to the Mapping for issue creation task with the following edge condition: $sf case type$ = "Engineering" Add another edge connection from the Get case type task to the Mapping for incident creation task with the following edge condition: $sf case type$ = "Sales" Sample integration flow The following figure shows a sample layout of the integration created using this tutorial.
- Connect to the Salesforce account Perform the following steps to add and configure a Connectors task to retrieve the case details using the Salesforce connection: In the integration editor, click Tasks to display a list of available tasks.
- Add an edge connection from the Mapping for incident creation task to the Create incident in ServiceNow connector.
- Do the following in the Connectors Task Editor page: Under Select connection , choose the us-central1 region.

