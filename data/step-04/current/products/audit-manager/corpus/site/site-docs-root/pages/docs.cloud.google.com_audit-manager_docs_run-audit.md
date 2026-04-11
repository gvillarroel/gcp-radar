---
title: "Run a compliance audit in Google Cloud \_|\_ Audit Manager \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/audit-manager/docs/run-audit
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/audit-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/audit-manager/docs/run-audit
  title: "Run a compliance audit in Google Cloud \_|\_ Audit Manager \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Audit Manager
Guides
Send feedback
Run a compliance audit in Google Cloud
Stay organized with collections
Save and categorize content based on your preferences.
Perform an audit to collect the evidence that you require to assess your
Google Cloud organization against compliance frameworks.
An audit is a long-running operation that might take a few hours. The duration
depends on the number of resources within the audit scope, which is the project
or folder you have previously enrolled.
Note: Running audits using the custom compliance frameworks ( Preview ) is available in
Audit Manager Premium tier. To upgrade to the Premium tier, contact sales .
Before you begin
Ensure that you have one of the following IAM roles:
Audit Manager Admin ( roles/auditmanager.admin )
Audit Manager Auditor ( roles/auditmanager.auditor )
If you want to run an audit against a custom compliance framework ( Preview ), ensure that
you have the Audit Manager Custom Compliance Framework Viewer ( roles/auditmanager.ccfViewer )
IAM role.
Ensure that your project or folder has been enrolled for auditing.
Run an audit
Console
In the Google Cloud console, go to the Run assessment page in
Audit Manager.
Go to Audit Manager
In the Choose resource and regulation section, do the following:
Select your project or folder that needs to be audited.
Select the compliance framework that you want to audit your resource against.
You can either select a built-in or a custom compliance framework ( Preview ) from the
Available frameworks list. For more information, see Supported compliance frameworks .
Select the location where the audit assessment must be processed. For
the list of supported locations, see Audit Manager
locations .
Click Next .
Optional: In the View Assessment Plan section, you can download an ODS
file that contains information about the audit scope based on the
compliance framework that you selected. To download the file, click the link,
and click Next .
In the Choose storage bucket section, select a storage bucket
where the audit report and evidence must be
saved, and click Done . If your bucket is not listed, then ask your
administrator to enroll your resource
with your storage bucket.
To start the audit, click Run Audit .
You can view the audit status on the View assessments page.
gcloud
Optional: Generate an audit assessment
Before running an actual audit, you can generate an audit assessment
(or scope) that includes a detailed task breakdown for the audit based on the
compliance framework you chose.
The gcloud audit-manager audit-scopes generate
command generates an audit scope.
Before using any of the command data below,
make the following replacements:
RESOURCE_TYPE : the type of resource, either a project or a folder. For example: folder .
RESOURCE_ID : the resource ID of the project or folder. For example: 8767234 .
LOCATION : the location of the Audit Manager API endpoint. For a list of
available endpoints, see Audit Manager locations . For example: us-central1 .
COMPLIANCE_TYPE : the compliance framework to audit against.
For a built-in compliance framework, specify the name of the framework to audit against.
For example: CIS_CONTROLS_V8 .
For a custom compliance framework ( Preview ), specify the name of the framework in the following format:
organizations/ ORG_ID /locations/global/customComplianceFrameworks/ CUSTOM_COMPLIANCE_FRAMEWORK_ID
Replace the following:
ORG_ID : the organization ID
CUSTOM_COMPLIANCE_FRAMEWORK_ID : the ID of the custom compliance framework
AUDIT_REPORT_FORMAT : the format of the output audit report.
Only ODF format is supported: odf .
OUTPUT_DIRECTORY : the directory where the output must be stored. For example: reports .
OUTPUT_FILENAME : the name of the output file. Don't include the file extension in the filename. For example: scopeReport .
Execute the
following
command:
Linux, macOS, or Cloud Shell
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud audit-manager audit-scopes generate \
-- RESOURCE_TYPE = RESOURCE_ID \
--location = LOCATION \
--compliance-framework = COMPLIANCE_TYPE \
--report-format = AUDIT_REPORT_FORMAT \
--output-directory = OUTPUT_DIRECTORY \
--output-file-name = OUTPUT_FILENAME
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud audit-manager audit-scopes generate `
-- RESOURCE_TYPE = RESOURCE_ID `
--location = LOCATION `
--compliance-framework = COMPLIANCE_TYPE `
--report-format = AUDIT_REPORT_FORMAT `
--output-directory = OUTPUT_DIRECTORY `
--output-file-name = OUTPUT_FILENAME
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud audit-manager audit-scopes generate ^
-- RESOURCE_TYPE = RESOURCE_ID ^
--location = LOCATION ^
--compliance-framework = COMPLIANCE_TYPE ^
--report-format = AUDIT_REPORT_FORMAT ^
--output-directory = OUTPUT_DIRECTORY ^
--output-file-name = OUTPUT_FILENAME
Run an audit
The
gcloud audit-manager audit-reports generate
command runs an audit.
Before using any of the command data below,
make the following replacements:
RESOURCE_TYPE : the type of resource, either a project or a folder. For example: folder .
RESOURCE_ID : the resource ID of the project or folder. For example: 8767234 .
LOCATION : the location of the Audit Manager API endpoint. For a list of
available endpoints, see Audit Manager locations . For example: us-central1 .
COMPLIANCE_TYPE : the compliance framework to audit against.
For a built-in compliance framework, specify the name of the framework to audit against.
For example: CIS_CONTROLS_V8 .
For a custom compliance framework ( Preview ), specify the name of the framework in the following format:
organizations/ ORG_ID /locations/global/customComplianceFrameworks/ CUSTOM_COMPLIANCE_FRAMEWORK_ID
Replace the following:
ORG_ID : the organization ID
CUSTOM_COMPLIANCE_FRAMEWORK_ID : the ID of the custom compliance framework
BUCKET_URI : the URI of the Cloud Storage bucket. For example:
gs://testbucketauditmanager .
AUDIT_REPORT_FORMAT : the format of the output audit report.
Only ODF format is supported: odf .
Execute the
following
command:
Linux, macOS, or Cloud Shell
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud audit-manager audit-reports generate \
-- RESOURCE_TYPE = RESOURCE_ID \
--location = LOCATION \
--compliance-framework = COMPLIANCE_TYPE \
--report-format = AUDIT_REPORT_FORMAT \
--gcs-uri = BUCKET_URI
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud audit-manager audit-reports generate `
-- RESOURCE_TYPE = RESOURCE_ID `
--location = LOCATION `
--compliance-framework = COMPLIANCE_TYPE `
--report-format = AUDIT_REPORT_FORMAT `
--gcs-uri = BUCKET_URI
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud audit-manager audit-reports generate ^
-- RESOURCE_TYPE = RESOURCE_ID ^
--location = LOCATION ^
--compliance-framework = COMPLIANCE_TYPE ^
--report-format = AUDIT_REPORT_FORMAT ^
--gcs-uri = BUCKET_URI
You should receive a response similar to the following:
done: false
name: projects/10398413/locations/987234/operations/operation-1726842525305-6228ddb4dca96-78a6db59-f9dd9a24
REST
Optional: Generate an audit assessment
Before running an actual audit, you can generate an audit assessment
(or scope) that includes a detailed task breakdown for the audit based on the
compliance framework you chose.
Before using any of the request data,
make the following replacements:
RESOURCE_TYPE : the type of resource, either a project or a folder. For example: folder .
RESOURCE_ID : the resource ID of the project or folder. For example: 8767234 .
LOCATION : the location of the Audit Manager API endpoint. For a list of
available endpoints, see Audit Manager locations . For example: us-central1 .
COMPLIANCE_TYPE : the compliance framework to audit against.
For a built-in compliance framework, specify the name of the framework to audit against.
For example: CIS_CONTROLS_V8 .
For a custom compliance framework ( Preview ), specify the name of the framework in the following format:
organizations/ ORG_ID /locations/global/customComplianceFrameworks/ CUSTOM_COMPLIANCE_FRAMEWORK_ID
Replace the following:
ORG_ID : the organization ID
CUSTOM_COMPLIANCE_FRAMEWORK_ID : the ID of the custom compliance framework
AUDIT_REPORT_FORMAT : the format of the output audit report.
Only ODF format is supported: odf .
OUTPUT_DIRECTORY : the directory where the output must be stored. For example: reports .
OUTPUT_FILENAME : the name of the output file. Don't include the file extension in the filename. For example: scopeReport .
HTTP method and URL:
POST https://auditmanager.googleapis.com/ RESOURCE_TYPE / RESOURCE_ID /locations/ LOCATION /auditScopesReport:generate
Request JSON body:
{
"compliance_framework" : " COMPLIANCE_TYPE "
"report_format" : " AUDIT_REPORT_FORMAT "
}
To send your request, choose one of these options:
curl
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://auditmanager.googleapis.com/ RESOURCE_TYPE / RESOURCE_ID /locations/ LOCATION /auditScopesReport:generate"
PowerShell
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://auditmanager.googleapis.com/ RESOURCE_TYPE / RESOURCE_ID /locations/ LOCATION /auditScopesReport:generate" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"scope_report_contents" : "980u43nrf090834uhbkfehf......"
"name" : "folders/8767234/locations/us-west"
}
Run an audit
Before using any of the request data,
make the following replacements:
RESOURCE_TYPE : the type of resource, either a project or a folder. For example: folder .
RESOURCE_ID : the resource ID of the project or folder. For example: 8767234 .
LOCATION : the location of the Audit Manager API endpoint. For a list of
available endpoints, see Audit Manager locations . For example: us-central1 .
COMPLIANCE_TYPE : the compliance framework to audit against.
For a built-in compliance framework, specify the name of the framework to audit against.
For example: CIS_CONTROLS_V8 .
For a custom compliance framework ( Preview ), specify the name of the framework in the following format:
organizations/ ORG_ID /locations/global/customComplianceFrameworks/ CUSTOM_COMPLIANCE_FRAMEWORK_ID
Replace the following:
ORG_ID : the organization ID
CUSTOM_COMPLIANCE_FRAMEWORK_ID : the ID of the custom compliance framework
BUCKET_URI : the URI of the Cloud Storage bucket. For example:
gs://testbucketauditmanager .
AUDIT_REPORT_FORMAT : the format of the output audit report.
Only ODF format is supported: odf .
HTTP method and URL:
POST https://auditmanager.googleapis.com/ RESOURCE_TYPE / RESOURCE_ID /locations/ LOCATION/ /auditReport:generate
Request JSON body:
{
"destination" : {
"gcs_uri" : " BUCKET_URI "
},
"compliance_framework" : " COMPLIANCE_TYPE "
"report_format" : " AUDIT_REPORT_FORMAT "
}
To send your request, choose one of these options:
curl
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://auditmanager.googleapis.com/ RESOURCE_TYPE / RESOURCE_ID /locations/ LOCATION/ /auditReport:generate"
PowerShell
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://auditmanager.googleapis.com/ RESOURCE_TYPE / RESOURCE_ID /locations/ LOCATION/ /auditReport:generate" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "organizations/834/projects/10398413/locations/987234/operations/098234",
"done": false
}
The response has the following information:
name : A unique string identifier of the audit assessment operation request.
This identifier is used to track the progress of the audit assessment
process. For example: operation/098234 .
done : A boolean flag that is set to false that
indicates that the process has been triggered. This is set to true
when the audit assessment is completed.
The scope_reports_contents field is the byte format of the contents,
which must be converted to ODF format before review.
Note: If you experience issues when enrolling your project or folder,
see Troubleshoot run audit issues .
What's next
Get the status of an audit .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
