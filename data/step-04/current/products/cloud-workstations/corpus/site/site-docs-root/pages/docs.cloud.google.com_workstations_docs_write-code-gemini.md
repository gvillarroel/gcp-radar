---
title: "Code with Gemini Code Assist \_|\_ Cloud Workstations \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workstations/docs/write-code-gemini
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/workstations/docs
source_metadata:
  url: https://docs.cloud.google.com/workstations/docs/write-code-gemini
  title: "Code with Gemini Code Assist \_|\_ Cloud Workstations \_|\_ Google Cloud\
    \ Documentation"
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
Code with Gemini Code Assist
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how you can use
Gemini Code Assist , an AI-powered
collaborator in Google Cloud, to help you do the following in the
Cloud Workstations base editor:
Provide guidance to help you solve problems with your code.
Generate code for your project.
Receive inline suggestions while you're coding.
Learn how and when Gemini
for Google Cloud uses your data .
To help you
comply with any license requirements for your code,
Gemini Code Assist provides source citations when its suggestions
directly quote at length from a specific source. To learn more about how and
when Gemini cites sources, see
How Gemini helps you generate code and cites sources .
Code customization
lets you get code suggestions based on your organization's private codebase
directly from Gemini Code Assist. Learn
how to configure code customization .
This document is intended for developers of all skill levels. It assumes you
have working knowledge of
Cloud Workstations and are familiar with Google Cloud.
If you prefer, you can also explore Gemini Code Assist in
VS Code ,
IntelliJ , and
Cloud Shell Editor .
Before you begin
Make sure that you have the Cloud Workstations Admin
IAM role on the project so that you can create workstation
configurations.
Go to IAM
Set up
your workstation if you haven't already, and make sure to select
Base Editor
(Code-OSS) in the configuration.
Important: To use Gemini Code Assist, you must select
Base Editor (Code-OSS) when creating your workstation configuration.
Before testing Gemini Code Assist capabilities in your code
file, make sure your file's coding language is supported. For more information
on supported coding languages, see
Supported coding languages .
Connect to Google Cloud and select a project
In this section, you'll connect to Google Cloud and select a
Google Cloud project with the Gemini for Google Cloud API enabled in
your workstation.
If you select a Google Cloud project without the
Gemini for Google Cloud API enabled, you receive a notification that gives you
the option to enable the API from the IDE. Select Enable the API in the
notification window to enable the API for your project. For more information,
see Set up Gemini Code Assist for a project .
Tip: You can define the GEMINI_DEFAULT_PROJECT environment
variable in your workstation configuration to automatically set the
Gemini for Google Cloud API project in all workstations.
To connect to Google Cloud in
your workstation,
follow these steps:
In the Google Cloud console, launch your
workstation.
Launch workstation
In the activity bar of your workstation, click
spark Gemini Code Assist .
Follow the prompts to sign in to Gemini Code Assist, if you're
not signed in already.
If prompted to allow Cloud Workstations to open the external
website, click Open .
To sign into your account, follow the prompts.
If prompted to make sure that you downloaded this app from Google, click
Sign in .
A new tab opens in your browser, displaying your verification code to sign
into Cloud Code.
Copy the verification code and paste it into your terminal where it says
Enter authorization code , and then press Enter (for Windows and
Linux) or Return (for macOS).
You're now connected to Google Cloud. Gemini is ready to
use.
Chat with Gemini Code Assist
As an early-stage technology, Gemini for Google Cloud
products can generate output that seems plausible but is factually incorrect. We recommend that you
validate all output from Gemini for Google Cloud products before you use it.
For more information, see
Gemini for Google Cloud and responsible AI .
In this section, learn how to open the Gemini Code Assist pane and
chat with Gemini Code Assist to get your code explained.
To begin chatting with Gemini, follow these steps:
Open a source file.
In the activity bar of your workstation, click
spark Gemini Code Assist .
In the Gemini Code Assist pane, enter the prompt Explain this code to
me and click send
Send .
Gemini uses your file as context for
your prompt and responds with an explanation of your code.
To focus on a specific block of code, select that block in your open file
before entering your prompt.
Reset chat history
Gemini Code Assist uses the chat history for additional context
when responding to your prompts.
If your chat history is no longer relevant to what you're trying to achieve, you
can reset the chat history: in the Gemini Code Assist pane, click
delete Reset Chat .
Note: The chat history automatically resets when you switch the workspace or
exit your workstation.
Generate code with prompts
The following sections show you how to use Gemini Code Assist to
generate code with the example prompt Function to create a Cloud Storage
bucket inside a file. You can also select a part of your code
and then prompt Gemini Code Assist for help through the chat
feature, and receive and accept or reject code suggestions while you code.
Prompt Gemini Code Assist in a file
In a source file, on a new line, enter the comment Function to
create a Cloud Storage bucket , and then press Enter
(for Windows and Linux) or Return (for macOS).
To generate code, press Control+Enter (for Windows and Linux) or
Control+Return (for macOS).
Next to your prompt text in your file, Gemini Code Assist
generates the code in the form of ghost text.
Optional: To accept the generated code, press Tab .
Optional: Change keyboard shortcut for generating code
If the default keyboard shortcut for generating code isn't working as outlined
in the previous section, you can change the keyboard shortcut by following these
steps:
In your workstation, click
menu Menu , and then navigate to
File > Preferences > Keyboard Shortcuts .
In the list of keyboard shortcuts, search for Cloud Code: Generate Code .
Click Cloud Code: Generate Code , and then click
edit Change Keybinding .
In the dialog that appears, enter your own shortcut.
Press Enter (for Windows and Linux) or Return (for
macOS).
You can now use your newly assigned keyboard shortcut to generate code with
Gemini.
Prompt Gemini Code Assist with selected code using chat
Gemini Code Assist can perform tasks or answer your questions
based on the code that you select. To get generated code that's based on a
prompt with selected code, follow these steps:
In the activity bar, click
spark Gemini Code Assist
to open the Gemini Code Assist Chat pane.
In a source file, select a block of code.
In the Gemini Code Assist Chat text field, enter a prompt for the
selected code.
For example, select a function in your code and enter the prompt Write
a unit test for this function .
Gemini uses your selected code as reference and
responds to your prompt.
Get inline suggestions while you code
While you write code, Gemini Code Assist makes inline code
suggestions that you can either accept or ignore. To try this feature, follow
these steps:
In a source file, on a new line, start writing a function.
For example, if you're in a Python file, write def . Gemini
suggests code in the form of ghost text.
To accept the code suggestion from Gemini Code Assist, press
Tab . Otherwise, to ignore the suggestion, press Esc or
continue writing your code.
Optional: Disable inline suggestions
If you prefer to disable inline suggestions in Gemini Code Assist,
follow these steps:
In your workstation, select
menu Menu , and then
navigate to File > Preferences >
Settings .
On the User tab of the Settings dialog, navigate to Extensions
> Cloud Code .
Scroll until you find the Cloudcode: Gemini Code Assist: Inline
Suggestions: Enable Auto list, and then select Off .
This turns off the inline suggestions. You can still press
Control+Enter (for Windows and Linux) or Control+Return
(for macOS) to manually trigger inline suggestions.
Optional: Exclude files from context with an .aiexclude file
You can exclude files from being considered by Gemini Code Assist
for context by creating an .aiexclude file. An .aiexclude file follows the
similar syntax as a .gitignore file, with the following differences:
An empty or nonexistent .aiexclude file blocks no files in its directory and
all sub-directories.
An .aiexclude file doesn't support negation, where you prefix patterns with
an exclamation point ( ! ).
An .aiexclude file matches greedily on the * character. This will match
indiscriminately on directories and files. This .aiexclude file doesn't
differentiate between ** or * with regards to folders or files.
Only a single .aiexclude file is supported currently. To configure your
.aiexclude file, create a file titled .aiexclude in the root of your
workspace folder. If you want to place this file outside of the workspace root,
or rename the file, the path may be set in the VS Code settings under
"Context Exclusion File". The path value provided in this setting will resolve
relative to the root folder of your open workspace.
Examples
The following examples demonstrate how you can configure an .aiexclude file:
Block all files named apikeys.txt at or below the workspace directory:
apikeys.txt
Block all files with the .key file extension at or below the workspace
directory:
*.key
Block only the apikeys.txtfile at the same directory as the .aiexclude file,
but not any subdirectories:
/apikeys.txt
Block all files in the directory my/sensitive/dir and all subdirectories.
The path should be relative to the workspace root directory.
my/sensitive/dir/*
Disable code suggestions that match cited sources
Gemini provides citation information when it directly quotes at
length from another source, such as publicly available source code.
For more information, see
How and when Gemini cites sources .
To prevent code that matches cited sources from being suggested, you can modify
the geminicodeassist.recitation.maxCitedLength setting to 0 in a
settings.json file:
"geminicodeassist.recitation.maxCitedLength" : 0
Use smart actions
To help you be more productive while minimizing context switching,
Gemini Code Assist provides AI-powered smart actions directly
in your source code editor. When you select code in your editor, you can view
and select from a list of actions relevant to your context.
To use smart actions, follow these steps:
In a source file, select a block of code.
Next to the selected code block, click
lightbulb Show Code Actions .
Select an action such as Generate unit tests .
Gemini generates a response that's based on the action you
selected.
Use code transformation
Gemini Code Assist provides code Transformation , which allows
you to select a portion of code in a file and request modifications to
your existing code through prompts in natural language, using an inline text
box.
With code Transformation, you can do the following:
Generate comment lines to document your code
Troubleshoot code with issues
Improve code readability
Make code more efficient
You can also view context sources of a generated response in the Gemini:
Chat pane.
Prompt Gemini Code Assist with the inline text box
The inline text box allows you to interact with
Gemini Code Assist directly in your code.
To open the inline text box and prompt Gemini, follow these
steps:
In a source file, press Control+I (for Windows and
Linux) or Command+I (for macOS).
Enter a prompt, like Write a function to create a Cloud Storage bucket , and
press Enter (for Windows and Linux) or Return (for macOS).
Gemini Code Assist generates the code based on your prompt.
View diff of refactored code
With the diff view built into the inline text box, you can see the changes that
Gemini suggests and your original code. You can then accept or
discard the suggested changes.
To view the diff of refactored code from the inline text box, perform the
following steps:
In a source file, select a function and open the inline text box by pressing
Control+I (for Windows and Linux) or Command+I (for
macOS).
Enter a prompt, like Add comments and press Enter (for Windows
and Linux) or Return (for macOS).
When Gemini generates the code changes to your selected
function, the diff view appears.
To accept or discard the changes, click Accept or Discard .
View context sources of a generated response
The context display feature lists your project files (the context sources )
that were used as reference to generate responses to your prompts. Knowing which
files were used as references helps you to refine your prompts and get more
specific responses. Context sources are shown every time you use
Gemini chat.
To view the context sources of the generated response, in the Gemini: Chat
pane, scroll until you see the Context Sources snippet. Expand the snippet
to see all of the context sources.
Use smart commands
Smart commands are commands that you can use in the inline text box to
perform specific actions to your code.
To get an explanation of an entire source file with the /explain
smart command, follow these steps:
In a file, open the inline text box by pressing
Control+I (for Windows and Linux) or Command+I
(for macOS).
Press / to view the list of smart commands and their descriptions.
Select /explain .
Gemini generates an explanation of the entire file in the
inline text box.
Optional: If you want to view the generated response in the Gemini: Chat
pane, click View in Chat .
View prompt history
Accessing your prompt history saves you time when you want to reuse prompts
in a large source file.
To access your prompt history, in your file, open the inline text box by
pressing Control+I (for Windows and Linux) or Command+I
(for macOS) and then press Control+Up arrow (for Windows and Linux)
or Command+Up arrow (for macOS). This allows you to cycle through
your older prompts and re-use them when needed.
Enhance code readability for non-native English speakers
If you're a non-native English speaker who relies on translation applications,
you can use the inline text box to generate comments in other languages.
To convert English comments to another language or add new comments in another
language, follow these steps:
In a source file, select the code that you want to add comments to.
Open the inline text box by pressing Control+I (for Windows and
Linux) or Command+I (for macOS).
Enter a prompt, like Add spanish comments and press Enter (for
Windows and Linux) or Return (for macOS).
Gemini generates comments in the language that you specified
in your prompt and views the diff of these suggestions.
To accept or discard these changes to your code, click Accept or
Discard .
Test other example prompts
After reading through the
Generate code with prompts section of this
document, try some of the following example prompts.
Get an explanation of code
In a source file, select a function that you want explained.
In the Gemini Code Assist pane, enter the prompt Explain this code to me .
Gemini uses your selected code as a reference and
responds with an explanation of the selected function.
Generate test plans
In a source file, select the code that you want to add unit tests
for.
In the Gemini Code Assist pane, enter the prompt Write unit tests for my code .
Get help with debugging code
In a source file, select the code that you want to debug.
In the Gemini Code Assist pane, enter the prompt Help me debug my code .
Make your code more readable
In a source file, select the code that you want to make more
readable.
In the Gemini Code Assist pane, enter the prompt Make my code more readable .
If you prefer to focus on a specific part of your code, then select the
preferred part of code before prompting Gemini.
Known issues
The following sections outline the known issues of
Gemini Code Assist.
License recitation warnings don't persist across sessions
If license recitation warnings don't persist across sessions, refer to the
persistent logs:
Click menu Menu
> View > Output .
Select Gemini Code Assist - Citations .
Connectivity issues in the Gemini Code Assist output window
If you see a connection error or other connectivity problems in the
Gemini Code Assist output window, try the following:
Configure your firewall to allow access to oauth2.googleapis.com and
cloudaicompanion.googleapis.com .
Configure your firewall to allow communication over HTTP/2, which gRPC uses.
You can use the grpc-health-probe tool to test connectivity. A successful
check results in the following output:
$ grpc-health-probe -addr cloudaicompanion.googleapis.com:443 -tls
error: this server does not implement the grpc health protocol
(grpc.health.v1.Health): GRPC target method can't be resolved
An unsuccessful check results in the following output:
timeout: failed to connect service "cloudaicompanion.googleapis.com:443" within 1s
To obtain more details, run the following before grpc-health-probe :
export GRPC_GO_LOG_SEVERITY_LEVEL=info
Gemini Code Assist and JetBrains Gateway
Gemini Code Assist does not run through JetBrains Gateway. As a result,
Gemini Code Assist does not run on Cloud Workstations IDEs
that require JetBrains Gateway to connect.
'Activate Gemini Code Assist' still appears after selecting Gemini Code Assist project
If you selected your project per the instructions in this
guide, which includes enabling the Gemini for Google Cloud API, then there may be
an issue with the LS server.
To find out more details about your issue, perform the following actions:
In the status bar, click
spark Gemini Code Assist
and then select Send feedback .
Click Show for any of the log files to see more details and to help
troubleshoot the issue.
Leave feedback
To leave feedback of your experience, follow these steps:
In the status bar, click Gemini Code Assist , and then in the Quick
Pick menu, select Send feedback .
In the form, fill out the Title and Comments fields.
To share your Skaffold or AI Companion logs,
select the Send Skaffold logs or Send AI Companion logs option.
Click Submit Feedback .
What's next
Learn how to write better prompts .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
