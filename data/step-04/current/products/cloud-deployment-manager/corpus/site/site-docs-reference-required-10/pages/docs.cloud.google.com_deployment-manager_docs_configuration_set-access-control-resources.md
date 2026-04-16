---
title: "Setting access control in a configuration \_|\_ Cloud Deployment Manager \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deployment-manager/docs/configuration/set-access-control-resources
knowledge_key: corpus
source_id: site-docs-reference-required-10
source_type: site
entrypoint: https://docs.cloud.google.com/deployment-manager/docs/step-by-step-guide/deploy-your-resources
source_metadata:
  url: https://docs.cloud.google.com/deployment-manager/docs/configuration/set-access-control-resources
  title: "Setting access control in a configuration \_|\_ Cloud Deployment Manager\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Deployment Manager will reach end of support on March 31, 2026 . If you currently use Deployment Manager, please migrate to Infrastructure Manager or an alternative deployment technology by March 31, 2026 to ensure your services continue without interruption.
For more information on the deprecation and shutdown, see Deployment Manager deprecation .
Home
Documentation
Infrastructure as code
Cloud Deployment Manager
Guides
Send feedback
Setting access control in a configuration
Stay organized with collections
Save and categorize content based on your preferences.
To control access to your resources in Google Cloud, you use
Identity and Access Management (IAM) . With IAM, you set permissions
specifying who has what kind of access to which resources in your
project. For an introduction to IAM, see the IAM Overview .
When you deploy resources, you can also control who has access to these
resources by setting an IAM policy preemptively in your configuration. For
example, if you plan to create Pub/Sub Topics that can be managed by specific
users, you can express this to Deployment Manager by specifying an
IAM policy in your configuration. When you create or update your deployment,
Deployment Manager calls the IAM API to set the appropriate permissions on
the resource.
Before you begin
If you want to use the command-line examples in this guide, install the `gcloud` command-line tool .
If you want to use the API examples in this guide, set up API access .
Using IAM policies in Deployment Manager
An IAM policy is a collection of users and their roles. You set an IAM policy at
the project level, using either basic or predefined roles. Some services,
such as Cloud Pub/Sub, also support setting IAM policies at the resource level.
If a service does not support setting IAM policies at the resource level,
Deployment Manager returns a NO_METHOD_TO_UPDATE_ACCESS_CONTROL error.
For a list of roles and the resources you can apply them to, see Understanding
Roles .
Granting Deployment Manager permission to set IAM policies
Deployment Manager uses the
Google APIs Service Account
to call other Google APIs and manage Google Cloud resources on your
behalf. You must grant your project's Google APIs service account the basic
roles/owner role so it can apply the IAM policies you define in your
configurations.
Go to the IAM page in the Google Cloud console of your project.
Go to the IAM page
If prompted, select your project from the list.
Look for the Google APIs service account , which has the email
address in the following format:
[ PROJECT_NUMBER ] @cloudservices . gserviceaccount.com
Note: This email address requires the project number, not the
project ID. To learn how to identify the project number, see
Identifying projects .
Grant the APIs service account the roles/owner roles:
Console
While still in the Google Cloud console, expand the Roles dropdown for
the Google APIs service account and select Project > Owner .
Click Save to save your changes.
gcloud
With the Google Cloud CLI, add a binding to the IAM policy for the project:
gcloud projects add-iam-policy-binding [PROJECT_ID] \
--member serviceAccount:[SERVICE_ACCOUNT_EMAIL] --role roles/owner
where:
[PROJECT_ID] is the ID of the project.
[SERVICE_ACCOUNT_EMAIL] is the email of the service account.
For example:
gcloud projects add-iam-policy-binding database-images \
--member serviceAccount:123456789012@cloudservices.gserviceaccount.com \
--role roles/owner
API
In the API, make a POST request to the following URL, where
[PROJECT_ID] is the ID of the project:
POST https : // cloudresourcemanager . googleapis . com / v1 / projects / $ [ PROJECT_ID ] : setIamPolicy
The request body should contain the list of bindings you want to apply
to this project. The roles/owner role should be part
of the binding. For example:
{
"policy" : {
"version" : "0" ,
"bindings" : [
{
"role": "roles/owner",
"members": [
"user:example@gmail.com",
"serviceAccount:123456789012@cloudservices.gserviceaccount.com"
]
}
]
}
}
Setting an IAM policy in your configuration
Next, in your configuration or template, you can set an IAM policy by following
these instructions:
Add the accessControl section to the top-level configuration for each
resource for which you want to apply access control policies.
Specify the desired gcpIamPolicy for the resource. Each IAM policy can
contain a list of bindings. Each binding binds a list of members to a role.
Note: If you use the accessControl section to grant roles to accounts,
including service accounts, we recommend that you use Deployment Manager
to manage roles for that account. If you change the account's roles outside
Deployment Manager and then update the original deployment, the
roles from the deployment configuration are applied to the account.
If you're using accessControl to manage service accounts,
learn more about managing service accounts .
For example, the following accessControl section adds bindings that grant
these roles to users:
User
Role
alice@example.com
roles/pubsub.editor
my-other-app@appspot.gserviceaccount.com
jane@example.com
roles/pubsub.publisher
resources :
- name: a - new - pubsub - topic
type : pubsub . v1 . topic
properties :
...
accessControl :
gcpIamPolicy :
bindings :
- role : roles / pubsub . editor
members :
- "user:alice@example.com"
- role : roles / pubsub . publisher
members :
- "user:jane@example.com"
- "serviceAccount:my-other-app@appspot.gserviceaccount.com"
For more information on IAM policies, read the
IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
