---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.074Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Gemini 3.0 Flash support for generative AI functions"
feature_slug: "gemini-3-0-flash-support-for-generative-ai-functions"
latest_feature_date: "2025-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators"
  - "https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases"
  - "https://docs.cloud.google.com/alloydb/docs/ai/build-context-gemini-cli"
keywords:
  - "flash"
  - "generative"
  - "functions"
  - "gemini"
  - "lets"
---

# Gemini 3.0 Flash support for generative AI functions

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Gemini 3.0 Flash support lets AlloyDB generative AI functions use the gemini-3-flash-preview model.

## Extended Definition

Gemini 3.0 Flash support lets AlloyDB generative AI functions use the gemini-3-flash-preview model.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators](https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators)
- [https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases](https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases)
- [https://docs.cloud.google.com/alloydb/docs/ai/build-context-gemini-cli](https://docs.cloud.google.com/alloydb/docs/ai/build-context-gemini-cli)

## Supporting Pages

### "Perform intelligent SQL queries using AI functions \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators](https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- SELECT item name , COUNT ( ) FROM menu items JOIN user reviews ON ai . if ( prompt = > 'Does the following user review talk about the menu item mentioned ? review: ' user reviews . review text ' menu item: ' item name ) GROUP BY item name ; Perform filtering using array-based functions The following example identifies restaurants with more than 10 positive reviews by using an AI model ( gemini-2.5-flash-lite ) to analyze review sentiment and filter the results.
- WITH initial arrays AS ( WITH initial arrays AS ( SELECT ARRAY AGG ( r . id ORDER BY r . id ) AS review ids , -- Assuming ai.if takes an array of prompts and returns a boolean array ai . if ( prompts = > ARRAY AGG ( 'Is the review positive: ' r . review ORDER BY r . id ) model id = > 'gemini-2.5-flash-lite' , batch size = > 20 ) AS truth values FROM restaurant reviews r ), reviews AS ( SELECT initial arrays . review ids [ i ] AS review id , initial arrays . truth values [ i ] AS truth value FROM initial arrays , generate series ( 1 , array length ( initial arrays . review ids , 1 )) AS i ) SELECT rest review . city , rest review . name FROM restaurant reviews rest review JOIN reviews review ON rest review . id = review . review id WHERE review . truth value = 't' GROUP BY rest review . city , rest review . name HAVING COUNT ( ) > 10 ; Perform filtering using cursors The following example shows how to filter a large set of restaurant reviews by streaming them through a cursor.
- CALL google ml . create model ( model id = > 'gemini-2.5-flash-lite-global' , model type = > 'llm' , model provider = > 'google' , model qualified name = > 'gemini-2.5-flash-lite' , model request url = > 'https://aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/global/publishers/google/models/gemini-2.5-flash-lite:generateContent' , model auth type = > 'alloydb service agent iam' ); Use Gemini 3.0 models Some Gemini models, such as gemini-3.0-pro-preview , are available only through the global endpoint.
- For more information, see Configure an instance's database flags . gcloud alloydb instances update INSTANCE ID \ --database-flags google ml integration.enable ai query engine=on \ --region= REGION ID \ --cluster= CLUSTER ID \ --project= PROJECT ID Use a Gemini model that's supported in your region If your AlloyDB for PostgreSQL cluster is in a region where gemini-2.5-flash-lite isn't supported, you can use one of the other available Gemini models in your region using the model id parameter .

### "Build generative AI applications \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases](https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You use pgvector and generative AI model extensions in AlloyDB, a real-time Cosine similarity search, Gemini 2.0 Flash, and Gen AI Toolbox for Databases .
- Codelab: Installing and Setting-up Toolbox for your Generative AI & Agentic Applications on AlloyDB Build and deploy a personalized fashion styling assistant The following codelabs show you how to build and deploy a personalized style assistant with Gemini, model endpoint management, vector search, Vertex AI, and agents.
- Codelab: Building an LLM and RAG-based chat application using AlloyDB AI and LangChain Create a chatbot to answer questions about movies This tutorial shows you how to build a generative AI chatbot that uses Gemini , Vertex AI , and the AlloyDB LangChain integration.
- Codelab: Build an AI-powered outfit recommendation app with AlloyDB and serverless runtimes Build an application that invokes a database query from your agent or a generative AI application The following codelab shows you how to build an application that uses Gen AI Toolbox for Databases to perform a simple AlloyDB query that you can invoke from your agent or from a generative AI application.

### "Build context sets using Gemini CLI \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/build-context-gemini-cli](https://docs.cloud.google.com/alloydb/docs/ai/build-context-gemini-cli)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To update the DB Context Enrichment extension, run the following command: gemini extensions update mcp-db-context-enrichment To update the DB Context Enrichment extension or to replace the GEMINI API KEY , run the following command: gemini extensions config mcp-db-context-enrichment GEMINI API KEY Replace GEMINI API KEY with your Gemini API key.
- To install the DB Context Enrichment extension, follow these steps: Install the DB Context Enrichment Gemini CLI extension: gemini extensions install https://github.com/GoogleCloudPlatform/db-context-enrichment Note: The extension requires a Gemini API key at installation to authenticate with the Gemini API and enable context generation.
- Enable required services Enable the following services for your project: Data Analytics API with Gemini Gemini for Google Cloud API Knowledge Catalog API Prepare an AlloyDB for PostgreSQL cluster, instance, and database Make sure that you have access to an existing AlloyDB cluster and instance or create a new one .
- For more information about templates, see Context sets overview To add a query template to the context set, perform the following steps: In the same directory, start Gemini CLI: gemini Complete the Gemini CLI Authentication Setup .

