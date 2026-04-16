---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.961Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Ops Agent Ansible installation"
feature_slug: "ops-agent-ansible-installation"
latest_feature_date: "2021-04-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/installation"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies"
  - "https://docs.cloud.google.com/monitoring/agent/monitoring/installation"
keywords:
  - "ops"
  - "agent"
  - "ansible"
  - "installation"
  - "can"
  - "installed"
  - "linux"
  - "windows"
---

# Ops Agent Ansible installation

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud Ops Agent can be installed with Ansible on Linux and Windows Compute Engine VMs.

## Extended Definition

The Google Cloud Ops Agent can be installed with Ansible on Linux and Windows Compute Engine VMs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/monitoring/agent/monitoring/installation](https://docs.cloud.google.com/monitoring/agent/monitoring/installation)

## Supporting Pages

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-iam-reference`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Restart an Ops Agent installed by an extension policy When the Ops Agent is installed and managed by VM Extension Manager, the Ops Agent isn't managed by the system-management service of the operating system, that is, systemd on Linux or the Windows Service Manager on Windows.
- When the Ops Agent is installed and managed by VM Extension Manager, the Ops Agent isn't managed by the system-management service of the operating system, that is, systemd on Linux or the Windows Service Manager on Windows.
- When the Ops Agent is installed and managed by VM Extension Manager, the Ops Agent isn't managed by the system-management service of the operating system, that is, systemd on Linux or the Windows Service Manager on Windows.
- Therefore, Linux systemctl commands and Windows -Service commands don't work with an Ops Agent installed by an extension policy.

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Monitoring \_|\_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- Source ID: `site-iam-reference`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Copy-Item -Path "C:\Program Files\Google\Cloud Operations\Ops Agent\config\config.yaml" -Destination "C:\Program Files\Google\Cloud Operations\Ops Agent\config\config.bak" Run the following PowerShell commands to remove your installed agent and to run the installation command: googet -noconfirm remove google-cloud-ops-agent googet -noconfirm install google-cloud-ops-agent List all agent versions To list the available versions of the agent, run the following command: CENTOS / RHEL List the available versions of the agent: sudo yum list --showduplicates google-cloud-ops-agent DEBIAN / UBUNTU List the available versions of the agent: sudo apt-cache madison google-cloud-ops-agent SLES / SUSE List the available versions of the agent: sudo zypper search -s google-cloud-ops-agent WINDOWS List the available versions of the agent: googet available google-cloud-ops-agent Uninstall the agent To remove the Ops Agent and its configuration files, use the following instructions.
- CENTOS / RHEL Run the following command on Red Hat or CentOS Linux: rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' google-cloud-ops-agent DEBIAN / UBUNTU Run the following command on Debian or Ubuntu: dpkg-query --show --showformat ' ${ Package } ${ Version } ${ Architecture } ${ Status } \n' google-cloud-ops-agent SLES / SUSE Run the following command on SUSE: rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' google-cloud-ops-agent WINDOWS Run the following command on Windows: googet installed google-cloud-ops-agent Restart the agent You must restart the Ops Agent to pick up changes in configuration files.
- Download and run the agent-installation script by using the following commands: curl -sSO https://dl.google.com/cloudagents/add-google-cloud-ops-agent-repo.sh sudo bash add-google-cloud-ops-agent-repo.sh --also-install After it is installed, the agent is started automatically.
- LINUX Run the following command on your instance: sudo systemctl restart google-cloud-ops-agent Windows Connect to your instance using RDP or a similar tool and login to Windows.

### "Installing the Cloud Monitoring agent on individual VMs \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring/installation](https://docs.cloud.google.com/monitoring/agent/monitoring/installation)
- Source ID: `site-iam-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Download and run the agent-installation script by using the following commands: curl -sSO https://dl.google.com/cloudagents/add-monitoring-agent-repo.sh sudo bash add-monitoring-agent-repo.sh --also-install After it is installed, the agent is started automatically.
- LINUX Run the following command on your instance: sudo service stackdriver-agent restart Windows Connect to your instance using RDP or a similar tool and login to Windows.
- When the installation command exits, the agent is not yet installed.
- This sets the HTTP PROXY and HTTPS PROXY environment variables so that the agent can send data using outbound HTTPS: setx HTTP PROXY http:// proxy-ip : proxy-port /m setx HTTPS PROXY http:// proxy-ip : proxy-port /m setx no proxy 169.254.169.254 /m Determine the agent version To determine the version of the Monitoring agent on your system, run the following commands on your VM instance: DEBIAN / UBUNTU Run the following command on Debian or Ubuntu: dpkg-query --show --showformat ' ${ Package } ${ Version } ${ Architecture } ${ Status } \n' stackdriver-agent SLES / SUSE Run the following command on SUSE: rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' stackdriver-agent WINDOWS There is presently no way to determine the version of the Monitoring agent running on Windows.

