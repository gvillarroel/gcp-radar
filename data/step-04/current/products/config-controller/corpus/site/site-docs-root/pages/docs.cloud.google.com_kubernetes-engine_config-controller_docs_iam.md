---
title: "IAM permissions for Config Controller \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/iam
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/iam
  title: "IAM permissions for Config Controller \_|\_ Google Cloud Documentation"
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
IAM permissions for Config Controller
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to grant Config Controller permissions to manage
your Google Cloud resources.
Least privilege
To use Identity and Access Management securely, Google Cloud recommends following the
least privilege
best practice. In production environments, give any user accounts or processes
only those privileges which are essentially vital to perform its intended
functions.
IAM permissions for Config Connector
IAM authorizes Config Connector to take actions on Google Cloud resources.
(Recommended) Predefined or custom roles
To follow the least privilege best practice, grant the most limited
predefined roles
or
custom roles
that meet your needs. For example, if you need Config Connector to manage your
GKE cluster creation, grant the
Kubernetes Engine Cluster Admin role
( roles/container.clusterAdmin ).
You can use
role recommendations
to determine which roles to grant instead. You can also use the
Policy Simulator
to ensure that changing the role won't affect the principal's access.
Basic roles
It is recommended to have the same permissions in a non-production environment
that you have in a production environment, following the least privilege best
practice. Having the same permissions has the benefit of testing the production
configurations in non-production, and detecting issues earlier.
That said, for certain situations you may want to speed up experimenting with
Config Connector. For non-production environments, you can use one of the basic roles
as an experiment, before deciding on the most limited permissions.
Caution: Basic roles include thousands of permissions across all Google Cloud
services. In production environments, don't grant basic roles unless there is
no alternative. Instead, grant the most limited
predefined roles
or
custom roles
that meet your needs.
The
Owner role
( roles/owner ) allows Config Connector to manage most of Google Cloud resources in
your project, including IAM resources.
The
Editor role
( roles/editor ) allows most Config Connector capabilities except Project or
Organization-wide configurations such as IAM modifications.
To learn more about IAM permissions for Config Connector:
Read
IAM permissions for Config Connector .
Read
Config Connector permission troubleshooting guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
