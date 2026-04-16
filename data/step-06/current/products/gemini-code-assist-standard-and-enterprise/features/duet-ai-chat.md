---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:10.715Z"
product_name: "Gemini Code Assist Standard and Enterprise"
product_slug: "gemini-code-assist-standard-and-enterprise"
feature_name: "Duet AI Chat"
feature_slug: "duet-ai-chat"
latest_feature_date: "2023-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization"
keywords:
  - "duet"
  - "ai"
  - "chat"
  - "can"
  - "open"
  - "generated"
  - "code"
  - "sample"
---

# Duet AI Chat

Product: Gemini Code Assist Standard and Enterprise
Coverage: MEDIUM

## Step 02 Summary

Duet AI Chat can open a generated code sample in a new file and lets users send feedback on responses; Duet AI Chat is available in preview for IntelliJ and other JetBrains IDEs.

## Extended Definition

Duet AI Chat can open a generated code sample in a new file and lets users send feedback on responses; Duet AI Chat is available in preview for IntelliJ and other JetBrains IDEs.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer](https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer)
- [https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization)

## Supporting Pages

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-reference`
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- Stop in-progress chat VS Code You can stop an in-progress chat response by pressing stop Stop : IntelliJ You can stop an in-progress chat response by pressing stop Stop : Select the model If you use Gemini Code Assist Standard or Enterprise , or if you have a Google AI Pro or Ultra subscription, you can select the model that Gemini Code Assist uses when processing your prompts.
- Revert to a checkpoint in chat After applying the changes that Gemini Code Assist generates based on your prompt, you can choose to revert the modified code file(s) to a certain checkpoint, which reverts all of the applied changes to the code file(s).
- Create multiple chats You can create multiple chats with Gemini Code Assist which contain their own context separate from other chats.
- A successful check results in the following output: $ grpc-health-probe -addr cloudaicompanion.googleapis.com:443 -tls error: this server does not implement the grpc health protocol (grpc.health.v1.Health): GRPC target method can't be resolved An unsuccessful check results in the following output: timeout: failed to connect service "cloudaicompanion.googleapis.com:443" within 1s To obtain more details, run the following before grpc-health-probe : export GRPC GO LOG SEVERITY LEVEL=info 'Activate Gemini Code Assist' still appears after selecting Gemini Code Assist project If you selected your project per the instructions in this guide, which includes enabling the Gemini for Google Cloud API, then there may be an issue with the LS server.

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- A successful check results in the following output: $ grpc-health-probe -addr cloudaicompanion.googleapis.com:443 -tls error: this server does not implement the grpc health protocol (grpc.health.v1.Health): GRPC target method can't be resolved An unsuccessful check results in the following output: timeout: failed to connect service "cloudaicompanion.googleapis.com:443" within 1s To obtain more details, run the following before grpc-health-probe : export GRPC GO LOG SEVERITY LEVEL=info IntelliJ There are no known issues for Gemini Code Assist for IntelliJ and other supported JetBrains IDEs.
- Known issues This section outlines the known issues of Gemini Code Assist: VS Code Chat responses may be truncated when they include an updated version of a large open file To work around this issue, select a smaller section of code and include an additional directive in the chat prompt, such as only output the selected code.
- This document describes how you can use Gemini Code Assist , an AI-powered collaborator in your IDE, to help you do the following in VS Code or IntelliJ and other supported JetBrains IDEs : Generate code for your project with code transformation.
- Exclude files from local context If files are specified in a .aiexclude or .gitignore file, Gemini Code Assist by default excludes them from local use in the context for code completion, code generation, code transformation, and chat.

### "Use the Gemini Code Assist agent mode \_|\_ Gemini for Google Cloud \_|\_\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer](https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- VS Code You can use the following built-in Gemini CLI commands in agent mode: /tools : Displays a list of tools that are available in your agent mode session. /mcp : Lists configured Model Context Protocol (MCP) servers, their connection status, server details, and available tools. /deploy : Deploys a web application to Cloud Run.
- VS Code You can use the coreTools and excludeTools settings to control which tools Gemini has access to in agent mode. coreTools Lets you specify a list of tools that you want to be available to the model.
- Limitations Some features of standard Gemini Code Assist chat might not be available in agent mode or might work differently than they do in standard chat.
- To switch to agent mode: VS Code To open the Gemini Code Assist chat, in the activity bar of your IDE, click spark Gemini Code Assist .

### "Use Gemini Code Assist code customization \_|\_ Gemini for Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Include health checks." "Write a FUNCTION OR CLASS in the following structure: EXPLAIN STRUCTURE ." After you generate some code, try using a follow-up prompt to improve it: "Try the /fix command to adjust the generated code—for example, syntax errors." "Add missing imports." "Try /fix on chat-generated code." Cleaning, simplifying, and refactoring code Try the following prompts in Gemini Code Assist chat: "Can you merge IMPORTS VARIABLES OR NOTE EXPORTED FUNCTIONS in this file?" "How would you simplify the FUNCTION NAME function?" "Can you merge FUNCTION NAME 1 and FUNCTION NAME 2 into one function?" "Could you inline some variables in FUNCTION NAME ?" "Could you simplify variable naming in the function FUNCTION NAME ?" Readability Try the following prompts in Gemini Code Assist chat: "Write the function FUNCTION NAME in fewer lines of code, if possible." "Add comments to the function FUNCTION NAME ." "Remove unnecessary whitespaces in the function FUNCTION NAME ." "Format the function FUNCTION NAME in a similar way as the rest of the code." Code review Try the following prompts in Gemini Code Assist chat: "Split the code in parts and explain each part using our codebase." "Are there variables or keywords that could be shorter and more self-explanatory?" "Can you give me useful code from the REPOSITORY NAME PACKAGE MODULE context for this code?" "What do you think about the function FUNCTION NAME ?" Debugging Try the following prompts in Gemini Code Assist chat: "I am getting an error when I try to do X/add Y.
- Why?" "Can you spot an error in the function FUNCTION NAME ?" "How would you fix the function FUNCTION NAME given this error message?" Learning and onboarding Try the following prompts in Gemini Code Assist chat: "Split this code in parts and explain each of them using our codebase." "Show how to call function FUNCTION NAME ?" "Show how to run the main function in the ENVIRONMENT NAME environment?" "What is the key technical improvement we can do to make this code more performant?" "Show me the implementation of FUNCTION OR CLASS NAME to achieve better results and add what that specific element is"—for example, "Show me the implementation of function foo where foo is the name of the function." Migration Try the following prompts in Gemini Code Assist chat: "Give me a strategy for how I can migrate FILE NAME from LANGUAGE 1 to LANGUAGE 2 "—for example, from Go to Python. "Given the function FUNCTION NAME in repository REPOSITORY NAME , find me an equivalent function in language LANGUAGE NAME that I can use." Try the following chat-based or code generation transformation workflow using prompts: "Take FILENAME COMPONENT code already written in LANGUAGE 1 and refactor and migrate it to LANGUAGE 2 "—for example, from Go to Python.
- Try the following prompts: "Is there something which can be improved?" "Give me possible pain points." "How would you test this code if that migration is correct?" Generating documentation Try the following prompts in Gemini Code Assist chat: "Summarize the code in package or folder X and provide documentation for the top five important methods." "Generate documentation for FUNCTION OR CLASS NAME ." "Shorten the documentation while preserving the key information." Unit test generation Try the following prompts in Gemini Code Assist chat: "Generate unit tests for FILENAME ." "Add the most relevant test cases for the FUNCTION NAME function." "Remove test cases that you think don't bring much value." Best practices Use relevant variable and function names or code snippets.
- Try generating code with the following prompts in Gemini Code Assist chat: "Write a main function where a connection to DATABASE is created.

