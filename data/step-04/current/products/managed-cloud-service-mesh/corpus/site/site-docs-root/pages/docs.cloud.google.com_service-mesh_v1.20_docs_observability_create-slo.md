---
title: "Creating SLOs \_|\_ Cloud Service Mesh v1.20 \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-mesh/v1.20/docs/observability/create-slo
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/v1.20/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/v1.20/docs/observability/create-slo
  title: "Creating SLOs \_|\_ Cloud Service Mesh v1.20 \_|\_ Google Cloud Documentation"
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
Creating SLOs
This page describes how to create a service level objective (SLO) in the
Google Cloud console. For information on creating a SLO programmatically,
see
Working with the SLO API
For an overview and information on designing SLOs, see the following:
Service level objectives overview
Designing SLOs
To create an SLO:
Go to the Health tab for a service:
In the Google Cloud console, go to Cloud Service Mesh .
Go to Cloud Service Mesh
Select the Google Cloud project from the drop-down list on the menu bar.
Click the service that you want to create an SLO for.
In the left navigation bar, click Health .
Click the Create an SLO link.
Click Set your service-level indicator (SLI) to select the type of service level indicator (SLI)
to track for this SLO. Choose one of the following:
Availability : The ratio of the number of successful
responses to the number of all responses. Requests that fail before they
reach the Envoy sidecar proxy for your service (because of networking or
DNS failures, for example) aren't included in this ratio.
Latency : The ratio of the number of calls that are below the
specified Latency Threshold to the number of all calls.
For latency SLIs, enter the Latency Threshold in milliseconds.
In the Performance Goal section, enter a percentage in the Goal
field to set the performance target for the SLI. Cloud Service Mesh
uses this value to calculate the
error budget
you have for this SLO.
In the Compliance Period section, select the Period Type and the
Period Length . See
Compliance periods
for more information on these settings.
Alternatively, in the Set your SLI section, you may select Windows-based SLI. A windowed SLI can help you catch
periods of time when the service won't meet the SLO Compliance target
(such as when there are spikes in the number of requests that increase
latency for a short period of time). When you select this option, you must
specify:
Goodness criterion : Set a threshold for the percentage of "good performance" that must be met in order for a given window to count as "good."
Duration : Set the length of each window, over which SLO
performance will be measured in increments during the compliance period.
For example, suppose you have an Availability SLO with a
Rolling 7 day period, and an SLO Goal of 99 %. Then you add
a Goodness criterion of 95 % and a Duration of 5 minutes.
To be compliant, the service needs 95 % of all 5 minute windows
over the last 7 days to be available at least 99 % of the time.
Optionally, click Name your SLO to change the default SLO display
name. Cloud Service Mesh supplies a default name that describes the SLO
based on the settings.
Click Submit .
What's next
Monitoring SLOs
Creating an alerting policy on an SLO
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
