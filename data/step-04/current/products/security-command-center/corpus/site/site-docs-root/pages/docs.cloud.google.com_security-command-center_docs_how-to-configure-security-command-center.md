---
title: "Configure Security Command Center services \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/how-to-configure-security-command-center
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/how-to-configure-security-command-center
  title: "Configure Security Command Center services \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Security Command Center
Guides
Send feedback
Configure Security Command Center services
Stay organized with collections
Save and categorize content based on your preferences.
Standard-legacy, Standard, Premium, and Enterprise service tiers
Two types of services run on Security Command Center:
built-in services and integrated services . Built-in services are part of
Security Command Center. Integrated services
are Google Cloud or third-party
services that provide findings to Security Command Center.
This page describes how to configure built-in services and integrated services.
Built-in services of Security Command Center
Standard-legacy, Standard, Premium, and Enterprise service tiers
The following built-in services are part of Security Command Center:
AI Protection: Premium and Enterprise service tiers only
Container Threat Detection: Premium and Enterprise service tiers only
Cloud Run Threat Detection: Premium and Enterprise service tiers only
Compliance Manager: Standard, Premium, and Enterprise service tiers only
Data Security Posture Management (DSPM): Standard, Premium, and Enterprise service tiers only
Event Threat Detection: Premium and Enterprise service tiers only
Notebook Security Scanner ( Preview ): Premium and Enterprise service tiers only
Security Health Analytics: Standard-legacy, Standard, Premium, and Enterprise service tiers only
Security posture: Premium and Enterprise service tiers only
Sensitive Actions Service: Standard-legacy, Standard, Premium, and Enterprise service tiers only
Virtual Machine Threat Detection: Premium and Enterprise service tiers only
Vulnerability Assessment for Amazon Web Services (AWS): Enterprise service tier only
Vulnerability Assessment for Google Cloud: Standard, Premium, and Enterprise service tiers only
Web Security Scanner: Standard-legacy, Premium, and Enterprise service tiers only
You can't enable or disable the
Security posture service or Sensitive Actions Service. These services are available
by default when you activate the Security Command Center Premium tier or
Security Command Center Enterprise tier.
You can't disable Compliance Manager or DSPM after you enable them.
Most built-in services can be enabled for your entire organization or just for
selected folders or projects. By default, folders and projects inherit service
enablement settings from their parent organization or folder.
The Vulnerability Assessment for AWS service can be enabled only for a Google Cloud
organization and requires that you establish a connection between
Security Command Center and AWS.
The Container Threat Detection service can be enabled only for clusters. For information
about required permissions for Container Threat Detection, see
Required IAM permissions .
Enable or disable a built-in service
To enable or disable a Security Command Center service for a resource, do the
following:
In the Google Cloud console, go to the Settings page of Security Command Center.
Go to Settings
Select the organization or project for which you need to manage
services.
For the service that you want to modify, click Manage settings .
On the Service enablement tab, in the hierarchical view of resources,
select the organization, folder, project, or container for which you need to
enable the service.
For that resource, set the service to Enable , Disable , or
Inherit .
Note: For Container Threat Detection and Cloud Run Threat Detection, setting the state of a folder or
project to Inherit is the same as setting it to Disable .
Some services, like Security Health Analytics, operate using batch scans. When you
disable such a service, the change might not be reflected immediately. The change
is effective after all ongoing batch scans are complete. This can lead to
a scenario where new vulnerabilities are still detected for a short period after
you disable the service.
View and edit the modules of a service
For some services (for example, Security Health Analytics), you can enable or disable certain
detectors by enabling or disabling their corresponding modules. To configure the
modules of a service and view their current statuses, do the following:
In the Google Cloud console, go to the Settings page of Security Command Center.
Go to Settings
Select the organization or project for which you need to manage
services.
For the service that you want to view, click Manage settings .
Click the Modules tab. The service's modules are displayed, along with
their respective statuses. The Modules tab is available only for
services that have configurable modules.
Find the module that you want to modify, and set its status to
Enable or Disable .
If you disable a service, the individual modules of that service are also
disabled. For
Virtual Machine Threat Detection for Google Cloud and Event Threat Detection, the modules continue to show
their previous statuses—through the API and the
Google Cloud console—even when the service is disabled. Be aware that
although certain modules appear to be enabled, those modules aren't in operation
if the service is disabled.
Add integrated Google Cloud services to Security Command Center
Standard-legacy, Standard, Premium, and Enterprise service tiers (requires organization-level activation )
You can add an integrated service to an organization-level activation of
Security Command Center. Project-level activations don't support integrated
Google Cloud services.
Security Command Center provides the following integrated services:
Assured Open Source Software (Assured OSS): Enterprise service tier only
Mandiant Attack Surface Management: Enterprise service tier only
Anomaly Detection: Standard-legacy, Standard, Premium, and Enterprise service tiers only
Cloud Armor: Standard-legacy, Standard, Premium, and Enterprise service tiers only
IAM Recommender: Standard-legacy, Standard, Premium, and Enterprise service tiers only
Sensitive Data Protection: Standard-legacy, Premium, and Enterprise service tiers only
VM Manager ( Preview ): Premium and Enterprise service tiers only
Model Armor: Standard-legacy, Standard, Premium, and Enterprise service tiers only
For more information about these services, see
Detection services for vulnerabilities and threats .
To enable an integrated service, follow these steps:
In the Google Cloud console, go to the Security Command Center page.
Go to Security Command Center
Select your organization or project.
Click settings Settings .
Click the Integrated services tab.
Next to the integrated source that you want to enable, click the Status
list and select Enable .
Findings from the services that you enable are displayed on the Findings
page in the Security Command Center dashboard.
Some Google Cloud security services require additional integration steps
that you must complete. See the following:
To configure the Assured OSS integration, see
Integrate with Assured OSS .
To configure the Sensitive Data Protection integration, see
Enable sensitive data discovery .
To disable an integrated service, next to its name, click the list and select
Disable .
Add a third-party security service
Standard-legacy, Standard, Premium, and Enterprise service tiers (requires organization-level activation )
Organization-level activations of Security Command Center can display findings from
third-party security services that have registered as Cloud Marketplace
partners.
Project-level activations of Security Command Center don't support third-party
services.
To integrate security services that aren't registered as
Cloud Marketplace partners, ask the providers to complete the guide to
Onboard as a Security Command Center partner .
To add a new third-party security service to Security Command Center, you set up the
security service, and then enable it in the Google Cloud console.
Before you begin
To add a security service for a registered Cloud Marketplace partner,
you need the following:
The following Identity and Access Management (IAM) roles :
Security Center Admin ( roles/securitycenter.admin )
Service Account Admin ( roles/iam.serviceAccountAdmin )
A Google Cloud project that you want to use for the security service.
Set up a security service
To set up a third-party security service, you need a service account for that
service. When you add the new security service, you can choose from the
following service account options:
Create a service account.
Use your own existing service account.
Use a service account from the service provider.
To set up a new security service that's already registered as a
Cloud Marketplace partner, complete the following:
Go to the Security Command Center Services Marketplace page in the
Google Cloud console.
Go to Marketplace
The Marketplace page displays security services that are directly
associated with Security Command Center.
If you don't see the security service that you want to add, search for
Security , and then select the security service provider.
If the security service provider isn't registered in the
Cloud Marketplace, ask your provider to complete the guide to
Onboard as a Security Command Center partner .
On the security service provider page in the Cloud Marketplace,
follow any provider setup instructions in the Overview .
When configured correctly, the security service you added is available in
Security Command Center.
After you set up a new security service, you need to enable it in the
Google Cloud console.
Enable the security service
Third-party security services use service accounts that might be outside your
organization.
To enable a third-party service, follow these steps:
In the Google Cloud console, go to the Security Command Center page.
Go to Security Command Center
Select your organization or project.
Click settings Settings .
Click the Integrated services tab.
Next to the integrated source that you want to enable, click the Status
list and select Enable .
Findings from the services that you enable are displayed on the Findings
page in the Security Command Center dashboard.
Change the service account of a security service
You can change the service account used for a third-party security service, for
example to address service account leakage or rotation. To change the service
account for a security service, you need to update it in the Google Cloud
console. Afterward, follow the service provider's instructions to update the
service account for their service.
In the Google Cloud console, go to the Security Command Center page.
Go to Security Command Center
Select your organization or project.
Click settings Settings .
Click the Integrated services tab.
In the drop-down list next to the integrated service:
Select Disabled to temporarily disable the integrated service.
Select Manage service account .
On the Edit provider panel that appears, enter the new
service account, then click Submit .
In the drop-down list next to the integrated service, select Enabled to
enable the security service.
When configured correctly, the service account for the integrated service is
updated in Security Command Center. Follow the service provider's instructions to
update the service account information for their service.
What's next
Learn about Google Cloud security services and how to
view the vulnerabilities and threats
they surface.
Learn how to optimize Security Command Center .
Export logs to Cloud Logging .
Configure attack exposure scores to
assess risk.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
