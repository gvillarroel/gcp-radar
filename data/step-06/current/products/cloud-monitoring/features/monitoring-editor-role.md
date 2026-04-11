---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.151Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Monitoring Editor Role"
feature_slug: "monitoring-editor-role"
latest_feature_date: "2017-07-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/access-control"
  - "https://docs.cloud.google.com/monitoring/agent/monitoring/managing-agent-policies"
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
keywords:
  - "monitoring"
  - "editor"
  - "role"
  - "the"
  - "grants"
  - "iam"
  - "based"
  - "permissions"
---

# Monitoring Editor Role

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

The Monitoring Editor role grants IAM-based permissions for Monitoring operations.

## Extended Definition

The Monitoring Editor role grants IAM-based permissions for Monitoring operations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control)
- [https://docs.cloud.google.com/monitoring/agent/monitoring/managing-agent-policies](https://docs.cloud.google.com/monitoring/agent/monitoring/managing-agent-policies)
- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)

## Supporting Pages

### Control access with IAM \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control)
- Source ID: `site-iam-reference`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Monitoring roles The following roles grant general permissions for Monitoring: Name Title Includes permissions roles/monitoring.viewer Monitoring Viewer Grants read-only access to Monitoring in the Google Cloud console and the Cloud Monitoring API. roles/monitoring.editor Monitoring Editor Grants read-write access to Monitoring in the Google Cloud console and the Cloud Monitoring API. roles/monitoring.admin Monitoring Admin Grants full access to Monitoring in the Google Cloud console and the Cloud Monitoring API.
- Incident roles The following roles grant permissions only for incidents: Name Title Description roles/monitoring.cloudConsoleIncidentViewer Monitoring Cloud Console Incident Viewer Grants access to view incidents by using the Google Cloud console. roles/monitoring.cloudConsoleIncidentEditor Monitoring Cloud Console Incident Editor Grants access to view, acknowledge, and close incidents by using the Google Cloud console.
- Uptime-check configuration roles The following roles grant permissions only for uptime-check configurations: Name Title Description roles/monitoring.uptimeCheckConfigViewer Monitoring Uptime Check Configurations Viewer Grants read-only access to uptime-check configurations. roles/monitoring.uptimeCheckConfigEditor Monitoring Uptime Check Configurations Editor Grants read-write access to uptime-check configurations.
- Notification channel roles The following roles grant permissions only for notification channels: Name Title Description roles/monitoring.notificationChannelViewer Monitoring NotificationChannel Viewer Grants read-only access to notification channels. roles/monitoring.notificationChannelEditor Monitoring NotificationChannel Editor Grants read-write access to notification channels.

### Use agent policies \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring/managing-agent-policies](https://docs.cloud.google.com/monitoring/agent/monitoring/managing-agent-policies)
- Source ID: `site-iam-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- To enable the APIs, grant the necessary roles to the default service account, and enable the OS Config metadata for a project, run the script as follows: bash set-permissions.sh --project= PROJECT ID To additionally grant one of the OS Config roles to a user who does not have the Owner ( roles/owner ) role on the project, run the script as follows: bash set-permissions.sh --project= PROJECT ID \ --iam-user= USER EMAIL \ --iam-permission-role=guestPolicy [Admin Editor Viewer] To additionally grant one of the OS Config roles to a non-default service account, run the script as follows: bash set-permissions.sh --project= PROJECT ID \ --iam-service-account= SERVICE ACCT EMAIL \ --iam-permission-role=guestPolicy [Admin Editor Viewer] The diagnose.sh script Given a project ID, a Compute Engine instance ID, and the agent policy ID, the diagnose.sh script automatically collects the necessary information to help diagnose issues with the policy: The OS Config agent version The underlying OS Config guest policy The policies that are applicable to this Compute Engine instance The agent package repositories that are pulled on to this Compute Engine instance To invoke the script, run the following command: bash diagnose.sh --project-id= PROJECT ID \ --gce-instance-id= INSTANCE ID \ --policy-id= POLICY ID Terraform integration To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- To enable debug-level logging for the entire project, run the following command: gcloud compute project-info add-metadata \ --project PROJECT ID \ --metadata osconfig-log-level=debug To enable debug-level logging for one VM, run the following command: gcloud compute instances add-metadata INSTANCE ID \ --project PROJECT ID \ --metadata osconfig-log-level=debug Helper scripts This section provides additional information about the helper scripts described in this document: The set-permissions.sh script The diagnose.sh script The set-permissions.sh script After you download the set-permissions.sh script, you can use the script to perform the following actions, based on the arguments you provide: Enable the Cloud Logging API, the Cloud Monitoring API, and the OS Config API for the project.
- Insufficient IAM permission If a gcloud beta compute instances ops-agents policies command fails with a permission error, then make sure you have run the set-permissions.sh script as described in Create an agent policy to set up the OS Config policy roles: GuestPolicy Admin ( roles/osconfig.guestPolicyAdmin ) : Provides full access to guest policies.
- Supported operating systems You can apply an agent policy to Compute Engine VM instances running the operating systems shown in the following table: Operating system Ops Agent (GA & beta † policies) Logging agent (beta † policies only) Monitoring agent (beta † policies only) CentOS 8 Rocky Linux 8 RHEL 6 RHEL 7: rhel-7, rhel-7-6-sap-ha, rhel-7-7-sap-ha, rhel-7-9-sap-ha ‡ RHEL 8: rhel-8, rhel-8-4-sap-ha, rhel-8-6-sap-ha, rhel-8-8-sap-ha ‡ Debian 9 (Stretch) Debian 11 (Bullseye) Deep Learning VM Images based on Debian 11 (Bullseye) Ubuntu LTS 18.04 (Bionic Beaver): ubuntu-1804-lts, ubuntu-minimal-1804-lts Ubuntu LTS 20.04 (Focal Fossa): ubuntu-2004-lts, ubuntu-minimal-2004-lts Ubuntu LTS 22.04 (Jammy Jellyfish): buntu-2204-lts, ubuntu-minimal-2204-lts SLES 12: sles-12, sles-12-sp5-sap SLES 15: sles-15, sles-15-sp2-sap, sles-15-sp3-sap, sles-15-sp4-sap, sles-15-sp5-sap, sles-15-sp6-sap OpenSUSE Leap 15: opensuse-leap (opensuse-leap-15-3- , opensuse-leap-15-4- ) Windows Server: 2016, 2019, 2022, Core 2016, Core 2019, Core 2022 † In beta agent policies, the agent columns map to an agent type specified to the gcloud beta compute instances ops-agents policies create invocation: Ops Agent maps to agent type ops-agent .

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Change Agent permissions in VM instances: The agent no longer needs the Project Editor IAM role; it only needs the Monitoring Metric Writer role ( roles/monitoring.metricWriter ).
- New IAM roles include Monitoring Editor and Monitoring Admin , and there is full support for custom roles.
- May 11, 2018 Change If you are using custom IAM roles, any roles that load Stackdriver Monitoring dashboards now require additional IAM permissions.
- The monitoring.dashboards. and monitoring.publicWidgets. permissions are now public, and custom roles used to load dashboards must now include them.

