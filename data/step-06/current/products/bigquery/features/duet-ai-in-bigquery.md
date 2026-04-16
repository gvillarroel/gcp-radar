---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.560Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Duet AI in BigQuery"
feature_slug: "duet-ai-in-bigquery"
latest_feature_date: "2023-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini"
keywords:
  - "duet"
  - "ai"
  - "bigquery"
  - "helps"
  - "users"
  - "complete"
  - "generate"
  - "explain"
---

# Duet AI in BigQuery

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Duet AI in BigQuery helps users complete, generate, and explain SQL queries.

## Extended Definition

Duet AI in BigQuery helps users complete, generate, and explain SQL queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial](https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)

## Supporting Pages

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Use BigQuery directly in a notebook Getting started with BigQuery in Deepnote BigQuery with Google OAuth Partner Advantage page Direct link DinMo Solution DinMo Category BI, ML, & Advanced Analytics Description DinMo transforms all customer touch points into high-value audiences and helps users leverage them in all activation platforms without code or engineering in less than 5 minutes.
- Partner references Hightouch BigQuery Source Hightouch for BigQuery documentation Sync data from BigQuery to Segment Partner Advantage page Direct link Incorta Solution Incorta unified data & analytics platform Category ETL & Data Integration Description Incorta is a self-service data analytics platform that helps users gain a deeper understanding of their business and make quick, accurate decisions.
- Partner references Connecting to BigQuery Partner Advantage page Direct link Tellius Solution Tellius Category BI, ML, & Advanced Analytics Description Tellius is an AI-powered modern analytics platform that helps you explore, analyze, and generate insights from petabytes of data easily, at cloud scale, allowing everyone to self-serve analytics in natural language.
- Partner references How to Mix BigQuery On-Demand and Slot Pricing in Practice Anomalo Solution Anomalo Data Quality Category Data Quality, Observability, & FinOps Description Anomalo is a complete data quality platform that automatically detects and explains issues in enterprise data.

### "Generate text by using a Gemini model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- GENERATE TEXT ( MODEL bqml tutorial.gemini model , ( SELECT CONCAT ( " "" Perform sentiment analysis on the following text and return one the following categories: positive, negative: "" " , review ) AS prompt , FROM bigquery-public-data.imdb.reviews LIMIT 5 ), STRUCT ( 0.2 AS temperature , 100 AS max output tokens )); The output is similar to the following: +----------+----------+------------------------------------------------+ title result review +----------+----------+------------------------------------------------+ Quitting Positive This movie is amazing because the fact that...
- CONNECTION ID OPTIONS ( ENDPOINT = 'gemini-2.5-flash' ); Replace the following: LOCATION : the connection location CONNECTION ID : the ID of your BigQuery connection When you view the connection details in the Google Cloud console, this is the value in the last section of the fully qualified connection ID that is shown in Connection ID , for example projects/myproject/locations/connection location/connections/ myconnection The query takes several seconds to complete, after which the model gemini model appears in the bqml tutorial dataset.
- Note: The cloud resource nested object has only one output field - serviceAccountId. resource "google bigquery connection" "default" { connection id = "my cloud resource connection" project = data.google project.default.project id location = "US" cloud resource {} } To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Generic Cinematography and boring, there's really nothing... ... ... ... +--------------+------------------+----------------------------------------+ Perform sentiment analysis Perform sentiment analysis on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.

### "Create recommendations based on explicit feedback with a matrix factorization\

- URL: [https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial](https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Call model.predict() to get predicted ratings. import bigframes.bigquery as bbq Load movies movies = bpd . read gbq ( "bqml tutorial.movies" ) Merge the movies df with the previously created predicted df merged df = bpd . merge ( predicted , movies , left on = "item id" , right on = "movie id" ) Separate users and predicted data, setting the index to 'movie id' users = merged df [[ "user id" , "movie id" ]] . set index ( "movie id" ) Take the predicted data and sort it in descending order by 'predicted rating', setting the index to 'movie id' sort data = ( merged df [[ "movie title" , "genre" , "predicted rating" , "movie id" ]] . sort values ( by = "predicted rating" , ascending = False ) . set index ( "movie id" ) ) re-merge the separated dfs by index merged user = sort data . join ( users , how = "outer" ) group the users and set the user id as the index merged user . groupby ( "user id" ) . head ( 5 ) . set index ( "user id" ) . sort index () print ( merged user ) Output: movie title genre predicted rating user id 1 Saving Private Ryan (1998) Action Drama War 5.19326 1 Fargo (1996) Crime Drama Thriller 4.996954 1 Driving Miss Daisy (1989) Drama 4.983671 1 Ben-Hur (1959) Action Adventure Drama 4.877622 1 Schindler's List (1993) Drama War 4.802336 2 Saving Private Ryan (1998) Action Drama War 5.19326 2 Braveheart (1995) Action Drama War 5.174145 2 Gladiator (2000) Action Drama 5.066372 2 On Golden Pond (1981) Drama 5.01198 2 Driving Miss Daisy (1989) Drama 4.983671 Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.mf explicit OPTIONS ( MODEL TYPE = 'matrix factorization' , FEEDBACK TYPE = 'explicit' , USER COL = 'user id' , ITEM COL = 'item id' , L2 REG = 9.83 , NUM FACTORS = 34 ) AS SELECT user id , item id , rating FROM bqml tutorial.ratings ; The query takes about 10 minutes to complete, after which the mf explicit model appears in the Explorer pane.
- Use predict() to get the predicted rating for each movie for 5 users subset = bq df [[ "user id" ]] . head ( 5 ) predicted = model . predict ( subset ) print ( predicted ) Output: predicted rating user id item id rating 0 4.206146 4354 968 4.0 1 4.853099 3622 3521 5.0 2 2.679067 5543 920 2.0 3 4.323458 445 3175 5.0 4 3.476911 5535 235 4.0 Generate recommendations Use the predicted ratings to generate the top five recommended movies for each user.
- Evaluate the model using the score() function model . score ( bq df ) Output: mean absolute error mean squared error mean squared log error median absolute error r2 score explained variance 0.485403 0.395052 0.025515 0.390573 0.68343 0.68343 Get the predicted ratings for a subset of user-item pairs Get the predicted rating for each movie for five users.

