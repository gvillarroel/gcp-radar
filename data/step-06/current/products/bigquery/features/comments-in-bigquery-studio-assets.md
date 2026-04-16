---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.323Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Comments in BigQuery Studio assets"
feature_slug: "comments-in-bigquery-studio-assets"
latest_feature_date: "2025-07-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/code-asset-folders"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods"
keywords:
  - "comments"
  - "bigquery"
  - "studio"
  - "assets"
  - "users"
  - "can"
  - "add"
  - "reply"
---

# Comments in BigQuery Studio assets

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Users can add, reply to, and share links to comments on notebooks, data canvases, data preparation files, and saved queries.

## Extended Definition

Users can add, reply to, and share links to comments on notebooks, data canvases, data preparation files, and saved queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/code-asset-folders](https://docs.cloud.google.com/bigquery/docs/code-asset-folders)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods)

## Supporting Pages

### Organize code assets with folders \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/code-asset-folders](https://docs.cloud.google.com/bigquery/docs/code-asset-folders)
- Source ID: `site-docs-reference-5`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Organize code assets with folders You can access and organize your code assets by using folders in the Files pane of BigQuery Studio: A folder is the basic container for organizing code assets, similar to a standard file system folder.
- IAM roles granted on resource creation When you create a folder, the following roles are granted automatically: Users who create folders in their user root node automatically receive the Dataform Admin role ( roles/dataform.admin ) on those folders.
- For example, you could have folderA and the code assets that it contains in the us-west1 region, and folderB and the code assets that it contains in the us-central1 region.
- Organize code assets with folders Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Data Intelligence Platform Cloud migration with Collibra & BigQuery Enterprise-wide data privacy: Collibra + BigQuery Enterprise-scale data quality: Collibra + BigQuery Data quality without the complexity: BigQuery & Collibra Partner Advantage page Direct link Datahub Solution DataHub Cloud Category Data Governance, Security, & MDM Description Datahub is an open source metadata platform that helps organizations discover, understand, and govern their data assets.
- Partner references Creating a dataset using BigQuery Adding a new QuickSight dataset for BigQuery Unlock the power of unified business intelligence with BigQuery and Amazon QuickSight Amplitude Solution Amplitude Analytics Category BI, ML, & Advanced Analytics Description Amplitude is an event-based analytics tool that tracks the behaviors of users based on in-product interactions and analyzes user behavior in real-time.
- Partner references Use BigQuery directly in a notebook Getting started with BigQuery in Deepnote BigQuery with Google OAuth Partner Advantage page Direct link DinMo Solution DinMo Category BI, ML, & Advanced Analytics Description DinMo transforms all customer touch points into high-value audiences and helps users leverage them in all activation platforms without code or engineering in less than 5 minutes.
- Partner references Hightouch BigQuery Source Hightouch for BigQuery documentation Sync data from BigQuery to Segment Partner Advantage page Direct link Incorta Solution Incorta unified data & analytics platform Category ETL & Data Integration Description Incorta is a self-service data analytics platform that helps users gain a deeper understanding of their business and make quick, accurate decisions.

### "Run queries using the BigQuery DataFrames bigframes.pandas APIs \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods)
- Source ID: `site-docs-reference-required-15`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . import bigframes.pandas as bpd Load data from BigQuery query or table = "bigquery-public-data.ml datasets.penguins" bq df = bpd . read gbq ( query or table ) Inspect one of the columns (or series) of the DataFrame: bq df [ "body mass g" ] Compute the mean of this series: average body mass = bq df [ "body mass g" ] . mean () print ( f "average body mass: { average body mass } " ) Find the heaviest species using the groupby operation to calculate the mean body mass g: ( bq df [ "body mass g" ] . groupby ( by = bq df [ "species" ]) . mean () . sort values ( ascending = False ) . head ( 10 ) ) What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- Explore further For detailed documentation that includes this code sample, see the following: Use BigQuery DataFrames Code sample Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Home Documentation Data analytics BigQuery Samples Run queries using the BigQuery DataFrames bigframes.pandas APIs Stay organized with collections Save and categorize content based on your preferences.
- Use the BigQuery DataFrames bigframes.pandas APIs to perform data analysis via the BigQuery Query engine.

