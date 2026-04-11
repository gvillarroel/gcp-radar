---
title: "Setting up context-aware access with Identity-Aware Proxy \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iap/docs/managing-access
source_metadata:
  url: https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto
  title: "Setting up context-aware access with Identity-Aware Proxy \_|\_ Google Cloud\
    \ Documentation"
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
Setting up context-aware access with Identity-Aware Proxy
Stay organized with collections
Save and categorize content based on your preferences.
This guide describes how to extend Identity-Aware Proxy (IAP) access policies using access levels and the Identity and Access Management (IAM) Conditions Framework .
Access levels allow access restrictions to resources based on IP address and end-user device attributes. IAM conditions allow access restrictions based on URL hosts, paths, date, and time.
For example, depending on the policy configuration, your sensitive app can:
Grant access to all employees if they're using a trusted corporate device from
your corporate network.
Grant access to employees in the Remote Access group if they're using a
trusted corporate device with a secure password and up-to-date patch level,
from any network.
Only grant access to employees in the Privileged Access group if the URL
path starts with /admin .
Before you begin
Before you begin, you'll need the following:
A IAP-secured app to which you want to add individual
or group access.
User or group names that you want to grant access to.
Set up an access level
To limit access based on IP address or end-user device attributes , create an access level. Some attributes, such as device attributes, require a Chrome Enterprise Premium license. License validation only occurs when you configure access levels and does not affect runtime access. To learn how to create an access level, see the Access Context Manager guide.
IAP uses the access level name to associate it with a IAP-secured app.
The use of scoped policies is not supported by IAP.
Access levels must be set in the organizational access policy. For more
information, see
Create an access policy .
Edit the IAM policy
A IAP-secured app has an IAM policy that binds the IAP role to the app.
By adding an IAM conditional binding to the IAM policy, access to your resources are further restricted based on request attributes .
These request attributes include:
Access levels
URL Host/Path
Date/Time
Note that request values being compared to request.host and request.path
specified in an IAM conditional binding must be exact. For example,
if you restrict access to paths starting with /internal admin ,
one can bypass the restriction by going to /internal%20admin . For more information
about hostname and path conditions, see Use hostname and path conditions .
Add and edit conditional bindings on your IAM policy by following
the process below.
Console
To add a conditional binding using the Google Cloud console:
Go to the IAP admin page .
Go to
the IAP admin page
Select the checkbox next to the resources that you want to update IAM permissions for.
On the right side Info panel , click Add principal .
In the New principal box, enter the principals that you want to assign a role to.
In the Select a role drop-down list, select the IAP-secured Web App User role and specify access level conditions that the principals will need to meet to access the resource.
To specify existing access levels, select them from the Access levels drop-down list. You need
to select the IAP-secured Web App User role and have organization level
permissions to view existing access levels. You must be granted
one of the following roles:
Access Context Manager Admin
Access Context Manager Editor
Access Context Manager Reader
To create and manage access levels, use the Access Context Manager .
If you want to add more roles to the principals, click Add another role .
When you're finished adding roles, click Save .
You have now added a conditional binding to your resource.
To remove a conditional binding:
Go to the IAP admin page .
Go to
the IAP admin page
Select the checkbox next to the resource that you want to remove a principal's IAM role from.
On the right side Info panel , under Role / Principal , click the role that you want to remove from the principal.
Click Remove next to the principal.
On the Remove role from principal dialog that appears, click Remove . To remove all non-inherited roles from the principal on the selected resource, select the checkbox before clicking Remove .
gcloud
At this time, you can only use the gcloud tool to set project-level conditional bindings.
To set conditional bindings, edit your project's policy.yaml file by following the process below:
Open the IAM policy for the app using the following gcloud command:
gcloud iap web get-iam-policy --project= PROJECT_ID > policy.yaml
Edit the policy.yaml file to specify the following:
The users and groups you want to apply the IAM condition to.
The iap.httpsResourceAccessor role to grant them access to the resources.
The IAM condition.
The following snippet shows an IAM condition with only one attribute specified. This condition grants access to the user and group if the ACCESS_LEVEL_NAME access level requirements are met and the resource URL path starts with / .
bindings:
...
- members:
- group: EXAMPLE_GROUP@GOOGLE.COM
- user: EXAMPLE_USER@GOOGLE.COM
role: roles/iap.httpsResourceAccessor
condition:
expression: "accessPolicies/ ORGANIZATION_NUMBER /accessLevels/ ACCESS_LEVEL_NAME " in
request.auth.access_levels && request.path.startsWith("/")
title: CONDITION_TITLE
...
Bind the policy to the application using the set-iam-policy command.
gcloud iap web set-iam-policy --project= PROJECT_ID policy.yaml
Your IAM policy now includes a conditional binding.
API
To edit your app's policy.json file, follow the process below for your app type.
See Managing access to IAP-secured resources
for more information about using the IAM API to manage access policies.
Before doing the application-specific API steps below, export the following
variables:
export PROJECT_NUM= PROJECT_NUMBER
export IAP_BASE_URL=https://iap.googleapis.com/v1/projects/${PROJECT_NUM}/iap_web
# Replace POLICY_FILE.JSON with the name of JSON file to use for setIamPolicy
export JSON_NEW_POLICY= POLICY_FILE.JSON
App Engine
Export the following App Engine variables:
# The APP_ID is usually the project ID
export GAE_APP_ID= APP_ID
export GAE_BASE_URL=${IAP_BASE_URL}/appengine-${GAE_APP_ID}
Get the IAM policy for the App Engine app using the getIamPolicy method. The empty data bit at the end turns the curl request into POST instead of GET.
curl -i -H "Authentication: Bearer $( gcloud auth print-access-token ) " \
${ GAE_BASE_URL } /:getIamPolicy -d ''
Add your IAM conditional binding to the IAM policy JSON file.
The following is an example of an edited policy.json file that binds the
iap.httpsResourceAccessor role to two users, granting them access to the IAP-secured resources. An IAM
condition has been added to grant them access to the resources only if the ACCESS_LEVEL_NAME access level requirement is met and the resource URL path starts with / .
There can be only one condition per binding.
Example policy.json file
{
"policy" : {
"bindings" : [
{
"role" : "roles/iap.httpsResourceAccessor" ,
"members" : [
"group: EXAMPLE_GROUP@GOOGLE.COM " ,
"user: EXAMPLE_USER@GOOGLE.COM "
],
"condition" : {
"expression" : "" accessPolicies/ ORGANIZATION_NUMBER /accessLevels/ ACCESS_LEVEL_NAME " in request.auth.access_levels && request.path.startsWith(" / ")" ,
"title" : " CONDITION_NAME "
}
}
]
}
}
Set your new policy.json file using the setIamPolicy method.
curl -i -H "Authentication: Bearer $(gcloud auth print-access-token)" \
${GAE_BASE_URL}:setIamPolicy -d @${JSON_NEW_POLICY}
App Engine services and versions
You can also update the IAM policy of a App Engine
service, all versions, or a specific version of a service. To do this for specific version of a service:
Export the following additional variables.
expor t GAE_SERVICE= SERVICE_NAME
expor t GAE_VERSION= VERSION_NAME
Update the exported GAE_BASE_URL variable.
expor t GAE_BASE_URL=$ { IAP_BASE_URL } /appe n gi ne - $ { GAE_APP_ID } /services/$ { GAE_SERVICE } /versio ns /$ { GAE_VERSION }
Get and set the IAM policy for the version using the getIamPolicy
and setIamPolicy commands shown above.
GKE and Compute Engine
Export the project ID of your backend service.
export BACKEND_SERVICE_NAME= BACKEND_SERVICE_NAME
Get the IAM policy for the Compute Engine app using the getIamPolicy method. The empty data bit at the end turns the curl request into POST instead of GET.
curl -i -H "Authentication: Bearer $(gcloud auth print-access-token)" \
${IAP_BASE_URL}/compute/services/${BACKEND_SERVICE_NAME}:getIamPolicy \
-d ''
Add your IAM conditional binding to the IAM policy JSON file.
The following is an example of an edited policy.json file that binds the
iap.httpsResourceAccessor role to two users, granting them access to the IAP-secured resources. An IAM
condition has been added to grant them access to the resources only if the ACCESS_LEVEL_NAME access level requirement is met and the resource URL path starts with / .
There can be only one condition per binding.
Example policy.json file
{
"policy" : {
"bindings" : [
{
"role" : "roles/iap.httpsResourceAccessor" ,
"members" : [
"group" : EXAMPLE_GROUP@GOOGLE.COM ,
"user: EXAMPLE_USER@GOOGLE.COM "
],
"condition" : {
"expression" : "" accessPolicies/ ORGANIZATION_NUMBER /accessLevels/ ACCESS_LEVEL_NAME " in request.auth.access_levels && request.path.startsWith(" / ")" ,
"title" : " CONDITION_NAME "
}
}
]
}
}
Set your new policy.json file using the setIamPolicy method.
curl -i -H "Content-Type:application/json" \
-H "Authentication: Bearer $(gcloud auth print-access-token)" \
${IAP_BASE_URL}/compute/services/${BACKEND_SERVICE_NAME}:setIamPolicy \
-d @${JSON_NEW_POLICY}
Use hostname and path conditions
Access to your app can be secured using the hostname and path of a request URL.
For example, the request.path.startsWith IAM condition can be
used to only grant access to employees in the Privileged Access group if
the URL path starts with /admin .
For more information about using hostname and path conditions, see
request attributes .
String normalization
A URL has a hostname and path. For example, the URL https://sheets.google.com/create?query=param
has a hostname of sheets.google.com and a path of /create .
Backends can interpret hostnames and paths in different ways.
To remove ambiguity, IAP normalizes hostname and path
strings when checking policies.
IAP performs two policy
checks when a request has a non-normalized path. If the non-normalized
path passes the policy check, IAP normalizes the path and a
second policy check is performed. Access is granted if both the non-normalized
and normalized paths pass the policy check.
For example, if a request has the path /internal;some_param/admin ,
IAP first performs a policy
check on the non-normalized path ( /internal ). If that passes,
IAP performs a second policy check on the normalized path
( /internal/admin ).
Hostnames
Hostnames are normalized by:
Removing trailing dots
Lowercasing characters
Converting to ASCII
Hostnames that include non-ASCII characters are further normalized with
punycoding. You need to punycode your hostname string for a match to be made.
To punycode your hostname string, use a converter
like Punycoder .
The following are examples of normalized hostnames:
FOO.com is normalized to foo.com
café.fr is normalized to xn--caf-dma.fr
Paths
Paths are normalized by:
Removing path params
Resolving relative paths to their absolute equivalent
A path param includes all
characters from a ; to either the next / or the end of the path.
Requests that contain ..; at the
beginning of a path section are considered invalid.
For example, /..;bar/ and /bar/..;/ return the HTTP 400: Bad Request
error.
The following are examples of normalized paths:
/internal;some_param/admin is normalized to /internal/admin
/a/../b is normalized to /b
/bar;param1/baz;baz;param2 is normalized to /bar/baz
Subdomain endings
A policy set with request.host.endsWith("google.com") will match to both
sub_domain.google.com and testgoogle.com . If your goal is to limit your
policy to all subdomains the end with google.com , set your policy to
request.host.endsWith(".google.com") .
Note that setting your policy to request.host.endsWith(".google.com") will
match with sub_domain.google.com but won't match with google.com due to the
additional . .
Cloud Audit Logs and access levels
Enabling Cloud Audit Logs for
your IAP-secured project lets you see authorized and
unauthorized access requests. View requests and all the access levels
a requester has met by following the process following:
Go to the Google Cloud console
Logs Explorer for your project.
Go to the logs page
On the resource selector drop-down list, select a resource.
IAP-secured HTTPS resources are under
App Engine Application and Compute Engine Backend Service .
IAP-secured SSH and TCP resources are under
Compute Engine VM instance
.
On the logs type drop-down list, select
data_access .
The data_access log type only appears if there was
traffic to your resource after you enabled Cloud Audit Logs for
IAP.
Click to expand the date and time of the access you want to review.
Authorized access has a blue i icon.
Unauthorized access has an orange !! icon.
View the access levels the requester has met by clicking to expand sections
until you reach protoPayload > requestMetadata >
requestAttributes > auth >
accessLevels .
Note that all access levels that a user has met are visible when viewing a
request, including access levels that weren't required to access it. Viewing
an unauthorized request doesn't indicate what access levels weren't met. This
is determined by comparing the conditions on the resource to the
access levels visible on the request.
See the Cloud Audit Logs guide for more
information about logs.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
