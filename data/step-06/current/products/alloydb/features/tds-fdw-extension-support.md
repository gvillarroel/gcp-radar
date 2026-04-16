---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.475Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "tds_fdw extension support"
feature_slug: "tds-fdw-extension-support"
latest_feature_date: "2025-10-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/extensions"
  - "https://docs.cloud.google.com/alloydb/docs/overview"
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes"
keywords:
  - "tds"
  - "fdw"
  - "extension"
  - "lets"
  - "alloydb"
  - "access"
  - "external"
  - "databases"
---

# tds_fdw extension support

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Tds_fdw extension support lets AlloyDB access external databases such as Microsoft SQL Server and Sybase through the Tabular Data Stream protocol.

## Extended Definition

Tds_fdw extension support lets AlloyDB access external databases such as Microsoft SQL Server and Sybase through the Tabular Data Stream protocol.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)

## Supporting Pages

### "Supported database extensions \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- Source ID: `site-api-reference`
- Final score: 145
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This extension is used along with the vector extension to enhance vector search capabilities and provides support for storing and querying vector embeddings. bloom Provides an index access method based on Bloom filters. btree gin Provides sample GIN operator classes that implement B-tree equivalent behavior. btree gist Provides GiST index operator classes that implement B-tree equivalent behavior. citext Provides a case-insensitive character string type citext . cube Implements a data type cube for representing multidimensional cubes. dblink Provides functions to connect to PostgreSQL databases from within a database session. dict int An add-on dictionary template for full-text search that controls the indexing of integers. earthdistance Provides two approaches to calculating great circle distances on the surface of the Earth. fuzzystrmatch Provides several functions to determine similarities and distance between strings. google columnar engine Provides the columnar engine feature of AlloyDB, which handles HTAP (hybrid transactional analytical processing) and OLAP (online analytical processing) workloads very efficiently.
- Important: Before you can use CREATE EXTENSION to enable this extension, you must first set the database flags alloydb.enable pglogical and alloydb.logical decoding to the value on in the AlloyDB instance where you want to use the extension. pgrowlocks Provides row locking information for the specified table. pgRouting Extends PostGIS , enabling geospatial processing through network routing and analysis. pgstattuple Provides various functions to obtain tuple-level statistics. pgtap Provides a unit testing framework for PostgreSQL, written in PL/pgSQL and PL/SQL. pgtt Adds support for global temporary tables to your databases. vector The stock pgvector PostgreSQL extension is customized for AlloyDB, and referred to as vector .
- However, you can manually install PostGIS to an existing AlloyDB Omni installation. postgres fdw Provides a foreign-data wrapper that you can use to access data stored in external PostgreSQL servers. postgresql-hll Introduces a new data type, hll , which is a HyperLogLog data structure. prefix Provides prefix-matching, plus index support. rdkit Provides functions for comparing, manipulating, and identifying molecular structures. refint Includes functions to check foreign key restraints, the referencing table, and the referenced table. rum Implements support to create RUM indexes for high-performance full-text search.
- Home Documentation Databases AlloyDB for PostgreSQL Reference Send feedback Supported database extensions Stay organized with collections Save and categorize content based on your preferences.

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- You can use the following tools to connect to and manage your databases: AlloyDB Studio: a web-based tool built directly into the Google Google Cloud console that lets you explore and manage your data using an interactive SQL interface.
- The following diagram illustrates the AlloyDB resource hierarchy, featuring a cluster scaled with a primary instance and multiple load-balanced read pool instances: Cluster: a top-level resource that acts as a logical container for your databases, logs, and other metadata within a region.
- For more information, see Create a ScaNN index . google ml integration : provides access to the AI functions, which enables ML model invocation from AlloyDB for tasks such as generating embeddings, semantic ranking, AI-based filters and joins, and text generation and summarization.
- Low-latency AI applications: build generative AI applications by leveraging AlloyDB AI, which integrates vector search and machine learning model invocation directly into the database engine, removing the need for high-latency external data movement.

### "Connect from Google Kubernetes Engine (GKE) to AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- To deploy the service gke-alloydb-app application, apply the service.yaml file: kubectl apply -f service.yaml To get the service details including the external IP address of the service, use the following command: kubectl get service Sample output: NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE gke-alloydb-app LoadBalancer 34.118.229.246 35.188.16.172 80:32712/TCP 45s kubernetes ClusterIP 34.118.224.1 <none> 443/TCP 85m Use the value of the external IP from the previous step to access the sample application at the following URL: http:// EXTERNAL-IP Sample configuration files proxy sidecar deployment.yaml Copyright 2024 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
- Save and exit the editor, then apply the service: kubectl apply -f service.yaml To get the external IP address of your application, go to the Services & Ingress page in the Google Cloud console: Go to Services & Ingress Use the value in the External endpoints column to access the application at the following URL: http:// EXTERNAL IP gcloud In this tutorial, you deploy the sample vote-collecting web application, gke-alloydb-app , that uses AlloyDB as the Datastore.
- This can take several minutes. gcloud In the Cloud Shell, check if the unused IP addresses (IPv4) range is already assigned to service peering: gcloud services vpc-peerings list --network = default Skip the next step if your output looks similar to the following: network: projects/493573376485/global/networks/default peering: servicenetworking-googleapis-com reservedPeeringRanges: - default-ip-range service: services/servicenetworking.googleapis.com In this output, the value of reservedPeeringRanges is default-ip-range , which you can use as IP RANGE NAME to create a private connection in step 3. (Skip when using the default value of reservedPeeringRanges ) To allocate unused IP addresses in the VPC, use the following command: gcloud compute addresses create IP RANGE NAME \ --global \ --purpose = VPC PEERING \ --prefix-length = 16 \ --description = "VPC private service access" \ --network = default Replace IP RANGE NAME with your name for available internal IP addresses within an AlloyDB subnet, such as alloydb-gke-psa-01 .
- Required roles To get the permissions that you need to complete the tasks in this tutorial, ask your administrator to grant you the following IAM roles on your project: Databases Admin ( roles/iam.databasesAdmin ) Kubernetes Engine Cluster Admin ( roles/container.clusterAdmin ) Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) Service Account Admin( roles/iam.serviceAccountAdmin ) Kubernetes Engine Admin( roles/container.admin ) Artifact Registry Administrator( roles/artifactregistry.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .

