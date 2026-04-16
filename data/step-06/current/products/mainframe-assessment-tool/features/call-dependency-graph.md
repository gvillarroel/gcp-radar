---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:06:50.499Z"
product_name: "Mainframe Assessment Tool"
product_slug: "mainframe-assessment-tool"
feature_name: "Call dependency graph"
feature_slug: "call-dependency-graph"
latest_feature_date: "2024-07-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/mcp-server"
keywords:
  - "call"
  - "dependency"
  - "graph"
  - "extends"
  - "include"
  - "dependencies"
  - "between"
  - "jobs"
---

# Call dependency graph

Product: Mainframe Assessment Tool
Coverage: MEDIUM

## Step 02 Summary

Extends the call dependency graph to include dependencies between jobs, programs, and procedures.

## Extended Definition

Extends the call dependency graph to include dependencies between jobs, programs, and procedures.

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
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For scheduler configuration assets, such as BMC Control-M, Mainframe Assessment Tool provides AI-generated insights that help you visualize the scheduler workflow, including a listing of scheduled jobs, timelines for daily, weekly, or monthly schedules, and dependency graphs showing job relationships.
- JCL Job Connections Displays dependencies between JCL jobs based on shared datasets, DB2 tables, and IMS segments.
- Assets graph: displays the dependencies between assets within a migratable unit.
- Call Dependency Displays the call graph of all uploaded entities.

### "Export assessment results \_|\_ Mainframe Assessment Tool \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After importing the nodes, import relationships using a query similar to the following: CALL apoc . load . jsonl ( 'file:///<your-data-file>.jsonl' ) YIELD value WHERE value . type = 'relationship' MATCH ( startNode { id : value . start . id }), ( endNode { id : value . end . id }) CALL apoc . merge . relationship ( startNode , value . label , {}, value . properties , endNode ) YIELD rel RETURN count ( rel ); This query reads relationship objects from the file and creates relationships in the Neo4j database between nodes that were created in the previous step.
- The zip archive includes the graph data.
- For better performance on large datasets, create constraints for all node labels using a query similar to the following: CALL apoc . load . jsonl ( 'file:///<your-data-file>.jsonl' ) YIELD value WHERE value . type = 'node' UNWIND value . labels as label WITH distinct label CALL apoc . cypher . doIt ( "CREATE CONSTRAINT IF NOT EXISTS FOR (n:" + apoc . text . quoteLabel ( label ) + ") REQUIRE n.id IS UNIQUE" , {}) YIELD value RETURN count ( ); This query reads node labels from the file and creates a unique constraint on the id property for each label.
- Import nodes using a Cypher query similar to the following: CALL apoc . load . jsonl ( 'file:///<your-data-file>.jsonl' ) YIELD value WHERE value . type = 'node' CALL apoc . merge . node ( value . labels , { id : value . id }, value . properties , value . properties ) YIELD node RETURN count ( node ); This query reads each line from the file, and if it's a node, it creates a corresponding node in the Neo4j database with its labels and properties, using MERGE to avoid duplicates based on node id .

### Mainframe Assessment Tool MCP server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/mcp-server](https://docs.cloud.google.com/mainframe-assessment-tool/docs/mcp-server)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- User prompt: "List all the JCL jobs related to the DomainName domain under the assessment called AssessmentName ." Scenario: Get asset dependencies from an assessment.
- User prompt: "What are the dependencies of the JCL job JCLJobName in the assessment called AssessmentName ?" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The asset specification includes its ID, name, usage, description, ETL graph, and BMS maps.
- User prompt: "List the 10 most complex COBOL programs in the assessment called AssessmentName ." Scenario: Find and filter assets that belong to a business domain.

