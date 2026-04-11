---
title: "IAM roles and permissions \_|\_ Developer Connect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/developer-connect/docs/access-control
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/developer-connect/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/developer-connect/docs/access-control
  title: "IAM roles and permissions \_|\_ Developer Connect \_|\_ Google Cloud Documentation"
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
IAM roles and permissions
Stay organized with collections
Save and categorize content based on your preferences.
This page describes Developer Connect roles and permissions.
Access control in Developer Connect is controlled using
Identity and Access Management (IAM) . IAM lets you create and
manage permissions for Google Cloud resources. Developer Connect provides a
specific set of
predefined IAM roles
where each role contains a set of permissions suited to a particular type of
access or action. We recommend that you adopt the
security principle of least privilege ,
and grant only the necessary access to your resources.
Predefined Developer Connect roles
You assign permissions to accounts through the use of roles. The following table
lists the roles available for Developer Connect and the permissions that
they include:
Role
Permissions
Name : developerconnect.admin
Title : Developer Connect Admin
Grants full access to Developer Connect resources.
developerconnect.operations.delete
developerconnect.operations.cancel
developerconnect.connections.create
developerconnect.connections.update
developerconnect.connections.delete
developerconnect.connections.constructGitHubAppManifest
developerconnect.connections.processGitHubOAuthCallback
developerconnect.connections.processGitHubAppCreationCallback
developerconnect.connections.generateGitHubStateToken
developerconnect.accountConnectors.create
developerconnect.accountConnectors.update
developerconnect.accountConnectors.delete
developerconnect.accountConnectors.get
developerconnect.accountConnectors.list
developerconnect.gitRepositoryLinks.create
developerconnect.gitRepositoryLinks.delete
Name : developerconnect.readTokenAccessor
Title : Developer Connect Read Token Accessor
Grants access to read-only tokens. Also grants access to view the Git
repository link.
developerconnect.connections.get
developerconnect.gitRepositoryLinks.get
developerconnect.gitRepositoryLinks.fetchReadToken
Name : developerconnect.tokenAccessor
Title : Developer Connect Token Accessor
Grants access to read/write and read-only tokens. Also grants access to
view the Git repository link.
developerconnect.connections.get
developerconnect.gitRepositoryLinks.get
developerconnect.gitRepositoryLinks.fetchReadToken
developerconnect.gitRepositoryLinks.fetchReadWriteToken
Name : developerconnect.user
Title : Developer Connect User
Grants access to view the connection and access to the features that
interact with the Git repository, such as reading content from the Git
repository, or linking to the Git repository.
developerconnect.connections.fetchGitHubInstallations
developerconnect.connections.fetchLinkableGitRepositories
developerconnect.gitRepositoryLinks.fetchGitRefs
Name : developerconnect.viewer
Title : Developer Connect Viewer
Grants read-only access to Developer Connect resources.
resourcemanager.projects.get
resourcemanager.projects.list
developerconnect.operations.list
developerconnect.operations.get
developerconnect.locations.list
developerconnect.locations.get
developerconnect.connections.list
developerconnect.connections.get
developerconnect.accountConnectors.get
developerconnect.accountConnectors.list
developerconnect.gitRepositoryLinks.list
developerconnect.gitRepositoryLinks.get
Name : developerconnect.gitProxyReader
Title : Developer Connect Git Proxy Reader
Grants read-only access to repositories through the Git proxy.
developerconnect.gitRepositoryLinks.gitProxyRead
Name : developerconnect.gitProxyUser
Title : Developer Connect Git Proxy User
Grants read and write access to repositories through the Git proxy.
developerconnect.gitRepositoryLinks.gitProxyRead
developerconnect.gitRepositoryLinks.gitProxyWrite
Name : developerconnect.accountConnectorProxyUser
Title : Developer Connect Account Connector Proxy User
Grants access to account connectors through Git and HTTP proxies.
developerconnect.accountConnectors.gitProxyUse
developerconnect.accountConnectors.fetchUserRepositories
Name : developerconnect.oauthAdmin
Title : Developer Connect OAuth Admin
Grants read and write access to Account Connector resources.
developerconnect.accountConnectors.create
developerconnect.accountConnectors.update
developerconnect.accountConnectors.delete
developerconnect.accountConnectors.fetchUserRepositories
developerconnect.users.delete
developerconnect.users.list
developerconnect.providers.list
cloudresourcemanager.projects.get
cloudresourcemanager.projects.list
developerconnect.operations.list
developerconnect.operations.get
developerconnect.locations.list
developerconnect.locations.get
developerconnect.users.startOAuth
developerconnect.users.finishOAuth
developerconnect.users.fetchAccessToken
developerconnect.users.getSelf
developerconnect.users.deleteSelf
developerconnect.accountConnectors.get
developerconnect.accountConnectors.list
Name : developerconnect.oauthUser
Title : Developer Connect OAuth User
Grants read and write access to User resources, and read access to Account Connectors.
cloudresourcemanager.projects.get
cloudresourcemanager.projects.list
developerconnect.operations.list
developerconnect.operations.get
developerconnect.locations.list
developerconnect.locations.get
developerconnect.users.startOAuth
developerconnect.users.finishOAuth
developerconnect.users.fetchAccessToken
developerconnect.users.getSelf
developerconnect.users.deleteSelf
developerconnect.accountConnectors.get
developerconnect.accountConnectors.list
Name : developerconnect.insightsAdmin
Title : Developer Connect Insights Admin
Grants full access to Developer Connect insights, and read-only
access to Resource Manager resources.
cloudresourcemanager.projects.get
cloudresourcemanager.projects.list
developerconnect.operations.list
developerconnect.operations.get
developerconnect.locations.list
developerconnect.locations.get
developerconnect.insightsConfigs.list
developerconnect.insightsConfigs.get
developerconnect.insightsConfigs.create
developerconnect.insightsConfigs.update
developerconnect.insightsConfigs.delete
Name : developerconnect.insightsAgent
Title : Developer Connect Insights Agent
Grants read-only access to Cloud Asset Inventory assets, read and create access
to Cloud Asset Inventory feeds, read-only access to, read-only access to
Artifact Analysis occurrences, and the ability to createCloud Logging log entries.
cloudasset.assets.searchAllResources
cloudasset.assets.listResource
cloudasset.assets.exportResource
cloudasset.feeds.create
cloudasset.feeds.update
cloudasset.feeds.get
containeranalysis.occurrences.get
containeranalysis.occurrences.list
logging.logEntries.create
Name : developerconnect.insightsViewer
Title : Developer Connect Insights Viewer
Grants read-only access to Resource Manager projects and to
Developer Connect operations, locations, and insights.
cloudresourcemanager.projects.get
cloudresourcemanager.projects.list
developerconnect.operations.list
developerconnect.operations.get
developerconnect.locations.list
developerconnect.locations.get
developerconnect.insightsConfigs.list
developerconnect.insightsConfigs.get
Developer Connect service account
Developer Connect uses a service agent to execute tasks on your behalf
when communicating with other services. This service agent is created
automatically when you first interact with Developer Connect (create a
repository connection or account connector).
The identifier for the Developer Connect
service agent is as follows, where PROJECT_NUMBER is your Google Cloud
project number .
service- PROJECT_NUMBER @gcp-sa-devconnect.iam.gserviceaccount.com
You use this identifier to grant or modify IAM roles and
permissions.
Configure access to resources
For specific steps on granting roles, see
Granting, changing, and revoking access to resources .
What's next
Learn about IAM .
Connect to a GitHub repository .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
