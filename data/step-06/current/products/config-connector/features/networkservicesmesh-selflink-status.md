---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.189Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "NetworkServicesMesh selfLink status"
feature_slug: "networkservicesmesh-selflink-status"
latest_feature_date: "2022-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containernodepool"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource"
keywords:
  - "networkservicesmesh"
  - "selflink"
  - "self"
  - "link"
  - "exposes"
  - "resource"
  - "through"
  - "status"
---

# NetworkServicesMesh selfLink status

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

The NetworkServicesMesh resource exposes its self link through status.selfLink.

## Extended Definition

The NetworkServicesMesh resource exposes its self link through status.selfLink.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containernodepool](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containernodepool)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource)

## Supporting Pages

### ContainerCluster \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Field is required when parent field is specified Status Schema conditions : - lastTransitionTime : string message : string reason : string status : string type : string endpoint : string labelFingerprint : string masterVersion : string observedGeneration : integer observedState : controlPlaneEndpointsConfig : dnsEndpointConfig : endpoint : string masterAuth : clientCertificate : string clusterCaCertificate : string privateClusterConfig : privateEndpoint : string publicEndpoint : string operation : string selfLink : string servicesIpv4Cidr : string tpuIpv4CidrBlock : string Fields conditions list (object) Conditions represent the latest available observation of the resource's current state. conditions[] object conditions[].lastTransitionTime string Last time the condition transitioned from one status to another. conditions[].message string Human-readable message indicating details about last transition. conditions[].reason string Unique, one-word, CamelCase reason for the condition's last transition. conditions[].status string Status is the status of the condition.
- If you see an unexpected diff unsetting your client cert, ensure you have the container.clusters.getCredentials permission. observedState.masterAuth.clientCertificate string Base64 encoded public certificate used by clients to authenticate to the cluster endpoint. observedState.masterAuth.clusterCaCertificate string Base64 encoded public certificate that is the root of trust for the cluster. observedState.privateClusterConfig object Configuration for private clusters, clusters with private nodes. observedState.privateClusterConfig.privateEndpoint string The internal IP address of this cluster's master endpoint. observedState.privateClusterConfig.publicEndpoint string The external IP address of this cluster's master endpoint. operation string selfLink string Server-defined URL for the resource. servicesIpv4Cidr string The IP address range of the Kubernetes services in this cluster, in CIDR notation (e.g.
- See the guide to using Node Auto-Provisioning for more details. clusterAutoscaling.autoProvisioningDefaults Optional object Contains defaults for a node pool created by NAP. clusterAutoscaling.autoProvisioningDefaults.bootDiskKMSKeyRef Optional object The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. clusterAutoscaling.autoProvisioningDefaults.bootDiskKMSKeyRef.external Optional string Allowed value: The selfLink field of a KMSCryptoKey resource. clusterAutoscaling.autoProvisioningDefaults.bootDiskKMSKeyRef.name Optional string Name of the referent.
- Available options include VULNERABILITY DISABLED and VULNERABILITY BASIC. serviceExternalIpsConfig Optional object If set, and enabled=true, services with external ips field will not be blocked. serviceExternalIpsConfig.enabled Required boolean When enabled, services with exterenal ips specified will be allowed. subnetworkRef Optional object subnetworkRef.external Optional string Allowed value: The selfLink field of a ComputeSubnetwork resource. subnetworkRef.name Optional string Name of the referent.

### ContainerNodePool \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containernodepool](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containernodepool)
- Source ID: `site-docs-root-2`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- If unset, the maximum number of threads supported per core by the underlying processor is assumed. nodeConfig.bootDiskKMSCryptoKeyRef Optional object nodeConfig.bootDiskKMSCryptoKeyRef.external Optional string Allowed value: The selfLink field of a KMSCryptoKey resource. nodeConfig.bootDiskKMSCryptoKeyRef.name Optional string Name of the referent.
- Name of the subnetwork where the additional interface belongs. networkConfig.additionalNodeNetworkConfigs[].subnetworkRef.external Optional string Allowed value: The selfLink field of a ComputeSubnetwork resource. networkConfig.additionalNodeNetworkConfigs[].subnetworkRef.name Optional string Name of the referent.
- Name of the subnetwork where the additional pod network belongs. networkConfig.additionalPodNetworkConfigs[].subnetworkRef.external Optional string Allowed value: The selfLink field of a ComputeSubnetwork resource. networkConfig.additionalPodNetworkConfigs[].subnetworkRef.name Optional string Name of the referent.
- Name of the VPC where the additional interface belongs. networkConfig.additionalNodeNetworkConfigs[].networkRef.external Optional string Allowed value: The selfLink field of a ComputeNetwork resource. networkConfig.additionalNodeNetworkConfigs[].networkRef.name Optional string Name of the referent.

### "AccessContextManagerServicePerimeterResource \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ Status Schema conditions : - lastTransitionTime : string message : string reason : string status : string type : string observedGeneration : integer Fields conditions list (object) Conditions represent the latest available observation of the resource's current state. conditions[] object conditions[].lastTransitionTime string Last time the condition transitioned from one status to another. conditions[].message string Human-readable message indicating details about last transition. conditions[].reason string Unique, one-word, CamelCase reason for the condition's last transition. conditions[].status string Status is the status of the condition.
- If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
- AccessContextManagerServicePerimeterResource Property Value Google Cloud Service Name AccessContextManager Google Cloud Service Documentation /vpc-service-controls/docs/ Google Cloud REST Resource Name accesscontextmanager.v1.accessPolicies.servicePerimeters Google Cloud REST Resource Documentation /access-context-manager/docs/reference/rest/v1/accessPolicies.servicePerimeters Config Connector Resource Short Names gcpaccesscontextmanagerserviceperimeterresource gcpaccesscontextmanagerserviceperimeterresources accesscontextmanagerserviceperimeterresource Config Connector Service Name accesscontextmanager.googleapis.com Config Connector Resource Fully Qualified Name accesscontextmanagerserviceperimeterresources.accesscontextmanager.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember No Config Connector Default Average Reconcile Interval In Seconds 600 Custom Resource Definition Properties Spec Schema perimeterNameRef : external : string name : string namespace : string resourceRef : external : string name : string namespace : string Fields perimeterNameRef Required object Only the external field is supported to configure the reference.
- Replace "${ACCESS POLICY NUMBER}" with the numeric ID for your Access Policy Replace "${PERIMETER SHORT NAME}" with the name for the Service Perimeter to add this resource to external : "accessPolicies/${ACCESS POLICY NUMBER}/servicePerimeters/${PERIMETER SHORT NAME}" resourceRef : Replace "${PROJECT NUMBER}" with the number for the project to be protected by the perimeter external : "projects/${PROJECT NUMBER}" Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .

