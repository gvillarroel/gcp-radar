---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.510Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery DataFrames GeminiTextGenerator"
feature_slug: "bigquery-dataframes-geminitextgenerator"
latest_feature_date: "2024-02-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/boosted-tree-classifier-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent"
  - "https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial"
keywords:
  - "bigquery"
  - "dataframes"
  - "geminitextgenerator"
  - "provides"
  - "class"
  - "estimator"
  - "like"
  - "gemini"
---

# BigQuery DataFrames GeminiTextGenerator

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery DataFrames provides the GeminiTextGenerator class for estimator-like Gemini text generation models.

## Extended Definition

BigQuery DataFrames provides the GeminiTextGenerator class for estimator-like Gemini text generation models.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/boosted-tree-classifier-tutorial](https://docs.cloud.google.com/bigquery/docs/boosted-tree-classifier-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent](https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent)
- [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)

## Supporting Pages

### "Perform classification with a boosted trees model \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/boosted-tree-classifier-tutorial](https://docs.cloud.google.com/bigquery/docs/boosted-tree-classifier-tutorial)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- XGBClassifier ( n estimators = 1 , booster = "gbtree" , tree method = "hist" , max iterations = 1 , # For a more accurate model, try 50 iterations. subsample = 0.85 , ) tree model . fit ( X , y ) tree model . to gbq ( your model id , # For example: "your-project.bqml tutorial.tree model" replace = True , ) Evaluate the model SQL Follow these steps to evaluate the model: In the Google Cloud console, go to the BigQuery page.
- PREDICT ( MODEL bqml tutorial.tree model , ( SELECT FROM bqml tutorial.input data WHERE dataframe = 'prediction' ) ); The first few columns of the results should look similar to the following: +---------------------------+--------------------------------------+-------------------------------------+ predicted income bracket predicted income bracket probs.label predicted income bracket probs.prob +---------------------------+--------------------------------------+-------------------------------------+ <=50K >50K 0.05183430016040802 +---------------------------+--------------------------------------+-------------------------------------+ <50K 0.94816571474075317 +---------------------------+--------------------------------------+-------------------------------------+ <=50K >50K 0.00365859130397439 +---------------------------+--------------------------------------+-------------------------------------+ <50K 0.99634140729904175 +---------------------------+--------------------------------------+-------------------------------------+ <=50K >50K 0.037775970995426178 +---------------------------+--------------------------------------+-------------------------------------+ <50K 0.96222406625747681 +---------------------------+--------------------------------------+-------------------------------------+ BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- EVALUATE ( MODEL bqml tutorial.tree model , ( SELECT FROM bqml tutorial.input data WHERE dataframe = 'evaluation' ) ); The results should look similar to the following: +---------------------+---------------------+---------------------+-------------------+---------------------+---------------------+ precision recall accuracy f1 score log loss roc auc +---------------------+---------------------+---------------------+-------------------+-------------------------------------------+ 0.67192429022082023 0.57880434782608692 0.83942963422194672 0.621897810218978 0.34405456040833338 0.88733566433566435 +---------------------+---------------------+ --------------------+-------------------+---------------------+---------------------+ BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- Go to BigQuery In the query editor, run the following query: CREATE OR REPLACE VIEW bqml tutorial.input data AS SELECT age , workclass , marital status , education num , occupation , hours per week , income bracket , CASE WHEN MOD ( functional weight , 10 ) 8 THEN 'training' WHEN MOD ( functional weight , 10 ) = 8 THEN 'evaluation' WHEN MOD ( functional weight , 10 ) = 9 THEN 'prediction' END AS dataframe FROM bigquery-public-data.ml datasets.census adult income ; In the left pane, click explore Explorer : If you don't see the left pane, click last page Expand left pane to open the pane.

### "Use the Colab Enterprise Data Science Agent with BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent](https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent)
- Source ID: `site-docs-reference-5`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Create and evaluate a classification model on project id : dataset . table using BigQuery DataFrames.
- Model training : Train a model by using the training data in a pandas DataFrame ( X train , y train ), BigQuery DataFrames , a PySpark DataFrame , or by using the BigQuery ML CREATE MODEL statement with BigQuery tables.
- Data wrangling : Convert categorical features into numerical representations using techniques like one-hot encoding or label encoding or by using BigQuery ML feature transformation tools .
- You can use the DSA for: Large-scale data processing : Use BigQuery ML, BigQuery DataFrames, or Managed Service for Apache Spark to perform distributed data processing on large datasets.

### "Analyze multimodal data with SQL and BigQuery DataFrames \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up ADC for a local development environment . df prompt = bbq . obj . get access url ( df products mm [ "image" ], "R" ) . to frame () df prompt [ "prompt0" ] = "For the image of a pet product, concisely generate the following metadata: 1) animal type and 2) 5 SEO search keywords, and 3) product subcategory." df products mm [ "prompt" ] = bbq . struct ( df prompt [[ "prompt0" , "image" ]]) df products mm = df products mm . drop ( columns = [ "animal type" , "search keywords" , "subcategory" ] ) df products mm = bbq . ai . generate table ( gemini model , df products mm , output schema = "animal type STRING, search keywords ARRAY<STRING>, subcategory STRING" , ) Run the following to view the generated data: SQL SELECT product name , image description , animal type , search keywords , subcategory , FROM cymbal pets . products mm ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- For more information, see Set up ADC for a local development environment . bbq . create external table ( "cymbal pets.product manuals" , replace = True , connection name = "us.cymbal conn" , options = { "object metadata" : "SIMPLE" , "uris" : [ "gs://cloud-samples-data/bigquery/tutorials/cymbal-pets/documents/ .pdf" ], }, ) Create a text generation model Create a BigQuery ML remote model that represents a Vertex AI Gemini model: Run the following to create the remote model: SQL CREATE OR REPLACE MODEL cymbal pets.gemini REMOTE WITH CONNECTION us.cymbal conn OPTIONS ( ENDPOINT = 'gemini-2.0-flash' ); BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- For more information, see Set up ADC for a local development environment . gemini model = bbq . ml . create model ( "cymbal pets.gemini" , replace = True , connection name = "us.cymbal conn" , options = { "endpoint" : "gemini-2.5-flash" }, ) Create an embedding generation model Create a BigQuery ML remote model that represents a Vertex AI multimodal embedding model: Run the following to create the remote model: SQL CREATE OR REPLACE MODEL cymbal pets.embedding model REMOTE WITH CONNECTION us.cymbal conn OPTIONS ( ENDPOINT = 'multimodalembedding@001' ); BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- For more information, see Set up ADC for a local development environment . df manuals agg The results look similar to the following: +-------------------------------------+--------------------------------+-----------------------------------+------------------------------------------------------+-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ manual.uri manual.version manual.authorizer manual.details chunks.uri chunks.version chunks.authorizer chunks.details +-------------------------------------+--------------------------------+-----------------------------------+------------------------------------------------------+-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ gs://cloud-samples-data/bigquery/ 1742492785900455 myproject.region.myconnection {"gcs metadata":{"content type":"application/pef", gs://cloud-samples-data/bigquery/ 1745875761227129 myproject.region.myconnection {"gcs metadata":{"content type":"application/pdf", tutorials/cymbal-pets/documents/ "md5 hash":"c9032b037693d15a33210d638c763d0e", tutorials/cymbal-pets/documents/ "md5 hash":"5a1116cce4978ec1b094d8e8b49a1d7c", crittercuisine 5000 user manual.pdf "size":566105,"updated":1742492785941000}} crittercuisine 5000 user manual page1.pdf "size":504583,"updated":1745875761266000}} +-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ crittercuisine 5000 user manual page1.pdf 1745875760613874 myproject.region.myconnection {"gcs metadata":{"content type":"application/pdf", tutorials/cymbal-pets/documents/ "md5 hash":"94d03ec65d28b173bc87eac7e587b325", crittercuisine 5000 user manual page2.pdf "size":94622,"updated":1745875760649000}} +-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ ... ... ... ... +-------------------------------------+--------------------------------+-----------------------------------+------------------------------------------------------+-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ Run the following to generate a single response from a Gemini model based on the analysis of an array of ObjectRef values: SQL WITH manuals AS ( SELECT OBJ .

