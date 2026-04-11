---
title: "Quotas and limits \_|\_ Service Extensions \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-extensions/docs/quotas
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-extensions/docs
source_metadata:
  url: https://docs.cloud.google.com/service-extensions/docs/quotas
  title: "Quotas and limits \_|\_ Service Extensions \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Service Extensions
Resources
Send feedback
Quotas and limits
Stay organized with collections
Save and categorize content based on your preferences.
This document lists the quotas and system limits that apply to
Service Extensions.
Quotas have default values, but you can typically request
adjustments.
System limits are fixed values that can't be changed.
Quotas
Google Cloud uses quotas to help ensure fairness and reduce
spikes in resource use and availability. A quota restricts how much of a
Google Cloud resource your Google Cloud project can use. Quotas
apply to a range of resource types, including hardware, software, and network
components. For example, quotas can restrict the number of API calls to a
service, the number of load balancers used concurrently by your project, or the
number of projects that you can create. Quotas protect the community of
Google Cloud users by preventing the overloading of services. Quotas also
help you to manage your own Google Cloud resources.
The Cloud Quotas system does the following:
Monitors your consumption of Google Cloud products and services
Restricts your consumption of those resources
Provides a way to
request changes to the quota value
and automate quota adjustments
In most cases, when you attempt to consume more of a resource than its quota
allows, the system blocks access to the resource, and the task that
you're trying to perform fails.
Quotas generally apply at the Google Cloud project
level. Your use of a resource in one project doesn't affect
your available quota in another project. Within a Google Cloud project, quotas
are shared across all applications and IP addresses.
For more information, see the
Cloud Quotas overview .
To adjust most quotas, use the Google Cloud console.
For more information, see
Request a quota adjustment .
The following quotas apply to Service Extensions. They can be
increased on request.
Quotas
Value
Maximum number of global authorization extensions in a project
10
Maximum number of global edge extensions in a project
100
Maximum number of global route extensions in a project
100
Maximum number of global traffic extensions in a project
100
Maximum number of authorization extensions per region in a project
10
Maximum number of route extensions per region in a project
100
Maximum number of traffic extensions per region in a project
100
Maximum number of plugins per project
100
Cloud Load Balancing only: Maximum number of plugins attached to
Application Load Balancers through edge extensions per project
5 at any given point in time
Cloud Load Balancing only: Maximum number of plugins attached to
Application Load Balancers through route extensions per project,
per location, and per load balancing scheme
5 at any given point in time
Cloud Load Balancing only: Maximum number of plugins attached to
Application Load Balancers through traffic extensions per project,
per location, and per load balancing scheme
5 at any given point in time
Media CDN only: Maximum number of plugin resources attached to
Media CDN services through WasmAction
resources per project
5 at any given point in time
Limits
There are also system limits on Service Extensions resources.
System limits can't be changed.
Service Extensions enforces the following usage limits:
Usage limit
Value
Maximum number of extension chains per attachment point
5
Maximum number of plugins in an edge extension chain
1
Maximum number of plugins or callouts in a route extension chain
1
Maximum number of plugins or callouts in a traffic extension chain
3
Maximum execution duration per request.
The duration is the sum of the durations of all Proxy-Wasm callbacks
associated with the request. Plugins that exceed the limit are terminated,
which causes the associated request to return an HTTP 500 status code.
1 ms
Maximum size of a compiled plugin along with the plugin configuration data.
5 MiB
Maximum size of the plugin configuration data
when provided directly (by using file upload in the Google Cloud console, the
--plugin-config or --plugin-config-file option
with the Cloud SDK, or the WasmPluginVersion.plugin_config_data
field with the REST API) and not by using Artifact Registry.
900 KiB
Maximum CPU used per request.
Maximum normalized vCPU used per plugin invocation.
Plugins that exceed this limit are terminated, which causes the associated
request to return an HTTP 500 status code.
1 msec
Maximum memory used by a plugin
Maximum allocated memory held by a plugin instance.
Plugins that exceed this limit are terminated, which causes the associated
request to return an HTTP 500 status code.
16 MiB
Maximum size of the log content emitted by a plugin per invocation
When the limit is exceeded, further logs are dropped.
16 KiB
Maximum number of log entries emitted by a plugin per invocation
When the limit is exceeded, further logs are dropped.
16
Maximum number of versions per plugin
100
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
