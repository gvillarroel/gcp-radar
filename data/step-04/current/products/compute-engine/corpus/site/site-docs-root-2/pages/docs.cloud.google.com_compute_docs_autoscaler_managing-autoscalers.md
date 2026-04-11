---
title: "Managing autoscalers \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/autoscaler/managing-autoscalers
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/autoscaler/managing-autoscalers
  title: "Managing autoscalers \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
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
Managing autoscalers
Stay organized with collections
Save and categorize content based on your preferences.
If you use managed instance groups (MIGs) ,
read this document to learn how to create, configure, and delete your MIG's
autoscaler .
Before you begin
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
Creating an autoscaler
Creating an autoscaler is slightly different depending on which autoscaling
policy you want to use. For instructions on creating an autoscaler, see:
Scaling based on CPU utilization
Scaling based on load balancing serving capacity
Scaling based on Cloud Monitoring metrics
Scaling based on schedules
Getting information about an autoscaler
To get more information about a particular autoscaler, use the console, the
gcloud compute instance-groups managed describe
sub-command, or the get method for a
zonal or
regional
autoscaler REST resource.
Permissions required for this task
To perform this task, you must have the following
permissions :
compute.autoscalers.get on the project
compute.instanceGroupManagers.get on the instance group
Console
In the Google Cloud console, go to the Instance groups page.
Go to Instance groups
Click the name of a MIG from the list to open that group's overview page.
Click Details to view the group's details, including its autoscaling
settings.
gcloud
Use the instance-groups managed describe command :
gcloud compute instance-groups managed describe INSTANCE_GROUP_NAME
If an autoscaler is attached to the group, the command returns details about
the autoscaler:
...
autoscaler:
autoscalingPolicy:
coolDownPeriodSec: 60
cpuUtilization:
utilizationTarget: 0.6
maxNumReplicas: 20
minNumReplicas: 10
mode: ON
scaleInControl:
timeWindowSec: 300
maxScaledInReplicas:
fixed: 3
calculated: 3
...
REST
Use the
instanceGroupManagers.get method .
For a regional MIG, replace zones/ ZONE with
regions/ REGION .
GET https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instanceGroupManagers/ INSTANCE_GROUP_NAME
If an autoscaler is attached to the group, the request returns a link to
the autoscaler resource.
200 OK
{
...
"status": {
...
"autoscaler": "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-east1-c/autoscalers/example-group"
},
}
To retrieve details about the autoscaler resource, use the
autoscalers.get method
for a zonal MIG or the
regionAutoscalers.get method
for a regional MIG.
GET https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /autoscalers/example-autoscaler
200 OK
{
"kind": "compute#autoscaler",
"id": "8744945839459481093",
"creationTimestamp": "2018-09-28T13:02:50.553-07:00",
"name": "example-group",
"target": "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-east1-c/instanceGroupManagers/example-group",
"autoscalingPolicy": {
"minNumReplicas": 10,
"maxNumReplicas": 20,
"mode": "ON",
"scaleInControl": {
"timeWindowSec": 60,
"maxScaledInReplicas": {
"calculated": 3,
"percent": 15
}
},
"coolDownPeriodSec": 60,
"cpuUtilization": {
"utilizationTarget": 0.6
}
},
"zone": "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-east1-c",
"selfLink": "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-east1-c/autoscalers/example-group",
"status": "ACTIVE"
}
Updating an autoscaler
When you update an autoscaler, it might take some time for the changes to
propagate, and it might be a couple of minutes before your new autoscaler
settings are reflected.
Permissions required for this task
To perform this task, you must have the following
permissions :
compute.autoscalers.get on the project
compute.autoscalers.update on the project
compute.instanceGroupManagers.use on the project
Console
In the Google Cloud console, go to the Instance groups page.
Go to Instance groups
Click the name of a MIG from the list to open that group's overview page.
Click Edit .
Click Group size & autoscaling to view and update the group's
autoscaling settings.
Click Save when you are done.
gcloud
Use the
update-autoscaling command .
gcloud compute instance-groups managed update-autoscaling INSTANCE_GROUP_NAME \
--max-num-replicas MAX_NUM ...
For instructions on how to create an autoscaler, see
Creating an autoscaler .
REST
To update an autoscaler resource, use the
autoscalers.patch method
for a zonal MIG or regionAutoscalers.patch method
for a regional MIG.
Provide a request body that contains the new configuration.
PATCH https://compute.googleapis.com/compute/v1/projects/my-project/zones/us-central1-f/autoscalers/example-autoscaler
{
"autoscalingPolicy": {
"maxNumReplicas": 20
}
}
200 OK
{
"kind": "compute#operation",
"id": "4244494732310423322",
"name": "operation-1556912627871-58800f8216ed7-74ab1720-7d360603",
"zone": "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-f",
"operationType": "compute.autoscalers.patch",
"targetLink": "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-f/autoscalers/example-autoscaler",
"targetId": "340775527929467142",
"status": "RUNNING",
...
}
When you perform any requests that modify data, a
zoneOperations or
regionOperations resource
is returned, and you can query the operation to check the status of your
change.
Using predictive autoscaling
Predictive autoscaling uses historical data to scale out your group ahead
of anticipated load. It works best if your workload meets the following
criteria:
Your application takes a long time to initialize—for example, if you configure
an initialization period of more
than 2 minutes.
Your workload varies predictably with daily or weekly cycles.
For more information, see
Scaling based on predictions .
Turning off or restricting an autoscaler
Turn off an autoscaler to temporarily prevent it from scaling your MIG, or
restrict your autoscaler so that it can only scale out your MIG. This feature is
useful when you want to:
Investigate VM instances without interference from scaling in.
Reconfigure multiple properties of your MIG without
scaling actions being triggered while your group is only partially
reconfigured.
Maintain MIG capacity for a fast rollback while redirecting a
workload to a new MIG.
Enable predictive autoscaling
later. Predictive autoscaling requires an autoscaling policy in order to start
gathering load history on which to base predictions. The autoscaler detects
this history even when its mode is set to OFF .
If and when you re-enable the autoscaler, the autoscaler automatically returns
to normal operation.
Use the instructions provided in this section to set
the autoscaler's mode. The following modes are available:
Off : Temporarily disables autoscaling. Use this mode to prevent
automatic changes of the MIG's size. The autoscaling configuration
remains intact so you can re-enable autoscaling later.
Only scale out : Restrict autoscaling only to adding new VM instances. Use
this mode to protect the group from shrinking and allow the group to provision
extra VMs when load increases.
On : Enables all autoscaling operations per its policy.
Note: The autoscaler calculates the recommended group size regardless of its
mode. You can check the recommended size by reading the recommendedSize
property of an autoscaler or
regionAutoscaler
resource.
Permissions required for this task
To perform this task, you must have the following
permissions :
compute.autoscalers.get on the project
compute.autoscalers.update on the project
compute.instanceGroupManagers.use on the project
Console
In the Google Cloud console, go to the Instance groups page.
Go to Instance groups
Click the name of a MIG from the list to open that group's overview page.
Click Edit .
Click Group size & autoscaling to view and update the group's
autoscaling settings.
In the Autoscaling section, set the Autoscaling mode to disable
or restrict autoscaling for the group, or to turn the autoscaler back on.
Click Save when you are done.
gcloud
To disable, restrict, or re-enable an autoscaler, use the
update-autoscaling command
with the --mode flag.
gcloud compute instance-groups managed update-autoscaling INSTANCE_GROUP_NAME \
--mode MODE
Replace the following:
MODE :
off to disable the autoscaler but maintain its configuration
only-scale-out to restrict the autoscaler to adding VM instances only
on to re-enable all autoscaler activities according to its policy
REST
To update the mode of an autoscaler resource, use the
autoscalers.patch method
for a zonal MIG or the regionAutoscalers.patch method
for a regional MIG.
Provide a request body that includes the autoscalingPolicy.mode
property.
PATCH https://compute.googleapis.com/compute/v1/projects/my-project/regions/us-central1-f/autoscalers?autoscaler=my-autoscaler
{
"autoscalingPolicy": {
"mode":" MODE "
}
}
Replace the following:
MODE :
OFF to disable the autoscaler but maintain its configuration
ONLY_SCALE_OUT to restrict the autoscaler to adding instances only
ON to re-enable all autoscaler activities according to its policy
When you set the autoscaling mode to ONLY_SCALE_OUT , the autoscaler behaves as
follows:
The autoscaler does not decrease the MIG's targetSize value regardless of
decreases in load or changes to the autoscaler configuration.
If you manually change the target size of a zonal MIG, the autoscaler
overrides your manually provided size if it is smaller than the autoscaler's
recommended size.
You cannot manually change the target size of a regional MIG.
If you set the autoscalingPolicy.maxNumReplicas field to a lower value than
the group's current targetSize value while the autoscaler's mode is set to
ONLY_SCALE_OUT , the autoscaler does not reduce the number of instances in
the group. As usual, the autoscaler continuously recomputes the group's
recommended size and might decrease the group's recommended size to comply
with the new maximum, but the group is not scaled in.
The autoscalers.status field reports a warning: "Autoscaling operates in a
restricted mode: ONLY_SCALE_OUT."
When you set the autoscaler's mode to OFF , the autoscaler behaves as follows:
The autoscaler does not change the MIG's targetSize value in response to
changes in load or in autoscaler configuration. As usual, the autoscaler
continuously recomputes the group's recommended size and might decrease the
group's recommended size to comply with the new maximum, but the group is not
scaled in.
You can manually change the target size of a zonal or a regional MIG. The
minNumReplicas and maxNumReplicas values of the autoscaling policy do not
affect the size you set.
If you turn off autoscaling for a regional MIG in which
proactive instance redistribution
is enabled, and if the MIG has an uneven distribution of instances across
zones, then the group proactively deletes or creates instances in its zones to
reestablish an even distribution.
The autoscalers.status field reports a warning: "Autoscaling operates in a
restricted mode: OFF."
Controlling the scale-in rate of an autoscaler
If your workloads take many minutes to initialize, configure
scale-in controls to
reduce the risk of response latency and outages due to abrupt scale-in events.
Specifically, if you routinely expect a load spike to follow soon after a
decline in load, you can limit the scale-in rate. Limiting the scale-in rate
prevents the autoscaler from reducing a MIG's size by more VM instances than
your workload can tolerate to lose.
Configuring scale-in controls
Configuring scale-in controls is optional. By default, scale-in controls are not
configured. When not configured, the autoscaler still relies on its default
stabilization mechanism .
That is, it maintains the recommended size at a level required to serve peak
load, observed during the stabilization period.
Permissions required for this task
To perform this task, you must have the following
permissions :
compute.autoscalers.create on the project to create an autoscaler.
compute.autoscalers.update on the project to update an autoscaler.
compute.instanceGroupManagers.use on the project.
Console
To configure scale-in controls for an autoscaled MIG:
In the Google Cloud console, go to the Instance groups page.
Go to Instance groups
Click the name of an autoscaled MIG from the list to open that group's
overview page.
Click Edit .
Click Group size & autoscaling to view and update the group's
autoscaling settings.
In the Scale-in controls section, select
Enable scale-in controls .
In the Don't scale in by more than field, specify the maximum number
or percent of instances that can be removed from the group at a time.
In the Over the course of section, specify how often instances can be
removed from the group.
Click Save .
gcloud
You can configure scale-in controls when creating an autoscaler or when
updating an autoscaler.
Configuring scale-in controls when creating an autoscaler
Set scale-in controls when creating an autoscaler for a MIG by
using the --scale-in-control flag with the gcloud
compute instance-groups managed set-autoscaling
command .
For example, use the following command to configure autoscaling for an
example-group :
gcloud compute instance-groups managed set-autoscaling INSTANCE_GROUP_NAME \
--target-cpu-utilization 0.6 \
--max-num-replicas 50 \
--scale-in-control max-scaled-in-replicas= MAX_SCALE_IN_REPLICAS ,time-window= TIME_WINDOW
Configuring scale-in controls when updating an autoscaler
Update scale-in controls in a MIG's existing autoscaler
by using the --scale-in-control flag with the
gcloud compute instance-groups managed update-autoscaling
command .
For example, use the following command to set scale-in controls in an
existing autoscaling configuration for example-group :
gcloud compute instance-groups managed update-autoscaling INSTANCE_GROUP_NAME \
--scale-in-control max-scaled-in-replicas= MAX_SCALE_IN_REPLICAS ,time-window= TIME_WINDOW
Replace the following:
INSTANCE_GROUP_NAME : the name of the MIG to
update.
MAX_SCALE_IN_REPLICAS : the maximum number of
VMs allowed to be deducted from the peak size, taken from
the specified trailing time window. The specified number of VM instances
can be scaled in all at once, so your service should be able to afford
losing this many VMs all at once. You can specify either a number of VMs
or a percentage. Use the % sign for percentages; for example: 50% .
TIME_WINDOW : trailing time window to take the
peak size from. Autoscaling won't scale in by more than
the maximum allowed number of replicas from the peak size
taken during this trailing time window. Specify this value in seconds
within a [60, 3600] interval.
For example, say you set the time window to 1800 seconds (30 minutes).
When calculating the current recommended size for the MIG, the autoscaler
uses the following logic:
Take the peak size from the last 30 minutes (for example, 100 VMs)
Take max-scaled-in-replicas (for example, 10 VMs)
Set the lower bound of the recommended size to: peak size minus
max-scaled-in-replicas (100 - 10 = 90 VMs)
REST
Configure scale-in controls by setting the maxScaledInReplicas
and timeWindowSec fields within the autoscalingPolicy.scaleInControl
structure in a zonal or
regional
autoscaler resource. There are no default values for these fields, you must
provide values for both fields.
You can configure scale-in controls when creating an autoscaler or when
updating an autoscaler.
Configuring scale-in controls when creating an autoscaler
For a zonal MIG, use the autoscalers.insert method .
For a regional MIG, use the regionAutoscalers.insert method .
POST
https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION /autoscalers
{
"name": " AUTOSCALER_NAME ",
"target": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION /instanceGroupManagers/ INSTANCE_GROUP_NAME ",
"autoscalingPolicy": {
"minNumReplicas": 1,
"maxNumReplicas": 5,
"coolDownPeriodSec": 60,
"cpuUtilization": {
"utilizationTarget": 0.8
},
"scaleInControl": {
"maxScaledInReplicas": {
"fixed": MAX_SCALE_IN_REPLICAS
},
"timeWindowSec": TIME_WINDOW
}
}
}
For more information about creating an autoscaler, refer to the following
articles:
Scaling based on CPU or load balancing serving capacity
Scaling based on Cloud Monitoring metric .
Configuring scale-in controls when updating an autoscaler
For a zonal MIG, use the autoscalers.patch method .
For a regional MIG, use the regionAutoscalers.patch method .
PATCH
https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION /autoscalers?autoscaler= AUTOSCALER_NAME
{
"autoscalingPolicy": {
"minNumReplicas": 1,
"maxNumReplicas": 5,
"coolDownPeriodSec": 60,
"cpuUtilization": {
"utilizationTarget": 0.8
},
"scaleInControl": {
"maxScaledInReplicas": {
"fixed": MAX_SCALE_IN_REPLICAS
},
"timeWindowSec": TIME_WINDOW
}
}
}
Replace the following:
AUTOSCALER_NAME : the name of the autoscaler to
create. You can name your autoscaler after the MIG that will use it or
name it something else.
INSTANCE_GROUP_NAME : the name of the MIG to
add the autoscaler to. For a regional MIG, replace
zones/ ZONE with
regions/ REGION .
MAX_SCALE_IN_REPLICAS : the maximum number of
VMs allowed to be deducted from the peak recommended target size, taken
from the specified trailing time window. The specified number of VM
instances can be scaled in all at once, so your service should be able
to afford to lose this many VMs all at once. You can specify either a
number of VMs or a percentage. Use the maxScaledInReplicas.percentage
to specify a percent value.
TIME_WINDOW : the trailing time window to take
the peak recommended size from. Autoscaling won't scale in by more than
the maximum allowed number of replicas from the peak recommended size
taken during this trailing time window. Specify this value in seconds
within the range of 60 and 3600 ; for example: 1800 .
For example, say you set the time window to 1800 seconds (30 minutes).
When calculating the current recommended size for the MIG, the autoscaler
uses the following logic:
Take the peak size from the last 30 minutes (for example, 100 VMs)
Take max-scaled-in-replicas (for example, 10 VMs)
Set the lower bound of the recommended size to: peak size minus
max-scaled-in-replicas (100 - 10 = 90 VMs)
For more information about how scale-in controls work, see
Understanding autoscaler decisions .
Getting current configuration of scale-in controls
To get the current configuration of scale-in controls, see
Getting information about an autoscaler .
Removing scale-in controls
You can remove scale-in controls to lift restrictions on the timing and
magnitude of scale-in operations using the Google Cloud CLI or the
Compute Engine API.
Without scale-in controls, the autoscaler still relies on its default
stabilization mechanism . Specifically, it maintains a recommended size at a
level required to serve peak load, observed during the
stabilization period.
Console
To remove scale-in controls for an autoscaled MIG:
In the Google Cloud console, go to the Instance groups page.
Go to Instance groups
Click the name of an autoscaled MIG from the list to open that group's
overview page.
Click Edit .
Click Group size & autoscaling to view and update the group's
autoscaling settings.
In the Scale-in controls section, clear the
Enable scale-in controls checkbox.
Click Save .
gcloud
Remove scale-in controls by using the --clear-scale-in-control flag with
the gcloud compute instance-groups managed update-autoscaling
command .
For example, use the following command to remove scale-in controls from
the autoscaling configuration for example-group :
gcloud compute instance-groups managed update-autoscaling example-group \
--clear-scale-in-control
REST
To remove scale-in controls, use the
autoscalers.patch method for a zonal MIG or use the
regionAutoscalers.patch method
for a regional MIG,
and provide empty configuration for scale-in controls.
PATCH
https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /autoscalers?autoscaler= AUTOSCALER_NAME
{
"autoscalingPolicy": {
"scaleInControl": null
}
}
Replace the following:
AUTOSCALER_NAME : the name of the autoscaler to
update. To get a list of existing autoscalers and their target MIGs, use
the autoscalers.aggregatedList method .
Deleting an autoscaler
You can permanently delete your autoscaler resource, and its history.
If you want to temporarily stop autoscaling and keep your autoscaler resource
and its configuration and history, disable
your autoscaler instead.
Permissions required for this task
To perform this task, you must have the following
permissions :
compute.autoscalers.delete on the project
Console
In the Google Cloud console, go to the Instance groups page.
Go to Instance groups
Click the name of a MIG from the list to open that group's overview page.
Click Edit .
Click Group size & autoscaling to view and update the group's
autoscaling settings.
In the Autoscaling mode list, select
Delete autoscaling configuration to stop the autoscaler and delete
its configuration.
Click Save when you are done.
gcloud
Use the stop-autoscaling command
to stop an autoscaler and delete its configuration.
gcloud compute instance-groups managed stop-autoscaling INSTANCE_GROUP_NAME
Stopping an autoscaler deletes it from the MIG. If you want to restart
the autoscaler, you must recreate it by using the
set-autoscaling command .
If you delete a MIG using the gcloud CLI, any
autoscalers attached to the MIG are also deleted.
REST
To stop an autoscaler and delete its configuration, use the
autoscalers.delete method
for a zonal MIG or use the
regionAutoscalers.delete method
for a regional MIG.
DELETE https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /autoscalers/ AUTOSCALER_NAME
Feedback
We want to learn about your use cases, challenges, and feedback about
autoscaling. Share your feedback with our team at
mig-discuss@google.com .
What's next
Learn how autoscalers make decisions .
Learn how to use
multiple autoscaling signals
to scale your group.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
