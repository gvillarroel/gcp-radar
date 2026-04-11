---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.629Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB Public IP availability"
feature_slug: "alloydb-public-ip-availability"
latest_feature_date: "2024-01-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes"
keywords:
  - "publicly accessible AlloyDB instance"
  - "authorized external IP ranges"
  - "public endpoint access"
  - "external IP access"
  - "public endpoint"
  - "public IP preview"
  - "AlloyDB Public IP"
  - "external IP"
---

# AlloyDB Public IP availability

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

AlloyDB Public IP is available in preview so instances can accept connections from authorized external IP ranges.

## Extended Definition

The provided excerpts do not provide direct evidence that AlloyDB itself exposes a Public IP feature or configurable "authorized external IP ranges". They only show a GKE sample where a Kubernetes service is created as a LoadBalancer and accessed via an external IP, and that sample application uses AlloyDB as its datastore; they do not document AlloyDB instance-level public endpoint controls. If the feature exists, its public-access behavior for AlloyDB instances is not substantiated by these excerpts.

## Evidence Summary

The cited page demonstrates external IP access to a Kubernetes sample app frontend, with AlloyDB as backend datastore, but provides no explicit documentation of AlloyDB public IP availability or external-IP-range authorization for AlloyDB instances.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)

## Supporting Pages

### "Connect from Google Kubernetes Engine (GKE) to AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: WEAK
- Re-rank rationale: It mentions connecting with internal IP, which is tangentially related to network access options, but does not define or document public IP availability.

Evidence snippets:
- To deploy the service gke-alloydb-app application, apply the service.yaml file: kubectl apply -f service.yaml To get the service details including the external IP address of the service, use the following command: kubectl get service Sample output: NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE gke-alloydb-app LoadBalancer 34.118.229.246 35.188.16.172 80:32712/TCP 45s kubernetes ClusterIP 34.118.224.1 <none> 443/TCP 85m Use the value of the external IP from the previous step to access the sample application at the following URL: http:// EXTERNAL-IP Sample configuration files proxy sidecar deployment.yaml Copyright 2024 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
- Save and exit the editor, then apply the service: kubectl apply -f service.yaml To get the external IP address of your application, go to the Services & Ingress page in the Google Cloud console: Go to Services & Ingress Use the value in the External endpoints column to access the application at the following URL: http:// EXTERNAL IP gcloud In this tutorial, you deploy the sample vote-collecting web application, gke-alloydb-app , that uses AlloyDB as the Datastore.

