---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:01.011Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "DISABLE_INLINE hint"
feature_slug: "disable-inline-hint"
latest_feature_date: "2022-08-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/graph/overview"
  - "https://docs.cloud.google.com/spanner/docs/instances"
  - "https://googleapis.dev/python/spanner/latest/index.html"
keywords:
  - "disable"
  - "inline"
  - "hint"
  - "added"
  - "for"
  - "the"
  - "in"
  - "standard"
---

# DISABLE_INLINE hint

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Added support for the DISABLE_INLINE hint in Google Standard SQL function calls so a function can be computed once and reused across multiple references in a query.

## Extended Definition

Added support for the DISABLE_INLINE hint in Google Standard SQL function calls so a function can be computed once and reused across multiple references in a query.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/graph/overview](https://docs.cloud.google.com/spanner/docs/graph/overview)
- [https://docs.cloud.google.com/spanner/docs/instances](https://docs.cloud.google.com/spanner/docs/instances)
- [https://googleapis.dev/python/spanner/latest/index.html](https://googleapis.dev/python/spanner/latest/index.html)

## Supporting Pages

### Spanner Graph overview | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/graph/overview](https://docs.cloud.google.com/spanner/docs/graph/overview)
- Source ID: `site-docs-root`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- Spanner Graph overview Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/graph/overview Documentation · Databases · Spanner · Guides · Send feedback · PostgreSQL interface note: The examples in topics for Spanner Graph are intended for GoogleSQL-dialect databases.
- For more information, see the Spanner editions overview.
- Spanner Graph doesn&#x27;t support the PostgreSQL interface.
- Note: This feature is available with the Spanner Enterprise edition and Enterprise Plus edition.

### Instances overview | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/instances](https://docs.cloud.google.com/spanner/docs/instances)
- Source ID: `site-docs-root`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Instances overview Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/instances Once an instance is created, you can list, edit, or delete it.
- Spanner is a fully managed database service which oversees its own underlying tasks and resources, including monitoring and restarting processes when necessary with zero downtime.

### Python Client for Cloud Spanner

- URL: [https://googleapis.dev/python/spanner/latest/index.html](https://googleapis.dev/python/spanner/latest/index.html)
- Source ID: `site-python-reference`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Python Client for Cloud Spanner Source URL: https://googleapis.dev/python/spanner/latest/index.html Cloud Spanner is the world’s first fully managed relational database service to offer both strong consistency and horizontal scalability for mission-critical online transaction processing (OLTP) applications.

