---
title: "Provision Config Sync resources with Terraform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/terraform
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/terraform
  title: "Provision Config Sync resources with Terraform \_|\_ Google Cloud Documentation"
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
Provision Config Sync resources with Terraform
Stay organized with collections
Save and categorize content based on your preferences.
HashiCorp Terraform is an infrastructure-as-code (IaC) tool that lets you
provision and manage cloud infrastructure. Terraform provides plugins called
providers that let you interact with cloud providers and other APIs. You can
use the Terraform provider for Google Cloud to provision and manage
Google Cloud resources, including Config Sync.
This page introduces you to using Terraform with Config Sync, including an
introduction to how Terraform works and some resources to help you get started using
Terraform with Google Cloud. You'll also find links to Terraform reference docs for
Config Sync, code examples, and guides for using Terraform to provision
Config Sync resources.
For instructions on how to get started with Terraform for Google Cloud, see
Install and configure Terraform or the
Terraform for Google Cloud quickstart .
How Terraform works
Terraform has a declarative and configuration-oriented syntax, which you can
use to describe the infrastructure that you want to provision in your
Google Cloud project. After you author this configuration in one or more
Terraform configuration files, you can use the Terraform CLI to apply this
configuration to your Config Sync resources.
The following steps explain how Terraform works:
You describe the infrastructure you want to provision in a Terraform
configuration file . You don't need to write code describing how to
provision the infrastructure. Terraform provisions the infrastructure for you.
You run the terraform plan command, which evaluates your configuration and
generates an execution plan. You can review the plan and make changes as
needed.
You run the terraform apply command, which performs the following
actions:
It provisions your infrastructure based on your execution plan by invoking
the corresponding Config Sync APIs in the background.
It creates a Terraform state file , which is a JSON file that maps the resources
in your configuration file to the resources in the real-world infrastructure. Terraform uses
this file to keep a record of the most recent state of your infrastructure, and to determine
when to create, update, and destroy resources.
When you run terraform apply , Terraform uses the mapping in
the state file to compare the existing infrastructure to the code, and make
updates as necessary:
If a resource object is defined in the configuration file, but doesn't exist in the
state file, Terraform creates it.
If a resource object exists in the state file, but has a different
configuration from your configuration file, Terraform updates the resource
to match your configuration file.
If a resource object in the state file matches your configuration file,
Terraform leaves the resource unchanged.
Terraform resources for Config Sync
Resources are the fundamental elements in the Terraform language. Each
resource block describes one or more infrastructure objects, such as virtual
networks or compute instances.
The following table lists the Terraform resources available for
Config Sync:
Service
Terraform resources
GKEHub
google_gke_hub_feature
google_gke_hub_feature_membership
Terraform-based guides for Config Sync
The following table lists Terraform-based how-to guides and tutorials for
Config Sync:
Guide
Details
Install Config Sync
This guide includes instructions for configuring Config Sync with Terraform.
Manage team resources across your fleet
This guide explains how to use Config Sync and Terraform to dynamically create team-scoped resources across a fleet of clusters.
What's next
Terraform code samples for Config Sync
Terraform on Google Cloud documentation
Google Cloud provider documentation in HashiCorp
Infrastructure as code for Google Cloud
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
