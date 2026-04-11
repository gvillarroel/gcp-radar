---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.589Z"
product_name: "AI Hypercomputer"
product_slug: "ai-hypercomputer"
feature_name: "Reservation operational mode"
feature_slug: "reservation-operational-mode"
latest_feature_date: "2025-09-10"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/release-notes"
keywords:
  - "VM behavior on host error"
  - "host error handling"
  - "faulty host report"
  - "operational mode setting"
  - "fault handling mode"
  - "operational setting"
  - "reservation operational mode"
  - "fault mode"
---

# Reservation operational mode

Product: AI Hypercomputer
Coverage: HIGH

## Step 02 Summary

Adds configuration of reservation operational mode to define VM behavior and control following host errors or faulty host reports.

## Extended Definition

Reservation operational mode in AI Hypercomputer is a setting for reserved VM capacity that defines how VMs behave after a host error or a faulty host report. It determines the level of visibility and control you have over the reservation’s infrastructure and supports proactive handling of workload disruptions when unplanned maintenance is triggered by such host issues. The release notes state this capability is generally available when reserving capacity for VM creation.

## Evidence Summary

The release notes page explicitly defines the feature’s purpose, impact on VM behavior during host faults, and confirm it is generally available for VM reservation workflows.

## Source Links

- [https://docs.cloud.google.com/ai-hypercomputer/docs/release-notes](https://docs.cloud.google.com/ai-hypercomputer/docs/release-notes)

## Supporting Pages

### AI Hypercomputer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/release-notes](https://docs.cloud.google.com/ai-hypercomputer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- A reservation operational mode defines how your VMs behave after a host error or faulty host report, and it determines your level of visibility and control over the reservation's infrastructure.
- This feature helps you more proactively control disruptions to your workloads when unplanned maintenance is scheduled after a host error or faulty host report.
- Feature Generally available : When you reserve capacity for creating VMs, you can specify the reservation operational mode for your reserved capacity.
- For more information, see Reservation operational mode .

