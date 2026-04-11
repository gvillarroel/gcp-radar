---
title: "Collaborate with other developers \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/guides/collaborating
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/apps-script/overview
source_metadata:
  url: https://developers.google.com/apps-script/guides/collaborating
  title: "Collaborate with other developers \_|\_ Apps Script \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Guides
Send feedback
Collaborate with other developers
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Apps Script provides features to help developers collaborate on scripts, add-ons, and web apps.
Collaboration requires all developers to have editor access to the Apps Script project file and its container if it's a bound script.
Placing your script project in a shared drive prevents loss of access if a project owner leaves the team.
The clasp command line tool allows syncing projects between script.google.com and your local file system for streamlined development with source control management.
Resources like Google Cloud projects, triggers, libraries, and user properties have specific considerations when collaborating on a project.
Google Apps Script provides features that help teams build and maintain scripts,
Google Workspace add-ons, and web apps together. This guide covers active collaboration
on a project by multiple developers; if you want to share code for others to
include in their own projects, see the Libraries
guide instead.
Collaboration basics
In order to collaborate on a project, you and your collaborators must all have
editor access to the Apps Script project file (and its container,
if it is a bound script ). This lets everyone on
your team see and make changes to the Apps Script code. Editors
can also create new code versions, publish add-ons, and deploy
scripts as web apps or as executables for the
Apps Script API .
Plan beforehand how you handle the editing, reviewing, versioning, and (if
applicable) the deployment and publishing of your project,
add-on or web app.
Standalone projects are usually the easiest
to collaborate on, because they appear directly in Google Drive and are the
recommended project type for add-on and web app
development.
A common problem in collaboration occurs when a script project owner leaves the
team without transferring ownership of the project to someone else on the team.
This can leave you unable to maintain or update the project. Placing your
script project in a shared drive prevents
this problem, since files in a shared drive don't have specific owners.
Always share ownership of script projects. If someone leaves your
organization and their account is removed, access to scripts without other
owners is lost.
Share your script in Drive or
move it into a shared drive .
Collaborate with the clasp command-line tool
clasp lets you sync projects between script.google.com and your local file system. This lets you streamline
and automate your code development if you and your collaborators are using
source control management software such as git .
For more details, refer to Command Line Interface
using clasp guide .
Collaborate with shared drives
Shared drives are only available to
Google Workspace Business and
Google Workspace Enterprise
customers.
Shared drives provide a shared space in
Drive where groups of Drive users can more
effectively collaborate. Files placed in a shared drive are owned by the group
as a whole, rather than individuals. This means that when a collaborator leaves
the group they don't take file ownership and control with them.
Shared drives also let you move files across domains — a shared drive
in one domain can have collaborators from another domain who can move files from
that domain into the shared drive. This provides a means for a team to develop
add-ons, web apps, or other code for customers in different
domains.
When you use shared drives to collaborate on Apps Script projects:
Collaborators with editor access to a shared drive can create or move
new files into the shared drive. As script editors, they can view and edit
scripts projects, run script code, create new script versions,
and publish add-ons.
To deploy scripts as web apps or executables for the
Apps Script API , the account that creates the
deployment must belong to the same domain as the shared drive that the script
resides in.
Shared drives let you share specific files within the shared drive to
others outside the group, and update their edit and view permissions on
those files like any other Drive file. However, if a user is
part of the team the shared drive belongs to, you can't reduce their access
for specific files. For example, if a user has edit access to a shared drive,
you can't change that to view-only access for a specific file within the
shared drive.
Collaborators with full access to a shared drive can also delete files
and Apps Script projects, and move files out
of the shared drive.
All container-bound scripts
use the same viewer and editor access lists defined for the container file.
For example, if you have edit access to a Google Sheet you also have
edit access to any Apps Script project code attached to it.
Placing such a container file into a shared drive grants the shared drive's
collaborators the same access to the script code as they have for the
container itself.
When a script project resides in a shared drive, access to its
Google Cloud project
may be restricted. See the
Google Cloud projects and shared drives
guide section for details.
Web apps
deployed in one domain cease to function if their ownership changes to a
shared drive or account in a different domain. Correct this by moving the
script back to its original domain.
Similarly, script projects that are
deployed as an Apps Script API executable
cease to function when called by the API if moved via shared drive from
one domain to another. Correct this by moving the script back to its original
domain.
Collaborate with a shared folder
Use caution if you create or move an Apps Script project to a
shared folder. Make sure the folder is only shared with trusted people.
If you can't collaborate with a shared drive, use a shared folder instead.
When you create or move an Apps Script project to a
Drive folder that other people can access, they inherit the same
access to the Apps Script project that they have for the folder.
For example:
If someone has edit access to the folder, they can edit or delete the
Apps Script project and run the script.
If someone only has view access to the folder, they can view the
Apps Script project and run the script.
Collaborate with project sharing
Collaborate on a project by directly sharing the project with all
collaborators. Directly share script projects that reside in regular
Drive folders or in shared drives. Carefully plan who owns and
maintains the script over time.
Standalone projects appear in
Drive as a file; share them like any other file. For more
information, see
Sharing files and folders .
Container-bound projects aren't visible in
Drive. To share a container-bound project, share the parent
container file. For example, if you have a script bound to a Google Sheets
spreadsheet, make someone an editor of the script by making them an editor of
the spreadsheet. Container-bound projects inherit the viewer and editor access
settings of their container file.
All container-bound scripts use the same owner, viewer and editor access list
defined for the container file . The container owner takes ownership of a new
script project regardless of who created it.
Collaboration and project resources
Resources are entities that are associated with your project but exist
independently of its code. This section explains how collaborating on a project
affects its resources, in particular: its Google Cloud project, triggers,
libraries, and user properties.
Collaboration and Google Cloud projects
Every Apps Script project has an associated
Google Cloud project .
Google Cloud projects have their own set of owners, editors, and other roles,
which can be different from the set of users that can access the script
project.
If your script project is meant to be published as an
add-on , it
must use a standard Google Cloud project .
When you collaborate on an application that uses a standard project,
configure the Google Cloud owners and roles
to ensure all your collaborators have the proper levels of access. This helps
prevent situations where you lose access to the project's Cloud settings because
its owners are no longer with your organization.
Collaboration and triggers
When you collaborate on a project, any
installable triggers that you create
are not shared with those who have access to your project. If you need to have
a consistent trigger setup for all collaborators, use the
Script service to create triggers
programmatically, at run time. For more information, see
Managing Triggers Programmatically .
Since simple triggers are created from code, they are shared with project
collaborators.
Collaboration and libraries
Libraries included in your project are available to project collaborators.
However, if they don't have at least read-level access to an included library
they can't use those libraries — the script throws an error in this case.
For more information about libraries, see
Managing Libraries .
Collaboration and user properties
User properties
are unique to the user that created them. This means that project
collaborators can't see or access your user properties and you can't see or
access theirs. Use
script properties
if you want to share project specific properties with collaborators. For
more information, see the Properties guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
