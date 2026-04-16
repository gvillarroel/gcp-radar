---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.254Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Extended duration Pods in Autopilot"
feature_slug: "extended-duration-pods-in-autopilot"
latest_feature_date: "2023-07-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql"
keywords:
  - "duration"
  - "extended"
  - "autopilot"
  - "longer"
  - "pods"
  - "lets"
---

# Extended duration Pods in Autopilot

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Lets GKE Autopilot Pods run for longer durations when marked with the safe-to-evict=false annotation.

## Extended Definition

Lets GKE Autopilot Pods run for longer durations when marked with the safe-to-evict=false annotation.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql)

## Supporting Pages

### "GKE Autopilot overview \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- Source ID: `site-iam-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Pricing Autopilot pricing uses different models depending on the type of hardware that your Pods use, as follows: General-purpose Autopilot Pods : the following types of Pods use a Pod-based billing model and are categorized as general-purpose Pods : Pods that run on the container-optimized compute platform in Autopilot clusters or Standard clusters.
- The container-optimized compute platform provides the following benefits: Compute capacity matches workloads : Autopilot dynamically adjusts the compute capacity for the container-optimized compute platform based on factors like the number of Pods and resource consumption.
- Networking : Autopilot enables some networking security features by default, such as passing all Pod network traffic through your Virtual Private Cloud firewall rules, even if the traffic is going to other Pods in the cluster.
- You can use the Autopilot container-optimized compute platform in the following ways: Autopilot clusters : Pods that don't select specific hardware use this compute platform by default.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Technical details Note: The security boundary for GKE nodes is the single-tenant virtual machine, and as such the ability to access the node VM from pods is not considered a security boundary for Autopilot .
- The ability to schedule pods in this way is expected on GKE Standard, but not on GKE Autopilot, as it bypassed the host-access restrictions used to enable the SLA described previously.
- With CVE-2023-3893, a similar lack of input sanitation lets a user who can create Pods on Windows nodes running kubernetes-csi-proxy to escalate to admin privileges on those nodes.
- With CVE-2023-3893, a similar lack of input sanitation lets a user who can create Pods on Windows nodes running kubernetes-csi-proxy to escalate to admin privileges on those nodes.

### "Deploy a stateful MySQL cluster on GKE \_|\_ Kubernetes Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql)
- Source ID: `site-docs-root-2`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- A Deployment is a Kubernetes API object that lets you run multiple replicas of Pods that are distributed among the nodes in a cluster.. apiVersion : apps/v1 kind : Deployment metadata : name : prepare-three-zone-ha labels : app : prepare-three-zone-ha spec : replicas : 3 selector : matchLabels : app : prepare-three-zone-ha template : metadata : labels : app : prepare-three-zone-ha spec : affinity : Tell Kubernetes to avoid scheduling a replica in a zone where there is already a replica with the label "app: prepare-three-zone-ha" podAntiAffinity : requiredDuringSchedulingIgnoredDuringExecution : - labelSelector : matchExpressions : - key : app operator : In values : - prepare-three-zone-ha topologyKey : "topology.kubernetes.io/zone" containers : - name : prepare-three-zone-ha image : busybox:latest command : - "/bin/sh" - "-c" - "while true; do sleep 3600; done" resources : limits : cpu : "500m" ephemeral-storage : "10Mi" memory : "0.5Gi" requests : cpu : "500m" ephemeral-storage : "10Mi" memory : "0.5Gi" kubectl apply -f prepare-for-ha.yaml By default, Autopilot provisions resources in two zones.
- If you are using Autopilot clusters and see Pod Unschedulable errors, this might indicate GKE is provisioning nodes to accommodate the additional Pods.
- This lets you increase disaster tolerance if the primary cluster is no longer available.
- Deploy the StatefulSet of MySQL instance Pods. apiVersion : apps/v1 kind : StatefulSet metadata : name : dbc1 labels : app : mysql spec : replicas : 3 selector : matchLabels : app : mysql serviceName : mysql template : metadata : labels : app : mysql spec : topologySpreadConstraints : - maxSkew : 1 topologyKey : "topology.kubernetes.io/zone" whenUnsatisfiable : DoNotSchedule labelSelector : matchLabels : app : mysql affinity : podAntiAffinity : requiredDuringSchedulingIgnoredDuringExecution : - labelSelector : matchExpressions : - key : app operator : In values : - mysql topologyKey : "kubernetes.io/hostname" containers : - name : mysql image : mysql/mysql-server:8.0.28 command : - /bin/bash args : - -c - > - /entrypoint.sh --server-id=$((20 + $(echo $HOSTNAME grep -o '[^-] $') + 1)) --report-host=${HOSTNAME}.mysql.mysql1.svc.cluster.local --binlog-checksum=NONE --enforce-gtid-consistency=ON --gtid-mode=ON --default-authentication-plugin=mysql native password env : - name : MYSQL ROOT PASSWORD valueFrom : secretKeyRef : name : mysql-secret key : password - name : MYSQL ADMIN PASSWORD valueFrom : secretKeyRef : name : mysql-secret key : admin-password - name : MYSQL ROOT HOST value : '%' ports : - name : mysql containerPort : 3306 - name : mysqlx containerPort : 33060 - name : xcom containerPort : 33061 resources : limits : cpu : "500m" ephemeral-storage : "1Gi" memory : "1Gi" requests : cpu : "500m" ephemeral-storage : "1Gi" memory : "1Gi" volumeMounts : - name : mysql mountPath : /var/lib/mysql subPath : mysql readinessProbe : exec : command : - bash - "-c" - mysql -h127.0.0.1 -uroot -p$MYSQL ROOT PASSWORD -e'SELECT 1' initialDelaySeconds : 30 periodSeconds : 2 timeoutSeconds : 1 livenessProbe : exec : command : - bash - "-c" - mysqladmin -uroot -p$MYSQL ROOT PASSWORD ping initialDelaySeconds : 30 periodSeconds : 10 timeoutSeconds : 5 updateStrategy : rollingUpdate : partition : 0 type : RollingUpdate volumeClaimTemplates : - metadata : name : mysql labels : app : mysql spec : storageClassName : fast-storageclass volumeMode : Filesystem accessModes : - ReadWriteOnce resources : requests : storage : 10Gi kubectl apply -n mysql1 -f c1-mysql.yaml This command deploys the StatefulSet consisting of three replicas.

