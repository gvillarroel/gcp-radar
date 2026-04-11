---
title: "Google Cloud Observability agents \_|\_ Cloud Monitoring \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/monitoring/agent
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/monitoring/access-control
source_metadata:
  url: https://docs.cloud.google.com/monitoring/agent
  title: "Google Cloud Observability agents \_|\_ Cloud Monitoring \_|\_ Google Cloud\
    \ Documentation"
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
Google Cloud Observability agents
Stay organized with collections
Save and categorize content based on your preferences.
Google Cloud Observability provides the following agents for collecting metrics on Linux and Windows VM
instances.
Which agent should you choose?
Ops Agent :
The primary agent and preferred agent for collecting telemetry from your
Compute Engine instances. This agent combines logging and metrics into a single agent,
providing YAML-based configurations for collecting your logs and metrics, and features
high-throughput logging. You can configure the Ops Agent to collect metrics
from supported third-party applications .
Legacy Monitoring agent :
Gathers system and application metrics from virtual
machine instances and sends them to Cloud Monitoring. By default, the
Monitoring agent collects disk, CPU, network, and process metrics. You
can configure the Monitoring agent to monitor third-party applications to
get the full list of agent metrics.
Note: There will be no new feature development or
support for new operating systems for the legacy
Monitoring agent.
We recommend that you use the
Ops Agent for new workloads
and eventually transition your existing VMs to use the Ops Agent.
We strongly recommend against using the Monitoring agent on Windows.
Ops Agent
Read docs
Legacy Monitoring agent
Read docs
Try it for yourself
If you're new to Google Cloud, create an account to evaluate how
Monitoring performs in real-world
scenarios. New customers also get $300 in free credits to run, test, and
deploy workloads.
Try Monitoring free
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
