---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:06:50.497Z"
product_name: "Mainframe Assessment Tool"
product_slug: "mainframe-assessment-tool"
feature_name: "Program type icons in AI tab"
feature_slug: "program-type-icons-in-ai-tab"
latest_feature_date: "2024-09-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment"
keywords:
  - "program"
  - "type"
  - "icons"
  - "ai"
  - "tab"
  - "adds"
  - "indicate"
---

# Program type icons in AI tab

Product: Mainframe Assessment Tool
Coverage: MEDIUM

## Step 02 Summary

Adds icons in the AI tab to indicate the program type.

## Extended Definition

Adds icons in the AI tab to indicate the program type.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment](https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment)

## Supporting Pages

### "View and understand assessment results \_|\_ Mainframe Assessment Tool \_\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- The following table lists different report types and their description: Report type Description Details Inventory Provides details about the number of files, code lines, and program types, including scheduler configuration files (BMC Control-M).
- Type: the type of the program; for example, COBOL or JCL .
- Program name: identifies the program module that has been found within the uploaded source code but does not appear to be called or executed by any other part of the application.
- For COBOL programs, the Code suggestions page provides an AI-generated code suggestion in the programming languages that you selected when you created the assessment.

### "Create and update assessments \_|\_ Mainframe Assessment Tool \_|\_ Google\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment](https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment)
- Source ID: `site-docs-reference`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- If available, provide the source code of the following types: COBOL programs ( cob and cbl ) COBOL copybooks ( inc and cpy ) Easytrieve programs ( ezt ) HLASM programs ( asm ) JCL jobs ( jcl ) JCL procedures ( proc ) JCL includes JCL card data ( ctl ) PL/I programs ( pli and pl1 ) RPG/RPGLE programs ( rpg and rpgle ) RPG/RPGLE include files ( rpginc and rpgleinc ) Scheduler configurations for BMC Control-M Don't include binaries and other non-source files in the zip file.
- If the applications contain references to external artifacts such as programs or tables, we recommend that you include these dependencies as well.

### "Export assessment results \_|\_ Mainframe Assessment Tool \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results)
- Source ID: `site-docs-reference`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- After importing the nodes, import relationships using a query similar to the following: CALL apoc . load . jsonl ( 'file:///<your-data-file>.jsonl' ) YIELD value WHERE value . type = 'relationship' MATCH ( startNode { id : value . start . id }), ( endNode { id : value . end . id }) CALL apoc . merge . relationship ( startNode , value . label , {}, value . properties , endNode ) YIELD rel RETURN count ( rel ); This query reads relationship objects from the file and creates relationships in the Neo4j database between nodes that were created in the previous step.
- For better performance on large datasets, create constraints for all node labels using a query similar to the following: CALL apoc . load . jsonl ( 'file:///<your-data-file>.jsonl' ) YIELD value WHERE value . type = 'node' UNWIND value . labels as label WITH distinct label CALL apoc . cypher . doIt ( "CREATE CONSTRAINT IF NOT EXISTS FOR (n:" + apoc . text . quoteLabel ( label ) + ") REQUIRE n.id IS UNIQUE" , {}) YIELD value RETURN count ( ); This query reads node labels from the file and creates a unique constraint on the id property for each label.
- Import nodes using a Cypher query similar to the following: CALL apoc . load . jsonl ( 'file:///<your-data-file>.jsonl' ) YIELD value WHERE value . type = 'node' CALL apoc . merge . node ( value . labels , { id : value . id }, value . properties , value . properties ) YIELD node RETURN count ( node ); This query reads each line from the file, and if it's a node, it creates a corresponding node in the Neo4j database with its labels and properties, using MERGE to avoid duplicates based on node id .
- The zip archive includes a JSON file for each program in your assessment, containing all the collected data, including summaries, detailed logic, and code suggestions.

