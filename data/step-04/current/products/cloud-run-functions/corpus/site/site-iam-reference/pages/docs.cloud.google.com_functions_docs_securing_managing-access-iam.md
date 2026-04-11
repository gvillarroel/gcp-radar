---
title: "Authorize access with IAM \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/functions/docs/securing/managing-access-iam
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/functions/docs/concepts/iam
source_metadata:
  url: https://docs.cloud.google.com/functions/docs/securing/managing-access-iam
  title: "Authorize access with IAM \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

If you are creating a new function, see the Console Quickstart on Cloud Run.
Home
Documentation
Application hosting
Cloud Run
Cloud Run functions
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Authorize access with IAM
You use Identity and Access Management (IAM) to authorize identities to perform
administrative actions on functions created using the
Cloud Functions v2 API —for example, using
gcloud functions , the REST API, or Terraform. Administration actions include
creating, updating, and deleting functions. For information about
IAM access for functions created with Cloud Run, see
Access control with IAM .
In IAM, you grant principals (the identities you want
to enable, usually a user or service account email) the appropriate
IAM roles on the function or
project. These roles include permissions that define the actions the
principal is allowed to do.
Note: By default, entities that need to invoke an HTTP function must
explicitly present authentication credentials (proof of identity) as well as
having the required permissions. The authentication requirement, however, can be
turned off .
For more information on how to acquire and present the appropriate authentication
credential, see Authenticating for invocation .
Before you begin
To get the permission that
you need to control access for a specific function or all functions in a project,
ask your administrator to grant you the
Cloud Functions Admin ( roles/roles/cloudfunctions.admin )
IAM role on the function or the project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains the
cloudfunctions.functions.setIamPolicy
permission,
which is required to
control access for a specific function or all functions in a project.
You might also be able to get
this permission
with custom roles or
other predefined roles .
See Cloud Functions IAM roles
for the full list of roles and their associated permissions.
Note: You can't grant roles to allUsers and allAuthenticatedUsers at the
project level.
Enabling access to a function
You can control actions on a function by granting or restricting roles to
individual identities through IAM.
Adding principals and granting roles
Use the gcloud functions add-iam-policy-binding command:
gcloud functions add-iam-policy-binding FUNCTION_NAME \
--member = PRINCIPAL_ID \
--role = ROLE
where FUNCTION_NAME is the function name,
PRINCIPAL_ID is the principal's identifier, usually an email, and
ROLE is the role.
For a list of sources that can provide a PRINCIPAL_ID , see
Principal identifiers ..
For a list of acceptable values for ROLE , see
the IAM roles reference page .
Removing roles from principals
Use the gcloud functions remove-iam-policy-binding command:
gcloud functions remove-iam-policy-binding FUNCTION_NAME \
--member = PRINCIPAL_ID \
--role = ROLE
where FUNCTION_NAME is the function name,
PRINCIPAL_ID is the email address that identifies
the service account, prefaced with serviceAccount: ,
and ROLE is the role.
For a list of acceptable sources for PRINCIPAL_ID , see
Principal identifiers .
For a list of possible values for ROLE , see
the IAM roles reference page .
If the principal has been granted multiple roles, make sure you specify the one
you want to remove.
Bulk addition of principals
Create an IAM policy named, for example, policy.json :
{
"bindings" : [
{
"role" : ROLE ,
"members" : [
PRINCIPAL_ID
]
}
]
}
Use the gcloud functions set-iam-policy command:
gcloud functions set-iam-policy FUNCTION_NAME policy.json
For a list of acceptable sources for PRINCIPAL_ID , see
Principal identifiers .
For a list of acceptable values for ROLE , see
the IAM roles reference page .
Viewing principals
To view principals, use the gcloud functions get-iam-policy command:
gcloud functions get-iam-policy FUNCTION_NAME
Allowing unauthenticated HTTP function invocation
Note: If you created functions using the Cloud Run Admin API, see the
Allowing public (unauthenticated) access
guide instead.
For functions created with the Cloud Functions v2 API, you must specify
allow unauthenticated invocations at or after deployment.
You use a special variant of the approach described earlier to grant unauthenticated
invokers the ability to invoke an HTTP function .
If you are developing functions in a project that is subject to the
Domain Restricted Sharing organization policy
you will be unable to allow unauthenticated invocation of a function.
Note: Event-driven functions
can only be invoked by the event source to which they are subscribed.
At deployment
The gcloud functions deploy command includes a prompt to
help you configure invocation permissions during function creation. It can also
include the --allow-unauthenticated
flag:
gcloud functions deploy FUNCTION_NAME \
--trigger-http \
--allow-unauthenticated \
...
Subsequent deployments of the same function don't change its status, even if
you don't use this flag.
Note: Use of the --allow-unauthenticated flag modifies IAM permissions.
To ensure that unauthorized developers cannot modify function permissions,
the user or service that is deploying the function must have the
cloudfunctions.functions.setIamPolicy permission. This
permission is included in both the Owner and Cloud Functions Admin roles.
See IAM roles
for the full list of roles and their associated permissions.
After deployment
Use the gcloud run services add-iam-policy-binding command to grant the
roles/run.invoker role to the specific function:
gcloud run services add-iam-policy-binding FUNCTION_NAME \
--member = "allUsers" \
--role = "roles/run.invoker"
See the
gcloud run add-iam-policy-binding reference
for more information about these fields.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
