---
title: "Google Cloud projects \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/guides/cloud-platform-projects
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/apps-script
source_metadata:
  url: https://developers.google.com/apps-script/guides/cloud-platform-projects
  title: "Google Cloud projects \_|\_ Apps Script \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Guides
Send feedback
Google Cloud projects
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Every Apps Script project uses Google Cloud to manage authorization, advanced services, and other details and has an associated Google Cloud project.
You can use either a default project that Apps Script creates or a standard project that you create yourself; default projects are for simple scripts, while standard projects are for complex, commercial, or publishable applications.
You can switch from a default to a standard project but not back, and switching later in development can cause complications like requiring users to re-authorize.
Standard projects are required for tasks like publishing add-ons, verifying OAuth clients, viewing logs in the Google Cloud console, and manual control over project settings.
Switching to a different standard project requires re-enabling advanced services and APIs, user re-authorization, and affects Google Workspace Marketplace listings if applicable.
Every Google Apps Script project uses
Google Cloud to manage authorization,
advanced services , and other details.
To configure and manage these settings, every Apps Script project
has an associated
Google Cloud project .
Your script project can use a
default project that
Apps Script automatically creates, or a
standard project that you create
yourself. In general, default projects are good for everyday
scripts, but you should use a standard project for any application that
is complex, commercial quality, or that you intend to publish.
You can switch from a default project to a standard project
at any time, but you can't switch back to use a default project. It's best
to select the Cloud project your script uses early in development.
Switching later can cause complications, like requiring your users to
re-authorize.
Default Cloud projects
When you create an Apps Script project, it creates a default
Cloud project that operates in the background.
For most scripts, you never need to see or adjust this default project.
Apps Script handles the necessary interactions with
Google Cloud. For example, if you activate an advanced service in the
Apps Script editor, Apps Script activates the
advanced service in the default Cloud project when you save the
script project.
For some scripts, you need to interact with the Google Cloud console. In these
cases, your script must use a standard Cloud project. For example, to
view Google Cloud logs in the Google Cloud console, your script must
use a standard project.
By default, Cloud projects have an Identity and Access Management
(IAM) policy with one entry, a Google service account that acts as the owner of
the default project. The Google service account is
appsdev-apps-dev-script-auth@system.gserviceaccount.com .
View or update default Cloud projects
Most users can't directly locate, view, or edit default projects in the
Google Cloud console. If you're an Admin, refer to View default Google Cloud projects .
If you created your script project before April 8, 2019 , you might use a
default project that you can access in the Google Cloud console. To access the
default project, go to the script project's settings and click the project
number.
Delete default Cloud projects
If you're an administrator, you can delete default Cloud projects like
you would
standard Cloud projects. See
View or edit default Cloud projects .
Non-administrators can't manually delete default projects. However, if you
delete the script project or switch to a standard project,
Apps Script deletes the default project attached to the script
along with its settings and information.
Standard Cloud projects
Default Cloud projects are the best option for most script projects,
unless you need to manually configure the project.
In these situations, you must
switch your script project to use a standard project .
The following sections describe when Apps Script requires a
standard project, its properties, and common tasks. Perform these
tasks only with standard projects.
When Apps Script requires standard Cloud projects
You must use a standard project in the following situations:
To publish your script project as an
Google Workspace add-on in the
Google Workspace Marketplace .
To verify your script project's OAuth client .
When you have an application that needs to execute functions in your script
project using the Google Apps Script API's scripts.run
method .
To view your script project's Google Cloud logs in the Google Cloud console . The
Google Cloud console provides more tools for filtering and viewing logs,
and can be more helpful than the simplified view provided by the
Apps Script dashboard .
To view your script project's error reports using Error
Reporting .
To create a file-open dialog .
When you need manual control over the project's Google Cloud settings.
Standard Cloud project properties
Standard projects have the following properties:
Access all of the Google Cloud settings for the project
directly from the Google Cloud console . This lets you activate APIs, adjust
authorization credentials, and configure other details.
When you delete a script project or switch it to use another standard
project, the original standard project remains and can be reused.
When you activate an advanced service
in a script project, you must manually activate the corresponding API in the
standard project.
Multiple script projects and other apps can share the same standard project.
If you intend to publish a script project to the
Marketplace as an
add-on , it must have
its own standard project. Published apps can't share Cloud projects
with other apps.
If you want to execute functions in a script project from another app using
the Apps Script API's scripts.run
method , the script project and the calling
application must share the same standard project.
When Apps Script asks a user to authorize a script that uses a
standard project, the Cloud project name is used to identify the
script (not the script project name). For this reason, be sure to set an
appropriate Cloud project name.
Access a standard Cloud project
To access the standard project associated with your script project:
Open the Apps Script project.
At the left, click Project Settings
settings .
Under Google Cloud Project , click the project number.
Find a standard project directly on the Google Cloud console Manage Resources page .
Activate an API in a standard Cloud project
To give an Apps Script application access to another Google API,
activate the API in the corresponding Cloud project:
Open the Cloud project .
Click Menu menu
> APIs & Services .
Click Enable APIs and Services .
In the search box, enter the API you want to activate and press Enter .
Click the API from the search results and then click Enable .
You might be prompted to accept the Terms of Service for Google
APIs or Google Cloud . Review
the Terms of Service carefully before accepting them.
Depending on the application, you might need to configure the API by selecting
it in the APIs & Services dashboard.
Determine the ID & number of a standard Cloud project
All Cloud projects have a name, ID, and number. You might need these
identifiers to configure services or complete other tasks.
To determine your standard project's ID and number:
Open the Cloud project .
At the top-right, click More more_vert
> Project settings .
View the Project name , Project ID , and Project number in the
resulting Settings panel. The Project number consists of digits,
while the Project ID is alphanumeric. Edit the Project
name , which displays to users during authorization prompts.
View Google Cloud logs & error reports in the Google Cloud console
If you're using Google Cloud logging
or error reporting
for your script project, you can view those logs and reports in the
Google Cloud console by doing the following:
Open the Cloud project .
Click Menu menu .
In the Operations section, click Logging > Logs explorer .
To view error reports, in the Operations section,
click Error Reporting . If you're prompted to
set up error reporting, this means that your script project hasn't
logged any exceptions yet.
Complete the OAuth consent screen
When using services that require OAuth, Google prompts users to authorize
those services. The OAuth consent screen settings define the information
Google presents to users, such as the application name and Terms of Service
URL.
Default Cloud projects create a consent screen automatically from the
Apps Script project details; you can't adjust those settings.
Standard Cloud projects let you customize this information. To
configure your script's consent screen:
Open the Cloud project .
Click Menu menu
> APIs & Services
> Credentials .
Click Configure consent screen .
Fill in each section of the consent screen workflow.
To record your changes at each stage, click Save and continue .
Create OAuth credentials
Apps Script usually sets up OAuth for the services your script
uses. For some applications, create additional OAuth credentials (client IDs
and client secrets). Do this only with standard projects.
To create a client ID and client secret for your script project:
Open the Cloud project .
Click Menu menu
> APIs & Services
> Credentials .
Click Create credentials >
OAuth client ID .
Under Application type , select your application type and fill in the
form. When finished, click Create .
In the dialog, click Download JSON . Use this file to configure OAuth.
Add additional owners to a standard Cloud project
Add additional owners or other roles to a standard project to ensure
that someone on your team always has access to the script project's
Google Cloud settings.
To add additional owners or other roles to a standard project (requires edit
permissions):
Determine your collaborators. We recommend using a Google Group. Specify
domains to include all users in that domain.
Open the script's Cloud project .
Click Menu menu
> IAM & admin
> IAM .
At the top, click Add .
Follow the on-screen instructions to add new members and their roles. Add
individual emails, Google Groups, or domains.
Click Save .
Group multiple scripts with a single Cloud project
Multiple Apps Script projects can share the same standard
Cloud project. To do this, create a standard project and then
switch each script project
to use it. You can't do this with default projects.
If you want to publish your script project on the
Marketplace as an
add-on , it must have
its own standard project—published apps can't share
Cloud projects.
Use a different standard Cloud project
Switch a script project to use a different standard
Cloud project. If your script requires manual configuration of the
Cloud project, switch from a default project to a standard project.
To learn more, refer to standard
Cloud projects .
Effects of switching to a different standard Cloud project
If you switch your script from a default project or to a different standard
project, it has the following effects:
If you activated advanced services for your script, you must turn on the
corresponding APIs in
the new Cloud project. You lose any data tied to the advanced
services in the previous Cloud project. To learn how to turn on APIs
in your Cloud project, refer to Enable Google Workspace APIs .
If your script uses the built-in Google Drive service, you must turn on the
Drive API in standard Cloud projects.
In your standard Cloud project, turn on the Drive API:
Turn on the Drive API
All users who have previously authorized the script must re-authorize. In
most cases, all users who have previously authorized apps associated with
the new project must also re-authorize.
If your script is associated with an app listing on the Google Workspace Marketplace, your app listing, users, and reviews don't carry over to the
new project. You must create an app listing within the new project and your
users must reinstall your app. For information about creating a new
app listing, refer to Publish an app .
You can't switch a script back to a default project. Apps Script deletes
default projects after you set the script to use a standard project.
Switch to a different standard Cloud project
To switch a script's existing Cloud project over to another
Cloud project, follow these steps:
If you don't have a suitable Cloud project, create one by
following the Create a
project
instructions. Set a memorable project name to locate it on the
Google Cloud console Manage Resources page . Apps Script uses this name when
asking users to authorize the script.
If you want to use an existing project, open the Google Cloud console Manage Resources page
and locate an existing project to use. You must have the
Project Browser and OAuth Config Editor roles, or roles with the equivalent
permissions, for the
project. You can't use a project that was automatically created by Apps
Script.
Determine the Project number of your Cloud project .
Open the script whose Cloud project you want to replace.
At the left, click Project Settings
settings .
Under Google Cloud Project , click Change project .
Enter the new project number and click Set project .
Cloud projects & shared drives
Shared drives are only available to
Google Workspace Business and
Google Workspace Enterprise
customers.
Shared drives (formerly Team Drives) provide
shared spaces where groups of Drive users can collaborate on
Apps Script projects and Drive documents. Shared
drives are valuable when developing scripts, add-ons, and web
apps with a team, but they place some restrictions on what you can do with
older default Cloud projects.
The following list describes how Cloud projects interact with shared
drives:
If your script project uses a standard project, there are no
additional restrictions when the script project resides in a shared drive.
If your script project uses a default project that was created on or
after April 8, 2019, there are no additional restrictions when the script
project resides in a shared drive.
If your script project uses a default project that was created before
April 8, 2019, the following restrictions apply while the script
project resides on a shared drive:
You can't access the default project using the Apps Script UI or
the Google Cloud console . This restriction prevents you from taking
actions that require direct access to the project .
You can't activate advanced services .
To activate advanced services, switch to a standard
project.
When you move an existing Apps Script project into a shared drive, Google
restricts access to the default Cloud project. You can still
access the default project if you had access prior to the move. For
example,
if you created a script in your My Drive folder and then moved
it into a shared drive, you could still access the script's
Cloud project. Your collaborators in the shared drive might not be able to.
A script retains the Cloud project name it had prior to being
moved to
a shared drive. Even if you change the project name on the shared drive,
users that authorize the script still see the old name on authorization
dialogs.
To avoid these restrictions for older scripts,
switch to a standard project .
Get a list of Apps Script Cloud projects
If you have the resourcemanager.projects.list permission for your
organization's Apps Script project folder, you can view all of
the standard and default Apps Script Cloud projects
within the folder.
Open the Google Cloud console Manage Resources page .
Next to the Apps Script folder, copy the ID.
Click Filter > Parent ID and
paste the Apps Script folder ID.
Delete Apps Script Cloud projects
You must be an administrator to delete default projects.
To delete an Apps Script project from the Google Cloud console:
Open the Cloud project .
At the top-right, click More more_vert
> Project settings .
Click Shut down / delete .
Follow the on-screen instructions to shut down the project.
To delete an Apps Script project using gcloud , use the following
commands.
gcloud projects list --filter = 'parent.id= APPS_SCRIPT_FOLDER_ID '
gcloud projects delete PROJECT_ID
For more information about deleting Cloud projects, see Shutting down
(deleting) projects .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
