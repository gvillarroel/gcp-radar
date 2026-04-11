---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:24:01.903Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Cross joins in multi-stage queries"
feature_slug: "cross-joins-in-multi-stage-queries"
latest_feature_date: "2026-02-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
keywords:
  - "cross"
  - "joins"
  - "in"
  - "multi"
  - "stage"
  - "queries"
  - "yara"
  - "let"
---

# Cross joins in multi-stage queries

Product: Google SecOps
Coverage: LOW

## Step 02 Summary

Cross joins in YARA-L multi-stage queries let you compare event data against aggregated statistics from earlier stages.

## Extended Definition

Cross joins in YARA-L multi-stage queries let you compare event data against aggregated statistics from earlier stages.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)

## Supporting Pages

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- February 24, 2026 Feature New: cross joins in multi-stage queries You can now use cross joins in YARA-L 2.0 multi-stage queries let you compare individual UDM event data against aggregated statistics calculated in previous YARA-L stages.
- Multi-stage queries in YARA-L let you feed the output of one query stage directly into the input of a subsequent stage.
- They are supported in: Search Dashboards For more information, see Cross joins in multi-stage queries .
- Layer aggregations and analytics across multi-stage queries Recent updates to multi-stage queries let you: Layer aggregations and data statistical functions.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- February 24, 2026 Feature New: cross joins in multi-stage queries You can now use cross joins in YARA-L 2.0 multi-stage queries let you compare individual UDM event data against aggregated statistics calculated in previous YARA-L stages.
- Multi-stage queries in YARA-L let you feed the output of one query stage directly into the input of a subsequent stage.
- They are supported in: Search Dashboards For more information, see Cross joins in multi-stage queries .
- Action1 ( ACTION1 ) CDNetworks Cloud Security ( CDNETWORKS CLOUD SECURITY ) Claude Compliance Logs ( CLAUDE COMPLIANCE LOGS ) Dell RecoverPoint ( DELL RECOVERPOINT ) IBM Storwize ( IBM STORWIZE ) LeapXpert Audit Logs ( LEAPXPERT AUDIT ) Oracle Key Vault Audit Logs ( ORACLE KEY VAULT AUDIT LOGS ) RSA Cloud ( RSA CLOUD ) ServiceNow Antivirus Activity ( SERVICENOW ANTIVIRUS ACTIVITY ) ServiceNow Attachment ( SERVICENOW ATTACHMENT ) ServiceNow Email ( SERVICENOW EMAIL ) Versa Director ( VERSA DIRECTOR ) ZPE Systems NodeGrid ( ZPE SYSTEMS NODEGRID ) March 31, 2026 Feature Multi-stage queries in YARA-L The Multi-stage queries feature is now GA.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Search for events and alerts Supported in: Google secops SIEM The search function lets you find Unified Data Model (UDM) events and alerts in your Google Security Operations instance using YARA-L 2.0 syntax .
- Search limits and quotas Google SecOps enforces limits on search queries to ensure platform stability and consistent performance across programmatic and web interface.
- Complex queries: Queries that span more than 1 day, use multiple sources, or include stats.
- Types of grouped UDM fields You can search across all of the following grouped UDM fields: Grouped field name Associated UDM fields domain about.administrative domain about.asset.network domain network.dns.questions.name network.dns domain principal.administrative domain principal.asset.network domain target.administrative domain target.asset.hostname target.asset.network domain target.hostname email intermediary.user.email addresses network.email.from network.email.to principal.user.email addresses security result.about.user.email addresses target.user.email addresses file path principal.file.full path principal.process.file.full path principal.process.parent process.file.full path target.file.full path target.process.file.full path target.process.parent process.file.full path hash about.file.md5 about.file.sha1 about.file.sha256 principal.process.file.md5 principal.process.file.sha1 principal.process.file.sha256 security result.about.file.sha256 target.file.md5 target.file.sha1 target.file.sha256 target.process.file.md5 target.process.file.sha1 target.process.file.sha256 hostname intermediary.hostname observer.hostname principal.asset.hostname principal.hostname src.asset.hostname src.hostname target.asset.hostname target.hostname ip intermediary.ip observer.ip principal.artifact.ip principal.asset.ip principal.ip src.artifact.ip src.asset.ip src.ip target.artifact.ip target.asset.ip target.ip namespace principal.namespace src.namespace target.namespace process id principal.process.parent process.pid principal.process.parent process.product specific process id principal.process.pid principal.process.product specific process id target.process.parent process.pid target.process.parent process.product specific process id target.process.pid target.process.product specific process id user about.user.userid observer.user.userid principal.user.user display name principal.user.userid principal.user.windows sid src.user.userid target.user.user display name target.user.userid target.user.windows sid Find a UDM field for search query While writing a search query, you may not know which UDM field to include.

