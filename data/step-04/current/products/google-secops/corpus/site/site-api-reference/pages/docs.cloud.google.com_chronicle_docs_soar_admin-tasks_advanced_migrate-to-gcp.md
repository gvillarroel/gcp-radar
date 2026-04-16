---
title: "SOAR migration overview \_|\_ Google Security Operations \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs/reference/google-secops-api-libraries-overview
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp
  title: "SOAR migration overview \_|\_ Google Security Operations \_|\_ Google Cloud\
    \ Documentation"
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
SOAR migration overview
Supported in:
Google secops
SOAR
This document describes the process and timelines to migrate SOAR infrastructure
to Google Cloud. The migration aims to modernize the infrastructure and enhance its integration
with Google Cloud services, benefiting both Google Security Operations unified customers and standalone SOAR users transitioning to Google Cloud.
This migration is necessary to provide critical infrastructure upgrades
including enhanced reliability, improved security, greater compliance, and
more granular access control. It also enables access to
Agentic AI capabilities through Model Context Protocol (MCP) integration and
best-in-class services including IAM for access control,
Cloud Monitoring, and Cloud Audit Logs.
The migration is carried out in two Stages - Stage 1 and Stage 2.
Stage 1 includes the following migrations:
Migration of your Google-owned SOAR Project to Google Cloud infrastructure. This is carried out by Google.
Migration of SOAR Authentication to Google Cloud (only applicable for SOAR standalone customers).
Stage 2 includes the following migrations:
Migration of SOAR Permission Groups and Permissions to Google Cloud IAM.
Migration of SOAR APIs to the new unified Chronicle API, requiring updates to existing scripts and integrations.
Migration of remote agents.
Migration of SOAR Audit logs.
Migration stage 1 for Google SecOps unified customers
Check your in-product notification for your Stage 1 migration date and the included Google Form to confirm the time slot.
Stage 1 includes the following migrations.
Migrate Google owned SOAR Project to Google Cloud
The migration involves up to 90 minute downtime where the Google SecOps
platform is not accessible. During this downtime, your SIEM services will continue
to operate in the background, while SOAR services will be temporarily paused.
Following the downtime, the platform will be accessible, and SOAR services will
resume processing any alerts generated or ingested during the downtime.
Once the migration is complete, we will send you an email.
Migration stage 1 for SOAR standalone customers
Note: For a comprehensive, end-to-end walkthrough on the instructions for Stage
1 of the SOAR Migration process, specifically for SOAR Standalone customers, see
the Google SecOps SOAR Migration video .
You will get an in-product notification message when we are ready to initiate Stage 1 for you.
Make sure to do the following:
Set up a Google Cloud project .
You can also use an Google Cloud project that may have been set up to access Chronicle Support
but does not have a Google Security Operations instance yet.
Enable Chronicle API .
Set up Google Cloud Authentication to access SOAR. Refer to Set up Google Cloud Authentication to access SOAR .
Provide the Google Cloud project ID in the Google form in the in-product notification and confirm the migration date and time slot before you submit the form.
Accept the invitation email to the "Get Google Security Operations page"
and complete the set up. Make sure your region information is accurate.
Validate that the preceding steps have been set up correctly by consulting
the Pre-migration validation guide .
After you complete the steps, Google performs the migration at the chosen date and time.
You will experience a downtime in SOAR services for 2 hours during the migration.
We will send an email after the completion along with a new URL to access the SOAR platform.
The old URL will work until June 30, 2026 by redirecting you to the new URL.
Set up Google Cloud authentication to access SOAR
Depending on what type of identity you want to set up and use, you need to set up
one of the following options. You may need the help of your Google Cloud and Identity / IDP administrator to carry out these instructions.
Option 1: Configure Cloud Identity Authentication in Google Cloud (Google Managed accounts)
This scenario is applicable if you manage user accounts directly within Cloud Identity using Google-managed usernames and passwords.
It does not apply if you are using Cloud Identity for SSO with a third-party identity provider such as Okta or Azure AD.
Complete the following steps:
Set up Cloud Identity in Google Cloud .
You can skip this step if you already have Cloud Identity set up with Google-managed username and password..
Make sure all existing SOAR users are configured in the Cloud Identity Admin console .
Grant the required roles in IAM by following the role assignment format for Google accounts .
Assign the following predefined IAM roles in Google Cloud to the onboarding SME:
Chronicle API Admin
Chronicle Service Admin
Chronicle SOAR Admin
Project IAM Admin
Service Usage Admin
Assign one of the following predefined IAM roles to all existing SOAR users:
Chronicle API Admin
Chronicle API Editor
Chronicle API Viewer
Chronicle API Limited Viewer
Complete the authentication setup in SOAR by mapping each user (including administrators)
to an email user group .
Go to Settings > SOAR Settings > Advanced > Group Mapping .
Click + and fill in the following information.
Add Group Name: The name you assign to an email group, such as T1 analysts or EU analysts.
Group Members: Add the required user emails. Press Enter after adding each email.
Select the Admin user group with Admin permissions for both permission groups and SOC Roles. Select All Environments .
If you have any existing email user group mappings in the External Authentication page, you should leave them as is in order not to override your existing SOAR authentication. For the new Google Cloud authentication to access SOAR, you must still set up email user group mapping in the Settings > SOAR Settings > Advanced > Group Mapping page.
Once you've finished, click Add . Each time a user signs in to the platform, they are automatically added to Settings > Organization > User Management page. The migrated instance retains these mappings, which serve as the basis for determining user access to SOAR. You must make sure that every user is mapped in this page in order to access Google SecOps.
Option 2: Configure Workforce Identity Federation Authentication in Google Cloud
This scenario is applicable if you manage your user identities using third party IdPs such as
Microsoft Azure Active Directory, Okta, Ping Identity and AD FS.
Set up Workforce Identity Federation in Google Cloud You can skip this step if it was already set up.
Make sure all the existing users in SOAR are part of the workforce pool groups
set up in the Workforce Identity Federation.
Grant the required roles in IAM by following the role assignment format for Workforce Identities .
Assign all of the following predefined IAM roles to the onboarding SME.
Chronicle API Admin
Chronicle Service Admin
Chronicle SOAR Admin
Project IAM Admin
Service Usage Admin
Assign one of the following roles in IAM to all existing SOAR users:
Chronicle API Admin
Chronicle API Editor
Chronicle API Viewer
Chronicle API Limited Viewer
Complete the authentication setup in SOAR by mapping all the IdP groups that need access to SOAR .
Make sure the existing users are mapped to at least one of the IdP groups.
Go to Settings > SOAR Settings > Advanced > Group Mapping .
Click + and fill in the following information..
IdP group name: Add the group name from your IdP.
Choose the necessary access to Permission groups, Environments and SOC Roles.
Make sure you have added the Admin IdP group with Admin permissions for permission groups, SOC Roles and select All Environments.
If you have any existing IdP group mappings in the External Authentication page, you should leave it as is in order not to override your existing SOAR authentication.
For the new Google Cloud authentication to access SOAR, you must still set up IdP Group Mapping in Settings > SOAR Settings > Advanced > Group Mapping page.
Once you've finished, click Add . Each time a user signs in to the platform, they are automatically added to Settings > Organization > User Management page. The migrated instance retains these mappings, which serve as the basis for determining user access to SOAR. You must make sure that every user is mapped in this page in order to access Google SecOps.
Note: This instruction is for Google SecOps Unified customers using Workforce Identity Federation for your integrations. If you have granted the Service Account Token Creator IAM role to the python service account gke-init-python@soar-yyyyyy.iam.gserviceaccount.com , you must grant the same Service Account Token Creator IAM role to the new Python service account soar-python@yyyyyyyyyyy-tp.iam.gserviceaccount.com after the migration. The new Service Account will be sent by email post migration.
Stage 2 migration for all customers
Important : You must complete Stage 1 before you begin the Stage 2 migration.
Stage 2 migration is generally available to all customers from January 26, 2026.
The final deadline to complete the Stage 2 transition is September 30, 2026.
Note: These procedures apply to both Google SecOps SOAR standalone customers and Google SecOps customers.
Migrate SOAR permission groups to Google Cloud IAM
Migrate the SOAR permission groups and permissions to IAM
through a single-click of the migration script in Google Cloud.
The script creates new custom roles for each permission group and assigns them to
users for Cloud Identity customers or IdP groups for Workforce Identity Federation customers.
You can also migrate the SOAR permissions using Terraform.
For full details of the migration script and Terraform commands, see Migrate SOAR permissions to Google Cloud IAM .
For more information about how to set up permissions, see Configure feature access .
After the migration of the permissions, the following happens
SOAR Settings > Organization > Permissions page is still available until September 30, 2026
(for backwards compatibility with Appkeys). Don't make any changes to this page. The permissions
are all managed through IAM.
The Permission Group column on mapping pages is removed.
The restricted actions section in the Permissions page will move to the IDP Group Mapping page (or Email group page).
Note: If you don't see the migration script, you have probably not completed stage 1 of the migration. Contact your Google representative.
Migrate SOAR APIs to Chronicle API
If you use SOAR API programmatically using API calls or through integrations, you can migrate it to the new SOAR v1 beta endpoints available as part of Chronicle API.
You must update your scripts and integrations to replace the SOAR API endpoints with the
corresponding Chronicle API endpoints. The legacy SOAR API and API Keys
will be available till September 30, 2026 after which they will no
longer function.
For more information, refer to Migrate endpoints to Chronicle API .
Migrate webhooks
You need to migrate SOAR webhooks to the Chronicle API by doing the following before September 30, 2026:
Update the webhook URL on the client side by replacing the legacy siemplify-soar.com domain with the new googleapis.com domain using the new request format . The legacy siemplify-soar.com domain will continue to function until September 30, 2026.
For example, a webhook defined on: https:// xxxx.siemplify-soar.com/api/external/v1 /webhooks/{webhook_id}?api_key=xxxx
will need to be updated to: https:// us-chronicle.googleapis.com/v1alpha/projects/{project_id}/locations/{location}/instances/{instance/{instance_id} /webhooks/{webhook_id}?api_key=xxxx
The authentication for webhooks remains unchanged. Webhooks continue to use the API key that was initially created alongside the webhook link.
Migrate Remote Agents
You can migrate the Remote Agents to Google Cloud by doing the following:
Create a Service Account instead of an API key for the remote agent.
Perform a major version upgrade of the remote agent.
Existing Remote Agents will be available until September 30, 2026, after which they will no longer function.
For detailed instructions, see Migrate Remote Agents to Google Cloud .
Migrate SOAR Audit Logs
SOAR logs will become available in Google Cloud once you complete the permissions
migration to IAM.
Any calls made to the legacy SOAR API until September 30, 2026 will remain accessible in
the SOAR Audit logs
For Google SecOps customers, see Collect Google SecOps SOAR logs .
For SOAR standalone customers, see Collect SOAR logs
Further changes post migration:
License type
The license type is now determined by the user's assigned permissions in IAM.
Landing page
The landing page will move from the Permissions page to the User Preferences menu, accessible from your avatar.
What's Next
SOAR migration pre-validation guide
Migrate a SOAR standalone instance of an MSSP
Migrate SOAR endpoints to the Chronicle API
Migrate remote agents
Migrate SOAR permissions to Google Cloud IAM
Frequently asked questions
Need more help? Get answers from Community members and Google SecOps professionals.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
