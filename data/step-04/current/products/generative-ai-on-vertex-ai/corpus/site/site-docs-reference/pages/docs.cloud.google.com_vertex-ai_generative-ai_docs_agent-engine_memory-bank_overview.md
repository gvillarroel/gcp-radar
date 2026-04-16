---
title: "Vertex AI Agent Engine Memory Bank overview \_|\_ Vertex AI Agent Builder\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/agent-engine/memory-bank/overview
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/agent-engine/memory-bank/overview
  title: "Vertex AI Agent Engine Memory Bank overview \_|\_ Vertex AI Agent Builder\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Agent Builder
Guides
Send feedback
Vertex AI Agent Engine Memory Bank overview
Stay organized with collections
Save and categorize content based on your preferences.
Important: Vertex AI Agent Engine Memory Bank is a Generative AI feature, subject to the Generative AI Service Specific Terms .
Vertex AI Agent Engine Memory Bank lets you dynamically generate long-term memories based on users' conversations with your agent. Long-term memories are personalized information that can be accessed across multiple sessions for a particular user. The agent can use the memories to personalize responses to the user and create cross-session continuity.
Overview
Memory Bank helps you manage memories, so that you can personalize how your agent interacts with users and manage the context window. For each scope, Memory Bank maintains an isolated collection of memories. Each memory is an independent, self-contained piece of information that can be used to expand the context available to your agent. For example:
{
"name" : "projects/.../locations/.../reasoningEngines/.../memories/..." ,
"scope" : {
"agent_name" : "My agent" ,
"user" : "my user ID"
},
"fact" : "I use Memory Bank to manage my memories."
}
Memory Bank includes the following features:
Memory generation : Create, refine, and manage memories using a large language model (LLM).
Memory Extraction : Extract only the most meaningful information from source data to persist as memories.
Memory Consolidation : Consolidate newly extracted information with existing memories, allowing memories to evolve as new information is ingested. You can also consolidate pre-extracted memories (like information that your agent or a human-in-the-loop considers meaningful) with existing memories.
Asynchronous Generation : Generate memories in the background , so that your agent doesn't have to wait for memory generation to complete.
Customizable Extraction : Configure what information Memory Bank considers meaningful by providing specific topics and few-shot examples.
Multimodal Understanding : Process multimodal information to generate and persist textual insights.
Managed Storage and Retrieval : Benefit from a fully managed, persistent, and accessible memory store.
Data isolation across identities : Memory consolidation and retrieval is isolated to a specific identity .
Persistent and Accessible Storage : Store memories that can be accessed from multiple environments, including Vertex AI Agent Engine Runtime , your local environment, or other deployment options .
Similarity Search : Retrieve memories using similarity search that is scoped to a specific identity .
Automatic Expiration : Set a time to live (TTL) on memories to ensure stale information is automatically deleted. Configure your Memory Bank instance so that a TTL is automatically applied to inserted or generated memories.
Memory Revisions : Automatically create and maintain memory revisions which allow you to inspect how memories transform as new information is ingested.
Restrictive permissions : Use IAM conditions to restrict which principals can read or write specific scopes' memories.
Agent integration : Connect Memory Bank to your agent, so that it can orchestrate calls to generate and retrieve memories.
Agent Development Kit (ADK) Integration : Orchestrate calls from your ADK-based agent using built-in ADK tools and the VertexAiMemoryBankService to read from and write to Memory Bank.
Other frameworks : Wrap your Memory Bank code in tools and callbacks to orchestrate memory generation and retrieval.
Use cases
You can use Memory Bank to transform stateless agent interactions into stateful, contextual experiences where the agent remembers, learns, and adapts over time. Memory Bank is ideal for applications that require:
Long-Term Personalization : Build experiences that are tailored to individual users. Memory Bank scopes memories to a specific identity, allowing an agent to remember a user's preferences, history, and key details across multiple sessions.
Example: A customer service agent that remembers key information from a user's past support tickets and product preferences without needing to ask again.
LLM-driven Knowledge Extraction : Use when you need to automatically identify and persist the most important information from conversations or multimodal content without manual intervention.
Example: A research agent that reads a series of technical papers and builds a consolidated memory of key findings, methodologies, and conclusions.
Dynamic & Evolving Context : Use Memory Bank when you need a knowledge source that isn't static. Memory Bank is designed to continuously integrate new information from your agent, refining and updating stored memories as new data becomes available. This ensures the context your agent relies on is always current and accurate. Whereas RAG has a static, external knowledge base, Memory Bank can evolve based on context provided by the agent.
Example usage
You can use Memory Bank with Vertex AI Agent Engine Sessions to generate memories from stored sessions using the following process:
(Sessions) CreateSession : At the start of each conversation, create a new session. The conversation history used by the agent is scoped to this session. A session contains the chronological sequence of messages and actions ( SessionEvents ) for an interaction between a user and your agent. All sessions must have a user ID; the extracted memories (see GenerateMemories ) for this session are mapped to this user.
(Sessions) AppendEvent : As the user interacts with the agent, events (such as user messages, agent responses, tool actions) are uploaded to Sessions. The events persist conversation history and create a record of the conversation that can be used to generate memories.
(Sessions) ListEvents : As the user interacts with the agent, the agent retrieves the conversation history.
(Memory Bank) Generate or create memories:
GenerateMemories : At a specified interval (such as the end of every session or the end of every turn), the agent can trigger memories to be generated using conversation history. Facts about the user are automatically extracted from the conversation history so that they're available for current or future sessions.
CreateMemory : Your agent can write memories directly to Memory Bank. For example, the agent can decide when a memory should be written and what information should be saved (memory-as-a-tool). Use CreateMemory when you want your agent to have more control over what facts are extracted.
(Memory Bank) RetrieveMemories : As the user interacts with your agent, the agent can retrieve memories saved about that user. You can either retrieve all memories (simple retrieval) or only the most relevant memories to the current conversation (similarity search retrieval). Then you can insert the retrieved memories into your prompt.
Quickstarts
Get started with Memory Bank using the following quickstarts:
Quickstart using REST API : Follow the REST API quickstart to make API calls directly to Vertex AI Agent Engine Sessions and Memory Bank.
Quickstart using Agent Development Kit (ADK) : Follow the Agent Development Kit (ADK) quickstart if you want your ADK agent to orchestrate calls to Vertex AI Agent Engine Sessions and Memory Bank for you.
Security risks of prompt injection
In addition to the security responsibilities outlined in Vertex AI shared responsibility , consider the risk of prompt injection and memory poisoning that can affect your agent when using long-term memories. Memory poisoning occurs when false information is stored in Memory Bank. The agent may then operate on this false or malicious information in future sessions.
To mitigate the risk of memory poisoning, you can do the following:
Model Armor : Use Model Armor to inspect prompts being sent to Memory Bank or from your agent.
Adversarial testing : Proactively test your LLM application for prompt injection vulnerabilities by simulating attacks. This is typically known as "red teaming."
Sandbox execution : If the agent has the ability to execute or interact with external or critical systems, these actions should be performed in a sandboxed environment with strict access control and human review.
For more information, see Google's Approach for Secure AI Agents .
What's next
Set up Memory Bank .
Quickstart with Agent Development Kit .
Quickstart with Vertex AI Agent Engine SDK .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
