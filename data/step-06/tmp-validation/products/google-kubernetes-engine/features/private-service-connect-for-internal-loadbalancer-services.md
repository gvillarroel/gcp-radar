---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.354Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Private Service Connect for internal LoadBalancer Services"
feature_slug: "private-service-connect-for-internal-loadbalancer-services"
latest_feature_date: "2021-09-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
keywords:
  - "serviceattachment"
  - "loadbalancer"
  - "connect"
  - "resources"
  - "private"
  - "internal"
  - "used"
---

# Private Service Connect for internal LoadBalancer Services

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

ServiceAttachment resources can be used to provision Private Service Connect for internal LoadBalancer Services.

## Extended Definition

ServiceAttachment resources can be used to provision Private Service Connect for internal LoadBalancer Services.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)

## Supporting Pages

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- The following versions of GKE or later have been updated to address the providerID issue: 1.33.1-gke.1386000 1.32.4-gke.1533000 1.31.9-gke.1119000 1.30.12-gke.1208000 Optionally, if you cannot upgrade, implement the following validating admission policy on your cluster to mitigate the providerID issue: apiVersion : admissionregistration . k8s . io / v1 kind : ValidatingAdmissionPolicy metadata : name : validate - node - providerid spec : failurePolicy : Fail matchConstraints : resourceRules : - apiGroups : [ "" ] apiVersions : [ "v1" ] operations : [ "CREATE", "UPDATE" ] resources : [ "nodes" ] matchConditions : - name : "has-providerid" expression : "has(object.spec.providerID)" validations : - expression : "object.spec.providerID == '' object.spec.providerID.endsWith('/' + object.metadata.name)" message : "node.spec.providerID must match the node name" --- apiVersion : admissionregistration . k8s . io / v1 kind : ValidatingAdmissionPolicyBinding metadata : name : validate - node - providerid - binding spec : policyName : validate - node - providerid validationActions : [ Deny ] Use node restricted labels when isolating workloads to specific nodes as a security control If you are using labels for node isolation, as described in Kubernetes documentation , use node restricted labels (for example, labels of the form node-restriction.kubernetes.io/example-constraint ) in node affinity and node selector terms used for workload isolation.
- To list the MCG managed firewall rules in your current environment, run the following command: gcloud compute firewall-rules list --format = "json" --filter = "name:gkemcg1-l7- " jq -r '.[] "\(.name): \(.sourceRanges // "No source range")"' awk -F: '{if ($2 /No source range ^\s $/) print "Rule "$1" has an EMPTY or MISSING source range."; else print "Rule "$1" has source range(s): "$2;}' To search logs for updates to MCG managed firewall configurations, use the Logs Explorer with the below query: protoPayload.serviceName="compute.googleapis.com" resource.type="gce firewall rule" protoPayload.resourceName= "projects/[^/]+/global/firewalls/gkemcg1-" -operation.last="true" To list the MCG managed firewall rules across your organization, run the following command to query Cloud Asset Inventory: gcloud asset search-all-resources --scope = 'organizations/ ' --asset-types = 'compute.googleapis.com/Firewall' --query 'name: //compute.googleapis.com/projects/ / /firewalls/gkemcg ' The following additional controls provide defense in depth against untrusted networks and can be considered to strengthen security posture: Use private GKE nodes to ensure your nodes only get private IPs.
- The following sample manifest describes a BackendConfig resource that uses the v1 API: apiVersion: cloud.google.com/v1 kind: BackendConfig metadata: name: my-backend-config spec: securityPolicy: name: "ca-how-to-security-policy" If you have CI/CD systems or tools which regularly update BackendConfig resources, ensure that you are using the cloud.google.com/v1 API group in those systems Low GCP-2021-022 Published: 2021-09-23 GKE clusters on Description Severity A vulnerability has been discovered in the GKE Enterprise Identity Service (AIS) LDAP module of GKE on VMware versions 1.8 and 1.8.1 where a seed key used in generating keys is predictable.
- Upgrade your GKE control plane to one of the following updated versions that patches this issue and allows v1beta1 BackendConfig resources to be used safely: 1.21.1-gke.2700 and later 1.20.9-gke.900 and later 1.19.14-gke.300 and later 1.18.20-gke.5100 and later This issue can also be prevented by avoiding the deployment of v1beta1 BackendConfig resources.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- ContainerdConfig JSON representation { "privateRegistryAccessConfig" : { object ( PrivateRegistryAccessConfig ) } , "writableCgroups" : { object ( WritableCgroups ) } , "registryHosts" : [ { object ( RegistryHostConfig ) } ] } Fields privateRegistryAccessConfig object ( PrivateRegistryAccessConfig ) PrivateRegistryAccessConfig is used to configure access configuration for private container registries. writableCgroups object ( WritableCgroups ) Optional.
- If both use ip aliases and use routes are false, then the server picks the default IP allocation mode stackType enum ( StackType ) The IP stack type of the cluster ipv6AccessType enum ( IPv6AccessType ) The ipv6 access type (internal or external) when create subnetwork is true podCidrOverprovisionConfig object ( PodCIDROverprovisionConfig ) [PRIVATE FIELD] Pod CIDR size overprovisioning config for the cluster.
- AutoIpamConfig contains all information related to Auto IPAM networkTierConfig object ( NetworkTierConfig ) Cluster-level network tier configuration is used to determine the default network tier for external IP addresses on cluster resources, such as node pools and load balancers.
- All of the versions of the Cloud KMS cryptoKey that are used by Confidential Hyperdisks on the control plane nodes. gkeopsEtcdBackupEncryptionKey string Resource path of the Cloud KMS cryptoKey to use for encryption of internal etcd backups.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- ContainerdConfig JSON representation { "privateRegistryAccessConfig" : { object ( PrivateRegistryAccessConfig ) } , "writableCgroups" : { object ( WritableCgroups ) } , "registryHosts" : [ { object ( RegistryHostConfig ) } ] } Fields privateRegistryAccessConfig object ( PrivateRegistryAccessConfig ) PrivateRegistryAccessConfig is used to configure access configuration for private container registries. writableCgroups object ( WritableCgroups ) Optional.
- If both use ip aliases and use routes are false, then the server picks the default IP allocation mode stackType enum ( StackType ) The IP stack type of the cluster ipv6AccessType enum ( IPv6AccessType ) The ipv6 access type (internal or external) when create subnetwork is true podCidrOverprovisionConfig object ( PodCIDROverprovisionConfig ) [PRIVATE FIELD] Pod CIDR size overprovisioning config for the cluster.
- AutoIpamConfig contains all information related to Auto IPAM networkTierConfig object ( NetworkTierConfig ) Cluster-level network tier configuration is used to determine the default network tier for external IP addresses on cluster resources, such as node pools and load balancers.
- All of the versions of the Cloud KMS cryptoKey that are used by Confidential Hyperdisks on the control plane nodes. gkeopsEtcdBackupEncryptionKey string Resource path of the Cloud KMS cryptoKey to use for encryption of internal etcd backups.

