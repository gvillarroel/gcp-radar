---
title: "Manage frameworks \_|\_ Security Command Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/compliance-manager-apply-framework
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/compliance-manager-apply-framework
  title: "Manage frameworks \_|\_ Security Command Center \_|\_ Google Cloud Documentation"
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
Manage frameworks
Stay organized with collections
Save and categorize content based on your preferences.
Standard, Premium, and Enterprise service tiers (requires organization-level activation )
Compliance Manager frameworks consist of cloud
controls
that help you meet your organization's security or regulatory requirements in
your cloud environments. Applying a framework is a two-step process. First, you
must identify the cloud controls that align with your business' security and
compliance obligations. Then, you deploy a framework that includes those cloud
controls to the appropriate organization, folder, or project in
Google Cloud. This page helps you complete the following steps:
Assess which built-in framework best aligns with your regulatory and security
requirements. You can create your own custom framework, but we recommend
starting with a built-in framework.
Determine which built-in cloud controls map to your business requirements.
(Premium and Enterprise tiers only) You can create custom cloud controls ,
if required.
Determine whether to deploy the framework to your Google Cloud
organization, or to specific folders and projects. You can only deploy one
framework to each organization, folder, or project.
Compliance Manager supports
folders configured for application management .
Copy an existing framework and modify it to match your requirements. If
required, you can create a custom framework.
Note: The Standard tier supports only the Security Essentials framework.
Other built-in frameworks require Premium or
Enterprise tiers. For more
information, see Frameworks for
Google Cloud .
Deploy the framework on the appropriate organization, folder, or project.
Before you begin
To get the permissions that
you need to apply frameworks,
ask your administrator to grant you the
following IAM roles on your organization:
Compliance Manager Admin ( roles/cloudsecuritycompliance.admin )
To view findings dashboards:
Compliance Manager Viewer ( roles/cloudsecuritycompliance.viewer )
To deploy frameworks that include cloud controls that are based on organization policies, one of:
Organization Policy Administrator ( roles/orgpolicy.policyAdmin )
Assured Workloads Administrator ( roles/assuredworkloads.admin )
Assured Workloads Editor ( roles/assuredworkloads.editor )
To create a folder while deploying a framework, one of:
Folder Admin ( roles/resourcemanager.folderAdmin )
Folder Creator ( roles/resourcemanager.folderCreator )
To create a project while deploying a framework, all of:
Project Billing Manager ( roles/billing.projectManager )
Project Creator ( roles/resourcemanager.projectCreator )
Project Deleter ( roles/resourcemanager.projectDeleter )
To assign Data Security Posture Management (DSPM) frameworks to an App Hub application , all of:
App Hub Viewer ( roles/apphub.viewer )
For more information about granting roles, see Manage access to projects, folders, and organizations .
The roles for deploying frameworks with organization policies contain the
required orgpolicy.policies.create , orgpolicy.policies.update , and
orgpolicy.policies.get permissions.
The roles for creating folders contain the required
resourcemanager.folders.get , resourcemanager.folders.create , and
resourcemanager.folders.delete permissions.
The roles for creating projects contain the required
resourcemanager.projects.get , resourcemanager.projects.create ,
resourcemanager.projects.delete , and
resourcemanager.projects.createBillingAssignment permissions.
The roles for assigning DSPM frameworks to applications
contain the required apphub.locations.list , apphub.applications.list and
apphub.applications.get permissions.
You might also be able to get
these permissions
with custom roles or
other predefined roles .
View frameworks
Complete the following steps to view the configuration for built-in frameworks
or other frameworks that you've already created.
In the Google Cloud console, go to the Compliance page.
Go to Compliance
Select your organization.
To view all available frameworks, click the Configure tab.
The dashboard shows the available frameworks, a brief description, supported
platforms, and the resources that the framework has been applied to.
To view details about a specific framework, click the framework name.
Create a framework
After you determine which cloud controls apply to resources within your
organization or a specific folder or project, you can create a framework. You
can create a custom framework or copy an existing framework and modify it. When
you copy a framework, it includes the latest releases of any built-in cloud
controls.
In the Google Cloud console, go to the Compliance page.
Go to Compliance
Select your organization.
In the Configure tab, click Create custom framework .
Complete one of the following:
To use an existing framework, complete the following:
Select Start from an existing framework .
Select the framework that you want to copy.
Click Add .
To create a custom framework, select Start new .
Enter a name, unique identifier, and description for your framework. Click
Continue .
If you're copying an existing framework, the list of cloud
controls that were part of the existing framework displays.
To add the cloud controls that you require, complete the following:
To add an existing cloud control, click Add Cloud Controls . Select all
the cloud controls that you require and then click Add .
When you add a control, verify the control type (detective, preventive, or
audit) of the control. Note that preventive and audit controls are available
only in Premium and Enterprise tiers. Don't include audit-only controls in
a framework that you want to use to monitor your environment and detect
violations. You can't deploy frameworks that include
audit-only controls.
(Premium and Enterprise tiers only) To create a custom cloud control, click Create custom cloud control . For
instructions, see Create a custom cloud
control .
Click Continue .
Add any additional parameters that the cloud controls require.
For example, if you want to enable a Data Security Posture Management (DSPM) cloud control
such as the Data access governance cloud control, specify the locations
that principals must use. For more information about Data Security Posture Management controls,
see Data access governance cloud
control .
Click Create .
Deploy a framework
Deploy a framework to an organization, folder, or project so that you can
control and monitor those resources using the framework's cloud controls. You
can deploy multiple frameworks to each organization, folder, or project. If you
are deploying a framework that includes only the advanced data security cloud
controls ,
you can deploy the framework to App Hub applications in folders
configured for application management.
Folders and projects inherit frameworks through the Google Cloud resource
hierarchy . Therefore,
if you deploy frameworks at the organization level and at a project level, all
the cloud controls within both frameworks apply to the resources in the project.
If there are any differences in cloud control definitions, the lower-level cloud
control is used by the resources in the project. For example, if a cloud control
rule is set to Allow at the organization level and to Deny at the project level,
the project-level setting of Deny is applied to the resources in the project.
As a best practice, we recommend that you deploy a framework at the organization
level that includes the cloud controls that can apply to your entire business.
You can then deploy more stringent frameworks to folders and projects
that require them.
Note: If you deploy a framework to a folder or project that has
Security Health Analytics enabled, you might receive duplicate findings.
Compliance Manager uses a different evaluation engine then
Security Health Analytics.
In the Google Cloud console, go to the Compliance page.
Go to Compliance
Select your organization.
In the Configure tab, for the framework that you want to deploy, click
more_vert More Actions >
Apply to resources .
Choose one of the following options:
To monitor for drift only, choose Monitor .
To monitor for drift and actively prevent violations, choose Monitor and
prevent .
Select the resource that you want to deploy the framework to. You can choose
an existing organization, folder, or project. For DSPM only,
you can select an application to deploy a framework that includes only
DSPM advanced cloud controls to an application. If
you chose to actively prevent violations, you can create a new folder or
project and deploy the framework to it.
Complete one of the following:
If you selected Monitor , complete the following:
Verify the information.
If you selected a folder configured for application management and your
framework includes only advanced DSPM cloud
controls ,
select the application that you want to monitor.
Click Monitor .
If you selected Monitor and prevent , complete the following:
Click Next . Review the cloud controls and modes.
Click Continue .
If displayed, verify the additional information that's required for
some cloud controls.
Click Next .
Review your selections and then click Enforce .
After you deploy the framework, you can monitor your environment for any drift
from your defined cloud controls. Security Command Center reports instances of drift
as findings that you can review, filter, and resolve. It can take
approximately six hours after you deploy a framework for findings related to
cloud controls to appear.
Edit a custom framework
After you create a framework, you can change its name and description, add or
remove cloud controls, and update any parameters. You can only edit frameworks
that you create; you can't edit built-in frameworks.
In the Google Cloud console, go to the Compliance page.
Go to Compliance
Select your organization.
On the Configure tab, click the framework that you want to edit.
On the Framework details page, verify that the framework isn't assigned
to a resource. If required, remove the
assignments .
Click Actions > Edit .
In the Update framework details page, change the name and description as
required. Click Continue .
To change the cloud controls that are included in the framework, complete the
following:
To add an existing cloud control, click Add Cloud Controls . Select all
the cloud controls that you require and then click Add .
To create a custom cloud control, click Create custom cloud control .
For instructions, see Create a custom cloud control .
To remove a cloud control, select the cloud control and click Remove .
Click Continue .
Add any additional parameters that the cloud controls require.
Click Save .
Remove resources from a deployed framework
You can remove the organization, folders, or projects that you assigned to a
deployed framework. Removing resources means that the framework no longer
generates findings for that node of your resource hierarchy.
When you remove resources, the state of most of the related findings changes to
Inactive after seven days. If your framework includes the Data deletion cloud
control, the findings change to Inactive after 90 days. The states for
findings that are related to the Data flow governance cloud control and the Data
access governance cloud control aren't automatically changed.
In the Google Cloud console, go to the Compliance page.
Go to Compliance
Select your organization.
On the Configure tab, click the framework that you want to unassign
resources from.
On the Framework details page, click Actions >
Manage resource assignments .
In the Assigned resources table, find the resource that you want to
remove and click delete Delete .
Review the confirmation message and click Unassign .
Optional: change the state of associated findings to Inactive . For
instructions, see Change the state of a
finding .
Update a framework to a newer release
Google publishes regular updates to its built-in frameworks as services deploy
new features or as new best practices emerge.
You can view the releases of built-in frameworks in the
frameworks dashboard in the Configure tab or in the framework details page.
Google notifies you in the console and release notes when the following updates
occur:
Built-in cloud controls are added or removed from a framework.
Built-in cloud controls are
updated .
To update a framework, complete the following:
In the Google Cloud console, go to the Compliance page.
Go to Compliance
Select your organization.
On the Configure tab, click the framework that you want to update.
On the Framework details page, in the Assigned resources table,
review the Update status for any assignments that are identified as
Update available .
To apply the changes, complete the following:
Remove the resource assignment .
Note: When you remove a resource assignment,
Compliance Manager no longer evaluates that resource
using that framework. Findings are no longer created.
Redeploy the framework to your resource so that
Compliance Manager can resume evaluating the resource and
creating findings.
Delete a custom framework
Delete a framework when it's no longer required. You
can only delete frameworks that you create; you can't delete built-in
frameworks.
Note: You can't recover a framework after you delete it.
In the Google Cloud console, go to the Compliance page.
Go to Compliance
Select your organization.
On the Configure tab, click the framework that you want to unassign
resources from.
On the Framework details page, verify that the framework isn't assigned
to a resource. If required, remove the
assignments .
Click Actions > Delete .
In the Delete window, review the message. Type Delete and click
Confirm .
What's next
Monitor your
frameworks for compliance .
Audit your environment with
Compliance Manager .
Review and manage findings in the
console .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
