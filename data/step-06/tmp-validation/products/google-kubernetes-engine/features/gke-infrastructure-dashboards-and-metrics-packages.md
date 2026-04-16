---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.238Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE Infrastructure Dashboards and Metrics Packages"
feature_slug: "gke-infrastructure-dashboards-and-metrics-packages"
latest_feature_date: "2023-11-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/enterprise-redis"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/deploy-weaviate"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql"
keywords:
  - "predefined"
  - "packages"
  - "infrastructure"
  - "dashboards"
  - "export"
  - "metrics"
---

# GKE Infrastructure Dashboards and Metrics Packages

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE can export predefined managed kube-state-metrics data for workloads state and persistent storage to Cloud Monitoring and the Observability tab.

## Extended Definition

GKE can export predefined managed kube-state-metrics data for workloads state and persistent storage to Cloud Monitoring and the Observability tab.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/enterprise-redis](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/enterprise-redis)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/deploy-weaviate](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/deploy-weaviate)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql)

## Supporting Pages

### "Deploy Redis to GKE using Redis Enterprise \_|\_ Kubernetes Engine \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/enterprise-redis](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/enterprise-redis)
- Source ID: `site-docs-root-2`
- Final score: 120
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following diagram shows a private regional Standard GKE cluster deployed across three different zones: To deploy this infrastructure, run the following commands from the Cloud Shell: cd terraform/gke-standard export GOOGLE OAUTH ACCESS TOKEN = $( gcloud auth print-access-token ) terraform init terraform apply -var project id = ${ PROJECT ID } \ -var region = ${ REGION } \ -var cluster prefix = ${ KUBERNETES CLUSTER PREFIX } When prompted, type yes .
- Verify the exported metrics To verify the metrics, create new database and examine the metrics.
- Check the status of the resources in your Redis infrastructure in the rec-ns namespace:. kubectl get pod,deploy,svc,rec,statefulset,cm,secrets -n rec-ns The output is similar to the following: NAME READY STATUS RESTARTS AGE pod/gke-rec-0 2/2 Running 0 172m pod/gke-rec-1 2/2 Running 0 171m pod/gke-rec-2 2/2 Running 0 168m pod/gke-rec-services-rigger-5f885f59dc-gc79g 1/1 Running 0 172m pod/redis-enterprise-operator-6668ccd8dc-kx29z 2/2 Running 2 (5m58s ago) 5h NAME READY UP-TO-DATE AVAILABLE AGE deployment.apps/gke-rec-services-rigger 1/1 1 1 172m deployment.apps/redis-enterprise-operator 1/1 1 1 5h NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE service/admission ClusterIP 10.52.11.13 <none> 443/TCP 5h service/gke-rec ClusterIP 10.52.5.44 <none> 9443/TCP,8001/TCP 172m service/gke-rec-prom ClusterIP None <none> 8070/TCP 172m service/gke-rec-ui ClusterIP 10.52.3.29 <none> 8443/TCP 172m NAME NODES VERSION STATE SPEC STATUS LICENSE STATE SHARDS LIMIT LICENSE EXPIRATION DATE AGE redisenterprisecluster.app.redislabs.com/gke-rec 3 7.2.4-52 Running Valid Valid 4 2023-10-05T11:07:20Z 172m NAME READY AGE statefulset.apps/gke-rec 3/3 172m NAME DATA AGE configmap/gke-rec-bulletin-board 1 172m configmap/gke-rec-health-check 5 172m configmap/kube-root-ca.crt 1 5h2m configmap/operator-environment-config 1 5h NAME TYPE DATA AGE secret/admission-tls Opaque 2 5h secret/gke-rec Opaque 2 172m Deploy Redis Enterprise Databases Create Redis Enterprise Databases in the application namespaces: kubectl apply -f manifests/01-basic-cluster/a-rdb.yaml -n application Check the REDB status: kubectl get redb --all-namespaces The output is similar to the following: NAMESPACE NAME VERSION PORT CLUSTER SHARDS STATUS SPEC STATUS AGE application app-db 7.2.0 12999 gke-rec 1 active Valid 15s Verify that the Services for each REDB are running: kubectl get svc --all-namespaces The output is similar to the following: NAMESPACE NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE application app-db ExternalName <none> redis-12999.rec-ns.svc.cluster.local 12999/TCP 72m Verify that the Secret was created: kubectl get secrets -n application The output is similar to the following: NAME TYPE DATA AGE redb-app-db Opaque 3 96m Authenticate using passwords You can connect to REDB using a Pod with redis-cli in the application namespace.
- Objectives Plan and deploy GKE infrastructure for Redis Deploy the Redis Enterprise Operator Deploy a Redis Enterprise Cluster Create a Redis Enterprise Database Demonstrate database authentication Benefits Redis Enterprise offers the following benefits: A Kubernetes-native way to manage Redis Enterprise Cluster (REC) lifecycle and Redis Enterprise Databases (REDBs) Resource utilization by co-locating multiple Redis databases within a single Kubernetes Pod Reduced operational overhead by handling routine maintenance tasks such as patching and upgrades Support for Redis software images from private container registries, such as Artifact Registry, to enhance the security and availability of containers Support for Google Cloud Managed Service for Prometheus for database monitoring and observability Enhanced security features such as encryption, access controls, and integration with Kubernetes RBAC (Role-Based Access Control) Advanced authentication methods including LDAP and third party credential managers like Vault Ability to configure scheduled backups Deployment architecture Redis Enterprise manages the following Kubernetes resources: The Enterprise cluster and its configuration in a StatefulSet.

### "Deploy a highly-available PostgreSQL database on GKE \_|\_ Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql)
- Source ID: `site-docs-root-2`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- To perform a backup and restore, follow these steps: Verify the status of ProtectedApplication on cluster-db1 . kubectl get ProtectedApplication -A The output looks similar to the following: NAMESPACE NAME READY TO BACKUP postgresql postgresql-ha true Create a backup plan for the ProtectedApplication. export NAMESPACE = postgresql export PROTECTED APP = $( kubectl get ProtectedApplication -n $NAMESPACE grep -v 'NAME' awk '{ print $1 }' ) gcloud beta container backup-restore backup-plans create $BACKUP PLAN NAME \ --project = $PROJECT ID \ --location = $DR REGION \ --cluster = projects/ $PROJECT ID /locations/ $REGION /clusters/ $SOURCE CLUSTER \ --selected-applications = $NAMESPACE / $PROTECTED APP \ --include-secrets \ --include-volume-data \ --cron-schedule = "0 3 " \ --backup-retain-days = 7 \ --backup-delete-lock-days = 0 Manually create a backup. gcloud beta container backup-restore backups create $BACKUP NAME \ --project = $PROJECT ID \ --location = $DR REGION \ --backup-plan = $BACKUP PLAN NAME \ --wait-for-completion Set up a restore plan. gcloud beta container backup-restore restore-plans create $RESTORE PLAN NAME \ --project = $PROJECT ID \ --location = $DR REGION \ --backup-plan = projects/ $PROJECT ID /locations/ $DR REGION /backupPlans/ $BACKUP PLAN NAME \ --cluster = projects/ $PROJECT ID /locations/ $DR REGION /clusters/ $TARGET CLUSTER \ --cluster-resource-conflict-policy = use-existing-version \ --namespaced-resource-restore-mode = delete-and-restore \ --volume-data-restore-policy = restore-volume-data-from-backup \ --selected-applications = $NAMESPACE / $PROTECTED APP \ --cluster-resource-scope-selected-group-kinds = "storage.k8s.io/StorageClass" , "scheduling.k8s.io/PriorityClass" Restore from the backup. gcloud beta container backup-restore restores create $RESTORE NAME \ --project = $PROJECT ID \ --location = $DR REGION \ --restore-plan = $RESTORE PLAN NAME \ --backup = projects/ $PROJECT ID /locations/ $DR REGION /backupPlans/ $BACKUP PLAN NAME /backups/ $BACKUP NAME \ --wait-for-completion Verify that your cluster is restored To verify that the restored cluster has all the expected Pods, PersistentVolume, and StorageClass resources, follow these steps: Configure kubectl command line access to the backup cluster cluster-db2 . gcloud container clusters get-credentials $TARGET CLUSTER --location $DR REGION --project $PROJECT ID Verify that the StatefulSet is ready with 3/3 Pods. kubectl get all -n $NAMESPACE The output is similar to the following: NAME READY STATUS RESTARTS AGE pod/postgresql-postgresql-ha-pgpool-778798b5bd-k2q4b 1/1 Running 0 4m49s pod/postgresql-postgresql-ha-postgresql-0 2/2 Running 2 (4m13s ago) 4m49s pod/postgresql-postgresql-ha-postgresql-1 2/2 Running 0 4m49s pod/postgresql-postgresql-ha-postgresql-2 2/2 Running 0 4m49s NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE service/postgresql-postgresql-ha-pgpool ClusterIP 192.168.241.46 <none> 5432/TCP 4m49s service/postgresql-postgresql-ha-postgresql ClusterIP 192.168.220.20 <none> 5432/TCP 4m49s service/postgresql-postgresql-ha-postgresql-headless ClusterIP None <none> 5432/TCP 4m49s service/postgresql-postgresql-ha-postgresql-metrics ClusterIP 192.168.226.235 <none> 9187/TCP 4m49s NAME READY UP-TO-DATE AVAILABLE AGE deployment.apps/postgresql-postgresql-ha-pgpool 1/1 1 1 4m49s NAME DESIRED CURRENT READY AGE replicaset.apps/postgresql-postgresql-ha-pgpool-778798b5bd 1 1 1 4m49s NAME READY AGE statefulset.apps/postgresql-postgresql-ha-postgresql 3/3 4m49s Verify all Pods in the postgres namespace are running. kubectl get pods -n $NAMESPACE The output is similar to the following: postgresql-postgresql-ha-pgpool-569d7b8dfc-2f9zx 1/1 Running 0 7m56s postgresql-postgresql-ha-postgresql-0 2/2 Running 0 7m56s postgresql-postgresql-ha-postgresql-1 2/2 Running 0 7m56s postgresql-postgresql-ha-postgresql-2 2/2 Running 0 7m56s Verify the PersistentVolumes and StorageClass.
- Configure Docker access. gcloud auth configure-docker us-docker.pkg.dev Populate Artifact Registry with the required PostgreSQL Docker images. ./scripts/gcr.sh bitnami/postgresql-repmgr 15 .1.0-debian-11-r0 ./scripts/gcr.sh bitnami/postgres-exporter 0 .11.1-debian-11-r27 ./scripts/gcr.sh bitnami/pgpool 4 .3.3-debian-11-r28 The script pushes the following Bitnami images to the Artifact Registry for Helm to install: postgresql-repmgr : This PostgreSQL cluster solution includes the PostgreSQL replication manager (repmgr) , an open-source tool for managing replication and failover on PostgreSQL clusters. postgres-exporter : PostgreSQL Exporter gathers PostgreSQL metrics for Prometheus consumption. pgpool : Pgpool-II is the PostgreSQL proxy.
- The Google Cloud console provides a few ways to create and save dashboard configuration: Creation and Export : You can create dashboards directly in Google Cloud console, then export and store them in a code repository.
- The following dashboards appear: PostgreSQL Overview : Displays metrics from the PostgreSQL application, including database uptime, database size, and transaction latency.

### "Deploy a Weaviate vector database on GKE \_|\_ Kubernetes Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/deploy-weaviate](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/deploy-weaviate)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- To export and view the metrics, follow these steps: Create the PodMonitoring resource to scrape metrics by labelSelector : kubectl apply -n weaviate -f manifests/03-prometheus-metrics/pod-monitoring.yaml The pod-monitoring.yaml manifest describes the PodMonitoring resource: apiVersion : monitoring.googleapis.com/v1 kind : PodMonitoring metadata : name : weaviate spec : selector : matchLabels : app : weaviate endpoints : - port : 2112 interval : 30s path : /metrics To import a custom Cloud Monitoring dashboard with the configurations defined in dashboard.json : gcloud --project " ${ PROJECT ID } " monitoring dashboards create --config-from-file monitoring/dashboard.json After the command runs successfully, go to the Cloud Monitoring Dashboards : Go to Dashboards overview From the list of dashboards, open the Weaviate Overview dashboard.
- To deploy the cluster infrastructure, run the following commands in the Cloud Shell: export GOOGLE OAUTH ACCESS TOKEN = $( gcloud auth print-access-token ) terraform -chdir = terraform/gke-autopilot init terraform -chdir = terraform/gke-autopilot apply \ -var project id = ${ PROJECT ID } \ -var region = ${ REGION } \ -var cluster prefix = ${ KUBERNETES CLUSTER PREFIX } GKE replaces the following variables at runtime: GOOGLE OAUTH ACCESS TOKEN uses the gcloud auth print-access-token command to retrieve an access token that authenticates interactions with various Google Cloud APIs PROJECT ID , REGION , and KUBERNETES CLUSTER PREFIX are the environment variables defined in the Set up your environment section and assigned to the new relevant variables for the Autopilot cluster you are creating.
- To deploy the cluster infrastructure, run the following commands in the Cloud Shell: export GOOGLE OAUTH ACCESS TOKEN = $( gcloud auth print-access-token ) terraform -chdir = terraform/gke-standard init terraform -chdir = terraform/gke-standard apply \ -var project id = ${ PROJECT ID } \ -var region = ${ REGION } \ -var cluster prefix = ${ KUBERNETES CLUSTER PREFIX } GKE replaces the following variables at runtime: GOOGLE OAUTH ACCESS TOKEN uses the gcloud auth print-access-token command to retrieve an access token that authenticates interactions with various Google Cloud APIs.
- Delete individual resources Set environment variables. export PROJECT ID = ${ PROJECT ID } export KUBERNETES CLUSTER PREFIX = weaviate export REGION = us-central1 Run the terraform destroy command: export GOOGLE OAUTH ACCESS TOKEN = $( gcloud auth print-access-token ) terraform -chdir = terraform/ FOLDER destroy \ -var project id = ${ PROJECT ID } \ -var region = ${ REGION } \ -var cluster prefix = ${ KUBERNETES CLUSTER PREFIX } Replace FOLDER with either gke-autopilot or gke-standard , depending on the type of GKE cluster you created .

