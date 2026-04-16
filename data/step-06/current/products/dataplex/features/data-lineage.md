---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:48.471Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Data lineage"
feature_slug: "data-lineage"
latest_feature_date: "2023-03-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/use-lineage"
  - "https://docs.cloud.google.com/dataplex/docs/about-data-lineage"
  - "https://docs.cloud.google.com/dataplex/docs/track-lineage-quickstart"
  - "https://docs.cloud.google.com/dataplex/docs/lineage-custom-constraints"
keywords:
  - "lineage"
  - "tracks"
  - "how"
  - "moves"
  - "through"
  - "systems"
  - "including"
  - "its"
---

# Data lineage

Product: Dataplex
Coverage: MEDIUM

## Step 02 Summary

Data lineage tracks how data moves through systems, including its sources, destinations, and transformations; Data lineage tracks how data moves through systems, including its sources, destinations, and transformations.

## Extended Definition

Data lineage tracks how data moves through systems, including its sources, destinations, and transformations; Data lineage tracks how data moves through systems, including its sources, destinations, and transformations.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/use-lineage](https://docs.cloud.google.com/dataplex/docs/use-lineage)
- [https://docs.cloud.google.com/dataplex/docs/about-data-lineage](https://docs.cloud.google.com/dataplex/docs/about-data-lineage)
- [https://docs.cloud.google.com/dataplex/docs/track-lineage-quickstart](https://docs.cloud.google.com/dataplex/docs/track-lineage-quickstart)
- [https://docs.cloud.google.com/dataplex/docs/lineage-custom-constraints](https://docs.cloud.google.com/dataplex/docs/lineage-custom-constraints)

## Supporting Pages

### "Use data lineage with Google Cloud systems \_|\_ Knowledge Catalog \_|\_\

- URL: [https://docs.cloud.google.com/dataplex/docs/use-lineage](https://docs.cloud.google.com/dataplex/docs/use-lineage)
- Source ID: `site-docs-root`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about controlling lineage ingestion including how the configuration is applied hierarchically, see Control lineage ingestion .
- The default Graph view opens, showing table-level lineage across systems and regions.
- The default Graph view opens, showing table-level lineage across systems and regions.
- The default Graph view opens, showing table-level lineage across systems and regions.

### About data lineage \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/about-data-lineage](https://docs.cloud.google.com/dataplex/docs/about-data-lineage)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if you delete a BigQuery table, you can still view its lineage through the API and the console for up to 30 days.
- Learn how to use data lineage with Google Cloud systems .
- Other services Data lineage supports integration with the following Google Cloud services: Cloud Composer Cloud Data Fusion Dataflow Managed Service for Apache Spark for Apache Spark Managed Service for Apache Spark for Apache Hive Managed Service for Apache Spark Managed Service for Apache Spark Looker (Google Cloud core) ( Preview ) Vertex AI Vertex AI Feature Store Data lineage for custom data sources You can use the Data Lineage API to manually record lineage information for any data source that integrated systems don't support.
- Troubleshooting: When an error appears in a final report, data teams might find it difficult and time-consuming to trace the issue back through every step to its root cause.

### "Track data lineage for a BigQuery table \_|\_ Knowledge Catalog \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataplex/docs/track-lineage-quickstart](https://docs.cloud.google.com/dataplex/docs/track-lineage-quickstart)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data lineage is the process of tracking where data comes from, how it's transformed, and where it moves over time.
- This quickstart shows you how to get started with data lineage for BigQuery tables: Copy two tables from a publicly available new york taxi trips dataset.
- The details pane shows Dataset info , including information such as Dataset ID , Data location , and Last modified date.
- Track data lineage for a BigQuery table This document describes how to track the lineage of data in BigQuery tables.

### "Manage data lineage resources using custom constraints \_|\_ Knowledge Catalog\

- URL: [https://docs.cloud.google.com/dataplex/docs/lineage-custom-constraints](https://docs.cloud.google.com/dataplex/docs/lineage-custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Test the custom organization policy This section describes how to test an organization policy constraint that restricts users from creating a data lineage process with a name that contains the text invalid name .
- A custom constraint can only contain letters (including upper and lowercase) or numbers, for example, custom.denyLineageProcess .
- A custom constraint can only contain letters (including upper and lowercase) or numbers, for example custom.denyLineageProcess .
- The output is the following: Operation denied by org policy on resource 'projects/ PROJECT ID /locations/ LOCATION ': ["customConstraints/custom.denyLineageProcess"] Data lineage supported resources and operations The following custom constraint fields are available to use when you create or update a data lineage process: resource.name resource.displayName resource.origin.name resource.origin.sourceType Custom constraints are checked for the following methods: CreateProcess UpdateProcess ProcessopenLineageRunEvent Example custom organization policies for common use cases The following table provides the syntax of some custom constraints for common use cases: For more information about CEL macros available for use in custom constraint conditions, see Common Expression Language .

