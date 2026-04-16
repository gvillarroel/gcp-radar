---
title: "Enable sensitive data discovery \_|\_ Security Command Center \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/activate-sensitive-data-discovery
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/activate-sensitive-data-discovery
  title: "Enable sensitive data discovery \_|\_ Security Command Center \_|\_ Google\
    \ Cloud Documentation"
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
Enable sensitive data discovery
Stay organized with collections
Save and categorize content based on your preferences.
Standard-legacy, Premium, and Enterprise service tiers
This document describes the sensitive data
discovery feature from
Sensitive Data Protection, how it works in each Security Command Center service tier,
and how to enable it.
Before you begin
To use sensitive data discovery with Security Command Center, complete
these tasks.
Activate Security Command Center
Activate Security Command Center .
Depending on how you activate Security Command Center, you might incur additional
charges for Sensitive Data Protection. For details, see Discovery pricing
for Security Command Center customers .
Make sure Security Command Center is configured to accept Sensitive Data Protection findings
By default, Security Command Center is configured to accept findings from
Sensitive Data Protection. If your organization disabled
Sensitive Data Protection as an integrated service, you must re-enable it
to receive sensitive data discovery findings.
For more information, see Add a Google Cloud integrated
service .
Set up permissions
To get the permissions that you need to configure sensitive data discovery, ask
your administrator to grant you the following IAM roles on the
organization:
Purpose
Predefined role
Relevant permissions
Create a discovery scan configuration and view data profiles
DLP Administrator ( roles/dlp.admin )
dlp.columnDataProfiles.list
dlp.fileStoreProfiles.list
dlp.inspectTemplates.create
dlp.jobs.create
dlp.jobs.list
dlp.jobTriggers.create
dlp.jobTriggers.list
dlp.projectDataProfiles.list
dlp.tableDataProfiles.list
Create a project to be used as the service agent container 1
Project Creator ( roles/resourcemanager.projectCreator )
resourcemanager.organizations.get
resourcemanager.projects.create
Grant discovery access 2
One of the following:
Organization Administrator
( roles/resourcemanager.organizationAdmin )
Security Admin ( roles/iam.securityAdmin )
resourcemanager.organizations.getIamPolicy
resourcemanager.organizations.setIamPolicy
1 If you don't have the Project
Creator ( roles/resourcemanager.projectCreator ) role, you can still create a scan
configuration, but the service agent
container that you use must be an existing project.
2 If you don't have the Organization
Administrator ( roles/resourcemanager.organizationAdmin ) or Security Admin
( roles/iam.securityAdmin ) role, you can still create a scan configuration. After you
create the scan configuration, someone in your organization who has one of these roles must grant discovery access to the
service agent .
For more information about granting roles, see Manage
access .
You might also be able to get the required permissions through custom
roles or other predefined
roles .
Benefits
This feature offers the following benefits:
You can use Sensitive Data Protection findings to identify and remediate
vulnerabilities
and misconfigurations
in your
resources that can expose sensitive data to the public or to malicious actors.
You can use Sensitive Data Protection findings to add context to the triage
process and prioritize threats that target resources containing sensitive
data.
You can configure the attack path simulation
feature to automatically
prioritize resources according to the sensitivity of the data that the
resources contain. For more information, see Set resource priority values
automatically by data
sensitivity .
Sensitive data discovery in Security Command Center Enterprise
Enterprise service tier (requires organization-level activation )
Security Command Center Enterprise includes an organization-level
subscription to the Sensitive Data Protection discovery service. With this
subscription, you don't incur Sensitive Data Protection charges when you run
sensitive data discovery at the organization or folder level. For more
information, see Discovery capacity in Enterprise and Premium in this
document.
Important: When configuring sensitive data discovery, make sure that the
scope of your configuration (also known as parent ) is your
organization and not a project. Your organization-level subscription includes
discovery at the organization scope only. If you use a project-level scope,
you incur separate discovery charges.
To use your organization-level subscription to run discovery on a single
project, see Profile
select projects or data assets in an organization or folder in the
Sensitive Data Protection documentation.
When you activate the Security Command Center Enterprise tier, sensitive data
discovery is automatically enabled for all supported resource
types at the
organization level. This automatic enablement process is a one-time operation
that applies only to resource types that are supported at the time of the
Enterprise tier activation. If Sensitive Data Protection adds discovery
support for new resource types later, then you need to enable those discovery
types manually. For instructions, see Enable discovery with default settings in
an organization in this document.
Sensitive data discovery in Security Command Center Premium
Premium service tier
If you have an organization-level activation of Security Command Center Premium, then
your Premium subscription includes an organization-level subscription to
the Sensitive Data Protection discovery service. With this subscription,
you don't incur
Sensitive Data Protection charges when you run sensitive data discovery at
the organization or folder level. For more information, see Discovery
capacity in Enterprise and Premium in this document.
Important: When configuring sensitive data discovery, make sure that the
scope of your configuration (also known as parent ) is your
organization and not a project. Your organization-level subscription includes
discovery at the organization scope only. If you use a project-level scope,
you incur separate discovery charges.
To use your organization-level subscription to run discovery on a single
project, see Profile
select projects or data assets in an organization or folder in the
Sensitive Data Protection documentation.
To perform sensitive data discovery at the organization level, see Enable
discovery with default settings in an organization in this
document.
If you have a project-level activation of Security Command Center Premium, you can
enable sensitive data discovery at the project level and get the findings in
Security Command Center. However, this feature is priced
separately . To
enable discovery at the project level, see Create a scan
configuration
in the Sensitive Data Protection documentation.
To determine the activation type of your Security Command Center instance, see View
your current activation
type .
Sensitive data discovery in Security Command Center Standard
Standard service tier
If you have Security Command Center Standard, you can enable sensitive data discovery
and get the findings in Security Command Center. However, this feature is priced
separately .
How it works
The Sensitive Data Protection discovery service helps you protect data
across your organization by identifying where sensitive and high-risk data
reside.
In Sensitive Data Protection, the discovery service generates data
profiles , which provide metrics
and insights about your data at various levels of detail.
In Security Command Center, the discovery service generates findings.
Findings generated
Sensitive Data Protection generates observation findings in Security Command Center
that show the calculated
sensitivity and data risk levels of your data. You can use these findings to
inform your response when you encounter threats and vulnerabilities related to
your data assets. For a list of finding types generated, see Observation
findings from the discovery
service .
These findings can inform the automatic designation of high-value resources
based on data sensitivity. For more information, see Use discovery insights
to identify high-value resources in this document.
Sensitive Data Protection generates vulnerability and misconfiguration
findings in Security Command Center when
Sensitive Data Protection detects unprotected high-sensitivity
or moderate-sensitivity data. For a list of finding
types generated, see the following:
Vulnerability findings from the Sensitive Data Protection discovery
service
Misconfiguration findings from the Sensitive Data Protection discovery
service
For a complete list of findings from Sensitive Data Protection, see
Sensitive Data Protection .
Finding generation latency
Depending on the size of your organization, Sensitive Data Protection
findings can start appearing in Security Command Center within a few minutes after
you enable sensitive data discovery. For larger organizations or
organizations with specific configurations that affect finding generation, it
can take up to 12 hours before initial findings appear in Security Command Center.
Subsequently, Sensitive Data Protection generates findings in
Security Command Center within a few minutes after the discovery service scans your
resources.
Enable discovery with default settings in an organization
To enable discovery, you create a discovery configuration for each data
source that
you want to scan. You can edit the
configurations
after creating them. To customize settings in the process of creating a configuration,
see Create a scan
configuration
instead.
To enable discovery with default settings at the organization level, follow
these steps:
In the Google Cloud console, go to the Sensitive Data Protection
Enable discovery page.
Go to Enable discovery
Verify that you are viewing the organization that you activated
Security Command Center on.
In the Enable discovery pane, in the Service agent container field,
set the project to be used as a service agent
container .
Within this project, the system creates a service agent and automatically
grants the required discovery roles to it.
To automatically create a project to use as your service agent container,
follow these steps:
Click Create .
Specify the name, billing account, and parent organization of the new
project. Optionally, edit the project ID.
Click Create .
It can take a few minutes for the roles to be granted to
the new project's service agent.
To select a project that you previously used for discovery operations,
click the Service agent container field and select the project.
To review the default settings, click the expand_more expand icon.
In the Enable discovery section, for each discovery type that you want to
enable, click Enable . Enabling a discovery type does the following:
BigQuery : Creates a discovery configuration for profiling
BigQuery tables across the organization.
Sensitive Data Protection starts profiling your
BigQuery data and sends the profiles to Security Command Center.
Cloud SQL : Creates a discovery configuration for profiling
Cloud SQL tables across the organization.
Sensitive Data Protection starts creating default connections for
each of your Cloud SQL instances. This process can take a few
hours. When the default connections are ready, you must give
Sensitive Data Protection access to your
Cloud SQL instances by updating each connection with the proper
database user credentials.
Secrets/credentials vulnerabilities : Creates a discovery configuration
for detecting and reporting unencrypted secrets in Cloud Run
environment variables. Sensitive Data Protection starts
scanning your environment variables.
Cloud Storage : Creates a discovery configuration for profiling
Cloud Storage buckets across the organization.
Sensitive Data Protection starts profiling your
Cloud Storage data and sends the profiles to Security Command Center.
Vertex AI datasets : Creates a discovery configuration for profiling
Vertex AI datasets across the organization.
Sensitive Data Protection starts profiling your
Vertex AI datasets and sends the profiles to
Security Command Center.
Amazon S3 : Creates a discovery configuration for profiling all Amazon
S3 data that your AWS connector has access to.
Note: This feature requires Security Command Center Enterprise. You must first create
an AWS connector that
has the AWS permissions needed for Sensitive Data Protection
discovery.
Azure Blob Storage : Creates a discovery configuration for profiling all
Azure Blob Storage data that your Azure connector has access to.
Note: This feature requires Security Command Center Enterprise. You must first create
an Azure connector
that has the Azure permissions needed for Sensitive Data Protection
discovery.
To view the newly created discovery configurations, click Go to discovery
configuration .
If you enabled Cloud SQL discovery, the discovery configuration is
created in paused mode with errors indicating the absence of credentials. See
Manage connections for use with
discovery to grant the
required IAM roles to your service agent and to provide
database user credentials for each Cloud SQL instance.
Close the pane.
To view the findings generated by Sensitive Data Protection, see Review
Sensitive Data Protection findings in the
Google Cloud console .
Customize the scan configurations
Each discovery type that you enable has a discovery scan configuration that you
can
customize .
For example, you can do the following:
Adjust the scan frequency.
Specify filters for data assets that you don't want to reprofile.
Change the inspection
template ,
which defines the information
types that
Sensitive Data Protection scans for.
Publish the generated data profiles to other Google Cloud services.
Change the service agent container.
Use discovery insights to identify high-value resources
Premium and Enterprise service tiers (requires organization-level activation )
Security Command Center can automatically designate a resource that
contains high-sensitivity or medium-sensitivity data as a high-value resource.
For high-value resources, Security Command Center provides attack exposure scores and
attack path visualizations, which you can use to prioritize the security of
resources that contain sensitive data. For more information, see Set resource
priority values automatically by data
sensitivity .
Discovery capacity in Enterprise and Premium
Premium and Enterprise service tiers (some features require organization-level activation )
If your sensitive data discovery needs exceed the capacity allocated for
Security Command Center Enterprise or Premium (organization-level) customers, then
Sensitive Data Protection
might increase your capacity temporarily. However, this increase is not
guaranteed and is dependent on whether compute resources are available. If you
require more discovery capacity, contact your account representative or a
Google Cloud sales specialist . For more information, see
Monitor
utilization in the
Sensitive Data Protection documentation.
Sensitive data discovery within service perimeters
If you use VPC Service Controls service perimeters and you want to discover sensitive
data within those perimeters, see Allow sensitive data
discovery within service perimeters .
What's next
View Sensitive Data Protection findings
View the data profiles in Sensitive Data Protection .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
