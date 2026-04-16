---
title: "Run analysis jobs in Cloud Deploy \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deploy/docs/analysis
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/deploy/docs/promote-release
source_metadata:
  url: https://docs.cloud.google.com/deploy/docs/analysis
  title: "Run analysis jobs in Cloud Deploy \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Deploy
Guides
Send feedback
Run analysis jobs in Cloud Deploy
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Deploy lets you analyze the performance of your deployed applications
using the monitoring platform and metrics of your choice. You can use the
results of these analyses to take actions, such as
automatically roll back the deployment .
Cloud Deploy supports Google Cloud Observability and can be
extended to support other monitoring
platforms, such as Datadog or
Prometheus .
Although Cloud Deploy offers
deployment verification , which you can use to
run arbitrary containers to validate a deployment, analysis lets you use
telemetry data from Google Cloud Observability or the monitoring service of your choice
to evaluate the performance of your applications over time.
You can run analysis jobs in any target
environment (for example, staging or prod).
Supported metrics providers
Cloud Deploy supports analysis using metrics provided in either of the
following ways:
Direct integration with Google Cloud Observability
alerting policies , based on telemetry and logs in
Google Cloud Observability
Integration with non-Google metrics system (for example, Prometheus or
Datadog)
This type of custom analysis requires that your
organization provide a container
with functionality to support the specific metrics system.
Google Cloud provides a
sample integration
with Datadog.
How Cloud Deploy analysis works
This section describes how Cloud Deploy analysis works using
Google Cloud Observability alerting policies. If your organization creates a custom
container to use a different metrics provider, some of this functionality is
handled by your custom container.
Configure metrics in the metrics system of your choice.
Cloud Deploy supports Google Cloud Observability without any customization.
You can also use the metrics provider of your choice by creating a custom
container to process the telemetry.
Learn more .
Configure an alert policy
If you're using Google Cloud Observability to collect telemetry, you can use an
alert policy to detect when that telemetry indicates a
problem.
If you're using another metrics provider, alerting is the responsibility of
either that tool or your custom container.
Configure an analysis job
This consists of an analysis stanza in the
configuration file for your
delivery pipeline.
The analysis job consists of one or more analysis checks, each of which
evaluates the behavior of your deployed application based on logs or metrics
from Google Cloud Observability or from your metrics provider. The analysis job runs
for a specified duration.
Deploy your application
The analysis job runs after the deploy job, and after the verify job, if your
release includes one, but before any post-deploy jobs ,
if your release includes any.
The analysis job runs
After your application is deployed (and after any verify job completes, if
there is one), your metrics provider collects telemetry on your running
application. The analysis job waits for the amount of time you configure
(the duration ). If an alert is triggered (if you're using Google Cloud Observability
as your metrics provider) or if your custom container returns a non-zero exit
code, the analysis job fails and so does your rollout.
If none of the checks determines that there's a problem, the analysis finishes
after the duration expires, and the rollout succeeds.
Use analysis with automations
You can specify automations to use with your analysis
jobs.
For example, if you want to run an analysis on your application after it's
deployed to staging , then automatically promote the release to prod if the
analysis completes with no alerts, you can use a
promoteReleaseRule automation .
Or if you want to automatically roll back a release if an analysis job finds a
problem in prod , you can use a
repairRolloutRule automation .
Automations are not required in order to use and benefit from analysis jobs.
Custom analysis
Cloud Deploy analysis supports alerts and metrics from Google Cloud Observability.
But you can also use Cloud Deploy analysis with non-Google Cloud
metrics providers.
Configuration for custom analysis is similar to configuration for a standard
analysis, except that each check in the analysis includes a task that references
a container that you provide, the command or commands to run on that container,
and any applicable environment variables to pass to that container. Each check
in this custom analysis also includes a frequency—how often to run the
check.
Learn more .
Using analysis with a canary
A typical use for Cloud Deploy analysis is with a
canary deployment strategy . With
canary, you can use metrics from Google Cloud Observability, or the provider of your
choice, to determine whether to advance a rollout to the next phase.
And you can use an
advanceRolloutRule automation
with the analysis. For example, in the canary phase before stable , you can
include an analysis job to ensure uptime ,
and use the automation to advance the rollout to stable or not, depending on
the results of that analysis.
If you use a custom or
custom-automated canary deployment, you
configure analysis jobs inside the
configuration for each phase you want to analyse.
Learn more about canary deployments .
Analysis job run states
The following are the possible states of an analysis
job run :
IN_PROGRESS
The analysis has started and is still running. The rollout remains
IN_PROGRESS unless you cancel it.
FAILED
The analysis job detected an alert from Google Cloud Observability, or received a
non-zero exit code a custom container. The rollout state is now FAILED . But
if you ignore or retry the analysis job, the rollout state is updated to
IN_PROGRESS .
SUCCEEDED
The analysis finished (the duration has expired), and has received no
indications of unfavorable metrics. The rollout state changes to SUCCEEDED
after all other phases and jobs finish.
What's next
Try the quickstart: Analyze your application using metrics .
Learn how to set up deploy analysis
using Google Cloud Observability or
using another metrics provider .
See the config schema for analysis in the
Cloud Deploy configuration reference .
Learn more about deploy automation .
Learn more about deployment strategies .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
