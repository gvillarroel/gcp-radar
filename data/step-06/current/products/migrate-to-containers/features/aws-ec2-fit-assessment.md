---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.839Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "AWS EC2 fit assessment"
feature_slug: "aws-ec2-fit-assessment"
latest_feature_date: "2021-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/mcdc-aws-collection-tutorial"
  - "https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-batch-collection-tutorial"
  - "https://docs.cloud.google.com/migrate/containers/docs/offline-assessment-overview"
keywords:
  - "aws"
  - "ec2"
  - "fit"
  - "assessment"
  - "enables"
  - "assessments"
  - "workloads"
  - "collection"
---

# AWS EC2 fit assessment

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Enables fit assessments for AWS EC2 workloads using collection scripts run on the instance or over SSH.

## Extended Definition

Enables fit assessments for AWS EC2 workloads using collection scripts run on the instance or over SSH.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/mcdc-aws-collection-tutorial](https://docs.cloud.google.com/migrate/containers/docs/mcdc-aws-collection-tutorial)
- [https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-batch-collection-tutorial](https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-batch-collection-tutorial)
- [https://docs.cloud.google.com/migrate/containers/docs/offline-assessment-overview](https://docs.cloud.google.com/migrate/containers/docs/offline-assessment-overview)

## Supporting Pages

### "Collect guest data from EC2 VMs for offline assessment \_|\_ Migrate to\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/mcdc-aws-collection-tutorial](https://docs.cloud.google.com/migrate/containers/docs/mcdc-aws-collection-tutorial)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Migration Migrate to Containers Guides Send feedback Collect guest data from EC2 VMs for offline assessment Stay organized with collections Save and categorize content based on your preferences.
- Generate an offline assessment report After all the data is collected, you can produce a detailed HTML report: ./mcdc report --format html --full > REPORT NAME .html (Advanced) Modify the scripts to suit your needs It is possible that neither of the scripts exactly suit your needs.
- The scripts are heavily commented to make them easy to understand. (Advanced) Write an orchestration script from scratch To orchestrate guest discovery and data collection at scale, do the following: Identify all VMs you want to collect from.
- This tutorial walks you through the process of discovering and collecting data on EC2 virtual machine (VM) instances, to be used for offline technical assessment using the Migration Center discovery client CLI.

### "Batching guest discovery and data collection \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-batch-collection-tutorial](https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-batch-collection-tutorial)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Repeat this step for each CSV file generated in the previous step. url regex = '^https?://[-A-Za-z0-9\+&@#/%?= !:,.;] [-A-Za-z0-9\+&@#/%= ]\.[-A-Za-z0-9\+&@#/%?= !:,.;] [-A-Za-z0-9\+&@#/%= ]$' read -r -p "CSV file name: " CSV FILE if [[ ! -r " $CSV FILE " ]] ; then echo "The file $CSV FILE does not exist or can not be accessed." exit 1 fi read -r -p "vSphere URL: " VSPHERE URL if ! [[ $VSPHERE URL = $url regex ]] ; then echo "vSphere URL $VSPHERE URL IS not a valid URL" exit 1 fi read -r -p "vSphere username: " VSPHERE USER read -r -s -p "vSphere password: " VSPHERE PASSWORD echo "" read -r -p "Default username: " DEFAULT USER read -r -s -p "Default password: " DEFAULT PASSWORD echo "" CSV fields #NAME;PLATFORM VM ID;OS;IP;USERNAME;PASSWORD while IFS = ";" read -r vm name vm id os ip username password do if [ -z " $username " ] then username = $DEFAULT USER fi if [ -z " $password " ] then password = $DEFAULT PASSWORD fi if [ ! -z " $vm id " ] then Note that the below only works for VMWare VMs vm id after the last slash if prefixed by vSphere IP mod vm id = $( echo " $vm id " sed 's/. \///' ) mcdc discover vsphere guest --url $VSPHERE URL -u $VSPHERE USER -p $VSPHERE PASSWORD --vm-user $username --vm-password $password $mod vm id else echo "Skipping VM: $vm name because it has no VM ID" fi done < < ( tail -n +1 $CSV FILE ) The script uses the discover vsphere guest command to upload and execute the guest collection script on the VM.
- Create the text file: cat <<EOF >> INPUT FILE CSV FILES PREFIX CSV FILE SUFFIX VSPHERE URL VSPHERE USER VSPHERE PASSWORD VM USER VM PASSWORD EOF Replace the following: INPUT FILE : input filename CSV FILES PREFIX : CSV filename prefix CSV FILE SUFFIX : CSV filename suffix VSPHERE URL : the URL for your vCenter Server instance or the vSphere Client VSPHERE USER : vCenter username VSPHERE PASSWORD : vCenter password VM USER : VM username VM PASSWORD : VM password Run the guest collection script: nohup ./mcdc collect vms guest tools.sh < INPUT FILE > /tmp/mcdc.out 2>&1 & Repeat steps 1 and 2 for each CSV file generated in the previous step.
- View the list of generated CSV files: ls -lrt CSV FILES PREFIX Run guest discovery on all the VMs in a CSV files To run the guest discovery for the VMs in a CSV file, use the collection script from the Migrate to Containers GitHub repository.
- Generate an offline assessment report After all the data is collected, you can produce a detailed HTML report: ./mcdc report --format html --full > REPORT NAME .html What's next Learn how to collect guest data from EC2 instances .

### "Offline assessment overview \_|\_ Migrate to Containers \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/offline-assessment-overview](https://docs.cloud.google.com/migrate/containers/docs/offline-assessment-overview)
- Source ID: `site-docs-root-2`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It provides an overall fit assessment using one of the following scores: Excellent fit Good fit, with some findings that might require attention Needs minimal work before migrating Needs moderate work before migrating Needs major work before migrating No fit Insufficient data The offline assessment also gives you: The ability to get the assessment information about physical servers and virtual machine (VM) instances in your infrastructure.
- Offline assessment overview The Migration Center discovery client CLI or mcdc CLI lets you run an offline assessment with the information that you collected in the discovery phase.
- The offline assessment creates reports that provide you with a high-level fit assessment result for migration and potential blockers for different migration journeys.
- Home Documentation Migration Migrate to Containers Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

