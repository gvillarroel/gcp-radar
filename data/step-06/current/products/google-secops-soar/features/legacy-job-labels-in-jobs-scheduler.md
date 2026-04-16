---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:22.826Z"
product_name: "Google SecOps SOAR"
product_slug: "google-secops-soar"
feature_name: "Legacy job labels in Jobs Scheduler"
feature_slug: "legacy-job-labels-in-jobs-scheduler"
latest_feature_date: "2024-03-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines"
  - "https://docs.cloud.google.com/chronicle/docs/administration/migrate-legacy-siem-infra"
  - "https://docs.cloud.google.com/chronicle/docs/administration/migrate-from-legacy-auth-to-gcp-auth"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
keywords:
  - "legacy"
  - "job"
  - "labels"
  - "in"
  - "jobs"
  - "scheduler"
  - "marks"
  - "the"
---

# Legacy job labels in Jobs Scheduler

Product: Google SecOps SOAR
Coverage: MEDIUM

## Step 02 Summary

Marks legacy jobs in the Jobs Scheduler page.

## Extended Definition

Marks legacy jobs in the Jobs Scheduler page.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- [https://docs.cloud.google.com/chronicle/docs/administration/migrate-legacy-siem-infra](https://docs.cloud.google.com/chronicle/docs/administration/migrate-legacy-siem-infra)
- [https://docs.cloud.google.com/chronicle/docs/administration/migrate-from-legacy-auth-to-gcp-auth](https://docs.cloud.google.com/chronicle/docs/administration/migrate-from-legacy-auth-to-gcp-auth)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)

## Supporting Pages

### "Response integrations community contribution guidelines \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- Source ID: `site-docs-root-2`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- For changes that affect all integration items: Integration - {Update} For changes that affect all actions: Integration's Actions - {Update} For changes that affect all connectors: Integration's Connectors - {Update} For changes that affect all jobs: Integration's Jobs - {Update} If the release contained a regressive change, then in the release note you need to specify REGRESSIVE! .
- Beyond authentication parameters, all jobs should have the following parameters: Max {Hours/Days} Backwards : dictates the start time on the first iteration of the job.
- Jobs Name The Name of the job should explain to the user what this job is performing.
- Release notes The general structure for the release note should follow the following format: {integration item} - {update} For example: Get Case Details - Added ability to fetch information about affected IOCs Depending on the situation, there are unique release notes for specific scenarios: If it's a new integration: New Integration Added - {integration name} If a new action is added: New Action Added - {action name} If a new connector is added: New Connector Added - {connector name} If a new job is added: New Job Added - {job name} If a predefined widget is added to an action: {action name} - Added Predefined Widget.

### "Migrate legacy SIEM Infra to Google Cloud \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/migrate-legacy-siem-infra](https://docs.cloud.google.com/chronicle/docs/administration/migrate-legacy-siem-infra)
- Source ID: `site-docs-root-2`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Scope of migration Infra Legacy stack Modern stack Project hosting Google owned project Customer-owned Google Cloud project Authentication Legacy SIEM Authentication Google Cloud Auth: Workforce Identity Federation (WIF) or Cloud Identity Authorization Legacy SIEM RBAC Feature RBAC: Google Cloud IAM Audit Logging Limited internal logging Cloud Audit Logs: Comprehensive Google Cloud logging Before you begin Prepare your Google Cloud environment before you start the migration: Identify or create a Google Cloud organization and a Google Cloud project .
- Migrate your SIEM instance if it is any of the following types: Not deployed in your Google Cloud project OR Not using Google Cloud Authentication (Workforce Identity Federation / Cloud Identity) OR Not using Google Cloud Identity and Access Management (IAM) for Role-Based Access Control (RBAC) You don't need to migrate if your instance meets all of the following conditions: Deployed in a Google Cloud project AND Uses Workforce Identity Federation or Cloud Identity for authentication AND Uses Google Cloud IAM to manage granular access permissions Why migrate now?
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Migrating to the new infrastructure unlocks several critical benefits for your organization: Enhanced reliability and security: Leverages Google Cloud infrastructure to provide higher platform reliability, stronger privacy controls, and enhanced security controls with VPC Service Controls.

### "Migrate from legacy authentication to Google Cloud authentication \_|\_\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/migrate-from-legacy-auth-to-gcp-auth](https://docs.cloud.google.com/chronicle/docs/administration/migrate-from-legacy-auth-to-gcp-auth)
- Source ID: `site-docs-root-2`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Migrate from legacy authentication to Google Cloud authentication Supported in: Google secops SIEM This document explains how to migrate an existing Google SecOps instance from legacy SIEM authentication to Google Cloud authentication.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Under Configure single sign-on , select one of the following options based on which identity provider you use to manage user and group access to Google SecOps: If you are using Cloud Identity or Google Workspace, select Google Cloud Identity .
- If you are using a third-party identity provider, select Workforce Identity Federation , and then select the workforce provider you want to use.

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-root-2`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Ingestion labels : the label to be applied to the events from this feed.
- Ingestion labels : the label to be applied to the events from this feed.
- Ingestion labels : the label to be applied to the events from this feed.
- Ingestion labels: labels applied to the events from this feed.

