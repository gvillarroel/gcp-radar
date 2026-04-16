---
title: "Connect using an IAM account \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/alloydb/docs/connect-iam
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/connect-iam
  title: "Connect using an IAM account \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Guides
Send feedback
Connect using an IAM account
Stay organized with collections
Save and categorize content based on your preferences.
This page explains the process of logging into an AlloyDB for PostgreSQL instance using
an account prepared with Identity and Access Management (IAM). It illustrates the process
by showing how to perform an IAM-based login using the psql
command-line client.
For an overview of connecting to AlloyDB instances, see
Connection overview .
Before you begin
Your project, cluster, instances, and IAM user accounts all
require preparation before you can log in to an AlloyDB instance
using IAM credentials.
For more information, see Manage IAM
authentication .
Authenticate with an OAuth 2.0 token
A user or an application can authenticate with an AlloyDB database
by following these steps:
If you haven't already done so, authorize the
Google Cloud CLI using the
same user or service account that you want to log in to your
AlloyDB instance with.
Request an OAuth 2.0 token from Google Cloud using the
gcloud auth print-access-token
command :
gcloud auth print-access-token
The Google Cloud prints an OAuth 2.0 token as the output of this
command.
For additional security, you can restrict the token for use with only
AlloyDB authentication by following these alternative steps:
Add the
alloydb.login scope to your current environment's access credentials using the
gcloud auth application-default login
command , if you have not already done so:
gcloud auth application-default login --scopes = https://www.googleapis.com/auth/alloydb.login,https://www.googleapis.com/auth/cloud-platform,https://www.googleapis.com/auth/userinfo.email,openid
Print a restricted OAuth 2.0 token using the gcloud auth application-default print-access-token
command ,
scoping the token only to AlloyDB authentication:
gcloud auth application-default print-access-token –-scopes=https://www.googleapis.com/auth/alloydb.login
Caution: Treat your OAuth 2.0 token as sensitive information. Either store
it securely, or don't store it at all after use.
The OAuth 2.0 token lets you—or anyone—make authenticated requests to
Google Cloud on your behalf. Treat the token with the same level
of security as a password. Either store the token securely, or avoid
storing it at all. The example use of psql later on this page
demonstrates a way to request, use, and discard an OAuth 2.0 token in a
single action.
Log in to an AlloyDB instance with standard PostgreSQL
techniques, using these credentials:
Present the access token you acquired in the previous step as your
password.
For an IAM user account, the database username is the
account's full email address.
For an IAM service account, the database username is the
account's email address without the .gserviceaccount.com suffix.
The following psql command demonstrates one way to log in to an
IAM user on the command line. It assigns the output of gcloud
auth print-access-token to the PGPASSWORD environment variable, which psql
subsequently uses as a database login password.
PGPASSWORD = $( gcloud auth print-access-token ) psql \
-h INSTANCE_ADDRESS \
-U USERNAME \
-d DATABASE
Replace the following:
INSTANCE_ADDRESS : The IP address of the
AlloyDB instance to connect to.
USERNAME : An identifier for the IAM user
to authenticate with the instance.
For an IAM user account, supply the user account's full email
address. For example, kai@altostrat.com .
For an IAM service account, supply the service account's
address without the .gserviceaccount.com suffix. For example, to specify
the service account my-service@my-project.iam.gserviceaccount.com , you
would use the value my-service@my-project.iam here.
DATABASE : The name of the database to connect to.
Note that psql truncates passwords entered on the command line that are longer
than 100 characters. To use psql with an OAuth 2.0 token as a login password,
you must set the PGPASSWORD environment variable as demonstrated in this
example, rather than manually paste it when prompted.
Authenticate automatically
To automatically authenticate an IAM-based AlloyDB
user without the need for an OAuth 2.0 token, you have two options:
AlloyDB Auth Proxy and
AlloyDB Language Connectors .
The IAM account that you use to run the
proxy client or Language Connectors must be the same
account that you added as a database user. For example, if you run your workload
using the IAM user account kai@altostrat.com , then you can use
the proxy client or Language Connectors to
automatically authenticate the kai@altostrat.com database user without
specifying an OAuth 2.0 token. In this example, automatic authentication does
not work with any other database user except for kai@altostrat.com .
Auth Proxy
Using Auth Proxy requires running the AlloyDB Auth Proxy client with the
--auto-iam-authn flag enabled.
For more information about running the Auth Proxy, see
Connect using the AlloyDB Auth Proxy .
Language Connectors
Using Language Connectors requires enabling IAM
authentication programmatically. There is a corresponding option for each
language on
Configure the AlloyDB Language Connectors .
Troubleshoot IAM authentication
To determine the cause of a failed IAM-based authentication
attempt, follow these steps:
In the Google Cloud console, go to the Logs Explorer page:
Go to Logs Explorer
Under Resource type , click AlloyDB instance .
Under Severity , click Alert .
If Alert is not an option, then there are no authentication failures logged within the
selected time window. You may need to adjust the window using the
Logs Explorer controls.
Under Query results , check the log entries for one of the following messages:
Request had invalid authentication credentials.
The access token is invalid.
Caller does not have required permission to use project.
The IAM principal doesn't have the necessary IAM roles or permissions.
The full error message specifies the missing roles or permissions.
IAM principal does not match database user.
The authenticated IAM principal specified by the access token doesn't match the database user that you want to connect as.
To view the principal specified by the token, run the following command:
curl -H "Content-Type: application/x-www-form-urlencoded" -d "access_token= ACCESS_TOKEN " https://www.googleapis.com/oauth2/v1/tokeninfo
Replace ACCESS_TOKEN with the OAuth 2.0 access token.
Request had insufficient scopes.
The access token does not contain either the alloydb.login scope or the cloud-platform scope. At least one of these scopes is required.
What's next
Manage your IAM authentication
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
