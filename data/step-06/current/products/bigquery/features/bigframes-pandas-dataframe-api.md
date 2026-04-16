---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.558Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "bigframes.pandas DataFrame API"
feature_slug: "bigframes-pandas-dataframe-api"
latest_feature_date: "2023-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods"
  - "https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model"
  - "https://docs.cloud.google.com/bigquery/docs/dataframes-quickstart"
keywords:
  - "bigframes"
  - "pandas"
  - "dataframe"
  - "provides"
  - "top"
  - "bigquery"
  - "partial"
  - "compatibility"
---

# bigframes.pandas DataFrame API

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Bigframes.pandas provides a DataFrame API on top of BigQuery with partial pandas compatibility.

## Extended Definition

Bigframes.pandas provides a DataFrame API on top of BigQuery with partial pandas compatibility.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods)
- [https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model](https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model)
- [https://docs.cloud.google.com/bigquery/docs/dataframes-quickstart](https://docs.cloud.google.com/bigquery/docs/dataframes-quickstart)

## Supporting Pages

### "Run queries using the BigQuery DataFrames bigframes.pandas APIs \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods)
- Source ID: `site-docs-reference-required-15`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . import bigframes.pandas as bpd Load data from BigQuery query or table = "bigquery-public-data.ml datasets.penguins" bq df = bpd . read gbq ( query or table ) Inspect one of the columns (or series) of the DataFrame: bq df [ "body mass g" ] Compute the mean of this series: average body mass = bq df [ "body mass g" ] . mean () print ( f "average body mass: { average body mass } " ) Find the heaviest species using the groupby operation to calculate the mean body mass g: ( bq df [ "body mass g" ] . groupby ( by = bq df [ "species" ]) . mean () . sort values ( ascending = False ) . head ( 10 ) ) What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- Home Documentation Data analytics BigQuery Samples Run queries using the BigQuery DataFrames bigframes.pandas APIs Stay organized with collections Save and categorize content based on your preferences.
- Use the BigQuery DataFrames bigframes.pandas APIs to perform data analysis via the BigQuery Query engine.
- Explore further For detailed documentation that includes this code sample, see the following: Use BigQuery DataFrames Code sample Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .

### Create an ML model in BigQuery ML by using SQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model](https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up ADC for a local development environment . import bigframes.pandas as bpd Select model you'll use for evaluating. read gbq model loads model data from a BigQuery, but you could also use the model object from the previous steps. model = bpd . read gbq model ( your model id , # For example: "bqml tutorial.sample model", ) The filters parameter limits the number of tables scanned by the query.
- For more information, see Set up ADC for a local development environment . import bigframes.pandas as bpd Select model you'll use for predicting. read gbq model loads model data from BigQuery, but you could also use the model object from the previous steps. model = bpd . read gbq model ( your model id , # For example: "bqml tutorial.sample model", ) The filters parameter limits the number of tables scanned by the query.
- For more information, see Set up ADC for a local development environment . import bigframes.pandas as bpd Select model you'll use for predicting. read gbq model loads model data from BigQuery, but you could also use the model object from the previous steps. model = bpd . read gbq model ( your model id , # For example: "bqml tutorial.sample model", ) The filters parameter limits the number of tables scanned by the query.
- For more information, see Set up ADC for a local development environment . from bigframes.ml.linear model import LogisticRegression import bigframes.pandas as bpd Start by selecting the data you'll use for training. read gbq accepts either a SQL query or a table ID.

### Try BigQuery DataFrames \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/dataframes-quickstart](https://docs.cloud.google.com/bigquery/docs/dataframes-quickstart)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Add the following code to the code cell: import bigframes.pandas as bpd Set BigQuery DataFrames options Note: The project option is not required in all environments.
- Set the ordering mode to "strict" (default) for more pandas compatibility. bpd . options . bigquery . ordering mode = "partial" Create a DataFrame from a BigQuery table query or table = "bigquery-public-data.ml datasets.penguins" df = bpd . read gbq ( query or table ) Efficiently preview the results using the .peek() method. df . peek () Modify the bpd.options.bigquery.project = your gcp project id line to specify your Google Cloud project ID.
- Create a new code cell in the notebook and add the following code: Use the DataFrame just as you would a pandas DataFrame, but calculations happen in the BigQuery query engine instead of the local system. average body mass = df [ "body mass g" ] . mean () print ( f "average body mass: { average body mass } " ) Run the code cell.
- On BigQuery Studio, the project ID is automatically detected. bpd . options . bigquery . project = your gcp project id Use "partial" ordering mode to generate more efficient queries, but the order of the rows in DataFrames may not be deterministic if you have not explictly sorted it.

