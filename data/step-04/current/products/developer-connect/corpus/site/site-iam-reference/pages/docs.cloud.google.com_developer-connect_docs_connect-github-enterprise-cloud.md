---
title: "Connect to GitHub Enterprise Cloud \_|\_ Developer Connect \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/developer-connect/docs/connect-github-enterprise-cloud
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/developer-connect/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/developer-connect/docs/connect-github-enterprise-cloud
  title: "Connect to GitHub Enterprise Cloud \_|\_ Developer Connect \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Developer Connect
Guides
Send feedback
Connect to GitHub Enterprise Cloud
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to create connections to GitHub Enterprise Cloud and create links to
GitHub Enterprise Cloud repositories.
You can complete these tasks using the Google Cloud console,
or the Google Cloud CLI.
These instructions are for application developers, platform administrators, and
security managers who want to use GitHub Enterprise Cloud source code repositories with Google.
Specifically, you can use GitHub Enterprise Cloud repositories with
Gemini Code Assist .
To learn more about Developer Connect, see
Developer Connect overview .
Before you begin
Sign in to your Google Account. If you don't already have one,
sign up for a new account .
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
Enable the Developer Connect API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
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
Enable the Developer Connect API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Enabling Developer Connect also enables the
Secret Manager API .
Ensure that you have access to an account on GitHub Enterprise Cloud.
To help keep your team's work secure, we recommend that you complete the
tasks in this guide using a bot account or an account shared by your team, not
a personal account.
Ensure that you own a GitHub Enterprise Cloud repository, or have admin-level permissions on
a shared repository.
Optional: Create a customer-managed
encryption key (CMEK) for encrypting the authentication secrets that
Developer Connect creates.
Optional: To use the command-line instructions in this guide, complete the
following steps:
Install the Google Cloud CLI . If
you've installed gcloud CLI previously, make sure you have
the latest available version by running
gcloud components update .
Create a Developer Connect service account
by running the following command, where PROJECT_ID is your Google Cloud project ID :
gcloud beta services identity create \
--service = developerconnect.googleapis.com \
--project = PROJECT_ID
Required roles
To get the permissions that
you need to create connections and links,
ask your administrator to grant you the
following IAM roles:
If you aren't the project owner:
Developer Connect Admin ( roles/developerconnect.admin )
on your user account.
If you plan to use a CMEK to encrypt the secrets that Developer Connect creates:
Cloud KMS CryptoKey Encrypter/Decrypter ( roles/cloudkms.cryptoKeyEncrypterDecrypter )
on the Secret Manager Service Account.
If you plan to use the gcloud CLI to complete the steps in this guide:
Secret Manager Admin role ( roles/secretmanager.admin )
on the Developer Connect Service Account.
If you plan to use the Google Cloud console to complete the steps in this guide:
Project IAM Admin ( roles/resourcemanager.projectIamAdmin )
on your user account.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Note: When you have the Project IAM Admin
( roles/resourcemanager.projectIamAdmin ) role, the Google Cloud console can
automatically grant necessary permissions on your behalf. If your administrator
won't allow you to have the Project IAM Admin role, then ask your administrator
to grant Secret Manager Admin ( roles/secretmanager.admin ) on the
Developer Connect Service Account
( service-{projectNumber}@gcp-sa-devconnect.iam.gserviceaccount.com ).
Create a connection
This section describes how to create a connection between Developer Connect
and GitHub Enterprise Cloud. If you're using the Google Cloud console, then you can also start
adding links to repositories as you finish setting up your connection.
To create a new GitHub Enterprise Cloud connection, select one of the following options:
Console
Initiate a connection by completing the following steps:
In the Google Cloud console, open Developer Connect .
Go to Developer Connect
Developer Connect displays the Git repositories page.
If you see a list of source code management providers: Start
configuring your first connection by selecting a source code
management provider. Click Connect on the GitHub Enterprise Cloud card.
If you see a table listing existing connections : Set the source
code management provider by clicking Create connection >
GitHub Enterprise Cloud .
The Create Connection page opens.
For Region , choose a region
for your connection resources.
For Name , enter a name for your new connection.
Activate the Enable a data residency compliant connection checkbox
to make this connection compliant with
data residency requirements .
GitHub connections created using the Google Cloud console are
data-residency compliant if you activate this checkbox when you create
the connection. When you do this, Developer Connect
creates a GitHub app
When you create a GitHub connections using Google Cloud CLI, those
connections are not data-residency compliant. All other connection types
are data-residency compliant.
Click Show more to see optional configuration settings.
Optional: In the Encryption section, select a
CMEK key to
encrypt Secret Manager secrets that Developer Connect
creates.
Optional: By default, Developer Connect can act as a proxy for Git calls to GitHub Enterprise Cloud.
To disable this option, clear the Enable Developer Connect proxy
checkbox.
Click Continue .
Click I understand and continue to agree to share your GitHub OAuth
token with Developer Connect and store it in
Secret Manager.
Sign in to GitHub if prompted to do so.
Click Authorize Developer Connect to allow the Google
Developer Connect app to access your GitHub account.
If you don't see this prompt, then authorization has already been
granted on this account.
If you selected Enable a data residency compliant connection , you're
prompted to create a GitHub app.
Provide a name for this GitHub app.
Click Create GitHub app .
Select the target where you want to install the app (your GitHub
account or an organization).
Select the repositories for which to install the GitHub app, or
All repositories , and click Install .
Select the repositories to link for this connection, and click
Ok .
Click Link .
GitHub creates a token and Developer Connect stores it in your
Google Cloud project as a Secret Manager secret. For more
information on managing secrets, see
view secret details .
If you enabled data residency, you now have a GitHub app, which you can
manage by clicking Manage installation on the Connection details
page.
Configure the connection
The following steps are required if you have not activated the Enable a
data residency compliant connection checkbox.
Grant permissions on your GitHub account and link to repositories using the
following instructions. The prompts you see in your web browser depend on
whether the GitHub account already has the Developer Connect GitHub
app installed.
In the Developer Connect dialog, complete the following steps:
If you see a list of GitHub accounts, install the app and link
repositories by completing these steps:
Choose the GitHub account you want to use.
Select one or more repositories you want to grant access to.
If you see a prompt to re-use an existing app installation, choose where
to configure the app by completing these steps:
Click GitHub Account to see accounts that have the Google
Developer Connect app installed. If you see the account you want to
use, choose it by clicking Confirm .
If you don't see the account that you want to use, do the following:
Choose Install the GitHub App on another GitHub account and click
Confirm .
Follow the GitHub steps to permit app installation.
Select one or more repositories you want to grant access to.
When the dialog closes, the app installation is complete.
Once the connection is created, the Link repositories page appears.
Complete the following steps to link repositories to your connection:
In the list of available repositories, select the repositories
you want to use.
Click OK .
Click Link .
Your connection is added to the Connections page and your repository
links are added to the Repositories page in the Google Cloud console.
You can add more links to existing connections at any time.
gcloud
The following tasks require some actions in your web browser.
Initiate a connection by completing the following steps:
Run the
gcloud developer-connect connections create command to create a connection to GitHub Enterprise Cloud.
If you have
data residency enabled :
gcloud developer-connect connections create CONNECTION_NAME \
--location = REGION \
--github-enterprise-config-app = DEVELOPER-CONNECT \
--github-enterprise-config-host-uri = HOST_URI
--git-proxy-config-enabled
If you don't have data residency enabled:
gcloud developer-connect connections create CONNECTION_NAME \
--location = REGION \
--github-config-app = DEVELOPER-CONNECT \
--github-config-host-uri = HOST_URI
--git-proxy-config-enabled
Replace the following:
CONNECTION_NAME : a name for your
connection.
REGION : the region for your connection.
HOST_URI : the URI for the host you want to
connect to. If you have data residency enabled, this will use a
domain that includes your subdomain ( YOUR_SUBDOMAIN .ghe.com). If
you don't have data residency enabled, this will usep github.com .
--git-proxy-config-enabled : an optional flag that enables
Developer Connect to act as a proxy for Git calls to GitHub Enterprise Cloud.
This capability is in Preview .
A connection name is created.
Finish creating the connection by installing the
Developer Connect GitHub app. Run the following command to get the
URI for app installation:
gcloud developer-connect connections describe CONNECTION_NAME \
--location = REGION
Replace the following:
CONNECTION_NAME : the name of your connection.
REGION : the region of your connection.
Developer Connect returns a link to install the Google
Developer Connect app in a browser window. Copy this link.
Open the link in a web browser.
Click I understand and continue to agree to share your GitHub OAuth
token with Developer Connect and store it in
Secret Manager.
Sign in to GitHub if prompted to do so.
Click Authorize Developer Connect to allow the Google
Developer Connect app to access your GitHub account. If you don't
see this prompt, authorization has already been granted on this account.
GitHub creates a token and Developer Connect stores it in your
Google Cloud project as a Secret Manager secret. To view your
secrets, list secrets in Secret
Manager . You may revoke access to
Developer Connect through GitHub at any time.
Configure the connection
Grant permissions on your GitHub account and link to repositories using the
following instructions. The prompts you see in your web browser depend on
whether the GitHub account already has the Developer Connect GitHub
app installed.
In the Developer Connect dialog, complete the following steps:
If you see a list of GitHub accounts, install the app and link
repositories by completing these steps:
Choose the GitHub account you want to use.
Select one or more repositories you want to grant access to.
If you see a prompt to re-use an existing app installation, choose where
to configure the app by completing these steps:
Click GitHub Account to see accounts that have the Google
Developer Connect app installed. If you see the account you want to
use, choose it by clicking Confirm .
If you don't see the account that you want to use, do the following:
Choose Install the GitHub App on another GitHub account and click
Confirm .
Follow the GitHub steps to permit app installation.
Select one or more repositories you want to grant access to.
When the dialog closes, the app installation is complete.
Verify the connection
Verify the creation of your GitHub Enterprise Cloud connection by running the following
command:
gcloud developer-connect connections describe CONNECTION_NAME \
--location = REGION
Replace the following:
CONNECTION_NAME : the name of your connection.
REGION : the region for your connection.
Developer Connect returns a status in the installationState field. If
the value of this field is COMPLETE , your app installation is done.
Otherwise, Developer Connect returns a URI to return you to
configuration in the browser.
Once your connection is completed, choose which repositories to link by
following the instructions in
Add repository links to existing connections .
Add repository links to existing connections
Once you have established a connection to GitHub Enterprise Cloud, you can link to
repositories. You can repeat these steps later to link additional repositories
as needed.
To create repository links on an existing GitHub Enterprise Cloud connection, select one of the
following options:
Console
Open the Repositories page in the Google Cloud console.
Open the Repositories
page
Click Link repository .
The Link Git repositories pane opens.
In the connections list, choose a connection.
Click Continue .
In the repositories list, select the repositories you want to link to.
Click Create .
Developer Connect creates the repository links and displays them in
the Google Cloud console.
gcloud
Run the following command:
gcloud developer-connect connections git-repository-links create REPO_NAME \
--clone-uri = REPO_URI \
--connection = CONNECTION_NAME \
--location = REGION
Replace the following:
REPO_NAME : the name of your repository.
REPO_URI : the link to your GitHub Enterprise Cloud repository.
For example, https://github.com/cloud-build/test-repo.git .
CONNECTION_NAME : the name of your connection.
REGION : the
region for your connection.
Developer Connect creates the repository links.
To list linked repositories, run the
developer-connect connections git-repository-links list command.
If you're setting up Gemini Code Assist, continue the process
by following the steps in
Configure and use Gemini Code Assist code customization .
Configure IP allowlists
Developer Connect is compatible with GitHub Enterprise Cloud organizations that use IP
allowlists to restrict access to their resources. To configure your GitHub Enterprise Cloud
allowlist for use with Developer Connect, complete the following steps.
Use the GitHub Enterprise Cloud organization owner account to complete these tasks.
Sign in to GitHub Enterprise Cloud .
Follow the instructions in the GitHub Enterprise Cloud documentation to
allow access by GitHub apps .
GitHub Enterprise Cloud adds the Developer Connect GitHub app addresses to your
allowlist.
You can identify the Developer Connect addresses by their
descriptions, which are similar to the following text:
managed by the Developer Connect GitHub app .
Now that the Developer Connect GitHub app can access your GitHub Enterprise Cloud
resources, configure your allowlist to use the same IP addresses for
OAuth-based interactions between Developer Connect and GitHub Enterprise Cloud. This
allows Developer Connect to create links to your Git repositories.
Copy all of the Developer Connect GitHub app IP addresses.
Follow the instructions in GitHub Enterprise Cloud documentation to
add each address to your allowlist
as a new entry.
When you're finished, you have two allowlist entries for each IP address that
Developer Connect uses to communicate with GitHub Enterprise Cloud.
The OAuth entries are only used for creating links to repositories. You can
delete the OAuth entries from your allowlist when you're done creating
links to GitHub Enterprise Cloud repositories.
Data sharing
Content from Google Cloud resources linked to this connection might be
transferred to GitHub. This statement applies to all existing and future
resources utilizing this connection. To stop sharing information with GitHub,
delete Developer Connect connections in
the Google Cloud console or gcloud CLI, and
revoke access in GitHub .
What's next
Finish setting up Gemini Code Assist code customization .
Learn how Gemini Code Assist helps you accelerate software development .
Explore other integrations available through Developer Connect.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
