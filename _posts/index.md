---
layout: default
title: Blog
---

# 📝 Blog

Here’s a list of all my blog posts — creative prompts, tech ideas, side project updates, and more.

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <small>— {{ post.date | date: "%B %-d, %Y" }}</small>
    </li>
  {% endfor %}
</ul>
