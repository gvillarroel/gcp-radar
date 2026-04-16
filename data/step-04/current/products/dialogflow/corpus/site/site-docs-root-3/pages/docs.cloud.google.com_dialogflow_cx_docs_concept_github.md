---
title: "Git export/restore \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/github
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/github
  title: "Git export/restore \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Some products and features are in the process of being renamed. Generative playbook and flow features are also being migrated to a single consolidated console. See the details .
Home
Documentation
AI and ML
Dialogflow
Dialogflow CX
Send feedback
Git export/restore
Stay organized with collections
Save and categorize content based on your preferences.
Note: In February 2025, a new version of this integration was released.
Users of the old version can provide tokens without using secrets.
The documentation below applies primarily to the new version.
Dialogflow CX integrates with multiple Git providers
(GitHub, Gitlab, Bitbucket, and others).
This integration makes it easy to
export your agent to JSON
for a push to a Git provider,
and to pull from a Git provider for an
agent restore .
The JSON exported format pushed to a Git provider
is the expanded zip file contents of the exported agent.
Using this feature allows you to take advantage of
a Git provider source control features like:
Agent change reviews using code review tools
Examine agent diffs using diff tools
Merges
Limitations
The following limitations apply:
[Old integration version only]
GitHub APIs have a limitation on the number of files
that can be updated in a single commit.
If the number of files exceeds 500,
you may not be able to push to GitHub from Dialogflow CX.
In such cases, you can export the agent as a zip
and use the Git CLI on your machine to push the agent files to GitHub.
This limitation will be addressed in a later Dialogflow CX release.
GitHub private access
self-hosted
repos are not supported,
because Dialogflow CX cannot access these repos.
The Git repository cannot contain any files other than the agent files
exported by agent export. Any other files in the repository will be removed
on every push.
Configuration
To configure this feature,
you need to acquire an access token from your Git provider,
store it in Secret Manager,
and provide the secret resource to Dialogflow CX:
Access token
To acquire an access token from your Git provider:
GitHub
You need to acquire a
GitHub personal token
If you use a fine-grained personal access token,
you need the following
permissions
access:
Repository Permissions > Contents : Read and write
Repository Permissions > Metadata : Read-only (should be auto-selected
after selecting Contents permission)
Gitlab
You need to acquire a
Gitlab personal access token .
Bitbucket
You need to acquire a
Bitbucket access token .
Secret Manager
Now that you have an access token,
you need to create a secret for your token:
Enable the Secret Manager API .
Create a secret .
Dialogflow CX configuration
To configure this integration for Dialogflow CX:
Provide the Dialogflow service agent
permission to access the access token secret in Secret Manager.
Provide the Secret Manager Secret Accessor role
to the
gcp-sa-dialogflow.iam.gserviceaccount.com
service account in your agent project.
See
Grant access to Secret Manager secret .
Open the Git integration configuration:
Conversational Agents console
Open the settings display by clicking the settings icon
near the top right corner.
Scroll down and click Add Git integration .
Dialogflow CX console
Click the Manage tab.
Click Git in the Testing & Deployment section.
Click Create new .
Provide configuration details:
Enter the following:
Display name for the GitHub connection.
Git repository URL (for example:
https://github.com/<path-to-repo>.git ).
Add Git branches your agent will be interacting with.
You can designate a branch as the default branch
by clicking the star icon next to it.
Access token secret,
which is the secret version you created in the form
projects/*/secrets/*/versions/* for a specific version or
projects/*/secrets/*/versions/latest for the latest version.
Click Connect .
It can take a minute for the Git service to be ready.
The console will display notifications.
Push and restore
Once configured, you can push/pull your agent to/from Git.
The Push button is used to export your agent
and make a commit to the Git branch selected in the Git branch dropdown.
This commit will consist of the entire agent and not specific changes,
and will delete any existing files in the repository.
Users with Dialogflow Reader roles have the ability to push to Git
repositories. To prevent unwanted pushes, configure these agents with read-only
personal access tokens.
The Restore button is used to pull your agent data from the Git branch
selected in the Git branch drop-down and restore your Dialogflow CX agent from this
data. This will overwrite your agent in the same way that any agent restore
behaves.
Example use case
The following example illustrates how this feature can be used
by multiple people to propose different agent changes to a production agent.
Consider that your agent uses the following Git branches:
Prod : branch for your production agent
Dev1 : branch for agent development
Dev2 : another branch for agent development
User 1 wants to propose agent changes and takes the following steps:
Export the production agent to a new agent.
Make the desired changes to this agent copy.
Test the changes.
Push the altered agent to the Dev1 branch.
Create a merge request to the Prod branch.
User 2 wants to propose agent changes and takes the following steps:
Export the production agent to a new agent.
Make the desired changes to this agent copy.
Test the changes.
Push the altered agent to the Dev2 branch.
Create a merge request to the Prod branch.
User 3 reviews merge requests from both users and takes the following steps:
Resolve conflicts.
Commits approved changes.
Restores the production Git branch to the production Dialogflow CX agent.
Previous
arrow_back
Sessions
Next
Sentiment
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
