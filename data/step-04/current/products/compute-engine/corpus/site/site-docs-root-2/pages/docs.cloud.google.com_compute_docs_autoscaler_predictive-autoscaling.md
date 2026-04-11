---
title: "Scaling based on predictions \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/autoscaler/predictive-autoscaling
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/autoscaler/predictive-autoscaling
  title: "Scaling based on predictions \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
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
Scaling based on predictions
Stay organized with collections
Save and categorize content based on your preferences.
You can configure autoscaling for a
managed instance group (MIG)
to automatically add or remove virtual machine (VM) instances based on increases
or decreases in load. However, if your application takes a few minutes or more
to initialize, adding instances in response to real-time changes might not
increase your application's capacity quickly enough. For example, if there's a
large increase in load (like when users first wake up in the morning), some
users might experience delays while your application is initializing on new
instances.
You can use predictive autoscaling to improve response times for applications
with long initialization times and whose workloads vary predictably with daily
or weekly cycles.
When you enable predictive autoscaling, Compute Engine forecasts future
load based on your MIG's history and scales out the MIG in advance of predicted
load, so that new instances are ready to serve when the load arrives. Without
predictive autoscaling, an autoscaler can only scale a group reactively, based
on observed changes in load in real time. With predictive autoscaling enabled,
the autoscaler works with real-time data as well as with historical data to
cover both the current and forecasted load. For more information, see
How predictive autoscaling works
and
Checking if predictive autoscaling is suitable for your workload .
Before you begin
If you want to use the command-line examples in this guide, install the
Google Cloud CLI or
launch Cloud Shell .
Read about autoscaler fundamentals .
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
Pricing
Predictive autoscaling is free of charge. However, if you enable predictive
autoscaling to optimize for availability, you pay for the Compute Engine
resources that your MIG uses.
Note: Depending on your current set up, enabling predictive autoscaling might
increase your costs. Predictive autoscaler starts VM instances earlier, and
might run VMs for a longer period of time. Use predictive autoscaling on MIGs
where you need to improve availability by keeping utilization below the target.
Limitations
Predictive autoscaling works only with CPU utilization as the scaling metric.
Cloud Load Balancing or Cloud Monitoring metrics are not supported.
Compute Engine requires 3 days of CPU-based autoscaling history before
it can generate predictions.
Predictions are based on weekly and daily load patterns.
Compute Engine doesn't predict monthly, annual, or one-time events,
and it doesn't predict load patterns that are shorter than 10 minutes.
You can use schedule-based autoscaling
to request capacity for one-time or other load patterns.
Suitable workloads
Predictive autoscaling works best if your workload meets the following criteria:
Your application takes a long time to initialize—for example, if you configure
an initialization period of more
than 2 minutes.
Your workload varies predictably with daily or weekly cycles.
If your service takes a long time to initialize, your users might experience
service latency after a scale-out event, that is, while the new VMs are
provisioned but not yet serving. Predictive autoscaling takes into account your
application's initialization time and scales out in advance of predicted
increases in usage, helping to ensure that the number of available serving
instances is sufficient for the target utilization.
To preview how predictive autoscaling can affect your group, see
Checking if predictive autoscaling is suitable for your workload .
Enabling and disabling predictive autoscaling
You can enable predictive autoscaling when scaling based on CPU utilization.
For more information about setting up CPU-based autoscaling, see
Scaling based on CPU utilization .
If your MIG has no autoscaler history, it can take 3 days before the
predictive algorithm affects the autoscaler. During this time, the group
scales based on real-time data only. After 3 days, the group starts to scale
using predictions. As more historical load is collected, the predictive
autoscaler better understands your load patterns and its forecasts improve.
Compute Engine uses up to 3 weeks of your MIG's load history to feed the
machine learning model.
Note: Google is continually improving and updating the machine learning
algorithm used by predictive autoscaling.
Permissions required for this task
To perform this task, you must have the following
permissions :
compute.autoscalers.update on the group's autoscaler
compute.instanceGroupManagers.use on the group
Console
In the console, go to the Instance groups page.
Go to Instance groups
From the list, click the name of an existing MIG to open
the group's overview page.
Click Edit .
Click Group size & autoscaling to expand the section and do the
following:
If autoscaling configuration doesn't exist, then configure autoscaling
as follows:
In the Autoscaling section, click Configure autoscaling .
CPU utilization signal is added by default.
Specify the minimum and maximum numbers of instances that you want
the autoscaler to create in this group.
In the Autoscaling signals section, click the CPU utilization
signal.
Modify the Signal type and Target CPU utilization as
needed.
In the Predictive autoscaling section, select
Optimize for availability to enable predictive autoscaling.
Alternatively, if you want to disable the predictive algorithm
and use only the real-time autoscaler, select Off .
Click Done .
If autoscaling based on CPU utilization is already configured, then do
the following:
In the Autoscaling signals section, click the CPU utilization
signal.
In the Predictive autoscaling section, select
Optimize for availability to enable predictive autoscaling.
Click Done .
In the Initialization period section, specify how long it takes for
your application to initialize on a new instance. This setting informs the
predictive autoscaler to scale out further in advance of anticipated load,
so that applications are initialized when the load arrives.
Click Save .
gcloud
When setting or updating a MIG's autoscaler, include the
--cpu-utilization-predictive-method flag with one of the following values:
optimize-availability : to enable the predictive algorithm
none (default): to disable the predictive algorithm
Note: To check if a group has an existing autoscaling policy, and to make a
note of any settings that you want to replicate when using the
set-autoscaling command,
review
your group's existing configuration.
If CPU-based autoscaling is not yet enabled for the group, you must enable it.
You can use the set-autoscaling command
to configure a group's autoscaling policy from scratch. For example, the
following command shows how to configure autoscaling with the following
settings:
Predictive autoscaling enabled.
Target CPU utilization of 75%.
The maximum number of instances set to 20.
An initialization period ( --cool-down-period ) set to 5 minutes. This
setting informs the predictive
autoscaler to scale out 5 minutes in advance of anticipated load, so that
applications are initialized when the load arrives.
gcloud compute instance-groups managed set-autoscaling MIG_NAME \
--cpu-utilization-predictive-method optimize-availability \
--target-cpu-utilization 0.75 \
--max-num-replicas 20 \
--cool-down-period 300
If CPU-based autoscaling is already enabled for the group, use the
update-autoscaling command
to enable the predictive algorithm:
gcloud compute instance-groups managed update-autoscaling MIG_NAME \
--cpu-utilization-predictive-method=optimize-availability
REST
When creating or updating an autoscaler, include the predictiveMethod field
in the request body with one of the following values:
OPTIMIZE_AVAILABILITY : to enable the predictive algorithm
NONE (default): to disable the predictive algorithm
Note: To see if a group has an existing autoscaling policy,
review
your group's existing configuration.
If the group has no existing autoscaling configuration, do the following:
For a regional MIG: call the
regionAutoscalers.insert method
For a zonal MIG: call the
autoscalers.insert method
If the group already has an autoscaling configuration, do the following:
For a regional MIG: call the
regionAutoscalers.patch method
For a zonal MIG: call the
autoscalers.patch method
If CPU-based autoscaling is not yet enabled for the group, you must enable it.
For example, the following request patches an existing autoscaler resource to
enable CPU-based autoscaling with the following settings:
Predictive autoscaling enabled.
Target CPU utilization of 75%.
The maximum number of instances set to 20.
An initialization period ( coolDownPeriodSec ) set to 5 minutes. This
setting informs the predictive
autoscaler to scale out 5 minutes in advance of anticipated load, so that
applications are initialized when the load arrives.
PATCH https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION /autoscalers/
{
"name": " AUTOSCALER_NAME ",
"target": "https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION /instanceGroupManagers/ MIG_NAME ",
"autoscalingPolicy": {
"cpuUtilization": {
"utilizationTarget": 0.75 ,
"predictiveMethod": " OPTIMIZE_AVAILABILITY "
},
"maxNumReplicas": 20 ,
"coolDownPeriodSec": 300
}
}
Checking if predictive autoscaler is enabled
To view a MIG's current autoscaling configuration, see
Getting a MIG's properties .
Configuring predictive autoscaling
For more information about how to configure the target utilization, minimum and
maximum number of instances, and the initialization period, see
Scaling based on CPU utilization .
When you configure these options, the predictive autoscaler works to maintain
all instances at the target utilization level that you set, within the minimum
and maximum bounds of the group, in the same way that a real-time autoscaler
does.
Use the initialization period setting to account for the time it takes for your
application to initialize. This setting influences how far in advance the
predictive autoscaler starts new instances ahead of predicted increase in load,
so that your application is ready to serve when the load arrives.
Checking if predictive autoscaling is suitable for your workload
To see if predictive autoscaling might improve your application's
availability, you can compare the performance of your group's current
CPU-based autoscaling configuration against predictive autoscaling. You don't
need to enable predictive autoscaling in order to make the comparison.
For more information about workloads that are suitable for predictive
autoscaling, see Suitable workloads .
Checking for overloads
Your autoscaled MIG is overloaded when its average CPU utilization exceeds your
target. To check if your autoscaling configuration resulted in overloaded VMs
during the last 7 days, and to see if predictive autoscaling can reduce
overloads, complete the following steps:
In the console, go to the Instance groups page.
Go to Instance groups
Click an existing MIG for which CPU-based autoscaling is configured. The
group's overview page opens.
Click Edit .
Click Group size & autoscaling to expand the section.
In the Autoscaling section, under Autoscaling signals ,
expand the CPU utilization section, then click
See if predictive autoscaling can optimize your availability .
Based on data for the last 7 days, the table shows how many VMs were used
per day and how many VMs were overloaded per day for the following rows:
Current autoscaling configuration : shows how the autoscaler performed
based on the autoscaler's configuration over the last 7 days.
With predictive autoscaling set to "Optimize for availability" : shows
how the autoscaler would have performed if predictive autoscaling was
enabled over the last 7 days.
You can use the "Number of VMs used per day" as a proxy for costs. For
example, to reduce the daily number of overloaded VMs, the predictive autoscaler
might create VMs earlier and run them for longer, which results in additional
charges.
Monitoring and simulating predictive autoscaling
You can visualize the historical size of your group using Cloud Monitoring.
The monitoring graph shows how your autoscaling configuration scaled your group
over time, and it also shows how predictive autoscaling, if enabled, would have
scaled your group.
For groups with predictive autoscaling disabled, you can use this tool to
simulate predictive autoscaling before enabling it.
In the console, go to the Instance groups page.
Go to Instance groups
Click an existing MIG for which CPU-based autoscaling is configured. The
group's overview page opens.
Click Monitoring to see charts related to the group.
In the first chart, click its title and select Predictive autoscaling .
This view shows the group's actual size as well as its predicted size.
You can select a different time range to see more history or zoom in into
a period where demand grew to see how predictive autoscaling affects group
size ahead of forecasted load.
How predictive autoscaling works
Predictive autoscaler forecasts your scaling metric based on the metric's
historical trends. Forecasts are recomputed every few minutes, which lets the
autoscaler rapidly adapt its forecast to very recent changes in load. Predictive
autoscaler needs at least 3 days of history from which to determine a
representative service usage pattern before it can provide predictions.
Compute Engine uses up to 3 weeks of your MIG's load history to feed the
machine learning model.
Predictive autoscaler calculates the number of VMs needed to achieve your
utilization target based on numerous factors, including the following:
The predicted future value of the scaling metric
The current value of the scaling metric
Confidence in past trends, including past variability of the scaling metric
The configured application initialization period, also referred to as the
initialization period
Based on such factors, the predictive autoscaler scales out your group ahead
of anticipated demand.
Figure 1. Comparison of serving VMs with and without predictive autoscaling.
In figure 1, the blue line shows a growing demand for VMs. The black line shows
the autoscaler's response: more VMs are added. However, for applications with
long initialization times, the grey line shows that the added VMs require
additional time before they are ready to serve, which can result in not enough
serving VMs to meet the demand. With predictive autoscaling enabled, the
predicted increase in demand and the long application initialization time are
accounted for: the autoscaler responds by adding VMs earlier, resulting in a
sufficient number of serving VMs. You can configure how far in advance new
instances are added by setting the
initialization period .
Real-time usage data
Predictive autoscaler can't determine a pattern for all future changes in usage
based on historical data, so it works seamlessly with real-time data, too. For
example, an unexpected news event might contribute to a spike in usage that
couldn't have been predicted based on history alone. To handle such
unpredictable changes in load, the predictive autoscaler responds as follows:
It adapts its predictions: Predictions are recalculated constantly, within
minutes, so they adjust to incorporate the latest data. The exact timing of
adjustments to new patterns depends on, among other things, how repeatable
the new pattern is and how large the difference is between the new pattern and
past predictions.
It yields to real-time data: The autoscaler's recommended number of instances,
based on real-time values of the metric, is always sufficient to meet the
group's target utilization. If the current value of a real-time signal is
greater than the prediction, the current value of the signal takes priority
over the prediction. As a result, MIGs that have predictive autoscaling
enabled always have more availability than MIGs that don't.
Figure 2. Two charts show how predictions adapt to actual CPU usage.
In figure 2, the dotted yellow line shows the prediction at t 1 . But
the actual CPU usage, as shown by the solid blue line, is different than
predicted. On the left chart, the actual CPU usage is higher than predicted. On
the right chart, the actual CPU usage is lower than predicted. The dotted blue
line shows the adjusted prediction.
Short, unpredictable spikes
Short, unpredictable peaks are covered in real time. The autoscaler creates at
least as many instances as needed to keep utilization at the configured target,
based on the current actual value of the metric. However, these instances
aren't created in advance, as shown in the following figure.
Figure 3. A short, unpredictable spike causes the autoscaler to react in
real time.
In figure 3, the solid blue line shows actual CPU usage. An unexpected spike in
CPU usage could not be predicted. Because the autoscaler always monitors
real-time data, it adds instances to accommodate the spike. The solid black line
illustrates the autoscaler's reactive addition of VMs in response to the spike.
The solid grey line shows the number of serving VMs. The grey line lags behind
the black line due to the application's initialization time. In this scenario,
the group is temporarily overloaded.
Sudden dips
Another type of unpredictable change in usage is a sudden dip, for example, a
dip caused by a failure in part of the application stack. When that happens, the
number of instances initially follows the forecast. However, over time, the
forecast adjusts to the lower-than-forecasted usage, resulting in a scale-in.
The exact timing of this adjustment depends on numerous factors, including: how
often the pattern occurred in the past, how long the dip lasts, and how deep the
dip is.
Figure 4. A sudden dip causes the predictive autoscaler to change its forecast.
In figure 4, the dotted yellow line shows the prediction at t 1 . But
the actual CPU usage, as shown by the solid blue line, fell lower than
predicted. The dotted blue line shows the updated prediction, which was
automatically adjusted after observing lower-than-forecasted usage. This results
in the autoscaler removing instances following the standard
stabilization period .
Historical data
Predictive autoscaler needs at least 3 days of historical load to start
forecasting. If you have a new MIG that lacks historical data,
Compute Engine scales your group reactively using real-time data until
sufficient historical data becomes available. After 3 days, as
Compute Engine collects additional usage data, the predictions improve.
If you update your application by creating a new MIG and deleting the old
one—for example, a blue-green deployment—then your new MIG needs 3 days of
historical load data before predictive autoscaling can start generating
forecasts again. If you want to preserve load history across MIGs so that
forecasts can start immediately when you create a new MIG,
contact us to request instructions to join a
private preview.
What's next
Learn about managing autoscalers .
Learn how autoscaler makes decisions .
Learn how to use
multiple autoscaling signals
to scale your group.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
