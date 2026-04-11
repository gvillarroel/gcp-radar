---
title: "Map users in the Google SecOps platform \_|\_ Google Security Operations \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform
  title: "Map users in the Google SecOps platform \_|\_ Google Security Operations\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Google Security Operations
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Map users in the Google SecOps platform
Supported in:
Google secops
Note: For customers who've already migrated to Google Cloud, the Permission Groups column
doesn't appear on this page. For more information, see Migrate to Google Cloud .
This document explains how to provision, authenticate, and map users with secure
identification to the Google Security Operations platform. It outlines the configuration
process with Google Workspace as the external Identity Provider (IdP), though
the steps are similar for other IdPs.
When you use the Cloud Identity Provider, you should configure the
service with email groups instead of IdP groups. For details, see Map users in Google SecOps
platform using Cloud Identity .
Set up SAML attributes for provisioning
To set up SAML attributes and groups in the external IdP, do the following:
In the Google Workspace, go to the SAML Attributes mapping section.
Add the following mandatory attributes:
first_name
last_name
user_email
groups
In Google Groups , enter the IdP group names. For example,
Google SecOps administrators or Gcp-security-admins . Note
these group names; you need them later for mapping in the
Google SecOps platform. (In other external providers, such as Okta,
this is referred to as IdP Groups ).
Figure 1. SAML attribute mapping
Set up IdP provisioning
To set up IdP provisioning, follow the steps in
Configure the IdP and Create a workforce identity pool provider .
The following example is the workforce pool creation command for the app configuration
described in
Configure Workforce Identity Federation :
gcloud iam workforce-pools providers create-saml WORKFORCE_PROVIDER_ID \
--workforce-pool = WORKFORCE_POOL_ID \
--location = "global" \
--display-name = WORKFORCE_PROVIDER_DISPLAY_NAME \
--description = WORKFORCE_PROVIDER_DESCRIPTION \
--idp-metadata-path = PATH_TO_METADATA_XML \
--attribute-mapping = "google.subject=assertion.subject,attribute.first_name=assertion.attributes.first_name[0],attribute.last_name=assertion.attributes.last_name[0],attribute.user_email=assertion.attributes.user_email[0],google.groups=assertion.attributes.groups"
Control user access
There are multiple ways to manage user access to different aspects of the platform:
Permissions groups : Set user access levels by assigning them to
specific permission groups. These groups determine which modules and submodules
users can view or edit. For example, a user might have access to Cases and
Workdesk pages, but be restricted from Playbooks and Settings .
For more information, see Work with permission groups .
SOC roles : Define the role of a group of users. You can assign users
to SOC roles to streamline task management. Instead of assigning cases, actions,
or playbooks to individuals, they can be assigned to a SOC role. Users can see
cases assigned to them, their role, or additional roles.
For more information, see
Work with roles .
Environments or environment groups : Configure environments or environment
groups to segment data across different networks or business units, commonly used
by businesses and Managed Security Service Providers (MSSPs). Users can only access
data within the environments or groups assigned to them. For more information, see
Work with environments .
Map and authenticate users
The combination of permission groups, SOC roles, and environments determines the
Google SecOps user journey for each IdP group in the
Google SecOps platform.
For customers who use a third-party provider, map each IdP group defined in the
SAML settings on the IdP Group Mapping page.
For customers who use Cloud Identity Provider, map email groups on the Group Mapping page.
For more information, see Map users in the Google SecOps
platform using Cloud Identity .
You can map IdP groups with
multiple permission groups, SOC roles, and environments. This makes sure that different
users mapped to different IdP groups in the SAML provider inherit all required permission levels. For more information, including how Google SecOps manages this, see Multiple permissions in IdP group mapping .
You can also choose to map IdP groups to individual control access parameters. This
enables a more granular level of mapping and can be helpful for large customers.
For more information, see Map IdP groups to access control parameters .
By default, the Google SecOps platform includes an IdP group of default administrators.
To map IdP groups, follow these steps:
In Google SecOps, go to
SOAR Settings > Advanced > IdP Group Mapping .
Make sure you have the names of the IdP groups available.
Click
Add
Add and start mapping the parameters for each IdP group.
Once you've finished, click Add . Each time a user signs in to the platform,
they are automatically added to the User Management page, found under
Settings > Organization .
When users attempt to sign in to the Google SecOps platform, but their IdP group
hasn't been mapped, for users not to be rejected, we recommend enabling the
Default Access Settings and setting administrator permissions on this
page. After the initial administrator setup is complete, we suggest adjusting
the administrator permissions to a more minimal level.
Map IdP groups to access control parameters
This section describes how to map different IdP groups to one or more access
control parameters within
the IdP Group Mapping page. This approach is beneficial for customers who
want to onboard and provision user groups based on specific customizations, rather
than adhering to the standardization of the Google SecOps SOAR platform.
While mapping groups to parameters may require you to create more groups initially,
once the mapping is set, new users can join Google SecOps without
the need to create additional groups.
For information about multiple permission in group mapping,
see Map users with multiple control access parameters .
Delete users
If you delete groups from here, make sure to delete the individual users from the
User Management screen. For more information, see Delete Google SecOps users .
Use Case: Assign unique permission fields to each IdP group
The following example illustrates how to use this feature to help onboard and provision
users according to your company's needs.
Your company has three different personas:
Security analysts (containing group members Sasha and Tal)
SOC engineers (containing group members Quinn and Noam)
NOC engineers (containing group members Kim and Kai)
Security analysts and SOC Engineers have the same Google SecOps
Permission Groups (Analyst) and SOC Roles (Tier 1), but while the Security Analysts have
permissions for the London environment, the SOC Engineers have permissions
for the Manchester environment. Meanwhile, NOC Engineers have permissions for the
London environment, but are assigned the Basic Permission Group and
Tier 2 SOC Role.
This scenario is illustrated in the following table:
Persona
Permission Group
SOC Role
Environment
Security analysts
Analyst
Tier 1
London
SOC engineers
Analyst
Tier 1
Manchester
NOC engineers
Basic
Tier 2
London
For this example, assume that you already set up the necessary permission groups,
SOC roles, and environments in Google SecOps.
Here is how you would set up the IdP groups in the SAML provider and in the Google SecOps
platform:
In your SAML provider, create the following user groups:
Security analysts (containing Sasha and Tal)
SOC engineers (containing Quinn and Noam)
NOC engineers (containing Kim and Kai)
London (containing Sasha, Tal, Kim and Kai)
Manchester (containing Quinn and Noam)
Go to Settings > SOAR
Settings > Advanced > IdP Group Mapping .
Click Add IdP Group .
Enter the following details in the dialog:
IdP Group: Security analysts
Permission Group: Analyst
SOC Role: Tier 1
Environment: leave blank
Enter the following details in the next dialog:
IdP Group: SOC engineers
Permission Group: Analyst
SOC Role: Tier 1
Environment: leave blank
Enter the following details in the next dialog:
IdP Group: NOC engineers
Permission Group: Basic
SOC Role: Tier 2
Environment: leave blank
Enter the following details in the next dialog:
IdP Group: London
Permission Group: leave blank
SOC Role: leave blank
Environment: London
Enter the following details in the next dialog:
IdP Group: Manchester
Permission Group: leave blank
SOC Role: leave blank
Environment: Manchester
For customers using the Case Federation feature, see
Set up federated case access for Google SecOps .
Map service accounts for API access
To grant a service account access or workload identity federation access to
Google SecOps, you must map its email address to the platform's
access control parameters. This is a mandatory step to provide the identity
with the necessary access to SOC Roles , and Environments
required to perform automated tasks or API operations.
In Google SecOps, go to
SOAR Settings > Advanced > Group Mapping .
Click add Add .
In the Add Role dialog, enter the full email address of your service
account or the Workload Identity principal string in the
IAM Role / IdP group field.
Select the appropriate SOC Roles and Environments .
Click Add .
For more information on setting up service accounts, see the
API migration guide .
Need more help? Get answers from Community members and Google SecOps professionals.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
