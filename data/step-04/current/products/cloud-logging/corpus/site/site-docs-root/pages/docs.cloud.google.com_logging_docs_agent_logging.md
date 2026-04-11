---
title: "About the Logging agent \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/logging/docs/agent/logging
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/logging/docs
source_metadata:
  url: https://docs.cloud.google.com/logging/docs/agent/logging
  title: "About the Logging agent \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Logging
Guides
Send feedback
About the Logging agent
Stay organized with collections
Save and categorize content based on your preferences.
This is a legacy agent. While this agent is
still supported,
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
Logging agent.
There will be no new feature development or support for new operating systems
for the legacy Logging agent.
This guide provides basic information about the Logging agent, an
application based on fluentd that
runs on your virtual machine (VM) instances.
In its default configuration, the Logging agent streams logs from
common third-party applications and system software to Logging;
review the list of default logs . You can
configure the agent to stream additional logs; go to Configure the
Logging agent for
details on agent configuration and operation.
It is a best practice to run the Logging agent on all your VM
instances. The agent runs under both Linux and Windows.
To install the Logging agent, see
Installing the Logging agent .
Supported operating systems
You can run the Logging agent on the following operating systems
on compatible virtual machine (VM) instances:
Rocky Linux 8
RHEL 8: rhel-8-6-sap-ha, rhel-8-8-sap-ha
SLES 12: sles-12-sp5-sap
SLES 15: sles-15-sp6, sles-15-sp3-sap, sles-15-sp4-sap, sles-15-sp5-sap
Windows Server 2016, and 2019
Windows Server Core 2016, and 2019
If you're running Container-Optimized OS VMs ,
then follow the Container-Optimized OS instructions
for collecting logs from your VMs.
Supported environments
The Logging agent is compatible with the following environments:
Compute Engine instances. The Logging agent
sends the logs to the project associated with each VM instance.
For instances without external IP addresses, you must
enable Private Google Access
to allow the Logging agent to send logs.
Note: The standard Logging agent isn't supported on on-premise
machines. However, Google Distributed Cloud comes with a version of the agent
already installed and ready to use.
For these VM instances, a minimum of 250 MiB of resident (RSS) memory is
required to run the Logging agent, but 1 GiB is recommended. For
example, at a rate of 100 1-KB-sized log entries per second, the
Logging agent with default configurations consumes 5% CPU on one
core and 150 MiB memory.
The following VM instances support Logging using their own
software, so manually installing the Logging agent on them is not
supported:
App Engine standard environment instances.
App Engine includes built-in support for Logging. For
more information, go to
Writing application logs .
App Engine flexible environment instances. Apps
running in the App Engine flexible environment can write logs that are
in addition to what is included in the App Engine standard
environment. For more information, go to
Writing application logs .
Google Kubernetes Engine node instances.
Log collection with Logging is enabled by default for new
container clusters, or you can enable it for your existing clusters. For
information, see
Configuring logging and monitoring for GKE .
For instances running on Google Distributed Cloud , the
agent collects system logs but doesn't collect application logs.
Cloud Run container instances.
Cloud Run includes built-in support for Logging.
For more information, go to Logging and viewing logs .
Cloud Run functions HTTP and background functions.
Cloud Run functions includes built-in support for Logging.
Support for on-premise and hybrid clouds
Google Cloud partners with Bindplane
to provide logging services for on-premise and hybrid cloud
platforms in a consistent
and predictable way. Using Bindplane, you can collect your own data and send
it to Logging for analysis.
Bindplane
integrates with Cloud Logging to capture data from your infrastructure and
is included with your project at no additional cost.
For more information about Bindplane and Bindplane, see
About Bindplane and Bindplane .
Agent access requirements
Running the agent requires access to the following DNS names:
OAuth2 token server: oauth2.googleapis.com
Older versions of the agent may require access to www.googleapis.com
(full URL: https://www.googleapis.com/oauth2/v3/token ).
If you're using an older version of the agent, it's recommended that you
upgrade your agent to the latest
version.
Logging APIs: logging.googleapis.com
Installing the agent requires access to the following DNS names:
(Linux) Google Cloud package repository: packages.cloud.google.com
Google download server: dl.google.com
Logging agent source code
You don't need the information in this section unless you want to understand
the source code or you have other special needs. The Logging
agent is installed by the script described in the
installation instructions .
The Logging agent, google-fluentd , is a modified version of the
fluentd log data collector.
google-fluentd is distributed in two separate packages. The source code is
available from the associated GitHub repositories:
The GitHub repository named google-fluentd
which includes the core fluentd program, the custom packaging scripts, and
the output plugin for the Cloud Logging API.
The output plugin is packaged as a Ruby gem and is included in the
google-fluentd package. It is also available separately at the Ruby gem
hosting service at fluent-plugin-google-cloud .
The content related to the Windows installer is found in the
windows-installer
folder.
The GitHub repository named google-fluentd-catch-all-config
which includes the configuration files for the Logging agent
for ingesting the logs from various third-party software packages.
Logging agent release notes
The release notes for the google-fluentd Linux package can be found at
google-fluentd/releases ,
where the release tags follow the [Major].[Minor].[Patch] semantic
versioning format.
The release notes for the Windows installers can be found at the same
location: google-fluentd/releases .
But the release tags are prefixed with Windows instead.
The release notes for the stand-alone gem fluent-plugin-google-cloud can be found at
fluent-plugin-google-cloud/releases ,
where the release tags follow the [Major].[Minor].[Patch] semantic
versioning format.
Deprecation policy
The Logging agent is subject to the Google Cloud Observability agents
deprecation policy .
Next steps
Installing the Logging agent
Configure the Logging agent
Authorize the Logging agent
Upgrading the Logging agent
After installing the agent, view your logs in the
Logs Explorer .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
