---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.905Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery public dataset: EPA Historical Air Quality Data"
feature_slug: "bigquery-public-dataset-epa-historical-air-quality-data"
latest_feature_date: "2017-05-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/time-series-anomaly-detection-tutorial"
keywords:
  - "bigquery-public-data epa historical air quality"
  - "BigQuery environmental dataset EPA"
  - "EPA Historical Air Quality public dataset"
  - "EPA Historical Air Quality Data"
  - "EPA Historical Air Quality"
  - "EPA Air Quality Data"
  - "historical air quality dataset"
---

# BigQuery public dataset: EPA Historical Air Quality Data

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery introduced the EPA Historical Air Quality Data as a new public dataset.

## Extended Definition

BigQuery introduced the EPA Historical Air Quality Data as a new public dataset.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/time-series-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/time-series-anomaly-detection-tutorial)

## Supporting Pages

### "Forecast a single time series with a multivariate model \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 54
- Re-rank relevance: MODERATE
- Re-rank rationale: The tutorial uses this public dataset as its example source, which provides contextual evidence of the dataset’s availability but not its introduction details.

Evidence snippets:
- You also create the following columns to use as input variables for the model: date : the date of the observation pm25 the average PM2.5 value for each day wind speed : the average wind speed for each day temperature : the highest temperature for each day In the following GoogleSQL query, the FROM bigquery-public-data.epa historical air quality. daily summary clause indicates that you are querying the daily summary tables in the epa historical air quality dataset.
- This table combines columns from several tables in the bigquery-public-data.epa historical air quality dataset in order to provide daily data weather data.
- This tutorial uses data from the bigquery-public-data.epa historical air quality public dataset .
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE TABLE bqml tutorial.seattle air quality daily AS WITH pm25 daily AS ( SELECT avg ( arithmetic mean ) AS pm25 , date local AS date FROM bigquery-public-data.epa historical air quality.pm25 nonfrm daily summary WHERE city name = 'Seattle' AND parameter name = 'Acceptable PM2.5 AQI & Speciation Mass' GROUP BY date local ), wind speed daily AS ( SELECT avg ( arithmetic mean ) AS wind speed , date local AS date FROM bigquery-public-data.epa historical air quality.wind daily summary WHERE city name = 'Seattle' AND parameter name = 'Wind Speed - Resultant' GROUP BY date local ), temperature daily AS ( SELECT avg ( first max value ) AS temperature , date local AS date FROM bigquery-public-data.epa historical air quality.temperature daily summary WHERE city name = 'Seattle' AND parameter name = 'Outdoor Temperature' GROUP BY date local ) SELECT pm25 daily . date AS date , pm25 , wind speed , temperature FROM pm25 daily JOIN wind speed daily USING ( date ) JOIN temperature daily USING ( date ); Visualize the input data Before creating the model, you can optionally visualize your input time series data to get a sense of the distribution.

### "Perform anomaly detection with a multivariate time-series forecasting model\

- URL: [https://docs.cloud.google.com/bigquery/docs/time-series-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/time-series-anomaly-detection-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 30
- Re-rank relevance: WEAK
- Re-rank rationale: The page references EPA historical air quality tables only as sample source data, not as a feature definition or launch announcement.

Evidence snippets:
- This tutorial uses the following tables from the public epa historical air quality dataset, which contains daily PM 2.5, temperature, and wind speed information collected from multiple US cities: epa historical air quality.pm25 nonfrm daily summary epa historical air quality.wind daily summary epa historical air quality.temperature daily summary Required permissions To create the dataset, you need the bigquery.datasets.create IAM permission.
- Go to BigQuery In the SQL editor pane, run the following SQL statement: CREATE TABLE bqml tutorial.seattle air quality daily AS WITH pm25 daily AS ( SELECT avg ( arithmetic mean ) AS pm25 , date local AS date FROM bigquery-public-data.epa historical air quality.pm25 nonfrm daily summary WHERE city name = 'Seattle' AND parameter name = 'Acceptable PM2.5 AQI & Speciation Mass' GROUP BY date local ), wind speed daily AS ( SELECT avg ( arithmetic mean ) AS wind speed , date local AS date FROM bigquery-public-data.epa historical air quality.wind daily summary WHERE city name = 'Seattle' AND parameter name = 'Wind Speed - Resultant' GROUP BY date local ), temperature daily AS ( SELECT avg ( first max value ) AS temperature , date local AS date FROM bigquery-public-data.epa historical air quality.temperature daily summary WHERE city name = 'Seattle' AND parameter name = 'Outdoor Temperature' GROUP BY date local ) SELECT pm25 daily . date AS date , pm25 , wind speed , temperature FROM pm25 daily JOIN wind speed daily USING ( date ) JOIN temperature daily USING ( date ) Create the model Create a multivariate time series model, using the data from bqml tutorial.seattle air quality daily as training data.

