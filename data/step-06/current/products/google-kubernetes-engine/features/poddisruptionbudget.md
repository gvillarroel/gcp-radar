---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.927Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "PodDisruptionBudget"
feature_slug: "poddisruptionbudget"
latest_feature_date: "2021-05-28"
deprecation_date: "2022-09-14"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/upgrading-stateful-workload"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies"
keywords:
  - "poddisruptionbudget"
  - "kubernetes"
  - "limiting"
  - "voluntary"
  - "disruptions"
  - "pods"
  - "deprecated"
  - "2022"
---

# PodDisruptionBudget

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

PodDisruptionBudget is a Kubernetes API for limiting voluntary disruptions to pods; PodDisruptionBudget is a Kubernetes API for limiting voluntary disruptions to pods; deprecated on 2022-09-14.

## Extended Definition

PodDisruptionBudget is a Kubernetes API for limiting voluntary disruptions to pods; PodDisruptionBudget is a Kubernetes API for limiting voluntary disruptions to pods; deprecated on 2022-09-14.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/upgrading-stateful-workload](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/upgrading-stateful-workload)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies)

## Supporting Pages

### "Deploy a Redis cluster on GKE \_|\_ Kubernetes Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/upgrading-stateful-workload](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/upgrading-stateful-workload)
- Source ID: `site-docs-root-2`
- Final score: 95
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To learn about how to configure probes in Kubernetes, see Configure Probes . startupProbe : periodSeconds : 5 timeoutSeconds : 5 successThreshold : 1 failureThreshold : 20 tcpSocket : port : redis livenessProbe : periodSeconds : 5 timeoutSeconds : 5 successThreshold : 1 failureThreshold : 5 exec : command : [ "sh" , "-c" , "/probes/liveness.sh" ] readinessProbe : periodSeconds : 5 timeoutSeconds : 1 successThreshold : 1 failureThreshold : 5 exec : command : [ "sh" , "-c" , "/probes/readiness.sh" ] We strongly recommend that you use Readiness and Liveness probes when upgrading node pools; this ensures that your Pods are ready during an upgrade.
- This is useful for stateful application where there needs to be a quorum for the number of replicas to be available during an upgrade. apiVersion : policy/v1 kind : PodDisruptionBudget metadata : name : redis-pdb spec : minAvailable : 3 selector : matchLabels : app : redis In a PDB definition: app specifies which application this PDB applies to. minAvailable sets the minimum number of Pods to be available during a disruption.
- Note: Once the PodDisruptionBudget is set, GKE will not shut down Pods in your application if the number of pods is equal to or less than a configured limit for up to 60 minutes.
- Set up the Pod Disruption Budget (PDB) Create a Pod Disruption Budget to limit the number of replicated Pods that are down simultaneously during a voluntary disruption.

### "Deploy a stateful MySQL cluster on GKE \_|\_ Kubernetes Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql)
- Source ID: `site-docs-root-2`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Deploy the StatefulSet of MySQL instance Pods. apiVersion : apps/v1 kind : StatefulSet metadata : name : dbc1 labels : app : mysql spec : replicas : 3 selector : matchLabels : app : mysql serviceName : mysql template : metadata : labels : app : mysql spec : topologySpreadConstraints : - maxSkew : 1 topologyKey : "topology.kubernetes.io/zone" whenUnsatisfiable : DoNotSchedule labelSelector : matchLabels : app : mysql affinity : podAntiAffinity : requiredDuringSchedulingIgnoredDuringExecution : - labelSelector : matchExpressions : - key : app operator : In values : - mysql topologyKey : "kubernetes.io/hostname" containers : - name : mysql image : mysql/mysql-server:8.0.28 command : - /bin/bash args : - -c - > - /entrypoint.sh --server-id=$((20 + $(echo $HOSTNAME grep -o '[^-] $') + 1)) --report-host=${HOSTNAME}.mysql.mysql1.svc.cluster.local --binlog-checksum=NONE --enforce-gtid-consistency=ON --gtid-mode=ON --default-authentication-plugin=mysql native password env : - name : MYSQL ROOT PASSWORD valueFrom : secretKeyRef : name : mysql-secret key : password - name : MYSQL ADMIN PASSWORD valueFrom : secretKeyRef : name : mysql-secret key : admin-password - name : MYSQL ROOT HOST value : '%' ports : - name : mysql containerPort : 3306 - name : mysqlx containerPort : 33060 - name : xcom containerPort : 33061 resources : limits : cpu : "500m" ephemeral-storage : "1Gi" memory : "1Gi" requests : cpu : "500m" ephemeral-storage : "1Gi" memory : "1Gi" volumeMounts : - name : mysql mountPath : /var/lib/mysql subPath : mysql readinessProbe : exec : command : - bash - "-c" - mysql -h127.0.0.1 -uroot -p$MYSQL ROOT PASSWORD -e'SELECT 1' initialDelaySeconds : 30 periodSeconds : 2 timeoutSeconds : 1 livenessProbe : exec : command : - bash - "-c" - mysqladmin -uroot -p$MYSQL ROOT PASSWORD ping initialDelaySeconds : 30 periodSeconds : 10 timeoutSeconds : 5 updateStrategy : rollingUpdate : partition : 0 type : RollingUpdate volumeClaimTemplates : - metadata : name : mysql labels : app : mysql spec : storageClassName : fast-storageclass volumeMode : Filesystem accessModes : - ReadWriteOnce resources : requests : storage : 10Gi kubectl apply -n mysql1 -f c1-mysql.yaml This command deploys the StatefulSet consisting of three replicas.
- Verify the router configuration. clusterset = dba.getClusterSet () clusterset.listRouters () The output is similar to the following: { "domainName": "clusterset", "routers": { "mysql-router-7cd8585fbc-74pkm::": { "hostname": "mysql-router-7cd8585fbc-74pkm", "lastCheckIn": "2022-09-22 23:26:26", "roPort": 6447, "roXPort": 6449, "rwPort": 6446, "rwXPort": 6448, "targetCluster": null, "version": "8.0.27" }, "mysql-router-7cd8585fbc-824d4::": { ... }, "mysql-router-7cd8585fbc-v2qxz::": { ... } } } Exit MySQL Shell. \q Run this script to inspect the placement of the MySQL Router Pods. bash ../scripts/inspect pod node.sh mysql1 sort The script shows the node and Cloud Zone placement of the all of the Pods in the mysql1 namespace, where the output is similar to the following: gke-gkemulti-west-5-default-pool-1ac6e8b5-0h9v us-west1-c mysql-router-6654f985f5-df97q gke-gkemulti-west-5-default-pool-1ac6e8b5-ddjx us-west1-c dbc1-1 gke-gkemulti-west-5-default-pool-1f5baa66-bf8t us-west1-a dbc1-2 gke-gkemulti-west-5-default-pool-1f5baa66-kt03 us-west1-a mysql-router-6654f985f5-qlfj9 gke-gkemulti-west-5-default-pool-4bcaca65-2l6s us-west1-b mysql-router-6654f985f5-5967d gke-gkemulti-west-5-default-pool-4bcaca65-jch0 us-west1-b dbc1-0 You can observe that the MySQL Router Pods are distributed equally across the zones; that is, not placed on the same node as a MySQL Pod, or on the same node as another MySQL Router Pod.
- A Deployment is a Kubernetes API object that lets you run multiple replicas of Pods that are distributed among the nodes in a cluster.. apiVersion : apps/v1 kind : Deployment metadata : name : prepare-three-zone-ha labels : app : prepare-three-zone-ha spec : replicas : 3 selector : matchLabels : app : prepare-three-zone-ha template : metadata : labels : app : prepare-three-zone-ha spec : affinity : Tell Kubernetes to avoid scheduling a replica in a zone where there is already a replica with the label "app: prepare-three-zone-ha" podAntiAffinity : requiredDuringSchedulingIgnoredDuringExecution : - labelSelector : matchExpressions : - key : app operator : In values : - prepare-three-zone-ha topologyKey : "topology.kubernetes.io/zone" containers : - name : prepare-three-zone-ha image : busybox:latest command : - "/bin/sh" - "-c" - "while true; do sleep 3600; done" resources : limits : cpu : "500m" ephemeral-storage : "10Mi" memory : "0.5Gi" requests : cpu : "500m" ephemeral-storage : "10Mi" memory : "0.5Gi" kubectl apply -f prepare-for-ha.yaml By default, Autopilot provisions resources in two zones.
- Verify that the PDB was created. kubectl get poddisruptionbudgets -n mysql1 Get the list of stateful sets. kubectl get statefulsets -n mysql1 Get the list of running Pods using the app label. kubectl get pods --selector = app = mysql -n mysql1 Update the MySQL image in the stateful set. kubectl -n mysql1 \ set image statefulset/dbc1 \ mysql = mysql/mysql-server:8.0.30 The output is similar to the following: statefulset.apps/mysql image updated Check the status of the terminating Pods and new Pods. kubectl get pods --selector = app = mysql -n mysql1 Validate the MySQL binary upgrade During the upgrade, you can verify the status of the rollout, the new Pods, and the existing Service.

### "Node upgrade strategies \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies)
- Source ID: `site-docs-reference-2`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- During this time, GKE does the following: Cluster autoscaler scales down underutilized blue pool nodes, unless those nodes have Pods that are running the "cluster-autoscaler.kubernetes.io/safe-to-evict": "false" annotation.
- Pod configuration To ensure that Pods are not evicted during the pause before draining the blue pool, add the "cluster-autoscaler.kubernetes.io/safe-to-evict": "false" annotation to those Pods.
- For Pods that have PodDisruptionBudget violations or long terminationGracePeriodSeconds during the draining, they will be deleted in the Delete blue pool phase when the node is deleted.
- When Kubernetes drains a nodes, eviction requests are sent to all the Pods running on the node.

