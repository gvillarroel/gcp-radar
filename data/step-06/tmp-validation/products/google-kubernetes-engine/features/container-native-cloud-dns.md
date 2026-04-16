---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.365Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Container-native Cloud DNS"
feature_slug: "container-native-cloud-dns"
latest_feature_date: "2021-05-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/cloudnativepg"
keywords:
  - "serve"
  - "provider"
  - "instead"
  - "container"
  - "native"
  - "cluster"
---

# Container-native Cloud DNS

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Cloud DNS can serve as the in-cluster DNS provider instead of kube-dns on GKE clusters running version 1.18 or later.

## Extended Definition

Cloud DNS can serve as the in-cluster DNS provider instead of kube-dns on GKE clusters running version 1.18 or later.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/cloudnativepg](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/cloudnativepg)

## Supporting Pages

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- Additionally, to avoid ambiguity, keys must not conflict with any other metadata keys for the project or be one of the reserved keys: "cluster-location" "cluster-name" "cluster-uid" "configure-sh" "containerd-configure-sh" "enable-os-login" "gci-ensure-gke-docker" "gci-metrics-enabled" "gci-update-strategy" "instance-template" "kube-env" "startup-script" "user-data" "disable-address-manager" "windows-startup-script-ps1" "common-psm1" "k8s-node-setup-psm1" "install-ssh-psm1" "user-profile-psm1" Values are free-form strings, and only have meaning as interpreted by the image running in the instance.
- NetworkConfig JSON representation { "network" : string , "subnetwork" : string , "enableIntraNodeVisibility" : boolean , "defaultSnatStatus" : { object ( DefaultSnatStatus ) } , "enableL4ilbSubsetting" : boolean , "datapathProvider" : enum ( DatapathProvider ) , "privateIpv6GoogleAccess" : enum ( PrivateIPv6GoogleAccess ) , "dnsConfig" : { object ( DNSConfig ) } , "serviceExternalIpsConfig" : { object ( ServiceExternalIPsConfig ) } , "gatewayApiConfig" : { object ( GatewayAPIConfig ) } , "enableMultiNetworking" : boolean , "networkPerformanceConfig" : { object ( ClusterNetworkPerformanceConfig ) } , // Union field enable fqdn network policy can be only one of the following: "enableFqdnNetworkPolicy" : boolean // End of list of possible types for union field enable fqdn network policy . // Union field in transit encryption config can be only one of the following: "inTransitEncryptionConfig" : enum ( InTransitEncryptionConfig ) // End of list of possible types for union field in transit encryption config . // Union field enable cilium clusterwide network policy can be only one of the // following: "enableCiliumClusterwideNetworkPolicy" : boolean // End of list of possible types for union field // enable cilium clusterwide network policy . // Union field default enable private nodes can be only one of the following: "defaultEnablePrivateNodes" : boolean // End of list of possible types for union field default enable private nodes . // Union field disable l4 lb firewall reconciliation can be only one of the // following: "disableL4LbFirewallReconciliation" : boolean // End of list of possible types for union field // disable l4 lb firewall reconciliation . } Fields network string Output only.
- This only tracks whether the addon is enabled or not on the Master, it does not track whether network policy is enabled for the nodes. cloudRunConfig object ( CloudRunConfig ) Configuration for the Cloud Run addon, which allows the user to use a managed Knative service. dnsCacheConfig object ( DnsCacheConfig ) Configuration for NodeLocalDNS, a dns cache running on cluster nodes configConnectorConfig object ( ConfigConnectorConfig ) Configuration for the ConfigConnector add-on, a Kubernetes extension to manage hosted Google Cloud services through the Kubernetes API. gcePersistentDiskCsiDriverConfig object ( GcePersistentDiskCsiDriverConfig ) Configuration for the Compute Engine Persistent Disk CSI driver. gcpFilestoreCsiDriverConfig object ( GcpFilestoreCsiDriverConfig ) Configuration for the Filestore CSI driver. gkeBackupAgentConfig object ( GkeBackupAgentConfig ) Configuration for the Backup for GKE agent addon. gcsFuseCsiDriverConfig object ( GcsFuseCsiDriverConfig ) Configuration for the Cloud Storage Fuse CSI driver. statefulHaConfig object ( StatefulHAConfig ) Optional.
- Unique id for the cluster. loggingConfig object ( LoggingConfig ) Logging configuration for the cluster. monitoringConfig object ( MonitoringConfig ) Monitoring configuration for the cluster. nodePoolAutoConfig object ( NodePoolAutoConfig ) Node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters. podAutoscaling object ( PodAutoscaling ) The config for pod autoscaling. etag string This checksum is computed by the server based on the value of cluster fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding. fleet object ( Fleet ) Fleet information for the cluster. securityPostureConfig object ( SecurityPostureConfig ) Optional.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- Additionally, to avoid ambiguity, keys must not conflict with any other metadata keys for the project or be one of the reserved keys: "cluster-location" "cluster-name" "cluster-uid" "configure-sh" "containerd-configure-sh" "enable-os-login" "gci-ensure-gke-docker" "gci-metrics-enabled" "gci-update-strategy" "instance-template" "kube-env" "startup-script" "user-data" "disable-address-manager" "windows-startup-script-ps1" "common-psm1" "k8s-node-setup-psm1" "install-ssh-psm1" "user-profile-psm1" Values are free-form strings, and only have meaning as interpreted by the image running in the instance.
- NetworkConfig JSON representation { "network" : string , "subnetwork" : string , "enableIntraNodeVisibility" : boolean , "defaultSnatStatus" : { object ( DefaultSnatStatus ) } , "enableL4ilbSubsetting" : boolean , "datapathProvider" : enum ( DatapathProvider ) , "privateIpv6GoogleAccess" : enum ( PrivateIPv6GoogleAccess ) , "dnsConfig" : { object ( DNSConfig ) } , "serviceExternalIpsConfig" : { object ( ServiceExternalIPsConfig ) } , "gatewayApiConfig" : { object ( GatewayAPIConfig ) } , "enableMultiNetworking" : boolean , "networkPerformanceConfig" : { object ( ClusterNetworkPerformanceConfig ) } , // Union field enable fqdn network policy can be only one of the following: "enableFqdnNetworkPolicy" : boolean // End of list of possible types for union field enable fqdn network policy . // Union field in transit encryption config can be only one of the following: "inTransitEncryptionConfig" : enum ( InTransitEncryptionConfig ) // End of list of possible types for union field in transit encryption config . // Union field enable cilium clusterwide network policy can be only one of the // following: "enableCiliumClusterwideNetworkPolicy" : boolean // End of list of possible types for union field // enable cilium clusterwide network policy . // Union field default enable private nodes can be only one of the following: "defaultEnablePrivateNodes" : boolean // End of list of possible types for union field default enable private nodes . // Union field disable l4 lb firewall reconciliation can be only one of the // following: "disableL4LbFirewallReconciliation" : boolean // End of list of possible types for union field // disable l4 lb firewall reconciliation . } Fields network string Output only.
- This only tracks whether the addon is enabled or not on the Master, it does not track whether network policy is enabled for the nodes. cloudRunConfig object ( CloudRunConfig ) Configuration for the Cloud Run addon, which allows the user to use a managed Knative service. dnsCacheConfig object ( DnsCacheConfig ) Configuration for NodeLocalDNS, a dns cache running on cluster nodes configConnectorConfig object ( ConfigConnectorConfig ) Configuration for the ConfigConnector add-on, a Kubernetes extension to manage hosted Google Cloud services through the Kubernetes API. gcePersistentDiskCsiDriverConfig object ( GcePersistentDiskCsiDriverConfig ) Configuration for the Compute Engine Persistent Disk CSI driver. gcpFilestoreCsiDriverConfig object ( GcpFilestoreCsiDriverConfig ) Configuration for the Filestore CSI driver. gkeBackupAgentConfig object ( GkeBackupAgentConfig ) Configuration for the Backup for GKE agent addon. gcsFuseCsiDriverConfig object ( GcsFuseCsiDriverConfig ) Configuration for the Cloud Storage Fuse CSI driver. statefulHaConfig object ( StatefulHAConfig ) Optional.
- Unique id for the cluster. loggingConfig object ( LoggingConfig ) Logging configuration for the cluster. monitoringConfig object ( MonitoringConfig ) Monitoring configuration for the cluster. nodePoolAutoConfig object ( NodePoolAutoConfig ) Node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters. podAutoscaling object ( PodAutoscaling ) The config for pod autoscaling. etag string This checksum is computed by the server based on the value of cluster fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding. fleet object ( Fleet ) Fleet information for the cluster. securityPostureConfig object ( SecurityPostureConfig ) Optional.

### "Deploy PostgreSQL to GKE using CloudNativePG \_|\_ Kubernetes Engine \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/cloudnativepg](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/cloudnativepg)
- Source ID: `site-docs-root-2`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It brings the following features to PostgreSQL deployment: A declarative and Kubernetes-native way to manage and configure and PostgreSQL clusters Backup management using volume snapshots or Cloud Storage In-transit encrypted TLS connection, the ability to use your own certificate authority and integration with Certificate Manager for automated TLS certificate issuance and rotation Rolling updates for minor PostgreSQL releases Use of Kubernetes API server to maintain a PostgreSQL cluster status and failovers for high availability with no additional tools required A built-in Prometheus exporter configuration through user-defined metrics written in SQL Objectives Plan and deploy GKE infrastructure for Postgres Deploy and configure the CloudNativePG Postgres operator with Helm Deploy a PostgreSQL cluster Configure PostgreSQL authentication and observability Deployment architecture PostgreSQL has various deployment options from a standalone database server to a replicated highly-available cluster.
- Connect to the cluster Configure kubectl to communicate with the cluster: gcloud container clusters get-credentials ${ KUBERNETES CLUSTER PREFIX } -cluster --location ${ REGION } Deploy the CloudNativePG operator Deploy the CloudNativePG to your Kubernetes cluster using a Helm chart: Add the CloudNativePG operator Helm Chart repository: helm repo add cnpg https://cloudnative-pg.github.io/charts Deploy the CloudNativePG operator using the Helm command-line tool: helm upgrade --install cnpg \ --namespace cnpg-system \ --create-namespace \ cnpg/cloudnative-pg The output is similar to the following: Release "cnpg" does not exist.
- Deploy Postgres The following manifest describes a PostgreSQL cluster as defined by the CloudNativePG operator's custom resource: apiVersion : postgresql.cnpg.io/v1 kind : Cluster metadata : name : gke-pg-cluster spec : description : "Standard GKE PostgreSQL cluster" imageName : ghcr.io/cloudnative-pg/postgresql:16.2 enableSuperuserAccess : true instances : 3 startDelay : 300 primaryUpdateStrategy : unsupervised postgresql : pg hba : - host all all 10.48.0.0/20 md5 bootstrap : initdb : database : app storage : storageClass : premium-rwo size : 2Gi resources : requests : memory : "1Gi" cpu : "1000m" limits : memory : "1Gi" cpu : "1000m" affinity : enablePodAntiAffinity : true tolerations : - key : cnpg.io/cluster effect : NoSchedule value : gke-pg-cluster operator : Equal additionalPodAffinity : preferredDuringSchedulingIgnoredDuringExecution : - weight : 1 podAffinityTerm : labelSelector : matchExpressions : - key : app.component operator : In values : - "pg-cluster" topologyKey : topology.kubernetes.io/zone monitoring : enablePodMonitor : true This manifest has the following fields: spec.instances : the number of cluster Pods spec.primaryUpdateStrategy : the rolling update strategy: Unsupervised : autonomously updates the primary cluster node after the replica nodes Supervised : manual switchover is required for the primary cluster node spec.postgresql : postgres.conf file parameter overrides, such as pg-hba rules, LDAP, and requirements for sync replicas to be met. spec.storage : storage-related settings, such as storage class, volume size, and write-ahead log settings. spec.bootstrap : parameters of the initial database created in the cluster, user credentials, and database restore options spec.resources : requests and limits for cluster Pods spec.affinity : affinity and anti-affinity rules of the cluster workloads Create a basic Postgres cluster Create a namespace: kubectl create ns pg-ns Create the PostgreSQL cluster using the custom resource: kubectl apply -n pg-ns -f manifests/01-basic-cluster/postgreSQL cluster.yaml This command might take several minutes to complete.
- NAME AGE INSTANCES READY STATUS PRIMARY gke-pg-cluster 2m53s 3 3 Cluster in healthy state gke-pg-cluster-1 Inspect the resources Confirm that GKE created the resources for the cluster: kubectl get cluster,pod,svc,pvc,pdb,secret,cm -n pg-ns The output is similar to the following: NAME AGE INSTANCES READY STATUS PRIMARY cluster.postgresql.cnpg.io/gke-pg-cluster 32m 3 3 Cluster in healthy state gke-pg-cluster-1 NAME READY STATUS RESTARTS AGE pod/gke-pg-cluster-1 1/1 Running 0 31m pod/gke-pg-cluster-2 1/1 Running 0 30m pod/gke-pg-cluster-3 1/1 Running 0 29m NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE service/gke-pg-cluster-r ClusterIP 10.52.11.24 <none> 5432/TCP 32m service/gke-pg-cluster-ro ClusterIP 10.52.9.233 <none> 5432/TCP 32m service/gke-pg-cluster-rw ClusterIP 10.52.1.135 <none> 5432/TCP 32m NAME STATUS VOLUME CAPACITY ACCESS MODES STORAGECLASS AGE persistentvolumeclaim/gke-pg-cluster-1 Bound pvc-bbdd1cdd-bdd9-4e7c-8f8c-1a14a87e5329 2Gi RWO standard 32m persistentvolumeclaim/gke-pg-cluster-2 Bound pvc-e7a8b4df-6a3e-43ce-beb0-b54ec1d24011 2Gi RWO standard 31m persistentvolumeclaim/gke-pg-cluster-3 Bound pvc-dac7f931-6ac5-425f-ac61-0cfc55aae72f 2Gi RWO standard 30m NAME MIN AVAILABLE MAX UNAVAILABLE ALLOWED DISRUPTIONS AGE poddisruptionbudget.policy/gke-pg-cluster 1 N/A 1 32m poddisruptionbudget.policy/gke-pg-cluster-primary 1 N/A 0 32m NAME TYPE DATA AGE secret/gke-pg-cluster-app kubernetes.io/basic-auth 3 32m secret/gke-pg-cluster-ca Opaque 2 32m secret/gke-pg-cluster-replication kubernetes.io/tls 2 32m secret/gke-pg-cluster-server kubernetes.io/tls 2 32m secret/gke-pg-cluster-superuser kubernetes.io/basic-auth 3 32m NAME DATA AGE configmap/cnpg-default-monitoring 1 32m configmap/kube-root-ca.crt 1 135m The operator creates the following resources: A cluster custom resource representing the PostgreSQL cluster which is controlled by the operator PersistentVolumeClaim resources with corresponding Persistent Volumes Secrets with user credentials for accessing the database and replication between Postgres nodes.

