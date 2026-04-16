---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.737Z"
product_name: "VM Runtime on Google Distributed Cloud"
product_slug: "vm-runtime-on-google-distributed-cloud"
feature_name: "Anthos Clusters on Bare Metal 1.28.0 availability"
feature_slug: "anthos-clusters-on-bare-metal-1-28-0-availability"
latest_feature_date: "2023-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/cluster-upgrades"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/create-storage-credentials"
keywords:
  - "anthos"
  - "clusters"
  - "on"
  - "bare"
  - "metal"
  - "28"
  - "availability"
  - "version"
---

# Anthos Clusters on Bare Metal 1.28.0 availability

Product: VM Runtime on Google Distributed Cloud
Coverage: MEDIUM

## Step 02 Summary

Anthos Clusters on bare metal version 1.28.0 is now available for download.

## Extended Definition

Anthos Clusters on bare metal version 1.28.0 is now available for download.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/cluster-upgrades](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/cluster-upgrades)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/create-storage-credentials](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/create-storage-credentials)

## Supporting Pages

### "Edit VM configuration in VM Runtime on GDC \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm)
- Source ID: `site-docs-reference`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This document is intended for application owners that use VM Runtime on GDC to run virtual machines (VMs) in clusters created with Google Distributed Cloud (software only) on bare metal.
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Edit VM configuration in VM Runtime on GDC Stay organized with collections Save and categorize content based on your preferences.
- VMs running in version 1.13.0 clusters or higher can be configured to restart automatically whenever you make changes to their configuration.
- This document shows you how to edit VMs running in bare metal clusters.

### "Tutorial: Deploy an existing VM in a cluster using VM Runtime on GDC \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm)
- Source ID: `site-docs-reference`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable VM Runtime on GDC and install the virtctl plugin The VM Runtime on GDC custom resource definition is part of all bare metal clusters since version 1.10.
- Objectives Enable VM Runtime on GDC and install the virtctl plugin Deploy the VM-based workload Log in to the VM and check the application status Access the VM-based workload Before you begin To complete this document you need the following resources: Access to a version 1.12.0 or higher bare metal cluster that was created by following the Install with Manual Loadbalancer guide.
- If your cluster doesn't have this Ingress resource, create it by applying the following manifest: kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/anthos-samples/main/anthos-bm-gcp-terraform/resources/manifests/pos-ingress.yaml apiVersion : networking.k8s.io/v1 kind : Ingress metadata : name : pos-ingress spec : rules : - http : paths : - path : / pathType : Prefix backend : service : name : api-server-svc port : number : 8080 Create a Kubernetes Service that routes traffic to the VM.
- The Ingress resource routes traffic to this Service : kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/anthos-samples/main/anthos-vmruntime/pos-service.yaml The following example output confirms the creation of a Service: service/api-server-svc created apiVersion : v1 kind : Service metadata : name : api-server-svc spec : selector : kubevirt/vm : pos-vm ports : - protocol : TCP port : 8080 targetPort : 8081 Get the external IP address of the Ingress load balancer.

### "Upgrade VM Runtime on GDC from a Preview version \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/cluster-upgrades](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/cluster-upgrades)
- Source ID: `site-docs-reference`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Upgrade VM Runtime on GDC from a Preview version Stay organized with collections Save and categorize content based on your preferences.
- Note: If you have version 1.11 or later clusters, you can delete VMs and resource and disable VM Runtime on GDC with a single command.
- VM Runtime on GDC is released for General Availability (GA) with the release of Google Distributed Cloud version 1.12.0.
- For instructions for version 1.10 clusters, see Delete VMs and their resources in the 1.10 documentation.

### "Create and use credentials to import images from Cloud Storage for VM Runtime\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/create-storage-credentials](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/create-storage-credentials)
- Source ID: `site-docs-reference`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Apply the SecretForwarder manifest using kubectl : kubectl apply -f my-forwarded-secret.yaml Across clusters The following example SecretForwarder manifest forwards a secret across clusters: apiVersion : baremetal.cluster.gke.io/v1 kind : SecretForwarder metadata : name : cdi-gcs namespace : cluster-user1 spec : RemoteClusterTargetSecrets : name : gcs-sa namespaces : - default sourceSecret : name : gke-connect namespace : anthos-creds This example does the following: Creates a SecretForwarder named cdi-gcs in the cluster-user1 namespace.
- Same cluster The following example SecretForwarder manifest forwards a secret in the same cluster: apiVersion : baremetal.cluster.gke.io/v1 kind : SecretForwarder metadata : name : cdi-gcs namespace : default spec : inClusterTargetSecrets : name : gcs-sa namespaces : - default sourceSecret : name : gke-connect namespace : anthos-creds This example does the following: Creates a SecretForwarder named cdi-gcs in the default namespace.
- Before you begin To complete this document, you need access to the following resources: Access to Google Distributed Cloud version 1.12.0 ( anthosBareMetalVersion: 1.12.0 ) or higher cluster.
- To forward a Secret in the same cluster, complete the following steps: Create a SecretForwarder manifest, such as my-forwarded-secret.yaml , in the editor of your choice: nano my-forwarded-secret.yaml Copy and paste the following YAML manifest: apiVersion : baremetal.cluster.gke.io/v1 kind : SecretForwarder metadata : name : SECRET FORWARDER NAME namespace : NAMESPACE NAME spec : RemoteClusterTargetSecrets : name : TARGET SECRET NAME namespaces : - TARGET NAMESPACE NAME sourceSecret : name : SOURCE SECRET NAME namespace : SOURCE NAMESPACE NAME Replace the following values: SECRET FORWARDER NAME : the name for your SecretForwarder in the remote cluster.

