---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.528Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Vertex AI integration"
feature_slug: "vertex-ai-integration"
latest_feature_date: "2023-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language"
  - "https://docs.cloud.google.com/alloydb/docs/ai/configure-vertex-ai"
  - "https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators"
keywords:
  - "vertex"
  - "ai"
  - "integration"
  - "alloydb"
  - "omni"
  - "version"
  - "15"
  - "adds"
---

# Vertex AI integration

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB Omni version 15.2.0 adds integration with Vertex AI.

## Extended Definition

AlloyDB Omni version 15.2.0 adds integration with Vertex AI.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language](https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language)
- [https://docs.cloud.google.com/alloydb/docs/ai/configure-vertex-ai](https://docs.cloud.google.com/alloydb/docs/ai/configure-vertex-ai)
- [https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators](https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators)

## Supporting Pages

### "Integrate with Vertex AI \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/configure-vertex-ai](https://docs.cloud.google.com/alloydb/docs/ai/configure-vertex-ai)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Verify the google ml integration extension version 1.4.2 or later is installed: SELECT extversion FROM pg extension WHERE extname = 'google ml integration' ; What's next Work with embeddings Invoke predictions Vertex AI quotas and limits Call remote model endpoints Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Grant Vertex AI user role to the AlloyDB service agent To enable database integration with Vertex AI, you grant the AlloyDB service agent the Vertex AI User role.
- This page details how to set up the integration between AlloyDB for PostgreSQL and Vertex AI, letting you issue queries that pass your data to Vertex AI models.
- To instead integrate a local installation of AlloyDB Omni using Vertex AI, see Install AlloyDB Omni with AlloyDB AI .

### "Generate SQL queries using natural language questions \_|\_ AlloyDB for\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language](https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language)
- Source ID: `site-docs-reference-required-8`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Install the alloydb ai nl extension The alloydb ai nl extension uses the google ml integration extension, which interacts with large language models (LLM), including Gemini models on Vertex AI.
- Create a cluster and enable Vertex AI integration Create an AlloyDB cluster and instance .
- To provide a customized parameterization of a fragment, use the manual version of alloydb ai nl.add fragment , as shown in the following example: SELECT alloydb ai nl . add fragment ( nl config id = > 'my app config' , table aliases = > ARRAY [ 'bird dev financial.district AS T' ], intent = > $$ districts in 'Prague' $$ , parameterized intent = > $$ districts in $ 1 $$ , fragment = > $$ T . "A3" = 'Prague' $$ , parameterized fragment = > $$ T . "A3" = $ 1 $$ , manifest = > $$ districts in a given city$$ , check intent = > TRUE ); Manage fragments To manage fragments, use the following APIs: -- To disable a fragment: SELECT alloydb ai nl . disable fragment ( INPUT fragment id ); -- To enable a fragment which has been disabled: SELECT alloydb ai nl . enable fragment ( INPUT fragment id ); -- To permanently remove a fragment: SELECT alloydb ai nl . drop fragment ( INPUT fragment id ); You can use the view alloydb ai nl.fragment store view to extract the fragment id of a fragment, given its content.
- Available fragments are exposed by views like alloydb ai nl.fragment store view , as shown in the following example: SELECT manifest , scope , fragment , intent , pfragment , pintent FROM alloydb ai nl . fragment store view WHERE intent = 'Average salary between 6000 and 10000' ; The query returns a result set similar to the following: manifest Average salary between a given number and a given number scope district AS T fragment T."A11" BETWEEN 6000 AND 10000 intent Average salary between 6000 and 10000 pfragment T."A11" BETWEEN $2 AND $1 pintent Average salary between $2 and $1 A manifest in a fragment is generated automatically from the intent, and it represents a generalized version of the intent.

### "Perform intelligent SQL queries using AI functions \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators](https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- You must register such models as follows: CALL google ml . create model ( model id = > 'gemini-3-preview-model' , model request url = > 'https://aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/global/publishers/google/models/gemini-3-pro-preview:generateContent' , model qualified name = > 'gemini-3-pro-preview' , model provider = > 'google' , model type = > 'llm' , model auth type = > 'alloydb service agent iam' ); Replace PROJECT ID with the ID of the project where the Vertex AI model is available.
- For more information, see Configure an instance's database flags . gcloud alloydb instances update INSTANCE ID \ --database-flags google ml integration.enable ai query engine=on \ --region= REGION ID \ --cluster= CLUSTER ID \ --project= PROJECT ID Use a Gemini model that's supported in your region If your AlloyDB for PostgreSQL cluster is in a region where gemini-2.5-flash-lite isn't supported, you can use one of the other available Gemini models in your region using the model id parameter .
- CREATE EXTENSION IF NOT EXISTS google ml integration ; ALTER EXTENSION google ml integration UPDATE ; If you experience issues when you run the preceding commands, or if the extension isn't updated to version 1.5.2 after you run the preceding commands, contact Google Cloud support .
- To check the installed version, run the following command: SELECT extversion FROM pg extension WHERE extname = 'google ml integration' ; extversion ------------ 1 .

