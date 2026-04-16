---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.194Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Studio saved SQL queries"
feature_slug: "spanner-studio-saved-sql-queries"
latest_feature_date: "2025-03-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
  - "https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli"
  - "https://docs.cloud.google.com/spanner/docs/free-trial-quickstart"
keywords:
  - "saving"
  - "saved"
  - "studio"
  - "supports"
  - "queries"
---

# Spanner Studio saved SQL queries

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner Studio now supports saving and managing SQL scripts as part of a preview capability.

## Extended Definition

Spanner Studio now supports saving and managing SQL scripts as part of a preview capability.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- [https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli](https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli)
- [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)

## Supporting Pages

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- The studio wants to index this attribute in order to speed up important queries during gameplay.
- Updating the previous query to use this improved index looks like the following: SELECT PlayerID FROM Player @ { force index = idx attribute } WHERE IndexPartition BETWEEN 1 and 6 AND Attribute = 23 LIMIT 10 Because no beta test was run, the studio didn't realize they were testing by using data with incorrect assumptions.
- In order to speed up queries that filter for the game mode, consider the following index: CREATE INDEX idx score ranking ON Ranking ( GameMode , Score DESC ) If everyone plays the same game mode called 1 , this index creates a hotspot where GameMode=1 .
- Although synthetic load tests are a good way to validate how many queries per second (QPS) your instance can handle, a beta test with real players is necessary to validate your schema and prepare a successful launch.

### Build context sets using Gemini CLI \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli](https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli)
- Source ID: `site-docs-root`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- For more information about the context set file and facets, see Context sets overview Generate value search queries If you want to generate value searches that specify how the system should search for and match specific values within a concept type, then you can use the /generate targeted value searches command.
- Learn how to create or delete a context set in Spanner Studio Learn how to test a context set Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The context set file similar to my-cluster-psc-primary postgres templates 20251104111122.json is saved in the directory where you ran the commands.
- The context set file similar to my-cluster-psc-primary postgres templates 20251104111122.json is saved in the directory where you ran the commands.

### "Create a Spanner free trial instance and sample application \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)
- Source ID: `site-docs-root`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- You can also access and view saved queries on the Spanner Studio page.
- The saved queries showcase different Spanner features and capabilities.
- Note: A Spanner free trial instance supports Standard edition features, and Enterprise edition features, such as KNN vector distance functions , full-text search , and Spanner Graph .

