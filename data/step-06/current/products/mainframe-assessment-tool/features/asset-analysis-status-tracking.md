---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:06:50.457Z"
product_name: "Mainframe Assessment Tool"
product_slug: "mainframe-assessment-tool"
feature_name: "Asset analysis status tracking"
feature_slug: "asset-analysis-status-tracking"
latest_feature_date: "2025-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment"
keywords:
  - "asset"
  - "analysis"
  - "status"
  - "tracking"
  - "shows"
  - "granular"
  - "error"
  - "counts"
---

# Asset analysis status tracking

Product: Mainframe Assessment Tool
Coverage: MEDIUM

## Step 02 Summary

Shows granular analysis status and error counts for each asset.

## Extended Definition

Shows granular analysis status and error counts for each asset.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction](https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment](https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment)

## Supporting Pages

### "View and understand assessment results \_|\_ Mainframe Assessment Tool \_\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- Source ID: `site-docs-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- For COBOL programs and JCL jobs, the Detailed logic page provides granular, paragraph-level, and method-level details about the asset along with test cases.
- For example, to filter for all assets by their assessment status, set the property name to Status , and select a value such as Warning or Completed .
- The Summary page appears; this page provides an AI-generated summary of the asset, along with the business case, and the user interaction analysis.
- The Assets page displays a new entry in the table for each discovered asset, showing its assessment status.

### "Extract business rules \_|\_ Mainframe Assessment Tool \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction](https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This status indicates the number of internal planning steps that the agent has successfully completed out of the total required for that specific analysis.
- The job overview displays the configuration details, such as the description, the focus prompt, and the list of assets included in the analysis.
- Pending validation : select this status if you need to do further analysis or need inputs to validate the rule.
- Each time you start a new extraction, you can select a different set of assets for analysis.

### "Create and update assessments \_|\_ Mainframe Assessment Tool \_|\_ Google\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment](https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- The Assessments page displays a new entry in the table for each discovered asset, showing its assessment status.
- This opens a page that shows all the steps together with the status.
- This page describes how to upload your applications to Mainframe Assessment Tool and perform an assessment of the assets that Mainframe Assessment Tool discovers in the uploaded codebase.
- If you see errors after importing your file, you can review the error message directly in Mainframe Assessment Tool.

