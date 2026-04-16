---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.431Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Terraform Provisioning for Google Cloud Ops Agent"
feature_slug: "terraform-provisioning-for-google-cloud-ops-agent"
latest_feature_date: "2021-04-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies"
  - "https://docs.cloud.google.com/logging/docs/agent/logging/managing-agent-policies"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies"
keywords:
  - "terraform"
  - "provisioning"
  - "ops"
  - "agent"
  - "can"
  - "provision"
  - "linux"
  - "windows"
---

# Terraform Provisioning for Google Cloud Ops Agent

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Terraform can provision the Google Cloud Ops Agent on Linux and Windows Compute Engine virtual machines.

## Extended Definition

Terraform can provision the Google Cloud Ops Agent on Linux and Windows Compute Engine virtual machines.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies)
- [https://docs.cloud.google.com/logging/docs/agent/logging/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/logging/managing-agent-policies)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies)

## Supporting Pages

### Use agent policies (GA) \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies)
- Source ID: `site-docs-root-2`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Linux To verify that the OS Config agent is installed, run the following command: gcloud compute ssh instance-id \ --project project-id \ -- sudo systemctl status google-osconfig-agent A sample output is: google-osconfig-agent.service - Google OSConfig Agent Loaded: loaded (/lib/systemd/system/google-osconfig-agent.service; enabled; vendor preset: Active: active (running) since Wed 2020-01-15 00:14:22 UTC; 6min ago Main PID: 369 (google osconfig) Tasks: 8 (limit: 4374) Memory: 102.7M CGroup: /system.slice/google-osconfig-agent.service └─369 /usr/bin/google osconfig agent Windows To verify that the OS Config agent is installed, run the following steps: Connect to your instance using RDP or a similar tool and login to Windows.
- To view OS Config agent logs in Logs Explorer , use the following filter: resource . type = "gce instance" logId ( OSConfigAgent ) To view OS Config agent logs, do the following: CentOS, RHEL, SLES, SUSE Run the following command: gcloud compute ssh INSTANCE ID \ --project PROJECT ID \ -- sudo cat /var/log/messages \ grep "OSConfigAgent\ google-fluentd\ stackdriver-agent" Debian, Ubuntu Run the following command: gcloud compute ssh INSTANCE ID \ --project PROJECT ID \ -- sudo cat /var/log/syslog \ grep "OSConfigAgent\ google-fluentd\ stackdriver-agent" Windows Connect to your instance using RDP or a similar tool and login to Windows.
- Install on VMs based on operating system To install the latest version 2 of the Ops Agent on all VMs running Debian 11 or RHEL 7. in the us-central1-a zone, use the following policy description: agentsRule : packageState : installed version : 2. . instanceFilter : inventories : - osShortName : rhel osVersion : '7. ' - osShortName : debian osVersion : '11' Terraform This section describes the examples in the examples directory of the terraform-google-cloud-operations repository.
- When you run the terraform plan or terraform apply command, you are prompted for the following values: PROJECT ID : The ID of your Google Cloud project REGION : The region in which to install the agent on VMs Example: ops agent policy install all in zone This example installs the latest version of the Ops Agent on all eligible VMs in a given zone, like us-central1-a .

### Use agent policies \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/logging/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/logging/managing-agent-policies)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported operating systems You can apply an agent policy to Compute Engine VM instances running the operating systems shown in the following table: Operating system Ops Agent (GA & beta † policies) Logging agent (beta † policies only) Monitoring agent (beta † policies only) CentOS 8 Rocky Linux 8 RHEL 6 RHEL 7: rhel-7, rhel-7-6-sap-ha, rhel-7-7-sap-ha, rhel-7-9-sap-ha ‡ RHEL 8: rhel-8, rhel-8-4-sap-ha, rhel-8-6-sap-ha, rhel-8-8-sap-ha ‡ Debian 9 (Stretch) Debian 11 (Bullseye) Deep Learning VM Images based on Debian 11 (Bullseye) Ubuntu LTS 18.04 (Bionic Beaver): ubuntu-1804-lts, ubuntu-minimal-1804-lts Ubuntu LTS 20.04 (Focal Fossa): ubuntu-2004-lts, ubuntu-minimal-2004-lts Ubuntu LTS 22.04 (Jammy Jellyfish): buntu-2204-lts, ubuntu-minimal-2204-lts SLES 12: sles-12, sles-12-sp5-sap SLES 15: sles-15, sles-15-sp2-sap, sles-15-sp3-sap, sles-15-sp4-sap, sles-15-sp5-sap, sles-15-sp6-sap OpenSUSE Leap 15: opensuse-leap (opensuse-leap-15-3- , opensuse-leap-15-4- ) Windows Server: 2016, 2019, 2022, Core 2016, Core 2019, Core 2022 † In beta agent policies, the agent columns map to an agent type specified to the gcloud beta compute instances ops-agents policies create invocation: Ops Agent maps to agent type ops-agent .
- Linux To verify that the OS Config agent is installed, run the following command: gcloud compute ssh instance-id \ --project project-id \ -- sudo systemctl status google-osconfig-agent A sample output is: google-osconfig-agent.service - Google OSConfig Agent Loaded: loaded (/lib/systemd/system/google-osconfig-agent.service; enabled; vendor preset: Active: active (running) since Wed 2020-01-15 00:14:22 UTC; 6min ago Main PID: 369 (google osconfig) Tasks: 8 (limit: 4374) Memory: 102.7M CGroup: /system.slice/google-osconfig-agent.service └─369 /usr/bin/google osconfig agent Windows To verify that the OS Config agent is installed, run the following steps: Connect to your instance using RDP or a similar tool and login to Windows.
- To enable the APIs, grant the necessary roles to the default service account, and enable the OS Config metadata for a project, run the script as follows: bash set-permissions.sh --project= PROJECT ID To additionally grant one of the OS Config roles to a user who does not have the Owner ( roles/owner ) role on the project, run the script as follows: bash set-permissions.sh --project= PROJECT ID \ --iam-user= USER EMAIL \ --iam-permission-role=guestPolicy [Admin Editor Viewer] To additionally grant one of the OS Config roles to a non-default service account, run the script as follows: bash set-permissions.sh --project= PROJECT ID \ --iam-service-account= SERVICE ACCT EMAIL \ --iam-permission-role=guestPolicy [Admin Editor Viewer] The diagnose.sh script Given a project ID, a Compute Engine instance ID, and the agent policy ID, the diagnose.sh script automatically collects the necessary information to help diagnose issues with the policy: The OS Config agent version The underlying OS Config guest policy The policies that are applicable to this Compute Engine instance The agent package repositories that are pulled on to this Compute Engine instance To invoke the script, run the following command: bash diagnose.sh --project-id= PROJECT ID \ --gce-instance-id= INSTANCE ID \ --policy-id= POLICY ID Terraform integration To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- To view OS Config agent logs in Logs Explorer , use the following filter: resource . type = "gce instance" logId ( OSConfigAgent ) To view OS Config agent logs, do the following: CentOS, RHEL, SLES, SUSE Run the following command: gcloud compute ssh INSTANCE ID \ --project PROJECT ID \ -- sudo cat /var/log/messages \ grep "OSConfigAgent\ google-fluentd\ stackdriver-agent" Debian, Ubuntu Run the following command: gcloud compute ssh INSTANCE ID \ --project PROJECT ID \ -- sudo cat /var/log/syslog \ grep "OSConfigAgent\ google-fluentd\ stackdriver-agent" Windows Connect to your instance using RDP or a similar tool and login to Windows.

### Use agent policies (beta) \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies)
- Source ID: `site-docs-root-2`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Linux To verify that the OS Config agent is installed, run the following command: gcloud compute ssh instance-id \ --project project-id \ -- sudo systemctl status google-osconfig-agent A sample output is: google-osconfig-agent.service - Google OSConfig Agent Loaded: loaded (/lib/systemd/system/google-osconfig-agent.service; enabled; vendor preset: Active: active (running) since Wed 2020-01-15 00:14:22 UTC; 6min ago Main PID: 369 (google osconfig) Tasks: 8 (limit: 4374) Memory: 102.7M CGroup: /system.slice/google-osconfig-agent.service └─369 /usr/bin/google osconfig agent Windows To verify that the OS Config agent is installed, run the following steps: Connect to your instance using RDP or a similar tool and login to Windows.
- To enable the APIs, grant the necessary roles to the default service account, and enable the OS Config metadata for a project, run the script as follows: bash set-permissions.sh --project= PROJECT ID To additionally grant one of the OS Config roles to a user who does not have the Owner ( roles/owner ) role on the project, run the script as follows: bash set-permissions.sh --project= PROJECT ID \ --iam-user= USER EMAIL \ --iam-permission-role=guestPolicy [Admin Editor Viewer] To additionally grant one of the OS Config roles to a non-default service account, run the script as follows: bash set-permissions.sh --project= PROJECT ID \ --iam-service-account= SERVICE ACCT EMAIL \ --iam-permission-role=guestPolicy [Admin Editor Viewer] The diagnose.sh script Given a project ID, a Compute Engine instance ID, and the agent policy ID, the diagnose.sh script automatically collects the necessary information to help diagnose issues with the policy: The OS Config agent version The underlying OS Config guest policy The policies that are applicable to this Compute Engine instance The agent package repositories that are pulled on to this Compute Engine instance To invoke the script, run the following command: bash diagnose.sh --project-id= PROJECT ID \ --gce-instance-id= INSTANCE ID \ --policy-id= POLICY ID Terraform integration To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- To view OS Config agent logs in Logs Explorer , use the following filter: resource . type = "gce instance" logId ( OSConfigAgent ) To view OS Config agent logs, do the following: CentOS, RHEL, SLES, SUSE Run the following command: gcloud compute ssh INSTANCE ID \ --project PROJECT ID \ -- sudo cat /var/log/messages \ grep "OSConfigAgent\ google-fluentd\ stackdriver-agent" Debian, Ubuntu Run the following command: gcloud compute ssh INSTANCE ID \ --project PROJECT ID \ -- sudo cat /var/log/syslog \ grep "OSConfigAgent\ google-fluentd\ stackdriver-agent" Windows Connect to your instance using RDP or a similar tool and login to Windows.
- You create and manage agent policies by using the gcloud beta compute instances ops-agents policies command group in the Google Cloud CLI or the agent-policy Terraform module .

