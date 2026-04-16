---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.319Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Processing Units for instance sizing"
feature_slug: "spanner-processing-units-for-instance-sizing"
latest_feature_date: "2021-07-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/compute-capacity"
  - "https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview"
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
keywords:
  - "sizing"
  - "units"
  - "processing"
  - "introduces"
  - "more"
  - "instance"
---

# Spanner Processing Units for instance sizing

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Introduces Spanner Processing Units (PUs) for more granular instance sizing, where one node equals 1,000 PUs and capacity can be provisioned in 100-PU increments.

## Extended Definition

Introduces Spanner Processing Units (PUs) for more granular instance sizing, where one node equals 1,000 PUs and capacity can be provisioned in 100-PU increments.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/compute-capacity](https://docs.cloud.google.com/spanner/docs/compute-capacity)
- [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview)
- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)

## Supporting Pages

### "Compute capacity, nodes and processing units \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/compute-capacity](https://docs.cloud.google.com/spanner/docs/compute-capacity)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can reduce the compute capacity of a Spanner instance except in the following scenarios: You can't store more than 10 TiB of data per node (1000 processing units).
- Compute capacity and instance configurations As described in Regional, dual-region, and multi-region configurations , Spanner distributes an instance across zones of one or more regions to provide high performance and high availability.
- Home Documentation Databases Spanner Guides Send feedback Compute capacity, nodes and processing units Stay organized with collections Save and categorize content based on your preferences.
- This page describes Spanner compute capacity and the two units of measure used to quantify it: nodes and processing units.

### Autoscaler tool overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Custom thresholds The Autoscaler tool determines the number of nodes or processing units to be added or subtracted to an instance using the recommended Spanner thresholds for the following load metrics: High priority CPU 24-hour rolling average CPU Storage utilization We recommend that you use the default thresholds as described in Creating alerts for Spanner metrics .
- To help you to balance cost control with performance needs, the Autoscaler tool monitors your instances and automatically adds or removes nodes or processing units to help ensure that they stay within the following parameters: The recommended maximums for CPU utilization .
- So, when the Autoscaler tool adds or removes nodes or processing units, it needs to allow the Spanner backend sufficient time to reassign and reorganize the splits as new capacity is added or removed from instances.
- These parameters determine the following factors: The minimum and maximum number of nodes or processing units that control how small or large your instance can be, helping you to control incurred charges.

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- With the scalability of Spanner, it means that data doesn't need to be sharded into separate database instances when more performance or storage is needed; instead, you can add more nodes.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- For more information about schema updates, including how to perform a schema update that requires data validation , see Spanner schema update documentation Consider database access and size When you develop your game server and platform services to use Spanner, consider how your game accesses the database and how to size the database to avoid unnecessary costs.
- Separate databases per tenant Unlike other workloads, where we recommend designing for multi-tenancy in Spanner by using different primary key values, for gaming data, we recommend the more conventional approach of separate databases per tenant .

