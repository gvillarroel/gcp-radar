---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.816Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Local OVF source support"
feature_slug: "local-ovf-source-support"
latest_feature_date: "2022-07-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/migrate-vm"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan"
keywords:
  - "local"
  - "ovf"
  - "source"
  - "files"
  - "can"
  - "imported"
  - "create"
  - "anthos"
---

# Local OVF source support

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Local OVF files can be imported to create Anthos VM Runtime migrations.

## Extended Definition

Local OVF files can be imported to create Anthos VM Runtime migrations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan)

## Supporting Pages

### Migrate a Linux VM using Migrate to Containers CLI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create the migration plan On the quickstart-local-vm command tab, create the migration plan: ./m2c analyze \ --source quickstart-vm-filesystem --plugin linux-vm-container \ --output analysis-output After the analysis is complete, a new directory called analysis-output is created which contains the migration plan, config.yaml .
- Install Docker and allow the non-root user to run containers: Download the convenience script curl -fsSL https://get.docker.com -o install-docker.sh Install Docker sudo sh install-docker.sh Allow the non-root user to access Docker sudo usermod -aG docker $USER Activate the group changes newgrp docker Install Skaffold: curl -Lo skaffold https://storage.googleapis.com/skaffold/releases/latest/skaffold-linux-amd64 && \ sudo install skaffold /usr/local/bin/ Download the Migrate to Containers CLI: curl -O "https://m2c-cli-release.storage.googleapis.com/ $( curl -s https://m2c-cli-release.storage.googleapis.com/latest ) /linux/amd64/m2c" chmod +x ./m2c Migrate the source VM A migration typically involves three steps: copying the source VM file system, analyzing the file system to create a migration plan, and generating the migration artifacts.
- Create a Compute Engine VM to use as a local machine In this section, you create a Linux VM that you can use as your local machine to perform the different Migrate to Containers operations for migrating the source VM.
- On the quickstart-local-vm command tab, install the Google Cloud CLI: Import the Google Cloud public key. curl https://packages.cloud.google.com/apt/doc/apt-key.gpg sudo gpg --dearmor -o /usr/share/keyrings/cloud.google.gpg Add the gcloud CLI distribution URI as a package source echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list Update and install gcloud sudo apt-get update && sudo apt-get install google-cloud-cli Get started gcloud init To complete the gcloud CLI setup, follow the instructions that appear on the quickstart-local-vm command tab: To select the account to use to perform various operations, enter 1 .

### "Copy the source machine's file system \_|\_ Migrate to Containers \_|\_\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Direct SSH ./m2c copy ssh [ USERNAME @] HOSTNAME \ -i PATH TO PRIVATE KEY \ -o OUTPUT FILESYSTEM DIR \ --filters filters.txt gcloud ./m2c copy gcloud \ -p PROJECT ID \ -z ZONE \ -n VM NAME \ -o OUTPUT FILESYSTEM DIR \ --filters filters.txt Create a local copy of the Windows source machine file system For Windows source machines, you need to copy the disk images in VHD or VHDX format for the migration process.
- Direct SSH To copy using direct SSH access, run the following command: ./m2c copy ssh [ USERNAME @] HOSTNAME \ -i PATH TO PRIVATE KEY \ -o OUTPUT FILESYSTEM DIR Replace the following: USERNAME : your username HOSTNAME : the hostname PATH TO PRIVATE KEY : the path to private key OUTPUT FILESYSTEM DIR : the path for the output directory on your local machine where you want to copy the source machine's file system gcloud If the source machine has a public IP, run the following command: ./m2c copy gcloud \ -p PROJECT ID \ -z ZONE \ -n VM NAME \ -o OUTPUT FILESYSTEM DIR Replace the following: PROJECT ID : the project ID ZONE : the zone of your VM VM NAME : the name of the source VM OUTPUT FILESYSTEM DIR : the path for the directory output on your local machine where you want to copy the source machine's file system If the source machine doesn't have a public IP, you can do one of the following: If you are running the Migrate to Containers CLI from a machine in the same internal network, Use the --internal-ip flag.
- Create a local copy of the Linux source machine file system The Migrate to Containers CLI supports access to source machines using either direct SSH connection or by using gcloud .
- Note: The user that you use to access the source machine must be a sudoer to be able to access all files and directories relevant to modernization.

### Create a migration plan \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a migration plan After creating a copy of the source machine's file system on your local machine, the next step is to analyze the file system to prepare a migration plan.
- To retrieve these values, check the running Tomcat server process: ps aux grep catalina To perform the analysis, run the following command: ./m2c analyze \ -s PATH TO COPIED FILESYSTEM \ -p tomcat-container \ -o ANALYSIS OUTPUT PATH \ -r catalina-home= PATH TO CATALINA HOME \ -r catalina-base= PATH TO CATALINA BASE \ -r java-version= JAVA VERSION Replace the following: PATH TO COPIED FILESYSTEM : the path to copied file system directory ANALYSIS OUTPUT PATH : the path to the folder where you want the analysis output to be created PATH TO CATALINA HOME : path to the root of the Tomcat installation PATH TO CATALINA BASE : path to the root of the runtime configuration of the Tomcat instance that you're migrating.
- To retrieve this value, check the running JBoss server process: ps aux grep jboss.home.dir To perform the analysis, run the following command: ./m2c analyze \ -s PATH TO COPIED FILESYSTEM \ -p jboss-container \ -o ANALYSIS OUTPUT PATH \ -r jboss-home= PATH TO JBOSS HOME Replace the following: PATH TO COPIED FILESYSTEM : the path to copied file system directory ANALYSIS OUTPUT PATH : the path to the folder where you want the analysis output to be created PATH TO JBOSS HOME : path to the JBoss installation After the analysis is complete, a new directory is created in the specified output path which contains the migration plan, config.yaml .
- Create a migration plan for WordPress workloads To perform the analysis, run the following command: ./m2c analyze \ -s PATH TO COPIED FILESYSTEM \ -p wordpress-container \ -o ANALYSIS OUTPUT PATH Replace the following: PATH TO COPIED FILESYSTEM : the path to copied file system directory ANALYSIS OUTPUT PATH : the path to the folder where you want the analysis output to be created After the analysis is complete, a new directory is created in the specified output path which contains the migration plan, config.yaml .

