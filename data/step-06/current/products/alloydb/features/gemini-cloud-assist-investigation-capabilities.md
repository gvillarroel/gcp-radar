---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.466Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Gemini Cloud Assist investigation capabilities"
feature_slug: "gemini-cloud-assist-investigation-capabilities"
latest_feature_date: "2026-02-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent"
  - "https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases"
  - "https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox"
keywords:
  - "gemini"
  - "assist"
  - "investigation"
  - "capabilities"
  - "help"
  - "troubleshoot"
  - "alloydb"
  - "issues"
---

# Gemini Cloud Assist investigation capabilities

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Gemini Cloud Assist investigation capabilities help troubleshoot AlloyDB issues such as slow queries with AI assistance.

## Extended Definition

Gemini Cloud Assist investigation capabilities help troubleshoot AlloyDB issues such as slow queries with AI assistance.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent](https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent)
- [https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases](https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases)
- [https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox)

## Supporting Pages

### "Integrate QueryData with an application \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent](https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent)
- Source ID: `site-docs-root-2`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Gemini creates a filename INSTANCE ID DATABASE ID context set TIMESTAMP .json in the same directory, with the following content: { "templates" : [ { "nl query" : "Tell me flights that can help me beat nighttime traffic if traveling from New York" , "sql" : "SELECT f.airline, f.flight number, a.name AS airport name, f.departure time FROM flights f JOIN airports a ON f.departure airport = a.iata WHERE a.city = 'New York' AND (EXTRACT(HOUR FROM f.departure time) < 17 OR EXTRACT(HOUR FROM f.departure time) >= 19) ORDER BY f.departure time;" , "intent" : "Tell me flights that can help me beat nighttime traffic if traveling from New York" , "manifest" : "Tell me flights that can help me beat nighttime traffic if traveling from a given city" , "parameterized" : { "parameterized sql" : "SELECT f.airline, f.flight number, a.name AS airport name, f.departure time FROM flights f JOIN airports a ON f.departure airport = a.iata WHERE a.city = $1 AND (EXTRACT(HOUR FROM f.departure time) < 17 OR EXTRACT(HOUR FROM f.departure time) >= 19) ORDER BY f.departure time;" , "parameterized intent" : "Tell me flights that can help me beat nighttime traffic if traveling from $1" } } ], "value searches" : [ { "query" : "/ Requires extensions: vector, google ml integration / WITH SemanticMetrics AS ( SELECT T.city AS original value, ( (google ml.embedding('gemini-embedding-001', $value)::vector <=> google ml.embedding('gemini-embedding-001', T.city)::vector) / 2.0 ) AS normalized dist FROM airports T WHERE T.city IS NOT NULL) SELECT original value AS value, 'airports.city' AS columns, 'Airport City' AS concept type, normalized dist AS distance, ''::text AS context FROM SemanticMetrics" , "concept type" : "Airport City" , "description" : "Semantic search for airport city name" } ] } Upload context set file to the QueryData In this section, you upload the context set file to QueryData, so that it improves the QueryData's SQL generation capabilities on your database.
- For more information, see Gemini Data Analytics Source and Gemini Data Analytics QueryData Tool. kind : source name : gda-api-source type : cloud-gemini-data-analytics projectId : " PROJECT ID " --- kind : tool name : cloud gda query tool type : cloud-gemini-data-analytics-query source : gda-api-source description : Use this tool to send natural language queries to the Gemini Data Analytics API and receive SQL, natural language answers, and explanations. location : " REGION ID " context : datasourceReferences : alloydb : databaseReference : projectId : " PROJECT ID " region : " REGION ID " clusterId : " CLUSTER ID " instanceId : " INSTANCE ID " databaseId : " DATABASE ID " agentContextReference : contextSetId : " CONTEXT SET ID " generationOptions : generateQueryResult : true generateNaturalLanguageAnswer : true generateExplanation : true generateDisambiguationQuestion : true Replace the following: PROJECT ID : Your Google Cloud project ID.
- Gemini creates a filename INSTANCE ID DATABASE ID context set TIMESTAMP .json in the same directory, with the following content: { "templates" : [ { "nl query" : "Tell me flights that can help me beat nighttime traffic if traveling from New York" , "sql" : "SELECT f.airline, f.flight number, a.name AS airport name, f.departure time FROM flights f JOIN airports a ON f.departure airport = a.iata WHERE a.city = 'New York' AND (EXTRACT(HOUR FROM f.departure time) < 17 OR EXTRACT(HOUR FROM f.departure time) >= 19) ORDER BY f.departure time;" , "intent" : "Tell me flights that can help me beat nighttime traffic if traveling from New York" , "manifest" : "Tell me flights that can help me beat nighttime traffic if traveling from a given city" , "parameterized" : { "parameterized sql" : "SELECT f.airline, f.flight number, a.name AS airport name, f.departure time FROM flights f JOIN airports a ON f.departure airport = a.iata WHERE a.city = ?
- SELECT "flights" . "id" , "flights" . "airline" , "flights" . "flight number" , "flights" . "departure airport" , "flights" . "arrival airport" , "flights" . "departure time" , "flights" . "arrival time" , "flights" . "departure gate" , "flights" . "arrival gate" FROM "flights" INNER JOIN "airports" ON "flights" . "arrival airport" = "airports" . "iata" WHERE "airports" . "name" ILIKE '%Disney World%' ; Generate context for the context set In this section, you prepare the environment and create a context file that helps improve the context set's querying capabilities.

### "Build generative AI applications \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases](https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Codelab: Installing and Setting-up Toolbox for your Generative AI & Agentic Applications on AlloyDB Build and deploy a personalized fashion styling assistant The following codelabs show you how to build and deploy a personalized style assistant with Gemini, model endpoint management, vector search, Vertex AI, and agents.
- Codelab: Part 1: Build a Smart Shopping Assistant with AlloyDB and AI Applications Codelab: Part 2: Deploy a Smart Shopping Assistant with AlloyDB and AI Applications Build an LLM and RAG-based chat application using AlloyDB AI and LangChain This codelab guides you through deploying the GenAI Databases Retrieval Service and then shows you how to build a sample interactive application using your newly set up environment.
- Tutorial: Deploying a RAG Application with AlloyDB to Agent Engine Integrate hybrid search and AI functions into your search application This demo illustrates the AI capabilities of Google Cloud AlloyDB, integrating hybrid search including SQL, vector, and full-text search with AI functions, all applied to a sample ecommerce dataset from Cymbal Shops.
- Codelab: Generate SQL using AlloyDB AI natural language Apply semantic filters and rerank vector search results to improve search quality This codelab shows you how to use AlloyDB AI features like AI Query Operators, model endpoint management , and vector search to help you improve your search quality and use semantic filters.

### "Use AlloyDB for PostgreSQL with MCP, Gemini CLI, and other agents \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox)
- Source ID: `site-docs-reference-2`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- You can use the Gemini CLI extension for AlloyDB in two ways: A standalone command-line tool Integrated into your IDE with Gemini Code Assist Gemini CLI Install the Gemini CLI .
- Start interacting with your AlloyDB instance using natural language directly within the Gemini Code Assist chat.
- Add the following configuration, replace the environment variables with your values, and save. { "servers": { "alloydb": { "command": "./PATH/TO/toolbox", "args": ["--prebuilt","alloydb-postgres","--stdio"], "env": { "ALLOYDB POSTGRES PROJECT": " PROJECT ID ", "ALLOYDB POSTGRES REGION": " REGION ", "ALLOYDB POSTGRES CLUSTER": " CLUSTER NAME ", "ALLOYDB POSTGRES INSTANCE": " INSTANCE NAME ", "ALLOYDB POSTGRES DATABASE": " DATABASE NAME ", "ALLOYDB POSTGRES USER": " USERNAME ", "ALLOYDB POSTGRES PASSWORD": " PASSWORD " } } } } Note: To connect using a private IP address, add the following line to the env object: "ALLOYDB POSTGRES IP TYPE": "private" Windsurf Open Windsurf and navigate to Cascade assistant.
- Install the AlloyDB extension for Gemini CLI from the GitHub repository using the following command: gemini extensions install https://github.com/gemini-cli-extensions/alloydb Set environment variables to connect to your AlloyDB instance: export ALLOYDB POSTGRES PROJECT=" PROJECT ID " export ALLOYDB POSTGRES REGION=" REGION " export ALLOYDB POSTGRES CLUSTER=" CLUSTER NAME " export ALLOYDB POSTGRES INSTANCE=" INSTANCE NAME " export ALLOYDB POSTGRES DATABASE=" DATABASE NAME " The Gemini CLI extension for AlloyDB uses your application default credentials (ADC) for authentication by default.

