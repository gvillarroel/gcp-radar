---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:54:52.847Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "CSI backup and restore"
feature_slug: "csi-backup-and-restore"
latest_feature_date: "2023-02-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref"
keywords:
  - "encrypted"
  - "snapshots"
  - "restore"
  - "storage"
  - "enables"
  - "backup"
---

# CSI backup and restore

Product: Apigee hybrid
Coverage: MEDIUM

## Step 02 Summary

CSI backup and restore enables encrypted cloud-storage snapshots of hybrid data using Container Storage Interface snapshots.

## Extended Definition

CSI backup and restore enables encrypted cloud-storage snapshots of hybrid data using Container Storage Interface snapshots.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails)
- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)

## Supporting Pages

### Upgrading Apigee hybrid to version 1.14 | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade)
- Source ID: `feature-recovery-direct-http`
- Final score: 280
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Important: Starting in version 1.14, Guardrails include the following backup-related checks enforced during the Apigee hybrid upgrade.
- However, until all remaining clusters are upgraded Cassandra backup and restore cannot work with mixed versions.
- Install Big picture Prerequisites Permissions and roles to install and manage Apigee hybrid Plan and prepare Minimal cluster configurations Configuring dedicated node pools Configuring Cassandra for production Configuring stateless components for production Configuring authentication for Cassandra StorageClass configuration Service account authentication methods in Apigee hybrid Configuring ports and setting up firewalls Using data residency with Apigee hybrid GCP URLs to allow for hybrid Part 1: Project and org setup Overview Step 1: Enable APIs Step 2: Create an organization Step 3: Create an environment group Part 2: Hybrid runtime setup Before you begin Step 1: Create a cluster Step 2: Download the Helm charts Step 3: Create the apigee namespace Step 4: Set up service accounts Step 5: Set up service account authentication Step 6: Create TLS certificates Step 7: Create the overrides Step 8: Enable Control Plane access Step 9: Install cert-manager Step 10: Install the CRDs Step 11: Install Apigee hybrid using Helm Part 3: Expose ingress and deploy proxy Step 1: Expose Apigee ingress Step 2: Deploy an API proxy Uninstall hybrid runtime Administer Administration overview Troubleshooting Automated issue surfacing Diagnosing issues with guardrails Data collection Data collection overview Where is your data stored?
- Install Big picture Prerequisites Permissions and roles to install and manage Apigee hybrid Plan and prepare Minimal cluster configurations Configuring dedicated node pools Configuring Cassandra for production Configuring authentication for Cassandra StorageClass configuration Service account authentication methods in Apigee hybrid Configuring ports and setting up firewalls Using data residency with Apigee hybrid GCP URLs to allow for hybrid Part 1: Project and org setup Overview Step 1: Enable APIs Step 2: Create an organization Step 3: Create an environment group Part 2: Hybrid runtime setup Before you begin Step 1: Create a cluster Step 2: Download the Helm charts Step 3: Create the apigee namespace Step 4: Set up service accounts Step 5: Set up service account authentication Step 6: Create TLS certificates Step 7: Create the overrides Step 8: Enable Control Plane access Step 9: Install cert-manager Step 10: Install the CRDs Step 11: Install Apigee hybrid using Helm Part 3: Expose ingress and deploy proxy Step 1: Expose Apigee ingress Step 2: Deploy an API proxy Uninstall hybrid runtime Administer Administration overview Troubleshooting Automated issue surfacing Diagnosing issues with guardrails Data collection Data collection overview Where is your data stored?

### Diagnosing issues with guardrails \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails)
- Source ID: `site-docs-reference-required-6`
- Final score: 240
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Error: UPGRADE FAILED: pre-upgrade hooks failed: 1 error occurred: pod apigee-hybrid-helm-guardrail-datastore failed To see what check has failed and why, check the Guardrails pod logs like the following example: kubectl logs -n apigee apigee-hybrid-helm-guardrail-datastore {"level":"INFO","timestamp":"2024-02-01T20:28:55.934Z","msg":"logging enabled","log-level":"INFO"} {"level":"INFO","timestamp":"2024-02-01T20:28:55.935Z","msg":"","checkpoint":"upgrade","component":"apigee-datastore"} {"level":"INFO","timestamp":"2024-02-01T20:28:55.935Z","msg":"initiating pre-install checks"} {"level":"INFO","timestamp":"2024-02-01T20:28:55.935Z","msg":"check validation starting...","check":"controlplane connectivity"} {"level":"ERROR","timestamp":"2024-02-01T20:28:55.961Z","msg":"connectivity test failed","check":"controlplane connectivity","host":"https://apigee.googleapis.com","error":"Get \"https://apigee.googleapis.com\": dial tcp: lookup apigee.googleapis.com on 10.92.0.10:53: no such host"} In this example, the actual test failure message is this part: {"level":"ERROR","timestamp":"2024-02-01T20:28:55.961Z","msg":"connectivity test failed","check":"controlplane connectivity","host":"https://apigee.googleapis.com","error":"Get \"https://apigee.googleapis.com\": dial tcp: lookup apigee.googleapis.com on 10.92.0.10:53: no such host"} The Guardrails pod is automatically provisioned when you issue the helm command.
- You can use the same sequence for all Apigee hybrid components: Install the apigee-datastore component using the following command: helm upgrade datastore apigee-datastore/ \ --install \ --namespace apigee \ --atomic \ -f overrides.yaml If there is an immediate error, the Helm command will also show an error message displaying the Guardrails checks failed as in the following example: helm upgrade datastore apigee-datastore/ \ --install \ --namespace apigee \ -f my-overrides.yaml . . .
- The following example shows the --no-hooks flag in a Helm command: helm upgrade datastore apigee-datastore/ \ --install \ --namespace apigee \ -f overrides.yaml \ --no-hooks Guardrails checks The following table lists details for some of the Guardrails checks that are shipped as part of Apigee hybrid version 1.14.
- Using Guardrails with Apigee hybrid To use Hybrid Guardrails, execute the same Hybrid Helm install or Hybrid Helm upgrade commands documented in the Hybrid installation instructions.

### Configuration property reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- Source ID: `site-docs-reference`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can override image URL for components individualy with the following properties: ao.image.url apigeeIngressGateway.image.url cassandra.image.url cassandra.auth.image.url cassandra.backup.image.url cassandra.restore.image.url connectAgent.image.url guardrails.image.url ingressGateways[].image.url istiod.image.url kubeRBACProxy.image.url logger.image.url mart.image.url metrics.adapter.image.url metrics.prometheus.image.url metrics.sdSidecar.image.url mintTaskScheduler.image.url redis.image.url redis.envoy.image.url runtime.image.url synchronizer.image.url udca.image.url udca.fluentd.image.url watcher.image.url imagePullSecrets[].name Advanced Introduced in version: 1.0.0 Default value: None Chart: apigee-operator , apigee-redis , apigee-org , apigee-env Kubernetes secret name configured as docker-registry type; used to pull images from private repo. instanceID Basic Introduced in version: 1.3.0 Default value: None Chart: apigee-org Required A unique identifier for this installation.
- GSA email addresses typically have the format of: GSA NAME @ PROJECT ID .iam.gserviceaccount.com For example: apigee-guardrails@my-hybrid-project.iam.gserviceaccount.com Tip: You can find the email address of your service accounts with the following command: gcloud iam service-accounts list --project ${PROJECT ID} --filter "apigee" See Enabling Workload Identity on GKE or Enabling Workload Identity Federation on AKS and EKS . guardrails.serviceAccountPath Basic Introduced in version: 1.16.0 Default value: None Chart: apigee-operator Unless using Workload Identity, one of either serviceAccountPath or serviceAccountRef is required.
- GSA email addresses typically have the format of: GSA NAME @ PROJECT ID .iam.gserviceaccount.com For example: apigee-non-prod@my-hybrid-project.iam.gserviceaccount.com Tip: You can find the email address of your service accounts with the following command: gcloud iam service-accounts list --project ${PROJECT ID} --filter "apigee" See Enabling Workload Identity on GKE . guardrails Identifies the Google service account (GSA) and key file used by the Apigee Guardrails service.
- Tip: Consider using hub to set a private repository URL for all components instead of configuring them individually. guardrails.gsa Advanced Introduced in version: 1.16.0 Default value: None Chart: apigee-operator The email address of the apigee-guardrails Google IAM service account (GSA) to associate with the corresponding Kubernetes service account when enabling Workload Identity on GKE clusters.

