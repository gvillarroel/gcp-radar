---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.078Z"
product_name: "Migration Center"
product_slug: "migration-center"
feature_name: "StratoZone"
feature_slug: "stratozone"
latest_feature_date: "2024-09-30"
deprecation_date: "2024-09-30"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient"
  - "https://docs.cloud.google.com/migration-center/docs/migration-execution"
  - "https://docs.cloud.google.com/migration-center/docs/migration-modernization-tools"
keywords:
  - "stratozone"
  - "was"
  - "the"
  - "legacy"
  - "migration"
  - "that"
  - "ended"
  - "on"
---

# StratoZone

Product: Migration Center
Coverage: MEDIUM

## Step 02 Summary

StratoZone was the legacy migration service that ended on September 30, 2024; StratoZone is being retired, with end of sale on July 30, 2024 and end of life on October 1, 2024; deprecated on 2024-09-30.

## Extended Definition

StratoZone was the legacy migration service that ended on September 30, 2024; StratoZone is being retired, with end of sale on July 30, 2024 and end of life on October 1, 2024; deprecated on 2024-09-30.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- [https://docs.cloud.google.com/migration-center/docs/migration-execution](https://docs.cloud.google.com/migration-center/docs/migration-execution)
- [https://docs.cloud.google.com/migration-center/docs/migration-modernization-tools](https://docs.cloud.google.com/migration-center/docs/migration-modernization-tools)

## Supporting Pages

### "Class MigrationCenterAsyncClient (0.4.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- Source ID: `site-python-reference`
- Final score: 271
- Re-rank relevance: N/A

Evidence snippets:
- These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment. transport Optional[Union[str,MigrationCenterTransport,Callable[..., MigrationCenterTransport]]] The transport to use, or a Callable that constructs and returns a new transport to use.
- Returns Type Description google.cloud.migrationcenter v1.types.ImportJob A resource that represents the background job that imports asset frames. get location get location ( request : typing .
- Returns Type Description google.cloud.migrationcenter v1.types.PreferenceSet The preferences that apply to all assets in a given context. get report get report ( request : typing .
- CreateImportDataFileRequest ( parent="parent value", import data file id="import data file id value", import data file=import data file, ) Make the request operation = client. create import data file (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreateImportDataFileRequest , dict]] The request object.

### "Class MigrationCenterClient (0.4.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- Source ID: `site-python-reference`
- Final score: 271
- Re-rank relevance: N/A

Evidence snippets:
- These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment. transport Optional[Union[str,MigrationCenterTransport,Callable[..., MigrationCenterTransport]]] The transport to use, or a Callable that constructs and returns a new transport.
- Returns Type Description google.cloud.migrationcenter v1.types.ImportJob A resource that represents the background job that imports asset frames. get location get location ( request : typing .
- Returns Type Description google.cloud.migrationcenter v1.types.PreferenceSet The preferences that apply to all assets in a given context. get report get report ( request : typing .
- CreateImportDataFileRequest ( parent="parent value", import data file id="import data file id value", import data file=import data file, ) Make the request operation = client. create import data file (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.CreateImportDataFileRequest , dict] The request object.

### Execute your migration \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/migration-execution](https://docs.cloud.google.com/migration-center/docs/migration-execution)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Item Description 0 Migration tools architecture Architecture of tools constituting a migration factory (tools for ongoing assessment, wave plan refinement, workload-specific migration, build, testing, deployment, and monitoring) 1 Migration checklist Checklist for use before and during the migration sprint 2 Inventory List of workloads that will be migrated to Google Cloud 3 Sprint runbook Execution guidelines for migrating each workload 4 Migration plan Step-by-step migration plan (process) to be followed during the migration sprint 5 Network and security rules List of all of the firewall rules for ingress and egress on Google Cloud DNS changes during migration to Google Cloud 6 Risks and mitigation Possible risks during the migration sprint and mitigation steps 7 Testing and validation Test plan to validate functional and non-functional requirements 8 Rollback plan Rollback steps by workload 9 Team composition Team composition and roster with contact details 10 Governance RACI matrix of migration execution team, cadence and reporting, escalation resolution mechanisms Migration execution After you have completed the migration planning and preparation phase, this section describes how to perform repeatable migrations and validations to Google Cloud.
- You must continue to perform discovery and assessment throughout your cloud migration project to recalibrate and enrich data relating to the following aspects: Application and database mapping to infrastructure mapping (to identify all of the infrastructure and platform components for a business workload) Mapping between infrastructure to applications, databases, and services (to identify all of the business workloads attached to an infrastructure or platform component) Dependencies across business workloads Resource consumption by workloads Identification of any workloads that were not discovered in the initial wave of assessment Identification of new or changed landing zone requirements that have not been identified in the initial wave of assessment Identification of blocking issues that potentially prevent the migration An ongoing assessment is critical to continuously calibrate and refine move group, identify and mitigate risks, and refine and optimize migration wave plans.
- The outputs of this phase are the following: Move group(s) within the scope of the current sprint Migration sprint checklist Mitigations to remediate blocking issues Migrate, build, test, and deployment plan Rollback plan Scheduling of execution Low-level detailed planning is critical for a successful deployment that follows.
- The following documents present several automation tools that address the following capabilities: Migration and modernization tools Build and CI/CD automation tools Testing tools What's next Learn more about the tools for migration and modernization .

### Migration tools \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/migration-modernization-tools](https://docs.cloud.google.com/migration-center/docs/migration-modernization-tools)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Based on the nature of the workloads that you want to migrate, you might want to integrate other tools with your migration tools architecture.
- This document presents the main tools that Google Cloud professional service teams use during migration projects.
- Database Migration Service PostgreSQL, MySQL, SQL Server, Oracle Cloud SQL, AlloyDB for PostgreSQL This tool is a serverless service that helps migrate PostgreSQL workloads into Cloud SQL and AlloyDB for PostgreSQL, MySQL and SQL Server workloads into Cloud SQL, and Oracle workloads into Cloud SQL for PostgreSQL or AlloyDB for PostgreSQL.
- The following list includes additional migration tools: Storage Transfer Service lets you bring data to Cloud Storage from other cloud providers, online resources, or local data (for example: S3, Blob, Data Lake, on-premises file systems).

