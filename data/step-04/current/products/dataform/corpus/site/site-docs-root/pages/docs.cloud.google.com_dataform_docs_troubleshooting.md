---
title: "Troubleshoot Dataform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataform/docs/troubleshooting
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dataform/docs
source_metadata:
  url: https://docs.cloud.google.com/dataform/docs/troubleshooting
  title: "Troubleshoot Dataform \_|\_ Google Cloud Documentation"
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
Troubleshoot Dataform
Stay organized with collections
Save and categorize content based on your preferences.
This document shows you how to resolve issues with Dataform.
Access to BigQuery is denied
The following error occurs when you trigger a pipeline invocation before
granting Dataform access to BigQuery:
Access Denied: Project PROJECT_ID : User does not have bigquery.jobs.create permission in project PROJECT_ID .
To resolve this error, grant Dataform access to
BigQuery .
Access token for a remote repository is rejected
The following error occurs when your authentication token for a connected
third-party repository does not have access to that repository:
The access token for remote repository REPOSITORY_NAME was rejected
To resolve this error, check required permissions in your Git provider and
update the Secret Manager authentication token accordingly. For more
information about authenticating third-party Git repositories in
Dataform, see Connect to a third-party Git
repository .
BigQuery quota is exceeded
The following error occurs when the number of API requests that
Dataform sends to BigQuery exceeds the BigQuery
quota:
Quota exceeded: Your user_method exceeded quota for concurrent api requests
per user per method.
To resolve this error, reduce the number of parallel queries to less than 250 in
the following ways:
In Dataform, categorize actions with tags ,
and run only selected tags
at a time.
In Dataform, introduce dependencies between actions.
In Dataform, divide executions of actions between different
Google Cloud projects.
For instructions to resolve this error in BigQuery, see Troubleshoot
quota and limit
errors .
BigQuery query concurrency limit is exceeded
The following error occurs when the number of concurrent queries run to
BigQuery exceeds the BigQuery query concurrency
limit :
Exceeded rate limits: too many concurrent queries for this project_and_region
To resolve this error, reduce the number of parallel queries to less than 250 in
the following ways:
In Dataform, categorize actions with tags ,
and run only selected tags
at a time.
In Dataform, introduce dependencies between actions.
In Dataform, divide executions of actions between different
Google Cloud projects.
For instructions to resolve this error in BigQuery, see Troubleshoot
quota and limit
errors .
BigQuery pipeline invocation errors
The following errors occur during execution of a workflow to
BigQuery:
Pipeline invocation errors that begin with BigQuery error
messages .
To resolve these errors, see BigQuery error
messages .
Conflicting includeDependentAssertions properties
The following error occurs during compilation when the
includeDependentAssertions parameter is set for the same
action with different values within one file:
Conflicting "includeDependentAssertions" properties are not allowed. Dependency
dependencyName has different values set for this property.
To resolve this error, edit the file and remove conflicting repetitions of the
includeDependentAssertions parameter.
For more information about using the includeDependentAssertions parameter
to set assertions as dependencies, see
Set the assertions of a selected action as dependencies .
Compilation is failing
The following errors occur during compilation due to size or number of compiled
queries:
Compilation timed out. Reduce the complexity of your project to ensure it
can compile within limits.
Compilation exceeded its allowed heap memory limits. Reduce the complexity
of your project to ensure it can compile within limits.
Compilation exceeded its allowed ArrayBuffer or string memory limits.
Reduce the complexity of your project to ensure it can compile within
limits.
To resolve these errors, follow these steps:
Update Dataform core to the latest
version.
Inspect your workflow to identify and reduce inefficiencies.
Reduce the size of SQL queries.
Reduce the amount of JavaScript operations in memory, for example:
config { config {type: "table" }}
js {
const tooBig = new Uint8Array(110_000_000);
}
SELECT ...
Split the repository .
For more information about Dataform compilation resource limits, see
Quotas and limits .
@dataform/core dependency errors
The following errors occur during compilation if the dataform-core dependency
in package.json is outdated:
Failed to resolve @dataform/core
@dataform/core version should be X.X.X or newer
The @dataform/core dependency is required in the package.json . When you
initialize the first workspace in your repository, Dataform
automatically populates package.json with the current version of
@dataform/core . You need to update @dataform/core to the latest version as
it comes out.
To resolve these errors,
update @dataform/core to the latest version .
Failure to resolve dataform.json
The following error occurs when you initialize a Dataform workspace,
but the initialization process fails to install all packages:
Uncaught Error: Failed to resolve dataform.json
To resolve this error, in your workspace, open package.json
and click Install packages .
Failure to resolve workflow_settings.yaml
The following error occurs when you initialize a Dataform workspace,
but the initialization process fails to install all packages:
Uncaught Error: Failed to resolve workflow_settings.yaml
To resolve this error, in your workspace, open workflow_settings.yaml and
click Install packages .
git+ package targets are not supported
The following error occurs when you define packages in package.json with
targets prefixed with git+ :
'git+' prefixed package targets are not currently supported. However,
in most cases they can be used via a '.tar.gz' suffixed target instead.
Dataform does not support package targets prefixed with git+ .
To resolve this error, generate a tar.gz URL of the package and update the
package target in package.json . For more information about installing packages
in Dataform, see Install a package .
End user credentials permission denied
The following error occurs when you run your workload using Google Account user
credentials, but Dataform does not have the necessary permissions:
Dataform does not have the necessary permissions to run your workload using end user credentials. Error details: Account restricted: https://accounts.google.com/info/servicerestricted?...
This error can occur if your organization uses Context-Aware Access rules that
restrict access to Google Cloud services based on user identity and context.
To resolve this error, you might need to update your Context-Aware Access
configuration to allow Dataform to use Google Account user credentials.
To do this, you need to exempt Dataform's OAuth client ID in your
access level configuration. For details on exempting applications, see
Configure access levels for supported applications .
To obtain the OAuth client ID for Dataform, contact Cloud Customer Care.
Package installation times out
The following error occurs when the size of packages defined in package.json
exceeds the
maximum size of NPM dependencies :
API request error: Package installation timed out
To resolve this error, remove redundant packages from package.json . Make sure
the package.json file does not contain @dataform/cli , and that the total
size of defined NPM dependencies does not exceed 200Mb.
If your
release configurations
reference Git commitishes, make sure that the package.json files at their
targets are valid.
Permission denied to act as a service account
The following error occurs when strict act-as mode is enabled and the principal
performing the action lacks the iam.serviceAccounts.actAs permission on the
effective service account:
Permission denied: Principal CALLER_EMAIL is missing 'iam.serviceAccounts.actAs' permission on service account SERVICE_ACCOUNT_EMAIL .
This error can occur during the following actions:
Creating or updating a repository.
Creating or updating a workflow configuration.
Creating a workflow invocation.
Updating a release configuration.
To resolve this error, grant the
Service Account User role
( roles/iam.serviceAccountUser ) to the principal on the effective service
account. For more information, see
Grant the required IAM roles .
Service account not visible in the drop-down menu
When configuring a repository or workflow invocation, the Service account
menu might not list an existing custom service account.
Dataform uses the Identity and Access Management API to list service accounts. This
requires the iam.serviceAccounts.list permission at the project level.
To resolve this issue, do one of the following:
Click Enter manually and enter the service account ID.
Ask your project administrator to grant you the
View Service Accounts role
( roles/iam.serviceAccountViewer ) or another role that includes the
iam.serviceAccounts.list permission on the project.
Private package registry cannot be reached
The following error occurs when Dataform authentication for a private
package expires:
Permission denied when fetching one or more npm packages. Please verify that
private registry authentication details are valid for each npm registry
To resolve this error, verify that private registry authentication details are
valid for each NPM registry. For more information, see Authenticate a private
package .
Remote repository cannot be reached
The following error occurs due to Git flakiness or when the third-party
repository connection was not set up correctly:
Remote repository REPOSITORY_NAME could not be reached.
To resolve this error, verify that all of the steps listed in Connect to a
third-party Git repository were followed.
In particular, confirm that your Git repository host is accessible from the
public internet. Also, validate that the authentication token or private key is
correct and has the required permissions to access the repository.
Remote repository cannot be reached: generic::invalid_argument
The following error occurs on the Release configurations details page when a
scheduled release occasionally encounters a slow, flaky, or dropped GitHub,
GitLab, or Bitbucket connection:
generic::invalid_argument: Remote repository ' REMOTE_REPOSITORY_URL ' could not be reached.
There is no need to take any action. Unless GitHub, GitLab, or Bitbucket Cloud
issues persist, the subsequent scheduled releases can be successful.
Secret for a remote repository cannot be reached
The following error occurs when your Dataform service agent or
service account can't access your Secret Manager secret for a connected
third-party repository:
Dataform's service account is unable to reach the configured secret.
Make sure the secret exists and is shared with your Dataform service account:
SERVICE_ACCOUNT_ID .
To resolve this error, do the following:
Verify that your Dataform service agent or service account has
access to the secret .
Exclude the secret from your VPC-SC service perimeter. Dataform
does not support VPC-SC at this time.
Unknown argument: tags
The following error occurs when your version of the
Dataform CLI
doesn't recognize the tags argument:
Unknown argument: tags
To resolve this error, do the following:
Update the version of the
CLI
to 3.0.0 or later. Always test new package versions in a
non-production environment before deploying in your production environment.
As a best practice, always use the latest available version of the
Dataform core package.
Explicitly specify the package version in
package.json , for example, 3.0.0 . Don't use other
dependencies options
of package.json , for example, >version .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
