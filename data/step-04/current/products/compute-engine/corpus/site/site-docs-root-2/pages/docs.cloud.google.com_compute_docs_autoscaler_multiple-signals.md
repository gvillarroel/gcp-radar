---
title: "Using an autoscaling policy with multiple signals \_|\_ Compute Engine \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/autoscaler/multiple-signals
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/autoscaler/multiple-signals
  title: "Using an autoscaling policy with multiple signals \_|\_ Compute Engine \_\
    |\_ Google Cloud Documentation"
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
Using an autoscaling policy with multiple signals
Stay organized with collections
Save and categorize content based on your preferences.
When you create an autoscaling policy with multiple signals, the autoscaler
scales based on the signal that provides the largest number of virtual machine
(VM) instances in the managed instance group (MIG). This ensures that there
are always enough VMs to handle your application workloads and lets you
scale applications with multiple possible bottlenecks.
To learn more about the different types of autoscaling signals,
see Autoscaling policy .
Before you begin
Read about autoscaler
fundamentals .
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
How autoscaler handles multiple signals
An autoscaler handles multiple signals by calculating the recommended number of
VMs for each signal and then picking the signal that results in the largest
number of VMs in the MIG.
An autoscaler can handle one signal per metric type except in the case of
Cloud Monitoring metrics and scaling schedules.
You can choose up to 5 autoscaling signals for Cloud Monitoring
metrics and create up to 128 schedules
per MIG. For example, you can create an autoscaler that
uses up to 1 CPU utilization signal, up to 1 load balancing signal, up to 5
custom metric signals, and up to 128 scaling schedules.
For example, you can define an autoscaler with all of the following
signals:
cpuUtilization with target of 0.8
loadBalancingUtilization with target of 0.6
customMetricUtilization for metric1 with target of 1000
customMetricUtilization for metric2 with target of 2000
scalingSchedules
A minimum of 6 VMs every Saturday and Sunday at 12:00 AM for 24 hours
A minimum of 15 VMs every Monday through Friday at 9:00 AM for 8 hours
In this example, suppose the autoscaler measures the following average
utilization values for a MIG that contains 10 VMs
at the time of measurement:
0.5 for CPU utilization
0.4 load balancing utilization
1100 for metric1
2700 for metric2
Using the preceding values, the autoscaler calculates the recommended number of
VMs based on each signal:
7 VMs based on CPU utilization
7 VMs based on load balancing utilization
11 VMs based on metric1
14 VMs based on metric2
6 VMs every Saturday and Sunday for the entire day based on the first scaling schedule
15 VMs every Monday through Friday from 9:00 AM to 5:00 PM based on the second scaling schedule
The autoscaler picks the signal that results in the largest number of VMs in the
MIG and sets the MIG's
recommended size
to that value. In this case, the autoscaler resizes the MIG
to 15 VMs if the second schedule is currently active or to 14 VMs otherwise.
Create an autoscaler with multiple signals
Creating an autoscaler with multiple signals is slightly different depending
on whether you are using the Google Cloud console, gcloud CLI,
or REST.
Permissions required for this task
To perform this task, you must have the following
permissions :
To create a new autoscaler for an existing MIG:
compute.autoscalers.create on the project
compute.instanceGroupManagers.use on the MIG
To edit an existing autoscaler:
compute.autoscalers.update on the project
Console
In the Google Cloud console, go to the Instance groups page.
Go to Instance groups
Click the name of a MIG from the list.
Click Edit .
Click Group size & autoscaling to expand the section.
In the Autoscaling mode list, make sure that
On: add and remove instances to the group is selected.
In the Minimum number of instances field, enter the minimum number
of VMs that you want for this MIG. The minimum size of this MIG is
always maintained regardless of its autoscaling signals.
In the Maximum number of instances field, enter the maximum number
of VMs that you want for this MIG. The maximum size of this MIG is never
exceeded regardless of the recommended size generated by its autoscaling
signals.
For each
metric-based autoscaling signal
that you want to add, click Add a signal .
To create an autoscaling signal based on average CPU utilization,
in the Signal type list, select CPU utilization . Then, enter
a Target CPU utilization and click Done .
For more information, see
Scaling based on CPU utilization .
To create an autoscaling signal based on HTTP load balancing serving
capacity, in the Signal type list, select
HTTP load balancing utilization . Then, enter a Target HTTP load balancing utilization and
click Done . For more information, see
Scaling based on load balancing serving capacity .
To create an autoscaling signal based on Cloud Monitoring metrics,
in the Signal type list, select Cloud Monitoring metric . Then,
complete the remaining fields and click Done . For more
information, see
Scaling based on Cloud Monitoring metrics .
For each schedule-based autoscaling signal that you want to add, in the
Autoscaling schedules section, click Manage .
Click Create schedule .
In the Create scaling schedule pane, complete the required
fields, and then click Save .
In the Scaling schedules pane, click Done .
For more information, see
Scaling based on schedules .
In the Initialization period section, enter the number of seconds
that your application needs to initialize. This period lets your VMs
finish initializing before the autoscaler considers its usage data
reliable. For more information, see
Initialization period .
Optional: to enable scale-in controls, in the Scale-in controls
section, select the Enable scale-in controls checkbox. For more
information, see
scale-in controls
Click Save .
gcloud
To create an autoscaler with multiple signals, use the
set-autoscaling command .
Pass in multiple signal specifications using their respective
command-line flags.
For example, the following command creates
an autoscaler that uses CPU utilization, load balancing serving capacity,
two custom metrics, and one scaling schedule. The
--max-num-replicas and --min-num-replicas flags restrict how big
or small the MIG can get.
gcloud compute instance-groups managed set-autoscaling MIG_NAME \
--target-cpu-utilization=0.8 \
--target-load-balancing-utilization=0.6 \
--custom-metric-utilization metric= PATH_TO_CUSTOM_METRIC_1 ,utilization-target=1000.0,utilization-target-type=GAUGE \
--custom-metric-utilization metric= PATH_TO_CUSTOM_METRIC_2 ,utilization-target=2000.0,utilization-target-type=DELTA_PER_SECOND \
--set-schedule=workday-capacity \
--schedule-cron="30 8 * * Mon-Fri" \
--schedule-duration-sec=30600 \
--schedule-min-required-replicas=10 \
--schedule-description="Have at least 10 VMs every Monday through Friday from 8:30 AM to 5 PM UTC" \
--min-num-replicas=1 \
--max-num-replicas=50
Replace the following:
MIG_NAME : the name of a MIG.
PATH_TO_CUSTOM_METRIC_1 and
PATH_TO_CUSTOM_METRIC_2 : Optional: the paths to
custom metrics with a format similar to
custom.cloudmonitoring.googleapis.com/path/to/metric1 and
custom.cloudmonitoring.googleapis.com/path/to/metric2 . For more
information, see Custom metrics .
With the exception of the custom metric flags, you can only pass in one flag
maximum for each metric type per gcloud command. For custom metrics, you
can provide multiple custom metrics in a single command by repeating
the --custom-metric-utilization flag.
For more information about how to configure the flags for each type of
autoscaling signal, see the following pages:
Scaling based on CPU utilization
Scaling based on load balancing serving capacity
Scaling based on Cloud Monitoring metrics
Scaling based on schedules
REST
To create an autoscaler, use the
autoscalers.insert method
for a zonal MIG or the
regionAutoscalers.insert method
for a regional MIG.
For example, the following request creates an
autoscaler that uses CPU utilization, load balancing
serving capacity, two custom metrics, and two scaling schedules. The
maxNumReplicas and minNumReplicas fields restrict how big or
small the MIG can get.
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT /zones/ ZONE /autoscalers
{
"autoscalingPolicy" : {
"cpuUtilization":{
"utilizationTarget": 0.8
},
"loadBalancingUtilization":{
"utilizationTarget": 0.6
},
"customMetricUtilizations":[
{
"metric": " PATH_TO_CUSTOM_METRIC_1 ",
"utilizationTarget": 1000,
"utilizationTargetType":"GAUGE"
},
{
"metric": " PATH_TO_CUSTOM_METRIC_2 ",
"utilizationTarget": 2000,
"utilizationTargetType": "DELTA_PER_SECOND"
}
],
"scalingSchedules": {
"workday-capacity": {
"minRequiredReplicas": 10,
"schedule": "30 8 * * Mon-Fri",
"durationSec": 30600,
"description": "Have at least 10 VMs every Monday through Friday from 8:30 AM to 5 PM UTC"
},
"january-30-2030-schedule": {
"minRequiredReplicas": 30,
"schedule": "0 0 30 1 * 2030",
"timeZone": "America/New_York",
"durationSec": 86400,
"description": "Schedule a minimum of 30 VMs all day for January 30, 2030"
}
},
"maxNumReplicas": 50,
"minNumReplicas": 1
},
"target": "https://www.googleapis.com/compute/v1/projects/myproject/zones/us-central1-a/instanceGroupManagers/ MIG_NAME ",
"name": " MIG_NAME "
}
Replace the following:
PROJECT : your project id .
ZONE : the zone where your MIG is located.
MIG_NAME : the name of a MIG.
PATH_TO_CUSTOM_METRIC_1 and
PATH_TO_CUSTOM_METRIC_2 : Optional: the paths to
custom metrics with a format similar to
custom.cloudmonitoring.googleapis.com/path/to/metric1 and
custom.cloudmonitoring.googleapis.com/path/to/metric2 . For more
information, see Custom metrics .
As shown in this example, you can provide multiple custom metrics and
scaling schedules in the same request.
For more information about how to configure the fields for each type of
autoscaling signal, see the following pages:
Scaling based on CPU utilization
Scaling based on load balancing serving capacity
Scaling based on Cloud Monitoring metrics
Scaling based on schedules
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
