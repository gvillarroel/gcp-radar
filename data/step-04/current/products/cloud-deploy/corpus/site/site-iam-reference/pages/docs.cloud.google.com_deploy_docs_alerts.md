---
title: "Create Cloud Deploy alerts \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deploy/docs/alerts
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/deploy/docs/iam-roles-permissions
source_metadata:
  url: https://docs.cloud.google.com/deploy/docs/alerts
  title: "Create Cloud Deploy alerts \_|\_ Google Cloud Documentation"
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
Create Cloud Deploy alerts
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to use Cloud Deploy and
Google Cloud Observability to set up
alerting policies so you are notified for specific events and conditions in
Cloud Deploy.
Alerts for Cloud Deploy are generated using
platform logs stored by Cloud Logging.
Google Cloud Observability supports alerts generated using time-series data from
Cloud Monitoring, but Cloud Deploy alerts are
based on logs only .
Cloud Deploy alert policies are per delivery pipeline.
Note: In addition to the alerts described in this article, you can
subscribe to Cloud Deploy service notifications
using Pub/Sub topics.
What are alerts?
Alerts are notifications from Google Cloud Observability under certains conditions.
You specify those conditions in an alerting policy. The
Google Cloud Observability documentation describes alerting and
alerting policies in more detail. This document describes the specific
Cloud Deploy activities for which you can set up alerting policies.
Available alerts
You can set up alerting policies for the following circumstances, specific to
Cloud Deploy:
The render operation, for a given release,
has failed.
For every release, all manifests, service definitions, and any other configs
that must be rendered, are rendered for all targets before anything is
deployed. This alert notifies you if a release's render operation fails.
A rollout has failed.
This alert notifies you when a rollout within this delivery pipeline fails.
You can then take action, as described in the article
Manage rollouts .
A rollout requires
approval .
One of your targets is configured to require approval, and the release is now
being promoted to that target, but approval is pending.
A rollout with a canary deployment strategy
requires phase advancement .
When using a canary deployment strategy, each canary increment is a phase in
the rollout for that release and target. Advancing those stages can be done
manually or automatically. If there's a rollout waiting for a stage to be
advanced, this alert lets you know.
What permissions do you need?
The person using the Google Cloud console to set up alerting policies must
have the
permissions that Google Cloud Observability requires .
Configure Cloud Deploy alerts
To create an alert for a delivery pipeline:
Open the Delivery pipeline details page for the pipeline for which you
want to create an alert policy.
Click the Recommended alerts button.
The Alert policy templates dialog is displayed, showing the alert-policy
templates that are available for Cloud Deploy.
Select each policy template you want to use for this delivery pipeline.
You can also click Show options to set options for the template, and to
see current log messages related to that policy template.
Under Configure notifications , select the notification channel or
channels the notifications will be sent to.
If you don't already have notification channels configured, you can click
Manage notification channels .
By default, a maximum of 1 alert per policy is sent every 5 minutes. You can
configure this in the Show options sections of each alert policy template.
For more information about setting up alerting policies and notification
channels, see the Alerting overview .
Other ways to set up alerts
Besides creating alert policies using the Google Cloud console, you can
use the Cloud Monitoring API or
the Google Cloud Observability Terraform provider .
What's next
Learn more about Google Cloud Observability alerts.
Read about Cloud Deploy platform logs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
