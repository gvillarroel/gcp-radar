---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:10.690Z"
product_name: "Gemini Code Assist Standard and Enterprise"
product_slug: "gemini-code-assist-standard-and-enterprise"
feature_name: "revert to checkpoint"
feature_slug: "revert-to-checkpoint"
latest_feature_date: "2025-06-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview"
keywords:
  - "revert"
  - "to"
  - "checkpoint"
  - "gemini"
  - "code"
  - "assist"
  - "chat"
  - "suggestions"
---

# revert to checkpoint

Product: Gemini Code Assist Standard and Enterprise
Coverage: MEDIUM

## Step 02 Summary

Gemini Code Assist chat suggestions in VS Code can be reverted to a prior checkpoint.

## Extended Definition

Gemini Code Assist chat suggestions in VS Code can be reverted to a prior checkpoint.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist](https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist)
- [https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization)
- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview](https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview)

## Supporting Pages

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-reference`
- Final score: 369
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Revert to a checkpoint in chat After applying the changes that Gemini Code Assist generates based on your prompt, you can choose to revert the modified code file(s) to a certain checkpoint, which reverts all of the applied changes to the code file(s).
- To revert your code file to a checkpoint, follow these steps: VS Code In the Gemini Code Assist chat pane, click undo Revert to checkpoint .
- Stop in-progress chat VS Code You can stop an in-progress chat response by pressing stop Stop : IntelliJ You can stop an in-progress chat response by pressing stop Stop : Select the model If you use Gemini Code Assist Standard or Enterprise , or if you have a Google AI Pro or Ultra subscription, you can select the model that Gemini Code Assist uses when processing your prompts.
- Known issues This section outlines the known issues of Gemini Code Assist: VS Code Chat responses may be truncated when they include an updated version of a large open file To work around this issue, select a smaller section of code and include an additional directive in the chat prompt, such as only output the selected code.

### "Monitor Gemini Code Assist usage \_|\_ Gemini for Google Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist](https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist)
- Source ID: `site-docs-reference`
- Final score: 293
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Metric Name Timeframe chat responses count Daily chat responses Past 24 hours Code suggestion metrics The following are metrics related to Gemini Code Assist code suggestions.
- Metric Name Timeframe code assist/daily active users Daily active users Past 24 hours code assist/twenty eight day active users Twenty-eight-day active users Past 28 days Chat metric This tracks the number of Gemini Code Assist chat responses exposed or shown to users over the given timeframe.
- Metric Name Timeframe code assist/code lines accepted count Daily lines of code accepted Past 24 hours View Gemini Code Assist metrics in your project To view aggregated metrics for Gemini Code Assist, do the following: Go to the Gemini Code Assist Overview page.
- Metric Name Timeframe code assist/code suggestions accepted count Daily code suggestions accepted Past 24 hours Lines of code accepted These metrics count the number of lines of code sent by Gemini Code Assist and accepted by users over different timeframes.

### "Use Gemini Code Assist code customization \_|\_ Gemini for Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization)
- Source ID: `site-docs-root`
- Final score: 291
- Re-rank relevance: N/A

Evidence snippets:
- Include health checks." "Write a FUNCTION OR CLASS in the following structure: EXPLAIN STRUCTURE ." After you generate some code, try using a follow-up prompt to improve it: "Try the /fix command to adjust the generated code—for example, syntax errors." "Add missing imports." "Try /fix on chat-generated code." Cleaning, simplifying, and refactoring code Try the following prompts in Gemini Code Assist chat: "Can you merge IMPORTS VARIABLES OR NOTE EXPORTED FUNCTIONS in this file?" "How would you simplify the FUNCTION NAME function?" "Can you merge FUNCTION NAME 1 and FUNCTION NAME 2 into one function?" "Could you inline some variables in FUNCTION NAME ?" "Could you simplify variable naming in the function FUNCTION NAME ?" Readability Try the following prompts in Gemini Code Assist chat: "Write the function FUNCTION NAME in fewer lines of code, if possible." "Add comments to the function FUNCTION NAME ." "Remove unnecessary whitespaces in the function FUNCTION NAME ." "Format the function FUNCTION NAME in a similar way as the rest of the code." Code review Try the following prompts in Gemini Code Assist chat: "Split the code in parts and explain each part using our codebase." "Are there variables or keywords that could be shorter and more self-explanatory?" "Can you give me useful code from the REPOSITORY NAME PACKAGE MODULE context for this code?" "What do you think about the function FUNCTION NAME ?" Debugging Try the following prompts in Gemini Code Assist chat: "I am getting an error when I try to do X/add Y.
- Why?" "Can you spot an error in the function FUNCTION NAME ?" "How would you fix the function FUNCTION NAME given this error message?" Learning and onboarding Try the following prompts in Gemini Code Assist chat: "Split this code in parts and explain each of them using our codebase." "Show how to call function FUNCTION NAME ?" "Show how to run the main function in the ENVIRONMENT NAME environment?" "What is the key technical improvement we can do to make this code more performant?" "Show me the implementation of FUNCTION OR CLASS NAME to achieve better results and add what that specific element is"—for example, "Show me the implementation of function foo where foo is the name of the function." Migration Try the following prompts in Gemini Code Assist chat: "Give me a strategy for how I can migrate FILE NAME from LANGUAGE 1 to LANGUAGE 2 "—for example, from Go to Python. "Given the function FUNCTION NAME in repository REPOSITORY NAME , find me an equivalent function in language LANGUAGE NAME that I can use." Try the following chat-based or code generation transformation workflow using prompts: "Take FILENAME COMPONENT code already written in LANGUAGE 1 and refactor and migrate it to LANGUAGE 2 "—for example, from Go to Python.
- Try the following prompts: "Is there something which can be improved?" "Give me possible pain points." "How would you test this code if that migration is correct?" Generating documentation Try the following prompts in Gemini Code Assist chat: "Summarize the code in package or folder X and provide documentation for the top five important methods." "Generate documentation for FUNCTION OR CLASS NAME ." "Shorten the documentation while preserving the key information." Unit test generation Try the following prompts in Gemini Code Assist chat: "Generate unit tests for FILENAME ." "Add the most relevant test cases for the FUNCTION NAME function." "Remove test cases that you think don't bring much value." Best practices Use relevant variable and function names or code snippets.
- Can you give me an overview of this repository's purpose and key modules?" For code generation and modification: " @ REPOSITORY NAME Implement an authentication function similar to the one in this repository." " @ REPOSITORY NAME Refactor the following code to follow the conventions in the selected repository." " @ REPOSITORY A NAME How can I use the latest functions from this repository to improve my code in REPOSITORY B NAME ?" For testing: " @ UNIT TEST FILE NAME Generate unit tests for MODULE based on the examples in the selected file." By using remote repositories as a focused source of context, you can get more accurate and relevant suggestions from Gemini Code Assist, which can help you code faster and more efficiently.

### "Gemini Code Assist chat features overview \_|\_ Gemini for Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview](https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview)
- Source ID: `site-docs-reference`
- Final score: 287
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can perform the following chat actions with Gemini Code Assist in any of the supported IDEs : Use Gemini Code Assist to explain your code Create multiple chats Select a Gemini model Edit a prior prompt Regenerate a prompt response Delete prompt and response pairs Configure code preview pane Prompt Gemini Code Assist with selected code using chat Add selected code snippets to context Add terminal output to the chat context Specify files and folders in your workspace context Revert to a checkpoint in chat View code diffs Generate a file outline Create custom commands Create rules Exclude files from your context with an .aiexclude or .gitignore file Use the Gemini Code Assist agent mode Configure local codebase awareness What's next Set up Gemini Code Assist Standard or Enterprise , if you haven't already.
- To help you comply with any license requirements for your code, Gemini Code Assist provides source citations when its suggestions directly quote at length from a specific source.
- To begin using Gemini Code Assist chat features in your IDE, see Chat with Gemini Code Assist .
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Gemini Code Assist chat features overview Stay organized with collections Save and categorize content based on your preferences.

