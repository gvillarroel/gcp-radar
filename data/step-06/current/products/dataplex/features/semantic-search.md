---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:42.598Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Semantic search"
feature_slug: "semantic-search"
latest_feature_date: "2024-11-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/release-notes"
  - "https://docs.cloud.google.com/dataplex/docs/search-assets"
  - "https://docs.cloud.google.com/dataplex/docs/search-syntax"
keywords:
  - "semantic"
  - "search"
  - "dataplex"
  - "supports"
  - "gemini"
  - "powered"
  - "natural"
  - "language"
---

# Semantic search

Product: Dataplex
Coverage: LOW

## Step 02 Summary

Dataplex Search supports Gemini-powered natural language semantic search within a project.

## Extended Definition

Dataplex Search supports Gemini-powered natural language semantic search within a project.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/release-notes](https://docs.cloud.google.com/dataplex/docs/release-notes)
- [https://docs.cloud.google.com/dataplex/docs/search-assets](https://docs.cloud.google.com/dataplex/docs/search-assets)
- [https://docs.cloud.google.com/dataplex/docs/search-syntax](https://docs.cloud.google.com/dataplex/docs/search-syntax)

## Supporting Pages

### Knowledge Catalog release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/release-notes](https://docs.cloud.google.com/dataplex/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- December 08, 2025 Feature Natural language search in Dataplex Universal Catalog is generally available ( GA ).
- Semantic search, powered by Gemini, simplifies the search process without the need for complex search syntax.
- September 03, 2025 Feature Natural language search in Dataplex Universal Catalog is available in preview .
- November 04, 2024 Feature Project-based semantic search offered by Dataplex Search is available in Preview .

### Search for resources in Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/search-assets](https://docs.cloud.google.com/dataplex/docs/search-assets)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Knowledge Catalog uses AI-powered natural language search, allowing you to ask questions in plain language to find the data you need.
- Natural language search leverages AI to support semantic search queries.
- Think of it like a smart library catalog for all your data: you can search for data assets using either keyword search with rich filters or by asking questions in natural language, such as show me tables with revenue data .
- Natural language search filters For natural language search, the following filters are available: Scope : search across the organization (default), the current project, or only for starred resources.

### Search syntax for Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/search-syntax](https://docs.cloud.google.com/dataplex/docs/search-syntax)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Knowledge Catalog supports the following qualifiers for natural language search: Qualifier Description name:x Matches x as a substring of the resource ID or resource display name. displayname:x Match x as a substring of the resource display name. column:x Matches x as a substring of the column name (or nested column name) in the schema of the resource. description:x Matches x as a token in the resource description. labels:bar Matches BigQuery resources that have a label (with some value) and the label key has bar as a substring. labels=bar Matches BigQuery resources that have a label (with some value) and the label key equals bar as a string. labels.bar:x Matches x as a substring in the value of a label with key bar attached to a BigQuery resource. labels.foo=bar Matches BigQuery resources where the key equals foo and the key value equals bar . type= TYPE Matches resources of a specific entry type or its type alias. projectid:bar Matches resources within Google Cloud projects that match bar as a substring in the ID. parent:x Matches x as a substring of the hierarchical path of a resource. system= SYSTEM Matches resources from a specified system. location= LOCATION Matches resources in a specified location with an exact name.
- This document describes the syntax for both Knowledge Catalog (formerly Dataplex Universal Catalog) keyword search as well as natural language AI searches.
- Natural language search leverages AI to understand semantic search queries.
- Other entries that match on the substring are also returned. aspect:example-project.us-central1.employee-info.is-enrolled=true aspect:example-project.us-central1.employee=true aspect:employee=true Natural language search Qualifier Description has:x Matches x as a substring of the full path to the aspect type of an aspect that is attached to the entry, in the format projectid.location.

