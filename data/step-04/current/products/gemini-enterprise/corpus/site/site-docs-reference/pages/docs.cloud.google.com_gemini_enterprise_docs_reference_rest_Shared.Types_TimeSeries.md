---
title: "TimeSeries \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/Shared.Types/TimeSeries
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/enterprise/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/Shared.Types/TimeSeries
  title: "TimeSeries \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Note: This documentation applies to the Standard, Plus, and Frontline editions of Gemini Enterprise. For information about the Business edition, see the Gemini Enterprise - Business edition Help Center .
Home
Documentation
AI and ML
Gemini Enterprise
Reference
Send feedback
TimeSeries
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
A collection of data points that describes the time-varying values of a metric. A time series is identified by a combination of a fully-specified monitored resource and a fully-specified metric. This type is used for both listing and creating time series.
JSON representation
{
"metric" : {
object ( Metric )
} ,
"resource" : {
object ( MonitoredResource )
} ,
"metadata" : {
object ( MonitoredResourceMetadata )
} ,
"metricKind" : enum ( MetricKind ) ,
"valueType" : enum ( ValueType ) ,
"points" : [
{
object ( Point )
}
] ,
"unit" : string ,
"description" : string
}
Fields
metric
object ( Metric )
The associated metric. A fully-specified metric used to identify the time series.
resource
object ( MonitoredResource )
The associated monitored resource. Custom metrics can use only certain monitored resource types in their time series data. For more information, see Monitored resources for custom metrics .
metadata
object ( MonitoredResourceMetadata )
Output only. The associated monitored resource metadata. When reading a time series, this field will include metadata labels that are explicitly named in the reduction. When creating a time series, this field is ignored.
metricKind
enum ( MetricKind )
The metric kind of the time series. When listing time series, this metric kind might be different from the metric kind of the associated metric if this time series is an alignment or reduction of other time series.
When creating a time series, this field is optional. If present, it must be the same as the metric kind of the associated metric. If the associated metric's descriptor must be auto-created, then this field specifies the metric kind of the new descriptor and must be either GAUGE (the default) or CUMULATIVE .
valueType
enum ( ValueType )
The value type of the time series. When listing time series, this value type might be different from the value type of the associated metric if this time series is an alignment or reduction of other time series.
When creating a time series, this field is optional. If present, it must be the same as the type of the data in the points field.
points[]
object ( Point )
The data points of this time series. When listing time series, points are returned in reverse time order.
When creating a time series, this field must contain exactly one point and the point's type must be the same as the value type of the associated metric. If the associated metric's descriptor must be auto-created, then the value type of the descriptor is determined by the point's type, which must be BOOL , INT64 , DOUBLE , or DISTRIBUTION .
unit
string
The units in which the metric value is reported. It is only applicable if the valueType is INT64 , DOUBLE , or DISTRIBUTION . The unit defines the representation of the stored metric values. This field can only be changed through CreateTimeSeries when it is empty.
description
string
Input only. A detailed description of the time series that will be associated with the google.api.MetricDescriptor for the metric. Once set, this field cannot be changed through CreateTimeSeries.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-08 UTC."],[],[]]
