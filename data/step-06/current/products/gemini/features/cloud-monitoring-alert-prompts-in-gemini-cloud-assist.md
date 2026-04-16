---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.644Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "Cloud Monitoring alert prompts in Gemini Cloud Assist"
feature_slug: "cloud-monitoring-alert-prompts-in-gemini-cloud-assist"
latest_feature_date: "2025-05-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics"
keywords:
  - "monitoring"
  - "alert"
  - "prompts"
  - "in"
  - "gemini"
  - "assist"
  - "supports"
  - "about"
---

# Cloud Monitoring alert prompts in Gemini Cloud Assist

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

Gemini Cloud Assist supports prompts about Cloud Monitoring alerts.

## Extended Definition

Gemini Cloud Assist supports prompts about Cloud Monitoring alerts.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist](https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist)
- [https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3)
- [https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics](https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics)

## Supporting Pages

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-root`
- Final score: 266
- Re-rank relevance: N/A

Evidence snippets:
- Stop in-progress chat VS Code You can stop an in-progress chat response by pressing stop Stop : IntelliJ You can stop an in-progress chat response by pressing stop Stop : Select the model If you use Gemini Code Assist Standard or Enterprise , or if you have a Google AI Pro or Ultra subscription, you can select the model that Gemini Code Assist uses when processing your prompts.
- Manage files and folders in the Context Drawer After you specify a file or folder to be used as context for your Gemini Code Assist prompts , these files and folders are placed in the Context Drawer , where you can view and remove them from the prompt context.
- Note: If you clear your chat history, Gemini Code Assist no longer uses your files for context and you must re-specify the files or folders in the chat pane using the @ symbol if you want to make more enquiries about the files.
- Note: If you clear your chat history, Gemini Code Assist no longer uses your files for context and you must re-specify the files in the chat pane using the @ symbol if you want to make more enquiries about the files.

### "Monitor Gemini Code Assist usage \_|\_ Gemini for Google Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist](https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist)
- Source ID: `site-docs-root`
- Final score: 266
- Re-rank relevance: N/A

Evidence snippets:
- You can use the data visualization and analysis tools in Cloud Monitoring to help you answer important questions, such as how many daily active users in your organization are using Gemini Code Assist.
- Gemini Code Assist automatically collects and stores metrics in Cloud Monitoring .
- What's next Learn more about monitoring Gemini for Google Cloud usage .
- Metric Name Timeframe code assist/daily active users Daily active users Past 24 hours code assist/twenty eight day active users Twenty-eight-day active users Past 28 days Chat metric This tracks the number of Gemini Code Assist chat responses exposed or shown to users over the given timeframe.

### "Gemini 3 in Gemini Code Assist \_|\_ Gemini for Google Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3)
- Source ID: `site-docs-root`
- Final score: 259
- Re-rank relevance: N/A

Evidence snippets:
- Gemini 3 availability License or subscription Gemini 3 availability Google AI Ultra Available to all users in VS Code and IntelliJ Google AI Pro Available to all users in VS Code and IntelliJ Gemini Code Assist Enterprise Available to users in VS Code and IntelliJ whose administrator has configured the Preview release channel Gemini Code Assist Standard Available to users in VS Code and IntelliJ whose administrator has configured the Preview release channel Gemini Code Assist for individuals Available to select users from the waitlist in VS Code and IntelliJ.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Gemini 3 in Gemini Code Assist Stay organized with collections Save and categorize content based on your preferences.
- Gemini 3.1 Pro and Gemini 3.0 Flash are available to Gemini Code Assist users in VS Code and IntelliJ.
- Use Gemini 3 in IntelliJ If Gemini 3 is available to you, it will automatically be selected for agent mode, chat and code generation.

### "Generate Gemini Code Assist metrics \_|\_ Gemini for Google Cloud \_|\_\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics](https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics)
- Source ID: `site-docs-root`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The output is similar to the following: 2024-10-30,user1@company.com 2024-10-29,user2@company.com 2024-10-29,user2@company.com 2024-10-29,user2@company.com 2024-10-29,user1@company.com 2024-10-28,user1@company.com Create a chart that displays daily usage The following steps show how to use Monitoring to create daily use graphs that show the aggregate total of daily active Gemini Code Assist users and the number of their requests per day.
- Create a Monitoring metric from your log data that records the number of Gemini Code Assist users: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- Learn more about Gemini for Google Cloud monitoring .
- List the number of unique users The following instructions describe how to use the gcloud CLI to list the number of unique users of Gemini Code Assist in the most recent 28-day period: In a shell environment, ensure that you have updated all installed components of the gcloud CLI to the latest version: gcloud components update Read the log entries for Gemini Code Assist users and usage: gcloud logging read 'resource.type=cloudaicompanion.googleapis.com/Instance labels.product= "code assist"' \ --freshness 28d \ --project PROJECT ID \ --format "csv(timestamp.date('%Y-%m-%d'),labels.user id)" Replace PROJECT ID with your Google Cloud project ID.

