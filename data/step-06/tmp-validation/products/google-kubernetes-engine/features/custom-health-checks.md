---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.423Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Custom health checks"
feature_slug: "custom-health-checks"
latest_feature_date: "2020-07-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes"
keywords:
  - "customize"
  - "declaratively"
  - "checks"
  - "health"
  - "custom"
  - "load"
---

# Custom health checks

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Custom health checks let you declaratively customize load balancer health check parameters.

## Extended Definition

Custom health checks let you declaratively customize load balancer health check parameters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)

## Supporting Pages

### "Set up an external Application Load Balancer with Ingress \_|\_ GKE networking\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- For more information about path limitations and pattern matching, see the URL Maps documentation . (Optional) Monitoring the availability and latency of your service Google Cloud Uptime checks perform blackbox monitoring of applications from the viewpoint of the user, determining latency and availability from multiple external IPs to the IP address of the load balancer.
- For each backend service, GKE creates a Google Cloud health check, based on the readiness probe settings of the workload referenced by the corresponding GKE Service .
- In comparison, Google Cloud health checks perform an internal check against the Pod IPs, determining availability at the instance level.
- If you want to check a different path or to expect a different response code, you can use a custom health check path .

### "About custom ComputeClasses \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- Source ID: `site-docs-reference-2`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- The following example defines a ComputeClass for a multi-host TPU collection optimized for high-availability inference workloads. apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : multi-host-inference spec : nodePoolGroup : name : my-inference-collection nodePoolConfig : workloadType : HIGH AVAILABILITY nodePoolAutoCreation : enabled : true priorities : - tpu : type : tpu-v6e-slice topology : 2x4 For more information, see the following pages: About TPUs in GKE Plan TPUs in GKE Request ComputeClasses in workloads To use a custom ComputeClass, your Pod must explicitly request that ComputeClass by using a nodeSelector in the Pod specification.
- For example, the following manifest requests the cost-optimized ComputeClass: apiVersion : apps/v1 kind : Deployment metadata : name : custom-workload spec : replicas : 2 selector : matchLabels : app : custom-workload template : metadata : labels : app : custom-workload spec : nodeSelector : cloud.google.com/compute-class : cost-optimized containers : - name : test image : registry.k8s.io/pause resources : requests : cpu : 1.5 memory : "4Gi" Node selectors for system node labels GKE adds system labels to nodes to identify nodes by criteria like the machine type, attached hardware accelerators, or the boot disk type.
- After you deploy a TPU custom ComputeClass to your cluster, select that custom ComputeClass in your workload: Autopilot workloads : see the "Provision TPUs by using custom ComputeClasses" section in Deploy TPU workloads on GKE Autopilot Standard workloads : see the "Provision TPUs by using custom ComputeClasses" section in Deploy TPU workloads on GKE Standard .
- Default custom ComputeClasses : Set a custom ComputeClass as the default for an entire cluster or for specific Kubernetes namespaces, so that workloads run on optimized hardware even if they don't request a specific ComputeClass.

### "Deploy a stateful MySQL cluster on GKE \_|\_ Kubernetes Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql)
- Source ID: `site-docs-root-2`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- New customers also get $300 in free credits to run, test, and deploy workloads.
- Deploy the StatefulSet of MySQL instance Pods. apiVersion : apps/v1 kind : StatefulSet metadata : name : dbc1 labels : app : mysql spec : replicas : 3 selector : matchLabels : app : mysql serviceName : mysql template : metadata : labels : app : mysql spec : topologySpreadConstraints : - maxSkew : 1 topologyKey : "topology.kubernetes.io/zone" whenUnsatisfiable : DoNotSchedule labelSelector : matchLabels : app : mysql affinity : podAntiAffinity : requiredDuringSchedulingIgnoredDuringExecution : - labelSelector : matchExpressions : - key : app operator : In values : - mysql topologyKey : "kubernetes.io/hostname" containers : - name : mysql image : mysql/mysql-server:8.0.28 command : - /bin/bash args : - -c - > - /entrypoint.sh --server-id=$((20 + $(echo $HOSTNAME grep -o '[^-] $') + 1)) --report-host=${HOSTNAME}.mysql.mysql1.svc.cluster.local --binlog-checksum=NONE --enforce-gtid-consistency=ON --gtid-mode=ON --default-authentication-plugin=mysql native password env : - name : MYSQL ROOT PASSWORD valueFrom : secretKeyRef : name : mysql-secret key : password - name : MYSQL ADMIN PASSWORD valueFrom : secretKeyRef : name : mysql-secret key : admin-password - name : MYSQL ROOT HOST value : '%' ports : - name : mysql containerPort : 3306 - name : mysqlx containerPort : 33060 - name : xcom containerPort : 33061 resources : limits : cpu : "500m" ephemeral-storage : "1Gi" memory : "1Gi" requests : cpu : "500m" ephemeral-storage : "1Gi" memory : "1Gi" volumeMounts : - name : mysql mountPath : /var/lib/mysql subPath : mysql readinessProbe : exec : command : - bash - "-c" - mysql -h127.0.0.1 -uroot -p$MYSQL ROOT PASSWORD -e'SELECT 1' initialDelaySeconds : 30 periodSeconds : 2 timeoutSeconds : 1 livenessProbe : exec : command : - bash - "-c" - mysqladmin -uroot -p$MYSQL ROOT PASSWORD ping initialDelaySeconds : 30 periodSeconds : 10 timeoutSeconds : 5 updateStrategy : rollingUpdate : partition : 0 type : RollingUpdate volumeClaimTemplates : - metadata : name : mysql labels : app : mysql spec : storageClassName : fast-storageclass volumeMode : Filesystem accessModes : - ReadWriteOnce resources : requests : storage : 10Gi kubectl apply -n mysql1 -f c1-mysql.yaml This command deploys the StatefulSet consisting of three replicas.
- Add one of the new instances to the primary cluster. cluster = dba.getCluster () cluster.addInstance ( 'icadmin@dbc1-3.mysql' , { password: os.getenv ( "MYSQL ROOT PASSWORD" ) , recoveryMethod: 'clone' }) ; Add a second new instance to the primary cluster. cluster.addInstance ( 'icadmin@dbc1-4.mysql' , { password: os.getenv ( "MYSQL ROOT PASSWORD" ) , recoveryMethod: 'clone' }) ; Obtain the ClusterSet status, which also includes the Cluster status. clusterset = dba.getClusterSet () clusterset.status ({ extended: 1 }) The output is similar to the following: "domainName": "clusterset", "globalPrimaryInstance": "dbc1-0.mysql:3306", "metadataServer": "dbc1-0.mysql:3306", "primaryCluster": "mycluster", "status": "HEALTHY", "statusText": "All Clusters available." Exit MySQL Shell. \q Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.
- Use ClusterSet.createReplicaCluster() to add Replica Clusters to it. <ClusterSet:clusterset> Check the status of your MySQL InnoDB ClusterSet. clusterset.status () The output is similar to the following: { "clusters": { "mycluster": { "clusterRole": "PRIMARY", "globalStatus": "OK", "primary": "dbc1-0.mysql:3306" } }, "domainName": "clusterset", "globalPrimaryInstance": "dbc1-0.mysql:3306", "primaryCluster": "mycluster", "status": "HEALTHY", "statusText": "All Clusters available." } Optionally, you can call clusterset.status({extended:1}) to obtain additional status details, including information about the cluster.

