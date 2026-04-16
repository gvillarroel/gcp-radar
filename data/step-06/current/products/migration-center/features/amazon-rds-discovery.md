---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.069Z"
product_name: "Migration Center"
product_slug: "migration-center"
feature_name: "Amazon RDS discovery"
feature_slug: "amazon-rds-discovery"
latest_feature_date: "2025-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migration-center/docs/start-asset-discovery"
  - "https://docs.cloud.google.com/migration-center/docs/discovery-and-assessment-overview"
  - "https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security"
  - "https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.discoveryClients"
keywords:
  - "amazon"
  - "rds"
  - "discovery"
  - "migration"
  - "center"
  - "can"
  - "discover"
  - "instances"
---

# Amazon RDS discovery

Product: Migration Center
Coverage: MEDIUM

## Step 02 Summary

Migration Center can discover Amazon RDS instances and upload the collected information.

## Extended Definition

Migration Center can discover Amazon RDS instances and upload the collected information.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migration-center/docs/start-asset-discovery](https://docs.cloud.google.com/migration-center/docs/start-asset-discovery)
- [https://docs.cloud.google.com/migration-center/docs/discovery-and-assessment-overview](https://docs.cloud.google.com/migration-center/docs/discovery-and-assessment-overview)
- [https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security](https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security)
- [https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.discoveryClients](https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.discoveryClients)

## Supporting Pages

### Start an asset discovery \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/start-asset-discovery](https://docs.cloud.google.com/migration-center/docs/start-asset-discovery)
- Source ID: `site-docs-root`
- Final score: 241
- Re-rank relevance: N/A

Evidence snippets:
- With Google Cloud Migration Center, you can discover physical servers and virtual machine (VM) instances in your infrastructure hosted on-premises or on other cloud providers, and gather detailed information about every component.
- To perform an automated one-time collection, download and run the Migration Center discovery client CLI, then scan your infrastructure.
- Home Documentation Migration Migration Center Guides Send feedback Start an asset discovery Stay organized with collections Save and categorize content based on your preferences.
- Collection methods Migration Center lets you collect data from your infrastructure in different ways to give you the flexibility to balance speed and depth of discovery.

### "About infrastructure discovery and assessment \_|\_ Migration Center \_\

- URL: [https://docs.cloud.google.com/migration-center/docs/discovery-and-assessment-overview](https://docs.cloud.google.com/migration-center/docs/discovery-and-assessment-overview)
- Source ID: `site-docs-root`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- How infrastructure assessment works After you've completed the discovery step and collected your infrastructure data into Migration Center, you group the servers and databases that you want to migrate based on your application or business objective.
- Home Documentation Migration Migration Center Guides Send feedback About infrastructure discovery and assessment Stay organized with collections Save and categorize content based on your preferences.
- For example: Install the Migration Center discovery client to collect data for multiple days, to get complete and detailed information about your infrastructure.
- Get a quick overview of discovery and assessment in Google Cloud Migration Center with the following video.

### "Discovery client data collection and security \_|\_ Migration Center \_\

- URL: [https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security](https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security)
- Source ID: `site-docs-root`
- Final score: 221
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Migration Migration Center Resources Send feedback Discovery client data collection and security Stay organized with collections Save and categorize content based on your preferences.
- Communication with Google Cloud Registered discovery clients communicate with Google Cloud Migration Center during their normal operation.
- This document addresses concerns and questions about installing the Migration Center discovery client in data centers.
- The communication happens through a service account with the roles/migrationcenter.discoveryClient role binding.

### "REST Resource: projects.locations.discoveryClients \_|\_ Migration Center\

- URL: [https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.discoveryClients](https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.discoveryClients)
- Source ID: `site-api-reference`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Migration Migration Center Reference Send feedback REST Resource: projects.locations.discoveryClients Stay organized with collections Save and categorize content based on your preferences.
- Resource: DiscoveryClient JSON representation State Methods Resource: DiscoveryClient Represents an installed Migration Center Discovery Client instance.
- Methods create Creates a new discovery client. delete Deletes a discovery client. get Gets the details of a discovery client. list Lists all the discovery clients in a given project and location. patch Updates a discovery client. send Heartbeat Sends a discovery client heartbeat.
- Service account used by the discovery client for various operation. signals Endpoint string Output only.

