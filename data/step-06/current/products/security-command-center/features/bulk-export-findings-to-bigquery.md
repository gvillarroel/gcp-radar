---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.616Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Bulk export findings to BigQuery"
feature_slug: "bulk-export-findings-to-bigquery"
latest_feature_date: "2025-09-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/bulk-exports-to-big-query"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/reference/rest"
keywords:
  - "bulk"
  - "export"
  - "findings"
  - "bigquery"
  - "exports"
  - "security"
  - "command"
  - "center"
---

# Bulk export findings to BigQuery

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Bulk export findings to BigQuery exports Security Command Center findings to BigQuery for organizations, projects, and folders; Security Command Center findings can be exported in bulk to a BigQuery dataset.

## Extended Definition

Bulk export findings to BigQuery exports Security Command Center findings to BigQuery for organizations, projects, and folders; Security Command Center findings can be exported in bulk to a BigQuery dataset.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/bulk-exports-to-big-query](https://docs.cloud.google.com/security-command-center/docs/bulk-exports-to-big-query)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/reference/rest](https://docs.cloud.google.com/security-command-center/docs/reference/rest)

## Supporting Pages

### "Bulk export findings to BigQuery \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/bulk-exports-to-big-query](https://docs.cloud.google.com/security-command-center/docs/bulk-exports-to-big-query)
- Source ID: `site-docs-reference`
- Final score: 253
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Standard-legacy, Standard, Premium, and Enterprise service tiers The document describes how to initiate on-demand bulk exports of Security Command Center findings to BigQuery.
- Set up permissions To complete this guide, you must have the following Identity and Access Management (IAM) roles: On the organization where you want to export findings from, one of the following: Security Center BigQuery Exports Editor ( roles/securitycenter.bigQueryExportsEditor ) Security Center Admin ( roles/securitycenter.admin ) To learn more about Security Command Center roles, see Access control .
- Home Documentation Security Security Command Center Guides Send feedback Bulk export findings to BigQuery Stay organized with collections Save and categorize content based on your preferences.
- A snapshot of all the Security Command Center findings at the time the export runs are exported to the selected BigQuery dataset.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- March 02, 2022 Feature You can now configure automatic exports of Security Command Center findings to a BigQuery dataset.
- July 29, 2025 Feature You can send a bulk export of Security Command Center findings to a BigQuery dataset.
- November 11, 2025 Change Several features and updates have been made available to Security Command Center in a federated identity environment: Exporting findings to a CSV file.
- November 10, 2022 Feature Security Command Center added the ability to export findings to a CSV file from the Google Cloud console.

### Security Command Center API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/reference/rest](https://docs.cloud.google.com/security-command-center/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v2.folders.assets REST Resource: v2.folders.findings REST Resource: v2.folders.locations.bigQueryExports REST Resource: v2.folders.locations.findings REST Resource: v2.folders.locations.muteConfigs REST Resource: v2.folders.locations.notificationConfigs REST Resource: v2.folders.muteConfigs REST Resource: v2.folders.sources REST Resource: v2.folders.sources.findings REST Resource: v2.folders.sources.findings.externalSystems REST Resource: v2.folders.sources.locations.findings REST Resource: v2.folders.sources.locations.findings.externalSystems REST Resource: v2.organizations.assets REST Resource: v2.organizations.attackPaths REST Resource: v2.organizations.findings REST Resource: v2.organizations.locations.bigQueryExports REST Resource: v2.organizations.locations.findings REST Resource: v2.organizations.locations.muteConfigs REST Resource: v2.organizations.locations.notificationConfigs REST Resource: v2.organizations.locations.resourceValueConfigs REST Resource: v2.organizations.locations.simulations REST Resource: v2.organizations.locations.simulations.attackExposureResults.attackPaths REST Resource: v2.organizations.locations.simulations.valuedResources REST Resource: v2.organizations.locations.simulations.valuedResources.attackPaths REST Resource: v2.organizations.muteConfigs REST Resource: v2.organizations.operations REST Resource: v2.organizations.resourceValueConfigs REST Resource: v2.organizations.simulations REST Resource: v2.organizations.simulations.attackExposureResults.attackPaths REST Resource: v2.organizations.simulations.attackExposureResults.valuedResources REST Resource: v2.organizations.simulations.attackPaths REST Resource: v2.organizations.simulations.valuedResources REST Resource: v2.organizations.simulations.valuedResources.attackPaths REST Resource: v2.organizations.sources REST Resource: v2.organizations.sources.findings REST Resource: v2.organizations.sources.findings.externalSystems REST Resource: v2.organizations.sources.locations.findings REST Resource: v2.organizations.sources.locations.findings.externalSystems REST Resource: v2.organizations.valuedResources REST Resource: v2.projects.assets REST Resource: v2.projects.findings REST Resource: v2.projects.locations.bigQueryExports REST Resource: v2.projects.locations.findings REST Resource: v2.projects.locations.muteConfigs REST Resource: v2.projects.locations.notificationConfigs REST Resource: v2.projects.muteConfigs REST Resource: v2.projects.sources REST Resource: v2.projects.sources.findings REST Resource: v2.projects.sources.findings.externalSystems REST Resource: v2.projects.sources.locations.findings REST Resource: v2.projects.sources.locations.findings.externalSystems REST Resource: v1p1beta1.folders.assets REST Resource: v1p1beta1.folders.sources REST Resource: v1p1beta1.folders.sources.findings REST Resource: v1p1beta1.organizations REST Resource: v1p1beta1.organizations.assets REST Resource: v1p1beta1.organizations.notificationConfigs REST Resource: v1p1beta1.organizations.operations REST Resource: v1p1beta1.organizations.sources REST Resource: v1p1beta1.organizations.sources.findings REST Resource: v1p1beta1.projects.assets REST Resource: v1p1beta1.projects.sources REST Resource: v1p1beta1.projects.sources.findings REST Resource: v1beta2.folders REST Resource: v1beta2.folders.containerThreatDetectionSettings REST Resource: v1beta2.folders.eventThreatDetectionSettings REST Resource: v1beta2.folders.rapidVulnerabilityDetectionSettings REST Resource: v1beta2.folders.securityHealthAnalyticsSettings REST Resource: v1beta2.folders.virtualMachineThreatDetectionSettings REST Resource: v1beta2.folders.webSecurityScannerSettings REST Resource: v1beta2.organizations REST Resource: v1beta2.organizations.containerThreatDetectionSettings REST Resource: v1beta2.organizations.eventThreatDetectionSettings REST Resource: v1beta2.organizations.rapidVulnerabilityDetectionSettings REST Resource: v1beta2.organizations.securityHealthAnalyticsSettings REST Resource: v1beta2.organizations.virtualMachineThreatDetectionSettings REST Resource: v1beta2.organizations.webSecurityScannerSettings REST Resource: v1beta2.projects REST Resource: v1beta2.projects.containerThreatDetectionSettings REST Resource: v1beta2.projects.eventThreatDetectionSettings REST Resource: v1beta2.projects.locations.clusters REST Resource: v1beta2.projects.locations.clusters.containerThreatDetectionSettings REST Resource: v1beta2.projects.rapidVulnerabilityDetectionSettings REST Resource: v1beta2.projects.securityHealthAnalyticsSettings REST Resource: v1beta2.projects.virtualMachineThreatDetectionSettings REST Resource: v1beta2.projects.webSecurityScannerSettings REST Resource: v1beta1.organizations REST Resource: v1beta1.organizations.assets REST Resource: v1beta1.organizations.operations REST Resource: v1beta1.organizations.sources REST Resource: v1beta1.organizations.sources.findings REST Resource: v1.folders.assets REST Resource: v1.folders.bigQueryExports REST Resource: v1.folders.eventThreatDetectionSettings REST Resource: v1.folders.eventThreatDetectionSettings.customModules REST Resource: v1.folders.eventThreatDetectionSettings.effectiveCustomModules REST Resource: v1.folders.findings REST Resource: v1.folders.locations.muteConfigs REST Resource: v1.folders.muteConfigs REST Resource: v1.folders.notificationConfigs REST Resource: v1.folders.securityHealthAnalyticsSettings.customModules REST Resource: v1.folders.securityHealthAnalyticsSettings.effectiveCustomModules REST Resource: v1.folders.sources REST Resource: v1.folders.sources.findings REST Resource: v1.folders.sources.findings.externalSystems REST Resource: v1.organizations REST Resource: v1.organizations.assets REST Resource: v1.organizations.attackPaths REST Resource: v1.organizations.bigQueryExports REST Resource: v1.organizations.eventThreatDetectionSettings REST Resource: v1.organizations.eventThreatDetectionSettings.customModules REST Resource: v1.organizations.eventThreatDetectionSettings.effectiveCustomModules REST Resource: v1.organizations.findings REST Resource: v1.organizations.locations.muteConfigs REST Resource: v1.organizations.muteConfigs REST Resource: v1.organizations.notificationConfigs REST Resource: v1.organizations.operations REST Resource: v1.organizations.resourceValueConfigs REST Resource: v1.organizations.securityHealthAnalyticsSettings.customModules REST Resource: v1.organizations.securityHealthAnalyticsSettings.effectiveCustomModules REST Resource: v1.organizations.simulations REST Resource: v1.organizations.simulations.attackExposureResults.attackPaths REST Resource: v1.organizations.simulations.attackExposureResults.valuedResources REST Resource: v1.organizations.simulations.attackPaths REST Resource: v1.organizations.simulations.valuedResources REST Resource: v1.organizations.simulations.valuedResources.attackPaths REST Resource: v1.organizations.sources REST Resource: v1.organizations.sources.findings REST Resource: v1.organizations.sources.findings.externalSystems REST Resource: v1.organizations.valuedResources REST Resource: v1.projects.assets REST Resource: v1.projects.bigQueryExports REST Resource: v1.projects.eventThreatDetectionSettings REST Resource: v1.projects.eventThreatDetectionSettings.customModules REST Resource: v1.projects.eventThreatDetectionSettings.effectiveCustomModules REST Resource: v1.projects.findings REST Resource: v1.projects.locations.muteConfigs REST Resource: v1.projects.muteConfigs REST Resource: v1.projects.notificationConfigs REST Resource: v1.projects.securityHealthAnalyticsSettings.customModules REST Resource: v1.projects.securityHealthAnalyticsSettings.effectiveCustomModules REST Resource: v1.projects.sources REST Resource: v1.projects.sources.findings REST Resource: v1.projects.sources.findings.externalSystems Service: securitycenter.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v2.organizations.sources.locations.findings Methods create POST /v2/{parent=organizations/ /sources/ /locations/ }/findings Creates a finding in a location. export POST /v2/{parent=organizations/ /sources/ /locations/ }/findings:export Kicks off an LRO to export findings for an organization to the customer's BigQuery dataset. group POST /v2/{parent=organizations/ /sources/ /locations/ }/findings:group Filters an organization or source's findings and groups them by their specified properties in a location. list GET /v2/{parent=organizations/ /sources/ /locations/ }/findings Lists an organization or source's findings. patch PATCH /v2/{finding.name=organizations/ /sources/ /locations/ /findings/ } Creates or updates a finding. setMute POST /v2/{name=organizations/ /sources/ /locations/ /findings/ }:setMute Updates the mute state of a finding. setState POST /v2/{name=organizations/ /sources/ /locations/ /findings/ }:setState Updates the state of a finding. updateSecurityMarks PATCH /v2/{securityMarks.name=organizations/ /sources/ /locations/ /findings/ /securityMarks} Updates security marks.
- REST Resource: v2.projects.sources.locations.findings Methods export POST /v2/{parent=projects/ /sources/ /locations/ }/findings:export Kicks off an LRO to export findings for an organization to the customer's BigQuery dataset. group POST /v2/{parent=projects/ /sources/ /locations/ }/findings:group Filters an organization or source's findings and groups them by their specified properties in a location. list GET /v2/{parent=projects/ /sources/ /locations/ }/findings Lists an organization or source's findings. patch PATCH /v2/{finding.name=projects/ /sources/ /locations/ /findings/ } Creates or updates a finding. setMute POST /v2/{name=projects/ /sources/ /locations/ /findings/ }:setMute Updates the mute state of a finding. setState POST /v2/{name=projects/ /sources/ /locations/ /findings/ }:setState Updates the state of a finding. updateSecurityMarks PATCH /v2/{securityMarks.name=projects/ /sources/ /locations/ /findings/ /securityMarks} Updates security marks.
- REST Resource: v2.folders.sources.locations.findings Methods export POST /v2/{parent=folders/ /sources/ /locations/ }/findings:export Kicks off an LRO to export findings for an organization to the customer's BigQuery dataset. group POST /v2/{parent=folders/ /sources/ /locations/ }/findings:group Filters an organization or source's findings and groups them by their specified properties in a location. list GET /v2/{parent=folders/ /sources/ /locations/ }/findings Lists an organization or source's findings. patch PATCH /v2/{finding.name=folders/ /sources/ /locations/ /findings/ } Creates or updates a finding. setMute POST /v2/{name=folders/ /sources/ /locations/ /findings/ }:setMute Updates the mute state of a finding. setState POST /v2/{name=folders/ /sources/ /locations/ /findings/ }:setState Updates the state of a finding. updateSecurityMarks PATCH /v2/{securityMarks.name=folders/ /sources/ /locations/ /findings/ /securityMarks} Updates security marks.

