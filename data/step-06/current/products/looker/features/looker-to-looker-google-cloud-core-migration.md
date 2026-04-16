---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.532Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Looker to Looker (Google Cloud core) migration"
feature_slug: "looker-to-looker-google-cloud-core-migration"
latest_feature_date: "2024-02-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-export"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-pages"
  - "https://docs.cloud.google.com/looker/docs/reference/rest"
keywords:
  - "looker"
  - "core"
  - "migration"
  - "supports"
  - "self"
  - "original"
  - "instances"
---

# Looker to Looker (Google Cloud core) migration

Product: Looker
Coverage: LOW

## Step 02 Summary

Looker supports self-service migration from Looker (original) instances to Looker (Google Cloud core) instances.

## Extended Definition

Looker supports self-service migration from Looker (original) instances to Looker (Google Cloud core) instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-export](https://docs.cloud.google.com/looker/docs/admin-panel-export)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-pages](https://docs.cloud.google.com/looker/docs/admin-panel-general-pages)
- [https://docs.cloud.google.com/looker/docs/reference/rest](https://docs.cloud.google.com/looker/docs/reference/rest)

## Supporting Pages

### Looker (Google Cloud core) API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/reference/rest](https://docs.cloud.google.com/looker/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 31
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1.projects.locations.instances Methods create POST /v1/{parent=projects/ /locations/ }/instances Creates a new Instance in a given project and location. delete DELETE /v1/{name=projects/ /locations/ /instances/ } Delete instance. export POST /v1/{name=projects/ /locations/ /instances/ }:export Export instance. get GET /v1/{name=projects/ /locations/ /instances/ } Gets details of a single Instance. import POST /v1/{name=projects/ /locations/ /instances/ }:import Import instance. list GET /v1/{parent=projects/ /locations/ }/instances Lists Instances in a given project and location. patch PATCH /v1/{instance.name=projects/ /locations/ /instances/ } Update Instance. restart POST /v1/{name=projects/ /locations/ /instances/ }:restart Restart instance. restore POST /v1/{name=projects/ /locations/ /instances/ }:restore Restore Looker instance.
- REST Resource: v1.projects.locations.instances.backups Methods create POST /v1/{parent=projects/ /locations/ /instances/ }/backups Backup Looker instance. delete DELETE /v1/{name=projects/ /locations/ /instances/ /backups/ } Delete backup. get GET /v1/{name=projects/ /locations/ /instances/ /backups/ } list GET /v1/{parent=projects/ /locations/ /instances/ }/backups List backups of Looker instance.
- REST Resource: v1.projects.locations REST Resource: v1.projects.locations.instances REST Resource: v1.projects.locations.instances.backups REST Resource: v1.projects.locations.operations Service: looker.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- Home Documentation Data analytics Looker API Reference Send feedback Looker (Google Cloud core) API Stay organized with collections Save and categorize content based on your preferences.

### Admin settings - Export \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-export](https://docs.cloud.google.com/looker/docs/admin-panel-export)
- Source ID: `site-docs-reference-required-4`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Once the export has been completed and the data appears in your Cloud Storage bucket, continue with the steps on the Self-service migration from Looker (original) to Looker (Google Cloud core) documentation page, beginning with the Import the data into the new "empty" Looker (Google Cloud core) instance section, to complete the migration.
- See the Self-service migration from Looker (original) to Looker (Google Cloud core) documentation page for information about how to generate the information that needs to be entered onto the Export page and how to complete the migration.
- Entering export information Follow the steps on the Self-service migration from Looker (original) to Looker (Google Cloud core) documentation page up to the Request the export section.
- Important: Before you can undertake a migration, you must have already upgraded your existing Looker (original) contract to cover Looker (Google Cloud core) and validated with your account representative that you are eligible for migration.

### Admin settings - General pages \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-pages](https://docs.cloud.google.com/looker/docs/admin-panel-general-pages)
- Source ID: `site-docs-reference-required-4`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Export Configure export during self-service migration of an instance from Looker (original) to Looker (Google Cloud core) . (Original-to-core migration must be enabled by Looker.
- Home Documentation Data analytics Looker Guides Send feedback Admin settings - General pages Stay organized with collections Save and categorize content based on your preferences.
- These pages appear under the General section of Looker's Admin menu: Settings : Set instance-wide options in Looker's general settings panel.
- Internal Help Resources : Configure a list of resources your company offers to support Looker users.

