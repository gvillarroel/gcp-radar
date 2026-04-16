---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.647Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Chronicle dashboard file sharing"
feature_slug: "chronicle-dashboard-file-sharing"
latest_feature_date: "2023-06-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-dashboards"
  - "https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview"
keywords:
  - "chronicle"
  - "dashboard"
  - "file"
  - "sharing"
  - "dashboards"
  - "can"
  - "shared"
  - "between"
---

# Chronicle dashboard file sharing

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Chronicle dashboards can be shared between instances or between users within the same instance without creating copies.

## Extended Definition

Chronicle dashboards can be shared between instances or between users within the same instance without creating copies.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-dashboards](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-dashboards)
- [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you add the following to your search, it limits the results to a maximum of 25: limit: 25 Note: You can also add the limit keyword to custom dashboards.
- Types of grouped UDM fields You can search across all of the following grouped UDM fields: Grouped field name Associated UDM fields domain about.administrative domain about.asset.network domain network.dns.questions.name network.dns domain principal.administrative domain principal.asset.network domain target.administrative domain target.asset.hostname target.asset.network domain target.hostname email intermediary.user.email addresses network.email.from network.email.to principal.user.email addresses security result.about.user.email addresses target.user.email addresses file path principal.file.full path principal.process.file.full path principal.process.parent process.file.full path target.file.full path target.process.file.full path target.process.parent process.file.full path hash about.file.md5 about.file.sha1 about.file.sha256 principal.process.file.md5 principal.process.file.sha1 principal.process.file.sha256 security result.about.file.sha256 target.file.md5 target.file.sha1 target.file.sha256 target.process.file.md5 target.process.file.sha1 target.process.file.sha256 hostname intermediary.hostname observer.hostname principal.asset.hostname principal.hostname src.asset.hostname src.hostname target.asset.hostname target.hostname ip intermediary.ip observer.ip principal.artifact.ip principal.asset.ip principal.ip src.artifact.ip src.asset.ip src.ip target.artifact.ip target.asset.ip target.ip namespace principal.namespace src.namespace target.namespace process id principal.process.parent process.pid principal.process.parent process.product specific process id principal.process.pid principal.process.product specific process id target.process.parent process.pid target.process.parent process.product specific process id target.process.pid target.process.product specific process id user about.user.userid observer.user.userid principal.user.user display name principal.user.userid principal.user.windows sid src.user.userid target.user.user display name target.user.userid target.user.windows sid Find a UDM field for search query While writing a search query, you may not know which UDM field to include.
- The following examples show supported boolean operators ( AND , OR , and NOT ): A AND B A OR B Use parentheses ( ) to group expressions and control evaluation order: (A OR B) AND (B OR C) AND (C OR NOT D) Examples: Search for login events on the finance server: metadata.event type = "USER LOGIN" and target.hostname = "finance-svr" Use the operator (>) to search for connections where more than 10 MB of data was sent: metadata.event type = "NETWORK CONNECTION" and network.sent bytes > 10000000 Use multiple conditions to search for winword.exe launching cmd.exe or powershell.exe : metadata.event type = "PROCESS LAUNCH" and principal.process.file.full path = /winword/ and ( target.process.file.full path = /cmd.exe/ or target.process.file.full path = /powershell.exe/ ) Search key-value pairs in additional and labels fields: The additional and labels fields act as customizable containers for event data that doesn't map to standard UDM fields.
- Supported fields You can download the following fields to a CSV file from the platform: user hostname process name event type timestamp raw log (valid only when raw logs are enabled for the customer) All fields starting with udm.additional Valid field types You can download the following field types to a CSV file: double float int32 uint32 int64 uint64 bool string enum bytes google.protobuf.Timestamp google.protobuf.Duration Unsupported fields Fields that start with "udm" (not udm.additional) and meet either of the following conditions cannot be downloaded to CSV: The nesting of the field is more than 10 deep in udm proto.

### "Configure data RBAC for Dashboards \_|\_ Google Security Operations \_|\_\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-dashboards](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-dashboards)
- Source ID: `site-docs-reference-required-1`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure data RBAC for Dashboards Supported in: Google secops SIEM This document explains how Google Security Operations administrators can assign scopes to dashboards.
- Grant user access to Dashboards To grant a user or group access to Dashboards, follow these steps: In the Google Cloud console, click IAM > Grant Access .
- The Dashboards feature of Google Security Operations is built from charts populated using YARA-L 2.0 properties.
- The user now has the granted permissions for all dashboards they're authorized to see within the project.

### Data RBAC overview \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview)
- Source ID: `site-docs-reference-required-1`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- The following permissions apply to Dashboards: chronicle.dashboards.list : Lets users see the list of available dashboards. chronicle.dashboards.get : Lets users open and view a dashboard content. chronicle.dashboards.create : Lets users create new dashboards. chronicle.dashboards.update : Lets users edit and save changes to existing dashboards. chronicle.dashboards.delete : Lets users delete custom dashboards.
- Following are the most common predefined roles that give users access to dashboards: Access type Roles Description Viewer roles/chroniclesiem.viewer Grants read-only access.
- Editor roles/chroniclesiem.editor Grants access to all data and all permissions, including the ability to create, edit, and delete custom dashboards.
- For example, you can create a Dashboard Creator custom role with only chronicle.dashboards.create and chronicle.dashboards.list permissions .

