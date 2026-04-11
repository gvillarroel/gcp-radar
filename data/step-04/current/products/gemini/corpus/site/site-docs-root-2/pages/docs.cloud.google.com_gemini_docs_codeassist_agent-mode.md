---
title: "Agent mode overview \_|\_ Gemini for Google Cloud \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode
  title: "Agent mode overview \_|\_ Gemini for Google Cloud \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Gemini for Google Cloud
Guides
Send feedback
Agent mode overview
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
This document describes agent mode in Gemini Code Assist.
Agent mode is available in the VS Code and IntelliJ integrated development
environments (IDEs). To start using agent mode, see
Use the Gemini Code Assist agent mode .
With agent mode, you can do any of the following and more:
Ask questions about your code.
Use context and built-in tools to improve generated content.
Configure MCP servers to extend the agent's abilities.
Get solutions to complex tasks with multiple steps.
Generate code from design documents, issues, and TODO comments.
Control the agent behavior by commenting on, editing, and approving plans
and tool use during execution.
How agent mode works
In agent mode, your prompt is sent to the Gemini API with a list of
tools that are available. The Gemini
API processes the prompt and returns a response. The response might be a direct
answer or a request to use an available tool.
When a tool is requested, the agent prepares to use the tool and checks to see
if it is allowed to use the tool with or without explicit permission:
For tool requests that modify the file system, or perform mutating
operations on any resources, Gemini will ask you to allow the
operation unless you have configured Gemini to always allow
the tool or tools.
Tool requests that are read-only might not ask for permission before
completing the task.
When asked to allow the use of a tool, you can choose to allow or deny the
operation. The agent might also give you options to always allow a tool or
server or allow similar operations. For more information, see
Always allow agent actions .
Once permission to use the tool is given or self-granted, the agent uses the
tool to complete the required action, and the result of that action is sent
back to the Gemini API. Gemini processes the result of the
tool action and generates another response. This cycle of action and
evaluation continues until the task is complete.
For complex tasks, Gemini might show a high-level plan for your
approval. You can fine tune the plan and ask questions in chat before beginning
the process. Once you are happy with the plan, you can approve it. After you
approve the plan, the agent starts working on the first task, and will ask you
for clarifications or permissions as needed as it executes the plan.
Agent mode context
Context allows an agent to generate better responses for a given prompt. Context
can be taken from files in your IDE, files in your local system folders, tool
responses, and your prompt details.
Depending on your IDE and settings, different contexts might be available to the
agent.
The following tabs detail how context is gathered for different IDEs.
VS Code
The following methods of getting context are usually available to
Gemini Code Assist in agent mode:
Information in your IDE workspace.
Tool responses from built-in tools like grep, terminal, file read, or
file write.
Google Search responses.
Content from a given URL provided in a prompt or by a tool.
Context files you create in Markdown.
IntelliJ
The following methods of getting context are usually available to
Gemini Code Assist in agent mode:
Information in your IDE project including your files, indexed symbols
and usage of symbols in your project.
Tool responses from built-in tools like grep, file read, or
file write.
IntelliJ version control .
Configured MCP servers and tools
Context files you create in Markdown.
You can see the context available to the agent in the context drawer in the
agent mode chat prompt area.
Tools
Tools are a broad category of services that an agent can use for context and
actions in its response to your prompt. Tools allow agents to access up-to-date
information through function calling to API endpoints or to other agents. Tools
might only offer one function, or they might offer multiple related functions.
Some example tools are built-in tools like grep and file read or write, local or
remote Model Context Protocol (MCP) servers and their executable functions, and
RESTful API calls.
Built-in tools
In agent mode, Gemini has access to your built-in system tools. Select
your IDE to view a list of built-in tools available to Gemini in
agent mode.
VS Code
All of the
Gemini CLI built-in tools are
available to agent mode in Gemini Code Assist.
IntelliJ
read_file
Retrieves the text content of a file using its absolute path.
write_file
Writes the given text to a specified file, creating the file if it doesn't exist.
analyze_current_file
Analyzes the open file in the editor for errors and warnings.
find_files
Finds the absolute path to files given a filename or a part of the path
grep
Finds all files inside the project that contain a given text pattern or regular expression.
list_files
Lists all files and directories in a given absolute path.
resolve_symbol
Resolves a specific symbol reference to its original declaration.
find_usages
Searches the project for all references to a given symbol declaration.
git
Runs a Git command-line interface (CLI) command and returns the result.
list_vcs_roots
Returns all Version Control System (VCS) roots, such as Git repositories, in the current project.
Limitations
Some features of standard Gemini Code Assist chat
might not be available in agent mode or might work differently than they do in
standard chat.
Recitation is not available in agent mode. While in agent mode, Gemini
doesn't cite sources
and you can't
disable code suggestions that match cited sources .
What's next
Use the Gemini Code Assist agent mode .
Learn about agent mode quotas .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
