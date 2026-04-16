---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:53.337Z"
product_name: "Migrate for Compute Engine"
product_slug: "migrate-for-compute-engine"
feature_name: "Google Cloud OS Config agent auto-deployment"
feature_slug: "google-cloud-os-config-agent-auto-deployment"
latest_feature_date: "2020-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started"
keywords:
  - "os"
  - "config"
  - "agent"
  - "auto"
  - "deployment"
  - "automatically"
  - "deploys"
  - "the"
---

# Google Cloud OS Config agent auto-deployment

Product: Migrate for Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Automatically deploys the Google Cloud OS Config agent to migrating virtual machines.

## Extended Definition

Automatically deploys the Google Cloud OS Config agent to migrating virtual machines.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started)

## Supporting Pages

### "Supported operating systems \_|\_ Migrate to Virtual Machines \_|\_ Google\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note that even for Oracle Linux images that support the IDPF driver, the import virtual disk images process doesn't automatically set the corresponding IDPF value in the guestOsFeatures attribute of the image resource.
- These agents and services are installed automatically during the migration.
- If you see any issues with the application, update your OS configuration with specific emphasis on the following: The OS configuration supporting alias IP ranges .
- If the imported images don't have the (UEFI) bootloader configured correctly, the boot falls back to using Basic Input/Output System (BIOS).

### Migrate to Virtual Machines best practices \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, after analyzing the migration plan, you might determine values for the following: The expected migration duration The expected number of VMs to migrate for each time unit The total migration cost The migration cost per VM The available network throughput The compatibility of the tools you're using for backup and disaster recovery with the target environment Consider all deployment environments for your applications when you analyze the migration plan.
- Ensure that the guest OS is correctly configured in VMWare Before migrating your VMs, ensure that VMWare vCenter is not reporting any warnings related to the guest operating system (OS) .
- If you see a warning, fix the guest OS configuration by changing the configured guest OS .
- Ensure your environment meets the requirements When you provision and configure the infrastructure to support your migration, ensure that your environment meets the Migrate to Virtual Machines requirements: The supported operating systems The required roles and permissions on Google Cloud and in your source environment The required Google Cloud services The maximum number of concurrent migrations Ensure that you involve all the relevant teams in the analysis of these requirements because the requirements span different areas, such as computing, networking, security, and compliance.

### "VM migration process \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, Migrate to Virtual Machines adapts network configurations, deploys the Compute Engine agent, and enables the serial console on the migrated VM.
- OS adaptations To function properly on Google Cloud, migrated VMs might need changes to their configuration.
- The cut-over results determine your next actions: Cut-over failed : For some reason, cutover to the new VM instance on Compute Engine failed, possibly due to a network issue or other issue.
- The operating system (OS) adaptation process is performed at the completion of each replication step to prepare the VM to run in Google Cloud.

### Migration journey with Migrate to Virtual Machines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Migrate to Virtual Machines automatically applies OS adaptations to the VMs that you migrate.
- Migrate to Virtual Machines automatically advances each VM to migrate through those phases.
- These source environments can include the following: A VMware vSphere environment A Microsoft Azure VM environment An Amazon Elastic Compute Cloud (Amazon EC2) environment Migrate to Virtual Machines lets you streamline your VM migration to Google Cloud.
- Prepare the source environment To build a foundation for Migrate to Virtual Machines on your source environment, install the Migrate Connector to configure the environment as a migration source.

