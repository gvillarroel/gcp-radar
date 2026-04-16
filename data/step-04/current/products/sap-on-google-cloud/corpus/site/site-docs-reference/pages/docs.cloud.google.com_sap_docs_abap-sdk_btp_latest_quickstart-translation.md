---
title: "Translate text \_|\_ SAP on Google Cloud \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sap/docs/abap-sdk/btp/latest/quickstart-translation
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp
source_metadata:
  url: https://docs.cloud.google.com/sap/docs/abap-sdk/btp/latest/quickstart-translation
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
SAP BTP edition v1.1 keyboard_arrow_down
SAP BTP edition v1.1
On-premises or any cloud edition v1.13
This quickstart shows you how
to create a program that translates text from English to German by using the
Cloud Translation API v2
through the SAP BTP edition of ABAP SDK for Google Cloud.
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
Make sure the Cloud Translation API is enabled in your Google Cloud project.
Go to API library
Create an ABAP class to translate text
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
Create an ABAP class to call the Cloud Translation API:
Right-click your ABAP package and select New > ABAP Class .
Enter the following details for your ABAP class:
Name : enter ZGOOG_CL_QS_TRANSLATION .
Description : enter Quick start for Translation API .
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
class ZCL_QS_TRANSLATE_TEXT definition
public
final
create public .
public section.
interfaces IF_OO_ADT_CLASSRUN .
ENDCLASS.
CLASS ZCL_QS_TRANSLATE_TEXT IMPLEMENTATION.
METHOD IF_OO_ADT_CLASSRUN~MAIN.
DATA ls_input TYPE /goog/cl_translation_v2=>ty_006.
DATA lt_translations TYPE /goog/cl_translation_v2=>ty_translations.
DATA ls_texts TYPE /goog/cl_translation_v2=>ty_008.
DATA lo_translate TYPE REF TO /goog/cl_translation_v2.
TRY.
" Open HTTP Connection
" The client key DEMO_TRANSLATE is an example, replace this with actual value
lo_translate = NEW #( iv_key_name = ' DEMO_TRANSLATE ' ).
" Pass the text to be translated to the required parameter
ls_input = VALUE #( format = 'text'
source = 'en'
target = 'de'
q = VALUE #( ( |The Earth is the third planet from the Sun| ) ) ).
" Call the API method to translate text
lo_translate->translate_translations( EXPORTING is_input = ls_input
IMPORTING es_output = DATA(ls_output)
ev_ret_code = DATA(lv_ret_code)
ev_err_text = DATA(lv_err_text)
es_err_resp = DATA(ls_err_resp) ).
IF lo_translate->is_success( lv_ret_code ) = abap_true.
lt_translations = ls_output-data.
TRY.
ls_texts = lt_translations-translations[ 1 ].
out->write( |Translation Successful| ).
out->write( |Translated Text is: { ls_texts-translated_text }| ).
CATCH cx_sy_itab_line_not_found.
out->write( |Translation not fetched| ).
ENDTRY.
ENDIF.
" Close HTTP connection
lo_translate->close( ).
CATCH /goog/cx_sdk INTO DATA(lo_exception).
" Handle exception here
ENDTRY.
ENDMETHOD.
ENDCLASS.
Replace DEMO_TRANSLATE with the client key name.
Save and activate the changes.
Run your application:
Select the ABAP class ZGOOG_CL_QS_TRANSLATION .
Click Run > Run As > ABAP Application (Console) .
Alternatively, press F9 .
If successful, the following output displays:
'Translation Successful'
'Translated Text is: Die Erde ist der dritte Planet von der Sonne'
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
