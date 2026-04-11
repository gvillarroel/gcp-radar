---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.431Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery multimodal workflows with BigQuery DataFrames"
feature_slug: "bigquery-multimodal-workflows-with-bigquery-dataframes"
latest_feature_date: "2025-05-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/vector-search-intro"
keywords:
  - "ObjectRefRuntime"
  - "multimodal workflow"
  - "ObjectRef API"
  - "ObjectRef"
  - "unstructured data"
  - "BigQuery DataFrames"
  - "BQ DataFrames"
  - "Gemini embeddings"
---

# BigQuery multimodal workflows with BigQuery DataFrames

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery now supports multimodal analysis and ELT workflows in SQL and Python using BigQuery DataFrames with ObjectRef/ObjectRefRuntime for unstructured data and Gemini multimodal embedding workflows.

## Extended Definition

BigQuery multimodal workflow support enables users to store unstructured data as ObjectRef-based columns (including via external/object tables), then use ObjectRefRuntime values in SQL and BigQuery DataFrames workflows for analysis and transformation, including chunking and processing multimodal content. It also supports multimodal generation and embedding workflows in BigQuery ML through AI.GENERATE-family functions (including AI.GENERATE TABLE and AI.GENERATE EMBEDDING) that operate on ObjectRef/ObjectRef-based content.

## Evidence Summary

The cited pages confirm ObjectRef/ObjectRefRuntime-based multimodal ingestion/processing in BigQuery and document BigQuery ML support for multimodal AI generation and embedding functions over unstructured ObjectRef data.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)

## Supporting Pages

### "Analyze multimodal data with SQL and BigQuery DataFrames \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 102
- Re-rank relevance: STRONG
- Re-rank rationale: The page is a tutorial explicitly about analyzing multimodal data using SQL, ObjectRef values, BigQuery DataFrames, and AI.GENERATE functions.

Evidence snippets:
- The pages are provided in serial order' , ObjectRefRuntimeArray ) AS prompt , FROM ordered output objrefruntime array ), STRUCT ( 'page1 summary STRING, page2 summary STRING, page3 summary STRING' AS output schema )); BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- For more information, see Set up ADC for a local development environment . bbq . create external table ( "cymbal pets.product manuals all" , replace = True , connection name = "us.cymbal conn" , options = { "object metadata" : "SIMPLE" , "uris" : [ "gs://cloud-samples-data/bigquery/tutorials/cymbal-pets/documents/ .pdf" , "gs://cloud-samples-data/bigquery/tutorials/cymbal-pets/document chunks/ .pdf" , ], }, ) Run the following to write PDF data to the map manual to chunks table: SQL -- Extract the file and chunks into a single table. -- Store the chunks in the chunks column as array of ObjectRefs (ordered by page number) CREATE OR REPLACE TABLE cymbal pets . map manual to chunks AS SELECT ARRAY AGG ( m1 . ref ) [ 0 ] manual , ARRAY AGG ( m2 . ref ORDER BY m2 . ref . uri ) chunks FROM cymbal pets . product manuals m1 JOIN cymbal pets . product manuals m2 ON REGEXP EXTRACT ( m1 . uri , r '. /([^.] ).[^/]+' ) = REGEXP EXTRACT ( m2 . uri , r '. /([^.] ) page[0-9]+.[^/]+' ) GROUP BY m1 . uri ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- GET ACCESS URL ( chunk ref , 'r' ) AS ObjectRefRuntime FROM input chunked objrefs ), valid get access urls AS ( SELECT FROM get access urls WHERE ObjectRefRuntime [ 'runtime errors' ] IS NULL ), ordered output objrefruntime array AS ( SELECT ARRAY AGG ( ObjectRefRuntime ORDER BY offset ) AS ObjectRefRuntimeArray FROM valid get access urls GROUP BY row id ) SELECT page1 summary , page2 summary , page3 summary FROM AI .
- Run the following to create the chunk pdf UDF: SQL -- This function chunks the product manual PDF into multiple parts. -- The function accepts an ObjectRefRuntime value for the PDF file and the chunk size. -- It then parses the PDF, chunks the contents, and returns an array of chunked text.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- Use multimodal data features to do the following: Integrate unstructured data into standard tables by using ObjectRef values, and then work with this data in analysis and transformation workflows by using ObjectRefRuntime values.
- Feature BigQuery ML now supports the following generative AI functions : AI.GENERATE : generate free text to accomplish a wide range of tasks, such as translation, summarization, and classification, on any unstructured data, including images, audio, video, and documents.
- March 09, 2026 Feature Updates to conversational analytics include the following improvements: ObjectRef support: BigQuery conversational analytics now integrates with Google Cloud Storage through ObjectRef functions .
- BigQuery ML now supports the following table-valued generative AI functions: AI.GENERATE TABLE : generate a table of structured output from unstructured data including text, images, audio, and video.

### "Introduction to embeddings and vector search \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- Source ID: `site-docs-root`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- Image data represented by ObjectRefRuntime values.
- For multimodal embedding models, AI.GENERATE EMBEDDING also works with visual content from either standard table columns that contain ObjectRef values , or from object tables .
- For a notebook that illustrates this scenario, see Build a Vector Search application using BigQuery DataFrames .
- For a notebook that illustrates this approach, see Build a Vector Search application using BigQuery DataFrames .

