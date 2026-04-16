---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.213Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "Dead-letter configuration"
feature_slug: "dead-letter-configuration"
latest_feature_date: "2024-03-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/azuread/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/apachekafka/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure"
keywords:
  - "dead"
  - "letter"
  - "configuration"
  - "connections"
  - "can"
  - "write"
  - "unprocessed"
  - "events"
---

# Dead-letter configuration

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

Connections can write unprocessed events to a specified Pub/Sub topic when dead-letter is configured.

## Extended Definition

Connections can write unprocessed events to a specified Pub/Sub topic when dead-letter is configured.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuread/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuread/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachekafka/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachekafka/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector](https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure)

## Supporting Pages

### Azure AD (Entra ID) \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuread/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuread/configure)
- Source ID: `site-docs-root-2`
- Final score: 205
- Re-rank relevance: N/A

Evidence snippets:
- If you configure dead-letter, the connection writes the unprocessed events to the specified Pub/Sub topic .
- Dead-letter topic: The Pub/Sub topic where you want to write the details of the unprocessed event.
- Enter the dead-letter configuration.
- Enter the following details: Dead-letter project ID: The Google Cloud project ID where you have configured the dead-letter Pub/Sub topic.

### Apache Kafka \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachekafka/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachekafka/configure)
- Source ID: `site-docs-root-2`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you configure dead-letter, the connection writes the unprocessed events to the specified Pub/Sub topic .
- Dead-letter topic: The Pub/Sub topic where you want to write the details of the unprocessed event.
- Enter the dead-letter configuration.
- If you want to establish a public connection to your backend systems with additional security, you can consider configuring static outbound IP addresses for your connections , and then configure your firewall rules to allowlist only the specific static IP addresses.

### "Perform CRUD operations on a MySQL database \_|\_ Integration Connectors\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector](https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- If you want to establish a public connection to your backend systems with additional security, you can consider configuring static outbound IP addresses for your connections , and then configure your firewall rules to allowlist only the specific static IP addresses.
- To view this information in your MySQL table, execute the following command from your MySQL client: SELECT FROM employee; The following table rows are displayed: +-------------+---------------------+--------------------+------------------+ employee id employee first name employee last name employee emailID +-------------+---------------------+--------------------+------------------+ 1 Peter Dilliard test-01@test.com 2 Meaghan Webb test-02@test.com 3 Mary Smith msmith@test.com +-------------+---------------------+--------------------+------------------+ Delete a row in a table You can use the Delete operation to delete one or more table rows.
- In Response Parameters , under Connector output payload , the following output is displayed: [ { "employee id": 1.0, "employee first name": "Peter", "employee last name": "Dilliard", "employee emailID": "test-01@test.com" }, { "employee id": 2.0, "employee first name": "Meaghan", "employee last name": "Webb", "employee emailID": "test-02@test.com" } ] Perform other operations on your MySQL database table When you configure a Connectors task in your integration, you can select any one of the following operations: List Get Create Update Delete You've already used the List operation to view all the rows in the employee table.
- In Response Parameters , under Connector input payload , the payload that you provided is displayed: { "employee first name": "Mary", "employee last name": "Smith", "employee emailID": "test-03@test.com" } Under Connector output payload , the entity ID is displayed as output: { "employee id": 3.0 } You can verify that the row is added in your MySQL table.

### BigQuery \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure)
- Source ID: `site-docs-root-2`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Use terraform to create connections You can use the Terraform resource to create a new connection.
- The connection name can contain lower-case letters, numbers, or hyphens.
- When creating this connection by using Terraform, you must set the following variables in your Terraform configuration file: Parameter name Data type Required Description project id STRING True The ID of the project containing BigQuery dataset. e.g. myproject. dataset id STRING False Dataset ID of the BigQuery dataset without the project name. e.g. mydataset. proxy enabled BOOLEAN False Select this checkbox to configure a proxy server for the connection. proxy auth scheme ENUM False The authentication type to use to authenticate to the ProxyServer proxy.
- Supported values are: AUTO, ALWAYS, NEVER, TUNNEL System limitations The BigQuery connector can process a maximum of 8 transactions per second, per node , and throttles any transactions beyond this limit.

