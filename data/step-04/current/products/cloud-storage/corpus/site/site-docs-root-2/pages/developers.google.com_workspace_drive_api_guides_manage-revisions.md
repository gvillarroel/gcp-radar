---
title: "Manage file revisions \_|\_ Google Drive \_|\_ Google for Developers"
url: https://developers.google.com/workspace/drive/api/guides/manage-revisions
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/workspace/drive/api/guides/about-sdk
source_metadata:
  url: https://developers.google.com/workspace/drive/api/guides/manage-revisions
  title: "Manage file revisions \_|\_ Google Drive \_|\_ Google for Developers"
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
Manage file revisions
Stay organized with collections
Save and categorize content based on your preferences.
This guide explains how to use the revisions
resource to manage file revisions, such as getting a file revision and
publishing a Google Workspace revision. The Google Drive API also lets you
download revisions. For more details about revision terminology, see Changes
and revisions overview .
To access the revision history, a user must have the role of owner ,
organizer , fileOrganizer , or writer .
To specify the fields to return in the response, you can set the fields
system parameter
with any method of the revisions resource. If
you omit the parameter, the server returns a default set of fields. For example,
the revisions.list method only returns the id , mimeType , kind , and
modifiedTime fields. To return different fields, see Return specific fields .
Specify revisions to save from auto delete
Google Drive automatically deletes older revisions that are no longer of
interest to the user.
A blob file revision can be set to "Keep
Forever" meaning the revision cannot be automatically purged. Up to 200
revisions can be set to "Keep Forever" and they count towards your storage
limit. The head revision is never auto-purged.
Any blob file revision, other than the head revision, that's not designated as
"Keep Forever" is purgeable. Purgeable revisions are typically preserved for 30
days, but can be purged earlier if a file has 100 revisions that aren't
designated as "Keep Forever" and a new revision is uploaded.
You can set the boolean keepForever field of the revisions resource to true to mark revisions that you
don't want Drive to purge. Once a blob file revision is set to
"Keep Forever", it can only be downloaded or deleted. For more information, see
Download a revision or Delete a
revision .
If you're using the older Drive API v2, use the pinned field of the
revisions resource instead of
keepForever .
Get a file revision
To get a file revision's metadata or content, use the get method on the
revisions resource with the fileId and
revisionId path parameters. If you don't know the revision ID, you can list
all revisions on a file using the list method.
The method returns the revision's metadata as an instance of a revisions
resource.
To acknowledge the risk of downloading known malware or other
abusive files, set the
acknowledgeAbuse query parameter to true . This field is only applicable when
the alt=media parameter is set and the user is either the file owner or an
organizer of the shared drive in which the file resides.
List a file's revisions
To list a file's revisions, use the list
method on the revisions resource with the
fileId path parameter. The method returns a list of file revisions.
Important: The list of revisions returned by this method might be incomplete for files with a large revision history, including frequently edited Google Docs, Sheets, and Slides. Older revisions might be omitted from the response, meaning the first revision returned may not be the oldest existing revision. The revision history visible in the Google Drive user interface might be more complete than the list returned by the API.
Pass the following query parameters to customize pagination of, or filter,
revisions:
pageSize : The maximum number of revisions to return per page.
pageToken : A page token, received from a previous list call. Provide this
token to retrieve the subsequent page.
Update a file revision
To update a revision on a file, use the
update method on the revisions resource with the fileId and revisionId path
parameters.
The method returns an instance of a revisions resource.
Download a revision
You can only download blob file content revisions marked as "Keep Forever". If
you want to download a revision, make sure to set it to "Keep Forever" first.
For more information, see Specify revisions to save from auto
delete .
To download a blob file content revision or to export a Google Workspace
document content revision, see Download and export
files .
Delete a file revision
To permanently delete a file revision, use the
delete method on the revisions resource with the fileId and revisionId path
parameters.
You can only delete revisions for blob files with binary content in
Drive, such as images, videos, and PDFs. You can delete a blob
file revision when it's marked as "Keep Forever." Revisions for other files,
such as a Google Docs or Sheets, and the last remaining
revision of the binary file, can't be deleted.
Publish a revision
To publish a Google Docs, Google Sheets, and Google Slides revision, set
the published property for that file in the
revisions resource. This property can't be set
for Google Sites revisions using Drive API.
Published revisions don't reflect changes made to a file unless the
publishAuto property is set. If the property is set to true , newer revisions
of a file are automatically published, overwriting the previous ones.
Slides and Drawings only support automatic
re-publishing and require the publishAuto property to be set to true . For
Sites files, publishAuto is always false .
If the file is created in a Google Workspace domain, the
publishedOutsideDomain property indicates whether the revision is accessible
by anyone or if it's restricted to users of the domain. For Sites
files, this property indicates whether a type=anyone permission exists. For
more information, see the
type field on the
permissions resource.
Automatic publishing is also controlled by the "Automatically republish when
changes are made" checkbox in the UI of Docs and
Sheets. For more information, see Make Google Docs,
Sheets, Slides & Forms
public .
Related topics
Download and export files
Roles and permissions
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
