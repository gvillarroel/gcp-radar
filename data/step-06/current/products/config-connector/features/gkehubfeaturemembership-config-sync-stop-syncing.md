---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.027Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "GKEHubFeatureMembership Config Sync stop syncing"
feature_slug: "gkehubfeaturemembership-config-sync-stop-syncing"
latest_feature_date: "2025-04-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/gkehub/gkehubfeaturemembership"
  - "https://docs.cloud.google.com/config-connector/docs/troubleshooting"
  - "https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields"
keywords:
  - "syncing"
  - "stop"
  - "gkehubfeaturemembership"
  - "sync"
  - "added"
  - "field"
---

# GKEHubFeatureMembership Config Sync stop syncing

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector added a GKEHubFeatureMembership field for Config Sync stopSyncing.

## Extended Definition

Config Connector added a GKEHubFeatureMembership field for Config Sync stopSyncing.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/gkehub/gkehubfeaturemembership](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/gkehub/gkehubfeaturemembership)
- [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting)
- [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)

## Supporting Pages

### GKEHubFeatureMembership | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/gkehub/gkehubfeaturemembership](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/gkehub/gkehubfeaturemembership)
- Source ID: `feature-recovery-http`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Property Value Google Cloud Service Name GKE Hub Google Cloud Service Documentation /anthos/multicluster-management/connect/overview Google Cloud REST Resource Name v1beta1.projects.locations.features Google Cloud REST Resource Documentation https://gkehub.googleapis.com/$discovery/rest?version=v1beta Config Connector Resource Short Names gcpgkehubfeaturemembership gcpgkehubfeaturememberships gkehubfeaturemembership Config Connector Service Name gkehub.googleapis.com Config Connector Resource Fully Qualified Name gkehubfeaturememberships.gkehub.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember No Config Connector Default Average Reconcile Interval In Seconds 600 Custom Resource Definition Properties Spec Schema configmanagement : binauthz : enabled : boolean configSync : git : gcpServiceAccountRef : external : string name : string namespace : string httpsProxy : string policyDir : string secretType : string syncBranch : string syncRepo : string syncRev : string syncWaitSecs : string metricsGcpServiceAccountRef : external : string name : string namespace : string oci : gcpServiceAccountRef : external : string name : string namespace : string policyDir : string secretType : string syncRepo : string syncWaitSecs : string preventDrift : boolean sourceFormat : string stopSyncing : boolean hierarchyController : enableHierarchicalResourceQuota : boolean enablePodTreeLabels : boolean enabled : boolean management : string policyController : auditIntervalSeconds : string enabled : boolean exemptableNamespaces : - string logDeniesEnabled : boolean monitoring : backends : - string mutationEnabled : boolean referentialRulesEnabled : boolean templateLibraryInstalled : boolean version : string featureRef : external : string name : string namespace : string location : string membershipLocation : string membershipRef : external : string name : string namespace : string mesh : controlPlane : string management : string policycontroller : policyControllerHubConfig : auditIntervalSeconds : integer constraintViolationLimit : integer deploymentConfigs : admission : containerResources : limits : cpu : string memory : string requests : cpu : string memory : string podAffinity : string podTolerations : - effect : string key : string operator : string value : string replicaCount : integer audit : containerResources : limits : cpu : string memory : string requests : cpu : string memory : string podAffinity : string podTolerations : - effect : string key : string operator : string value : string replicaCount : integer mutation : containerResources : limits : cpu : string memory : string requests : cpu : string memory : string podAffinity : string podTolerations : - effect : string key : string operator : string value : string replicaCount : integer exemptableNamespaces : - string installSpec : string logDeniesEnabled : boolean monitoring : backends : - string mutationEnabled : boolean policyContent : templateLibrary : installation : string referentialRulesEnabled : boolean version : string projectRef : external : string name : string namespace : string Fields configmanagement Optional object Config Management-specific spec. configmanagement.binauthz Optional object **DEPRECATED** Binauthz configuration for the cluster.
- Your ContainerCluster is one. issuer : https://container.googleapis.com/v1/projects/gkehubfeaturemembership-dep-acm/locations/us-central1-a/clusters/gkehubfeaturemembership-dep-acm description : A sample GKE Hub membership endpoint : gkeCluster : resourceRef : name : gkehubfeaturemembership-dep-acm --- apiVersion : resourcemanager.cnrm.cloud.google.com/v1beta1 kind : Project metadata : name : gkehubfeaturemembership-dep-acm spec : name : Config Connector Sample organizationRef : # Replace "${ORG_ID?}" with the numeric ID for your organization external : "${ORG_ID?}" billingAccountRef : # Replace "${BILLING_ACCOUNT_ID?}" with the numeric ID for your billing account external : "${BILLING_ACCOUNT_ID?}" --- apiVersion : serviceusage.cnrm.cloud.google.com/v1beta1 kind : Service metadata : annotations : cnrm.cloud.google.com/project-id : gkehubfeaturemembership-dep-acm cnrm.cloud.google.com/deletion-policy : "abandon" name : gkehubfeaturemembership-dep1-acm1 spec : resourceID : container.googleapis.com --- apiVersion : serviceusage.cnrm.cloud.google.com/v1beta1 kind : Service metadata : annotations : cnrm.cloud.google.com/project-id : gkehubfeaturemembership-dep-acm cnrm.cloud.google.com/deletion-policy : "abandon" name : gkehubfeaturemembership-dep2-acm spec : resourceID : gkehub.googleapis.com --- apiVersion : serviceusage.cnrm.cloud.google.com/v1beta1 kind : Service metadata : annotations : cnrm.cloud.google.com/project-id : gkehubfeaturemembership-dep-acm cnrm.cloud.google.com/deletion-policy : "abandon" name : gkehubfeaturemembership-dep3-acm spec : resourceID : anthosconfigmanagement.googleapis.com Configsync Auto Upgrade Feature Membership # Copyright 2024 Google LLC # # Licensed under the Apache License, Version 2.0 (the "License"); # you may not use this file except in compliance with the License. # You may obtain a copy of the License at # # http://www.apache.org/licenses/LICENSE-2.0 # # Unless required by applicable law or agreed to in writing, software # distributed under the License is distributed on an "AS IS" BASIS, # WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. # See the License for the specific language governing permissions and # limitations under the License. apiVersion : gkehub.cnrm.cloud.google.com/v1beta1 kind : GKEHubFeatureMembership metadata : name : gkehubfeaturemembership-sample-csau spec : projectRef : name : gkehubfeaturemembership-dep-csau location : global # membershipLocation needs to be explicitly set here because the dependent membership is regional. membershipLocation : us-central1 membershipRef : name : gkehubfeaturemembership-dep-csau featureRef : name : gkehubfeaturemembership-dep-csau configmanagement : configSync : sourceFormat : unstructured git : syncRepo : "https://github.com/GoogleCloudPlatform/anthos-config-management-samples" syncBranch : "main" policyDir : "config-sync-quickstart/multirepo/root" secretType : "none" management : MANAGEMENT_AUTOMATIC --- apiVersion : container.cnrm.cloud.google.com/v1beta1 kind : ContainerCluster metadata : annotations : cnrm.cloud.google.com/project-id : gkehubfeaturemembership-dep-csau name : gkehubfeaturemembership-dep-csau spec : location : us-central1-a initialNodeCount : 3 workloadIdentityConfig : # Workload Identity supports only a single namespace based on your project name. workloadPool : gkehubfeaturemembership-dep-csau.svc.id.goog --- apiVersion : gkehub.cnrm.cloud.google.com/v1beta1 kind : GKEHubFeature metadata : name : gkehubfeaturemembership-dep-csau annotations : cnrm.cloud.google.com/deletion-policy : abandon spec : projectRef : name : gkehubfeaturemembership-dep-csau location : global # The resourceID must be "configmanagement" if you want to use Anthos config # management feature. resourceID : configmanagement --- apiVersion : gkehub.cnrm.cloud.google.com/v1beta1 kind : GKEHubMembership metadata : annotations : cnrm.cloud.google.com/project-id : gkehubfeaturemembership-dep-csau name : gkehubfeaturemembership-dep-csau spec : location : us-central1 authority : # Issuer must contain a link to a valid JWT issuer.
- Sample YAML(s) Config Management Feature Membership # Copyright 2021 Google LLC # # Licensed under the Apache License, Version 2.0 (the "License"); # you may not use this file except in compliance with the License. # You may obtain a copy of the License at # # http://www.apache.org/licenses/LICENSE-2.0 # # Unless required by applicable law or agreed to in writing, software # distributed under the License is distributed on an "AS IS" BASIS, # WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. # See the License for the specific language governing permissions and # limitations under the License. apiVersion : gkehub.cnrm.cloud.google.com/v1beta1 kind : GKEHubFeatureMembership metadata : name : gkehubfeaturemembership-sample spec : projectRef : name : gkehubfeaturemembership-dep-acm location : global # membershipLocation needs to be explicitly set here because the dependent membership is regional. membershipLocation : us-central1 membershipRef : name : gkehubfeaturemembership-dep-acm featureRef : name : gkehubfeaturemembership-dep-acm configmanagement : configSync : sourceFormat : unstructured git : syncRepo : "https://github.com/GoogleCloudPlatform/anthos-config-management-samples" syncBranch : "main" policyDir : "config-sync-quickstart/multirepo/root" secretType : "none" --- apiVersion : container.cnrm.cloud.google.com/v1beta1 kind : ContainerCluster metadata : annotations : cnrm.cloud.google.com/project-id : gkehubfeaturemembership-dep-acm name : gkehubfeaturemembership-dep-acm spec : location : us-central1-a initialNodeCount : 1 workloadIdentityConfig : # Workload Identity supports only a single namespace based on your project name. workloadPool : gkehubfeaturemembership-dep-acm.svc.id.goog --- apiVersion : gkehub.cnrm.cloud.google.com/v1beta1 kind : GKEHubFeature metadata : name : gkehubfeaturemembership-dep-acm annotations : cnrm.cloud.google.com/deletion-policy : abandon spec : projectRef : name : gkehubfeaturemembership-dep-acm location : global # The resourceID must be "configmanagement" if you want to use Anthos config # management feature. resourceID : configmanagement --- apiVersion : gkehub.cnrm.cloud.google.com/v1beta1 kind : GKEHubMembership metadata : annotations : cnrm.cloud.google.com/project-id : gkehubfeaturemembership-dep-acm name : gkehubfeaturemembership-dep-acm spec : location : us-central1 authority : # Issuer must contain a link to a valid JWT issuer.
- More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ Status Schema conditions : - lastTransitionTime : string message : string reason : string status : string type : string observedGeneration : integer Fields conditions list (object) Conditions represent the latest available observations of the GKEHubFeatureMembership's current state. conditions[] object conditions[].lastTransitionTime string Last time the condition transitioned from one status to another. conditions[].message string Human-readable message indicating details about last transition. conditions[].reason string Unique, one-word, CamelCase reason for the condition's last transition. conditions[].status string Status is the status of the condition.

### Troubleshoot Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- One way to do this is to temporarily stop syncing configs , wait for Config Connector to finish reconciling the resource, and then update your resource manifest to match the resource on the Kubernetes API Server.
- Type of issue Common issues Reconciliation Resource keeps updating every 5-15 mins Resource has no status KNV2005: syncer excessively updating resource Resource deleted by Config Connector Controller Pod OOMKilled Deletion Deletions of namespaces stuck at Terminating Deletions of resources stuck at DeleteFailed after project was deleted Permissions Compute Engine Metadata not defined Error 403: Request had insufficient authentication scopes 403 Forbidden: The caller does not have permission Error 403: Caller is missing IAM permission Update error with IAMPolicy, IAMPartialPolicy and IAMPolicyMember Installation and upgrades Version not supported in Config Connector add-on installations failed calling webhook PodSecurityPolicy prevents upgrades Configuration Cannot make changes to immutable fields No matches for kind "Foo" Labels are not propagated to the Google Cloud resource Error due to special characters in resource name Unable to remove fields from resource spec Reconciliation The following section lists common issues related to reconciliation of resources by Config Connector.
- Therefore, Config Sync and Config Connector will "fight" over a resource if Config Sync sets a list field and Config Connector defaults any subfields within that list.
- Stop Config Sync from reacting to updates to the resource on the Kubernetes API Server by setting the annotation client.lifecycle.config.k8s.io/mutation to ignore .

### Ignore unspecified fields \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Note that the only populating behavior CRDs added in version 1.114.0 and later follow is Absent regardless of the cnrm.cloud.google.com/state-into-spec annotation or the stateIntoSpec fields in the ConfigConnector CR or ConfigConnectorContext CR.
- Both config management tools and Config Connector treat list fields as atomic, thus the added spec.bars[0].br2 is treated as a drift by config management tools and will be removed to correct the drift .
- To further explain the difference introduced by this annotation, assume there is a spec with the following schema: foo1 : string foo2 : string bars : - bar : br1 : string br2 : string barz : bz1 : string bz2 : string Also assume you have specified the spec in your YAML as: spec : foo1 : "foo1" bars : - br1 : "1 br1" - br1 : "2 br1" barz : bz1 : "bz1" Then by default, the populated spec in the created Kubernetes resource might be: spec : foo1 : "foo1" foo2 : "foo2" bars : - br1 : "1 br1" br2 : "1 br2" - br1 : "2 br1" br2 : "2 br2" barz : bz1 : "bz1" bz2 : "bz2" While if you set cnrm.cloud.google.com/state-into-spec: absent , the final spec in the created Kubernetes resource will be: spec : foo1 : "foo1" bars : - br1 : "1 br1" - br1 : "2 br1" barz : bz1 : "bz1" When to use cnrm.cloud.google.com/state-into-spec: absent In most cases, you'll want to set cnrm.cloud.google.com/state-into-spec: absent to get the Absent populating behavior for spec fields.
- Configure the cluster-level or namespace-level stateIntoSpec override When installing Config Connector, or updating the Config Connector installation, you can configure the cluster-level or namespace-level stateIntoSpec override to be Absent in the ConfigConnector CR or ConfigConnectorContext CR. spec : stateIntoSpec : Absent This makes Absent the default spec fields populating behavior for any new resources created in the cluster or in the namespace when you don't specify the cnrm.cloud.google.com/state-into-spec annotation in the new resource YAMLs.

