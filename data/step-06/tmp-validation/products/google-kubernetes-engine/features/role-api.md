---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.338Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Role API"
feature_slug: "role-api"
latest_feature_date: "2021-10-01"
deprecation_date: "2021-10-01"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/kueue-cohort"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
keywords:
  - "role"
  - "removed"
  - "v1beta1"
  - "favor"
---

# Role API

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The v1beta1 Role API was removed in Kubernetes 1.22 in favor of the GA API; deprecated on 2021-10-01.

## Extended Definition

The v1beta1 Role API was removed in Kubernetes 1.22 in favor of the GA API; deprecated on 2021-10-01.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/kueue-cohort](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/kueue-cohort)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)

## Supporting Pages

### "Implement a Job queuing system with quota sharing between namespaces on\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/kueue-cohort](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/kueue-cohort)
- Source ID: `site-docs-reference-required-4`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- A ClusterRoleBinding that grants the kueue-metrics-reader service account the kueue-metrics-reader ClusterRole. apiVersion : v1 kind : ServiceAccount metadata : name : kueue-metrics-reader namespace : kueue-system --- apiVersion : v1 kind : Secret metadata : name : kueue-metrics-reader-token namespace : kueue-system annotations : kubernetes.io/service-account.name : kueue-metrics-reader type : kubernetes.io/service-account-token --- apiVersion : rbac.authorization.k8s.io/v1 kind : Role metadata : name : kueue-secret-reader namespace : kueue-system rules : - resources : - secrets apiGroups : [ "" ] verbs : [ "get" , "list" , "watch" ] resourceNames : [ "kueue-metrics-reader-token" ] --- apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRoleBinding metadata : name : kueue-metrics-reader subjects : - kind : ServiceAccount name : kueue-metrics-reader namespace : kueue-system roleRef : kind : ClusterRole name : kueue-metrics-reader apiGroup : rbac.authorization.k8s.io Configure RoleBinding for Google Cloud Managed Service for Prometheus: Depending on if you are using a Autopilot or Standard cluster, you will need to create the RoleBinding in either the gke-gmp-system or gmp-system namespace.
- They point to CluterQueues, from which resources are allocated to run the LocalQueue workloads. apiVersion : kueue.x-k8s.io/v1beta1 kind : ClusterQueue metadata : name : cq-team-a spec : cohort : all-teams # cq-team-a and cq-team-b share the same cohort namespaceSelector : matchLabels : kubernetes.io/metadata.name : team-a #Only team-a can submit jobs direclty to this queue, but will be able to share it through the cohort resourceGroups : - coveredResources : [ "cpu" , "memory" ] flavors : - name : on-demand resources : - name : "cpu" nominalQuota : 10 borrowingLimit : 5 - name : "memory" nominalQuota : 10Gi borrowingLimit : 15Gi - name : spot # This ClusterQueue doesn't have nominalQuota for spot, but it can borrow from others resources : - name : "cpu" nominalQuota : 0 - name : "memory" nominalQuota : 0 --- apiVersion : kueue.x-k8s.io/v1beta1 kind : LocalQueue metadata : namespace : team-a # LocalQueue under team-a namespace name : lq-team-a spec : clusterQueue : cq-team-a # Point to the ClusterQueue team-a-cq ClusterQueues allows resources to have multiple flavors.
- Create a ClusterQueue to use this node pool and the ResourceFlavor that represents it: Create a new ClusterQueue called cq-spot with cohort set to all-teams : apiVersion : kueue.x-k8s.io/v1beta1 kind : ClusterQueue metadata : name : spot-cq spec : cohort : all-teams # Same cohort as cq-team-a and cq-team-b resourceGroups : - coveredResources : [ "cpu" , "memory" ] flavors : - name : spot resources : - name : "cpu" nominalQuota : 40 - name : "memory" nominalQuota : 144Gi Because this ClusterQueue shares the same cohort with cq-team-a and cq-team-b , both ClusterQueue cq-team-a and cq-team-b can borrow resources up to 15 CPU requests, and 15 Gi of memory. kubectl apply -f cq-spot.yaml In Prometheus, observe how the admitted workloads spike for both cq-team-a and cq-team-b thanks to the added quota by cq-spot who shares the same cohort.
- Autopilot apiVersion : rbac.authorization.k8s.io/v1 kind : RoleBinding metadata : name : gmp-system:collector:kueue-secret-reader namespace : kueue-system roleRef : name : kueue-secret-reader kind : Role apiGroup : rbac.authorization.k8s.io subjects : - name : collector namespace : gke-gmp-system kind : ServiceAccount Standard apiVersion : rbac.authorization.k8s.io/v1 kind : RoleBinding metadata : name : gmp-system:collector:kueue-secret-reader namespace : kueue-system roleRef : name : kueue-secret-reader kind : Role apiGroup : rbac.authorization.k8s.io subjects : - name : collector namespace : gmp-system kind : ServiceAccount Configure Pod Monitoring resource: The following resource configures the monitoring for the Kueue depployment, it specifies that metrics are exposed on the /metrics path over HTTPS.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- If your BackendConfig has already been updated with the v1beta1 API, your Google Cloud Armor security policy might have been removed.
- Unrelated fields omitted Or by using Policy Controller or Gatekeeper with this constraint template and applying it, for example: Dropping CAP NET RAW with Gatekeeper (requires the K8sPSPCapabilities template) apiversion: constraints.gatekeeper.sh/v1beta1 kind: K8sPSPCapabilities metadata: name: forbid-cap-net-raw spec: match: kinds: - apiGroups: [""] kinds: ["Pod"] namespaces: #List of namespaces to enforce this constraint on - default If running gatekeeper >= v3.1.0-beta.5, you can exclude namespaces rather than including them above. excludedNamespaces: - kube-system parameters: requiredDropCapabilities: - "NET RAW" Or by updating your Pod specs: Dropping CAP NET RAW from a Pod: apiVersion: v1 kind: Pod metadata: name: no-cap-net-raw spec: containers: -name: my-container ... securityContext: capabilities: drop: -NET RAW Note: GKE Sandbox pods already disable CAP NET RAW by default and do not require the changes above.
- Unrelated fields omitted Or by using Policy Controller or Gatekeeper with this constraint template and applying it, for example: Dropping CAP NET RAW with Gatekeeper (requires the K8sPSPCapabilities template) apiversion: constraints.gatekeeper.sh/v1beta1 kind: K8sPSPCapabilities metadata: name: forbid-cap-net-raw spec: match: kinds: - apiGroups: [""] kinds: ["Pod"] namespaces: #List of namespaces to enforce this constraint on - default If running gatekeeper >= v3.1.0-beta.5, you can exclude namespaces rather than including them above. excludedNamespaces: - kube-system parameters: requiredDropCapabilities: - "NET RAW" Or by updating your Pod specs: Dropping CAP NET RAW from a Pod: apiVersion: v1 kind: Pod metadata: name: no-cap-net-raw spec: containers: -name: my-container ... securityContext: capabilities: drop: -NET RAW Note: GKE Sandbox pods already disable CAP NET RAW by default and do not require the changes above.
- Unrelated fields omitted Or by using Policy Controller or Gatekeeper with this constraint template and applying it, for example: Dropping CAP NET RAW with Gatekeeper (requires the K8sPSPCapabilities template) apiversion: constraints.gatekeeper.sh/v1beta1 kind: K8sPSPCapabilities metadata: name: forbid-cap-net-raw spec: match: kinds: - apiGroups: [""] kinds: ["Pod"] namespaces: #List of namespaces to enforce this constraint on - default If running gatekeeper >= v3.1.0-beta.5, you can exclude namespaces rather than including them above. excludedNamespaces: - kube-system parameters: requiredDropCapabilities: - "NET RAW" Or by updating your Pod specs: Dropping CAP NET RAW from a Pod: apiVersion: v1 kind: Pod metadata: name: no-cap-net-raw spec: containers: -name: my-container ... securityContext: capabilities: drop: -NET RAW What vulnerability is addressed by this patch?

### "Automatically bootstrap GKE nodes with DaemonSets \_|\_ Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets)
- Source ID: `site-docs-reference-required-5`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Only use this on clusters where you have strict controls over what is deployed. --- apiVersion : v1 kind : ServiceAccount metadata : name : node-config-sa namespace : default --- apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : name : node-patcher-role rules : - apiGroups : [ "" ] resources : [ "nodes" ] Permissions needed to read and remove a taint from the node. verbs : [ "get" , "patch" , "update" ] --- apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRoleBinding metadata : name : node-config-binding subjects : - kind : ServiceAccount name : node-config-sa namespace : default roleRef : kind : ClusterRole name : node-patcher-role apiGroup : rbac.authorization.k8s.io --- apiVersion : apps/v1 kind : DaemonSet metadata : name : auto-untaint-daemonset labels : app : auto-untaint-configurator spec : selector : matchLabels : app : auto-untaint-configurator updateStrategy : type : RollingUpdate template : metadata : labels : app : auto-untaint-configurator spec : serviceAccountName : node-config-sa hostPID : true Toleration now matches the taint on your node. tolerations : - key : "node.config.status/stage" operator : "Equal" value : "configuring" effect : "NoSchedule" volumes : - name : host-root-fs hostPath : path : / initContainers : - name : configure-and-untaint image : ubuntu:22.04 # Using a standard container image. securityContext : privileged : true # Required for chroot and sysctl. env : - name : NODE NAME valueFrom : fieldRef : fieldPath : spec.nodeName volumeMounts : - name : host-root-fs mountPath : /host command : [ "/bin/bash" , "-c" ] args : - Using explicit error checking for each critical command.
- To provision a service account, follow these steps: In Cloud Shell, initialize an environment variable that stores the service account name: GKE SERVICE ACCOUNT NAME = ds-init-tutorial-gke Create a service account: gcloud iam service-accounts create " $GKE SERVICE ACCOUNT NAME " \ --display-name = " $GKE SERVICE ACCOUNT NAME " Initialize an environment variable that stores the service account email account name: GKE SERVICE ACCOUNT EMAIL = " $( gcloud iam service-accounts list \ --format = 'value(email)' \ --filter = displayName: " $GKE SERVICE ACCOUNT NAME " ) " Bind the Identity and Access Management (IAM) roles to the service account: gcloud projects add-iam-policy-binding \ " $( gcloud config get-value project 2 > /dev/null ) " \ --member serviceAccount: " $GKE SERVICE ACCOUNT EMAIL " \ --role roles/monitoring.viewer gcloud projects add-iam-policy-binding \ " $( gcloud config get-value project 2 > /dev/null ) " \ --member serviceAccount: " $GKE SERVICE ACCOUNT EMAIL " \ --role roles/monitoring.metricWriter gcloud projects add-iam-policy-binding \ " $( gcloud config get-value project 2 > /dev/null ) " \ --member serviceAccount: " $GKE SERVICE ACCOUNT EMAIL " \ --role roles/logging.logWriter Prepare the GKE cluster In this section, you launch the GKE cluster, grant permissions, and finish the cluster configuration.
- UNTAINT THE NODE This command removes the taint from the node this Pod is running on. echo "--> Untainting node ${NODE NAME} by removing taint ${TAINT KEY}..." if ! /host/home/kubernetes/bin/kubectl taint node "${NODE NAME}" "${TAINT KEY}:NoSchedule-"; then echo "ERROR: Failed to untaint the node." >&2 exit 1 fi echo "--> Node has been untainted and is now schedulable." The main container is minimal; it just keeps the Pod running. containers : - name : pause-container image : registry.k8s.io/pause:3.9 This manifest creates a ServiceAccount, ClusterRole, and ClusterRoleBinding to grant the DaemonSet permission to remove taints from nodes.
- Verify that the taint is removed: kubectl describe nodes -l cloud.google.com/gke-nodepool = default-pool grep Taints The node status should show Taints: <none> , or show taints that have the key node.config.status/stage .

