---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:19:23.987Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Bare Metal Solution maintenance events management"
feature_slug: "bare-metal-solution-maintenance-events-management"
latest_feature_date: "2023-08-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/manage-maintenance-events"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance-process"
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr"
keywords:
  - "maintenance"
  - "events"
  - "management"
  - "users"
  - "solution"
  - "metal"
  - "can"
  - "bare"
---

# Bare Metal Solution maintenance events management

Product: Bare Metal Solution
Coverage: LOW

## Step 02 Summary

Users can now view and respond to Bare Metal Solution maintenance events in the Google Cloud console.

## Extended Definition

Users can now view and respond to Bare Metal Solution maintenance events in the Google Cloud console.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/manage-maintenance-events](https://docs.cloud.google.com/bare-metal/docs/manage-maintenance-events)
- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance-process](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance-process)
- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)

## Supporting Pages

### Manage maintenance events \_|\_ Bare Metal Solution \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/manage-maintenance-events](https://docs.cloud.google.com/bare-metal/docs/manage-maintenance-events)
- Source ID: `site-docs-root-2`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- Manage maintenance events Bare Metal Solution lets you manage your maintenance events in the following ways: View maintenance events Approve a maintenance event Reschedule a maintenance event Cancel a maintenance event You can't interact with a maintenance event if it's past its deadline, you've already approved or rescheduled it, or it's not in the Pending state.
- The availability of Bare Metal Solution is transitioning to a specialized, allowlist-only model.
- Cancel a maintenance event Caution: We do not recommend canceling a maintenance event unless you have an urgent situation in which the maintenance activity might cause a business or service impact.
- You can reschedule a maintenance event seven days earlier or fourteen days later than the latest maintenance window proposal that is either pending, approved, or rescheduled.

### Bare Metal Solution maintenance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance-process](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance-process)
- Source ID: `site-docs-root-2`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Bare Metal Solution maintenance This page provides an overview of the process for Bare Metal Solution maintenance events that require server downtime.
- To ensure that your Bare Metal Solution environment remains reliable, secure, and up-to-date, Google Cloud occasionally performs scheduled maintenance on the underlying Bare Metal Solution hardware and infrastructure.
- Bare Metal Solution performs the following two types of maintenance: Infrastructure maintenance —Includes the maintenance of the networking devices and storage components at the data center.
- The following flowchart shows the steps involved in the Bare Metal Solution maintenance process: The following sections describe each of the steps in detail.

### "Solution Guide: Google Cloud Backup and DR for Oracle on Bare Metal Solution\

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- Source ID: `site-docs-root-2`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Figure 1 : Components for using Backup and DR with Oracle databases in a Bare Metal Solution environment As you can see in the diagram, this solution requires the following components: Bare Metal Solution regional extension– Allows you to run Oracle databases in a third-party data center adjacent to a Google Cloud data center, and use your existing on-premises software licenses.
- When you enable Direct NFS for an Oracle database, configure sufficient source CPU (for example, 8x vCPUs and 8 RMAN channels), and establish a 10GB link between your Bare Metal Solution regional extension and Google Cloud, you can back up a single Oracle database with increased throughput between 700-900+ MB/s.
- Host project– Lets you create regional subnets in a shared VPC that can connect the Bare Metal Solution regional extension to the Backup and DR Service, the backup/recovery appliance, your Cloud Storage buckets, and your Compute Engine VMs.
- You can use one profile for Compute Engine VM snapshots, and you can edit the other profile and use it for Bare Metal Solution backups.

