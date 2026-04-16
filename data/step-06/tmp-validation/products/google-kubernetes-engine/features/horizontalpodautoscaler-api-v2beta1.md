---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.302Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "HorizontalPodAutoscaler API v2beta1"
feature_slug: "horizontalpodautoscaler-api-v2beta1"
latest_feature_date: "2022-05-26"
deprecation_date: "2022-05-26"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/full-stack-scale"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
keywords:
  - "horizontalpodautoscaler"
  - "v2beta1"
  - "autoscaling"
  - "deprecated"
  - "workload"
  - "2022"
  - "beta"
---

# HorizontalPodAutoscaler API v2beta1

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

HorizontalPodAutoscaler API v2beta1 is a Kubernetes beta API for workload autoscaling; HorizontalPodAutoscaler API v2beta1 is a Kubernetes beta API for workload autoscaling; deprecated on 2022-05-26.

## Extended Definition

HorizontalPodAutoscaler API v2beta1 is a Kubernetes beta API for workload autoscaling; HorizontalPodAutoscaler API v2beta1 is a Kubernetes beta API for workload autoscaling; deprecated on 2022-05-26.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/full-stack-scale](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/full-stack-scale)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)

## Supporting Pages

### "Run full-stack workloads at scale on GKE \_|\_ Kubernetes Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/full-stack-scale](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/full-stack-scale)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Apply the manifest to the cluster: kubectl apply -f extras/postgres-hpa/hpa/userservice.yaml Configure autoscaling for the frontend deployment Review the HorizontalPodAutoscaler manifest for the userservice Deployment: Copyright 2022 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
- Configure autoscaling for the userservice Deployment Review the HorizontalPodAutoscaler manifest for the userservice Deployment: Copyright 2022 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
- Deploy the adapter: kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/k8s-stackdriver/master/custom-metrics-stackdriver-adapter/deploy/production/adapter.yaml Configure the adapter to use Workload Identity Federation for GKE to get metrics: Configure the IAM service account: gcloud projects add-iam-policy-binding PROJECT ID \ --member "serviceAccount:bank-of-anthos@ PROJECT ID .iam.gserviceaccount.com" \ --role roles/monitoring.viewer gcloud iam service-accounts add-iam-policy-binding bank-of-anthos@ PROJECT ID .iam.gserviceaccount.com \ --role roles/iam.workloadIdentityUser \ --member "serviceAccount: PROJECT ID .svc.id.goog[custom-metrics/custom-metrics-stackdriver-adapter]" Annotate the Kubernetes service account that the adapter uses: kubectl annotate serviceaccount custom-metrics-stackdriver-adapter \ --namespace = custom-metrics \ iam.gke.io/gcp-service-account = bank-of-anthos@ PROJECT ID .iam.gserviceaccount.com Restart the adapter Deployment to propagate the changes: kubectl rollout restart deployment custom-metrics-stackdriver-adapter \ --namespace = custom-metrics Configure autoscaling for the database When you deployed Bank of Anthos and PostgreSQL earlier in this tutorial,, you deployed the database as a StatefulSet with one primary read/write replica to handle all incoming SQL statements.
- See the License for the specific language governing permissions and limitations under the License. --- apiVersion : autoscaling/v2 kind : HorizontalPodAutoscaler metadata : name : frontend spec : behavior : scaleUp : stabilizationWindowSeconds : 0 policies : - type : Percent value : 100 periodSeconds : 5 selectPolicy : Max scaleTargetRef : apiVersion : apps/v1 kind : Deployment name : frontend minReplicas : 5 maxReplicas : 25 metrics : - type : External external : metric : name : loadbalancing.googleapis.com https request count selector : matchLabels : resource.labels.forwarding rule name : FORWARDING RULE NAME target : type : AverageValue averageValue : "5" This manifest uses the following fields: spec.scaleTargetRef : The Kubernetes resource to scale. spec.minReplicas : The minimum number of replicas, which is 5 in this sample. spec.maxReplicas : The maximum number of replicas, which is 25 in this sample. spec.metrics. : The metric to use.

### "Optimize Pod autoscaling based on metrics \_|\_ Kubernetes Engine \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics)
- Source ID: `site-docs-reference-required-5`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Allow this service account to read Cloud Monitoring metrics by assigning the Monitoring Viewer role: gcloud projects add-iam-policy-binding projects/ $PROJECT ID \ --role roles/monitoring.viewer \ --member = principal://iam.googleapis.com/projects/ $PROJECT NUMBER /locations/global/workloadIdentityPools/ $PROJECT ID .svc.id.goog/subject/ns/custom-metrics/sa/custom-metrics-stackdriver-adapter Legacy Authentication Grant your user the ability to create required authorization roles: kubectl create clusterrolebinding cluster-admin-binding \ --clusterrole cluster-admin --user " $( gcloud config get-value account ) " Deploy the custom metrics adapter on your cluster: kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/k8s-stackdriver/master/custom-metrics-stackdriver-adapter/deploy/production/adapter new resource model.yaml Deploying an application with metrics Download the repository containing the application code for this tutorial: Pub/Sub git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples.git cd kubernetes-engine-samples/databases/cloud-pubsub Custom Metric git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples.git cd kubernetes-engine-samples/observability/custom-metrics-autoscaling/google-managed-prometheus The repository contains code that exports metrics to Cloud Monitoring: Pub/Sub This application polls a Pub/Sub subscription for new messages, acknowledging them as they arrive.
- Pub/Sub apiVersion : autoscaling/v2 kind : HorizontalPodAutoscaler metadata : name : pubsub spec : minReplicas : 1 maxReplicas : 5 metrics : - external : metric : name : pubsub.googleapis.com subscription num undelivered messages selector : matchLabels : resource.labels.subscription id : echo-read target : type : AverageValue averageValue : 2 type : External scaleTargetRef : apiVersion : apps/v1 kind : Deployment name : pubsub Custom Metric apiVersion : autoscaling/v2 kind : HorizontalPodAutoscaler metadata : name : custom-metrics-gmp-hpa namespace : default spec : scaleTargetRef : apiVersion : apps/v1 kind : Deployment name : custom-metrics-gmp minReplicas : 1 maxReplicas : 5 metrics : - type : Pods pods : metric : name : prometheus.googleapis.com custom prometheus gauge target : type : AverageValue averageValue : 20 Deploy the HorizontalPodAutoscaler to your cluster: Pub/Sub kubectl apply -f deployment/pubsub-hpa.yaml Custom Metric kubectl apply -f custom-metrics-gmp-hpa.yaml Generating load For some metrics, you might need to generate load to watch the autoscaling: Pub/Sub Publish 200 messages to the Pub/Sub topic: for i in { 1 ..200 } ; do gcloud pubsub topics publish echo --message = "Autoscaling # ${ i } " ; done Custom Metric Not Applicable: The code used in this sample exports a constant value of 40 for the custom metric.
- Workload Identity To create a cluster with Workload Identity Federation for GKE enabled, run the following command: gcloud container clusters create metrics-autoscaling --workload-pool = $PROJECT ID .svc.id.goog Legacy authentication To create a cluster with Workload Identity Federation for GKE disabled , run the following command: gcloud container clusters create metrics-autoscaling Deploying the Custom Metrics Adapter The Custom Metrics Adapter lets your cluster send and receive metrics with Cloud Monitoring.
- Learn more about autoscaling workloads based on metrics .

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Cluster JSON representation { "name" : string , "description" : string , "initialNodeCount" : integer , "nodeConfig" : { object ( NodeConfig ) } , "masterAuth" : { object ( MasterAuth ) } , "loggingService" : string , "monitoringService" : string , "network" : string , "clusterIpv4Cidr" : string , "addonsConfig" : { object ( AddonsConfig ) } , "subnetwork" : string , "nodePools" : [ { object ( NodePool ) } ] , "locations" : [ string ] , "enableKubernetesAlpha" : boolean , "alphaClusterFeatureGates" : [ string ] , "resourceLabels" : { string : string , ... } , "labelFingerprint" : string , "legacyAbac" : { object ( LegacyAbac ) } , "networkPolicy" : { object ( NetworkPolicy ) } , "ipAllocationPolicy" : { object ( IPAllocationPolicy ) } , "masterAuthorizedNetworksConfig" : { object ( MasterAuthorizedNetworksConfig ) } , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "binaryAuthorization" : { object ( BinaryAuthorization ) } , "autoscaling" : { object ( ClusterAutoscaling ) } , "networkConfig" : { object ( NetworkConfig ) } , "defaultMaxPodsConstraint" : { object ( MaxPodsConstraint ) } , "resourceUsageExportConfig" : { object ( ResourceUsageExportConfig ) } , "authenticatorGroupsConfig" : { object ( AuthenticatorGroupsConfig ) } , "privateClusterConfig" : { object ( PrivateClusterConfig ) } , "databaseEncryption" : { object ( DatabaseEncryption ) } , "verticalPodAutoscaling" : { object ( VerticalPodAutoscaling ) } , "shieldedNodes" : { object ( ShieldedNodes ) } , "releaseChannel" : { object ( ReleaseChannel ) } , "workloadIdentityConfig" : { object ( WorkloadIdentityConfig ) } , "meshCertificates" : { object ( MeshCertificates ) } , "costManagementConfig" : { object ( CostManagementConfig ) } , "notificationConfig" : { object ( NotificationConfig ) } , "confidentialNodes" : { object ( ConfidentialNodes ) } , "identityServiceConfig" : { object ( IdentityServiceConfig ) } , "selfLink" : string , "zone" : string , "endpoint" : string , "initialClusterVersion" : string , "currentMasterVersion" : string , "currentNodeVersion" : string , "createTime" : string , "status" : enum ( Status ) , "statusMessage" : string , "nodeIpv4CidrSize" : integer , "servicesIpv4Cidr" : string , "instanceGroupUrls" : [ string ] , "currentNodeCount" : integer , "expireTime" : string , "location" : string , "enableTpu" : boolean , "tpuIpv4CidrBlock" : string , "conditions" : [ { object ( StatusCondition ) } ] , "autopilot" : { object ( Autopilot ) } , "id" : string , "loggingConfig" : { object ( LoggingConfig ) } , "monitoringConfig" : { object ( MonitoringConfig ) } , "nodePoolAutoConfig" : { object ( NodePoolAutoConfig ) } , "podAutoscaling" : { object ( PodAutoscaling ) } , "etag" : string , "fleet" : { object ( Fleet ) } , "securityPostureConfig" : { object ( SecurityPostureConfig ) } , "controlPlaneEndpointsConfig" : { object ( ControlPlaneEndpointsConfig ) } , "enableK8sBetaApis" : { object ( K8sBetaAPIConfig ) } , "enterpriseConfig" : { object ( EnterpriseConfig ) } , "secretManagerConfig" : { object ( SecretManagerConfig ) } , "compliancePostureConfig" : { object ( CompliancePostureConfig ) } , "gkeAutoUpgradeConfig" : { object ( GkeAutoUpgradeConfig ) } , "anonymousAuthenticationConfig" : { object ( AnonymousAuthenticationConfig ) } , "scheduleUpgradeConfig" : { object ( ScheduleUpgradeConfig ) } , "managedOpentelemetryConfig" : { object ( ManagedOpenTelemetryConfig ) } , "managedMachineLearningDiagnosticsConfig" : { object ( ManagedMachineLearningDiagnosticsConfig ) } , // Union field node pool defaults can be only one of the following: "nodePoolDefaults" : { object ( NodePoolDefaults ) } // End of list of possible types for union field node pool defaults . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field user managed keys config can be only one of the following: "userManagedKeysConfig" : { object ( UserManagedKeysConfig ) } // End of list of possible types for union field user managed keys config . // Union field rbac binding config can be only one of the following: "rbacBindingConfig" : { object ( RBACBindingConfig ) } // End of list of possible types for union field rbac binding config . } Fields name string The name of this cluster.
- AddonsConfig JSON representation { "httpLoadBalancing" : { object ( HttpLoadBalancing ) } , "horizontalPodAutoscaling" : { object ( HorizontalPodAutoscaling ) } , "kubernetesDashboard" : { object ( KubernetesDashboard ) } , "networkPolicyConfig" : { object ( NetworkPolicyConfig ) } , "cloudRunConfig" : { object ( CloudRunConfig ) } , "dnsCacheConfig" : { object ( DnsCacheConfig ) } , "configConnectorConfig" : { object ( ConfigConnectorConfig ) } , "gcePersistentDiskCsiDriverConfig" : { object ( GcePersistentDiskCsiDriverConfig ) } , "gcpFilestoreCsiDriverConfig" : { object ( GcpFilestoreCsiDriverConfig ) } , "gkeBackupAgentConfig" : { object ( GkeBackupAgentConfig ) } , "gcsFuseCsiDriverConfig" : { object ( GcsFuseCsiDriverConfig ) } , "statefulHaConfig" : { object ( StatefulHAConfig ) } , "parallelstoreCsiDriverConfig" : { object ( ParallelstoreCsiDriverConfig ) } , "rayOperatorConfig" : { object ( RayOperatorConfig ) } , "highScaleCheckpointingConfig" : { object ( HighScaleCheckpointingConfig ) } , "lustreCsiDriverConfig" : { object ( LustreCsiDriverConfig ) } , "sliceControllerConfig" : { object ( SliceControllerConfig ) } } Fields httpLoadBalancing object ( HttpLoadBalancing ) Configuration for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. horizontalPodAutoscaling object ( HorizontalPodAutoscaling ) Configuration for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. kubernetesDashboard (deprecated) object ( KubernetesDashboard ) This item is deprecated!
- Deprecated: Use ControlPlaneEndpointsConfig.IPEndpointsConfig.authorized networks config instead. maintenancePolicy object ( MaintenancePolicy ) Configure the maintenance policy for this cluster. binaryAuthorization object ( BinaryAuthorization ) Configuration for Binary Authorization. autoscaling object ( ClusterAutoscaling ) Cluster-level autoscaling configuration. networkConfig object ( NetworkConfig ) Configuration for cluster networking. defaultMaxPodsConstraint object ( MaxPodsConstraint ) The default constraint on the maximum number of pods that can be run simultaneously on a node in the node pool of this cluster.
- Enable/Disable Security Posture API features for the cluster. controlPlaneEndpointsConfig object ( ControlPlaneEndpointsConfig ) Configuration for all cluster's control plane endpoints. enableK8sBetaApis object ( K8sBetaAPIConfig ) Beta APIs Config enterpriseConfig (deprecated) object ( EnterpriseConfig ) This item is deprecated!

