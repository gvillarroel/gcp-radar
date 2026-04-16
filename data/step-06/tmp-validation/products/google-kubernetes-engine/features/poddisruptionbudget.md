---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.373Z"
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
  - "limiting"
  - "disruptions"
  - "poddisruptionbudget"
  - "voluntary"
  - "deprecated"
  - "2022"
  - "pods"
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
- This is useful for stateful application where there needs to be a quorum for the number of replicas to be available during an upgrade. apiVersion : policy/v1 kind : PodDisruptionBudget metadata : name : redis-pdb spec : minAvailable : 3 selector : matchLabels : app : redis In a PDB definition: app specifies which application this PDB applies to. minAvailable sets the minimum number of Pods to be available during a disruption.
- Note: Once the PodDisruptionBudget is set, GKE will not shut down Pods in your application if the number of pods is equal to or less than a configured limit for up to 60 minutes.
- Set up the Pod Disruption Budget (PDB) Create a Pod Disruption Budget to limit the number of replicated Pods that are down simultaneously during a voluntary disruption.
- Deploy the Service: kubectl apply -f redis-service.yaml Wait approximately two minutes and verify all the Pods are running by using the following command: kubectl get pods You should see output similar to the following example: NAME READY STATUS RESTARTS AGE redis-0 1/1 Running 0 2m29s redis-1 1/1 Running 0 2m8s redis-2 1/1 Running 0 107s redis-3 1/1 Running 0 85s redis-4 1/1 Running 0 54s redis-5 1/1 Running 0 23s Verify the persistent volumes were created by running the following command: kubectl get pv You should see output similar to the following example: NAME CAPACITY ACCESS MODES RECLAIM POLICY STATUS CLAIM STORAGECLASS REASON AGE pvc- HASH 1Gi RWO Delete Bound default/data-redis-5 standard 75s pvc- HASH 1Gi RWO Delete Bound default/data-redis-1 standard 2m59s pvc- HASH 1Gi RWO Delete Bound default/data-redis-3 standard 2m16s pvc- HASH 1Gi RWO Delete Bound default/data-redis-2 standard 2m38s pvc- HASH 1Gi RWO Delete Bound default/data-redis-0 standard 3m20s pvc- HASH 1Gi RWO Delete Bound default/data-redis-4 standard 104s In this output, HASH represents a hash which is attached to each persistent volume name.

### "Deploy a stateful MySQL cluster on GKE \_|\_ Kubernetes Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql)
- Source ID: `site-docs-root-2`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Verify the router configuration. clusterset = dba.getClusterSet () clusterset.listRouters () The output is similar to the following: { "domainName": "clusterset", "routers": { "mysql-router-7cd8585fbc-74pkm::": { "hostname": "mysql-router-7cd8585fbc-74pkm", "lastCheckIn": "2022-09-22 23:26:26", "roPort": 6447, "roXPort": 6449, "rwPort": 6446, "rwXPort": 6448, "targetCluster": null, "version": "8.0.27" }, "mysql-router-7cd8585fbc-824d4::": { ... }, "mysql-router-7cd8585fbc-v2qxz::": { ... } } } Exit MySQL Shell. \q Run this script to inspect the placement of the MySQL Router Pods. bash ../scripts/inspect pod node.sh mysql1 sort The script shows the node and Cloud Zone placement of the all of the Pods in the mysql1 namespace, where the output is similar to the following: gke-gkemulti-west-5-default-pool-1ac6e8b5-0h9v us-west1-c mysql-router-6654f985f5-df97q gke-gkemulti-west-5-default-pool-1ac6e8b5-ddjx us-west1-c dbc1-1 gke-gkemulti-west-5-default-pool-1f5baa66-bf8t us-west1-a dbc1-2 gke-gkemulti-west-5-default-pool-1f5baa66-kt03 us-west1-a mysql-router-6654f985f5-qlfj9 gke-gkemulti-west-5-default-pool-4bcaca65-2l6s us-west1-b mysql-router-6654f985f5-5967d gke-gkemulti-west-5-default-pool-4bcaca65-jch0 us-west1-b dbc1-0 You can observe that the MySQL Router Pods are distributed equally across the zones; that is, not placed on the same node as a MySQL Pod, or on the same node as another MySQL Router Pod.
- Verify that the PDB was created. kubectl get poddisruptionbudgets -n mysql1 Get the list of stateful sets. kubectl get statefulsets -n mysql1 Get the list of running Pods using the app label. kubectl get pods --selector = app = mysql -n mysql1 Update the MySQL image in the stateful set. kubectl -n mysql1 \ set image statefulset/dbc1 \ mysql = mysql/mysql-server:8.0.30 The output is similar to the following: statefulset.apps/mysql image updated Check the status of the terminating Pods and new Pods. kubectl get pods --selector = app = mysql -n mysql1 Validate the MySQL binary upgrade During the upgrade, you can verify the status of the rollout, the new Pods, and the existing Service.
- The following PodDisruptionBudget policy manifest sets the maximum unavailable Pods to one for your MySQL application. apiVersion : policy/v1 kind : PodDisruptionBudget metadata : name : mysql-pdb spec : maxUnavailable : 1 selector : matchLabels : app : mysql To apply the PDB policy to your cluster, follow these steps: Apply the PDB policy using kubectl . kubectl apply -n mysql1 -f mysql-pdb-maxunavailable.yaml View the status of the PDB. kubectl get poddisruptionbudgets -n mysql1 mysql-pdb -o yaml In the status section of the output, see the currentHealthy and desiredHealthy Pods counts.
- The output is similar to the following: status: ... currentHealthy: 3 desiredHealthy: 2 disruptionsAllowed: 1 expectedPods: 3 ...

### "Node upgrade strategies \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies)
- Source ID: `site-docs-reference-2`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- For Pods that have PodDisruptionBudget violations or long terminationGracePeriodSeconds during the draining, they will be deleted in the Delete blue pool phase when the node is deleted.
- Blue-green upgrades are optimal for the following scenarios: if you want a gradual rollout where risk mitigation is most important, where graceful termination greater than 60 minutes is needed. if your workloads are less tolerant of disruptions. if a temporary cost increase due to higher resource usage is acceptable.
- Fast and less disruptive If your workload is sensitive to disruption and you have already set up PodDisruptionBudgets (PDB) and you are not using externalTrafficPolicy: Local , which does not work with parallel node drains, you can increase the speed of the upgrade by using maxSurge=20;maxUnavailable=0 .
- Surge upgrades are optimal for the following scenarios: if you want to optimize for the speed of upgrades. if workloads are more tolerant of disruptions, where graceful termination up to 60 minutes is acceptable. if you want to control costs by minimizing the creation of new nodes.

