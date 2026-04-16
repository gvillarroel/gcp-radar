---
title: "Code review style guide \_|\_ Gemini Code Assist \_|\_ Google for Developers"
url: https://developers.google.com/gemini-code-assist/docs/code-review-style-guide
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/gemini-code-assist/docs/overview
source_metadata:
  url: https://developers.google.com/gemini-code-assist/docs/code-review-style-guide
  title: "Code review style guide \_|\_ Gemini Code Assist \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Gemini Code Assist
Guides
Code review style guide
Stay organized with collections
Save and categorize content based on your preferences.
If you have a custom set of best practices or conventions that you want
Gemini Code Assist on GitHub
to check for or follow when performing a code review, you can add a
styleguide.md Markdown file to the .gemini/ root folder of your repository.
Users of the
enterprise version of
Gemini Code Assist on GitHub can
use the Google Cloud console to add style guide information for
use across multiple repositories.
In both cases, the style guide is treated as a regular Markdown file, and
expands the standard prompt that Gemini Code Assist on
GitHub uses.
Standard code review patterns
When custom style guides aren't specified, these are the main categories of
areas where Gemini Code Assist focuses its code review on:
Correctness : Makes sure the code functions as intended and handles edge
cases, checks for logic errors, race conditions, or incorrect API usage.
Efficiency : Identifies potential performance bottlenecks or areas for
optimization, like excessive loops, memory leaks, inefficient data structures,
redundant calculations, excessive logging, and inefficient string manipulation.
Maintainability : Assesses code readability, modularity, and adherence to
language idioms and best practices. Targets poor naming for variables,
functions, and classes, lack of comments or documentation, complex code, code
duplication, inconsistent formatting, and magic numbers.
Security : Identifies potential vulnerabilities in data handling or input
validation, like insecure storage of sensitive data, injection attacks,
insufficient access controls, Cross-Site Request Forgery (CSRF), and Insecure
Direct Object References (IDOR).
Miscellaneous : Other topics are considered when reviewing the pull
request, like testing, performance, scalability, modularity and reusability, and
error logging and monitoring.
Example style guide
The styleguide.md file does not have a defined schema. Instead, it's a
natural language description of how you want Gemini Code Assist
to structure its code reviews. The following code snippet is an example of a
styleguide.md file:
# Company X Python Style Guide
## Introduction
This style guide outlines the coding conventions for Python code developed at
Company X. It's based on PEP 8, but with some modifications to address
specific needs and preferences within our organization.
## Key Principles
* **Readability:** Code should be easy to understand for all team members.
* **Maintainability:** Code should be easy to modify and extend.
* **Consistency:** Adhering to a consistent style across all projects
improves collaboration and reduces errors.
* **Performance:** While readability is paramount, code should be efficient.
## Deviations from PEP 8
### Line Length
* **Maximum line length:** 100 characters (instead of PEP 8's 79).
* Modern screens allow for wider lines, improving code readability in
many cases.
* Many common patterns in our codebase, like long strings or URLs, often
exceed 79 characters.
### Indentation
* **Use 4 spaces per indentation level.** (PEP 8 recommendation)
### Imports
* **Group imports:**
* Standard library imports
* Related third party imports
* Local application/library specific imports
* **Absolute imports:** Always use absolute imports for clarity.
* **Import order within groups:** Sort alphabetically.
### Naming Conventions
* **Variables:** Use lowercase with underscores (snake_case): `user_name`, `total_count`
* **Constants:** Use uppercase with underscores: `MAX_VALUE`, `DATABASE_NAME`
* **Functions:** Use lowercase with underscores (snake_case): `calculate_total()`, `process_data()`
* **Classes:** Use CapWords (CamelCase): `UserManager`, `PaymentProcessor`
* **Modules:** Use lowercase with underscores (snake_case): `user_utils`, `payment_gateway`
### Docstrings
* **Use triple double quotes (`"""Docstring goes here."""`) for all docstrings.**
* **First line:** Concise summary of the object's purpose.
* **For complex functions/classes:** Include detailed descriptions of
parameters, return values, attributes, and exceptions.
* **Use Google style docstrings:** This helps with automated documentation generation.
```python
def my_function(param1, param2):
"""Single-line summary.
More detailed description, if necessary.
Args:
param1 (int): The first parameter.
param2 (str): The second parameter.
Returns:
bool: The return value. True for success, False otherwise.
Raises:
ValueError: If `param2` is invalid.
"""
# function body here
```
### Type Hints
* **Use type hints:** Type hints improve code readability and help catch
errors early.
* **Follow PEP 484:** Use the standard type hinting syntax.
### Comments
* **Write clear and concise comments:** Explain the "why" behind the code,
not just the "what".
* **Comment sparingly:** Well-written code should be self-documenting where
possible.
* **Use complete sentences:** Start comments with a capital letter and use
proper punctuation.
### Logging
* **Use a standard logging framework:** Company X uses the built-in
`logging` module.
* **Log at appropriate levels:** DEBUG, INFO, WARNING, ERROR, CRITICAL
* **Provide context:** Include relevant information in log messages to aid
debugging.
### Error Handling
* **Use specific exceptions:** Avoid using broad exceptions like `Exception`.
* **Handle exceptions gracefully:** Provide informative error messages and
avoid crashing the program.
* **Use `try...except` blocks:** Isolate code that might raise exceptions.
## Tooling
* **Code formatter:** [Specify formatter, e.g., Black] - Enforces
consistent formatting automatically.
* **Linter:** [Specify linter, e.g., Flake8, Pylint] - Identifies potential
issues and style violations.
Manage style guides across multiple repositories
If you have the
enterprise version of
Gemini Code Assist on GitHub, you can have one style
guide apply to multiple repositories. Repositories are grouped by a
Developer Connect connection, and managing their collective style guide
is accomplished through the Google Cloud console.
If a repository is managed as part of a group but also has its own
styleguide.md file, the repository's styleguide.md is combined with the
group style guide.
The following steps show how users of the enterprise version can control one
style guide across multiple repositories. These steps assume you have previously
set up Gemini Code Assist on GitHub .
Preview
This feature is subject to the "Pre-GA Offerings Terms" in the General
Service Terms section of the
Service Specific Terms for Google Cloud .
Pre-GA features are available "as is" and might have limited support. For
more information, see the
Google Cloud launch stage descriptions .
In the Google Cloud console, go to the Gemini Code Assist
Agents & Tools page.
Go to Agents & Tools
In the Agents section, locate the
Code Assist Source Code Management card, and click Advanced .
The Edit Code Assist Source Code Management pane opens.
In the Connections table, click the name of the connection that you
want to apply a style guide to.
The details page for the connection opens.
In the Style guide tab, add the style guide you want the repositories
associated with this connection to use.
Click Save .
What's next
Modify the configuration
for Gemini Code Assist on GitHub.
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-23 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-23 UTC."],[],[]]
