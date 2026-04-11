---
title: "Request a certificate using Public CA and an ACME client \_|\_ Certificate\
  \ Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/certificate-manager/docs/public-ca-tutorial
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/certificate-manager/docs/public-ca-tutorial
  title: "Request a certificate using Public CA and an ACME client \_|\_ Certificate\
    \ Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Certificate Manager
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Request a certificate using Public CA and an ACME client
This tutorial walks you through requesting a TLS certificate with
Public Certificate Authority by using the Google Cloud CLI. For information about the root and
intermediate CAs used by Public Certificate Authority, see
Google Trust Services . There is no charge
for requesting certificates from Public CA.
Before you begin
Install the Google Cloud CLI.
After installation,
initialize the Google Cloud CLI by running the following command:
gcloud init
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
Note: You can run the gcloud CLI in
the Google Cloud console without installing the Google Cloud CLI. To run the
gcloud CLI in the Google Cloud console,
use
Cloud Shell .
Create or select a Google Cloud project .
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
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Make sure that you have the Public CA External Account Key
Creator ( roles/publicca.externalAccountKeyCreator ) IAM role.
To grant this role, run the following command:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member=user: USER \
--role=roles/publicca.externalAccountKeyCreator
Replace the following:
PROJECT_ID : the ID of your Google Cloud project
USER : the unique identifier of the user to whom you want to
assign the IAM role
For information about granting an IAM role, see Manage access
to projects, folders, and
organizations .
Enable the Public CA API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable publicca.googleapis.com
Install a client
To get started using Public CA, you must install an
ACME client . The
following instructions use
Certbot
as the ACME client. You can use any other ACME client if the client supports external account binding (EAB).
To install Certbot, see the Certbot instructions .
Make sure to point your client to the Public CA server. The first
time the ACME client interacts with Public CA, the client generates
a new key pair and sends the public key to Public CA.
Request an EAB key ID and HMAC
After you install an ACME client, you must register your ACME account
with Public CA to request certificates from Public CA.
An EAB secret can help you register your ACME account with
Public CA. An EAB secret consists of a key ID and a hash-based
message authentication code (HMAC).
You can use the Public CA API or the Google Cloud CLI to request an EAB secret.
To request an EAB key ID and HMAC, run the following command:
gcloud publicca external-account-keys create
This command returns an EAB secret that is valid on the production
environment of Public CA. In the response body, the keyId
field contains the EAB key ID, and the b64MacKey field contains the EAB HMAC.
You must use an EAB secret within 7 days of obtaining it. The EAB secret is
invalidated if you don't use it within 7 days. The ACME account registered
by using an EAB secret has no expiration.
Register an ACME account
This section explains how to register an ACME account with
Public CA by providing the EAB secret that you just obtained.
Use a regular ACME client to register an ACME account, and provide the
EAB key ID and HMAC while registering.
Note: If you are using the API, know that the HMAC is base64
URL-encoded ,
which is slightly different from the regular base64 encoding.
To register an ACME account with Public CA and bind the ACME
account to the Google Cloud project that you used to request the EAB secret, run the
following command:
certbot register \
--email " EMAIL_ADDRESS " \
--no-eff-email \
--server " SERVER " \
--eab-kid " EAB_KID " \
--eab-hmac-key " EAB_HMAC_KEY "
Replace the following:
EMAIL_ADDRESS : your email address
SERVER : the ACME directory URL for the
production or staging environment
EAB_KID : the EAB key ID
EAB_HMAC_KEY : the EAB HMAC key
The following table provides the description and the ACME directory URL for the
production and staging environment:
Environment
Description
ACME directory URL
Production
The production environment lets you obtain publicly trusted certificates.
https://dv.acme-v02.api.pki.goog/directory
Staging
The staging environment returns certificates that are not publicly trusted.
The staging environment performs the same validation checks as the production
environment. You can use the staging environment for integration or any other
kind of testing.
https://dv.acme-v02.test-api.pki.goog/directory
You can only register one ACME account with an EAB secret. After you have
registered an ACME account by using an EAB secret, the EAB secret becomes invalid
and you can't reuse it. If you want to register multiple ACME accounts, you must
request a unique EAB secret for each of the accounts.
Request certificates
After Public CA validates your control of the certificate target
and acknowledges that your ACME client works as expected to perform
certificate management operations, you can use the regular ACME workflows to
request, renew, and revoke certificates. You can perform these operations by using
your ACME client. To request and renew a certificate, you must complete
an ACME challenge ,
such as the manual DNS challenge.
To use the manual DNS challenge to request a certificate, run the following
command:
certbot certonly \
--manual \
--preferred-challenges "dns-01" \
--server " SERVER " \
--domains " DOMAINS "
Replace the following:
SERVER : the ACME directory URL for the production or staging
environment
DOMAINS : a comma-separated list of domains for which you are
requesting certificates
Clean up
Caution: Deleting a Google Cloud project invalidates all the ACME accounts that you
have linked to the project. After your Google Cloud project is deleted,
you will not be able to renew or issue certificates.
If you no longer need certificates for your domains,
delete the project that you created.
Staging
You can use the staging environment of Public CA to request
certificates for testing purposes. The certificates issued by the staging
environment chain up to a test root CA .
Certificates from the staging environment will not be trusted by Browsers or other
clients that have not been configured to trust the staging root certificate. To obtain an EAB secret that is valid on the staging environment,
override the API endpoint to use the endpoint for the staging environment:
gcloud config set api_endpoint_overrides/publicca https://preprod-publicca.googleapis.com/
Then run the account key creation command to create a staging key:
gcloud publicca external-account-keys create
To revert to the endpoint for the production environment, run the following
command:
gcloud config unset api_endpoint_overrides/publicca
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple architectures, tutorials, or quickstarts, reusing projects
can help you avoid exceeding project quota limits.
Delete a Google Cloud project:
gcloud projects delete PROJECT_ID
What's next
Public Certificate Authority
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
