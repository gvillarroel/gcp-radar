---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.836Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE Gateway integration with Cloud Certificate Manager"
feature_slug: "gke-gateway-integration-with-cloud-certificate-manager"
latest_feature_date: "2022-07-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates"
keywords:
  - "gke"
  - "gateway"
  - "integration"
  - "certificate"
  - "manager"
  - "can"
  - "integrate"
  - "tls"
---

# GKE Gateway integration with Cloud Certificate Manager

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE Gateway can integrate with Cloud Certificate Manager for TLS features and higher scale.

## Extended Definition

GKE Gateway can integrate with Cloud Certificate Manager for TLS features and higher scale.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates)

## Supporting Pages

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Technical details: The Istio secure Gateway or workloads using the DestinationRule can load TLS private keys and certificates from Kubernetes secrets via the credentialName configuration.
- Technical details: The Istio secure Gateway or workloads using the DestinationRule can load TLS private keys and certificates from Kubernetes secrets via the credentialName configuration.
- Technical details: The Istio secure Gateway or workloads using the DestinationRule can load TLS private keys and certificates from Kubernetes secrets via the credentialName configuration.
- Normally, a gateway or workload deployment is only able to access TLS certificates and private keys stored in the secret within its namespace.

### "Access private registries with private CA certificates \_|\_ GKE security\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates)
- Source ID: `site-iam-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Verify that your cluster can access the private registry Run the following command: gcloud container clusters describe CLUSTER NAME \ --location = LOCATION \ --flatten = "nodePoolDefaults.nodeConfigDefaults.containerdConfig" The output is similar to the following: registryHosts containerdConfig: registryHosts: - server: example.io hosts: - host: example.mirror.io capabilities: - "HOST CAPABILITY PULL" - "HOST CAPABILITY RESOLVE" ca: - gcpSecretManagerSecretUri: projects/123456789012/secrets/example-secret-name/versions/1 privateRegistryAccessConfig containerdConfig: privateRegistryAccessConfig: certificateAuthorityDomainConfig: - fqdns: - 203.0.113.105 gcpSecretManagerCertificateConfig: secretUri: projects/123456789012/secrets/example-secret-name/versions/1 enabled: true Deploy a workload that accesses a private image In this section, you deploy a static Pod that references an image from your private registry.
- Or Internal error pulling certificate "projects/ PROJECT NUMBER /secrets/ SECRET NAME /versions/ SECRET VERSION " from GSM: .... privateRegistryAccessConfig Query the logs with following filter. resource.type="gce instance" textPayload:"Installed certificate \\\"projects/ PROJECT NUMBER /secrets/ SECRET NAME /versions/ SECRET VERSION \\\"" If your certificate installation succeeded, the output is similar to the following: "Installed certificate "projects/ PROJECT NUMBER /secrets/ SECRET NAME /versions/ SECRET VERSION "" If your certificate installation failed, the output is similar to the following: "Failed to install certificate "projects/ PROJECT NUMBER /secrets/ SECRET NAME /versions/ SECRET VERSION "" Best practices We recommend that you use the following best practices when you use this feature: Don't use aliases for Secret Manager secret versions.
- Apply containerd configuration to new node pools You can apply the containerd configuration to a new GKE node pool with following command: gcloud container node-pools create NODE POOL NAME \ --cluster = CLUSTER NAME \ --location = LOCATION \ --scopes = "cloud-platform" \ --containerd-config-from-file = " PATH TO CONFIG FILE " Note : If your configuration file does not use secrets from Secret Manager, such as for the privateRegistryAccessConfig feature or when using registryHosts with certificates stored in Secret Manager, you can remove the --scopes="cloud-platform" flag.
- Run the following command to create Autopilot clusters: gcloud container clusters create-auto CLUSTER NAME \ --location = LOCATION \ --scopes = "cloud-platform" \ --containerd-config-from-file = " PATH TO CONFIG FILE " Note : If your configuration file does not use secrets from Secret Manager, such as for the privateRegistryAccessConfig feature or when using registryHosts with certificates stored in Secret Manager, you can remove the --scopes="cloud-platform" flag.

### About GKE Inference Gateway \_|\_ GKE networking \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway)
- Source ID: `site-docs-reference-2`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Integrated AI safety and content filtering : GKE Inference Gateway integrates with Google Cloud Model Armor to apply AI safety checks and content filtering to prompts and responses at the gateway.
- Advanced API Management with Apigee : integrates with Apigee to enhance your inference gateway with features such as API security, rate limiting, and quotas.
- GKE Inference Gateway's open interfaces allow third-party providers and developers to integrate custom services into the inference request process.
- The following diagram illustrates GKE Inference Gateway and its integration with AI safety, observability, and model serving within a GKE cluster.

