---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.469Z"
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
  - "gemini"
  - "flash"
  - "generative"
  - "ai"
  - "functions"
  - "lets"
  - "alloydb"
  - "use"
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
- CALL google ml . create model ( model id = > 'gemini-2.5-flash-lite-global' , model type = > 'llm' , model provider = > 'google' , model qualified name = > 'gemini-2.5-flash-lite' , model request url = > 'https://aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/global/publishers/google/models/gemini-2.5-flash-lite:generateContent' , model auth type = > 'alloydb service agent iam' ); Use Gemini 3.0 models Some Gemini models, such as gemini-3.0-pro-preview , are available only through the global endpoint.
- For more information, see Configure an instance's database flags . gcloud alloydb instances update INSTANCE ID \ --database-flags google ml integration.enable ai query engine=on \ --region= REGION ID \ --cluster= CLUSTER ID \ --project= PROJECT ID Use a Gemini model that's supported in your region If your AlloyDB for PostgreSQL cluster is in a region where gemini-2.5-flash-lite isn't supported, you can use one of the other available Gemini models in your region using the model id parameter .
- SELECT item name , COUNT ( ) FROM menu items JOIN user reviews ON ai . if ( prompt = > 'Does the following user review talk about the menu item mentioned ? review: ' user reviews . review text ' menu item: ' item name ) GROUP BY item name ; Perform filtering using array-based functions The following example identifies restaurants with more than 10 positive reviews by using an AI model ( gemini-2.5-flash-lite ) to analyze review sentiment and filter the results.
- After registering the model, you can use it in AI functions as follows: SELECT ai . generate ( prompt = > 'What is AlloyDB?' , model id = > 'gemini-3-preview-model' ); Use filters in your queries AlloyDB AI offers AI-powered SQL functions that let you use natural language processing and LLMs directly within your database queries, including the ai.if and ai.rank operators.

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
- Enable required services Enable the following services for your project: Data Analytics API with Gemini Gemini for Google Cloud API Knowledge Catalog API Prepare an AlloyDB for PostgreSQL cluster, instance, and database Make sure that you have access to an existing AlloyDB cluster and instance or create a new one .
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Build context sets using Gemini CLI Stay organized with collections Save and categorize content based on your preferences.
- Grant the alloydb.databaseUser , the serviceusage.serviceUsageConsumer , and the geminidataanalytics.queryDataUser roles to the IAM user at the project level.
- Grant executesql permission to AlloyDB for PostgreSQL instance To grant the executesql permission to the AlloyDB for PostgreSQL instance and set the data api access instance setting to the value ALLOW DATA API , use the following curl command : curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ https://alloydb.googleapis.com/v1alpha/projects/ PROJECT ID /locations/ LOCATION /clusters/ CLUSTER ID /instances/ INSTANCE ID ?updateMask=dataApiAccess \ -d '{ "dataApiAccess": "ENABLED", }' Replace the following: PROJECT ID : The ID of your Google Cloud project.

