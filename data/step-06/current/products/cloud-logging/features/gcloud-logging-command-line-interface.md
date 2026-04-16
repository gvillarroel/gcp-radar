---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.507Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "gcloud logging command-line interface"
feature_slug: "gcloud-logging-command-line-interface"
latest_feature_date: "2015-03-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/api/gcloud-logging"
  - "https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies"
keywords:
  - "gcloud"
  - "logging"
  - "command"
  - "line"
  - "interface"
  - "provides"
  - "beta"
  - "administrative"
---

# gcloud logging command-line interface

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

The gcloud logging command-line interface provides beta support for administrative tasks such as configuring log export.

## Extended Definition

The gcloud logging command-line interface provides beta support for administrative tasks such as configuring log export.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/api/gcloud-logging](https://docs.cloud.google.com/logging/docs/api/gcloud-logging)
- [https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging](https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)

## Supporting Pages

### Command-line interface \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/api/gcloud-logging](https://docs.cloud.google.com/logging/docs/api/gcloud-logging)
- Source ID: `site-docs-reference`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Summary of commands The following sections provide summaries and examples of the gcloud CLI command-line interface for Logging.
- The Google Cloud CLI has a group of commands, gcloud logging , that provide a command-line interface to the Logging API.
- For example: gcloud logging --help gcloud logging sinks --help gcloud logging sinks create --help In a few cases, important command features in the Beta version of the gcloud CLI are available: gcloud beta logging metrics create --help Over time, Beta features might be rolled into the standard release and new features might be added to the Beta release.
- Set your default project so you don't have to supply the --project flag with each command: gcloud config set project PROJECT ID After you've installed and initialized the Google Cloud CLI, you can run gcloud logging commands from the command line in the same way you use other command-line tools.

### Command-line interface \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging](https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging)
- Source ID: `site-docs-reference`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Summary of commands The following sections provide summaries and examples of the gcloud CLI command-line interface for Logging.
- The Google Cloud CLI has a group of commands, gcloud logging , that provide a command-line interface to the Logging API.
- For example: gcloud logging --help gcloud logging sinks --help gcloud logging sinks create --help In a few cases, important command features in the Beta version of the gcloud CLI are available: gcloud beta logging metrics create --help Over time, Beta features might be rolled into the standard release and new features might be added to the Beta release.
- Set your default project so you don't have to supply the --project flag with each command: gcloud config set project PROJECT ID After you've installed and initialized the Google Cloud CLI, you can run gcloud logging commands from the command line in the same way you use other command-line tools.

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-docs-root-2`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Troubleshoot extension policies This section provides information about troubleshooting the use of extension policies to manage the Ops Agent: gcloud beta compute zone-vm-extension-policies commands fail The extension policy is created, but the Ops Agent status is "not detected" Linux systemctl and Windows Service Manager don't work with the Ops Agent For information about troubleshooting the Ops Agent, see Troubleshoot the Ops Agent . gcloud beta compute zone-vm-extension-policies commands fail When a gcloud beta compute zone-vm-extension-policies command fails, the response includes troubleshooting suggestions.
- If you haven't done so already, install the beta component of the gcloud CLI by running the following command: gcloud components install beta To check if you have the beta component installed, run the following command: gcloud components list If you previously installed the beta component, verify that have the latest version: gcloud components update Uninstall any observability agents Before creating a VM Extension Manager policy to manage the Ops Agent on a VM, ensure that there are no instances of the Ops Agent or the legacy Monitoring agent and Logging agent already on the VM.
- For example, suppose you created and rolled out a global policy by using the following command: gcloud beta compute global-vm-extension-policies create POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --version=ops-agent=2.61.0 \ --rollout-predefined-plan=slow rollout \ --config-from-file=ops-agent="/usr/ops-agent-config.yaml" To extend the policy to VMs created in previously unused zones, restart the rollout by using the following command: gcloud beta compute global-vm-extension-policies update test-policy POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --version=ops-agent=2.61.0 \ --rollout-predefined-plan=slow rollout \ --config-from-file=ops-agent="/usr/ops-agent-config.yaml" \ --rollout-retry-uuid= UUID Replace the following variables in the command: POLICY NAME : A name for the VM extension policy.
- Install the Ops Agent with a fast rollout plan at higher priority (global only) To create a global policy that installs the latest version of the Ops Agent on by using a higher-than-default priority and the fast-rollout plan , use the following gcloud beta compute global-vm-extension-policies create command: gcloud beta compute global-vm-extension-policies create POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --rollout-predefined-plan=fast rollout \ --priority=500 Replace the following variables in the command: POLICY NAME : A name for the VM extension policy.

