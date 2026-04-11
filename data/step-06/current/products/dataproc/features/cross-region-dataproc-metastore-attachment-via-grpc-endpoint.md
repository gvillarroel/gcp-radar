---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.039Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Cross-region Dataproc Metastore attachment via gRPC endpoint"
feature_slug: "cross-region-dataproc-metastore-attachment-via-grpc-endpoint"
latest_feature_date: "2022-11-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/grpc-endpoints"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols"
keywords:
  - "cross"
  - "region"
  - "dataproc"
  - "metastore"
  - "attachment"
  - "via"
  - "grpc"
  - "endpoint"
---

# Cross-region Dataproc Metastore attachment via gRPC endpoint

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Clusters in any region can attach to a Dataproc Metastore service that uses the gRPC endpoint protocol.

## Extended Definition

Clusters in any region can attach to a Dataproc Metastore service that uses the gRPC endpoint protocol.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/grpc-endpoints](https://docs.cloud.google.com/dataproc-metastore/docs/grpc-endpoints)
- [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc)
- [https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols](https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols)

## Supporting Pages

### Access gRPC endpoints for Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/grpc-endpoints](https://docs.cloud.google.com/dataproc-metastore/docs/grpc-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback Access gRPC endpoints for Dataproc Metastore Stay organized with collections Save and categorize content based on your preferences.
- This page explains how to grant a Google Cloud user account or a service account access to a Dataproc Metastore service that uses the gRPC endpoint protocol .
- LOCATION : The region of the Dataproc Metastore service that you're granting metadata access to.
- LOCATION : The region of the Dataproc Metastore service that you're granting access to.

### "Configure Kerberos for Dataproc Metastore gRPC endpoints \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc)
- Source ID: `site-docs-root-2`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a Dataproc Metastore service with the gRPC endpoint To create a Dataproc Metastore that uses the gRPC endpoint, run the following gcloud metastore services create command: gcloud gcloud metastore services create SERVICE \ --instance-size=medium \ --endpoint-protocol=grpc Replace: SERVICE : The name of your Dataproc Metastore service Create a Managed Service for Apache Spark cluster and connect to your service To create a Managed Service for Apache Spark configured with Kerberos, run the following gcloud dataproc clusters create command.
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback Configure Kerberos for Dataproc Metastore gRPC endpoints Stay organized with collections Save and categorize content based on your preferences.
- Configure Kerberos for Dataproc Metastore The following instructions show you how to configure Kerberos for a Dataproc Metastore service that uses the gRPC endpoint.
- This page explains how to configure Kerberos for your Dataproc Metastore service that uses the gRPC endpoint protocol.

### About Dataproc Metastore endpoint protocols \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols](https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols)
- Source ID: `site-docs-root-2`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- When you create a Dataproc Metastore service, you must choose to use one of the following endpoint protocols: The Apache Thrift protocol The gRPC protocol This protocol defines how your Hive Metastore clients access metadata stored in your Dataproc Metastore service.
- After choosing the gRPC protocol After you create a Dataproc Metastore using the gRPC endpoint protocol, you must grant additional IAM roles .
- Your cluster then uses Dataproc Metastore as its Hive metastore. gRPC The gRPC protocol is the modern, portable, high performance option that you must explicitly select when you create a Dataproc Metastore service.
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback About Dataproc Metastore endpoint protocols Stay organized with collections Save and categorize content based on your preferences.

