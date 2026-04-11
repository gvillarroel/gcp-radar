---
title: "Monitoring agent overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/monitoring/agent/monitoring
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/monitoring/access-control
source_metadata:
  url: https://docs.cloud.google.com/monitoring/agent/monitoring
  title: "Monitoring agent overview \_|\_ Google Cloud Documentation"
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
Monitoring agent overview
Stay organized with collections
Save and categorize content based on your preferences.
This is a legacy agent. While this agent is
still supported on Linux,
we recommend against using it for new Google Cloud workloads.
Instead, we recommend that you use the
Ops Agent
for new Google Cloud workloads and eventually transition your existing
Compute Engine VMs to use the Ops Agent.
The Ops Agent, which combines the collection of metrics and logging into a
single agent, is the eventual replacement for the legacy agents.
The Ops Agent is under active development, but there might be some
use cases that it doesn't support. If the Ops Agent doesn't support your
use case, then you can still use the
Monitoring agent on Linux.
There will be no new feature development or support for new operating systems
for the legacy Monitoring agent.
We strongly recommend against using the legacy Monitoring agent on Windows.
The legacy Monitoring agent on Windows is unsupported, and all of its features are available in the Ops Agent. We strongly recommend using Ops Agent for monitoring Windows instances. However, if you have to run the legacy Logging agent on Windows and also need to collect metrics, you must use the legacy Monitoring agent; you can't run the Ops Agent and a legacy agent on the same machine.
Caution: The 5.x version of the Monitoring agent has been
deprecated and decommissioned . For
information about the latest agent versions, see Listing all agent versions .
The Monitoring agent is a
collectd -based daemon that gathers
system and application metrics from virtual machine instances and sends them to
Monitoring. By default, the Monitoring agent collects disk, CPU,
network, and process metrics. You can configure the Monitoring agent to monitor
third-party applications to get the
full list of agent metrics .
To install the agent, see
Installing the Monitoring agent .
Note: If your
metrics scope is configured with
a VPC Service Controls Service Perimeter
for the Monitoring API, then the Monitoring agent won't work on
any virtual machine instance outside the perimeter.
To learn more about Service Perimeters, see
Service perimeter details and configuration .
Purpose
Using the Monitoring agent is optional but recommended.
Monitoring can access some instance metrics without the
Monitoring agent, including CPU utilization, some disk traffic
metrics, network traffic, and uptime information. Monitoring uses
the Monitoring agent to access additional system resources and
application services in virtual machine (VM) instances. If you want these
additional capabilities, you should install the Monitoring agent.
Note: The Monitoring agent is designed to ingest system, third-party,
custom, and agent telemetry metrics. Some of these metrics are chargeable.
For pricing information, see Google Cloud Observability pricing .
After installing the Monitoring agent, you can monitor supported
third-party applications by adding application-specific collectd
configurations. See Monitoring third-party
applications for details.
For a complete list of the built-in metrics you can get with the
Monitoring agent, see Agent metrics .
To send any custom metric to Monitoring using the agent, see
Monitoring custom applications . If you
have access to the source code of your application, it may be more convenient to
instrument it with OpenTelemetry. For information about instrumentation, see
Instrumentation and observability .
Supported configurations
The Monitoring agent is compatible with the following environments.
Virtual machine instances
You can install the Monitoring agent on the following kinds of VM
instances:
Compute Engine instances. The Monitoring agent
sends monitoring information to each instance's associated project.
For instances without external IP addresses, you must enable Private Google
Access
to allow the Monitoring agent to send metrics.
To create a Compute Engine instance, see
Compute Engine getting started guide .
Note:
The Monitoring agent is not supported on on-premises machines.
The following types of VM instances belong to managed services that implement
service-specific
Monitoring
support. Don't try to manually install or configure the Monitoring agent on them:
App Engine standard has built-in
Monitoring support. Agents aren't needed.
App Engine flexible environment instances have pre-installed agents
with service-specific configurations.
Dataflow instances have
pre-installed
Monitoring agents with service-specific configurations.
Managed Service for Apache Spark instances prior to
image version 2.2 have pre-installed
Monitoring agents with service-specific configurations.
You can install the
Ops Agent on Managed Service for Apache Spark clusters
that use image version 2.2 and later to collect syslog logs and
host metrics. For more information, see
Managed Service for Apache Spark 2.2.x release versions .
Google Kubernetes Engine node instances:
GKE on
Google Cloud clusters are configured to
collect logs and metrics with
Logging and Monitoring by default. You
can also configure metric and log collection for existing container
clusters. For information, see
Configuring logging and
monitoring for GKE .
Google Distributed Cloud
instances have an integrated logging and monitoring solution that
collects status about system components. For information, see
Logging and monitoring .
Operating systems
The Monitoring agent supports the following operating systems on
compatible VM instances.
Linux operating systems
The Monitoring agent supports the following Linux operating systems:
Rocky Linux 8
RHEL 8: rhel-8-6-sap-ha, rhel-8-8-sap-ha
SLES 12: sles-12-sp5-sap
SLES 15: sles-15-sp5, sles-15-sp3-sap, sles-15-sp4-sap, sles-15-sp5-sap
The Monitoring agent does not presently support the
Container-Optimized OS that is the default in Google Kubernetes Engine clusters.
Windows operating systems:
All versions of the Monitoring agent support the following
Windows operating systems:
Windows Server 2019
Windows Server Core 2019
Windows Server 2016
Windows Server Core 2016
The Monitoring agent does not presently support Windows Server
Core 2019 for containers.
Supported applications
You can configure Monitoring to monitor a variety of popular open
source software applications. Configuration is only possible for agents running
on Linux. Agents running on Windows can monitor IIS and MS SQL applications, but
they are not configurable for other applications.
For more information, see Monitoring third-party applications .
Note: The interoperability of the agent and third-party plugins on SUSE Linux
has not been tested. This is a known limitation.
Agent access requirements
Running the agent requires access to the following DNS names:
OAuth2 token server: oauth2.googleapis.com
Earlier versions of the agent may require access to www.googleapis.com
(full URL: https://www.googleapis.com/oauth2/v3/token ).
If you're using an older version of the agent, it's recommended that you
upgrade your agent to
the latest version.
Monitoring APIs: monitoring.googleapis.com
Installing the agent requires access to the following DNS names:
(Linux) Google Cloud package repository: packages.cloud.google.com
(Linux) Google downloads subdomain: dl.google.com
(Windows) Legacy Stackdriver download server: repo.stackdriver.com
Getting the Monitoring agent source code
The source code for the Monitoring agent is available for only the Linux-hosted
Monitoring agent. The Windows-hosted Monitoring agent is not open source.
The Monitoring agent is installed by a script described in the
installation instructions .
You can skip this section if you only want to install and use the agent. If you
want to understand the source code, then read this section.
The Monitoring agent, stackdriver-agent , is based on the
original collectd system
statistics collection daemon. stackdriver-agent source code is available at
Stackdriver/collectd .
The build and packaging scripts for the Monitoring agent are
available at Stackdriver/agent-packaging .
The configuration files for third-party applications are in the agent's
GitHub configuration repository .
The software package for stackdriver-agent contains:
The collectd daemon.
The plugin shared libraries, including the Cloud Monitoring API output plugin.
The top-level configuration files for the Monitoring agent.
Deprecation policy
The Monitoring agent is subject to the
Agents deprecation policy .
For deprecation information for legacy features and versions, refer to
Google Cloud Observability deprecations .
What's next
See Quickstart to monitor a VM instance
running an Apache web server. The quickstart includes installing the agent.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
