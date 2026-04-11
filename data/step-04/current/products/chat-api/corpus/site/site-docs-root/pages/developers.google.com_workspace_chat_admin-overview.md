---
title: "Manage Google Chat spaces as a Google Workspace administrator \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/workspace/chat/admin-overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/chat/overview
source_metadata:
  url: https://developers.google.com/workspace/chat/admin-overview
  title: "Manage Google Chat spaces as a Google Workspace administrator \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Chat
Guides
Send feedback
Manage Google Chat spaces as a Google Workspace administrator
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google Workspace admins can manage Chat spaces using the Admin console Space Management Tool or the Google Chat API.
The Chat API enables admins to automate tasks like adding/removing space members, updating spaces, and searching for spaces.
Admins can authenticate using administrator privileges or domain-wide delegation when using the Chat API for management.
Use cases include onboarding/offboarding employees, promoting space managers, and auditing inactive spaces.
Detailed API methods and scenarios are provided to help admins effectively manage Google Chat spaces within their organization.
This page provides an overview of how Google Workspace administrators can use
the Google Chat API to manage Google Chat spaces across their organization.
To manage Chat spaces, Google Workspace administrators
can use the Space Management Tool
in the Google Admin console or call the Google Chat API. By
using the Chat API, administrators can create Google Chat apps that
manage spaces at scale and automate their common or repeatable tasks.
What administrators can do with the Chat API
An administrator can perform management tasks based on their
assigned administrator roles .
As a Google Workspace administrator, you can perform a number of
management tasks with the Chat API, such as the following:
Search spaces based on specified
criteria
List members
of a space
Add members
to and remove members
from a space
Get details about a member
and a space
Update or
delete a space
Update a user's membership
How to authenticate and authorize as a Google Workspace administrator
When using the
Chat API
for management tasks, administrators can authenticate and authorize requests by
invoking administrator privileges
or configuring domain-wide delegation
of authority for an application's service account.
The following table describes the ways administrators can authenticate when
using the Chat API.
User authentication
Who calls the API method
What users see in Chat
Administrator privileges
Administrator with useAdminAccess=true
"The organization's administrator performed [an action]."
For example, "The organization's administrator changed Kiran B to space manager."
It does not identify the administrator user's name or user ID or the
name of the Chat app.
Domain-wide delegation
Service account on behalf of a user
"[User] performed [an action] via [app name]."
For example, "Sasha T renamed the space to Release Project Discussion."
The user who is being impersonated by the service is identified as having
performed the action.
Note: When a Chat user with administrator permissions
authenticates using their
Chat user credentials
and does not set useAdminAccess=true for API requests, they do not use their
administrator privileges .
Use the Chat API for your organization
The examples in this section demonstrate how administrators use the
Chat API when managing their organization's spaces and members
with administrator privileges .
The following Chat API methods enable administrator privileges with
useAdminAccess=true .
spaces.delete
spaces.get
spaces.patch
spaces.search
spaces.members.create
spaces.members.delete
spaces.members.get
spaces.members.list
spaces.members.patch
Manage users' space memberships
The following scenarios are ways that you, as a Google Workspace
administrator, can manage the space membership of users in your organization
with the Chat API.
Add users to spaces
Using spaces.members.create ,
admins can add a user to any space in an organization.
Used in conjunction with spaces.search ,
admins can add a user to a set of spaces determined by their search query. This
can be useful when onboarding new employees to an organization; it allows
administrators to automate a routine process.
Find users and remove them from spaces
Using spaces.members.get ,
admins can determine if a user (internal or external to the organization) is a
member of any space in the organization.
Used in conjunction with spaces.search ,
admins can find all spaces that the user is a member of and then remove them
from the spaces with
spaces.members.delete .
This can be useful when employees move teams within an organization or
offboarding employees who are no longer with the organization; it allows
administrators to automate a routine process.
Promote users to space manager
Using spaces.members.patch ,
admins can change a member's role by updating their
MembershipRole
between the following options:
ROLE_MEMBER : A member of the space. In the Chat UI, this role
is called Member .
ROLE_ASSISTANT_MANAGER : A space manager. In the Chat UI, this
role is called Manager .
ROLE_MANAGER : A space owner. In the Chat UI, this role is
called Owner .
Used in conjunction with spaces.search ,
admins can find spaces that don't have a manager or an owner and then promote an
existing member to manager or owner with spaces.members.patch .
Find external members of a space
Using spaces.members.list ,
admins can retrieve a list of members in a space, retrieve the user profiles
from the organization's People API or Directory API, and then filter
the results for those who are members of an external domain or organization.
For more information, see
How chat identifies users .
Audit and manage spaces
The following scenarios are ways that you, as a Google Workspace
administrator, can audit and manage the spaces in your organization with the
Chat API.
Find and delete inactive spaces
Unused Chat spaces can take up valuable storage space and create
clutter in the user interface. Admins can use
spaces.search
to find the inactive spaces and then
spaces.delete
to delete them. For further guidance and a code sample, see
Find and delete inactive Chat spaces .
Audit spaces in the organization
Using spaces.search ,
admins can retrieve a list of all spaces in an organization with detailed
information about each space's settings and metadata such as creation date,
last activity date, number of members, status of history setting, and ability
to invite external guests.
Export a list of spaces based on search criteria
Using spaces.search ,
admins can retrieve a list of spaces that meet criteria specified in the
query
and export the results to a CSV file for analysis.
Find members of a space based on search criteria
Using spaces.members.list ,
admins can retrieve a list of members for any space in the organization and
analyze the results for specific criteria.
Find managers of a space
Using spaces.members.list ,
admins can retrieve a list of members for a space that is filtered to
MembershipState=ROLE_MANAGER .
To find all space managers in your organization, across all spaces, you can
use spaces.search to
list them all. Then for each space in the list, use spaces.members.list to
retrieve the managers.
Related topics
Authenticate and authorize using administrator privileges
Search and manage Google Chat spaces with the Google Chat API as a Google Workspace administrator
spaces.search method
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["Google Workspace administrators can use the Chat API to manage spaces and automate tasks. Key actions include: searching, creating, updating, and deleting spaces; listing, adding, and removing space members; and managing member roles. Authentication can occur via administrator privileges or domain-wide delegation. The API allows for auditing spaces, finding inactive spaces, exporting space lists based on criteria, finding space members and managers. The `spaces.search()`, `spaces.members.list()`, and other specific API methods are used to achieve these goals.\n"]]
