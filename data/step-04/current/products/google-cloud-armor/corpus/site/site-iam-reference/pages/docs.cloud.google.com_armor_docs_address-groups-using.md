---
title: "Configure address groups \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/armor/docs/address-groups-using
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/armor/docs/address-groups-using
source_metadata:
  url: https://docs.cloud.google.com/armor/docs/address-groups-using
  title: "Configure address groups \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Google Cloud Armor
Guides
Send feedback
Configure address groups
Stay organized with collections
Save and categorize content based on your preferences.
Address groups let you combine multiple IP addresses and IP address ranges into
a single named logical unit, which you can use across multiple products. This
document shows you how to use address groups with Google Cloud Armor security
policies. You need an active Google Cloud Armor Enterprise subscription to use
address groups.
Before you begin
Before you configure address groups, you must first enable the Network Security
API networksecurity.googleapis.com .
IAM roles
To create and manage an address group, you need the
Compute Network Admin role ( roles/compute.networkAdmin ). You can also define
a custom role with an equivalent set of permissions.
The following table provides a list of Identity and Access Management (IAM) permissions
required to perform a set of tasks on address groups.
Task
IAM role name
IAM permissions
Create and manage address groups
Compute Network Admin ( roles/compute.networkAdmin )
networksecurity.addressGroups.*
Discover and view address groups
Compute Network User ( roles/compute.networkUser )
networksecurity.addressGroups.list
networksecurity.addressGroups.get
networksecurity.addressGroups.use
For more information about which roles include specific IAM
permissions, see the
IAM roles and permissions index .
Use project-scoped address groups
The following sections explain how to use the Google Cloud console or the
Google Cloud CLI to create and modify project-scoped address groups, and how to
use project-scoped address groups with your security policies.
Create or modify project-scoped address groups
The following sections explain how to create project-scoped address groups, how
to add and remove addresses from project-scoped address groups, and how to
delete project-scoped address groups.
Create a project-scoped address group
When you create an address group, you must specify its capacity and IP address
version using the --capacity and --type flags respectively. You cannot
change these values after you create the address group.
In addition, the maximum capacity for Cloud Armor might be higher than
the maximum capacity for other products, like Cloud Next Generation Firewall. Therefore, if
you want to use the same address group across more than one product, you must
set the capacity to be less than or equal to the lowest maximum capacity among
those products.
Console
In the Google Cloud console, go to the Address groups page.
Go to Address groups
In the project selector menu, if available, select your project.
Click Create Address Group .
In the Name field, enter a name.
(Optional): In the Description field, add a description.
For Scope , choose Global .
For Type , choose IPv4 or IPv6 .
For Purpose , choose Cloud Armor ; alternatively, choose
Firewall and Cloud Armor if you also plan to use the address group
with Cloud Next Generation Firewall policies.
For more information about choosing a purpose, see
address group specification .
In the Capacity field, enter the capacity of the address group.
Note: After the address group capacity is set, it cannot be changed.
Make sure that you set the capacity to an appropriate value based
on your use case.
In the IP Addresses field, list the IP addresses or IP ranges that
you want to include in the address group separated by commas. For example,
1.1.1.0/24,1.2.0.0 .
The number of IP addresses or IP ranges cannot exceed the configured
capacity.
Click Create .
gcloud
The following example uses the
gcloud network-security address-groups create command
to create an address group called GROUP_NAME with a
capacity of 1,000 IPv4 addresses, which can be used with both
Cloud Armor or Cloud NGFW:
gcloud network-security address-groups create GROUP_NAME \
--location global \
--description "address group description" \
--capacity 1000 \
--type IPv4 \
--purpose DEFAULT,CLOUD_ARMOR
Alternatively, you can create an address group with a larger capacity by
setting the purpose exclusively to CLOUD_ARMOR . In the following example,
you create an address group with a capacity of 10,000 IPv6 IP address
ranges:
gcloud network-security address-groups create GROUP_NAME \
--location global \
--description "address group description" \
--capacity 10000 \
--type IPv6 \
--purpose CLOUD_ARMOR
Add items to a project-scoped address group
After you create an address group, you can add items.
Console
In the Google Cloud console, go to the Address groups page.
Go to Address groups
In the project selector menu, if available, select your project.
To edit an address group, click the name of your address group.
Click Edit .
In the IP Addresses field, add the new items to the comma-separated
list of IP addresses. Alternatively, you can click Import addresses to
upload a CSV file with a list of IP addresses.
Click Save .
gcloud
In the following example, you use the
gcloud network-security address-groups add-items command
to add the IP addresses 192.168.1.2 ,
192.168.1.8 , and 192.168.1.9 to the address group
GROUP_NAME . You provide a comma-separated list of
items with the --item flag:
gcloud network-security address-groups add-items GROUP_NAME \
--location global \
--items 192.168.1.2,192.168.1.8,192.168.1.9
Remove items from a project-scoped address group
Use the following steps to remove items from an address group:
Console
In the Google Cloud console, go to the Address groups page.
Go to Address groups
In the project selector menu, if available, select your project.
To edit an address group, click the name of your address group.
Click Edit .
In the IP Addresses field, delete the items that you want to remove
from the comma-separated list of IP addresses.
Click Save .
gcloud
The following example uses the
gcloud network-security address-groups remove-items command
to remove the IP addresses 192.168.1.2 , 192.168.1.8 , and 192.168.1.9
that you added in the previous command:
gcloud network-security address-groups remove-items GROUP_NAME \
--location global \
--items 192.168.1.2,192.168.1.8,192.168.1.9
Clone a project-scoped address group
Use the following steps to clone items from an address group:
Console
In the Google Cloud console, go to the Address groups page.
Go to Address groups
In the project selector menu, if available, select your project.
To clone an address group, click the name of your address group.
Click Clone .
In the Name field, enter the name of the cloned address group to be created.
Click Clone .
gcloud
In the following example, you use the
gcloud network-security address-groups clone-items
command
to clone the IP addresses from a source address group
SOURCE_GROUP_NAME
into a target address group GROUP_NAME :
gcloud network-security address-groups clone-items GROUP_NAME \
--location global \
--source SOURCE_GROUP_NAME
Delete a project-scoped address group
You can't delete an address group if it is referenced by a resource, including a
firewall policy or security policy. Use the following steps to delete an address
group:
Console
In the Google Cloud console, go to the Address groups page.
Go to Address groups
In the project selector menu, if available, select your project.
Select the checkbox next to the address group that you want to delete.
Make sure that the selected address group is not referenced by any
firewall or security policy.
Click Delete , and then click Delete again to confirm.
gcloud
The following example uses the
gcloud network-security address-groups delete command
to delete an address group called GROUP_NAME .
gcloud network-security address-groups delete GROUP_NAME \
--location global
Use project-scoped address groups with security policies
After you create an address group and add IP addresses to it, you can
use it with any existing Cloud Armor backend security policy. The
following examples show two different ways to use address groups.
Deny a group of IP addresses
For this example, imagine that you have an IP address group called
MALICIOUS_IPS with 10,000 IP addresses that you know
are malicious. You can deny all of these IP addresses using a single security
policy deny rule with the following match condition:
evaluateAddressGroup(' MALICIOUS_IPS ', origin.ip)
Reuse a group of IP address ranges in multiple security policies
For this example, imagine that you have the same list of 10,000 IP addresses as
in the previous example, but that some of the IP addresses are known to be
web crawlers. You want to block all these IP addresses from some backend
services, but allow the web crawlers to access other backend services to improve
search engine optimization (SEO). Use the following steps to deny all of the
addresses access to BACKEND_SERVICE_1 , while allowing
IP address ranges 66.249.77.32/27 and 66.249.77.64/27 to access
BACKEND_SERVICE_2 :
Create a backend security policy called POLICY_1 ,
and attach it to BACKEND_SERVICE_1 .
In POLICY_1 , create a deny rule with the following
match condition:
evaluateAddressGroup(' MALICIOUS_IPS ', origin.ip)
Create a second backend security policy called
POLICY_2 , and attach it to
BACKEND_SERVICE_2 .
In POLICY_2 , create a deny rule with the following
match condition, which excludes 66.249.77.32/27 and 66.249.77.64/27 :
evaluateAddressGroup(' MALICIOUS_IPS ', origin.ip, [66.249.77.32/27, 66.249.77.64/27])
Use an address group to match against user IP addresses
To use an address group to match against originating client ("user") IP
addresses, you must configure userIpRequestHeaders[] in the security policy.
It's important to note that in the following conditions, you receive the source
IP address of the request and not the IP address of the originating client
because the value of origin.user_ip defaults to the value of origin.ip :
You don't configure the userIpRequestHeaders[] option.
The configured headers aren't present.
The configured headers contain invalid IP address values.
For this example, imagine that you have an IP address group called
MALICIOUS_IPS with 10,000 IP addresses that you know
are malicious. In addition, you use an upstream proxy, which includes
information about the originating clients in the header. You can deny all of
these IP addresses using a single security policy deny rule with the following
match condition:
evaluateAddressGroup(' MALICIOUS_IPS ', origin.user_ip)
For more information about IP addresses, see
Attributes .
For more information about user IP addresses, see
User IP addresses overview .
Use organization-scoped address groups
The following sections explain how to create and modify organization-scoped
address groups using the Google Cloud console or the Google Cloud CLI, and how to use
organization-scoped address groups with your security policies.
Create or modify organization-scoped address groups
You can use organization-scoped address groups with both service-level
security policies and hierarchical security policies.
The following sections explain how to create organization-scoped address groups,
how to add and remove addresses from organization-scoped address groups, and
how to delete organization-scoped address groups.
Create an organization-scoped address group
When you create an address group, you must specify its capacity and IP address
version using the --capacity and --type flags respectively. You cannot
change these values after you create the address group.
In addition, the maximum capacity for Cloud Armor might be higher than
the maximum capacity for other products, like Cloud Next Generation Firewall. Therefore, if
you want to use the same address group across more than one product, you must
set the capacity to be less than or equal to the lowest maximum capacity among
those products.
Console
In the Google Cloud console, go to the Address groups page.
Go to Address groups
In the project selector menu, if available, select your organization.
Click Create Address Group .
In the Name field, enter a name.
Optional: In the Description field, add a description.
For Scope , choose Global .
For Type , choose IPv4 or IPv6 .
For Purpose , choose Cloud Armor ; alternatively, choose
Cloud NGFW and Cloud Armor if you also plan to use the address group
with Cloud Next Generation Firewall policies.
For more information about choosing a purpose for an address group, see
Specification .
In the Capacity field, enter the capacity of the address group.
Note: After the address group capacity is set, it cannot be changed.
Make sure that you set the capacity to an appropriate value based
on your use case.
In the IP Addresses field, list the IP addresses or IP ranges that
you want to include in the address group separated by commas. For example,
1.1.1.0/24,1.2.0.0 .
The number of IP addresses or IP ranges cannot exceed the configured
capacity.
Click Create .
gcloud
The following example uses the
gcloud network-security org-address-groups create command
to create an organization-scoped address group called
GROUP_NAME with a capacity of 1,000 IPv4 addresses,
which can be used with both Cloud Armor or Cloud NGFW:
gcloud network-security org-address-groups create GROUP_NAME \
--location global \
--description "org address group description" \
--capacity 1000 \
--type IPv4 \
--purpose DEFAULT,CLOUD_ARMOR
Alternatively, you can create an organization-scoped address group with a
larger capacity by setting the purpose exclusively to CLOUD_ARMOR . In the
following example, you create an address group with a capacity of 10,000 IPv6
IP address ranges:
gcloud network-security org-address-groups create GROUP_NAME \
--location global \
--description "org address group description" \
--capacity 10000 \
--type IPv6 \
--purpose CLOUD_ARMOR
Add items to an organization-scoped address group
After you create an organization-scoped address group, you can add items.
Console
In the Google Cloud console, go to the Address groups page.
Go to Address groups
In the project selector menu, if available, select your organization.
To edit an address group, click the name of your address group.
Click Edit .
In the IP Addresses field, add the new items to the comma-separated
list of IP addresses. Alternatively, you can click Import addresses to
upload a CSV file with a list of IP addresses.
Click Save .
gcloud
In the following example, you use the
gcloud network-security org-address-groups add-items command
to add the IP addresses 192.168.1.2 ,
192.168.1.8 , and 192.168.1.9 to the organization-scoped address group
GROUP_NAME . You provide a comma-separated list of
items with the --items flag:
gcloud network-security org-address-groups add-items GROUP_NAME \
--location global \
--items 192.168.1.2,192.168.1.8,192.168.1.9
Remove items from an organization-scoped address group
Use the following steps to remove items from an organization-scoped address
group:
Console
In the Google Cloud console, go to the Address groups page.
Go to Address groups
In the project selector menu, if available, select your organization.
To edit an address group, click the name of your address group.
Click Edit .
In the IP Addresses field, delete the items that you want to remove
from the comma-separated list of IP addresses.
Click Save .
gcloud
The following example uses the
gcloud network-security org-address-groups remove-items command
to remove the IP addresses 192.168.1.2 , 192.168.1.8 , and 192.168.1.9
that you added in the previous command:
gcloud network-security org-address-groups remove-items GROUP_NAME \
--location global \
--items 192.168.1.2,192.168.1.8,192.168.1.9
Clone an organization-scoped address group
Use the following steps to clone items from an address group:
Console
In the Google Cloud console, go to the Address groups page.
Go to Address groups
In the project selector menu, if available, select your organization.
To clone an address group, click the name of your address group.
Click Clone .
In the Name field, enter the name of the cloned address group to be created.
Click Clone .
gcloud
In the following example, you use
the gcloud network-security org-address-groups clone-items
command
to clone the IP addresses from a source address group
SOURCE_GROUP_NAME
into a target address group GROUP_NAME :
gcloud network-security org-address-groups clone-items GROUP_NAME \
--location global \
--source SOURCE_GROUP_NAME
Delete an organization-scoped address group
You can't delete an organization-scoped address group if it is referenced by a
resource, including a firewall policy or security policy. Use the following
steps to delete an address group:
Console
In the Google Cloud console, go to the Address groups page.
Go to Address groups
In the project selector menu, if available, select your organization.
Select the checkbox next to the address group that you want to delete.
Make sure that the selected address group isn't referenced by any
firewall or security policy.
Click Delete , and then click Delete again to confirm.
gcloud
The following example uses the
gcloud network-security org-address-groups delete command
to delete an address group called GROUP_NAME .
gcloud network-security org-address-groups delete GROUP_NAME \
--location global
Use organization-scoped address groups with security policies
After you create an address group and add IP addresses to it, you can
use it with any existing Cloud Armor backend security policy. The
following examples show you two different ways to use address groups.
Deny a group of IP addresses for all backend services in an organization
For this example, imagine that you have an organization-scoped IP address group
called MALICIOUS_IPS with 10,000 IP addresses that you
know are malicious. You can deny all of these IP addresses for all of the
backend services in your organization by using a single
hierarchical security policy. Create a hierarchical security policy, then add a
deny rule with the following match condition:
evaluateOrganizationAddressGroup(' MALICIOUS_IPS ', origin.ip)
Finally, associate the hierarchical security policy to all of the backend
services in your organization, replacing POLICY_NAME
with the name of your hierarchical security policy and
ORGANIZATION_ID with the ID of your organization:
gcloud compute org-security-policies associations create \
--security-policy= POLICY_NAME \
--organization= ORGANIZATION_ID
Reuse a group of IP address ranges for all backend services within an organization
For this example, imagine that you have the same list of 10,000 IP addresses as
in the previous example, but that some of the IP addresses are known to be
web crawlers. You want to block the non-web crawler IP addresses from accessing
all of the backend services in your organization, but you want to allow
project-scoped security policies to determine whether the web crawlers can
access your backend services to improve search engine optimization (SEO).
Use the following steps to deny all of the addresses access to
BACKEND_SERVICE_1 , while allowing IP address ranges
66.249.77.32/27 and 66.249.77.64/27 to access
BACKEND_SERVICE_2 :
Create a backend security policy called
BACKEND_POLICY_1 .
Add a deny rule to BACKEND_POLICY_1 with the
following match condition, which blocks all of the IP addresses in
MALICIOUS_IPS :
evaluateOrganizationAddressGroup(' MALICIOUS_IPS ', origin.ip)
Use the following command to associate
BACKEND_POLICY_1 with
BACKEND_SERVICE_1 :
gcloud compute backend-services update BACKEND_SERVICE_1 \
--security-policy BACKEND_POLICY_1
Create a second backend security policy called
BACKEND_POLICY_2 .
Add a deny rule to BACKEND_POLICY_2 with the
following match condition, which blocks all of the IP addresses in
MALICIOUS_IPS except for 66.249.77.32/27 and
66.249.77.64/27 :
evaluateOrganizationAddressGroup(' MALICIOUS_IPS ', origin.ip, [`66.249.77.32/27`, `66.249.77.64/27`])
Use the following command to associate
BACKEND_POLICY_2 with
BACKEND_SERVICE_2 . Replace
ORG_ID with the ID of your organization:
gcloud compute backend-services update BACKEND_SERVICE_2 \
--security-policy BACKEND_POLICY_2
Use an address group to match against user IP addresses for all backend services in an organization
Caution: When you use origin.user_ip
as the second argument in evaluateOrganizationAddressGroup , you
must configure userIpRequestHeaders[] in the security policy.
The value of origin.user_ip defaults to the value of
origin.ip when you meet any of the following conditions:
You don't configure the userIpRequestHeaders[] option.
The configured headers aren't present.
The configured headers contain invalid IP address values.
For this example, imagine that you have an IP address group called
MALICIOUS_IPS with 10,000 IP addresses that you know
are malicious. In addition, you use an upstream proxy, which includes
information about the originating client IP address in the header. You can deny
all of these IP addresses from accessing all of the backend services in your
organization by using a single security policy deny rule with the following
match condition:
evaluateOrganizationAddressGroup(' MALICIOUS_IPS ', origin.user_ip)
For more information about IP addresses, see
Attributes .
For more information about user IP addresses, see
User IP addresses overview .
What's next
Configure custom rules language attributes
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
