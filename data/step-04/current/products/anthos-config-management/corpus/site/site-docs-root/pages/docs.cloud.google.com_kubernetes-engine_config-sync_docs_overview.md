---
title: "Config Sync overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/overview
  title: "Config Sync overview \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Config Sync
Guides
Send feedback
Config Sync overview
Stay organized with collections
Save and categorize content based on your preferences.
This page provides an overview of Config Sync, the GitOps service included
with Google Kubernetes Engine.
Adopting GitOps as a universal best practice helps
organizations manage Kubernetes configuration at scale. By using a central
source of truth like a Git repository, you can improve stability, consistency,
and security.
Key Term: GitOps is an approach to managing infrastructure and application
configuration by using a version control system like Git as the single source of
truth.
Config Sync helps you implement GitOps by automating the synchronization of
your configuration and policies across any number of clusters. Automatic syncing lets you
manage fleets of clusters centrally, prevent configuration drift,
and empower both platform and application teams.
This page is for Operators who want to
implement GitOps tools to centralize configuration management for their teams.
To learn more about common roles and
example tasks that we reference in Google Cloud content, see
Common GKE user roles and tasks .
Pricing
For information about pricing, see GKE pricing .
Why choose Config Sync for GitOps on GKE?
Although all GitOps tools provide benefits like improved stability and consistency,
Config Sync provides a set of unique advantages:
Integration with GKE and other Google Cloud
products : Config Sync is compatible with the Google Cloud console,
Terraform, or Google Cloud CLI. Config Sync extends the functionality of
GKE and works well with services like Policy Controller,
Workload Identity Federation for GKE, and Cloud Monitoring. The built-in integration
helps you set up GitOps and eases the maintenance burden required for
open-source alternatives.
Built-in observability : Config Sync includes a dashboard in the
Google Cloud console that requires no extra setup. You can view the sync status
of all your clusters and configs from a central location, or use the
Google Cloud CLI to check for reconciliation issues.
Scalable multi-cluster and multi-team management : Config Sync is
designed for both centralized platform administration and delegated
application management. Its architecture is tested to be horizontally and
vertically scalable, letting you manage clusters at scale and empower your
application teams to safely manage their own environments.
How Config Sync works
Config Sync continuously monitors a central source of truth and
automatically reconciles the state of your clusters to match it. You can use a
Git repository, OCI image, or Helm chart as your source of truth.
The following diagram shows an overview of how a platform administrator can
manage central policies while three application operators manage their own
namespace configurations. The namespaces all have the same admin configuration,
but each namespace has a different application configuration.
Configuring clusters
Config Sync lets you create a common set of configuration and policies, such
as Policy Controller constraints , and consistently apply them across
registered and connected clusters from a single source of truth.
Instead of repeatedly running the kubectl apply command manually, you can
orchestrate configuration changes across fleets of clusters.
Configuring namespaces
You can use Config Sync to provision and manage Kubernetes namespaces with
namespace-scoped policies, such as RBAC roles . These policies can help you
implement and manage multi-tenancy within your clusters, letting
application teams to manage their own configurations safely.
What's next
Quickstart: Sync from a Git repository
Install Config Sync with default settings
Review GitOps best practices
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
