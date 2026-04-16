---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.825Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Environment groups"
feature_slug: "environment-groups"
latest_feature_date: "2025-01-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen"
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp"
keywords:
  - "environment"
  - "groups"
  - "let"
  - "administrators"
  - "organize"
  - "environments"
  - "into"
  - "logical"
---

# Environment groups

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Environment groups let administrators organize environments into logical categories for user access, IdP mapping, playbooks, and case filtering.

## Extended Definition

Environment groups let administrators organize environments into logical categories for user access, IdP mapping, playbooks, and case filtering.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen](https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen)
- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)

## Supporting Pages

### "Explore the Playbooks page \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen](https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen)
- Source ID: `site-docs-reference-2`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can select one or multiple environments, environment groups, or a combination of both.
- Environments : Multi-select option for environments and environment groups.
- Menu : Click edit Edit and select the required playbooks or blocks before using Menu to perform bulk actions: New Folder : Add a new playbooks folder; the playbook automatically inherits any changes made to its associated environment groups.
- Duplicate : Create a duplicate playbook with these options: Keep or change priority Keep in same folder or move to a different folder Single , multiple , or all environments, where all indicates all defined environments, present or future.

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- The following export filter exports Google Cloud Cloud Run ( GCP RUN ) logs, in addition to the default logs both through the direct ingestion mechanism as well as through Cloud Storage and Sinks : log id("run.googleapis.com/stdout") OR log id("run.googleapis.com/stderr") OR log id("run.googleapis.com/requests") OR log id("run.googleapis.com/varlog/system) Curated detections for AWS rule sets AWS rule sets in this category help identify threats in AWS environments using event and context data, and includes the following rule sets: AWS - Compute : Detects anomalous activity surrounding AWS compute resources, including EC2 and Lambda.
- Curated detections for Office 365 data Office 365 rule sets in this category help identify threats in Office 365 environments using event and context data, and includes the following rule sets: Office 365 - Administrative : Detects malicious, suspicious and high-risk activities in Office 365, including backup policy changes, Microsoft Purview, and ATP detections.
- Supported devices and required log types for Office 365 These rule sets have been tested and are supported with the following data sources, listed by product name and Google SecOps ingestion label : Curated detection for Okta rule sets Okta rule sets in this category help detect threats within Okta environments by analyzing event and context data.
- Curated detections for Google Cloud data Google Cloud rule sets help identify threats in Google Cloud environments using event and context data, and includes the following rule sets: Admin Action : Activity associated with administrative actions, deemed suspicious but potentially legitimate depending on organizational use.

### "SOAR migration overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)
- Source ID: `site-api-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Make sure you have added the Admin IdP group with Admin permissions for permission groups, SOC Roles and select All Environments.
- Choose the necessary access to Permission groups, Environments and SOC Roles.
- Assign the following predefined IAM roles in Google Cloud to the onboarding SME: Chronicle API Admin Chronicle Service Admin Chronicle SOAR Admin Project IAM Admin Service Usage Admin Assign one of the following predefined IAM roles to all existing SOAR users: Chronicle API Admin Chronicle API Editor Chronicle API Viewer Chronicle API Limited Viewer Complete the authentication setup in SOAR by mapping each user (including administrators) to an email user group .
- Chronicle API Admin Chronicle Service Admin Chronicle SOAR Admin Project IAM Admin Service Usage Admin Assign one of the following roles in IAM to all existing SOAR users: Chronicle API Admin Chronicle API Editor Chronicle API Viewer Chronicle API Limited Viewer Complete the authentication setup in SOAR by mapping all the IdP groups that need access to SOAR .

