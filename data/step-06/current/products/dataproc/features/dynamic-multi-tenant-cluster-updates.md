---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.580Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dynamic multi-tenant cluster updates"
feature_slug: "dynamic-multi-tenant-cluster-updates"
latest_feature_date: "2025-07-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-alerts"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
keywords:
  - "dynamic"
  - "multi"
  - "tenant"
  - "cluster"
  - "updates"
  - "dataproc"
  - "supports"
  - "clusters"
---

# Dynamic multi-tenant cluster updates

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc supports dynamic updates for multi-tenant clusters.

## Extended Definition

Dataproc supports dynamic updates for multi-tenant clusters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest](https://docs.cloud.google.com/dataproc/docs/reference/rest)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-alerts](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-alerts)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)

## Supporting Pages

### "Cloud Dataproc API \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest](https://docs.cloud.google.com/dataproc/docs/reference/rest)
- Source ID: `site-docs-reference`
- Final score: 35
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1.projects.regions.clusters Methods create POST /v1/projects/{projectId}/regions/{region}/clusters Creates a cluster in a project. delete DELETE /v1/projects/{projectId}/regions/{region}/clusters/{clusterName} Deletes a cluster in a project. diagnose POST /v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:diagnose Gets cluster diagnostic information. get GET /v1/projects/{projectId}/regions/{region}/clusters/{clusterName} Gets the resource representation for a cluster in a project. getIamPolicy POST /v1/{resource=projects/ /regions/ /clusters/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1/projects/{projectId}/regions/{region}/clusters Lists all regions/{region}/clusters in a project alphabetically. patch PATCH /v1/projects/{projectId}/regions/{region}/clusters/{clusterName} Updates a cluster in a project. setIamPolicy POST /v1/{resource=projects/ /regions/ /clusters/ }:setIamPolicy Sets the access control policy on the specified resource. start POST /v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:start Starts a cluster in a project. stop POST /v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:stop Stops a cluster in a project. testIamPermissions POST /v1/{resource=projects/ /regions/ /clusters/ }:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v1.projects.locations.autoscalingPolicies REST Resource: v1.projects.locations.operations REST Resource: v1.projects.locations.workflowTemplates REST Resource: v1.projects.regions.autoscalingPolicies REST Resource: v1.projects.regions.clusters REST Resource: v1.projects.regions.clusters.nodeGroups REST Resource: v1.projects.regions.jobs REST Resource: v1.projects.regions.operations REST Resource: v1.projects.regions.workflowTemplates Service: dataproc.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v1.projects.regions.jobs Methods cancel POST /v1/projects/{projectId}/regions/{region}/jobs/{jobId}:cancel Starts a job cancellation request. delete DELETE /v1/projects/{projectId}/regions/{region}/jobs/{jobId} Deletes the job from the project. get GET /v1/projects/{projectId}/regions/{region}/jobs/{jobId} Gets the resource representation for a job in a project. getIamPolicy POST /v1/{resource=projects/ /regions/ /jobs/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1/projects/{projectId}/regions/{region}/jobs Lists regions/{region}/jobs in a project. patch PATCH /v1/projects/{projectId}/regions/{region}/jobs/{jobId} Updates a job in a project. setIamPolicy POST /v1/{resource=projects/ /regions/ /jobs/ }:setIamPolicy Sets the access control policy on the specified resource. submit POST /v1/projects/{projectId}/regions/{region}/jobs:submit Submits a job to a cluster. submitAsOperation POST /v1/projects/{projectId}/regions/{region}/jobs:submitAsOperation Submits job to a cluster. testIamPermissions POST /v1/{resource=projects/ /regions/ /jobs/ }:testIamPermissions Returns permissions that a caller has on the specified resource.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://dataproc.googleapis.com REST Resource: v1.projects.locations.autoscalingPolicies Methods create POST /v1/{parent=projects/ /locations/ }/autoscalingPolicies Creates new autoscaling policy. delete DELETE /v1/{name=projects/ /locations/ /autoscalingPolicies/ } Deletes an autoscaling policy. get GET /v1/{name=projects/ /locations/ /autoscalingPolicies/ } Retrieves autoscaling policy. getIamPolicy POST /v1/{resource=projects/ /locations/ /autoscalingPolicies/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent=projects/ /locations/ }/autoscalingPolicies Lists autoscaling policies in the project. setIamPolicy POST /v1/{resource=projects/ /locations/ /autoscalingPolicies/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1/{resource=projects/ /locations/ /autoscalingPolicies/ }:testIamPermissions Returns permissions that a caller has on the specified resource. update PUT /v1/{policy.name=projects/ /locations/ /autoscalingPolicies/ } Updates (replaces) autoscaling policy.

### "Create metric alerts \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-alerts](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-alerts)
- Source ID: `site-docs-root`
- Final score: 33
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, to specify bucket thresholds of 30, 60, and 90 minutes, the gcloud dataproc clusters create command should include the following flags: bucket thresholds: ‑‑properties=yarn:yarn.resourcemanager.metrics.runtime.buckets=30,60,90 metrics overrides: ‑‑metric-overrides=yarn:ResourceManager:QueueMetrics:running 0, yarn:ResourceManager:QueueMetrics:running 30,yarn:ResourceManager:QueueMetrics:running 60, yarn:ResourceManager:QueueMetrics:running 90 Sample cluster creation command gcloud dataproc clusters create test-cluster \ --properties ^#^yarn:yarn.resourcemanager.metrics.runtime.buckets=30,60,90 \ --metric-sources=yarn \ --metric-overrides=yarn:ResourceManager:QueueMetrics:running 0,yarn:ResourceManager:QueueMetrics:running 30,yarn:ResourceManager:QueueMetrics:running 60,yarn:ResourceManager:QueueMetrics:running 90 These metrics are listed in the Google Cloud console Metrics Explorer under the VM Instance ( gce instance ) resource.
- You can modify the query by filtering on the job id to apply it to a specific job: sum by (job id) ({ " name "="dataproc.googleapis.com/job/state", "monitored resource"="cloud dataproc job", "state"="ERROR", "job id"="1234567890" }) != 0 Cluster capacity deviation alert Managed Service for Apache Spark emits the dataproc.googleapis.com/cluster/capacity deviation metric, which reports the difference between the expected node count in the cluster and the active YARN node count.
- For more information, see Create PromQL-based alerting policies (Console) . { " name "="dataproc.googleapis.com/cluster/capacity deviation", "monitored resource"="cloud dataproc cluster" } != 0 In the next example, the alert triggers when cluster capacity deviation is non-zero for more than 30 minutes.
- To avoid false positive alerts, set the metric alert threshold to account for these operations: Cluster creation and updates: The capacity deviation metric is not emitted during cluster create or update operations.

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 27
- Re-rank relevance: N/A

Evidence snippets:
- SINGLE NODE https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/single-node-clusters ZERO SCALE Clusters that can use only secondary workers and be scaled down to zero secondary worker nodes.
- Node Group Affinity for sole-tenant clusters. shieldedInstanceConfig object ( ShieldedInstanceConfig ) Optional.
- It cannot be activated on clusters created with supported Dataproc on Compute Engine image versions.
- NodeGroupAffinity Node Group Affinity for clusters using sole-tenant node groups.

