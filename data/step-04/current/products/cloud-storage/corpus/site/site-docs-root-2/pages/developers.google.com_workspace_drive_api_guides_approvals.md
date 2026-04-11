---
title: "Manage approvals \_|\_ Google Drive \_|\_ Google for Developers"
url: https://developers.google.com/workspace/drive/api/guides/approvals
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/workspace/drive/api/guides/about-sdk
source_metadata:
  url: https://developers.google.com/workspace/drive/api/guides/approvals
  title: "Manage approvals \_|\_ Google Drive \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Drive
Guides
Send feedback
Manage approvals
Stay organized with collections
Save and categorize content based on your preferences.
This document explains how to manage approvals in the Google Drive API.
You can find your content approvals in Google Drive. The Google Drive API
provides the approvals resource so you can get
and list the status of your approvals. The methods of the approvals resource
work on items within Drive, Google Docs, and other
Google Workspace editors.
You can use this process to locate approvals in formal review situations, such
as a contract review or an official document before publication. An approval
tracks the status of both the review (such as In Progress, Approved, or
Declined) and the reviewers involved. Approvals are an excellent way to validate
content and to keep a record of reviewers.
To view approvals on a file, you must have permission to read the metadata of
the file. For more information, see Roles and
permissions .
Important: Approvals can't be created using the Drive API. Users must
use the Drive UI. For more information, see Get approvals on
files in Google Drive .
Use the fields parameter
If you want to specify the fields to return in the response, you can set the
fields system
parameter
with any method of the approvals resource. If you omit the fields parameter,
the server returns a default set of fields specific to the method. To return
different fields, see Return specific fields .
Get an approval
To get an approval on a file, use the get
method on the approvals resource with the
fileId and approvalId path parameters. If you don't know the approval ID,
you can list approvals using the list method.
The response body contains an instance of the
approvals resource.
List approvals
To list approvals on a file, call the
list method on the approvals resource and include the fileId path parameter.
The response body consists of
a list of approvals on the file. The
items
field includes information about each approval in the form of an approvals
resource.
The approvals resource also includes a
Status object that details the status
of the approval, as well as the
ReviewerResponse object that
details the response to an approval made by a specific reviewer. This reviewer's
response is represented by the
Response object.
You can also pass the following query parameters to customize pagination of, or
filter, the approvals:
pageSize : The maximum number of approvals to return per page. If you don't
set pageSize , the server returns up to 100 approvals.
pageToken : A page token, received from a previous list call. This token is
used to retrieve the subsequent page. It should be set to the value of
nextPageToken from a previous response.
Related topics
Manage Approvals
Get approvals on files in Google Drive
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
