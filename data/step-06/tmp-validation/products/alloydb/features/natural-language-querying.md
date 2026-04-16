---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.150Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Natural language querying"
feature_slug: "natural-language-querying"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent"
  - "https://docs.cloud.google.com/alloydb/docs/ai/inspect-data-agent"
  - "https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language"
keywords:
  - "querying"
  - "natural"
  - "databases"
  - "language"
  - "query"
  - "omni"
---

# Natural language querying

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB Omni can query databases by using natural language.

## Extended Definition

AlloyDB Omni can query databases by using natural language.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent](https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent)
- [https://docs.cloud.google.com/alloydb/docs/ai/inspect-data-agent](https://docs.cloud.google.com/alloydb/docs/ai/inspect-data-agent)
- [https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language](https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language)

## Supporting Pages

### "Generate SQL queries using natural language questions \_|\_ AlloyDB for\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language](https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language)
- Source ID: `site-docs-root-2`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Natural language lets you create user-facing generative AI applications using natural language to query databases.
- To use natural language to get results from your database using the alloydb ai nl.get sql function, use the following example: SELECT alloydb ai nl . get sql ( 'my app config' , -- nl config 'What is the sum that client number 4''s account has following transaction 851?' -- nl question ); The following JSON output is returned: { "sql": "SELECT T3.balance FROM public.client AS T1 INNER JOIN public.account AS T2 ON T1.district id = T2.district id INNER JOIN public.trans AS T3 ON T2.account id = T3.account id WHERE T1.client id = 4 AND T3.trans id = 851", "prompt": "", "retries": 0, "error msg": "", "nl question": "What is the sum that client number 4's account has following transaction 851?" } Optional: To extract the generated SQL query as a text string, add ->>'sql' : SELECT alloydb ai nl . get sql ( 'my app config' , -- nl config 'What is the sum that client number 4''s account has following transaction 851?' -- nl question ) - >> 'sql' ; The ->> operator is used to extract a JSON value as text.
- To associate a column with a concept type, run the following query: SELECT alloydb ai nl . associate concept type ( column names in = > 'my schema.country.country name' , concept type in = > 'country name' , nl config id in = > 'my app config' ); To create a value index based on all the columns that are part of a natural language config and are associated with a concept type, run the following statement: SELECT alloydb ai nl . create value index ( nl config id in = > 'my app config' ); When you associate concept types to new columns, refresh the value index to reflect the changes.
- To add general context for application-specific rules and application or domain-specific terminology, follow these steps: To add a general context item for the specified configuration, run the following query: SELECT alloydb ai nl . g manage configuration ( 'add general context' , 'my app config' , general context in = > '{"If the user asks for a good seat, assume that means a window or aisle seat."}' ); The preceding statement helps AlloyDB AI natural language provide higher quality responses to users' natural language questions.

### "Integrate QueryData with an application \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent](https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent)
- Source ID: `site-docs-root-2`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Gemini Data Analytics Source and Gemini Data Analytics QueryData Tool. kind : source name : gda-api-source type : cloud-gemini-data-analytics projectId : " PROJECT ID " --- kind : tool name : cloud gda query tool type : cloud-gemini-data-analytics-query source : gda-api-source description : Use this tool to send natural language queries to the Gemini Data Analytics API and receive SQL, natural language answers, and explanations. location : " REGION ID " context : datasourceReferences : alloydb : databaseReference : projectId : " PROJECT ID " region : " REGION ID " clusterId : " CLUSTER ID " instanceId : " INSTANCE ID " databaseId : " DATABASE ID " agentContextReference : contextSetId : " CONTEXT SET ID " generationOptions : generateQueryResult : true generateNaturalLanguageAnswer : true generateExplanation : true generateDisambiguationQuestion : true Replace the following: PROJECT ID : Your Google Cloud project ID.
- To generate template context, perform the following steps: Run the /generate targeted templates command and follow the workflow: /generate targeted templates Provide the natural language query that you want to add to the query template in the terminal.
- You can use this response to observe the tool responses such as generated SQL query, result set, intent explanation, disambiguation question, and natural language answer, to help you confirm the correctness of your agent's responses.
- Learn how to build the context set file, create a context set that uses the context set file, use MCP Toolbox to call the QueryData API to generate SQL queries for natural language questions, and integrate it with your application.

### Test QueryData \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/inspect-data-agent](https://docs.cloud.google.com/alloydb/docs/ai/inspect-data-agent)
- Source ID: `site-docs-root-2`
- Final score: 123
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- A3 contains the data of region." , "context" : { "datasource references" : [ { "alloydb" : { "database reference" : { "project id" : "context-set-project" , "region" : "us-central1" , "cluster id" : "sqlgen-magic" , "instance id" : "context-set-primary" , "database id" : "financial" }, "agent context reference" : { "context set id" : "projects/context-set-project/locations/us-east1/contextSets/bdf pg all templates" } } } ] }, "generation options" : { "generate query result" : true , "generate natural language answer" : true , "generate disambiguation question" : true , "generate explanation" : true } } The request body contains the following fields: prompt : The natural language question from the end user. context : Contains information about the data sources. datasource references : Specifies the data source type. alloydb : Required when querying the database.
- I will join these two tables on their respective district IDs." , "query result" : { "columns" : [ { "name" : "count" } ], "rows" : [ { "values" : [ { "value" : "2" } ] } ], "total row count" : 1 }, "natural language answer" : "There are 2 accounts in Prague that are eligible for loans." } What's next Learn more about context sets .
- For example, projects/context-set-project/locations/us-east1/contextSets/bdf gsql gemini all templates . generationOptions : Configures the type of output to generate. generate query result : Set to true to generate and return the query results. generate natural language answer : Optional.
- Download and update a context set If you are not satisfied with the generated SQL query for a natural language question, download the existing context set file.

