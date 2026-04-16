---
title: "Add, view, and edit users \_|\_ Google Cloud Contact Center as a Service \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/add-edit-user
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/ccai-platform/docs/user-roles-permissions
source_metadata:
  url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/add-edit-user
  title: "Add, view, and edit users \_|\_ Google Cloud Contact Center as a Service\
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
Add, view, and edit users
Stay organized with collections
Save and categorize content based on your preferences.
Users can be added individually by following these steps or can be imported in
bulk. When a user is added, they will need to activate their account. The
account activation is done by clicking on the link in the email to complete the
process.
For details about each default user role and how to create custom roles, see
Default user roles and permissions: Agent, Managers,
Admin
and Custom roles &
permissions .
See Bulk user
management for details
on adding more than one user at a time.
Add users
In the CCAI Platform portal, go to Settings > Users & Teams .
On the Users & teams settings page, click Add users
on the left side of the screen in the Users section.
Enter the email address matching the email address the agent uses
to login to the CRM .
Enter the agent's first and last name.
Optional: Add an agent alias. For more information, see Agent
aliases .
Optional: If you use an external ID system, enter the ID for reference
when needed.
Optional: International Calling: Do not limit dialing to the restricted country
codes . Check this box to enable your global phone management settings'
international calling configuration. See
Phone number management .
Required for agent adapter localization: Select the location of
the user. Used to dictate default language in the agent adapter and
for more clarity in monitoring and reporting. Locations also help
the CCAI Platform team with troubleshooting if needed.
Note: This field is a drop-down with pre-configured locations. To
add locations, see
Localized languages in the agent adapter and user location entry .
Mark the checkboxes for the applicable roles . For more information about
roles, see Custom roles & permissions .
Note: If you're creating an administrator or manager account but want that person to
have access to the call or chat adapter, the agent role also needs to be
assigned.
(Optional) Set the agent's chat concurrency setting. Enter the maximum amount
of chats the agent can handle at one time. This setting overrides the general
setting in Chat settings .
Click Save .
Invitation email
Once you click the save button in the create user flow, an email will be sent to
the email address specified with an invite link to activate their account.
Email subject: Invitation to <Your Company Name> Support. The company
name used here is set in Settings > Support center details .
Email body: You have been invited to join YOUR COMPANY NAME on
the CCAI Platform.
Invite Link: Takes the user to the CCAI Platform portal sign in page set up
their password or sign in using SSO if enabled. The link doesn't have a
defined expiration duration, however, it will be invalidated once it is
accepted or a new invitation link has been sent.
View existing users and teams
The user list for any selected team will only display the list of users
that are directly assigned to that team or sub-team. To avoid confusion
and not show an agent or user assigned to a sub-team multiple times in any
higher-level teams, users only show in the team they are directly
assigned to.
Example:
Parent team A (450 users) - all 450 agents are assigned to sub-teams, none are
directly assigned to team A - user list will show: 0 users
Team A-1 (200 users) - user list will show: 200 users
Team A-2 (150 users) - user list will show: 150 users
Team A-3 (100 users) - user list will show: 0 users
Team A-3.1 (90 users) - user list will show: 90 users
Team A-3.2 (10 users) - user list will show: 10 users
The filter drop-down can be used to restrict the users that are displayed.
Filter options include:
Unactivated users.
Unassigned agents.
Edit users
User information can be edited by clicking on the pencil icon next to the
user's name:
Tip: Best practice is to only edit agent information when the agent is not
signed in to the CCAI Platform instance. This is due to the agent name
changes not being saved if the agent is signed in, the name is changed, and then
the agent takes a call or chat.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
