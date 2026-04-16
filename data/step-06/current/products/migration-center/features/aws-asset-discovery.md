---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.042Z"
product_name: "Migration Center"
product_slug: "migration-center"
feature_name: "AWS asset discovery"
feature_slug: "aws-asset-discovery"
latest_feature_date: "2026-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migration-center/docs/start-asset-discovery"
  - "https://docs.cloud.google.com/migration-center/docs/view-assets"
  - "https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security"
  - "https://docs.cloud.google.com/migration-center/docs/discovery-and-assessment-overview"
keywords:
  - "aws"
  - "asset"
  - "discovery"
  - "migration"
  - "center"
  - "can"
  - "discover"
  - "additional"
---

# AWS asset discovery

Product: Migration Center
Coverage: MEDIUM

## Step 02 Summary

Migration Center can discover additional asset types from an AWS account.

## Extended Definition

Migration Center can discover additional asset types from an AWS account.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migration-center/docs/start-asset-discovery](https://docs.cloud.google.com/migration-center/docs/start-asset-discovery)
- [https://docs.cloud.google.com/migration-center/docs/view-assets](https://docs.cloud.google.com/migration-center/docs/view-assets)
- [https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security](https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security)
- [https://docs.cloud.google.com/migration-center/docs/discovery-and-assessment-overview](https://docs.cloud.google.com/migration-center/docs/discovery-and-assessment-overview)

## Supporting Pages

### Start an asset discovery \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/start-asset-discovery](https://docs.cloud.google.com/migration-center/docs/start-asset-discovery)
- Source ID: `site-docs-root`
- Final score: 299
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Collected environment Collection method Automated (one-time) Automated (continuous) Manual collection and import Virtual machines on vCenter mcdc CLI Discovery client Upload RVTools data Virtual machines on other hypervisors mcdc CLI 1 Discovery client Manually create and upload data tables Physical servers mcdc CLI 1 Discovery client Manually create and upload data tables AWS EC2s mcdc CLI Discovery client 2 Not available AWS assets mcdc CLI Not available Not available Azure virtual machines ( Preview) mcdc CLI Discovery client 2 Not available Databases mcdc CLI Not available Discover and import databases 1 Use the mcdc CLI for Windows if you need to collect data directly from Windows hosts.
- Home Documentation Migration Migration Center Guides Send feedback Start an asset discovery Stay organized with collections Save and categorize content based on your preferences.
- To perform an automated one-time collection, download and run the Migration Center discovery client CLI, then scan your infrastructure.
- With Google Cloud Migration Center, you can discover physical servers and virtual machine (VM) instances in your infrastructure hosted on-premises or on other cloud providers, and gather detailed information about every component.

### View the collected assets \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/view-assets](https://docs.cloud.google.com/migration-center/docs/view-assets)
- Source ID: `site-docs-root`
- Final score: 281
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This tab shows all the aggregated performance data and statistics collected with the Migration Center discovery client, manual file import, and the mcdc CLI, such as the following: Daily input/output operations per second Daily memory usage Daily CPU usage Network bytes received and sent per second Available details for databases On the details page for a database, you can see the basic information about the database, including the name, engine, edition, and version.
- For example, you can see the following structured attributes for an EKS cluster: cluster endpoint access cluster vpc id endpoint kubernetes version logging platform version role arn status Label assets Migration Center lets you assign labels to your assets to help you organize your resources.
- After you add your assets to Migration Center with an automatic scan by using one of the available collection methods , you can review the basic information about your infrastructure directly in Migration Center, both at the asset level, and in aggregate.
- This tab provides you with additional information about the server, such as the following: Contributing sources, which is the name of the discovery client or import job that created the asset.

### "Discovery client data collection and security \_|\_ Migration Center \_\

- URL: [https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security](https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security)
- Source ID: `site-docs-root`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Migration Migration Center Resources Send feedback Discovery client data collection and security Stay organized with collections Save and categorize content based on your preferences.
- Communication with Google Cloud Registered discovery clients communicate with Google Cloud Migration Center during their normal operation.
- This document addresses concerns and questions about installing the Migration Center discovery client in data centers.
- The communication happens through a service account with the roles/migrationcenter.discoveryClient role binding.

### "About infrastructure discovery and assessment \_|\_ Migration Center \_\

- URL: [https://docs.cloud.google.com/migration-center/docs/discovery-and-assessment-overview](https://docs.cloud.google.com/migration-center/docs/discovery-and-assessment-overview)
- Source ID: `site-docs-root`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- How infrastructure assessment works After you've completed the discovery step and collected your infrastructure data into Migration Center, you group the servers and databases that you want to migrate based on your application or business objective.
- Home Documentation Migration Migration Center Guides Send feedback About infrastructure discovery and assessment Stay organized with collections Save and categorize content based on your preferences.
- For example: Install the Migration Center discovery client to collect data for multiple days, to get complete and detailed information about your infrastructure.
- Get a quick overview of discovery and assessment in Google Cloud Migration Center with the following video.

