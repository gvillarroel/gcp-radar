---
title: "Configure the app home page \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/enterprise/docs/app-home-page
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/enterprise/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/gemini/enterprise/docs/app-home-page
  title: "Configure the app home page \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Note: This documentation applies to the Standard, Plus, and Frontline editions of Gemini Enterprise. For information about the Business edition, see the Gemini Enterprise - Business edition Help Center .
Home
Documentation
AI and ML
Gemini Enterprise
Send feedback
Configure the app home page
Stay organized with collections
Save and categorize content based on your preferences.
The home page serves as the central hub for accessing key features and
information within your app. It provides navigation to important
areas of the app and enhances user productivity by offering quick access to
commonly used resources. The key items on the home page include
personalized announcements, shortcuts, and other customizable elements designed
to streamline the user experience. These tools allow users to efficiently
interact with essential internal resources, stay updated on the latest
announcements, and manage their day-to-day tasks with ease.
Create and manage announcements
Create and manage shortcuts
Create and manage announcements
Announcements are used to display important updates, news, and notifications
for all end users. These announcements appear prominently on the home page,
so that key messages reach the entire organization. The primary purpose is
to broadcast company-wide information, such as top news, policy changes, and
upcoming events.
An administrator configures the items that appear on the home page. End users
can see only these configured items.
Announcements can be viewed only in the app. They can't be targeted to specific
groups.
Before you begin
Before creating announcements, verify you have already set up an app with
connected data stores.
Create announcements
Set up announcements to share important news with your organization. Configure
details such as title, description, images, links, and scheduling so that the
announcement reaches users at the right time.
To create announcements:
In the Google Cloud console, go to the Gemini Enterprise page.
Gemini Enterprise
Go to the Data Stores page and click add Create Data Store .
Select Announcements .
In the Configure your data store pane, enter a name for
your data store and click Create to create your announcement data store.
Go to your announcement data store, and, in the Announcements pane,
click +New to create an announcement.
In the New announcement pane, fill in the following fields:
Title : Name of the announcement.
Description : Describe your announcement.
Image URL : The URL for an image that represents the announcement.
Note : The Image URL must be accessible to all users within the
organization.
Link URL : The URL for a link that represents the announcement.
Start date : Enter the start date of your announcement.
End date : Enter the end date of your announcement.
Click Publish to create a new announcement.
To see the announcements for a data store, go to the Data Stores page
and click the name of the announcements data store.
The app displays the announcement only if the current date falls within the
specified start and end times. It sorts announcements in descending order by
start time.
Manage announcements
Announcements are managed similarly to how regular data stores are, but offer a
custom UI for creating and updating individual rows of announcements.
Create and manage shortcuts
Shortcuts in the app provide users with quick access to commonly accessed links,
such as internal document sites, knowledge bases, or frequently used tools.
These shortcuts appear on the app's home page, letting your users navigate to
important resources without searching through menus. Although shortcuts are
optional, they offer a way to boost productivity by reducing the time spent
looking for frequently used resources.
The administrator configures items on the home page. Up to six shortcuts can
appear on the home page.
Before you begin
Verify an app is set up before creating shortcuts.
Create shortcuts
To create shortcuts, do the following:
In the Google Cloud console, go to the Gemini Enterprise page.
Gemini Enterprise
Click the name of the app that you want to edit.
In the navigation menu, click Configurations .
Click the Search UI tab.
Under Pinned Links / Shortcuts , click Add shortcut .
Fill in the following fields:
Title : Name of the shortcut.
Icon URL : Optional: The URL for the icon that represents the
shortcut.
Shortcut URL : The direct link to the resource you provide.
In the Preview pane, verify that the shortcut appears correctly.
Click Save and Publish .
Manage shortcuts
Organize shortcuts by reordering and removing them as needed to keep the
home page streamlined and up-to-date with the most relevant links.
To rearrange or delete shortcuts, do the following:
In the Google Cloud console, go to the Gemini Enterprise page.
Gemini Enterprise
Click the name of the app that you want to edit.
In the navigation menu, click Configurations .
Click the Search UI tab.
Under General configurations > Pinned Links / Shortcuts , click
the up arrow or down arrow icons to rearrange the shortcuts.
To delete a shortcut, click delete the delete icon.
Click Save and Publish .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
