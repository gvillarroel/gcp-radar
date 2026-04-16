---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.208Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "Custom connector editing"
feature_slug: "custom-connector-editing"
latest_feature_date: "2024-05-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/cloud-monitoring"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/bigcommerce/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/acumatica/configure"
keywords:
  - "custom"
  - "connector"
  - "editing"
  - "connectors"
  - "can"
  - "now"
  - "be"
  - "edited"
---

# Custom connector editing

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

Custom connectors can now be edited.

## Extended Definition

Custom connectors can now be edited.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/cloud-monitoring](https://docs.cloud.google.com/integration-connectors/docs/cloud-monitoring)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/bigcommerce/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/bigcommerce/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/acumatica/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/acumatica/configure)

## Supporting Pages

### Monitor connectors \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/cloud-monitoring](https://docs.cloud.google.com/integration-connectors/docs/cloud-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can visualize your Integration Connectors metrics and data using the following Cloud Monitoring tools: Custom dashboards Metrics Explorer Before you begin Before you use Cloud Monitoring, enable the Cloud Monitoring API.
- Example - Monitor request count The following PromQL query shows how to get and aggregate request count data for active connections: sum by ( location , connection , provider ) ( sum over time ( { "connectors.googleapis.com/connection/request count" , monitored resource = "connectors.googleapis.com/Connection" } [ 1 m ]) ) and on ( location , connection , provider ) avg over time ( { "connectors.googleapis.com/connection/state" , monitored resource = "connectors.googleapis.com/Connection" } [ 1 m ]) > 0 Example - Monitor active nodes The following PromQL query shows how to get and aggregate active node count data for all your connections: sum by ( location , connection , provider ) ( sum over time ( { "connectors.googleapis.com/connection/nodes" , monitored resource = "connectors.googleapis.com/Connection" } [ 1 m ]) ) and on ( location , connection , provider ) avg over time ( { "connectors.googleapis.com/connection/state" , monitored resource = "connectors.googleapis.com/Connection" } [ 1 m ]) > 0 Example - Monitor connection status over a time period The following PromQL query shows how to get the status trend over a time period for all your connections: count by ( status , connection ) ( { "connectors.googleapis.com/connection/connection status" , monitored resource = "connectors.googleapis.com/Connection" } == 1 ) If you want to know the status of connections at the current point in time, use the Metrics Explorer in the Google Cloud console instead of a PromQL query.
- Access metrics using custom dashboards To create custom monitoring dashboards for your Integration Connectors resources in your Google Cloud project, do the following: In the Google Cloud console, go to the Cloud Monitoring > Dashboard Overview page: Go to Dashboard Overview page Click Create dashboard .
- To know about the type of metrics sent by the Integration Connectors service, see Integration Connectors metrics .

### BigQuery \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure)
- Source ID: `site-docs-root-2`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported values are: AUTO, ALWAYS, NEVER, TUNNEL System limitations The BigQuery connector can process a maximum of 8 transactions per second, per node , and throttles any transactions beyond this limit.
- The results of all the entity operations and actions will be available as a JSON response in the Connectors task's connectorOutputPayload response parameter after you run your integration.
- Execute custom SQL query To create a custom query, follow these steps: Follow the detailed instructions to add a connectors task .
- By default, Integration Connectors allocates 2 nodes (for better availability) for a connection.

### BigCommerce \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/bigcommerce/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/bigcommerce/configure)
- Source ID: `site-docs-root-2`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- System limitations The BigCommerce connector can process 10 transaction per second, per node , and throttles any transactions beyond this limit.
- Note: You can view the entities, operations, and actions of a connector in the Connectors task .
- By default, Integration Connectors allocates 2 nodes (for better availability) for a connection.
- Note: The number of Integration Connectors nodes will autoscale dynamically based on your usage.

### Acumatica \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/acumatica/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/acumatica/configure)
- Source ID: `site-docs-root-2`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST connection type Field name Details Location europe-west1 Connector Acumatica Connector version 1 Connection Name acumatica Enable Cloud Logging False Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com Verbosity Level 5 Minimum number of nodes 2 Maximum number of nodes 50 Host https://examplepetstore.com Username USERNAME Password PASSWORD Secret version 1 OData connection type Field name Details Location europe-west1 Connector Acumatica Connector version 1 Connection Name acumatica Enable Cloud Logging False Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com Company Example Organization Endpoint Version 22.200.001 Inquiry Table PX Objects AP APInvoice Schema OData Verbosity Level 5 Minimum number of nodes 2 Maximum number of nodes 50 Host https://examplepetstore.com Username USERNAME Password PASSWORD Secret version 1 Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "ActionName" : "PrintSalesOrder" , "TopLevelEntity" : "SalesOrder" "EntityRecord" : "{ " Type ": { " value ": " IN " }, " OrderNbr ": { " value ": " 000007 " }, " Cus t omerID ": { " value ": " CANDYY " }, " Loca t io n ID ": { " value ": " MAIN " }}}" If the action is successful, the ExecuteAction task's connectorOutputPayload response parameter will have a value similar to the following: [{ "Status" : "Success" , "AffectedRecords" : "1" }] Entity operation examples This section shows how to perform some of the entity operations in this connector.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "Description": "go again", "BatchNbr": "000008", "CurrencyID": "INR", "Module": "GL" } If the integration is successful, your connector task's connectorOutputPayload field will have a value similar to the following: [{ "BatchNbr": "000016", "Module": "GL" }] Example - Create a customer In the Configure connector task dialog, click Entities .
- Note: The results of all the actions will be available as a JSON response in the Connectors task's connectorOutputPayload response parameter after you run your integration.

