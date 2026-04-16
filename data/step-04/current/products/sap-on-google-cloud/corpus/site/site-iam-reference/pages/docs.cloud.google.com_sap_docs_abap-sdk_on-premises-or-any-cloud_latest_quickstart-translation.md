---
title: "Translate text \_|\_ SAP on Google Cloud \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sap/docs/abap-sdk/on-premises-or-any-cloud/latest/quickstart-translation
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/sap/docs/security-for-sap/iam-for-sap
source_metadata:
  url: https://docs.cloud.google.com/sap/docs/abap-sdk/on-premises-or-any-cloud/latest/quickstart-translation
  title: "Translate text \_|\_ SAP on Google Cloud \_|\_ Google Cloud Documentation"
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
Translate text
Stay organized with collections
Save and categorize content based on your preferences.
On-premises or any cloud edition v1.13 keyboard_arrow_down
SAP BTP edition v1.1
On-premises or any cloud edition v1.13
This quickstart shows you how
to create a program that translates text from English to German by using the
Cloud Translation API v2 .
Before you begin
Before you run this quickstart, make sure that you or your administrators have
completed the following prerequisites:
You have a Google Cloud account and project.
Billing is enabled for your project. See how to confirm that billing is enabled for your project .
The on-premises or any cloud edition of ABAP SDK for Google Cloud is installed and configured. See how to install and configure the on-premises or any cloud edition of ABAP SDK for Google Cloud .
Authentication to access Google Cloud APIs is set up. See how to set up authentication .
Make sure the Cloud Translation API is enabled in your Google Cloud project.
Go to API library
Create a program to translate text
In the SAP system, create an executable program in your
custom namespace (for example, Z or Y) by using transaction SE38 .
In the SAP GUI, enter transaction code SE38 .
In the Program field, enter a name of your program,
for example, ZDEMO_TRANSLATE .
Click Create .
Specify the program attributes:
In the Title field, enter a title of your program,
for example, Translate from English to German .
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
REPORT zr_qs_translate_texts.
* data declarations
data: lv_text type string,
lv_msg type string,
lv_ret_code type i,
lv_err_text type string,
ls_err_resp type /goog/err_resp,
ls_input type /goog/cl_translation_v2=>ty_006,
ls_output type /goog/cl_translation_v2=>ty_007,
lt_translations type /goog/cl_translation_v2=>ty_translations,
ls_texts type /goog/cl_translation_v2=>ty_008,
lo_translate type ref to /goog/cl_translation_v2,
lo_exception type ref to /goog/cx_sdk.
TRY.
* instantiate api client stub
create object lo_translate
exporting
iv_key_name = ' DEMO_TRANSLATE '.
* pass the text to be translated to the required parameter
lv_text = 'The Earth is the third planet from the Sun'.
APPEND lv_text TO ls_input-q.
ls_input-format = 'text'.
ls_input-source = 'en'.
ls_input-target = 'de'.
* call the api method to translate text
call method lo_translate->translate_translations
exporting
is_input = ls_input
importing
es_output = ls_output
ev_ret_code = lv_ret_code
ev_err_text = lv_err_text
es_err_resp = ls_err_resp.
IF lo_translate->is_success( lv_ret_code ) = abap_true.
lt_translations = ls_output-data.
READ TABLE lt_translations-translations INTO ls_texts INDEX 1.
WRITE: / 'Translation Successful'.
WRITE: / 'Translated Text is: ', ls_texts-translated_text.
ENDIF.
* close the http connection
lo_translate->close( ).
CATCH /goog/cx_sdk INTO lo_exception.
* write code here to handle exceptions
endtry.
Replace DEMO_TRANSLATE with the client key name.
Run your application in SE38 . If successful, the following output displays:
'Translation Successful'
'Translated Text is: Die Erde ist der dritte Planet von der Sonne'
What's next
Explore other quickstarts available on the GitHub repository, GoogleCloudPlatform/google-cloud-abap/abap-sdk
/ZGOOG_SDK_QUICKSTART/ .
Read the guide Application development with the on-premises or any cloud edition of ABAP SDK for Google Cloud .
View the code samples .
Ask your questions and discuss ABAP SDK for Google Cloud with the community on
Cloud Forums .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
