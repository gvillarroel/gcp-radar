---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.629Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Chronicle SIEM top-level navigation"
feature_slug: "chronicle-siem-top-level-navigation"
latest_feature_date: "2023-10-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/administration/audit-logging"
  - "https://docs.cloud.google.com/chronicle/docs/detection/archive-a-rule"
keywords:
  - "chronicle"
  - "siem"
  - "top"
  - "level"
  - "navigation"
  - "has"
  - "redesigned"
  - "left"
---

# Chronicle SIEM top-level navigation

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Chronicle SIEM has a redesigned left-side navigation menu that makes common features easier to find.

## Extended Definition

Chronicle SIEM has a redesigned left-side navigation menu that makes common features easier to find.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/administration/audit-logging](https://docs.cloud.google.com/chronicle/docs/administration/audit-logging)
- [https://docs.cloud.google.com/chronicle/docs/detection/archive-a-rule](https://docs.cloud.google.com/chronicle/docs/detection/archive-a-rule)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- To share column sets, you must have the following permissions: chronicle.googleapis.com/savedColumnSets.create chronicle.googleapis.com/savedColumnSets.delete chronicle.googleapis.com/savedColumnSets.update chronicle.googleapis.com/savedColumnSets.list chronicle.googleapis.com/savedColumnSets.get In the Column Manager, add or remove the columns to create your customized view.
- Search for events and alerts Supported in: Google secops SIEM The search function lets you find Unified Data Model (UDM) events and alerts in your Google Security Operations instance using YARA-L 2.0 syntax .
- If your Group by value is one of the hostname fields, you have the following additional Transform options: Top N-Level Domain : Pick which level of the domain to display.
- Retrieve a saved search To retrieve and run a saved search, do the following: In the Search manager dialog, select a saved search from the list to the left.

### "Google SecOps audit logs \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/audit-logging](https://docs.cloud.google.com/chronicle/docs/administration/audit-logging)
- Source ID: `site-docs-reference-required-1`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Enable the data read setting for your Google Cloud project to record SIEM search queries run by users. chronicle.googleapis.com/feeds.get chronicle.googleapis.com/rules.list chronicle.googleapis.com/curatedRuleSets.countCuratedRuleSetDetections Logs with service name chronicleservicemanager.googleapis.com Google SecOps audit logs written using the chronicleservicemanager.googleapis.com service name are only available at the organization level, not at the project level.
- Listing actions taken by a specific user To find the actions taken by a given user, run the following query in the Logs Explorer : resource.type="audited resource" resource.labels.service="chronicle.googleapis.com" protoPayload.authenticationInfo.principalSubject=USER Identifying users who took a specific action To find the users who updated a detection rule, run the following query in the Logs Explorer : resource.type="audited resource" resource.labels.service="chronicle.googleapis.com" protoPayload.methodName="google.cloud.chronicle.v1main.RuleService.UpdateRule" Example: cloudresourcemanager.googleapis.com service name log To find the users who updated an access control role or subject, run the following query in the Logs Explorer : resource.type="project" resource.labels.service="cloudresourcemanager.googleapis.com" protoPayload.methodName="SetIamPolicy" Examples: malachitefrontend-pa.googleapis.com service name logs The following sections describe common use cases for Cloud Audit Logs that use the malachitefrontend-pa.googleapis.com service name.
- Actions in Google SecOps that generate this type of log include creating a Google Cloud Association and updating Google Cloud log filters. chronicleservicemanager.googleapis.com/gcpAssociations.create chronicleservicemanager.googleapis.com/gcpAssociations.delete chronicleservicemanager.googleapis.com/gcpSettings.delete Data Access audit logs Includes admin read operations that read metadata or configuration information.
- Actions in Google SecOps that generate this type of log include listing instances and customer metadata. chronicleservicemanager.googleapis.com/gcpAssociations.get chronicleservicemanager.googleapis.com/gcpSettings.get Logs with service name malachitefrontend-pa.googleapis.com The following log types are available for Google SecOps audit logs with the malachitefrontend-pa.googleapis.com service name.

### Archive rules \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/archive-a-rule](https://docs.cloud.google.com/chronicle/docs/detection/archive-a-rule)
- Source ID: `site-docs-reference-required-1`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Archiving a rule To archive a rule, complete the following steps: Select a rule in the left navigation and click the option icon in the top- right corner of the Google Security Operations user interface.
- Confirm Archive message Confirm Archive message continued Unarchiving a rule To unarchive a rule, complete the following steps: Click the option icon for a specific rule in the left navigation pane.
- Select a rule in the left navigation pane and click the option icon in the top right corner of the Google SecOps user interface.
- Click the filter icon at the top-right corner of the left navigation tab.

