---
title: "Perform anomaly detection with a multivariate time-series forecasting model\
  \ \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/time-series-anomaly-detection-tutorial
knowledge_key: corpus
source_id: site-docs-reference-required-11
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/managing-datasets
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/time-series-anomaly-detection-tutorial
  title: "Perform anomaly detection with a multivariate time-series forecasting model\
    \ \_|\_ BigQuery \_|\_ Google Cloud Documentation"
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
Stay organized with collections
Save and categorize content based on your preferences.
Perform anomaly detection with a multivariate time-series
forecasting model
This tutorial shows you how to do the following tasks:
Create an
ARIMA_PLUS_XREG time series forecasting model .
Detect anomalies in the time series data by running the
ML.DETECT_ANOMALIES function
against the model.
This tutorial uses the following tables from the public
epa_historical_air_quality dataset, which contains daily PM 2.5, temperature,
and wind speed information collected from multiple US cities:
epa_historical_air_quality.pm25_nonfrm_daily_summary
epa_historical_air_quality.wind_daily_summary
epa_historical_air_quality.temperature_daily_summary
Required permissions
To create the dataset, you need the bigquery.datasets.create
IAM permission.
To create the model, you need the following permissions:
bigquery.jobs.create
bigquery.models.create
bigquery.models.getData
bigquery.models.updateData
To run inference, you need the following permissions:
bigquery.models.getData
bigquery.jobs.create
For more information about IAM roles and permissions in
BigQuery, see
Introduction to IAM .
Costs
In this document, you use the following billable components of Google Cloud:
BigQuery: You incur costs for the data you
process in BigQuery.
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
For more information, see BigQuery pricing .
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
Enable the BigQuery API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
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
Prepare the training data
The PM2.5, temperature, and wind speed data are in separate tables.
Create the bqml_tutorial.seattle_air_quality_daily table of training data
by combining the data in these public tables.
bqml_tutorial.seattle_air_quality_daily contains the following columns:
date : the date of the observation
PM2.5 : the average PM2.5 value for each day
wind_speed : the average wind speed for each day
temperature : the highest temperature for each day
The new table has daily data from August 11, 2009 to January 31, 2022.
Go to the BigQuery page.
Go to BigQuery
In the SQL editor pane, run the following SQL statement:
CREATE TABLE `bqml_tutorial.seattle_air_quality_daily`
AS
WITH
pm25_daily AS (
SELECT
avg ( arithmetic_mean ) AS pm25 , date_local AS date
FROM
`bigquery-public-data.epa_historical_air_quality.pm25_nonfrm_daily_summary`
WHERE
city_name = 'Seattle'
AND parameter_name = 'Acceptable PM2.5 AQI & Speciation Mass'
GROUP BY date_local
),
wind_speed_daily AS (
SELECT
avg ( arithmetic_mean ) AS wind_speed , date_local AS date
FROM
`bigquery-public-data.epa_historical_air_quality.wind_daily_summary`
WHERE
city_name = 'Seattle' AND parameter_name = 'Wind Speed - Resultant'
GROUP BY date_local
),
temperature_daily AS (
SELECT
avg ( first_max_value ) AS temperature , date_local AS date
FROM
`bigquery-public-data.epa_historical_air_quality.temperature_daily_summary`
WHERE
city_name = 'Seattle' AND parameter_name = 'Outdoor Temperature'
GROUP BY date_local
)
SELECT
pm25_daily . date AS date , pm25 , wind_speed , temperature
FROM pm25_daily
JOIN wind_speed_daily USING ( date )
JOIN temperature_daily USING ( date )
Create the model
Create a multivariate time series model, using the data from
bqml_tutorial.seattle_air_quality_daily as training data.
Go to the BigQuery page.
Go to BigQuery
In the SQL editor pane, run the following SQL statement:
CREATE OR REPLACE MODEL `bqml_tutorial.arimax_model`
OPTIONS (
model_type = 'ARIMA_PLUS_XREG' ,
auto_arima = TRUE ,
time_series_data_col = 'temperature' ,
time_series_timestamp_col = 'date'
)
AS
SELECT
*
FROM
`bqml_tutorial.seattle_air_quality_daily`
WHERE
date "2023-02-01" ;
The query takes several seconds to complete, after which the model
arimax_model appears in the bqml_tutorial dataset and can be accessed
in the Explorer pane.
Because the query uses a CREATE MODEL statement to create a model, there
are no query results.
Perform anomaly detection on historical data
Run anomaly detection against the historical data that you used to train the
model.
Go to the BigQuery page.
Go to BigQuery
In the SQL editor pane, run the following SQL statement:
SELECT
*
FROM
ML . DETECT_ANOMALIES (
MODEL `bqml_tutorial.arimax_model` ,
STRUCT ( 0.6 AS anomaly_prob_threshold )
)
ORDER BY
date ASC ;
The results look similar to the following:
+-------------------------+-------------+------------+--------------------+--------------------+---------------------+
| date | temperature | is_anomaly | lower_bound | upper_bound | anomaly_probability |
+--------------------------------------------------------------------------------------------------------------------+
| 2009-08-11 00:00:00 UTC | 70.1 | false | 67.647370742988727 | 72.552629257011262 | 0 |
+--------------------------------------------------------------------------------------------------------------------+
| 2009-08-12 00:00:00 UTC | 73.4 | false | 71.7035428351283 | 76.608801349150838 | 0.20478819992561115 |
+--------------------------------------------------------------------------------------------------------------------+
| 2009-08-13 00:00:00 UTC | 64.6 | true | 67.740408724826068 | 72.6456672388486 | 0.945588334903206 |
+-------------------------+-------------+------------+--------------------+--------------------+---------------------+
Perform anomaly detection on new data
Run anomaly detection on the new data that you generate.
Go to the BigQuery page.
Go to BigQuery
In the SQL editor pane, run the following SQL statement:
SELECT
*
FROM
ML . DETECT_ANOMALIES (
MODEL `bqml_tutorial.arimax_model` ,
STRUCT ( 0.6 AS anomaly_prob_threshold ),
(
SELECT
*
FROM
UNNEST (
[
STRUCT<date TIMESTAMP , pm25 FLOAT64 , wind_speed FLOAT64 , temperature FLOAT64 >
( '2023-02-01 00:00:00 UTC' , 8.8166665 , 1.6525 , 44.0 ),
( '2023-02-02 00:00:00 UTC' , 11.8354165 , 1.558333 , 40.5 ),
( '2023-02-03 00:00:00 UTC' , 10.1395835 , 1.6895835 , 46.5 ),
( '2023-02-04 00:00:00 UTC' , 11.439583500000001 , 2.0854165 , 45.0 ),
( '2023-02-05 00:00:00 UTC' , 9.7208335 , 1.7083335 , 46.0 ),
( '2023-02-06 00:00:00 UTC' , 13.3020835 , 2.23125 , 43.5 ),
( '2023-02-07 00:00:00 UTC' , 5.7229165 , 2.377083 , 47.5 ),
( '2023-02-08 00:00:00 UTC' , 7.6291665 , 2.24375 , 44.5 ),
( '2023-02-09 00:00:00 UTC' , 8.5208335 , 2.2541665 , 40.5 ),
( '2023-02-10 00:00:00 UTC' , 9.9086955 , 7.333335 , 39.5 )
]
)
)
);
The results look similar to the following:
+-------------------------+-------------+------------+--------------------+--------------------+---------------------+------------+------------+
| date | temperature | is_anomaly | lower_bound | upper_bound | anomaly_probability | pm25 | wind_speed |
+----------------------------------------------------------------------------------------------------------------------------------------------+
| 2023-02-01 00:00:00 UTC | 44.0 | true | 36.89918003713138 | 41.8044385511539 | 0.88975675709801583 | 8.8166665 | 1.6525 |
+----------------------------------------------------------------------------------------------------------------------------------------------+
| 2023-02-02 00:00:00 UTC | 40.5 | false | 34.439946284051572 | 40.672021330796483 | 0.57358239699845348 | 11.8354165 | 1.558333 |
+--------------------------------------------------------------------------------------------------------------------+-------------------------+
| 2023-02-03 00:00:00 UTC | 46.5 | true | 33.615139992931191 | 40.501364463964549 | 0.97902867696346974 | 10.1395835 | 1.6895835 |
+-------------------------+-------------+------------+--------------------+--------------------+---------------------+-------------------------+
Clean up
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
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
