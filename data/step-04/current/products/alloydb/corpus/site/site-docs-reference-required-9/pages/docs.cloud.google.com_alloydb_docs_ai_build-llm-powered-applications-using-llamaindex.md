---
title: "Build LLM-powered applications using LlamaIndex \_|\_ AlloyDB for PostgreSQL\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/ai/build-llm-powered-applications-using-llamaindex
knowledge_key: corpus
source_id: site-docs-reference-required-9
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/ai/build-llm-powered-applications-using-llamaindex
  title: "Build LLM-powered applications using LlamaIndex \_|\_ AlloyDB for PostgreSQL\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Guides
Send feedback
Build LLM-powered applications using LlamaIndex
Stay organized with collections
Save and categorize content based on your preferences.
Preview
— AlloyDB for PostgreSQL
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
You can process personal data for
this feature
as outlined in the
Cloud Data
Processing Addendum , subject to the obligations and restrictions described in the
agreement under which you access Google Cloud.
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This page describes some use cases for building LLM-powered applications
using LlamaIndex integrated with AlloyDB for PostgreSQL.
Links to notebooks on GitHub are provided to help you explore approaches or to help
you develop your application.
LlamaIndex is a generative AI orchestration framework that lets you connect
and integrate data sources with large language models (LLMs). You can use
LlamaIndex to build applications that access and query information from private
or domain-specific data using natural language queries.
LlamaIndex acts as a bridge between custom data and LLMs, facilitating the
development of knowledge assistant applications with retrieval-augmented
generation (RAG) capabilities.
LlamaIndex is well suited for document-centric applications because it
emphasizes structured document management, which simplifies indexing and
retrieval. This framework features optimized query mechanisms that enhance the
speed and relevance of information access, along with robust metadata handling
for nuanced filtering.
For more information about the LlamaIndex framework, see the LlamaIndex product documentation .
LlamaIndex components
AlloyDB offers the
following LlamaIndex interfaces:
Vector Store
Document Store
Index Stores
Chat Stores
Document Reader
Learn how to use LlamaIndex with the
Quickstart for AlloyDB .
Vector Store
This LlamaIndex integration lets you use the robust and scalable nature of
AlloyDB
to store and manage your LlamaIndex data. By
combining LlamaIndex's indexing and querying capabilities with
AlloyDB's high performance and reliability, you can build
more efficient and scalable LLM-powered applications.
LlamaIndex breaks down a document —doc, text, and PDFs— into document
components called nodes . The VectorStore
can only contain the embedding vectors of ingested node contents and the text of
nodes. A node, which is a first class concept, contains text content, vector
embeddings, and metadata. You can apply filters on these metadata fields to
restrict node retrieval to those that match specified metadata criteria.
To work with vector stores in
AlloyDB, use the
AlloyDBVectorStore class.
For more information, see LlamaIndex
Vector Stores .
Store vector embeddings with the AlloyDBVectorStore class
The AlloyDB
notebook for vector store shows you how to do the following:
Initialize a table to store vector embeddings
Create an embedding class instance using any Llama
Index embeddings model .
Initialize a default AlloyDBVectorStore vector store.
Create and query an index from the vector store by using VectorStoreIndex .
Create a custom Vector Store to effectively store and filter metadata.
Add an ANN index to improve search latency.
Document and Index Stores
LlamaIndex Document Stores integration manages structured document storage
and retrieval, optimizing for LlamaIndex document-centric capabilities. Document
Store stores the content related to the vectors in the vector store.
For more information, see the LlamaIndex
Document Stores product documentation.
Index Stores facilitate the management of indexes to enable rapid querying
and data retrieval, for example, summary, keyword, and Tree index.
Index in LlamaIndex is a lightweight storage only for the node
metadata. Updates to node metadata don't require re-indexing (read embedding
generation) of the full node or all nodes in a document.
For more information, see LlamaIndex
Index Stores .
Store documents and indexes
The AlloyDB
notebook for Document Stores shows you how to use AlloyDB to store documents and indexes using the
AlloyDBDocumentStore and AlloyDBIndexStore classes.
You learn how to do the following:
Create an AlloyDBEngine using
AlloyDBEngine.from_instance() .
Create tables for the DocumentStore and IndexStore.
Initialize a default AlloyDBDocumentStore .
Set up an AlloyDBIndexStore .
Add documents to the Docstore .
Use Document Stores with multiple indexes.
Load existing indexes.
Chat Stores
Chat Stores maintain conversation history and context for chat-based
applications, enabling personalized interactions. Chat Stores provide a central
repository that stores and retrieves chat messages within a conversation,
allowing the LLM to maintain context and provide more relevant responses based
on the ongoing dialog.
Large language models are stateless by default, which means that they don't
retain previous inputs unless those inputs are explicitly provided each time. By
using a chat store, you can preserve the context of the conversation, which lets
the model generate more relevant and coherent responses over time.
The memory module in LlamaIndex enables efficient storage and retrieval of
conversational context, allowing for more personalized and context-aware
interactions in chat applications. You can integrate the memory module in
LlamaIndex with a ChatStore
and a ChatMemoryBuffer.
For more information, see LlamaIndex
Chat Stores .
Store chat history
The AlloyDB
notebook for Chat Stores shows you how to use AlloyDB for
PostgreSQL to store chat history using the AlloyDBChatStore
class. You learn how to do the following:
Create a AlloyDBEngine using
AlloyDBEngine.from_instance() .
Initialize a default AlloyDBChatStore .
Create a ChatMemoryBuffer .
Create an LLM class instance.
Use the AlloyDBChatStore without a storage context.
Use the AlloyDBChatStore with a storage context.
Create and use the Chat Engine.
Document Reader
Document Reader efficiently retrieves and transforms data from
AlloyDB
into LlamaIndex-compatible
formats for indexing. The Document Reader interface provides methods to load
data from a source as Documents . Document
is a class that stores a piece of text and associated metadata. You can use
Document Readers to load documents that you want to store in Document Stores or
used to create Indexes.
For more information, see LlamaIndex
Document Reader .
Retrieve data as documents
The AlloyDB
notebook for Document Reader shows you how to use AlloyDB to retrieve data as documents using the
AlloyDBReader class. You learn how to do the following:
Create an AlloyDBEngine using
AlloyDBEngine.from_instance() .
Create AlloyDBReader .
Load Documents using the table_name argument.
Load Documents using a SQL query.
Set page content format.
Load the documents.
What's next
Build
LLM-powered applications using LangChain .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
