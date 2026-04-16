---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.468Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Task-level conditional and default failure policies"
feature_slug: "task-level-conditional-and-default-failure-policies"
latest_feature_date: "2024-10-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/configure-connectors-task"
  - "https://docs.cloud.google.com/application-integration/docs/configure-cloud-function-task"
  - "https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task"
keywords:
  - "conditional"
  - "policies"
  - "failure"
  - "level"
  - "default"
  - "tasks"
  - "task"
---

# Task-level conditional and default failure policies

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

Tasks can now be configured with multiple ordered conditional failure policies and a fallback default policy based on error codes or execution variables.

## Extended Definition

Tasks can now be configured with multiple ordered conditional failure policies and a fallback default policy based on error codes or execution variables.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/configure-connectors-task](https://docs.cloud.google.com/application-integration/docs/configure-connectors-task)
- [https://docs.cloud.google.com/application-integration/docs/configure-cloud-function-task](https://docs.cloud.google.com/application-integration/docs/configure-cloud-function-task)
- [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task)

## Supporting Pages

### Connectors task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-connectors-task](https://docs.cloud.google.com/application-integration/docs/configure-connectors-task)
- Source ID: `site-docs-reference-2`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- These variables are configurable and are accessible as inputs to the current task, as outputs to subsequent tasks, or as conditionals in the current integration.
- To configure the Task Input or Task Output variables, click the respective variable to open the Configure Variable pane and perform the following steps: Enter the variable value in the Default Value field. (Optional) Select Use as an input to integration or Use as an output to integration .
- To view the updated schema in your existing connector tasks, follow these steps: In Integration Connectors, open the Connection details page of the connection, and then click Refresh connection schema .
- For information about how to troubleshoot a failed Connectors task, see Use logs to troubleshoot and trace connector failures .

### Cloud Function task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-cloud-function-task](https://docs.cloud.google.com/application-integration/docs/configure-cloud-function-task)
- Source ID: `site-docs-root-2`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Because this dependency is external to Application Integration, all executions of active integrations that fail because of the failure in the Cloud Function task are excluded from the Application Integration Service Level Agreement (SLA) terms and conditions.
- If neither OIDC ID profile nor user-managed service account is configured, then the default service account ( service- PROJECT NUMBER @gcp-sa-integrations.iam.gserviceaccount.com ) is used to call the Cloud Function task.
- Before you begin Ensure that you perform the following tasks in your Google Cloud project before configuring the Cloud Function task.
- From the Tasks drop-down, click Cloud Function to place it in the integration editor.

### Data Transformer task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task)
- Source ID: `site-docs-reference-2`
- Final score: 129
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In addition, you can also use the supported transformations to transform your data into meaningful variables and formats to make them accessible to other tasks or triggers in your integration.
- Unlike variables, constants are not accessible to other tasks or triggers in your integration and are only limited to be used in the Data Transformation task where these are created.
- In the Data Transformer (preview) Task Editor page, select one of the following options: By default, the Diagram mode opens.
- In the integration editor navigation bar, click Tasks to view the list of available tasks and connectors.

