---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.309Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Google Cloud console Config Sync status view"
feature_slug: "google-cloud-console-config-sync-status-view"
latest_feature_date: "2022-09-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/install-fleet"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync"
keywords:
  - "console"
  - "config"
  - "sync"
  - "status"
  - "view"
  - "can"
  - "display"
  - "fleet"
---

# Google Cloud console Config Sync status view

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud console can display sync status for fleet-registered clusters and drill down into individual resource reconciliation status.

## Extended Definition

The Google Cloud console can display sync status for fleet-registered clusters and drill down into individual resource reconciliation status.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/install-fleet](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/install-fleet)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync)

## Supporting Pages

### Deploy fleet packages \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the Settings tab, after a few minutes, you should see Enabled in the Status column for the clusters in your fleet. gcloud Enable the ConfigManagement fleet feature: gcloud beta container fleet config-management enable To enable Config Sync, create a file named apply-spec.yaml with the following content: applySpecVersion : 1 spec : configSync : enabled : true Apply the apply-spec.yaml file: gcloud beta container fleet config-management apply \ --membership = MEMBERSHIP NAME \ --config = apply-spec.yaml Replace MEMBERSHIP NAME with the fleet membership name that you chose when you registered your cluster.
- When you install Config Sync in the Google Cloud console, selecting individual clusters automatically registers those clusters to your fleet.
- Console To install Config Sync, all clusters must be registered to a fleet.
- To list rollouts and view their status, run the following command: gcloud container fleet packages rollouts list --fleet-package FLEET PACKAGE NAME The output resembles the following: ROLLOUT RELEASE START TIME END TIME STATE MESSAGE rollout-20250515-132857 v2-0-0 2025-05-15T13:28:58Z STALLED rollout-20250418-165528 v1-0-0 2025-04-18T16:55:29Z 2025-04-18T16:57:47Z COMPLETED Describing a rollout gives you detailed information about a specific rollout, including the status for each targeted cluster and any cluster-specific errors.

### Install Config Sync as a fleet default \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/install-fleet](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/install-fleet)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Confirm that your membership configurations are synced with the fleet default: gcloud beta container fleet config-management status The output of this command should display as Yes for the Synced to Fleet Default status of the membership that you synced. console Go to Feature Manager : Go to Feature Manager: Config Sync In the cluster table, select the clusters that you want to sync to fleet settings.
- Disable fleet defaults To disable Config Sync default settings across your fleet, follow these steps: To disable the fleet default configuration, run the following command: gcloud beta container fleet config-management disable --fleet-default-member-config Confirm that the fleet default configuration is disabled: gcloud beta container fleet config-management status What's next Learn how to upgrade Config Sync .
- Update existing clusters to inherit fleet defaults To update existing clusters to use your default Config Sync settings, you can use the Google Cloud console or gcloud CLI to sync selected fleet clusters to your fleet defaults.
- Terraform To enable Config Sync as a fleet default, refer to the following example: resource "google gke hub feature" "configmanagement feature member" { name = "configmanagement" location = "global" fleet default member config { configmanagement { config sync { The field enabled was introduced in Terraform version 5.41.0, and needs to be set to true explicitly to install Config Sync. enabled = true oci { sync repo = " REPO " policy dir = " DIRECTORY " secret type = " SECRET " } } } } } Replace the following: REPO : the URL to the OCI image repository that contains your configuration files.

### Customize your Config Sync installation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- For more details about the information supplied by nomos status , including reported errors, see Check Config Sync status in the nomos command-line tool documentation. console Complete the following steps: In the Google Cloud console, go to the Config page under the Features section.
- After a few minutes, you should see Synced in the Sync status column for the cluster that you configured. gcloud Before you continue, make sure you've registered your clusters to a fleet .
- When you install Config Sync in the Google Cloud console, selecting individual clusters automatically registers those clusters to your fleet.
- Console Install Config Sync To install Config Sync, all clusters must be registered to a fleet.

