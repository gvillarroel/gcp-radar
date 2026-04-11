---
title: "Bulk user management API \_|\_ Google Cloud Contact Center as a Service \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/bulk-user-management-api
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/ccai-platform/docs/bulk-user-management-api
source_metadata:
  url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/bulk-user-management-api
  title: "Bulk user management API \_|\_ Google Cloud Contact Center as a Service\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Google Cloud CCaaS
User Guides
Send feedback
Bulk user management API
Stay organized with collections
Save and categorize content based on your preferences.
Bulk User Management API lets you use the contents of a json file
to create or modify several users in one operation.
There is no limit to the number of records that can be uploaded, but it
is recommended that requests are performed in smaller batches.
This process can also be performed in the CCAI Platform portal by following the
instructions in the Bulk user management .
The Bulk User Sync Tool reference application is
provided that performs a synchronization of users between a directory such as
Google Workspace groups or Microsoft Entra ID with CCaaS. This reference
application leverages the Bulk user management API.
Roles and permissions
Use the Apps API by creating an api_user.
The api_user does not have roles and permissions, so all api_users
can perform bulk_user management .
You cannot set granular permissions when utilizing api_user, so the
api_user will have access to all user fields.
Add an API credential
In the CCAI Platform portal, go to Settings > Developer Settings > API
Credential management .
Click + Add API Credential . An Add API Credential
message will open.
Enter a Name for the credential.
Click Create .
Use the bulk user management API
Using the bulk user Mmanagement API requires two API calls. One uploads the JSON
file and creates the job, and the other processes it. You can also use optional
API calls to help ensure that your job is processed correctly.
Optional: Retrieve the json template . This retrieves the latest template,
which includes any additional roles or teams that were created since you retrieved the
previous template. Google recommends this step.
Optional: Get user configuration data . This retrieves
a list of all users (or a single user, if you specify an email address) to mirror.
Upload the json file . You can add or update one or multiple users in
the file. Make sure to note the job ID.
Request processing of the json file . This starts the bulk job.
Optional: Get a status check . Provide the job ID to look
at processing status.
Optional: Retrieve an updated job list . This retrieves the list of all bulk
user management jobs.
Optional: Retrieve scheme error logs . Specify the job ID to
get the scheme error logs.
Optional: Retrieve errors . Get errors.
Upload the json file
Usage
Upload the json file
URL
apps/api/v1/bulk/users/upload
Method
POST / PUT
Request
content-type: multipart/form-data
{
"id" : {job_id} #optional. Required in case of PUT method.
"file": {json file}
}
Response
Header:
Link: http://ujet.co/apps/api/v1/bulk/users_jobs/12345
Body
{
"id": 12345, # job_id
"status": "created"
"link": "http://ujet.co/apps/api/v1/bulk/users_jobs/12345"
}
Retrieve json template
Usage
Template
URL
apps/api/v1/bulk/users/template
Method
GET
Request
(Empty)
Response
[
{
"email":"user1@yourcompany.co",
"new_email":user1@yourcompany.cx",
"agent_number":"A-001",
"first_name":"John",
"last_name":"aa",
"status":"Active",
"location":"Mexico",
"max_chat_limit":2,
"max_chat_limit_enabled":0,
"roles": [
{"name":"Admin","value": 0 },
{"name":"Manager","value": 1 },
{"name":"Agent","value": 0 },
{"name":Developer","value": 1 }
]
},
...
]
Deactivate a user
To deactivate a user, change the status value to Inactive —for example,
"status":"Inactive" .
Request processing of the current json file
Usage
Request processing of current json file
URL
/v1/bulk/users/proceed
Method
POST
Request
{
"id": 12345 # job_id
}
Response
Header:
Link: http://ujet.co/apps/api/v1/bulk/users_jobs/12345
Body
1{"id": 12345 # job_id3 "status": "valid_scheme",4 "link": "http://ujet.co/apps/api/v1/bulk/users_jobs/12345"5}
Get a status check
Usage
Get a status check
URL
apps/api/v1/bulk/users/jobs/#{job_id}
Method
GET
Request
Path variable - job_id
Response
{
"id": 12345,
"created_at": "2022-01-07T06:40:34.000Z",
"process_requested_at": "2022-01-07T06:45:34.000Z",
"filename": "100row.json",
"total_rows": 100,
"affected_rows": 52,
"failed_rows": 0,
"status": "in_progress",
"uploaded_user_name": null,
"proceed_user_name": null,
"uploaded_api_user_name": "api_user_name_1",
"proceed_api_user_name": "api_user_name_2",
"scheme_errors": []
"update_errors": []
}
Retrieve updated job list
Usage
Get update job list
URL
apps/api/v1/bulk/users/jobs
Method
GET
Request
{
"page": 1,
"per_page": 20
}
Response
Header
Link: <next link>
Total: 12345
Per-Page: 201
Body
[
{
"id": 12345,
"created_at": "2022-01-07T06:21:10.000Z",
"process_requested_at": "2022-01-07T06:22:25.000Z",
"filename": "100row.json",
"total_rows": 100,
"affected_rows": 52,
"failed_rows": 0,
"status": "in_progress",
"uploaded_user_name": null,
"proceed_user_name": null,
"uploaded_api_user_name": "api_user_name_1",
"proceed_api_user_name": "api_user_name_2",
"scheme_errors": [],
"update_errors": []
},
...
]
Note
The output is sorted in reverse order of job_id so that the most
recent data comes first.
Retrieve scheme error logs
Usage
Get scheme error logs
URL
/v1/bulk/users/errors/scheme/#{job_id}
Method
GET
Request
Path variable - job_id
Response
content-type: application/json
[
{
"message": "Must be a valid email",
"column": 1,
"row": null
},
{
"message": "Non-empty string",
"column": 10,
"row": 10
}
]
Retrieve errors
Usage
Get update error logs
URL
/v1/bulk/users/errors/update/#{job_id}
Method
GET
Request
Path variable - job_id
Response
content-type: application/json
1[2 {3 "message": "Must be a valid email",4 "column": 1,5 "row": null,6 "error_type": "warning"7 },8 {9 "message": "Non-empty string",10 "column": 10,11 "row": 10,12 "error_type": "error"13 } 14]
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
