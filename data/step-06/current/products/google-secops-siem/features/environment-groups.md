---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.591Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Environment groups"
feature_slug: "environment-groups"
latest_feature_date: "2025-01-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
keywords:
  - "environment"
  - "groups"
  - "let"
  - "you"
  - "organize"
  - "environments"
  - "into"
  - "logical"
---

# Environment groups

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Environment groups let you organize environments into logical categories for administration and case management.

## Extended Definition

Environment groups let you organize environments into logical categories for administration and case management.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen](https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)

## Supporting Pages

### "Explore the Playbooks page \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen](https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen)
- Source ID: `site-api-reference`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can select one or multiple environments, environment groups, or a combination of both.
- Environments : Multi-select option for environments and environment groups.
- Menu : Click edit Edit and select the required playbooks or blocks before using Menu to perform bulk actions: New Folder : Add a new playbooks folder; the playbook automatically inherits any changes made to its associated environment groups.
- Duplicate : Create a duplicate playbook with these options: Keep or change priority Keep in same folder or move to a different folder Single , multiple , or all environments, where all indicates all defined environments, present or future.

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-api-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- The following export filter exports Google Cloud Cloud Run ( GCP RUN ) logs, in addition to the default logs both through the direct ingestion mechanism as well as through Cloud Storage and Sinks : log id("run.googleapis.com/stdout") OR log id("run.googleapis.com/stderr") OR log id("run.googleapis.com/requests") OR log id("run.googleapis.com/varlog/system) Curated detections for AWS rule sets AWS rule sets in this category help identify threats in AWS environments using event and context data, and includes the following rule sets: AWS - Compute : Detects anomalous activity surrounding AWS compute resources, including EC2 and Lambda.
- Curated detections for Office 365 data Office 365 rule sets in this category help identify threats in Office 365 environments using event and context data, and includes the following rule sets: Office 365 - Administrative : Detects malicious, suspicious and high-risk activities in Office 365, including backup policy changes, Microsoft Purview, and ATP detections.
- Supported devices and required log types for Office 365 These rule sets have been tested and are supported with the following data sources, listed by product name and Google SecOps ingestion label : Curated detection for Okta rule sets Okta rule sets in this category help detect threats within Okta environments by analyzing event and context data.
- Curated detections for Google Cloud data Google Cloud rule sets help identify threats in Google Cloud environments using event and context data, and includes the following rule sets: Admin Action : Activity associated with administrative actions, deemed suspicious but potentially legitimate depending on organizational use.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Understand suggestion ranking The editor organizes suggestions into three distinct categories to help you find fields quickly: Recently used fields : The top seven suggestions are based on fields you have used recently that match your typed field.
- Definition of events and alerts An event is generated from a raw log source that is ingested into Google SecOps and processed by Google SecOps's ingestion and normalization process.
- Home Documentation Security Google Security Operations Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- For example, the namespace grouped field groups all the values from the following UDM Fields : principal.namespace , src.namespace , and target.namespace .

