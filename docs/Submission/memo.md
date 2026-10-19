# Submission Memo

The existing documentation is a good starting point, but needs refinement in a few main, large impact areas:

1. Add additional content to address missing and unclear descriptions of webhooks and how to implement them
2. Resolve conflicts and ambiguities in the webhook behavior, particularly surrounding the new v2 release
3. Organize content around the developer's workflow. A new structure will address problems in the support tickets and a developer's experience instead of organizing the page based on isolated technical topics.

:::note

As I was working, I identified further questions and comments in footnotes[^1] of [Webhooks Documentation](webhooks-v2). In a live environment, these would be discussed in parking lot, over Slack, or through PR comments. 

:::

[^1] Footnote content is at the bottom of the page! 

## Approach

Here are a few thoughts on how I run documentation programs to ensure that situations like this don't occur again. 

1. **Ownership**: A documentation program needs to have specific roles, and each role owns a specific part of the documentation cycle. One person may have multiple roles, but each one needs to be fulfilled to succeed. It is up to the lead to define what success means for the docs and ensure everything is on track. For example:

    - Manager/Lead: Ensures a high quality deliverable, efficient systems, and impactful customer experiences. Signs off on publishing.
    - Writer: Authors coherant, accurate, professional, friendly content 
    - SME/Engineer: Reviews content for contextual accuracy, missing details, or obsolete information
    - Docs Engineer: Develops the systems that the documentation is authored, stored, hosted, and published

2. **Collaboration**: The technical writer (or team) _must_ have visibility into the development cycle and priorities. By participating in standups and status updates, reaching out for help, and reviewing upcoming release goals, the technical writer (me) will build trust with the engineering team to keep things moving smoothly. This also goes for other departments - working with Marketing on promoting new features, PMO on aligning documentation and engineering deliverables, QA on reporting and repro'ing bugs. 

3. **Standard Procedures and Styles Guides**: Ensuring that folks are familiar with  the logistics of how the documentation program is run ensures consistency, improves communication, and drives everyone to the same goal of quality documentation. 

4. **Keywords and Taxonomy**: Honestly, I didn't have time to add a lot of metadata and taxonomy to this exercise. But adding keywords, a site map, and a defined structure to the docs will help train AIs, improve discoverability, and collect valuable data on where we can improve. 

5. **The role of AI**: AI is a helpful tool! Drafting documentation, summarizing meeting notes or conversations, validating against a style guide, reviewing content - these are all places where AI can help streamline the documentation lifecycle. 

### List of Tools Used

| Tool | Description | 
| --- | --- | 
| [GitHub](https://github.com) | Stores source files for final docs website submission | 
| [GitHub Pages](https://pages.github.com) | Hosts final assignment website
| [Docusaurus](https://docusaurus.io) | Builds docs website from GitHub's repository files |
| [VS Code](https://code.visualstudio.com) | Code editor with debugger for managing source files | 
| [ChatGPT](https://chatgpt.com) | Image creation, summarization of supporting materials, recommending fixes to structure, content, and formatting <br /><br />Specific prompts included: <br />- Here is a draft version of webhook documentation. List recommendations for improving it, including structure, content accuracies/consistency, tone, and format.<br />- Review the attached runbook, release notes, and live documentation site and identify any discrepancies between them.<br />- Summarize the following developer chat from Slack. <br /><br />All recommendations and returned data were reviewed manually against the source material for accuracy.|
