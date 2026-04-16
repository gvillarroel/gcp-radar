---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:06:50.483Z"
product_name: "Mainframe Assessment Tool"
product_slug: "mainframe-assessment-tool"
feature_name: "JCL dataset name parsing"
feature_slug: "jcl-dataset-name-parsing"
latest_feature_date: "2025-01-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results"
keywords:
  - "jcl"
  - "dataset"
  - "name"
  - "parsing"
  - "improves"
  - "jobs"
---

# JCL dataset name parsing

Product: Mainframe Assessment Tool
Coverage: MEDIUM

## Step 02 Summary

Improves dataset name parsing from JCL jobs.

## Extended Definition

Improves dataset name parsing from JCL jobs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction](https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results)

## Supporting Pages

### "View and understand assessment results \_|\_ Mainframe Assessment Tool \_\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- Source ID: `site-docs-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- JCL Job Connections Displays dependencies between JCL jobs based on shared datasets, DB2 tables, and IMS segments.
- Data set name: identifies the name of a file, or dataset, as it exists on the mainframe's storage volumes.
- Dataset Lineage: shows how each dataset is used across different jobs, steps, and programs.
- For scheduler configuration assets, such as BMC Control-M, Mainframe Assessment Tool provides AI-generated insights that help you visualize the scheduler workflow, including a listing of scheduled jobs, timelines for daily, weekly, or monthly schedules, and dependency graphs showing job relationships.

### "Extract business rules \_|\_ Mainframe Assessment Tool \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction](https://docs.cloud.google.com/mainframe-assessment-tool/docs/business-rules-extraction)
- Source ID: `site-docs-reference`
- Final score: 49
- Re-rank relevance: N/A

Evidence snippets:
- To configure the details of the extraction job, on the Basic information page, follow these steps: For Name , enter a unique identifier for the job.
- These agents perform the extraction in several steps, such as parsing code, identifying decision logic, and generating natural language output.
- To review business rules in an extraction job, follow these steps: In the Extraction jobs table, select the job you want to review.
- You can run multiple extraction jobs within a single assessment to analyze large applications incrementally.

### "Export assessment results \_|\_ Mainframe Assessment Tool \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results)
- Source ID: `site-docs-reference`
- Final score: 41
- Re-rank relevance: N/A

Evidence snippets:
- This file contains nodes and relationships of programs, JCL jobs, datasets, databases, and BMS maps.
- For better performance on large datasets, create constraints for all node labels using a query similar to the following: CALL apoc . load . jsonl ( 'file:///<your-data-file>.jsonl' ) YIELD value WHERE value . type = 'node' UNWIND value . labels as label WITH distinct label CALL apoc . cypher . doIt ( "CREATE CONSTRAINT IF NOT EXISTS FOR (n:" + apoc . text . quoteLabel ( label ) + ") REQUIRE n.id IS UNIQUE" , {}) YIELD value RETURN count ( ); This query reads node labels from the file and creates a unique constraint on the id property for each label.
- The zip archive also contains a table of contents file named index.html , which has links to all of the files in the archive.

