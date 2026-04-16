---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:06:50.453Z"
product_name: "Mainframe Assessment Tool"
product_slug: "mainframe-assessment-tool"
feature_name: "PL/I DB2 interaction analysis"
feature_slug: "pl-i-db2-interaction-analysis"
latest_feature_date: "2025-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results"
keywords:
  - "pl"
  - "db2"
  - "interaction"
  - "analysis"
  - "detects"
  - "interactions"
  - "including"
  - "create"
---

# PL/I DB2 interaction analysis

Product: Mainframe Assessment Tool
Coverage: MEDIUM

## Step 02 Summary

Detects PL/I interactions with DB2, including create, read, update, and delete operations.

## Extended Definition

Detects PL/I interactions with DB2, including create, read, update, and delete operations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment](https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results)

## Supporting Pages

### "View and understand assessment results \_|\_ Mainframe Assessment Tool \_\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- The Summary page appears; this page provides an AI-generated summary of the asset, along with the business case, and the user interaction analysis.
- For scheduler configuration assets, such as BMC Control-M, Mainframe Assessment Tool provides AI-generated insights that help you visualize the scheduler workflow, including a listing of scheduled jobs, timelines for daily, weekly, or monthly schedules, and dependency graphs showing job relationships.
- The following table lists different report types and their description: Report type Description Details Inventory Provides details about the number of files, code lines, and program types, including scheduler configuration files (BMC Control-M).
- Before you begin Create an assessment Review application assessment results To open an assessment to review results, follow these steps: Open the Mainframe Assessment Tool in a web browser.

### "Create and update assessments \_|\_ Mainframe Assessment Tool \_|\_ Google\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment](https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment)
- Source ID: `site-docs-reference`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin To prepare for your assessment, make sure that you have completed the following prerequisites: Configure your Google Cloud project for Mainframe Assessment Tool Set up and access Mainframe Assessment Tool Upload your mainframe application files to Mainframe Assessment Tool To upload the application files to Mainframe Assessment Tool, follow these steps: Create a zip file containing all the applications that you want to migrate.
- Home Documentation Migration Mainframe Assessment Tool Guides Send feedback Create and update assessments Stay organized with collections Save and categorize content based on your preferences.
- Update assessment details and settings After you create an assessment, you can update its name and description, and modify AI-generated insights settings.
- Add files to an existing assessment After you create an assessment, you can add additional zip files to it.

### "Export assessment results \_|\_ Mainframe Assessment Tool \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results)
- Source ID: `site-docs-reference`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- After importing the nodes, import relationships using a query similar to the following: CALL apoc . load . jsonl ( 'file:///<your-data-file>.jsonl' ) YIELD value WHERE value . type = 'relationship' MATCH ( startNode { id : value . start . id }), ( endNode { id : value . end . id }) CALL apoc . merge . relationship ( startNode , value . label , {}, value . properties , endNode ) YIELD rel RETURN count ( rel ); This query reads relationship objects from the file and creates relationships in the Neo4j database between nodes that were created in the previous step.
- For better performance on large datasets, create constraints for all node labels using a query similar to the following: CALL apoc . load . jsonl ( 'file:///<your-data-file>.jsonl' ) YIELD value WHERE value . type = 'node' UNWIND value . labels as label WITH distinct label CALL apoc . cypher . doIt ( "CREATE CONSTRAINT IF NOT EXISTS FOR (n:" + apoc . text . quoteLabel ( label ) + ") REQUIRE n.id IS UNIQUE" , {}) YIELD value RETURN count ( ); This query reads node labels from the file and creates a unique constraint on the id property for each label.
- Import nodes using a Cypher query similar to the following: CALL apoc . load . jsonl ( 'file:///<your-data-file>.jsonl' ) YIELD value WHERE value . type = 'node' CALL apoc . merge . node ( value . labels , { id : value . id }, value . properties , value . properties ) YIELD node RETURN count ( node ); This query reads each line from the file, and if it's a node, it creates a corresponding node in the Neo4j database with its labels and properties, using MERGE to avoid duplicates based on node id .
- The zip archive includes a JSON file for each program in your assessment, containing all the collected data, including summaries, detailed logic, and code suggestions.

