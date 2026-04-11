---
title: "Integrate ArcSight with Google SecOps \_|\_ Google Security Operations \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs/reference/authentication
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight
  title: "Integrate ArcSight with Google SecOps \_|\_ Google Security Operations \_\
    |\_ Google Cloud Documentation"
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
Integrate ArcSight with Google SecOps
This document describes how to integrate ArcSight with
Google Security Operations (Google SecOps).
Note: This integration uses one or more open source components.
You can download a copy of the full source code of this integration from the
storage bucket .
Security Events Connector prerequisites
This connector works with the reports that are being automatically generated in
ArcSight. The connector downloads the generated report, extracts event IDs, and
then uses ArcSight API to get more details about events.
Configure Security Events Connector
Sign in to the ArcSight console.
Navigate to the Reports tab and go to the Query section.
To create a new query, enter the following query name:
Google SecOps SOAR Security Events Connector Query .
Pay attention to the Start Time and End Time parameters. It is
recommended to query data in one-hour interval, but you can increase the
interval, if necessary.
Note: Row limit shouldn't exceed 10000. When exceeded, it can lead to
unexpected results.
Example configuration:
Name: Google SecOps SOAR Security Events Connector Query
Query On: Event
Start Time: $Now - 1h
End Time: $Now
Use as TimeStamp: End Time
Row Limit: 5000
Define Fields for the query. In terms of fields, you need to have the
following:
Event ID
Name
Start Time
End Time
Priority
Make sure you have End Time ASC in the Order By column.
Set Conditions . This is where you can provide your own filter.
Save query.
Go to the Reports section and create a new report. To specify the report,
enter the following name: Google SecOps SOAR Security Events
Connector Report . Use the same name for the Report Name
parameter of the connector configuration.
In the Data tab, select the query that was created in the previous steps
as Data Source .
In the Parameters tab, change the Report Format to csv to meet the
connector requirements.
Save report.
Provide the name of the report in the connector configuration of the
Report Name parameter.
Do a test run to make sure that connector works as expected.
Configure the Google SecOps shared folder for ArcSight
Google SecOps server
Find the UID and GID in the /etc/passwd file:
cat /etc/passwd | grep scripting
The example output of the command is as follows:
scripting:x:1001:1001:/home/scripting:/bin/bash
The UID is the third field and the GID is the fourth in the command
output.
Create the script:
Create a file and call it configure_smp_nfs.sh .
Copy the following content into that file.
#!/bin/bash
#Declare the variables:
uid= SCRIPTING_USER_UID
gid= SCRIPTING_USER_GID
arcsight_ip= ARCSIGHT_IP
#Install nfs-utils
yum install nfs-utils -y
#Create the directory that will be shared
mkdir /opt/Correlations
#Change the permissions
chmod -R 755 /opt/Correlations/
chown -R scripting:scripting /opt/Correlations/
#Start the services and enable them to be started at boot time
systemctl enable rpcbind
systemctl enable nfs-server
systemctl enable nfs-lock
systemctl enable nfs-idmap
systemctl start rpcbind
systemctl start nfs-server
systemctl start nfs-lock
systemctl start nfs-idmap
#Edit the exports file as follows
echo "/opt/Correlations/ $arcsight_ip(rw,sync,all_squash,anonuid=$uid,anongid=$gid)">>/etc/exports
#Restart the NFS service and export the path
systemctl restart nfs-server
exportfs -a
#If FirewallD is running add the next rules:
firewall-cmd --permanent --zone=public --add-service=nfs
firewall-cmd --permanent --zone=public --add-service=mountd
firewall-cmd --permanent --zone=public --add-service=rpc-bind
firewall-cmd --reload
setsebool -P nfs_export_all_rw 1
Declare the uid , gid , and arcisght_ip variables according to your
environment.
Grant the permissions:
chmod +x configure_smp_nfs.sh
Run the script:
./configure_smp_nfs.sh
ArcSight server
Create the script:
Create a file and call it configure_smp_nfs.sh .
Copy the following content into that file.
#!/bin/bash
#Declare the variables:
siemplify_ip= SIEMPLIFY_IP
#Install nfs-utils
yum install nfs-utils -y
#Start the services and enable them to be started at boot time
systemctl enable rpcbind
systemctl enable nfs-server
systemctl enable nfs-lock
systemctl enable nfs-idmap
systemctl start rpcbind
systemctl start nfs-server
systemctl start nfs-lock
systemctl start nfs-idmap
#If FirewallD is running add the next rules:
firewall-cmd --permanent --zone=public --add-service=nfs
firewall-cmd --permanent --zone=public --add-service=mountd
firewall-cmd --permanent --zone=public --add-service=rpc-bind
firewall-cmd --reload
#Create the NFS directory mount point
mkdir -p /mnt/nfs/var/SiemShare
#Add the values:
echo "$siemplify_ip:/opt/Correlations /mnt/nfs/var/SiemShare nfs defaults 0 0">>/etc/fstab
mount -a
Declare the siemplify_ip variable according to your environment.
Note for the customers who use the old path
The hotfix installer overwrites the /opt/siemplify/Correlations folder
permission to siemplifyadmin .
If you are using the old path and are applying the upgrade, then you need to
change the permission back to the scripting user with the following steps:
Before starting the upgrade, stop the NFS server service:
_systemctl stop nfs-server_
After the upgrade is complete, change the folder permissions:
_chmod -R 755 /opt/siemplify/Correlations/_
_chown -R scripting:scripting/opt/siemplify/Correlations/_
_systemctl start nfs-server_
_exportfs -a_
To confirm that the NFS server is working correctly after the changes, check
its status:
_systemctl status nfs-server_
Create and configure a user for API access
Sign in to the ArcSight console.
Create a Google_SecOps_API user group and add a Google_SecOps_API user
to it. This user will be used by Google SecOps through the
ArcSight ESM API.
Go to the Attributes tab and set the User Type attribute to
Normal User .
On the Resources tab, right-click the created user group.
From the menu, choose Edit Access Control .
In the Inspect/Edit window for the ACL Editor:
In the Events tab, add the previously created filter,
Google_SecOps_Correlations_Filter . You can also add any source
filter to grant Google SecOps access.
Use default settings for other tabs.
Click Add , select ArcSight System > Core , and select
the All Events checkbox.
It is important to verify that the All Events checkbox is
selected. The minimum requirement is to include all the correlation
events that will be ingested into Google SecOps.
Google Security Operations uses the following main methods when using ArcSight ESM
API:
Core Service: Login , GetSession
Manager Service: GetSecurityEvents
Network access with ArcSight ESM
To access from Google SecOps to ArcSight ESM, allow traffic over
ports 443 (HTTPS) and 8443 (API over SSL), or as configured
in your environment.
To access from ArcSight ESM to Google SecOps, allow traffic over
ports 445 and 139 (SMB/SAMBA/CIFS), or as configured in your
environment.
Function
Ports
Direction
Protocol
NFS
111, 1039, 1047, 1048, and 2049
Outbound and inbound
UDP
NFS
111, 1039, 1047, 1048, and 2049
Outbound and Inbound
TCP
Integration parameters
For detailed instructions on how to configure an integration in
Google SecOps, see Configure
integrations .
Use the following parameters to configure the integration:
Parameter name
Type
Default value
Is mandatory
Description
Instance Name
String
N/A
No
Name of the instance you intend to configure the integration for.
Description
String
N/A
No
Description of the instance.
API Root
String
https://{IP}:{PORT}
Yes
Server address of the ArcSight instance.
Username
String
N/A
Yes
Username of the ArcSight account.
Password
Password
N/A
Yes
Password of the ArcSight account.
Run Remotely
Checkbox
Unchecked
No
Check the field in order to run the configured integration remotely. Once checked, the option appears to select the remote user (agent).
Note: You can make changes at a later stage if needed. After configured, the
Instances can be used in playbooks. For detailed information on configuring and
supporting multiple instances, see Supporting multiple
instances .
Actions
Add Entries to Active List
Description
Provides a mechanism to get information from trends outside of, and in addition
to, reports. Active lists updated by trends support summary views of information
from multiple trends.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Columns
String
N/A
Yes
Example: Message;Username
Entries
String
N/A
Yes
Example: test1|Me1;Test|Me2
Active List UUID
String
N/A
Yes
Example: HCN75QGABABCZXCOdT9P51w==
Run on
This action runs on all entities.
Action results
Script result
Script result name
Value options
Example
is_succeed
True or False
is_succeed:False
Change Case Stage
Description
Change a case's stage. Valid stages are INITIAL, QUEUED, CLOSED, FINAL, and
FOLLOW_UP.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Case Name
String
N/A
Yes
The name of the case to update.
Stage
String
N/A
Yes
The stage of the case. Example: CLOSED, INITIAL
Run on
This action runs on all entities.
Action results
Script result
Script result name
Value options
Example
success
True or False
success:False
Get Activelist Entries
Description
Retrieve ArcSight active list entries and return csv output.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Active list UUID
String
N/A
Yes
Example: HTcILQWABABCr553ieI0Xmw==
Run on
This action runs on all entities.
Action results
Script result
Script result name
Value options
Example
Success_Indicator
N/A
N/A
JSON result
[
"12346e4d96f0a72c42015d69aaf0e8ab ,
file.txt" ,
"0e0776034e5e096704cd28cbd40cdbb5 ,
Test.config"
]
Get Query Results
Description
Get query results by query ID. A query can be used as the primary data source
for a report, or a trend (based on one query) that can be used as the data
source to another query that further refines the initial query result.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Query ID
String
N/A
Yes
The query ID.
Max Items To Return
Integer
100
No
Specify how many items to return in the response.
Use Cases
Add limitation for how many results to return.
Run on
This action runs on all entities.
Action results
Script result
Script result name
Value options
Example
success
True or False
success:False
JSON result
[
{
"Target User Name" : "user" ,
"Attacker Address" : "192.0.2.1" ,
"External ID" : "127" ,
"Name" : "A Kerberos authentication ticket (TGT) was requested." ,
"Target Address" : "192.0.2.1"
},{
"Target User Name" : "user" ,
"Attacker Address" : "192.0.2.1" ,
"External ID" : "127" ,
"Name" : "A Kerberos authentication ticket (TGT) was requested." ,
"Target Address" : "192.0.2.1"
}
]
Get Report
Description
Get a report with dynamic fields. A report is an ArcSight resource that binds
data from a query or trend to an existing report template. Once ran, the results
of a report can be viewed in the ArcSight consoles viewer panel, saved
(archived), or exported in a variety of formats. Reports can be scheduled to
run at regular intervals and can be ran on-demand as needed.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Report Full Path (URI)
String
N/A
Yes
The relevant report uri.
Field 2
String
N/A
No
The dynamic fields for the query to generate the report.
Field 3
String
N/A
No
The dynamic fields for the query to generate the report.
Field 4
String
N/A
No
The dynamic fields for the query to generate the report.
Field 6
String
N/A
No
The dynamic fields for the query to generate the report.
Field 6
String
N/A
No
The dynamic fields for the query to generate the report.
Field 7
String
N/A
No
The dynamic fields for the query to generate the report.
Field 8
String
N/A
No
The dynamic fields for the query to generate the report.
Field 9
String
N/A
No
The dynamic fields for the query to generate the report.
Field 10
String
N/A
No
The dynamic fields for the query to generate the report.
Run on
This action runs on all entities.
Action results
Script result
Script result name
Value options
Example
json_report
N/A
N/A
Is Value in Activelist Column
Description
Check if specific value is in active list .
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Active list UUID
String
N/A
Yes
Active list uuid. Example: cuser.
Column name
String
N/A
Yes
The name of the column. Example: sourceUserName.
Run on
This action runs on all entities.
Action results
Script result
Script result name
Value options
Example
Success_Indicator
N/A
N/A
Ping
Description
Test Connectivity.
Parameters
Run on
This action runs on all entities.
Action results
Script result
Script result name
Value options
Example
is_succeed
True or False
is_succeed:False
Search
Description
You can start a search at the ArcSight Command Center from the console event
channel. Event Complete Search looks for the associated attribute, which is
stored in several fields (for example, abc). The search for events searches for
a value (for example, abc) stored in the field specified (for example, in the
field of name only).
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Search Query
String
N/A
Yes
The search query.
Max Items To Return
Integer
100
No
Specify how many items to return in the response.
Use Cases
Add limitation for how many results to return.
Run on
This action runs on all entities.
Action results
Script result
Script result name
Value options
Example
success
True or False
success:False
JSON result
[
{
"score" : 1.2440307 ,
"uuid" : " UUID " ,
"uri" : "/All_Fields/ArcSight_Foundation/Variables_Library/IPv6/Attacker_IPv6_Address" ,
"name" : "Attacker IPv6 Address"
}, {
"score" : 1.2440307 ,
"uuid" : " UUID " ,
"uri" : "/All_Fields/ArcSight_Foundation/Variables_Library/IPv6/Attacker_IPv6_Address" ,
"name" : "Attacker IPv6 Address"
}
]
Connectors
For detailed instructions on how to configure a connector in
Google SecOps, see Configuring the
connector .
Arcsight ESM Connector
This guide refers to ArcSight ESM versions 6.9.1 and higher.
ESM rule or case forwarding to Google SecOps
Working with Triggered Rules/Correlations
You will be required to configure ArcSight ESM to forward the latest correlation
objects to Google SecOps while you configure Google SecOps
to function on ArcSight ESM as a SIEM provider, and also to provide API access
to ArcSight ESM through an authorized user.
This feature allows Google SecOps to retrieve any triggered rules
within ArcSight ESM in near real-time and forward them to be translated and
contextualized as alerts for cases.
Data Flow between Google SecOps and ArcSight ESM
Google SecOps automatically indexes and contextualizes correlations
that were forwarded to Google SecOps and were triggered in ArcSight
ESM through ArcSight Forwarding Connector module and API access.
Connector severity prioritization
The connector assigns severity with the following prioritization values:
1 and 2 - very low
3 and 4 - low
5 and 6 - medium
7 and 8 - high
9 and 10 - critical
Connector inputs
Use the following parameters to configure the connector:
Parameter name
Type
Default value
Is mandatory
Description
Environment
DDL
N/A
Yes
Select the required environment, for example, Customer One .
In case that the alert's Environment field is empty, this alert will be injected to this environment.
Run Every
Integer
0:0:0:10
No
Select the time to run the connection.
Product Field Name
String
device_product
No
The name of the field where the product name is stored.
The default
value is device_product .
The product name
primarily impacts mapping. To streamline and improve the mapping process for
the connector, the default value device_product resolves to a
fallback value that is referenced from the code. Any invalid input for this
parameter resolves to a fallback value by default.
Event Field Name
String
name
No
The field name used to determine the event name (sub-type).
Script Timeout (seconds)
String
500
No
The timeout limit (in seconds) for the python process running the current script.
Server Address
String
N/A
Yes
https://{IP}:{PORT}
Username
String
N/A
Yes
Username of the ArcSight account.
Password
Password
N/A
Yes
The password of the ArcSight account.
Events Count Limit
Integer
15
Yes
Enter the maximum number of events to fetch per correlation. Limit the number of events, for example, 10.
Cases Folder Path
String
I:\SiemShare\CorrelationSource
Yes
The location of the case files, such as I:\SiemShare\CorrelationSource
Note: The Cases Folder Path parameter can be changed from one customer to another.
Full path. Example: C:\Desktop\CorrelationSource
Alerts Count Limit
Integer
10
Yes
The maximum number of alerts to process per connector cycle, for example, 10.
Environment Field Name
String
event.customerURI
Yes
The name of the field to get the case's environment, for example, event.customerUri.
Secondary Device Product Field
String
N/A
No
Replace the original product field (from the connector's DeviceProductField with the value from the secondary product field). Example: CustomDeviceString2
Alert Custom Fields Names
String
N/A
No
Pull custom field values from ArcSight into the alert, such as baseEventCount,agent_address,device_assetId.
Done files retention days
Integer
3
Yes
How many days, to keep each DONE csv file.
Error files retention days
Integer
14
Yes
How many days, to keep each ERROR csv file.
Proxy Server Address
String
N/A
No
The address of the proxy server to use.
Proxy Username
String
N/A
No
The proxy username to authenticate with.
Proxy Password
Password
N/A
No
The proxy password to authenticate with.
Connector rules
The connector supports proxies.
ArcSight - Security Events Connector
Pull correlations from ArcSight. This connector is suitable for SaaS deployment
of Google SecOps and is the recommended one for production use.
Note: Dynamic list works with the name parameter.
This connector requires completing the prerequisite
steps .
Connector inputs
Use the following parameters to configure the connector:
Parameter Display Name
Type
Default Value
Is Mandatory
Description
Product Field Name
String
type
Yes
The name of the field where the product name is stored.
The default value is type .
The product name
primarily impacts mapping. To streamline and improve the mapping
process for the connector, the default value type
resolves to a fallback value that is referenced from the code. Any
invalid input for this parameter resolves to a fallback value by
default.
Event Field Name
String
name
Yes
The name of the field that determines the event name (subtype).
Environment Field Name
String
""
No
The name of the field where the environment name is stored.
If the
environment field is missing, the connector uses the default value.
Environment Regex Pattern
String
.*
FALSE
No
A regular expression pattern to run on the value found in the
Environment Field Name field. This parameter lets you manipulate
the environment field using the regular expression logic.
Use the default value .* to retrieve the required raw
Environment Field Name value.
If the regular expression pattern is null or empty, or the environment
value is null, the final environment result is the default environment.
Script Timeout (Seconds)
Integer
360
Yes
The timeout limit, in seconds, for the Python process that runs the
current script.
API Root
String
https://{ip}
Yes
The API root of the ArcSight instance.
Username
String
N/A
Yes
Username of the ArcSight account.
Password
Password
N/A
Yes
Password of the ArcSight account.
Report Name
String
N/A
Yes
Name of the report that will be used to fetch events.
Fetch Base Events
Checkbox
Checked
Yes
If enabled, connector will also fetch base events.
Lowest Priority To Fetch
Integer
N/A
No
Lowest priority that will be used to fetch events. Possible values are in range 1 to 10. If nothing is provided, all events will be ingested.
Max Events To Fetch
Integer
100
No
The number of alerts to process per connector iteration. The
maximum allowed is 1000.
Use dynamic list as a blocklist
Checkbox
Checked
Yes
If selected, the connector uses the dynamic list as a blocklist.
Verify SSL
Checkbox
Unchecked
Yes
If selected, the integration validates the SSL certificate when connecting to
the ArcSight server.
Proxy Server Address
String
N/A
No
The address of the proxy server to use.
Proxy Username
String
N/A
No
The proxy username to authenticate with.
Proxy Password
Password
No
The proxy password to authenticate with.
Connector rules
The connector supports proxies.
Jobs
Close Cases
The job requires the following parameters:
Parameter name
Type
Default value
Is mandatory
Description
Server Address
String
192.0.2.1
Yes
N/A
Username
String
N/A
Yes
N/A
Password
Password
N/A
Yes
N/A
Need more help? Get answers from Community members and Google SecOps professionals.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
