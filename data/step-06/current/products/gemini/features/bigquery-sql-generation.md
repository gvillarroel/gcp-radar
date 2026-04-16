---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.661Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "BigQuery SQL generation"
feature_slug: "bigquery-sql-generation"
latest_feature_date: "2024-08-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/overview"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
keywords:
  - "sql"
  - "generation"
  - "gemini"
  - "in"
  - "can"
  - "generate"
  - "queries"
  - "from"
---

# BigQuery SQL generation

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

Gemini in BigQuery can generate SQL queries from prompts.

## Extended Definition

Gemini in BigQuery can generate SQL queries from prompts.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta](https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta)
- [https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics](https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics)
- [https://docs.cloud.google.com/gemini/docs/codeassist/overview](https://docs.cloud.google.com/gemini/docs/codeassist/overview)
- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)

## Supporting Pages

### "Package com.google.cloud.geminidataanalytics.v1beta (0.16.0) \_|\_ Java\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta](https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta)
- Source ID: `site-java-reference`
- Final score: 289
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This message can also be a message from the user as historical context for multiturn conversations with the system. com. google. cloud. geminidataanalytics. v1beta.
- This message can also be a message from the user as historical context for multiturn conversations with the system. com. google. cloud. geminidataanalytics. v1beta.
- These parameters are used to enforce row-level security during SQL generation and query execution. com. google. cloud. geminidataanalytics. v1beta.
- These parameters are used to enforce row-level security during SQL generation and query execution. com. google. cloud. geminidataanalytics. v1beta.

### "Generate Gemini Code Assist metrics \_|\_ Gemini for Google Cloud \_|\_\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics](https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics)
- Source ID: `site-docs-root`
- Final score: 278
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- List aggregate users by day SELECT COUNT ( DISTINCT labels . user id ) as total users , DATE ( timestamp ) as use date FROM GENERATED BIGQUERY TABLE GROUP BY use date ORDER BY use date List individual requests per day by user SELECT COUNT ( ), DATE ( timestamp ) as use date , labels . user id as user FROM GENERATED BIGQUERY TABLE GROUP BY use date , user ORDER BY use date List aggregate requests per day by date SELECT COUNT ( ), DATE ( timestamp ) as use date FROM GENERATED BIGQUERY TABLE GROUP BY use date ORDER BY use date What's next Learn more about Gemini for Google Cloud logging .
- Queries You can use the following sample BigQuery queries to generate user- and aggregate-level data for daily active use and suggestions generated.
- List individual users by day SELECT DISTINCT labels . user id as user , DATE ( timestamp ) as use date FROM GENERATED BIGQUERY TABLE ORDER BY use date Replace GENERATED BIGQUERY TABLE with the fully qualified path of the BigQuery response table you noted in the previous steps for creating a sink .
- Create a Monitoring metric from your log data that records the number of Gemini Code Assist users: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .

### "Gemini Code Assist Standard and Enterprise overview \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/overview](https://docs.cloud.google.com/gemini/docs/codeassist/overview)
- Source ID: `site-docs-root`
- Final score: 275
- Re-rank relevance: N/A

Evidence snippets:
- Gemini Code Assist code explained for Apigee policies. ( Preview ) Gemini in Application Integration The following table shows the types of generative AI assistance in Application Integration in the Google Cloud console: Integration creation assist Gemini Code Assist Standard Gemini Code Assist Enterprise AI-assisted visual editor for automation flow generation Enterprise context embedded AI-assisted automation authoring Generative AI Automation flow documentation generation and refinement Gemini in BigQuery features with Gemini Code Assist The following table shows the types of generative AI assistance for BigQuery in BigQuery Studio : Data insights Gemini Code Assist Standard Gemini Code Assist Enterprise Data insights provides an insightful library of queries generated from the metadata of your tables.
- Gemini in Colab Enterprise The following table shows the types of generative AI assistance for code in Colab Enterprise : Notebook code assist Gemini Code Assist Standard Gemini Code Assist Enterprise Python code generation and completion in notebook Gemini in databases The following table shows the types of generative AI assistance for coding in databases: Generate SQL queries Gemini Code Assist Standard Gemini Code Assist Enterprise Write in natural language to generate SQL statements.
- Interact with Gemini Code Assist in your IDE After you set up Gemini Code Assist Standard or Enterprise for a Google Cloud project , and install the Gemini Code Assist extension in your IDE ( VS Code or supported JetBrains IDE ), you can ask for assistance in the following ways: Receive code completions or generate code directly in the code editor.
- You can get code completions as you write your code, generate full functions or code blocks from comments, generate unit tests, and get help with debugging, understanding, and documenting your code.

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-root`
- Final score: 249
- Re-rank relevance: N/A

Evidence snippets:
- If you disable automatic outline generation, you can manually generate an outline for the file in focus by right-clicking in the file and selecting Gemini Code Assist > Outline current file , or by going to the Gemini Code Assist outline pane and clicking the Generate outline button.
- Manage files and folders in the Context Drawer After you specify a file or folder to be used as context for your Gemini Code Assist prompts , these files and folders are placed in the Context Drawer , where you can view and remove them from the prompt context.
- Regenerate a prompt response If preferred, you can regenerate a different response to your most recent prompt by following these steps: VS Code In the Gemini Code Assist Chat pane, at the bottom of your most recent response, click replay Regenerate response .
- Revert to a checkpoint in chat After applying the changes that Gemini Code Assist generates based on your prompt, you can choose to revert the modified code file(s) to a certain checkpoint, which reverts all of the applied changes to the code file(s).

