---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.857Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Linux discovery tool"
feature_slug: "linux-discovery-tool"
latest_feature_date: "2021-04-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-batch-collection-tutorial"
  - "https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-quickstart"
  - "https://docs.cloud.google.com/migrate/containers/docs/fit-assessment"
keywords:
  - "linux"
  - "discovery"
  - "tool"
  - "now"
  - "outputs"
  - "html"
  - "json"
  - "reports"
---

# Linux discovery tool

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

The Linux discovery tool now outputs HTML and JSON reports, uses a fit assessment instead of a 0-10 fit score, and includes more source VM details; The Linux discovery tool helps assess Linux VM workloads for migration to containers.

## Extended Definition

The Linux discovery tool now outputs HTML and JSON reports, uses a fit assessment instead of a 0-10 fit score, and includes more source VM details; The Linux discovery tool helps assess Linux VM workloads for migration to containers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-batch-collection-tutorial](https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-batch-collection-tutorial)
- [https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-quickstart](https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-quickstart)
- [https://docs.cloud.google.com/migrate/containers/docs/fit-assessment](https://docs.cloud.google.com/migrate/containers/docs/fit-assessment)

## Supporting Pages

### "Batching guest discovery and data collection \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-batch-collection-tutorial](https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-batch-collection-tutorial)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Download the script: curl -O https://raw.githubusercontent.com/GoogleCloudPlatform/migrate-to-containers/main/scripts/mcdc/mcdc discovery export guest tools.sh chmod +x mcdc discovery export guest tools.sh Run the script and save the output to a file: ./mcdc discovery export guest tools.sh > VMS CSV FILE Replace VMS CSV FILE with the name you want for the CSV file.
- Create the text file: cat <<EOF >> INPUT FILE CSV FILES PREFIX CSV FILE SUFFIX VSPHERE URL VSPHERE USER VSPHERE PASSWORD VM USER VM PASSWORD EOF Replace the following: INPUT FILE : input filename CSV FILES PREFIX : CSV filename prefix CSV FILE SUFFIX : CSV filename suffix VSPHERE URL : the URL for your vCenter Server instance or the vSphere Client VSPHERE USER : vCenter username VSPHERE PASSWORD : vCenter password VM USER : VM username VM PASSWORD : VM password Run the guest collection script: nohup ./mcdc collect vms guest tools.sh < INPUT FILE > /tmp/mcdc.out 2>&1 & Repeat steps 1 and 2 for each CSV file generated in the previous step.
- Download the latest version of the mcdc CLI and make it executable: curl -O "https://mc-release.storage.googleapis.com/mcdc/ $( curl -s https://mc-release.storage.googleapis.com/mcdc/latest ) /mcdc" chmod +x mcdc Add the mcdc CLI to your shell path: PATH = $PATH : pwd Perform a VMware inventory discovery Run the inventory discovery: ./mcdc discover vsphere -u USERNAME --url https:// VSPHERE URL Replace the following: USERNAME : your vCenter username VSPHERE URL : the URL for your vCenter Server instance or the vSphere Client The output of the discover command looks like the following: [+] Found 528 VMs Collecting data...
- The Linux machine must have the following minimum requirements: glibc version 2.25 or later 4 GB RAM and 10 GB disk space Network connectivity to vCenter and ESX hosts Ensure that you have a vSphere user with the necessary permissions: Read privileges to VMs Read privileges to all the ESX hosts Guest operation modifications Guest operation program execution Guest operation queries Download the mcdc CLI Connect to the Linux machine: ssh MACHINE IP Replace MACHINE IP with the IP address of your Linux machine.

### "Discover, collect, and assess VMware VMs for migration \_|\_ Migrate to\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-quickstart](https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-quickstart)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Generate reports to visualize the assessment Generate a summary report: ./mcdc report --format html > Summary Report.html Generate a detailed report: ./mcdc report --format html --full > Detailed Report.html HTML files named Summary Report.html and Detailed Report.html are created.
- You can generate offline assessment reports in a user-friendly HTML format.
- Download the latest version of the mcdc CLI and make it executable: curl -O "https://mc-release.storage.googleapis.com/mcdc/ $( curl -s https://mc-release.storage.googleapis.com/mcdc/latest ) /mcdc" chmod +x mcdc Perform VMware inventory discovery Run the inventory discovery: ./mcdc discover vsphere -u USERNAME --url https:// VSPHERE URL Replace the following: USERNAME : your vCenter username VSPHERE URL : the URL for your vCenter Server instance or the vSphere Client The output of the discover command looks like the following: [+] Found 13 VMs Collecting data...
- The Linux machine must have the following minimum requirements: glibc version 2.25 or later 4 GB RAM and 10 GB disk space Network connectivity to vCenter and ESX hosts Ensure that you have a vSphere user with the following permissions: Read privileges to VMs Read privileges to all the ESX hosts Guest operation modifications Guest operation program execution Guest operation queries Ensure that you have a user with administrator or root rights to all the target guest VMs.

### Migration Center discovery client CLI overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/fit-assessment](https://docs.cloud.google.com/migrate/containers/docs/fit-assessment)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Migration Center discovery client CLI ( mcdc CLI) is an offline tool that lets you run different types of asset discoveries on your infrastructure.
- Available collection methods Using the mcdc CLI, you can run the following collection methods: Inventory discovery scans and lists all of the VMware VM instances, Amazon Elastic Compute Cloud (EC2) instances, Amazon Relational Database Service (RDS) and Azure Virtual Machine instances ( Preview ).
- Learn more about the following discovery methods: Inventory discovery Guest discovery IP range scan Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Migration Migration Center Guides Send feedback Migration Center discovery client CLI overview Stay organized with collections Save and categorize content based on your preferences.

