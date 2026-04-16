---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.303Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Granular instance sizing"
feature_slug: "granular-instance-sizing"
latest_feature_date: "2022-05-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.CreateDatabaseMetadata"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/details"
keywords:
  - "granular"
  - "sizing"
  - "production"
  - "allowing"
  - "instances"
  - "instance"
  - "supports"
---

# Granular instance sizing

Product: Spanner
Coverage: LOW

## Step 02 Summary

Spanner supports granular instance sizing by allowing production instances to be created with fewer than 1,000 processing units.

## Extended Definition

Spanner supports granular instance sizing by allowing production instances to be created with fewer than 1,000 processing units.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.CreateDatabaseMetadata](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.CreateDatabaseMetadata)
- [https://docs.cloud.google.com/spanner/docs/change-streams/details](https://docs.cloud.google.com/spanner/docs/change-streams/details)

## Supporting Pages

### "Class CreateDatabaseMetadata (3.63.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.CreateDatabaseMetadata](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.CreateDatabaseMetadata)
- Source ID: `site-python-reference`
- Final score: 30
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

### "Change stream partitions, records, and queries \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/details](https://docs.cloud.google.com/spanner/docs/change-streams/details)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- With the scalability of Spanner, it means that data doesn't need to be sharded into separate database instances when more performance or storage is needed; instead, you can add more nodes.
- Size the database to testing and production needs During development, a single-node Spanner instance is likely sufficient for most activities, including functional testing.
- This setup requires that transactions span multiple database instances, leading to complex, error-prone application-side logic.
- Before you put live traffic in a production environment, see the section about sizing considerations for production .

