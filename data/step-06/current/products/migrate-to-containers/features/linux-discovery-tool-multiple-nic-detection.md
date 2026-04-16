---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.855Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Linux discovery tool multiple NIC detection"
feature_slug: "linux-discovery-tool-multiple-nic-detection"
latest_feature_date: "2021-05-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-batch-collection-tutorial"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-linux"
  - "https://docs.cloud.google.com/migrate/containers/docs/fit-assessment"
keywords:
  - "linux"
  - "discovery"
  - "tool"
  - "multiple"
  - "nic"
  - "detection"
  - "now"
  - "warns"
---

# Linux discovery tool multiple NIC detection

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

The Linux discovery tool now warns when multiple NICs are detected because they can increase migration effort.

## Extended Definition

The Linux discovery tool now warns when multiple NICs are detected because they can increase migration effort.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-batch-collection-tutorial](https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-batch-collection-tutorial)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-linux](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-linux)
- [https://docs.cloud.google.com/migrate/containers/docs/fit-assessment](https://docs.cloud.google.com/migrate/containers/docs/fit-assessment)

## Supporting Pages

### "Batching guest discovery and data collection \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-batch-collection-tutorial](https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-batch-collection-tutorial)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Download the script: curl -O https://raw.githubusercontent.com/GoogleCloudPlatform/migrate-to-containers/main/scripts/mcdc/mcdc discovery export guest tools.sh chmod +x mcdc discovery export guest tools.sh Run the script and save the output to a file: ./mcdc discovery export guest tools.sh > VMS CSV FILE Replace VMS CSV FILE with the name you want for the CSV file.
- Split the CSV file into multiple CSV files with a subset of the VMs To split the large CSV file into smaller CSV files, use the splitter script from the Migrate to Containers repository on GitHub. tail -n +2 $1 split -d -l $num of lines - $2 for file in $2 do head -n 1 $1 > tmp file cat " $file " >> tmp file mv -f tmp file " $file " done Download the script: curl -O https://raw.githubusercontent.com/GoogleCloudPlatform/migrate-to-containers/main/scripts/mcdc/csv splitter.sh chmod +x csv splitter.sh Run the script: ./csv splitter.sh VMS CSV FILE CSV FILES PREFIX LINES PER FILE VMS CSV FILE CSV FILES PREFIX Replace the following: VMS CSV FILE : the input CSV file to split.
- Create the text file: cat <<EOF >> INPUT FILE CSV FILES PREFIX CSV FILE SUFFIX VSPHERE URL VSPHERE USER VSPHERE PASSWORD VM USER VM PASSWORD EOF Replace the following: INPUT FILE : input filename CSV FILES PREFIX : CSV filename prefix CSV FILE SUFFIX : CSV filename suffix VSPHERE URL : the URL for your vCenter Server instance or the vSphere Client VSPHERE USER : vCenter username VSPHERE PASSWORD : vCenter password VM USER : VM username VM PASSWORD : VM password Run the guest collection script: nohup ./mcdc collect vms guest tools.sh < INPUT FILE > /tmp/mcdc.out 2>&1 & Repeat steps 1 and 2 for each CSV file generated in the previous step.
- Download the latest version of the mcdc CLI and make it executable: curl -O "https://mc-release.storage.googleapis.com/mcdc/ $( curl -s https://mc-release.storage.googleapis.com/mcdc/latest ) /mcdc" chmod +x mcdc Add the mcdc CLI to your shell path: PATH = $PATH : pwd Perform a VMware inventory discovery Run the inventory discovery: ./mcdc discover vsphere -u USERNAME --url https:// VSPHERE URL Replace the following: USERNAME : your vCenter username VSPHERE URL : the URL for your vCenter Server instance or the vSphere Client The output of the discover command looks like the following: [+] Found 528 VMs Collecting data...

### Migrate to Containers CLI reference for Linux \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-linux](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-linux)
- Source ID: `site-docs-root`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Migrate to Containers CLI reference for Linux m2c is a command-line tool that lets you set up and execute migrations on your local machine. m2c A command-line interface to Migrate to Containers.
- You can execute the following once: echo "autoload -U compinit; compinit" >> /. zshrc To load completions in your current shell session: source <(m2c completion zsh) To load completions for every new session, execute once: Linux: m2c completion zsh > " ${ fpath [ 1 ] } / m2c" macOS: m2c completion zsh > $(brew --prefix)/share/zsh/site-functions/ m2c You will need to start a new shell for this setup to take effect.
- To load completions in your current shell session: source <(m2c completion bash) To load completions for every new session, execute once: Linux: m2c completion bash > /etc/bash completion.d/m2c macOS: m2c completion bash > $(brew --prefix)/etc/bash completion.d/m2c You will need to start a new shell for this setup to take effect.
- Can be specified multiple times -p,--plugin name Plugin name -s,--source path The path to a file system generated by the m2c copy command --volume localPath:remotePath Bind mounts a file or directory into the container in the format of "localPath:remotePath".

### Migration Center discovery client CLI overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/fit-assessment](https://docs.cloud.google.com/migrate/containers/docs/fit-assessment)
- Source ID: `site-docs-root`
- Final score: 77
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Migration Center discovery client CLI ( mcdc CLI) is an offline tool that lets you run different types of asset discoveries on your infrastructure.
- Available collection methods Using the mcdc CLI, you can run the following collection methods: Inventory discovery scans and lists all of the VMware VM instances, Amazon Elastic Compute Cloud (EC2) instances, Amazon Relational Database Service (RDS) and Azure Virtual Machine instances ( Preview ).
- Learn more about the following discovery methods: Inventory discovery Guest discovery IP range scan Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Migration Migration Center Guides Send feedback Migration Center discovery client CLI overview Stay organized with collections Save and categorize content based on your preferences.

