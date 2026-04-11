---
title: "AI agent-assisted coding with Gemini CLI \_|\_ Cloud Workstations \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/workstations/docs/ai-agent-assisted-coding-gemini-cli
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/workstations/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/workstations/docs/ai-agent-assisted-coding-gemini-cli
  title: "AI agent-assisted coding with Gemini CLI \_|\_ Cloud Workstations \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Workstations
Guides
Send feedback
AI agent-assisted coding with Gemini CLI
Stay organized with collections
Save and categorize content based on your preferences.
Gemini CLI is an open source AI agent that brings Gemini
to your terminal. All Cloud Workstations workstation images include
Gemini CLI and the Cloud Workstations base editor includes the
Gemini CLI Companion extension.
With access to your workspace, Gemini CLI provides features like
in-editor diffs for code suggestions.
Before you begin
Before you use Gemini CLI, ensure you have the following:
A workstation configuration
, created by you or a team member.
A running workstation. For instructions, see Create and launch your
workstation
Start AI agent-assisted coding
To begin using Gemini CLI for AI agent-assisted coding, follow these
steps:
In your workstation's base editor, open a folder or
workspace using one of the following methods:
Click Open Folder from the explorer view.
Select menu Menu
> File > Open Folder .
Figure 1. Open a folder or workspace in Code OSS for Cloud Workstations.
Open an integrated terminal. Use one of the following methods:
Press Control+ </kbd> (or <kbd>Command+ on macOS).
Select Terminal > New Terminal .
In the terminal, run the following command to start Gemini CLI:
gemini
The first time you run Gemini CLI, follow the prompts to sign in
with your Google Account.
If prompted to connect to the Gemini CLI Companion extension,
respond with yes . This enables the connection between the CLI and your
editor workspace.
Figure 2. Connect Gemini CLI Companion to Code OSS for Cloud Workstations.
Use Gemini CLI
Once started, you can interact with Gemini CLI using natural language.
For example:
Explain the architecture of this codebase
Write a unit test for the function in main.py
Refactor the current file to use async/await
Work with diffs
When Gemini CLI suggests code modifications, it can open a diff view
directly within your editor. This lets you review the changes before accepting
them.
To accept a suggested change:
Click the check icon in the
diff editor's title bar.
Open the Command Palette ( Cmd+Shift+P or Ctrl+Shift+P )
and run Gemini CLI: Accept Diff .
Respond with yes in the terminal when prompted.
To reject a change:
Click the close icon in the
diff editor's title bar.
Close the diff editor tab.
Respond with no in the terminal when prompted.
Figure 3. Gemini CLI Companion diff in Code OSS for Cloud Workstations.
Troubleshooting
If you encounter issues with the IDE integration, you can check the connection
status by running the following command inside Gemini CLI:
/ide status
What's next
Learn more about using the Gemini CLI on Google
Cloud .
Explore the IDE integration
documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
