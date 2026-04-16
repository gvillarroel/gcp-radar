---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.071Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "A3 Edge VM Guest Agent Configuration"
feature_slug: "a3-edge-vm-guest-agent-configuration"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/monitoring"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/osconfig"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging"
keywords:
  - "a3"
  - "edge"
  - "vm"
  - "guest"
  - "agent"
  - "configuration"
  - "provides"
  - "names"
---

# A3 Edge VM Guest Agent Configuration

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Provides guest agent configuration support for A3 Edge VM names; Provides guest agent configuration support for A3 Edge VM names.

## Extended Definition

Provides guest agent configuration support for A3 Edge VM names; Provides guest agent configuration support for A3 Edge VM names.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/monitoring](https://docs.cloud.google.com/container-optimized-os/docs/how-to/monitoring)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/osconfig](https://docs.cloud.google.com/container-optimized-os/docs/how-to/osconfig)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging](https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging)

## Supporting Pages

### "Monitoring system health with Node Problem Detector \_|\_ Container-Optimized\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/monitoring](https://docs.cloud.google.com/container-optimized-os/docs/how-to/monitoring)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following guest policy enables the Node problem detector agent on all the instances. recipes: - name: recipe-enable-npd desiredState: INSTALLED installSteps: - scriptRun: interpreter: SHELL script: - #!/bin/bash systemctl start node-problem-detector Viewing the collected metrics Node Problem Detector reports a list of metrics against a Compute Engine instance monitored resource.
- Using user-defined guest policies Container-Optimized OS includes OS Config agent , that uses OS system utilities to maintain the state for the VM that is specified in the guest policy.
- For details about guest policies, see Enable OS Config agent and Create a guest policy .
- You can enable this feature by using: cloud-init startup script metadata user-defined guest policies Using a startup script You can enable Node Problem Detector by using a startup script .

### "Configuring instances with user-defined guest policies \_|\_ Container-Optimized\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/osconfig](https://docs.cloud.google.com/container-optimized-os/docs/how-to/osconfig)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To enable OS Config and create a guest policy, see Enable OS Config agent and Create a guest policy , respectively.
- Here is an example that shows how users can use assignment and recipes features of guest policies to create a file on instances located at us-central1-a. assignment : zones : - us-central1-a recipes : - name : recipe-runscript desiredState : INSTALLED installSteps : - scriptRun : interpreter : SHELL script : touch /tmp/TOUCH FILE Note: While it is optional to provide an interpreter on other distros, Container-Optimized OS requires interpreter to execute the given script.
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Configuring instances with user-defined guest policies Stay organized with collections Save and categorize content based on your preferences.
- You can use OS Config's guest policies to configure your instance. packages and packageRepositories features of guest policies are not supported on Container-Optimized OS.

### Using Cloud Logging with Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging](https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Logging agent configuration compatibility The logging agent is a fluentd-based container on x86-based Container-Optimized OS images and a fluent-bit binary on Arm-based Container-Optimized OS images.
- The configurations of the two agents are not compatible.
- Enable the logging agent in project metadata Starting in milestone 97 , logging can be enabled in project metadata: gcloud compute project-info add-metadata \ --metadata google-logging-enabled = true Note: Metadata flags defined at instance level takes precedence over metadata flags defined at project level.
- Known Limitations Compatibility with gcplogs driver Starting with milestone 89 , if the logging agent included with Container-Optimized OS is enabled and Docker gcplogs logging driver is enabled for one or more containers, excessive warning logs may be output by the included logging agent.

