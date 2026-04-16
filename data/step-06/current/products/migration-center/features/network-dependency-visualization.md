---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.042Z"
product_name: "Migration Center"
product_slug: "migration-center"
feature_name: "Network dependency visualization"
feature_slug: "network-dependency-visualization"
latest_feature_date: "2026-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient"
  - "https://docs.cloud.google.com/migration-center/docs/migration-planning-overview"
  - "https://docs.cloud.google.com/migration-center/docs/migration-execution"
keywords:
  - "network"
  - "dependency"
  - "visualization"
  - "migration"
  - "center"
  - "can"
  - "visualize"
  - "dependencies"
---

# Network dependency visualization

Product: Migration Center
Coverage: MEDIUM

## Step 02 Summary

Migration Center can visualize network dependencies and filter the graph by tags, groups, network, and asset details; Migration Center can visualize network dependencies between discovered server assets.

## Extended Definition

Migration Center can visualize network dependencies and filter the graph by tags, groups, network, and asset details; Migration Center can visualize network dependencies between discovered server assets.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- [https://docs.cloud.google.com/migration-center/docs/migration-planning-overview](https://docs.cloud.google.com/migration-center/docs/migration-planning-overview)
- [https://docs.cloud.google.com/migration-center/docs/migration-execution](https://docs.cloud.google.com/migration-center/docs/migration-execution)

## Supporting Pages

### "Class MigrationCenterAsyncClient (0.4.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- Source ID: `site-python-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.migrationcenter v1.types.ReportConfig The groups and associated preference sets on which we can generate reports. get settings get settings ( request : typing .
- Returns Type Description google.cloud.migrationcenter v1.types.BatchUpdateAssetsResponse Response for updating a list of assets. cancel operation cancel operation ( request : typing .
- CreateImportDataFileRequest ( parent="parent value", import data file id="import data file id value", import data file=import data file, ) Make the request operation = client. create import data file (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreateImportDataFileRequest , dict]] The request object.
- Returns Type Description google.cloud.migrationcenter v1.types.ReportAssetFramesResponse A response to a call to ReportAssetFrame. report config path report config path ( project : str , location : str , report config : str ) - > str Returns a fully-qualified report config string. report path report path ( project : str , location : str , report config : str , report : str ) - > str Returns a fully-qualified report string. run import job run import job ( request : typing .

### "Class MigrationCenterClient (0.4.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- Source ID: `site-python-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.migrationcenter v1.types.ReportConfig The groups and associated preference sets on which we can generate reports. get settings get settings ( request : typing .
- Returns Type Description google.cloud.migrationcenter v1.types.BatchUpdateAssetsResponse Response for updating a list of assets. cancel operation cancel operation ( request : typing .
- Returns Type Description google.cloud.migrationcenter v1.types.Source Source represents an object from which asset information is streamed to Migration Center. group path group path ( project : str , location : str , group : str ) - > str Returns a fully-qualified group string. import data file path import data file path ( project : str , location : str , import job : str , import data file : str ) - > str Returns a fully-qualified import data file string. import job path import job path ( project : str , location : str , import job : str ) - > str Returns a fully-qualified import job string. list assets list assets ( request : typing .
- Returns Type Description google.cloud.migrationcenter v1.types.ReportAssetFramesResponse A response to a call to ReportAssetFrame. report config path report config path ( project : str , location : str , report config : str ) - > str Returns a fully-qualified report config string. report path report path ( project : str , location : str , report config : str , report : str ) - > str Returns a fully-qualified report string. run import job run import job ( request : typing .

### About migration planning \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/migration-planning-overview](https://docs.cloud.google.com/migration-center/docs/migration-planning-overview)
- Source ID: `site-docs-root`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- Standalone applications and databases are typically good candidates for a first migration wave, given their low external dependencies.
- The Cloud Foundation Toolkit includes resources to help you get started with the following aspects of your new cloud infrastructure: Identity and Access Management Resource management Networking Data management Infrastructure as code Logging, monitoring, and billing Security foundations GKE foundations Note: Foundations design and set up is a preliminary step to migration planning and landing zone creation.
- After you complete the discovery and assessment phase, and set up your foundation design, you can start planning your migration by categorizing your workloads into migration waves .
- Home Documentation Migration Migration Center Guides Send feedback About migration planning Stay organized with collections Save and categorize content based on your preferences.

### Execute your migration \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/migration-execution](https://docs.cloud.google.com/migration-center/docs/migration-execution)
- Source ID: `site-docs-root`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- On the other hand, workloads with significant interdependencies would constitute a complex migration wave that requires additional planning.
- Standalone applications and databases are typically good candidates for a first migration wave given their low external dependencies.
- Item Description 0 Migration tools architecture Architecture of tools constituting a migration factory (tools for ongoing assessment, wave plan refinement, workload-specific migration, build, testing, deployment, and monitoring) 1 Migration checklist Checklist for use before and during the migration sprint 2 Inventory List of workloads that will be migrated to Google Cloud 3 Sprint runbook Execution guidelines for migrating each workload 4 Migration plan Step-by-step migration plan (process) to be followed during the migration sprint 5 Network and security rules List of all of the firewall rules for ingress and egress on Google Cloud DNS changes during migration to Google Cloud 6 Risks and mitigation Possible risks during the migration sprint and mitigation steps 7 Testing and validation Test plan to validate functional and non-functional requirements 8 Rollback plan Rollback steps by workload 9 Team composition Team composition and roster with contact details 10 Governance RACI matrix of migration execution team, cadence and reporting, escalation resolution mechanisms Migration execution After you have completed the migration planning and preparation phase, this section describes how to perform repeatable migrations and validations to Google Cloud.
- You must continue to perform discovery and assessment throughout your cloud migration project to recalibrate and enrich data relating to the following aspects: Application and database mapping to infrastructure mapping (to identify all of the infrastructure and platform components for a business workload) Mapping between infrastructure to applications, databases, and services (to identify all of the business workloads attached to an infrastructure or platform component) Dependencies across business workloads Resource consumption by workloads Identification of any workloads that were not discovered in the initial wave of assessment Identification of new or changed landing zone requirements that have not been identified in the initial wave of assessment Identification of blocking issues that potentially prevent the migration An ongoing assessment is critical to continuously calibrate and refine move group, identify and mitigate risks, and refine and optimize migration wave plans.

