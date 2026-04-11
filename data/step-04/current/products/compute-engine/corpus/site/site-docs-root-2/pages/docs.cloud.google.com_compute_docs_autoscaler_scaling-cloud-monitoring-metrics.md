---
title: "Scale based on Monitoring metrics \_|\_ Compute Engine \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/compute/docs/autoscaler/scaling-cloud-monitoring-metrics
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/autoscaler/scaling-cloud-monitoring-metrics
  title: "Scale based on Monitoring metrics \_|\_ Compute Engine \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Guides
Send feedback
Scale based on Monitoring metrics
Stay organized with collections
Save and categorize content based on your preferences.
Autoscaling based on Cloud Monitoring
metrics lets you adjust the capacity needed according to measurements from your
app. When you autoscale a MIG based on a metric, the autoscaler
creates VMs when the metric value increases and deletes VMs when the value
decreases.
For example, you can define how many VMs you need per user count,
latency, or the number of messages in a Pub/Sub subscription.
You can use either the built-in metrics
provided by the Monitoring service, or the
custom metrics that you export from your
application.
This document describes how to autoscale a managed instance group (MIG) based on Monitoring metrics.
You can also autoscale a MIG based on
CPU utilization ,
load balancing serving capacity ,
or schedules .
Before you begin
Read about autoscaler fundamentals .
Read about
Monitoring metrics concepts
used in an autoscaling configuration.
If you want to autoscale based on an
Ops Agent metric ,
install the Ops Agent .
If you haven't already, set up authentication .
Authentication verifies your identity for access to Google Cloud services and APIs. To run
code or samples from a local development environment, you can authenticate to
Compute Engine by selecting one of the following options:
Select the tab for how you plan to use the samples on this page:
Console
When you use the Google Cloud console to access Google Cloud services and
APIs, you don't need to set up authentication.
gcloud
Install the Google Cloud CLI.
After installation,
initialize the Google Cloud CLI by running the following command:
gcloud init
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
Set a default region and zone .
REST
To use the REST API samples on this page in a local development environment, you use the
credentials you provide to the gcloud CLI.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
For more information, see
Authenticate for using REST
in the Google Cloud authentication documentation.
Limitations
Scaling based on Monitoring metrics is restricted by the
limitations for all autoscalers as
well as by the following limitations:
You can configure autoscaling based on up to 5 Monitoring
metrics per MIG.
You can autoscale based on metrics that have INT64 or DOUBLE value types
only. Other value types are
not supported.
You cannot configure the same metric more than once in an autoscaling policy.
Configure autoscaling based on Monitoring metrics
You can use a Monitoring metric value for autoscaling in
two different ways:
Utilization target : If you want the autoscaler to maintain a metric
at a specific value, configure a utilization target .
The autoscaler creates VMs when the metric value is above the target and
deletes VMs when the metric value is below the target. This is useful for
metrics like network traffic, memory or disk usage, or average latency of your
application. The following diagram shows how an autoscaler adds and removes
VMs in response to a metric value to maintain a utilization target.
Single instance assignment : If you want to autoscale based on how
much work is available to assign to each VM,
configure a single instance assignment .
The single instance assignment that you specify represents how much work you
expect each VM to handle. The autoscaler divides the metric value by the
single instance assignment value to calculate how many VMs
are needed. For example, if the metric is equal to 100 and the single instance
assignment is 5, then the autoscaler creates 20 VMs in the MIG.
This is useful for metrics
that reflect the amount of work like Pub/Sub queue length or
batch jobs count. Single instance assignment does not apply to metrics that
come from each VM. The following diagram shows the
proportional relationship between the metric value and the number of VMs when
scaling with single instance assignment.
Autoscale to maintain a metric at a target value
When you want to maintain a metric at a target value, specify a
utilization target. The autoscaler creates VMs when the metric value is above
the target and deletes VMs when the metric value is below the target.
If the metric comes from each VM in your MIG,
then the autoscaler takes the average metric value across all VMs in the MIG
and compares it with the utilization target. For example, if you
want to autoscale using the tcp_connections metric
that gives the number of TCP connections on a VM, then the autoscaler
takes an average number of TCP connections across all VMs in the MIG to compare
with the target. When you use such metrics that originate from a VM, the MIG
cannot scale in to zero because the autoscaler requires at least one VM to
publish a metric value.
If the metric applies to the whole MIG and does not come from the
VMs in your MIG, then the autoscaler compares the metric value with the
utilization target. For example, you can use a
custom metric that measures the latency of your
application. When you use such metrics that apply to the whole MIG, the MIG
can scale in to zero instances , provided that you set the minimum number of
instances to 0 and the necessary conditions
are met.
When your metric has multiple values, apply a filter to autoscale using an
individual value from the metric. For more details about metric filters and
other fields that you can use in your configuration, see
Monitoring metrics concepts .
Permissions required for this task
To perform this task, you must have the following
permissions :
compute.autoscalers.create on the project
compute.instanceGroupManagers.use on the project
Console
In the Google Cloud console, go to the Instance groups page.
Go to Instance groups
If you don't have a managed instance group,
create one .
Otherwise, click the name of a MIG from the list to open
that instance group page.
Click Edit .
Click Group size & autoscaling to expand the section.
If autoscaling configuration doesn't exist, click
Configure autoscaling .
By default, the autoscaling configuration adds a signal based on
CPU utilization . If you don't require this signal, you can edit it
to change the signal type.
In the Autoscaling signals section, if a signal for a Monitoring
metric exists, you can click to edit it, or click Add a signal to add
one.
Set the Signal type to Cloud Monitoring metric .
Click Configure . In the Resource and metric pane that opens, do
the following:
Click Select a metric .
Select the metric that you want to use for autoscaling. You can
filter the metrics based on any keywords—for example, memory,
bytes, disk.
Click Apply . The pane displays a chart that shows the data
from the selected metric.
If you want to use specific data from the metric, add a filter based
on labels as follows:
In the Filters section, click Add a filter .
Select a Label and enter a Value .
Click Done . The chart refreshes to show you the filtered value
of the metric.
Note: The filter project_id= PROJECT_ID is added
by default because you can use the metric values from the resources
in the current project only. If you selected a metric that comes
from each VM ( gce_instance ), then an additional filter
instance_group= MIG_NAME is also added because you
can autoscale based on the metric values from the VMs in the current
MIG only.
To view the aggregated value of metric that will be used to autoscale
your MIG, toggle the Show aggregation in chart button. The chart
refreshes to show the aggregated value.
In the Metric target options for autoscaling section, select
Utilization target .
Provide the following:
Utilization target : Specify the value that the autoscaler must
maintain. This must be a positive number. For example, both
24.5 and 100 are acceptable values.
Utilization target type : Select a target type that corresponds
to the metric's kind of measurement. For accurate comparisons, if
the utilization target is measured per seconds, then use
Delta / second as the target type. Likewise, use
Delta / min for a utilization target measured per minutes.
Gauge : The autoscaler calculates the average value of the
data collected in the last couple of minutes and compares that to
the utilization target.
Delta / min : The autoscaler calculates the average rate of
growth per minute and compares that to the utilization target.
Delta / second : The autoscaler calculates the average rate of
growth per second and compares that to the utilization target.
When you've finished configuring the metric, click Select .
Review the metric details and click Done .
To complete the configuration, click Save .
gcloud
To configure autoscaling based on Monitoring metrics, use the
set-autoscaling command .
Note: If autoscaling is already enabled for a MIG, the
set-autoscaling command
overwrites the existing autoscaler to the new specifications.
Use the following command to autoscale based on a Monitoring
metric with a utilization target.
gcloud compute instance-groups managed set-autoscaling MIG_NAME \
--max-num-replicas= MAX_INSTANCES \
--min-num-replicas= MIN_INSTANCES \
--update-stackdriver-metric= METRIC_URL \
--stackdriver-metric-utilization-target= TARGET_VALUE \
--stackdriver-metric-utilization-target-type= TARGET_TYPE
If your metric has multiple values and you want to use an individual value
for autoscaling, then use the --stackdriver-metric-filter flag as given in
the following command.
gcloud compute instance-groups managed set-autoscaling MIG_NAME \
--max-num-replicas= MAX_INSTANCES \
--min-num-replicas= MIN_INSTANCES \
--update-stackdriver-metric= METRIC_URL \
--stackdriver-metric-utilization-target= TARGET_VALUE \
--stackdriver-metric-utilization-target-type= TARGET_TYPE \
--stackdriver-metric-filter=" METRIC_FILTER "
Replace the following:
MIG_NAME : the MIG in which you want to add an
autoscaler.
MAX_INSTANCES : the maximum number of VMs that the
MIG can have.
MIN_INSTANCES : the minimum number of VMs that the
MIG needs to have.
METRIC_URL : a protocol-free URL of a
Monitoring metric. For example,
compute.googleapis.com/instance/uptime . If you use a custom metric,
it must meet the custom metric requirements .
TARGET_VALUE : the metric value that the autoscaler
attempts to maintain.
TARGET_TYPE : the value type for the metric.
gauge the autoscaler computes the average value of the data
collected in the last couple of minutes and compares that to the
utilization target.
delta-per-minute the autoscaler calculates the average rate of
growth per minute and compares that to the utilization target.
delta-per-second the autoscaler calculates the average rate of
growth per second and compares that to the utilization target.
For accurate comparisons, if you set the utilization target in seconds,
use delta-per-second as the target type. Likewise, use
delta-per-minute for a utilization target in minutes.
METRIC_FILTER : apply a filter to use an individual
value from a metric having multiple values and to specify the
monitored resource type. If you use a metric that comes from each VM, you
don't have to specify the monitored resource type because
gce_instance is
used as default. For other metrics, use resource.type in the filter
expression to specify the monitored resource. To learn more about metric
filter, see Monitoring metrics concepts .
To see a full list of available commands and flags for the
gcloud CLI, see the
gcloud reference .
REST
Note: Although autoscaling is a feature of
managed instance groups, it is a separate API resource. Keep that in mind
when you construct API requests for autoscaling.
To configure autoscaling based on Monitoring metrics for a
zonal MIG, use the autoscalers
resource or, for a regional MIG, use the regionAutoscalers
resource.
Make the following call to autoscale a zonal MIG
based on a Monitoring metric with a utilization target.
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /autoscalers
{
"name": " AUTOSCALER_NAME ",
"target": "zones/ ZONE /instanceGroupManagers/ MIG_NAME ",
"autoscalingPolicy": {
"maxNumReplicas": MAX_INSTANCES ,
"minNumReplicas": MIN_INSTANCES ,
"customMetricUtilizations": [
{
"metric": " METRIC_URL ",
"utilizationTarget": TARGET_VALUE ,
"utilizationTargetType": TARGET_TYPE
}
],
}
}
If your metric has multiple values and you want to use an individual value
for autoscaling, then use the filter parameter as given in the
following API call.
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /autoscalers
{
"name": " AUTOSCALER_NAME ",
"target": "zones/ ZONE /instanceGroupManagers/ MIG_NAME ",
"autoscalingPolicy": {
"maxNumReplicas": MAX_INSTANCES ,
"minNumReplicas": MIN_INSTANCES ,
"customMetricUtilizations": [
{
"metric": " METRIC_URL ",
"utilizationTarget": TARGET_VALUE ,
"utilizationTargetType": TARGET_TYPE ,
"filter": " METRIC_FILTER "
}
],
}
}
Replace the following:
PROJECT_ID : your project ID .
ZONE : the zone where the MIG is located.
AUTOSCALER_NAME : the name of the autoscaler.
MIG_NAME : the MIG in which you want to add an
autoscaler.
MAX_INSTANCES : the maximum number of VMs that the
MIG can have.
MIN_INSTANCES : the minimum number of VMs that the
MIG needs to have.
METRIC_URL : a protocol-free URL of a
Monitoring metric. For example,
compute.googleapis.com/instance/uptime . If you use a custom metric,
it must meet the custom metric requirements .
TARGET_VALUE : the metric value that the autoscaler
attempts to maintain.
TARGET_TYPE : the value type for the metric.
GAUGE : The autoscaler computes the average value of the data
collected in the last couple of minutes and compares that to the
utilization target.
DELTA_PER_MINUTE The autoscaler calculates the average rate of
growth per minute and compares that to the utilization target.
DELTA_PER_SECOND The autoscaler calculates the average rate of
growth per second and compares that to the utilization target. For
accurate comparisons, if you set the utilization target in seconds,
use DELTA_PER_SECOND as the target type. Likewise, use
DELTA_PER_MINUTE for a utilization target in minutes.
METRIC_FILTER : apply a filter to use an individual
value from a metric with multiple values and to specify the
monitored resource type. If you use a metric that comes from each VM, you
don't have to specify the monitored resource type because
gce_instance is
used as default. For other metrics, you must specify the monitored
resource using resource.type selector. To learn more about metric
filter, see Monitoring metrics concepts .
Autoscale based on work available for each VM in a MIG
When you want to autoscale based on the quantity of work that is available
for each VM in a MIG, specify a single instance assignment.
The value of the single instance assignment that you set indicates how
much work you expect each VM to handle. The autoscaler divides the metric value
by the single instance assignment value to calculate how many VMs are needed.
A metric value of 0 indicates that there is no work for your MIG to
complete. If your MIG's minimum number of instances is set to 0 and your
metric value drops to 0 , then the MIG scales in to 0 until the metric value
increases.
When your metric has multiple values, apply a filter to autoscale using an
individual value from the metric. For more details about metric filters and
other fields that you can use in your configuration, see
Monitoring metrics concepts .
Permissions required for this task
To perform this task, you must have the following
permissions :
compute.autoscalers.create on the project
compute.instanceGroupManagers.use on the project
Console
In the Google Cloud console, go to the Instance groups page.
Go to Instance groups
If you don't have a managed instance group,
create one .
Otherwise, click the name of a MIG from the list to open that instance
group page.
Click Edit .
Click Group size & autoscaling to expand the section.
If autoscaling configuration doesn't exist, click
Configure autoscaling .
By default, the autoscaling configuration adds a signal based on
CPU utilization . If you don't require this signal, you can edit it
to change the signal type.
In the Autoscaling signals section, if a signal for a Monitoring
metric exists, you can click to edit it, or click Add a signal to add
one.
Set the Signal type to Cloud Monitoring metric .
Click Configure . In the Resource and metric pane that opens, do
the following:
Click Select a metric .
Select the metric that you want to use for autoscaling. You can
filter the metrics based on any keywords—for example, memory,
bytes, disk.
Click Apply . The pane displays a chart that shows the data
from the selected metric.
If you want to use specific data from the metric, add a filter based
on labels as follows:
In the Filters section, click Add a filter .
Select a Label and enter a Value .
Click Done . The chart refreshes to show you the filtered metric
value.
Note: The filter project_id= PROJECT_ID is added by
default because you can use the metric values from the resources in
the current project only.
To view the aggregated value of metric that will be used to autoscale
your MIG, toggle the Show aggregation in chart button. The chart
refreshes to show the aggregated value.
In the Metric target options for autoscaling section, select
Single VM instance assignment .
Provide a Single instance assignment value that represents the amount
of work to assign to each VM in the MIG.
When you've finished configuring the metric, click Select .
Review the metric details and click Done .
To complete the configuration, click Save .
gcloud
To configure autoscaling based on Monitoring metrics, use the
set-autoscaling command .
Note: If autoscaling is already enabled for a MIG, the
set-autoscaling
command overwrites the existing autoscaler to the new specifications.
In the command, specify the --stackdriver-metric-single-instance-assignment
flag to indicate the amount of work that you expect each VM in the group
to handle.
The following command creates an autoscaler based on work assignment for
each VM.
gcloud compute instance-groups managed set-autoscaling MIG_NAME \
--max-num-replicas= MAX_INSTANCES \
--min-num-replicas= MIN_INSTANCES \
--update-stackdriver-metric= METRIC_URL \
--stackdriver-metric-filter=" METRIC_FILTER " \
--stackdriver-metric-single-instance-assignment= INSTANCE_ASSIGNMENT
Replace the following:
MIG_NAME : the name of the MIG to autoscale.
MAX_INSTANCES : the maximum number of VMs that the
MIG can have.
MIN_INSTANCES : the minimum number of VMs that the
MIG needs to have.
METRIC_URL : a protocol-free URL of a
Monitoring metric. For example,
compute.googleapis.com/instance_group/size . If you use a custom metric,
it must meet the custom metric requirements .
METRIC_FILTER : apply a filter to use an individual
value from a metric with multiple values and to specify the
monitored resource type. To learn more about metric filter, see
Monitoring metrics concepts .
INSTANCE_ASSIGNMENT : the amount of work to assign
to each VM instance in
the MIG.
REST
Note: Although autoscaling is a feature of managed instance groups,
autoscalers
are a separate API resource. Keep that in mind when you construct API
requests for autoscaling.
To configure autoscaling based on Monitoring metrics for a
zonal MIG, use the autoscalers
resource or, for a regional MIG, use the regionAutoscalers
resource.
Use the singleInstanceAssignment parameter to specify the amount of work
that you expect each VM to handle.
For example, make the following call to create an autoscaler that scales a
zonal MIG based on the instance assignment.
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /autoscalers
{
"name": " AUTOSCALER_NAME ",
"target": "zones/ ZONE /instanceGroupManagers/ MIG_NAME ",
"autoscalingPolicy": {
"maxNumReplicas": MAX_INSTANCES ,
"minNumReplicas": MIN_INSTANCES ,
"customMetricUtilizations": [
{
"metric": " METRIC_URL ",
"filter": " METRIC_FILTER ",
"singleInstanceAssignment": INSTANCE_ASSIGNMENT
}
],
}
}
Replace the following:
PROJECT_ID : your project ID .
ZONE : the zone where the MIG is located.
AUTOSCALER_NAME : the name of the autoscaler.
MIG_NAME : the name of the MIG to autoscale.
MAX_INSTANCES : the maximum number of VMs that the
MIG can have.
MIN_INSTANCES : the minimum number of VMs that the
MIG needs to have.
METRIC_URL : a protocol-free URL of a
Monitoring metric. For example,
compute.googleapis.com/instance_group/size . If you use a custom metric,
it must meet the custom metric requirements .
METRIC_FILTER : apply a filter to use an individual
value from a metric with multiple values and to specify the
monitored resource type. To learn more about metric filter, see
Monitoring metrics concepts .
INSTANCE_ASSIGNMENT : the amount of work to assign
to each VM instance in the MIG.
Examples for autoscaling based on metrics
This section provides some examples of metrics used for autoscaling. For a
complete list of metrics, see Google Cloud metrics .
Autoscale based on a custom metric
There might be a situation when the metric providing a relevant signal does not
represent a total amount of available work or another resource applicable to the
group, but instead an average, a percentile, or some
other statistical property. For this example, assume that you scale based on the
group's average processing latency.
Assume the following setup:
A zonal MIG named our-instance-group is assigned to perform a
particular task. The group is located in zone us-central1-a .
You have a
Monitoring custom metric
that exports a value that you would like to maintain at a particular level. For
this example, assume the metric represents the average latency of processing
queries assigned to the group.
The custom metric is named:
custom.googleapis.com/example_average_latency .
The custom metric has a label with a key named group_name and value
equal to the MIG's name, our-instance-group .
The custom metric exports data for the
global monitored resource ,
that is, it is not associated with any specific VM.
You have determined that when the metric value is above some specific value,
you need to add more VMs to the group to handle the load, while when it
is below that value, you can free up some resources. You want the autoscaler to
gradually add or remove VMs at a rate that is proportional to how much the
metric is above or below the target. For this example, assume that you have
determined your target value to be 250 delta/sec .
You can configure autoscaling for the group using a utilization
target of 250 , which represents the rate of change of the metric value that
the autoscaler will attempt to maintain:
Console
In the Google Cloud console, go to the Instance groups page.
Go to Instance groups
Click the name of your MIG from the list to open
the instance group overview page.
Click Edit .
Click Group size & autoscaling to expand the section.
If autoscaling configuration doesn't exist, click
Configure autoscaling .
By default, the autoscaling configuration adds a signal based on
CPU utilization . If you don't require this signal, you can edit it
to change the signal type.
In the Autoscaling signals section, if a signal for a Monitoring
metric exists, you can click to edit it, or click Add a signal to add
one.
Set the Signal type to Cloud Monitoring metric .
Click Configure . The Resource and metric pane opens.
Click Select a metric .
Choose your metric from Global > Custom metrics .
Click Apply .
In the Filters section, do the following:
Click Add a filter .
In the Label drop-down, select group_name .
In the Value field, provide our-instance-group .
Click Done . The chart refreshes to show the filtered value from
the metric.
In the Metric target options for autoscaling section, do the
following:
Select Utilization target .
Enter the utilization target value as 250.
Set the utilization target type to Delta / sec .
After you've configured the metric, click Select .
Review the metric details and then click Done .
When you've finished, click Save .
gcloud
gcloud compute instance-groups managed set-autoscaling our-instance-group \
--zone=us-central1-a \
--max-num-replicas=50 \
--min-num-replicas=0 \
--update-stackdriver-metric= custom.googleapis.com/example_average_latency \
--stackdriver-metric-filter= "metric.labels.group_name = \"our-instance-group\" AND resource.type = \"global\"" \
--stackdriver-metric-utilization-target=250 \
--stackdriver-metric-utilization-target-type=delta-per-second
REST
POST https://compute.googleapis.com/compute/v1/projects/my-project/zones/us-central1-a/autoscalers
{
"name": "our-instance-group-autoscaler",
"target": "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-a/instanceGroupManagers/our-instance-group",
"autoscalingPolicy": {
"maxNumReplicas": 50,
"minNumReplicas": 0,
"customMetricUtilizations": [
{
"filter": "metric.labels.group_name=\"our-instance-group\" AND resource.type = \"global\"" ,
"utilizationTargetType": "delta-per-second",
"utilizationTarget": 250.0,
"metric": "custom.googleapis.com/example_average_latency"
}
]
}
}
Autoscale based on unacknowledged messages in Pub/Sub
To configure autoscaling based on unacknowledged messages in a
Pub/Sub
subscription, use the subscription/num_undelivered_messages metric
provided by pubsub
and filter by the subscription ID .
The subscription/num_undelivered_messages metric exports the total number of
messages in the subscription, including messages that are being
processed but that are not yet acknowledged. Using a metric that does not
include the messages being processed is not recommended because such a metric
can drop-down to 0 when there is still work being done, which prompts
autoscaling to scale in and possibly interrupt the actual work.
If you don't have a subscription, you can create a pull , push , or BigQuery subscription
before you configure autoscaling.
Console
In the Google Cloud console, go to the Instance groups page.
Go to Instance groups
Click the name of your MIG from the list to open
the instance group overview page.
Click Edit .
Click Group size & autoscaling to expand the section.
If autoscaling configuration doesn't exist, click
Configure autoscaling .
By default, the autoscaling configuration adds a signal based on
CPU utilization . If you don't require this signal, you can edit it
to change the signal type.
In the Autoscaling signals section, if a signal for a Monitoring
metric exists, you can click to edit it, or click Add a signal to add
one.
Set the Signal type to Cloud Pub/Sub queue .
Select a Topic . If you want a new topic,
click Create a topic to create one .
Select the Subscription based on which you want to autoscale your
MIG. If you want a new subscription, click
Create a subscription to create one .
In the Number of messages to assign to each VM field, specify the
number of unacknowledged messages that you expect each VM to handle.
Click Done .
When you've finished, click Save .
gcloud
gcloud compute instance-groups managed set-autoscaling MIG_NAME \
--max-num-replicas= MAX_INSTANCES \
--min-num-replicas= MIN_INSTANCES \
--update-stackdriver-metric= pubsub.googleapis.com/subscription/num_undelivered_messages \
--stackdriver-metric-filter= "resource.type=\"pubsub_subscription\" AND resource.labels.subscription_id=\" SUBSCRIPTION_ID \"" \
--stackdriver-metric-single-instance-assignment= NUMBER_OF_MESSAGES_TO_ASSIGN_TO_EACH_VM
REST
To configure autoscaling for a zonal MIG, use the
autoscalers resource or, for
a regional MIG, use the regionAutoscalers
resource.
For example, make the following call to create an autoscaler for a zonal MIG.
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /autoscalers
{
"name": " AUTOSCALER_NAME ",
"target": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instanceGroupManagers/ MIG_NAME ",
"autoscalingPolicy": {
"maxNumReplicas": MAX_INSTANCES ,
"minNumReplicas": MIN_INSTANCES ,
"customMetricUtilizations": [
{
"singleInstanceAssignment": NUMBER_OF_MESSAGES_TO_ASSIGN_TO_EACH_VM ,
"filter": "resource.type = \"pubsub_subscription\" AND resource.labels.subscription_id=\" SUBSCRIPTION_ID \"" ,
"metric": "pubsub.googleapis.com/subscription/num_undelivered_messages"
}
]
}
}
Autoscale based on incoming network traffic
To configure autoscaling based on the incoming network traffic to VMs in your
MIG, use the instance/network/received_bytes_count metric provided by
compute .
Console
In the Google Cloud console, go to the Instance groups page.
Go to Instance groups
Click the name of your MIG from the list to open
the instance group overview page.
Click Edit .
Click Group size & autoscaling to expand the section.
If autoscaling configuration doesn't exist, click
Configure autoscaling .
By default, the autoscaling configuration adds a signal based on
CPU utilization . If you don't require this signal, you can edit it
to change the signal type.
In the Autoscaling signals section, if a signal for a Monitoring
metric exists, you can click to edit it, or click Add a signal to add
one.
Set the Signal type to Cloud Monitoring metric .
Click Configure . The Resource and metric pane opens.
Click Select a metric .
Select VM Instance > Instance > Received bytes
( compute.googleapis.com/instance/network/received_bytes_count ).
Click Apply .
In the Metric target options for autoscaling section, do the
following:
Make sure that Utilization target is selected.
Enter a utilization target value.
Set a utilization target type.
After you've configured the metric, click Select .
Review the metric details and then click Done .
When you've finished, click Save .
gcloud
gcloud compute instance-groups managed set-autoscaling MIG_NAME \
--max-num-replicas= MAX_INSTANCES \
--min-num-replicas= MIN_INSTANCES \
--update-stackdriver-metric= compute.googleapis.com/instance/network/received_bytes_count \
--stackdriver-metric-utilization-target= TARGET_VALUE \
--stackdriver-metric-utilization-target-type= TARGET_TYPE
REST
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /autoscalers
{
"name": " AUTOSCALER_NAME ",
"target": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instanceGroupManagers/ MIG_NAME ",
"autoscalingPolicy": {
"maxNumReplicas": MAX_INSTANCES ,
"minNumReplicas": MIN_INSTANCES ,
"customMetricUtilizations": [
{
"utilizationTargetType": " TARGET_TYPE ",
"utilizationTarget": TARGET_VALUE ,
"metric": "compute.googleapis.com/instance/network/received_bytes_count"
}
]
}
}
Autoscale based on memory usage
To configure autoscaling based on the percent of used memory,
specify the percent_used metric provided by the
memory Ops Agent metrics. You
should filter the
metric by state to use only the used
memory state. If you don't specify the filter, then the autoscaler takes the
sum of memory usage by all memory states labeled as buffered , cached ,
free , slab , and used .
Note: The memory/percent_used metric is an Ops Agent metric .
You must install the Ops Agent before you
configure autoscaling based on this metric.
Console
In the Google Cloud console, go to the Instance groups page.
Go to Instance groups
Click the name of your MIG from the list to open
the instance group overview page.
On the instance group overview page, click Edit .
Click Group size & autoscaling to expand the section.
If autoscaling configuration doesn't exist, click
Configure autoscaling .
By default, the autoscaling configuration adds a signal based on
CPU utilization . If you don't require this signal, you can edit it
to change the signal type.
In the Autoscaling signals section, if a signal for a Monitoring
metric exists, you can click to edit it, or click Add a signal to add
one.
Set the Signal type to Cloud Monitoring metric .
Click Configure . The Resource and metric pane opens.
Click Select a metric .
Select VM Instance > Memory > Memory utilization
( agent.googleapis.com/memory/percent_used ).
Click Apply .
In the Filters section, do the following:
Click Add a filter .
In the Label drop-down, choose the state metric label.
In the Value field, type used .
Click Done .
In the Metric target options for autoscaling section, do the
following:
Make sure that Utilization target is selected.
Enter a utilization target value.
Set the utilization target type to Gauge .
After you've configured the metric, click Select .
Review the metric details and then click Done .
When you've finished, click Save .
gcloud
gcloud compute instance-groups managed set-autoscaling MIG_NAME \
--max-num-replicas= MAX_INSTANCES \
--min-num-replicas= MIN_INSTANCES \
--update-stackdriver-metric= agent.googleapis.com/memory/percent_used \
--stackdriver-metric-filter= "metric.labels.state = \"used\""
--stackdriver-metric-utilization-target-type=gauge \
--stackdriver-metric-utilization-target= TARGET_VALUE \
REST
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /autoscalers
{
"name": " AUTOSCALER_NAME ",
"target": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instanceGroupManagers/ MIG_NAME ",
"autoscalingPolicy": {
"maxNumReplicas": MAX_INSTANCES ,
"minNumReplicas": MIN_INSTANCES ,
"customMetricUtilizations": [
{
"filter": "metric.labels.state=\"used\"",
"utilizationTargetType": "GAUGE",
"utilizationTarget": TARGET_VALUE ,
"metric": "agent.googleapis.com/memory/percent_used"
}
]
}
}
Autoscale based on disk I/O
To configure autoscaling based on the total count of disk
I/O operations, use the operation_count metric provided by the
disk Ops Agent metrics.
If you want to scale
based on read or write operations, filter the metric using the direction
label. Similarly, to scale based on disk operations in a particular device, use
the device label in the metric filter.
Note: The disk/operation_count metric is an Ops Agent metric .
You must install the Ops Agent before you
configure autoscaling based on this metric.
Console
In the Google Cloud console, go to the Instance groups page.
Go to Instance groups
Click the name of your MIG from the list to open
the instance group overview page.
On the instance group overview page, click Edit .
Click Group size & autoscaling to expand the section.
If autoscaling configuration doesn't exist, click
Configure autoscaling .
By default, the autoscaling configuration adds a signal based on
CPU utilization . If you don't require this signal, you can edit it
to change the signal type.
In the Autoscaling signals section, if a signal for a Monitoring
metric exists, you can click to edit it, or click Add a signal to add
one.
Set the Signal type to Cloud Monitoring metric .
Click Configure . The Resource and metric pane opens.
Click Select a metric .
Select VM instance > Disk > Disk operations
( agent.googleapis.com/disk/operation_count ).
Click Apply .
In the Metric target options for autoscaling section, do the
following:
Make sure that Utilization target is selected.
Enter a utilization target value.
Set a utilization target type.
After you've configured the metric, click Select .
Review the metric details and then click Done .
When you've finished, click Save .
gcloud
gcloud compute instance-groups managed set-autoscaling MIG_NAME \
--max-num-replicas= MAX_INSTANCES \
--min-num-replicas= MIN_INSTANCES \
--update-stackdriver-metric= agent.googleapis.com/disk/operation_count \
--stackdriver-metric-utilization-target= TARGET_VALUE \
--stackdriver-metric-utilization-target-type= TARGET_TYPE
REST
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /autoscalers
{
"name": " AUTOSCALER_NAME ",
"target": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instanceGroupManagers/ MIG_NAME ",
"autoscalingPolicy": {
"maxNumReplicas": MAX_INSTANCES ,
"minNumReplicas": MIN_INSTANCES ,
"customMetricUtilizations": [
{
"utilizationTargetType": " TARGET_TYPE ",
"utilizationTarget": TARGET_VALUE ,
"metric": "agent.googleapis.com/disk/operation_count"
}
]
}
}
Autoscale based on size of another MIG
You can autoscale a MIG based on the size of another MIG within the same
project. For example, you can have multi-tier application with a frontend MIG
that autoscales based on a load balancer
and a backend MIG that autoscales proportionally to the frontend. Use a single
instance assignment to define how many backend VMs are needed for every frontend
VM. If you need 1 backend VM for every 4 frontend VMs, then set the single
instance assignment to 4 in the backend MIG.
To autoscale a MIG ( MIG_1 ) based on the size of
another MIG ( MIG_2 ), use the instance_group/size metric
provided by compute .
Console
In the Google Cloud console, go to the Instance groups page.
Go to Instance groups
Click the name of your MIG from the list to open
the instance group overview page.
On the instance group overview page, click Edit .
Click Group size & autoscaling to expand the section.
If autoscaling configuration doesn't exist, click
Configure autoscaling .
By default, the autoscaling configuration adds a signal based on
CPU utilization . If you don't require this signal, you can edit it
to change the signal type.
In the Autoscaling signals section, if a signal for a Monitoring
metric exists, you can click to edit it, or click Add a signal to add
one.
Set the Signal type to Cloud Monitoring metric .
Click Configure . The Resource and metric pane opens.
Click Select a metric
Select Instance Group > Instance_group > Instance group size
( compute.googleapis.com/instance_group/size ).
Click Apply .
In the Filters section, do the following:
Click Add a filter .
In the Label drop-down, choose the instance_group_name
resource label.
In the Value field, type the name of the MIG ( MIG_2 )
based on which you want to autoscale your MIG.
Click Done .
In the Metric target options for autoscaling section, do the
following:
Select Single VM instance assignment .
In the Single VM instance assignment field, enter 4 , if you
want to keep 1 VM in your current MIG ( MIG_1 ) for every
4 VMs in MIG_2 .
After you've configured the metric, click Select .
Review the metric details and then click Done .
When you've finished, click Save .
gcloud
gcloud compute instance-groups managed set-autoscaling MIG_1 \
--max-num-replicas= MAX_INSTANCES \
--min-num-replicas= MIN_INSTANCES \
--update-stackdriver-metric= compute.googleapis.com/instance_group/size \
--stackdriver-metric-filter= "resource.type = \"instance_group\" AND resource.labels.location = \" ZONE|REGION \" AND resource.labels.instance_group_name = \" MIG_2 \"" \
--stackdriver-metric-single-instance-assignment=4
REST
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /autoscalers
{
"name": " AUTOSCALER_NAME ",
"target": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instanceGroupManagers/ MIG_1 ",
"autoscalingPolicy": {
"maxNumReplicas": MAX_INSTANCES ,
"minNumReplicas": MIN_INSTANCES ,
"customMetricUtilizations": [
{
"singleInstanceAssignment": 4,
"filter": "resource.type = \"instance_group\" AND resource.labels.location = \" ZONE|REGION \" AND resource.labels.instance_group_name = \" MIG_2 \"" ,
"metric": "compute.googleapis.com/instance_group/size"
}
]
}
}
Autoscale based on a metric from a different project
You can autoscale a MIG based on metrics from a different project. To allow
your project to access metrics from another project, you must
add the other project to the metric scope
of your current project.
After you configure the metric scope, you can use metrics from the other
project by specifying the metric's project ID in your filter using the
resource.labels.project_id label.
When using metrics from a different project, the following limitations also
apply:
You can only configure the metric using the gcloud CLI or
REST. The Google Cloud console isn't supported.
You can only use those metrics that apply to the whole MIG. Metrics that come
from each VM in your MIG are not supported.
The following example shows how to autoscale a zonal
MIG ( MIG_1 ) based on the size of another MIG
( MIG_2 ) located in a different project.
gcloud
gcloud compute instance-groups managed set-autoscaling MIG_1 \
--max-num-replicas= MAX_INSTANCES \
--min-num-replicas= MIN_INSTANCES \
--update-stackdriver-metric= compute.googleapis.com/instance_group/size \
--stackdriver-metric-filter= "resource.type = \"instance_group\" AND resource.labels.project_id = \" PROJECT_ID_OF_MIG_2 \" AND resource.labels.instance_group_name = \" MIG_2 \"" \
--stackdriver-metric-single-instance-assignment=1 \
--zone= ZONE
Replace the following:
MIG_1 : the name of the MIG to autoscale.
MAX_INSTANCES : the maximum number of VMs that the
MIG can have.
MIN_INSTANCES : the minimum number of VMs that the
MIG needs to have.
PROJECT_ID_OF_MIG_2 : the ID of the project
containing the metric.
MIG_2 : the name of the MIG providing the metric.
ZONE : the zone containing the MIG to autoscale.
REST
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID_OF_MIG_1 /zones/ ZONE /autoscalers
{
"name": " AUTOSCALER_NAME ",
"target": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID_OF_MIG_1 /zones/ ZONE /instanceGroupManagers/ MIG_1 ",
"autoscalingPolicy": {
"maxNumReplicas": MAX_INSTANCES ,
"minNumReplicas": MIN_INSTANCES ,
"customMetricUtilizations": [
{
"singleInstanceAssignment": 1,
"filter": "resource.type = \"instance_group\" AND resource.labels.project_id = \" PROJECT_ID_OF_MIG_2 \" AND resource.labels.instance_group_name = \" MIG_2 \"" ,
"metric": "compute.googleapis.com/instance_group/size"
}
]
}
}
Replace the following:
PROJECT_ID_OF_MIG_1 : the ID of the project
containing the MIG to autoscale.
ZONE : the zone containing the MIG to autoscale.
AUTOSCALER_NAME : the name of the autoscaler that
you're configuring.
MIG_1 : the name of the MIG to autoscale.
MAX_INSTANCES : the maximum number of VMs that the
MIG can have.
MIN_INSTANCES : the minimum number of VMs that the
MIG needs to have.
PROJECT_ID_OF_MIG_2 : the ID of the project
containing the metric.
MIG_2 : the name of the MIG providing the metric.
Monitoring metrics concepts
This section provides a brief description of the
Monitoring metrics concepts that you need to know while
configuring autoscaling based on Monitoring metrics.
Metric identifier or Metric URL : The metric name in the form of a
protocol-free URL. You can find URLs for built-in metrics URL from the
metric list .
For example, the URL of a Pub/Sub metric that gives the number
of unacknowledged
messages is pubsub.googleapis.com/subscription/num_undelivered_messages .
Monitored resource type : The source of metric value. You can find
the monitored resource type of a metric from the
metric list .
For example, the monitored resource type of the
pubsub.googleapis.com/subscription/num_undelivered_messages metric is
pubsub_subscription . For more
details about each monitored resource type, see
Monitored resource types .
Metric filter : When your metric has multiple values, a filter enables the
autoscaler to identify a specific metric value from the set of possible metric
values. Use the labels defined on a metric
and a monitored resource type to
filter the values. If you want to explore your metric values with different
filters, you can try them in the
metrics explorer .
For example, the following screenshot shows
pubsub.googleapis.com/subscription/num_undelivered_messages metric that
gives the number of unacknowledged messages in all available subscriptions.
Each line on the chart indicates a subscription.
Without a filter, the autoscaler takes the sum of metric values from all
subscriptions. To autoscale based on a
single subscription, apply a filter on the subscription_id label defined for
the pubsub_subscription . The following screenshot shows a single
subscription after applying the filter.
Metric filtering requirements
When you use a metric that has multiple values (categorized using labels ),
you can apply a filter to autoscale
based on specific values from the metric.
If the filter returns multiple values, then the values are added together.
For best results, create a filter that is specific enough to return a single
value.
Autoscaler filtering for metrics is compatible with the
Monitoring filter syntax . The
filter must meet the following requirements:
You must wrap the value of a filter in double quotes.
You must use the direct equality comparison operator ( = ).
You must use the AND operator to join different filter criteria.
For example:
--stackdriver-metric-filter="resource.type=\"pubsub_subscription\" AND
resource.labels.subscription_id=\"our-subscription\"" .
You must use direct values. You cannot use wildcards or functions in the
filter.
For example, you cannot use resource.labels.zone = starts_with("us-") .
You cannot use resource metadata labels
that store metadata about a monitored resource.
For a full reference of metric labels and monitored resource labels that you can
filter on, see metrics list
and monitored resources list .
Custom metric requirements
To use custom metrics, you must first create a custom metric that is associated
with one of the monitored-resource types .
A custom metric used for autoscaling must have the following properties:
If the autoscaling configuration uses data from each VM in the group, set up
instances in your MIG so that each VM exports the custom metric. The exported
values from each VM must be associated with a
gce_instance
monitored resource, which contains the following labels:
zone with the name of the zone the instance is in.
instance_id with the value of unique numerical ID assigned to the
VM.
The metric must export data at least every 60 seconds. If you export data
more often than every 60 seconds, the autoscaler can respond
to load changes more quickly. If you export your data less frequent than every
60 seconds, the autoscaler might not respond to load changes quickly enough.
The metric must export data that is of INT64 or DOUBLE value type.
For information about creating a custom metric, see
Using custom metrics .
What's next
Learn about managing autoscalers .
Learn how autoscalers make decisions .
Learn how to use
multiple autoscaling signals
to scale your group.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
