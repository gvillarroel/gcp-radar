---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.471Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Query plan management"
feature_slug: "query-plan-management"
latest_feature_date: "2025-12-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent"
  - "https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners"
  - "https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization"
keywords:
  - "query"
  - "plan"
  - "management"
  - "helps"
  - "ensure"
  - "stability"
  - "monitoring"
  - "capturing"
---

# Query plan management

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Query plan management helps ensure query plan stability by monitoring, capturing, and controlling approved execution plans.

## Extended Definition

Query plan management helps ensure query plan stability by monitoring, capturing, and controlling approved execution plans.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent](https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent)
- [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- [https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization](https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization)

## Supporting Pages

### "Google Cloud Ready - AlloyDB Partners \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- Source ID: `site-docs-reference-2`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Partner references AlloyDB monitoring integration New Google Cloud platform integration: AlloyDB Partner Advantage page Direct link Sifflet Data Solution Sifflet Data Category Automation & Observability Description Sifflet is a data observability platform that helps companies trust their data and make data-driven decisions.
- Partner references Vaultree and AlloyDB: the world's first Fully Homomorphic and Searchable Cloud Encryption Solution Vaultree launches support for Google's AlloyDB Partner Advantage page Direct link Data integration, optimization, and migration Airbyte Solution Airbyte Cloud Category Data integration and migration Description Airbyte is an open-source data integration engine that helps you consolidate your data in your data warehouses, lakes, and databases.
- Partner references AlloyDB Configuration in Skyvia Skyvia AlloyDB Connector Partner Advantage page Direct link Data Quality and Observability Anomalo Solution Anomalo Data Quality Category Data Quality Description Anomalo addresses the data quality problem by monitoring enterprise data and automatically detecting and root-causing data issues, allowing teams to resolve any issues with their data before making decisions, running operations, or powering models.
- For advanced database users, DBeaver suggests a powerful SQL editor, plenty of administration features, abilities of data and schema migration, monitoring database connection sessions, and a lot more Partner references Database driver AlloyDB for PostgreSQL Powering AlloyDB with DBeaver Partner Advantage page Direct link Hex Solution Hex Category Advanced Analytics Description Hex is a platform for collaborative analytics and data science.

### "Integrate QueryData with an application \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent](https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent)
- Source ID: `site-docs-root-2`
- Final score: 129
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information, see Gemini Data Analytics Source and Gemini Data Analytics QueryData Tool. kind : source name : gda-api-source type : cloud-gemini-data-analytics projectId : " PROJECT ID " --- kind : tool name : cloud gda query tool type : cloud-gemini-data-analytics-query source : gda-api-source description : Use this tool to send natural language queries to the Gemini Data Analytics API and receive SQL, natural language answers, and explanations. location : " REGION ID " context : datasourceReferences : alloydb : databaseReference : projectId : " PROJECT ID " region : " REGION ID " clusterId : " CLUSTER ID " instanceId : " INSTANCE ID " databaseId : " DATABASE ID " agentContextReference : contextSetId : " CONTEXT SET ID " generationOptions : generateQueryResult : true generateNaturalLanguageAnswer : true generateExplanation : true generateDisambiguationQuestion : true Replace the following: PROJECT ID : Your Google Cloud project ID.
- SELECT "flights" . "id" , "flights" . "airline" , "flights" . "flight number" , "flights" . "departure airport" , "flights" . "arrival airport" , "flights" . "departure time" , "flights" . "arrival time" , "flights" . "departure gate" , "flights" . "arrival gate" FROM "flights" INNER JOIN "airports" ON "flights" . "arrival airport" = "airports" . "iata" WHERE "airports" . "name" ILIKE '%Disney World%' ; Generate context for the context set In this section, you prepare the environment and create a context file that helps improve the context set's querying capabilities.
- You can use this response to observe the tool responses such as generated SQL query, result set, intent explanation, disambiguation question, and natural language answer, to help you confirm the correctness of your agent's responses.
- If natural language answer is produced, use intent explanation and generated query to see if you need to clarify any assumptions for the user.

### "AlloyDB query tuning and optimization \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization](https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization)
- Source ID: `site-api-reference`
- Final score: 125
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following is an example of the report: The following is a list of some database elements that the report helps you tune: Vacuum Identification of unused indexes Full parameter list, with identification of parameters that might need tuning Abandoned replication slots pev2 The pev2 tool allows the visualization of PostgreSQL EXPLAIN output query plans.
- SQL plan management To manage your SQL plan, you can use the pg hint plan extension. pg hint plan When you use pg hint plan to manage query plans, it's important to use the correct syntax.
- To debug pg hint plan , you can set the following options in psql : SET SESSION pg hint plan . debug print TO true ; SET pg hint plan . message level TO notice ; SET SESSION client min messages TO LOG ; pg proctab You can also use the pg proctab extension along with various other GUI interfaces that use the extension to query system statistics directly from the database.
- Memoize nodes: these are used in some query plans to cache the results of lookups, particularly in nested loop joins where there are many duplicates, and to avoid returning the same results.

