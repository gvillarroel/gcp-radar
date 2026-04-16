---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.258Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "BigtableTable IAM support"
feature_slug: "bigtabletable-iam-support"
latest_feature_date: "2020-12-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster"
keywords:
  - "bigtabletable"
  - "integration"
  - "supports"
---

# BigtableTable IAM support

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

BigtableTable supports IAM integration.

## Extended Definition

BigtableTable supports IAM integration.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster)

## Supporting Pages

### IAMAuditConfig \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig)
- Source ID: `site-docs-root-2`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### IAMPolicy \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy)
- Source ID: `site-docs-root-2`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- Kind Supports Conditions Supports Audit Configs AccessContextManagerAccessPolicy ApigeeEnvironment ArtifactRegistryRepository BigQueryTable Y BigtableInstance Y BigtableTable Y BillingAccount Y BinaryAuthorizationPolicy Y CloudFunctionsFunction Y ComputeBackendBucket ComputeDisk ComputeImage Y ComputeInstance Y ComputeSnapshot ComputeSubnetwork Y DNSManagedZone DataprocCluster Y Folder Y Y IAMServiceAccount Y IAMWorkforcePool Y KMSCryptoKey Y KMSKeyRing Y NetworkSecurityAuthorizationPolicy Y NetworkSecurityClientTLSPolicy Y NetworkSecurityServerTLSPolicy Y Organization Y Y Project Y Y PubSubSubscription PubSubTopic RunJob RunService SecretManagerSecret ServiceDirectoryNamespace ServiceDirectoryService SourceRepoRepository SpannerDatabase Y SpannerInstance StorageBucket Y Kind External Reference Formats AccessContextManagerAccessPolicy {{name}} ApigeeEnvironment organizations/{{apigee organization}}/environments/{{name}} ArtifactRegistryRepository projects/{{project}}/locations/{{location}}/repositories/{{repository id}} BigQueryTable projects/{{project}}/datasets/{{dataset id}}/tables/{{table id}} BigtableInstance projects/{{project}}/instances/{{name}} BigtableTable projects/{{project}}/instances/{{instance name}}/tables/{{name}} BillingAccount {{billing account id}} BinaryAuthorizationPolicy projects/{{project}}/policy CloudFunctionsFunction projects/{{project}}/locations/{{region}}/functions/{{name}} ComputeBackendBucket projects/{{project}}/global/backendBuckets/{{name}} ComputeDisk projects/{{project}}/regions/{{region}}/disks/{{name}} projects/{{project}}/zones/{{zone}}/disks/{{name}} ComputeImage projects/{{project}}/global/images/{{name}} ComputeInstance projects/{{project}}/zones/{{zone}}/instances/{{name}} ComputeSnapshot projects/{{project}}/global/snapshots/{{name}} ComputeSubnetwork projects/{{project}}/regions/{{region}}/subnetworks/{{name}} DNSManagedZone projects/{{project}}/managedZones/{{name}} DataprocCluster projects/{{project}}/regions/{{location}}/clusters/{{name}} Folder folders/{{folder id}} IAMServiceAccount projects/{{project}}/serviceAccounts/{{account id}}@{{project}}.iam.gserviceaccount.com IAMWorkforcePool locations/{{location}}/workforcePools/{{name}} KMSCryptoKey projects/{{project}}/locations/{{location}}/keyRings/{{key ring id}}/cryptoKeys/{{name}} KMSKeyRing projects/{{project}}/locations/{{location}}/keyRings/{{name}} NetworkSecurityAuthorizationPolicy projects/{{project}}/locations/{{location}}/authorizationPolicies/{{name}} NetworkSecurityClientTLSPolicy projects/{{project}}/locations/{{location}}/clientTlsPolicies/{{name}} NetworkSecurityServerTLSPolicy projects/{{project}}/locations/{{location}}/serverTlsPolicies/{{name}} Organization {{org id}} Project projects/{{project id}} PubSubSubscription projects/{{project}}/subscriptions/{{name}} PubSubTopic projects/{{project}}/topics/{{name}} RunJob projects/{{project}}/locations/{{location}}/jobs/{{name}} RunService projects/{{project}}/locations/{{location}}/services/{{name}} SecretManagerSecret projects/{{project}}/secrets/{{secret id}} ServiceDirectoryNamespace projects/{{project}}/locations/{{location}}/namespaces/{{namespace id}} ServiceDirectoryService {{namespace}}/services/{{service id}} SourceRepoRepository projects/{{project}}/repos/{{name}} SpannerDatabase projects/{{project}}/instances/{{instance}}/databases/{{name}} SpannerInstance projects/{{project}}/instances/{{name}} StorageBucket {{name}} Custom Resource Definition Properties Spec Schema auditConfigs : - auditLogConfigs : - exemptedMembers : - string logType : string service : string bindings : - condition : description : string expression : string title : string members : - string role : string resourceRef : apiVersion : string external : string kind : string name : string namespace : string Fields auditConfigs Optional list (object) Optional.

### ContainerCluster \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. apiVersion : container.cnrm.cloud.google.com/v1beta1 kind : ContainerCluster metadata : labels : availability : high target-audience : production name : containercluster-sample-vpcnative spec : description : A large regional VPC-native cluster set up with special networking considerations. location : us-central1 initialNodeCount : 1 defaultMaxPodsPerNode : 16 nodeLocations : - us-central1-a - us-central1-b - us-central1-c - us-central1-f workloadIdentityConfig : Workload Identity supports only a single namespace based on your project name.
- This field will only work for routes-based clusters, where ip allocation policy is not defined. clusterTelemetry Optional object Telemetry integration for the cluster. clusterTelemetry.type Required string Type of the integration. confidentialNodes Optional object Immutable.
- Currently supports only DNS endpoint configuration and disable IP endpoint.
- Currently supports only DNS endpoint configuration and disable IP endpoint.

