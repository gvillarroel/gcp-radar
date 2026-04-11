---
title: "Connect to GitLab Enterprise \_|\_ Developer Connect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/developer-connect/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise
  title: "Connect to GitLab Enterprise \_|\_ Developer Connect \_|\_ Google Cloud\
    \ Documentation"
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
Connect to GitLab Enterprise
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to create connections to GitLab Enterprise and create links to
GitLab Enterprise repositories.
You can complete these tasks using the Google Cloud console,
or the Google Cloud CLI.
These instructions are for application developers, platform administrators, and
security managers who want to use GitLab Enterprise source code repositories with Google.
Specifically, you can use GitLab Enterprise repositories with
Gemini Code Assist .
Note: Developer Connect also supports GitLab Community Edition. The steps
in this document are for both GitLab Enterprise repositories and GitLab
Community Edition repositories.
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
Ensure that you have access to an account on GitLab Enterprise.
To help keep your team's work secure, we recommend that you complete the
tasks in this guide using a service account or an account shared by your team, not
a personal account.
Ensure that you own a GitLab Enterprise repository, or have admin-level permissions on
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
Host requirements
If you haven't installed a GitLab Enterprise Edition Server instance, see
the installation guide from GitLab Enterprise Edition
for instructions.
When following the instructions to install a GitLab Enterprise Edition Server
instance, note the following:
You must configure your host to handle HTTPS protocol. Hosts configured
with HTTP protocol are not supported.
You must configure your host with the same URL that is used to reach your host
from Google Cloud. To learn more, see the GitLab documentation for
configuring the external URL .
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
Create access tokens
To create access tokens in GitLab, complete the following steps:
Sign in to GitLab .
Follow the instructions in the GitLab documentation to
create personal access tokens ,
group access tokens ,
or project access tokens
with the following
permissions:
One token with api scope for connecting and disconnecting repositories.
One token with read_api scope to allow Developer Connect to read
source code in your repositories.
For group access tokens and project access tokens, the tokens must have
a role of Maintainer or greater.
Create a connection
This section describes how to create a connection between Developer Connect
and GitLab Enterprise. If you're using the Google Cloud console, then you can also start
adding links to repositories as you finish setting up your connection.
To create a new GitLab Enterprise connection, select one of the following options:
Console
Initiate a connection by completing the following steps:
In the Google Cloud console, open Developer Connect .
Go to Developer Connect
Developer Connect displays the Git repositories page.
If you see a list of source code management providers: Start
configuring your first connection by selecting a source code
management provider. Click Connect on the GitLab Enterprise card.
If you see a table listing existing connections : Set the source
code management provider by clicking Create connection >
GitLab Enterprise .
The Create Connection page opens.
For Region , choose a region
for your connection resources.
For Name , enter a name for your new connection.
For Host URL , enter the URL of the host you want to connect to.
In the Access Tokens section,
enter the tokens
for your account:
API access token : Enter the access token with api scope.
Read API access token : Enter the access token with read_api
scope.
You are responsible for ensuring your GitLab tokens remain valid.
GitLab tokens have a maximum lifetime of 365 days, unless otherwise
specified by the token creator or an administrator. To learn how to
manage token expiration settings and notifications, see the GitLab
documentation on
personal access tokens ,
group access tokens ,
and project access tokens .
Click Show more to see optional configuration settings.
Optional: By default, Developer Connect can act as a proxy for Git calls to GitLab Enterprise.
To disable this option, clear the Enable Developer Connect proxy
checkbox.
For Network type , select Public internet .
If you want to use a private network, see
Connect to GitLab Enterprise repositories hosted in a private network .
Optional: In the Encryption section, select a
CMEK key to
encrypt Secret Manager secrets that Developer Connect
creates.
Click Continue .
Once the connection is created, the Link repositories page appears.
Complete the following steps to link repositories to your connection:
In the list of available repositories, select the repositories
you want to use.
Click OK .
Click Link .
Your connection is added to the Connections page and your repository
links are added to the Repositories page in the Google Cloud console.
You can add more links to existing connections at any time.
If you're setting up Gemini Code Assist, continue the process
by following the steps in
Configure and use Gemini Code Assist code customization .
gcloud
Create a webhook secret in Secret Manager
by running the following command, where WEBHOOK_SECRET_NAME
is a name for your webhook secret:
cat /proc/sys/kernel/random/uuid | tr -d '\n' | gcloud secrets create WEBHOOK_SECRET_NAME
Store your access tokens in Secret Manager by running
the following commands:
gcloud secrets create API_SECRET_NAME
echo -n API_SECRET_DATA | gcloud secrets versions add API_SECRET_NAME --data-file = -
gcloud secrets create READ_SECRET_NAME
echo -n READ_SECRET_DATA | gcloud secrets versions add READ_SECRET_NAME --data-file = -
Replace the following:
API_SECRET_NAME : a name for the secret that stores
the token with api scope.
API_SECRET_DATA : the token with api
scope, similar to glpat-XXXXXXXXXXXXXXXX .
READ_SECRET_NAME : a name for the secret that stores
the token with read_api scope.
READ_SECRET_DATA : the token with read_api
scope, similar to glpat-XXXXXXXXXXXXXXXX .
Initiate a connection to your GitLab Enterprise account by running the
developer-connect connections create
command:
gcloud developer-connect connections create CONNECTION_NAME \
--location = REGION \
--gitlab-config-read-authorizer-credential-user-token-secret-version = projects/ PROJECT_ID /secrets/ READ_SECRET_NAME /versions/ VERSION \
--gitlab-config-authorizer-credential-user-token-secret-version = projects/ PROJECT_ID /secrets/ API_SECRET_NAME /versions/ VERSION \
--gitlab-enterprise-config-host-uri = HOST_URI
--gitlab-enterprise-config-webhook-secret-version = projects/ PROJECT_ID /secrets/ WEBHOOK_SECRET_NAME /versions/ VERSION
--git-proxy-config-enabled
Replace the following:
CONNECTION_NAME : the name of your connection.
REGION : the region for your connection.
PROJECT_ID : your Google Cloud
project ID .
READ_SECRET_NAME : the name of the
Secret Manager secret that contains the token
with read_api scope.
API_SECRET_NAME : the name of the
Secret Manager secret that contains the token
with api scope.
VERSION : the version number of each secret. This
can be latest to use the most recent version number.
HOST_URI : the URI for the host you want to
connect to.
WEBHOOK_SECRET_NAME : the name of the
Secret Manager secret that contains your webhook
--git-proxy-config-enabled : an optional flag that enables
Developer Connect to act as a proxy for Git calls to GitLab Enterprise.
This capability is in Preview .
Developer Connect completes the connection to GitLab. Next,
link to repositories .
Link to repositories using an existing connection
Once you have established a connection to GitLab Enterprise, you can link to
repositories. You can repeat these steps later to link additional repositories
as needed.
To create repository links on an existing GitLab Enterprise connection, select one of the
following options:
Console
Create links to repositories by completing the following steps:
Open the Repositories page in the Google Cloud console.
Open the Repositories
page
Click Link repository .
The Link Git repositories pane opens.
In the connections list, choose a connection.
Click Continue .
In the repositories list, select the repositories you want to link to.
Developer Connect displays suggested names for your repository
resources.
Select a repository resource naming option:
Generated : Use the generated repository resource names.
Manual : Input names of your own.
Click Create .
Developer Connect creates the repository links and displays them in
the Google Cloud console.
gcloud
Link to a GitLab repository by running the following command:
gcloud developer-connect connections git-repository-links create REPO_NAME \
--clone-uri = REPO_URI \
--connection = CONNECTION_NAME \
--location = REGION
Replace the following:
REPO_NAME : the name for your repository link.
REPO_URI : the link to your repository, similar
to https://gitlab.com/my-project/test-repo.git .
CONNECTION_NAME : the name of your connection.
REGION : the region of your connection.
Developer Connect creates the repository links.
To list linked repositories, run the
developer-connect connections git-repository-links list command.
If you're setting up Gemini Code Assist, continue the process
by following the steps in
Configure and use Gemini Code Assist code customization .
What's next
Finish setting up Gemini Code Assist code customization .
Learn how Gemini Code Assist helps you accelerate software development .
Explore other integrations available through Developer Connect.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
