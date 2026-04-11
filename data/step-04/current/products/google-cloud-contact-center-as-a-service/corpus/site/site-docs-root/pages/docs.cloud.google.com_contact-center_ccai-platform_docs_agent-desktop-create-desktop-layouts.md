---
title: "Create desktop layouts \_|\_ Google Cloud Contact Center as a Service \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-create-desktop-layouts
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/ccai-platform/docs
source_metadata:
  url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-create-desktop-layouts
  title: "Create desktop layouts \_|\_ Google Cloud Contact Center as a Service \_\
    |\_ Google Cloud Documentation"
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
Create desktop layouts
Stay organized with collections
Save and categorize content based on your preferences.
With agent desktop, you can create customized desktop layouts for different use
cases for your human agents. These include receiving inbound calls, placing
outbound calls, and handling chat sessions. Your layouts can contain call
adapters, chat adapters, and wide variety of panels for other capabilities such
as live transcripts, knowledge assist, and session data feeds. You can also
configure custom panels to use as widgets
that you can drag into panels.
After you create a desktop layout, you can configure which layouts agents see,
depending on session type and other factors. These factors include team
membership and which queue a session arrives in. For more information, see Set
desktop layouts for agents .
Create a desktop layout
To create a desktop layout for placing an outbound call, receiving an inbound
call, or handling a chat session, follow these steps:
In the CCAI Platform portal, click Settings > Operation
Management . If you don't see the Settings menu, click menu Menu .
Go to the Agent Desktop pane.
For Desktop Layout , click Manage Desktop Layout Lists . The Desktop
Layout Builder page appears.
Click Add desktop layout . The Add desktop layout dialog appears.
In the Desktop Layout Name field, enter a name for your desktop layout.
For Channel , select Call Adapter or Chat Adapter , depending on
the type of session the layout is for.
Optional: For Panel Size Control , clear the Allow Agents To Control
Size of Panels checkbox if you don't want agents to change the panel
sizes.
Click Next . The desktop layout appears.
To customize the number and size the panels, do any of the following:
Click Split panel to split
a panel.
Click close Close this panel to
close a panel.
Drag lines between panels to resize the panels.
To configure adapter settings, do one or both of the following:
Select the External checkbox if you're using an external call
adapter. The Call Adapter pane no longer displays.
To display a chat adapter with the call adapter, select the Chat
Adapter checkbox .
Drag a widget into a panel. For widgets that require Agent Assist,
be sure to set up Agent Assist .
Continue dragging widgets into panels until every panel has a widget. Drag
the Session Data Feed widget into a panel if you want to capture data
about sessions for later analysis. For more information, see Session data
feed .
Click Save . Your new layout appears in the Desktop Layout list.
Edit a desktop layout
To edit a desktop layout, follow these steps:
In the CCAI Platform portal, click Settings > Operation
Management . If you don't see the Settings menu, click menu Menu .
Go to the Agent Desktop pane.
For Desktop Layout , click Manage Desktop Layout Lists . The Desktop
Layout Builder page appears.
For the desktop layout that you want to edit, click more_horiz More , and then click Edit
Layout . The Desktop Layout Builder page appears.
Make changes to the layout, and then click Save .
Duplicate a desktop layout
To duplicate a desktop layout, follow these steps:
In the CCAI Platform portal, click Settings > Operation
Management . If you don't see the Settings menu, click menu Menu .
Go to the Agent Desktop pane.
For Desktop Layout , click Manage Desktop Layout Lists . The Desktop
Layout Builder page appears.
For the desktop layout that you want to duplicate, click more_horiz More , and then click
Duplicate . A duplicate desktop layout appears.
Rename a desktop layout
To rename a desktop layout, follow these steps:
In the CCAI Platform portal, click Settings > Operation
Management . If you don't see the Settings menu, click menu Menu .
Go to the Agent Desktop pane.
For Desktop Layout , click Manage Desktop Layout Lists . The Desktop
Layout Builder page appears.
For the desktop layout that you want to rename, click more_horiz More , and then click Edit
Layout Setting . The Edit desktop layout dialog appears.
In the Desktop layout name field, enter a new name.
Optional: To change whether agents can control the size of panels, select or
clear the Allow agents to control size of panels checkbox.
Click Save .
Delete a desktop layout
To delete a desktop layout, follow these steps:
In the CCAI Platform portal, click Settings > Operation
Management . If you don't see the Settings menu, click menu Menu .
Go to the Agent Desktop pane.
For Desktop Layout , click Manage Desktop Layout Lists . The Desktop
Layout Builder page appears.
For the desktop layout that you want to delete, click more_horiz More , and then click
Delete . The Delete layout dialog appears.
Click Delete .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
