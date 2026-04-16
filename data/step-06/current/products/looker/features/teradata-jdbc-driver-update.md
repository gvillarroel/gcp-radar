---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.463Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Teradata JDBC driver update"
feature_slug: "teradata-jdbc-driver-update"
latest_feature_date: "2025-06-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/migration/teradata-tutorial"
  - "https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts"
  - "https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/artifact"
keywords:
  - "teradata"
  - "jdbc"
  - "driver"
  - "update"
  - "was"
  - "updated"
  - "version"
  - "20"
---

# Teradata JDBC driver update

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The Teradata JDBC driver was updated to version 20.00.00.45 for connections to Teradata.

## Extended Definition

The Teradata JDBC driver was updated to version 20.00.00.45 for connections to Teradata.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/migration/teradata-tutorial](https://docs.cloud.google.com/bigquery/docs/migration/teradata-tutorial)
- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts)
- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/artifact](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/artifact)

## Supporting Pages

### Migrating Teradata to BigQuery tutorial \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/migration/teradata-tutorial](https://docs.cloud.google.com/bigquery/docs/migration/teradata-tutorial)
- Source ID: `site-docs-reference-required-6`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
- On the computer where you will connect to Teradata, use a web browser to download the latest available version of the TPC-H tools from the TPC website .
- Install the Teradata SQL Driver for Python for scripting interactions with Teradata Database.
- In the logon command, replace teradata-ip , teradata-user , and teradata-pwd with your connection details. logon teradata-ip / teradata-user , teradata-pwd ; drop table tpch.lineitem; drop table tpch.error 1; drop table tpch.error 2; CREATE multiset TABLE tpch.lineitem, NO FALLBACK, NO BEFORE JOURNAL, NO AFTER JOURNAL, CHECKSUM = DEFAULT, DEFAULT MERGEBLOCKRATIO ( L ORDERKEY INTEGER NOT NULL, L PARTKEY INTEGER NOT NULL, L SUPPKEY INTEGER NOT NULL, L LINENUMBER INTEGER NOT NULL, L QUANTITY DECIMAL(15,2) NOT NULL, L EXTENDEDPRICE DECIMAL(15,2) NOT NULL, L DISCOUNT DECIMAL(15,2) NOT NULL, L TAX DECIMAL(15,2) NOT NULL, L RETURNFLAG CHAR(1) CHARACTER SET LATIN CASESPECIFIC NOT NULL, L LINESTATUS CHAR(1) CHARACTER SET LATIN CASESPECIFIC NOT NULL, L SHIPDATE DATE FORMAT 'yyyy-mm-dd' NOT NULL, L COMMITDATE DATE FORMAT 'yyyy-mm-dd' NOT NULL, L RECEIPTDATE DATE FORMAT 'yyyy-mm-dd' NOT NULL, L SHIPINSTRUCT CHAR(25) CHARACTER SET LATIN CASESPECIFIC NOT NULL, L SHIPMODE CHAR(10) CHARACTER SET LATIN CASESPECIFIC NOT NULL, L COMMENT VARCHAR(44) CHARACTER SET LATIN CASESPECIFIC NOT NULL) PRIMARY INDEX ( L ORDERKEY ) PARTITION BY RANGE N(L COMMITDATE BETWEEN DATE '1992-01-01' AND DATE '1998-12-31' EACH INTERVAL '1' DAY); The script first makes sure that the lineitem table and temporary error tables do not exist, and proceeds to create the lineitem table.

### Create or update artifacts \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts)
- Source ID: `site-api-reference`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The version must be provided for any updates to an existing artifact. namespace lock string Artifact storage namespace. created at lock string Timestamp when this artifact was created. updated at lock string Timestamp when this artifact was updated. value size lock integer Size (in bytes) of the stored value. created by userid lock string User id of the artifact creator. updated by userid lock string User id of the artifact updater.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-25 UTC."],[],[]]
- The version must be provided for any updates to an existing artifact. query HTTP Query Expand HTTP Query definition... fields string Comma-delimited names of fields to return in responses.
- Omit for all fields Response 200: Created or updated artifacts Datatype Description (array) Artifact [] key string Key of value to store.

### Get one or more artifacts \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/artifact](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/artifact)
- Source ID: `site-api-reference`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The version must be provided for any updates to an existing artifact. namespace lock string Artifact storage namespace. created at lock string Timestamp when this artifact was created. updated at lock string Timestamp when this artifact was updated. value size lock integer Size (in bytes) of the stored value. created by userid lock string User id of the artifact creator. updated by userid lock string User id of the artifact updater.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-25 UTC."],[],[]]
- Omit for all fields limit integer Number of results to return. (used with offset) offset integer Number of results to skip before returning any. (used with limit) tally boolean Return the full count of results in the X-Total-Count response header. (Slight performance hit.) Response 200: Created or updated artifacts Datatype Description (array) Artifact [] key string Key of value to store.
- Needed to set application/json content types, which are analyzed as plain text. version lock integer Version number of the stored value.

