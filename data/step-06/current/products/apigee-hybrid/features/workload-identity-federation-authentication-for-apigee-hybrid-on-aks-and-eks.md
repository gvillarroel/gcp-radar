---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:33:10.251Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "Workload Identity Federation authentication for Apigee hybrid on AKS and EKS"
feature_slug: "workload-identity-federation-authentication-for-apigee-hybrid-on-aks-and-eks"
latest_feature_date: "2024-04-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/hybrid/release-notes"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide"
keywords:
  - "Workload Identity Federation"
  - "workload identity"
  - "WIF auth"
  - "component authentication"
  - "Kubernetes authentication"
  - "WIF"
  - "AKS"
  - "EKS"
---

# Workload Identity Federation authentication for Apigee hybrid on AKS and EKS

Product: Apigee hybrid
Coverage: LOW

## Step 02 Summary

Apigee hybrid now supports Workload Identity Federation for component authentication in Kubernetes environments on AKS and EKS.

## Extended Definition

Apigee hybrid now supports Workload Identity Federation for component authentication in Kubernetes environments on AKS and EKS.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)
- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide)

## Supporting Pages

### Apigee hybrid release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For information on new installations, see The big picture . v1.12.0 Feature Apigee hybrid now supports Workload Identity Federation for component authentication on AKS and EKS installations.
- 488417252 Fixed an issue where the Apigee Operator guardrails pod failed to run on EKS with Workload Identity Federation (WIF) by ensuring it runs as the federated principal rather than the default service account.
- See Enabling Workload Identity Federation on AKS and EKS . v1.12.0 Feature You can now add your own contractEncryptionKey for new Apigee hybrid installations.
- 479872706 Resolved an issue that prevented loading API products, apps, and developers after migrating data to Apigee hybrid 1.16.0 in configurations using Workload Identity Federation (WIF) with an HTTP Forward Proxy.

### Configuration property reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See Enabling Workload Identity Federation on AKS and EKS . gcp.projectID Basic Introduced in version: 1.2.0 Default value: None Chart: apigee-operator , apigee-telemetry , apigee-org Required Identifies the Google Cloud project where apigee-logger and the apigee-metrics push their data. gcp.region Basic Introduced in version: 1.2.0 Default value: us-central1 Chart: apigee-env , apigee-org Required Identifies the Google Cloud region where the apigee-logger and the apigee-metrics push their data. gcp.workloadIdentity.enabled Basic Introduced in version: 1.10.0 Default value: false Chart: apigee-operator , apigee-datastore , apigee-telemetry , apigee-org , apigee-env Enables using Workload Identity Federation for GKE.
- GSA email addresses typically have the format of: GSA NAME @ PROJECT ID .iam.gserviceaccount.com For example: apigee-guardrails@my-hybrid-project.iam.gserviceaccount.com Tip: You can find the email address of your service accounts with the following command: gcloud iam service-accounts list --project ${PROJECT ID} --filter "apigee" See Enabling Workload Identity on GKE or Enabling Workload Identity Federation on AKS and EKS . guardrails.serviceAccountPath Basic Introduced in version: 1.16.0 Default value: None Chart: apigee-operator Unless using Workload Identity, one of either serviceAccountPath or serviceAccountRef is required.
- GSA email addresses typically have the format of: GSA NAME @ PROJECT ID .iam.gserviceaccount.com For example: apigee-metrics@my-hybrid-project.iam.gserviceaccount.com Tip: You can find the email address of your service accounts with the following command: gcloud iam service-accounts list --project ${PROJECT ID} --filter "apigee" See Enabling Workload Identity on GKE or Enabling Workload Identity Federation on AKS and EKS . metrics.nodeSelector.key Basic Introduced in version: 1.0.0 Default value: None Chart: apigee-telemetry Required Node selector label key used to target dedicated Kubernetes nodes for metrics runtime services.
- GSA email addresses typically have the format of: GSA NAME @ PROJECT ID .iam.gserviceaccount.com For example: apigee-mint-task-scheduler@my-hybrid-project.iam.gserviceaccount.com Tip: You can find the email address of your service accounts with the following command: gcloud iam service-accounts list --project ${PROJECT ID} --filter "apigee" See Enabling Workload Identity on GKE or Enabling Workload Identity Federation on AKS and EKS . mintTaskScheduler.image.pullPolicy Advanced Introduced in version: 1.7.0 Default value: IfNotPresent Chart: apigee-org Determines when kubelet pulls the pod's Docker image.

### "New Apigee hybrid installation and administration Preview \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Useful resources to read more about this include: - Introducing Workload Identity: Better authentication for your GKE applications Google Cloud Blog - Use Workload Identity Kubernetes Engine Documentation Google Cloud Available in: overlays/instances/{INSTANCE NAME}/datastore overlays/instances/{INSTANCE NAME}/environments/{ENV NAME} overlays/instances/{INSTANCE NAME}/organization overlays/instances/{INSTANCE NAME}/redis overlays/instances/{INSTANCE NAME}/telemetry Prerequisite: Before you are able to make use of workload identity, you'll need to grant the relevant permissions within you Google Cloud project using: gcloud iam service - accounts add - iam - policy - binding \ -- role roles / iam . workloadIdentityUser \ -- member "serviceAccount:${ORG NAME}.svc.id.goog[${APIGEE NAMESPACE}/${KSA NAME}]" \ $ { GSA NAME } @ $ { ORG NAME } . iam.gserviceaccount.com where: - ${ORG NAME} - The name of your Apigee Organization. - ${APIGEE NAMESPACE} - The kubernetes namespace where Apigee components have been installed.
- Get a shell inside the vault dev pod kubectl exec -it vault-0 -- /bin/sh Enable kubernetes authentication method vault auth enable kubernetes Write the auth config vault write auth / kubernetes / config \ issuer = "https://kubernetes.default.svc.cluster.local" \ token reviewer jwt = "$(cat /var/run/secrets/kubernetes.io/serviceaccount/token)" \ kubernetes host = "https://$KUBERNETES PORT 443 TCP ADDR:443" \ kubernetes ca cert = @ / var / run / secrets / kubernetes . io / serviceaccount / ca . crt \ disable iss validation = true Create the auth policy vault policy write apigee-runtime-app - <<EOF path "secret/data/runtime-gcp-sa-key" { capabilities = ["read"] } EOF Bind the policy with the service account vault write auth/kubernetes/role/apigee-runtime-role \ bound service account names=apigee-runtime-sa \ bound service account namespaces= ${ APIGEE NAMESPACE } \ policies=apigee-runtime-app \ ttl=20m Here, we assume that the service account is inside the apigee namespace.
- Component Subcomponent Default name (available when you've enabled workload identity patch) organization connectAgent apigee-connect-agent-svc-account-${ORG NAME} watcher apigee-watcher-svc-account-${ORG NAME} mart apigee-mart-svc-account-${ORG NAME} udca apigee-udca-svc-account-${ORG NAME} environment synchronizer apigee-synchronizer-svc-account-${ORG NAME}-${ENV NAME} udca apigee-udca-svc-account-${ORG NAME}-${ENV NAME} runtime apigee-runtime-svc-account-${ORG NAME}-${ENV NAME} datastore cassandra apigee-datastore-svc-account telemetry metricsApp apigee-metricsApp-svc-account metricsProxy apigee-metricsProxy-svc-account metricsAdapter apigee-metricsAdapter-svc-account containerLogs apigee-container-logs-svc-account Workload identities Workload identities allow pods (which use kubernetes service accounts) running in GKE to directly authenticate with Google Cloud APIs without requiring Google Cloud service account keys.
- We can use: kubectl get pods -n ${ APIGEE NAMESPACE } -o wide To list all the pods and get the IP of any cassandra pod, use the following command: kubectl get pods -o wide -n apigee Your output should look something like the following: NAME READY STATUS RESTARTS AGE IP NODE NOMINATED NODE apigee-cassandra-default-0 1/1 Running 0 5d 10.0.0.11 gke-k8s-dc-2-default-pool-a2206492-p55d apigee-cassandra-default-1 1/1 Running 0 5d 10.0.2.4 gke-k8s-dc-2-default-pool-e9daaab3-tjmz apigee-cassandra-default-2 1/1 Running 0 5d 10.0.3.5 gke-k8s-dc-2-default-pool-e589awq3-kjch For more information, see Prerequisites for GKE in "Multi-region deployment on GKE, GKE on-prem, and AKS" : Usage: The use of this component mostly makes sense when you are setting up Apigee Hybrid in a new cluster and you already have another working setup of Apigee Hybrid.

