---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.803Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "local vSphere source containerization"
feature_slug: "local-vsphere-source-containerization"
latest_feature_date: "2022-12-06"
deprecation_date: "2022-12-06"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/resources"
  - "https://docs.cloud.google.com/migrate/containers/docs/support"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system"
keywords:
  - "local"
  - "vsphere"
  - "source"
  - "containerization"
  - "sources"
  - "deprecated"
  - "2022"
  - "12"
---

# local vSphere source containerization

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Containerization from local vSphere sources is deprecated; deprecated on 2022-12-06.

## Extended Definition

Containerization from local vSphere sources is deprecated; deprecated on 2022-12-06.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/resources](https://docs.cloud.google.com/migrate/containers/docs/resources)
- [https://docs.cloud.google.com/migrate/containers/docs/support](https://docs.cloud.google.com/migrate/containers/docs/support)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system)

## Supporting Pages

### Resources \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/resources](https://docs.cloud.google.com/migrate/containers/docs/resources)
- Source ID: `site-docs-root`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Migration Migrate to Containers Resources Send feedback Resources Stay organized with collections Save and categorize content based on your preferences.
- Additional resources About Linux system containers Details about migration artifacts and maintenance best practices for Migrate to Containers Linux system containers.
- Pricing and quotas Pricing Migrate to Containers pricing is based on the Google Cloud resources used.
- Release notes Migrate to Containers release notes Production updates to Migrate to Containers, including new or updated features, bug fixes, known issues, and deprecated functionality.

### Resources \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/support](https://docs.cloud.google.com/migrate/containers/docs/support)
- Source ID: `site-docs-root`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Migration Migrate to Containers Resources Send feedback Resources Stay organized with collections Save and categorize content based on your preferences.
- Additional resources About Linux system containers Details about migration artifacts and maintenance best practices for Migrate to Containers Linux system containers.
- Pricing and quotas Pricing Migrate to Containers pricing is based on the Google Cloud resources used.
- Release notes Migrate to Containers release notes Production updates to Migrate to Containers, including new or updated features, bug fixes, known issues, and deprecated functionality.

### "Copy the source machine's file system \_|\_ Migrate to Containers \_|\_\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Direct SSH To copy using direct SSH access, run the following command: ./m2c copy ssh [ USERNAME @] HOSTNAME \ -i PATH TO PRIVATE KEY \ -o OUTPUT FILESYSTEM DIR Replace the following: USERNAME : your username HOSTNAME : the hostname PATH TO PRIVATE KEY : the path to private key OUTPUT FILESYSTEM DIR : the path for the output directory on your local machine where you want to copy the source machine's file system gcloud If the source machine has a public IP, run the following command: ./m2c copy gcloud \ -p PROJECT ID \ -z ZONE \ -n VM NAME \ -o OUTPUT FILESYSTEM DIR Replace the following: PROJECT ID : the project ID ZONE : the zone of your VM VM NAME : the name of the source VM OUTPUT FILESYSTEM DIR : the path for the directory output on your local machine where you want to copy the source machine's file system If the source machine doesn't have a public IP, you can do one of the following: If you are running the Migrate to Containers CLI from a machine in the same internal network, Use the --internal-ip flag.
- Direct SSH ./m2c copy ssh [ USERNAME @] HOSTNAME \ -i PATH TO PRIVATE KEY \ -o OUTPUT FILESYSTEM DIR \ --filters filters.txt gcloud ./m2c copy gcloud \ -p PROJECT ID \ -z ZONE \ -n VM NAME \ -o OUTPUT FILESYSTEM DIR \ --filters filters.txt Create a local copy of the Windows source machine file system For Windows source machines, you need to copy the disk images in VHD or VHDX format for the migration process.
- Create a local copy of the Linux source machine file system The Migrate to Containers CLI supports access to source machines using either direct SSH connection or by using gcloud .
- However, Migrate to Containers CLI does not support exporting disk images from your source platform to your local machine.

