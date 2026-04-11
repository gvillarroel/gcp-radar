---
title: "Develop an agent \_|\_ Vertex AI Agent Builder \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/agent-builder/agent-engine/develop/overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity
source_metadata:
  url: https://docs.cloud.google.com/agent-builder/agent-engine/develop/overview
  title: "Develop an agent \_|\_ Vertex AI Agent Builder \_|\_ Google Cloud Documentation"
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
Develop an agent
Stay organized with collections
Save and categorize content based on your preferences.
Overview
To use Vertex AI Agent Engine, you must first develop an agent that can be deployed on Vertex AI Agent Engine. The easiest way to develop an agent is to use one of the framework-specific templates that we provide. Framework-specific templates automatically handle some of the common aspects of developing an agent such as serializing objects and separating the code that initializes an agent from the code that responds to prompts. We provide the following framework-specific templates:
Framework
Description
Agent Development Kit
Designed based on Google's internal best practices for developers building AI applications or teams needing to rapidly prototype and deploy robust agent-based solutions.
Agent2Agent (preview)
The Agent2Agent (A2A) protocol is an open standard designed to enable seamless communication and collaboration between AI agents.
LangChain
Easier to implement for basic use cases because of its predefined configurations and abstractions.
LangGraph
Graph-based approach to defining workflows, with advanced human-in-the-loop and rewind/replay capabilities.
AG2 (formerly AutoGen)
AG2 provides multi-agent conversation framework as a high-level abstraction for building LLM workflows.
LlamaIndex (preview)
LlamaIndex's query pipeline offers a high-level interface for creating Retrieval-Augmented Generation (RAG) workflows.
If your use case doesn't align with one of the framework-specific templates, you can develop your own custom agent .
Agent2Agent (A2A) protocol
If you are building a multi-agent system, we highly recommend reviewing the A2A Protocol . A2A Protocol is an open standard that enables seamless communication and collaboration between AI agents, regardless of their underlying frameworks. It was donated by Google Cloud to the Linux Foundation in June 2025 . To use the A2A SDKs, or try out the samples, check out the GitHub repository .
What's next
Develop a custom agent .
Evaluate an agent .
Deploy an agent .
Get support .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
