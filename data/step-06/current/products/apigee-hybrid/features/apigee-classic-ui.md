---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:54:52.834Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "Apigee Classic UI"
feature_slug: "apigee-classic-ui"
latest_feature_date: "2025-05-29"
deprecation_date: "2025-08-29"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/deprecations/apigee-classic-ui"
  - "https://docs.cloud.google.com/apigee/docs/deprecations"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide"
keywords:
  - "transitions"
  - "classic"
  - "being"
  - "shut"
  - "down"
  - "management"
---

# Apigee Classic UI

Product: Apigee hybrid
Coverage: MEDIUM

## Step 02 Summary

The Apigee Classic UI is being shut down as management transitions to the Google Cloud console; deprecated on 2025-08-29.

## Extended Definition

The Apigee Classic UI is being shut down as management transitions to the Google Cloud console; deprecated on 2025-08-29.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/deprecations/apigee-classic-ui](https://docs.cloud.google.com/apigee/docs/deprecations/apigee-classic-ui)
- [https://docs.cloud.google.com/apigee/docs/deprecations](https://docs.cloud.google.com/apigee/docs/deprecations)
- [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide)

## Supporting Pages

### Apigee Classic UI shutdown \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/deprecations/apigee-classic-ui](https://docs.cloud.google.com/apigee/docs/deprecations/apigee-classic-ui)
- Source ID: `site-docs-reference`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- Shutdown schedule The following table lists the shutdown schedule for the Apigee Classic UI: Date Event May 29, 2025 Deprecation announcement sent to customers via Mandatory Service Announcement (MSA).
- Home Documentation Application development Apigee Send feedback Apigee Classic UI shutdown Stay organized with collections Save and categorize content based on your preferences.
- September 29, 2025 Final shutdown of the Apigee Classic UI for all allowlisted (exception) customers.
- The Apigee Classic UI will be shutdown as of August 29, 2025.

### Feature deprecations \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/deprecations](https://docs.cloud.google.com/apigee/docs/deprecations)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Feature Shutdown announced Shutdown date Details Apigee Classic UI May 29, 2025 August 29, 2025 See Apigee Classic UI shutdown The following table lists Apigee features that were deprecated and have been shut down.
- Feature Deprecated Shutdown date Details Gemini Code Assist @Apigee tool October 9, 2025 October 14, 2025 See Gemini Code Assist @Apigee tool deprecation apigeectl command line interface April 17, 2024 April 17, 2025 See apigeectl deprecation ProxyV2 and TargetV2 metrics April 17, 2024 April 17, 2025 See ProxyV2 and TargetV2 metrics deprecation Configurable API proxies (Preview) August 17, 2023 November 10, 2023 See Configurable API proxies (preview) deprecation Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following table lists current Apigee feature deprecations and the related shutdown schedules.
- After this period of time, the feature or service is scheduled for shutdown.

### "New Apigee hybrid installation and administration Preview \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- In this document: Preview Feedback Overview Changes in the new installation process Prerequisites Preview version Apigee hybrid setup Tools Basic Apigee Hybrid Installation Download setup files Run setup Customized Apigee Hybrid installation Download setup files Create namespace Using docker images from private repositories (optional) Configuring imagePullSecrets (optional) Configuring forward proxy (optional) Specifying ingress TLS certificates Update ingress deployment Configuring custom Google Cloud service accounts Using workload identities Edit resource yamls Create initialization resources and controller Give permissions to Synchronizer service account to interact with Control Plane Create Apigee data plane components Wait for resources to start Customize installation for cert-manager in a custom namespace Kustomize and Components Overview How to use Components OpenShift imagepullsecret nodeselector workload-identity http-proxy logger and metrics gcs-backup and gcs-restore non-gcs-backup and non-gcs-restore http-client non-sni-client http-and-non-sni-client multi-region Concepts Adding a new environment Using force delete in Apigee Datastore Understanding the script Apigee Hybrid Setup Folder Structure Storing service account keys in external vaults Apigee Hybrid Upgrade Create Backup Upgrade your Kubernetes platform if needed Download setup files Update service account permissions if needed Upgrade controller Update Apigee Kubernetes components Apigee Hybrid Rollback Restore apigee-hybrid-setup Rollback Kubernetes components Rollback controller Cleanup Deleting an environment Deleting a hybrid setup Multi Instance Installation Multi Instance setup on GKE Troubleshooting Supportability, Diagnosis & Troubleshooting Guide Manual Cleanup after using forceDelete in multi Region Apigee Hybrid setup Preview Note: This document and the software it is documenting are part of a preview release.
- The command checks the nodetool status for the two regions. kubectl exec apigee - cassandra - default - 0 - n apigee -- nodetool - u JMX user - pw JMX password status Datacenter: us-central1 ======================= Status=Up/Down / State=Normal/Leaving/Joining/Moving -- Address Load Tokens Owns (effective) Host ID Rack UN 10.12.1.45 112.09 KiB 256 100.0% 3c98c816-3f4d-48f0-9717-03d0c998637f ra-1 UN 10.12.4.36 95.27 KiB 256 100.0% 0a36383d-1d9e-41e2-924c-7b62be12d6cc ra-1 UN 10.12.5.22 88.7 KiB 256 100.0% 3561f4fa-af3d-4ea4-93b2-79ac7e938201 ra-1 Datacenter: us-west1 ==================== Status=Up/Down / State=Normal/Leaving/Joining/Moving -- Address Load Tokens Owns (effective) Host ID Rack UN 10.0.4.33 78.69 KiB 256 100.0% a200217d-260b-45cd-b83c-182b27ff4c99 ra-1 UN 10.0.0.21 78.68 KiB 256 100.0% 9f3364b9-a7a1-409c-9356-b7d1d312e52b ra-1 UN 10.0.1.26 15.46 KiB 256 100.0% 1666df0f-702e-4c5b-8b6e-086d0f2e47fa ra-1 Troubleshooting Supportability, Diagnosis & Troubleshooting Guide https://cloud.google.com/apigee/docs/api-platform/troubleshoot/playbooks/troubleshooting-apigee-hybrid .
- 4ed2c903-ff56-40fa-a15e-80a3de3cb22d ra-1 DN 10.60.0.17 573.08 KiB 256 ? f9a50d19-c04a-4d0d-a088-612384bed9f5 ra-1 Remove all the nodes in the deleted region (here us-west1 ) region apigee @ apigee - cassandra - default - 0 : $ nodetool - u $ APIGEE JMX USER - pw $ APIGEE JMX PASSWORD removenode 355 d6ace - ab77 - 42 cb - 8138 - 9993 bfd62d0e apigee @ apigee - cassandra - default - 0 : $ nodetool - u $ APIGEE JMX USER - pw $ APIGEE JMX PASSWORD removenode 4 ed2c903 - ff56 - 40 fa - a15e - 80 a3de3cb22d apigee @ apigee - cassandra - default - 0 : $ nodetool - u $ APIGEE JMX USER - pw $ APIGEE JMX PASSWORD removenode f9a50d19 - c04a - 4 d0d - a088 - 612384 bed9f5 Verify no nodes of the deleted region (here us-west1 ) are left apigee @ apigee - cassandra - default - 0 : $ nodetool - u $ APIGEE JMX USER - pw $ APIGEE JMX PASSWORD status Datacenter: us-east1 ==================== Status=Up/Down / State=Normal/Leaving/Joining/Moving -- Address Load Tokens Owns Host ID Rack UN 10.52.0.212 699.71 KiB 256 ? e1aa61e3-4eae-4549-9b58-506d495d87ab ra-1 UN 10.52.0.72 586.77 KiB 256 ?
- Download setup files Run setup Download setup files Download and prepare the setup files by cloning the GitHub repository at https://github.com/apigee/apigee-hybrid-install/releases/tag/preview-1 : Clone the repository: git clone https://github.com/apigee/apigee-hybrid-install.git Navigate to the directory for the cloned repository: cd apigee-hybrid-install Create a branch from the preview-1 tag: git branch preview-1 preview-1 git checkout preview-1 Make the setup script executable: chmod + x ./ tools / apigee - hybrid - setup . sh The cloned repository will have a structure resembling the one described in Apigee Hybrid Setup Folder Structure : Run setup Run the apigee-hybrid-setup.sh shell script located inside the tools/ folder. ./ tools / apigee - hybrid - setup . sh -- cluster - name $ CLUSTER NAME -- cluster - region $ CLUSTER LOCATION -- org $ ORG NAME -- setup - all Note: Running the script with these arguments uses the Apigee Organization, Environment, and Environment group you created in Prerequisites .

