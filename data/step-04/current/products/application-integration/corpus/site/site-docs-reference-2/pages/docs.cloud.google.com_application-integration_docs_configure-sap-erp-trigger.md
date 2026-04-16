---
title: "SAP ERP trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-integration/docs/configure-sap-erp-trigger
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/application-integration/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/application-integration/docs/configure-sap-erp-trigger
  title: "SAP ERP trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Application Integration
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
SAP ERP trigger
The SAP ERP trigger is a Connector Event trigger SAP ERP connector lets you perform insert, delete, update, and read operations on SAP ERP data.
Important: Integration Connectors is a billable component of Google Cloud. For information about the costs and charges of using Integration Connectors, see Integration Connectors pricing .
Before you begin
If you plan to create or configure a new connection for the SAP ERP trigger , make sure that you have the following IAM role on the project:
Connector Admin ( roles/connectors.admin )
For information about granting roles, see Manage access .
Grant the following IAM roles to the service account that you want to use for the SAP ERP trigger :
Application Integration Invoker ( roles/integrations.integrationInvoker )
For information about granting roles to a service account, see Manage access to service accounts .
Add the SAP ERP trigger
To add a SAP ERP trigger to your integration, perform the following steps:
In the Google Cloud console, go to the Application Integration page.
Go to Application Integration
In the navigation menu, click Integrations
The Integrations List page appears listing all the integrations available in the Google Cloud project.
Select an existing integration or click Create integration to create a new one.
If you are creating a new integration:
Enter a name and description in the Create Integration pane.
Select a region for the integration.
Note: The Regions dropdown only lists the regions provisioned in your Google Cloud project. To provision a new region, Click Enable Region . See Enable new region for more information.
Select a service account for the integration. You can change or update the service account details of an integration any time from the info Integration summary pane in the integration toolbar.
Note: The option to select a service account is displayed only if you have enabled integration governance for the selected region.
Click Create .
The newly created integration opens in the integration editor .
In the integration editor navigation bar, click Triggers to view the list of available triggers.
Click and place the SAP ERP trigger element in the integration editor.
To configure the SAP ERP trigger , you can either use an existing SAP ERP connection available in Integration Connectors, or create a new SAP ERP connection using the inline connection creation option.
Configure SAP ERP trigger using an existing connection
The SAP ERP trigger is an Connector Event trigger , therefore you can only use a SAP ERP connection with event subscription enabled to configure the trigger.
For information about how to configure a SAP ERP trigger using a new SAP ERP connection, see Configure SAP ERP trigger using a new connection
To configure a SAP ERP trigger using an existing SAP ERP connection, perform the following steps:
Click the SAP ERP trigger element in the integration editor to open the trigger configuration pane.
Click Configure trigger .
Provide the following configuration details in the Connector Event Trigger Editor page:
Region: Select the region of your SAP ERP connection.
Connection: Select the SAP ERP connection that you want to use.
Application Integration only displays those SAP ERP connections that are active and have an event subscription enabled.
Enter the event type field name. This field identifies the type of event
associated with the incoming event request.
{
"event_type" : "user.created" ,
...
// other request fields
...
}
Service Account : Select a service account with the required IAM roles for the SAP ERP trigger.
Click Done to complete the trigger configuration and close the page.
Configure SAP ERP trigger using a new connection
Click the SAP ERP trigger element in the integration editor to open the trigger configuration pane.
Click Configure trigger .
Skip the Region field.
Click Connection and select the Create Connection option from the drop-down menu.
In the Connection Details section, complete the following:
Connector : Select SAP ERP from the drop down list of available Connectors.
Connector version : Select the Connector version from the drop down list of available versions.
In the Connection Name field, enter a name for the Connection instance.
Connection names must meet the following criteria:
Connection names can use letters, numbers, or hyphens.
Letters must be lower-case.
Connection names must begin with a letter and end with a letter or number.
Connection names cannot exceed 49 characters.
For connectors that support event subscription , the connection names cannot begin with the "goog" prefix.
Optionally, enter a Description for the connection.
Optionally, enable Cloud logging ,
and then select a log level. By default, the log level is set to Error .
Service Account : Select a service account that has the required roles .
To use the connection for event subscriptions, select Enable event subscription . Selecting
this, displays the following options:
Enable event subscription with entity and actions : Select this option to
use the connection for both event subscription and connector operations (entities and actions).
Enable only event subscription : Select this option to use the connection
only for event subscription. If you select this option, click Next , and then
configure event subscription .
Client : The client authenticating to the SAP system.
System Id : The System Id or R3Name of the SAP System is a string with a maximum of three characters. It is often used in load balancing connections.
System Number : The number by which the target system is defined. Used when setting the Host connection property.
Project ID : The ID of the Google Cloud project where the GCS bucket containing the SAP JCo jar resides.
Bucket : The name of the bucket containing sapjco3.jar and libsapjco3.so files.
JCo jar Cloud Storage path : Cloud Storage path of the JCo jar.
libsapjco3 Cloud Storage path : Cloud Storage path of the libsapjco3 jar.
Table mode : Select the SAP table to be displayed as a view.
Read table function : Name of the function to be used for reading tables. For more
information, see Use a custom read table function .
System ID : The system ID or the R3Name of the SAP system. You can enter a maximum of 3 characters.
Query mode : Select which SAP tables must be displayed as views.
Browsable views : Enter a comma separated list of views to be displayed.
For example, ViewA,ViewB,ViewC .
Language : Set this property to the language you specify when you log into SAP. This property is a ISO 639-1 code for the language the SAP system uses. By default, EN will be used.
Service entries : The service entries to be used for the connection.
SNC mode : Select this option to enable SNC for authentication between Application Integration and your SAP system. If you select this option, specify the following details:
SNC_LIB object ID : Object ID of the SNC library.
PSE name : Name of the Personal Security Environment (PSE) file that is applicable for the bucket. A PSE file stores the public and private key pair as well as X.509 certificates in a ASN.1 structure.
SNC passcode : Select the Secret Manager secret of the SNC library passcode.
Secret version : Select the secret version.
SNC name : Enter a name for SNC connection.
SNC qop : Select a protection level. The following are the supported levels:
1 - Apply authentication only.
2 - Apply integrity protection. This also includes authentication protection.
3 - Apply privacy protection. This also includes integrity and authentication protection.
8 - Apply the default protection.
9 - Apply the maximum protection.
SNC partner name : Enter the Application Server's SNC name.
Connection scheme : Specify whether you are connecting to an SAP system with a Message Server (Group Server) or Application Server. For information about the prerequisites that you must meet to connect to an SAP system with a Message Server, see Message Server (Group Server) connection type .
Note: You can connect to an SAP system with a Message Server (Group Server) only if the Message Server returns the fully qualified domain name (FDQN) address of the Application Server. You can't connect to an SAP system with a Message Server (Group Server) if the Message Server returns the IP address.
If you select GroupServer , then you must specify the following details:
Message Server : Specify the Message Server when connecting to an SAP system that uses load balancing.
Message Server Service : The Message Server service that you want to connect to.
Group : The logon group that is used. You must specify this only when connecting to an SAP system that uses load balancing.
If you are connecting to an SAP system with a Message Server (Group Server), you don't need to specify the host address in the Destinations section.
Optionally, configure the Connection node settings :
Minimum number of nodes : Enter the minimum number of connection nodes.
Maximum number of nodes : Enter the maximum number of connection nodes.
A node is a unit (or replica) of a connection that processes transactions.
More nodes are required to process more transactions for a connection and conversely,
fewer nodes are required to process fewer transactions.
To understand how the nodes affect your connector pricing, see
Pricing for connection nodes . If you don't enter any values, by default
the minimum nodes are set to 2 (for better availability) and the maximum nodes are set to 50.
Note: You can customize the connection node values only if you are
a Pay-as-you-go customer.
Optionally, click + ADD LABEL to add a label to the Connection in the form of a key/value pair.
Click Next .
In the Destinations section, enter details of the remote host (backend system) you want to connect to. If you are connecting to an SAP system with Message Server, then you don't need to specify the host address.
Destination Type : Select a Destination Type .
Select Host address from the list to specify the hostname or IP address of the destination.
If you want to establish a private connection to your backend systems,
select Endpoint attachment from the list, and then select the required endpoint attachment
from the Endpoint Attachment list.
Note: When a DNS zone is used, you must specify the host address in the following format: /H/dexyz06s99.altostrat.com/S/3300 . Where dexyz06s99.altostrat.com is the target DNS name under managed zone. For more information, see Create managed zones .
To understand how to create an endpoint attachment, see
PSC service attachment
and endpoint attachment . After you
have created the endpoint attachment, it will be visible in the Endpoint Attachment list.
If you want to establish a public connection to your backend systems with additional security, you can
consider configuring static outbound
IP addresses for your connections , and then configure
your firewall rules to allowlist only the specific static IP addresses.
To enter additional destinations, click +Add destination .
Click Next .
In the Authentication section, enter the authentication details.
Select an Authentication type and enter the relevant details.
The following authentication types are supported by the SAP ERP connection:
X509 certificate based authentication
Username and password
To understand how to configure these authentication types, see Configure authentication .
Click Next .
If you have enabled the event subscription, the Event Subscription Details section appears on the connection creation page. To understand
how to configure event subscription details, see Configure event subscription .
Review : Review your connection and authentication details.
Click Create .
Configure authentication
Enter the details based on the authentication you want to use.
X509Certificate Based Authentication
X509Certificate : The X509 certificate that is used to login.
Secret version : Select the secret version.
Username and password
Username : Username for connector
Password : Secret Manager Secret containing the password associated with the connector.
Configure for event subscription
If you enable event subscription, you must configure ABAP SDK. For information about configuring ABAP SDK, see Overview of the ABAP SDK for Google Cloud .
Enter the following values in the Event Subscription Details section:
Select any one of the following authentication types for the event listener.
Note: Before you configure authentication, ensure that you have the event listener
endpoint, which is available to you after you create the connection. To view the endpoint,
go to the
All connections page,
and then click the connection that you wan to view. The endpoint is displayed in the
Connection Details section.
Google Authentication . If you enable this option, follow the steps in
Authenticate by using JSON Web Tokens
to configure the authentication for ABAP SDK. Also, ensure that the service account has
roles/connectors.listener
role whose access token is used for authentication.
API Key Authentication . If you select this option, you must have created an API key, and then saved the key
as a Secret Manager secret. For more information, see
Create an API key .
Enter the event type field name. This field identifies the type of event associated with the
incoming event request.
{
"event_type" : "user.created" ,
...
// other request fields
...
}
Select Enable private connectivity for secured connectivity between your backend application
and your connection. If you select this option, you must perform additional configuration steps
after creating the connection. For more information, see Private connectivity for event subscription .
Enter the dead-letter configuration. If you configure dead-letter, the connection writes
the unprocessed events to the specified Pub/Sub topic . Enter the following details:
Dead-letter project ID: The Google Cloud project ID where you have configured the dead-letter Pub/Sub topic.
Dead-letter topic: The Pub/Sub topic where you want to write the details of the unprocessed event.
Important: To understand how you can use event subscription in your integrations, see SAP ERP trigger .
Use a custom read table function
RFC_READ_TABLE
The connector uses the SAP RFC_READ_TABLE function to get data from SAP tables.
However, it has certain limitations. As an example, consider the DATA_BUFFER_EXCEEDED
exception. The SAP RFC_READ_TABLE has a fixed size of 512 bytes. It can buffer for
each row of data, and thus you cannot select more columns than the amount that would
fit in this buffer. If you select more than 512 bytes, an exception occurs
indicating that you have exceeded the maximum buffer size allowed per row and need
to select fewer columns.
RFC_READ_TABLE2
The SAP ERP connector supports the RFC_READ_TABLE2 table read function. You can switch
the active table read function to RFC_READ_TABLE2 by setting ReadTableFunction
to /SAPDS/RFC_READ_TABLE2 .
Custom read table functions
The connector includes a custom read-table RFC, Z_CUSTOM_READ_TABLE that is similar
to the SAP RFC_READ_TABLE , but with a larger buffer to address the DATA_BUFFER_EXCEEDED problem and bypass RFC_READ_TABLE limitations.
To use the included custom read-table RFC to bypass limitations with the default RFC_READ_TABLE , follow these steps:
Use the RFC_READ_TABLE function as a template for the new function. Select transaction code SE37 and the SDTX function group and copy RFC_READ_TABLE to a new function group or your working function group. In this example, RFC_READ_TABLE is copied to Z_CUSTOM_READ_TABLE .
On the Attributes tab of the SAP screen, select Remote Enabled Module .
On the Tables tab, set the DATA parameter to CHAR8000 . Right-click on the screen and then click Display -> Change .
On the Source Code tab, paste the example source code for the replacement RFC_READ_TABLE function module located in the db subfolder of the installation directory. The code is located in Z_CUSTOM_READ_TABLE.txt , though Z_CUSTOM_READ_TABLE_752.txt is preferred if your SAP ERP instance is running ABAP version 7.52 or later.
Click Save .
Define the imports, tables, and exceptions as documented in the provided custom read table.
Activate the function module and in your connection string set ReadTableFunction to Z_CUSTOM_READ_TABLE , or the name of your function module.
The ABAP 7.52 Custom Read Table
Along with Z_CUSTOM_READ_TABLE.txt , there is also a Z_CUSTOM_READ_TABLE_752.txt file, for ABAP version 7.52 and above. It is similar to Z_CUSTOM_READ_TABLE , but it takes advantage of the newly available keywords in ABAP 7.52 to perform paging within the database
instead of in the ABAP script itself. This makes paging efficient when working with large tables.
It is recommended to use the Z_CUSTOM_READ_TABLE_752 RFC.
Configure authentication in SAP
Configure the authentication in SAP by following the instructions in the Authentication overview for the on-premises or any cloud edition of ABAP SDK for Google Cloud guide.
Validate the trigger
To validate the trigger, you can create an ABAP program. The following is a sample ABAP program that you can use as a reference. The ls_event_payload field changes based on your requirements:
*&---------------------------------------------------------------------*
*& Report ZR_TEST_INT_CONNECTOR
*&---------------------------------------------------------------------*
*&
*&---------------------------------------------------------------------*
REPORT zr_test_int_connector.
PARAMETERS: p_auth TYPE char1 RADIOBUTTON GROUP rbg1 USER-COMMAND uc DEFAULT 'X',
p_apik TYPE char1 RADIOBUTTON GROUP rbg1.
DATA:
lv_p_projects_id TYPE string,
lv_p_locations_id TYPE string,
lv_p_connections_id TYPE string,
ls_input TYPE /goog/cl_connectors_v1=>ty_103.
TYPES: BEGIN OF event_payload,
event_type TYPE string,
event_id TYPE string,
name TYPE string,
org_id TYPE string,
END OF event_payload.
DATA: ls_event_payload TYPE event_payload.
ls_event_payload = VALUE #(
event_type = 'create-entity'
event_id = '1'
name = 'demo-org'
org_id = 'SAP'
).
TRY.
IF p_Auth = abap_true.
DATA(lv_client_key) = 'IC_DEMO_GOOGLE_AUTH'.
lv_p_connections_id = 'conn-event-triggers-from-sap-erp'.
ELSE.
lv_client_key = 'IC_DEMO_GOOGLE_APIK'.
lv_p_connections_id = 'conn-event-triggers-from-sap-erp-apik'.
ENDIF.
* Open HTTP Connection
DATA(lo_client) = NEW /goog/cl_connectors_v1( iv_key_name = CONV #( lv_client_key ) ).
* Populate relevant parameters
lv_p_projects_id = lo_client->gv_project_id.
lv_p_locations_id = 'us-central1'.
GET REFERENCE OF ls_event_payload INTO ls_input-payload .
* Call API method: connectors.projects.locations.connections.listenEvent
CALL METHOD lo_client->listen_event_connections
EXPORTING
iv_p_projects_id = lv_p_projects_id
iv_p_locations_id = lv_p_locations_id
iv_p_connections_id = lv_p_connections_id
is_input = ls_input
IMPORTING
* es_raw =
es_output = DATA(ls_output)
ev_ret_code = DATA(lv_ret_code)
ev_err_text = DATA(lv_err_text)
es_err_resp = DATA(ls_err_resp).
IF lo_client->is_success( lv_ret_code ).
MESSAGE 'Success' TYPE 'S'.
ELSE.
MESSAGE lv_err_text TYPE 'E'.
ENDIF.
* Close HTTP Connection
lo_client->close( ).
CATCH /goog/cx_sdk INTO DATA(lo_exception).
MESSAGE lo_exception->get_text( ) TYPE 'E'.
ENDTRY.
Quotas and limits
For information about quotas and limits, see Quotas and limits .
What's next
Learn about all tasks and triggers .
Learn how to test and publish an integration .
Learn about error handling .
Learn about integration execution logs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
