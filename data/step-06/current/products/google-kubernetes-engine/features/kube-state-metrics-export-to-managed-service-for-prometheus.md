---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.766Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "kube-state-metrics export to Managed Service for Prometheus"
feature_slug: "kube-state-metrics-export-to-managed-service-for-prometheus"
latest_feature_date: "2023-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/zalando"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
keywords:
  - "kube"
  - "state"
  - "metrics"
  - "export"
  - "managed"
  - "prometheus"
  - "autopilot"
  - "clusters"
---

# kube-state-metrics export to Managed Service for Prometheus

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

New Autopilot clusters automatically collect and send kube-state-metrics metrics to Managed Service for Prometheus.

## Extended Definition

New Autopilot clusters automatically collect and send kube-state-metrics metrics to Managed Service for Prometheus.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/zalando](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/zalando)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)

## Supporting Pages

### "Collect and view kube state metrics \_|\_ Google Kubernetes Engine (GKE)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 298
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Autopilot Standard This page describes how to configure a Google Kubernetes Engine (GKE) cluster to send a curated set of kube state, including metrics for Pods and Deployments, Cloud Monitoring using Google Cloud Managed Service for Prometheus.
- Click Save Changes . gcloud Update your cluster to collect metrics: gcloud container clusters update CLUSTER NAME \ --location = COMPUTE LOCATION \ --enable-managed-prometheus \ --monitoring = SYSTEM,DAEMONSET,DEPLOYMENT,HPA,POD,STATEFULSET,STORAGE Replace the following: CLUSTER NAME : the name of the existing cluster.
- Because all kube state metrics are ingested by using Google Cloud Managed Service for Prometheus , kube state metrics can be queried by using Prometheus Query Language (PromQL) .
- Starting with version 1.29.2-gke.2000 for GKE Standard clusters and version 1.27.4-gke.900 for GKE Autopilot clusters, the Kube state metrics package is enabled by default.

### "Deploy PostgreSQL to GKE using Zalando \_|\_ Kubernetes Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/zalando](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/zalando)
- Source ID: `site-docs-root-2`
- Final score: 252
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following manifest describes a Postgres cluster: apiVersion : "acid.zalan.do/v1" kind : postgresql metadata : name : my-cluster spec : dockerImage : ghcr.io/zalando/spilo-15:3.0-p1 teamId : "my-team" numberOfInstances : 3 users : mydatabaseowner : - superuser - createdb myuser : [] databases : mydatabase : mydatabaseowner postgresql : version : "15" parameters : shared buffers : "32MB" max connections : "10" log statement : "all" password encryption : scram-sha-256 volume : size : 5Gi storageClass : premium-rwo enableShmVolume : true podAnnotations : cluster-autoscaler.kubernetes.io/safe-to-evict : "true" tolerations : - key : "app.stateful/component" operator : "Equal" value : "postgres-operator" effect : NoSchedule nodeAffinity : preferredDuringSchedulingIgnoredDuringExecution : - weight : 1 preference : matchExpressions : - key : "app.stateful/component" operator : In values : - "postgres-operator" resources : requests : cpu : "1" memory : 4Gi limits : cpu : "2" memory : 4Gi sidecars : - name : exporter image : quay.io/prometheuscommunity/postgres-exporter:v0.14.0 args : - --collector.stat statements ports : - name : exporter containerPort : 9187 protocol : TCP resources : limits : cpu : 500m memory : 256M requests : cpu : 100m memory : 256M env : - name : "DATA SOURCE URI" value : "localhost/postgres?sslmode=require" - name : "DATA SOURCE USER" value : "$(POSTGRES USER)" - name : "DATA SOURCE PASS" value : "$(POSTGRES PASSWORD)" This manifest has the following fields: spec.teamId : a prefix for the cluster objects that you choose spec.numberOfInstances : the total number of instances for a cluster spec.users : the user list with privileges spec.databases : the database list in the format dbname: ownername spec.postgresql : postgres parameters spec.volume : Persistent Disk parameters spec.tolerations : the tolerations Pod template that allows cluster Pods to be scheduled on pool-postgres nodes spec.nodeAffinity : the nodeAffinity Pod template that tells GKE that cluster Pods prefer to be scheduled on pool-postgres nodes. spec.resources : requests and limits for cluster Pods spec.sidecars : a list of sidecar containers, which contains postgres-exporter For more information, see Cluster manifest reference in the Postgres documentation.
- Create the PodMonitoring resource to scrape metrics by labelSelector : kubectl apply -n postgres -f manifests/03-prometheus-metrics/pod-monitoring.yaml In the Google Cloud console, go to the GKE Clusters Dashboard page.
- Create a table with mydatabaseowner credentials and grant all privileges on the table to myuser : PGPASSWORD = $OWNERPASSWORD psql \ -h my-cluster \ -U $OWNERUSERNAME \ -d mydatabase \ -c "CREATE TABLE test (id serial PRIMARY KEY, randomdata VARCHAR ( 50 ) NOT NULL);GRANT ALL ON test TO myuser;GRANT ALL ON SEQUENCE test id seq TO myuser;" The output is similar to the following: CREATE TABLE GRANT GRANT Insert random data into the table using myuser credentials: for i in { 1 ..10 } ; do DATA = $( tr -dc A-Za-z0-9 </dev/urandom head -c 13 ) PGPASSWORD = $CLIENTPASSWORD psql \ -h my-cluster \ -U $CLIENTUSERNAME \ -d mydatabase \ -c "INSERT INTO test(randomdata) VALUES (' $DATA ');" done The output is similar to the following: INSERT 0 1 INSERT 0 1 INSERT 0 1 INSERT 0 1 INSERT 0 1 INSERT 0 1 INSERT 0 1 INSERT 0 1 INSERT 0 1 INSERT 0 1 Get the values that you inserted: PGPASSWORD = $CLIENTPASSWORD psql \ -h my-cluster \ -U $CLIENTUSERNAME \ -d mydatabase \ -c "SELECT FROM test;" The output is similar to the following: id randomdata ----+--------------- 1 jup9HYsAjwtW4 2 9rLAyBlcpLgNT 3 wcXSqxb5Yz75g 4 KoDRSrx3muD6T 5 b9atC7RPai7En 6 20d7kC8E6Vt1V 7 GmgNxaWbkevGq 8 BkTwFWH6hWC7r 9 nkLXHclkaqkqy 10 HEebZ9Lp71Nm3 (10 rows) Exit the Pod shell: exit Understand how Prometheus collects metrics for your Postgres cluster The following diagram shows how Prometheus metrics collecting works: In the diagram, a GKE private cluster contains: A Postgres Pod that gathers metrics on path / and port 9187 Prometheus-based collectors that process the metrics from the Postgres Pod A PodMonitoring resource that sends metrics to Cloud Monitoring Google Cloud Managed Service for Prometheus supports metrics collection in the Prometheus format.
- Delete a Google Cloud project: gcloud projects delete PROJECT ID Delete individual resources Set environment variables. export PROJECT ID = ${ PROJECT ID } export KUBERNETES CLUSTER PREFIX = postgres export REGION = us-central1 Run the terraform destroy command: export GOOGLE OAUTH ACCESS TOKEN = $( gcloud auth print-access-token ) terraform -chdir = terraform/ FOLDER destroy \ -var project id = ${ PROJECT ID } \ -var region = ${ REGION } \ -var cluster prefix = ${ KUBERNETES CLUSTER PREFIX } Replace FOLDER with either gke-autopilot or gke-standard .

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 250
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cluster JSON representation { "name" : string , "description" : string , "initialNodeCount" : integer , "nodeConfig" : { object ( NodeConfig ) } , "masterAuth" : { object ( MasterAuth ) } , "loggingService" : string , "monitoringService" : string , "network" : string , "clusterIpv4Cidr" : string , "addonsConfig" : { object ( AddonsConfig ) } , "subnetwork" : string , "nodePools" : [ { object ( NodePool ) } ] , "locations" : [ string ] , "enableKubernetesAlpha" : boolean , "alphaClusterFeatureGates" : [ string ] , "resourceLabels" : { string : string , ... } , "labelFingerprint" : string , "legacyAbac" : { object ( LegacyAbac ) } , "networkPolicy" : { object ( NetworkPolicy ) } , "ipAllocationPolicy" : { object ( IPAllocationPolicy ) } , "masterAuthorizedNetworksConfig" : { object ( MasterAuthorizedNetworksConfig ) } , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "binaryAuthorization" : { object ( BinaryAuthorization ) } , "autoscaling" : { object ( ClusterAutoscaling ) } , "networkConfig" : { object ( NetworkConfig ) } , "defaultMaxPodsConstraint" : { object ( MaxPodsConstraint ) } , "resourceUsageExportConfig" : { object ( ResourceUsageExportConfig ) } , "authenticatorGroupsConfig" : { object ( AuthenticatorGroupsConfig ) } , "privateClusterConfig" : { object ( PrivateClusterConfig ) } , "databaseEncryption" : { object ( DatabaseEncryption ) } , "verticalPodAutoscaling" : { object ( VerticalPodAutoscaling ) } , "shieldedNodes" : { object ( ShieldedNodes ) } , "releaseChannel" : { object ( ReleaseChannel ) } , "workloadIdentityConfig" : { object ( WorkloadIdentityConfig ) } , "meshCertificates" : { object ( MeshCertificates ) } , "costManagementConfig" : { object ( CostManagementConfig ) } , "notificationConfig" : { object ( NotificationConfig ) } , "confidentialNodes" : { object ( ConfidentialNodes ) } , "identityServiceConfig" : { object ( IdentityServiceConfig ) } , "selfLink" : string , "zone" : string , "endpoint" : string , "initialClusterVersion" : string , "currentMasterVersion" : string , "currentNodeVersion" : string , "createTime" : string , "status" : enum ( Status ) , "statusMessage" : string , "nodeIpv4CidrSize" : integer , "servicesIpv4Cidr" : string , "instanceGroupUrls" : [ string ] , "currentNodeCount" : integer , "expireTime" : string , "location" : string , "enableTpu" : boolean , "tpuIpv4CidrBlock" : string , "conditions" : [ { object ( StatusCondition ) } ] , "autopilot" : { object ( Autopilot ) } , "id" : string , "loggingConfig" : { object ( LoggingConfig ) } , "monitoringConfig" : { object ( MonitoringConfig ) } , "nodePoolAutoConfig" : { object ( NodePoolAutoConfig ) } , "podAutoscaling" : { object ( PodAutoscaling ) } , "etag" : string , "fleet" : { object ( Fleet ) } , "securityPostureConfig" : { object ( SecurityPostureConfig ) } , "controlPlaneEndpointsConfig" : { object ( ControlPlaneEndpointsConfig ) } , "enableK8sBetaApis" : { object ( K8sBetaAPIConfig ) } , "enterpriseConfig" : { object ( EnterpriseConfig ) } , "secretManagerConfig" : { object ( SecretManagerConfig ) } , "compliancePostureConfig" : { object ( CompliancePostureConfig ) } , "gkeAutoUpgradeConfig" : { object ( GkeAutoUpgradeConfig ) } , "anonymousAuthenticationConfig" : { object ( AnonymousAuthenticationConfig ) } , "scheduleUpgradeConfig" : { object ( ScheduleUpgradeConfig ) } , "managedOpentelemetryConfig" : { object ( ManagedOpenTelemetryConfig ) } , "managedMachineLearningDiagnosticsConfig" : { object ( ManagedMachineLearningDiagnosticsConfig ) } , // Union field node pool defaults can be only one of the following: "nodePoolDefaults" : { object ( NodePoolDefaults ) } // End of list of possible types for union field node pool defaults . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field user managed keys config can be only one of the following: "userManagedKeysConfig" : { object ( UserManagedKeysConfig ) } // End of list of possible types for union field user managed keys config . // Union field rbac binding config can be only one of the following: "rbacBindingConfig" : { object ( RBACBindingConfig ) } // End of list of possible types for union field rbac binding config . } Fields name string The name of this cluster.
- This only tracks whether the addon is enabled or not on the Master, it does not track whether network policy is enabled for the nodes. cloudRunConfig object ( CloudRunConfig ) Configuration for the Cloud Run addon, which allows the user to use a managed Knative service. dnsCacheConfig object ( DnsCacheConfig ) Configuration for NodeLocalDNS, a dns cache running on cluster nodes configConnectorConfig object ( ConfigConnectorConfig ) Configuration for the ConfigConnector add-on, a Kubernetes extension to manage hosted Google Cloud services through the Kubernetes API. gcePersistentDiskCsiDriverConfig object ( GcePersistentDiskCsiDriverConfig ) Configuration for the Compute Engine Persistent Disk CSI driver. gcpFilestoreCsiDriverConfig object ( GcpFilestoreCsiDriverConfig ) Configuration for the Filestore CSI driver. gkeBackupAgentConfig object ( GkeBackupAgentConfig ) Configuration for the Backup for GKE agent addon. gcsFuseCsiDriverConfig object ( GcsFuseCsiDriverConfig ) Configuration for the Cloud Storage Fuse CSI driver. statefulHaConfig object ( StatefulHAConfig ) Optional.
- Currently available options: monitoring.googleapis.com/kubernetes - The Cloud Monitoring service with a Kubernetes-native resource model monitoring.googleapis.com - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). none - No metrics will be exported from the cluster.
- AddonsConfig JSON representation { "httpLoadBalancing" : { object ( HttpLoadBalancing ) } , "horizontalPodAutoscaling" : { object ( HorizontalPodAutoscaling ) } , "kubernetesDashboard" : { object ( KubernetesDashboard ) } , "networkPolicyConfig" : { object ( NetworkPolicyConfig ) } , "cloudRunConfig" : { object ( CloudRunConfig ) } , "dnsCacheConfig" : { object ( DnsCacheConfig ) } , "configConnectorConfig" : { object ( ConfigConnectorConfig ) } , "gcePersistentDiskCsiDriverConfig" : { object ( GcePersistentDiskCsiDriverConfig ) } , "gcpFilestoreCsiDriverConfig" : { object ( GcpFilestoreCsiDriverConfig ) } , "gkeBackupAgentConfig" : { object ( GkeBackupAgentConfig ) } , "gcsFuseCsiDriverConfig" : { object ( GcsFuseCsiDriverConfig ) } , "statefulHaConfig" : { object ( StatefulHAConfig ) } , "parallelstoreCsiDriverConfig" : { object ( ParallelstoreCsiDriverConfig ) } , "rayOperatorConfig" : { object ( RayOperatorConfig ) } , "highScaleCheckpointingConfig" : { object ( HighScaleCheckpointingConfig ) } , "lustreCsiDriverConfig" : { object ( LustreCsiDriverConfig ) } , "sliceControllerConfig" : { object ( SliceControllerConfig ) } } Fields httpLoadBalancing object ( HttpLoadBalancing ) Configuration for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. horizontalPodAutoscaling object ( HorizontalPodAutoscaling ) Configuration for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. kubernetesDashboard (deprecated) object ( KubernetesDashboard ) This item is deprecated!

