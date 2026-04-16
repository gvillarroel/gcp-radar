---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.799Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "AWS source containerization"
feature_slug: "aws-source-containerization"
latest_feature_date: "2022-12-06"
deprecation_date: "2022-12-06"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/resources"
  - "https://docs.cloud.google.com/migrate/containers/docs/support"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan"
keywords:
  - "aws"
  - "source"
  - "containerization"
  - "sources"
  - "deprecated"
  - "2022"
  - "12"
  - "06"
---

# AWS source containerization

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Containerization from AWS sources is deprecated; deprecated on 2022-12-06.

## Extended Definition

Containerization from AWS sources is deprecated; deprecated on 2022-12-06.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/resources](https://docs.cloud.google.com/migrate/containers/docs/resources)
- [https://docs.cloud.google.com/migrate/containers/docs/support](https://docs.cloud.google.com/migrate/containers/docs/support)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan)

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

### "Customize migration plan for Linux VMs \_|\_ Migrate to Containers \_|\_\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- Shown below is an example PersistentVolumeClaim and PersistentVolume definitions in the deployment spec.yaml file: apiVersion : v1 kind : PersistentVolumeClaim spec : accessModes : - ReadWriteOnce resources : requests : storage : 1Mi storageClassName : "" volumeName : nfs-pv apiVersion : v1 kind : PersistentVolume metadata : name : nfs-pv spec : mountOptions : - rw - hard nfs : path : /vol1 server : 10.49.232.26 Customize log data written to Cloud Logging Typically a source VM writes information to one or more log files.
- Consider excluding the below detected files and any other sparse files by uncommenting and placing them in the global filters section, or export them to a persistent volume by specifying them in the data folder section. - '- /a/b' # (1.8GB, last access 2022-02-02 10:50:30, last modified 2020-02-02 10:50:30) - '- /a/d' # (1.8GB, last access 2022-02-02 10:50:30, last modified 2020-02-02 10:50:30) Set the name of the container image The name field value in the image section defines the name of the image created from a migrated VM that is used for the container.
- For example, Migrate to Containers detects the following endpoints: endpoints : - port : 80 protocol : HTTP name : backend-server-nginx - port : 6379 protocol : TCP name : backend-server-redis To set the value of the name property, Migrate to Containers combines the source VM name, backend-server in this example, with the program name of the Service.
- Consider uncommenting and placing them under either the global filters or the data folder section. - '- /a' # (1.8GB, last access 2022-02-02 10:50:30, last modified 2020-02-02 10:50:30) - '- /a/c' # (1.8GB, last access 2022-02-02 10:50:30, last modified 2020-02-02 10:50:30) Sparse files will fail the run of a docker image.

