---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.601Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc Metastore integration with Trino"
feature_slug: "dataproc-metastore-integration-with-trino"
latest_feature_date: "2023-01-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/org-policy-custom-constraints"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols"
keywords:
  - "dataproc"
  - "metastore"
  - "integration"
  - "trino"
  - "supports"
---

# Dataproc Metastore integration with Trino

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc supports Dataproc Metastore integration with Trino.

## Extended Definition

Dataproc supports Dataproc Metastore integration with Trino.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/org-policy-custom-constraints](https://docs.cloud.google.com/dataproc-metastore/docs/org-policy-custom-constraints)
- [https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg](https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg)
- [https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols](https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols)

## Supporting Pages

### Use Apache Iceberg tables with Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg](https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg)
- Source ID: `site-docs-root-2`
- Final score: 41
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback Use Apache Iceberg tables with Dataproc Metastore Stay organized with collections Save and categorize content based on your preferences.
- This page explains how to use Apache Iceberg tables with a Dataproc Metastore service attached to a Managed Service for Apache Spark cluster.
- Drivers Select Insert Create Table Spark ✓ ✓ ✓ Hive ✓ ✓ Presto ✓ ✓ ✓ Before you begin Create a Dataproc Metastore service .
- Attach Dataproc Metastore to a Managed Service for Apache Spark cluster .

### "Create custom organization policy constraints \_|\_ Dataproc Metastore \_\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/org-policy-custom-constraints](https://docs.cloud.google.com/dataproc-metastore/docs/org-policy-custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 39
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource Field metastore.googleapis.com/Backup resource.description resource.name metastore.googleapis.com/MetadataImport resource.databaseDump.gcsUri resource.databaseDump.sourceDatabase resource.databaseDump.type resource.description resource.name metastore.googleapis.com/Service resource.databaseType resource.deletionProtection resource.encryptionConfig.kmsKey resource.hiveMetastoreConfig.auxiliaryVersions[ ].configOverrides resource.hiveMetastoreConfig.auxiliaryVersions[ ].version resource.hiveMetastoreConfig.configOverrides resource.hiveMetastoreConfig.endpointProtocol resource.hiveMetastoreConfig.kerberosConfig.keytab.cloudSecret resource.hiveMetastoreConfig.kerberosConfig.krb5ConfigGcsUri resource.hiveMetastoreConfig.kerberosConfig.principal resource.hiveMetastoreConfig.version resource.maintenanceWindow.dayOfWeek resource.maintenanceWindow.hourOfDay resource.metadataIntegration.dataCatalogConfig.enabled resource.name resource.network resource.networkConfig.consumers.subnetwork resource.port resource.releaseChannel resource.scalingConfig.autoscalingConfig.autoscalingEnabled resource.scalingConfig.autoscalingConfig.limitConfig.maxScalingFactor resource.scalingConfig.autoscalingConfig.limitConfig.minScalingFactor resource.scalingConfig.instanceSize resource.scalingConfig.scalingFactor resource.scheduledBackup.backupLocation resource.scheduledBackup.cronSchedule resource.scheduledBackup.enabled resource.scheduledBackup.timeZone resource.telemetryConfig.logFormat resource.tier What's next Learn more about Organization Policy Service .
- Description Constraint syntax Restrict logging for Dataproc Metastore instances name : organizations/ ORGANIZATION ID /customConstraints/custom.allowDataprocMetastoreService resourceTypes : - metastore.googleapis.com/Service methodTypes : - CREATE condition : resource.tier == 'ENTERPRISE' actionType : ALLOW displayName : Allow only the creation of Enterprise DPMS instances description : All DPMS instances should use the enterprise tier Dataproc Metastore supported resources The following table lists the Dataproc Metastore resources that you can reference in custom constraints.
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback Create custom organization policy constraints Stay organized with collections Save and categorize content based on your preferences.
- A custom constraint can only contain letters (including upper and lowercase) or numbers, for example, custom.allowDataprocMetastoreService .

### About Dataproc Metastore endpoint protocols \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols](https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols)
- Source ID: `site-docs-root-2`
- Final score: 39
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you create a Dataproc Metastore service, you must choose to use one of the following endpoint protocols: The Apache Thrift protocol The gRPC protocol This protocol defines how your Hive Metastore clients access metadata stored in your Dataproc Metastore service.
- Your cluster then uses Dataproc Metastore as its Hive metastore. gRPC The gRPC protocol is the modern, portable, high performance option that you must explicitly select when you create a Dataproc Metastore service.
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback About Dataproc Metastore endpoint protocols Stay organized with collections Save and categorize content based on your preferences.
- After choosing the Thrift protocol After you create a Dataproc Metastore using Thrift, you can connect to it from a Managed Service for Apache Spark cluster or self-managed cluster .

