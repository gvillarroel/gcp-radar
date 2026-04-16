---
title: "Process documents \_|\_ SAP on Google Cloud \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sap/docs/abap-sdk/btp/latest/quickstart-doc-processing
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment
source_metadata:
  url: https://docs.cloud.google.com/sap/docs/abap-sdk/btp/latest/quickstart-doc-processing
  title: "Process documents \_|\_ SAP on Google Cloud \_|\_ Google Cloud Documentation"
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
Process documents
Stay organized with collections
Save and categorize content based on your preferences.
SAP BTP edition v1.1 keyboard_arrow_down
SAP BTP edition v1.1
On-premises or any cloud edition v1.13
This quickstart shows you how to process documents (invoices) from a source
Cloud Storage bucket and store the processed document
(JSON file) in a target bucket by using the batch processing
capability of Document AI API
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
Make sure the Document AI API is enabled in
your Google Cloud project.
Go to API library
In the Document AI Workbench, create a processor with type INVOICE_PROCESSOR .
For more information, see Creating and managing processors .
In Cloud Storage, create a source bucket to store the invoices
for processing and place the invoices in this bucket. For more information, see Create buckets .
In Cloud Storage, create a target bucket to store the processed files.
Create an ABAP class to process documents
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
Create an ABAP class to call the Document AI API:
Right-click your ABAP package and select New > ABAP Class .
Enter the following details for your ABAP class:
Name : enter ZGOOG_CL_QS_DOCUMENT_AI .
Description : enter Quick start for Document AI API .
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
CLASS zcl_qs_process_documents DEFINITION
PUBLIC FINAL
CREATE PUBLIC.
PUBLIC SECTION.
INTERFACES if_oo_adt_classrun.
ENDCLASS.
CLASS ZCL_QS_PROCESS_DOCUMENTS IMPLEMENTATION.
METHOD if_oo_adt_classrun~main.
DATA lv_p_projects_id TYPE string.
DATA lv_p_locations_id TYPE string.
DATA lv_p_processors_id TYPE string.
DATA ls_input TYPE /goog/cl_documentai_v1=>ty_017.
DATA lo_docai TYPE REF TO /goog/cl_documentai_v1.
TRY.
" Open HTTP connection
" The client key DEMO_DOC_PROCESSING is an example, replace this with actual value
lo_docai = NEW #( iv_key_name = ' DEMO_DOC_PROCESSING ' ).
" Populate relevant parameters to be passed to API
lv_p_projects_id = ' PROJECT_ID '.
lv_p_locations_id = ' LOCATION_ID '.
lv_p_processors_id = ' PROCESSOR_ID '.
ls_input-input_documents-gcs_prefix-gcs_uri_prefix = ' SOURCE_BUCKET_URI '.
ls_input-document_output_config-gcs_output_config-gcs_uri = ' TARGET_BUCKET_URI '.
" Call API method
lo_docai->batch_process_processors( EXPORTING iv_p_projects_id = lv_p_projects_id
iv_p_locations_id = lv_p_locations_id
iv_p_processors_id = lv_p_processors_id
is_input = ls_input
IMPORTING
es_output = DATA(ls_output)
ev_ret_code = DATA(lv_ret_code)
ev_err_text = DATA(lv_err_text)
es_err_resp = DATA(ls_err_resp) ).
IF lo_docai->is_success( lv_ret_code ) = abap_true.
out->write( |API call successful| ).
ELSE.
out->write( |Error occurred during API call| ).
out->write( lv_err_text ).
ENDIF.
" Close HTTP connection
lo_docai->close( ).
CATCH /goog/cx_sdk INTO DATA(lo_exception).
" Handle exception here
ENDTRY.
ENDMETHOD.
ENDCLASS.
Replace the following:
DEMO_DOC_PROCESSING : the client key name.
PROJECT_ID : the ID of the Google Cloud project
that has the Document AI API enabled.
LOCATION_ID : the processor's location.
PROCESSOR_ID : the ID of the processor.
SOURCE_BUCKET_URI : the URI of the Cloud Storage
bucket folder where source documents are kept for processing.
TARGET_BUCKET_URI : the URI of the Cloud Storage
bucket where the processed document (JSON file) would be stored.
Save and activate the changes.
Run your application:
Select the ABAP class ZGOOG_CL_QS_DOCUMENT_AI .
Click Run > Run As > ABAP Application (Console) .
Alternatively, press F9 .
To validate the results, follow these steps:
In the Google Cloud console, go to Cloud Storage Buckets page.
Go to Buckets
Open the target bucket. The processed document is stored in the form of a JSON file.
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
