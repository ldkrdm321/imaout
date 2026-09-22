---
layout: default
title: The Abyss
breadcrumb: The Abyss
description: Mapping people, organizations and networks spreading disinformation, conspiracy theories, far-right extremism and more.
lang: en
translation_key: the-abyss-home
permalink: /the-abyss/
---

# The Abyss

Mapping people, organizations and networks spreading disinformation, conspiracy theories, far-right extremism and more — as research for *The Abyss*, a future drama series.

{% assign people = site.abyss | where: "lang", "en" | where: "type", "person" | sort: "title" %}
{% assign organizations = site.abyss | where: "lang", "en" | where: "type", "organization" | sort: "title" %}
{% assign topics = site.abyss | where: "lang", "en" | where: "type", "topic" | sort: "title" %}
{% assign events = site.abyss | where: "lang", "en" | where: "type", "event" | sort: "title" %}

{% if people.size > 0 %}
## People

<ul class="abyss-index">
{% for entry in people %}
    <li>
        <a href="{{ entry.url | relative_url }}">{{ entry.title }}</a>
        {% if entry.description %}
            <span>— {{ entry.description }}</span>
        {% endif %}
    </li>
{% endfor %}
</ul>
{% endif %}

{% if organizations.size > 0 %}
## Organizations

<ul class="abyss-index">
{% for entry in organizations %}
    <li>
        <a href="{{ entry.url | relative_url }}">{{ entry.title }}</a>
        {% if entry.description %}
            <span>— {{ entry.description }}</span>
        {% endif %}
    </li>
{% endfor %}
</ul>
{% endif %}

{% if topics.size > 0 %}
## Topics

<ul class="abyss-index">
{% for entry in topics %}
    <li>
        <a href="{{ entry.url | relative_url }}">{{ entry.title }}</a>
        {% if entry.description %}
            <span>— {{ entry.description }}</span>
        {% endif %}
    </li>
{% endfor %}
</ul>
{% endif %}

{% if events.size > 0 %}
## Events

<ul class="abyss-index">
{% for entry in events %}
    <li>
        <a href="{{ entry.url | relative_url }}">{{ entry.title }}</a>
        {% if entry.description %}
            <span>— {{ entry.description }}</span>
        {% endif %}
    </li>
{% endfor %}
</ul>
{% endif %}