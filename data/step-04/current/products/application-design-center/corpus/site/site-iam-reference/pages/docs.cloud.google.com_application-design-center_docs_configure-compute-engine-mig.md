---
title: "Configure a Compute Engine MIG \_|\_ Application Design Center \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/application-design-center/docs/configure-compute-engine-mig
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/application-design-center/docs/grant-roles-service-account
source_metadata:
  url: https://docs.cloud.google.com/application-design-center/docs/configure-compute-engine-mig
  title: "Configure a Compute Engine MIG \_|\_ Application Design Center \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Application Design Center
Guides
Send feedback
Configure a Compute Engine MIG
Stay organized with collections
Save and categorize content based on your preferences.
A Compute Engine managed instance group (MIG) is a collection of VM instances
that use load balancing and automated services, like autoscaling and
autohealing. With a MIG, you can manage a group of VM instances as one entity.
For more information, see the following:
Compute Engine overview
Managed instance groups (MIGs)
This document describes the connections and parameters you can configure when
using App Design Center to create a Compute Engine MIG. The
configuration parameters are based on the terraform-google-vm
Terraform module.
Component connections
The following table includes the components that you can connect to a
Compute Engine MIG, and the resulting updates to your application and its
generated Terraform code.
Connected component
Application updates
Background information
Global Cloud Load Balancing backend
The load balancer can distribute incoming traffic to the Compute Engine MIG.
The Compute Engine MIG is added to the Cloud Load Balancing backend service groups field.
Set up a classic Application Load Balancer with a managed instance group backend
Regional Cloud Load Balancing backend
The load balancer can distribute incoming traffic to the Compute Engine MIG.
The Compute Engine MIG is added to the Cloud Load Balancing backend service groups field.
Set up a regional external Application Load Balancer with VM instance group backends
Compute Engine instance template
The Compute Engine instance template is used to create instances in the managed instance group.
The instance template self link is added to the Compute Engine MIG.
Basic scenarios for creating managed instance groups (MIGs)
Required configuration parameters
If your template includes a Compute Engine MIG component, you
must configure the following parameters before you deploy.
Parameter name
Description and constraints
Background information
Project ID
The project where you want to create the Compute Engine MIG.
Configure components
Region
region
About Regional MIGs
Instance Template
instanceTemplate
About Instance Templates
Optional configuration parameters
The following parameters are optional. To display advanced parameters, in the
Configuration area, select Show advanced fields .
Feature
Parameter name
Description and constraint information
Background information
MIG name
name
mig_name
Hostname
Hostname prefix for instances.
hostname
Target Size
targetSize
Create a MIG with autoscaling enabled.
Max Replicas
autoscalingPolicy.maxNumReplicas
Create a MIG with autoscaling enabled
Min replicas
autoscalingPolicy.minNumReplicas
Create a MIG with autoscaling enabled
Autoscaling Mode
autoscalingPolicy.mode
Autoscaling mode
Target Pools
targetPools[]
Add a managed instance group to a target pool
Distribution Policy Target Shape
distributionPolicy.targetShape
feedbackRegional MIG target distribution shape
Distribution Policy Zones
distributionPolicy.zones[]
Set a target distribution shape for VMs in a regional MIG
Stateful Disks
Device Name
statefulPolicy.preservedState.disks[]
Configuring stateful persistent disks in MIGs
Delete Rule
statefulPolicy.preservedState.disks[].autoDelete
Configuring stateful persistent disks in MIGs
Stateful IPs
Interface Name
statefulPolicy.preservedState.internalIPs[]
Configuring stateful IP addresses in MIGs
Delete Rule
statefulPolicy.preservedState.internalIPs[].autoDelete
Configuring stateful IP addresses in MIGs
Is External
statefulPolicy.preservedState.externalIPs[]
Configuring stateful IP addresses in MIGs
Update Policy
Max Surge Fixed
updatePolicy.maxSurge.fixed
Maximum surge
Instance Redistribution Type
updatePolicy.instanceRedistributionType
Proactive instance redistribution
Max Surge Percent
updatePolicy.maxSurge.percent
Maximum surge
Max Unavailable Fixed
updatePolicy.maxUnavailable.fixed
Maximum unavailable
Max Unavailable Percent
updatePolicy.maxUnavailable.percent
Maximum unavailable
Min Ready Sec
updatePolicy.minReadySec
Minimum wait time
Replacement Method
updatePolicy.replacementMethod
Replacement method
Minimal Action
updatePolicy.minimalAction
Minimal action
Type
updatePolicy.type
Update type
Most Disruptive Allowed Action
updatePolicy.mostDisruptiveAllowedAction
Most disruptive allowed action
Health Check Name
name
Health checks overview
Health Check
Type
type
Health check categories, protocols, and ports
Initial Delay Seconds
autoHealingPolicies[].initialDelaySec
Configure an autohealing policy in a MIG
Check Interval Sec
checkIntervalSec
Configure an autohealing policy in a MIG
Healthy Threshold
healthyThreshold
Configure an autohealing policy in a MIG
Timeout Sec
timeoutSec
What makes a good autohealing health check
Unhealthy Threshold
unhealthyThreshold
Configure an autohealing policy in a MIG
Response
httpsHealthCheck.response
Success criteria for HTTP, HTTPS, and HTTP/2
Proxy Header
httpsHealthCheck.proxyHeader
Headers
Port
httpsHealthCheck.port
Health check categories, protocols, and ports
Request
tcpHealthCheck.request
Success criteria for HTTP, HTTPS, and HTTP/2
Request Path
httpsHealthCheck.requestPath
Success criteria for HTTP, HTTPS, and HTTP/2
Host
httpsHealthCheck.host
Headers
Enable Logging
logConfig.enable
Health check logging information
Autoscaler Name
name
If empty, the name is derived from hostname .
Autoscaling Enabled
Create an autoscaler for the MIG.
Autoscaling groups of instances
Cooldown Period
autoscalingPolicy.coolDownPeriodSec
Initialization period
Autoscaling CPU
Target
autoscalingPolicy.cpuUtilization.utilizationTarget
Scaling based on CPU utilization
Predictive Method
autoscalingPolicy.cpuUtilization.predictiveMethod
Predictive autoscaling
Autoscaling Metric
Name
name
Autoscale to maintain a metric at a target value
Target
autoscalingPolicy.customMetricUtilizations[].utilizationTarget
Autoscale to maintain a metric at a target value
Type
autoscalingPolicy.customMetricUtilizations[].utilizationTargetType
Autoscale to maintain a metric at a target value
Scaling Schedules
Disabled
autoscalingPolicy.scalingSchedules[].disabled
Scaling based on schedules
Duration Sec
autoscalingPolicy.scalingSchedules[].durationSec
Scaling schedule settings
Min Required Replicas
autoscalingPolicy.scalingSchedules[].minRequiredReplicas
Scaling schedule settings
Name
autoscalingPolicy.scalingSchedules[]
Creating a schaling schedule
Schedule
autoscalingPolicy.scalingSchedules[].schedule
Scaling schedule settings
Time Zone
autoscalingPolicy.scalingSchedules[].timeZone
Scaling schedule settings
Autoscaling Scale in Control
Fixed Replicas
autoscalingPolicy.scaleInControl.maxScaledInReplicas.fixed
Configure scale-in controls
Percent Replicas
autoscalingPolicy.scaleInControl.maxScaledInReplicas.percent
Configure scale-in controls
Time Window Sec
autoscalingPolicy.scaleInControl.timeWindowSec
Configure scale-in controls
Named Ports
Name
namedPorts[].name
Named ports
Port
namedPorts[].port
Named ports
Wait for Instances
Whether to wait for all instances to be created/updated before returning. If set to true, when the operation fails, Terraform continues trying until the timeout is reached.
wait_for_instances
MIG Timeouts
Create
Timeout for Terraform instance creation.
create
Update
Timeout for Terraform instance update.
update
Delete
Timeout for Terraform instance deletion.
delete
Labels
Key
allInstancesConfig.properties.labels
Organize resources using labels
Value
allInstancesConfig.properties.labels
Organize resources using labels
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
