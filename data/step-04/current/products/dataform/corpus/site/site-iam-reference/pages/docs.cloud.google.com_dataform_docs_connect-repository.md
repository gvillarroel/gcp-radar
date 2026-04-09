---
title: "Connect to a third-party Git repository \_|\_ Dataform \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/dataform/docs/connect-repository
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataform/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/dataform/docs/connect-repository
  title: "Connect to a third-party Git repository \_|\_ Dataform \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataform
Guides
Send feedback
Connect to a third-party Git repository
Stay organized with collections
Save and categorize content based on your preferences.
This document shows you how to connect a remote repository to a
Dataform repository. After you connect the repositories, the
changes you make in a Dataform development workspace can be pushed to and pulled from the remote Git repository.
Important: Dataform can't connect directly to a
private IP address of an
on-premises Git host.
You can connect a remote repository through HTTPS or SSH.
The following table lists supported Git providers and connection
methods that are available for their repositories:
Git provider
Connection method
Azure DevOps Services
SSH
Bitbucket
SSH
GitHub
SSH or HTTPS
GitLab
SSH or HTTPS
Important: To connect your remote Git repository to Dataform,
verify that your Git host has a
public IP address .
If your Git host is configured with only a private IP address (for example,
10.x.x.x, 172.16.x.x-172.31.x.x, or 192.168.x.x), Dataform is
unable to establish a connection. Connecting a remote Git repository to a Dataform repository can fail if the remote repository isn't open
to the public internet, for example, if it's behind a firewall. In this case,
add the required
Dataform egress IP address ranges
to your firewall rules to enable connections to protected remote repositories.
Before you begin
If your organization or project restricts remote Git repositories
with the dataform.restrictGitRemotes Organization Policy, ensure that the
remote Git repository is added to the allowlist in the policy before you
create the Dataform repository that you want to connect to a remote
repository. For more information, see
Restrict remote repositories .
Select or
create a Dataform repository .
You need the repository later to share a secret with your default
Dataform service agent .
Note: The Dataform repositories list includes only
repositories created for Dataform workflow development.
Repositories for BigQuery Studio assets, such as notebooks or saved
queries, are managed separately and don't appear in this list.
Required roles
To get the permissions that
you need to connect a Dataform repository to a remote Git repository,
ask your administrator to grant you the
Dataform Admin ( roles/dataform.admin )
IAM role on repositories.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Connect a remote repository through SSH
To connect a remote repository through SSH, you need to
generate an SSH key and a Secret Manager secret. The SSH key consists
of a public SSH key and a private SSH key.
You need to share the public SSH key with your Git provider, and create a
Secret Manager secret with the private SSH key. Then, share the secret
with your default Dataform service agent.
Dataform uses the secret with the private SSH key to sign in to your Git
provider to commit changes on behalf of the developers. Dataform makes
these commits using the developer's Google Cloud email address so you can tell
who made each commit.
Warning: The private SSH key is shared among all Dataform users who
use the corresponding service agent or service account. We recommend that you
create a machine user with your Git provider and limit its
access to the remote Git repositories you plan to use with Dataform.
Only Google Cloud project owners and Dataform users with the
Dataform Admin role can use the key to
connect repositories. Dataform users are not able to see the key itself.
To connect a remote repository to a
Dataform repository through SSH, follow these steps:
In your Git provider, do the following:
Azure DevOps Services
In Azure DevOps Services, create a private SSH key .
Upload the public SSH key
to your Azure DevOps Services repository.
Bitbucket
In Bitbucket, create a private SSH key .
Upload the public SSH key
to your Bitbucket repository.
GitHub
In GitHub, create a private SSH key .
Upload the GitHub public SSH key
to your GitHub repository.
GitLab
In GitLab, create a private SSH key .
Upload the GitLab public SSH key
to your GitLab repository.
In Secret Manager, create a secret
and set your private SSH key as the secret value.
Grant access to the secret to your default Dataform service agent .
Your default Dataform service agent is in the following format:
service- PROJECT_NUMBER @gcp-sa-dataform.iam.gserviceaccount.com
Grant the
roles/secretmanager.secretAccessor role
to the service agent or service account.
In the Google Cloud console, go to the Dataform page.
Go to Dataform
Select the Dataform repository that you want to connect
to the remote repository.
On the repository page, click Settings > Connect with Git .
In the Link to remote repository pane, in the
Remote Git repository URL field, enter the URL of the remote Git
repository, ending with .git .
The URL of the remote Git repository must be in one of
the following formats:
Absolute URL: ssh://git@{host_name}[:{port}]/{repository_path} ,
port is optional.
SCP-like URL: git@{host_name}:{repository_path} .
In the Default remote branch name field, enter the name
of the main development branch of the remote Git repository.
In the Secret drop-down, select your secret for the remote Git
repository.
In the SSH public host key value field, enter the public host key of your
Git provider.
Azure DevOps Services
To retrieve the Azure DevOps Services public host key, run the following command in the terminal:
ssh-keyscan -t rsa ssh.dev.azure.com
Copy one of the outputted keys, omitting ssh.dev.azure.com from the beginning of the line.
The value that you copy must be in the following format:
ALGORITHM BASE64_KEY_VALUE
For example:
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC7Hr1oTWqNqOlzGJOfGJ4NakVyIzf1rXYd4d7wo6jBlkLvCA4odBlL0mDUyZ0/QUfTTqeu+tm22gOsv+VrVTMk6vwRU75gY/y9ut5Mb3bR5BV58dKXyq9A9UeB5Cakehn5Zgm6x1mKoVyf+FFn26iYqXJRgzIZZcZ5V6hrE0Qg39kZm4az48o0AUbf6Sp4SLdvnuMa2sVNwHBboS7EJkm57XQPVU3/QpyNLHbWDdzwtrlS+ez30S3AdYhLKEOxAG8weOnyrtLJAUen9mTkol8oII1edf7mWWbWVf0nBmly21+nZcmCTISQBtdcyPaEno7fFQMDD26/s0lfKob4Kw8H
Verify this key is still up-to-date with Azure DevOps Services.
Bitbucket
To retrieve the Bitbucket public host key, run the following command in the terminal:
curl https://bitbucket.org/site/ssh
The command returns a list of public host keys. Choose one of the keys from the list, and copy it, omitting bitbucket.org from the beginning of the line.
The value that you copy must be in the following format:
ALGORITHM BASE64_KEY_VALUE
For example:
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIIazEu89wgQZ4bqs3d63QSMzYVa0MuJ2e2gKTKqu+UUO
Verify this key is still up-to-date with Bitbucket.
GitHub
To retrieve the GitHub public host key, see
GitHub's SSH key fingerprints .
The page contains a list of public host keys. Choose one of them, and copy it, omitting github.com from the beginning of the line.
The value that you copy must be in the following format:
ALGORITHM BASE64_KEY_VALUE
For example:
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIOMqqnkVzrm0SdG6UOoqKLsabgH5C9okWi0dh2l9GKJl
Verify this key is still up-to-date with GitHub.
GitLab
To retrieve the GitLab public host key, see
SSH known_hosts entries .
The page contains a list of public host keys. Choose one of them, and copy it, omitting gitlab.com from the beginning of the line.
The value that you copy must be in the following format:
ALGORITHM BASE64_KEY_VALUE
For example:
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIAfuCHKVTjquxvt6CM6tdG4SLp1Btn/nOeHHE5UOzRdf
Verify this key is still up-to-date with GitLab.
Click Link .
Connect a remote repository through HTTPS
To connect a remote repository through HTTPS, you need to create a
Secret Manager secret with a personal access token, and share the
secret with your default Dataform service agent.
Dataform then uses the access token to sign in to your Git provider to
commit changes on behalf of the developers. Dataform makes these
commits using the developer's Google Cloud email address so you can tell
who made each commit.
Warning: The access token is shared among all Dataform users who use
the corresponding service agent or service account. We recommend that you create
a machine user with your Git provider and limit its access to the remote Git
repositories you plan to use with Dataform. Only Google Cloud project
owners and Dataform users with the
Dataform Admin
role can use the token to connect repositories. Dataform users are
not able to see the token itself.
To connect a remote repository to a Dataform repository through HTTPS,
follow these steps:
In your Git provider, do the following:
GitHub
In GitHub, create a fine-grained personal access token
or a classic personal access token .
For a fine-grained GitHub personal access token, do the following:
Select repository access to only selected repositories, then
select the repository that you want to connect to.
Grant read and write access on contents of the repository.
Set a token expiration time appropriate to your needs.
For a classic GitHub personal access token, do the following:
Grant Dataform the repo permission.
Set a token expiration time appropriate to your needs.
If your organization uses SAML single sign-on (SSO),
authorize the token .
GitLab
In GitLab, create a GitLab personal access token .
Name the token dataform .
The GitLab personal access token must be named dataform .
Grant Dataform the api , read_repository ,
and write_repository permissions.
Set a token expiration time appropriate to your needs.
In Secret Manager,
create a secret
containing the personal access token of your remote repository.
Grant access to the secret to your default Dataform service agent .
Your default Dataform service agent is in the following format:
service- PROJECT_NUMBER @gcp-sa-dataform.iam.gserviceaccount.com
Grant the
roles/secretmanager.secretAccessor role
to the service agent.
In the Google Cloud console, go to the Dataform page.
Go to Dataform
Select the Dataform repository that you want to connect
to the remote repository.
On the repository page, click Settings > Connect with Git .
In the Link to remote repository pane, in the
Remote Git repository URL field, enter the URL of the remote Git
repository, ending with .git .
The URL of the remote Git repository cannot contain usernames or passwords.
In the Default remote branch name field, enter the name
of the main development branch of the remote Git repository.
In the Secret drop-down, select your secret for the remote Git
repository.
Click Link .
Edit the remote repository connection
To edit a connection between a Dataform repository and a remote
Git repository, follow these steps:
In the Google Cloud console, go to the Dataform page.
Go to Dataform
Click the repository that you want to edit.
On the repository page, click Settings > Edit Git connection .
On the Link to remote repository pane, edit connection settings.
Click Update .
What's next
To learn more about Dataform repositories, see
Create a repository .
To create a development workspace, see
Create a workspace .
To learn how to troubleshoot issues with remote repository connections, see
Troubleshoot Dataform .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
