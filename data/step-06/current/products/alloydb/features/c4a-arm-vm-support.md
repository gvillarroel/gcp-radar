---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.488Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "C4A Arm VM support"
feature_slug: "c4a-arm-vm-support"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview"
  - "https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization"
  - "https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale"
keywords:
  - "c4a"
  - "arm"
  - "vm"
  - "alloydb"
  - "supports"
  - "vms"
  - "custom"
  - "built"
---

# C4A Arm VM support

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

AlloyDB supports C4A Arm VMs on Google's custom-built Axiom processors in predefined configurations.

## Extended Definition

AlloyDB supports C4A Arm VMs on Google's custom-built Axiom processors in predefined configurations.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview](https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview)
- [https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization](https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization)
- [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale)

## Supporting Pages

### Scale an instance \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Create a read pool instance with a schedule-based policy To create a read pool instance with a schedule-based automatic scaling policy that defines a minimum number of nodes for a specific time window, run the following command: Note: If you have an existing autoscaling policy that has --autoscaler-max-node-count set , then this becomes an optional field. gcloud beta alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --read-pool-node-count = NODE COUNT \ --region = REGION ID \ --cluster = CLUSTER ID \ --project = PROJECT ID \ --enable-autoscaler \ --autoscaler-max-node-count = MAX NODE COUNT \ --autoscaler-set-schedule = SCHEDULE NAME \ --autoscaler-schedule-cron-exp = CRON EXPRESSION \ --autoscaler-schedule-duration-seconds = DURATION SECONDS \ --autoscaler-schedule-time-zone = TIME ZONE \ --autoscaler-schedule-min-node-count = MIN NODE COUNT \ --autoscaler-schedule-description = " DESCRIPTION " { --cpu-count = CPU COUNT --machine-type = MACHINE TYPE } Replace the following: MAX NODE COUNT : the maximum number of nodes that the autoscaler can create in the read pool instance.
- Create a read pool instance with CPU and schedule-based policies To create a read pool instance with both CPU-based and schedule-based automatic scaling policies, run the following command: gcloud beta alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --read-pool-node-count = NODE COUNT \ --region = REGION ID \ --cluster = CLUSTER ID \ --project = PROJECT ID \ --enable-autoscaler \ --autoscaler-max-node-count = MAX NODE COUNT \ --autoscaler-target-cpu-usage = TARGET CPU USAGE \ --autoscaler-set-schedule = SCHEDULE NAME \ --autoscaler-schedule-cron-exp = CRON EXPRESSION \ --autoscaler-schedule-duration-seconds = DURATION SECONDS \ --autoscaler-schedule-time-zone = TIME ZONE \ --autoscaler-schedule-min-node-count = MIN NODE COUNT \ --autoscaler-schedule-description = " DESCRIPTION " { --cpu-count = CPU COUNT --machine-type = MACHINE TYPE } Replace TARGET CPU USAGE with the target CPU utilization for your read pool instance, expressed as a decimal value between 0.0 and 1.0.
- Create a read pool instance with a CPU-based policy To create a read pool instance with an automatic scaling policy based on a target CPU utilization, run the following command: gcloud beta alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --read-pool-node-count = NODE COUNT \ --region = REGION ID \ --cluster = CLUSTER ID \ --project = PROJECT ID \ --enable-autoscaler \ --autoscaler-max-node-count = MAX NODE COUNT \ --autoscaler-target-cpu-usage = TARGET CPU USAGE \ { --cpu-count = CPU COUNT --machine-type = MACHINE TYPE } Replace the following: INSTANCE ID : the ID of the read pool instance.
- Otherwise, it creates a new schedule. gcloud beta alloydb instances update INSTANCE ID \ --region = REGION ID \ --cluster = CLUSTER ID \ --project = PROJECT ID \ --autoscaler-set-schedule = NEW SCHEDULE NAME \ --autoscaler-schedule-cron-exp = CRON EXPRESSION \ --autoscaler-schedule-duration-seconds = DURATION SECONDS \ --autoscaler-schedule-min-node-count = MIN NODE COUNT Replace NEW SCHEDULE NAME with the unique name for the new or updated scaling schedule.

### "Advanced query insights features overview \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview](https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview)
- Source ID: `site-docs-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Benefits of advanced query insights features The following advanced query insights features are available to help you detect and fix query performance problems: Prebuilt dashboards that help you identify query performance problems early and let you identify, diagnose, and resolve issues in a single page on the Google Cloud console.
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Advanced query insights features overview Stay organized with collections Save and categorize content based on your preferences.
- Application-centric monitoring and simplified performance diagnosis of applications built using object relational mappers (ORM).
- For example, you can customize query lengths, enable wait event analysis, and store query comments and application tags.

### "AlloyDB query tuning and optimization \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization](https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization)
- Source ID: `site-api-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- All documented hints in the following tables are available in AlloyDB: pg hint plan hint Purpose ColumnarScan(table) , NoColumnarScan(table) Influences the planner to use columnar engine for the specified table.
- Home Documentation Databases AlloyDB for PostgreSQL Reference Send feedback AlloyDB query tuning and optimization Stay organized with collections Save and categorize content based on your preferences.
- INDEX DESC(table [index]) None (built-in functionality) This hint is considered automatically by the PostgreSQL planner as long as the columns being sorted are in the index being used.
- This document describes different ways to optimize queries and manage indexes in AlloyDB for PostgreSQL.

