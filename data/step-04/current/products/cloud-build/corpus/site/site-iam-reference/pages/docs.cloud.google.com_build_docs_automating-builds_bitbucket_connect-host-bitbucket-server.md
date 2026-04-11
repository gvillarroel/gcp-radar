---
title: "Connect to a Bitbucket Server host \_|\_ Cloud Build \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-server
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/build/docs/iam-roles-permissions
source_metadata:
  url: https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-server
  title: "Connect to a Bitbucket Server host \_|\_ Cloud Build \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Build
Guides
Send feedback
Connect to a Bitbucket Server host
Stay organized with collections
Save and categorize content based on your preferences.
1st gen
2nd gen
This page explains how to connect a Bitbucket Server
host to Cloud Build. Connecting to a Bitbucket Server host integrates
your Bitbucket Server repositories with Cloud Build. This way, you
can configure build triggers to
build repositories from Bitbucket Server
and build repositories from Bitbucket Server in a private network .
Before you begin
Enable the Cloud Build, Secret Manager, and Compute Engine APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Have your source code ready in a Bitbucket Server repository.
Have either a Dockerfile or a
Cloud Build config file in
your Bitbucket Server source repository.
If you haven't installed a Bitbucket Server instance, then see
Bitbucket Server installation guide for instructions.
Required IAM permissions
To get the permissions that
you need to connect to your Bitbucket Server host,
ask your administrator to grant you the
following IAM roles on your user account:
Cloud Build Editor ( roles/cloudbuild.builds.editor )
Integrations Owner ( roles/cloudbuild.integrations.owner )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
If your Bitbucket Server instance is hosted in a private network, see
Build repositories from Bitbucket Server in a private network
to learn about additional IAM roles required to configure
a host connection.
Create personal access tokens
Before you create a host connection for your Bitbucket Server instance,
create personal access tokens in Bitbucket Server by doing the following:
Sign in to your Bitbucket Server
instance.
Follow the instructions to create HTTP access tokens for your user account .
Create an access token with the repository admin scope to use for
connecting and disconnecting repositories.
Create an access token with the repository read scope to ensure
Cloud Build repositories can access source code in repositories.
Save your token values securely. You'll use them to
connect to your Bitbucket Server repository.
Note: In addition to access tokens for your user account, you can also use
access tokens for projects or repositories. See
Create HTTP access tokens for projects or repositories .
Connect to a Bitbucket Server host
Console
To connect your Bitbucket Server host to Cloud Build
using the Google Cloud console:
Open the Repositories page in the Google Cloud console:
Open the Repositories page
At the top of the page, select the 1st gen tab.
Click Connect Host .
Select Bitbucket Server from the drop-down menu.
You will see the Connect host panel.
Enter the following information to connect your Bitbucket Server instance to Cloud Build:
Region : Select the region for your connection.
Name : Enter a name for your connection.
Host url : Your host URL of your Bitbucket Server instance. For example,
https://bbs.example-test.com:7990 .
Google Cloud API key : Enter the API key used to authenticate your
credentials.
CA Certificate : Your self-signed certificate. Your certificate must not
exceed 10 KB in size and should be in PEM format ( .pem , .cer ,or .crt ). If you leave this section blank, Google Cloud uses a certificate from the default set of certificates .
Username : Your Bitbucket Server account username. This account
should have admin access to the repositories that you want to
connect with Cloud Build.
Read access token : Enter your Bitbucket Server account personal
access token with read permissions.
Admin access token : Enter your Bitbucket Server account
personal access token with admin permissions on projects and
repositories.
Under Network type , select one of the following options:
Public internet : Select this option if your instance is
accessible using the public internet.
Private network : Select this option if your instance is hosted
on a private network.
Project : Select your Google Cloud project ID.
Network : Select your network from the drop-down menu. If you
have not created a network, see Create and manage VPC
networks to learn how to create a network.
IP range : Enter the internal IP range that VMs can be assigned
within a peered network's allocated range.
You can specify the range using the Classless Inter-Domain Routing (CIDR) routing notation in the format STARTING_IP/SUBNET_PREFIX_SIZE . For example, 192.0.2.0/24 has a prefix length of 24. The first 24 bits of the IP range are used as the subnet mask ( 192.0.2.0 ) while the possible hosts addresses range from 192.0.2.0 to 192.0.2.255 .
The value of your prefix length must not exceed /29 . If no
value is specified for the range, a default value of /24 is automatically assigned. If no value is specified for the prefix length, IP addresses are automatically assigned within the peered VPC network. If no value is specified for the IP
address, the IP address is automatically assigned a range
within the peered VPC network.
Note: You can only specify an IP range if you've specified
a Network . If you've specified a Network , the
IP range is optional.
Click Connect Host .
If your Bitbucket Server instance is on a peered network, connecting
your host may take several minutes to complete.
You will be redirected to the Connect Repository panel.
After creating a host connection, your personal access tokens and
webhook secret will be securely stored in Secret Manager.
You can view and manage your secrets on the
Secret Manager
page.
gcloud
To connect your Bitbucket Server host to Cloud Build
using gcloud commands, you must run the
gcloud alpha builds enterprise-config bitbucketserver create
command in your terminal. Unlike connecting your host using the
Google Cloud console, you'll need to manually store your personal
access tokens and webhook secret in Secret Manager before running the following command:
gcloud alpha builds enterprise-config bitbucketserver create
--name = CONFIG_NAME \
--user-name = USERNAME \
--host-uri = HOST_URI \
--admin-access-token-secret-version = ADMIN_ACCESS_TOKEN_SECRET_VERSION \
--read-access-token-secret-version = READ_ACCESS_TOKEN_SECRET_VERSION \
--webhook-secret-secret-version = WEBHOOK_SECRET_SECRET_VERSION \
--api-key = API_KEY \
--peered-network = PEERED_NETWORK \
--peered-network-ip-range = PEERED_NETWORK_IP_RANGE \
--ssl-ca-file = SSL_CA_FILE
Where:
CONFIG_NAME is the name of your
Bitbucket Server configuration.
USERNAME is your Bitbucket Server username.
HOST_URI is the host URI of your Bitbucket Server instance.
ADMIN_ACCESS_TOKEN_SECRET_VERSION is the resource name of your
admin access token stored in Secret Manager. The
expected format for secrets stored in Secret Manager
is projects/${PROJECT_ID}/secrets/${SECRET_NAME}/versions/${VERSION_NUMBER} .
You can specify latest as your version to use the latest version of
your secret. This applies to each resource stored in
Secret Manager.
Note: You may need to grant the Secret Manager role to your
Cloud Build service agent,
service-${PROJECT_NUMBER}@gcp-sa-cloudbuild.iam.gserviceaccount.com . To
learn more, see Granting Secret Manager role to your
service account .
READ_ACCESS_TOKEN_SECRET_VERSION is the resource name of your
read access token stored in Secret Manager.
WEBHOOK_SECRET_SECRET_VERSION is the resource name of your
of your webhook secret stored in Secret Manager.
API_KEY is the Google Cloud API key.
Optional: PEERED_NETWORK is the VPC
network to connect to for your Bitbucket Server instances on-premises.
To learn more, see
Build repositories from Bitbucket Server in a private network .
Optional: PEERED_NETWORK_IP_RANGE is the internal IP
range that VMs can be assigned to within a peered network's allocated range.
Note: You can only specify the --peered-network-ip-range flag when
the --peered-network flag is set. The --peered-network-ip-range flag is
optional when the --peered-network flag is set.
SSL_CA_FILE is the path to a local file that contains
your SSL certificate to use for requests to Bitbucket Server. The certificate should be in PEM format.
API
To connect your Bitbucket Server host to Cloud Build
using the API, use the following JSON template. Unlike connecting your
host using the Google Cloud console, you need to manually store your personal
access tokens and webhook secret in Secret Manager before calling the API:
{
"hostUri" : " HOST_URI " ,
"username" : " USERNAME " ,
"apiKey" : " API_KEY " ,
"secrets" : {
"adminAccessTokenVersionName" : " ADMIN_ACCESS_TOKEN_SECRET_VERSION " ,
"readAccessTokenVersionName" : " READ_ACCESS_TOKEN_SECRET_VERSION " ,
"webhookSecretVersionName" : " WEBHOOK_SECRET_SECRET_VERSION " ,
},
"peeredNetwork" : " PEERED_NETWORK " ,
"peeredNetworkIpRange" : " PEERED_NETWORK_IP_RANGE " ,
"sslCa" : " SSL_CERTIFICATE "
}
Where:
HOST_URI is the host URI of your Bitbucket Server instance.
USERNAME is your Bitbucket Server username.
API_KEY is the Google Cloud API key.
ADMIN_ACCESS_TOKEN_SECRET_VERSION is the resource name of your
admin access token stored in Secret Manager. You
may need to grant the Secret Manager Secret Accessor role to your
Cloud Build service agent,
service-${PROJECT_NUMBER}@gcp-sa-cloudbuild.iam.gserviceaccount.com . To
learn more, see Granting Secret Manager role to your
service account .
Note: The expected format for the resource name for your secret stored in Secret Manager is projects/${PROJECT_ID}/secrets/${SECRET_NAME}/versions/${VERSION_NUMBER} .
You can specify latest as your version to use the latest version of
your secret. This applies to each resource stored in
Secret Manager.
READ_ACCESS_TOKEN_SECRET_VERSION is the resource name
of your read access token stored in Secret Manager.
WEBHOOK_SECRET_SECRET_VERSION is the resource name of
your webhook secret stored in Secret Manager.
Optional: PEERED_NETWORK is the VPC
network to peer to for your Bitbucket Server instances on-premises.
You can specify the range using the Classless Inter-Domain Routing (CIDR)
routing notation in the format STARTING_IP/SUBNET_PREFIX_SIZE . For example,
192.0.2.0/24 has a prefix length of 24. The first 24 bits of the IP range
are used as the subnet mask ( 192.0.2.0 ) while the possible hosts addresses
range from 192.0.2.0 to 192.0.2.225 .
Note: The value of your prefix length must not exceed /29 . If no
value is specified for the range, a default value of /24 is automatically
assigned. If no value is specified for the prefix length, IP addresses
are automatically assigned within the peered VPC network.
Optional: PEERED_NETWORK_IP_RANGE is the internal IP
range that VMs can be assigned to within a peered network's allocated range.
Note: You can only specify the peeredNetworkIpRange flag when
the peeredNetwork flag is set. The peeredNetworkIpRange flag is
optional when the peeredNetwork flag is set.
Optional: SSL_CERTIFICATE is the SSL certificate used for your Bitbucket Server instances on-premises.
Enter the following curl command in your terminal:
curl - X POST - H "Authorization: Bearer " $ ( gcloud auth print - access - token ) - H "Content-Type: application/json; charset=utf-8" https : // cloudbuild . googleapis . com / v1 / projects / PROJECT_ID / locations / REGION / bitbucketServerConfigs / ? bitbucketServerConfigId = CONFIG_NAME - d @config . json
Where:
PROJECT_ID is your Google Cloud project ID .
REGION is the region associated with your Bitbucket Server configuration.
CONFIG_NAME is the name of your Bitbucket Server configuration.
If successful, the response body contains a newly created instance of Operation .
Enter the following curl command in your terminal:
curl -X GET -H "Authorization: Bearer " $( gcloud auth print-access-token ) -H "Content-Type: application/json; charset=utf-8" -H "x-goog-user-project: PROJECT_NUMBER " https :// cloudbuild . googleapis . com / v1 / projects / PROJECT_ID / locations / REGION / operations / OPERATION_ID
Where:
PROJECT_NUMBER is your Google Cloud project number.
PROJECT_ID is your Google Cloud project ID.
REGION is the region associated with your Bitbucket Server configuration.
OPERATION_ID is the ID of your Bitbucket Server configuration creation operation.
You may need to keep running the GetOperation API command until the response contains done: true , which indicates the operation is completed. If the Bitbucket Server configuration is created successfully, you can see the configuration in the response.value field. Otherwise, see the error field for a detailed error report.
What's next
Learn how to connect a Bitbucket Server repository .
Learn how to perform blue-green deployments on Compute Engine .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
