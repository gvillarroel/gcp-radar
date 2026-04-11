---
title: "Localized languages in the agent adapter \_|\_ Google Cloud Contact Center\
  \ as a Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-location
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/ccai-platform/docs
source_metadata:
  url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-location
  title: "Localized languages in the agent adapter \_|\_ Google Cloud Contact Center\
    \ as a Service \_|\_ Google Cloud Documentation"
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
Localized languages in the agent adapter
Stay organized with collections
Save and categorize content based on your preferences.
Agents can choose from a list of supported languages using the CCAI Platform portal
and localized Adapters.
Administrators can assign the default agent adapters language based on their
location. Locations are managed by an administrator, and each location has an
assigned language. Users can override their location-based language
setting using the agent adapter.
Note: If your CCAI Platform portal had locations entered previously, you will need
to re-select locations after this feature is enabled.
User interface components
Localized user interface components:
The agent will see all call and chat adapter controls in the
language set or selected, including call flows, confirmation and error
messages, agent statistics and more.
Not localized:
Queue names are not translated and will appear as they are set
up in Settings > Queue for each language.
The incoming or outgoing call or chat session won't be
translated or impacted in any way.
Note: See Supported
Languages
for the full list of agent and consumer facing supported languages.
Configure location and language
Admin role required for configuration
Add a new location
In the CCAI Platform portal, go to Settings > Operation Management .
Scroll to Localization and click Manage Location Setting.
Click Add Location.
Enter the Location name.
Select a Language.
Click Save.
Assign a language or location to agents
Agents and users are able to be assigned to a specific location. The Location
dictates the default Language of the user.
Bulk update multiple users
To update the location for a list of users, use the Importing
Users
process. Capitalization and spelling must match exactly for a successful
import.
Assign locations to individual users
In the CCAI Platform portal, go to Settings > Users & Teams .
Navigate to the user you would like to add a location for.
Click the edit icon next to the user's name.
Select one of the pre-configured locations from the Location drop-down.
Click Update to save.
Agent adapter
The following details the specifics pertaining to the agent adapter itself.
Set language
Note: The option to switch language only shows up in the CRM adapter .
If you are accessing the adapter using the CCAI Platform portal that option won't be
displayed.
In the Agent Adapter in your CRM , click the profile icon .
Click the language drop-down and select a language.
The Agent Adapter now displays in the language selected.
Localized adapter examples
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
