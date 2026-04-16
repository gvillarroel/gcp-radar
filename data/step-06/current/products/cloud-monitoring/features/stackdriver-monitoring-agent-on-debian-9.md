---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.986Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Stackdriver Monitoring agent on Debian 9"
feature_slug: "stackdriver-monitoring-agent-on-debian-9"
latest_feature_date: "2020-02-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies"
  - "https://docs.cloud.google.com/monitoring/agent/monitoring/installation"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview"
keywords:
  - "stackdriver"
  - "monitoring"
  - "agent"
  - "debian"
  - "version"
  - "available"
---

# Stackdriver Monitoring agent on Debian 9

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Stackdriver Monitoring agent version 6.0.0 is available for Debian 9.

## Extended Definition

Stackdriver Monitoring agent version 6.0.0 is available for Debian 9.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies)
- [https://docs.cloud.google.com/monitoring/agent/monitoring/installation](https://docs.cloud.google.com/monitoring/agent/monitoring/installation)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview)

## Supporting Pages

### Use agent policies (GA) \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies)
- Source ID: `site-iam-reference`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To apply the agent policy to a specific set of VMs in a zone, describe the VMs by using a combination of any of the following: Labels on the VM, either for inclusion or exclusion: inclusionLabels: exclusionLabels: Operating system: inventories: For example, the following filter applies the agent policy to the VMs with the specified operating systems that have the label "env=prod" and don't have the label "app=web": instanceFilter : inclusionLabels : - labels : env : prod exclusionLabels : - labels : app : web inventories : - osShortName : rhel osVersion : '7. ' - osShortName : debian osVersion : '11' For information about finding the operating-system values, see Find operating system information .
- Install on VMs based on other labels To install the latest version of the Ops Agent on all VMs in the us-central1-a zone running Debian 11, except those with the labels "env=prod" and "app=web6", use the following policy description: agentsRule : packageState : installed version : latest instanceFilter : exclusionLabels : - labels : env : prod app : web6 inventories : - osShortName : debian osVersion : '11' When you specify multiple key-value pairs under a single labels: entry for inclusion or exclusion, a VM matches if all of the labels are present; that is, the labels are matched as a logical AND operation, not a logical OR operation.
- To view OS Config agent logs in Logs Explorer , use the following filter: resource . type = "gce instance" logId ( OSConfigAgent ) To view OS Config agent logs, do the following: CentOS, RHEL, SLES, SUSE Run the following command: gcloud compute ssh INSTANCE ID \ --project PROJECT ID \ -- sudo cat /var/log/messages \ grep "OSConfigAgent\ google-fluentd\ stackdriver-agent" Debian, Ubuntu Run the following command: gcloud compute ssh INSTANCE ID \ --project PROJECT ID \ -- sudo cat /var/log/syslog \ grep "OSConfigAgent\ google-fluentd\ stackdriver-agent" Windows Connect to your instance using RDP or a similar tool and login to Windows.
- Install on VMs based on operating system To install the latest version 2 of the Ops Agent on all VMs running Debian 11 or RHEL 7. in the us-central1-a zone, use the following policy description: agentsRule : packageState : installed version : 2. . instanceFilter : inventories : - osShortName : rhel osVersion : '7. ' - osShortName : debian osVersion : '11' Terraform This section describes the examples in the examples directory of the terraform-google-cloud-operations repository.

### "Overview of agent policies for the Ops Agent \_|\_ Cloud Monitoring \_|\_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview)
- Source ID: `site-iam-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Supported operating systems You can apply an agent policy to Compute Engine VM instances running the operating systems shown in the following table: Operating system Ops Agent (GA & beta † policies) Logging agent (beta † policies only) Monitoring agent (beta † policies only) CentOS 8 Rocky Linux 8 RHEL 6 RHEL 7: rhel-7, rhel-7-6-sap-ha, rhel-7-7-sap-ha, rhel-7-9-sap-ha ‡ RHEL 8: rhel-8, rhel-8-4-sap-ha, rhel-8-6-sap-ha, rhel-8-8-sap-ha ‡ Debian 9 (Stretch) Debian 11 (Bullseye) Deep Learning VM Images based on Debian 11 (Bullseye) Ubuntu LTS 18.04 (Bionic Beaver): ubuntu-1804-lts, ubuntu-minimal-1804-lts Ubuntu LTS 20.04 (Focal Fossa): ubuntu-2004-lts, ubuntu-minimal-2004-lts Ubuntu LTS 22.04 (Jammy Jellyfish): buntu-2204-lts, ubuntu-minimal-2204-lts SLES 12: sles-12, sles-12-sp5-sap SLES 15: sles-15, sles-15-sp2-sap, sles-15-sp3-sap, sles-15-sp4-sap, sles-15-sp5-sap, sles-15-sp6-sap OpenSUSE Leap 15: opensuse-leap (opensuse-leap-15-3- , opensuse-leap-15-4- ) Windows Server: 2016, 2019, 2022, Core 2016, Core 2019, Core 2022 † In beta agent policies, the agent columns map to an agent type specified to the gcloud beta compute instances ops-agents policies create invocation: Ops Agent maps to agent type ops-agent .
- The beta and GA policies are also structurally different: Policies created by using gcloud beta compute instances ops-agents policies describe agent policies by passing individual options to the commands, for example: gcloud beta compute instances ops-agents policies create ops-agents-test-policy \ --agent-rules = "type=logging,enable-autoupgrade=false;type=metrics,enable-autoupgrade=false" \ --description = "A test policy." \ --os-types = short-name = centos,version = 7 \ --instances = zones/us-central1-a/instances/test-instance \ --project PROJECT ID The agent-policy Terraform module provides the same capabilities.
- The following example creates a file called config.yaml that contains a policy that matches the label applied in the previous step: cat > config.yaml << EOF agentsRule: packageState: installed version: 2 .47.0 instanceFilter: inclusionLabels: - labels: KEY : VALUE EOF For more information about describing GA agent policies, see Configuration files for agent policies .
- Replace beta agent-upgrade policies To replace beta agent policies that upgrade the agent, you have the following options: To make sure the Ops Agent is always up to date, use OS Patch to create and run an OS Patch job that keeps the agent at the latest version.

### "Installing the Cloud Monitoring agent on individual VMs \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring/installation](https://docs.cloud.google.com/monitoring/agent/monitoring/installation)
- Source ID: `site-iam-reference`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This sets the HTTP PROXY and HTTPS PROXY environment variables so that the agent can send data using outbound HTTPS: setx HTTP PROXY http:// proxy-ip : proxy-port /m setx HTTPS PROXY http:// proxy-ip : proxy-port /m setx no proxy 169.254.169.254 /m Determine the agent version To determine the version of the Monitoring agent on your system, run the following commands on your VM instance: DEBIAN / UBUNTU Run the following command on Debian or Ubuntu: dpkg-query --show --showformat ' ${ Package } ${ Version } ${ Architecture } ${ Status } \n' stackdriver-agent SLES / SUSE Run the following command on SUSE: rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' stackdriver-agent WINDOWS There is presently no way to determine the version of the Monitoring agent running on Windows.
- Configure an HTTP proxy If you use an HTTP proxy for proxying requests to the Logging and Monitoring APIs, do the following: Linux Edit the following configuration file (create the file if it doesn't already exist): For agent versions 6.0.0 and higher, edit: /etc/default/stackdriver-agent For agent versions earlier than 6.0.0, edit the appropriate file for your OS: For Debian and Ubuntu, edit: /etc/default/stackdriver-agent For CentOS and SLES, edit: /etc/default/stackdriver-collectd Note: If this file doesn't exist, create it.
- List all agent versions To list the available versions of the agent, run the following command: CENTOS / RHEL List the available versions of the agent: sudo yum list --showduplicates stackdriver-agent DEBIAN / UBUNTU List the available versions of the agent: sudo apt-cache madison stackdriver-agent SLES / SUSE List the available versions of the agent: sudo zypper search -s stackdriver-agent WINDOWS Installing earlier versions of the agent on Windows is not supported.
- Run the following PowerShell commands: (New-Object Net.WebClient).DownloadFile("https://repo.stackdriver.com/windows/StackdriverMonitoring-GCM-46.exe", "${env:UserProfile}\StackdriverMonitoring-GCM-46.exe") & "${env:UserProfile}\StackdriverMonitoring-GCM-46.exe" Installing a specific version of the agent To install a specific version of the agent, complete the following steps.

