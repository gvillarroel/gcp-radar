---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.225Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Private registry certificate configuration"
feature_slug: "private-registry-certificate-configuration"
latest_feature_date: "2024-04-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ContainerdConfig"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2"
keywords:
  - "registry"
  - "certificate"
  - "containerd"
  - "configuration"
  - "private"
---

# Private registry certificate configuration

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE can use a containerd configuration file to access private image registries that use private certificates.

## Extended Definition

GKE can use a containerd configuration file to access private image registries that use private certificates.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ContainerdConfig](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ContainerdConfig)
- [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2)

## Supporting Pages

### "Access private registries with private CA certificates \_|\_ GKE security\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates)
- Source ID: `site-iam-reference`
- Final score: 216
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Apply containerd configuration to new node pools You can apply the containerd configuration to a new GKE node pool with following command: gcloud container node-pools create NODE POOL NAME \ --cluster = CLUSTER NAME \ --location = LOCATION \ --scopes = "cloud-platform" \ --containerd-config-from-file = " PATH TO CONFIG FILE " Note : If your configuration file does not use secrets from Secret Manager, such as for the privateRegistryAccessConfig feature or when using registryHosts with certificates stored in Secret Manager, you can remove the --scopes="cloud-platform" flag.
- Run the following command to create Autopilot clusters: gcloud container clusters create-auto CLUSTER NAME \ --location = LOCATION \ --scopes = "cloud-platform" \ --containerd-config-from-file = " PATH TO CONFIG FILE " Note : If your configuration file does not use secrets from Secret Manager, such as for the privateRegistryAccessConfig feature or when using registryHosts with certificates stored in Secret Manager, you can remove the --scopes="cloud-platform" flag.
- For a description of these fields, see registryHosts in the Available containerd configuration options. privateRegistryAccessConfig privateRegistryAccessConfig : certificateAuthorityDomainConfig : - gcpSecretManagerCertificateConfig : secretURI : "projects/ PROJECT NUMBER /secrets/ SECRET NAME /versions/ SECRET VERSION " fqdns : - " FQDN1 " - " FQDN2 " enabled : true Replace the following: PROJECT NUMBER : the project number that you got in the previous step.
- Verify that your cluster can access the private registry Run the following command: gcloud container clusters describe CLUSTER NAME \ --location = LOCATION \ --flatten = "nodePoolDefaults.nodeConfigDefaults.containerdConfig" The output is similar to the following: registryHosts containerdConfig: registryHosts: - server: example.io hosts: - host: example.mirror.io capabilities: - "HOST CAPABILITY PULL" - "HOST CAPABILITY RESOLVE" ca: - gcpSecretManagerSecretUri: projects/123456789012/secrets/example-secret-name/versions/1 privateRegistryAccessConfig containerdConfig: privateRegistryAccessConfig: certificateAuthorityDomainConfig: - fqdns: - 203.0.113.105 gcpSecretManagerCertificateConfig: secretUri: projects/123456789012/secrets/example-secret-name/versions/1 enabled: true Deploy a workload that accesses a private image In this section, you deploy a static Pod that references an image from your private registry.

### "ContainerdConfig \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ContainerdConfig](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ContainerdConfig)
- Source ID: `site-api-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation PrivateRegistryAccessConfig JSON representation CertificateAuthorityDomainConfig JSON representation GCPSecretManagerCertificateConfig JSON representation WritableCgroups JSON representation RegistryHostConfig JSON representation HostConfig JSON representation HostCapability RegistryHeader JSON representation CertificateConfig JSON representation CertificateConfigPair JSON representation ContainerdConfig contains configuration to customize containerd.
- JSON representation { "enabled" : boolean , "certificateAuthorityDomainConfig" : [ { object ( CertificateAuthorityDomainConfig ) } ] } Fields enabled boolean Private registry access is enabled. certificateAuthorityDomainConfig[] object ( CertificateAuthorityDomainConfig ) Private registry access configuration.
- JSON representation { "privateRegistryAccessConfig" : { object ( PrivateRegistryAccessConfig ) } , "writableCgroups" : { object ( WritableCgroups ) } , "registryHosts" : [ { object ( RegistryHostConfig ) } ] } Fields privateRegistryAccessConfig object ( PrivateRegistryAccessConfig ) PrivateRegistryAccessConfig is used to configure access configuration for private container registries. writableCgroups object ( WritableCgroups ) Optional.
- If not set, containerd sets default false. header[] object ( RegistryHeader ) Header configures the registry host headers. ca[] object ( CertificateConfig ) CA configures the registry host certificate. client[] object ( CertificateConfigPair ) Client configures the registry host client certificate and key. dialTimeout string ( Duration format) Specifies the maximum duration allowed for a connection attempt to complete.

### "Migrate nodes to containerd 2 \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2)
- Source ID: `site-docs-reference-2`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Run the following command to check for the DaemonSets: kubectl get daemonsets --all-namespaces -o json \ jq -r ' [ "/", "/etc", "/etc/", "/etc/containerd", "/etc/containerd/", "/etc/containerd/config.toml" ] as $host paths [ "kube-system", "kube-node-lease", "istio-system", "asm-system", "gatekeeper-system", "config-management-system", "config-management-monitoring", "cnrm-system", "hnc-system", "gke-managed-system", "gke-gmp-system", "gmp-system", "gke-managed-cim" ] as $excluded namespaces .items[] select( ([.metadata.namespace] inside($excluded namespaces) not) and ( (any(.spec.template.spec.volumes[]?.hostPath.path; IN($host paths[]))) or ( .spec.template.spec.hostPID == true and any(.spec.template.spec.containers[]; .securityContext?.privileged == true) ) ) ) .metadata.namespace + "/" + .metadata.name ' Migrate from the CRI registry auths or configs.auth properties If your workloads use the auths or configs.auth properties in the containerd config to authenticate to a private registry for pulling container images, you must migrate the workloads using those images to the imagePullSecrets field instead.
- If you use the registry.configs.auth property, the authentication details might look like the following: [plugins. "io.containerd.grpc.v1.cri" .registry.configs. "$REGISTRY DOMAIN" .auth] username = "example-user" password = "example-password" Collect these authentication details for each registry domain that's specified in your configuration.
- When viewing insights in the Google Cloud console, see the sidebar panel Migrate your containerd configuration off deprecated CRI registry auths field or Migrate your containerd configuration off deprecated CRI registry mirrors field .
- Update your containerd config to stop setting registry auths After your migrate your workloads to use the imagePullSecrets field, you must update your workloads that modify your containerd configuration to stop setting registry auths.

