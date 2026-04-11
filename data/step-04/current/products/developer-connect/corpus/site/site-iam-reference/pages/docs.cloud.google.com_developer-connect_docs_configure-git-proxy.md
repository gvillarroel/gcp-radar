---
title: "Configure and use Developer Connect proxy \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/developer-connect/docs/configure-git-proxy
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/developer-connect/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/developer-connect/docs/configure-git-proxy
  title: "Configure and use Developer Connect proxy \_|\_ Google Cloud Documentation"
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
Configure and use Developer Connect proxy
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to configure Developer Connect proxy.
Developer Connect proxy enhances how Developer Connect handles
authentication and network access to source code management systems (SCMs) and
arbitrary HTTP endpoints ( Preview ). When you
enable the proxy for a connection, Developer Connect uses the proxy server
to proxy Git requests, such as git clone , or API calls to HTTP endpoints
( Preview ). When you create a connection using
Google Cloud console, the proxy is enabled by default. This way, you only need to
grant IAM permissions to a user or service account instead of
managing an access token in Secret Manager.
For example, enabling Developer Connect proxy on a connection lets you do
the following:
Use
Gemini Code Assist
code customization with SCMs in privately-hosted networks, including
on-premise networks.
Clone source code from an external SCM by using Google Cloud authentication
and Identity and Access Management permissions.
Use Gemini Code Review Agent with SCMs in privately-hosted networks, including
on-premise networks ( Preview ).
There are two components of Developer Connect proxy:
Git proxy
For connections to source code management systems (SCMs)
HTTP proxy ( Preview )
For connections to arbitrary HTTP endpoints
Both of these components are enabled using the same setting. Git proxy gives you
more control over usage.
Before you begin
Ensure that you have at least one connection in Developer Connect to an
SCM such as GitHub, GitLab, or Bitbucket.
To get the permissions that
you need to configure Developer Connect proxy for a connection,
ask your administrator to grant you the
Developer Connect Admin ( developerconnect.admin )
IAM role on the user that enables or disables the Developer Connect proxy.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
To get the permissions that
you need to issue requests to the proxy for a connection,
ask your administrator to grant you the
following IAM roles on the user account or service account that issues Git requests:
Make Git read requests such as git clone :
Git Proxy Reader ( roles/developerconnect.gitProxyReader )
Make Git write requests such as git push :
Git Proxy User ( roles/developerconnect.gitProxyUser )
View and update Developer Connect proxy settings
The Developer Connect proxy is enabled by default. When it's enabled, both
Git proxy and HTTP proxy are enabled.
To view and update proxy settings, do the following:
Console
In the Google Cloud console, open Developer Connect .
Go to Developer Connect
Click the Connections tab, and then click the name of the connection
that you want to use.
On the Connection details page,
click the Additional configuration
tab.
Click the Developer Connect proxy toggle to disable or re-enable the
Developer Connect proxy feature.
Developer Connect proxy is enabled by default.
Google Cloud CLI
Enable the Developer Connect proxy setting for a connection
To enable Developer Connect proxy for a connection, enable the proxy
setting by running the gcloud developer-connect connections update command:
gcloud developer-connect connections update CONNECTION_NAME \
--location= REGION \
--git-proxy-config-enabled
Disable the Developer Connect proxy for a connection
To disable Developer Connect proxy for a connection, disable the proxy
setting by running the gcloud developer-connect connections update command:
gcloud developer-connect connections update CONNECTION_NAME \
--location= REGION \
--no-git-proxy-config-enabled
View the proxy setting for a connection
To view details about the Developer Connect proxy setting for a connection,
run the gcloud developer-connect connections describe command:
gcloud developer-connect connections describe CONNECTION_NAME \
--location= REGION
Replace the following:
CONNECTION_NAME with the name of your connection.
REGION with the region of
your connection.
The rest of this document includes instructions Git proxy only.
Find the Git proxy URI
With Developer Connect proxy enabled, you can find the Git proxy URI for
your connection by doing the following:
Console
In the Google Cloud console, open Developer Connect .
Go to Developer Connect
Click the Connections tab, and then click the name of the connection
that you want to use.
In the Connection details page, click the Repositories tab.
Find the repository for your
connection, and then click Copy git proxy URL .
Google Cloud CLI
To get the Git proxy URI, run the
gcloud developer-connect connections git-repository-links describe command:
gcloud developer-connect connections git-repository-links describe REPOSITORY_NAME \
--connection= CONNECTION_NAME \
--location= REGION
Replace the following:
REPOSITORY_NAME with the name of your repository.
CONNECTION_NAME with the name of your connection.
REGION with the region of
your connection.
Developer Connect API
The Git proxy URI is located in the git_proxy_url field of
the
GitRepositoryLink
for your connection.
Issue requests to the Git proxy
After you have your Git proxy URI, you can issue requests to the Git proxy
by doing the following:
Configure the Git CLI to use the Google Cloud CLI credential helper:
git config --global credential.'https://*.developerconnect.dev'.helper gcloud.sh
Issue a request, such as git clone , to the Git proxy:
git clone https:// REGION .developerconnect.dev/ PROJECT_NAME / CONNECTION_NAME / REPOSITORY NAME
If you don't want to use a credential helper, then you can embed the cloud
access token into the request instead:
git clone https://unused:$(gcloud auth print-access-token)@ REGION -git.developerconnect.dev/ PROJECT_NAME / CONNECTION_NAME / REPOSITORY NAME
Replace the following:
REPOSITORY_NAME with the name of your repository.
CONNECTION_NAME with the name of your connection.
REGION with the region of
your connection.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
