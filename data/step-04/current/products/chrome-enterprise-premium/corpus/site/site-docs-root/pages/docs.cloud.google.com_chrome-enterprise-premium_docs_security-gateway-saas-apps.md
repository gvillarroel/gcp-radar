---
title: "Secure access to SaaS applications \_|\_ Chrome Enterprise Premium \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/chrome-enterprise-premium/docs
source_metadata:
  url: https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps
  title: "Secure access to SaaS applications \_|\_ Chrome Enterprise Premium \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Chrome Enterprise Premium
Guides
Send feedback
Secure access to SaaS applications
Stay organized with collections
Save and categorize content based on your preferences.
This page guides you through the process of securing your SaaS applications
through the Chrome Enterprise Premium secure gateway.
A Chrome Enterprise Premium secure gateway functions as a forward proxy, enforcing a
zero trust access framework and delivering granular, context-aware control over
who accesses your SaaS applications.
How securing access to SaaS applications works
The following is a high level overview of how a secure gateway protects your
SaaS applications:
The client-side browser settings route application traffic through a secure
gateway proxy.
The secure gateway checks Context-Aware Access policies to authorize client (user
and device) access.
If client access is allowed, the gateway forwards traffic to the application
using unique source IP addresses assigned to that gateway and Google Cloud
region. These assigned IP addresses are reserved exclusively for the gateway
that you create and cannot be used by other users or gateways. To control
access, you can add these dedicated source IP addresses to an allowlist in
your SaaS application.
Required roles
Ask your administrator to grant the following roles:
Cloud BeyondCorp Admin ( roles/beyondcorp.admin )
to set up Chrome Enterprise Premium on the project
Access Context Manager Admin ( roles/accesscontextmanager.policyAdmin )
to read and add new access levels
Service Usage Viewer ( roles/serviceusage.serviceUsageViewer )
to use the Google Cloud console
Learn more about Identity and Access Management (IAM)
roles .
Before you begin
Before setting up the secure gateway, verify that you have the following:
A Chrome Enterprise Premium license.
Access to the Google Admin console with an
administrator account.
A Google Cloud project with an assigned billing account and the following
API enabled : BeyondCorp
API
A SaaS application that you want to protect. The application must support
IP allowlisting to enforce security checks by the secure gateway.
Limitations
A Chrome Enterprise Premium secure gateway has the following limitations:
IPv6 connectivity: Chrome Enterprise Premium secure gateway doesn't support SaaS
applications that use IPv6 connectivity.
Identity provider as a SaaS application: An Identity provider must not be
configured as a SaaS application to be protected by the secure gateway, if
the end-user's authentication with secure gateway is dependent on the same
IdP.
Set up your shell environment
To streamline the setup process and interact with the secure gateway APIs,
define the following environment variables in your working shell.
General parameters
PROJECT_ID = PROJECT_ID
APPLICATION_ID = APPLICATION_ID
APPLICATION_DISPLAY_NAME = " APPLICATION_DISPLAY_NAME "
HOST_NAME = HOST_NAME
Replace the following:
PROJECT_ID : The ID of the project where the
secure gateway is created.
APPLICATION_ID : The ID of your application, such
as github . The name can be up to 63 characters, and can contain
lowercase letters, numbers, and hyphens. The first character must be a
letter, and the last character can be a letter or number.
APPLICATION_DISPLAY_NAME : The human-readable name
to display.
HOST_NAME : The hostname of your application. For
example, github.com . The hostname can be up to 253 characters
long, and must adhere to one of the following formats:
A valid IPv4 address
A valid IPv6 address
A valid DNS name
An asterisk (*)
An asterisk (*) followed by a valid DNS name
Secure gateway parameters
SECURITY_GATEWAY_ID = SECURITY_GATEWAY_ID
SECURITY_GATEWAY_DISPLAY_NAME = " SECURITY_GATEWAY_DISPLAY_NAME "
Replace the following:
SECURITY_GATEWAY_ID : The ID of the secure
gateway. The ID can be up to 63 characters, and can contain lowercase
letters, numbers, and hyphens. The first character should be a letter, and
the last character can be a letter or number.
SECURITY_GATEWAY_DISPLAY_NAME : The human-readable
name of the secure gateway. The name can be up to 63 characters long and can
only contain printable characters.
Create a secure gateway
A Chrome Enterprise Premium secure gateway is a fundamental building block for
establishing secure connections to your applications. It allocates a dedicated
project and network, providing isolation and security.
console
To create a secure gateway resource, do the following:
In the Google Cloud console, go to the secure gateway page.
Go to secure gateway
Select the project you want to create the secure gateway for.
To create a secure gateway, click Create new gateway and wait for the gateway creation process to complete.
You can track the progress in the Notifications section of the Google Cloud console.
Before you create a SaaS application resource, we recommend that you create SaaS egress hubs . The hubs flag represents the regional resources required for enabling egress connectivity to the target application. You can configure one hub for each region, and each hub provides two IP addresses. A Secure Gateway can have at most 20 hubs. You can specify the following regions:
africa-south1
asia-east1
asia-south1
asia-south2
asia-southeast1
europe-central2
europe-north1
europe-southwest1
europe-west1
europe-west2
europe-west3
europe-west4
europe-west8
europe-west9
northamerica-northeast1
northamerica-northeast2
northamerica-south1
southamerica-east1
southamerica-west1
us-central1
us-east1
us-east4
us-east5
us-west1
In the Google Cloud console, go to the SaaS Egress Hubs page.
Go to SaaS Egress Hubs
Select the project you want to create the SaaS Egress Hubs for.
To add a SaaS egress hub, click Add SaaS egress hub .
From the drop-down list, select the regions where you'd like to add the egress hubs. To add the egress hubs, click Add SaaS egress hub
to add more than one hub. After you're done, click Save to create the egress hubs.
gcloud
To create a secure gateway resource, run the following command. For the --hubs flag, specify
one or more regions from the following list.
gcloud beyondcorp security-gateways create SECURITY_GATEWAY_ID \
--project = PROJECT_ID \
--location = global \
--display-name = " SECURITY_GATEWAY_DISPLAY_NAME " \
--hubs = us-central1
The hubs flag sets the regional resources required for enabling egress connectivity to the target application. You can have one hub for each region, and each hub provides two IP addresses. A Secure Gateway can have at most 20 hubs. You can specify the following regions:
africa-south1
asia-east1
asia-south1
asia-south2
asia-southeast1
europe-central2
europe-north1
europe-southwest1
europe-west1
europe-west2
europe-west3
europe-west4
europe-west8
europe-west9
northamerica-northeast1
northamerica-northeast2
northamerica-south1
southamerica-east1
southamerica-west1
us-central1
us-east1
us-east4
us-east5
us-west1
REST
To create a secure gateway resource, call the Create API method with the gateway details in the request
body. For the hubs flag, specify one or more regions from the following
list.
curl \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json" \
-X POST \
-d '{ "display_name": " SECURITY_GATEWAY_DISPLAY_NAME ", "hubs": { "us-central1": {} } }' \
"https://beyondcorp.googleapis.com/v1/projects/ PROJECT_ID /locations/global/securityGateways?security_gateway_id= SECURITY_GATEWAY_ID "
The hubs flag represents the regional resources required for enabling egress connectivity to the target application. You can have one hub for each region, and each hub provides two IP addresses. A Secure Gateway can have at most 20 hubs. You can specify the following regions:
africa-south1
asia-east1
asia-south1
asia-south2
asia-southeast1
europe-central2
europe-north1
europe-southwest1
europe-west1
europe-west2
europe-west3
europe-west4
europe-west8
europe-west9
northamerica-northeast1
northamerica-northeast2
northamerica-south1
southamerica-east1
southamerica-west1
us-central1
us-east1
us-east4
us-east5
us-west1
Configure a SaaS application
After you create a secure gateway, you can configure your SaaS applications to
use the secure gateway for secure access.
console
To configure SaaS egress hubs, do the following:
In the Google Cloud console, go to the SaaS Egress Hubs page.
Go to SaaS Egress Hubs
On the SaaS Egress Hubs page, find the table listing the hubs. For each region you intend to use, copy all the IP addresses listed in the Static dedicated egress IPs column. Each region provides two IP addresses.
Add the IP addresses to the IP allowlist of your SaaS application. For
example, for a GitHub application, you can follow this guide: Managing allowed IP addresses for your organization .
gcloud
To configure SaaS egress hubs, do the following:
Get the IP addresses allocated by the secure gateway for each hub. Two IP
addresses are allocated for a region.
gcloud beyondcorp security-gateways describe SECURITY_GATEWAY_ID \
--project = PROJECT_ID \
--location = global
The following is a sample GET response of a secure gateway with
hubs . In the example, hubs are created in the
us-central1 and us-east1 regions, and all of the
IP addresses returned in the response must be allowed in the SaaS
application.
createTime : 'CREATE_TIME'
displayName : My secure gateway
hubs :
us-central1 :
internetGateway :
assignedIps :
- IP_ADDRESS_1
- IP_ADDRESS_2
us-east1 :
internetGateway :
assignedIps :
- IP_ADDRESS_1
- IP_ADDRESS_2
name : projects/ PROJECT_ID /locations/global/securityGateways/ SECURITY_GATEWAY_ID
state : RUNNING
updateTime : 'UPDATE_TIME'
Add the IP addresses to the IP allowlist of your SaaS application. For
example, for a GitHub application, you can follow this guide: Managing
allowed IP addresses for your
organization .
REST
To configure SaaS egress hubs, do the following:
Get the IP addresses allocated by the secure gateway for each hub. Two IP
addresses are allocated for a region.
curl \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json" \
"https://beyondcorp.googleapis.com/v1/projects/ PROJECT_ID /locations/global/securityGateways/ SECURITY_GATEWAY_ID "
The following is a sample GET response of a secure gateway with
hubs . In the example, hubs are created in the
us-central1 and us-east1 regions, and all of the
IP addresses returned in the response must be allowed in the SaaS
application.
{
"securityGateways" : [
{
"name" : "projects/ PROJECT_ID /locations/global/securityGateways/ SECURITY_GATEWAY_ID " ,
"createTime" : "CREATE_TIME" ,
"updateTime" : "UPDATE_TIME" ,
"displayName" : "My secure gateway" ,
"state" : "RUNNING" ,
"hubs" : {
"us-central1" : {
"internetGateway" : {
"assignedIps" : [
"IP_ADDRESS_1" ,
"IP_ADDRESS_2" ,
]
}
},
"us-east1" : {
"internetGateway" : {
"assignedIps" : [
"IP_ADDRESS_1" ,
"IP_ADDRESS_2" ,
]
}
}
}
}
]
}
Add the IP addresses to the IP allowlist of your SaaS application. For
example, for a GitHub application, you can follow this guide: Managing
allowed IP addresses for your
organization .
Create an application resource
The following information guides you through the process of setting up and
configuring a secure gateway application resource.
Create a secure gateway application resource in Google Cloud
The Google Cloud application resource is a sub-resource of the secure
gateway resource. Create an application resource by using the Google Cloud console
or calling the
Create
API.
console
To create a SaaS application, do the following:
In the Google Cloud console, go to the secure gateway page.
Go to secure gateway
To create an application, click Add application .
Select the application type: Public application .
If SaaS egress hubs aren't yet configured for this secure gateway, you will be prompted to create them. Public applications require at least one SaaS egress hub. To configure SaaS egress hubs, click Go to SaaS egress hubs and add one or more regions.
After you have one or more egress hubs, click Next .
Enter the application details:
Application name : Enter a name, for example, GitHub .
Domain matchers : Enter a comma-separated list of domain patterns to route through the secure gateway. Include the port in the format domain:port . Wildcards ( * ) are allowed. For example: github.com:443 .
To configure your SaaS application, click Continue .
Configure your SaaS application to allow traffic from the secure gateway:
Carefully note or copy all the IP addresses listed for the regions you are using. These IP addresses are unique to your secure gateway.
Sign in to your SaaS application's administration console.
Navigate to the network settings or security settings where IP allowlists are managed.
Add all the IP addresses obtained to the application's IP allowlist.
To add the application, click Continue .
To create, save your settings and create the application, click Create .
gcloud
To create a SaaS application using gcloud, run the following command:
gcloud beyondcorp security-gateways applications create APPLICATION_ID \
--project = PROJECT_ID \
--security-gateway = SECURITY_GATEWAY_ID \
--location = global \
--display-name = " APPLICATION_DISPLAY_NAME " \
--endpoint-matchers = "hostname= HOST_NAME ,ports= 443 "
REST
To create a SaaS application using the REST API, run the following command:
curl \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json" \
-X POST \
-d "{ \"display_name\": \" APPLICATION_DISPLAY_NAME \", \"endpoint_matchers\": [{hostname: \" HOST_NAME \", ports: 443 }] }" \
"https://beyondcorp.googleapis.com/v1/projects/ PROJECT_ID /locations/global/securityGateways/ SECURITY_GATEWAY_ID /applications?application_id= APPLICATION_ID "
Configure Google Chrome proxy mode
You can route application traffic through the secure gateway by applying a PAC
file in the Chrome settings in the Google Admin console. To
apply the PAC file, do the following:
To create or update a PAC file, do the following:
Create your first application by creating a pac_config.js file using the following example PAC file.
Update your existing pac_config.js file and add the domains of your new application to the sites array, as shown in the following example PAC file.
function FindProxyForURL ( url , host ) {
const PROXY = "HTTPS via.prod.securegateway.goog: 443 " ;
const sites = [ " HOST_NAME " ];
for ( const site of sites ) {
if ( shExpMatch ( url , 'https://' + site + '/*' ) || shExpMatch ( url , '*.' + site + '/*' )) {
return PROXY ;
}
}
return 'DIRECT' ;
}
Replace HOST_NAME with the hostname of your application—for
example, myapp.example.com .
If you're using an existing PAC file that's not specific to a secure
gateway, merge the PAC files by adding the domains of your application
to the sites array.
Upload the file so that it's publicly downloadable. For example, you can
upload the file to
Cloud Storage , and make
the file publicly downloadable by granting all of the users the Storage Object User role on the bucket.
To verify that the uploaded file is the latest version, you can adjust its
caching behavior by setting the Cache-Control header to no-cache . Setting the header prevents browsers and intermediate servers from storing a copy of
the file, so that Chrome downloads the most recent version.
For more information about Cache-Control and how it affects browser
caching, see Cache-Control header .
Copy the public URL of the uploaded file.
Update proxy mode settings
To update proxy mode settings, do the following:
Go to the Google Admin console .
Click Devices > Chrome > Settings .
Select the organizational unit or group, and then click Proxy mode .
In Proxy mode , select
Always use the proxy auto-config specified below , and enter the URL of
the PAC file from Cloud Storage.
To save the proxy mode settings, click Save .
Note: When a new application is added to your secure gateway, you need to update
only the PAC file. You don't need to update the URL in the
Google Admin console again.
Configure an access policy
You can apply an access policy to control access at either the secure gateway
level, which affects all associated applications, or at the individual
application level for more granular control.
console
Create a gateway-level policy
To configure an access policy, do the following:
To create a policy that applies to multiple applications linked to the secure gateway, go to the Policies page.
Go to Policies
To add access policies to applications, click Create Policy .
From the drop-down list, select the applications that you'd like the policies to apply to.
Add principals to the policy:
Principals can be users, groups, domains, or service accounts. These principals are granted or denied access based on the access levels you assign.
To add a principal, click Add principal .
In the Principal field, enter the email address of the user, group, service account, or the domain name.
In the Access Levels drop-down, select one or more predefined Context-Aware Access levels. Access is granted only if the principal meets the conditions of the selected access levels.
To add more principals, click Add principal again and repeat the substeps.
You can create and manage access levels in Access Context Manager .
To apply the policy to the application, click Create Policy .
Modify an application-level access policy
To modify a policy for a single application, go to the Applications page.
Go to Applications
To find the application that you want to edit, do the following:
In the Applications list, search for the application that you want to modify.
To view the application details, click the More actions menu ( more_vert ) and select View Details .
To edit the application, click Edit .
Add principals to the policy:
Principals can be users, groups, domains, or service accounts. These principals are granted or denied access based on the access levels you assign.
To add a principal, click Add principal .
In the Principal field, enter the email address of the user, group, service account, or the domain name.
In the Access Levels drop-down list, select one or more predefined Context-Aware Access levels. Access is granted only if the principal meets the conditions of the selected access levels.
To add more principals, click Add principal again and repeat the substeps.
You can create and manage access levels in Access Context Manager .
To apply the policy to the application, click Save .
gcloud
Safely update an access policy
The setIamPolicy command replaces the entire existing policy with the one that
you provide. To avoid accidentally removing existing permissions, we recommend
that you use the following "read-modify-write" pattern. This pattern helps
prevent accidental removal of existing permissions.
Read : First, get the current access policy.
Modify : Edit the policy file locally to add or change permissions.
Write : Apply your updated policy file.
Get the current policy
Retrieve the current policy before making any changes. The etag field in the policy acts as a version identifier. It prevents
conflicting updates if multiple administrators make changes simultaneously.
The following command retrieves the policy and saves it to a file named
policy.json .
gcloud beta beyondcorp security-gateways applications get-iam-policy APPLICATION_ID \
--security-gateway = SECURITY_GATEWAY_ID \
--project = PROJECT_ID \
--location = global > policy.json
Replace the following:
APPLICATION_ID : the ID of the application resource
SECURITY_GATEWAY_ID : the ID of the secure gateway
PROJECT_ID : the ID of the project where the secure gateway is configured
The command creates a policy.json file that contains the current
policy.
Modify the policy file
Open the policy.json file in a text editor. To grant a group access to use the
secure gateway, add the group to the members list for the
roles/beyondcorp.securityGatewayUser role.
The policy.json file is similar to the following example:
{
"version" : 3 ,
"bindings" : [
{
"role" : "roles/beyondcorp.securityGatewayUser" ,
"members" : [
"group:existing-group@example.com"
]
}
],
"etag" : "BwXN8_d-bOM="
}
To add an additional group, add a new entry to the members array. Include a
comma after the preceding entry.
The following example adds new-group@example.com :
{
"version" : 3 ,
"bindings" : [
{
"role" : "roles/beyondcorp.securityGatewayUser" ,
"members" : [
"group:existing-group@example.com" ,
"group:new-group@example.com"
]
}
],
"etag" : "BwXN8_d-bOM="
}
You can also add other types of members, such as serviceAccount , user ,
group , principal , and principalSet , in policy bindings. See IAM principals for
more information.
Apply the updated policy
After editing and saving your policy.json file, apply it to the resource using
the setIamPolicy command. This command uses the etag from your file to
ensure that you update the correct version.
gcloud beta beyondcorp security-gateways applications set-iam-policy APPLICATION_ID policy.json \
--security-gateway = SECURITY_GATEWAY_ID \
--project = PROJECT_ID \
--location = global
Replace the following:
APPLICATION_ID : the ID of the application resource
SECURITY_GATEWAY_ID : the ID of the secure gateway
PROJECT_ID : the ID of the project where the secure gateway is configured
Add a conditional access policy
You can also set access policies with conditions. Conditions specify
requirements, such as a user's IP address originating from a specific location.
The following example policy grants access only if the source IP address is
within a specified access level:
{
"version" : 3 ,
"bindings" : [
{
"role" : "roles/beyondcorp.securityGatewayUser" ,
"members" : [
"group:group@example.com"
],
"condition" : {
"expression" : "request.auth.access_levels.contains('accessPolicies/1234567890/accessLevels/in_us')" ,
"title" : "Source IP must be in US"
}
}
],
"etag" : "BwXN8_d-bOM="
}
To apply this policy, follow the steps described earlier.
REST
Safely update an access policy
The setIamPolicy command replaces the entire existing policy with the one that
you provide. To avoid accidentally removing existing permissions, we recommend
that you use the following "read-modify-write" pattern. This pattern helps
prevent accidental removal of existing permissions.
Read : Save the current access policy to a file.
Modify : Edit the policy file locally to add or change permissions.
Write : Apply your updated policy file.
Get the current policy
Retrieve the current policy before making any changes. The etag field in the policy acts as a version identifier. It prevents
conflicting updates if multiple administrators make changes simultaneously.
The following command retrieves the policy and saves it to a file named
policy.json .
curl \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json" \
"https://beyondcorp.googleapis.com/v1/projects/ PROJECT_ID /locations/global/securityGateways/ SECURITY_GATEWAY_ID /applications/ APPLICATION_ID :getIamPolicy" > policy.json
Replace the following:
PROJECT_ID : the ID of the project where the secure gateway is configured
SECURITY_GATEWAY_ID : the ID of the secure gateway
APPLICATION_ID : the ID of the application resource
The command creates a policy.json file that contains the current
policy.
Modify the policy file
To grant a group access to use the secure gateway, do the following:
Open the policy.json file in a text editor.
Add the group to the members list for the roles/beyondcorp.securityGatewayUser role.
The policy.json file is similar to the following example:
{
"version" : 3 ,
"bindings" : [
{
"role" : "roles/beyondcorp.securityGatewayUser" ,
"members" : [
"group:existing-group@example.com"
]
}
],
"etag" : "BwXN8_d-bOM="
}
To add an additional group, add a new entry to the members array. Include a
comma after the preceding entry.
The following example adds new-group@example.com :
{
"version" : 3 ,
"bindings" : [
{
"role" : "roles/beyondcorp.securityGatewayUser" ,
"members" : [
"group:existing-group@example.com" ,
"group:new-group@example.com"
]
}
],
"etag" : "BwXN8_d-bOM="
}
You can also add other types of members, such as serviceAccount , user ,
group , principal , and principalSet , in policy bindings. See IAM principals for more
information.
Apply the updated policy
After editing and saving your policy.json file, apply it to the resource using
the setIamPolicy command. This command uses the etag from your file to
ensure that you update the correct version.
jq '{policy: .}' policy.json | curl -X POST \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json" \
-d @- \
"https://beyondcorp.googleapis.com/v1/projects/ PROJECT_ID /locations/global/securityGateways/ SECURITY_GATEWAY_ID /applications/ APPLICATION_ID :setIamPolicy"
Replace the following:
PROJECT_ID : the ID of the project where the secure gateway is configured
SECURITY_GATEWAY_ID : the ID of the secure gateway
APPLICATION_ID : the ID of the application resource
Add a conditional access policy
You can also set access policies with conditions. Conditions specify
requirements, such as a user's IP address originating from a specific location.
The following example policy grants access only if the source IP address is
within a specified access level:
{
"version" : 3 ,
"bindings" : [
{
"role" : "roles/beyondcorp.securityGatewayUser" ,
"members" : [
"group:group@example.com"
],
"condition" : {
"expression" : "request.auth.access_levels.contains('accessPolicies/1234567890/accessLevels/in_us')" ,
"title" : "Source IP must be in US"
}
}
],
"etag" : "BwXN8_d-bOM="
}
To apply this policy, follow the steps described earlier.
Enhance Security with Context-Aware Access
To further enhance security and ensure that only managed Google Chrome
instances can access your web applications through the Security Gateway, we
recommend adding a Context-Aware Access (CAA) rule. This rule verifies that the
user's Chrome profile is under management, preventing potential
misuse from unmanaged or malicious browsers.
You can implement this by adding a condition to your access levels in
Chrome Enterprise Premium Access Context Manager. Here is an example condition you can adapt:
device.chrome.management_state == ChromeManagementState.CHROME_MANAGEMENT_STATE_PROFILE_MANAGED
Install the Chrome Enterprise Premium extension
The Chrome Enterprise Premium extension is an integral part of a secure gateway, and it
helps with authentication. Install the extension for all of the users of the
secure gateway. For information about deploying the extension, see View and
configure apps and
extensions . To install the
Chrome Enterprise Premium extension, do the following:
Go to the Google Admin console .
Click Chrome browser > Apps & Extensions .
Click the Users & browsers tab.
To add the Chrome extension, click the + button.
Search for the following extension, and then require it to be installed for
all of the users in the organization unit or group:
ekajlcmdfcigmdbphhifahdfjbkciflj
Click the installed extension, and in the Policy for extensions field,
enter the following JSON value:
{
"securityGateway" : {
"Value" : {
"authentication" : {},
"context" : { "resource" : "projects/ PROJECT_ID /locations/global/securityGateways/ SECURITY_GATEWAY_ID " }
}
}
}
Replace the following:
PROJECT_ID : the ID of the project where the secure gateway is configured
SECURITY_GATEWAY_ID : the ID of the secure gateway
To save the configuration, click Save .
End user experience
When the setup is complete, end users who access the protected SaaS application
are granted or denied access based on the access policy applied to the
application.
Accessing the application in Chrome
The Chrome Enterprise Premium extension
is required to direct traffic through the secure gateway. The extension handles
the authentication between the user and the secure gateway. The extension is
automatically installed through the domain policy.
When users access the SaaS application that you configured, their traffic goes
through the secure gateway, which checks if they satisfy the access policy. If
the users pass the access policy checks, they're granted access to the
application.
When browser access to the application is rejected by the authorization policy,
users receive an Access denied message.
What's next
Manage a secure gateway
Troubleshoot secure gateway issues
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
