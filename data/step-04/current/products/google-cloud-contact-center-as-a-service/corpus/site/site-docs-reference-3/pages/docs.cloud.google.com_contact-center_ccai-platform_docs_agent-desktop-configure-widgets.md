---
title: "Configure custom panels \_|\_ Google Cloud Contact Center as a Service \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-configure-widgets
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/ccai-platform/docs/web-sdk-api
source_metadata:
  url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-configure-widgets
  title: "Configure custom panels \_|\_ Google Cloud Contact Center as a Service \_\
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
Configure custom panels
Stay organized with collections
Save and categorize content based on your preferences.
A custom panel displays one or more URLs for external resources. These can be
documentation, tools, or other resources. You can configure a panel for a
custom URL or a custom links
panel containing multiple links. The
configuration options for these panel types vary slightly. For example, you can
specify link text in the custom links panel.
Important: Custom URLs must support iframes. Otherwise, nothing displays in the
panel. Google recommends testing your URL to ensure that it displays in an
iframe.
Configure a panel for a custom URL
You can configure a custom panel containing a URL to an external resource. You
can optionally include a navigation bar in the panel. You can also add HTTP
headers—for example, for authentication.
To configure a panel for a custom URL, follow these steps:
In the CCAI Platform portal, click Settings > Operations
Management . If you don't see the Settings menu, click menu Menu .
Go to the Agent Desktop pane.
For Custom panel management , click Manage custom panels list . The
Custom Panel pane appears.
Click Add custom panel > Custom URL . The Add Custom
URL pane appears.
To add a name for the custom panel, do the following:
Click the Select language field, and then click a language for the
custom panel name.
In the Enter custom panel name field, enter a name for your panel.
Optional: To add a panel name in a different language, click Add custom
panel name , and then repeat these steps with a different language.
If you added the panel name in multiple languages, select the default
language.
In the Display URL field, enter the URL for an external resource. You
can use variables and functions in the URL.
Optional: To dynamically control the custom-panel language based on the
agent's assigned location or language selection, see Dynamically control
the custom-panel language .
Select the Display a navigation bar in custom panel checkbox if you want
a navigation bar to display with this panel.
To add an HTTP header, do the following:
For HTTP Headers , click Add field .
Enter a key and a value for the HTTP header. You can use
variables and functions in the value.
To add another HTTP header, click Add field , and then repeat these
steps.
Click Add Custom URL Panel . Your custom panel appears in the Custom
Panel list.
Configure a custom links panel
You can configure a custom panel that contains a list of links to external
resources. This panel can provide agents quick access to resources they need
while handling call and chat sessions.
To configure a custom links panel, follow these steps:
In the CCAI Platform portal, click Settings > Operations
Management . If you don't see the Settings menu, click menu Menu .
Go to the Agent Desktop pane.
For Custom panel management , click Manage custom panels list . The
Custom Panel pane appears.
Click Add custom panel > Custom Links . The Add Custom
Links Panel pane appears.
To add a name for the custom panel, do the following:
Click the Select language field, and then click a language for the
custom panel name.
In the Enter custom panel name field, enter a name for your panel.
Optional: To add a panel name in a different language, click Add custom
panel name , and then fill out the new row using a different language.
If you added the panel name in multiple languages, select the default
language.
To add a link, do the following:
Click Add link . The Add Link pane appears.
In the URL field, enter the URL for an external resource. You can
use variables and functions in the URL.
Optional: To dynamically control the custom-panel language based on the
agent's assigned location or language selection, see Dynamically
control the custom-panel
language .
To add link text for the URL, do the following:
Click the Select language field, and then click a language for the
link text.
In the Link text field, enter the link text for your link.
Optional: To add link text in a different language, click Add link text ,
and then fill out the new row using a different language.
If you added link text in multiple languages, select the default language.
For Display link in , specify whether the link opens in a new tab or in
the panel.
To add an HTTP header, do the following:
For HTTP Headers , click Add field .
Enter a key and a value for the HTTP header. You can use
variables and functions in the value.
To add another HTTP header, click Add field , and then repeat these
steps.
Click Add .
Click Add Custom URL Panel . Your custom panel appears in the Custom
Panel list.
Dynamically control the custom-panel language
You can use the {AGENT_LOCATION_LANGUAGE} or the {AGENT_LANGUAGE} variable in
your custom URL to dynamically control the language for a custom panel:
Agent location language : Add the {AGENT_LOCATION_LANGUAGE} variable to
your URL to display the custom panel in the language of the agent's assigned
location. Example: https://YOUR_CCAAS_HOST/lang={AGENT_LOCATION_LANGUAGE} .
For more information, see Variables .
Agent language : Add the {AGENT_LANGUAGE} variable to your URL to
display the custom panel in the language selected by the agent in the agent
desktop language selector. If an agent changes the language in the language
selector, custom panels reload and display the newly selected language.
Example: https://YOUR_CCAAS_HOST/lang={AGENT_LANGUAGE} . For more
information, see Variables .
Variables
You can include the following variables in URLs and HTTP header field values.
These variables capture agent, end-user, and session information.
Agent variables
{AGENT_ID} : the agent ID
{AGENT_CUSTOM_ID} : the agent's custom ID
{AGENT_EMAIL} : the agent's email
{AGENT_ALIAS} : the agent's alias
{AGENT_LOCATION_LANGUAGE} : the language code for the language of the
agent's assigned location—for example, en-US . To use this variable,
the agent needs an assigned location with an assigned language. For more
information, see Configure location and
language .
{AGENT_LANGUAGE} : the language code for the display language that the
agent selects in the agent desktop language selector—for example,
en-US . If an agent changes the language in the language selector, custom
panels reload and display the newly selected language. For more information,
see Change the display language .
End-user variables
{UJET_ID} : the end-user ID
{ANI} : the end-user's phone number
{DEVICE_TYPE} : the device type of the end-user
Session variables
{SESSION_TYPE} : the session type
{PHONE_NUMBER} : the end-user's phone number
{SESSION_ID} : the call ID or chat ID
{MENU_PATH} : the URL path to the menu
{QUEUE_NAME} : the name of the queue
{QUEUE_ID} : the internal queue ID
{LANGUAGE} : the queue language
{OUTBOUND_PHONE_NUMBER} : the outbound phone number
{SUPPORT_PHONE_NUMBER} : the support phone number the end-user is
calling
Functions
You can include functions from the following table in URLs and HTTP header field
values.
Function
Syntax
Description
Default value
=DEFAULT_VALUE(value_1, value_2)
Uses value_1 unless null or empty, then uses value_2 .
Concatenation OR
=CONCAT_OR(value_1, value_2, value_3)
Concatenation of multiple values with OR. Example: value_1 OR value_2 OR value_3 .
Concatenation AND
=CONCAT_AND(value_1, value_2, value_3)
Concatenation of multiple values with AND. Example: value_1 AND value_2 AND value_3 .
JSON
=JSON({"key_1":"value_1", "key_2":"[value_2]"})
JSON to string. Example: {"key_1":"value_1","key_2":"value_2"} .
JSON array
=JSON_ARRAY({"key_1":"value_1"},{"key_2":"value_2"})
JSON array to string. Example: [{"key_1":"value_1"},{"key_2":"value_2"}] .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
