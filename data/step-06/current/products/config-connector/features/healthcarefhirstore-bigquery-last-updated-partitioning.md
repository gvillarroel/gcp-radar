---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.059Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "HealthcareFHIRStore BigQuery last-updated partitioning"
feature_slug: "healthcarefhirstore-bigquery-last-updated-partitioning"
latest_feature_date: "2023-09-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containernodepool"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster"
  - "https://docs.cloud.google.com/config-connector/docs/best-practices"
keywords:
  - "partitioning"
  - "healthcarefhirstore"
  - "last"
  - "updated"
  - "supports"
---

# HealthcareFHIRStore BigQuery last-updated partitioning

Product: Config Connector
Coverage: LOW

## Step 02 Summary

Config Connector supports last-updated partition configuration for HealthcareFHIRStore BigQuery stream destinations.

## Extended Definition

Config Connector supports last-updated partition configuration for HealthcareFHIRStore BigQuery stream destinations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containernodepool](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containernodepool)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster)
- [https://docs.cloud.google.com/config-connector/docs/best-practices](https://docs.cloud.google.com/config-connector/docs/best-practices)

## Supporting Pages

### ContainerCluster \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster)
- Source ID: `site-docs-reference`
- Final score: 27
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Field is required when parent field is specified Status Schema conditions : - lastTransitionTime : string message : string reason : string status : string type : string endpoint : string labelFingerprint : string masterVersion : string observedGeneration : integer observedState : controlPlaneEndpointsConfig : dnsEndpointConfig : endpoint : string masterAuth : clientCertificate : string clusterCaCertificate : string privateClusterConfig : privateEndpoint : string publicEndpoint : string operation : string selfLink : string servicesIpv4Cidr : string tpuIpv4CidrBlock : string Fields conditions list (object) Conditions represent the latest available observation of the resource's current state. conditions[] object conditions[].lastTransitionTime string Last time the condition transitioned from one status to another. conditions[].message string Human-readable message indicating details about last transition. conditions[].reason string Unique, one-word, CamelCase reason for the condition's last transition. conditions[].status string Status is the status of the condition.
- See the License for the specific language governing permissions and limitations under the License. apiVersion : container.cnrm.cloud.google.com/v1beta1 kind : ContainerCluster metadata : labels : availability : high target-audience : production name : containercluster-sample-vpcnative spec : description : A large regional VPC-native cluster set up with special networking considerations. location : us-central1 initialNodeCount : 1 defaultMaxPodsPerNode : 16 nodeLocations : - us-central1-a - us-central1-b - us-central1-c - us-central1-f workloadIdentityConfig : Workload Identity supports only a single namespace based on your project name.
- This may be different than the min master version set in the config if the master has been updated by GKE. observedGeneration integer ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller.

### ContainerNodePool \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containernodepool](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containernodepool)
- Source ID: `site-docs-root-2`
- Final score: 27
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Can be set to 0 or greater. upgradeSettings.strategy Optional string Update strategy for the given nodepool. version Optional string Field is required when parent field is specified Status Schema conditions : - lastTransitionTime : string message : string reason : string status : string type : string instanceGroupUrls : - string managedInstanceGroupUrls : - string observedGeneration : integer observedState : version : string operation : string Fields conditions list (object) Conditions represent the latest available observation of the resource's current state. conditions[] object conditions[].lastTransitionTime string Last time the condition transitioned from one status to another. conditions[].message string Human-readable message indicating details about last transition. conditions[].reason string Unique, one-word, CamelCase reason for the condition's last transition. conditions[].status string Status is the status of the condition.
- Valid values are described in the NVIDIA mig user guide (https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning). nodeConfig.guestAccelerator[].gpuSharingConfig Optional object Immutable.

### Best practices for Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/best-practices](https://docs.cloud.google.com/config-connector/docs/best-practices)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Manage node pools in GKE clusters You might experience errors when you create a cluster by applying a ContainerCluster resource in Config Connector, and then attempt to update the nodeConfig or other node-related fields by applying an updated ContainerCluster configuration.
- Apply the updated YAML configuration to update the Config Connector resources' deletion policy.
- Apply the updated YAML configuration to create the Config Connector resources .

