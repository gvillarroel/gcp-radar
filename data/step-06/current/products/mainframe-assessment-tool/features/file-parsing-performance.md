---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:06:50.495Z"
product_name: "Mainframe Assessment Tool"
product_slug: "mainframe-assessment-tool"
feature_name: "File parsing performance"
feature_slug: "file-parsing-performance"
latest_feature_date: "2024-09-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/open-source-disclosure"
keywords:
  - "file"
  - "parsing"
  - "performance"
  - "improves"
---

# File parsing performance

Product: Mainframe Assessment Tool
Coverage: MEDIUM

## Step 02 Summary

Improves file parsing performance.

## Extended Definition

Improves file parsing performance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/open-source-disclosure](https://docs.cloud.google.com/mainframe-assessment-tool/docs/open-source-disclosure)

## Supporting Pages

### "View and understand assessment results \_|\_ Mainframe Assessment Tool \_\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- The following table lists different report types and their description: Report type Description Details Inventory Provides details about the number of files, code lines, and program types, including scheduler configuration files (BMC Control-M).
- Missing from file: the specific source file that contains a reference to a module or component that couldn't be found within the uploaded assessment files.
- This page describes how to review the assessment of the discovered assets, and analyze the application source files using generative AI.
- Original source file: the name of the file that contains the source code for the corresponding program name.

### "Export assessment results \_|\_ Mainframe Assessment Tool \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- For better performance on large datasets, create constraints for all node labels using a query similar to the following: CALL apoc . load . jsonl ( 'file:///<your-data-file>.jsonl' ) YIELD value WHERE value . type = 'node' UNWIND value . labels as label WITH distinct label CALL apoc . cypher . doIt ( "CREATE CONSTRAINT IF NOT EXISTS FOR (n:" + apoc . text . quoteLabel ( label ) + ") REQUIRE n.id IS UNIQUE" , {}) YIELD value RETURN count ( ); This query reads node labels from the file and creates a unique constraint on the id property for each label.
- After importing the nodes, import relationships using a query similar to the following: CALL apoc . load . jsonl ( 'file:///<your-data-file>.jsonl' ) YIELD value WHERE value . type = 'relationship' MATCH ( startNode { id : value . start . id }), ( endNode { id : value . end . id }) CALL apoc . merge . relationship ( startNode , value . label , {}, value . properties , endNode ) YIELD rel RETURN count ( rel ); This query reads relationship objects from the file and creates relationships in the Neo4j database between nodes that were created in the previous step.
- Import nodes using a Cypher query similar to the following: CALL apoc . load . jsonl ( 'file:///<your-data-file>.jsonl' ) YIELD value WHERE value . type = 'node' CALL apoc . merge . node ( value . labels , { id : value . id }, value . properties , value . properties ) YIELD node RETURN count ( node ); This query reads each line from the file, and if it's a node, it creates a corresponding node in the Neo4j database with its labels and properties, using MERGE to avoid duplicates based on node id .
- You can export results in the following ways: Export HTML report Export JSON report Export assessment data to your Neo4j database Export HTML report Download your assessment report as a zip file in HTML format to view the report offline or share it with others.

### "Open source disclosure \_|\_ Mainframe Assessment Tool \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/open-source-disclosure](https://docs.cloud.google.com/mainframe-assessment-tool/docs/open-source-disclosure)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To download this file, run the following command: gcloud gcloud storage cp "gs://mainframe-ai-release/mat/v2/licenses.zip" FILE NAME curl curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -L https://storage.googleapis.com/mainframe-ai-release/mat/v2/licenses.zip -o FILE NAME Replace FILE NAME with your chosen filename.
- The license information is available in a single zip file.

