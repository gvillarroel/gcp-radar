---
title: "Scaling based on schedules \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/autoscaler/scaling-schedules
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/autoscaler/scaling-schedules
  title: "Scaling based on schedules \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
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
Scaling based on schedules
Stay organized with collections
Save and categorize content based on your preferences.
Schedule-based autoscaling lets you improve the availability of your
workloads by scheduling capacity ahead of anticipated load.
If you run your workload on a managed instance group (MIG), you can schedule a
required number of virtual machine (VM) instances for recurring load
patterns as well as one-off events. Use scaling schedules if your workload
takes a long time to initialize and you want to scale out in advance of
anticipated load spikes.
This document describes how you can create, list, edit, disable, re-enable, and
delete scaling schedules for an existing MIG. For more
information about MIGs and autoscaling, see
Creating managed instance groups
and Autoscaling groups of instances .
Before you begin
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
Terraform
To use the Terraform samples on this page in a local development environment, install and
initialize the gcloud CLI, and then set up Application Default Credentials with
your user credentials.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
For more information, see
Set up authentication for a local development environment .
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
Scaling schedules are restricted by the limitations for all autoscalers
as well as the following limitations:
You can have up to 128 scaling schedules per MIG. To mitigate this limit,
delete scaling schedules that have an
OBSOLETE status and that you don't plan to run again.
The minimum duration for scaling schedules is 5 minutes.
Creating a scaling schedule
You can create up to 128 scaling schedules per MIG. For more information, see
Scaling schedule settings .
Note: Consider the following when you create a scaling schedule:
Autoscaler never creates more than the maximum number of
VM instances or fewer than the minimum number of VM instances configured
in the MIG's autoscaling settings. Make sure the
autoscaling settings' maximum lets the autoscaler
create the number of VM instances
required by each scaling schedule.
VM instances aren't ready immediately at the given start
time. Configure your start time to be early enough for
VMs to boot and start your application before they are needed.
Autoscaler constantly monitors scaling schedules, so any
configuration changes are effective immediately. For example,
suppose you create a new schedule at 3 PM that runs every
day at 2 PM for 3 hours. This schedule becomes active
shortly after it is created and remains active until 5 PM.
The following instructions explain how to create a scaling schedule for a MIG.
Permissions required for this task
To perform this task, you must have the following
permissions :
To add a scaling schedule to an existing autoscaler:
compute.autoscalers.update on the project
To create a new autoscaler with a scaling schedule for an existing MIG:
compute.autoscalers.create on the project
compute.instanceGroupManagers.use on the MIG
Console
In the Google Cloud console, go to the Instance groups page.
Go to Instance groups
Click the name of a MIG in the list.
Click Edit .
Click Group size & autoscaling to expand the section.
If autoscaling configuration doesn't exist, click
Configure autoscaling .
By default, the autoscaling configuration adds a signal based on CPU
utilization . If you want to scale your MIG based only on schedules,
delete the default CPU utilization metric after you add the schedules.
In the Autoscaling schedules section, click Manage .
In the Scaling schedules pane, for each scaling schedule that you
want to add, do the following:
Click Create schedule .
In the Create scaling schedule pane, enter a Name .
Optional: Enter a Description .
Enter the number of
Minimum required instances that
this schedule provides when it is active.
To specify the start time and recurrence of your scaling schedule, you
can use the default interface. You can also configure a schedule with
a more complex start time and recurrence using the
cron expression . Depending on how you want to
configure, follow these steps:
Default interface
In the Start time field, enter a start time in the
format HH:MM AM/PM —for example, 09:00 AM .
Click the Time zone field. Select a country, and then a
time zone.
You can use the Search by country field to find a country
or a time zone. For example, type
Australia/australian central to find the Central Standard
Time zones in Australia.
Note: Some locations observe daylight saving time (DST).
For more information, see Time zones .
In the Duration and Unit of time fields, enter a
duration and select a corresponding unit of time.
In the Recurrence field, select how often the schedule
repeats.
You can choose Once or Every day . To specify that the
schedule repeats only on certain days, choose either
Every week or Every month . After selecting one of
these options, use the additional list to select which days of
the week or month the schedule starts.
Cron expression
To enable, click the Use CRON expression toggle.
In the CRON expression field, enter a
cron expression that specifies the start
time and recurrence.
Click the Time zone field. Select a country, and then a
time zone.
You can use the Search by country field to find a country
or a time zone. For example, type
Australia/australian central to find the Central Standard
Time zones in Australia.
Note: Some locations observe daylight saving time (DST).
For more information, see Time zones .
In the Duration and Unit of time fields, enter a
duration and select a corresponding unit of time.
Click Save . The Scaling schedules pane lists the schedule that
you created.
When you've finished creating schedules, click Done .
The schedules are saved and applied to your MIG.
Click Save to exit the edit page.
gcloud
To add a scaling schedule to a MIG that does not have an existing
autoscaling policy, use the
gcloud compute instance-groups managed set-autoscaling command .
gcloud compute instance-groups managed set-autoscaling MIG_NAME \
[--min-num-replicas= MIN_NUM_REPLICAS ] \
--max-num-replicas= MAX_NUM_REPLICAS \
--set-schedule= SCHEDULE_NAME \
--schedule-cron=" CRON_EXPRESSION " \
--schedule-duration-sec= DURATION \
[--schedule-time-zone=" TIME_ZONE "] \
--schedule-min-required-replicas= MIN_REQ_REPLICAS \
[--schedule-description=" DESCRIPTION "] \
[--zone= ZONE | --region= REGION ]
To add a scaling schedule to a MIG with an existing autoscaling policy,
use the
gcloud compute instance-groups managed update-autoscaling command .
gcloud compute instance-groups managed update-autoscaling MIG_NAME \
[--min-num-replicas= MIN_NUM_REPLICAS ] \
[--max-num-replicas= MAX_NUM_REPLICAS ] \
--set-schedule= SCHEDULE_NAME \
--schedule-cron=" CRON_EXPRESSION " \
--schedule-duration-sec= DURATION \
[--schedule-time-zone=" TIME_ZONE "] \
--schedule-min-required-replicas= MIN_REQ_REPLICAS \
[--schedule-description=" DESCRIPTION "] \
[--zone= ZONE | --region= REGION ]
Replace the following:
MIG_NAME : the name of a MIG
with an existing autoscaling policy.
MIN_NUM_REPLICAS : Optional: the minimum
number of instances required for this MIG. Google recommends setting this
value to the minimum number of instances that you need when no scaling
schedule is active. To scale in your MIG to zero instances, set this value
to 0 and make sure that the necessary conditions
are met.
MAX_NUM_REPLICAS : the maximum
number of instances that can ever be provided for this MIG. Optional for
a MIG with an existing autoscaling policy.
SCHEDULE_NAME : the name of the new
scaling schedule.
CRON_EXPRESSION : the start time and
recurrence of this schedule formatted as a
cron expression .
DURATION : the duration , in seconds,
that this schedule is active.
TIME_ZONE : Optional: the
IANA time zone for the schedule's start time—for
example, Europe/Paris . The default value is UTC .
MIN_REQ_REPLICAS : the number of
minimum required instances that
this schedule provides when it is active.
DESCRIPTION : Optional: a description of the new
scaling schedule.
ZONE or REGION : Optional:
the zone or region where your MIG is located.
You can create schedules that run once or that periodically repeat.
Repeating schedule
This example command creates a schedule that repeats.
This schedule specifies that you want your MIG to contain at least
10 VM instances on every Monday, Tuesday, Wednesday, Thursday, and
Friday from 8:30 AM to 5 PM Coordinated Universal Time (UTC). This command
also uses the --min-num-replicas and --max-num-replicas flags to update
the minimum number of instances to 0 and the maximum number of instances
to 30 for all the autoscaling signals of the selected MIG. This command
assumes you have an existing MIG named example-mig
with an existing autoscaling policy.
gcloud compute instance-groups managed update-autoscaling example-mig \
--min-num-replicas=0 \
--max-num-replicas=30 \
--set-schedule=workday-capacity \
--schedule-cron="30 8 * * Mon-Fri" \
--schedule-duration-sec=30600 \
--schedule-min-required-replicas=10 \
--schedule-description="Have at least 10 VMs every Monday through Friday from 8:30 AM to 5 PM UTC"
Onetime schedule
This example command creates a schedule that runs once.
This schedule specifies that you want your MIG to contain at least
30 VM instances all day on January 30, 2030 for the America/New_York
time zone. This command assumes you have an existing MIG named
example-mig that is located in us-east1-b and has
an existing autoscaling policy.
gcloud compute instance-groups managed update-autoscaling example-mig \
--set-schedule=example-onetime-schedule \
--schedule-cron="0 0 30 1 * 2030" \
--schedule-duration-sec=86400 \
--schedule-time-zone="America/New_York" \
--schedule-min-required-replicas=30 \
--schedule-description="Schedule a minimum of 30 VMs all day for January 30, 2030" \
--zone=us-east1-b
Terraform
To add a scaling schedule to a MIG, use the google_compute_autoscaler resource.
resource "google_compute_autoscaler" "default" {
provider = google-beta
name = "my-autoscaler"
zone = "us-central1-f"
target = google_compute_instance_group_manager.default.id
autoscaling_policy {
max_replicas = 5
min_replicas = 1
cooldown_period = 60
scaling_schedules {
name = "every-weekday-morning"
description = "Increase to 2 every weekday at 7AM for 12 hours."
min_required_replicas = 2
schedule = "0 7 * * MON-FRI"
time_zone = "America/New_York"
duration_sec = 43200
}
}
}
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
REST
Note: By using REST, you can define multiple scaling
schedules in a single call .
To create an autoscaler with scaling schedules for a MIG, use the
autoscalers.insert method
for a zonal MIG or the
regionAutoscalers.insert method
for a regional MIG.
Make the following call to create a schedule for a zonal MIG that does not
have an existing autoscaling policy:
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT /zones/ ZONE /autoscalers/
{
"name": " AUTOSCALER_NAME ",
"target": "https://www.googleapis.com/compute/v1/projects/ PROJECT /zones/ ZONE /instanceGroupManagers/ MIG_NAME ",
"autoscalingPolicy": {
"minNumReplicas": MIN_NUM_REPLICAS ,
"maxNumReplicas": MAX_NUM_REPLICAS ,
"scalingSchedules": {
" SCHEDULE_NAME ": {
"minRequiredReplicas": MIN_REQ_REPLICAS ,
"schedule": " CRON_EXPRESSION ",
"timeZone": " TIME_ZONE ",
"durationSec": DURATION ,
"description": " DESCRIPTION "
},
...
}
}
}
To create schedules for a MIG that has an existing autoscaling
policy, use the
autoscalers.patch method
for a zonal MIG or the
regionAutoscalers.patch method
for a regional MIG.
For example, make the following call to create a schedule for a zonal MIG
that has an existing autoscaling policy:
PATCH https://compute.googleapis.com/compute/v1/projects/ PROJECT /zones/ ZONE /autoscalers?autoscaler= AUTOSCALER_NAME
{
"autoscalingPolicy": {
"minNumReplicas": MIN_NUM_REPLICAS ,
"maxNumReplicas": MAX_NUM_REPLICAS ,
"scalingSchedules": {
" SCHEDULE_NAME ": {
"minRequiredReplicas": MIN_REQ_REPLICAS ,
"schedule": " CRON_EXPRESSION ",
"timeZone": " TIME_ZONE ",
"durationSec": DURATION ,
"description": " DESCRIPTION "
},
...
}
}
}
Replace the following:
PROJECT : your project id .
ZONE : the zone where your MIG is located.
AUTOSCALER_NAME : the name of an
existing autoscaler. This is often the same as the name of the MIG.
MIN_NUM_REPLICAS : Optional: the minimum
number of instances required for this MIG. Google
recommends setting this value to the minimum number of instances that you
need when no scaling schedule is active. To scale in your MIG to zero
instances, set this value to 0 and make sure that the
necessary conditions
are met.
MAX_NUM_REPLICAS : the maximum
number of instances that can ever be provided for this MIG. Optional for
a MIG with an existing autoscaling policy.
SCHEDULE_NAME : the name of the new
scaling schedule.
MIN_REQ_REPLICAS : the
minimum required instances that
this schedule provides when it is active.
CRON_EXPRESSION : the start time and
recurrence of this schedule formatted as a
cron expression .
TIME_ZONE : Optional: the
IANA time zone for the schedule's start time—for
example, Europe/Paris . The default value is UTC .
DURATION : the duration , in seconds,
that this schedule is active.
DESCRIPTION : Optional: a description of the new
scaling schedule.
You can create schedules that run once or that periodically repeat.
Repeating schedule
This example API call creates a schedule that repeats.
This schedule specifies that you want a zonal MIG to contain
at least 10 VM instances on every Monday, Tuesday, Wednesday, Thursday, and
Friday from 8:30 AM to 5 PM Coordinated Universal Time (UTC). This API call
also uses the minNumReplicas and maxNumReplicas fields to update
the minimum number of instances to 0 and the maximum number of instances
to 30 for all the autoscaling signals of the selected MIG.
This API call assumes that you have an existing project
named example-project with a zonal MIG that is located in us-east1-b
and has an autoscaler named example-autoscaler with an
existing autoscaling policy.
PATCH https://compute.googleapis.com/compute/v1/projects/example-project/zones/us-east1-b/autoscalers?autoscaler=example-autoscaler
{
"autoscalingPolicy": {
"minNumReplicas": 0,
"maxNumReplicas": 30,
"scalingSchedules": {
"workday-capacity": {
"minRequiredReplicas": 10,
"schedule": "30 8 * * Mon-Fri",
"durationSec": 30600,
"description": "Have at least 10 VMs every Monday through Friday from 8:30 AM to 5 PM UTC"
}
}
}
}
To use this example for a regional MIG,
make a similar request by using the
regionAutoscalers.patch method
and specify a region instead of a zone.
Onetime schedule
This example API call creates a schedule that runs once.
This schedule specifies that you want a zonal MIG to contain
at least 30 VM instances all day on January 30, 2030 for the America/New_York
time zone. This API call assumes that you have an existing project
named example-project with a zonal MIG that is located in us-east1-b
and has an autoscaler named example-autoscaler with an
existing autoscaling policy.
PATCH https://compute.googleapis.com/compute/v1/projects/example-project/zones/us-east1-b/autoscalers?autoscaler=example-autoscaler
{
"autoscalingPolicy": {
"scalingSchedules": {
"example-onetime-schedule": {
"minRequiredReplicas": 30,
"schedule": "0 0 30 1 * 2030",
"timeZone": "America/New_York",
"durationSec": 86400,
"description": "Schedule a minimum of 30 VMs all day for January 30, 2030"
}
}
}
}
To use this example for a regional MIG,
make a similar request by using the
regionAutoscalers.patch method
and specify a region instead of a zone.
Multiple schedules
This example API call uses the
autoscalers.patch method
for two schedules, workday-capacity
and january-30-2030-schedule , in a single call. This API call
assumes that you have an existing project named example-project with a
zonal MIG that is located in us-east1-b and has an autoscaler named
example-autoscaler with an existing autoscaling policy.
PATCH https://compute.googleapis.com/compute/v1/projects/example-project/zones/us-east1-b/autoscalers?autoscaler=example-autoscaler
{
"autoscalingPolicy": {
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
}
}
}
To use this example for a regional MIG,
make a similar request by using the
regionAutoscalers.patch method
and specify a region instead of a zone.
After a schedule is created, you might need to wait a few minutes to see its
status information .
Listing your scaling schedules
You can view a list of the schedules for a MIG. The list shows each schedule's
settings and
status information .
Permissions required for this task
To perform this task, you must have the following
permissions :
To list scaling schedules from the Google Cloud console or REST:
compute.autoscalers.get on the project
To list scaling schedules from the Google Cloud CLI:
compute.instanceGroupManagers.get on the MIG
Console
In the Google Cloud console, go to the Instance groups page.
Go to Instance groups
Click the name of a MIG in the list.
In the Overview tab, the Autoscaling section shows the signals
configured in the MIG.
Next to the signal information, hold the pointer over the
info icon, and then click Manage .
The Scaling schedules pane displays the list of your existing scaling
schedules.
gcloud
To get details for a MIG,
including the configurations and statuses of its scaling schedules, use the
gcloud compute instance-groups managed describe command .
gcloud compute instance-groups managed describe MIG_NAME \
[--zone= ZONE | --region= REGION ]
Replace the following:
MIG_NAME : the name of a MIG
with an existing autoscaling policy.
ZONE or REGION : Optional:
the zone or region where your MIG is located.
Any scaling schedules for your MIG are listed
in the output, as shown in the following example.
...
autoscalingPolicy:
...
maxNumReplicas: 30
minNumReplicas: 0
...
scalingSchedules:
example-onetime-schedule:
description: Schedule a minimum of 30 VMs all day for January 30, 2030
disabled: false
durationSec: 86400
minRequiredReplicas: 30
schedule: 0 0 30 1 * 2030
timeZone: America/New_York
workday-capacity:
description: Have at least 10 VMs every Monday through Friday from 8:30
AM to 5 PM UTC
disabled: false
durationSec: 30600
minRequiredReplicas: 10
schedule: 30 8 * * Mon-Fri
timeZone: UTC
...
scheduledScalingStatus:
example-onetime-schedule:
state: READY
nextStartTime: '2030-01-30T00:00:00.000-05:00'
lastStartTime: ''
workday-capacity:
state: READY
nextStartTime: '2020-11-04T08:30:00.000-00:00'
lastStartTime: '2020-11-03T08:30:00.000-00:00'
...
REST
To get details for an autoscaler,
including the configurations and statuses of its scaling schedules,
use the
autoscalers.get method
for a zonal MIG or the
regionAutoscalers.get method
for a regional MIG.
For example, make the following call to list the schedules for a zonal MIG
that has an existing autoscaling policy:
GET https://compute.googleapis.com/compute/v1/projects/ PROJECT /zones/ ZONE /autoscalers?autoscaler= AUTOSCALER_NAME
Replace the following:
PROJECT : your
project id .
ZONE : the zone where your MIG is located.
AUTOSCALER_NAME : the name of an
existing autoscaler. This is often the same as the name of the MIG.
Any scaling schedules for your MIG are listed
in the output, as shown in the following example.
{
...
"autoscalingPolicy": {
...
"minNumReplicas": 0,
"maxNumReplicas": 30,
...
"scalingSchedules": {
"example-onetime-schedule": {
"minRequiredReplicas": 30,
"schedule": "0 0 30 1 * 2030",
"timeZone": "America/New_York",
"durationSec": 86400,
"description": "Schedule a minimum of 30 VMs all day for January 30, 2030",
"disabled": false
},
"workday-capacity": {
"minRequiredReplicas": 10,
"schedule": "30 8 * * Mon-Fri",
"timeZone": "",
"durationSec": 30600,
"description": "Have at least 10 VMs every Monday through Friday from 8:30 AM to 5 PM UTC",
"disabled": false
},
...
}
},
"scheduledScalingStatus": {
"example-onetime-schedule": {
"state": "READY",
"nextStartTime": "2030-01-30T00:00:00.000-05:00",
"lastStartTime": ''
},
"workday-capacity": {
"state": "READY",
"nextStartTime": "2020-11-04T08:30:00.000",
"lastStartTime": "2020-11-03T08:30:00.000"
},
...
},
...
}
Editing a scaling schedule
You can edit an existing scaling schedule
to change any of its settings
except for the name of the schedule. You can also
disable or re-enable a scaling schedule .
Permissions required for this task
To perform this task, you must have the following
permissions :
compute.autoscalers.update on the project
Console
In the Google Cloud console, go to the Instance groups page.
Go to Instance groups
Click the name of a MIG in the list.
Click Edit .
Click Group size & autoscaling to expand the section.
In the Autoscaling schedules section, click Manage .
The Scaling Schedules pane displays the list of your existing
scaling schedules.
Select the checkbox for the scaling schedule that you want to edit.
At the top of the Scaling Schedules pane, click Edit .
In the Edit scaling schedule pane, modify the fields that you
want to change. For more information about each field, see
Creating a scaling schedule .
When you are finished, click Save .
You might need to wait a few minutes before your changes are effective.
You can monitor the status of your schedules by clicking
refresh Refresh
at the top of the Scaling Schedules pane.
Close the Scaling schedules pane by clicking Done .
The changes to the schedules are saved and applied to your MIG.
Click Save to exit the edit page.
gcloud
To update an existing scaling schedule, use the
gcloud compute instance-groups managed update-autoscaling command .
Use the --update-schedule flag to indicate the name of the schedule to
update. Include the other flags as needed for your changes.
gcloud compute instance-groups managed update-autoscaling MIG_NAME \
--update-schedule= SCHEDULE_NAME \
[--schedule-cron=" CRON_EXPRESSION "] \
[--schedule-duration-sec= DURATION ] \
[--schedule-time-zone=" TIME_ZONE "] \
[--schedule-min-required-replicas= MIN_REQ_REPLICAS ] \
[--schedule-description=" DESCRIPTION "] \
[--zone= ZONE | --region= REGION ]
Replace the following:
MIG_NAME : the name of a MIG
with an existing scaling schedule.
SCHEDULE_NAME : the name of the existing
scaling schedule.
CRON_EXPRESSION : Optional: the new start time and
recurrence of this schedule formatted as a
cron expression .
DURATION : Optional: the new
duration , in seconds, that this schedule is active.
TIME_ZONE : Optional: the new
IANA time zone for the schedule's start time—for
example, Europe/Paris . The default value is UTC .
MIN_REQ_REPLICAS : Optional: the new number of
minimum required instances that
this schedule provides when it is active.
DESCRIPTION : Optional: a new description of the
scaling schedule.
ZONE or REGION : Optional:
the zone or region where your MIG is located.
REST
Note: By using the API, you can update multiple scaling
schedules in a single call .
To update the existing scaling schedules for a MIG, use the
autoscalers.patch method
for a zonal MIG or the
regionAutoscalers.patch method
for a regional MIG.
For example, make the following call to edit a schedule for a zonal MIG
that has an existing autoscaling policy:
PATCH https://compute.googleapis.com/compute/v1/projects/ PROJECT /zones/ ZONE /autoscalers?autoscaler= AUTOSCALER_NAME
{
"autoscalingPolicy": {
"scalingSchedules": {
" SCHEDULE_NAME ": {
"minRequiredReplicas": MIN_REQ_REPLICAS ,
"schedule": " CRON_EXPRESSION ",
"timeZone": " TIME_ZONE ",
"durationSec": DURATION ,
"description": " DESCRIPTION "
},
...
}
}
}
Replace the following:
PROJECT : your
project id .
ZONE : the zone where your MIG is located.
AUTOSCALER_NAME : the name of an
existing autoscaler. This is often the same as the name of the MIG.
SCHEDULE_NAME : the name of the existing
scaling schedule.
MIN_REQ_REPLICAS : Optional: the new number of
minimum required instances that
this schedule provides when it is active.
CRON_EXPRESSION : Optional: the new start time and
recurrence of this schedule formatted as a
cron expression .
TIME_ZONE : Optional: the new
IANA time zone for the schedule's start time—for
example, Europe/Paris . The default value is UTC .
DURATION : Optional: the new
duration , in seconds, that this schedule is active.
DESCRIPTION : Optional: a new description of the
scaling schedule.
Disabling and re-enabling a scaling schedule
Scaling schedules are enabled by default. Disable a schedule if you want to
prevent a schedule from being active but want to save its configuration.
Re-enable a disabled schedule when you want to use it again.
If you don't need to store the schedule or have reached the 128 schedule
limit for this MIG,
delete the schedule .
If you want to disable autoscaling for a MIG,
turn off autoscaling .
Permissions required for this task
To perform this task, you must have the following
permissions :
compute.autoscalers.update on the project
Console
In the Google Cloud console, go to the Instance groups page.
Go to Instance groups
Click the name of a MIG in the list.
Click Edit .
Click Group size & autoscaling to expand the section.
In the Autoscaling schedules section, click Manage .
The Scaling Schedules pane displays the list of your existing
scaling schedules.
Select the checkboxes for the scaling schedules that you want to disable
or enable.
To disable the selected schedules:
At the top of the Scaling Schedules pane, click
remove_circle_outline
Disable .
In the Disable schedules dialog, click Disable .
To enable the selected schedules:
At the top of the Scaling Schedules pane, click
check_circle_outline
Enable .
In the Enable schedules dialog, click Enable .
You might need to wait a few minutes before your changes are effective.
You can monitor the status of your schedules by clicking
refresh Refresh
at the top of the Scaling Schedules pane.
Close the Scaling schedules pane by clicking Done .
The changes to the schedules are saved and applied to your MIG.
Click Save to exit the edit page.
gcloud
To disable or re-enable a scaling schedule, use the
gcloud compute instance-groups managed update-autoscaling command .
Disabling a scaling schedule
To disable a scaling schedule, use the --disable-schedule flag.
gcloud compute instance-groups managed update-autoscaling MIG_NAME \
--disable-schedule= SCHEDULE_NAME \
[--zone= ZONE | --region= REGION ]
Replace the following:
MIG_NAME : the name of a MIG
with an existing scaling schedule.
SCHEDULE_NAME : the name of the
scaling schedule that you want to disable.
ZONE or REGION : Optional:
the zone or region where your MIG is located.
Re-enabling a scaling schedule
To re-enable a scaling schedule, use the --enable-schedule flag.
gcloud compute instance-groups managed update-autoscaling MIG_NAME \
--enable-schedule= SCHEDULE_NAME \
[--zone= ZONE | --region= REGION ]
Replace the following:
MIG_NAME : the name of a MIG
with an existing scaling schedule.
SCHEDULE_NAME : the name of the
scaling schedule that you want to re-enable.
ZONE or REGION : Optional:
the zone or region where your MIG is located.
REST
Note: By using the API, you can disable and re-enable multiple scaling
schedules in a single call .
To disable or re-enable scaling schedules for a MIG, use the
autoscalers.patch method
for a zonal MIG or the
regionAutoscalers.patch method
for a regional MIG.
Disabling scaling schedules
For each scaling schedule that you want to disable,
set the disabled field to true .
For example, make the following call to disable a schedule for a zonal MIG
that has an existing autoscaling policy:
PATCH https://compute.googleapis.com/compute/v1/projects/ PROJECT /zones/ ZONE /autoscalers?autoscaler= AUTOSCALER_NAME
{
"autoscalingPolicy": {
"scalingSchedules": {
" SCHEDULE_NAME ": {
"disabled": true
},
...
}
}
}
Replace the following:
PROJECT : your
project id .
ZONE : the zone where your MIG is located.
AUTOSCALER_NAME : the name of an
existing autoscaler. This is often the same as the name of the MIG.
SCHEDULE_NAME : the name of the
scaling schedule that you want to disable.
Re-enabling scaling schedules
For each scaling schedule that you want to re-enable,
set the disabled field to false .
For example, make the following call to re-enable a schedule for a zonal MIG
that has an existing autoscaling policy:
PATCH https://compute.googleapis.com/compute/v1/projects/ PROJECT /zones/ ZONE /autoscalers?autoscaler= AUTOSCALER_NAME
{
"autoscalingPolicy": {
"scalingSchedules": {
" SCHEDULE_NAME ": {
"disabled": false
},
...
}
}
}
Replace the following:
PROJECT : your
project id .
ZONE : the zone where your MIG is located.
AUTOSCALER_NAME : the name of an
existing autoscaler. This is often the same as the name of the MIG.
SCHEDULE_NAME : the name of the
scaling schedule that you want to re-enable.
Deleting a scaling schedule
Remove scaling schedules from a MIG by deleting them.
Delete schedules that you no longer need, such as schedules with an
OBSOLETE status .
An autoscaling policy must always have at least one scaling signal. If no other
autoscaling signal exists, then you cannot delete all scaling
schedules without deleting the entire autoscaling policy. If you want to delete
all scaling schedules but keep the autoscaling policy, you must add at least one
scaling signal prior to deleting all the schedules.
If you want to prevent a schedule from becoming active and save it for future
use, disable the schedule .
If you want to delete the autoscaling configuration for a MIG,
delete the autoscaler .
Permissions required for this task
To perform this task, you must have the following
permissions :
compute.autoscalers.update on the project
Console
In the Google Cloud console, go to the Instance groups page.
Go to Instance groups
Click the name of a MIG in the list.
Click Edit .
Click Group size & autoscaling to expand the section.
In the Autoscaling schedules section, click Manage .
The Scaling Schedules pane displays the list of your existing
scaling schedules.
Select the checkboxes for the scaling schedules that you want to delete.
At the top of the Scaling Schedules pane, click
delete Delete .
In the Delete schedules dialog, type delete , and then
click Delete .
You might need to wait a few minutes before your changes are effective.
You can monitor the status of your schedules by clicking
refresh Refresh
at the top of the Scaling Schedules pane.
Close the Scaling schedules pane by clicking Done .
The changes to the schedules are saved and applied to your MIG.
Click Save to exit the edit page.
gcloud
To delete a scaling schedule, use the
gcloud compute instance-groups managed update-autoscaling command
with the --remove-schedule flag.
gcloud compute instance-groups managed update-autoscaling MIG_NAME \
--remove-schedule= SCHEDULE_NAME \
[--zone= ZONE | --region= REGION ]
Replace the following:
MIG_NAME : the name of a MIG
with an existing scaling schedule.
SCHEDULE_NAME : the name of the
scaling schedule that you want to delete.
ZONE or REGION : Optional:
the zone or region where your MIG is located.
REST
Note: By using the API, you can delete multiple scaling
schedules in a single call .
To delete scaling schedules for a MIG, use the
autoscalers.patch method
for a zonal MIG or the
regionAutoscalers.patch method
for a regional MIG. For each scaling schedule that you want to delete,
set the schedule configuration to null
For example, make the following call to delete a schedule for a zonal MIG
that has an existing autoscaling policy:
PATCH https://compute.googleapis.com/compute/v1/projects/ PROJECT /zones/ ZONE /autoscalers?autoscaler= AUTOSCALER_NAME
{
"autoscalingPolicy": {
"scalingSchedules": {
" SCHEDULE_NAME ": null
...
}
}
}
Replace the following:
PROJECT : your
project id .
ZONE : the zone where your MIG is located.
AUTOSCALER_NAME : the name of an
existing autoscaler. This is often the same as the name of the MIG.
SCHEDULE_NAME : the name of the
scaling schedule that you want to delete.
Concepts
This section describes concepts related to creating and using scaling schedules
including schedule settings and details about how they work.
Scaling schedule settings
When you create and modify the scaling schedules for a MIG, each scaling
schedule contains the following settings:
Minimum required instances : The
number of VMs you require in the MIG when this
scaling schedule is active.
When this schedule is active, the MIG has at least this
number of VMs, but might have more
depending on other autoscaling settings. Additionally, the MIG
size is always restricted by the minimum and maximum number of instances
configured in the MIG's autoscaling settings.
Time zone : The location-based IANA time zone for interpreting the
schedule's start time.
A
list of available values
is defined by the
IANA time zone database —for
example, Europe/Paris . If no time zone is provided, UTC is used by
default. Some IANA time zones observe daylight saving time. To learn how
daylight saving time affects scaling schedules, see
Daylight saving time .
Duration : The amount of time that you want the scaling
schedule to be active.
The scaling schedule is active from its start time for the configured
duration. The minimum duration is 5 minutes. During this time, autoscaler
scales the MIG to have at least as many VMs as defined by
the schedule's required instances. After the specified duration, if the
current capacity is no longer needed, the autoscaler starts removing
VM instances after a default
10-minute stabilization period
and following any configured
scale-in controls .
Scaling schedules are bidirectional. VMs are removed at the stop time that
you specify and the group size is reduced to the minimum group size that you
set, unless you have specified other autoscaling signals.
When using the Google Cloud CLI or REST,
you must configure the start time and recurrence
of a scaling schedule by using a cron expression .
However, when
using Google Cloud console, you can configure the start time and recurrence of a
schedule either by using a cron expression or the following settings:
Start time : The time of day when you
want the scaling schedule to become active.
At the start time, the scaling schedule begins creating VMs whenever
the MIG size is lower than the schedule's required instances.
Set the start time to allow enough time for new VMs to boot and
initialize. For example, if your workload takes 10 minutes from
VM creation to begin serving, then set the start time to be 10 minutes
earlier than the time you need the VMs to be ready.
Recurrence : If and how often the scaling schedule
repeats, as defined by the following options:
Once : a onetime schedule that starts only on the selected date.
Every day : a repeating schedule that starts every day.
Every week : a repeating schedule that starts every week on the
selected days of the week—for example, every Monday through Friday.
Every month : a repeating schedule that starts every month on the
selected days of the month—for example, on the first day of every month.
The last days of the month (days 29 through 31) are only effective during
the months when those days occur.
Cron expressions
The start time and recurrence of a scaling schedule can be configured by using a
cron expression .
Cron is a time-based job scheduler originally used in Unix-like
computer operating systems.
Syntax
A cron expression is a string comprising
of five or six fields separated by whitespace. The following table
defines the fields of a cron expression and the possible values for each field.
Minute
Hour
Day of the month
Month
Day of the week
Year (optional)
0-59
0-23
1-31
1-12 (Jan-Dec) where 1 = Jan ,
2 = Feb , ... 12 = Dec
0-6 (Sun-Sat) or 1-7 (Mon-Sun) where 0 = Sun ,
1 = Mon , ... 6 = Sat ,
7 = Sun
2000-2036 or every year ( * ) if not provided
In addition to using these values, every field in a cron expression can
also use special characters:
Special character
Meaning
Example
*
any
If the day of month field, day of the week field,
and year field (if included) are each set to * , then
the schedule starts everyday.
-
range
If the day of week field is set to 1-5 or
Mon-Fri , then the schedule starts
every week Monday to Friday.
,
list
If the month field is set to 5,7,9 or
May,Jul,Sep , then the schedule
starts every May, July, and September.
/
step
If the month field is set to */3 , then the
schedule starts during the first month and every 3 months after that:
January, April, July, and October.
When you write a cron expression, consider the following:
Whitespace is used to separate the fields of a cron expression. Remember to
not add extra whitespace in a field that is using special characters.
When you specify both a day of the week and a day of the month (when neither
field is set to * ), the schedule uses the union of these values, not the
intersection. For example, the schedule 0 8 1 * Mon starts at 8:00 AM
on every Monday and on the first day of every month. That schedule does not
start at 8:00 AM only on Mondays that are also the first day of the month.
You can use zero or more special characters in
each field of a cron expression.
For example, if you want a schedule to start every month except May,
you can set the month field to 1-4,6-12 (a list of two ranges
without whitespace).
When using ranges ( - ), you cannot use 0-7 or Sun-Sun
for the day of the week field—to specify every
day of the week, use * , 0-6 , 1-7 , Sun-Sat ,
or Mon-Sun instead.
When using steps ( / ), remember that cron expressions are stateless,
so steps can sometimes be uneven. For example, if you want a schedule to run
every 6 hours, you can set the hours field to */6 , which behaves the same as
listing every valid multiple of 6 ( 0,6,12,18 ). The steps are even because 24
hours is divided into 6-hour parts. However, if you set the hours field
to */7 , the schedule won't always start in 7-hour intervals. Instead, */7
behaves the same as listing every valid multiple of 7 ( 0,7,14,21 ), meaning
that the schedule can start during the hours of 12 AM, 7 AM, 2 PM, and 9 PM.
Repeating schedules versus onetime schedules
Depending on how you write your cron expression, your schedule might run
once or periodically repeat. To create a schedule that only runs once, you
must specify the year field. For example, the cron expression 0 0 30 1 * 2030
configures a schedule to only start once, at midnight on January 30, 2030.
To create a schedule that repeats, use special characters to describe when
that schedule is to repeat. For example, the cron expression
30 8 * * Mon-Fri configures a schedule
to start at 8:30 AM on every Monday, Tuesday, Wednesday, Thursday, and Friday.
Schedule status information
List your scaling schedules to view their
status. A scaling schedule has the following status information:
Status ( state ): The current status of the scaling schedule, represented
by one of the following states:
Ready ( READY ): This schedule is ready but not active yet.
Autoscaler is awaiting the next occurrence of this schedule.
Active ( ACTIVE ): This schedule is active. Autoscaler
is trying to provide this MIG with at least the required instances that this
schedule specifies.
Obsolete ( OBSOLETE ): This schedule has expired; it won't be active
again. Autoscaler is ignoring this schedule because there are no future
occurrences.
Disabled ( DISABLED ): This schedule cannot be active because it was manually
disabled. Autoscaler is ignoring this schedule until it is re-enabled.
Last occurrence ( lastStartTime ): The timestamp of the last time this
scaling schedule became active. This is the actual date and time of the
last activation. For example, if you have a disabled scaling schedule
with a daily recurrence, 10 AM start time, and 2-hour duration, and
you re-enable the schedule at 11 AM today, then the lastStartTime is
11 AM today.
Next occurrence ( nextStartTime ): The timestamp of the next time this
schedule is set to become active.
Overlapping schedules
Depending on start time, recurrence, duration, and time zone, two or more
scaling schedules might overlap. When more than one schedule is active,
the autoscaler uses the greatest number of required VM instances
from all active scaling schedules. This helps you ensure that there is always
enough capacity to meet the needs of any active schedule. For example, if
you have a schedule that recurs every day 8 AM to 10 AM requiring at least
10 VMs, but also have a one-off all-day schedule requiring at least 20 VMs,
then autoscaler scales the MIG to at least 20 VMs on that day.
This is useful when you have regular, recurring capacity requirements but
sometimes need more to handle onetime events. This behavior lets you
schedule capacity without worrying about it being overridden by other
schedules with smaller VM requirements.
Additionally, an autoscaler always provides the greatest number of VM instances
required by any active autoscaling signal. For more information, see
Using an autoscaling policy with multiple signals .
Daylight saving time
The details of
daylight saving time (DST)
vary according to your scaling schedule's location-based IANA time zone .
If your schedule's time zone observes DST, the schedule's start time
automatically adjusts to stay synchronized with the time for the selected
location. For example, if you create a scaling schedule that starts every
day at 7 AM for the time zone America/New_York , then this schedule starts
whenever it is 7 AM in New York, using Eastern Daylight
Time or Eastern Standard Time accordingly.
Scaling schedules always run for the entire duration that you configure, but
they might have slightly different start and end times on the days when DST
observation switches. This happens because DST switches have
transition periods —a timeframe that is skipped on the first day of DST
and that occurs twice on the last day of DST. For example, if DST for your
time zone begins at 2 AM and has a 1-hour transition, then the clock changes
from 1:59:59 AM to 3 AM, so the timeframe 2 AM to 2:59:59 AM is skipped. If
DST for that time zone ends at 2 AM, then the clock changes from 2:59:59 AM to
2 AM, so the timeframe 2 AM to 2:59:59 AM is repeated. The following statements
assume that the time zone for your schedule uses a 1-hour DST transition.
On the first day of DST (when 1 hour is skipped), scaling schedules have
the following changes:
Schedules that are active during the skipped hour still
run for their entire duration, but to compensate
for the skipped hour, these schedules end 1 hour later than their end time
on days without DST transitions. Normally, the end time
of a schedule is the sum of the schedule's start time and duration.
But if DST skips 1 hour while a schedule is active,
and the duration and start time remain constant, then the end time for
that schedule is 1 hour more than the sum of the schedule's
start time and duration.
Schedules that are configured to start during the skipped hour
also start 1 hour later than their start time
on days without DST transitions.
On the last day of DST (when 1 hour is repeated), scaling schedules have
the following changes:
Schedules that are active during the repeat hour still
run for their entire duration, but to compensate
for the repeated hour, these schedules end 1 hour earlier
than their end time on days without DST transitions.
Normally, the end time of a schedule is
the sum of the schedule's start time and duration.
But if DST repeats 1 hour while a schedule is active,
and the duration and start time remain constant, then the end time for
that schedule is 1 hour less than the sum of the schedule's
start time and duration.
Schedules that are configured to start during the transition period
start at their configured time, but they don't restart during the second,
repeated occurrence of the start time.
Most of the time zones that observe DST use a 1-hour transition
period. But, if the time zone for your schedule uses a different
transition period—such as
the Australia/Lord_Howe time zone, which uses 30-minute
transitions—you can expect the same behavior. Just replace 1 hour
with the relevant DST transition time.
What's next
Learn about using an autoscaling policy with multiple signals .
Learn about managing autoscalers .
Learn about understanding autoscaler decisions .
Learn how to autoscale MIGs based on other types of autoscaling signals:
CPU utilization
Load balancing serving capacity
Monitoring metrics
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
