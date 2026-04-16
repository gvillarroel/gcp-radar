---
title: "Scaling based on CPU utilization \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/autoscaler/scaling-cpu
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/autoscaler/scaling-cpu
  title: "Scaling based on CPU utilization \_|\_ Compute Engine \_|\_ Google Cloud\
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
Scaling based on CPU utilization
Stay organized with collections
Save and categorize content based on your preferences.
The simplest form of autoscaling is to scale a
managed instance group (MIG)
based on the CPU utilization of its instances.
You can also autoscale a MIG based on the
load balancing serving capacity ,
Monitoring metrics ,
or schedules .
Before you begin
Review the autoscaler limitations .
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
Scaling based on CPU utilization
You can autoscale based on the average CPU utilization of a managed
instance group (MIG). Using this policy tells the autoscaler to collect the CPU
utilization of the instances in the group and determine whether it needs
to scale. You set the target CPU utilization the autoscaler should maintain and
the autoscaler works to maintain that level.
The autoscaler treats the target CPU utilization level as a fraction of the
average use of all vCPUs over time in the instance group. If the average
utilization of your total vCPUs exceeds the target utilization, the autoscaler
adds more VM instances. If the average utilization of your total vCPUs is
less than the target utilization, the autoscaler removes instances. For example,
setting a 0.75 target utilization tells the autoscaler to maintain an average
utilization of 75% among all vCPUs in the instance group.
Caution: If your application takes a long time to initialize on new VMs, Google
recommends that you do not set a target CPU utilization of 85% or above. In such
a case, if your application sees an increase in traffic, your MIG's CPUs might
be at risk of getting overloaded while your application slowly initializes on
the new VMs that the autoscaler adds.
You can also scale based on forecasted CPU utilization. For more information,
and to see if this is suitable for your workload, see
Scaling based on predictions .
Enable autoscaling based on CPU utilization
Permissions required for this task
To perform this task, you must have the following
permissions :
compute.autoscalers.create on the project
compute.instanceGroupManagers.use on the project
Console
In the console, go to the Instance groups page.
Go to Instance groups
If you have an instance group, click the name of the instance group, and
then click Edit . On the edit instance group page, do the following:
Click Group size & autosclaing to expand the section.
Click Configure autoscaling .
If you don't have an instance group, click Create instance group and
do the following:
In the Name field, specify a name for the group.
In the Instance template list, select a template.
In the Location section, depending on whether you're creating a
zonal or regional MIG, choose an option as follows:
For a zonal MIG, select Single zone , and then select a region
and a zone.
For a regional MIG, select Multiple zones , and then select a
region and zones.
In the Autoscaling section, a CPU utilization autoscaling signal
is added by default. You can either use the default values for the signal
or do the following:
Specify the minimum and the maximum numbers of instances that you want
the autoscaler to create in this group.
To edit the target CPU utilization, click the CPU utilization signal
to expand the section and specify the percentage.
Under Predictive autoscaling , select Off . To learn more
about predictive autoscaling, and whether it is suitable for your
workload, see
Scaling based on predictions .
Click Done .
You can use the Initialization period to tell the
autoscaler how long it takes for your application to initialize. Specifying an accurate
initialization period improves autoscaler decisions. For example, when scaling out, the
autoscaler ignores data from VMs that are still initializing because those VMs
might not yet represent normal usage of your application. The default initialization
period is 60 seconds.
Click Save .
gcloud
Use the
set-autoscaling
sub-command to enable autoscaling for a managed instance group. For example,
the following command creates an autoscaler that has a target CPU
utilization of 60%. Along with the --target-cpu-utilization parameter,
the --max-num-replicas parameter is also required when creating an
autoscaler:
Note: If autoscaling is already enabled for a managed instance group, the
set-autoscaling
command updates the existing autoscaler to the new specifications.
gcloud compute instance-groups managed set-autoscaling example-managed-instance-group \
--max-num-replicas 20 \
--target-cpu-utilization 0.60 \
--cool-down-period 90
You can use the --cool-down-period flag to set the initialization period, which tells the
autoscaler how long it takes for your application to initialize. Specifying an accurate
initialization period improves autoscaler decisions. For example, when scaling out, the
autoscaler ignores data from VMs that are still initializing because those VMs
might not yet represent normal usage of your application. The default initialization
period is 60 seconds.
Optionally, you can enable predictive autoscaling to scale out ahead of
predicted load. To learn whether predictive autoscaling is suitable for your
workload, see
Scaling based on predictions .
You can verify that autoscaling is successfully enabled by using the
instance-groups managed describe sub-command ,
which describes the
corresponding managed instance group and provides information about
any autoscaling features for that instance group:
gcloud compute instance-groups managed describe example-managed-instance-group
For a list of available gcloud commands and flags, see the
gcloud reference .
REST
Note: Although autoscaling is a feature of
managed instance groups, it is a separate API resource. Keep that in mind
when you construct API requests for autoscaling.
To create an autoscaler, use the
autoscalers.insert method
for a zonal MIG or the
regionAutoscalers.insert method
for a regional MIG.
The following example creates an autoscaler for a zonal MIG:
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /autoscalers/
Your request body must contain the name , target , and autoscalingPolicy
fields. autoscalingPolicy must define cpuUtilization and
maxNumReplicas .
You can use the coolDownPeriodSec field to set the initialization period, which tells the
autoscaler how long it takes for your application to initialize. Specifying an accurate
initialization period improves autoscaler decisions. For example, when scaling out, the
autoscaler ignores data from VMs that are still initializing because those VMs
might not yet represent normal usage of your application. The default initialization
period is 60 seconds.
Optionally, you can enable predictive autoscaling to scale out ahead of
predicted load. To learn whether predictive autoscaling is suitable for your
workload, see
Scaling based on predictions .
{
"name": "example-autoscaler",
"target": "https://www.googleapis.com/compute/v1/projects/myproject/zones/us-central1-f/instanceGroupManagers/example-managed-instance-group",
"autoscalingPolicy": {
"maxNumReplicas": 10,
"cpuUtilization": {
"utilizationTarget": 0.6
},
"coolDownPeriodSec": 90
}
}
For more information about enabling autoscaling based on CPU utilization,
complete the tutorial,
Using autoscaling for highly scalable apps .
How autoscaler handles heavy CPU utilization
During periods of heavy CPU utilization, if utilization is close to
100%, the autoscaler estimates that the group might already be heavily
overloaded. In these cases, the autoscaler increases the number of virtual
machines by 50% at most.
Note: This behavior might change in the future. Google recommends that you not
rely on this behavior.
What's next
Learn how to enable predictive autoscaling .
Learn about managing autoscalers .
Learn how autoscalers make decisions .
Learn how to use
multiple autoscaling signals
to scale your group.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
