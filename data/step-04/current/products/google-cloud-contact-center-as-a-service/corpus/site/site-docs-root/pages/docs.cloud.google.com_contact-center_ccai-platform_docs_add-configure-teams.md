---
title: "Add, view, and edit teams \_|\_ Google Cloud Contact Center as a Service \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/add-configure-teams
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/ccai-platform/docs
source_metadata:
  url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/add-configure-teams
  title: "Add, view, and edit teams \_|\_ Google Cloud Contact Center as a Service\
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
Add, view, and edit teams
Stay organized with collections
Save and categorize content based on your preferences.
Teams are a flexible way to organize any number of users. Example uses for
teams include:
Groups of users who are skilled for a particular function.
A team leader and their team members.
Users in a certain Location.
User grouped by the shift timing.
A team organizes groups of users. You can use teams to assign users to call or
chat queues, to control (in conjunction with custom roles and
permissions )
the types of data that users can access, and for reporting. You can designate a
team manager who can control data access for team members.
Used to organize a list of users.
Users can be assigned to multiple teams.
Team managers will have access to monitoring information of the
agents on their team and any sub-teams.
Agents in the sub-team of a top-level team will be assigned to any
queues that the top-level team is assigned to.
For example, if the top-level team is Support, and the sub-team is L1,
and Support is assigned to a queue, L1 will also be assigned and
will be offered calls from that queue
When using teams to assign agents to a queue, a team manager with an agent
role can be assigned to a queue.
Configuration
The following sections describe how to add and configure teams.
Add a new team
In the CCAI Platform portal, go to Settings > Users & teams .
Click Add a team .
Enter a team name. The team name cannot contain colons ":".
Click Add .
View existing users and teams
The user list for any selected team will only display the list of users
directly assigned to that team or sub-team. To avoid confusion and not
show an agent or user assigned to a sub-team multiple times in any
higher-level teams, users only show in the team they are directly
assigned to.
Example:
Top-level team A (450 users) - all 450 agents are assigned to
sub-teams, none are directly assigned to team A - user list will
show: 0 users
Team A-1 (200 users) - user list will show: 200 users
Team A-2 (150 users) - user list will show: 150 users
Team A-3 (100 users) - user list will show: 0 users
Team A-3.1 (90 users) - user list will show: 90 users
Team A-3.2 (10 users) - user list will show: 10 users
Edit a team name or team members
Click the pencil icon for the team that you want to edit.
OR
Edit the team members in the window on the right.
Edit team structure
In the CCAI Platform portal, go to Settings > Users & teams .
Click the pencil icon next to Teams .
Use the key on the left for instructions on how to edit, reorder, and
reorganize.
Click Done when your changes are complete.
Add team managers and team members
A team manager that is assigned the manager role can see monitoring data in the
dashboards and agent pages. A team manager that is assigned the agent role can
be assigned to a queue.
More information about user roles can be found in the default
roles
documentation section.
From users & teams , click the team name (in the following example,
the chosen team is highlighted).
Click Add team managers in the Manager section, then
select users from the available list.
Tip : Add users as team managers before adding as a team member.
Once the user is added as a team member, they will need to be
removed to be added as a team manager.
Click Add agents to select agents from the
list of available users who have been assigned agent permissions.
Remove a team member or manager by clicking the X adjacent to the user's
name.
Add team members from a user list
From users & teams , click one of the user lists, for example
all users , agents , managers , or admins .
Select the checkbox next to the users you would like to add to the team.
Click Add to a team .
Note: This option won't be available when show deactivated is checked.
Select the team(s) by marking the checkbox next to the team name.
Click Add .
Team priority when an agent belongs to multiple teams
If an agent belongs to multiple teams, there's a hierarchy of priority that
determines which team's settings apply to the agent. Here's the hierarchy:
Top-level team order . The highest top-level team in the list of teams
has the highest priority. Priority falls as you descend the top-level team
list.
Sub-level team order . The highest sub-level team in a list within a
top-level team has the highest priority. Priority falls as you descend the
sub-level team list.
Sub-team settings take precedence over top-level team settings.
Example
The following example illustrates this priority hierarchy:
Team structure:
Team A
Team A1
Team A2
Team B
Team B1
Team B2
Team C
Team C1
If an agent belongs to team A, team A1, team A2, team B, and team C1, the
settings of team A1 apply to the agent.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
