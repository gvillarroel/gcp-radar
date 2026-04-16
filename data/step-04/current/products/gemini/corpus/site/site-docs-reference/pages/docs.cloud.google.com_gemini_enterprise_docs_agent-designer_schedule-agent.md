---
title: "Schedule agent executions \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer/schedule-agent
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/enterprise/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer/schedule-agent
  title: "Schedule agent executions \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
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
Schedule agent executions
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
You can configure your agent to execute tasks automatically on a recurring basis. A schedule serves as an automated trigger for the agent's predefined instructions or prompts.
Note: Scheduled agents run automatically for personal tasks, such as creating your own calendar invites or emailing yourself. However, any action involving other people will pause for your review and approval.
Add an execution schedule
Console
To add an execution schedule for your agent, do the following:
Open your agent in edit mode .
In the Agent Designer canvas, click the Schedule tab.
Click + Add schedule and configure the recurrence and execution time:
Repeat frequency: select how often the agent should run to execute the provided prompt. The following options are available:
Hourly: runs the task every specified number of hours and at a specific minute within that hour.
Daily: runs the task once per day at the specified time.
Weekly: runs the task once per week on the specified day and time.
Monthly: runs the task once per month on the specified day of the month and time.
Annually: runs the task once per year on the specified month, day, and time.
Execution time and timezone: define the specific interval settings based on your selected frequency and select the execution timezone.
Prompt: enter the specific prompt (or instruction) the agent will receive at the scheduled time. This defines the task the agent will execute.
Click Save to create the schedule and add it to you agent in a Draft state.
Optional: Test your schedule to verify if it functions as expected.
To activate your schedule and relaunch your agent with the updated changes, click Update .
Test the execution schedule
After configuring a schedule, you can immediately test the agent's execution to ensure it performs the task as expected without waiting for the next scheduled interval.
Console
To test the execution schedule, do the following:
In the Agent Designer canvas, click the Schedule tab.
Find the schedule card that you want to test and click Run in preview .
This triggers the agent using the saved prompt and configuration.
Edit an execution schedule
Edit an execution schedule to make changes to the frequency, time, timezone, or prompt.
Console
To edit an existing execution scheduled, do the following:
In the Agent Designer canvas, click the Schedule tab.
Find the schedule card that you want to test and click Edit .
Modify the Repeat Frequency , Run Time , Timezone , and the Prompt as selected.
Click Save .
Click Update to ensure all changes, including the new schedule, are saved and applied to the agent.
Delete an execution schedule
If a recurring task is no longer needed, you can delete and remove it from the Agent Schedules list.
Console
To delete an execution schedule, do the following:
In the Agent Designer canvas, click the Schedule tab.
Find the schedule card that you want to test and click Delete .
Confirm the deletion to permanently remove the execution schedule for your agent.
Refresh agent schedules
Agent schedules operate using your user credentials. To ensure data privacy and security, these credentials expire every 14 days. You must manually refresh your agent schedules to ensure they continue to run automatically without interruption.
Console
To refresh schedules for all agents, do the following:
Open your Gemini Enterprise app and go to the Agent Gallery page.
Perform one of the following actions to refresh your schedules:
Go to the Your agents section and click event_repeat ( Refresh the existing schedules ).
Open an agent in edit mode and do the following:
In the Agent Designer canvas, click the Schedule tab.
Click Refresh schedules .
Your user credentials are refreshed, and all scheduled agents will continue to run for another 14-day period.
View and approve scheduled runs
All scheduled runs, including those waiting for approval, are listed in your chat history.
Console
To view and approve scheduled runs, do the following:
Open your Gemini Enterprise app and go to the Chats section in the navigation menu.
Find and open the conversation thread corresponding to your scheduled agent.
If the scheduled run is paused, review the proposed action and click Approve to complete the task.
Limitations
You must manually refresh your schedules every 14 days to prevent your scheduled agents from failing.
There can be a maximum delay of 5 minutes in agent schedule execution.
Schedules are only supported in multi-region locations.
What's next
Learn how to edit your
agent .
Learn how to delete your
agent .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
