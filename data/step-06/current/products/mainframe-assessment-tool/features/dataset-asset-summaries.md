---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:06:50.452Z"
product_name: "Mainframe Assessment Tool"
product_slug: "mainframe-assessment-tool"
feature_name: "Dataset asset summaries"
feature_slug: "dataset-asset-summaries"
latest_feature_date: "2025-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/mcp-server"
keywords:
  - "dataset"
  - "asset"
  - "summaries"
  - "adds"
  - "datasets"
  - "assets"
  - "list"
  - "ai"
---

# Dataset asset summaries

Product: Mainframe Assessment Tool
Coverage: MEDIUM

## Step 02 Summary

Adds datasets to the Assets list with AI-generated descriptions of their business purpose.

## Extended Definition

Adds datasets to the Assets list with AI-generated descriptions of their business purpose.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/mcp-server](https://docs.cloud.google.com/mainframe-assessment-tool/docs/mcp-server)

## Supporting Pages

### "View and understand assessment results \_|\_ Mainframe Assessment Tool \_\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- For scheduler configuration assets, such as BMC Control-M, Mainframe Assessment Tool provides AI-generated insights that help you visualize the scheduler workflow, including a listing of scheduled jobs, timelines for daily, weekly, or monthly schedules, and dependency graphs showing job relationships.
- Assets list: lists assets in the migratable unit with columns for migratable unit name, asset name, asset type, and the lines of code (source lines).
- You can also see the assets graph and the list of assets and asset types associated with a migratable unit.
- Optional: To view the list of assets associated with this domain, click View assets .

### "Export assessment results \_|\_ Mainframe Assessment Tool \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For better performance on large datasets, create constraints for all node labels using a query similar to the following: CALL apoc . load . jsonl ( 'file:///<your-data-file>.jsonl' ) YIELD value WHERE value . type = 'node' UNWIND value . labels as label WITH distinct label CALL apoc . cypher . doIt ( "CREATE CONSTRAINT IF NOT EXISTS FOR (n:" + apoc . text . quoteLabel ( label ) + ") REQUIRE n.id IS UNIQUE" , {}) YIELD value RETURN count ( ); This query reads node labels from the file and creates a unique constraint on the id property for each label.
- Optional: To download a report with only selected assets, filter the assets, and then click file download Download report .
- Optional: To download a report with only selected assets, filter the assets, and then click file download Download report .
- This file contains nodes and relationships of programs, JCL jobs, datasets, databases, and BMS maps.

### Mainframe Assessment Tool MCP server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/mcp-server](https://docs.cloud.google.com/mainframe-assessment-tool/docs/mcp-server)
- Source ID: `site-docs-reference`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- User prompt: "List the 10 most complex COBOL programs in the assessment called AssessmentName ." Scenario: Find and filter assets that belong to a business domain.
- FetchAssetsCyclomaticComplexity Fetches the cyclomatic complexity scores for a list of assets for a given Mainframe Assessment Tool assessment ID.
- ListAssets Lists the assets for a given Mainframe Assessment Tool assessment ID.
- AssetIds string[] Yes List of Mainframe Assessment Tool assets IDs.

