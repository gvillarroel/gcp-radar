---
title: "Publish messages to Google Cloud Pub/Sub \_|\_ SAP on Google Cloud \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/sap/docs/abap-sdk/btp/latest/quickstart-pubsub
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp
source_metadata:
  url: https://docs.cloud.google.com/sap/docs/abap-sdk/btp/latest/quickstart-pubsub
  title: "Publish messages to Google Cloud Pub/Sub \_|\_ SAP on Google Cloud \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
SAP on Google Cloud
Guides
Send feedback
Publish messages to Google Cloud Pub/Sub
Stay organized with collections
Save and categorize content based on your preferences.
SAP BTP edition v1.1 keyboard_arrow_down
SAP BTP edition v1.1
On-premises or any cloud edition v1.13
This quickstart shows you how
to create a program that publishes a "Hello World!" message to
a Pub/Sub topic by using the Pub/Sub API through the SAP BTP edition of ABAP SDK for Google Cloud.
Before you begin
Before you run this quickstart, make sure that you or your administrators have
completed the following prerequisites:
You have a Google Cloud account and project.
Billing is enabled for your project. See how to confirm that billing is enabled for your project .
The SAP BTP edition of ABAP SDK for Google Cloud is installed and configured. See how to install and configure the SAP BTP edition of ABAP SDK for Google Cloud .
Authentication to access Google Cloud APIs is set up. See how to set up authentication .
You have access to the SAP BTP, ABAP environment .
You have downloaded and installed the latest ABAP Development Tools (ADT) on the latest
Eclipse platform.
You have created an ABAP Cloud Project .
Grant the service account the IAM role roles/pubsub.publisher .
Make sure the Pub/Sub API is enabled in your Google Cloud project.
Go to API library
Create a Pub/Sub topic SAMPLE_TOPIC_01 and add a pull
subscription SAMPLE_SUB_TOPIC_01 to the same. For more information, see Create a topic and Create a subscription .
Create an ABAP class to publish messages to a Pub/Sub topic
Create a package:
Note: If you already have a package, then you can use your existing package.
Skip step 1.
In ADT, go to the Project Explorer.
Right-click the package ZLOCAL , and select
New > ABAP Package .
Enter the following details for your package:
Name : enter ZABAPSDK_TEST .
Description : enter ABAP SDK Test Package .
Click Next .
In the Select a Transport Request dialog, select the
Create a new request checkbox.
Enter a description for the transport request.
Click Finish .
Create an ABAP class to call the Pub/Sub API:
Right-click your ABAP package and select New > ABAP Class .
Enter the following details for your ABAP class:
Name : enter ZGOOG_CL_QS_PUBSUB .
Description : enter Quick start for Pub/Sub API .
Click Next .
Select a transport request and click Finish .
In the code editor, replace the default code with the following code snippet:
" --------------------------------------------------------------------
" Copyright 2024 Google LLC -
" -
" Licensed under the Apache License, Version 2.0 (the "License"); -
" you may not use this file except in compliance with the License. -
" You may obtain a copy of the License at -
" https://www.apache.org/licenses/LICENSE-2.0 -
" Unless required by applicable law or agreed to in writing, -
" software distributed under the License is distributed on an -
" "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, -
" either express or implied. -
" See the License for the specific language governing permissions -
" and limitations under the License. -
" --------------------------------------------------------------------
CLASS zcl_qs_publish_messages DEFINITION
PUBLIC FINAL
CREATE PUBLIC.
PUBLIC SECTION.
INTERFACES if_oo_adt_classrun.
ENDCLASS.
CLASS ZCL_QS_PUBLISH_MESSAGES IMPLEMENTATION.
METHOD if_oo_adt_classrun~main.
DATA ls_input TYPE /goog/cl_pubsub_v1=>ty_023.
DATA lo_pubsub TYPE REF TO /goog/cl_pubsub_v1.
DATA lv_p_projects_id TYPE string.
DATA lv_p_topics_id TYPE string.
TRY.
" Open HTTP connection
" The client key DEMO_PUBSUB is an example, replace this with actual value
lo_pubsub = NEW /goog/cl_pubsub_v1( iv_key_name = ' DEMO_PUBSUB ' ).
" Pass the relevant input parameters
" The value shown below is an example. Replace it with actual value
lv_p_topics_id = 'SAMPLE_TOPIC_01'.
lv_p_projects_id = lo_pubsub->gv_project_id.
APPEND VALUE #( data = cl_http_utility=>encode_base64( 'Hello World!' ) )
TO ls_input-messages.
" Call the API
lo_pubsub->publish_topics( EXPORTING iv_p_projects_id = lv_p_projects_id
iv_p_topics_id = lv_p_topics_id
is_input = ls_input
IMPORTING
es_output = DATA(ls_output)
ev_ret_code = DATA(lv_ret_code)
ev_err_text = DATA(lv_err_text)
es_err_resp = DATA(ls_err_resp) ).
" Handle the output
IF lo_pubsub->is_success( lv_ret_code ).
out->write( 'Message was published!' ).
ELSE.
out->write( 'Message was not published!' ).
ENDIF.
" Close the HTTP Connection
lo_pubsub->close( ).
CATCH /goog/cx_sdk INTO DATA(lo_exception).
" Handle exception here
ENDTRY.
ENDMETHOD.
ENDCLASS.
Replace DEMO_PUBSUB with the client key name.
Save and activate the changes.
Run your application:
Select the ABAP class ZGOOG_CL_QS_PUBSUB .
Click Run > Run As > ABAP Application (Console) .
Alternatively, press F9 .
To validate the results, follow these steps:
In the Google Cloud console, go to Pub/Sub .
Select the subscription SAMPLE_SUB_TOPIC_01 and go to the Messages tab.
Use the PULL feature to check whether the "Hello World!"
message has been published to the topic.
What's next
Read the guide Application development with the SAP BTP edition of ABAP SDK for Google Cloud .
View the code samples .
Ask your questions and discuss ABAP SDK for Google Cloud with the community on
Cloud Forums .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
