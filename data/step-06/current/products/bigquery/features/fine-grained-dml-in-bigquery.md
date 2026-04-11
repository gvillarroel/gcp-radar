---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.470Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Fine-grained DML in BigQuery"
feature_slug: "fine-grained-dml-in-bigquery"
latest_feature_date: "2024-10-14"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/data-manipulation-language"
keywords:
  - "fine-grain DML"
  - "fine-grained DML controls"
  - "fine-grained DML"
  - "granular DML"
  - "DELETE optimization"
  - "MERGE optimization"
  - "UPDATE optimization"
  - "DML execution control"
---

# Fine-grained DML in BigQuery

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

Adds fine-grained DML controls to optimize UPDATE, DELETE, and MERGE statement execution.

## Extended Definition

Fine-grained DML in BigQuery is a table-level DML execution mode enabled by setting `enable fine grained mutations = TRUE` at table creation or via `ALTER TABLE`, after which existing mutating DML statements use the same DML syntax with fine-grained behavior. It uses a hybrid deleted-data handling approach that combines inline processing with offloaded garbage collection to distribute rewrite costs and optimize performance across multiple mutating DML statements against the table. The documentation notes it is not recommended for large tables with frequently mutated partitions larger than 2 TB.

## Evidence Summary

The cited BigQuery DML documentation defines how to enable fine-grained mutations, explains its execution behavior and performance characteristics, and gives a documented usage limitation.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/data-manipulation-language](https://docs.cloud.google.com/bigquery/docs/data-manipulation-language)

## Supporting Pages

### "Transform data with data manipulation language (DML) \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/data-manipulation-language](https://docs.cloud.google.com/bigquery/docs/data-manipulation-language)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- To create a new table with fine-grained DML, use the CREATE TABLE statement : CREATE TABLE mydataset . mytable ( product STRING , inventory INT64 ) OPTIONS ( enable fine grained mutations = TRUE ); To alter an existing table with fine-grained DML, use the ALTER TABLE statement : ALTER TABLE mydataset . mytable SET OPTIONS ( enable fine grained mutations = TRUE ); To alter all existing tables in a dataset with fine-grained DML, use the ALTER TABLE statement : FOR record IN ( SELECT CONCAT ( table schema , '.' , table name ) AS table path FROM mydataset .
- TABLES ) DO EXECUTE IMMEDIATE "ALTER TABLE " record . table path " SET OPTIONS(enable fine grained mutations = TRUE)" ; END FOR ; After the enable fine grained mutations option is set to TRUE , mutating DML statements are run with fine-grained DML capabilities enabled and use existing DML statement syntax .
- Deleted data considerations Fine-grained DML operations use a hybrid approach to manage deleted data, combining inline processing with offloaded garbage collection to distribute rewrite costs and optimize performance across multiple mutating DML statements issued against a table.
- JOBS WHERE job id LIKE "%fine grained mutation garbage collection%" Limitations Tables enabled with fine-grained DML are subject to the following limitations: For large tables with frequently mutated partitions exceeding 2 TB, fine-grained DML is not recommended.

