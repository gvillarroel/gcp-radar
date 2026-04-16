---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:04.808Z"
product_name: "Cloud Service Mesh"
product_slug: "cloud-service-mesh"
feature_name: "Mesh CA support for on-prem Anthos clusters"
feature_slug: "mesh-ca-support-for-on-prem-anthos-clusters"
latest_feature_date: "2021-06-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane"
  - "https://docs.cloud.google.com/service-mesh/docs/canonical-service"
  - "https://docs.cloud.google.com/service-mesh/docs/canonical-service-migrate-from-in-cluster-controller"
  - "https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices"
keywords:
  - "mesh"
  - "ca"
  - "for"
  - "on"
  - "prem"
  - "anthos"
  - "clusters"
  - "enables"
---

# Mesh CA support for on-prem Anthos clusters

Product: Cloud Service Mesh
Coverage: MEDIUM

## Step 02 Summary

Mesh CA support for on-prem Anthos clusters enables new Anthos Service Mesh installations on VMware and bare metal to use Mesh CA; Mesh CA support for on-prem Anthos clusters enables new Anthos Service Mesh installations on VMware and bare metal to use Mesh CA.

## Extended Definition

Mesh CA support for on-prem Anthos clusters enables new Anthos Service Mesh installations on VMware and bare metal to use Mesh CA; Mesh CA support for on-prem Anthos clusters enables new Anthos Service Mesh installations on VMware and bare metal to use Mesh CA.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- [https://docs.cloud.google.com/service-mesh/docs/canonical-service](https://docs.cloud.google.com/service-mesh/docs/canonical-service)
- [https://docs.cloud.google.com/service-mesh/docs/canonical-service-migrate-from-in-cluster-controller](https://docs.cloud.google.com/service-mesh/docs/canonical-service-migrate-from-in-cluster-controller)
- [https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices](https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices)

## Supporting Pages

### "Provision a managed Cloud Service Mesh control plane on GKE \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- Source ID: `site-docs-root`
- Final score: 299
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Grant service accounts in the fleet project permission to access the cluster project: gcloud projects add-iam-policy-binding " CLUSTER PROJECT ID " \ --member "serviceAccount:service- FLEET PROJECT NUMBER @gcp-sa-servicemesh.iam.gserviceaccount.com" \ --role roles/anthosservicemesh.serviceAgent Enable the Mesh API on the cluster's project: gcloud services enable mesh.googleapis.com \ --project = CLUSTER PROJECT ID Configure Certificate Authority Service (Optional) If your service mesh deployment requires Certificate Authority Service (CA Service), then follow Configure Certificate Authority Service for managed Cloud Service Mesh to enable it for your fleet.
- The following example shows a typical managed data plane maintenance notification: Subject Line: Upcoming upgrade for your Cloud Service Mesh cluster " <location/cluster-name> " Dear Cloud Service Mesh user, The Cloud Service Mesh components in your cluster ${instance id} (https://console.cloud.google.com/kubernetes/clusters/details/${instance id}/details?project=${project id}) are scheduled to upgrade on ${scheduled date human readable} at ${scheduled time human readable}.
- Enabling managed Cloud Service Mesh as a default configuration for your fleet and registering clusters to the fleet during cluster creation only supports Mesh CA .
- For GKE Autopilot clusters, there may be warnings for Cloud Service Mesh components "DaemonSet has no nodes selected" until the clusters' NodePool scales.

### Canonical Service \_|\_ Cloud Service Mesh \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-mesh/docs/canonical-service](https://docs.cloud.google.com/service-mesh/docs/canonical-service)
- Source ID: `site-docs-reference`
- Final score: 276
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Service Mesh 1.6.8 introduces support for Canonical Services, a conceptual and architectural model for representing your production workloads as a singular service that is easier to observe and manage.
- These workloads can span multiple clusters, disparate backend platforms, and different schemas and configurations.
- Therefore, the unique identity of a Canonical Service is determined by: mesh id + namespace + canonical name.
- You can determine the full scope of a Canonical Service from the group of workloads that define it including: Hostnames and IP addresses Network(s) Network and security policies Routing and load balancing VM and container images Physical or virtual infrastructure Geographic region(s) CI/CD system Source code Telemetry Service level objectives and alerts You can view dashboards that display these operational details for each service on the Services page .

### "Migrating from In-cluster to Managed Canonical Service Controller \_|\_\

- URL: [https://docs.cloud.google.com/service-mesh/docs/canonical-service-migrate-from-in-cluster-controller](https://docs.cloud.google.com/service-mesh/docs/canonical-service-migrate-from-in-cluster-controller)
- Source ID: `site-docs-reference`
- Final score: 265
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Revert back to the In-Cluster Canonical Service Controller If you encounter issues with the Managed Canonical Service Controller, you can reinstall the in-cluster controller with the following command: kubectl apply -f \ https://raw.githubusercontent.com/GoogleCloudPlatform/anthos-service-mesh-packages/release-1.28/asm/canonical-service/controller.yaml What's next Learn about: Canonical Services Best practices in Canonical Services Define a Canonical Service Resolving Canonical Service issues Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Grant service accounts in the fleet project permission to access the cluster project: gcloud projects add-iam-policy-binding " CLUSTER PROJECT ID " \ --member "serviceAccount:service- FLEET PROJECT NUMBER @gcp-sa-servicemesh.iam.gserviceaccount.com" \ --role roles/anthosservicemesh.serviceAgent Replace CLUSTER PROJECT ID with the project ID for your cluster and the FLEET PROJECT NUMBER with the project number for your fleet.
- Verify that the Canonical Service my-app is created. kubectl get canonicalservices -n NAMESPACE NAME Example output: NAME AGE my-app 3s Cleanup: Delete the pod, canonical service and the namespace: kubectl delete -f simple pod.yaml -n NAMESPACE NAME kubectl delete canonicalservices my-app -n NAMESPACE NAME kubectl delete namespace NAMESPACE NAME Troubleshooting: If the required canonical service is not created, refer to Resolving Canonical Service issues in Cloud Service Mesh .
- Verify the Managed Canonical Controller is operational The Managed Canonical Service Controller reports its status in the feature state, so you can confirm the installation is working correctly by checking the feature state: Check Feature State: Retrieve the feature state using the following command: gcloud container fleet mesh describe --project FLEET PROJECT ID Verify Status: Check the state of your cluster and verify that the state.code is OK .

### "Canonical Service Best Practices \_|\_ Cloud Service Mesh \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices](https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices)
- Source ID: `site-docs-reference`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Your ability to see the historical performance of your service, plan, and project capacity all depend on maintaining a single notion of that service in Cloud Service Mesh for the duration of its life.
- While you could define a Canonical Service to group several conceptually different microservices together, the Service Dashboards wouldn't provide their full value.The Service Dashboards would display an aggregation of dissimilar components which may individually be performing and configured very differently.
- Reserve a unique service [namespace, name] across the whole mesh If a Canonical Service deployed in one cluster or region has the same Kubernetes namespace and Canonical Service name as one deployed in another cluster or region, Cloud Service Mesh assumes that it is the same logical service.
- Prefer Cloud Monitoring custom dashboards for arbitrary aggregations Rather than artificially bloating Canonical Services into larger scopes for aggregate data, use Cloud Monitoring dashboards to create higher-level views of multiple logical services at once.

