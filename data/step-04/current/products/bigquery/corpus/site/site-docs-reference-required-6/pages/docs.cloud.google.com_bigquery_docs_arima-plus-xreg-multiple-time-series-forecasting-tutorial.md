---
title: "Forecast multiple time series with a multivariate model \_|\_ BigQuery \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial
knowledge_key: corpus
source_id: site-docs-reference-required-6
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/reference/standard-sql
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial
  title: "Forecast multiple time series with a multivariate model \_|\_ BigQuery \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Guides
Send feedback
Forecast multiple time series with a multivariate model
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial teaches you how to use a
multivariate time series model to forecast the future value
for a given column, based on the historical value of multiple input features.
This tutorial forecasts for multiple time series. Forecasted values are
calculated for each time point, for each value in one or more specified columns.
For example, if you wanted to forecast weather and specified a column containing
state data, the forecasted data would contain forecasts for all time points for
State A, then forecasted values for all time points for State B, and so forth.
If you wanted to forecast weather and specified columns containing
state and city data, the forecasted data would contain forecasts for all time
points for State A and City A, then forecasted values for all time points for
State A and City B, and so forth.
This tutorial uses data from the public
bigquery-public-data.iowa_liquor_sales.sales
and
bigquery-public-data.covid19_weathersource_com.postal_code_day_history
tables. The bigquery-public-data.iowa_liquor_sales.sales table contains
liquor sales data collected from multiple cities in the state of Iowa. The
bigquery-public-data.covid19_weathersource_com.postal_code_day_history table
contains historical weather data, such as temperature and humidity, from
around the world.
Before reading this tutorial, we highly recommend that you read
Forecast a single time series with a multivariate model .
Objectives
This tutorial guides you through completing the following tasks:
Creating a time series model to forecast liquor store orders by using the
CREATE MODEL statement .
Retrieving the forecasted order values from the model by using the
ML.FORECAST function .
Retrieving components of the time series, such as seasonality, trend, and
feature attributions, by using the
ML.EXPLAIN_FORECAST function .
You can inspect these time series components in order to explain the
forecasted values.
Evaluate the model's accuracy by using the
ML.EVALUATE function .
Detect anomalies by using the model with the
ML.DETECT_ANOMALIES function .
Costs
This tutorial uses billable components of Google Cloud, including the following:
BigQuery
BigQuery ML
For more information about BigQuery costs, see the
BigQuery pricing page.
For more information about BigQuery ML costs, see
BigQuery ML pricing .
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
BigQuery is automatically enabled in new projects.
To activate BigQuery in a pre-existing project, go to
Enable the BigQuery API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Create a dataset
Create a BigQuery dataset to store your ML model.
Console
In the Google Cloud console, go to the BigQuery page.
Go to the BigQuery page
In the Explorer pane, click your project name.
Click more_vert View actions > Create dataset
On the Create dataset page, do the following:
For Dataset ID , enter bqml_tutorial .
For Location type , select Multi-region , and then select
US .
Leave the remaining default settings as they are, and click
Create dataset .
bq
To create a new dataset, use the
bq mk --dataset command .
Create a dataset named bqml_tutorial with the data location set to US .
bq mk --dataset \
--location=US \
--description "BigQuery ML tutorial dataset." \
bqml_tutorial
Confirm that the dataset was created:
bq ls
API
Call the datasets.insert
method with a defined dataset resource .
{
"datasetReference" : {
"datasetId" : "bqml_tutorial"
}
}
Create a table of input data
Create a table of data that you can use to train and evaluate the model. This
table combines columns from the
bigquery-public-data.iowa_liquor_sales.sales and
bigquery-public-data.covid19_weathersource_com.postal_code_day_history tables
to analyze how weather affects the type and number of items ordered by liquor
stores. You also create the following additional columns that you can use as
input variables for the model:
date : the date of the order
store_number : the unique number of the store that placed the order
item_number : the unique number of the item that was ordered
bottles_sold : the number of bottles ordered of the associated item
temperature : the average temperature at the store location on the order date
humidity : the average humidity at the store location on the order date
Follow these steps to create the input data table:
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
In the query editor, paste in the following query and click Run :
CREATE OR REPLACE TABLE
`bqml_tutorial.iowa_liquor_sales_with_weather` AS
WITH
sales AS (
SELECT
DATE ,
store_number ,
item_number ,
bottles_sold ,
SAFE_CAST ( SAFE_CAST ( zip_code AS FLOAT64 ) AS INT64 ) AS zip_code
FROM
`bigquery-public-data.iowa_liquor_sales.sales` AS sales
WHERE
SAFE_CAST ( zip_code AS FLOAT64 ) IS NOT NULL
),
aggregated_sales AS (
SELECT
DATE ,
store_number ,
item_number ,
ANY_VALUE ( zip_code ) AS zip_code ,
SUM ( bottles_sold ) AS bottles_sold ,
FROM
sales
GROUP BY
DATE ,
store_number ,
item_number
),
weather AS (
SELECT
DATE ,
SAFE_CAST ( postal_code AS INT64 ) AS zip_code ,
avg_temperature_air_2m_f AS temperature ,
avg_humidity_specific_2m_gpkg AS humidity ,
FROM
`bigquery-public-data.covid19_weathersource_com.postal_code_day_history`
WHERE
country = 'US' AND
SAFE_CAST ( postal_code AS INT64 ) IS NOT NULL
)
SELECT
aggregated_sales . date ,
aggregated_sales . store_number ,
aggregated_sales . item_number ,
aggregated_sales . bottles_sold ,
weather . temperature AS temperature ,
weather . humidity AS humidity
FROM
aggregated_sales
LEFT JOIN weather ON aggregated_sales . zip_code = weather . zip_code
AND aggregated_sales . DATE = weather . DATE ;
Create the time series model
Create a time series model to forecast bottles sold for each combination
of store ID and item ID, for each date in the
bqml_tutorial.iowa_liquor_sales_with_weather table prior to
September 1, 2022. Use the store location's average temperature and humidity
on each date as features to evaluate during forecasting. There are about 1
million distinct combinations of item number and store number in the
bqml_tutorial.iowa_liquor_sales_with_weather table, which means there are
1 million different time series to forecast.
Follow these steps to create the model:
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
In the query editor, paste in the following query and click Run :
CREATE
OR REPLACE MODEL `bqml_tutorial.multi_time_series_arimax_model`
OPTIONS (
model_type = 'ARIMA_PLUS_XREG' ,
time_series_id_col = [ 'store_number' , 'item_number' ] ,
time_series_data_col = 'bottles_sold' ,
time_series_timestamp_col = 'date'
)
AS SELECT
*
FROM
`bqml_tutorial.iowa_liquor_sales_with_weather`
WHERE
DATE DATE ( '2022-09-01' );
The query takes approximately 38 minutes to complete, after which
you can access the multi_time_series_arimax_model model. Because the
query uses a CREATE MODEL statement to create a model, you don't see
query results.
Use the model to forecast data
Forecast future time series values by using the ML.FORECAST
function.
In the following GoogleSQL query, the
STRUCT(5 AS horizon, 0.8 AS confidence_level) clause indicates that the
query forecasts 5 future time points, and generates a prediction interval
with an 80% confidence level.
The data signature of the input data for the ML.FORECAST function is
the same as the data signature for the training data that you used to create
the model. The bottles_sold column isn't included in the input, because that
is the data the model is trying to forecast.
Follow these steps to forecast data with the model:
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
In the query editor, paste in the following query and click Run :
SELECT
*
FROM
ML . FORECAST (
model `bqml_tutorial.multi_time_series_arimax_model` ,
STRUCT ( 5 AS horizon , 0.8 AS confidence_level ),
(
SELECT
* EXCEPT ( bottles_sold )
FROM
`bqml_tutorial.iowa_liquor_sales_with_weather`
WHERE
DATE >= DATE ( '2022-09-01' )
)
);
The results should look similar to the following:
The output rows are in order by the store_number value, then by the
item_ID value, then in chronological order by the
forecast_timestamp column value. In time series forecasting, the prediction
interval, as represented by the prediction_interval_lower_bound and
prediction_interval_upper_bound column values, is as important as the
forecast_value column value. The forecast_value value is the middle point
of the prediction interval. The prediction interval depends on the
standard_error and confidence_level column values.
For more information about the output columns, see
ML.FORECAST .
Explain the forecasting results
You can get explainability metrics in addition to forecast data by using the
ML.EXPLAIN_FORECAST function. The ML.EXPLAIN_FORECAST function forecasts
future time series values and also returns all the separate components of the
time series.
Similar to the ML.FORECAST function, the
STRUCT(5 AS horizon, 0.8 AS confidence_level) clause used in the
ML.EXPLAIN_FORECAST function indicates that the query forecasts 30 future
time points and generates a prediction interval with 80% confidence.
The ML.EXPLAIN_FORECAST function provides both historical data and
forecast data. To see only the forecast data, add the time_series_type option
to the query and specify forecast as the option value.
Follow these steps to explain the model's results:
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
In the query editor, paste in the following query and click Run :
SELECT
*
FROM
ML . EXPLAIN_FORECAST (
model `bqml_tutorial.multi_time_series_arimax_model` ,
STRUCT ( 5 AS horizon , 0.8 AS confidence_level ),
(
SELECT
* EXCEPT ( bottles_sold )
FROM
`bqml_tutorial.iowa_liquor_sales_with_weather`
WHERE
DATE >= DATE ( '2022-09-01' )
)
);
The results should look similar to the following:
The output rows are ordered chronologically by the time_series_timestamp
column value.
For more information about the output columns, see
ML.EXPLAIN_FORECAST .
Evaluate forecasting accuracy
Evaluate the forecasting accuracy of the model by running it on data that the
model hasn't been trained on. You can do this by using the ML.EVALUATE
function. The ML.EVALUATE function evaluates each time series independently.
In the following GoogleSQL query, the second SELECT statement
provides the data with the future features, which are used
to forecast the future values to compare to the actual data.
Follow these steps to evaluate the model's accuracy:
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
In the query editor, paste in the following query and click Run :
SELECT
*
FROM
ML . EVALUATE (
model `bqml_tutorial.multi_time_series_arimax_model` ,
(
SELECT
*
FROM
`bqml_tutorial.iowa_liquor_sales_with_weather`
WHERE
DATE >= DATE ( '2022-09-01' )
)
);
The results should look similar to the following:
For more information about the output columns, see
ML.EVALUATE .
Use the model to detect anomalies
Detect anomalies in the training data by using the ML.DETECT_ANOMALIES
function.
In the following query, the STRUCT(0.95 AS anomaly_prob_threshold) clause
causes the ML.DETECT_ANOMALIES function to identify anomalous data points
with a 95% confidence level.
Follow these steps to detect anomalies in the training data:
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
In the query editor, paste in the following query and click Run :
SELECT
*
FROM
ML . DETECT_ANOMALIES (
model `bqml_tutorial.multi_time_series_arimax_model` ,
STRUCT ( 0.95 AS anomaly_prob_threshold )
);
The results should look similar to the following:
The anomaly_probability column in the results identifies the likelihood
that a given bottles_sold column value is anomalous.
For more information about the output columns, see
ML.DETECT_ANOMALIES .
Detect anomalies in new data
Detect anomalies in the new data by providing input data to the
ML.DETECT_ANOMALIES function. The new data must have the same data
signature as the training data.
Follow these steps to detect anomalies in new data:
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
In the query editor, paste in the following query and click Run :
SELECT
*
FROM
ML . DETECT_ANOMALIES (
model `bqml_tutorial.multi_time_series_arimax_model` ,
STRUCT ( 0.95 AS anomaly_prob_threshold ),
(
SELECT
*
FROM
`bqml_tutorial.iowa_liquor_sales_with_weather`
WHERE
DATE >= DATE ( '2022-09-01' )
)
);
The results should look similar to the following:
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
You can delete the project you created.
Or you can keep the project and delete the dataset.
Delete your dataset
Deleting your project removes all datasets and all tables in the project. If you
prefer to reuse the project, you can delete the dataset you created in this
tutorial:
If necessary, open the BigQuery page in the
Google Cloud console.
Go to the BigQuery page
In the navigation, click the bqml_tutorial dataset you created.
Click Delete dataset on the right side of the window.
This action deletes the dataset, the table, and all the data.
In the Delete dataset dialog, confirm the delete command by typing
the name of your dataset ( bqml_tutorial ) and then click Delete .
Delete your project
To delete the project:
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple architectures, tutorials, or quickstarts, reusing projects
can help you avoid exceeding project quota limits.
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
What's next
Learn how to forecast a single time series with a univariate model
Learn how to forecast multiple time series with a univariate model
Learn how to scale a univariate model when forecasting multiple time series over many rows .
Learn how to hierarchically forecast multiple time series with a univariate model
For an overview of BigQuery ML, see Introduction to AI and ML in BigQuery .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
