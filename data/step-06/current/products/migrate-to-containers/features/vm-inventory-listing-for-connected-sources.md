---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.817Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "VM inventory listing for connected sources"
feature_slug: "vm-inventory-listing-for-connected-sources"
latest_feature_date: "2022-07-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-quickstart"
  - "https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-batch-collection-tutorial"
  - "https://docs.cloud.google.com/migrate/containers/docs/migration-journey"
keywords:
  - "vm"
  - "inventory"
  - "listing"
  - "connected"
  - "sources"
  - "gce"
  - "local"
  - "vmware"
---

# VM inventory listing for connected sources

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Connected GCE, local VMware, and Migrate for Compute Engine v5 sources expose a VM inventory list for migration planning; Connected local VMware, GCE, and Migrate for Compute Engine v5 sources expose VM inventory through Cloud Console and migctl.

## Extended Definition

Connected GCE, local VMware, and Migrate for Compute Engine v5 sources expose a VM inventory list for migration planning; Connected local VMware, GCE, and Migrate for Compute Engine v5 sources expose VM inventory through Cloud Console and migctl.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-quickstart](https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-quickstart)
- [https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-batch-collection-tutorial](https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-batch-collection-tutorial)
- [https://docs.cloud.google.com/migrate/containers/docs/migration-journey](https://docs.cloud.google.com/migrate/containers/docs/migration-journey)

## Supporting Pages

### "Discover, collect, and assess VMware VMs for migration \_|\_ Migrate to\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-quickstart](https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-quickstart)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Download the latest version of the mcdc CLI and make it executable: curl -O "https://mc-release.storage.googleapis.com/mcdc/ $( curl -s https://mc-release.storage.googleapis.com/mcdc/latest ) /mcdc" chmod +x mcdc Perform VMware inventory discovery Run the inventory discovery: ./mcdc discover vsphere -u USERNAME --url https:// VSPHERE URL Replace the following: USERNAME : your vCenter username VSPHERE URL : the URL for your vCenter Server instance or the vSphere Client The output of the discover command looks like the following: [+] Found 13 VMs Collecting data...
- Discover, collect, and assess VMware VMs for migration Learn how to download the Migration Center discovery client CLI and use it to remotely discover, collect, and assess virtual machine (VM) instances running on VMware for migration and containerization.
- However, you can delete the collected data from the local database.

### "Batching guest discovery and data collection \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-batch-collection-tutorial](https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-batch-collection-tutorial)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Download the latest version of the mcdc CLI and make it executable: curl -O "https://mc-release.storage.googleapis.com/mcdc/ $( curl -s https://mc-release.storage.googleapis.com/mcdc/latest ) /mcdc" chmod +x mcdc Add the mcdc CLI to your shell path: PATH = $PATH : pwd Perform a VMware inventory discovery Run the inventory discovery: ./mcdc discover vsphere -u USERNAME --url https:// VSPHERE URL Replace the following: USERNAME : your vCenter username VSPHERE URL : the URL for your vCenter Server instance or the vSphere Client The output of the discover command looks like the following: [+] Found 528 VMs Collecting data...
- Run a VMWare inventory discovery.
- Repeat this step for each CSV file generated in the previous step. url regex = '^https?://[-A-Za-z0-9\+&@#/%?= !:,.;] [-A-Za-z0-9\+&@#/%= ]\.[-A-Za-z0-9\+&@#/%?= !:,.;] [-A-Za-z0-9\+&@#/%= ]$' read -r -p "CSV file name: " CSV FILE if [[ ! -r " $CSV FILE " ]] ; then echo "The file $CSV FILE does not exist or can not be accessed." exit 1 fi read -r -p "vSphere URL: " VSPHERE URL if ! [[ $VSPHERE URL = $url regex ]] ; then echo "vSphere URL $VSPHERE URL IS not a valid URL" exit 1 fi read -r -p "vSphere username: " VSPHERE USER read -r -s -p "vSphere password: " VSPHERE PASSWORD echo "" read -r -p "Default username: " DEFAULT USER read -r -s -p "Default password: " DEFAULT PASSWORD echo "" CSV fields #NAME;PLATFORM VM ID;OS;IP;USERNAME;PASSWORD while IFS = ";" read -r vm name vm id os ip username password do if [ -z " $username " ] then username = $DEFAULT USER fi if [ -z " $password " ] then password = $DEFAULT PASSWORD fi if [ ! -z " $vm id " ] then Note that the below only works for VMWare VMs vm id after the last slash if prefixed by vSphere IP mod vm id = $( echo " $vm id " sed 's/. \///' ) mcdc discover vsphere guest --url $VSPHERE URL -u $VSPHERE USER -p $VSPHERE PASSWORD --vm-user $username --vm-password $password $mod vm id else echo "Skipping VM: $vm name because it has no VM ID" fi done < < ( tail -n +1 $CSV FILE ) The script uses the discover vsphere guest command to upload and execute the guest collection script on the VM.
- This tutorial walks you through the process of discovering and collecting data on a batch of VMware virtual machine (VM) instances using the Migration Center discovery client CLI guest discovery.

### "Migration journey for GKE, GKE Enterprise, and Cloud Run \_|\_ Migrate to\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/migration-journey](https://docs.cloud.google.com/migrate/containers/docs/migration-journey)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

