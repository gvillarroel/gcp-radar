---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.436Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "StatefulSet legacy API versions"
feature_slug: "statefulset-legacy-api-versions"
latest_feature_date: "2020-03-06"
deprecation_date: "2020-03-06"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/optimize-multishares"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql"
keywords:
  - "statefulset"
  - "legacy"
  - "v1beta2"
  - "versions"
  - "apps"
  - "longer"
  - "v1beta1"
---

# StatefulSet legacy API versions

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The apps/v1beta1 and apps/v1beta2 API versions for StatefulSet are no longer served in GKE 1.16; deprecated on 2020-03-06.

## Extended Definition

The apps/v1beta1 and apps/v1beta2 API versions for StatefulSet are no longer served in GKE 1.16; deprecated on 2020-03-06.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/optimize-multishares](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/optimize-multishares)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql)

## Supporting Pages

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- The following upcoming GKE on AWS versions or newer will include the fix for this vulnerability, and this bulletin will be updated when they are available: 1.5.0-gke.6 1.4.3-gke.7 Drop the CAP NET RAW capability from containers with one of the following methods: Enforce blocking these capabilities with PodSecurityPolicy , for example: Require dropping CAP NET RAW with a PSP apiversion: extensions/v1beta1 kind: PodSecurityPolicy metadata: name: no-cap-net-raw spec: requiredDropCapabilities: -NET RAW ...
- Upgrade your GKE control plane to one of the following updated versions that patches this issue and allows v1beta1 BackendConfig resources to be used safely: 1.21.1-gke.2700 and later 1.20.9-gke.900 and later 1.19.14-gke.300 and later 1.18.20-gke.5100 and later This issue can also be prevented by avoiding the deployment of v1beta1 BackendConfig resources.
- If you are using Istio on GKE 1.4: Istio on GKE 1.4 releases are no longer supported by Istio and we do not backport CVE fixes to these versions.
- The following versions of GKE or later have been updated to address the providerID issue: 1.33.1-gke.1386000 1.32.4-gke.1533000 1.31.9-gke.1119000 1.30.12-gke.1208000 Optionally, if you cannot upgrade, implement the following validating admission policy on your cluster to mitigate the providerID issue: apiVersion : admissionregistration . k8s . io / v1 kind : ValidatingAdmissionPolicy metadata : name : validate - node - providerid spec : failurePolicy : Fail matchConstraints : resourceRules : - apiGroups : [ "" ] apiVersions : [ "v1" ] operations : [ "CREATE", "UPDATE" ] resources : [ "nodes" ] matchConditions : - name : "has-providerid" expression : "has(object.spec.providerID)" validations : - expression : "object.spec.providerID == '' object.spec.providerID.endsWith('/' + object.metadata.name)" message : "node.spec.providerID must match the node name" --- apiVersion : admissionregistration . k8s . io / v1 kind : ValidatingAdmissionPolicyBinding metadata : name : validate - node - providerid - binding spec : policyName : validate - node - providerid validationActions : [ Deny ] Use node restricted labels when isolating workloads to specific nodes as a security control If you are using labels for node isolation, as described in Kubernetes documentation , use node restricted labels (for example, labels of the form node-restriction.kubernetes.io/example-constraint ) in node affinity and node selector terms used for workload isolation.

### "Optimize storage with Filestore Multishares for GKE \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/optimize-multishares](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/optimize-multishares)
- Source ID: `site-docs-reference-required-5`
- Final score: 92
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a YAML configuration file similar to the following: cat <<EOF kubectl apply -f - apiVersion: apps/v1 kind: StatefulSet metadata: name: web spec: serviceName: "nginx" replicas: 2 selector: matchLabels: app: nginx template: metadata: labels: app: nginx spec: containers: - name: nginx image: registry.k8s.io/nginx-slim:0.8 ports: - containerPort: 80 name: web volumeMounts: - name: test-pvc-multishare mountPath: /usr/share/nginx/html volumeClaimTemplates: - metadata: name: test-pvc-multishare spec: accessModes: [ "ReadWriteMany" ] storageClassName: enterprise-multishare-rwx resources: requests: storage: 100Gi EOF Check Statefulset replicas and volumes.
- Run the following command to create a Deployment resource: cat <<EOF kubectl apply -f - apiVersion: apps/v1 kind: Deployment metadata: name: web-server-multishare labels: app: nginx spec: replicas: 5 selector: matchLabels: app: nginx template: metadata: labels: app: nginx spec: containers: - name: nginx image: nginx volumeMounts: - mountPath: /usr/share/nginx/html name: mypvc volumes: - name: mypvc persistentVolumeClaim: claimName: test-pvc-fs-sharedvpc --- kind: PersistentVolumeClaim apiVersion: v1 metadata: name: test-pvc-fs-sharedvpc spec: accessModes: - ReadWriteMany storageClassName: csi-filestore-multishare-sharedvpc resources: requests: storage: 100Gi EOF CMEK-enabled Filestore instances You can create GKE volumes hosted on CMEK-enabled Filestore multishare instances.
- Run the following command to create a Deployment resource: cat <<EOF kubectl apply -f - apiVersion: apps/v1 kind: Deployment metadata: name: web-server-multishare labels: app: nginx spec: replicas: 5 selector: matchLabels: app: nginx template: metadata: labels: app: nginx spec: containers: - name: nginx image: nginx volumeMounts: - mountPath: /usr/share/nginx/html name: mypvc volumes: - name: mypvc persistentVolumeClaim: claimName: test-pvc-fs-cmek --- kind: PersistentVolumeClaim apiVersion: v1 metadata: name: test-pvc-fs-cmek spec: accessModes: - ReadWriteMany storageClassName: csi-filestore-multishare-cmek resources: requests: storage: 100Gi EOF Map PVCs to Filestore instances Note: Filestore multishare instances are managed using CSI dynamic provisioning.
- From the command line, run the following command: kubectl get statefulset You should see something similar to the following response: NAME READY AGE web 2/2 2m8s From the command line, run the following command: kubectl get pvc You should see something similar to the following response: NAME STATUS VOLUME CAPACITY ACCESS MODES STORAGECLASS AGE test-pvc-fs Bound pvc-056d769d-a709-4bb2-b6d3-0361871b27a2 100Gi RWX enterprise-multishare-rwx 54m test-pvc-multishare-web-0 Bound pvc-7aa21b5a-5343-4547-b7d7-414c16af15a7 100Gi RWX enterprise-multishare-rwx 114s test-pvc-multishare-web-1 Bound pvc-8b37cd6e-d764-4d38-80d7-d74228536cfe 100Gi RWX enterprise-multishare-rwx 38s The PVC test-pvc-fs is associated with the Deployment web-server-multishare .

### "Deploy a stateful MySQL cluster on GKE \_|\_ Kubernetes Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql)
- Source ID: `site-docs-root-2`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Deploy the StatefulSet of MySQL instance Pods. apiVersion : apps/v1 kind : StatefulSet metadata : name : dbc1 labels : app : mysql spec : replicas : 3 selector : matchLabels : app : mysql serviceName : mysql template : metadata : labels : app : mysql spec : topologySpreadConstraints : - maxSkew : 1 topologyKey : "topology.kubernetes.io/zone" whenUnsatisfiable : DoNotSchedule labelSelector : matchLabels : app : mysql affinity : podAntiAffinity : requiredDuringSchedulingIgnoredDuringExecution : - labelSelector : matchExpressions : - key : app operator : In values : - mysql topologyKey : "kubernetes.io/hostname" containers : - name : mysql image : mysql/mysql-server:8.0.28 command : - /bin/bash args : - -c - > - /entrypoint.sh --server-id=$((20 + $(echo $HOSTNAME grep -o '[^-] $') + 1)) --report-host=${HOSTNAME}.mysql.mysql1.svc.cluster.local --binlog-checksum=NONE --enforce-gtid-consistency=ON --gtid-mode=ON --default-authentication-plugin=mysql native password env : - name : MYSQL ROOT PASSWORD valueFrom : secretKeyRef : name : mysql-secret key : password - name : MYSQL ADMIN PASSWORD valueFrom : secretKeyRef : name : mysql-secret key : admin-password - name : MYSQL ROOT HOST value : '%' ports : - name : mysql containerPort : 3306 - name : mysqlx containerPort : 33060 - name : xcom containerPort : 33061 resources : limits : cpu : "500m" ephemeral-storage : "1Gi" memory : "1Gi" requests : cpu : "500m" ephemeral-storage : "1Gi" memory : "1Gi" volumeMounts : - name : mysql mountPath : /var/lib/mysql subPath : mysql readinessProbe : exec : command : - bash - "-c" - mysql -h127.0.0.1 -uroot -p$MYSQL ROOT PASSWORD -e'SELECT 1' initialDelaySeconds : 30 periodSeconds : 2 timeoutSeconds : 1 livenessProbe : exec : command : - bash - "-c" - mysqladmin -uroot -p$MYSQL ROOT PASSWORD ping initialDelaySeconds : 30 periodSeconds : 10 timeoutSeconds : 5 updateStrategy : rollingUpdate : partition : 0 type : RollingUpdate volumeClaimTemplates : - metadata : name : mysql labels : app : mysql spec : storageClassName : fast-storageclass volumeMode : Filesystem accessModes : - ReadWriteOnce resources : requests : storage : 10Gi kubectl apply -n mysql1 -f c1-mysql.yaml This command deploys the StatefulSet consisting of three replicas.
- Verify that the PDB was created. kubectl get poddisruptionbudgets -n mysql1 Get the list of stateful sets. kubectl get statefulsets -n mysql1 Get the list of running Pods using the app label. kubectl get pods --selector = app = mysql -n mysql1 Update the MySQL image in the stateful set. kubectl -n mysql1 \ set image statefulset/dbc1 \ mysql = mysql/mysql-server:8.0.30 The output is similar to the following: statefulset.apps/mysql image updated Check the status of the terminating Pods and new Pods. kubectl get pods --selector = app = mysql -n mysql1 Validate the MySQL binary upgrade During the upgrade, you can verify the status of the rollout, the new Pods, and the existing Service.
- To revert the deployment to the previous working version, use the rollout undo command: kubectl rollout undo statefulset/dbc1 -n mysql1 The output is similar to the following: statefulset.apps/dbc1 rolled back Scale your database cluster horizontally To scale your MySQL InnoDB Cluster horizontally, you add additional nodes to the GKE cluster node pool (only required if you are using Standard), deploy additional MySQL instances, then add each instance to the existing MySQL InnoDB Cluster.
- The output is similar to the following: service/mysql created statefulset.apps/dbc1 created In this tutorial, the resource limits and requests are set to minimal values to save cost.

