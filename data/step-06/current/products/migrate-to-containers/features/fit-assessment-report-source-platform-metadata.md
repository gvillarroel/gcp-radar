---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.843Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Fit assessment report source platform metadata"
feature_slug: "fit-assessment-report-source-platform-metadata"
latest_feature_date: "2021-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/mcdc-aws-collection-tutorial"
  - "https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-batch-collection-tutorial"
  - "https://docs.cloud.google.com/migrate/containers/docs/offline-assessment-overview"
keywords:
  - "fit"
  - "assessment"
  - "report"
  - "source"
  - "platform"
  - "metadata"
  - "adds"
  - "specific"
---

# Fit assessment report source platform metadata

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Adds source platform and platform-specific VM path information to fit assessment reports.

## Extended Definition

Adds source platform and platform-specific VM path information to fit assessment reports.

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
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Generate an offline assessment report After all the data is collected, you can produce a detailed HTML report: ./mcdc report --format html --full > REPORT NAME .html (Advanced) Modify the scripts to suit your needs It is possible that neither of the scripts exactly suit your needs.
- Generate an offline assessment report. (Advanced) Modify the scripts to suit your needs. (Advanced) Write an orchestration script from scratch.
- Download the script: curl -O https://raw.githubusercontent.com/GoogleCloudPlatform/migrate-to-containers/main/scripts/mcdc/mcdc collect aws guest ssh.sh chmod +x mcdc collect aws guest ssh.sh Run the script and save the output to a file: ./mcdc collect aws guest ssh.sh --region REGION Replace REGION with the region of your EC2 VMs.
- Home Documentation Migration Migrate to Containers Guides Send feedback Collect guest data from EC2 VMs for offline assessment Stay organized with collections Save and categorize content based on your preferences.

### "Batching guest discovery and data collection \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-batch-collection-tutorial](https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-batch-collection-tutorial)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Generate a CSV file with all the discovered VMs To generate a CSV file, use the export script from the Migrate to Containers repository on GitHub. vms = $( mcdc report --format csv tail -n +2 awk -F ',' '{; print $2";"$3";"$4";;;"}' ) printf "%s\n" "Name;Platform VM ID;OS Family;IP;USERNAME;PASSWORD" printf "%s\n" " $vms " The script uses the report command to generate a CSV file containing all the VMs that were discovered in the previous step.
- Generate an offline assessment report After all the data is collected, you can produce a detailed HTML report: ./mcdc report --format html --full > REPORT NAME .html What's next Learn how to collect guest data from EC2 instances .
- Generate an offline assessment report.
- Repeat this step for each CSV file generated in the previous step. url regex = '^https?://[-A-Za-z0-9\+&@#/%?= !:,.;] [-A-Za-z0-9\+&@#/%= ]\.[-A-Za-z0-9\+&@#/%?= !:,.;] [-A-Za-z0-9\+&@#/%= ]$' read -r -p "CSV file name: " CSV FILE if [[ ! -r " $CSV FILE " ]] ; then echo "The file $CSV FILE does not exist or can not be accessed." exit 1 fi read -r -p "vSphere URL: " VSPHERE URL if ! [[ $VSPHERE URL = $url regex ]] ; then echo "vSphere URL $VSPHERE URL IS not a valid URL" exit 1 fi read -r -p "vSphere username: " VSPHERE USER read -r -s -p "vSphere password: " VSPHERE PASSWORD echo "" read -r -p "Default username: " DEFAULT USER read -r -s -p "Default password: " DEFAULT PASSWORD echo "" CSV fields #NAME;PLATFORM VM ID;OS;IP;USERNAME;PASSWORD while IFS = ";" read -r vm name vm id os ip username password do if [ -z " $username " ] then username = $DEFAULT USER fi if [ -z " $password " ] then password = $DEFAULT PASSWORD fi if [ ! -z " $vm id " ] then Note that the below only works for VMWare VMs vm id after the last slash if prefixed by vSphere IP mod vm id = $( echo " $vm id " sed 's/. \///' ) mcdc discover vsphere guest --url $VSPHERE URL -u $VSPHERE USER -p $VSPHERE PASSWORD --vm-user $username --vm-password $password $mod vm id else echo "Skipping VM: $vm name because it has no VM ID" fi done < < ( tail -n +1 $CSV FILE ) The script uses the discover vsphere guest command to upload and execute the guest collection script on the VM.

### "Offline assessment overview \_|\_ Migrate to Containers \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/offline-assessment-overview](https://docs.cloud.google.com/migrate/containers/docs/offline-assessment-overview)
- Source ID: `site-docs-root-2`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The offline assessment creates reports that provide you with a high-level fit assessment result for migration and potential blockers for different migration journeys.
- A detailed report on the applicable assessment rules, including any technical blockers to modernization.
- It provides an overall fit assessment using one of the following scores: Excellent fit Good fit, with some findings that might require attention Needs minimal work before migrating Needs moderate work before migrating Needs major work before migrating No fit Insufficient data The offline assessment also gives you: The ability to get the assessment information about physical servers and virtual machine (VM) instances in your infrastructure.
- Offline assessment overview The Migration Center discovery client CLI or mcdc CLI lets you run an offline assessment with the information that you collected in the discovery phase.

