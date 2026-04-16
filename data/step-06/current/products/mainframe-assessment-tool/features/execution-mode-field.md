---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:06:50.448Z"
product_name: "Mainframe Assessment Tool"
product_slug: "mainframe-assessment-tool"
feature_name: "Execution mode field"
feature_slug: "execution-mode-field"
latest_feature_date: "2026-01-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/mcp-server"
keywords:
  - "execution"
  - "mode"
  - "field"
  - "adds"
  - "assets"
  - "list"
  - "show"
  - "whether"
---

# Execution mode field

Product: Mainframe Assessment Tool
Coverage: MEDIUM

## Step 02 Summary

Adds an Execution mode field to the Assets list to show whether an asset is batch or online.

## Extended Definition

Adds an Execution mode field to the Assets list to show whether an asset is batch or online.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction](https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/mcp-server](https://docs.cloud.google.com/mainframe-assessment-tool/docs/mcp-server)

## Supporting Pages

### "View and understand assessment results \_|\_ Mainframe Assessment Tool \_\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- Source ID: `site-docs-reference`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For scheduler configuration assets, such as BMC Control-M, Mainframe Assessment Tool provides AI-generated insights that help you visualize the scheduler workflow, including a listing of scheduled jobs, timelines for daily, weekly, or monthly schedules, and dependency graphs showing job relationships.
- Assets list: lists assets in the migratable unit with columns for migratable unit name, asset name, asset type, and the lines of code (source lines).
- Dataset Fields: lists all fields within each dataset, along with their data types, start positions, sizes, key indicators, and other properties.
- You can also see the assets graph and the list of assets and asset types associated with a migratable unit.

### "Extract business rules \_|\_ Mainframe Assessment Tool \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction](https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction)
- Source ID: `site-docs-reference`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The job overview displays the configuration details, such as the description, the focus prompt, and the list of assets included in the analysis.
- Assets: lists the source code assets associated with the business rule that let you trace the rule back to the mainframe code.
- Before you begin Before you begin, make sure that you have completed the following tasks: Create an assessment: make sure that you have an existing assessment with uploaded mainframe assets such as programs and copybooks.
- This page is intended for mainframe developers, enterprise architects, and business analysts who want to understand and modernize legacy mainframe applications by extracting business rules from source code.

### Mainframe Assessment Tool MCP server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/mcp-server](https://docs.cloud.google.com/mainframe-assessment-tool/docs/mcp-server)
- Source ID: `site-docs-reference`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- User prompt: "List the 10 most complex COBOL programs in the assessment called AssessmentName ." Scenario: Find and filter assets that belong to a business domain.
- FetchAssetsCyclomaticComplexity Fetches the cyclomatic complexity scores for a list of assets for a given Mainframe Assessment Tool assessment ID.
- ListAssets Lists the assets for a given Mainframe Assessment Tool assessment ID.
- AssetIds string[] Yes List of Mainframe Assessment Tool assets IDs.

