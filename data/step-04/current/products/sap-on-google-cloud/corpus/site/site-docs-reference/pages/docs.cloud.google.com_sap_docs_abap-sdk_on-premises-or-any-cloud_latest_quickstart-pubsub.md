---
title: "Publish messages to Google Cloud Pub/Sub \_|\_ SAP on Google Cloud \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/sap/docs/abap-sdk/on-premises-or-any-cloud/latest/quickstart-pubsub
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp
source_metadata:
  url: https://docs.cloud.google.com/sap/docs/abap-sdk/on-premises-or-any-cloud/latest/quickstart-pubsub
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
On-premises or any cloud edition v1.13 keyboard_arrow_down
SAP BTP edition v1.1
On-premises or any cloud edition v1.13
This quickstart shows you how
to create a program that publishes a "Hello World!" message to
a Pub/Sub topic by using the Pub/Sub API .
Before you begin
Before you run this quickstart, make sure that you or your administrators have
completed the following prerequisites:
You have a Google Cloud account and project.
Billing is enabled for your project. See how to confirm that billing is enabled for your project .
The on-premises or any cloud edition of ABAP SDK for Google Cloud is installed and configured. See how to install and configure the on-premises or any cloud edition of ABAP SDK for Google Cloud .
Authentication to access Google Cloud APIs is set up. See how to set up authentication .
Grant the service account the IAM role roles/pubsub.publisher .
Make sure the Pub/Sub API is enabled in your Google Cloud project.
Go to API library
Create a Pub/Sub topic SAMPLE_TOPIC_01 and add a pull
subscription SAMPLE_SUB_TOPIC_01 to the same. For more information, see Create a topic and Create a subscription .
Create a program to publish messages to Google Cloud
In the SAP system, create an executable program in your
custom namespace (for example, Z or Y) by using transaction SE38 .
In the SAP GUI, enter transaction code SE38 .
In the Program field, enter a name of your program
for example, ZDEMO_PUBSUB .
Click Create .
Specify the program attributes:
In the Title field, enter a title of your program,
for example, Publish messages to a Pub/Sub topic .
In the Type field, choose Executable Program .
Click Save .
Save the program as a Local Object .
In the ABAP Editor , add the following code:
**********************************************************************
* Copyright 2023 Google LLC *
* *
* Licensed under the Apache License, Version 2.0 (the "License"); *
* you may not use this file except in compliance with the License. *
* You may obtain a copy of the License at *
* https://www.apache.org/licenses/LICENSE-2.0 *
* Unless required by applicable law or agreed to in writing, *
* software distributed under the License is distributed on an *
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, *
* either express or implied. *
* See the License for the specific language governing permissions *
* and limitations under the License. *
**********************************************************************
REPORT zr_qs_publish_messages.
* Data Declaration
DATA:
lv_p_projects_id TYPE string,
lv_p_topics_id TYPE string,
ls_input TYPE /goog/cl_pubsub_v1=>ty_023.
TRY.
* Instantiate the client stub
DATA(lo_pubsub) = NEW /goog/cl_pubsub_v1( iv_key_name = ' DEMO_PUBSUB ' ).
* Pass the relevant input parameters
lv_p_topics_id = 'SAMPLE_TOPIC_01'.
lv_p_projects_id = lo_pubsub->gv_project_id.
APPEND VALUE #( data = cl_http_utility=>encode_base64( 'Hello World!' ) ) to ls_input-messages.
* Call the API
CALL METHOD lo_pubsub->publish_topics
EXPORTING
iv_p_projects_id = lv_p_projects_id
iv_p_topics_id = lv_p_topics_id
is_input = ls_input
IMPORTING
es_output = DATA(ls_output)
ev_ret_code = DATA(lv_ret_code)
ev_err_text = DATA(lv_err_text)
es_err_resp = DATA(ls_err_resp).
* Handle the output
IF lo_pubsub->is_success( lv_ret_code ).
MESSAGE 'Message was published!' TYPE 'S'.
ELSE.
MESSAGE 'Message was not published!' TYPE 'E'.
ENDIF.
* Close the HTTP Connection
lo_pubsub->close( ).
CATCH /goog/cx_sdk INTO DATA(lo_exception).
MESSAGE lo_exception->get_text( ) TYPE 'E'.
ENDTRY.
Replace DEMO_PUBSUB with the client key name.
Run your application in SE38 .
To validate the results, follow these steps:
In the Google Cloud console, go to Pub/Sub .
Select the subscription SAMPLE_SUB_TOPIC_01 and go to the Messages tab.
Use the PULL feature to check whether the "Hello World!"
message has been published to the topic.
What's next
Explore other quickstarts available on the GitHub repository, GoogleCloudPlatform/google-cloud-abap/abap-sdk
/ZGOOG_SDK_QUICKSTART/ .
Read the guide Application development with the on-premises or any cloud edition of ABAP SDK for Google Cloud .
View the code samples .
Ask your questions and discuss ABAP SDK for Google Cloud with the community on
Cloud Forums .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
