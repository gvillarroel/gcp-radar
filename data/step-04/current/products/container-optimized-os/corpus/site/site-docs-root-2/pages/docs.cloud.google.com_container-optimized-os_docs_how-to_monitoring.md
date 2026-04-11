---
title: "Monitoring system health with Node Problem Detector \_|\_ Container-Optimized\
  \ OS \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/container-optimized-os/docs/how-to/monitoring
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits
source_metadata:
  url: https://docs.cloud.google.com/container-optimized-os/docs/how-to/monitoring
  title: "Monitoring system health with Node Problem Detector \_|\_ Container-Optimized\
    \ OS \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Container-Optimized OS
Guides
Send feedback
Monitoring system health with Node Problem Detector
Stay organized with collections
Save and categorize content based on your preferences.
Starting with Milestone 77, Container-Optimized OS includes the
Node Problem Detector
agent. You can use this feature to monitor the system health of COS instances.
Node Problem Detector monitors the instance health and reports health-related
metrics to Cloud Monitoring, including capacity and error metrics that
you can then visualize with Google Cloud Observability dashboards .
Collected metrics from the default configuration are free. Google will use aggregated metrics to
understand node problems and improve the reliability of Container-Optimized OS.
The agent is pre-configured with the set of metrics to export. Customizing reported metrics for the
built-in agent is not supported at this time. Node Problem Detector is
open-source software. You can review its
source code
and configurations
in their respective source repositories.
Note: The Node Problem Detector monitors the VM and not the docker containers
hosted on the COS VM. You will see metrics for the entire VM and nothing specific
to the containers.
Enabling health monitoring
Note: Google Kubernetes Engine Container-Optimized OS nodes and
Google Distributed Cloud cluster nodes from version 1.4.0+ have Node
Problem Detector enabled by default.
The Node Problem Detector agent is disabled by default at boot time. You can enable
this feature by using:
cloud-init
startup script
metadata
user-defined guest policies
Using a startup script
You can enable Node Problem Detector by using a
startup script .
Using cloud-init
The cloud-init example
explains the basics of configuring a Container-Optimized OS instance. You can
use cloud-init to enable health monitoring with the following cloud-config
example:
#cloud-config
runcmd:
- systemctl start node-problem-detector
Using metadata
In Container-Optimized OS Milestone 88 and later, the Node Problem Detector can
also be enabled by setting the value of google-monitoring-enabled to true in
the custom metadata section.
To enable monitoring when creating an instance:
gcloud compute instances create VM_NAME \
--image= IMAGE \
--image-project=cos-cloud \
--metadata=google-monitoring-enabled=true
Replace the following:
VM_NAME :
name of the new VM
IMAGE :
a specific version of a public Container-Optimized OS image. For example, --image=cos-113-18244-85-29 .
To enable monitoring in an existing instance:
gcloud compute instances add-metadata VM_NAME \
--metadata=google-monitoring-enabled=true
Replace VM_NAME with the name of the VM.
Starting in milestone 97 ,
monitoring can be enabled in project metadata:
gcloud compute project-info add-metadata \
--metadata google-monitoring-enabled = true
Note: Metadata flags defined at the instance level take precedence over
metadata flags defined at the project level.
After execution, the node-problem-detector service will be enabled.
Using user-defined guest policies
Container-Optimized OS includes OS Config agent , that uses OS system utilities to maintain the state for the VM
that is specified in the guest policy. For details about guest policies,
see Enable OS Config agent and Create a guest
policy . The following guest policy enables the Node problem detector agent on all the instances.
recipes:
- name: recipe-enable-npd
desiredState: INSTALLED
installSteps:
- scriptRun:
interpreter: SHELL
script: |-
#!/bin/bash
systemctl start node-problem-detector
Viewing the collected metrics
Node Problem Detector reports a list of metrics against a
Compute Engine instance monitored resource.
The metrics are documented on
Monitoring metrics list , prefixed
with compute.googleapis.com/guest/ . You can view the collected metrics
using
Monitoring Metrics Explorer :
Note: To view the metrics, the minium version of the node-problem-detector is v0.7.0 .
In the Google Cloud console, go to Monitoring or use the
following button:
Go to Monitoring
In the Monitoring navigation pane, click Metrics explorer .
For the resource type, select Compute Engine VM instance .
Select a metric, for example "Problem Count".
You should see charts and statistics on the right side. To view the result
for a specific Container-Optimized OS instance, set the filter to
"instance_id= [INSTANCE_ID] " , replacing [INSTANCE_ID]
with the ID for the desired instance.
Disabling health monitoring
To disable the service that has already been enabled through your cloud-config
or through your startup script ,
remove the systemctl start node-problem-detector step, and then reboot the
Container-Optimized OS instance. If enabled by metadata , make sure the
google-monitoring-enabled key is set to false .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
