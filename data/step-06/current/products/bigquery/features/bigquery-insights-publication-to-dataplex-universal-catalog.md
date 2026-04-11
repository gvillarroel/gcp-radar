---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.354Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery insights publication to Dataplex Universal Catalog"
feature_slug: "bigquery-insights-publication-to-dataplex-universal-catalog"
latest_feature_date: "2025-11-18"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
keywords:
  - "insight publication"
  - "Universal Catalog sync"
  - "Dataplex Universal Catalog"
  - "BigQuery insight export"
  - "publish insights"
  - "column descriptions"
  - "insights to catalog"
  - "table recommendations"
---

# BigQuery insights publication to Dataplex Universal Catalog

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery can publish data insights, including recommendations and generated table and column descriptions, to Dataplex Universal Catalog.

## Extended Definition

BigQuery can publish data insights to Dataplex Universal Catalog as metadata. The published insights include query recommendations and auto-generated table and column descriptions, and BigQuery also supports publishing the results of a data quality scan as Dataplex Universal Catalog metadata.

## Evidence Summary

The release notes explicitly document insight publication to Dataplex Universal Catalog, while the other pages provide supporting context on Dataplex Universal Catalog metadata concepts and related BigQuery/Dataplex billing or metadata-attachment behavior.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Feature You can now publish data insights , including query recommendations and auto-generated table and column descriptions, to the Dataplex Universal Catalog.
- Feature Colab Enterprise notebooks in BigQuery let you do the following in Preview : Explain code with Gemini assistance Fix and explain errors with Gemini assistance June 18, 2025 Feature You can now publish the results of a data quality scan as Dataplex Universal Catalog metadata .
- February 24, 2026 Feature You can now create and review custom glossary terms in BigQuery for a conversational analytics agent and you can review business glossary terms imported from Dataplex Universal Catalog for an agent.
- Feature You can now generate table and column descriptions in all supported Gemini languages when you generate data insights.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- CREATE OR REPLACE VIEW myproject . mydataset . newview OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 48 HOUR ), friendly name = "newview" , description = "a view that expires in 2 days" , labels =[ ( "org unit" , "development" ) ] ) AS SELECT column 1 , column 2 , column 3 FROM myproject.mydataset.mytable The view is defined using the following GoogleSQL query: SELECT column 1, column 2, column 3 FROM myproject.mydataset.mytable The view option list specifies the: Expiration time: 48 hours from the time the view is created Friendly name: newview Description: A view that expires in 2 days Label: org unit = development Creating a view with column descriptions The following example creates a view named newview in mydataset .
- Examples Renaming a table The following example renames the table mydataset.mytable to mydataset.mynewtable : ALTER TABLE mydataset . mytable RENAME TO mynewtable ALTER TABLE RENAME COLUMN statement Caution: Renaming a column deletes all Data Catalog tags (deprecated) and Dataplex Universal Catalog aspects that are attached to it.
- Caution: Renaming a table deletes all tags (deprecated) or aspects that may be attached to it or its columns in Data Catalog or Dataplex Universal Catalog , respectively.
- Renaming a table removes all Data Catalog tags (deprecated) and Dataplex Universal Catalog aspects on the table.

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- If the SKU billed is BigQuery Governance SKU —these are charges coming from Dataplex Universal Catalog.
- Some Dataplex Universal Catalog functionalities trigger job execution using BigQuery.
- See the Dataplex Universal Catalog Pricing documentation for more details.

