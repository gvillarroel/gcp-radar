# Manufacturing Data Engine

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 3
Unique features: 18

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2025-03-31 | Configuration Packages |  | Provides a file-based configuration package system for atomic deployments and GitOps integration. |
| 2025-03-31 | Development Mode |  | Allows deletion of MDE entities and configuration packages for development use. |
| 2023-09-11 | MDE UI message class matching |  | Lets MDE UI test a matching message class against the whole list of message classes instead of only the individual message class. |
| 2023-08-03 | BigQuery datasets |  | Adds the mde_data, mde_dimension, and mde_system datasets to improve data table governance. |
| 2023-08-03 | BigQuery schema extensions |  | Extends the BigQuery schema with new fields to better support analytics use cases. |
| 2023-08-03 | Clustered archetype family |  | Enables user-defined data clustering logic in BigQuery and row-key generation in Bigtable for the Federation API. |
| 2023-08-03 | Configuration data export |  | Exports configuration data to dedicated tables in the mde_system dataset. |
| 2023-08-03 | Deployment size options |  | Adds more granular deployment sizes to support varied deployment scenarios. |
| 2023-08-03 | Lookup buckets |  | Lets parsers retrieve reference data. |
| 2023-08-03 | MDE LookML library |  | Provides common MDE LookML components and configuration packages. |
| 2023-08-03 | Message format support |  | Supports messages in both JSON and ProtoBuf. |
| 2023-08-03 | Metadata natural keys |  | Adds a natural key to metadata instances for business-friendly retrieval and centralized shared-instance management. |
| 2023-08-03 | Pub/Sub sink |  | Adds a Pub/Sub sink for extensibility and custom integration. |
| 2023-08-03 | Redis shared cache |  | Introduces a shared cache using Redis. |
| 2023-08-03 | Standalone Manufacturing Data Engine UI |  | Provides a standalone UI for Manufacturing Data Engine deployment without Manufacturing Connect. |
| 2023-08-03 | Type versioning |  | Adds versioning for types. |
| 2023-08-03 | Type-metadata bucket associations |  | Links types to metadata buckets and can require record contextualization with specific bucket metadata. |
| 2023-08-03 | Whistle natural-key lookup functions |  | Adds custom Whistle functions to look up metadata instances in parsers by natural key. |

Source file slug: `manufacturing-data-engine.md`

