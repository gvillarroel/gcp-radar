---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.498Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB Omni Kubernetes Operator pod scheduling for balanced node distribution"
feature_slug: "alloydb-omni-kubernetes-operator-pod-scheduling-for-balanced-node-distribution"
latest_feature_date: "2024-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes"
  - "https://docs.cloud.google.com/alloydb/docs/monitor-health-clusters-instances"
  - "https://docs.cloud.google.com/alloydb/docs/overview"
keywords:
  - "alloydb"
  - "omni"
  - "kubernetes"
  - "operator"
  - "pod"
  - "scheduling"
  - "balanced"
  - "node"
---

# AlloyDB Omni Kubernetes Operator pod scheduling for balanced node distribution

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB Omni Kubernetes Operator version 1.0.0 and later can schedule matching new database pods to balance node distribution across the cluster.

## Extended Definition

AlloyDB Omni Kubernetes Operator version 1.0.0 and later can schedule matching new database pods to balance node distribution across the cluster.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- [https://docs.cloud.google.com/alloydb/docs/monitor-health-clusters-instances](https://docs.cloud.google.com/alloydb/docs/monitor-health-clusters-instances)
- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)

## Supporting Pages

### "Connect from Google Kubernetes Engine (GKE) to AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Console In your open Cloud Shell, use a Kubernetes SECRET , such as gke-alloydb-secret to store the connection information: kubectl create secret generic SECRET \ --from-literal = database = DATABASE NAME \ --from-literal = username = USERNAME \ --from-literal = password = DATABASE PASSWORD gcloud Use a Kubernetes SECRET , such as gke-alloydb-secret to store the connection information: kubectl create secret generic SECRET \ --from-literal = database = DATABASE NAME \ --from-literal = username = USERNAME \ --from-literal = password = DATABASE PASSWORD Deploy and run the AlloyDB Proxy in a sidecar pattern We recommend that you run the AlloyDB Proxy in a sidecar pattern as an additional container sharing a Pod with your application for the following reasons: Prevents your SQL traffic from being exposed locally.
- To deploy the service gke-alloydb-app application, apply the service.yaml file: kubectl apply -f service.yaml To get the service details including the external IP address of the service, use the following command: kubectl get service Sample output: NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE gke-alloydb-app LoadBalancer 34.118.229.246 35.188.16.172 80:32712/TCP 45s kubernetes ClusterIP 34.118.224.1 <none> 443/TCP 85m Use the value of the external IP from the previous step to access the sample application at the following URL: http:// EXTERNAL-IP Sample configuration files proxy sidecar deployment.yaml Copyright 2024 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
- In the Enable APIs step, click Enable to enable the following: AlloyDB API Artifact Registry API Compute Engine API Cloud Resource Manager API Cloud Build API Container Registry API Kubernetes Engine API Service Networking API Note: If you've already enabled any or all of these APIs, you won't see them listed here. gcloud Sign in to your Google Cloud account.
- You use this information in Create a Kubernetes secret . gcloud To create an AlloyDB database user, run the following command in the Cloud Shell: gcloud alloydb users create USERNAME \ --cluster = CLUSTER ID \ --region = REGION \ --password = DATABASE PASSWORD Replace the following: USERNAME : the name of the AlloyDB user, such as tutorial user .

### "Monitor the health of your clusters and instances \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/monitor-health-clusters-instances](https://docs.cloud.google.com/alloydb/docs/monitor-health-clusters-instances)
- Source ID: `site-docs-reference-2`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin To monitor AlloyDB health issues in the Google Cloud console, you must have the following (Identity and Access Management (IAM)) roles: AlloyDB Administrator ( roles/alloydb.admin ) alloydb.instances.list alloydb.clusters.get Monitoring Viewer ( roles/monitoring.viewer ) monitoring.timeSeries.list Note: This role is required to view insight charts in the Clusters page, but it isn't required to view Database Center health issues.
- Database Center Viewer ( roles/databasecenter.viewer ) or Database Center Administrator ( roles/databasecenter.admin ) databasecenter.databaseGroups.list databasecenter.fleetHealthStats.list Monitor AlloyDB cluster health The AlloyDB Clusters page in the Google Cloud includes a Health issues section, which displays the most critical cluster issues across your project.
- Health issues have different priorities, and the most urgent issues—those marked as critical or high priority—are displayed in your AlloyDB cluster list so that you can do the following: Organize, prioritize, assign, and close AlloyDB cluster issues.
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Monitor the health of your clusters and instances Stay organized with collections Save and categorize content based on your preferences.

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- Automatic and adaptive database features The fully PostgreSQL-compatible database engine that powers every AlloyDB node has several features that continuously analyze the structure and frequency of the queries that your instances handle, using this information to suggest schema improvements or automatically apply optimizations: An index advisor helps you find opportunities to optimize your database schema using new indexes based on your usage patterns.
- The following diagram illustrates the AlloyDB resource hierarchy, featuring a cluster scaled with a primary instance and multiple load-balanced read pool instances: Cluster: a top-level resource that acts as a logical container for your databases, logs, and other metadata within a region.
- Key features AlloyDB distinguishes itself from a stock PostgreSQL installation in a number of ways beyond the vertical and horizontal scaling advantages inherent in the multi-node architecture described earlier.
- For more information, see Register a model endpoint and Evaluate semantic queries with AI operators . alloydb ai nl : Enables interaction with your database using natural language.

