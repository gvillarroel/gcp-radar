---
title: "Autopilot partners \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners
  title: "Autopilot partners \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Resources
Send feedback
Autopilot partners
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
This page provides information about Google Kubernetes Engine (GKE)
Autopilot partner organizations and the specialized workloads that they
make available in Autopilot clusters.
What are Autopilot partner workloads?
Google Kubernetes Engine (GKE) Autopilot clusters don't usually allow
workloads that require elevated privileges, such as access to /var/run ,
privileged: true , or highly-privileged Linux file capabilities such as
NET_RAW and SYS_ADMIN .
The exceptions to this restriction are Autopilot partner workloads . A
subset of Google Cloud Partners provide specially-privileged
workloads for Autopilot clusters. You can deploy these partner
workloads to meet requirements such as collecting node-level metrics without
needing to run a sidecar container in every Pod.
Overview of the allowlisting process
Every partner workload goes through a review process to ensure that they meet
baseline requirements for GKE, such as having the least amount of
permissions required to run correctly, and fine-grained control over the
resources that the workloads can access.
We take measures such as the following to restrict the capabilities of these
deployed workloads:
Verify that the containers are pulled from the approved location.
Reject Pod specs that don't match the approved specification.
If you're a Google Cloud partner with an Autopilot workload that
requires elevated privileges and needs to be added to an allowlist, contact your
partner manager for information about the Autopilot partner program.
Run privileged partner workloads in Autopilot
In GKE version 1.32.2-gke.1652000 and later,
some partners provide allowlists that correspond to their privileged
workloads. These workloads can't run in your clusters unless you install the
corresponding allowlist. This method has the following benefits:
You have explicit control over whether a partner workload can run in your
cluster.
GKE automatically synchronizes the allowlists in your cluster
with the latest version from a Google-managed repository that stores allowlist
files for partner workloads.
Partner workloads that don't meet the strict criteria of an installed
allowlist are rejected during deployment.
For more information, see
Run privileged workloads from GKE Autopilot partners .
Privileged partner workloads that were added between 2021 and 2024 can run on
Autopilot mode without an allowlist. Cluster operators who have the
corresponding permissions can deploy these workloads in your cluster at any
time.
Pricing
Any resources that partner workloads create in your Autopilot clusters
are billed according to the
Autopilot pricing model .
For information about any additional pricing for partner solutions, consult the
relevant partner's documentation.
Autopilot partner workloads
The following sections describe the partner workloads for Autopilot. The
partner workloads available for each of your clusters depends on the
GKE version of the cluster.
This table only describes the Google Cloud partners that have
Autopilot workloads that need elevated privileges. Other
Google Cloud partners have products that work with Autopilot
without needing elevated privileges. For a full list of Google Cloud
partners, refer to the Partner Directory .
Partners that support allowlists
The following table describes partners whose workloads are available to install
with allowlists. Each entry in this table includes the path to a partner's
workload allowlists, which you can use to
configure allowlist installation and synchronization for your cluster.
Partner
Description
Attribute
Attribute offers zero-tagging technology that analyzes runtime data with eBPF to reveal costs associated with customers, features, and apps automatically, including across shared and multi-tenant setups. Attribute provides real-time insights for margin optimization, pricing strategy, and cost accountability.
Allowlist path: Attribute/sensor/*
For more information, refer to
Attribute installation guide for GKE Autopilot (login required) .
Checkmk
Checkmk helps organizations monitor the reliability and availability of
their applications, optimize resource usage, and address issues
that may arise. Checkmk can automatically discover and collect cluster-wide
data, providing visibility into GKE Autopilot
performance and health, and visualize the information with
dashboards.
Allowlist path: Checkmk/checkmk_kube_agent/*
For more information, refer to
Checkmk installation instructions for GKE Autopilot .
CrowdStrike Falcon
CrowdStrike Falcon helps secure cloud infrastructure and prevent breaches
by leveraging machine learning and human-driven threat
intelligence to reduce the attack surface and provide
visibility of events in the environment. CrowdStrike Falcon's
user space sensor provides visibility and protection for GKE
Autopilot using a single agent, protecting both the node and
containers running on it.
Allowlist path: CrowdStrike/falcon-sensor/*
For more information, refer to
CrowdStrike Falcon Deployment Guide for GKE (login required) .
Dash0
Dash0 is an agentic observability platform built on OpenTelemetry that
helps you monitor GKE Autopilot workloads with correlated logs, metrics,
and traces. By combining unified telemetry with automated analysis,
Dash0 helps you detect, understand, and resolve issues faster.
Allowlist path: Dash0/operator/*
For more information, refer to
Installing the Dash0 operator on GKE Autopilot .
Datadog
Datadog provides visibility into containerized
apps running on GKE Autopilot by collecting
metrics, logs, and traces, which helps to identify performance issues and
provide context for troubleshooting.
Allowlist path: Datadog/datadog/*
For more information, refer to
Monitor GKE Autopilot with Datadog .
Dynatrace
Dynatrace provides enterprise observability for security platform
modernization and cloud adoption with real-time discovery and AI-powered
causal context. You can deploy the Dynatrace OneAgent in your
Google Cloud environment to get automated insights
into the usage and performance of your GKE clusters.
Allowlist paths:
Dynatrace/csidriver/*
Dynatrace/csijob/*
Dynatrace/logmonitoring/*
For more information, refer to the
Dynatrace installation instructions for GKE Autopilot .
Gremlin
Gremlin helps enterprises to build more reliable systems by
identifying and addressing potential failure points.
Its cloud-native platform integrates with Google Cloud, allowing DevOps teams to
test reliability and detect risk across cloud
infrastructure and applications.
Allowlist path: Gremlin/agent/*
For more information, refer to the
Installing Gremlin on GKE Autopilot .
Harness
Harness Chaos Engineering lets you to introduce faults into applications and infrastructure to test the resilience of business services. The platform provides tools to build a scalable resilience testing practice, with features like Experiments, ChaosGuard for governance, and AI-powered recommendations. It also offers enterprise capabilities such as RBAC, SSO, and auditing.
Allowlist path: Harness/allowlists/*
For more information, refer to the
Harness Chaos Engineering documentation for GKE Autopilot .
Kodem
Kodem integrates code and runtime analysis to provide security teams with contextual insights. Kodem provides visibility across source code, containers, OS, and memory to help identify exploitable vulnerabilities. This visibility helps security teams to prioritize, determine the root cause, and remediate or mitigate risks.
Allowlist paths:
Kodem-Security/koltan/*
Kodem-Security/komon/*
For more information, refer to the
Kodem Security Runtime sensors for GKE Autopilot (login required) .
Orca Sensor
Orca Sensor is an eBPF-based sensor that can be deployed
to GKE Autopilot clusters to provide runtime
visibility and protection that's integrated with the Orca Cloud
Security Platform.
Allowlist path: Orca-Security/orca-allowlist/*
For more information, refer to the
Orca Sensor installation guide (login required) .
Prisma Cloud by Palo Alto Networks
Prisma Cloud DaemonSet Defenders enforce policies for your
environment. Prisma Cloud Radar displays a visualization of
your nodes and clusters so you can identify risks and investigate incidents.
Allowlist path: Palo-Alto-Networks/prisma-cloud-defender/*
For more information, refer to the
Prisma Cloud Kubernetes installation guide .
SentinelOne Cloud Workload Security for Containers
SentinelOne provides an AI-powered threat protection solution for containerized workloads. This solution lets you monitor, detect, and analyze process,
file, and binary-based threats across nodes and containers
within GKE Autopilot clusters.
Allowlist path: SentinelOne/s1-agent/*
For more information, refer to the
SentinelOne Kubernetes installation guide (login required) .
Steadybit
Steadybit is a platform for chaos engineering that helps teams improve
the reliability and resilience of their systems by injecting
failures and testing how applications respond. It offers automation tools
to simulate disruptions in
cloud-native environments.
Allowlist path: Steadybit/extension-container/*
For more information, see
Steadybit on GKE Autopilot .
Sysdig Secure DevOps Platform
The Sysdig Secure Devops Platform helps you implement container security
practices in your GKE Autopilot clusters,
including monitoring and securing workloads using the Sysdig agent.
The Sysdig agent is a host component that processes syscall, creates capture files,
and performs auditing and compliance.
Allowlist path: Sysdig/agent/*
For more information, refer to
Visibility and Security for GKE Autopilot .
Trend Micro
Trend Vision One Container Security provides protection for containers from development through deployment and in production. It helps prevent pre-runtime and runtime vulnerabilities, attacks, and misconfigurations in containerized applications.
Allowlist path: Trend-Vision-One/trendmicro-scout/*
For more information, refer to the
Trend Vision One installation guide for Container Security on GKE .
Upwind
Upwind is a Cloud Security Platform that uses runtime context to
identify risks, threats, and insights from cloud infrastructure
and workloads. Its eBPF-based sensor for GKE
Autopilot clusters provides runtime context for posture
management, real-time threat detection, and defense measures,
to help ensure security.
Allowlist path: Upwind/upwind-agent/*
For more information, refer to the
Upwind GKE Autopilot compatibility update .
Uptycs
Uptycs Container Security Platform helps you implement security best practices for
GKE Autopilot clusters through its eBPF runtime
sensor-based monitoring solution. The platform offers visibility into
processes, connections, and Kubernetes RBAC security controls by providing
security monitoring, compliance capabilities, and threat detection across
containerized workloads and nodes.
Allowlist path: Uptycs/uptycs-runtime-sensor/*
For more information, refer to the
Uptycs GKE Autopilot compatibility update .
Virtana
Virtana Container Observability provides visibility into Kubernetes,
OpenShift, and containerized environments. Built on open-source telemetry,
it helps teams detect and resolve issues, optimize resource usage, and
maintain performance.
Allowlist paths:
Virtana/cadvisor/*
Virtana/node-exporter/*
For more information, refer to
Deploy Virtana on GKE Autopilot clusters .
Wiz Runtime Sensor
The Wiz Runtime Sensor provides detection and response capabilities
for cloud workloads. It is an eBPF-based agent that can be
deployed to GKE clusters to provide real-time visibility and
monitoring of running processes, network connections, file activity, and
system calls to detect, investigate, and respond to malicious behavior
affecting the workload.
Allowlist path: Wiz/wiz-sensor/*
For more information, refer to the
Wiz Runtime Sensor overview .
Partners that don't support allowlists
The following table describes partners whose workloads don't support allowlists. These workloads might have fewer features, such as a lack of support for private image registries.
Partner
Description
Aqua
Aqua supports securing and ensuring compliance for the full lifecycle
of workloads on GKE Autopilot, and specifically
the Kubernetes pods, which run multiple containers with shared sets of
storage and networking resources.
For more information, refer to
Protecting Cloud Native Workloads on GKE Autopilot .
Check Point CloudGuard
Check Point CloudGuard provides unified, cloud-native security across
your applications, workloads, and network. You can use it to manage your
security posture across Google Cloud
environments.
For more information, refer to
Onboarding Kubernetes clusters .
Elastic Cloud on Kubernetes (ECK)
Built on the Kubernetes Operator pattern, Elastic Cloud on Kubernetes
(ECK) extends the basic Kubernetes orchestration capabilities to support
the setup and management of the Elastic Stack on Kubernetes. With
Elastic Cloud on Kubernetes you can manage and monitor multiple
clusters, scale cluster capacity and storage, and perform safe
configuration changes through rolling upgrades.
For more information, refer to the
ECK Quickstart .
HashiCorp Consul
HashiCorp Consul is a service networking solution to automate network
configurations, discover services, and enable secure connectivity across
environments, including GKE Autopilot.
For more information, refer to the
Consul
installation instructions for GKE Autopilot .
Kubecost
Kubecost provides real-time cost visibility and insights for teams using
GKE, including Autopilot, helping you
monitor your Kubernetes costs.
For more information, refer to the
Kubecost
installation instructions for GKE Autopilot .
Lacework
Lacework provides visibility and context to defend cloud
environments by using machine learning. The Lacework security platform
learns normal behavior in your cloud environment to help you spot
threats.
For more information, refer to the
Lacework
installation instructions for GKE Autopilot .
New Relic
The New Relic Kubernetes integration gives you observability into
the health and performance of your environment by using the New Relic
infrastructure agent, which collects telemetry data from your cluster using
several New Relic integrations such as the Kubernetes events integration,
the Prometheus Agent, and the New Relic Logs Kubernetes plugin.
For more information, refer to the
New Relic
installation instructions for GKE Autopilot .
Splunk Observability Cloud
Splunk Observability Cloud provides visibility into the
composition, state, and ongoing issues within a cluster.
For more information, refer to the
Splunk Kubernetes installation guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
