---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.480Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Vertex AI Predict task"
feature_slug: "vertex-ai-predict-task"
latest_feature_date: "2023-09-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/configure-connectors-task"
  - "https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task"
  - "https://docs.cloud.google.com/application-integration/docs/perform-crud-operation-mysql-database"
keywords:
  - "perform"
  - "vertex"
  - "predict"
  - "added"
  - "task"
---

# Vertex AI Predict task

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

Application Integration added the Vertex AI Predict task to perform online predictions on ML models.

## Extended Definition

Application Integration added the Vertex AI Predict task to perform online predictions on ML models.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/configure-connectors-task](https://docs.cloud.google.com/application-integration/docs/configure-connectors-task)
- [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task)
- [https://docs.cloud.google.com/application-integration/docs/perform-crud-operation-mysql-database](https://docs.cloud.google.com/application-integration/docs/perform-crud-operation-mysql-database)

## Supporting Pages

### Connectors task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-connectors-task](https://docs.cloud.google.com/application-integration/docs/configure-connectors-task)
- Source ID: `site-docs-reference-2`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- To configure the Task Input or Task Output variables, click the respective variable to open the Configure Variable pane and perform the following steps: Enter the variable value in the Default Value field. (Optional) Select Use as an input to integration or Use as an output to integration .
- Before you begin Add a Connector task Create new connection To create a new connection from Application Integration, perform the following steps: Click the Connectors task element on the designer to view the Connectors task configuration pane.
- Add a filter clause To add a filter clause, perform the following steps: Click the Connectors task element on the designer to view the Connectors task configuration pane.
- When you configure the connector task , in the type of action you want to perform, select Actions .

### Data Transformer task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task)
- Source ID: `site-docs-reference-2`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Configure the Data Transformer task To add a Data Transformer task to your integration, perform the following steps: In the Google Cloud console, go to the Application Integration page.
- In addition, you can also use the supported transformations to transform your data into meaningful variables and formats to make them accessible to other tasks or triggers in your integration.
- Unlike variables, constants are not accessible to other tasks or triggers in your integration and are only limited to be used in the Data Transformation task where these are created.
- Use the Script mode You can use the Data Transformer Script editor to access the integration variables, perform variable assignments, and add or modify variables in your integration.

### "Perform CRUD operations on a MySQL database \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/perform-crud-operation-mysql-database](https://docs.cloud.google.com/application-integration/docs/perform-crud-operation-mysql-database)
- Source ID: `site-docs-root`
- Final score: 95
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In Connector output payload , the following output is displayed: [ { "employee id": 1.0, "employee first name": "Peter", "employee last name": "Dilliard", "employee emailID": "test-01@test.com" }, { "employee id": 2.0, "employee first name": "Meaghan", "employee last name": "Webb", "employee emailID": "test-02@test.com" } ] Perform other operations on your MySQL database table When you configure a Connectors task in your integration, you can select any one of the following operations: List Get Create Update Delete You've already used the List operation to view all the rows in the employee table.
- Select the Google Cloud project and perform the following tasks: Grant the following roles to the service account that you want to use to create the connection: roles/secretmanager.viewer roles/secretmanager.secretAccessor Enable the following services: secretmanager.googleapis.com (Secret Manager API) connectors.googleapis.com (Connectors API) If these services have not been enabled for your project previously, you are prompted to enable them when creating the connection .
- To delete a table row using the entity ID, perform the following steps to configure the Connectors task that you created earlier: In integration editor, click the connectors task element to view the Connectors configuration pane.
- To add a row using the Create operation, perform the following steps to configure the Connectors task that you created earlier: In integration editor, click the connectors task element to view the Connectors configuration pane.

