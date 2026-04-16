---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.131Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB Omni Kubernetes Operator load balancer annotations"
feature_slug: "alloydb-omni-kubernetes-operator-load-balancer-annotations"
latest_feature_date: "2024-08-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes"
  - "https://docs.cloud.google.com/alloydb/docs/db-version-policies"
  - "https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners"
keywords:
  - "annotations"
  - "balancer"
  - "load"
  - "operator"
  - "kubernetes"
  - "version"
  - "omni"
---

# AlloyDB Omni Kubernetes Operator load balancer annotations

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB Omni Kubernetes Operator version 1.1.0 supports configuring a load balancer by using annotations.

## Extended Definition

AlloyDB Omni Kubernetes Operator version 1.1.0 supports configuring a load balancer by using annotations.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- [https://docs.cloud.google.com/alloydb/docs/db-version-policies](https://docs.cloud.google.com/alloydb/docs/db-version-policies)
- [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)

## Supporting Pages

### "Connect from Google Kubernetes Engine (GKE) to AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- To deploy the service gke-alloydb-app application, apply the service.yaml file: kubectl apply -f service.yaml To get the service details including the external IP address of the service, use the following command: kubectl get service Sample output: NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE gke-alloydb-app LoadBalancer 34.118.229.246 35.188.16.172 80:32712/TCP 45s kubernetes ClusterIP 34.118.224.1 <none> 443/TCP 85m Use the value of the external IP from the previous step to access the sample application at the following URL: http:// EXTERNAL-IP Sample configuration files proxy sidecar deployment.yaml Copyright 2024 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
- See the License for the specific language governing permissions and limitations under the License. apiVersion : v1 kind : Service metadata : name : < YOUR-SERVICE-NAME > spec : type : LoadBalancer selector : app : < YOUR-APPLICATION-NAME > ports : - port : 80 targetPort : 8080 service-account.yaml Copyright 2024 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
- To connect to the sample application using an external load balancer, complete the following steps in your open Cloud Shell: Open service.yaml : nano service.yaml Paste the following content: apiVersion : v1 kind : Service metadata : name : SAMPLE APPLICATION spec : type : LoadBalancer selector : app : SAMPLE APPLICATION ports : - port : 80 targetPort : 8080 Replace SAMPLE APPLICATION with your application name, such as gke-alloydb-app .
- In the editor of your choice, follow these steps: Open service.yaml using nano, for example: nano service.yaml In the nano editor, paste the following content: apiVersion : v1 kind : Service metadata : name : SAMPLE APPLICATION spec : type : LoadBalancer selector : app : SAMPLE APPLICATION ports : - port : 80 targetPort : 8080 Replace SAMPLE APPLICATION with the name of your sample web application, such as gke-alloydb-app .

### "Database version policies \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/db-version-policies](https://docs.cloud.google.com/alloydb/docs/db-version-policies)
- Source ID: `site-docs-reference-2`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- For AlloyDB Omni, you must download and install the binaries that include upgraded PostgreSQL minor-version compatibility.
- Major version support timeline The following table shows the dates when AlloyDB support for compatible versions became generally available (GA): PostgreSQL compatible version AlloyDB version support GA date AlloyDB Omni version support GA Date PostgreSQL 18 March 18, 2026 Not applicable PostgreSQL 17 September 22, 2025 Not applicable PostgreSQL 16 October 23, 2024 April 8, 2025 PostgreSQL 15 January 19, 2024 October 11, 2023 PostgreSQL 14 December 12, 2022 Not applicable Major version compatibility release policy We aim to offer timely support for AlloyDB compatibility with new PostgreSQL major versions.
- Major and minor version support AlloyDB supports compatibility with the following PostgreSQL database versions: PostgreSQL compatible version AlloyDB AlloyDB Omni PostgreSQL 18 18.1 Not applicable PostgreSQL 17 (default) 17.5 17.5 PostgreSQL 16 16.9 16.8 16.3 PostgreSQL 15 15.13 15.12 15.7 15.5 15.4 15.2 PostgreSQL 14 14.18 Not applicable PostgreSQL 18 compatibility Before you use PostgreSQL 18 as your database version, consider the following: PostgreSQL 18 isn't available with AlloyDB Omni.
- AlloyDB and AlloyDB Omni version policies AlloyDB for PostgreSQL , which runs in Google Cloud, and AlloyDB Omni , which you install and run on your own computing environment, have related but distinct versioning policies as described in this section.

### "Google Cloud Ready - AlloyDB Partners \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- Source ID: `site-docs-reference-2`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Scaling Postgres AI Workloads with AlloyDB Omni on Silk Platform AlloyDB Omni and Silk Partner Advantage page Direct link Business intelligence and advanced analytics BoostKpi Solution BoostKPI Category Business intelligence and advanced analytics Description Use BoostKPI to identify and receive alerts about granular anomalies in your business data stored in BigQuery, as well as the root causes of these anomalies.
- Partner references AlloyDB Omni using HammerDB on DS220 G2 and VSP One Block Partner Advantage page Direct link PLiOPS Solution PLiOPS Data Acceleration Category Storage Accelerator Description The Pliops Extreme Data Processor (XDP) is a hardware-based storage accelerator that offloads and accelerates data-intensive workloads.
- It is designed to run mission-critical stateful applications, like AlloyDB Omni, on any Kubernetes cluster, in any cloud or on-premises environment, with enterprise-grade performance and reliability.
- Partner references Configuring AlloyDB Omni Cloud SQL for PostgreSQL and AlloyDB for PostgreSQL Integration Partner Advantage page Direct link Hitachi Solution Hitachi Virtual Storage Platform One Block 20 Category Application ISV Description Hitachi Virtual Storage Platform One Block 20 offers three models with the same capacity, featuring 72 NVMe flash drives and support for Fibre Channel, iSCSI, and NVMe TCP connectivity.

