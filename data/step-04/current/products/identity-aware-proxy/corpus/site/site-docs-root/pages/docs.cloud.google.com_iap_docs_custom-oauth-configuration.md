---
title: "Use custom OAuth clients with IAP \_|\_ Identity-Aware Proxy \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/iap/docs/custom-oauth-configuration
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/iap/docs
source_metadata:
  url: https://docs.cloud.google.com/iap/docs/custom-oauth-configuration
  title: "Use custom OAuth clients with IAP \_|\_ Identity-Aware Proxy \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Identity-Aware Proxy
Guides
Send feedback
Use custom OAuth clients with IAP
Stay organized with collections
Save and categorize content based on your preferences.
This document describes when and how to use custom OAuth clients for
Identity-Aware Proxy (IAP) .
By default, IAP uses Google-managed OAuth clients to authenticate
users. Google-managed OAuth clients can only be used to manage access for
internal users that are within an organization.
You must use a custom OAuth configuration to do the following:
Manage access to IAP-enabled applications for external users
that are outside of your organization.
Manage access to web applications that are in projects that aren't in a
Google Cloud organization.
Display custom brand information in consent screens during authentication.
You can configure custom OAuth clients either on IAP
or directly on your platform .
When you use custom OAuth clients, you must configure the OAuth consent screen.
For custom branding to appear in the consent screen, you must submit your
application for Google verification. For more information about the verification
process, see Setting up your OAuth consent screen .
When you configure custom OAuth clients, you are responsible for creating and
managing the credentials, which includes securely storing the client secret and
sharing it with authorized clients when necessary.
Compare Google-managed OAuth clients and custom OAuth clients
Google-managed OAuth clients cannot programmatically access
IAP-protected applications. However, IAP-protected
applications that use the Google-managed OAuth client can still be accessed
programmatically using a separate OAuth client configured through the
programmatic_clients
setting or a service account JWT .
The following table provides a comparison between the Google-managed OAuth
client and a custom OAuth client.
Google managed OAuth client
Custom OAuth client
Users
Internal only
Internal and External
Brand
Google Cloud brand
Customer owned brand
OAuth configuration
Google configured
Customer configured
OAuth credentials
Google managed
Customer managed
Application access
Browser flow only
Browser flow and Programmatic access
Important: The Google-managed OAuth client doesn't create a new OAuth client and
secret for every application. Instead, it uses an internal Google-managed
client.
Configure the branding page
To configure the custom branding page using the Google Cloud console, do the
following:
In the Google Cloud console, go to the OAuth Branding page:
Go to Branding
Click Get started .
In App name , enter the name of the application for
the consent screen.
In User support email , enter the administrator email
address for support.
For Audience , select Internal to restrict access to
users within your organization or External to allow access
to users that are outside of your organization.
In Contact information , enter the administrator email to
contact for the apps that are protected by the OAuth clients.
You configure the OAuth clients in a later step.
To create the OAuth configuration, click Create .
Configure custom OAuth clients in IAP
This section describes how to set up custom OAuth clients in IAP.
Create the custom OAuth client
This section describes how to create custom OAuth clients by using the
Google Cloud console. You can set up custom IAP OAuth clients
at any level in the resource hierarchy.
To create custom OAuth clients for a resource using the Google Cloud console,
do the following:
In the Google Cloud console, go to the IAP page.
Go to IAP
In the Applications tab, in the list of resources, find the
resource that you want to configure.
For project-level resources, do the following:
Create the OAuth client using the Google Cloud console :
In the Actions column, click more_vert
More options > Settings .
In the Settings dialog, select Custom OAuth .
If you haven't configured a consent screen, do the following:
Click Configure consent screen .
Follow the instructions to configure the branding page
that are provided earlier in this document.
In the IAP settings dialog, click Auto Generate
Credentials . IAP generates a new OAuth client and
secret to use with this resource. In Google Auth Platform, the
Authorized redirect URIs field contains an entry in the following
format:
https://iap.googleapis.com/v1/oauth/clientIds/ CLIENT_ID :handleRedirect
To access the client ID and secret, click Download credentials .
The credentials are saved in a JSON-formatted file. Because the file
contains sensitive credentials for accessing resources,
make sure that the file is secured or deleted.
To save the IAP OAuth configuration and apply the OAuth
client to IAP, click Save .
Apply custom OAuth clients to IAP
This section describes how to apply OAuth clients to IAP. You can
use this method instead of applying the clients directly on your platform.
Important: We recommend that App Engine and backend service users use
the legacy configuration method for custom OAuth clients .
If you use the method described in this section, your services won't be visible
in the IAP UI.
To create the custom OAuth client , follow the
Google Cloud console instructions provided earlier in this document.
Apply the custom OAuth client.
gcloud
To apply the custom OAuth client using the gcloud CLI, do the
following:
Create a settings YAML file.
cat iap-oauth.yaml
accessSettings:
oauthSettings:
clientId: CLIENT_ID
clientSecret: CLIENT_SECRET
EOF
Replace the following:
CLIENT_ID : The client ID from the OAuth
credentials that you generated earlier.
CLIENT_SECRET : The client secret from the OAuth
credentials that you generated earlier.
To set the OAuth configuration, do one of the following:
To set the OAuth configuration at the project level, run the
following command:
gcloud iap settings set iap-oauth.yaml
To set the configuration at another level of the resource hierarchy,
use one of the following flags instead of the --project flag.
Setting custom OAuth clients at a level of the resource hierarchy
provides the same custom branding to all of the services that run
within that level.
* < code > -- folder = < var>FOLDER_ID < / var >< / code >
* < code > -- organization = < var>ORGANIZATION_ID < / var >< / code >
To set the configuration on a specific service, run the following
command:
gcloud iap settings set iap-oauth.yaml \
--project = PROJECT_ID \
--resource-type = RESOURCE_TYPE \
--region = REGION \
--service = SERVICE_NAME
Replace the following:
PROJECT_ID : the ID of the project
resource. To set the configuration at another level, use one of
the following flags instead of the --project flag:
--folder= FOLDER_ID
--organization= ORGANIZATION_ID
RESOURCE_TYPE : replace with one of the following
resource types, depending on the resource:
app-engine
backend-services
cloud-run
compute
folder
forwarding-rule
iap_web
organization
REGION : the region where you run your
Cloud Run service.
SERVICE_NAME : The name
of your service.
Terraform
To apply the custom OAuth client using Terraform, do the following:
resource "google_iap_settings" "iap_settings" {
name = IAP_RESOURCE_NAME
access_settings {
oauth_settings {
oauth_client_id = CLIENT_ID
oauth_client_secret = CLIENT_SECRET
}
}
}
Replace the following:
IAP_RESOURCE_NAME : the resource name of the
iap_settings resource for the service, which has the following format:
projects/ PROJECT_NUMBER /iap_web/ REGION /services/ SERVICE_NAME
CLIENT_ID : the client ID from the OAuth
credentials that you generated earlier
CLIENT_SECRET : the client secret from the OAuth
credentials that you generated earlier
REST API
Create a settings JSON file.
cat iap-oauth.json
{
"accessSettings": {
"oauthSettings": {
"clientId": " CLIENT_ID ",
"clientSecret": " CLIENT_SECRET "
}
}
}
EOF
Replace the following:
CLIENT_ID : The client ID from the OAuth
credentials that you generated earlier.
CLIENT_SECRET : The client secret from the OAuth
credentials that you generated earlier.
Apply the settings file.
curl -X PATCH \
-H "Authorization: Bearer $(gcloud auth print-access-token)"
-H "Content-Type: application/yaml" \
"https://iap.googleapis.com/v1/projects/cb-managed-ingress-demo/iap_web/forwarding_rule-us-central1/services/psc-fr:iapSettings?update_mask=iapSettings.accessSettings.oauthSettings.oauthClientId,iapSettings.accessSettings.oauthSettings.oauthClientSecret" \
-d @iap-oauth.json
To test that your web applications are protected by IAP with the
OAuth clients, see Test access .
Legacy configuration of custom OAuth clients on a resource
The following sections describe legacy methods to configure custom OAuth clients
in IAP for certain resource types. You can skip this
section if you used the method described earlier in this document .
App Engine
This section describes how to enable custom OAuth clients on App Engine.
gcloud
Before you set up your project and IAP, you need an up-to-date version of
gcloud CLI. For instructions on how to install the gcloud CLI,
see Install the gcloud CLI .
To authenticate, use the Google Cloud CLI and run the following command.
gcloud auth login
To sign in, follow the URL that appears.
After you sign in, copy the verification code that appears and paste it in the command line.
Run the following command to specify the project that contains the resource that you want to protect with IAP.
gcloud config set project PROJECT_ID
Follow the instructions in
Creating OAuth clients for IAP
to configure the OAuth consent screen and create the OAuth client.
Save the OAuth client ID and secret.
To enable IAP, run the following command.
gcloud iap web enable \
--oauth2-client-id= CLIENT_ID \
--oauth2-client-secret= CLIENT_SECRET \
--resource-type=app-engine
After you enable IAP, you can use the gcloud CLI to modify the
IAP access policy using the IAM role
roles/iap.httpsResourceAccessor . Learn more about
managing roles and permissions .
API
Follow the instructions in Creating OAuth clients for IAP to configure the OAuth consent screen and create the OAuth client.
Save the OAuth client ID and secret.
Run the following command to prepare a settings.json file.
cat << EOF > settings.json
{
"iap":
{
"enabled": true,
"oauth2ClientId": " CLIENT_ID ",
"oauth2ClientSecret":" CLIENT_SECRET "
}
}
EOF
Run the following command to enable IAP.
curl -X PATCH \
-H "Authorization: Bearer $(gcloud auth application-default print-access-token)" \
-H "Accept: application/json" \
-H "Content-Type: application/json" \
-d @settings.json \
"https://appengine.googleapis.com/v1/apps/ PROJECT_ID ?updateMask=iap"
After you enable IAP, you can use the Google Cloud CLI to modify the
IAP access policy using the IAM role
roles/iap.httpsResourceAccessor . Learn more about
managing roles and permissions .
GKE
This section describes how to enable custom OAuth clients on
GKE.
Configure the BackendConfig
If you are running GKE clusters version 1.24 or later, you can configure IAP and GKE by using the Kubernetes Gateway API. See Configure IAP for instructions.
Follow the instructions in Creating OAuth clients for IAP to configure the OAuth consent screen and create the OAuth client.
Create a Kubernetes Secret to wrap the OAuth client.
kubectl create secret generic MY_SECRET --from-literal=client_id= CLIENT_ID \
--from-literal=client_secret= CLIENT_SECRET
Replace the following:
MY_SECRET : The name of the secret to create
CLIENT_ID : The OAuth client ID
CLIENT_SECRET : The OAuth client secret
You should receive confirmation, like the following output, that the Secret was successfully created:
secret " MY_SECRET " created
Add the OAuth credentials to the BackendConfig.
apiVersion: cloud.google.com/v1
kind: BackendConfig
metadata:
name: CONFIG_DEFAULT
namespace: my-namespace
spec:
iap:
enabled: true
oauthclientCredentials:
secretName: MY_SECRET
Enable IAP by associating Service ports with your BackendConfig. See Associating BackendConfig with your Ingress . One way to make this association is to make all ports for the service default to your BackendConfig, which you can do by adding the following annotation to your Service resource:
metadata:
annotations:
beta.cloud.google.com/backend-config: '{"default": " CONFIG_DEFAULT "}}'
After you enable IAP, you can use the gcloud CLI to modify the
IAP access policy using the IAM role
roles/iap.httpsResourceAccessor . Learn more about
managing roles and permissions .
Troubleshooting
If the secretName you referenced doesn't exist or isn't structured
properly, one of the following error messages will display:
BackendConfig default/config-default is not valid: error retrieving
secret "foo": secrets "foo" not found. To resolve this error, make sure that you've
created the Kubernetes Secret correctly as described in step 2.
BackendConfig default/config-default is not valid: secret "foo" missing
client_secret data. To resolve this error, make sure that you've
created the OAuth credentials
correctly. Also, make sure that you referenced the correct client_id and client_secret keys.
Load balancer backend service
For users of Compute Engine and Cloud Run, this section
describes how to set up OAuth clients in IAP for the load
balancer backend service.
gcloud
Before you set up your project and IAP, you need an up-to-date version of the
gcloud CLI. For instructions on how to install the gcloud CLI,
see Install the gcloud CLI .
To authenticate, use the Google Cloud CLI and run the following command.
gcloud auth login
To sign in, follow the URL that appears.
After you sign in, copy the verification code that appears and paste it in the command line.
Run the following command to specify the project that contains the resource that you want to protect with IAP.
gcloud config set project PROJECT_ID
Follow the instructions in Creating OAuth clients for IAP. to configure the OAuth consent screen and create the OAuth client.
Save the OAuth client ID and secret.
To enable IAP, run either the globally or regionally scoped command.
Global scope
gcloud compute backend-services update BACKEND_SERVICE_NAME \
--global \
--iap=enabled,oauth2-client-id= CLIENT_ID ,oauth2-client-secret= CLIENT_SECRET
Regional scope
gcloud compute backend-services update BACKEND_SERVICE_NAME \
--region REGION_NAME \
--iap=enabled,oauth2-client-id= CLIENT_ID ,oauth2-client-secret= CLIENT_SECRET
After you enable IAP, you can use the gcloud CLI to modify the
IAP access policy using the IAM role
roles/iap.httpsResourceAccessor . Learn more about
managing roles and permissions .
API
Follow the instructions in Creating OAuth clients for IAP to configure the OAuth consent screen and create the OAuth client.
Save the OAuth client ID and secret.
Run the following command to prepare a settings.json file.
cat << EOF > settings.json
{
"iap":
{
"enabled": true,
"oauth2ClientId": " CLIENT_ID ",
"oauth2ClientSecret": " CLIENT_SECRET "
}
}
EOF
Run the following command to enable IAP.
curl -X PATCH \
-H "Authorization: Bearer $(gcloud auth application-default print-access-token)" \
-H "Accept: application/json" \
-H "Content-Type: application/json" \
-d @settings.json \
"https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID / REGION /backendServices/ BACKEND_SERVICE_NAME "
After you enable IAP, you can use the gcloud CLI to modify the
IAP access policy using the IAM role
roles/iap.httpsResourceAccessor . Learn more about
managing roles and permissions .
Test access
After you configure your custom OAuth client, you can test that
IAP is using it to protect your service by doing the following:
In the IAP page, in the Applications tab, view the
applications that IAP manages.
Access the URL of one of the applications. If you're accessing the
application for the first time since you configured the consent screen,
you see the consent screen that you configured earlier.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
