---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.639Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "Chat code suggestion preview"
feature_slug: "chat-code-suggestion-preview"
latest_feature_date: "2025-06-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist"
keywords:
  - "chat"
  - "code"
  - "suggestion"
  - "preview"
  - "suggestions"
  - "are"
  - "shown"
  - "in"
---

# Chat code suggestion preview

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

Chat code suggestions are shown in a preview block by default, with options to display them collapsed or expanded.

## Extended Definition

Chat code suggestions are shown in a preview block by default, with options to display them collapsed or expanded.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization)
- [https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist](https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist)

## Supporting Pages

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-root`
- Final score: 292
- Re-rank relevance: N/A

Evidence snippets:
- Vim: Inconsistent behavior when pressing Esc to dismiss suggestions When you press Esc , both the IDE and Gemini Code Assist suggestions are dismissed.
- IntelliJ In the chat response of the Gemini Code Assist sidebar Ask panel, click the Preview in diff mode button ( compare arrows ).
- You can also use the Quick Preview in the prompt response to accept or reject all suggestions across multiple code files.
- You can also use the Quick Preview in the prompt response to accept or reject all suggestions across multiple code files.

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- Source ID: `site-docs-root-2`
- Final score: 282
- Re-rank relevance: N/A

Evidence snippets:
- Get more relevant suggestions with remote repository context You can get more contextually aware and relevant code suggestions by directing Gemini Code Assist to focus on specific remote repositories.
- You can also select a part of your code and then prompt Gemini Code Assist for help through the chat feature, and receive and accept or reject code suggestions while you code.
- Vim: Inconsistent behavior when pressing Esc to dismiss suggestions When you press Esc , both the IDE and Gemini Code Assist suggestions are dismissed.
- Exclude files from local context If files are specified in a .aiexclude or .gitignore file, Gemini Code Assist by default excludes them from local use in the context for code completion, code generation, code transformation, and chat.

### "Use Gemini Code Assist code customization \_|\_ Gemini for Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization)
- Source ID: `site-docs-root-2`
- Final score: 251
- Re-rank relevance: N/A

Evidence snippets:
- Get more relevant suggestions with remote repository context You can get more contextually aware and relevant code suggestions by directing Gemini Code Assist to focus on specific remote repositories.
- Include health checks." "Write a FUNCTION OR CLASS in the following structure: EXPLAIN STRUCTURE ." After you generate some code, try using a follow-up prompt to improve it: "Try the /fix command to adjust the generated code—for example, syntax errors." "Add missing imports." "Try /fix on chat-generated code." Cleaning, simplifying, and refactoring code Try the following prompts in Gemini Code Assist chat: "Can you merge IMPORTS VARIABLES OR NOTE EXPORTED FUNCTIONS in this file?" "How would you simplify the FUNCTION NAME function?" "Can you merge FUNCTION NAME 1 and FUNCTION NAME 2 into one function?" "Could you inline some variables in FUNCTION NAME ?" "Could you simplify variable naming in the function FUNCTION NAME ?" Readability Try the following prompts in Gemini Code Assist chat: "Write the function FUNCTION NAME in fewer lines of code, if possible." "Add comments to the function FUNCTION NAME ." "Remove unnecessary whitespaces in the function FUNCTION NAME ." "Format the function FUNCTION NAME in a similar way as the rest of the code." Code review Try the following prompts in Gemini Code Assist chat: "Split the code in parts and explain each part using our codebase." "Are there variables or keywords that could be shorter and more self-explanatory?" "Can you give me useful code from the REPOSITORY NAME PACKAGE MODULE context for this code?" "What do you think about the function FUNCTION NAME ?" Debugging Try the following prompts in Gemini Code Assist chat: "I am getting an error when I try to do X/add Y.
- Can you give me an overview of this repository's purpose and key modules?" For code generation and modification: " @ REPOSITORY NAME Implement an authentication function similar to the one in this repository." " @ REPOSITORY NAME Refactor the following code to follow the conventions in the selected repository." " @ REPOSITORY A NAME How can I use the latest functions from this repository to improve my code in REPOSITORY B NAME ?" For testing: " @ UNIT TEST FILE NAME Generate unit tests for MODULE based on the examples in the selected file." By using remote repositories as a focused source of context, you can get more accurate and relevant suggestions from Gemini Code Assist, which can help you code faster and more efficiently.
- Use cases and prompt examples The following table provides guidance and examples about using code customization in specific use cases: Use case Things worth trying Writing new code Try the following to generate code in your IDE or Gemini Code Assist chat: Generate code that would use terms which are already mentioned in your codebase.

### "Monitor Gemini Code Assist usage \_|\_ Gemini for Google Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist](https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist)
- Source ID: `site-docs-root`
- Final score: 239
- Re-rank relevance: N/A

Evidence snippets:
- Metric Name Timeframe chat responses count Daily chat responses Past 24 hours Code suggestion metrics The following are metrics related to Gemini Code Assist code suggestions.
- Metric Name Timeframe code assist/daily active users Daily active users Past 24 hours code assist/twenty eight day active users Twenty-eight-day active users Past 28 days Chat metric This tracks the number of Gemini Code Assist chat responses exposed or shown to users over the given timeframe.
- Metric Name Timeframe code assist/code suggestions accepted count Daily code suggestions accepted Past 24 hours Lines of code accepted These metrics count the number of lines of code sent by Gemini Code Assist and accepted by users over different timeframes.
- You can use the data visualization and analysis tools in Cloud Monitoring to help you answer important questions, such as how many daily active users in your organization are using Gemini Code Assist.

