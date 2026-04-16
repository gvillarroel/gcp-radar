---
title: "Earth Engine access \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/guides/access
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://developers.google.com/earth-engine/guides/best_practices
source_metadata:
  url: https://developers.google.com/earth-engine/guides/access
  title: "Earth Engine access \_|\_ Google Earth Engine \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone. All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default. Tier quotas will take effect for all projects (regardless of tier selection date) on April 27, 2026 . Learn more.
Home
Products
Google Earth Engine
Guides
Send feedback
Earth Engine access
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Earth Engine runs on Google Cloud and requires Cloud projects for access and API management.
To use Earth Engine, you need access to a Cloud project with the Earth Engine API enabled, registered for commercial or noncommercial use, and correct roles and permissions granted.
You can create and register a new Cloud project or register an existing one via the registration page for immediate Earth Engine access.
Earth Engine provides instructions on how to specify a project for client libraries, Code Editor, Apps, command-line tool, and the REST API.
You can configure project access for service accounts and Google Accounts by granting them appropriate roles and permissions within the Cloud project.
Earth Engine data can be deleted at the account level, by deleting the Cloud project, deleting individual assets, deleting Code Editor scripts, deleting Earth Engine Apps, or deleting "Get Link" references.
Earth Engine runs on Google Cloud and requires Cloud projects for access and API
management. All Earth Engine calls (whether from the Code Editor, client
libraries, Apps, or REST API) are routed through a Cloud project, enabling
access control, resource management, and usage monitoring in the Cloud
Console.
Get access to Earth Engine
To use Earth Engine you'll need access to a Cloud project that:
has the Earth Engine API enabled,
is registered for commercial or
noncommercial use, and
grants you (or the user) the
correct roles and permissions .
Create a project
Visit the
registration page to create and register a new Cloud project or
register an existing project. After registration, Earth Engine
access is enabled immediately.
Projects created during the registration process can be managed in the
Google Cloud Console . You can activate or deactivate the Earth Engine
API from the
Earth Engine API page on the Cloud Console .
Note: In some cases, your organization's IT policy may prevent you
from creating Google Cloud projects. In that case, we recommend reaching
out to your admins to grant you the correct permissions (or to create a
project for you).
Manual steps (automated by the registration page)
The
registration page automates these steps and is recommended.
Create a Cloud project
If you haven't already, create a
Google Cloud Project . You can do so from the
projects page
of the Cloud Console or click the following button:
Create a Cloud project
Enable the Earth Engine API
To enable the Earth Engine API for your project, click the following
button to go to the Earth Engine API page:
Enable the Earth Engine API
On the Earth Engine API page, ensure that you have selected your
project, and click the
ENABLE
button.
Register the project for commercial or noncommercial use
Edit the following URL for your project, visit the page, and complete
the registration flow.
https://code.earthengine.google.com/register?project= my-project
Create an assets folder (optional)
You can create an Earth Engine assets folder associated with a Cloud
project to which you have access using the
earthengine create folder
command using a path as described
here .
For example:
earthengine create folder projects/ my-project /assets/
You can also create an asset folder for a project in the Code Editor
by adding the
project in the Assets panel.
You don't need to create this folder unless you plan to store assets
in the project.
Use an existing project
Check with your organization's IT staff about existing Cloud projects
configured for Earth Engine. Ensure that the Google Account you'll use to
access Earth Engine services is granted the
correct roles and
permissions on the project.
Specify a project
The following sections describe how to specify a project for the various
interfaces to Earth Engine's services.
Client libraries (Python, JavaScript)
The ee.Initialize() function is used to specify a project for Earth Engine
requests originating from the Python and
JavaScript client
libraries. There are several ways to configure project specification, see the
authentication and initialization page for more details.
Code Editor
Click the profile icon in the top right corner of the
Code Editor and select "Change Cloud Project" from the menu.
Choose a project from the selection dialog.
Earth Engine Apps
When publishing an Earth Engine App , you'll be prompted to select a
project to route requests through. Follow instructions in the publishing
dialog.
Command-line tool
To associate Earth Engine calls from the command-line tool with a
Cloud project, use the --project parameter in your call to earthengine or
use set_project to set a default project.
REST API
To associate calls to the REST API with a Cloud project, issue authenticated
HTTP calls where authentication is handled by oauth2 . In a local environment,
you can use the gcloud command. You can also use a service
account associated with a Cloud Project. See the
REST API Quickstart for an example of using
google.oath.service_account.Credentials.from_service_account_file() to
authenticate with a service account.
Configure project access
The following sections describe how to configure Earth Engine-enabled projects
for use by other individuals and service accounts.
Service accounts
Key Term: Service account ,
an account typically used by an application or compute workload, such as a
Compute Engine instance, rather than a person.
Service accounts automatically have access once their parent project is
registered and has the Earth Engine API enabled. They also need the correct
permissions within the project. Any
number of service accounts on a project can be configured to use Earth
Engine. Visit the service accounts page to learn more
about using service accounts with Earth Engine.
Google Accounts
Key Term: Google Account , an account belonging to an
individual user, such as a Gmail account (example@gmail.com) or Google Workspace
account.
Cloud projects use Cloud IAM to manage roles and permissions. In order for
other humans to access Earth Engine via your project, you'll need to use the
Cloud Console to grant them the
correct roles and permissions .
OAuth 2.0 Client ID
Key Term: OAuth 2.0 Client ID : A unique application
identifier used by Google to authenticate and authorize access to user resources
during the OAuth 2.0 authorization process.
You may need to create an OAuth 2.0 Client ID from a project, for example to
create an app that passes user credentials to Earth Engine. You can manage
credentials for your Cloud project by going to the Cloud Console menu
( menu ) and selecting APIs & Services >
Credentials . (Choose the project if prompted).
To create a new Client ID for the project, click + CREATE
CREDENTIALS > OAuth client ID > Web
application .
In the configuration of the web application:
Specify authorized JavaScript origins, for example:
http://localhost:8080
https://foo-ee-project.appspot.com
Specify authorized redirect URIs, for example:
http://localhost:8080/oauth2callback
https://foo-ee-project.appspot.com/oauth2callback
Learn more about authenticating users with OAuth .
Common scenarios
I'm teaching an educational class...
Great! If you register a noncommercial project, no billing configuration
is required. Then, you can add your students to the project.
I'm part of an operational team/commercial
organization...
Great! You're able to register a project for commercial use, and add your
collaborators to it. Please also pay attention to the seat limit in the
Earth Engine subscription that you select.
Earth Engine data deletion
Account-level deletion
Account-level deletion will
remove all Earth Engine data from your account.
If your account is part of a Google Workspace organization, your administrator
controls your account data. When an administrator deletes a Google
Account , all associated Earth Engine data are
wiped out within approximately 30 days.
It's not possible for the Earth Engine team to recover data once they're
deleted.
Cloud projects
When a Cloud project is deleted ,
it triggers the deletion of Earth Engine data associated with that project
(including, for example, any assets stored in the project root, any
project-level EE Apps, Monitoring data, etc.). This process may be reversible
for up to 30 days, but it's never possible to recover those data after 30 days.
Assets
The simplest method for deleting your assets is to use the "Assets" tab
in the Code Editor to view and manually delete your Earth Engine assets.
For programmatic asset deletion of an asset with ID projects/{project-id}/assets/{asset-id}
(e.g., projects/my-project/assets/my-asset ):
Python client
ee . data . deleteAsset ( 'projects/ my-project /assets/ my-asset ' )
JavaScript client
Note that the Code Editor's security sandbox prevents this call from working
in that environment.
ee . data . deleteAsset ( 'projects/ my-project /assets/ my-asset ' )
Command-line tool
Use the rm command:
earthengine rm projects/ my-project /assets/ my-asset
Note: for legacy user-owned assets, the path structure is
users/{user-id}/{asset-id} .
Code Editor scripts
To delete your Earth Engine Code Editor scripts :
Code Editor
From the "Scripts" tab in the Code Editor , select
a script or repository and delete it. Once a repository has been marked as
deleted, it becomes unrecoverable within 30 days.
Using Git
Advanced users can use Git to manage their scripts. See
https://earthengine.googlesource.com/
to list the repositories that you can view.
Earth Engine Apps
To delete your Earth Engine Apps, use the
"Apps" button in the Code Editor to manage your Apps .
"Get Link" references
Use the Manage Links page to view and delete your "Get Link"
links from the Code Editor. This page can be found by navigating to the
"Manage Links" option in the drop-down menu next to the
"Get Link" button.
Configuring noncommercial access
To set up noncommercial (unpaid) Earth Engine access for your project, you'll
need to fill out the registration questionnaire in the Cloud
console to confirm your project's eligibility.
Verification
Important: If you registered your project before April 15, 2025 , you
must verify noncommercial eligibility to maintain access. If
you have not verified by September 26, 2025 , your access may be on hold.
Because Earth Engine grants unpaid access to a large amount of compute
resources, Google requires verification of each project that is registered for
noncommercial access. The verification process is done as a part of
registration . If you complete the verification questionnaire
and your project is determined to be commercial, you won't be eligible to use
Earth Engine without paying.
Starting September 26, 2025, all noncommercial projects must have filled out the
questionnaire in the Cloud console. We recommend completing the verification
process as soon as possible. If you don't take action before September 26, 2025,
your project's access to Earth Engine will be paused until you complete the
verification process.
Reverification
All projects with noncommercial access will need to reverify for access on a
periodic basis.
Configuring commercial access
To set up commercial (paid) Earth Engine access for your project, you'll need to
configure the project using the registration page and choose
a plan on the billing account.
Terminating commercial access
If you are a direct customer of Earth Engine and want to stop using Earth Engine
in a paid context, there are several changes needed to stop incurring charges:
Stop subscription charges
To terminate the Earth Engine subscription on your billing account, you
need to use the "Manage Plans" page (accessible from the user settings
drop-down menu in the top right of the Code Editor when using a
registered Cloud project linked to that billing account).
You can also access the "Manage Plans" page directly for a billing
account:
https://code.earthengine.google.com/manage/plans?billing= YOUR_BILLING_ACCT_ID
Choosing the "Limited" plan stops your billing account from incurring
any further Earth Engine platform subscription fees after your current
billing cycle.
Stop compute charges
To prevent new charges related to compute (EECU-time), disable the Earth
Engine API on your Cloud project(s). Note that this doesn't terminate
in-progress requests or delete stored
objects , so you may still incur Earth
Engine charges even with the API disabled.
See the API Console
Help for information about disabling APIs.
Stop storage charges
Stored Earth Engine assets continue to drive costs even if the API is
disabled. Deleting your assets stops you from incurring
further EE storage fees.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-26 UTC."],[],[]]
