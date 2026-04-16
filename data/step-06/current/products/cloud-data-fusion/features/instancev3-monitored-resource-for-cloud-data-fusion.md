---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:45.369Z"
product_name: "Cloud Data Fusion"
product_slug: "cloud-data-fusion"
feature_name: "InstanceV3 monitored resource for Cloud Data Fusion"
feature_slug: "instancev3-monitored-resource-for-cloud-data-fusion"
latest_feature_date: "2026-02-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/api/resources"
  - "https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference"
  - "https://docs.cloud.google.com/data-fusion/docs/reference/rest"
keywords:
  - "instancev3"
  - "monitored"
  - "resource"
  - "fusion"
  - "default"
  - "instance"
  - "level"
  - "metrics"
---

# InstanceV3 monitored resource for Cloud Data Fusion

Product: Cloud Data Fusion
Coverage: MEDIUM

## Step 02 Summary

The default monitored resource for instance-level metrics and system service logs was introduced as datafusion.googleapis.com/InstanceV3, replacing InstanceV2 labels by default.

## Extended Definition

The default monitored resource for instance-level metrics and system service logs was introduced as datafusion.googleapis.com/InstanceV3, replacing InstanceV2 labels by default.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/api/resources](https://docs.cloud.google.com/monitoring/api/resources)
- [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference)
- [https://docs.cloud.google.com/data-fusion/docs/reference/rest](https://docs.cloud.google.com/data-fusion/docs/reference/rest)

## Supporting Pages

### Monitored resource types | Cloud Monitoring | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/api/resources](https://docs.cloud.google.com/monitoring/api/resources)
- Source ID: `feature-recovery-direct-http`
- Final score: 278
- Re-rank relevance: N/A

Evidence snippets:
- Labels : resource_container : The ID of the customer project. org_id : The ID of the organization that the customer project belongs to. location : The zone/region that the instance is hosted in. edition : The edition of the instance. is_private_ip_enabled : Does the instance use private IP. version : The data plane version of the instance. instance_id : The instance ID. namespace : Name of the namespace. datafusion.googleapis.com/InstanceV3 Display name : Cloud Data Fusion Instance Description : An instance of Cloud Data Fusion.
- Labels : resource_container : The ID of the customer project. location : The zone/region that the instance is hosted in. edition : The edition of the instance. is_private_ip_enabled : Does the instance use private IP. version : The data plane version of the instance. instance_id : The instance ID. datafusion.googleapis.com/PipelineV2 Display name : Cloud Data Fusion Pipeline Description : A deployed Pipeline in a Cloud Data Fusion instance.
- Labels : resource_container : The identifier of the GCP resource container associated with this resource, such as "my-project". location : The region in which the Repository is created. repository_id : The user-specified ID of the Repository. datafusion.googleapis.com/InstanceV2 Display name : Cloud Data Fusion Instance Description : An instance of Cloud Data Fusion.
- Monitored resource types | Cloud Monitoring | Google Cloud Documentation ∏ Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español – América Latina Français Português – Brasil 中文 – 简体 日本語 한국어 Sign in Cloud Monitoring Start free Overview Guides Reference Samples Resources Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Cloud Monitoring All APIs and references Use the API Enable the API APIs Explorer Sort and filter API results Client libraries Cloud Monitoring API v3 Introduction REST API reference Summary REST Resources folders.timeSeries Overview list organizations.timeSeries Overview list projects.alertPolicies Overview create delete get list patch projects.alerts Overview get list projects.groups Overview create delete get list update projects.groups.members Overview list projects.metricDescriptors Overview create delete get list projects.monitoredResourceDescriptors Overview get list projects.notificationChannelDescriptors Overview get list projects.notificationChannels Overview create delete get getVerificationCode list patch sendVerificationCode verify projects.snoozes Overview create get list patch projects.timeSeries Overview create list query projects.uptimeCheckConfigs Overview create delete get list patch services Overview create delete get list patch services.serviceLevelObjectives Overview create delete get list patch uptimeCheckIps Overview list Types LabelDescriptor LaunchStage ListTimeSeriesResponse MutationRecord Severity TimeSeries TimeSeriesView TypedValue View REST Resources locations.global.metricsScopes Overview get listMetricsScopesByMonitoredProject locations.global.metricsScopes.projects Overview create delete operations Overview get projects.dashboards Overview create delete get list patch projects.location.prometheus.api.v1 Overview labels query query_exemplars query_range series projects.location.prometheus.api.v1.label Overview values projects.location.prometheus.api.v1.metadata Overview list Types HttpBody Types MonitoredResource Status gRPC API reference Overview google.api google.longrunning google.monitoring.dashboard.v1 google.monitoring.metricsscope.v1 google.monitoring.prometheus.v1 google.monitoring.v3 google.rpc google.type MCP reference Overview Tools list_timeseries query_range get_alert_policy list_alert_policies get_alert list_alerts list_metric_descriptors list_dashboards get_dashboard Metrics list Overview Google Cloud metrics Google Cloud metrics overview Services: A to B Services: C Services: D to H Services: I to O Services: P to Z Agent metrics Ops Agent metrics Legacy Monitoring and Logging agent metrics Google Distributed Cloud metrics Istio metrics Knative metrics Kubernetes metrics External metrics Metric naming conventions Monitored resource list Monitoring filters Process-health filters Cloud Monitoring resource groups Monitoring Query Language reference AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Observability Cloud Monitoring Reference Send feedback Monitored resource types Stay organized with collections Save and categorize content based on your preferences.

### CDAP reference | Cloud Data Fusion | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference)
- Source ID: `feature-recovery-http`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- PATCH -H 'Content-Type: application/json' -H "Authorization: Bearer ${AUTH_TOKEN}" 'https://datafusion.googleapis.com/v1beta1/projects/ project-id /locations/ region /instances/ instance-name ?updateMask=options' -d '{ "options": { "enable.unrecoverable.reset": "true" } }' After the enable.unrecoverable.reset property is set to true , restart the instance: gcloud beta data-fusion instances restart --project= project-id --location= region instance-name Delete the namespace with the following DELETE request or in the web interface.
- PATCH -H 'Content-Type: application/json' -H "Authorization: Bearer ${AUTH_TOKEN}" 'https://datafusion.googleapis.com/v1beta1/projects/ project-id /locations/ region /instances/ instance-name ?updateMask=options' -d '{ "options": { "enable.unrecoverable.reset": "false" } }' Parameter Description project-id The project ID that hosts the Cloud Data Fusion instance. region The location of your Cloud Data Fusion instance. instance-name The Cloud Data Fusion instance name. namespace-id The name of the namespace to delete.
- CDAP reference | Cloud Data Fusion | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español – América Latina Français Português – Brasil 中文 – 简体 日本語 한국어 Sign in Cloud Data Fusion Start free Overview Guides Reference Resources Technology areas More Overview Guides Reference Resources Cross-product tools More Console Cloud Data Fusion REST reference Overview v1 REST Resources projects.locations Overview get list projects.locations.instances Overview create delete get getIamPolicy list patch restart setIamPolicy testIamPermissions projects.locations.instances.dnsPeerings Overview create delete list projects.locations.operations Overview cancel delete get list projects.locations.versions Overview list v1beta1 REST Resources projects.locations Overview get list removeIamPolicy projects.locations.instances Overview create delete get getIamPolicy list patch restart setIamPolicy testIamPermissions upgrade projects.locations.instances.dnsPeerings Overview create delete list projects.locations.instances.namespaces Overview getIamPolicy list setIamPolicy testIamPermissions projects.locations.operations Overview cancel delete get list projects.locations.versions Overview list Shared.Types Types AuditConfig Binding CancelOperationRequest DeleteOperationRequest GetIamPolicyRequest GetLocationRequest GetOperationRequest ListLocationsRequest ListLocationsResponse ListOperationsRequest ListOperationsResponse LogType Policy SetIamPolicyRequest TestIamPermissionsRequest TestIamPermissionsResponse CDAP reference Replication reference Replication API reference Replication data types Replication schema changes SAP Ariba Batch Source reference AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Data analytics Cloud Data Fusion Reference Send feedback CDAP reference Stay organized with collections Save and categorize content based on your preferences.
- In the following example, BigQuery or GoogleCloudStorage are possible values for pipeline-stage . { "stages": [ { "name": "BigQuery", ... }, { "name": "GoogleCloudStorage", ... }, ... ], ... } metrics can be any of: records.in records.out records.error process.time.total process.time.avg process.time.max process.time.min process.time.stddev For example, the following query gets the records.out and process.time.avg metrics for the BigQuery stage of the batch pipeline, batch-pipeline . { "query": { "tags": { "namespace": "default", "app": "batch-pipeline", "workflow": "DataPipelineWorkflow", "run": "81e3d583-f68b-11e9-aba0-0242b9f29569" }, "metrics": [ "user.BigQuery.records.out", "user.BigQuery.process.time.avg" ], "timeRange": { "aggregate": true } } } For more information, see CDAP Metrics Microservices and Cloud Data Fusion flow control .

### Cloud Data Fusion API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/reference/rest](https://docs.cloud.google.com/data-fusion/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1beta1.projects.locations REST Resource: v1beta1.projects.locations.instances REST Resource: v1beta1.projects.locations.instances.dnsPeerings REST Resource: v1beta1.projects.locations.instances.namespaces REST Resource: v1beta1.projects.locations.operations REST Resource: v1beta1.projects.locations.versions REST Resource: v1.projects.locations REST Resource: v1.projects.locations.instances REST Resource: v1.projects.locations.instances.dnsPeerings REST Resource: v1.projects.locations.operations REST Resource: v1.projects.locations.versions Service: datafusion.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://datafusion.googleapis.com REST Resource: v1beta1.projects.locations Methods get GET /v1beta1/{name=projects/ /locations/ } Gets information about a location. list GET /v1beta1/{name=projects/ }/locations Lists information about the supported locations for this service. removeIamPolicy POST /v1beta1/{resource=projects/ /locations/ / }:removeIamPolicy Remove IAM policy that is currently set on the given resource.
- This service provides the following discovery documents: https://datafusion.googleapis.com/$discovery/rest?version=v1 https://datafusion.googleapis.com/$discovery/rest?version=v1beta1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- REST Resource: v1beta1.projects.locations.instances Methods create POST /v1beta1/{parent=projects/ /locations/ }/instances Creates a new Data Fusion instance in the specified project and location. delete DELETE /v1beta1/{name=projects/ /locations/ /instances/ } Deletes a single Data Fusion instance. get GET /v1beta1/{name=projects/ /locations/ /instances/ } Gets details of a single Data Fusion instance. getIamPolicy GET /v1beta1/{resource=projects/ /locations/ /instances/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1beta1/{parent=projects/ /locations/ }/instances Lists Data Fusion instances in the specified project and location. patch PATCH /v1beta1/{instance.name=projects/ /locations/ /instances/ } Updates a single Data Fusion instance. restart POST /v1beta1/{name=projects/ /locations/ /instances/ }:restart Restart a single Data Fusion instance. setIamPolicy POST /v1beta1/{resource=projects/ /locations/ /instances/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1beta1/{resource=projects/ /locations/ /instances/ }:testIamPermissions Returns permissions that a caller has on the specified resource. upgrade POST /v1beta1/{name=projects/ /locations/ /instances/ }:upgrade Upgrade a single Data Fusion instance.

