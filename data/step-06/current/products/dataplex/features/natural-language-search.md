---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:48.456Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Natural language search"
feature_slug: "natural-language-search"
latest_feature_date: "2025-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/search-syntax"
  - "https://docs.cloud.google.com/dataplex/docs/search-assets"
  - "https://docs.cloud.google.com/dataplex/docs/authentication"
  - "https://docs.cloud.google.com/dataplex/docs/data-insights"
keywords:
  - "natural"
  - "language"
  - "search"
  - "dataplex"
  - "universal"
  - "catalog"
  - "supports"
  - "queries"
---

# Natural language search

Product: Dataplex
Coverage: MEDIUM

## Step 02 Summary

Dataplex Universal Catalog supports natural language queries for finding resources without complex search syntax; Dataplex Universal Catalog supports natural language queries for finding resources without complex search syntax.

## Extended Definition

Dataplex Universal Catalog supports natural language queries for finding resources without complex search syntax; Dataplex Universal Catalog supports natural language queries for finding resources without complex search syntax.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/search-syntax](https://docs.cloud.google.com/dataplex/docs/search-syntax)
- [https://docs.cloud.google.com/dataplex/docs/search-assets](https://docs.cloud.google.com/dataplex/docs/search-assets)
- [https://docs.cloud.google.com/dataplex/docs/authentication](https://docs.cloud.google.com/dataplex/docs/authentication)
- [https://docs.cloud.google.com/dataplex/docs/data-insights](https://docs.cloud.google.com/dataplex/docs/data-insights)

## Supporting Pages

### Search syntax for Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/search-syntax](https://docs.cloud.google.com/dataplex/docs/search-syntax)
- Source ID: `site-docs-root`
- Final score: 291
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This document describes the syntax for both Knowledge Catalog (formerly Dataplex Universal Catalog) keyword search as well as natural language AI searches.
- Knowledge Catalog supports the following qualifiers for natural language search: Qualifier Description name:x Matches x as a substring of the resource ID or resource display name. displayname:x Match x as a substring of the resource display name. column:x Matches x as a substring of the column name (or nested column name) in the schema of the resource. description:x Matches x as a token in the resource description. labels:bar Matches BigQuery resources that have a label (with some value) and the label key has bar as a substring. labels=bar Matches BigQuery resources that have a label (with some value) and the label key equals bar as a string. labels.bar:x Matches x as a substring in the value of a label with key bar attached to a BigQuery resource. labels.foo=bar Matches BigQuery resources where the key equals foo and the key value equals bar . type= TYPE Matches resources of a specific entry type or its type alias. projectid:bar Matches resources within Google Cloud projects that match bar as a substring in the ID. parent:x Matches x as a substring of the hierarchical path of a resource. system= SYSTEM Matches resources from a specified system. location= LOCATION Matches resources in a specified location with an exact name.
- Knowledge Catalog offers two search modes: keyword search and natural language search.
- Natural language search leverages AI to understand semantic search queries.

### Search for resources in Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/search-assets](https://docs.cloud.google.com/dataplex/docs/search-assets)
- Source ID: `site-docs-root`
- Final score: 279
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Think of it like a smart library catalog for all your data: you can search for data assets using either keyword search with rich filters or by asking questions in natural language, such as show me tables with revenue data .
- Knowledge Catalog (formerly Dataplex Universal Catalog) provides a powerful search feature that lets you find and manage data assets across your organization through a unified discovery experience.
- Knowledge Catalog uses AI-powered natural language search, allowing you to ask questions in plain language to find the data you need.
- Natural language search leverages AI to support semantic search queries.

### "Authenticate to Dataplex Universal Catalog \_|\_ Knowledge Catalog \_|\_\

- URL: [https://docs.cloud.google.com/dataplex/docs/authentication](https://docs.cloud.google.com/dataplex/docs/authentication)
- Source ID: `site-api-reference`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can access the API in the following ways: Client libraries Google Cloud CLI REST Client libraries The Dataplex Universal Catalog client libraries provide high-level language support for authenticating to Dataplex Universal Catalog programmatically.
- API access Dataplex Universal Catalog supports programmatic access.
- Home Documentation Data analytics Knowledge Catalog Reference Send feedback Authenticate to Dataplex Universal Catalog Stay organized with collections Save and categorize content based on your preferences.
- Google Cloud CLI When you use the gcloud CLI to access Dataplex Universal Catalog, you log in to the gcloud CLI with a user account, which provides the credentials used by the gcloud CLI commands.

### Access data insights in Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/data-insights](https://docs.cloud.google.com/dataplex/docs/data-insights)
- Source ID: `site-docs-root`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Knowledge Catalog (formerly Dataplex Universal Catalog) data insights automatically generates descriptions, relationship graphs, and SQL queries from your table and dataset metadata.
- About data insights Data insights automatically generates natural language queries and their SQL equivalents based on a table's metadata.
- As of April 10, 2026, Dataplex Universal Catalog is now called Knowledge Catalog.
- SELECT Contract , InternetService , Gender , PaymentMethod , COUNT ( DISTINCT CustomerID ) AS total customers , SUM ( CASE WHEN Churn = TRUE THEN 1 ELSE 0 END ) AS churned customers , ( SUM ( CASE WHEN Churn = TRUE THEN 1 ELSE 0 END ) / COUNT ( DISTINCT CustomerID )) 100 AS churn rate FROM agentville datasets . telco churn WHERE MonthlyCharges > 100 GROUP BY Contract , InternetService , Gender , PaymentMethod ; View insights To view insights for a BigQuery table, use Knowledge Catalog Search.

