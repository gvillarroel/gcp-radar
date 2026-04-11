---
title: "Manage access to IAP-secured resources \_|\_ Identity-Aware Proxy \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/iap/docs/managing-access
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iap/docs/managing-access
source_metadata:
  url: https://docs.cloud.google.com/iap/docs/managing-access
  title: "Manage access to IAP-secured resources \_|\_ Identity-Aware Proxy \_|\_\
    \ Google Cloud Documentation"
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
Manage access to IAP-secured resources
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to manage individual or group access to
Identity-Aware Proxy (IAP) secured resources at the resource level.
Overview
You can use IAP to configure IAP policies
for individual and Cloud Run resources in a Google Cloud project.
Multiple apps within a project can each have different access policies. This
includes projects that have Compute Engine, Google Kubernetes Engine, and
App Engine apps. For App Engine apps, individual versions and services can
have different access policies applied.
To manage project level and higher access, use the IAM admin
page . Lists of users who have access (the "principals")
at the project level applies to all IAP-secured resources in
the project.
Before you begin
Before you begin, you'll need the following:
An IAP-secured resource to which you want to add individual
or group access.
User or group names for which you want to add access.
Turn IAP on and off
To turn IAP on and off, certain permissions are needed.
The following table shows the permission needed for each app type.
App type
Permission required
App Engine
appengine.applications.update
Compute Engine, Google Kubernetes Engine, or Cloud Run
compute.backendServices.update
These permissions are granted by roles such as Project Editor, App Engine Admin,
and Compute Network Admin. While these roles allow turning
IAP on and off, they don't have the permissions needed to
modify access policies.
In addition, turning IAP on with the Google Cloud console
might also require the clientauthconfig.clients.create ,
clientauthconfig.clients.update , and clientauthconfig.clients.getWithSecret
permissions. These permissions are granted by the Project Editor role.
To learn more about granting roles, see Granting, changing, and revoking access .
Manage access in the Google Cloud console
To control access to a IAP-secured resource with the
Google Cloud console, follow the process to add or remove access.
Add access
Go to the Identity-Aware Proxy page .
Go to the Identity-Aware Proxy page
Select the resource you want to secure with IAP. The following resource selections secure a set group of resources:
All Web Services : All resources in the project will be secured. Note that this is not the same as granting project level access with the IAM admin page . A user granted the IAP Policy Admin role at the All Web Services resource level will only have permissions to IAP policies.
Backend Services : All backend services will be secured.
On the right side Info panel , add the email addresses of groups
or individuals to whom you want to grant an Identity and Access Management (IAM)
role for the resource.
Apply access policy roles to the principal by selecting from the following roles in the Select a role dropdown:
Owner : Grants the same access as IAP Policy Admin . Use the IAP Policy Admin role instead. This role only allows modifying policies, and doesn't grant access to the app.
IAP Policy Admin : Grants administrator rights over IAP policies.
IAP-Secured Web App User : Grants access to the app and other HTTPS resources that use IAP.
Security Reviewer : Grants permission to view and audit IAP policies.
When you're finished adding email addresses and setting roles, click Add
Remove access
Go to the Identity-Aware Proxy page .
Go to the Identity-Aware Proxy page
Select the resource that is secured with IAP.
On the right side Info panel , select the section that corresponds to the role you want to remove from a principal.
In the expanded section, next to each user or group name for which you want to remove the role, click Remove .
In the Remove principal dialog that appears, click Remove .
Manage access with the API
IAM provides a standard set of methods for
creating and managing access control policies on Google Cloud resources.
Resources and permissions
The IAP API lets you to apply IAM
permissions to individual resources in a IAP-secured project.
IAM permissions granted at a certain level apply to all levels
underneath it. For example, a permission granted at the project level applies to
all Google Cloud resources in the project. Access for project-level and
above is managed in the
IAM admin page , but will be
displayed in the
IAP admin page .
Users need certain permissions to access an app that's secured by IAP.
To grant these permissions, administrators can use an API to update IAM policies. The
iap.webServiceVersions.accessViaIAP permission grants user access to an app. If
you're using IAP to control access to administrative services
like SSH and RDP, users will need the iap.tunnelInstances.accessViaIAP
permission.
Each IAP resource has its own getIamPolicy and setIamPolicy
permission that grants the ability to manage access policies for that resource
and its children.
To call the IAM API, construct a call with a URL path to a
resource. The following is an example call that gets the IAM
policy for an App Engine app service version.
https://iap.googleapis.com/v1/projects/ PROJECT_NUMBER /iap_web/ appengine- APP_ID /services/ SERVICE_ID /versions/ VERSION_ID :getIamPolicy
The following table lists supported resource types, as well as the permissions required to call the IAM API.
Resource type
Permissions
Every IAP-secured web app in the project This is the same as the All Web Services checkbox on the IAP admin page. Path
https://iap.googleapis.com/v1/projects/ PROJECT_NUMBER /iap_web
iap.web.getIamPolicy iap.web.setIamPolicy
Every Backend service in the project This is the same as the Backend Service checkbox on the IAP admin page. Paths Global scope:
https://iap.googleapis.com/v1/projects/ PROJECT_NUMBER /iap_web/compute Regional scope:
https://iap.googleapis.com/v1/projects/ PROJECT_NUMBER /iap_web/compute- REGION_NAME
iap.webTypes.getIamPolicy iap.webTypes.setIamPolicy
Every forwarding rule in the project Permissions for all forwarding rules in the project. Paths Global scope:
https://iap.googleapis.com/v1/projects/ PROJECT_NUMBER /iap_web/forwarding_rule Regional scope:
https://iap.googleapis.com/v1/projects/ PROJECT_NUMBER /iap_web/forwarding_rule- REGION_NAME
iap.webTypes.getIamPolicy iap.webTypes.setIamPolicy
A region for every Cloud Run service in the project Permissions for all Cloud Run services in a region in the project. Path
https://iap.googleapis.com/v1/projects/ PROJECT_NUMBER /iap_web/cloud_run- REGION_NAME
iap.webTypes.getIamPolicy iap.webTypes.setIamPolicy
A Cloud Run service Permissions for a Cloud Run service. All Cloud Run services are regional. Path
https://iap.googleapis.com/v1/projects/ PROJECT_NUMBER /iap_web/cloud_run- REGION_NAME /services/ SERVICE_NAME
iap.webServices.getIamPolicy iap.webServices.setIamPolicy
An App Engine app This is the same as the App Engine app checkbox on the IAP admin page. Path
https://iap.googleapis.com/v1/projects/ PROJECT_NUMBER /iap_web/appengine-APP_ID
iap.webTypes.getIamPolicy iap.webTypes.setIamPolicy
A Compute Engine backend service The backend service path can specify either the backend service ID or the backend service name. Paths Global scope:
https://iap.googleapis.com/v1/projects/ PROJECT_NUMBER /iap_web/compute/services/ BACKEND_SERVICE_ID or BACKEND_SERVICE_NAME Regional scope:
https://iap.googleapis.com/v1/projects/ PROJECT_NUMBER /iap_web/compute- REGION_NAME / services/ BACKEND_SERVICE_ID or BACKEND_SERVICE_NAME
iap.webServices.getIamPolicy iap.webServices.setIamPolicy
A Compute Engine forwarding rule Permissions for a forwarding rule. The forwarding rule path can specify either the Forwarding rule id or forwarding rule name. Paths Global scope:
https://iap.googleapis.com/v1/projects/ PROJECT_NUMBER /iap_web/forwarding_rule/services/ FORWARDING_RULE_ID or FORWARDING_RULE_NAME Regional scope:
https://iap.googleapis.com/v1/projects/ PROJECT_NUMBER /iap_web/forwarding_rule- REGION_NAME / services/ FORWARDING_RULE_ID or FORWARDING_RULE_NAME
iap.webServices.getIamPolicy iap.webServices.setIamPolicy
An App Engine app service Path
https://iap.googleapis.com/v1/projects/ PROJECT_NUMBER /iap_web/appengine- APP_ID / services/ APP_SERVICE_ID
iap.webServices.getIamPolicy iap.webServices.setIamPolicy
An App Engine service version Compute Engine doesn't support versioning. Path https://iap.googleapis.com/v1/projects/ PROJECT_NUMBER /iap_web/appengine- APP_ID / services/ APP_SERVICE_ID /versions/ VERSION_ID
iap.webServiceVersions.getIamPolicy iap.webServiceVersions.setIamPolicy
Every IAP-secured VM instance in the project This is the same as the All Tunnel Resources checkbox on the IAP admin page. Path
https://iap.googleapis.com/v1/projects/ PROJECT_NUMBER /iap_tunnel
iap.tunnel.getIamPolicy iap.tunnel.setIamPolicy
A zone that has at least one VM instance This is the same as a zone name checkbox on the IAP admin page, for example, us-central1-c . Path
https://iap.googleapis.com/v1/projects/ PROJECT_NUMBER /iap_tunnel/zones/ ZONE_NAME
iap.tunnelZones.getIamPolicy iap.tunnelZones.setIamPolicy
An individual VM instance Path
https://iap.googleapis.com/v1/projects/ PROJECT_NUMBER /iap_tunnel/zones/ ZONE_NAME /instances/ INSTANCE_ID or INSTANCE_NAME
iap.tunnelInstances.getIamPolicy iap.tunnelInstances.setIamPolicy
A region that has at least one destination group, for example, us-central1 Path
https://iap.googleapis.com/v1/projects/ PROJECT_NUMBER /iap_tunnel/locations/ REGION_NAME
iap.tunnelLocations.getIamPolicy iap.tunnelLocations.setIamPolicy
An individual destination group Path
https://iap.googleapis.com/v1/projects/ PROJECT_NUMBER /iap_tunnel/locations/ REGION_NAME /destGroups/ GROUP_NAME
iap.tunnelDestGroups.getIamPolicy iap.tunnelDestGroups.setIamPolicy
Roles
The following table lists the IAP IAM roles
with a corresponding list of all of the IAP-specific
permissions each role includes. For more information about IAM
roles see Managing Roles and Permissions .
Role
Includes permission(s)
Description
IAP-Secured Web App User ( roles/iap.httpsResourceAccessor )
iap.webServiceVersions.accessViaIAP
Grants access to App Engine and Compute Engine resources.
IAP-Secured Tunnel User ( roles/iap.tunnelResourceAccessor )
iap.tunnelInstances.accessViaIAP iap.tunnelDestGroups.accessViaIAP
Grants access to VM instances secured by IAP.
IAP Policy Admin ( roles/iap.admin )
iap.web.getIamPolicy iap.web.setIamPolicy iap.webTypes.getIamPolicy iap.webTypes.setIamPolicy iap.webServices.getIamPolicy iap.webServices.setIamPolicy iap.webServiceVersions.getIamPolicy iap.webServiceVersions.setIamPolicy iap.tunnel.getIamPolicy iap.tunnel.setIamPolicy iap.tunnelZones.getIamPolicy iap.tunnelZones.setIamPolicy iap.tunnelInstances.getIamPolicy iap.tunnelInstances.setIamPolicy
Grants IAP administrative rights to manage IAP access policies of resources.
Manage access with the Google Cloud CLI
You can also manage access using the Google Cloud CLI.
Deny access
Identity and Access Management (IAM) deny policies
let you set guardrails on access to Google Cloud resources.
For a list of scenarios where deny policies are useful, see
use-cases .
You can create deny policies and include all of the IAP permissions in
those policies. For the list of IAP permissions that you can add
to a deny policy, see Permissions supported in deny policies
and search for iap.googleapis.com . Although deny policies can be applied to
any IAP permissions, their effectiveness is tied to a deny policy
attachment point .
Some IAP permissions are only effective at their specific resource
level and not on its descendants. For example, iap.organizations.getSettings
gives access to getSettings at the organization level and not to the
organization's descendants. This means that admins must explicitly list all
relevant granular permissions when crafting deny policies to deny access at an
attachment point and its descendants.
For a complete list of such granular permissions, see
Permissions supported in deny policies .
All permissions under FQDN iap.googleapis.com and the resource types
iap.organizations , iap.folders , iap.projects , iap.web , iap.webTypes ,
iap.webServices , iap.webServicesVersions are granular permissions.
The following is an example of an IAM deny policy to
deny access to the getSettings API to a principal at an organization and its
descendants.
{
"name" : "policies/cloudresourcemanager.googleapis.com%2Forganizations%2F253519172624/denypolicies/testpolicyid" ,
"uid" : "06ccd2eb-d2a5-5dd1-a746-eaf4c6g3f816" ,
"kind" : "DenyPolicy" ,
"displayName" : "Only project admins can delete projects." ,
"etag" : "MTc1MTkzMjY0MjUyMTExODMxMDQ=" ,
"createTime" : "2021-09-07T23:15:35.258319Z" ,
"updateTime" : "2021-09-07T23:15:35.258319Z" ,
"rules" : [
{
"denyRule" : {
"deniedPrincipals" : [
"principalSet://goog/public:all"
],
"deniedPermissions" : [
"iap.googleapis.com/iap.organizations.getSettings" ,
"iap.googleapis.com/iap.folders.getSettings" ,
"iap.googleapis.com/iap.projects.getSettings" ,
"iap.googleapis.com/iap.web.getSettings" ,
"iap.googleapis.com/iap.webTypes.getSettings" ,
"iap.googleapis.com/iap.webServices.getSettings" ,
"iap.googleapis.com/iap.webServicesVersions.getSettings" ,
],
}
}
]
}
Instead of specifying all granular permissions, the following is an example of
the IAM deny policy with only one permission: *.getSettings .
{
"name" : "policies/cloudresourcemanager.googleapis.com%2Forganizations%2F253519172624/denypolicies/testpolicyid" ,
"uid" : "06ccd2eb-d2a5-5dd1-a746-eaf4c6g3f816" ,
"kind" : "DenyPolicy" ,
"displayName" : "Only project admins can delete projects." ,
"etag" : "MTc1MTkzMjY0MjUyMTExODMxMDQ=" ,
"createTime" : "2021-09-07T23:15:35.258319Z" ,
"updateTime" : "2021-09-07T23:15:35.258319Z" ,
"rules" : [
{
"denyRule" : {
"deniedPrincipals" : [
"principalSet://goog/public:all"
],
"deniedPermissions" : [
"iap.googleapis.com/*.getSettings" ,
],
}
}
]
}
The following are some simpler ways to create an IAM deny policy
without having to specify all of the granular permissions.
Admin action
Permission in deny policy
Deny specific IAP permissions on all IAP resource types
*.updateSettings *.getSettings *.setIamPolicy *.getIamPolicy
Deny all IAP permissions at a specific resource type
iap.organizations.* iap.folders.* iap.projects.* iap.web.* iap.webTypes.* iap.webServices.* iap.webServicesVersions.*
Public access
To give everyone access to a resource, grant a role to one of the following
principals:
allAuthenticatedUsers : Anyone who is authenticated with a Google account or
a service account.
allUsers : Anyone who is on the internet, including authenticated and
unauthenticated users. The signed header for the
request won't have a sub or email
claim .
If public access is granted, IAP won't generate
Cloud Audit Logs logs for the request.
Currently, bindings that grant public access can't have a condition
associated with it.
For example, a policy that allows anyone
access to a resource if the request path starts with /public/ is invalid.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
