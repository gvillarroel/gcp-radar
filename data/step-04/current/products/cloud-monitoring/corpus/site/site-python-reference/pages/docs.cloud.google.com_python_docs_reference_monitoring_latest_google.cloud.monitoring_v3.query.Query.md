---
title: "Class Query (2.30.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.query.Query
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/monitoring/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.query.Query
  title: "Class Query (2.30.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Class Query (2.30.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.30.0 (latest)
2.29.1
2.28.0
2.27.2
2.26.0
2.25.0
2.24.0
2.23.1
2.22.2
2.21.0
2.20.0
2.19.4
2.18.0
2.17.0
2.16.0
2.15.1
2.14.2
2.13.0
2.12.0
2.11.3
2.10.1
2.9.2
2.8.0
2.7.0
2.6.0
2.5.2
2.4.2
2.3.0
2.2.1
2.1.0
2.0.1
1.1.2
1.0.0
0.36.2
0.35.0
0.34.0
0.33.0
0.32.0
Query (
client ,
project ,
metric_type = "compute.googleapis.com/instance/cpu/utilization" ,
end_time = None ,
days = 0 ,
hours = 0 ,
minutes = 0 ,
)
Query object for retrieving metric data.
Parameters
Name
Description
client
:class: google.cloud.monitoring_v3.gapic. metric_service_client.MetricServiceClient
The client to use.
project
str
The project ID or number.
metric_type
str
The metric type name. The default value is :data: Query.DEFAULT_METRIC_TYPE <google.cloud.monitoring.query.Query.DEFAULT_METRIC_TYPE> , but please note that this default value is provided only for demonstration purposes and is subject to change. See the supported metrics _.
end_time
datetime.datetime
(Optional) The end time (inclusive) of the time interval for which results should be returned, as a datetime object. The default is the start of the current minute. The start time (exclusive) is determined by combining the values of days , hours , and minutes , and subtracting the resulting duration from the end time. It is also allowed to omit the end time and duration here, in which case select_interval must be called before the query is executed.
days
int
The number of days in the time interval.
hours
int
The number of hours in the time interval.
minutes
int
The number of minutes in the time interval.
Properties
filter
The filter string.
This is constructed from the metric type, the resource type, and
selectors for the group ID, monitored projects, resource labels,
and metric labels.
metric_type
The metric type name.
Methods
__deepcopy__
__deepcopy__ ( memo )
Create a deepcopy of the query object.
The client attribute is copied by reference only.
Parameter
Name
Description
memo
dict
the memo dict to avoid excess copying in case the object is referenced from its member.
Returns
Type
Description
Query
The new query object.
align
align ( per_series_aligner , seconds = 0 , minutes = 0 , hours = 0 )
Copy the query and add temporal alignment.
If per_series_aligner is not :data: Aligner.ALIGN_NONE , each time
series will contain data points only on the period boundaries.
Example::
from google.cloud import monitoring
query = query . align (
monitoring.Aggregation.Aligner.ALIGN_MEAN, minutes=5)
It is also possible to specify the aligner as a literal string::
query = query.align('ALIGN_MEAN', minutes=5)
Parameters
Name
Description
per_series_aligner
str or Aligner
The approach to be used to align individual time series. For example: :data: Aligner.ALIGN_MEAN . See Aligner and the descriptions of the supported aligners _.
seconds
int
The number of seconds in the alignment period.
minutes
int
The number of minutes in the alignment period.
hours
int
The number of hours in the alignment period.
Returns
Type
Description
Query
The new query object. .. _supported aligners: https://cloud.google.com/monitoring/api/ref_v3/rest/v3/ projects.timeSeries/list#Aligner
as_dataframe
as_dataframe ( label = None , labels = None )
Return all the selected time series as a pandas dataframe.
Note:
Use of this method requires that you have pandas installed.
Generate a dataframe with a multi-level column header including
# the resource type and all available resource and metric labels.
# This can be useful for seeing what labels are available.
dataframe = query.as_dataframe()
# Generate a dataframe using a particular label for the column
# names.
dataframe = query.as_dataframe(label='instance_name')
# Generate a dataframe with a multi-level column header.
dataframe = query.as_dataframe(labels=['zone', 'instance_name'])
# Generate a dataframe with a multi-level column header, assuming
# the metric is issued by more than one type of resource.
dataframe = query.as_dataframe(
labels=['resource_type', 'instance_id'])
Parameters
Name
Description
label
str
(Optional) The label name to use for the dataframe header. This can be the name of a resource label or metric label (e.g., "instance_name" ), or the string "resource_type" .
labels
list of strings, or None
A list or tuple of label names to use for the dataframe header. If more than one label name is provided, the resulting dataframe will have a multi-level column header. Providing values for both label and labels is an error.
Returns
Type
Description
pandas.DataFrame
A dataframe where each column represents one time series.
iter
iter ( headers_only = False , page_size = None )
Yield all time series objects selected by the query.
The generator returned iterates over
xref_TimeSeries objects
containing points ordered from oldest to newest.
Note that the Query object itself is an iterable, such that
the following are equivalent::
for timeseries in query:
...
for timeseries in query.iter():
...
Parameters
Name
Description
headers_only
bool
Whether to omit the point data from the time series objects.
page_size
int
(Optional) The maximum number of points in each page of results from this request. Non-positive values are ignored. Defaults to a sensible value set by the API.
Exceptions
Type
Description
`ValueError
if the query time interval has not been specified.
reduce
reduce ( cross_series_reducer , * group_by_fields )
Copy the query and add cross-series reduction.
Cross-series reduction combines time series by aggregating their
data points.
For example, you could request an aggregated time series for each
combination of project and zone as follows::
from google.cloud import monitoring
query = query . reduce (monitoring.Aggregation.Reducer.REDUCE_MEAN,
'resource.project_id', 'resource.zone')
Parameters
Name
Description
cross_series_reducer
str or Reducer
The approach to be used to combine time series. For example: :data: Reducer.REDUCE_MEAN . See Reducer and the descriptions of the supported reducers _.
group_by_fields
strs
Fields to be preserved by the reduction. For example, specifying just "resource.zone" will result in one time series per zone. The default is to aggregate all of the time series into just one.
Returns
Type
Description
Query
The new query object. .. _supported reducers: https://cloud.google.com/monitoring/api/ref_v3/rest/v3/ projects.timeSeries/list#Reducer
select_group
select_group ( group_id )
Copy the query and add filtering by group.
Example::
query = query.select_group('1234567')
Parameter
Name
Description
group_id
str
The ID of a group to filter by.
Returns
Type
Description
Query
The new query object.
select_interval
select_interval ( end_time , start_time = None )
Copy the query and set the query time interval.
Example::
import datetime
now = datetime.datetime.utcnow()
query = query.select_interval(
end_time=now,
start_time=now - datetime.timedelta(minutes=5))
As a convenience, you can alternatively specify the end time and
an interval duration when you create the query initially.
Parameters
Name
Description
end_time
datetime.datetime
The end time (inclusive) of the time interval for which results should be returned, as a datetime object.
start_time
datetime.datetime
(Optional) The start time (exclusive) of the time interval for which results should be returned, as a datetime object. If not specified, the interval is a point in time.
Returns
Type
Description
Query
The new query object.
select_metrics
select_metrics ( * args , ** kwargs )
Copy the query and add filtering by metric labels.
Examples::
query = query.select_metrics(instance_name='myinstance')
query = query.select_metrics(instance_name_prefix='mycluster-')
A keyword argument <label>=<value> ordinarily generates a filter
expression of the form::
metric.label.<label> = "<value>"
However, by adding "_notequal" to the keyword, you can inequality:
<label>_notequal=<value> generates::
metric.label.<label> != <value>
By adding "_prefix" or "_suffix" to the keyword, you can specify
a partial match.
<label>_prefix=<value> generates::
metric.label.<label> = starts_with("<value>")
<label>_suffix=<value> generates::
metric.label.<label> = ends_with("<value>")
If the label's value type is INT64 , a similar notation can be
used to express inequalities:
<label>_less=<value> generates::
metric.label.<label> < <value>
<label>_lessequal=<value> generates::
metric.label.<label> <= <value>
<label>_greater=<value> generates::
metric.label.<label> > <value>
<label>_greaterequal=<value> generates::
metric.label.<label> >= <value>
Parameter
Name
Description
args
tuple
Raw filter expression strings to include in the conjunction. If just one is provided and no keyword arguments are provided, it can be a disjunction.
Returns
Type
Description
Query
The new query object.
select_projects
select_projects ( * args )
Copy the query and add filtering by monitored projects.
This is only useful if the target project represents a Stackdriver
account containing the specified monitored projects.
Examples::
query = query.select_projects('project-1')
query = query.select_projects('project-1', 'project-2')
Parameter
Name
Description
args
tuple
Project IDs limiting the resources to be included in the query.
Returns
Type
Description
Query
The new query object.
select_resources
select_resources ( * args , ** kwargs )
Copy the query and add filtering by resource labels.
See more documentation at: https://cloud.google.com/monitoring/api/v3/filters#comparisons .
Examples::
query = query.select_resources(zone='us-central1-a')
query = query.select_resources(zone_prefix='europe-')
query = query.select_resources(resource_type='gce_instance')
A keyword argument <label>=<value> ordinarily generates a filter
expression of the form::
resource.label.<label> = "<value>"
However, by adding "_prefix" or "_suffix" to the keyword,
you can specify a partial match.
<label>_prefix=<value> generates::
resource.label.<label> = starts_with("<value>")
<label>_suffix=<value> generates::
resource.label.<label> = ends_with("<value>")
As a special case, "resource_type" is treated as a special
pseudo-label corresponding to the filter object resource.type .
For example, resource_type=<value> generates::
resource.type = "<value>"
See the defined resource types _.
Note:
The label "instance_name" is a metric label,
not a resource label. You would filter on it using
select_metrics(instance_name=...) .
Parameter
Name
Description
args
tuple
Raw filter expression strings to include in the conjunction. If just one is provided and no keyword arguments are provided, it can be a disjunction.
Returns
Type
Description
Query
The new query object. .. _defined resource types: https://cloud.google.com/monitoring/api/v3/monitored-resources
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
