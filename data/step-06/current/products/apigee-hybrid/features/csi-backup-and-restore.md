---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:33:10.253Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "CSI backup and restore"
feature_slug: "csi-backup-and-restore"
latest_feature_date: "2023-02-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/hybrid/release-notes"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref"
keywords:
  - "Container Storage Interface"
  - "encrypted snapshots"
  - "snapshot backups"
  - "cloud storage snapshots"
  - "CSI snapshot"
  - "CSI restore"
  - "CSI backup"
  - "data restore"
---

# CSI backup and restore

Product: Apigee hybrid
Coverage: LOW

## Step 02 Summary

CSI backup and restore enables encrypted cloud-storage snapshots of hybrid data using Container Storage Interface snapshots.

## Extended Definition

CSI backup and restore enables encrypted cloud-storage snapshots of hybrid data using Container Storage Interface snapshots.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)
- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)

## Supporting Pages

### Apigee hybrid release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)
- Source ID: `site-docs-reference`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- See Configuring Kubernetes network policies . v1.9.0 Feature CSI Backup and Restore Starting with Apigee hybrid 1.9, you can back up and restore your hybrid data using CSI (Container Storage Interface) snapshots.
- 373722434 Fixed support for backups to Google Cloud Storage buckets with retention policies. (Fixed in v1.13.2 ) 368646378 Fixed an issue affecting control Plane connectivity testing in Guardrails. (Fixed in v1.12.3 ) 364282883 Remove check for dc-expansion flag and add timeout to multi-region seed host connection test. (Fixed in v1.13.1 ) 362979563 Fix for Ingress Health Check failure /healthz/ingress - route not found . (Fixed in 1.13.0-hotfix.1 ) 362690729 Fix for aggressive scaling of runtime pods & cpu spike. (Fixed in 1.13.0-hotfix.1 ) 362305438 You can now add additional env variables to the runtime component. (Fixed in v1.13.1 ) 361044374 Fixes assign message not correctly highlighting the set payload action in the debug trace. (Fixed in v1.13.2 ) 355122464 This release contains a few error-handling fixes for CSI backup and restore. (Fixed in v1.13.2 ) 353527851 WebSocket connection drops when using VerifyJwt or OAuthV2 VerifyJWTAccessToken operations. (Fixed in v1.13.1 ) 351440306 An issue was fixed where trace could not be viewed in the UI for orgs with DRZ enabled. (Fixed in v1.13.1 ) 347798999 You can now configure forward proxy for opentelemetry pods in Apigee hybrid. (Fixed in v1.12.2 ) 338638343 An ID is now added at the end of apigee-env and virtualhost guardrails pods to make the pod names unique. (Fixed in v1.13.1 ) 237656263 Fix added to make use of asynchronous ServiceCallout execution when the ServiceCallout policy <Response> element is not present (Fixed in v1.13.2 ) 181569113 Fixed an issue in new debug session creation. (Fixed in v1.12.3 ) v1.14.0 Security Bug ID Description N/A Security fixes for apigee-redis .
- 292571089 An error with support for CSI backup and restore for Cassandra was fixed. (Fixed in Apigee hybrid v1.10.3) 292118812 Fixed UDCA regression in Hybrid 1.10.1 where UDCA would ignore forward proxy configuration. (Fixed in Apigee hybrid v1.10.2) 289254725 Implemented a fix to prevent failure of proxy deployments that include the OASValidation policy. (Fixed in Apigee hybrid v1.10.1) 287321226 Security context has been corrected for apigee-prom-prometheus to avoid privilege escalation. (Fixed in Apigee hybrid v1.10.3) 277353680 Fixed issue causing target server HealthMonitors to continue beyond revision or deletion of the proxy.
- The CSI backup script has been fixed to prevent a resource naming issue that could cause backups to fail. (Fixed in Apigee hybrid v1.9.4 and v1.10.0) 273561434 Some projects were unable to run debug sessions. (Fixed in Apigee hybrid v1.8.8 and v1.9.3) 274292101 In certain circumstances, environment-scoped KVMs in hybrid could cause rollback issues for MART. (Fixed in Apigee hybrid v1.8.6) 274999014 Restrict watcher RBAC to a single K8s namespace 278646149 In certain circumstances, the logger.livenessProbe.timeoutSeconds configuration property was not working as expected.

### Configuration property reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For information on CSI backup and restore for cloud platforms such as Google Cloud, AWS, and Azure, see CSI backup and restore . cassandra.restore.dbStorageBucket Advanced Introduced in version: 1.0.0 Default value: None Chart: apigee-datastore Required if restore is enabled and cassandra.restore.cloudProvider is set to GCP .
- For information on CSI backup and restore for cloud platforms such as Google Cloud, AWS, and Azure, see CSI backup and restore . cassandra.backup.dbStorageBucket Advanced Introduced in version: 1.0.0 Default value: None Chart: apigee-datastore Required if backup is enabled and cassandra.backup.cloudProvider is set to GCP .

