---
title: "Integrate Active Directory with Google SecOps \_|\_ Google Security Operations\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs/reference/authentication
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory
  title: "Integrate Active Directory with Google SecOps \_|\_ Google Security Operations\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Google Security Operations
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Integrate Active Directory with
Google SecOps
This document explains how to integrate Active Directory with
Google Security Operations (Google SecOps).
Integration version: 37.0
This integration uses one or more open source components.
You can download a zipped copy of the full source code of this integration from
the Cloud Storage
bucket .
Use cases
The Active Directory integration can help you solve the following use cases:
Activate and deactivate users: use Google SecOps
capabilities to deactivate a potentially compromised user account and
prevent further unauthorized access.
Reset passwords: use Google SecOps capabilities
to automatically reset the user password in Active Directory and notify the
user of the change.
Manage groups: use Google SecOps capabilities
to add new users to the appropriate security groups based on their role and
ensure that the users have the correct access permissions.
Retrieve User Information: use Google SecOps
capabilities to retrieve user details such as group memberships, last sign
in time, and contact information about a specific user account.
Automate offboarding: use Google SecOps
capabilities to disable accounts, remove them from groups, and transfer file
ownership in a case when an employee offboards.
Before you begin
To successfully integrate Active Directory with Google SecOps,
it is required that you configure the /etc/hosts file.
If you have the DNS resolution configured with your DNS setup and your Active
Directory domain is resolved by the fully qualified DNS name, you don't need
to configure the /etc/hosts file.
Configure the /etc/hosts file
To configure the /etc/hosts file, complete the following steps:
On your remote agent container image, go to the /etc/hosts file.
Enter the following command to edit the /etc/hosts file:
sudo vi /etc/hosts/ .
In the /etc/hosts file, add the IP address and the hostname of the host
that you use to connect to Active Directory, such as
192.0.2.195 hostname.example .
Save the changes.
If you don't need the certification authority certificate for the
integration, proceed to configuring the integration parameters .
If you need the certification authority certificate for the integration, proceed
to the following section.
Optional: Configure the certification authority (CA) certificate
If required, you can configure the Active Directory integration using a
certification authority (CA) certificate file.
To configure the integration with a CA certificate, complete the following
steps:
To obtain the CA certificate, enter the cat mycert.crt command:
bash-3.2# cat mycert.crt
-----BEGIN CERTIFICATE-----
CERTIFICATE_STRING
-----END CERTIFICATE-----
bash-3.2#
To encode the root CA certificate file to the base64 format with the
-----BEGIN CERTIFICATE----- and -----END CERTIFICATE----- strings, enter
the cat mycert.crt |base64 command:
bash-3.2# cat mycert.crt |base64
BASE64_ENCODED_CERTIFICATE_STRING
bash-3.2#
Copy the
BASE64_ENCODED_CERTIFICATE_STRING
value and enter it in the CA Certificate File - parsed into Base64 String
parameter value field in Google SecOps Active Directory
integration configuration .
To configure the Server parameter Google SecOps Active
Directory integration configuration , enter the hostname of
your Active Directory server, not the IP address.
Click Test to test the configuration.
Integration parameters
The Active Directory integration requires the following parameters:
Parameter
Description
Server
Required.
The hostname, DNS name, or IP address of the Active Directory server. The
integration communicates using the LDAP protocol.
You can use a custom port by appending it to the address (such as,
mydomain.com:636 ).
By default, the integration uses port 636 when SSL/TLS is enabled and
port 389 when it's disabled.
Username
Required.
The email address of the user to connect to Active
Directory, such as user@example.com .
This parameter
also accepts the userPrincipalName attribute.
Domain
Required.
The full DNS path to your domain within the network
namespace.
To configure this parameter, enter the fully qualified
domain name (FQDN) of your domain if the following format:
SUBDOMAIN . ROOT_DOMAIN .
For example, if your internal Active Directory domain is
example.local , the FQDN to enter is
example.local . If your internal Active Directory domain is
corp.example.com , the FQDN to enter is
corp.example.com .
Password
Required.
The password for the user account.
Custom Query Fields
Optional.
Custom fields of the Active Directory integration,
such as customField1, customField2 .
CA Certificate File - parsed into Base64 String
Optional.
The CA certificate file string encoded into the
base64 format that you obtained when configuring the CA
certificate . To configure this parameter, enter the full
BASE64_ENCODED_CERTIFICATE_STRING value.
Use SSL
Optional.
If selected, the integration validates the SSL certificate when connecting to
the Active Directory server.
The integration uses secure LDAPS (port 636) when selected. If not
selected, it uses standard LDAP (port 389).
Not selected by default.
For instructions about how to configure an integration in
Google SecOps, see Configure
integrations .
You can make changes at a later stage, if needed. After you configure an
integration instance, you can use it in playbooks. For more information about
how to configure and support multiple instances, see Supporting
multiple instances .
Actions
For more information about actions, see
Respond to pending actions from Your Workdesk and Perform a
manual action .
Add User to Group
Use the Add User to Group action to add user to groups.
This action runs on the Google SecOps User entity.
Action inputs
The Add User to Group action requires the following parameters:
Parameter
Description
Group Name
Required.
A comma-separated list of groups to add users to.
Action outputs
The Add User to Group action provides the following outputs:
Action output type
Availability
Case wall attachment
Not available
Case wall link
Not available
Case wall table
Not available
Enrichment table
Not available
JSON result
Not available
Output messages
Available
Script result
Available
Output messages
The Add User to Group action can return the following output messages:
Output message
Message description
Successfully added the following users to the group
" GROUP_NAME " in Active Directory:
ENTITY_ID
The following users were already a part of the group
" GROUP_NAME " in Active Directory:
ENTITY_ID
Action wasn't able to add the following users to the group
" GROUP_NAME " in Active Directory:
ENTITY_ID
No users were added to the group
" GROUP_NAME " in Active
Directory.
No users were added to the provided groups in Active
Directory.
The action succeeded.
Error executing action "Add User to Group". Reason:
ERROR_REASON
The action failed.
Check the connection to the server,
input parameters, or credentials.
Script result
The following table lists the value for the script result output when using
the Add User to Group action:
Script result name
Value
is_success
True or False
Change Host OU
Use the Change Host OU action to change the organizational unit (OU) of a
host.
This action runs on the Google SecOps Hostname entity.
Action inputs
The Change Host OU action requires the following parameters:
Parameter
Description
OU Name
Required.
The name of the new user OU.
Action outputs
The Change Host OU action provides the following outputs:
Action output type
Availability
Case wall attachment
Not available
Case wall link
Not available
Case wall table
Not available
Enrichment table
Not available
JSON result
Not available
Script result
Available
Script result
The following table lists the value for the script result output when using
the Change Host OU action:
Script result name
Value
is_success
True or False
Change User OU
Use the Change User OU action to change the organizational unit (OU) of a
user.
This action runs on the Google SecOps User entity.
Action inputs
The Change User OU action requires the following parameters:
Parameter
Description
OU Name
Required.
The name of the new user OU.
Action outputs
The Change User OU action provides the following outputs:
Action output type
Availability
Case wall attachment
Not available
Case wall link
Not available
Case wall table
Not available
Enrichment table
Not available
JSON result
Not available
Script result
Available
Script result
The following table lists the value for the script result output when using
the Change User OU action:
Script result name
Value
is_success
True or False
Disable Account
Use the Disable Account action to disable a user account.
This action runs on the Google SecOps User entity.
Action inputs
None.
Action outputs
The Disable Account action provides the following outputs:
Action output type
Availability
Case wall attachment
Not available
Case wall link
Not available
Case wall table
Not available
Enrichment table
Not available
JSON result
Not available
Script result
Available
Script result
The following table lists the value for the script result output when using
the Disable Account action:
Script result name
Value
is_success
True or False
Disable Computer
Use the Disable Computer action to disable a computer account.
This action runs on the Google SecOps Hostname entity.
Action inputs
None.
Action outputs
The Disable Computer action provides the following outputs:
Action output type
Availability
Case wall attachment
Not available
Case wall link
Not available
Case wall table
Not available
Enrichment table
Not available
JSON result
Not available
Script result
Available
Script result
The following table lists the value for the script result output when using
the Disable Computer action:
Script result name
Value
is_success
True or False
Enable Account
Use the Enable Account action to enable a user account.
This action runs on the Google SecOps User entity.
Action inputs
None.
Action outputs
The Enable Account action provides the following outputs:
Action output type
Availability
Case wall attachment
Not available
Case wall link
Not available
Case wall table
Not available
Enrichment table
Not available
JSON result
Not available
Script result
Available
Script result
The following table lists the value for the script result output when using
the Enable Account action:
Script result name
Value
is_success
True or False
Enable Computer
Use the Enable Computer action to enable a computer account.
This action runs on the Google SecOps Hostname entity.
Action inputs
None.
Action outputs
The Enable Computer action provides the following outputs:
Action output type
Availability
Case wall attachment
Not available
Case wall link
Not available
Case wall table
Not available
Enrichment table
Not available
JSON result
Not available
Script result
Available
Script result
The following table lists the value for the script result output when using
the Enable Computer action:
Script result name
Value
is_success
True or False
Enrich Entities
Use the Enrich Entities action to enrich the Hostname or Username
entities with Active Directory properties.
This action is asynchronous. Adjust the script timeout value in the
Google SecOps IDE for the action, if needed.
The Enrich Entities action runs on the following Google SecOps
entities:
User
Hostname
Action inputs
The Enrich Entities action requires the following parameters:
Parameter
Description
Mark entities as internal
Required.
If selected, the action automatically marks the
successfully enriched entities as internal entities.
Specific Attribute Names To Enrich With
Optional.
A comma-separated list of attribute names to enrich
the entities with.
If you don't set any value, the action enriches
entities with all available attributes. If an attribute contains multiple
values, the action enriches the attribute with all available values.
This parameter is case sensitive.
Should Case Wall table be filtered by the specified
attributes?
Optional.
If selected, the action populates the case wall
table only with attributes that you specified in the Specific
Attribute Names To Enrich With parameter value.
Not selected by default.
Should JSON result be filtered by the specified
attributes?
Optional.
If selected, the JSON result returns only
attributes that you specified in the Specific
Attribute Names To Enrich With parameter value.
Not selected by default.
Action outputs
The Enrich Entities action provides the following outputs:
Action output type
Availability
Case wall attachment
Not available
Case wall link
Not available
Case wall table
Not available
Entity enrichment table
Available
JSON result
Available
Script result
Available
Entity enrichment
The Enrich Entities action supports the following entity enrichment:
Enrichment field name
Logic
AD_primaryGroupID
The action returns the value if it exists in the JSON result.
AD_logonCount
The action returns the value if it exists in the JSON result.
AD_cn
The action returns the value if it exists in the JSON result.
AD_countryCode
The action returns the value if it exists in the JSON result.
AD_objectClass
The action returns the value if it exists in the JSON result.
AD_userPrincipalName
The action returns the value if it exists in the JSON result.
AD_adminCount
The action returns the value if it exists in the JSON result.
AD_lastLogonTimestamp
The action returns the value if it exists in the JSON result.
AD_manager
The action returns the value if it exists in the JSON result.
AD_instanceType
The action returns the value if it exists in the JSON result.
AD_distinguishedName
The action returns the value if it exists in the JSON result.
AD_dSCorePropagationData
The action returns the value if it exists in the JSON result.
AD_msDS-SupportedEncryptionTypes
The action returns the value if it exists in the JSON result.
AD_objectSid
The action returns the value if it exists in the JSON result.
AD_whenCreated
The action returns the value if it exists in the JSON result.
AD_uSNCreated
The action returns the value if it exists in the JSON result.
AD_lockoutTime
The action returns the value if it exists in the JSON result.
AD_badPasswordTime
The action returns the value if it exists in the JSON result.
AD_pwdLastSet
The action returns the value if it exists in the JSON result.
AD_sAMAccountName
The action returns the value if it exists in the JSON result.
AD_objectCategory
The action returns the value if it exists in the JSON result.
AD_lastLogon
The action returns the value if it exists in the JSON result.
AD_objectGUID
The action returns the value if it exists in the JSON result.
AD_whenChanged
The action returns the value if it exists in the JSON result.
AD_badPwdCount
The action returns the value if it exists in the JSON result.
AD_accountExpires
The action returns the value if it exists in the JSON result.
AD_displayName
The action returns the value if it exists in the JSON result.
AD_name
The action returns the value if it exists in the JSON result.
AD_memberOf
The action returns the value if it exists in the JSON result.
AD_codePage
The action returns the value if it exists in the JSON result.
AD_userAccountControl
The action returns the value if it exists in the JSON result.
AD_sAMAccountType
The action returns the value if it exists in the JSON result.
AD_uSNChanged
The action returns the value if it exists in the JSON result.
AD_sn
The action returns the value if it exists in the JSON result.
AD_givenName
The action returns the value if it exists in the JSON result.
AD_lastLogoff
The action returns the value if it exists in the JSON result.
JSON result
The following example shows the JSON result output received when using the
Enrich Entities action:
[
{
"EntityResult" : {
"primaryGroupID" : [ 513 ],
"logonCount" : [ 6505 ],
"cn" : [ "user name" ],
"countryCode" : [ 0 ],
"objectClass" : [ "top" , "person" , "organizationalPerson" ],
"userPrincipalName" : [ "user@example.com" ],
"adminCount" : [ 1 ],
"lastLogonTimestamp" : [ "2019-01-09 08:42:03.540783+00:00" ],
"manager" : [ "CN=user name,OU=R&D,OU=TLV,OU=host name,DC=domain,DC=LOCAL" ],
"instanceType" : [ 4 ],
"distinguishedName" : [ "CN=user name,OU=R&D,OU=TLV,OU=host,DC=domain,DC=LOCAL" ],
"dSCorePropagationData" : [ "2019-01-14 14:39:16+00:00" ],
"msDS-SupportedEncryptionTypes" : [ 0 ],
"objectSid" : [ " ID " ],
"whenCreated" : [ "2011-11-07 08:00:44+00:00" ],
"uSNCreated" : [ 7288202 ],
"lockoutTime" : [ "1601-01-01 00:00:00+00:00" ],
"badPasswordTime" : [ "date" ],
"pwdLastSet" : [ "date" ],
"sAMAccountName" : [ "example" ],
"objectCategory" : [ "CN=Person,CN=Schema,CN=Configuration,DC=host,DC=LOCAL" ],
"lastLogon" : [ "2019-01-14 17:13:54.463070+00:00" ],
"objectGUID" : [ " GUID " ],
"whenChanged" : [ "2019-01-14 16:49:01+00:00" ],
"badPwdCount" : [ 1 ],
"accountExpires" : [ "9999-12-31 23:59:59.999999" ],
"displayName" : [ "example user" ],
"name" : [ "user" ],
"memberOf" : [ "CN=\\\\u05e7\\\\u05d1\\\\u05d5\\\\u05e6\\\\u05d4 \\\\u05d1\\\\u05e2\\\\u05d1\\\\u05e8\\\\u05d9\\\\u05ea,OU=TEST,OU=QA,OU=IT,OU=TLV,OU=host,DC=domain,DC=LOCAL" , "CN=Organization Management,OU=Microsoft Exchange Security Groups,DC=domain,DC=LOCAL" , "CN=Local Admin,OU=Groups,OU=IT,OU=TLV,OU=host,DC=domain,DC=LOCAL" ],
"codePage" : [ 0 ],
"userAccountControl" : [ 111 ],
"sAMAccountType" : [ 805306368 ],
"uSNChanged" : [ 15301168 ],
"sn" : [ "example" ],
"givenName" : [ "user" ],
"lastLogoff" : [ "1601-01-01 00:00:00+00:00"
]},
"Entity" : "user@example.com"
}
]
Script result
The following table lists the value for the script result output when using
the Enrich Entities action:
Script result name
Value
is_success
True or False
Force Password Update
Use the Force Password Update action to require a user to change their
password upon the following sign-in.
This action runs on the Google SecOps User entity.
Action inputs
None.
Action outputs
The Force Password Update action provides the following outputs:
Action output type
Availability
Case wall attachment
Not available
Case wall link
Not available
Case wall table
Not available
Enrichment table
Not available
JSON result
Not available
Script result
Available
Script result
The following table lists the value for the script result output when using
the Force Password Update action:
Script result name
Value
is_success
True or False
Get Group Members
Use the Get Group Members action to retrieve the members of a specified
Active Directory group.
This action supports retrieving both the user and hostname members and supports
searching within nested groups.
Action inputs
The Get Group Members action requires the following parameters:
Parameter
Description
Group Name
Required.
The name of the group that contains the listed
members.
Members Type
Required.
The member type of the group.
The default value is User .
Perform Nested Search
Optional.
If selected, the action retrieves additional details
about the groups that are a part of the main group.
Not selected by
default.
Limit
Required.
The maximum number of listings to retrieve from
Active Directory.
The default value is 100.
Action outputs
The Get Group Members action provides the following outputs:
Action output type
Availability
Case wall attachment
Not available
Case wall link
Not available
Case wall table
Not available
Enrichment table
Not available
JSON result
Available
Script result
Available
JSON result
The following example shows the JSON result output received when using the
Get Group Members action:
[
{
"cn" : "Example User1" ,
"displayName" : "Example User1" ,
"distinguishedName" : "CN=Example User1,OU=User Accounts,DC=example,DC=local"
},
{
"cn" : "Example User2" ,
"displayName" : "Example User2" ,
"distinguishedName" : "CN=Example User2,CN=Users,DC=example,DC=local"
},
{
"cn" : "Example User3" ,
"displayName" : "Example User3" ,
"distinguishedName" : "CN=Example User3,CN=Users,DC=example,DC=local"
}
]
Script result
The following table lists the value for the script result output when using
the Get Group Members action:
Script result name
Value
is_success
True or False
Get Manager Contact Details
Use the Get Manager Contact Details action to obtain the manager contact
details from Active Directory.
This action runs on the Google SecOps User entity.
Action inputs
None.
Action outputs
The Get Manager Contact Details action provides the following outputs:
Action output type
Availability
Case wall attachment
Not available
Case wall link
Not available
Case wall table
Not available
Entity enrichment table
Available
JSON result
Available
Output messages
Available
Script result
Available
Entity enrichment
The Get Manager Contact Details action supports the following entity
enrichment:
Enrichment field name
Logic
AD_Manager_Name
The action returns the value if it exists in the JSON result.
AD_Manager_phone
The action returns the value if it exists in the JSON result.
AD_primaryGroupID
The action returns the value if it exists in the JSON result.
AD_logonCount
The action returns the value if it exists in the JSON result.
AD_cn
The action returns the value if it exists in the JSON result.
AD_countryCode
The action returns the value if it exists in the JSON result.
AD_objectClass
The action returns the value if it exists in the JSON result.
AD_userPrincipalName
The action returns the value if it exists in the JSON result.
AD_adminCount
The action returns the value if it exists in the JSON result.
AD_lastLogonTimestamp
The action returns the value if it exists in the JSON result.
AD_manager
The action returns the value if it exists in the JSON result.
AD_instanceType
The action returns the value if it exists in the JSON result.
AD_distinguishedName
The action returns the value if it exists in the JSON result.
AD_dSCorePropagationData
The action returns the value if it exists in the JSON result.
AD_msDS-SupportedEncryptionTypes
The action returns the value if it exists in the JSON result.
AD_objectSid
The action returns the value if it exists in the JSON result.
AD_whenCreated
The action returns the value if it exists in the JSON result.
AD_uSNCreated
The action returns the value if it exists in the JSON result.
AD_lockoutTime
The action returns the value if it exists in the JSON result.
AD_badPasswordTime
The action returns the value if it exists in the JSON result.
AD_pwdLastSet
The action returns the value if it exists in the JSON result.
AD_sAMAccountName
The action returns the value if it exists in the JSON result.
AD_objectCategory
The action returns the value if it exists in the JSON result.
AD_lastLogon
The action returns the value if it exists in the JSON result.
AD_objectGUID
The action returns the value if it exists in the JSON result.
AD_whenChanged
The action returns the value if it exists in the JSON result.
AD_badPwdCount
The action returns the value if it exists in the JSON result.
AD_accountExpires
The action returns the value if it exists in the JSON result.
AD_displayName
The action returns the value if it exists in the JSON result.
AD_name
The action returns the value if it exists in the JSON result.
AD_memberOf
The action returns the value if it exists in the JSON result.
AD_codePage
The action returns the value if it exists in the JSON result.
AD_userAccountControl
The action returns the value if it exists in the JSON result.
AD_sAMAccountType
The action returns the value if it exists in the JSON result.
AD_uSNChanged
The action returns the value if it exists in the JSON result.
AD_sn
The action returns the value if it exists in the JSON result.
AD_givenName
The action returns the value if it exists in the JSON result.
AD_lastLogoff
The action returns the value if it exists in the JSON result.
JSON result
The following example shows the JSON result output received when using the
Get Manager Contact Details action:
[
{
"EntityResult" :
{
"primaryGroupID" : [ 513 ],
"logonCount" : [ 6505 ],
"cn" : [ "user name" ],
"countryCode" : [ 0 ],
"objectClass" : [ "top" , "person" , "organizationalPerson" ],
"userPrincipalName" : [ "user@example.com" ],
"adminCount" : [ 1 ],
"lastLogonTimestamp" : [ "2019-01-09 08:42:03.540783+00:00" ],
"manager" : [ "CN=user name,OU=R&D,OU=TLV,OU=host name,DC=domain,DC=LOCAL" ],
"instanceType" : [ 4 ],
"distinguishedName" : [ "CN=user name,OU=R&D,OU=TLV,OU=host,DC=domain,DC=LOCAL" ],
"dSCorePropagationData" : [ "2019-01-14 14:39:16+00:00" ],
"msDS-SupportedEncryptionTypes" : [ 0 ],
"objectSid" : [ " ID " ],
"whenCreated" : [ "2011-11-07 08:00:44+00:00" ],
"uSNCreated" : [ 7288202 ],
"lockoutTime" : [ "1601-01-01 00:00:00+00:00" ],
"badPasswordTime" : [ "date" ],
"pwdLastSet" : [ "date" ],
"sAMAccountName" : [ "example" ],
"objectCategory" : [ "CN=Person,CN=Schema,CN=Configuration,DC=host,DC=LOCAL" ],
"lastLogon" : [ "2019-01-14 17:13:54.463070+00:00" ],
"objectGUID" : [ "{id}" ],
"whenChanged" : [ "2019-01-14 16:49:01+00:00" ],
"badPwdCount" : [ 1 ],
"accountExpires" : [ "9999-12-31 23:59:59.999999" ],
"displayName" : [ "example" ],
"name" : [ "user" ],
"memberOf" : [ "CN= u05e7 u05d1 u05d5 u05e6 u05d4 u05d1 u05e2 u05d1 u05e8 u05d9 u05ea,OU=TEST,OU=QA,OU=IT,OU=TLV,OU=host,DC=domain,DC=LOCAL" , "CN=Organization Management,OU=Microsoft Exchange Security Groups,DC=domain,DC=LOCAL" , "CN=Local Admin,OU=Groups,OU=IT,OU=TLV,OU=host,DC=domain,DC=LOCAL" ],
"codePage" : [ 0 ],
"userAccountControl" : [ 111 ],
"sAMAccountType" : [ 805306368 ],
"uSNChanged" : [ 15301168 ],
"sn" : [ "example" ],
"givenName" : [ "user" ],
"lastLogoff" : [ "1601-01-01 00:00:00+00:00" ]
},
"Entity" : "user@example.com"
}
]
Output messages
The Ping action can return the following output messages:
Output message
Message description
All entities were processed successfully.
Some entities were processed successfully and some weren't. Please
check the action log for further information.
No entities were processed.
The action succeeded.
Error executing action "Get Manager Contact Details".
Reason: ERROR_REASON
The action failed.
Check the connection to the server,
input parameters, or credentials.
Script result
The following table lists the value for the script result output when using
the Get Manager Contact Details action:
Script result name
Value
is_success
True or False
Is User in Group
Use the Is User in Group action to check if the user is a member of a
specific group.
This action runs on the Google SecOps User entity.
Action inputs
The Is User in Group action requires the following parameters:
Parameter
Description
Group Name
Required.
The group name to check, such as
administrators .
Action outputs
The Is User in Group action provides the following outputs:
Action output type
Availability
Case wall attachment
Not available
Case wall link
Not available
Case wall table
Not available
Enrichment table
Not available
JSON result
Available
Script result
Available
JSON result
The following example shows the JSON result output received when using the
Is User in Group action:
[
{
"EntityResult" : true ,
"Entity" : "USER1@EXAMPLE.COM"
}, {
"EntityResult" : false ,
"Entity" : "USER2@EXAMPLE.COM"
}, {
"EntityResult" : true ,
"Entity" : "USER3@EXAMPLE.COM"
}
]
Script result
The following table lists the value for the script result output when using
the Is User in Group action:
Script result name
Value
is_success
True or False
List User Groups
Use the List User Groups action to obtain a list of all user groups that are
available in Active Directory.
This action runs on the Google SecOps User entity.
Action inputs
None.
Action outputs
The List User Groups action provides the following outputs:
Action output type
Availability
Case wall attachment
Not available
Case wall link
Not available
Case wall table
Not available
Enrichment table
Not available
JSON result
Available
Script result
Available
JSON result
The following example shows the JSON result output received when using the
List User Groups action:
[
{
"EntityResult" : [ "Domain Users" ],
"Entity" : "user@example.com"
}
]
Script result
The following table lists the value for the script result output when using
the List User Groups action:
Script result name
Value
is_success
True or False
Ping
Use the Ping action to test the connectivity to Active Directory.
This action runs on all Google SecOps entities.
Action inputs
None.
Action outputs
The Ping action provides the following outputs:
Action output type
Availability
Case wall attachment
Not available
Case wall link
Not available
Case wall table
Not available
Enrichment table
Not available
JSON result
Not available
Script result
Available
Script result
The following table lists the value for the script result output when using
the Ping action:
Script result name
Value
is_success
True or False
Release Locked Account
Use the Release Locked Account action to unblock a locked account.
This action runs on the Google SecOps User entity.
Action inputs
None.
Action outputs
The Release Locked Account action provides the following outputs:
Action output type
Availability
Case wall attachment
Not available
Case wall link
Not available
Case wall table
Not available
Enrichment table
Not available
JSON result
Not available
Script result
Available
Script result
The following table lists the value for the script result output when using
the Release Locked Account action:
Script result name
Value
is_success
True or False
Remove User From Group
Use the Remove User From Group action to remove the user from groups.
This action runs on the Google SecOps User entity.
Action inputs
The Remove User From Group action requires the following parameters:
Parameter
Description
Group Name
Required.
A comma-separated list of groups to remove the users
from.
Action outputs
The Remove User From Group action provides the following outputs:
Action output type
Availability
Case wall attachment
Not available
Case wall link
Not available
Case wall table
Not available
Enrichment table
Not available
JSON result
Not available
Output messages
Available
Script result
Available
Output messages
The Remove User From Group action can return the following output messages:
Output message
Message description
Successfully removed the following users from the group
" GROUP_NAME " in Active Directory:
ENTITY_ID
The following users were not a part of the group
" GROUP_NAME " in Active Directory:
ENTITY_ID
Action wasn't able to remove the following users from the group
" GROUP_NAME " in Active Directory:
ENTITY_ID
No users were removed from the group
" GROUP_NAME " in Active Directory.
No users were removed from the provided groups in Active
Directory.
The action succeeded.
Error executing action "Remove User From Group". Reason:
ERROR_REASON
The action failed.
Check the connection to the server,
input parameters, or credentials.
Script result
The following table lists the value for the script result output when using
the Remove User From Group action:
Script result name
Value
is_success
True or False
Search Active Directory
Use the Search Active Directory action to search Active Directory using
a specified query.
This action doesn't run on Google SecOps entities.
Action inputs
The Search Active Directory action requires the following parameters:
Parameter
Description
Query String
Required.
The query string to execute in Active Directory.
Limit
Optional.
The maximum number of listings to retrieve from
Active Directory.
Action outputs
The Search Active Directory action provides the following outputs:
Action output type
Availability
Case wall attachment
Not available
Case wall link
Not available
Case wall table
Not available
Enrichment table
Not available
JSON result
Available
Output messages
Available
Script result
Available
JSON result
The following example shows the JSON result output received when using the
Search Active Directory action:
[
{
"primaryGroupID" : [
513
],
"logonCount" : [
6505
],
"cn" : [
"user name"
],
"countryCode" : [
0
],
"objectClass" : [
"top" ,
"person" ,
"organizationalPerson"
],
"userPrincipalName" : [
"user@example.com"
],
"adminCount" : [
1
],
"lastLogonTimestamp" : [
"2019-01-09 08:42:03.540783+00:00"
],
"manager" : [
"CN=user name,OU=R&D,OU=TLV,OU=host name,DC=domain,DC=LOCAL"
],
"instanceType" : [
4
],
"distinguishedName" : [
"CN=user name,OU=R&D,OU=TLV,OU=host,DC=domain,DC=LOCAL"
],
"dSCorePropagationData" : [
"2019-01-14 14:39:16+00:00"
],
"msDS-SupportedEncryptionTypes" : [
0
],
"objectSid" : [
" ID "
],
"whenCreated" : [
"2011-11-07 08:00:44+00:00"
],
"uSNCreated" : [
7288202
],
"lockoutTime" : [
"1601-01-01 00:00:00+00:00"
],
"badPasswordTime" : [
"date"
],
"pwdLastSet" : [
"date"
],
"sAMAccountName" : [
"example"
],
"objectCategory" : [
"CN=Person,CN=Schema,CN=Configuration,DC=host,DC=LOCAL"
],
"lastLogon" : [
"2019-01-14 17:13:54.463070+00:00"
],
"objectGUID" : [
" GUID "
],
"whenChanged" : [
"2019-01-14 16:49:01+00:00"
],
"badPwdCount" : [
1
],
"accountExpires" : [
"9999-12-31 23:59:59.999999"
],
"displayName" : [
"example"
],
"name" : [
"user"
],
"memberOf" : [
"CN=\\\\u05e7\\\\u05d1\\\\u05d5\\\\u05e6\\\\u05d4 \\\\u05d1\\\\u05e2\\\\u05d1\\\\u05e8\\\\u05d9\\\\u05ea,OU=TEST,OU=QA,OU=IT,OU=TLV,OU=host,DC=domain,DC=LOCAL" ,
"CN=Organization Management,OU=Microsoft Exchange Security Groups,DC=domain,DC=LOCAL" ,
"CN=Local Admin,OU=Groups,OU=IT,OU=TLV,OU=host,DC=domain,DC=LOCAL"
],
"codePage" : [
0
],
"userAccountControl" : [
111
],
"sAMAccountType" : [
805306368
],
"uSNChanged" : [
15301168
],
"sn" : [
"example"
],
"givenName" : [
"user"
],
"lastLogoff" : [
"1601-01-01 00:00:00+00:00"
]
}
]
Output messages
The Search Active Directory action can return the following output
messages:
Output message
Message description
Successfully performed the query
" QUERY_STRING " in Active
Directory.
No results to show following the query:
" QUERY_STRING ".
The action succeeded.
Error executing action "Search Active Directory". Reason:
ERROR_REASON
The action failed.
Check the connection to the server,
input parameters, or credentials.
Script result
The following table lists the value for the script result output when using
the Search Active Directory action:
Script result name
Value
is_success
True or False
Set User Password
Use the Set User Password action to configure the user password.
This action runs on the Google SecOps User entity.
Action inputs
The Set User Password action requires the following parameters:
Parameter
Description
New Password
Required.
A new password value.
Action outputs
The Set User Password action provides the following outputs:
Action output type
Availability
Case wall attachment
Not available
Case wall link
Not available
Case wall table
Not available
Enrichment table
Not available
JSON result
Not available
Script result
Available
Script result
The following table lists the value for the script result output when using
the Set User Password action:
Script result name
Value
is_success
True or False
Update attributes of an AD Host
Use the Update attributes of an AD Host action to update the attributes for
the current hosts in Active Directory.
This action runs on the Google SecOps Hostname entity.
Action inputs
The Update attributes of an AD Host action requires the following parameters:
Parameter
Description
Attribute Name
Required.
The name of the attribute to update, such as
Description .
Attribute Value
Required.
A new value for the attribute.
Action outputs
The Update attributes of an AD Host action provides the following outputs:
Action output type
Availability
Case wall attachment
Not available
Case wall link
Not available
Case wall table
Not available
Enrichment table
Not available
JSON result
Not available
Output messages
Available
Script result
Available
Output messages
The Update attributes of an AD Host action can return the following output
messages:
Output message
Message description
Active Directory - Following entities were updated
successfully: ENTITY_ID_LIST .
No suitable entities were found.
The action succeeded.
Failed to update the
ATTRIBUTE_NAME for the following
entities: ENTITY_ID_LIST .
The action failed.
Check the connection to the server,
input parameters, or credentials.
Script result
The following table lists the value for the script result output when using
the Update attributes of an AD Host action:
Script result name
Value
is_success
True or False
Update attributes of an AD User
Use the Update attributes of an AD User action to update the attributes for
the current users in Active Directory.
This action runs on the Google SecOps User entity.
Action inputs
The Update attributes of an AD User action requires the following parameters:
Parameter
Description
Attribute Name
Required.
The name of the attribute to update, such as
Description .
Attribute Value
Required.
A new value for the attribute.
Action outputs
The Update attributes of an AD User action provides the following outputs:
Action output type
Availability
Case wall attachment
Not available
Case wall link
Not available
Case wall table
Not available
Enrichment table
Not available
JSON result
Not available
Output messages
Available
Script result
Available
Output messages
The Update attributes of an AD User action can return the following output
messages:
Output message
Message description
Active Directory - Following entities were updated
successfully: ENTITY_ID_LIST .
No suitable entities were found.
The action succeeded.
Failed to update the
ATTRIBUTE_NAME for the following
entities: ENTITY_ID_LIST .
The action failed.
Check the connection to the server,
input parameters, or credentials.
Script result
The following table lists the value for the script result output when using
the Update attributes of an AD User action:
Script result name
Value
is_success
True or False
Need more help? Get answers from Community members and Google SecOps professionals.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
