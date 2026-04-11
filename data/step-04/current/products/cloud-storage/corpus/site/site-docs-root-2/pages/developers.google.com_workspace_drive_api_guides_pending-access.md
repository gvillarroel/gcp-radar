---
title: "Manage pending access proposals \_|\_ Google Drive \_|\_ Google for Developers"
url: https://developers.google.com/workspace/drive/api/guides/pending-access
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/workspace/drive/api/guides/about-sdk
source_metadata:
  url: https://developers.google.com/workspace/drive/api/guides/pending-access
  title: "Manage pending access proposals \_|\_ Google Drive \_|\_ Google for Developers"
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
Manage pending access proposals
Stay organized with collections
Save and categorize content based on your preferences.
An access proposal is a proposal from a requester to an approver to grant a
recipient access to a Google Drive item.
An approver can review and act on all unresolved access proposals across
Drive files. This means you can speed up the approval process by
programmatically querying for access proposals and then resolving them. It also
allows proposals to be viewed in aggregate by an approver.
The Google Drive API provides the
accessproposals resource so you can view
and resolve pending access proposals. The methods of the accessproposals
resource work on files, folders, the files within a shared drive but not on
the shared drive.
The following terms are specific to access proposals:
Requester : The user initiating the access proposal to a
Drive item.
Recipient : The user receiving the additional permissions on a file if
the access proposal is granted. Many times the recipient is the same as the
requester but not always.
Approver : The user responsible for approving (or denying) the access
proposal. This is typically because they're an owner on the document or they
have the ability to share the document.
Important: Access proposals can't be created using the Drive API.
Users must request access using the Drive UI. For more
information, see Get permission to open a file or
folder .
Use the fields parameter
If you want to specify the fields to return in the response, you can set the
fields system
parameter
with any method of the accessproposals resource. If you omit the fields
parameter, the server returns a default set of fields specific to the method. To
return different fields, see Return specific
fields .
Get a pending access proposal
To get an access proposal, use the get method on the accessproposals resource with the fileId and proposalId
path parameters. If you don't know the proposal ID, you can list pending access
proposals using the list method.
List pending access proposals
To list all pending access proposals on a Drive item, call the
list method on the
accessproposals resource and include the
fileId path parameter.
Only approvers on a file can list the pending proposals on a file. An approver
is a user with the can_approve_access_proposals capability on the file. If the
requester isn't an approver, an empty list is returned. For more information
about capabilities , see Understand file
capabilities .
The response body
consists of an accessproposals object representing a list of unresolved access
proposals on the file.
The accessproposals object includes info about each proposal such as the
requester, the recipient, and the message that the requester added. It also
includes a RoleAndView
object that groups the requester's proposed role with a view . Since role
is a repeated field, multiples could exist for each proposal. For example, a
proposal might have an RoleAndView object of role=reader and
view=published , plus an additional RoleAndView object with only the
role=writer value. For more information, see
Views .
Pass the following query parameters to customize pagination of, or filter,
access proposals:
pageToken : A page token, received from a previous list call. Provide this
token to retrieve the subsequent page.
pageSize : The maximum number of access proposals to return per page.
Resolve pending access proposals
To resolve all pending access proposals on a Drive
item, call the resolve method on
the accessproposals resource and include
the fileId and proposalId path parameters.
The resolve method includes an action query parameter that denotes the
action to take on the proposal. The
Action object tracks the
state change of the proposal so we know if it's being accepted or denied.
The resolve method also includes the optional query parameters of role and
view . The only supported roles are writer , commenter , and reader . If the
role isn't specified, it defaults to reader . For more information, see Roles
and permissions . An additional optional query
parameter of sendNotification lets you send an email notification to the
requester when the proposal is accepted or denied.
Just as with the list method, users resolving the proposal must have the
can_approve_access_proposals capability on the file. For more information
about capabilities , see Understand file
capabilities .
Proposals are resolved using the same patterns listed under Scenarios for
sharing Drive
resources . If there are
multiple proposals for the same user, but with different roles, the following
applies:
If one proposal is accepted and one is denied, the accepted role applies to
the Drive item.
If both proposals are accepted at the same time, the proposal with the
higher permission (for example, role=writer versus role=reader ) is
applied. The other access proposal is removed from the item.
After sending a proposal to the resolve method, the sharing action is
complete. The resolved access proposal is no longer returned through the list
method. Once the proposal is accepted, the user must use the permissions resource to update permissions on a file or
folder. For more information, see Update
permissions .
Related topics
Share files, folders, and drives
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
