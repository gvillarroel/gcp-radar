---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.919Z"
product_name: "Gemini Code Assist"
product_slug: "gemini-code-assist"
feature_name: "Tools"
feature_slug: "tools"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
keywords:
  - "tools"
  - "lets"
  - "gemini"
  - "code"
  - "assist"
  - "access"
  - "external"
  - "services"
---

# Tools

Product: Gemini Code Assist
Coverage: MEDIUM

## Step 02 Summary

Lets Gemini Code Assist access external services from the IDE.

## Extended Definition

Lets Gemini Code Assist access external services from the IDE.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance](https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance)
- [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist](https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist)
- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)

## Supporting Pages

### "Security, privacy, and compliance for Gemini Code Assist Standard and Enterprise\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance](https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance)
- Source ID: `site-docs-root`
- Final score: 255
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, Gemini Code Assist Standard and Enterprise handle the following data as Customer Data: Prompt data, which includes developer queries Response data from Gemini Code Assist Standard and Enterprise Additional context, such as the current conversation history, snippets of files that are open in the IDE, snippets of files that are stored adjacent to the open file, and cursor location in the current file Because Gemini Code Assist Standard and Enterprise are stateless Google Cloud services, they don't store prompts and responses in Google Cloud.
- Examples of telemetry data include the following: An event indicating that a request was made (but not the contents of the request) An event indicating that a response was received (but not the contents of the response) A user's reaction to the response (for example, whether the user accepted or rejected the response) The character count length of accepted suggestions A user's interaction with various UI elements Gemini Code Assist Standard and Enterprise engineers have access to telemetry data to help with continual product improvements.
- Authentication Gemini Code Assist Standard and Enterprise require that your application developers authenticate to Google Cloud to verify their identity and access privileges.
- Network security By default, Google applies protections to data in transit for all Google Cloud services, including Gemini Code Assist Standard and Enterprise.

### "Set up Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- Source ID: `site-docs-reference`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Any custom roles that you create need the following permissions for you to access Gemini Code Assist Standard and Enterprise: cloudaicompanion.companions.generateChat cloudaicompanion.companions.generateCode cloudaicompanion.instances.completeCode cloudaicompanion.instances.completeTask cloudaicompanion.instances.generateCode cloudaicompanion.instances.generateText cloudaicompanion.instances.exportMetrics cloudaicompanion.instances.queryEffectiveSetting cloudaicompanion.instances.queryEffectiveSettingBindings serviceusage.services.enable Assign and manage licenses.
- Optional: Configure VPC Service Controls If your organization has a service perimeter, then you must add the following resources to your perimeter: Gemini for Google Cloud API Gemini Code Assist API If you are using Gemini Code Assist Standard or Enterprise from outside of your service perimeter, then you also need to modify the ingress policy to allow access to those services.
- Before you can use services available to users with Gemini Code Assist Standard or Enterprise licenses, your team needs to perform the setup steps that are described in this document: Note: An administrator typically performs steps 1-4.
- If a Gemini Code Assist subscription already exists for the billing account associated with the project, this button displays as Manage Gemini Code Assist and lets you edit your subscription .

### "Monitor Gemini Code Assist usage \_|\_ Gemini for Google Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist](https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist)
- Source ID: `site-docs-root`
- Final score: 247
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use the data visualization and analysis tools in Cloud Monitoring to help you answer important questions, such as how many daily active users in your organization are using Gemini Code Assist.
- Metric Name Timeframe code assist/daily active users Daily active users Past 24 hours code assist/twenty eight day active users Twenty-eight-day active users Past 28 days Chat metric This tracks the number of Gemini Code Assist chat responses exposed or shown to users over the given timeframe.
- Metric Name Timeframe code assist/code lines accepted count Daily lines of code accepted Past 24 hours View Gemini Code Assist metrics in your project To view aggregated metrics for Gemini Code Assist, do the following: Go to the Gemini Code Assist Overview page.
- Metric Name Timeframe code assist/code suggestions accepted count Daily code suggestions accepted Past 24 hours Lines of code accepted These metrics count the number of lines of code sent by Gemini Code Assist and accepted by users over different timeframes.

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-reference`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Connectivity issues in the Gemini Code Assist output window If you see a connection error or other connectivity problems in the Gemini Code Assist output window, try the following: Configure your firewall to allow access to oauth2.googleapis.com and cloudaicompanion.googleapis.com .
- If you're using Gemini Code Assist Enterprise , you can use Code customization , which lets you get code suggestions based on your organization's private codebase directly from Gemini Code Assist Enterprise.
- A successful check results in the following output: $ grpc-health-probe -addr cloudaicompanion.googleapis.com:443 -tls error: this server does not implement the grpc health protocol (grpc.health.v1.Health): GRPC target method can't be resolved An unsuccessful check results in the following output: timeout: failed to connect service "cloudaicompanion.googleapis.com:443" within 1s To obtain more details, run the following before grpc-health-probe : export GRPC GO LOG SEVERITY LEVEL=info 'Activate Gemini Code Assist' still appears after selecting Gemini Code Assist project If you selected your project per the instructions in this guide, which includes enabling the Gemini for Google Cloud API, then there may be an issue with the LS server.
- Stop in-progress chat VS Code You can stop an in-progress chat response by pressing stop Stop : IntelliJ You can stop an in-progress chat response by pressing stop Stop : Select the model If you use Gemini Code Assist Standard or Enterprise , or if you have a Google AI Pro or Ultra subscription, you can select the model that Gemini Code Assist uses when processing your prompts.

