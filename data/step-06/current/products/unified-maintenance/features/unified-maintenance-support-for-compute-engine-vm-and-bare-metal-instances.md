---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:17.950Z"
product_name: "Unified Maintenance"
product_slug: "unified-maintenance"
feature_name: "Unified Maintenance support for Compute Engine VM and bare metal instances"
feature_slug: "unified-maintenance-support-for-compute-engine-vm-and-bare-metal-instances"
latest_feature_date: "2026-02-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/unified-maintenance/docs/reschedule-and-on-demand-updates"
  - "https://docs.cloud.google.com/unified-maintenance/docs/supported-services"
  - "https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1"
  - "https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance"
keywords:
  - "unified"
  - "maintenance"
  - "for"
  - "compute"
  - "engine"
  - "vm"
  - "and"
  - "bare"
---

# Unified Maintenance support for Compute Engine VM and bare metal instances

Product: Unified Maintenance
Coverage: MEDIUM

## Step 02 Summary

Unified Maintenance now displays maintenance activities for Compute Engine virtual machine and bare-metal instances.

## Extended Definition

Unified Maintenance now displays maintenance activities for Compute Engine virtual machine and bare-metal instances.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/unified-maintenance/docs/reschedule-and-on-demand-updates](https://docs.cloud.google.com/unified-maintenance/docs/reschedule-and-on-demand-updates)
- [https://docs.cloud.google.com/unified-maintenance/docs/supported-services](https://docs.cloud.google.com/unified-maintenance/docs/supported-services)
- [https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1](https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1)
- [https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance](https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance)

## Supporting Pages

### Control maintenance \_|\_ Unified Maintenance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/unified-maintenance/docs/reschedule-and-on-demand-updates](https://docs.cloud.google.com/unified-maintenance/docs/reschedule-and-on-demand-updates)
- Source ID: `site-docs-reference`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- During planned maintenance, the host maintenance policy configured for the instance will be used to perform the update. https://cloud.google.com/compute/docs/instances/setting-vm-host-options#viewoptions You can perform on-demand maintenance ahead of this schedule with this instance. https://cloud.google.com/compute/docs/instances/trigger-host-maintenance-event What's next Configure alerts and notifications Implement common alert policies Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The description might look similar to the following: Description: A Google Cloud Compute Engine instance undergoes planned maintenance to update important hardware and/or software components.
- Learn more: https://cloud.google.com/sql/docs/mysql/maintenance For rescheduling the maintenance see - https://cloud.google.com/sql/docs/mysql/maintenance#reschedule-maintenance Perform on-demand updates Some Google Cloud products allow the user to apply maintenance on-demand.
- As a managed service, Cloud SQL automatically updates instances to ensure that the underlying hardware, operating system, and database engine are reliable, performant, secure, and up-to-date.

### Supported services \_|\_ Unified Maintenance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/unified-maintenance/docs/supported-services](https://docs.cloud.google.com/unified-maintenance/docs/supported-services)
- Source ID: `site-docs-reference`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Monitored Resource Type Description Cloud SQL - MySQL sqladmin.googleapis.com/Instance Yes Yes cloudsql database Cloud SQL - Postgres sqladmin.googleapis.com/Instance Yes Yes cloudsql database Cloud SQL - SQL Server sqladmin.googleapis.com/Instance Yes Yes cloudsql database AlloyDB for PostgreSQL alloydb.googleapis.com/Cluster No No alloydb.googleapis.com/Cluster Looker looker.googleapis.com/Instance No No looker.googleapis.com/Instance Compute Engine compute.googleapis.com/Instance No Yes gce instance Unified Maintenance supports these Compute Engine virtual machine instances or bare metal instances types.
- Accelerator-optimized A2, A3, A4, A4X, CT4P, CT5P, CT5LP, CT6E, G2 Cloud TPU V4, V5E, V5P, V6E Compute-optimized C2, C2D, H3, H4D General-purpose C3, C3D, C4, C4A, C4D, N1, N2, N2D Memory-optimized M1, M2, M3, M4, X4 Storage-optimized Z3 Google Kubernetes Engine container.googleapis.com/Cluster container.googleapis.com/NodePool No Yes gke cluster gke nodepool Cloud Interconnect compute.googleapis.com/Interconnect No No interconnect Cloud Composer composer.googleapis.com/Environment No No environment Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Security Unified Maintenance Resources Send feedback Supported services Stay organized with collections Save and categorize content based on your preferences.
- For more information, see Monitor and plan for a host maintenance event.

### "Package google.cloud.maintenance.api.v1 \_|\_ Unified Maintenance \_|\_\

- URL: [https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1](https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1)
- Source ID: `site-api-reference`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported fields include: - state - resource.location - resource.resourceName - resource.type - maintenance.maintenanceName - maintenanceStartTime - maintenanceCompleteTime Examples: - state="SCHEDULED" - resource.location="us-central1-c" - resource.resourceName= " /instance-20241212-211259" - maintenanceStartTime>"2000-10-11T20:44:51Z" - state="SCHEDULED" OR resource.type="compute.googleapis.com/Instance" - maintenance.maitenanceName="eb3b709c-9ca1-5472-9fb6-800a3849eda1" AND maintenanceCompleteTime>"2000-10-11T20:44:51Z" order by string Order results as specified in https://google.aip.dev/132 .
- Google Cloud Interconnect These events are usually scheduled in advance and we provide notification, when possible, so that users can plan for the infrastructure maintenance event and prevent downtime.
- Home Documentation Security Unified Maintenance Reference Send feedback Package google.cloud.maintenance.api.v1 Stay organized with collections Save and categorize content based on your preferences.
- For disruptive maintenance it should respect maintenance policy, i.e. its available windows, exclusions and notification period.

### Set up Unified Maintenance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance](https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance)
- Source ID: `site-docs-reference`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Unified Maintenance Guides Send feedback Set up Unified Maintenance Stay organized with collections Save and categorize content based on your preferences.
- If you have been granted one of the basic roles (Viewer, Editor, or Owner) in Cloud Logging for your project, you have the necessary permissions to access Unified Maintenance logs.
- It explains how to enable the Unified Maintenance API, query it directly, and how to manage maintenance event logs that are automatically sent to Cloud Logging.
- This document provides instructions on how to set up and use Unified Maintenance.

