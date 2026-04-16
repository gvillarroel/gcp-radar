---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.299Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "gkectl validation skipping"
feature_slug: "gkectl-validation-skipping"
latest_feature_date: "2019-09-26"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks"
keywords:
  - "gkectl"
  - "validation"
  - "skipping"
  - "commands"
  - "can"
  - "skip"
  - "checks"
---

# gkectl validation skipping

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

Gkectl commands can skip validation checks.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, `gkectl` preflight validation can be run in a reduced mode that omits certain checks. The command `gkectl check-config --config [CONFIG]` supports a `--fast` option to skip validations that create temporary test VMs, and also supports explicit skip flags (for example, `--skip-validation-load-balancer`) to skip specific validation categories.

## Evidence Summary

The preflight checks page documents `gkectl check-config` behavior, including fast mode and explicit validation skip flags for granular exclusion of checks.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks)

## Supporting Pages

### "Running preflight checks \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks)
- Source ID: `site-docs-root`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Coming soon The following preflight checks will be added in a future release: NTP server Running preflight checks You run preflight checks by running the following command: gkectl check-config --config [CONFIG] where [CONFIG] is the path to your configuration file Running in fast mode If you prefer, you can run preflight checks in "fast mode," which skips the validations that create temporary test VMs, such as the load balancing VIP and node IP validations.
- To learn about the available skip flags, run the following command: gkectl check-config --help For example, to skip the load balancer validations: gkectl check-config --config my-config.yaml --skip-validation-load-balancer Cancelling preflight checks If you started running preflight checks and want to cancel, press CTRL + C twice.
- To do so, pass in --fast : gkectl check-config --config [CONFIG] --fast Skipping specific validations You can pass in flags to granularly skip specific validations, such as DNS, proxy, and networking.
- Preflight check modes and skipping validations gkectl check-config has a default mode and a fast mode: In default mode, the command comprehensively validates each field.

### "Skip a version when upgrading node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade)
- Source ID: `site-docs-reference-2`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- Dec Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec Jan Feb Mar 1.14 Upgrade 1.15 1.16 Upgrade 1.28 1.29 Skipping over one minor version when upgrading your node pools reduces the number of upgrades required to stay on a supported version.
- If your clusters are on an unsupported version, depending on the cluster version, skipping a minor version when upgrading node pools could get your clusters to a supported version with fewer upgrades.
- This page explains some of the benefits of a skip-version upgrade and provides steps on how to perform a skip-version upgrade by making configuration file changes and running gkectl upgrade cluster .
- Skipping a minor version when upgrading node pools takes the same amount of time as upgrading the node pools to the next minor version because each node in a node pool is drained and recreated once.

### "Skip a version when upgrading node pools \_|\_ Google Distributed Cloud\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade)
- Source ID: `site-docs-reference-3`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- Dec Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec Jan Feb Mar 1.14 Upgrade 1.15 1.16 Upgrade 1.28 1.29 Skipping over one minor version when upgrading your node pools reduces the number of upgrades required to stay on a supported version.
- If your clusters are on an unsupported version, depending on the cluster version, skipping a minor version when upgrading node pools could get your clusters to a supported version with fewer upgrades.
- This page explains some of the benefits of a skip-version upgrade and provides steps on how to perform a skip-version upgrade by making configuration file changes and running gkectl upgrade cluster .
- Skipping a minor version when upgrading node pools takes the same amount of time as upgrading the node pools to the next minor version because each node in a node pool is drained and recreated once.

