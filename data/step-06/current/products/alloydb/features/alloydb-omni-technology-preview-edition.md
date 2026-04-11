---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.641Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB Omni Technology Preview edition"
feature_slug: "alloydb-omni-technology-preview-edition"
latest_feature_date: "2023-08-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language"
  - "https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators"
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
keywords:
  - "AlloyDB Omni Technology Preview"
  - "Technology Preview"
  - "AlloyDB Omni TP"
  - "Tech Preview"
  - "included models"
  - "TP"
  - "preview edition"
  - "AlloyDB AI"
---

# AlloyDB Omni Technology Preview edition

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

A separate Technology Preview edition of AlloyDB Omni is available for experimenting with AlloyDB AI using included models.

## Extended Definition

A separate Technology Preview edition of AlloyDB Omni is available for experimenting with AlloyDB AI using included models.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language](https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language)
- [https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators](https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators)
- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)

## Supporting Pages

### "Generate SQL queries using natural language questions \_|\_ AlloyDB for\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language](https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language)
- Source ID: `site-docs-root-2`
- Final score: 56
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To use natural language to get results from your database using the alloydb ai nl.get sql function, use the following example: SELECT alloydb ai nl . get sql ( 'my app config' , -- nl config 'What is the sum that client number 4''s account has following transaction 851?' -- nl question ); The following JSON output is returned: { "sql": "SELECT T3.balance FROM public.client AS T1 INNER JOIN public.account AS T2 ON T1.district id = T2.district id INNER JOIN public.trans AS T3 ON T2.account id = T3.account id WHERE T1.client id = 4 AND T3.trans id = 851", "prompt": "", "retries": 0, "error msg": "", "nl question": "What is the sum that client number 4's account has following transaction 851?" } Optional: To extract the generated SQL query as a text string, add ->>'sql' : SELECT alloydb ai nl . get sql ( 'my app config' , -- nl config 'What is the sum that client number 4''s account has following transaction 851?' -- nl question ) - >> 'sql' ; The ->> operator is used to extract a JSON value as text.
- SELECT FROM alloydb ai nl . generated templates view ; The following is an example of the returned output: -[ RECORD 1 ]---------------------------------------------------------------- id 1 config my app config type Template manifest How many clients have a birth year of a given number? nl How many clients have a birth year of 1997? sql select count( ) from public.client as T where to char(T.birth date::timestamp, 'YYYY') = '1997'; intent How many clients have a birth year of 1997? psql select count( ) from public.client as T where to char(T.birth date::timestamp, 'YYYY') = $1; pintent How many clients have a birth year of $1? comment explanation weight 1 The manifest in the returned output is a general template or a broad description of the question type or the operation that can be performed.
- SELECT psql FROM alloydb ai nl . template store view WHERE intent = 'How many accounts associated with loans are located in the Prague region?' ; This statement returns the following: SELECT COUNT(T1.account id) FROM account AS T1 INNER JOIN loan AS T2 ON T1.account id = T2.account id INNER JOIN district AS T3 ON T1.district id = T3.district id WHERE T3."A3" = $1 Provide a customized parameterization To provide a customized parameterization for a SQL statement using the manual interface of the add template function, run the statement in the following example: SELECT alloydb ai nl . add template ( nl config id = > 'my app config' , intent = > 'Among the accounts opened, how many customers born before 1950 resided in Slokolov at the time of account opening?' , sql = > $$ SELECT COUNT ( DISTINCT T2 . client id ) FROM district AS T1 INNER JOIN client AS T2 ON T1 . district id = T2 . district id INNER JOIN account AS T3 ON T2 . client id IN ( SELECT client id FROM disp WHERE account id = T3 . account id ) WHERE to char ( T2 . birth date :: timestamp , 'YYYY' ) < '1950' AND T1 . "A2" = 'Slokolov' $$ , parameterized sql = > $$ SELECT COUNT ( DISTINCT T2 . client id ) FROM district AS T1 INNER JOIN client AS T2 ON T1 . district id = T2 . district id INNER JOIN account AS T3 ON T2 . client id IN ( SELECT client id FROM disp WHERE account id = T3 . account id ) WHERE to char ( T2 . birth date :: timestamp , 'YYYY' ) < $ 2 AND T1 . "A2" = $ 1 $$ , parameterized intent = > $$ Among the accounts opened , how many customers born before $ 2 resided in $ 1 at the time of account opening ? $$ , manifest = > $$ Among the accounts opened , how many customers born before a given date resided in a given city at the time of account opening ? $$ , check intent = > TRUE ); In the preceding definition, the parameterization of the SQL statement is provided.
- To provide a customized parameterization of a fragment, use the manual version of alloydb ai nl.add fragment , as shown in the following example: SELECT alloydb ai nl . add fragment ( nl config id = > 'my app config' , table aliases = > ARRAY [ 'bird dev financial.district AS T' ], intent = > $$ districts in 'Prague' $$ , parameterized intent = > $$ districts in $ 1 $$ , fragment = > $$ T . "A3" = 'Prague' $$ , parameterized fragment = > $$ T . "A3" = $ 1 $$ , manifest = > $$ districts in a given city$$ , check intent = > TRUE ); Manage fragments To manage fragments, use the following APIs: -- To disable a fragment: SELECT alloydb ai nl . disable fragment ( INPUT fragment id ); -- To enable a fragment which has been disabled: SELECT alloydb ai nl . enable fragment ( INPUT fragment id ); -- To permanently remove a fragment: SELECT alloydb ai nl . drop fragment ( INPUT fragment id ); You can use the view alloydb ai nl.fragment store view to extract the fragment id of a fragment, given its content.

### "Perform intelligent SQL queries using AI functions \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators](https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators)
- Source ID: `site-docs-root-2`
- Final score: 56
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Fetch results from the output cursor and store them LOOP FETCH result cursor INTO rec ; EXIT WHEN NOT FOUND ; INSERT INTO filtered results VALUES ( rec . input , rec . output ); END LOOP ; CLOSE result cursor ; END $$ ; Text generation and summarization AlloyDB AI offers text generation operators like scalar ai.generate and array-based and cursor-based ai.generate .
- CALL google ml . create model ( model id = > 'gemini-2.5-flash-lite-global' , model type = > 'llm' , model provider = > 'google' , model qualified name = > 'gemini-2.5-flash-lite' , model request url = > 'https://aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/global/publishers/google/models/gemini-2.5-flash-lite:generateContent' , model auth type = > 'alloydb service agent iam' ); Use Gemini 3.0 models Some Gemini models, such as gemini-3.0-pro-preview , are available only through the global endpoint.
- You must register such models as follows: CALL google ml . create model ( model id = > 'gemini-3-preview-model' , model request url = > 'https://aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/global/publishers/google/models/gemini-3-pro-preview:generateContent' , model qualified name = > 'gemini-3-pro-preview' , model provider = > 'google' , model type = > 'llm' , model auth type = > 'alloydb service agent iam' ); Replace PROJECT ID with the ID of the project where the Vertex AI model is available.
- The function returns boolean true or false value, and returns false if the output isn't clearly detected. - Function signature FUNCTION ai.if(prompt TEXT, model id VARCHAR(100) DEFAULT NULL) RETURNS bool The following example shows the use of the ai.if operator as a filter to find restaurants with more than 500 positive reviews located in cities with a population greater than 100,000.

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- This version includes the following: Compatibility with PostgreSQL server version 15 A command-line interface for easier installation and maintenance of AlloyDB Omni Integration with Vertex AI Guides for data protection using Barman and pglogical Various bug fixes and query performance improvements Feature A separate Technology Preview edition of AlloyDB Omni is available.
- Change Updated the following extensions related to the PostGIS extension to version 3.2.3: postgis postgis raster postgis sfcgal postgis tiger geocoder postgis topology address standardizer address standardizer data us August 29, 2023 Feature AlloyDB AI, a suite of features for building generative AI applications , is now available with both AlloyDB and AlloyDB Omni.
- March 03, 2026 Feature The following AlloyDB AI features are now generally available ( GA ): Auto vector embeddings provide a scalable, automated solution for managing the lifecycle of vector embeddings for large-scale datasets, eliminating the need for manual reindexing or custom scripts.
- Feature The following AlloyDB AI features are available in Preview : You can now use the ai.hybrid search() function, which fuses results from each search type into a single list using the Reciprocal Rank Fusion (RRF) algorithm.

