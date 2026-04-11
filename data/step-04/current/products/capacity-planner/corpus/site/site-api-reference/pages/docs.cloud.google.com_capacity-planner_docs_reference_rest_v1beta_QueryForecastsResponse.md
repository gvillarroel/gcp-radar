---
title: "QueryForecastsResponse \_|\_ Capacity Planner \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/capacity-planner/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse
  title: "QueryForecastsResponse \_|\_ Capacity Planner \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Capacity Planner
Reference
Send feedback
QueryForecastsResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Forecast
JSON representation
Bounds
The QueryForecasts response.
JSON representation
{
"forecasts" : [
{
object ( Forecast )
}
]
}
Fields
forecasts[]
object ( Forecast )
The forecasts that match the request.
Forecast
A collection of data points that describes the predicted time-varying values of a resource.
JSON representation
{
"name" : string ,
"timeSeries" : {
object ( TimeSeries )
} ,
"forecastType" : enum ( ForecastType ) ,
"bounds" : enum ( Bounds ) ,
"predictionInterval" : enum ( PredictionInterval ) ,
"aggregationMethod" : enum ( AggregationMethod )
}
Fields
name
string
The resource name of the connection in the form of: projects/{projectId}/locations/{locationId}/forecasts/{forecast_id} or organizations/{organization_id}/locations/{locationId}/forecasts/{forecast_id} or folders/{folder_id}/locations/{locationId}/forecasts/{forecast_id}
timeSeries
object ( TimeSeries )
The collection of data points that represent the predicted values. Note that some of these values may be in the past (if, for example, the forecast was created in the past and predicted values for the present day).
forecastType
enum ( ForecastType )
The type of forecast.
bounds
enum ( Bounds )
The bounds represented by this forecast time series.
predictionInterval
enum ( PredictionInterval )
The prediction interval represented by the time series.
aggregationMethod
enum ( AggregationMethod )
Aggregation Method of the historical usage for which the forecast is generated
Bounds
The bounds of the forecast time series.
Enums
BOUNDS_UNSPECIFIED
No bounds is specified.
LOWER_BOUND
The time series represents the upper bound of the forecast.
MEDIAN
The time series represents the median expected forecast value.
UPPER_BOUND
The time series represents the lower bound of the forecast.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-29 UTC."],[],[]]
