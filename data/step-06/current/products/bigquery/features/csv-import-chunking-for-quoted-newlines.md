---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.958Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "CSV Import Chunking for Quoted Newlines"
feature_slug: "csv-import-chunking-for-quoted-newlines"
latest_feature_date: "2012-08-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial"
keywords:
  - "quoted newlines in CSV"
  - "quoted newline handling"
  - "CSV import chunking"
  - "chunked CSV import"
  - "load job chunking"
  - "allowQuotedNewlines"
  - "parallel CSV load"
  - "bq load"
---

# CSV Import Chunking for Quoted Newlines

Product: BigQuery
Coverage: LOW

## Step 02 Summary

Added CSV import chunking so large imports with quoted newlines can be processed in parallel via the bq tool or API.

## Extended Definition

Added CSV import chunking so large imports with quoted newlines can be processed in parallel via the bq tool or API.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial](https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial)

## Supporting Pages

### Loading CSV data from Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- For example, you run the bq load command and receive an error: bq load --skip leading rows=1 \ --source format=CSV \ mydataset.mytable \ gs://my-bucket/mytable.csv \ 'Number:INTEGER,Name:STRING,TookOffice:STRING,LeftOffice:STRING,Party:STRING' The error in the output is similar to the following: Waiting on bqjob r5268069f5f49c9bf 0000018632e903d7 1 ... (0s) Current status: DONE BigQuery error in load operation: Error processing job 'myproject:bqjob r5268069f5f49c9bf 0000018632e903d7 1': Error while reading data, error message: Error detected while parsing row starting at position: 1405.
- For more information on the bq load command, see: Command-line reference For more information on partitioned tables, see: Creating partitioned tables For more information on clustered tables, see: Creating and using clustered tables For more information on table encryption, see: Protecting data with Cloud KMS keys To load CSV data into BigQuery, enter the following command: bq --location = location load \ --source format = format \ dataset.table \ path to source \ schema Where: location is your location.
- The schema is defined inline in the format field:data type , field:data type . bq load \ -- source format = CSV \ mydataset . mytable \ gs : // mybucket / mydata . csv \ qtr : STRING , sales : FLOAT , year : STRING Note: When you specify the schema using the bq command-line tool, you cannot include a RECORD ( STRUCT ) type, you cannot include a field description, and you cannot specify the field mode.
- If --skip leading rows is unspecified, the default behavior is to assume the file does not contain headers. bq load \ -- source format = CSV \ -- skip leading rows = 2 mydataset . mytable \ gs : // mybucket / mydata . csv \ ./ myschema . json The following command loads data from gs://mybucket/mydata.csv into an ingestion-time partitioned table named mytable in mydataset .

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Synopsis bq load [ FLAGS ] DESTINATION TABLE SOURCE DATA [ SCHEMA ] Example bq load myDataset.newTable gs://mybucket/info.csv ./info schema.json Flags and arguments The bq load command uses the following flags and arguments: --allow jagged rows={true false} To allow missing trailing optional columns in CSV data, set to true . --preserve ascii control characters={true false} To allow embedded ASCII control characters in CSV data, set to true . --allow quoted newlines={true false} To allow quoted newlines in CSV data, set to true . --autodetect={true false} To enable schema auto-detection for CSV and JSON data, set to true .
- For more information about loading data from Cloud Storage using the bq load command, see the following: Loading Avro data Loading CSV data Loading JSON data Loading ORC data Loading Parquet data Loading data from Datastore exports Loading data from Firestore exports For more information about loading data from a local source using the bq load command, see the following: Loading data from local files . bq ls Use the bq ls command to list objects in a collection.
- For more information about using the bq insert command, see Streaming data into BigQuery . bq load Use the bq load command to load data into a table.

### "Create recommendations based on explicit feedback with a matrix factorization\

- URL: [https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial](https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Call model.predict() to get predicted ratings. import bigframes.bigquery as bbq Load movies movies = bpd . read gbq ( "bqml tutorial.movies" ) Merge the movies df with the previously created predicted df merged df = bpd . merge ( predicted , movies , left on = "item id" , right on = "movie id" ) Separate users and predicted data, setting the index to 'movie id' users = merged df [[ "user id" , "movie id" ]] . set index ( "movie id" ) Take the predicted data and sort it in descending order by 'predicted rating', setting the index to 'movie id' sort data = ( merged df [[ "movie title" , "genre" , "predicted rating" , "movie id" ]] . sort values ( by = "predicted rating" , ascending = False ) . set index ( "movie id" ) ) re-merge the separated dfs by index merged user = sort data . join ( users , how = "outer" ) group the users and set the user id as the index merged user . groupby ( "user id" ) . head ( 5 ) . set index ( "user id" ) . sort index () print ( merged user ) Output: movie title genre predicted rating user id 1 Saving Private Ryan (1998) Action Drama War 5.19326 1 Fargo (1996) Crime Drama Thriller 4.996954 1 Driving Miss Daisy (1989) Drama 4.983671 1 Ben-Hur (1959) Action Adventure Drama 4.877622 1 Schindler's List (1993) Drama War 4.802336 2 Saving Private Ryan (1998) Action Drama War 5.19326 2 Braveheart (1995) Action Drama War 5.174145 2 Gladiator (2000) Action Drama 5.066372 2 On Golden Pond (1981) Drama 5.01198 2 Driving Miss Daisy (1989) Drama 4.983671 Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.
- On the command line, paste in the following query and hit Enter : sed 's/::/@/g' ml-1m/movies.dat > movie titles.csv bq load --source format = CSV --field delimiter = @ \ bqml tutorial.movies movie titles.csv \ movie id:INT64,movie title:STRING,genre:STRING BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- On the command line, paste in the following query and hit Enter : curl -O 'http://files.grouplens.org/datasets/movielens/ml-1m.zip' unzip ml-1m.zip sed 's/::/,/g' ml-1m/ratings.dat > ratings.csv bq load --source format = CSV bqml tutorial.ratings ratings.csv \ user id:INT64,item id:INT64,rating:FLOAT64,timestamp:TIMESTAMP Upload the movie data into the movies table.

