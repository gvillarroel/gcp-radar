---
title: "Create a Private Service Connect instance \_|\_ Secure Source Manager \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/secure-source-manager/docs/create-private-service-connect-instance
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/secure-source-manager/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/secure-source-manager/docs/create-private-service-connect-instance
  title: "Create a Private Service Connect instance \_|\_ Secure Source Manager \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Secure Source Manager
Guides
Send feedback
Create a Private Service Connect instance
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to create a Private Service Connect instance
for Secure Source Manager.
Private Service Connect instances don't expose any endpoints to the
public internet. When you create a Private Service Connect instance,
endpoints are created to provide SSH (Git) and HTTPS (Git, web interface, API)
access to the instance. The endpoints must be assigned IP addresses on your
private network. All traffic to and from the Private Service Connect
instance passes through the Private Service Connect endpoints.
For more information about using Private Service Connect to access
managed services privately from inside a VPC network, see
Private Service Connect .
Secure Source Manager is a single-tenant service. A single
Secure Source Manager instance should only include users from one
Google Cloud customer unless multiple companies who have a contractual
relationship need to use a single instance for collaboration.
If you're working with multiple companies and want to collaborate with them on
source code, we recommend you create a separate instance for each company.
Before you begin
Sign in to your Google Account. If you don't already have one,
sign up for a new account .
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
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
Go to project selector
Enable the Secure Source Manager API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
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
Go to project selector
Enable the Secure Source Manager API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Required roles
To get the permissions that
you need to create a Private Service Connect Secure Source Manager instance,
ask your administrator to grant you the
following IAM roles:
Access Context Manager Admin role ( roles/accesscontextmanager.policyAdmin )
on the organization
Instance Owner role ( roles/securesourcemanager.instanceOwner )
on the instance
To create a service identity and Certificate Authority pool:
CA Service Operation Manager ( roles/privateca.caManager )
on the organization
Create a service identity and Certificate Authority pool
This section describes how to use your own CA certificate. You must use your
own CA certificate if you intend to use custom domains with your private
instance. To use a Google-managed certificate without custom domains,
you don't need to do anything other than run the
gcloud source-manager instances create
command without creating a service identity and CA pool. For more information, see Create a Private Service Connect Secure Source Manager instance .
If you're using your own CA certificate, you must specify a Certificate
Authority (CA) pool name when you create a private Secure Source Manager
instance. A request to sign the instance's HTTPS SSL certificate is sent to
the CA pool.
Run the following command to create a service identity for the Secure Source Manager API
within your project:
gcloud beta services identity create \
--service = securesourcemanager.googleapis.com \
--project = PROJECT_ID
where PROJECT_ID is your project ID.
The output is similar to the following:
Service identity created: service- PROJECT_NUM @gcp-sa-sourcemanager.iam.gserviceaccount.com
where service- PROJECT_NUM @gcp-sa-sourcemanager.iam.gserviceaccount.com
is the Secure Source Manager service agent and
PROJECT_NUM is your project number.
Create a Certificate Authority (CA) pool with CSR-based
certificate requests enabled.
Create a CA. You can create a root or subordinate CA depending on your needs.
Note: When you use your own certificate authority, you must use a key size of
2048 bits.
To create a root CA, follow the instructions in Create a root CA .
To create a subordinate CA from a parent CA in Google Cloud, follow the
instructions in Create a subordinate CA
To create a subordinate CA from an external CA, follow the instructions in
Create a subordinate CA from an external CA .
For more information about the differences between root and subordinate CAs,
see Determine certificate authority settings .
Grant the Secure Source Manager API service identity permissions to request new
certificates in the CA pool:
gcloud privateca pools add-iam-policy-binding CA_POOL_NAME \
--location = CA_LOCATION \
--member = 'serviceAccount:service- PROJECT_NUMBER @gcp-sa-sourcemanager.iam.gserviceaccount.com' \
--role = 'roles/privateca.certificateRequester' \
--project = CA_PROJECT_ID
Replace the following:
CA_POOL_NAME with the name you gave your CA pool.
CA_LOCATION with the region or zone of your CA
pool.
PROJECT_NUMBER with the project number where
Secure Source Manager is enabled. To
locate the project number, see
Identifying projects .
CA_PROJECT_ID with the project ID of the project
you created the CA pool in.
Create a Private Service Connect Secure Source Manager instance
You can assign custom domains to your private instance for the HTML, API, Git
HTTP, and Git SSH endpoints. Custom domains require your own CA
certificate. Therefore, you must provide a CA pool when you create an instance with
custom domains. You can configure custom domains only during instance creation
using the API. You cannot modify them after the instance is created.
gcloud
Create a Private Service Connect instance with the following command:
gcloud source-manager instances create INSTANCE_ID \
--region = LOCATION \
--project = PROJECT_ID \
--is-private \
--ca-pool = projects/ CA_PROJECT /locations/ CA_LOCATION /caPools/ CA_POOL_NAME
Replace the following:
INSTANCE_ID with the name you want to give the
instance.
LOCATION with the region where you want to create the
instance. For supported locations, see Locations .
PROJECT_ID with the name of the project you want to create an
instance in.
CA_PROJECT with the name of the CA pool project. Required if
you use your own CA certificate.
CA_LOCATION with the region where you created the CA pool.
Required if you use your own CA certificate.
CA_POOL_NAME with the name of the CA pool. Required if you use
your own CA certificate.
Note: You can omit the --ca-pool flag if you use a
Google-managed certificate and not using custom domains. You can configure custom
domains only by using the API.
API
Create a Private Service Connect instance with the following command:
curl \
-X POST \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
https://securesourcemanager.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /instances?instance_id = INSTANCE_ID \
-H "Content-Type: application/json" \
-d '{"private_config":{"is_private":true,"ca_pool":"projects/ CA_PROJECT /locations/ CA_LOCATION /caPools/ CA_POOL_NAME ","custom_host_config":{"api":" API_CUSTOM_DOMAIN ", "html":" HTML_CUSTOM_DOMAIN ", "git_ssh":" GIT_SSH_CUSTOM_DOMAIN ", "git_http":" GIT_HTTP_CUSTOM_DOMAIN "}}}'
Replace the following:
INSTANCE_ID with the name you want to give the
instance.
LOCATION with the region where you want to create the
instance. For supported locations, see Locations .
PROJECT_ID with the name of the project you want to create an
instance in.
CA_PROJECT with the name of the CA pool project. Required if
you use your own CA certificate or custom domains.
CA_LOCATION with the region where you created the CA pool.
Required if you use your own CA certificate or custom domains.
CA_POOL_NAME with the name of the CA pool. Required if you use
your own CA certificate or custom domains.
API_CUSTOM_DOMAIN with your custom domain for API access, for
example api.source.example.com . Required only if you use custom
domains.
HTML_CUSTOM_DOMAIN with your custom domain for web UI
access, for example source.example.com . Required only if you use
custom domains.
GIT_SSH_CUSTOM_DOMAIN with your custom domain for Git SSH
access, for example ssh.source.example.com . Required only if you use
custom domains.
GIT_HTTP_CUSTOM_DOMAIN with your custom domain for Git HTTP
access, for example git.source.example.com . Required only if you use
custom domains.
Note: If you use a Google-managed certificate, remove
the ca_pool field from this command. If you are not using custom domains,
remove the custom_host_config field.
Terraform
To create a Private Service Connect instance with Terraform, use the
google_secure_source_manager_instance
resource with the private_config.is_private field set to true .
A long-running instance creation operation starts. The instance takes up to 60 minutes to
create. The output is similar to the following:
Create request issued for [ my-instance ] .
done : false
metadata:
'@type' : type.googleapis.com/google.cloud.securesourcemanager.v1.OperationMetadata
apiVersion: v1
createTime: '2023-02-27T20:57:52.315609549Z'
requestedCancellation: false
target: projects/my-project/locations/us-central1/instances/my-instance
verb: create
name: projects/my-project/locations/us-central1/operations/operation-1234567894561-5ec69948c0f2b-60dd727f-a9b97a2e
where
projects/my-project/locations/us-central1/operations/operation-1234567894561-5ec69948c0f2b-60dd727f-a9b97a2e
is the OPERATION_NAME.
You need the OPERATION_NAME to check the status of the operation.
To check the operation's status, run the following command:
gcloud source-manager operations describe OPERATION_NAME \
--region = LOCATION
Replace the following:
OPERATION_NAME with the operation name from your create
command response.
LOCATION with the region where you want to create the
instance. For supported locations, see
Locations .
After the instance is created, the
Private Service Connect endpoints httpServiceAttachment and
sshServiceAttachment , along with the hostnames for html , api ,
gitHttp , and gitSsh , are listed in the output.
Access the private instance
You can access your Private Service Connect instance by creating
Private Service Connect endpoints based on forwarding rules or by creating
Private Service Connect backends based on load balancers.
Private Service Connect backends based on load balancers are more
flexible and let you integrate with other Google Cloud services like
Cloud Build, but are more complex and have additional billing.
Private Service Connect endpoints based on forwarding rules are
simpler and cost less. However, you can't connect to Cloud Build or other
Google Cloud services.
To set up Private Service Connect backends based on load balancers
for your Private Service Connect instance and connect it to
Cloud Build, see
Connect Cloud Build to a Private Service Connect instance .
Set up Private Service Connect endpoints based on forwarding rules
To create Private Service Connect endpoints, follow the
instructions in
Access published services through endpoints .
To get the URIs for your Secure Source Manager instance's HTTP and SSH service
attachments, run the following command:
gcloud source-manager instances describe INSTANCE_ID \
--region = LOCATION
Replace the following:
INSTANCE_ID with the name of your instance. To list
instances in a given region, run
gcloud source-manager instances list --region= LOCATION .
LOCATION with the location of your instance. For supported locations, see Locations .
The output includes:
createTime : '2023-09-22T18:21:35.729454612Z'
hostConfig :
api : my-project-012345678901-api.us-central1.p.sourcemanager.dev
gitHttp : my-project-012345678901-git.us-central1.p.sourcemanager.dev
gitSsh : my-project-012345678901-ssh.us-central1.p.sourcemanager.dev
html : my-project-012345678901.us-central1.p.sourcemanager.dev
name : projects/my-project/locations/us-central1/instances/my-instance
privateConfig :
caPool : projects/my-project/locations/us-central1/caPools/my-ca-pool
httpServiceAttachment : projects/abc12345d1a1234a0a-tp/regions/us-central1/serviceAttachments/http-psc
isPrivate : true
sshServiceAttachment : projects/abc12345d1a1234a0a-tp/regions/us-central1/serviceAttachments/ssh-psc
state : ACTIVE
updateTime : '2023-09-22T18:39:53.390563549Z'
projects/abc12345d1a1234a0a-tp/regions/us-central1/serviceAttachments/http-psc
is your instance's HTTP service attachment URI.
projects/abc12345d1a1234a0a-tp/regions/us-central1/serviceAttachments/ssh-psc
is your instance's SSH service attachment URI.
After you create the Private Service Connect endpoints,
you need to set up private DNS records. For instructions to set up
private DNS records, see Configure DNS manually .
If you configured custom domains for your instance, create DNS records
that map your custom domains to the internal IP addresses of the service
attachments. Otherwise, use the hostnames in the hostConfig field of
the instance:
Map the value of hostConfig.html (or your HTML custom domain),
hostConfig.api (or your API custom domain), and
hostConfig.gitHttp (or your Git HTTP custom domain) to the internal
IP address of the HTTP service attachment.
Map the value of hostConfig.ssh (or your Git SSH custom domain) to
the internal IP address of the SSH service attachment.
For example, in the previous example output, the value of hostConfig.html
is my-project-012345678901.us-central1.p.sourcemanager.dev .
Note: The Google Cloud DNS zone and the Private Service Connect
must be in the same Virtual Private Cloud network.
Git authentication with custom domains
If you use custom domains for your private instance, perform
the following client-side configuration on each machine to use Git over HTTPS.
This configuration connects Git to the gcloud credential helper to
authenticate against your custom domain.
Configure Git to use the gcloud helper for your custom Git HTTP domain:
git config --global credential. 'https:// GIT_HTTP_CUSTOM_DOMAIN ' .helper gcloud.sh
Replace GIT_HTTP_CUSTOM_DOMAIN with the custom domain you configured for Git HTTP access.
Authorize your custom domain in gcloud :
gcloud config set core/credentialed_hosted_repo_domains GIT_HTTP_CUSTOM_DOMAIN
To authorize multiple domains, provide them as a comma-separated list.
Use the CA with Secure Source Manager API
Warning: The CA pool maintains a list of trusted CA certificates. Your
organization's IT administrators generally handle distributing CA
certificates. The following instructions are for the purpose of this tutorial,
and aren't appropriate for a production environment.
Secure Source Manager has a control plane and a data plane. Data plane
endpoints are hosted directly by your Secure Source Manager instance, so you
must connect to your instance's API hostname to access them.
To use your private Secure Source Manager instance, use
the CA you created in the
Create a service identity and Certificate Authority pool
section.
To download your CA, run the following command:
gcloud privateca pools get-ca-certs CA_POOL \
--location LOCATION \
--output-file = root-cert.pem \
--project PROJECT
To make API calls to your instance, pass the CA certificate to the
data plane Secure Source Manager API.
For example, the following command passes the CA certificate
root-cert.pem to the Secure Source Manager API to list repositories in the
private instance my-instance in location us-central1 .
curl \
--cacert root-cert.pem \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
https://my-instance-01234567890-api.us-central1.sourcemanager.dev/v1/projects/01234567890/locations/us-central1/repositories
What's next
Connect Cloud Build to a Private Service Connect Secure Source Manager instance .
Configure Secure Source Manager in a VPC Service Controls perimeter .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
