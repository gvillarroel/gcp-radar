---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:33:10.250Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "Service account key storage in HashiCorp Vault for Apigee hybrid"
feature_slug: "service-account-key-storage-in-hashicorp-vault-for-apigee-hybrid"
latest_feature_date: "2024-04-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/hybrid/release-notes"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide"
keywords:
  - "SA keys in Vault"
  - "vault-backed keys"
  - "secret storage"
  - "service account keys"
  - "Vault integration"
  - "key storage"
  - "HashiCorp Vault"
  - "Apigee hybrid 1.12"
---

# Service account key storage in HashiCorp Vault for Apigee hybrid

Product: Apigee hybrid
Coverage: LOW

## Step 02 Summary

Hybrid v1.12 adds support for storing service account keys in HashiCorp Vault.

## Extended Definition

Hybrid v1.12 adds support for storing service account keys in HashiCorp Vault.

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
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- The default value is 75. (Fixed in Apigee hybrid v 1.12.1) 339849002 Hashicorp Vault integration issues fixed for Google Service Account for Cassandra Backup/Restore. (Fixed in Apigee hybrid v 1.12.0-hotfix.1) 324779388 Improved error handling for backup and restore. (Fixed in Apigee hybrid v 1.12.1) 311489774 Removed inclusion of Java in Cassandra client image.. (Fixed in Apigee hybrid v 1.12.1) 310338146 Fixed invalid download directory output from the create-service-account tool. (Fixed in Apigee hybrid v 1.12.1) 300135626 Removed inclusion of Java in Cassandra Backup Utility image. (Fixed in Apigee hybrid v 1.12.1) 297539870 HTTPTargetConnection property io.timeout.millis is now honored correctly when using websockets. (Fixed in 1.11.2-hotfix.2) 239523766 Remove "Unable to evaluate jsonVariable, returning null" logging string from ExtractVariables Policy (Fixed in Apigee hybrid v 1.12.1) 181569113 Fixed an issue in new debug session creation. (Fixed in Apigee hybrid v 1.11.2) v1.13.0 Security Bug ID Description N/A Security fixes for apigee-asm-istiod .
- See Storing service account keys in Hashicorp Vault . v1.12.0 Feature A new suite of metrics for monitoring Apigee proxies and target endpoints is now available for Hybrid 1.12. v1.12.0 Feature The JAR file dependencies required to create a Java callout are now hosted securely in Artifact Registry .
- The new HeaderName element allows you to specify the name of a different header to hold that bearer token. v1.11.0 Feature Vault integration for Cassandra credentials (preview) Starting in version v1.11.0, you can store Cassandra credentials in Hashicorp Vault.
- For details, see Data encryption . v1.12.0 Feature Hybrid v1.12 now supports storing service account keys in Hashicorp Vault.

### Configuration property reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See Storing service account keys in Hashicorp Vault . envs[].serviceAccountSecretRefs.runtime Basic Introduced in version: 1.4.0 Default value: None Chart: apigee-env The name of a Kubernetes secret .
- See Storing service account keys in Hashicorp Vault . ao Apigee Operators (AO) creates and updates low level Kubernetes and Istio resources that are required to deploy and maintain a component.
- When unset, Apigee hybrid uses either the usernames and passwords stored in: cassandra.auth.admin.password cassandra.auth.ddl.password cassandra.auth.default.password cassandra.auth.dml.password cassandra.auth.jmx.password cassandra.auth.jmx.username cassandra.auth.jolokia.password cassandra.auth.jolokia.username or the Kubernetes secret stored in: cassandra.auth.secret See Storing Cassandra secrets in Hashicorp Vault for instructions to create the policy. cassandra.backup.cloudProvider Advanced Introduced in version: 1.0.0 Default value: GCP Chart: apigee-datastore The name of a backup provider.
- When the revision property is changed and applied, a rolling update will occur for all components Changes to properties of the following objects require an update to revision : nodeSelector envs imagePullSecrets gcpProjectID k8sClusterName contractProvider org For more information, see Rolling updates . serviceAccountSecretProviderClass Advanced Introduced in version: 1.12.0 Default value: None Chart: apigee-datastore , apigee-env , apigee-org , apigee-telemetry The name of the organization-specific secret provider class ( SecretProviderClass ) used for storing service account keys in Vault.

### "New Apigee hybrid installation and administration Preview \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In this document: Preview Feedback Overview Changes in the new installation process Prerequisites Preview version Apigee hybrid setup Tools Basic Apigee Hybrid Installation Download setup files Run setup Customized Apigee Hybrid installation Download setup files Create namespace Using docker images from private repositories (optional) Configuring imagePullSecrets (optional) Configuring forward proxy (optional) Specifying ingress TLS certificates Update ingress deployment Configuring custom Google Cloud service accounts Using workload identities Edit resource yamls Create initialization resources and controller Give permissions to Synchronizer service account to interact with Control Plane Create Apigee data plane components Wait for resources to start Customize installation for cert-manager in a custom namespace Kustomize and Components Overview How to use Components OpenShift imagepullsecret nodeselector workload-identity http-proxy logger and metrics gcs-backup and gcs-restore non-gcs-backup and non-gcs-restore http-client non-sni-client http-and-non-sni-client multi-region Concepts Adding a new environment Using force delete in Apigee Datastore Understanding the script Apigee Hybrid Setup Folder Structure Storing service account keys in external vaults Apigee Hybrid Upgrade Create Backup Upgrade your Kubernetes platform if needed Download setup files Update service account permissions if needed Upgrade controller Update Apigee Kubernetes components Apigee Hybrid Rollback Restore apigee-hybrid-setup Rollback Kubernetes components Rollback controller Cleanup Deleting an environment Deleting a hybrid setup Multi Instance Installation Multi Instance setup on GKE Troubleshooting Supportability, Diagnosis & Troubleshooting Guide Manual Cleanup after using forceDelete in multi Region Apigee Hybrid setup Preview Note: This document and the software it is documenting are part of a preview release.
- Component Subcomponent Default name (available when you've enabled workload identity patch) organization connectAgent apigee-connect-agent-svc-account-${ORG NAME} watcher apigee-watcher-svc-account-${ORG NAME} mart apigee-mart-svc-account-${ORG NAME} udca apigee-udca-svc-account-${ORG NAME} environment synchronizer apigee-synchronizer-svc-account-${ORG NAME}-${ENV NAME} udca apigee-udca-svc-account-${ORG NAME}-${ENV NAME} runtime apigee-runtime-svc-account-${ORG NAME}-${ENV NAME} datastore cassandra apigee-datastore-svc-account telemetry metricsApp apigee-metricsApp-svc-account metricsProxy apigee-metricsProxy-svc-account metricsAdapter apigee-metricsAdapter-svc-account containerLogs apigee-container-logs-svc-account Workload identities Workload identities allow pods (which use kubernetes service accounts) running in GKE to directly authenticate with Google Cloud APIs without requiring Google Cloud service account keys.
- The following are the names of the components and the default name of the secret where it looks for service account keys: Component Subcomponent Default kubernetes secret name containing service account key organization connectAgent apigee-connect-agent-gcp-sa-key-${ORG NAME} watcher apigee-watcher-gcp-sa-key-${ORG NAME} mart apigee-mart-gcp-sa-key-${ORG NAME} udca apigee-udca-gcp-sa-key-${ORG NAME} ingressGateways N/A environment runtime apigee-runtime-gcp-sa-key-${ORG NAME}-${ENV NAME} udca apigee-udca-gcp-sa-key-${ORG NAME}-${ENV NAME} synchronizer apigee-synchronizer-gcp-sa-key-${ORG NAME}-${ENV NAME} telemetry metrics apigee-metrics-gcp-sa-key containerLogs apigee-logger-gcp-sa-key Kubernetes service accounts Kubernetes service accounts provide identities to pods in your cluster.
- You could also use the create-service-account.sh script to create a new service account and download its keys: ./ tools / create - service - accounts =. sh -- env prod -- profile apigee ‑ cassandra Once the keys have been downloaded, you need to create a kubernetes secret with the name apigee-cassandra-backup-and-restore-gcp-sa-key which can be done using the command: kubectl create secret generic "apigee-cassandra-backup-and-restore-gcp-sa-key" \ --from-file="dbbackup key.json= ${ PATH TO SA KEY } " \ -n " ${ APIGEE NAMESPACE } " Where: ${PATH TO SA KEY} - Path to the file containing the service account keys. ${APIGEE NAMESPACE} - The kubernetes namespace where Apigee components have been installed.

