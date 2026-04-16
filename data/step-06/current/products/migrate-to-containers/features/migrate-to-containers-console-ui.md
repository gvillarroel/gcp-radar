---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.780Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Migrate to Containers Console UI"
feature_slug: "migrate-to-containers-console-ui"
latest_feature_date: "2024-01-03"
deprecation_date: "2024-01-03"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/migrate-vm"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/execute-the-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/monitoring-migrated-workloads"
keywords:
  - "migrate"
  - "containers"
  - "console"
  - "ui"
  - "deprecated"
  - "2024"
  - "01"
  - "03"
---

# Migrate to Containers Console UI

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud console UI for Migrate to Containers is deprecated; deprecated on 2024-01-03.

## Extended Definition

The Google Cloud console UI for Migrate to Containers is deprecated; deprecated on 2024-01-03.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/execute-the-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/execute-the-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/monitoring-migrated-workloads](https://docs.cloud.google.com/migrate/containers/docs/monitoring-migrated-workloads)

## Supporting Pages

### Migrate a Linux VM using Migrate to Containers CLI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm)
- Source ID: `site-docs-reference`
- Final score: 47
- Re-rank relevance: N/A

Evidence snippets:
- Install Docker and allow the non-root user to run containers: Download the convenience script curl -fsSL https://get.docker.com -o install-docker.sh Install Docker sudo sh install-docker.sh Allow the non-root user to access Docker sudo usermod -aG docker $USER Activate the group changes newgrp docker Install Skaffold: curl -Lo skaffold https://storage.googleapis.com/skaffold/releases/latest/skaffold-linux-amd64 && \ sudo install skaffold /usr/local/bin/ Download the Migrate to Containers CLI: curl -O "https://m2c-cli-release.storage.googleapis.com/ $( curl -s https://m2c-cli-release.storage.googleapis.com/latest ) /linux/amd64/m2c" chmod +x ./m2c Migrate the source VM A migration typically involves three steps: copying the source VM file system, analyzing the file system to create a migration plan, and generating the migration artifacts.
- Go to Google Cloud console Create a VM: gcloud compute instances create quickstart-source-vm \ --zone = us-central1-a --machine-type = e2-medium \ --subnet = default --scopes = "cloud-platform" \ --tags = http-server,https-server --image = ubuntu-2204-jammy-v20240208 \ --image-project = ubuntu-os-cloud --boot-disk-size = 10GB --boot-disk-type = pd-standard \ --boot-disk-device-name = quickstart-source-vm Allow a few minutes for the VM creation to complete.
- Go to Google Cloud console Create a VM: gcloud compute instances create quickstart-local-vm \ --zone = us-central1-a --machine-type = e2-medium \ --subnet = default --scopes = "cloud-platform" \ --tags = http-server,https-server --image = ubuntu-2204-jammy-v20240208 \ --image-project = ubuntu-os-cloud --boot-disk-size = 50GB --boot-disk-type = pd-standard \ --boot-disk-device-name = quickstart-local-vm Allow a few minutes for the VM creation to complete.
- On the quickstart-local-vm command tab, get a list of the default Migrate to Containers filters in a file called filters.txt : ./m2c copy default-filters > filters.txt To edit the default filters, do the following: Open the filters.txt file in a text editor: vi filters.txt To make changes in the file, press i .

### Execute the migration \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/execute-the-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/execute-the-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Migration Migrate to Containers Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Additionally, Migrate to Containers CLI generates a Skaffold configuration that you can use to build and deploy all of the generated images in a single step.

### "Monitor migrated workloads \_|\_ Migrate to Containers \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/monitoring-migrated-workloads](https://docs.cloud.google.com/migrate/containers/docs/monitoring-migrated-workloads)
- Source ID: `site-docs-root-2`
- Final score: 39
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Migration Migrate to Containers Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- View metrics on the GKE console The GKE console and Cloud Monitoring provide a suite of tools to monitor your containers.
- Monitor migrated workloads You can view logs and metrics from your migrated workloads in the Google Cloud console.
- You can view system logs that are in Cloud Logging from the Google Cloud console.

