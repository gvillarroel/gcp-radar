---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.030Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "BigQueryDataTransferConfig observed error status"
feature_slug: "bigquerydatatransferconfig-observed-error-status"
latest_feature_date: "2024-12-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containernodepool"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster"
keywords:
  - "observed"
  - "bigquerydatatransferconfig"
  - "error"
  - "observedstate"
  - "status"
  - "added"
---

# BigQueryDataTransferConfig observed error status

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector added a BigQueryDataTransferConfig observedState error field for details about the latest configuration failure.

## Extended Definition

Config Connector added a BigQueryDataTransferConfig observedState error field for details about the latest configuration failure.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containernodepool](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containernodepool)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster)

## Supporting Pages

### Ignore unspecified fields \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Observed State If you need to set cnrm.cloud.google.com/state-into-spec: absent , but your solution depends on the populated values from unspecified fields, check if these fields exist under status.observedState in the CRD schema.
- If they're represented under status.observedState , then you can set cnrm.cloud.google.com/state-into-spec: absent and still access the values of the unspecified fields after a successful reconciliation.
- The status.observedState field contains the live state of the selected, observed fields of the resource that Config Connector observed in the last successful reconciliation.
- Note that the only populating behavior CRDs added in version 1.114.0 and later follow is Absent regardless of the cnrm.cloud.google.com/state-into-spec annotation or the stateIntoSpec fields in the ConfigConnector CR or ConfigConnectorContext CR.

### ContainerNodePool \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containernodepool](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containernodepool)
- Source ID: `site-docs-root-2`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Can be set to 0 or greater. upgradeSettings.strategy Optional string Update strategy for the given nodepool. version Optional string Field is required when parent field is specified Status Schema conditions : - lastTransitionTime : string message : string reason : string status : string type : string instanceGroupUrls : - string managedInstanceGroupUrls : - string observedGeneration : integer observedState : version : string operation : string Fields conditions list (object) Conditions represent the latest available observation of the resource's current state. conditions[] object conditions[].lastTransitionTime string Last time the condition transitioned from one status to another. conditions[].message string Human-readable message indicating details about last transition. conditions[].reason string Unique, one-word, CamelCase reason for the condition's last transition. conditions[].status string Status is the status of the condition.
- If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. observedState object The observed state of the underlying GCP resource. observedState.version string operation string Sample YAML(s) Basic Node Pool Copyright 2020 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
- After this period, blue pool will be cleaned up. upgradeSettings.blueGreenSettings.standardRolloutPolicy Required object Standard rollout policy is the default policy for blue-green. upgradeSettings.blueGreenSettings.standardRolloutPolicy.batchNodeCount Optional integer Number of blue nodes to drain in a batch. upgradeSettings.blueGreenSettings.standardRolloutPolicy.batchPercentage Optional float Percentage of the blue pool nodes to drain in a batch. upgradeSettings.blueGreenSettings.standardRolloutPolicy.batchSoakDuration Optional string Soak time after each batch gets drained. upgradeSettings.maxSurge Optional integer The number of additional nodes that can be added to the node pool during an upgrade.
- These will added in addition to any default label(s) that Kubernetes may apply to the node. nodeConfig.linuxNodeConfig Optional object Parameters that can be configured on Linux nodes. nodeConfig.linuxNodeConfig.cgroupMode Optional string cgroupMode specifies the cgroup mode to be used on the node. nodeConfig.linuxNodeConfig.sysctls Optional map (key: string, value: string) The Linux kernel parameters to be applied to the nodes and all pods running on the nodes. nodeConfig.localNvmeSsdBlockConfig Optional object Immutable.

### ContainerCluster \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Field is required when parent field is specified Status Schema conditions : - lastTransitionTime : string message : string reason : string status : string type : string endpoint : string labelFingerprint : string masterVersion : string observedGeneration : integer observedState : controlPlaneEndpointsConfig : dnsEndpointConfig : endpoint : string masterAuth : clientCertificate : string clusterCaCertificate : string privateClusterConfig : privateEndpoint : string publicEndpoint : string operation : string selfLink : string servicesIpv4Cidr : string tpuIpv4CidrBlock : string Fields conditions list (object) Conditions represent the latest available observation of the resource's current state. conditions[] object conditions[].lastTransitionTime string Last time the condition transitioned from one status to another. conditions[].message string Human-readable message indicating details about last transition. conditions[].reason string Unique, one-word, CamelCase reason for the condition's last transition. conditions[].status string Status is the status of the condition.
- If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. observedState object The observed state of the underlying Google Cloud resource. observedState.controlPlaneEndpointsConfig object Configuration for all of the cluster's control plane endpoints.
- If you see an unexpected diff unsetting your client cert, ensure you have the container.clusters.getCredentials permission. observedState.masterAuth.clientCertificate string Base64 encoded public certificate used by clients to authenticate to the cluster endpoint. observedState.masterAuth.clusterCaCertificate string Base64 encoded public certificate that is the root of trust for the cluster. observedState.privateClusterConfig object Configuration for private clusters, clusters with private nodes. observedState.privateClusterConfig.privateEndpoint string The internal IP address of this cluster's master endpoint. observedState.privateClusterConfig.publicEndpoint string The external IP address of this cluster's master endpoint. operation string selfLink string Server-defined URL for the resource. servicesIpv4Cidr string The IP address range of the Kubernetes services in this cluster, in CIDR notation (e.g.
- Other IP endpoint configurations are available in private cluster config. observedState.controlPlaneEndpointsConfig.dnsEndpointConfig object DNS endpoint configuration. observedState.controlPlaneEndpointsConfig.dnsEndpointConfig.endpoint string The cluster's DNS endpoint. observedState.masterAuth object DEPRECATED.

