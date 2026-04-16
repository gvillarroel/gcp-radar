---
title: "Access environments with Workforce Identity Federation \_|\_ Cloud Composer\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-2/access-environments-with-workforce-identity-federation
knowledge_key: corpus
source_id: site-docs-reference-required-6
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-2/override-airflow-configurations
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-2/access-environments-with-workforce-identity-federation
  title: "Access environments with Workforce Identity Federation \_|\_ Cloud Composer\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

On September 15, 2026 , all Cloud Composer 1 versions and versions 2.0.x of Cloud Composer 2 will reach their planned end of life . You will not be able to use environments with these versions. We recommend planning migration to Cloud Composer 3 . Cloud Composer 2 versions 2.1.x and later are still supported and are not impacted by this change.
Home
Documentation
Data analytics
Cloud Composer
Composer 2 Guides
Send feedback
Access environments with Workforce Identity Federation
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
This page describes how to configure user access to your
Cloud Composer environment with Workforce Identity Federation.
About Workforce Identity Federation in Cloud Composer
Workforce Identity Federation lets you use an external identity
provider (IdP) to authenticate and authorize a workforce—a group of users ,
such as employees, partners, and contractors—using IAM, so
that the users can access Google Cloud services. For more information about
Workforce Identity Federation, see
Workforce Identity Federation .
If Workforce Identity Federation is configured in your project, you can
access your environment in the following ways:
Cloud Composer page in Google Cloud console
Airflow UI
Google Cloud CLI, including running Airflow CLI commands
Cloud Composer API
Airflow REST API
Before you begin
All new Cloud Composer environments created starting from
version 2.1.11 and Airflow version
2.4.3 support
Workforce Identity Federation. You don't need to configure your
environment in any specific way to support
Workforce Identity Federation.
Important: Workforce Identity Federation support in
Cloud Composer doesn't automatically provide a new access
path for external identities to your environment. As long as you don't
configure access through an external identity provider and grant access
permissions to external identities, the external identities can't access
your environment.
Environments created before version
2.1.11 and Airflow version
2.4.3 and upgraded to later versions
don't support Workforce Identity Federation. You can
check if your environment supports Workforce Identity Federation .
Cloud Storage limitations for Workforce Identity Federation
apply to the environment's bucket. In particular, you must enable uniform bucket-level access
on the environment's bucket to let external identities upload their DAGs and
files to this bucket.
Emails sent from Airflow only include the
Airflow UI URL for Google accounts . Because
external identities can only access Airflow UI through the Airflow UI
URL for external identities, the link must be adjusted (changed to the URL
for external identities).
Cloud Composer doesn't support using
third-party identities in ingress and egress rules to allow
Apache Airflow UI operations. However, you can use the
ANY_IDENTITY identity type in ingress and egress rules to allow access to
all identities, including third-party identities. For more information
about the ANY_IDENTITY identity type, see
Ingress and egress rules .
Set up access to your environment with Workforce Identity Federation
This section describes steps to configure access for external identities to
your Cloud Composer environment.
Configure your identity provider
Configure Workforce Identity Federation for your identity provider by
following the Configure Workforce Identity Federation guide.
Grant IAM roles to external identities
In Identity and Access Management, grant IAM roles to sets of external
identities, so that they can access and interact with your environment:
For a list of roles specific to Cloud Composer, see
Grant roles to users . For example, the
Environment User and Storage Object Viewer
( composer.environmentAndStorageObjectViewer ) role allows a user to
view environments, access the Airflow UI, view and trigger DAGs from
the DAG UI , and view objects in environment buckets.
For instructions about assigning these roles to external users, see
Grant IAM roles to principals .
For a format of representing external identities in IAM
policies, see
Represent workforce pool users in IAM policies .
Check that new users receive correct Airflow roles in Airflow UI Access Control
Cloud Composer handles Airflow users for external identities in
the same way as for Google account users. Instead of an email address, a
principal identifier
is used. When an external identity accesses Airflow UI for the first time, an
Airflow user is automatically registered in the Airflow role-based access
control system with the default role .
Check that new users receive correct Airflow roles in
Airflow UI Access Control . You have two options:
Let external identities receive the default role after they access Airflow
UI for the first time. If required, Airflow admin users can then change
this role to a different one.
Preregister external identities with a set
of required roles by adding Airflow user records with the user name and
email fields set to their principal identifiers. In this way, external
identities get the role that you assigned to them, not the default role.
Important: Airflow UI Access Control supports only the
identifier format for single identities .
Groups and identities with a specific attribute are not supported.
Check if an environment supports Workforce Identity Federation
Note: Environments created before version
2.1.11 and Airflow version
2.4.3 and upgraded to later versions
don't support Workforce Identity Federation.
To check if your environment supports Workforce Identity Federation, run the
following Google Cloud CLI command. If the output shows a URI, then your
environment supports Workforce Identity Federation.
gcloud composer environments describe ENVIRONMENT_NAME \
--location LOCATION \
--format = "value(config.airflowByoidUri)"
Replace:
ENVIRONMENT_NAME with the name of the environment.
LOCATION with the region where the environment is located.
Example:
gcloud composer environments describe example-environment \
--location us-central1 \
--format = "value(config.airflowByoidUri)"
Access Cloud Composer page in Google Cloud console
Google Cloud Workforce Identity Federation console
provides access to the Cloud Composer page.
From the Composer page in Google Cloud Workforce Identity Federation
console, you can access the UI for managing environments,
Cloud Composer logs, monitoring and DAG UI.
All links to Airflow UI in the federated console point to the Airflow UI
access point for external identities.
Environments in versions earlier than
2.1.11 and or Airflow versions earlier
than 2.4.3 might have their Airflow UI
links marked as "Not available". This indicates that this environment doesn't
support Workforce Identity Federation users in Airflow UI. Airflow UI for
this environment can only be accessed with Google Accounts.
Access Airflow UI
Note: Make sure that external identities have
an IAM role with
the composer.environments.get permission on their provider, groups, or
individual identities. For more information about assigning
IAM roles to external identities, see
Grant IAM roles to principals .
Cloud Composer environments have two URLs for the Airflow UI: one
for Google accounts and another for external identities. External identities
must access Airflow UI through the URL for external identities.
The URL for external identities is
https://<UNIQUE_ID>.composer.byoid.googleusercontent.com .
The URL for Google accounts is https://<UNIQUE_ID>.composer.googleusercontent.com .
Note: Service accounts (you can recognize them by identifiers that end in .iam.gserviceaccount.com )
are considered Google accounts. Use the .composer.googleusercontent.com
address if you want to work with Airflow using a Google service account.
See Access Airflow API using a service account .
Only users that are authenticated with external identities can access the URL
for external identities. If a user visits the URL for external identities
while not logged in, they are first redirected to the authentication portal
where they specify their workforce pool provider name, then they are
redirected to their identity provider to sign in, and finally they are
redirected to the Airflow UI of the environment.
Access DAG UI in Google Cloud console
The DAG UI is available for external identity users
as part of the federated console . You can
control the access with IAM policies .
The Airflow role-based access in the environments with full
Workforce Identity Federation support is also taken into account and can be
used to limit which DAGs are visible for individual users by setting up roles,
as described in Using Airflow UI Access Control .
Access Google Cloud CLI
Note: Make sure that external identities have IAM roles on
their provider, groups, or individual identities that
permit them to run gcloud and Airflow CLI commands .
For more information about assigning IAM roles to
external identities, see
Grant IAM roles to principals .
To access your environment through Google Cloud CLI, external identities must
do the following:
Sign in with Google Cloud CLI using an external identity.
Run gcloud composer environments commands.
Access Cloud Composer API
Cloud Composer API can be used with external identities to manage all
Cloud Composer environments with the supported authentication
methods such as OAuth tokens.
Access Airflow REST API
Airflow REST API is available at the
endpoint for external identities with the supported
authentication methods such as OAuth tokens.
To get the URL of the endpoint for external identities for your environment,
run the following Google Cloud CLI command:
gcloud composer environments describe ENVIRONMENT_NAME \
--location LOCATION \
--format = "value(config.airflowByoidUri)"
Replace:
ENVIRONMENT_NAME with the name of the environment.
LOCATION with the region where the environment is located.
Example:
gcloud composer environments describe example-environment \
--location us-central1 \
--format = "value(config.airflowByoidUri)"
What's next
Access control with IAM
Using Airflow UI Access Control
Access Airflow CLI
Access Airflow REST API
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
