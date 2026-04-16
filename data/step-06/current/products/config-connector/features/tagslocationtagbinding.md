---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.012Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "TagsLocationTagBinding"
feature_slug: "tagslocationtagbinding"
latest_feature_date: "2026-01-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/known-issues"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy"
  - "https://docs.cloud.google.com/config-connector/docs/resources"
keywords:
  - "tagslocationtagbinding"
  - "promoted"
  - "default"
  - "reconciler"
  - "direct"
  - "beta"
---

# TagsLocationTagBinding

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector promoted TagsLocationTagBinding to beta with direct reconciler as the default and support for tagging regional resources; Config Connector added support for the TagsLocationTagBinding resource.

## Extended Definition

Config Connector promoted TagsLocationTagBinding to beta with direct reconciler as the default and support for tagging regional resources; Config Connector added support for the TagsLocationTagBinding resource.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/known-issues](https://docs.cloud.google.com/config-connector/docs/known-issues)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy)
- [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources)

## Supporting Pages

### Known issues \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/known-issues](https://docs.cloud.google.com/config-connector/docs/known-issues)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SecretManagerSecret "last-applied-configuration" error If you enable the direct reconciler for a SecretManagerSecret (using the alpha.cnrm.cloud.google.com/reconciler: direct annotation) in versions 1.131.0 through 1.133, reconciliation might fail with an API error: [kubectl.kubernetes.io/last-applied-configuration] must follow pattern [a-z0-9A-Z]+([ \.\-] [a-z0-9A-Z]+) ), be less than 64 characters, and must have a UTF encoding of less than 128 bytes This occurs because Config Connector incorrectly attempts to pass internal Kubernetes annotations as labels to the Secret Manager API.
- Select your Config Connector version: 1.134.1 1.134 1.131 Kubernetes 1.19 Select your problem category: Installation Networking Resources Direct Reconciler Or, filter the known issues: Category Earliest identified version Fixed version Issue and workaround Resources 1.126.0 1.134.1 Fixed: Resource creation blocked by webhook TLS error: "x509: certificate signed by unknown authority" When attempting to create or apply new Config Connector resources, the Kubernetes API server rejects the request and blocks resource creation.
- Direct Reconciler 1.131 1.134 Fixed: Issues with direct reconcilers Config Connector version 1.132.0 introduced issues affecting resources that use the direct reconciler.
- Workaround: To immediately unblock resource creation, you can force the webhook manager Pods to synchronize and pull the correct certificate data by restarting the deployment with the following command: kubectl rollout restart deployment cnrm-webhook-manager -n cnrm-system Resources 1.134 1.134.2 Fixed: SQLInstance stuck in Updating state with "merge" annotation error Affected SQLInstance resources might become stuck in an Updating state with an error message regarding the state-into-spec annotation. invalid value "merge" for "cnrm.cloud.google.com/state-into-spec" annotation This issue occurs because a stricter validation introduced in version 1.134.0 incorrectly rejected the "merge" strategy for SQLInstance resources, even when applied as a default.

### IAMPolicy \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy)
- Source ID: `site-docs-root-2`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMPolicy metadata : name : iampolicy-sample-workloadidentity spec : resourceRef : kind : IAMServiceAccount name : iampolicy-dep-workloadidentity bindings : - role : roles/iam.workloadIdentityUser members : replace ${PROJECT ID} with your project name - serviceAccount:${PROJECT ID?}.svc.id.goog[default/iampolicy-dep-workloadidentity] --- apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMServiceAccount metadata : name : iampolicy-dep-workloadidentity spec : displayName : Example Service Account --- apiVersion : v1 kind : ServiceAccount metadata : name : iampolicy-dep-workloadidentity annotations : replace ${PROJECT ID?} with your project name iam.gke.io/gcp-service-account : iampolicy-dep-workloadidentity@${PROJECT ID?}.iam.gserviceaccount.com Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
- Kind Supports Conditions Supports Audit Configs AccessContextManagerAccessPolicy ApigeeEnvironment ArtifactRegistryRepository BigQueryTable Y BigtableInstance Y BigtableTable Y BillingAccount Y BinaryAuthorizationPolicy Y CloudFunctionsFunction Y ComputeBackendBucket ComputeDisk ComputeImage Y ComputeInstance Y ComputeSnapshot ComputeSubnetwork Y DNSManagedZone DataprocCluster Y Folder Y Y IAMServiceAccount Y IAMWorkforcePool Y KMSCryptoKey Y KMSKeyRing Y NetworkSecurityAuthorizationPolicy Y NetworkSecurityClientTLSPolicy Y NetworkSecurityServerTLSPolicy Y Organization Y Y Project Y Y PubSubSubscription PubSubTopic RunJob RunService SecretManagerSecret ServiceDirectoryNamespace ServiceDirectoryService SourceRepoRepository SpannerDatabase Y SpannerInstance StorageBucket Y Kind External Reference Formats AccessContextManagerAccessPolicy {{name}} ApigeeEnvironment organizations/{{apigee organization}}/environments/{{name}} ArtifactRegistryRepository projects/{{project}}/locations/{{location}}/repositories/{{repository id}} BigQueryTable projects/{{project}}/datasets/{{dataset id}}/tables/{{table id}} BigtableInstance projects/{{project}}/instances/{{name}} BigtableTable projects/{{project}}/instances/{{instance name}}/tables/{{name}} BillingAccount {{billing account id}} BinaryAuthorizationPolicy projects/{{project}}/policy CloudFunctionsFunction projects/{{project}}/locations/{{region}}/functions/{{name}} ComputeBackendBucket projects/{{project}}/global/backendBuckets/{{name}} ComputeDisk projects/{{project}}/regions/{{region}}/disks/{{name}} projects/{{project}}/zones/{{zone}}/disks/{{name}} ComputeImage projects/{{project}}/global/images/{{name}} ComputeInstance projects/{{project}}/zones/{{zone}}/instances/{{name}} ComputeSnapshot projects/{{project}}/global/snapshots/{{name}} ComputeSubnetwork projects/{{project}}/regions/{{region}}/subnetworks/{{name}} DNSManagedZone projects/{{project}}/managedZones/{{name}} DataprocCluster projects/{{project}}/regions/{{location}}/clusters/{{name}} Folder folders/{{folder id}} IAMServiceAccount projects/{{project}}/serviceAccounts/{{account id}}@{{project}}.iam.gserviceaccount.com IAMWorkforcePool locations/{{location}}/workforcePools/{{name}} KMSCryptoKey projects/{{project}}/locations/{{location}}/keyRings/{{key ring id}}/cryptoKeys/{{name}} KMSKeyRing projects/{{project}}/locations/{{location}}/keyRings/{{name}} NetworkSecurityAuthorizationPolicy projects/{{project}}/locations/{{location}}/authorizationPolicies/{{name}} NetworkSecurityClientTLSPolicy projects/{{project}}/locations/{{location}}/clientTlsPolicies/{{name}} NetworkSecurityServerTLSPolicy projects/{{project}}/locations/{{location}}/serverTlsPolicies/{{name}} Organization {{org id}} Project projects/{{project id}} PubSubSubscription projects/{{project}}/subscriptions/{{name}} PubSubTopic projects/{{project}}/topics/{{name}} RunJob projects/{{project}}/locations/{{location}}/jobs/{{name}} RunService projects/{{project}}/locations/{{location}}/services/{{name}} SecretManagerSecret projects/{{project}}/secrets/{{secret id}} ServiceDirectoryNamespace projects/{{project}}/locations/{{location}}/namespaces/{{namespace id}} ServiceDirectoryService {{namespace}}/services/{{service id}} SourceRepoRepository projects/{{project}}/repos/{{name}} SpannerDatabase projects/{{project}}/instances/{{instance}}/databases/{{name}} SpannerInstance projects/{{project}}/instances/{{name}} StorageBucket {{name}} Custom Resource Definition Properties Spec Schema auditConfigs : - auditLogConfigs : - exemptedMembers : - string logType : string service : string bindings : - condition : description : string expression : string title : string members : - string role : string resourceRef : apiVersion : string external : string kind : string name : string namespace : string Fields auditConfigs Optional list (object) Optional.
- This ensures that the Config Connector service account can continue to manage the referenced project. - "serviceAccount:${GSA EMAIL?}" role : roles/owner - members : - serviceAccount:iampolicy-dep-project@iampolicy-dep-project.iam.gserviceaccount.com role : roles/storage.admin auditConfigs : - service : allServices auditLogConfigs : - logType : DATA WRITE - logType : DATA READ exemptedMembers : - serviceAccount:iampolicy-dep-project@iampolicy-dep-project.iam.gserviceaccount.com - service : compute.googleapis.com auditLogConfigs : - logType : ADMIN READ --- apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMServiceAccount metadata : annotations : cnrm.cloud.google.com/project-id : iampolicy-dep-project name : iampolicy-dep-project --- apiVersion : resourcemanager.cnrm.cloud.google.com/v1beta1 kind : Project metadata : annotations : cnrm.cloud.google.com/auto-create-network : "false" name : iampolicy-dep-project spec : name : Config Connector Sample organizationRef : Replace "${ORG ID?}" with the numeric ID for your organization external : "${ORG ID?}" PubSub Admin Policy Copyright 2020 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
- This ensures that the Config Connector service account can continue to manage the referenced project. - "serviceAccount:${GSA EMAIL?}" role : roles/owner - members : - serviceAccount:iampolicy-dep-external-project@iampolicy-dep-external-project.iam.gserviceaccount.com role : roles/storage.admin --- apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMServiceAccount metadata : annotations : cnrm.cloud.google.com/project-id : iampolicy-dep-external-project name : iampolicy-dep-external-project --- Creates a Project resource to demonstrate how an IAMPolicy can reference a Project using external. apiVersion : resourcemanager.cnrm.cloud.google.com/v1beta1 kind : Project metadata : annotations : cnrm.cloud.google.com/auto-create-network : "false" name : iampolicy-dep-external-project spec : name : Config Connector Sample organizationRef : Replace "${ORG ID?}" with the numeric ID for your organization external : "${ORG ID?}" KMS Policy With Condition Copyright 2020 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

### Resources \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

