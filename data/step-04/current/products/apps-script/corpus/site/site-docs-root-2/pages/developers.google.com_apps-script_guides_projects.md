---
title: "Script Projects \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/guides/projects
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/apps-script/overview
source_metadata:
  url: https://developers.google.com/apps-script/guides/projects
  title: "Script Projects \_|\_ Apps Script \_|\_ Google for Developers"
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
Script Projects
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
A script project in Google Apps Script is a collection of files and resources, including code (.gs) and HTML (.html) files.
You can create both standalone and container-bound script projects from various Google services or using the clasp command line tool.
Deleting script projects and files is a permanent action with no recovery option.
Project files can be managed within the Apps Script editor, including creating, deleting, and exporting.
The time zone for a project can be set in project settings, although specific functions can override this setting.
Multi-login with multiple Google Accounts can cause issues with accessing Apps Script, add-ons, and web apps.
A script project represents a collection of files and resources in
Google Apps Script, sometimes referred to as "a script". A script
project has one or more script files which can either be code files (having a
.gs extension) or HTML files (a .html extension). You can also include
JavaScript and CSS in HTML files.
The script editor always has one and only one project opened at any given time.
You can open multiple projects in multiple browser windows or tabs.
Create and delete projects
This section explains how to create and delete standalone or
container-bound Apps Script projects.
Create a standalone project
To create a standalone project from Apps Script:
Go to script.google.com .
Click add New Project .
In the script editor, click Untitled project .
Give your project a name and click Rename .
Create a standalone project from Google Drive
Open Google Drive .
Click New > More
> Apps Script .
Create a container-bound project from Google Docs, Google Sheets, or Google Slides
Open a Docs document, a Sheets spreadsheet, or
Slides presentation.
Click Extensions >
Apps Script .
In the script editor, click Untitled project .
Give your project a name and click Rename .
Create a container-bound project from Google Forms
Open a form in Forms.
Click More more_vert
> Script editor .
In the script editor, click Untitled project .
Give your project a name and click Rename .
Create a standalone project using the clasp command-line tool
clasp is a command-line tool that creates, pulls/pushes, and deploys Apps
Script projects from a terminal.
See the Command-line interface using clasp guide for more details.
Delete a container-bound project
Once you delete a container-bound Apps Script project, it can't be
recovered.
Open your container-bound project using one of the methods described
previously.
At the top left, click Overview
info_outline .
At the top right, click Remove delete >
Delete forever .
Only the owner of the container can see the deletion menu options.
Delete a standalone project
Go to script.google.com .
At the right of the project you want to delete, click More
more_vert > Remove > Remove .
Manage files in a project
This section describes how to add, delete, and export files within an
Apps Script project.
Create a file
Open your Apps Script project.
At the left, click Editor code >
Add add .
Select the type of file to create and give it a name.
Delete a file
Caution: Deleted files can't be recovered.
Open your Apps Script project.
At the left, click Editor code .
Next to the file you want to delete, click More
more_vert > Delete .
Export files out of an Apps Script project
To export code files, copy and paste the code from each file into your preferred
text editor or use clasp on the command-line. To use clasp , refer to
download a script project .
Set the time zone for a project
When you set a time zone for an Apps Script project, scripts use
that time zone when they run.
Open your Apps Script project.
At the left, click Project Settings
.
In the Time zone section, select the time zone you want to use.
To use a different time zone for a specific function, explicitly enter the time
zone in that function. For example, in the following sample, each function
creates a new event in Google Calendar. The first function defaults to the
project time zone. The second function specifies the Pacific time zone, so the
event is scheduled in Pacific time, regardless of the project's time zone.
function createEvent (){
// Creates an event in the script project's time zone and logs the ID
var event = CalendarApp . getDefaultCalendar (). createEvent ( 'New test event' ,
new Date ( 'December 20, 2022 17:00:00' ),
new Date ( 'December 20, 2022 18:00:00' ));
console . log ( 'Event ID: ' + event . getId ());
}
function createEventPacific (){
// Creates an event with a specified time zone and logs the event ID.
var event = CalendarApp . getDefaultCalendar (). createEvent ( 'New sample event' ,
new Date ( 'December 20, 2022 17:00:00 PDT' ),
new Date ( 'December 20, 2022 18:00:00 PDT' ));
console . log ( 'Event ID: ' + event . getId ());
}
Fix issues with multiple Google Accounts
If you're logged into multiple Google Accounts at the same time, you might
have trouble accessing your add-ons and web apps.
Multi-login, or
being logged into multiple Google Accounts at once, isn't supported for Apps
Script, add-ons, or web apps.
If you open the Apps Script editor while logged in to more than one account,
Google prompts
you to choose the account you want to proceed with.
If you open a web app or add-on and experience multi-login issues, try one of
the following solutions:
Log out of all your Google Accounts and only log in to the one that has the
add-on or web app you want to access.
Open an incognito window in Google Chrome, or an equivalent private browsing
window, and log in to the Google Account that has the add-on or web app you
want to access.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
