---
title: "Set up Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\
  \ Cloud \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini
  title: "Set up Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\
    \ Cloud \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Gemini for Google Cloud
Guides
Send feedback
Set up Gemini Code Assist Standard and Enterprise
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to set up Gemini Code Assist Standard and
Enterprise, which are paid subscription offerings for organizations. If you're
an individual developer who wants to use Gemini Code Assist for individuals at no cost, see
Set up Gemini Code Assist for individuals .
Before you can use services available to users with
Gemini Code Assist Standard or Enterprise
licenses, your team needs to perform the setup steps that are described in this
document:
Note: An administrator typically performs steps 1-4.
Purchase a subscription to Gemini Code Assist Standard or Enterprise .
Assign licenses to users in your organization .
Enable the Gemini for Google Cloud API in a Google Cloud project .
Grant Identity and Access Management (IAM) roles in a Google Cloud project .
Your organization's users set up the services they want to use.
To use Gemini Code Assist Standard or Enterprise in an
IDE, users should
install the Gemini Code Assist plugin ,
which is documented on this page.
To use Gemini Code Assist code customization, users should
refer to Configure Gemini Code Assist code customization .
To use Gemini CLI, users should follow the
Gemini CLI installation instructions ,
and then they should authenticate by
setting a Google Cloud project .
To use Gemini in Android Studio, users should refer to
Get started with Gemini in Android Studio for businesses .
Purchase a Gemini Code Assist subscription
For a list of features available in each edition, see
Supported features .
For new Gemini Code Assist customers with billing accounts that
never had a Gemini Code Assist subscription, we automatically
apply credits equivalent to up to 50 free licenses for the first month,
regardless of Gemini Code Assist edition .
Note that you cannot increase the number of free credits after the initial free
license credits are allotted. Additionally, you cannot change the
Gemini Code Assist edition within the first month.
If you have existing contracts with Google Cloud,
contact our sales team before purchasing a
subscription.
Note: You must have the consumerprocurement.orders.place
Identity and Access Management (IAM) permission on the billing account to purchase a
Gemini subscription. The consumerprocurement.orders.place
permission is included in the
roles/billing.admin IAM role
or the
roles/consumerprocurement.orderAdmin role .
Alternatively, you can add the permission to a custom role.
Go to the Admin for Gemini page.
Go to Admin for Gemini
The Admin for Gemini page opens.
Select Get Gemini Code Assist .
Note that if you don't have the required consumerprocurement.orders.place
permission, then this button is disabled. If a
Gemini Code Assist subscription already exists for the billing
account associated with the project, this button displays as
Manage Gemini Code Assist and lets you
edit your subscription .
The Get Gemini Code Assist subscription page opens.
In Select Gemini Code Assist subscription Edition , select a
Gemini Code Assist edition. Select
Compare Gemini Code Assist Editions to see a detailed list of
features available to each edition .
Then, select Continue .
In Configure subscription , complete the fields to configure the
subscription, including the following:
Subscription name.
Number of licenses in the subscription. Note that if you are purchasing
Enterprise edition, then you must purchase at least 10 licenses.
Subscription period (monthly or yearly). With an annual subscription, you
are given a discounted rate that is charged on a monthly basis rather
than a one-time payment.
By default, new subscriptions are set up for automatic license assignment.
A user in your organization is automatically assigned a license when they
use Gemini Code Assist within a supported IDE, provided all
the following conditions are met:
The user has selected a project that is associated with the subscription's billing account.
The user has the cloudaicompanion.licences.selfAssign IAM permission on the selected project.
After you set up Gemini Code Assist, you can then choose to
assign licenses manually .
To confirm the subscription, select Continue .
If you agree to the terms, select I agree to the terms of this purchase ,
and then select Confirm subscription .
Select Next: Manage Gemini License Assignments .
The subscription is now purchased for Gemini Code Assist Standard
or Enterprise. You now need to manage Gemini license assignments in
your organization.
Assign licenses
Before using a Gemini Code Assist license, users must have the
Gemini for Google Cloud User role or analogous permissions on a project where
the API is already enabled.
For new Gemini Code Assist customers with billing accounts that
never had a Gemini Code Assist subscription, we automatically
apply credits equivalent to up to 50 free licenses for the first month,
regardless of Gemini Code Assist edition .
Note that you cannot increase the number of free credits after the initial free
license credits are allotted. Additionally, you cannot change the
Gemini Code Assist edition within the first month.
By default, new subscriptions are set up for automatic license assignment.
A user in your organization is automatically assigned a license when they use
Gemini Code Assist within a supported IDE, provided all the
following conditions are met:
The user has selected a project that is associated with the subscription's billing account.
The user has the cloudaicompanion.licences.selfAssign IAM permission on the selected project.
If a license is inactive for 30 days, then it will be automatically assigned to
another user in your organization who meets the preceding conditions.
When all available licenses in the subscription are assigned, users who try to
access Gemini Code Assist without a license will receive an
error message indicating one is required.
After you set up Gemini Code Assist, you can view license
assignments by navigating to the Admin for Gemini page, selecting your
billing account, clicking Manage Gemini Code Assist Subscription , and then
selecting the License management tab. If you require finer control over
license assignments, you can also use this tab to switch from automatic license
management to
manual license management .
The Gemini for Google Cloud API must be enabled in one or more
projects that are associated with this billing account. Users won't see
Gemini Code Assist until you activate it in at least one project.
Enable the Gemini for Google Cloud API in a Google Cloud project
This section describes the steps required to enable the
Gemini for Google Cloud API in a Google Cloud project.
Gemini Code Assist requires a Google Cloud project to manage
API access, quota, and billing. For this reason, you need to enable the
Gemini for Google Cloud API in a Google Cloud project of your choice before
users can access Gemini Code Assist.
Console
To enable the Gemini for Google Cloud API, go to the
Gemini for Google Cloud page.
Go to Gemini for Google Cloud
In the project selector, select a project.
Click Enable .
The page updates and shows a status of Enabled .
Gemini is now available in the selected
Google Cloud project to all users who have the required
IAM roles.
gcloud CLI
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
In the project selector menu, select a project.
Enable the Gemini for Google Cloud API for Gemini using the
gcloud services enable command :
gcloud services enable cloudaicompanion.googleapis.com
If you want to enable the Gemini for Google Cloud API in a different
Google Cloud project, add the
--project parameter:
gcloud services enable cloudaicompanion.googleapis.com --project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project
ID.
The output is similar to the following:
Waiting for async operation operations/acf.2e2fcfce-8327-4984-9040-a67777082687 to complete...
Operation finished successfully.
Gemini for Google Cloud is now available in the specified
Google Cloud project to all users who have the
required IAM roles .
Configure the firewall for API traffic between your IDE and Google
In addition to enabling the Gemini for Google Cloud API, users behind firewalls
also need to allow traffic to pass through for the following APIs:
oauth2.googleapis.com :
used to sign in to Google Cloud.
serviceusage.googleapis.com :
used for checking that the user's Gemini Code Assist project is
properly configured.
cloudaicompanion.googleapis.com : the primary Gemini for Google Cloud API endpoint.
cloudcode-pa.googleapis.com : an internal API that provides IDE-related
features.
cloudresourcemanager.googleapis.com :
used in the IDEs for project pickers. The Resource Manager API may not be
necessary if the projects are explicitly configured in your settings.json
file.
people.googleapis.com :
provides access to information about profiles and contacts.
firebaselogging-pa.googleapis.com : an internal API used for sending product
telemetry including events as to whether suggestions were accepted.
feedback-pa.googleapis.com : an internal API used for in-IDE feedback
submission.
apihub.googleapis.com :
used by the Cloud Code API Browser feature.
lh3.googleusercontent.com and lh5.googleusercontent.com : used to obtain
user photos.
Determine IP addresses for Google Cloud default domains
To enable connectivity from your IDE to Google Cloud APIs, your firewall must
allow outbound TCP traffic to Google's publicly documented IP address ranges.
These ranges are dynamically managed by Google.
To maintain a list of IP ranges to access Google Cloud domains, you have several
options:
Use our published lists or automate a script to
obtain Google IP address ranges .
Use the private.googleapis.com Virtual IP .
Use Private Service Connect .
Optional: Configure VPC Service Controls
If your organization has a service perimeter, then you must add the following
resources to your perimeter:
Gemini for Google Cloud API
Gemini Code Assist API
If you are using Gemini Code Assist Standard or Enterprise from
outside of your service perimeter, then you also need to modify the ingress
policy to allow access to those services.
For more information, see
Configure VPC Service Controls for Gemini .
Grant IAM roles in a Google Cloud project
This section describes the steps required to grant the Gemini for Google Cloud User
and Service Usage Consumer IAM roles to users.
Console
To grant the IAM roles that are required to use
Gemini, go to the IAM & Admin page.
Go to IAM & Admin
Click Grant access , and then enter the
principal
name for which you want to give access to Gemini.
In the Grant access pane, click
add Add another role .
In Assign roles , select Gemini for Google Cloud User .
Click Add roles and select Service Usage Consumer .
Click Save .
gcloud CLI
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
In the project selector menu, select a project.
Grant the Gemini for Google Cloud User role:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member= PRINCIPAL --role=roles/cloudaicompanion.user
Replace the following:
PROJECT_ID : the ID of your
Google Cloud project—for example, my-project-id .
PRINCIPAL : the
identifier for the
principal. For user accounts, this identifier is in the format
user:EMAIL_ADDRESS —for example, user:cloudysanfrancisco@gmail.com .
The output is a list of policy bindings that includes the following:
- members:
- user: PRINCIPAL
role: roles/cloudaicompanion.user
Repeat the previous step for the role roles/serviceusage.serviceUsageConsumer .
For more information, see
Grant a single role
and
gcloud projects add-iam-policy-binding .
All of the users who have been granted these roles can access
Gemini for Google Cloud features in the
Google Cloud console within the specified project. For more information, see
Gemini for Google Cloud overview .
Install the Gemini Code Assist plugin
Your organization's users install the Gemini Code Assist plugin
in their preferred
supported IDE .
Users of supported JetBrains IDEs should follow the IntelliJ instructions.
VS Code
To open the Extensions view in VS Code, click
Extensions or press Ctrl / Cmd + Shift + X .
Search for Gemini Code Assist .
Click Install .
If prompted, restart VS Code.
After the extension has successfully installed,
Gemini Code Assist appears in the activity bar and is
ready for use. You can further configure your
Gemini Code Assist installation by specifying your
preferences using the top-level application taskbar: navigate to
Code > Settings > Settings
> Extensions and search for Gemini Code Assist .
IntelliJ
Click settings IDE
and Project Settings > Plugins .
In the Marketplace tab, search for Gemini Code Assist .
Click Install to install the plugin.
When the installation is finished, click Restart IDE .
When the IDE restarts, Gemini Code Assist appears in your
activity bar.
Now the users are ready to use Gemini Code Assist Standard or
Enterprise in their IDE. Learn more about the supported features:
Code features overview
Chat features overview
Get started with the following guides:
Code with Gemini Code Assist
Chat with Gemini Code Assist
List of directories where Gemini Code Assist caches information
The following table provides a list of directories where
Gemini Code Assist stores extension information such as auth
tokens:
Windows
%LOCALAPPDATA%/cloud-code
%LOCALAPPDATA%/google-vscode-extension
macOS
~/Library/Application Support/cloud-code
~/Library/Application Support/google-vscode-extension
Linux
~/.cache/cloud-code
~/.cache/google-vscode-extension
Sign into Google and select a Google Cloud project
Once users have installed Gemini Code Assist in their IDEs, they
need to sign in to their Google Accounts, and if it's their first time using
Gemini Code Assist Standard or Enterprise in their IDE, they
select a Google Cloud project. This is the same project used to set up Gemini Code Assist, and is used to manage API access, quota, and
billing.
VS Code
If you select a Google Cloud project without the
Gemini for Google Cloud API enabled, you receive a notification that gives
you the option to enable the API from the IDE. Select Enable the API
in the notification window to enable the API for your project.
If you prefer to follow the Code with
Gemini Code Assist walkthrough directly in your IDE,
click Launch VS Code and follow the steps in the walkthrough to
connect to Google Cloud and activate
Gemini Code Assist Standard or Enterprise.
Launch VS Code
Otherwise, follow these steps:
Launch your IDE.
In the activity bar, click Gemini Code Assist .
In the Gemini Code Assist chat pane, click Login to Google
Cloud .
When prompted to allow Gemini Code Assist to open the
external website, click Open .
Follow the prompts to sign into your Google Account.
When asked if you downloaded Gemini Code Assist from
Google, click Sign In .
Note: If your sign-in attempts keep timing out, see the
Sign-in attempts keep timing out
known issue for more information on troubleshooting.
You're now connected to Google Cloud.
Next, to select a Google Cloud project that has the
Gemini for Google Cloud API enabled, follow these steps:
In the Gemini Code Assist status bar, click Gemini Code Assist .
In the Gemini Code Assist menu, select Select Gemini Code
project .
Select a Google Cloud project that has the
Gemini for Google Cloud API enabled.
Gemini Code Assist Standard or Enterprise is ready to
use.
IntelliJ
To sign in to your Google Account, follow these steps:
In the activity bar, click
spark Gemini Code
Assist .
Click Log in to Google . Alternatively, you can click Copy link
and paste the URL into your browser.
On the page that opens in the web browser, select your Google Account.
On the screen that asks you to make sure that you downloaded this app
from Google, click Sign in .
Gemini Code Assist is now authorized to access your
account.
Next, if this is your first time using Gemini Code Assist
Standard or Enterprise in your IDE, you must select a Google Cloud
project by following these steps:
Return to your IDE. In the Gemini Code Assist tool
window, if you agree to allow Google to enable the APIs required to use
Gemini Code Assist on your behalf for your selected
project, click Select a GCP project to continue.
In the Select Google Cloud Project dialog, search for and select
your Google Cloud project, and then click OK .
Click FINISH .
Your Google Cloud project is selected with the
Gemini Code Assist API enabled. You're ready to use
Gemini Code Assist Standard or Enterprise in your IDE!
Advanced setup tasks
The following sections describe advanced setup tasks that you can perform to
customize Gemini Code Assist.
Advanced IAM considerations
Instead of using the Google Cloud console or the gcloud CLI to
grant predefined IAM roles, you can do any of the following:
Use IAM REST APIs or
IAM client libraries
to grant roles.
If you use these interfaces, use the fully qualified role names:
roles/cloudaicompanion.user
roles/serviceusage.serviceUsageConsumer
For more information about granting roles, see
Manage access to projects, folders, and organizations .
Create and grant custom roles.
Any custom roles that you
create need the following permissions for you to access
Gemini Code Assist Standard and Enterprise:
cloudaicompanion.companions.generateChat
cloudaicompanion.companions.generateCode
cloudaicompanion.instances.completeCode
cloudaicompanion.instances.completeTask
cloudaicompanion.instances.generateCode
cloudaicompanion.instances.generateText
cloudaicompanion.instances.exportMetrics
cloudaicompanion.instances.queryEffectiveSetting
cloudaicompanion.instances.queryEffectiveSettingBindings
serviceusage.services.enable
Assign and manage licenses.
Any custom roles that you
create need the following permissions for you to assign and manage
Gemini Code Assist licenses:
consumerprocurement.orders.get
consumerprocurement.orders.licensePools.*
consumerprocurement.orders.licensePools.update
consumerprocurement.orders.licensePools.get
consumerprocurement.orders.licensePools.assign
consumerprocurement.orders.licensePools.unassign
consumerprocurement.orders.licensePools.enumerateLicensedUsers
Also note that for any of the preceding permissions to work, the
Gemini for Google Cloud API needs to be enabled in the same Google Cloud project where
you've assigned each permission.
Change the Google Cloud project release channel
We release Gemini Code Assist features in different release
channels, either Generally Available or Preview. When you set up
Gemini Code Assist, your project is automatically set to the
Generally Available release channel.
You can
change the Gemini Code Assist release channel
to the Preview channel or back to the Generally Available channel at any time.
What's next
Learn more about the
types of generative AI assistance available in Gemini for Google Cloud .
Learn
how to access and manage Gemini Code Assist Standard and Enterprise administrator controls .
Learn how to configure multi-project logging .
Configure VPC Service Controls for Gemini Code Assist Standard and Enterprise .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
