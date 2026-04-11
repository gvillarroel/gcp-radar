---
title: "Observability overview \_|\_ Cloud Service Mesh v1.20 \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-mesh/v1.20/docs/observability-overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/v1.20/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/v1.20/docs/observability-overview
  title: "Observability overview \_|\_ Cloud Service Mesh v1.20 \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

You are viewing legacy v1.20 Service Mesh documentation.
Available versions
Cloud Service Mesh latest Cloud Service Mesh 1.26 archive Cloud Service Mesh 1.24 archive Cloud Service Mesh 1.24 archive Cloud Service Mesh 1.23 archive Cloud Service Mesh 1.22 archive Cloud Service Mesh 1.21 archive Cloud Service Mesh 1.20 archive Anthos Service Mesh 1.19 archive
Home
Documentation
Networking
Cloud Service Mesh
v1.20
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Observability overview
Cloud Service Mesh provides observability into the health and performance of
your services. To obtain telemetry data, Cloud Service Mesh relies on
sidecar proxies that you inject as a
separate container into the same pods as your workloads. The proxies intercept
all inbound and outbound HTTP traffic to the workloads and report the data to
Cloud Service Mesh. With this system, service developers don't have to instrument
their code to collect telemetry data.
Cloud Monitoring and Cloud Logging are enabled in your
Google Cloud project when you install Cloud Service Mesh. To report telemetry data,
each sidecar proxy that is injected into your service pods calls the
Cloud Monitoring API and the Cloud Logging API. The telemetry data is automatically
uploaded to the Cloud Service Mesh pages in the Google Cloud console. Note that
metrics are displayed only for HTTP services on the Cloud Service Mesh pages in the
Google Cloud console.
Cloud Service Mesh provides several preconfigured service dashboards in the
Google Cloud console so you don't have to manually set up dashboards and
charts. This detailed telemetry enables operators to observe service behavior,
and empowers them to troubleshoot, maintain, and optimize their applications.
On the Cloud Service Mesh pages in the Google Cloud console, you can:
Get an overview of all services in your mesh, providing you critical,
service-level metrics on three of the
four golden signals of monitoring :
latency, traffic, and errors.
Define, review, and set alerts against service level objectives (SLOs),
which summarize your service's user-visible performance.
View metric charts for individual services and deeply analyze them with
filtering and breakdowns, including by response code, protocol, destination
pod, traffic source, and more.
Get detailed information about the endpoints for each service, and see
how traffic is flowing between services, and what performance looks like
for each communication edge.
Explore a service topology graph visualization that shows your mesh's
services and their relationships.
What's next
Control access to Cloud Service Mesh in the Google Cloud console
Learn about SLOs
Create an alerting policy on an SLO
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
