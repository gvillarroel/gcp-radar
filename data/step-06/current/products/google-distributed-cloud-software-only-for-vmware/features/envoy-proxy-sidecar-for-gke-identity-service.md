---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.036Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Envoy proxy sidecar for GKE Identity Service"
feature_slug: "envoy-proxy-sidecar-for-gke-identity-service"
latest_feature_date: "2025-09-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
keywords:
  - "envoy"
  - "proxy"
  - "sidecar"
  - "gke"
  - "identity"
  - "improves"
  - "security"
  - "reliability"
---

# Envoy proxy sidecar for GKE Identity Service

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

An Envoy proxy sidecar improves the security, reliability, and performance of GKE Identity Service on Controlplane V2 clusters.

## Extended Definition

An Envoy proxy sidecar improves the security, reliability, and performance of GKE Identity Service on Controlplane V2 clusters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)

## Supporting Pages

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- For example, you may enter 1 control-plane node for a development environment and 3 control-planes nodes for high availability (HA), production environments. control plane vip : The virtual IP address (VIP) that you have chosen to configure on the load balancer for the Kubernetes API server of the user cluster. ingress vip : The IP address that you have chosen to configure on the load balancer for the ingress proxy. lb address pools : A list of maps that define the address pools to be used by the MetalLB load balancer.
- INGRESS HTTPS NODE PORT : A nodePort value for HTTPS traffic to the ingress proxy (such as 30879 ). --static-ip-config-ip-blocks : Specify the default gateway, subnet mask, and a list of the static IP addresses for the worker nodes in the user cluster.
- In Google Distributed Cloud, the Kubernetes API server, ingress proxy, and the add-on service for log aggregation are each exposed by a Kubernetes Service of type LoadBalancer .
- Note: In addition to the Kubernetes RBAC policies, you must grant some Identity and Access Management (IAM) roles to the users who aren't project owners.

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Defaults to false. enabled: false (Optional) Specify the proxy configuration proxy: The URL of the proxy url: "" The domains and IP addresses excluded from proxying noProxy: "" # (Optional) Use a private registry to host GKE images privateRegistry: # Do not include the scheme with your registry address address: "" credentials: # reference to external credentials file fileRef: # read credentials from this file path: "" # entry in the credential file entry: "" # The absolute or relative path to the CA certificate for this registry caCertPath: "" (Required): The absolute or relative path to the GCP service account key for pulling GKE images componentAccessServiceAccountKeyPath: "" (Required) Specify which GCP project to register your GKE OnPrem cluster to gkeConnect: projectID: "" # (Optional) The location of the GKE Hub and Connect service where the cluster is # registered to.
- Example: privateRegistry: credentials: fileRef: path: "my-config-folder/admin-creds.yaml" privateRegistry.credentials.fileRef.entry Required for private registry Mutable String The name of the credentials block, in your credentials configuration file , that holds the username and password of your private registry account. privateRegistry: credentials: fileRef: entry: "private-registry-creds" privateRegistry.caCertPath Required for private registry Mutable String When the container runtime pulls an image from your private registry, the registry must prove its identity by presenting a certificate.
- After the proxy configuration for the admin cluster has been set, it cannot be modified or deleted, unless the cluster is rebuilt. proxy.noProxy Optional Immutable String A comma-separated list of IP addresses, IP address ranges, host names, and domain names that should not go through the proxy server.
- You might want to configure the privateRegistry section so that clusters pull system images from the private registry instead of gcr.io/gke-on-prem-release in the following cases: You need to minimize connections to Google Cloud because of security concerns or regulatory requirements.

