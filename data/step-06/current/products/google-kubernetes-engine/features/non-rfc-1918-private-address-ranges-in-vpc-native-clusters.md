---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.969Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Non-RFC 1918 private address ranges in VPC-native clusters"
feature_slug: "non-rfc-1918-private-address-ranges-in-vpc-native-clusters"
latest_feature_date: "2020-05-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/cloudnativepg"
keywords:
  - "non"
  - "rfc"
  - "1918"
  - "private"
  - "address"
  - "ranges"
  - "vpc"
  - "native"
---

# Non-RFC 1918 private address ranges in VPC-native clusters

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Supports the use of non-RFC 1918 private address ranges in VPC-native clusters.

## Extended Definition

Supports the use of non-RFC 1918 private address ranges in VPC-native clusters.

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
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- If enabled, all nodes are given only RFC 1918 private addresses and communicate with the master via private networking.
- Union field default enable private nodes . default enable private nodes can be only one of the following: defaultEnablePrivateNodes boolean Controls whether by default nodes have private IP addresses only.
- Union field enable private nodes . enable private nodes can be only one of the following: enablePrivateNodes boolean Whether nodes have internal IP addresses only.
- This range must not overlap with any other ranges in use within the cluster's network. privateEndpoint (deprecated) string This item is deprecated!

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- If enabled, all nodes are given only RFC 1918 private addresses and communicate with the master via private networking.
- Union field default enable private nodes . default enable private nodes can be only one of the following: defaultEnablePrivateNodes boolean Controls whether by default nodes have private IP addresses only.
- Union field enable private nodes . enable private nodes can be only one of the following: enablePrivateNodes boolean Whether nodes have internal IP addresses only.
- This range must not overlap with any other ranges in use within the cluster's network. privateEndpoint (deprecated) string This item is deprecated!

### "Deploy PostgreSQL to GKE using CloudNativePG \_|\_ Kubernetes Engine \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/cloudnativepg](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/cloudnativepg)
- Source ID: `site-docs-root-2`
- Final score: 114
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This Service permits querying data but restricts any write operations: psql postgresql:// $CLIENTUSERNAME : $CLIENTPASSWORD @gke-pg-cluster-ro.pg-ns/app Attempt to insert new data: INSERT INTO travel agency clients ( client, address, phone ) VALUES ( 'John' , 'Paris' , '+55555' ) RETURNING ; The output is similar to the following: ERROR: cannot execute INSERT in a read-only transaction Attempt to read data: SELECT FROM travel agency clients ; The output is similar to the following: client address phone --------+---------+--------- Tom Warsaw +55555 (1 row) Logout of the current database session: exit Exit the Pod shell: exit Understand how Prometheus collects metrics for your Postgres cluster The following diagram shows how Prometheus metrics collecting works: In the diagram, a GKE private cluster contains: A Postgres Pod that gathers metrics on path / and port 9187 Prometheus-based collectors that process the metrics from the Postgres Pod A PodMonitoring resource that sends metrics to Cloud Monitoring To enable metrics to be collected from your Pods, perform the following steps: Create the PodMonitoring resource: kubectl apply -f manifests/03-observability/pod-monitoring.yaml -n pg-ns In the Google Cloud console, go to the Metrics explorer page: Go to Metrics explorer The dashboard shows a non-zero metrics ingestion rate.
- Clone the GitHub repository: git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples Change to the working directory: cd kubernetes-engine-samples/databases/postgresql-cloudnativepg Create your cluster infrastructure In this section, you run a Terraform script to create a private, highly-available, regional GKE cluster.
- Deploy Postgres The following manifest describes a PostgreSQL cluster as defined by the CloudNativePG operator's custom resource: apiVersion : postgresql.cnpg.io/v1 kind : Cluster metadata : name : gke-pg-cluster spec : description : "Standard GKE PostgreSQL cluster" imageName : ghcr.io/cloudnative-pg/postgresql:16.2 enableSuperuserAccess : true instances : 3 startDelay : 300 primaryUpdateStrategy : unsupervised postgresql : pg hba : - host all all 10.48.0.0/20 md5 bootstrap : initdb : database : app storage : storageClass : premium-rwo size : 2Gi resources : requests : memory : "1Gi" cpu : "1000m" limits : memory : "1Gi" cpu : "1000m" affinity : enablePodAntiAffinity : true tolerations : - key : cnpg.io/cluster effect : NoSchedule value : gke-pg-cluster operator : Equal additionalPodAffinity : preferredDuringSchedulingIgnoredDuringExecution : - weight : 1 podAffinityTerm : labelSelector : matchExpressions : - key : app.component operator : In values : - "pg-cluster" topologyKey : topology.kubernetes.io/zone monitoring : enablePodMonitor : true This manifest has the following fields: spec.instances : the number of cluster Pods spec.primaryUpdateStrategy : the rolling update strategy: Unsupervised : autonomously updates the primary cluster node after the replica nodes Supervised : manual switchover is required for the primary cluster node spec.postgresql : postgres.conf file parameter overrides, such as pg-hba rules, LDAP, and requirements for sync replicas to be met. spec.storage : storage-related settings, such as storage class, volume size, and write-ahead log settings. spec.bootstrap : parameters of the initial database created in the cluster, user credentials, and database restore options spec.resources : requests and limits for cluster Pods spec.affinity : affinity and anti-affinity rules of the cluster workloads Create a basic Postgres cluster Create a namespace: kubectl create ns pg-ns Create the PostgreSQL cluster using the custom resource: kubectl apply -n pg-ns -f manifests/01-basic-cluster/postgreSQL cluster.yaml This command might take several minutes to complete.
- Run the client Pod to interact with your Postgres cluster: kubectl apply -n pg-ns -f manifests/02-auth/pg-client.yaml Run an exec command on the pg-client Pod and login to the gke-pg-cluster-rw Service: kubectl wait --for = condition = Ready -n pg-ns pod/pg-client --timeout = 300s kubectl exec -n pg-ns -i -t pg-client -- /bin/sh Login to the database using the gke-pg-cluster-rw Service to establish a connection with Read-Write privileges: psql postgresql:// $CLIENTUSERNAME : $CLIENTPASSWORD @gke-pg-cluster-rw.pg-ns/app The terminal starts with your database name: app=> Create a table: CREATE TABLE travel agency clients ( client VARCHAR ( 50 ) UNIQUE NOT NULL, address VARCHAR ( 50 ) UNIQUE NOT NULL, phone VARCHAR ( 50 ) UNIQUE NOT NULL ) ; Insert data into the table: INSERT INTO travel agency clients ( client, address, phone ) VALUES ( 'Tom' , 'Warsaw' , '+55555' ) RETURNING ; View the data that you created: SELECT FROM travel agency clients ; The output is similar to the following: client address phone --------+---------+--------- Tom Warsaw +55555 (1 row) Logout of the current database session: exit Login to the database using the gke-pg-cluster-ro Service to verify read-only access.

