---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:10.691Z"
product_name: "Gemini Code Assist Standard and Enterprise"
product_slug: "gemini-code-assist-standard-and-enterprise"
feature_name: "Code snippet context attachment"
feature_slug: "code-snippet-context-attachment"
latest_feature_date: "2025-06-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide"
keywords:
  - "code"
  - "snippet"
  - "context"
  - "attachment"
  - "lets"
  - "you"
  - "select"
  - "and"
---

# Code snippet context attachment

Product: Gemini Code Assist Standard and Enterprise
Coverage: MEDIUM

## Step 02 Summary

Lets you select and attach code snippets so Gemini can focus on smaller code blocks instead of entire files in VS Code Gemini Code Assist.

## Extended Definition

Lets you select and attach code snippets so Gemini can focus on smaller code blocks instead of entire files in VS Code Gemini Code Assist.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization)
- [https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide](https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide)

## Supporting Pages

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-reference`
- Final score: 225
- Re-rank relevance: N/A

Evidence snippets:
- In this section, you add a selected code snippet to your context and get an explanation about the code snippet from Gemini Code Assist: VS Code In your code file, select a code snippet.
- Add selected code snippets to context You can select, attach, and direct Gemini Code Assist to focus on code snippets.
- When you select a code snippet in your code file, you can instruct Gemini Code Assist add the code snippet to the Context Drawer .
- Gemini Code Assist responds to your prompt based on your selected code snippet in the Context Drawer.

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- When you select your code in your code editor, you can view and select from a list of actions relevant to your context.
- Get more relevant suggestions with remote repository context You can get more contextually aware and relevant code suggestions by directing Gemini Code Assist to focus on specific remote repositories.
- By using remote repositories as a focused source of context, you can get more accurate and relevant suggestions from Gemini Code Assist, which can help you code faster and more efficiently.
- To apply a quick fix in your code file, follow these steps: VS Code In your code file, hold your pointer over the squiggly error line and select Quick Fix , and then select /fix .

### "Use Gemini Code Assist code customization \_|\_ Gemini for Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization)
- Source ID: `site-docs-root`
- Final score: 209
- Re-rank relevance: N/A

Evidence snippets:
- Can you give me an overview of this repository's purpose and key modules?" For code generation and modification: " @ REPOSITORY NAME Implement an authentication function similar to the one in this repository." " @ REPOSITORY NAME Refactor the following code to follow the conventions in the selected repository." " @ REPOSITORY A NAME How can I use the latest functions from this repository to improve my code in REPOSITORY B NAME ?" For testing: " @ UNIT TEST FILE NAME Generate unit tests for MODULE based on the examples in the selected file." By using remote repositories as a focused source of context, you can get more accurate and relevant suggestions from Gemini Code Assist, which can help you code faster and more efficiently.
- Include health checks." "Write a FUNCTION OR CLASS in the following structure: EXPLAIN STRUCTURE ." After you generate some code, try using a follow-up prompt to improve it: "Try the /fix command to adjust the generated code—for example, syntax errors." "Add missing imports." "Try /fix on chat-generated code." Cleaning, simplifying, and refactoring code Try the following prompts in Gemini Code Assist chat: "Can you merge IMPORTS VARIABLES OR NOTE EXPORTED FUNCTIONS in this file?" "How would you simplify the FUNCTION NAME function?" "Can you merge FUNCTION NAME 1 and FUNCTION NAME 2 into one function?" "Could you inline some variables in FUNCTION NAME ?" "Could you simplify variable naming in the function FUNCTION NAME ?" Readability Try the following prompts in Gemini Code Assist chat: "Write the function FUNCTION NAME in fewer lines of code, if possible." "Add comments to the function FUNCTION NAME ." "Remove unnecessary whitespaces in the function FUNCTION NAME ." "Format the function FUNCTION NAME in a similar way as the rest of the code." Code review Try the following prompts in Gemini Code Assist chat: "Split the code in parts and explain each part using our codebase." "Are there variables or keywords that could be shorter and more self-explanatory?" "Can you give me useful code from the REPOSITORY NAME PACKAGE MODULE context for this code?" "What do you think about the function FUNCTION NAME ?" Debugging Try the following prompts in Gemini Code Assist chat: "I am getting an error when I try to do X/add Y.
- Try the following prompts: "Is there something which can be improved?" "Give me possible pain points." "How would you test this code if that migration is correct?" Generating documentation Try the following prompts in Gemini Code Assist chat: "Summarize the code in package or folder X and provide documentation for the top five important methods." "Generate documentation for FUNCTION OR CLASS NAME ." "Shorten the documentation while preserving the key information." Unit test generation Try the following prompts in Gemini Code Assist chat: "Generate unit tests for FILENAME ." "Add the most relevant test cases for the FUNCTION NAME function." "Remove test cases that you think don't bring much value." Best practices Use relevant variable and function names or code snippets.
- Get more relevant suggestions with remote repository context You can get more contextually aware and relevant code suggestions by directing Gemini Code Assist to focus on specific remote repositories.

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide](https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- When you select your code in your code editor, you can view and select from a list of actions relevant to your context.
- Get more relevant suggestions with remote repository context You can get more contextually aware and relevant code suggestions by directing Gemini Code Assist to focus on specific remote repositories.
- By using remote repositories as a focused source of context, you can get more accurate and relevant suggestions from Gemini Code Assist, which can help you code faster and more efficiently.
- To apply a quick fix in your code file, follow these steps: VS Code In your code file, hold your pointer over the squiggly error line and select Quick Fix , and then select /fix .

