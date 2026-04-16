---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:06:50.483Z"
product_name: "Mainframe Assessment Tool"
product_slug: "mainframe-assessment-tool"
feature_name: "JCL job dependency graph"
feature_slug: "jcl-job-dependency-graph"
latest_feature_date: "2025-01-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview"
keywords:
  - "jcl"
  - "job"
  - "dependency"
  - "graph"
  - "adds"
  - "view"
  - "describes"
  - "read"
---

# JCL job dependency graph

Product: Mainframe Assessment Tool
Coverage: MEDIUM

## Step 02 Summary

Adds a graph view that describes read and write dependencies for JCL jobs.

## Extended Definition

Adds a graph view that describes read and write dependencies for JCL jobs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview](https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview)

## Supporting Pages

### "View and understand assessment results \_|\_ Mainframe Assessment Tool \_\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- For scheduler configuration assets, such as BMC Control-M, Mainframe Assessment Tool provides AI-generated insights that help you visualize the scheduler workflow, including a listing of scheduled jobs, timelines for daily, weekly, or monthly schedules, and dependency graphs showing job relationships.
- This page describes how to review the assessment of the discovered assets, and analyze the application source files using generative AI.
- Migratable units graph: shows how migration units depend on each other in a dependency diagram (DAG).
- Call Dependency Displays the call graph of all uploaded entities.

### "Export assessment results \_|\_ Mainframe Assessment Tool \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- This page describes how to export assessment results for offline viewing, for analysis in other tools, or for graph analysis in Neo4j databases.
- After importing the nodes, import relationships using a query similar to the following: CALL apoc . load . jsonl ( 'file:///<your-data-file>.jsonl' ) YIELD value WHERE value . type = 'relationship' MATCH ( startNode { id : value . start . id }), ( endNode { id : value . end . id }) CALL apoc . merge . relationship ( startNode , value . label , {}, value . properties , endNode ) YIELD rel RETURN count ( rel ); This query reads relationship objects from the file and creates relationships in the Neo4j database between nodes that were created in the previous step.
- For better performance on large datasets, create constraints for all node labels using a query similar to the following: CALL apoc . load . jsonl ( 'file:///<your-data-file>.jsonl' ) YIELD value WHERE value . type = 'node' UNWIND value . labels as label WITH distinct label CALL apoc . cypher . doIt ( "CREATE CONSTRAINT IF NOT EXISTS FOR (n:" + apoc . text . quoteLabel ( label ) + ") REQUIRE n.id IS UNIQUE" , {}) YIELD value RETURN count ( ); This query reads node labels from the file and creates a unique constraint on the id property for each label.
- Import nodes using a Cypher query similar to the following: CALL apoc . load . jsonl ( 'file:///<your-data-file>.jsonl' ) YIELD value WHERE value . type = 'node' CALL apoc . merge . node ( value . labels , { id : value . id }, value . properties , value . properties ) YIELD node RETURN count ( node ); This query reads each line from the file, and if it's a node, it creates a corresponding node in the Neo4j database with its labels and properties, using MERGE to avoid duplicates based on node id .

### Mainframe Assessment Tool overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview](https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- Languages Mainframe Assessment Tool supports the analysis of the following languages: COBOL programs and copybooks JCL jobs, procedures, includes, and card data HLASM programs PL/I programs ( Preview ) RPG/RPGLE programs and include files Easytrieve programs Natural for z/OS ( Preview ) Fortran ( Preview ) Database schemas Mainframe Assessment Tool supports the following database schemas: DB2: through Embedded SQL IMS DB: through EXEC DLI and CBLTDLI calls Transaction monitors Mainframe Assessment Tool supports the following transaction monitors: CICS: through EXEC CICS statements IMS DC: through CBLTDLI calls Scheduler configurations Mainframe Assessment Tool supports the following scheduler configurations: BMC Control-M Mainframe migration journey The following diagram illustrates the overall migration journey of mainframe applications: The migration journey has the following phases: Discover and assess your existing codebase: Mainframe Assessment Tool helps you perform an assessment of the mainframe application footprint, technology stack, and dependencies.
- Mainframe Assessment Tool helps you discover and assess your existing codebase and plan your migration, you can then modernize your code for migration by using Mainframe Code Rewrite ( Preview ), a Visual Studio Code extension that uses generative AI to help you rewrite applications in Java, C#, and Python.
- Code modernization with Mainframe Code Rewrite ( Preview ) After you complete your assessment by using Mainframe Assessment Tool, you can start modernizing your code with Mainframe Code Rewrite , using generative AI and Gemini models.
- Home Documentation Migration Mainframe Assessment Tool Guides Send feedback Mainframe Assessment Tool overview Stay organized with collections Save and categorize content based on your preferences.

