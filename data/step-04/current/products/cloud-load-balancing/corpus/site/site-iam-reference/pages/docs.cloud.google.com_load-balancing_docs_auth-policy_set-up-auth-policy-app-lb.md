---
title: "Set up authorization policies for Application Load Balancers \_|\_ Cloud Load\
  \ Balancing \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/load-balancing/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb
  title: "Set up authorization policies for Application Load Balancers \_|\_ Cloud\
    \ Load Balancing \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Load Balancing
Guides
Send feedback
Set up authorization policies for Application Load Balancers
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to set up authorization policies for Application Load Balancers.
Before you begin
Familiarize yourself with the Authorization policy
overview .
Enable the following APIs :
Network Security API
Network Services API
Set up the load balancer
If you haven't created a load balancer, see the following pages to set up your
preferred Application Load Balancer:
To create a global external Application Load Balancer, see Set up a global external Application Load Balancer with
VM instance group
backends .
To create a regional external Application Load Balancer, see Set up a regional external Application Load Balancer
with VM instance group
backends .
To create a regional internal Application Load Balancer, see Set up a regional internal Application Load Balancer
with VM instance group
backends .
To create a cross-region internal Application Load Balancer, see Set up a
cross-region internal Application Load Balancer with VM instance group
backends .
Create and attach service accounts or tags to Google Cloud VMs
For internal Application Load Balancers, you can apply authorization policies based on service
accounts or tags attached to different Google Cloud
resources .
The example in this document provides instructions to create an authorization
policy based on service accounts or tags attached to Google Cloud virtual
machine (VM) instances. Any request originating from a client VM that is linked
to a specific service account or tag can be either allowed, denied, or delegated
to an external service. An example of such an authorization policy that uses
service accounts and tags to enforce access control is provided in the
Authorization policy based on service accounts or
tags section of this document.
Applying authorization policies based on service accounts or tags
is not supported for external Application Load Balancers.
Attach service accounts to client VMs
For instructions on how to attach a service account to a VM instance, see the following documents:
To set up a service account during VM creation, see
Create a VM that uses a user-managed service account .
To set up a service account on an existing VM, see
Change the attached service account .
Attach tags to the instance group template
Before binding a tag with the instance group template, you must create
a tag key and value. When you create a tag, designate it with a
GCE_FIREWALL purpose. Google Cloud networking features, including Secure Web Proxy
and authorization policies, require the GCE_FIREWALL purpose to apply the tag.
Create a tag key and value
To create tags, you need the Tag Administrator role ( roles/resourcemanager.tagAdmin ).
Console
In the Google Cloud console, go to the Tags page.
Go to Tags
Click add Create .
In the Tag key description field, enter a description.
Select the For use with network firewall checkbox.
In the Project list, select the Google Cloud project where you want to create the tag.
In the Network field, select LB_NETWORK .
Click
add Add value .
In the Tag value field, enter TAG_VALUE . The value must be a numeric value.
In the Tag value description field, enter a description.
When you have finished adding tag values, click Create tag key .
gcloud
Create the tag key.
gcloud resource-manager tags keys create TAG_KEY \
--parent=organizations/ ORG_ID \
--purpose=GCE_FIREWALL \
--purpose-data=network= LB_NETWORK
Replace the following:
TAG_KEY : the name of your tag key.
ORG_ID : the ID of your organization.
LB_NETWORK : the name of your VPC network.
Add the tag value to the numeric tag key.
gcloud resource-manager tags values create TAG_VALUE \
--parent= ORG_ID / TAG_KEY
Replace TAG_VALUE with a numeric tag value.
Bind the tag to the instance group template
Tag administrators can bind tags to individual VM instances or the
instance group template and attach the tag's value to the VMs or template's
backends.
To bind tags, you need the Tag User
role
( roles/resourcemanager.tagUser ).
Define the full name prefix for your project and zone:
FULL_NAME_PREFIX=//compute.googleapis.com/projects/ PROJECT_ID /zones/ ZONE /instances/
Replace the following:
PROJECT_ID : the ID of your project.
ZONE : the zone that the managed instance group is located in.
Get the instance group template ID:
TEMPLATE_ID=$(gcloud compute instance-templates describe TEMPLATE_NAME --region= LOCATION --format='value(id)')
Replace the following:
TEMPLATE_NAME : the name of your instance group template.
LOCATION : your Google Cloud region.
Concatenate the values of FULL_NAME_PREFIX and TEMPLATE_ID :
PARENT="$FULL_NAME_PREFIX$TEMPLATE_ID"
echo $PARENT
Create the bindings.
gcloud resource-manager tags bindings create \
--location LOCATION \
--tag-value ORG_ID / TAG_KEY / TAG_VALUE \
--parent PARENT
Replace the following:
LOCATION : your Google Cloud region.
ORG_ID : the ID of your organization.
TAG_KEY : the name of your secure tag key.
TAG_VALUE : the numeric tag value.
Create an authorization policy
To create an authorization policy , you create a YAML file
defining the target and the rules, and then import the file using the
gcloud network-security authz-policies command.
This section provides instructions for creating different types of authorization policies attached to the forwarding rule of a load balancer.
Authorization policy to deny requests
This section provides an authorization policy example that denies requests
based on certain request attributes.
Note: Authorization policy based on principals is not supported on
global external Application Load Balancers.
Global
If you're using a global external Application Load Balancer,
follow these steps to create and import an authorization policy
that denies requests based on IP address ranges :
Create an authorization policy YAML file to deny certain requests.
The following example creates an authz-policy-deny.yaml file
for the forwarding
rule LB_FORWARDING_RULE in the global
location. The policy denies clients with IP addresses in the
10.0.0.0/24 range to access the /api/payments URL path.
$ cat >authz-policy-deny.yaml <<EOF
name : my-authz-policy-deny
target :
loadBalancingScheme : LB_SCHEME
resources :
- "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /global/forwardingRules/ LB_FORWARDING_RULE "
httpRules :
- from :
sources :
- ipBlocks :
- prefix : "10.0.0.0"
length : "24"
- to :
operations :
- paths :
- prefix : "/api/payments"
action : DENY
EOF
Replace the following:
LB_SCHEME : your load balancing scheme. For global external Application Load Balancer, set the scheme to EXTERNAL_MANAGED .
PROJECT_ID : the ID of your Google Cloud project.
LB_FORWARDING_RULE : the name of the
load balancer's forwarding rule.
Create an authorization policy and import the YAML file.
The following example command imports the previously created policy file
and creates an authorization policy:
gcloud network-security authz-policies import my-authz-policy-deny \
--source=authz-policy-deny.yaml \
--location=global
Cross-region
If you're using a cross-region internal Application Load Balancer,
follow these steps to create and import an authorization policy
that denies requests based on client certificate principals .
Create an authorization policy YAML file to deny certain requests.
The following example creates an authz-policy-deny.yaml file for the forwarding
rule LB_FORWARDING_RULE in the global
location. The policy denies access to the /api/payments
URL path to clients that have www.example.com in their
client certificate DNS name SANs.
$ cat >authz-policy-deny.yaml <<EOF
name : my-authz-policy-deny
target :
loadBalancingScheme : LB_SCHEME
resources :
- "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /global/forwardingRules/ LB_FORWARDING_RULE "
httpRules :
- from :
sources :
- principals :
- principalSelector : CLIENT_CERT_DNS_NAME_SAN
principal :
exact : "www.example.com"
to :
operations :
- paths :
- prefix : "/api/payments"
action : DENY
EOF
Replace the following:
LB_SCHEME : your load balancing scheme. For cross-region internal Application Load Balancer, set the scheme to INTERNAL_MANAGED .
PROJECT_ID : the ID of your Google Cloud project.
LB_FORWARDING_RULE : the name of the load balancer's forwarding rule.
Create an authorization policy and import the YAML file.
The following example command imports the previously created policy file
and creates an authorization policy:
gcloud network-security authz-policies import my-authz-policy-deny \
--source=authz-policy-deny.yaml \
--location=global
Regional
If you're using a regional external Application Load Balancer or a regional internal Application Load Balancer,
follow these steps to create and import an authorization policy
that denies requests based on client certificate principals .
Create an authorization policy YAML file to deny certain requests.
The following example creates an authz-policy-deny.yaml file
for the forwarding
rule LB_FORWARDING_RULE in a
Google Cloud region. The policy denies access to the
/api/payments URL path to clients that have www.example.com in their
client certificate DNS name SANs.
$ cat >authz-policy-deny.yaml <<EOF
name : my-authz-policy-deny
target :
loadBalancingScheme : LB_SCHEME
resources :
- "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ LOCATION /forwardingRules/ LB_FORWARDING_RULE "
httpRules :
- from :
sources :
- principals :
- principalSelector : CLIENT_CERT_DNS_NAME_SAN
principal :
exact : "www.example.com"
to :
operations :
- paths :
- prefix : "/api/payments"
action : DENY
EOF
Replace the following:
LB_SCHEME : your load balancing scheme. For regional external Application Load Balancer, set the scheme to EXTERNAL_MANAGED . For regional internal Application Load Balancer, set the scheme to INTERNAL_MANAGED .
PROJECT_ID : the ID of your Google Cloud project.
LOCATION : your Google Cloud region.
LB_FORWARDING_RULE : the name of the load balancer's forwarding rule.
Create an authorization policy and import the YAML file.
The following example command imports the previously created policy file and
creates an authorization policy in the
LOCATION region:
gcloud network-security authz-policies import my-authz-policy-deny \
--source=authz-policy-deny.yaml \
--location= LOCATION
Authorization policy to allow requests
This section provides an authorization policy example that allows requests
originating from specific IP address ranges .
Global and cross-region
If you're using a global external Application Load Balancer or a cross-region internal Application Load Balancer, follow these steps to create and import an authorization policy:
Create an authorization policy YAML file to allow certain requests.
The following example creates an authz-policy-allow.yaml file for the forwarding
rule LB_FORWARDING_RULE in the global location.
The policy allows clients with IP addresses in the 10.0.0.0/24 range
to access the /api/payments URL path.
$ cat >authz-policy-allow.yaml <<EOF
name : my-authz-policy-allow
target :
loadBalancingScheme : LB_SCHEME
resources :
- "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /global/forwardingRules/ LB_FORWARDING_RULE "
httpRules :
- from :
sources :
- ipBlocks :
- prefix : "10.0.0.0"
length : "24"
to :
operations :
- paths :
- exact : "/api/payments"
action : ALLOW
EOF
Replace the following:
LB_SCHEME : your load balancing scheme. For global external Application Load Balancer, set the scheme to EXTERNAL_MANAGED . For cross-region internal Application Load Balancer, set the scheme to INTERNAL_MANAGED .
PROJECT_ID : the ID of your Google Cloud project.
LB_FORWARDING_RULE : the name of the load balancer's forwarding rule.
Create an authorization policy and import the YAML file.
The following example command imports the previously created policy
file and creates an authorization policy:
gcloud network-security authz-policies import my-authz-policy-allow \
--source=authz-policy-allow.yaml \
--location=global
Regional
If you're using a regional external Application Load Balancer or a regional internal Application Load Balancer,
follow these steps to create and import an authorization policy:
Create an authorization policy YAML file to allow certain requests.
The following example creates an authz-policy-allow.yaml file for the forwarding
rule LB_FORWARDING_RULE in a specific Google Cloud region.
The policy allows clients with IP addresses in the 10.0.0.0/24 range
to access the /api/payments URL path.
$ cat >authz-policy-allow.yaml <<EOF
name : my-authz-policy-allow
target :
loadBalancingScheme : LB_SCHEME
resources :
- "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ LOCATION /forwardingRules/ LB_FORWARDING_RULE "
httpRules :
- from :
sources :
- ipBlocks :
- prefix : "10.0.0.0"
length : "24"
to :
operations :
- paths :
- exact : "/api/payments"
action : ALLOW
EOF
Replace the following:
LB_SCHEME : your load balancing scheme. If you're using regional external Application Load Balancer, set the scheme to EXTERNAL_MANAGED . If you're using regional internal Application Load Balancer, set the scheme to INTERNAL_MANAGED .
PROJECT_ID : the ID of your Google Cloud project.
LOCATION : your Google Cloud region.
LB_FORWARDING_RULE : the name of the load balancer's forwarding rule.
Create an authorization policy and import the YAML file.
The following example command imports the previously created policy file
and creates an authorization policy in the LOCATION region:
gcloud network-security authz-policies import my-authz-policy-allow \
--source=authz-policy-allow.yaml \
--location= LOCATION
Authorization policy based on service accounts or tags
You can apply authorization policies based on service accounts or tags only on
internal Application Load Balancers. Any traffic originating from a client VM that is linked to a
specific service account or tag can be either allowed, denied, or delegated to
an external service.
If you want to create and attach service accounts or tags to Google Cloud VMs, see the section Create and attach service accounts or tags to Google Cloud VMs in this document.
Service account
Create an authorization policy YAML file to deny certain requests.
The following example creates an authz-policy-deny.yaml file for the
forwarding rule LB_FORWARDING_RULE of a
regional internal Application Load Balancer. The policy is configured to deny requests from
any client VMs with the service account
my-sa-123@ PROJECT_ID .iam.gserviceaccount.com to reach the /api/payments path.
$ cat >authz-policy-deny.yaml <<EOF
name : my-authz-policy-deny
target :
loadBalancingScheme : LB_SCHEME
resources :
- "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ LOCATION /forwardingRules/ LB_FORWARDING_RULE "
httpRules :
- from :
sources :
- resources :
- iamServiceAccount :
exact : "my-sa-123@ PROJECT_ID .iam.gserviceaccount.com"
to :
operations :
- paths :
- prefix : "/api/payments"
action : DENY
EOF
Replace the following:
LB_SCHEME : your load balancing scheme. For a regional internal Application Load Balancer, set the scheme to INTERNAL_MANAGED .
PROJECT_ID : the ID of your Google Cloud project.
LOCATION : your Google Cloud region.
LB_FORWARDING_RULE : the name of the load balancer's forwarding rule.
Create an authorization policy and import the YAML file.
The following example command imports the previously created policy file and
creates an authorization policy in the specified Google Cloud region.
gcloud network-security authz-policies import my-authz-policy-deny \
--source=authz-policy-deny.yaml \
--location= LOCATION
Replace LOCATION with your Google Cloud region.
Tag
Create an authorization policy YAML file to allow certain requests.
The following example creates an authz-policy-allow.yaml file for the forwarding
rule LB_FORWARDING_RULE of a regional internal Application Load Balancer. The policy only allows requests that originate from a VM with the resource tag TAG_VALUE to access the /api/payments URL path.
$ cat >authz-policy-allow.yaml <<EOF
name : my-authz-policy-allow
target :
loadBalancingScheme : LB_SCHEME
resources :
- "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ LOCATION /forwardingRules/ LB_FORWARDING_RULE "
httpRules :
- from :
sources :
resources :
- tagValueIdSet :
- ids : " TAG_VALUE "
to :
operations :
- paths :
- exact : "/api/payments"
action : ALLOW
EOF
Replace the following:
LB_SCHEME : your load balancing scheme. For a regional internal Application Load Balancer, set the scheme to INTERNAL_MANAGED .
PROJECT_ID : the ID of your Google Cloud project.
LOCATION : your Google Cloud region.
LB_FORWARDING_RULE : the name of the load balancer's forwarding rule.
Create an authorization policy and import the YAML file.
The following example command imports the previously created policy file
and creates an authorization policy in the specified
Google Cloud region:
gcloud network-security authz-policies import my-authz-policy-allow \
--source=authz-policy-allow.yaml \
--location= LOCATION
Replace the following:
LOCATION : your Google Cloud region.
Authorization policy to delegate to a service extension
Before you begin, set up an external authorization engine .
For more information about service extensions, see
Cloud Load Balancing callouts overview .
Global and cross-region
If you're using a global external Application Load Balancer or a cross-region internal Application Load Balancer,
follow these steps to create and import an authorization policy:
Create an authorization policy file to delegate certain requests
to an external service.
The following example creates an authz-policy-custom.yaml file for
the forwarding rule LB_FORWARDING_RULE
in the global location. The policy calls the
AUTHZ_EXTENSION extension for all
traffic to the /api/payments URL path when the request contains a
non-empty Authorization header.
$ cat >authz-policy-custom.yaml <<EOF
name : my-authz-policy-custom
target :
loadBalancingScheme : LB_SCHEME
resources :
- "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /global/forwardingRules/ LB_FORWARDING_RULE "
httpRules :
- to :
operations :
- paths :
- exact : "/api/payments"
when : 'request.headers["Authorization"] != ""'
action : CUSTOM
customProvider :
authzExtension :
resources :
- "https://networkservices.googleapis.com/v1/projects/ PROJECT_ID /locations/global/authzExtensions/ AUTHZ_EXTENSION "
EOF
Replace the following:
LB_SCHEME : your load balancing scheme. For global external Application Load Balancer, set the scheme to EXTERNAL_MANAGED . For cross-region internal Application Load Balancer, set the scheme to INTERNAL_MANAGED .
PROJECT_ID : the ID of your Google Cloud project.
LB_FORWARDING_RULE : the name of the load balancer's forwarding rule.
AUTHZ_EXTENSION : the name of the authorization
extension.
Create an authorization policy and import the YAML file.
The following example command imports the previously created policy file
and creates an authorization policy:
gcloud network-security authz-policies import my-authz-policy-custom \
--source=authz-policy-custom.yaml \
--location=global
Regional
If you're using a regional external Application Load Balancer or a regional internal Application Load Balancer,
follow these steps to create and import an authorization policy:
Create an authorization policy YAML file to delegate certain requests
to an external service.
The following example creates an authz-policy-custom.yaml file for the forwarding
rule LB_FORWARDING_RULE in a Google Cloud region of a regional internal Application Load Balancer.
The policy calls the AUTHZ_EXTENSION extension for
all traffic to the /api/payments URL path when the request contains a non-empty Authorization header.
$ cat >authz-policy-custom.yaml <<EOF
name : my-authz-policy-custom
target :
loadBalancingScheme : LB_SCHEME
resources :
- "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ LOCATION /forwardingRules/ LB_FORWARDING_RULE "
httpRules :
- to :
operations :
- paths :
- exact : "/api/payments"
when : 'request.headers["Authorization"] != ""'
action : CUSTOM
customProvider :
authzExtension :
resources :
- "https://networkservices.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /authzExtensions/ AUTHZ_EXTENSION "
EOF
Replace the following:
LB_SCHEME : your load balancing scheme. For regional external Application Load Balancer, set the scheme to EXTERNAL_MANAGED . For regional internal Application Load Balancer, set the scheme to INTERNAL_MANAGED .
PROJECT_ID : the ID of your Google Cloud project.
LOCATION : your Google Cloud region.
LB_FORWARDING_RULE : the name of the load balancer's forwarding rule.
AUTHZ_EXTENSION : the name of the authorization
extension.
Create an authorization policy and import the YAML file.
The following example command imports the previously created policy file
and creates an authorization policy in the LOCATION region:
gcloud network-security authz-policies import my-authz-policy-custom \
--source=authz-policy-custom.yaml \
--location= LOCATION
Test an authorization policy
To test an authorization policy, send some traffic to the load balancer. For
more information, see the following pages:
If you're using a global external Application Load Balancer, see Test traffic sent to your
instances .
If you're using a regional external Application Load Balancer, see Test the load
balancer .
If you're using a regional internal Application Load Balancer, see Test the load
balancer .
If you're using a cross-region internal Application Load Balancer, see Test the load
balancer .
Understand authorization policy logs in Cloud Logging
To understand how authorization policies are logged when a request is
allowed or denied, review the following sections.
Request matches neither the ALLOW nor DENY policies
When a request matches neither the ALLOW nor DENY policies, the DENY
policy permits the request and logs it as
allowed_as_no_deny_policies_matched_request . Conversely, the ALLOW policy
rejects the request and logs it as
denied_as_no_allow_policies_matched_request . Because one of the policies
denies the request, the request is denied.
If you're using a global external Application Load Balancer, statusDetails is set to
denied_by_authz_policy in the log. See the following example:
{
httpRequest: {8}
insertId: "example-id"
jsonPayload: {
@type: "type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry"
authzPolicyInfo: {
policies: [
0: {
details: "allowed_as_no_deny_policies_matched_request"
result: "ALLOWED"
}
1: {
details: "denied_as_no_allow_policies_matched_request"
result: "DENIED"
}
]
result: "DENIED"
}
backendTargetProjectNumber: "projects/12345567"
remoteIp: "00.100.11.104"
statusDetails: "denied_by_authz_policy"
}
logName: "projects/example-project/logs/requests"
receiveTimestamp: "2024-08-28T15:33:56.046651035Z"
resource: {2}
severity: "WARNING"
spanId: "3e1a09a8e5e3e14d"
timestamp: "2024-08-28T15:33:55.355042Z"
trace: "projects/example-project/traces/8c8b3dbf9a19c85954d0fa2d958ca509"
}
If you're using a regional internal Application Load Balancer, regional external Application Load Balancer, or
cross-region internal Application Load Balancer, proxyStatus is set to
error=\"http_request_error\"; details=\"denied_by_authz_policy\" in the log. See the following example:
{
httpRequest: {8}
insertId: "example-id"
jsonPayload: {
@type: "type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry"
authzPolicyInfo: {
policies: [
0: {
details: "allowed_as_no_deny_policies_matched_request"
result: "ALLOWED"
}
1: {
details: "denied_as_no_allow_policies_matched_request"
result: "DENIED"
}
]
result: "DENIED"
}
backendTargetProjectNumber: "projects/12345567"
remoteIp: "00.100.11.104"
proxyStatus: "error=\"http_request_error\"; details=\"denied_by_authz_policy\""
}
logName: "projects/example-project/logs/requests"
receiveTimestamp: "2024-08-28T15:33:56.046651035Z"
resource: {2}
severity: "WARNING"
spanId: "3e1a09a8e5e3e14d"
timestamp: "2024-08-28T15:33:55.355042Z"
trace: "projects/example-project/traces/8c8b3dbf9a19c85954d0fa2d958ca509"
}
Request matches the DENY policy
When a request matches the DENY policy, it is denied and the policy that
denied the request is logged.
If you're using a global external Application Load Balancer, statusDetails is set to
denied_by_authz_policy in the log and the name of the policy that denied the request is logged in policies . See the following example:
{
httpRequest: {8}
insertId: "example-id"
jsonPayload: {
@type: "type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry"
authzPolicyInfo: {
policies: [
0: {
details: "name: "projects/12345567/locations/global/authzPolicies/deny-authz-policy-test""
result: "DENIED"
}
]
result: "DENIED"
}
backendTargetProjectNumber: "projects/12345567"
cacheDecision: [2]
remoteIp: "00.100.11.104"
statusDetails: "denied_by_authz_policy"
}
logName: "projects/example-project/logs/requests"
receiveTimestamp: "2024-08-28T15:33:56.046651035Z"
resource: {2}
severity: "WARNING"
spanId: "3e1a09a8e5e3e14d"
timestamp: "2024-08-28T15:33:55.355042Z"
trace: "projects/example-project/traces/8c8b3dbf9a19c85954d0fa2d958ca509"
}
If you're using a regional internal Application Load Balancer, regional external Application Load Balancer, or
cross-region internal Application Load Balancer, proxyStatus is set to
error=\"http_request_error\"; details=\"denied_by_authz_policy\" and the name of the policy is logged in policies . See the following example:
{
httpRequest: {8}
insertId: "example-id"
jsonPayload: {
@type: "type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry"
authzPolicyInfo: {
policies: [
0: {
details: "name: "projects/12345567/locations/$REGION/authzPolicies/deny-authz-policy-test""
result: "DENIED"
}
]
result: "DENIED"
}
backendTargetProjectNumber: "projects/12345567"
remoteIp: "00.100.11.104"
proxyStatus: "error=\"http_request_error\"; details=\"denied_by_authz_policy\""
}
logName: "projects/example-project/logs/requests"
receiveTimestamp: "2024-08-28T15:33:56.046651035Z"
resource: {2}
severity: "WARNING"
spanId: "3e1a09a8e5e3e14d"
timestamp: "2024-08-28T15:33:55.355042Z"
trace: "projects/example-project/traces/8c8b3dbf9a19c85954d0fa2d958ca509"
}
Request does not match the DENY policy, but matches the ALLOW policy
When a request doesn't match the DENY policy, but matches with the ALLOW
policy, the request is allowed. In the log, this action is logged as
allowed_as_no_deny_policies_matched_request for the DENY policy. The policy
that allowed the request is also logged.
If you're using a global external Application Load Balancer, there is no statusDetails in the
log. The policy that allowed the request is also logged in policies . See
the following example:
{
httpRequest: {8}
insertId: "example-id"
jsonPayload: {
@type: "type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry"
authzPolicyInfo: {
policies: [
0: {
details: "allowed_as_no_deny_policies_matched_request"
result: "ALLOWED"
}
1: {
details: "name: "projects/12345567/locations/global/authzPolicies/allow-authz-policy-test""
result: "ALLOWED"
}
]
result: "ALLOWED"
}
backendTargetProjectNumber: "projects/12345567"
cacheDecision: [2]
remoteIp: "00.100.11.104"
}
logName: "projects/example-project/logs/requests"
receiveTimestamp: "2024-08-28T15:33:56.046651035Z"
resource: {2}
severity: "WARNING"
spanId: "3e1a09a8e5e3e14d"
timestamp: "2024-08-28T15:33:55.355042Z"
trace: "projects/example-project/traces/8c8b3dbf9a19c85954d0fa2d958ca509"
}
If you're using a regional internal Application Load Balancer, regional external Application Load Balancer, or
cross-region internal Application Load Balancer, there is no proxyStatus field in the log. The policy
that allowed the request is also logged in policies . See the following
example:
{
httpRequest: {8}
insertId: "example-id"
jsonPayload: {
@type: "type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry"
authzPolicyInfo: {
policies: [
0: {
details: "allowed_as_no_deny_policies_matched_request"
result: "ALLOWED"
}
1: {
details: "name: "projects/12345567/locations/$REGION/authzPolicies/allow-authz-policy-test""
result: "ALLOWED"
}
]
result: "ALLOWED"
}
backendTargetProjectNumber: "projects/12345567"
cacheDecision: [2]
remoteIp: "00.100.11.104"
}
logName: "projects/example-project/logs/requests"
receiveTimestamp: "2024-08-28T15:33:56.046651035Z"
resource: {2}
severity: "WARNING"
spanId: "3e1a09a8e5e3e14d"
timestamp: "2024-08-28T15:33:55.355042Z"
trace: "projects/example-project/traces/8c8b3dbf9a19c85954d0fa2d958ca509"
}
What's next
Configure an authorization extension
Delegate authorization to IAP and
IAM
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
