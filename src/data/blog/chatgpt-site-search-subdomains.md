---
author: Arun Nath J
pubDatetime: 2026-09-19T00:00:00Z
modDatetime: 2026-09-19T00:00:00Z
title: ChatGPT, Site Searches, and the Subdomain Problem
slug: chatgpt-site-search-subdomains
featured: false
draft: false
tags:
  - seo
  - geo
  - technical-seo
  - ai-search
description: ChatGPT can surface pages from subdomains when answering questions about a brand. A real-world crawlability issue shows why AI search visibility may depend on more than just the root domain.
---

## Table of contents

## The strange thing about subdomains

Here's something I've started paying more attention to when testing websites in ChatGPT.

Ask about a company, product, or topic, and sometimes the citation you get isn't from the main website.

It's from a subdomain.

`example.com` might have the product page, but ChatGPT cites `blog.example.com`.

Or `docs.example.com`.

Or `help.example.com`.

At first, that's easy to dismiss as normal search behaviour.

But after seeing it happen repeatedly, there's a more interesting question:

**Does ChatGPT treat the different parts of a website as separate sources when it searches?**

I don't think we have enough evidence to give a definitive answer yet.

But there is enough here to make it a very interesting SEO experiment.

## The `site:` search is where it gets interesting

We've used `site:` searches forever.

```text
site:example.com keyword
```

It's a simple way to look at what a search engine can find within a particular domain.

You can also narrow it down:

```text
site:blog.example.com keyword
```

Now you're looking specifically at the subdomain.

That distinction becomes more interesting in AI search because ChatGPT isn't simply showing you a list of URLs.

It can search the web, retrieve information from different sources, and use those sources to construct an answer.

OpenAI describes ChatGPT Search as a web-search experience that can provide links to relevant sources. It also operates `OAI-SearchBot`, its crawler for search-related content.

So the question isn't just whether a page ranks.

It's whether the page gets **retrieved when the question is asked**.

## I saw this happen with a website

The interesting part came from a real website example.

ChatGPT kept returning a page from a subdomain when answering questions about the main website.

The obvious assumption would be that ChatGPT simply preferred the subdomain.

But there was another problem.

The root domain was accidentally blocking OpenAI's web search crawler.

The subdomain wasn't.

That changes the story.

If the main domain isn't accessible to the crawler, while the subdomain is accessible and contains relevant information, the subdomain becomes a much more obvious source for the search system.

That doesn't prove that ChatGPT prefers subdomains.

It suggests something much simpler:

**If the crawler can't access your best content, another part of your website may end up representing you instead.**

## Crawlability might matter more than we think

This is where AI search starts looking a lot like traditional technical SEO.

We've spent years checking whether Googlebot can crawl important pages.

Now there's another crawler to think about.

OpenAI says publishers who want their content included in ChatGPT Search should allow `OAI-SearchBot`. It also warns that CDN configuration, web protection systems, and bot mitigation can unintentionally block crawlers.

That means a website can have perfectly good content and still have an AI visibility problem because the content isn't accessible.

The problem may not be the content.

It may be the server response.

Or the WAF.

Or `robots.txt`.

Or a CDN rule.

Or something as simple as accidentally blocking the crawler.

## The root domain isn't necessarily the whole website

This is the part I find most interesting from an SEO perspective.

We tend to think about a website as one entity.

But large websites are often fragmented across multiple hosts.

```text
example.com
blog.example.com
docs.example.com
help.example.com
community.example.com
```

Each one can have a completely different content purpose.

The root domain might explain the product.

The blog might explain the category.

The documentation might explain implementation.

The help center might answer troubleshooting questions.

The community might contain the exact experiences people are asking about.

From a brand perspective, they're all the same company.

From a retrieval perspective, they're different URLs and potentially very different sources.

## The same brand can answer different questions from different hosts

Imagine someone asks:

"How does Example work?"

The product page might be the obvious source.

Now change the question:

"How do I implement Example?"

The documentation might be more useful.

Then:

"What are common problems with Example?"

The help center might have the best answer.

And:

"Is Example actually worth using?"

A blog post, review, or community discussion might be more relevant.

This means AI visibility isn't necessarily one big metric.

A company could be highly visible for product questions through its main domain while being almost entirely represented by its blog or documentation for informational searches.

**The host that gets cited can tell you something about the type of information the AI system was looking for.**

## This creates a useful SEO experiment

Instead of asking whether subdomains are "good" or "bad" for AI search, test what actually happens.

Take a topic your website already covers.

Find the different pages and hosts associated with it.

Then build a fixed set of questions around that topic.

For example:

```text
What is Example?

How does Example work?

What are the main features of Example?

How do I set up Example?

What are common problems with Example?

Is Example worth using?
```

Run the same questions through ChatGPT Search.

Record the URLs it cites.

Then separate the results by host.

You might see something like:

```text
example.com
Product questions

blog.example.com
Educational questions

docs.example.com
Implementation questions

help.example.com
Troubleshooting questions
```

That would be far more interesting than simply saying "ChatGPT likes subdomains."

## Then compare root domain and subdomain discovery

You can take the experiment one step further.

Search:

```text
site:example.com topic
```

Then:

```text
site:blog.example.com topic
```

And:

```text
site:docs.example.com topic
```

Compare what is discoverable.

Then compare that against the URLs ChatGPT actually cites.

You're effectively looking at two different things:

**What can be found?**

and

**What gets used?**

Those aren't necessarily the same.

A page can exist and be indexed but still never become a source in the answers you're testing.

## This is where GEO gets very technical

A lot of GEO discussions focus on content.

Write clearer answers.

Build topical authority.

Publish original research.

Get mentioned by relevant sources.

All of that matters.

But there is a less exciting layer underneath it.

Can the system actually reach the page?

OpenAI notes that web coverage can be affected by robots.txt, CDN or bot blocking, dynamic loading, and site structure.

That's basically a technical SEO checklist.

Which means some GEO problems may actually be technical SEO problems with a different symptom.

You aren't losing an AI citation because your content is bad.

You may be losing it because the crawler never got the page.

## But being crawlable doesn't mean being cited

This distinction is important.

Allowing `OAI-SearchBot` doesn't mean ChatGPT will automatically cite your website.

It only makes the content available to be considered.

OpenAI explicitly says that allowing its search crawler does not guarantee inclusion or a particular placement in ChatGPT Search.

So the process is closer to:

```text
Accessible
    ↓
Discoverable
    ↓
Relevant
    ↓
Retrieved
    ↓
Used in the answer
```

Every stage is different.

That is why "we allowed the crawler" isn't the same as "we have AI visibility."

## Could a subdomain actually influence AI visibility?

This is where I would be careful.

I wouldn't claim that subdomains have some special advantage in ChatGPT.

There's no good evidence for that.

But I would absolutely test whether different subdomains develop different citation patterns.

Imagine a company with:

```text
example.com
blog.example.com
docs.example.com
```

Now give each one a clear purpose.

The main domain handles commercial information.

The blog publishes original research and educational content.

The documentation contains detailed technical information.

Then track which host gets cited for different query categories.

If the same patterns keep appearing, you have something useful.

Not a universal ranking factor.

Not a new SEO hack.

Just a better understanding of how AI search retrieves information from a fragmented website.

## Don't turn this into a spam strategy

This is where the idea can get abused very quickly.

Creating ten subdomains and publishing the same article on all ten isn't an experiment.

It's just duplication.

And if one version gets cited, you still won't know why.

Was it the subdomain?

The URL?

The content?

The crawlability?

The internal links?

The authority of the host?

Or simply the particular query?

A useful test needs controlled variables.

The goal isn't to create more places for ChatGPT to find your content.

The goal is to understand **which content gets selected and why**.

## What I would actually measure

If I were running this as an SEO experiment, I wouldn't rely on screenshots of a few interesting answers.

I'd build a small dataset.

For every query, I'd record the date, query, cited URL, host, content type, query category, and whether the citation came from the root domain or a subdomain.

Then I'd group the queries.

Brand.

Informational.

Commercial.

Comparison.

Technical.

Troubleshooting.

After 50 or 100 queries, you might start seeing patterns that aren't obvious from individual searches.

Maybe the root domain dominates brand queries.

Maybe the blog dominates informational queries.

Maybe documentation gets most technical citations.

Maybe everything changes when the root domain becomes inaccessible.

That's the kind of evidence I'd trust more than a single screenshot.

## The bigger question isn't really about subdomains

The interesting part of this isn't whether ChatGPT "likes" subdomains.

It's that AI search changes how we should think about website visibility.

Traditional SEO asks:

"Which page ranks?"

AI search adds another question:

"Which page gets retrieved when someone asks the question?"

Those are related, but they're not identical.

And when a company has five different hosts publishing different types of information, the answer may come from a completely different part of the website than the SEO team expects.

## What this means for technical SEO

If you're doing SEO for a large website, I'd add AI crawler access to the technical checklist.

Check whether `OAI-SearchBot` can reach important pages.

Check `robots.txt`.

Check WAF and CDN rules.

Check HTTP responses.

Check whether bot protection is returning 403 or 429 responses.

Check whether important content depends on JavaScript rendering.

Then look at the subdomains.

Which ones are accessible?

Which ones contain useful content?

Which ones are actually being cited?

That gives you a much clearer picture of what your website looks like from an AI search perspective.

## The experiment I'd run next

Take one topic.

Pick the root domain and one relevant subdomain.

Make sure both are crawlable.

Make sure the content is genuinely useful and not duplicated.

Build 50 queries around the same topic.

Run them consistently.

Track every citation.

Then repeat the test after a few weeks.

If the subdomain keeps appearing, investigate why.

If the root domain appears after fixing crawler access, that's useful evidence too.

And if the results are completely inconsistent, that's useful as well.

At least then you're measuring something instead of guessing.

## The takeaway

I don't think the lesson here is that everyone should create a subdomain for GEO.

That's too simplistic.

The more interesting lesson is that **AI search may expose parts of your website that traditional SEO reporting doesn't make obvious.**

Your blog might be doing more work than your homepage.

Your documentation might be answering questions your product pages never rank for.

Your help center might become the source for problem-focused searches.

And if your main domain accidentally blocks the crawler, a subdomain could end up representing your brand simply because it was accessible.

That's not a subdomain strategy.

It's a reminder that in AI search, **crawlability, content structure, and retrieval are becoming part of the same visibility problem.**

And I think that's worth testing.

## References

- <a href="https://help.openai.com/en/articles/9237897-chatgpt-search" rel="nofollow">OpenAI: Searching the web with ChatGPT</a>
