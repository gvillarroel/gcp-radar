---
title: "Generators \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/generators
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/generators
  title: "Generators \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Some products and features are in the process of being renamed. Generative playbook and flow features are also being migrated to a single consolidated console. See the details .
Home
Documentation
AI and ML
Dialogflow
Dialogflow CX
Send feedback
Generators
Stay organized with collections
Save and categorize content based on your preferences.
Note: The Generators feature is excluded from the Dialogflow CX
SLA .
Generators use Google's latest generative large language models (LLMs), and
prompts that you provide, to generate agent behavior and responses at runtime.
The available models are provided by Vertex AI .
A Generator lets you make a call to an LLM natively from Dialogflow CX
without needing to create your own external webhook. You can configure the
generator to do anything you would normally ask an LLM to do.
Generators are great at tasks like summarization, parameter extraction, data
transformations, and so on, see examples below .
Limitations
This feature is available for agents in any Dialogflow CX language, although
the available models might have more restrictive language limitations.
See Vertex AI for more
information.
Understand generator concepts
The Vertex AI documentation
contains information that is important to understand when creating generators
for Dialogflow CX:
Models ( Google foundation
models and Model versions and
lifecycle )
Prompts
Controls (called "parameter values" in Vertex AI)
Define a generator
To create a generator:
Go to the Dialogflow CX console .
Select your Google Cloud project.
Select the agent.
Click the Manage tab.
Click Generators .
Click Create new .
Enter a descriptive display name for the generator.
Enter the text prompt, model, and controls as described in
concepts .
Click Save .
Note: If you have entered any
banned phrases
for use with
generative fallback ,
those banned phrases will affect all generators as well.
The text prompt is sent to the generative model during fulfillment at runtime.
It should be a clear question or request in order for the model to generate a
satisfactory response.
You can make the prompt contextual by marking words as placeholders by adding a
$ before the word. You can later associate these generator prompt
placeholders with session parameters in fulfillment and they are replaced by
the session parameter values during execution.
Define a generator
There are special generator prompt placeholders that don't need to be
associated with session parameters. These built-in generator prompt
placeholders are
Term
Definition
$conversation
The conversation between the agent and the user, excluding the very last user utterance and the agent's utterances thereafter.
$last-user-utterance
The last user utterance.
Use a generator in fulfillment
Note: You can add several generators in one fulfillment, which are executed
in parallel.
You can use generators during fulfillment (in Routes ,
Event-handlers ,
Parameters and more).
Go to the Generators section of the Fulfillment pane and expand it.
Then, click Add generator . Now you can select a predefined generator or
define a new generator in place.
After selecting a generator, you need to associate the generator prompt
placeholders of the prompt with session parameters. To do this, you need to
define the output parameter that will contain the result of the generator
after execution. Enter a name
for the output parameter in the Output parameters field, for example
things-to-do . This output parameter will be written to a session parameter
that you can reference in the future.
You can then use the output parameter to reference the generator result later
on, for example in the agent response:
I'd recommend doing $session.params.things-to-do .
For more information about parameter format and usage, see the
parameters documentation.
Test a generator
The generator feature can be directly tested in the simulator.
Test the generator in simulator
Examples
This section provides example use cases for generators. Because generators
are a generative technology based on large language models (LLMs), your
individual results from using the following example prompts might be different
from the output documented here. All prompt results returned by Google are
best-effort.
Content summarization
This example shows how to summarize content.
Prompt:
Your goal is to summarize a given text.
Text:
$text
A concise summary of the text in 1 or 2 sentences is:
Conversation summarization
This example shows how to provide a conversation summary.
Prompt:
You are an expert at summarizing conversations between a User and an Agent.
When providing the summary, always start with "Dear $email_address, the conversation summary is as follows:"
Provide a summary in a few bullet points.
Try to be as brief as possible with each bullet point,
only noting the key points of the conversation.
Output the summary in markdown format.
Conversation:
$conversation
Summary:
Resolved prompt:
For an example conversation, the resolved prompt that is sent to the generative
model could be:
You are an expert at summarizing conversations between a User and an Agent.
When providing the summary, always start with "Dear joe@example.com conversation summary is as follows:"
Provide a summary in a few bullet points.
Try to be as brief as possible with each bullet point,
only noting the key points of the conversation.
Output the summary in markdown format.
Conversation:
Agent: Good day! What can I do for you today?
User: Hi, which models can I use in Dialogflow CX's generators?
Agent: You can use all models that Vertex AI provides!
User: Thanks, thats amazing!
Summary:
Markdown formatting
This example shows how to format text in markdown.
# Instructions
You are presented with a text and your goal is to apply markdown formatting to text.
**NOTE:** Do not change the meaning of the text, only the formatting.
# Example
## Text
Generators allow you to use Googles latest generative models to format text,
or to create a summaries, or even to write code. What an amazing feature.
## Text in Markdown
*Generators* allow you to use Google's latest generative models to
* format text
* create a summaries
* write code
What an amazing feature.
# Your current task
## Text
$text
## Text in Markdown
Question answering
This series of examples shows how to use generators to answer questions.
First, you can simply rely on the internal knowledge of the generative model to
answer the question. Note however, that the model will simply provide an answer
based on information that was part of its training data. There is no guarantee
that the answer is true or up-to-date.
Prompt for question answering with self-knowledge
Your goal is to politely reply to a human with an answer to their question.
The human asked:
$last-user-utterance
You answer:
Prompt for question answering with provided information
However, if you want the model to answer based on information you provide, you
can simply add it to the prompt. This works if there is not too much information
you want to provide (e.g. a small restaurant menu or contact information of your
company).
# Instructions
Your goal is to politely answer questions about the restaurant menu.
If you cannot answer the question because it's not related to the restaurant
menu or because relevant information is missing from the menu, you politely
decline to answer.
# Restaurant menu:
## Starters
Salat 5$
## Main dishes
Pizza 10$
## Desserts
Ice cream 2$
# Examples
Question: How much is the pizza?
Answer: The pizza is 10$.
Question: I want to order the ice cream.
Answer: We do have ice cream! However, I can only answer questions about the menu.
Question: Do you have spaghetti?
Answer: I'm sorry, we do not have spaghetti on the menu.
# Your current task
Question: $last-user-utterance
Answer:
Prompt for question answering with dynamic provided information
Often, the information you want the model to base its answer on is too much to
simply be pasted into the prompt. In this case you can connect the generator to
an information retrieval system like a database or a search engine, to
dynamically retrieve the information based on a query. You can simply save the
output of that system into a parameter and connect it to a placeholder in the
prompt.
# Instructions
Your goal is to politely answer questions based on the provided information.
If you can't answer the question given the provided information, you politely
decline to answer.
# Provided information:
$information
Question: $last-user-utterance
Answer:
Code generation
This example shows how to use a generator to write code! Note that here it makes
sense to use a generative model that was specifically trained to generate code.
Prompt
# Instructions:
Your goal is to write code in a given programming language solving a given problem.
Problem to solve:
$problem
Programming language:
$programming-language
# Solution:
Escalation to a human agent
This example shows how to handle escalation to a human agent. The final two
instructions in the prompt prevent the model from being too verbose.
Prompt:
# Instructions:
You are a polite customer service agent that handles requests
from users to speak with an operator.
Based on the $last-user-utterance,
respond to the user appropriately about their request to speak with an operator.
Always be polite and assure the user that you
will do your best to help their situation.
Do not ask the user any questions.
Do not ask the user if there is anything you can do to help them.
# Answer:
Search query generation
This example shows how to optimize a Google Search query provided by the user.
Prompt:
# Instructions:
You are an expert at Google Search and using "Google Fu"
to build concise search terms that provide the highest quality results.
A user will provide an example query,
and you will attempt to optimize this to be the best Google Search query possible.
# Example:
User: when was covid-19 first started and where did it originated from?
Agent: covid-19 start origin
# Your task:
User: $text
Agent:
Customer information retrieval
This example shows how to perform information retrieval and search data provided
in string or JSON format. These formats are commonly used by Dialogflow CX session
parameters.
Prompt:
You are a database engineer and specialize in extracting information
from both structured and unstructured data formats like CSV, SQL, JSON,
and also plain text.
Given a $user_db, extract the information requested
by the user from the $last-user-utterance
EXAMPLE:
user_db: {'customer_name': 'Patrick', 'balance': '100'}
User: What is my current account balance?
Agent: Your current balance is 100.
Begin!
user_db: $user_db
User: $last-user-utterance
Agent:
Updating a JSON object
This example shows how to accept an input JSON object from the user (or
webhook), then manipulate the object based on the user's request.
Prompt:
You are an expert Software Engineer
that specializes in the JSON object data structure.
Given some user $update_request and existing $json_object,
you will modify the $json_object based on the user's $update_request.
EXAMPLE:
json_object = { "a": 1, "b": 123 }
User: Add a new key/value pair to my JSON
Agent: What do you want to add?
User: c: cat
Agent: { "a": 1, "b": 123, "c": "cat"}
json_object = {"accounts": [{"username": "user1", "account_number": 12345}, {"username": "user2", "account_number": 98765}], "timestamp": "2023-05-25", "version":"1.0"}
User: Add a new value for user1
Agent: What do you want to add?
User: birthday, 12/05/1982
Agent: {"accounts": [{"username": "user1", "account_number": 12345, "birthday": "12/05/1982"}, {"username": "user2", "account_number": 98765}], "timestamp": "2023-05-25", "version":"1.0"}
json_object = $json_object
User: Add a new key value to my db
Agent: What do you want to add?
User: $last-user-utterance
Agent:
Codelab
Also see the Generators
Codelab .
Troubleshooting
If you want to debug the feature, you can inspect the resolved large language
model (LLM) input prompt in Dialogflow Console simulator:
Click the original response button:
Locate the "Generators LLM Inputs" field. Read these fields as plain
text and check whether the LLM input makes sense. If any phrase contains
$ , examine the simulator input and clarify whether the $ in the prompts
are intentional (for example, $ in price is $10 would likely be
intentional, while visit $city would likely not and could imply either
mis-usage or a bug).
If you can't see the "Generative LLM Inputs" field,
contact Support .
Previous
arrow_back
Webhooks
Next
Generative fallback
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
