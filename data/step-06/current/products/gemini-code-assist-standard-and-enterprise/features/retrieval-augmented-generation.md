---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:10.709Z"
product_name: "Gemini Code Assist Standard and Enterprise"
product_slug: "gemini-code-assist-standard-and-enterprise"
feature_name: "Retrieval-augmented generation"
feature_slug: "retrieval-augmented-generation"
latest_feature_date: "2024-03-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/code-customization"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide"
keywords:
  - "retrieval"
  - "augmented"
  - "generation"
  - "uses"
  - "repository"
  - "context"
  - "to"
  - "improve"
---

# Retrieval-augmented generation

Product: Gemini Code Assist Standard and Enterprise
Coverage: MEDIUM

## Step 02 Summary

Uses repository context to improve code suggestions for selected users.

## Extended Definition

Uses repository context to improve code suggestions for selected users.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization)
- [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization)
- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide](https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide)

## Supporting Pages

### "Use Gemini Code Assist code customization \_|\_ Gemini for Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Can you give me an overview of this repository's purpose and key modules?" For code generation and modification: " @ REPOSITORY NAME Implement an authentication function similar to the one in this repository." " @ REPOSITORY NAME Refactor the following code to follow the conventions in the selected repository." " @ REPOSITORY A NAME How can I use the latest functions from this repository to improve my code in REPOSITORY B NAME ?" For testing: " @ UNIT TEST FILE NAME Generate unit tests for MODULE based on the examples in the selected file." By using remote repositories as a focused source of context, you can get more accurate and relevant suggestions from Gemini Code Assist, which can help you code faster and more efficiently.
- Include health checks." "Write a FUNCTION OR CLASS in the following structure: EXPLAIN STRUCTURE ." After you generate some code, try using a follow-up prompt to improve it: "Try the /fix command to adjust the generated code—for example, syntax errors." "Add missing imports." "Try /fix on chat-generated code." Cleaning, simplifying, and refactoring code Try the following prompts in Gemini Code Assist chat: "Can you merge IMPORTS VARIABLES OR NOTE EXPORTED FUNCTIONS in this file?" "How would you simplify the FUNCTION NAME function?" "Can you merge FUNCTION NAME 1 and FUNCTION NAME 2 into one function?" "Could you inline some variables in FUNCTION NAME ?" "Could you simplify variable naming in the function FUNCTION NAME ?" Readability Try the following prompts in Gemini Code Assist chat: "Write the function FUNCTION NAME in fewer lines of code, if possible." "Add comments to the function FUNCTION NAME ." "Remove unnecessary whitespaces in the function FUNCTION NAME ." "Format the function FUNCTION NAME in a similar way as the rest of the code." Code review Try the following prompts in Gemini Code Assist chat: "Split the code in parts and explain each part using our codebase." "Are there variables or keywords that could be shorter and more self-explanatory?" "Can you give me useful code from the REPOSITORY NAME PACKAGE MODULE context for this code?" "What do you think about the function FUNCTION NAME ?" Debugging Try the following prompts in Gemini Code Assist chat: "I am getting an error when I try to do X/add Y.
- Why?" "Can you spot an error in the function FUNCTION NAME ?" "How would you fix the function FUNCTION NAME given this error message?" Learning and onboarding Try the following prompts in Gemini Code Assist chat: "Split this code in parts and explain each of them using our codebase." "Show how to call function FUNCTION NAME ?" "Show how to run the main function in the ENVIRONMENT NAME environment?" "What is the key technical improvement we can do to make this code more performant?" "Show me the implementation of FUNCTION OR CLASS NAME to achieve better results and add what that specific element is"—for example, "Show me the implementation of function foo where foo is the name of the function." Migration Try the following prompts in Gemini Code Assist chat: "Give me a strategy for how I can migrate FILE NAME from LANGUAGE 1 to LANGUAGE 2 "—for example, from Go to Python. "Given the function FUNCTION NAME in repository REPOSITORY NAME , find me an equivalent function in language LANGUAGE NAME that I can use." Try the following chat-based or code generation transformation workflow using prompts: "Take FILENAME COMPONENT code already written in LANGUAGE 1 and refactor and migrate it to LANGUAGE 2 "—for example, from Go to Python.
- Try the following prompts: "Is there something which can be improved?" "Give me possible pain points." "How would you test this code if that migration is correct?" Generating documentation Try the following prompts in Gemini Code Assist chat: "Summarize the code in package or folder X and provide documentation for the top five important methods." "Generate documentation for FUNCTION OR CLASS NAME ." "Shorten the documentation while preserving the key information." Unit test generation Try the following prompts in Gemini Code Assist chat: "Generate unit tests for FILENAME ." "Add the most relevant test cases for the FUNCTION NAME function." "Remove test cases that you think don't bring much value." Best practices Use relevant variable and function names or code snippets.

### "Configure Gemini Code Assist code customization \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- For example, to view errors in the indexing logs, run the following command: gcloud logging read "logName="projects/ PROJECT ID /logs/indexing" AND severity>=ERROR" Review the associated indexing statuses, such as the following: Start of repository indexing-for example, Indexing repository REPOSITORY NAME .
- Code customization relies on an index to analyze and parse your repository for quicker code generation suggestions and lookups. resource "google gemini code repository index" "example" { location = " REGION " code repository index id = " INDEX NAME " } Replace the following: INDEX NAME : your index name.
- Verify each user has the following roles: Gemini for Google Cloud User Repository Groups User The code customization feature uses Developer Connect to access and index your private repositories.
- Code customization relies on an index to analyze and parse your repository for quicker code generation suggestions and lookups.

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Note: If you clear your chat history, Gemini Code Assist no longer uses your files for context and you must re-specify the files or folders in the chat pane using the @ symbol if you want to make more enquiries about the files.
- Note: If you clear your chat history, Gemini Code Assist no longer uses your files for context and you must re-specify the files in the chat pane using the @ symbol if you want to make more enquiries about the files.
- Clear chat history Gemini Code Assist uses the chat history for additional context when responding to your prompts.
- Stop in-progress chat VS Code You can stop an in-progress chat response by pressing stop Stop : IntelliJ You can stop an in-progress chat response by pressing stop Stop : Select the model If you use Gemini Code Assist Standard or Enterprise , or if you have a Google AI Pro or Ultra subscription, you can select the model that Gemini Code Assist uses when processing your prompts.

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide](https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Get more relevant suggestions with remote repository context You can get more contextually aware and relevant code suggestions by directing Gemini Code Assist to focus on specific remote repositories.
- Use a remote repository as context To direct Gemini Code Assist to use one or more repositories as the primary context for your prompts: In your IDE's chat, start your prompt with the @ symbol.
- Before you begin Before you use a remote repository as context, you must first index and configure it for code customization .
- Example prompts This section includes examples of how you can get more relevant suggestions with remote repository context.

