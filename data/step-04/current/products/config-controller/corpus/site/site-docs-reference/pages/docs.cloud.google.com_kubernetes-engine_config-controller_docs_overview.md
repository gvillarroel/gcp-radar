---
title: "Config Controller overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/overview
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/manage-resources
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/overview
  title: "Config Controller overview \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Config Controller
Guides
Send feedback
Config Controller overview
Stay organized with collections
Save and categorize content based on your preferences.
This page explains what Config Controller is and how it relates to
Config Connector, Config Sync and Policy Controller.
Config Controller creates and manages
Google Cloud resources with a declarative, Kubernetes model.
Config Controller is a hosted version of Config Connector that simplifies
installation and maintenance. Config Controller also includes
Policy Controller and Config Sync.
With Config Controller, you can create configurations for any Google Cloud
resource. The configurations for these resources are stored in a source of truth
like a Git repository. Config Sync continuously monitors your resources to
ensure the current states of resources matches the state that you define in your
source of truth. Policy Controller can catch and enforce policy violations
on those resources before they are deployed. This flow is illustrated in the
following diagram:
Config Controller's declarative configuration approach gives you many
benefits:
Manage with Kubernetes : Use familiar Kubernetes tools and workflows to
manage Google Cloud resources and
custom workloads .
Declare desired state : Focus on what your resources look like rather
than the specifics of how you create them.
Automate drift detection and repair : Continuously monitor your
infrastructure for drift from the defined state and enable automatic
repairs.
Use GitOps for consistency : Collaborate with your colleagues on
potential changes and preview changes before they are made.
Enforce policy guardrails : Enforce policies earlier in the development
cycle and detect violations before deploying resources.
Audit infrastructure continuously : Maintain an audit trail of all
changes to help understand the history of your infrastructure.
Increase developer velocity : Improve the safety and velocity of your
cloud adoption journey by using best practices.
For a guided example showing you how to install and use a Config Controller
instance, see
Manage resources with Config Controller .
For the full installation instructions, see
Set up Config Controller .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
