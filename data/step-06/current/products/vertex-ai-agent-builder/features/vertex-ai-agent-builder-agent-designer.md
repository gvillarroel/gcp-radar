---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:15:44.324Z"
product_name: "Vertex AI Agent Builder"
product_slug: "vertex-ai-agent-builder"
feature_name: "Vertex AI Agent Builder Agent Designer"
feature_slug: "vertex-ai-agent-builder-agent-designer"
latest_feature_date: "2025-12-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/agent-builder/agent-designer"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/code-execution/overview"
  - "https://docs.cloud.google.com/agent-builder/agent-engine/develop/langchain"
keywords:
  - "vertex"
  - "ai"
  - "agent"
  - "builder"
  - "designer"
  - "adds"
  - "low"
  - "code"
---

# Vertex AI Agent Builder Agent Designer

Product: Vertex AI Agent Builder
Coverage: LOW

## Step 02 Summary

Adds Agent Designer, a low-code visual environment in Google Cloud console for designing and testing agents.

## Extended Definition

Adds Agent Designer, a low-code visual environment in Google Cloud console for designing and testing agents.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/agent-builder/agent-designer](https://docs.cloud.google.com/agent-builder/agent-designer)
- [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- [https://docs.cloud.google.com/agent-builder/agent-engine/code-execution/overview](https://docs.cloud.google.com/agent-builder/agent-engine/code-execution/overview)
- [https://docs.cloud.google.com/agent-builder/agent-engine/develop/langchain](https://docs.cloud.google.com/agent-builder/agent-engine/develop/langchain)

## Supporting Pages

### "Agent Designer overview \_|\_ Vertex AI Agent Builder \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/agent-builder/agent-designer](https://docs.cloud.google.com/agent-builder/agent-designer)
- Source ID: `site-docs-root`
- Final score: 266
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Vertex AI Agent Builder Guides Send feedback Agent Designer overview Stay organized with collections Save and categorize content based on your preferences.
- Agent Designer in Vertex AI Agent Builder helps Customers design "AI Agents" as defined in the Service Specific Terms and thus the "Agentic AI Services" Service Specific Terms apply.
- Additional Terms for Agent Designer in Vertex AI Agent Builder Relationship to Other Terms.
- When using Google Search as Tool in Agent Designer, the section entitled "Grounding with Google Search" in the Service Specific Terms also apply, except that the first reference to 'Gemini Enterprise or Agentspace' in subsection (iii) of the "Agentic AI Services" section is replaced with 'Vertex AI'.

### "Use agent identity with Vertex AI Agent Engine \_|\_ Vertex AI Agent Builder\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- Source ID: `site-docs-root`
- Final score: 264
- Re-rank relevance: N/A

Evidence snippets:
- The Agent Engine instance is created with a read-only, system attested agent identity (a principal identifier ): Agent identity Format principal:// TRUST DOMAIN / NAMESPACE / AGENT NAME Example agent identity principal://agents.global.org- ORGANIZATION ID .system.id.goog/resources/aiplatform/projects/ PROJECT NUMBER /locations/ LOCATION /reasoningEngines/ AGENT ENGINE ID The following parts are auto-provisioned to you as part of agent identity: TRUST DOMAIN : A trust domain is provisioned for you when you enable the Vertex AI API: If you have an organization, the trust domain is created at the organization level with the format agents.global.org- ORGANIZATION ID .system.id.goog .
- We recommend the following roles: roles/aiplatform.expressUser : Grant access to running inference, sessions, and memory. roles/serviceusage.serviceUsageConsumer : Grant the agent permission to use the project's quota and the Vertex AI SDK. roles/browser : Grant access to basic Google Cloud functionalities.
- Create an Agent Engine instance while deploying agent code : If you want to provision the agent identity while deploying your agent code, use the Vertex AI SDK for Python and the identity type=AGENT IDENTITY flag.
- Home Documentation AI and ML Vertex AI Agent Builder Guides Send feedback Use agent identity with Vertex AI Agent Engine Stay organized with collections Save and categorize content based on your preferences.

### "Vertex AI Agent Engine Code Execution \_|\_ Vertex AI Agent Builder \_|\_\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/code-execution/overview](https://docs.cloud.google.com/agent-builder/agent-engine/code-execution/overview)
- Source ID: `site-docs-root`
- Final score: 262
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Agent Builder Guides Send feedback Vertex AI Agent Engine Code Execution Stay organized with collections Save and categorize content based on your preferences.
- To see an example of using , run the "Get started with on " notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Note: Code Execution is supported in only the us-central1 region.
- However, you don't need to deploy your agent to Vertex AI Agent Engine to use Code Execution.
- Code Execution is part of the Vertex AI Agent Engine suite.

### "Develop a LangChain agent \_|\_ Vertex AI Agent Builder \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/agent-builder/agent-engine/develop/langchain](https://docs.cloud.google.com/agent-builder/agent-engine/develop/langchain)
- Source ID: `site-docs-reference`
- Final score: 248
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Next, define a model builder that returns ChatAnthropic : def model builder ( , model name : str , model kwargs = None , kwargs ): from langchain anthropic import ChatAnthropic return ChatAnthropic ( model name = model name , model kwargs ) Finally, use it in LangchainAgent with the following code: from vertexai import agent engines agent = agent engines .
- LangchainAgent ( model = model , runnable builder = lcel builder , ) LangGraph To construct the following graph using LangGraph , Input / \ Pros Cons \ / Summary you need to override the runnable builder for LangchainAgent : from vertexai import agent engines def langgraph builder ( , model , kwargs ): from langchain core.prompts import ChatPromptTemplate from langchain core.output parsers import StrOutputParser from langgraph.graph import END , MessageGraph output parser = StrOutputParser () planner = ChatPromptTemplate . from template ( "Generate an argument about: {input} " ) model output parser pros = ChatPromptTemplate . from template ( "List the positive aspects of {input} " ) model output parser cons = ChatPromptTemplate . from template ( "List the negative aspects of {input} " ) model output parser summary = ChatPromptTemplate . from template ( "Input: {input} \n Generate a final response given the critique" , ) model output parser builder = MessageGraph () builder . add node ( "planner" , planner ) builder . add node ( "pros" , pros ) builder . add node ( "cons" , cons ) builder . add node ( "summary" , summary ) builder . add edge ( "planner" , "pros" ) builder . add edge ( "planner" , "cons" ) builder . add edge ( "pros" , "summary" ) builder . add edge ( "cons" , "summary" ) builder . add edge ( "summary" , END ) builder . set entry point ( "planner" ) return builder . compile () agent = agent engines .
- LangchainAgent ( model = model , tools = [ generate and execute code ], ) agent . query ( input = """Using the data below, construct a bar chart that includes only the height values with different colors for the bars: tree heights prices = { \" Pine \" : { \" height \" : 100, \" price \" : 100}, \" Oak \" : { \" height \" : 65, \" price \" : 135}, \" Birch \" : { \" height \" : 45, \" price \" : 80}, \" Redwood \" : { \" height \" : 200, \" price \" : 200}, \" Fir \" : { \" height \" : 180, \" price \" : 162}, } """ ) It should return a response such as { "input" : """Using the data below, construct a bar chart that includes only the height values with different colors for the bars: tree heights prices = { \" Pine \" : { \" height \" : 100, \" price \" : 100}, \" Oak \" : { \" height \" : 65, \" price \" : 135}, \" Birch \" : { \" height \" : 45, \" price \" : 80}, \" Redwood \" : { \" height \" : 200, \" price \" : 200}, \" Fir \" : { \" height \" : 180, \" price \" : 162}, } """ , "output" : """Here's the generated bar chart: """ } For your deployed agent to access the Code Interpreter extension, you must add the Vertex AI User role ( roles/aiplatform.user ) to the AI Platform Reasoning Engine Service Agent service account.
- For illustration. runnable builder = react builder , ) LCEL Syntax To construct the following graph using LangChain Expression Language (LCEL), Input / \ Pros Cons \ / Summary you need to override the runnable builder for LangchainAgent : from vertexai import agent engines def lcel builder ( , model , kwargs ): from operator import itemgetter from langchain core.prompts import ChatPromptTemplate from langchain core.runnables import RunnablePassthrough from langchain core.output parsers import StrOutputParser output parser = StrOutputParser () planner = ChatPromptTemplate . from template ( "Generate an argument about: {input} " ) model output parser { "argument" : RunnablePassthrough ()} pros = ChatPromptTemplate . from template ( "List the positive aspects of {argument} " ) model output parser cons = ChatPromptTemplate . from template ( "List the negative aspects of {argument} " ) model output parser final responder = ChatPromptTemplate . from template ( "Argument: {argument} \n Pros: \n {pros} \n\n Cons: \n {cons} \n " "Generate a final response given the critique" , ) model output parser return planner { "pros" : pros , "cons" : cons , "argument" : itemgetter ( "argument" ), } final responder agent = agent engines .

