---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:03:12.354Z"
product_name: "Apigee Integration"
product_slug: "apigee-integration"
feature_name: "Connectors task filter clause"
feature_slug: "connectors-task-filter-clause"
latest_feature_date: "2022-01-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/configure-connectors-task"
  - "https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task"
  - "https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task"
keywords:
  - "operations"
  - "clause"
  - "option"
  - "limit"
  - "connectors"
  - "filter"
  - "task"
  - "adds"
---

# Connectors task filter clause

Product: Apigee Integration
Coverage: MEDIUM

## Step 02 Summary

Adds a filter clause option to Connectors task operations to limit the amount of data processed during entity operations.

## Extended Definition

Adds a filter clause option to Connectors task operations to limit the amount of data processed during entity operations.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/configure-connectors-task](https://docs.cloud.google.com/application-integration/docs/configure-connectors-task)
- [https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task](https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task)
- [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task)

## Supporting Pages

### Connectors task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-connectors-task](https://docs.cloud.google.com/application-integration/docs/configure-connectors-task)
- Source ID: `site-docs-root-required-2`
- Final score: 240
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- A filter clause can be applied only for the following entity operations: List Delete Update When you select any of these operations, the Task Input section of the Connectors task displays the Filter clause field automatically.
- Filter clause for entity operations You can restrict the records that are processed by the Connectors task using the Filter clause variable, which is available as a Task Input .
- Add a filter clause To add a filter clause, perform the following steps: Click the Connectors task element on the designer to view the Connectors task configuration pane.
- Expand the Task Input section and click the filterClause(Connectors) string variable.

### Data Mapping task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task](https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task)
- Source ID: `site-docs-reference-required-1`
- Final score: 135
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the integration editor navigation bar, click Tasks to view the list of available tasks and connectors.
- For information about the usage limits that apply to the Data Mapping task, see Usage limits .
- Data type Supported mapping functions Boolean AND , EQUALS , NAND , NOR , NOT , OR , TO JSON , TO STRING , XNOR , XOR Boolean array APPEND , APPEND ALL , CONTAINS , FILTER , FOR EACH , GET , REMOVE , REMOVE AT , SET , SIZE , TO JSON , TO SET Double ADD , DIVIDE , CEIL , EQUALS , EXPONENT , GREATER THAN , GREATER THAN EQUAL TO , FLOOR , LESS THAN , LESS THAN EQUAL TO , MOD , MULTIPLY , ROUND , SUBTRACT , TO JSON , TO STRING Double array APPEND , APPEND ALL , AVG , CONTAINS , FILTER , FOR EACH , GET , MAX , MIN , REMOVE , REMOVE AT , SET , SIZE , SUM , TO JSON , TO SET Integer ADD , DIVIDE , EPOCH TO HUMAN READABLE TIME , EQUALS , EXPONENT , GREATER THAN , GREATER THAN EQUAL TO , LESS THAN , LESS THAN EQUAL TO , MOD , MULTIPLY , SUBTRACT , TO DOUBLE , TO JSON , TO STRING Integer array APPEND , APPEND ALL , AVG , CONTAINS , FILTER , FOR EACH , GET , MAX , MIN , REMOVE , REMOVE AT , SET , SIZE , SUM , TO JSON , TO SET JSON APPEND ELEMENT , FLATTEN , FILTER , FOR EACH , GET ELEMENT , GET PROPERTY , MERGE , REMOVE PROPERTY , RESOLVE TEMPLATE , SET PROPERTY, SIZE , TO BOOLEAN , TO BOOLEAN ARRAY , TO DOUBLE , TO DOUBLE ARRAY , TO INT , TO INT ARRAY , TO STRING , TO STRING ARRAY String CONCAT , CONTAINS , DECODE BASE64 STRING , EQUALS , EQUALS IGNORE CASE , LENGTH , REPLACE ALL , RESOLVE TEMPLATE , SPLIT , SUBSTRING , TO BASE 64 , TO BOOLEAN , TO DOUBLE , TO INT , TO JSON , TO LOWERCASE , TO UPPERCASE String array APPEND , APPEND ALL , CONTAINS , FILTER , FOR EACH , GET , REMOVE , REMOVE AT , SET , SIZE , TO JSON , TO SET For more information about each of the data mapping functions, see Data Mapping Functions Reference .
- The completed data mapping is available to view from the Data Mapping task configuration pane, as shown in the following image: Supported data types and mapping functions Application Integration supports the following data types for variables in the Data Mapping task: String and String array Integer and Integer array Double and Double array Boolean and Boolean array JSON The following table lists the data mapping functions available for each of the data types.

### Data Transformer task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task)
- Source ID: `site-docs-root-required-2`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Unlike variables, constants are not accessible to other tasks or triggers in your integration and are only limited to be used in the Data Transformation task where these are created.
- In the Data Transformer (preview) Task Editor page, select one of the following options: By default, the Diagram mode opens.
- Quotas and limits For information about the usage limits that apply to the Data Transformer task, see Usage limits .
- In the integration editor navigation bar, click Tasks to view the list of available tasks and connectors.

