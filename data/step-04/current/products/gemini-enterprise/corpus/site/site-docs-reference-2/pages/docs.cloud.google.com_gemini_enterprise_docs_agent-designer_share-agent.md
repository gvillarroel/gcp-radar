---
title: "Share an agent \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer/share-agent
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/enterprise/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer/share-agent
  title: "Share an agent \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
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
Use Gemini Enterprise
Send feedback
Share an agent
Stay organized with collections
Save and categorize content based on your preferences.
Share agents that you've created and launched using Agent Designer with other users within your organization. Depending on your app's feature control configurations , you might need an administrator to review and approve to share an agent.
Caution: When you share an agent, you are also sharing access to all its associated data sources and files. Users will be able to query the agent about the content of these sources, even if they don't have direct file or data source access.
For example, if you upload a confidential file to the agent's knowledge section and then share the agent, any user with whom you shared it can ask the agent questions about that file's content.
Share an agent
To share an agent, do the following:
App
Open your Gemini Enterprise app and go to the Agent Gallery page.
The Agent Gallery page appears displaying all the prebuilt agents and custom-built agents.
In the Your Agents section , find the agent you want to share.
Note: You can't share an agent that is in a draft state.
Click more_vert Actions menu , and select Share .
In the share dialog, enter the email addresses of the users you want to share the agent with. You can also click Copy link to generate a shareable link.
Notes:
You can share your agent with individual user email addresses. Sharing with Google Groups isn't supported.
If your app is connected to a People Search data store with autocomplete configured for user data, the share dialog provides autofill suggestions as you enter user email addresses.
Click Done .
The agent is shared with the users in your access list.
Note: If your app administrator has enabled administrator review for agent sharing, a share request is sent to the app administrator for review and approval. After the app administrator approves the request, the agent is shared with the users in the access list. You can, at any time, edit the share request to add or remove users, or cancel the request.
Administrator review control
By default, agent owners can share their agents with any user within their organization without approval from an app administrator. However, app administrators can change the app feature control configurations to require administrator review and approval for sharing agents in the app.
Agent sharing follows a two-step process when administrator review is enabled:
The agent owner shares the agent with one or more users .
The app administrator reviews the sharing request and approves or denies it .
Review a share request
App administrators are responsible for reviewing and managing agent sharing requests.
Notes:
This section only applies if the Enable agent sharing without admin approval feature is disabled in the app's feature controls.
Only app administrators with the Discovery Engine Admin IAM role can review and approve share requests.
Console
To review a share request as an app administrator, do the following:
In the Google Cloud console, go to the Gemini Enterprise > Apps page.
Gemini Enterprise
Click the name of the app containing the agent.
In the app navigation menu, click Agents .
Find the agent with a Review share request action in the User permissions column.
Click Review share request .
In the Share request pane:
Review the access list under Requested to share with the following users .
Optional: Modify the access list to add or remove user accounts, Google groups or Workforce Identity Federation (WIF) identity pools.
To approve the request and grant access, click Approve and enable .
To reject the request, click Deny .
Considerations
When you share an agent, you are also sharing access to all its associated data sources and files. Users will be able to query the agent about the content of these sources, even if they don't have direct file or data source access.
App administrators can add and remove users from the access list at any time.
Only app administrators can share the agent with Google groups and Workforce Identity Federation (WIF) identity pools in your organization.
Agent owners can remove any user from the access list at any time (including those added by the app admin).
You can also share an agent from the Agent Designer canvas.
What's next
Learn how to use an agent .
Learn how to create an agent .
Learn how app administrators can share agents from the Google Cloud console .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
