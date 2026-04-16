---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.444Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory Analyze Policy support for Google Kubernetes Engine Deployment resource"
feature_slug: "cloud-asset-inventory-analyze-policy-support-for-google-kubernetes-engine-deployment-resource"
latest_feature_date: "2021-11-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/asset-types"
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicy"
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicyLongrunning"
keywords:
  - "deployment"
  - "kubernetes"
  - "engine"
  - "resource"
  - "analyze"
  - "policy"
---

# Cloud Asset Inventory Analyze Policy support for Google Kubernetes Engine Deployment resource

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

Cloud Asset Inventory now supports analyzing IAM policy relationships for Google Kubernetes Engine Deployment resources via AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning.

## Extended Definition

Cloud Asset Inventory now supports analyzing IAM policy relationships for Google Kubernetes Engine Deployment resources via AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicy](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicy)
- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicyLongrunning](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicyLongrunning)

## Supporting Pages

### Asset types | Cloud Asset Inventory | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- Source ID: `feature-recovery-direct-http`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Google Cloud VMware Engine API reference vmwareengine. googleapis. com/ Cluster vmwareengine. googleapis. com/ ExternalAccessRule vmwareengine. googleapis. com/ ExternalAddress vmwareengine. googleapis. com/ NetworkPeering vmwareengine. googleapis. com/ NetworkPolicy vmwareengine. googleapis. com/ PrivateCloud vmwareengine. googleapis. com/ PrivateConnection vmwareengine. googleapis. com/ VmwareEngineNetwork Google Kubernetes Engine API reference admissionregistration. k8s. io/ MutatingWebhookConfiguration admissionregistration. k8s. io/ ValidatingWebhookConfiguration apps.k8s.io/DaemonSet apps.k8s.io/Deployment apps.k8s.io/ReplicaSet apps.k8s.io/StatefulSet autoscaling. k8s. io/ HorizontalPodAutoscaler Not available in the analysis APIs.
- Asset types | Cloud Asset Inventory | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Cloud Asset Inventory Start free Overview Guides Reference Resources Technology areas More Overview Guides Reference Resources Cross-product tools More Console Cloud Asset Inventory Asset types Asset names Relationship types Search query syntax Legacy fields APIs and gcloud Client libraries REST reference Overview v1 TopLevel analyzeIamPolicy analyzeIamPolicyLongrunning analyzeMove analyzeOrgPolicies analyzeOrgPolicyGovernedAssets analyzeOrgPolicyGovernedContainers batchGetAssetsHistory exportAssets queryAssets searchAllIamPolicies searchAllResources REST Resources assets Overview list effectiveIamPolicies Overview batchGet feeds Overview create delete get list patch operations Overview get savedQueries Overview create delete get list patch Types AnalyzerOrgPolicy AnalyzerOrgPolicyConstraint Asset AssetException ConditionEvaluation EffectiveTagDetails Tag TimeWindow v1p1beta1 REST Resources iamPolicies Overview searchAll resources Overview searchAll v1p2beta1 REST Resources feeds Overview create delete get list patch operations Overview get v1p7beta1 TopLevel exportAssets REST Resources operations Overview get Common types Types AuditConfig Binding GetOperationRequest LogType Operation Policy RPC reference Overview google.cloud.asset.v1 google.cloud.asset.v1p1beta1 google.cloud.asset.v1p2beta1 google.cloud.asset.v1p7beta1 google.cloud.orgpolicy.v1 google.cloud.osconfig.v1 google.iam.v1 google.identity.accesscontextmanager.type google.identity.accesscontextmanager.v1 google.longrunning google.rpc google.type gcloud reference AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Security Cloud Asset Inventory Reference Send feedback Asset types Stay organized with collections Save and categorize content based on your preferences.
- API reference aiplatform. googleapis. com/ BatchPredictionJob aiplatform. googleapis. com/ CachedContent aiplatform. googleapis. com/ CustomJob aiplatform. googleapis. com/ DataLabelingJob aiplatform. googleapis. com/ Dataset aiplatform. googleapis. com/ Endpoint The deployedModels field is not populated. aiplatform. googleapis. com/ FeatureGroup Not available in the analysis APIs. aiplatform. googleapis. com/ FeatureOnlineStore Not available in the analysis APIs. aiplatform. googleapis. com/ Featurestore aiplatform. googleapis. com/ HyperparameterTuningJob aiplatform. googleapis. com/ Index aiplatform. googleapis. com/ IndexEndpoint aiplatform. googleapis. com/ MetadataStore aiplatform. googleapis. com/ Model The deployedModels field is not populated. aiplatform. googleapis. com/ ModelDeploymentMonitoringJob aiplatform. googleapis. com/ NasJob aiplatform. googleapis. com/ NotebookExecutionJob aiplatform. googleapis. com/ NotebookRuntime Effective tags aren't supported. aiplatform. googleapis. com/ NotebookRuntimeTemplate Effective tags aren't supported. aiplatform. googleapis. com/ PipelineJob aiplatform. googleapis. com/ ReasoningEngine Not available in the analysis APIs. aiplatform. googleapis. com/ SpecialistPool aiplatform. googleapis. com/ Tensorboard aiplatform. googleapis. com/ TrainingPipeline aiplatform. googleapis. com/ TuningJob Not available in the analysis APIs.
- Use compute.googleapis.com/Disk instead in the search and analysis APIs. compute. googleapis. com/ Reservation compute. googleapis. com/ ResourcePolicy compute.googleapis.com/Route compute.googleapis.com/Router compute. googleapis. com/ SecurityPolicy compute. googleapis. com/ ServiceAttachment compute. googleapis. com/ Snapshot compute. googleapis. com/ SslCertificate compute. googleapis. com/ SslPolicy compute. googleapis. com/ StoragePool compute. googleapis. com/ Subnetwork Searchable attributes: gatewayAddress compute. googleapis. com/ TargetGrpcProxy compute. googleapis. com/ TargetHttpProxy compute. googleapis. com/ TargetHttpsProxy compute. googleapis. com/ TargetInstance compute. googleapis. com/ TargetPool compute. googleapis. com/ TargetSslProxy compute. googleapis. com/ TargetTcpProxy compute. googleapis. com/ TargetVpnGateway compute.googleapis.com/UrlMap compute. googleapis. com/ VpnGateway compute. googleapis. com/ VpnTunnel Container Registry Container Registry implements Docker HTTP API V2 and does not provide a public API. containerregistry. googleapis. com/ Image Effective tags aren't supported.

### "Method: analyzeIamPolicy \_|\_ Cloud Asset Inventory \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicy](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicy)
- Source ID: `site-api-reference`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Authorization requires one or more of the following IAM permissions on the specified resource scope : cloudasset.assets.analyzeIamPolicy cloudasset.assets.searchAllResources cloudasset.assets.searchAllIamPolicies Query parameters Parameters analysisQuery.resourceSelector object ( ResourceSelector ) Optional.
- For example, assume we have the following cases in one IAM policy binding: - Permission P1 and P2 apply to resource R1 and R2; - Permission P3 applies to resource R2 and R3; This will result in the following access control lists: - AccessControlList 1: [R1, R2], [P1, P2] - AccessControlList 2: [R2, R3], [P3] JSON representation { "resources" : [ { object ( Resource ) } ] , "accesses" : [ { object ( Access ) } ] , "resourceEdges" : [ { object ( Edge ) } ] , "conditionEvaluation" : { object ( ConditionEvaluation ) } } Fields resources[] object ( Resource ) The resources that match one of the following conditions: - The resourceSelector, if it is specified in request; - Otherwise, resources reachable from the policy attached resource. accesses[] object ( Access ) The accesses that match one of the following conditions: - The accessSelector, if it is specified in request; - Otherwise, access specifiers reachable from the policy binding's role. resourceEdges[] object ( Edge ) Resource edges of the graph starting from the policy attached resource to any descendant resources.
- JSON representation { "attachedResourceFullName" : string , "iamBinding" : { object ( Binding ) } , "accessControlLists" : [ { object ( AccessControlList ) } ] , "identityList" : { object ( IdentityList ) } , "fullyExplored" : boolean } Fields attachedResourceFullName string The full resource name of the resource to which the iamBinding policy attaches. iamBinding object ( Binding ) The IAM policy binding under analysis. accessControlLists[] object ( AccessControlList ) The access control lists derived from the iamBinding that match or potentially match resource and access selectors specified in the request. identityList object ( IdentityList ) The identity list derived from members of the iamBinding that match or potentially match identity selector specified in the request. fullyExplored boolean Represents whether all analyses on the iamBinding have successfully finished.
- If successful, the response body contains data with the following structure: JSON representation { "mainAnalysis" : { object ( IamPolicyAnalysis ) } , "serviceAccountImpersonationAnalysis" : [ { object ( IamPolicyAnalysis ) } ] , "fullyExplored" : boolean } Fields mainAnalysis object ( IamPolicyAnalysis ) The main analysis that matches the original request. serviceAccountImpersonationAnalysis[] object ( IamPolicyAnalysis ) The service account impersonation analysis if IamPolicyAnalysisQuery.Options.analyze service account impersonation is enabled. fullyExplored boolean Represents whether all entries in the mainAnalysis and serviceAccountImpersonationAnalysis have been fully explored to answer the query in the request.

### "Method: analyzeIamPolicyLongrunning \_|\_ Cloud Asset Inventory \_|\_ Google\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicyLongrunning](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicyLongrunning)
- Source ID: `site-api-reference`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Authorization requires one or more of the following IAM permissions on the specified resource scope : cloudasset.assets.analyzeIamPolicy cloudasset.assets.searchAllResources cloudasset.assets.searchAllIamPolicies Request body The request body contains data with the following structure: JSON representation { "analysisQuery" : { "scope" : string , "resourceSelector" : { "fullResourceName" : string } , "identitySelector" : { "identity" : string } , "accessSelector" : { "roles" : [ string ] , "permissions" : [ string ] } , "options" : { "expandGroups" : boolean , "expandRoles" : boolean , "expandResources" : boolean , "outputResourceEdges" : boolean , "outputGroupEdges" : boolean , "analyzeServiceAccountImpersonation" : boolean } , "conditionContext" : { // Union field TimeContext can be only one of the following: "accessTime" : string // End of list of possible types for union field TimeContext . } } , "savedAnalysisQuery" : string , "outputConfig" : { object ( IamPolicyAnalysisOutputConfig ) } } Fields analysisQuery.resourceSelector object ( ResourceSelector ) Optional.
- Home Documentation Security Cloud Asset Inventory Reference Send feedback Method: analyzeIamPolicyLongrunning Stay organized with collections Save and categorize content based on your preferences.
- Analyzes IAM policies asynchronously to answer which identities have what accesses on which resources, and writes the analysis results to a Google Cloud Storage or a BigQuery destination.
- HTTP request POST https://cloudasset.googleapis.com/v1/{analysisQuery.scope= / }:analyzeIamPolicyLongrunning The URL uses gRPC Transcoding syntax.

