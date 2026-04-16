---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.487Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Operation integration task"
feature_slug: "operation-integration-task"
latest_feature_date: "2023-05-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task"
  - "https://docs.cloud.google.com/application-integration/docs/configure-connectors-task"
  - "https://docs.cloud.google.com/application-integration/docs/perform-crud-operation-mysql-database"
keywords:
  - "operation"
  - "preview"
  - "added"
  - "task"
---

# Operation integration task

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

Application Integration added an Operation integration task in preview.

## Extended Definition

Application Integration added an Operation integration task in preview.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task)
- [https://docs.cloud.google.com/application-integration/docs/configure-connectors-task](https://docs.cloud.google.com/application-integration/docs/configure-connectors-task)
- [https://docs.cloud.google.com/application-integration/docs/perform-crud-operation-mysql-database](https://docs.cloud.google.com/application-integration/docs/perform-crud-operation-mysql-database)

## Supporting Pages

### Data Transformer task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task)
- Source ID: `site-docs-reference-2`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Data Transformer task Preview — BigQuery Connector This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- In the Data Transformer (preview) Task Editor page, select one of the following options: By default, the Diagram mode opens.
- To add the transformation for fields that cannot be mapped directly, click settings Transformation and add the transformation operation by clicking + Add operation : After the transformation is complete, you can execute the integration to map the old ticketing system to the new system.
- If you want to choose the result of the previous operation in the succeeding operation, select the Previous Operation Result variable as shown in the following image: To remove the operation, click delete Delete next to the operation.

### Connectors task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-connectors-task](https://docs.cloud.google.com/application-integration/docs/configure-connectors-task)
- Source ID: `site-docs-reference-2`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows the JSON snippet of a row data to be added in a table: { "employee first name": "John", "employee emailID": "test-05@test.com" } In this example, employee first name and employee emailID are the column names with the corresponding values John and test-05@test.com . filterClause String Restricts the result of the operations based on a condition.
- Configure task input and output variables The Connectors task configuration pane displays Task Input and Task Output variables that are automatically generated based on the Entity and Operation or Action selected in the Configure connector task dialog.
- A filter clause can be applied only for the following entity operations: List Delete Update When you select any of these operations, the Task Input section of the Connectors task displays the Filter clause field automatically.
- Filter clause for entity operations You can restrict the records that are processed by the Connectors task using the Filter clause variable, which is available as a Task Input .

### "Perform CRUD operations on a MySQL database \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/perform-crud-operation-mysql-database](https://docs.cloud.google.com/application-integration/docs/perform-crud-operation-mysql-database)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In Connector output payload , the following output is displayed: [ { "employee id": 1.0, "employee first name": "Peter", "employee last name": "Dilliard", "employee emailID": "test-01@test.com" }, { "employee id": 2.0, "employee first name": "Meaghan", "employee last name": "Webb", "employee emailID": "test-02@test.com" } ] Perform other operations on your MySQL database table When you configure a Connectors task in your integration, you can select any one of the following operations: List Get Create Update Delete You've already used the List operation to view all the rows in the employee table.
- To add a row using the Create operation, perform the following steps to configure the Connectors task that you created earlier: In integration editor, click the connectors task element to view the Connectors configuration pane.
- In the Connector Task Editor dialog that appears, follow these steps: In the Set entities/action section, from the Operations list, select Create .
- In the Connector Task Editor dialog that appears, follow these steps: In the Set entities/action section, from the Operations list, select Update .

