---
title: "Secure access to private web applications \_|\_ Chrome Enterprise Premium\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/chrome-enterprise-premium/docs
source_metadata:
  url: https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps
  title: "Secure access to private web applications \_|\_ Chrome Enterprise Premium\
    \ \_|\_ Google Cloud Documentation"
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
Secure access to private web applications
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to set up a Chrome Enterprise Premium secure gateway for securing
access to your private web applications.
A Chrome Enterprise Premium secure gateway functions as a forward proxy, enforcing a
zero trust access framework and delivering granular, context-aware control over
who accesses your private web applications.
How securing access to private web applications works
By establishing a secure tunnel and enforcing context-aware access policies, the
secure gateway keeps private applications private and shielded from public
internet exposure. A client-side browser configuration directs traffic for these
applications through the secure gateway proxy endpoint. The secure gateway then
applies the relevant access policy and, if permitted, routes the request to the
destination application.
The secure gateway can help protect private web applications hosted in the
following environments:
Google Cloud project: The secure gateway can direct access to applications
that are running in your Google Cloud VPC network.
Non-Google Cloud (on-premises data centers or other clouds): You must
first establish a connection between your private VPC network on
Google Cloud and the non-Google Cloud network. This is commonly
done using Cloud VPN or Cloud Interconnect. The secure gateway then
uses the connection to send the traffic to your private VPC network, which
in turn routes it to the non-Google Cloud environment.
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
For private applications in a non-Google Cloud environment, a
Cloud VPN or Cloud Interconnect connection between your
Google Cloud environment and the non-Google Cloud environment
where your application resides. For more information about setting up
network connections, see the following resources:
Cloud VPN documentation
Cloud Interconnect documentation
Set up your shell environment
To streamline the setup process and interact with the secure gateway APIs,
define the following environment variables in your working shell.
General parameters
PROJECT_ID = PROJECT_ID
Replace the following:
PROJECT_ID : The ID of the project where the
secure gateway is created.
Secure gateway parameters
SECURITY_GATEWAY_ID = SECURITY_GATEWAY_ID
SECURITY_GATEWAY_DISPLAY_NAME = " SECURITY_GATEWAY_DISPLAY_NAME "
Replace the following:
SECURITY_GATEWAY_ID : The ID of the secure
gateway that you want to create. The ID can be up to 63
characters and can contain lowercase letters, numbers, and hyphens. The
first character must be a letter, and the last character can be a letter
or number.
SECURITY_GATEWAY_DISPLAY_NAME : The
human-readable name of the secure gateway. The name can be up to 63
characters long and include printable characters.
Create a secure gateway
A Chrome Enterprise Premium secure gateway is a fundamental building block for
establishing secure connections to your applications.
console
To create a secure gateway, do the following:
In the Google Cloud console, go to the secure gateway page.
Go to secure gateway
Select the project you want to create the secure gateway for.
To create a secure gateway, click Create new gateway and wait for the gateway creation process to complete. You can track the progress in the Notifications section of the Google Cloud console.
gcloud
To create a secure gateway using gcloud, run the following command:
gcloud beyondcorp security-gateways create SECURITY_GATEWAY_ID \
--project = PROJECT_ID \
--location = global \
--display-name = " SECURITY_GATEWAY_DISPLAY_NAME "
REST
To create a secure gateway using the REST API, run the following command:
curl \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json" \
-X POST \
-d '{ "display_name": " SECURITY_GATEWAY_DISPLAY_NAME " }' \
"https://beyondcorp.googleapis.com/v1/projects/ PROJECT_ID /locations/global/securityGateways?security_gateway_id= SECURITY_GATEWAY_ID "
Configure a private web application
Before you can define specific application resources in the secure gateway, you
must configure the necessary permissions and network settings to enable
connectivity and proper routing.
Grant permissions to the service account
To successfully send traffic to your VPC network, the secure gateway needs
certain IAM permissions granted to its delegating service
account. Doing this allows the secure gateway to reach your private
applications, whether they're hosted within a Google Cloud VPC or in a
non-Google Cloud environment connected through Cloud VPN or
Cloud Interconnect.
To grant permissions to the service account, do the following:
Get the details of your secure gateway to identify the delegating service
account email. The email is in the delegatingServiceAccount
field of the response.
gcloud
gcloud beyondcorp security-gateways describe SECURITY_GATEWAY_ID \
--project = PROJECT_ID \
--location = global
REST
curl \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json" \
"https://beyondcorp.googleapis.com/v1/projects/ PROJECT_ID /locations/global/securityGateways/ SECURITY_GATEWAY_ID "
Set environment variables for the service account and your target VPC
project.
DELEGATING_SERVICE_ACCOUNT = "security-gateway@my-gateway-service-account.iam.gserviceaccount.com" # Replace with actual value
Grant the roles/beyondcorp.upstreamAccess IAM
role to the delegating service account on your private VPC project.
gcloud projects add-iam-policy-binding PRIVATE_VPC_PROJECT_ID \
--role = roles/beyondcorp.upstreamAccess \
--member = serviceAccount: DELEGATING_SERVICE_ACCOUNT
Replace PRIVATE_VPC_PROJECT_ID with the Project ID
of the VPC network where the private web app is deployed or where
Cloud VPN/Intercconect is configured.
Allow approximately two minutes for the Identity and Access Management policy to take effect after
you grant the role.
Configure network routing and firewall rules
To allow traffic from the secure gateway to reach your private web applications,
configure firewall rules, network routing, and DNS settings.
Firewall rules for applications in Google Cloud
If your private web application is hosted within your Google Cloud VPC
network, such as on a Compute Engine VM, a Google Kubernetes Engine service with an
internal IP, or behind an internal TCP/UDP load balancer, configure
Google Cloud VPC firewall rules. This allows ingress TCP traffic from the
secure gateway IP range: 136.124.16.0/20 .
Firewall rules for applications in non-Google Cloud environments
If your private web application resides on an on-premises data center or on
another cloud provider's network, and is connected to your Google Cloud
VPC using Cloud VPN or Cloud Interconnect, configure firewall rules
on your on-premises firewall or the equivalent network security controls, such
as security groups and network ACLs, in the other cloud environment. This allows
ingress TCP traffic from the secure gateway IP ranges.
Configure routing from non-Google Cloud environments to a secure gateway
To facilitate two-way communication for private applications that are hosted in
non-Google Cloud environments, such as on-premises or other clouds, your
external network must create a return path to the following secure gateway IP
range: 136.124.16.0/20 .
Verify that your private network can reach the secure gateway IP ranges through
your Cloud VPN or Cloud Interconnect:
Dynamic routing : If you're using dynamic routing, such as Border Gateway
Protocol (BGP) with Cloud Router, verify that your Cloud Router
in Google Cloud explicitly advertises secure gateway IP ranges to your
on-premises BGP device. Although BGP dynamically exchanges many routes, the
secure gateway IP ranges require explicit advertisement.
Static routing : If you're using static routes, you must manually add
routes for each of the secure gateway IP ranges on your on-premises network
equipment, such as your router or firewall. These static routes must specify
that traffic destined for the secure gateway IP ranges must be sent over the
Cloud VPN or Cloud Interconnect connection.
When using static routing, Cloud VPN must be in one of the
following supported regions:
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
DNS configuration for secure gateway private hostname resolution
For the secure gateway to resolve your private application hostnames, your
Google Cloud VPC network must be able to resolve the hostnames using
Cloud DNS. The specific Cloud DNS configuration depends on where
your private DNS records are authoritatively hosted:
Applications within Google Cloud using Cloud DNS private zones :
If your private applications are hosted in Google Cloud and their DNS
records are managed within Cloud DNS private zones that are
associated with your VPC network, verify that the zones are correctly
configured and accessible. The secure gateway uses your VPC's existing
Cloud DNS resolution capabilities.
Applications in non-Google Cloud environments or using external DNS
servers : If your private applications are in non-Google Cloud
environments (on-premises or other clouds) or if their DNS records are
managed by DNS servers external to your VPC's Cloud DNS private
zones, you must configure Cloud DNS to forward queries for these
private domains. This typically involves creating Cloud DNS
forwarding zones within your VPC. These zones will direct DNS queries for
your specified private domains to your authoritative private DNS servers,
such as on-premises or other clouds.
For detailed instructions on DNS configuration, see Create a forwarding
zone .
Create an application resource
To provide access to a private web application, you must establish the
application within the secure gateway framework by creating an application
resource. This resource defines how the secure gateway identifies traffic for
your application (based on the hostname) and where to route that traffic.
Set the required environment variables by running the following command:
APPLICATION_ID = APPLICATION_ID
APP_DISPLAY_NAME = " APP_DISPLAY_NAME "
HOST_NAME = HOST_NAME
PRIVATE_NETWORK_RESOURCE_NAME = PRIVATE_NETWORK_RESOURCE_NAME
Replace the following:
APPLICATION_ID : A unique ID for the
application resource.
APP_DISPLAY_NAME : The human-readable name
to display.
HOST_NAME : The primary hostname that users
access (for example, private.local ).
PRIVATE_NETWORK_RESOURCE_NAME : The full
resource name of the VPC network (for example,
projects/my-project/global/networks/my-network ).
Create the application resource.
console
To create the application resource by using the Google Cloud console, do the following:
In the Google Cloud console, go to the secure gateway page.
Go to secure gateway
To add an application, click Add application .
Select the application type: Private application .
Enter the application details:
Application name : Enter a name, for example, GitHub .
Domain matchers : Enter a comma-separated list of domain patterns to route through the secure gateway. Include the port in the format domain:port . Wildcards ( * ) are allowed. For example: github.com:443 .
Configure VPC Network:
In current project : If your VPC network is in the current project, choose the VPC network from the drop-down.
In another project : If your VPC network is in a different Google Cloud project, specify the full resource name of the VPC network, for example, projects/my-project/global/networks/my-network .
Optional: Define egress policy : Select one or more Google Cloud regions from the drop-down menu.
To create the application resource, click Create .
gcloud
To create the application resource using gcloud, run the following command:
gcloud beyondcorp security-gateways applications create APPLICATION_ID \
--project = PROJECT_ID \
--security-gateway = SECURITY_GATEWAY_ID \
--location = global \
--display-name = " APP_DISPLAY_NAME " \
--endpoint-matchers = "hostname= HOST_NAME ,ports=[ 443 ]" \
--upstreams = network = name = " PRIVATE_NETWORK_RESOURCE_NAME "
To specify an egress region (for example, when using static routes),
add the --egress-regions flag:
gcloud beyondcorp security-gateways applications create APPLICATION_ID \
--project = PROJECT_ID \
--security-gateway = SECURITY_GATEWAY_ID \
--location = global \
--display-name = " APP_DISPLAY_NAME " \
--endpoint-matchers = "hostname= HOST_NAME ,ports=[ 443 ]" \
--upstreams = network = name = " PRIVATE_NETWORK_RESOURCE_NAME " ,egressPolicy = regions = us-central1
Replace us-central1 with the Google Cloud region
(such as europe-west1 or asia-northeast1 ) that
aligns with your regional static routing setup. If you don't have
specific regional static routing requirements, you can omit the egress
policy from your configuration.
REST
To create an application resource with the API, complete the
following steps:
Create a file named application.json .
{
"display_name" : " APP_DISPLAY_NAME " ,
"endpoint_matchers" : [
{ "hostname" : " HOST_NAME " , "ports" : [ 443 ]}
],
"upstreams" : [{
"network" : {
"name" : " PRIVATE_NETWORK_RESOURCE_NAME "
}
}]
}
To specify an egress region (for example, when using static routes),
add an egress_policy to the upstream configuration:
{
"display_name" : " APP_DISPLAY_NAME " ,
"endpoint_matchers" : [
{ "hostname" : " HOST_NAME " , "ports" : [ 443 ]}
],
"upstreams" : [{
"network" : {
"name" : " PRIVATE_NETWORK_RESOURCE_NAME "
},
"egress_policy" : {
"regions" : [
"us-central1"
]
}
}]
}
Replace us-central1 with the Google Cloud region
(such as europe-west1 or asia-northeast1 ) that
aligns with your regional static routing setup. If you don't have
specific regional static routing requirements, you can omit the egress
policy from your configuration.
Call the Create API method.
curl \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json" \
-X POST \
-d @application.json \
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
Troubleshoot secure gateway issues
Manage a secure gateway
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
