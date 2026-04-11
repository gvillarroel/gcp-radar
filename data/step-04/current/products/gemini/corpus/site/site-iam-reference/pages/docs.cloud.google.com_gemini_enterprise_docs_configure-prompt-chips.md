---
title: "Configure prompt chips \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/enterprise/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips
  title: "Configure prompt chips \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
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
Configure prompt chips
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to configure your prompt chips for your web app using
the Google Cloud console.
Overview
A prompt chip is a predefined category that's accessible from the
Gemini Enterprise web app. When you click a prompt chip, suggested prompts
display that you can immediately send to the model.
Before you begin
You must have an existing Gemini Enterprise web app. To create a new
app, see Create an app .
Configure your prompt chips
To configure your prompt chips, do the following:
In the Google Cloud console, go to the Gemini Enterprise page.
Go to Gemini Enterprise
Select your project.
Select your app from the Name column. The navigation menu updates.
Click Prompt chips . The Prompt chips page displays all of the
prompts created by Google and by you.
If you want all of the prompt chips to display on your
Gemini Enterprise web app, then select the Automatically enable
new prompts from Google checkbox.
If you want to control which prompt chips display, then clear the
checkbox.
Create a prompt chip
Click + New prompt , and the Create prompt page displays.
Enter a prompt-chip name in the Name field, which can't be changed after
it's saved and must follow this format:
The name's length must be from 1 to 63 characters long.
The name only contains lowercase letters, numbers, or hyphens.
The name must begin and end with a letter or a number.
Enter the name for your prompt chip in the Display name field. This name
appears in the Display name column of the Prompt chips table.
Enter a title in the Title field for your prompt chip. When the prompt
chip is clicked, all prompts defined for this title display.
Enter a brief description that explains what the user should enter as a
prompt on the Gemini Enterprise web app in the Prefix field.
To provide prompts that your user can choose from for a specific title, enter
the text in the Suggested prompt field.
Click + Add suggested prompt .
To make the prompt chip available on the Gemini Enterprise web app,
click the Enabled toggle.
Optional: Continue to enter suggested prompts.
Click Create . All of your prompts are stored in the Our prompts
category. Delete unused suggested prompt fields.
Edit or delete a prompt chip
To edit a prompt chip, do the following:
Click the pencil icon for the prompt chip that you want to change. An Edit
Prompt pane displays.
Change the field(s). You can't change the prompt chip name.
Click Update .
To delete a prompt chip, do the following:
Click the trashcan icon, and a confirmation dialog displays.
Click Delete .
Filter prompt chips
To find a prompt chip from a list of prompt chips, you can filter two different
ways:
You can select a prompt chips category, which include the following:
All : Displays both Google-made and Our prompts prompt chips.
Google-made : Displays the prompt chips provided by Google.
Our prompts : Displays the prompt chips that you create.
To find your prompt chip quickly, enter a few characters in the Filter
field.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
