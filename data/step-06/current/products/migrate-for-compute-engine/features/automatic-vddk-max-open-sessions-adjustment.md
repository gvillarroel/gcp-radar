---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:53.337Z"
product_name: "Migrate for Compute Engine"
product_slug: "migrate-for-compute-engine"
feature_name: "Automatic VDDK max open sessions adjustment"
feature_slug: "automatic-vddk-max-open-sessions-adjustment"
latest_feature_date: "2020-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started"
keywords:
  - "automatic"
  - "vddk"
  - "max"
  - "open"
  - "sessions"
  - "adjustment"
  - "automatically"
  - "adjusts"
---

# Automatic VDDK max open sessions adjustment

Product: Migrate for Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Automatically adjusts VDDK max open sessions when accessing vSphere 6.5 to avoid exceeding connection limits.

## Extended Definition

Automatically adjusts VDDK max open sessions when accessing vSphere 6.5 to avoid exceeding connection limits.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started)

## Supporting Pages

### Migrate to Virtual Machines best practices \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices)
- Source ID: `site-docs-reference`
- Final score: 49
- Re-rank relevance: N/A

Evidence snippets:
- Migrate to Virtual Machines automatically prepares your VMs before migration.
- Ensure your environment meets the requirements When you provision and configure the infrastructure to support your migration, ensure that your environment meets the Migrate to Virtual Machines requirements: The supported operating systems The required roles and permissions on Google Cloud and in your source environment The required Google Cloud services The maximum number of concurrent migrations Ensure that you involve all the relevant teams in the analysis of these requirements because the requirements span different areas, such as computing, networking, security, and compliance.
- To maximize the network throughput, we also recommend that you configure the maximum transmission unit while considering the recommended values for Virtual Private Cloud networks , Cloud Interconnect , and Cloud VPN .
- For example, opening a firewall port might require collaboration between the security team and the networking team.

### "Supported operating systems \_|\_ Migrate to Virtual Machines \_|\_ Google\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Note that even for Oracle Linux images that support the IDPF driver, the import virtual disk images process doesn't automatically set the corresponding IDPF value in the guestOsFeatures attribute of the image resource.
- These agents and services are installed automatically during the migration.
- The automatic expansion of a root partition when the Persistent Disk size is increased.

### Migration journey with Migrate to Virtual Machines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started)
- Source ID: `site-docs-reference`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- Migrate to Virtual Machines automatically applies OS adaptations to the VMs that you migrate.
- Migrate to Virtual Machines automatically advances each VM to migrate through those phases.

