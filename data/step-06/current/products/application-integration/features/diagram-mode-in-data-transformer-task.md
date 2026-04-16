---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.469Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Diagram mode in Data Transformer task"
feature_slug: "diagram-mode-in-data-transformer-task"
latest_feature_date: "2024-10-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task"
  - "https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order"
  - "https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task"
keywords:
  - "diagram"
  - "console"
  - "transformation"
  - "mode"
  - "adds"
  - "transformer"
  - "based"
  - "task"
---

# Diagram mode in Data Transformer task

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

Diagram mode adds a console-based data transformation editor experience for selecting input/output variables and defining transformations.

## Extended Definition

Diagram mode adds a console-based data transformation editor experience for selecting input/output variables and defining transformations.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task)
- [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order)
- [https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task](https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task)

## Supporting Pages

### Data Transformer task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task)
- Source ID: `site-docs-reference-2`
- Final score: 229
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use the Diagram mode The Diagram mode provides a console-based experience to select the input and output variables and perform transformations in the data transformation editor.
- The Diagram mode provides a console-based experience to select the input and output variables and perform transformations in the data transformation editor.
- To add mapping using the Diagram mode, follow these steps: In the Data Transformer task configuration pane, click Open Data Transformer Editor .
- In the Data Transformer (preview) Task Editor page, select one of the following options: By default, the Diagram mode opens.

### "Automate Salesforce opportunity to BigQuery order \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following edge condition controls the flow of the integration based on the validation of the account information: Add an edge connection from the Check account task to the Mapping for Account Creation task with the following edge condition: $account exists$ = False Add another edge connection from the Check account task to the Mapping for Order Creation task with the following edge condition: $account exists$ = True Sample integration flow The following figure shows a sample layout of the integration created using this tutorial.
- Create a new ServiceNow account Perform the following steps to configure a Connectors task that adds a new account to your ServiceNow instance: In the integration editor, click Tasks to display a list of available tasks.
- The Google Cloud console fills in the Service account ID field based on this name.
- The Google Cloud console fills in the Service account ID field based on this name.

### Data Mapping task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task](https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task)
- Source ID: `site-docs-root-2`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Configure the Data Mapping task To configure a Data Mapping task, perform the following steps: In the Google Cloud console, go to the Application Integration page.
- The completed data mapping is available to view from the Data Mapping task configuration pane, as shown in the following image: Supported data types and mapping functions Application Integration supports the following data types for variables in the Data Mapping task: String and String array Integer and Integer array Double and Double array Boolean and Boolean array JSON The following table lists the data mapping functions available for each of the data types.
- Considerations For JSON variables, based on a JSON schema, Application Integration interprets the child property of the variable as a JSON type in the following cases: If the child property's type specifies null.
- Data Mapping task The Data Mapping task lets you perform variable assignments in your integration, get and set properties of json objects, and apply nested transform functions to values.

