---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.540Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Liquid case tag compatibility in new LookML runtime"
feature_slug: "liquid-case-tag-compatibility-in-new-lookml-runtime"
latest_feature_date: "2023-08-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/additional-lookml-basics"
  - "https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters"
  - "https://docs.cloud.google.com/bigquery/docs/gcs-transfer-parameters"
keywords:
  - "liquid"
  - "case"
  - "tag"
  - "compatibility"
  - "lookml"
  - "runtime"
  - "tags"
  - "string"
---

# Liquid case tag compatibility in new LookML runtime

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

In the new LookML runtime, Liquid case tags with string parameters evaluate the same as they do in the legacy runtime.

## Extended Definition

In the new LookML runtime, Liquid case tags with string parameters evaluate the same as they do in the legacy runtime.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/additional-lookml-basics](https://docs.cloud.google.com/looker/docs/additional-lookml-basics)
- [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters)
- [https://docs.cloud.google.com/bigquery/docs/gcs-transfer-parameters](https://docs.cloud.google.com/bigquery/docs/gcs-transfer-parameters)

## Supporting Pages

### Common LookML patterns \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/additional-lookml-basics](https://docs.cloud.google.com/looker/docs/additional-lookml-basics)
- Source ID: `site-docs-reference-required-4`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you wanted a field that counted users from the EU, you could use something like this: measure: eu count { type: count # COUNT(CASE WHEN users.countrycode IN 'UK','FR','ES' THEN 1 ELSE NULL END) drill fields: [detail] filters: [users.countrycode: "UK,FR,ES"] } If you want to filter with a mathematical expression , be sure to enclose it in double quotes: measure: total orders above 100 dollars { type: sum # SUM(CASE WHEN order.value > 100 THEN order.value ELSE NULL END) sql: ${order.value} ;; drill fields: [detail] filters: [order.value: ">100"] } Percentages Many key performance indicators are expressed in the form of percentages, such as "the percent of items returned," "the percent of emails that resulted in a sale," or other instances of "the percent of X that Y." In LookML, the design pattern is to create counts for the two conditions and create a third field that computes the percentage between the two. dimension: returned { type: yesno } measure: count { # total count of items type: count distinct sql: ${TABLE}.id ;; drill fields: [detail] } measure: returned count { # count of returned items type: count distinct sql: ${TABLE}.id ;; drill fields: [detail] filters: [returned: "Yes"] } measure: percent returned { type: number sql: 100.0 ${returned count} / NULLIF(${count}, 0) ;; value format: "0.00" } Use the following format to compute percentages.
- This page describes the following common patterns in LookML: Labeling fields (and names in the UI) Filtering counts by a dimension Percentages Using sets for drill-down details Filtering result sets Labeling fields (and names in the UI) Looker converts LookML field names into the strings that the UI displays by combining the view name in regular-weight font with the field's short name in bold.
- In this case, you can customize the visualization that is displayed by using Liquid variables in the link parameter, as shown on the link parameter documentation page and on the More powerful data drilling Best Practices page.
- The following code creates a set customers.detail and points both counts to the same set of fields. view: customers { set: detail { fields: [id, name, city] # creates named set customers.detail } measure: count { type: count drill fields: [detail ] # show fields in the set "customers.detail" } measure: in california count { type: count filters: [state: "California"] drill fields: [detail ] # show fields in the set "customers.detail" } } LookML sets are powerful in the following ways: Redeclaration of sets is additive.

### "Runtime parameters in Blob Storage transfers \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters)
- Source ID: `site-docs-reference-required-6`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See TransferRun.runTime run date Date string The date of the run time parameter in the following format: %Y%m%d ; for example, 20180101 .
- Runtime parameter examples The following examples show ways to combine the wildcard character and parameters for common use cases.
- Data source Source URI or data path Parameterized destination table name Evaluated destination table name Cloud Storage gs://bucket/ .csv mytable${ run time "%Y%m%d" } mytable$20180215 Amazon S3 s3://bucket/ .csv mytable${ run time "%Y%m%d" } mytable$20180215 Blob Storage .csv mytable${ run time "%Y%m%d" } mytable$20180215 This use case transfers today's data into a table partitioned on today's date.
- When you use runtime parameters in a transfer, you can do the following: Specify how you want to partition the destination table Retrieve files that match a particular date Available runtime parameters When you set up the Cloud Storage, Blob Storage, or Amazon S3 transfer, you can specify how you want to partition the destination table by using runtime parameters.

### "Runtime parameters in Cloud Storage transfers \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/gcs-transfer-parameters](https://docs.cloud.google.com/bigquery/docs/gcs-transfer-parameters)
- Source ID: `site-docs-reference-required-6`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See TransferRun.runTime run date Date string The date of the run time parameter in the following format: %Y%m%d ; for example, 20180101 .
- Runtime parameter examples The following examples show ways to combine the wildcard character and parameters for common use cases.
- Data source Source URI or data path Parameterized destination table name Evaluated destination table name Cloud Storage gs://bucket/ .csv mytable${ run time "%Y%m%d" } mytable$20180215 Amazon S3 s3://bucket/ .csv mytable${ run time "%Y%m%d" } mytable$20180215 Blob Storage .csv mytable${ run time "%Y%m%d" } mytable$20180215 This use case transfers today's data into a table partitioned on today's date.
- When you use runtime parameters in a transfer, you can do the following: Specify how you want to partition the destination table Retrieve files that match a particular date Available runtime parameters When you set up the Cloud Storage, Blob Storage, or Amazon S3 transfer, you can specify how you want to partition the destination table by using runtime parameters.

