---
title: "Help secure the Cloud Workstations API using Chrome Enterprise Premium \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workstations/docs/tutorial-help-secure-workstations-api-using-beyondcorp-enterprise
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/workstations/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/workstations/docs/tutorial-help-secure-workstations-api-using-beyondcorp-enterprise
  title: "Help secure the Cloud Workstations API using Chrome Enterprise Premium \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Workstations
Guides
Send feedback
Help secure the Cloud Workstations API using Chrome Enterprise Premium
Stay organized with collections
Save and categorize content based on your preferences.
Overview
Chrome Enterprise Premium is
Google Cloud's zero trust solution
that enables an organization's workforce to access web applications securely
from anywhere, without the need for VPN, and to help prevent malware, phishing,
and data loss.
With the power of Google Chrome, Chrome Enterprise Premium enables users to access
applications from any device. Chrome Enterprise Premium is expanding its capabilities
to address some key security challenges in the developer environment.
Using context-aware access control for
Google Cloud console and APIs,
Chrome Enterprise Premium enables additional security for the Cloud Workstations API.
Caution: To enable context-aware access control for workstations, you must first
enable IAP on your workstation
cluster.
The following table lists whether Chrome Enterprise Premium supports context-aware access
control for the specified Cloud Workstations access method.
The check mark indicates Chrome Enterprise Premium
limits this Cloud Workstations access method.
The not supported icon indicates
Chrome Enterprise Premium does not limit this Cloud Workstations access method.
Cloud Workstations access
Chrome Enterprise Premium context-aware access control
Google Cloud console
gcloud CLI: Create, Edit, Delete resource
gcloud CLI: SSH
API: REST
API: RPC
API: Client Libraries
API: browser access
HTTP: browser access
HTTP: SSH
HTTP: local JetBrains IDEs
HTTP: local VS Code
Objectives
This document describes the steps that an administrator follows to set up
Chrome Enterprise Premium access control for the Cloud Workstations API
and to provide additional mechanisms that help prevent source code exfiltration
from browser-based Cloud Workstations IDEs.
Costs
As part of this tutorial, you may need to get other teams involved (for billing
or IAM) and you also test access-control to demonstrate that
Chrome Enterprise Premium guardrails are in place.
In this document, you use the following billable components of Google Cloud:
Chrome Enterprise Premium
Cloud Workstations
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
When you finish the tasks that are described in this document, you can avoid
continued billing by deleting the resources that you created. For more information, see
Clean up .
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Workstations API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Make sure that you have the following role or roles on the project:
Cloud Workstations > Cloud Workstations Admin.
Check for the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
In the Principal column, find all rows that identify you or a group that
you're included in. To learn which groups you're included in, contact your
administrator.
For all rows that specify or include you, check the Role column to see whether
the list of roles includes the required roles.
Grant the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
Click person_add Grant access .
In the New principals field, enter your user identifier.
This is typically the email address for a Google Account.
Click Select a role , then search for the role.
To grant additional roles, click add Add
another role and add each additional role.
Click Save .
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Workstations API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Make sure that you have the following role or roles on the project:
Cloud Workstations > Cloud Workstations Admin.
Check for the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
In the Principal column, find all rows that identify you or a group that
you're included in. To learn which groups you're included in, contact your
administrator.
For all rows that specify or include you, check the Role column to see whether
the list of roles includes the required roles.
Grant the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
Click person_add Grant access .
In the New principals field, enter your user identifier.
This is typically the email address for a Google Account.
Click Select a role , then search for the role.
To grant additional roles, click add Add
another role and add each additional role.
Click Save .
Make sure that you have assigned a
Chrome Enterprise Premium Standard license to each of your users. Only users
with a license have access controls enforced. For more information, see
Assign, remove, and reassign licenses .
Part 1: Set up Chrome Enterprise Premium for Cloud Workstations
This section takes you through the steps to help you secure context-aware access
to the Cloud Workstations API:
Set up Cloud Workstations .
Create a demo user and a demo group .
Create an access level in Access Context Manager .
Enable Chrome Enterprise Premium CAA .
Add required Google groups with access levels .
Test developer access to Cloud Workstations .
Set up Cloud Workstations
To integrate with Chrome Enterprise Premium, your Cloud Workstations cluster
must use Identity-Aware Proxy (IAP). Skip this section if you have these
resources already configured.
To set up Cloud Workstations:
Create a workstation cluster with a custom domain .
Enable IAP .
Create a workstation configuration in the cluster.
If you're new to Cloud Workstations, see the
Overview and Architecture .
Create a demo user and a demo group
From the Google Workspace Admin console, create a demo user and a
new user group. When enabled, context-aware access (CAA) for
Google Cloud console applies to all users and Google groups because it is a
global setting.
Sign in to the Google Workspace Admin console with your
administrator account:
Menu > Directory >
Users > Add New User .
Create a demo user: demo-user@<domain> .
Sign in to the Google Cloud console and navigate to
Menu > IAM & Admin > Groups .
Create an IAM group for Cloud Workstations access,
name it Cloud Workstations Users , and assign the previously
created demo user, demo-user@<domain> .
Click Save .
Also create an IAM administrator group, and name it Cloud Admin Users .
Assign your project and organization administrators to this group.
Add the demo user, demo-user@<domain> , to the
Cloud Workstations user group that you created:
In the Google Cloud console , go to
Cloud Workstations > Workstations .
Select the workstation and then click
more_vert More > Add Users .
Select the demo user, demo-user@<domain> and select
Cloud Workstations User as the Role .
To give the demo user access to the workstation, select
demo-user@<domain> , select Cloud Workstations Users as the
Role , and click Save .
Create an access level
Go back to the Google Cloud console to create an access level in
Access Context Manager.
Note: Enrolling a device as a corporate-owned device is not covered in
this tutorial. To enroll a device, follow instructions at
Add company-owned devices to the inventory .
Follow these instructions to test access:
From the Google Cloud console , navigate to
Security >
Access Context Manager
to configure a corporate-managed device policy.
Click Create access level and fill in the following fields:
In the Access level title field, enter corpManagedDevice .
Select Basic mode .
Under Conditions select True to enable the condition.
Click + Device policy to expand the options and check
Require corp owned device .
Click Save to save the access policy.
Enable Chrome Enterprise Premium CAA for Google Cloud console
To assign context-aware access controls (CAA) to workstations, start by
enabling CAA for Google Cloud console:
From the Google Cloud console , navigate to
Security > BeyondCorp Enterprise .
Click Manage access to Google Cloud console and API .
This takes you to the Chrome Enterprise Premium Organization level page.
In the Secure Google Cloud console & APIs section, click Enable .
Add required Google groups with access levels
Warning: These access permissions affect all
Google Cloud console
and API access, not just for the Cloud Workstations API. Make sure that you
configure users and access levels correctly to avoid being locked out of
the Google Cloud console.
Add required administrator groups with relevant members and the correct access
policy.
Tip: CAA for Google Cloud console
provides access controls for administrators to Google Cloud console and
all cloud APIs. As a precaution, we recommend that you add a CAA dry-run policy
before changing permissions.
Console
Create an administrator access policy named CloudAdminAccess with
the location set to regions where your administrators work. This makes
sure that administrators can access resources even when another policy
blocks them.
Create an IAM group with administrator access at
IAM & Admin > Groups .
Select the organization.
Create a group, name it Cloud Admin Users .
Assign yourself and any other administrators to this group.
Click Save .
Go to Security > Chrome Enterprise Premium .
Click Manage access and review
the list of groups and access levels that appear.
Click Add principals to Google Cloud console & APIs .
For Google Groups , select Cloud Admin Users . This is
the Google Group that you selected in the previous step.
Select CloudAdminAccess , the access level that you created for
administrator access.
Click Save .
gcloud and API
To enable dry-run, follow the
Chrome Enterprise Premium dry-run tutorial .
Assign access level to Cloud Workstations users group
To assign the access level to Cloud Workstations users group:
Go to Security > Chrome Enterprise Premium and click
Manage access .
Review the list of groups and access levels that appears.
Click Add principals to Google Cloud console & APIs .
For Google Groups , select Cloud Workstations Users .
This is the Google Group that you selected in the previous step.
Select the access level you created earlier, corpManagedDevice .
Click Save .
Test developer access to Cloud Workstations
Test developer access to Cloud Workstations API from multiple entry
points. For a corporate-owned device, make sure that developers can access
the workstation API.
Test that access to the workstation API from an unmanaged device is blocked:
Chrome Enterprise Premium blocks users trying to access the
Cloud Workstations API. When users try to sign in, an error
message appears, altering the user that they don't have access or that they
should check network connection and browser settings.
Test that access to the workstation API from a corporate-owned device is
enabled:
Developers with Chrome Enterprise Premium and Cloud Workstations
access should be able to
create their workstation
and then
launch their workstation .
Part 2: Set up Chrome Enterprise Premium DLP capabilities
This section includes steps to take advantage of BeyondCorp Threat and Data Protection
to integrate data loss prevention (DLP) features. This helps prevent source code
exfiltration from the Chrome-based,
Cloud Workstations base editor (Code OSS for Cloud Workstations) .
Caution: Interfaces that are not Chrome-based, such as the
gcloud CLI, JetBrains Gateway, or other browsers, are not
covered by Chrome Enterprise Premium DLP, and this integration cannot enforce
context-aware access policies from these sources.
Follow these steps to set up Chrome Enterprise Premium DLP capabilities to help
prevent download of source code:
Enable threat and data protection .
Create a BeyondCorp DLP rule .
Review settings and create the rule .
Test the DLP rule .
Enable threat and data protection
To enable threat and data protection from the
Google Workspace Admin console, follow these steps:
Go to Devices > Chrome >
Settings > Users & browsers .
After you select your organizational unit identifier (OU ID), click
Search or add a filter under User and Browser Settings and select
the Category subtype.
Search for the Chrome Enterprise connector in the Category subtype.
In Download content analysis select Google BeyondCorp Enterprise .
Expand Additional Settings.
Select Delay file access until analysis is complete .
In Check for sensitive data > Mode , select
On by default, except for the following URL pattern .
Click Save to save the configuration.
Create a Chrome Enterprise Premium DLP rule
To create a DLP rule, follow these steps:
Go to the Google Workspace Admin console and select
Security > Access and data control >
Data protection > Manage Rules .
To create a new rule, click Add rule , and then New rule .
This opens the Name and scope page.
In the Name section, enter a name and description. For example,
for the Name field, enter CloudWorkstations-DLP-Rule1 and, for the
Description field, enter Cloud Workstations Data Loss
Prevention Rule 1 .
In the Scope section, configure the following:
Select Organizational units and/or groups .
Click Include organizational units and select your organization .
Click Continue .
In the Apps section, configure the following:
In the Chrome options, select File uploaded and File
downloaded .
Click Continue .
In the Conditions page, configure the following:
Click Add condition to create a new condition.
Select All content .
Select Matches Predefined data type (recommended) .
For Select data type , select Documents—Source code file .
For the Likelihood threshold field, select High .
For the Minimum unique matches field, enter 1 .
For the Minimum match count field, enter 1 .
Click Continue .
On the Actions page, configure the following:
In the Actions options, select
Chrome > Block content .
In the Alerting options, configure the following:
For severity, select Medium .
Select Sent to alert center .
Click Continue .
Review settings and create the rule
From the Review page, review the settings that you configured in previous
pages:
Make sure the settings are correct.
To proceed, click Create .
On the next page, make sure Active is selected.
To finish creating the rule, click Complete .
Test the DLP rule
Now that the DLP rule is added, you can test from Cloud Workstations
in Chrome:
In a new Chrome tab, enter chrome://policy and
click Reload policies to make sure the Chrome policy is
updated.
Note: typically you don't need to do this unless you want to update the
policy right away. Chrome automatically checks for new
policy updates every three hours.
Scroll down to make sure you see a list of policies. If you see these,
the policies have been pulled down successfully. In this case, look
for the OnFileDownloadEnterpriseConnector policy.
Navigate to the Google Cloud console and
create a Cloud Workstations configuration .
When creating your workstation configuration, be sure to select
Code editors on base images and then select the Base Editor (Code OSS for Cloud Workstations)
preconfigured base image .
Create a workstation .
Start and launch your workstation .
Access the Code OSS for Cloud Workstations URL that appears after
you launch your workstation and connect to port 80.
Note: the same DLP policies would also apply to applications
running on any other Cloud Workstations ports—for example,
port 3000—when accessed through the browser.
Clone a repository with the Clone Git Repository option in the IDE.
After the repository is cloned, try to download a file with
source code.
To download files in the Code OSS for Cloud Workstations Explorer view, use
any of the following methods:
Drag files from the Explorer view.
Navigate to the files and directories you would like to use,
right-click, and then choose Download .
Upon download, the DLP policy goes into effect. Notice a download blocked
notification that states that your organization's policies aren't met:
Congratulations! You have successfully helped prevent source code files from
being downloaded.
Clean up
To avoid incurring charges to your Google Cloud account for the resources
used in this tutorial, either delete the project that contains the resources, or
keep the project and delete the individual resources. For more information, see
Delete resources .
What's next
To learn more about Chrome Enterprise Premium, see the
Chrome Enterprise Premium overview .
Read the high level steps for
applying Chrome Enterprise Premium
to your Google Cloud and on-premises resources.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
