---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:06:50.458Z"
product_name: "Mainframe Assessment Tool"
product_slug: "mainframe-assessment-tool"
feature_name: "Temporary dataset lineage"
feature_slug: "temporary-dataset-lineage"
latest_feature_date: "2025-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction"
keywords:
  - "temporary"
  - "dataset"
  - "lineage"
  - "includes"
  - "datasets"
  - "table"
---

# Temporary dataset lineage

Product: Mainframe Assessment Tool
Coverage: MEDIUM

## Step 02 Summary

Includes temporary datasets in the Dataset Lineage table.

## Extended Definition

Includes temporary datasets in the Dataset Lineage table.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction](https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction)

## Supporting Pages

### "View and understand assessment results \_|\_ Mainframe Assessment Tool \_\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- Source ID: `site-docs-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- JCL Job Connections Displays dependencies between JCL jobs based on shared datasets, DB2 tables, and IMS segments.
- Dataset Lineage: shows how each dataset is used across different jobs, steps, and programs.
- Datasets Provides a detailed view of all datasets involved in the assessment.
- Details the data lineage, columns, and properties for each segment and table.

### "Export assessment results \_|\_ Mainframe Assessment Tool \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results)
- Source ID: `site-docs-reference`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- For better performance on large datasets, create constraints for all node labels using a query similar to the following: CALL apoc . load . jsonl ( 'file:///<your-data-file>.jsonl' ) YIELD value WHERE value . type = 'node' UNWIND value . labels as label WITH distinct label CALL apoc . cypher . doIt ( "CREATE CONSTRAINT IF NOT EXISTS FOR (n:" + apoc . text . quoteLabel ( label ) + ") REQUIRE n.id IS UNIQUE" , {}) YIELD value RETURN count ( ); This query reads node labels from the file and creates a unique constraint on the id property for each label.
- This file contains nodes and relationships of programs, JCL jobs, datasets, databases, and BMS maps.
- The zip archive includes a JSON file for each program in your assessment, containing all the collected data, including summaries, detailed logic, and code suggestions.
- The zip archive also contains a table of contents file named index.html , which has links to all of the files in the archive.

### "Extract business rules \_|\_ Mainframe Assessment Tool \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction](https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- When you select a primary module, Mainframe Assessment Tool automatically identifies and includes all dependencies, such as copybooks and called programs.
- To review business rules in an extraction job, follow these steps: In the Extraction jobs table, select the job you want to review.
- To select the status of business rules, follow these steps: In the Business rules table, select the rules that you want to update.
- To export business rules, follow these steps: In the Business rules table, select the rules that you want to export.

