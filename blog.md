---
layout: default
title: Blog
---

# 📝 Blog
Total blog posts: {{ site.posts | size }}
<ul>
  {% for post in site.posts %}
    <li>{{ post.path }}</li>
  {% endfor %}
</ul>

