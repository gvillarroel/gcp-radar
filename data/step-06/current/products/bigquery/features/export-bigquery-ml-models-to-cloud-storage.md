---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.786Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Export BigQuery ML models to Cloud Storage"
feature_slug: "export-bigquery-ml-models-to-cloud-storage"
latest_feature_date: "2020-04-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/exporting-data"
  - "https://docs.cloud.google.com/bigquery/docs/export-model-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
keywords:
  - "export"
  - "bigquery"
  - "ml"
  - "models"
  - "storage"
  - "supports"
  - "exporting"
  - "external"
---

# Export BigQuery ML models to Cloud Storage

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML supports exporting models to Cloud Storage for external use.

## Extended Definition

BigQuery ML supports exporting models to Cloud Storage for external use.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- [https://docs.cloud.google.com/bigquery/docs/export-model-tutorial](https://docs.cloud.google.com/bigquery/docs/export-model-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)

## Supporting Pages

### Export table data to Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Note: If you are exporting data to the Parquet format, it might be faster to use the BigQuery export to Parquet (via BigQuery Storage API) template rather than writing a custom solution. (Optional) Specify your location in the location property in the jobReference section of the job resource .
- Export limitations When you export data from BigQuery, note the following: Caution: If you are exporting data to a Cloud Storage bucket, we strongly recommend that you disable the Bucket Lock and Soft Delete retention policies on your bucket.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client libraries const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const { Storage } = require ( ' @google-cloud/storage ' ); const bigquery = new BigQuery (); const storage = new Storage (); async function extractTableCompressed () { // Exports my dataset:my table to gcs://my-bucket/my-file as a compressed file. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; // const bucketName = "my-bucket"; // const filename = "file.csv"; // Location must match that of the source table. const options = { location : 'US' , gzip : true , }; // Export data from the table into a Google Cloud Storage file const [ job ] = await bigquery . dataset ( datasetId ) . table ( tableId ) . extract ( storage . bucket ( bucketName ). file ( filename ), options ); console . log ( Job ${ job . id } created. ); // Check the job's status for errors const errors = job . status . errors ; if ( errors && errors . length > 0 ) { throw errors ; } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client libraries const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const { Storage } = require ( ' @google-cloud/storage ' ); const bigquery = new BigQuery (); const storage = new Storage (); async function extractTableToGCS () { // Exports my dataset:my table to gcs://my-bucket/my-file as raw CSV. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; // const bucketName = "my-bucket"; // const filename = "file.csv"; // Location must match that of the source table. const options = { location : 'US' , }; // Export data from the table into a Google Cloud Storage file const [ job ] = await bigquery . dataset ( datasetId ) . table ( tableId ) . extract ( storage . bucket ( bucketName ). file ( filename ), options ); console . log ( Job ${ job . id } created. ); // Check the job's status for errors const errors = job . status . errors ; if ( errors && errors . length > 0 ) { throw errors ; } } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- It can help Google customers in consolidating data from various sources to Google BigQuery or loading data from it to other sources, import and export CSV files to/from file storages, creating refreshable Google Sheets reports with data from various sources and more.
- Partner references BigQuery Export Integration BigQuery Import Integration BigQuery Version 2 Export Partner Advantage page Direct link Union.ai Solution Union AI orchestrator Category BI, ML, & Advanced Analytics Description The Union platform empowers AI development teams to rapidly ship high-quality code to production by offering optimized performance, unparalleled resource efficiency, and a delightful workflow authoring experience.
- Partner references BigQuery and Tableau best practices Making Sense of Google BigQuery Data with Tableau Analyze BigQuery data by using BI Engine and Tableau Partner Advantage page Direct link Tecton Solution Feature Platform Category BI, ML, & Advanced Analytics Description Tecton's feature platform for ML enables data scientists to turn raw data into production-ready features, the predictive signals that feed ML models.
- Partner references Configure BigQuery Destination Integration with BigQuery Data export to BigQuery Partner Advantage page Direct link Email Meter Solution Email Meter Category BI, ML, & Advanced Analytics Description Email Meter is an email analytics platform that gives companies detailed insight into their team's email performance, so they can improve efficiency and the health of customer relationships.

### Export a BigQuery ML model for online prediction \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/export-model-tutorial](https://docs.cloud.google.com/bigquery/docs/export-model-tutorial)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For additional ways to export models, see Exporting BigQuery ML models . bq extract -m bqml tutorial.automl iris model gs://some/gcs/path/automl iris model Local deployment and serving For details about building AutoML containers, see Export AutoML tabular models .
- Download the exported model files to a temporary directory mkdir tmp dir gcloud storage cp gs://some/gcs/path/iris model tmp dir --recursive Create a version subdirectory This step sets a version number (1 in this case) for the model. mkdir -p serving dir/iris model/1 cp -r tmp dir/iris model/ serving dir/iris model/1 rm -r tmp dir Pull the Docker image docker pull tensorflow/serving Run the Docker container docker run - p 8500 : 8500 -- network = "host" -- mount type = bind , source = pwd / serving dir / iris model , target =/ models / iris model - e MODEL NAME = iris model - t tensorflow / serving & Run the prediction curl -d '{"instances": [{"sepal length":5.0, "sepal width":2.0, "petal length":3.5, "petal width":1.0}]}' -X POST http://localhost:8501/v1/models/iris model:predict Online deployment and serving This section uses the Google Cloud CLI to deploy and run predictions against the exported model.
- Copy exported model files to a local directory mkdir automl serving dir gcloud storage cp gs://some/gcs/path/automl iris model/ automl serving dir/ --recursive Pull AutoML Docker image docker pull gcr.io/cloud-automl-tables-public/model server Start Docker container docker run - v pwd / automl serving dir :/ models / default / 0000001 - p 8080 : 8080 - it gcr . io / cloud - automl - tables - public / model server Run the prediction 1) Create a newline-delimited JSON file for inputs.
- This training job should take around 2 hours to complete. bq query -- use legacy sql = false \ 'CREATE MODEL bqml tutorial.automl iris model OPTIONS (model type="automl classifier", budget hours=1, input label cols=["species"]) AS SELECT EXCEPT(multiplier) FROM bigquery-public-data.ml datasets.iris, unnest(GENERATE ARRAY(1, 10)) as multiplier;' Export the model Export the model to a Cloud Storage bucket using the bq command-line tool .

