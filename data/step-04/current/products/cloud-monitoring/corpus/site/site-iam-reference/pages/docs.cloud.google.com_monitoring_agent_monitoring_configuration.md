---
title: "Configure the Monitoring agent \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/monitoring/agent/monitoring/configuration
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/monitoring/access-control
source_metadata:
  url: https://docs.cloud.google.com/monitoring/agent/monitoring/configuration
  title: "Configure the Monitoring agent \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Monitoring
Guides
Send feedback
Configure the Monitoring agent
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to configure which built-in metrics the
Monitoring agent collects from a Linux VM.
The content on this page is intended for system administrators who want to
modify the default configuration of the Monitoring agent.
You cannot configure the Monitoring agent when it is installed on a Windows VM.
This page doesn't describe how to configure the Monitoring agent to monitor
third-party applications or how to use the agent to collect user-defined
metrics. For information on those topics, see the following pages:
Monitoring third party applications
User-defined metrics from the agent
Before you begin
If you haven't installed the Monitoring agent on a VM,
see Install the Monitoring agent .
Changing the default Monitoring agent configuration
To change the configuration of the Monitoring agent, do the following:
Edit the Monitoring agent configuration file /etc/stackdriver/collectd.conf .
Restart the Monitoring agent by running the following command:
sudo service stackdriver-agent restart
Stopping the collection of process metrics
For information about how to stop the collection of
process metrics—the metrics with the prefix
agent.googleapis.com/processes —see
Disable collection of process metrics .
Configuring reported CPU metrics
By default, the Monitoring agent reports the total CPU utilization by state
for all CPUs on the VM by using the
agent.googleapis.com/cpu/utilization metric type.
This behavior is specified in the configuration file by the following
settings:
ValuesPercentage true
ReportByCpu false
You must modify these settings if you want the agent to report the
utilization per CPU, or if you want it to report CPU usage time,
agent.googleapis.com/cpu/usage_time , metrics:
To configure the Monitoring agent to report the
agent.googleapis.com/cpu/utilization per CPU,
do the following:
Leave ValuesPercentage at the default value of true .
Set ReportByCpu to true .
To configure the Monitoring agent to report the
agent.googleapis.com/cpu/usage_time per CPU, do the following:
Set ValuesPercentage to false .
Set ReportByCpu to true .
The Monitoring agent can either report the CPU utilization or the CPU usage,
but not both metrics.
This is a known limitation of collectd .
When ReportByCpu is true , the ValuesPercentage field determines
if the utilization or usage is reported. When ReportByCpu is false ,
the agent reports the CPU utilization.
Troubleshooting
If you're having trouble installing or running the agent, see
Troubleshooting agent installation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
