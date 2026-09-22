---
layout: default
title: De Afgrond
breadcrumb: De Afgrond
description: Een netwerk van mensen, organisaties en ideeën.
lang: nl
translation_key: the-abyss-home
permalink: /nl/de-afgrond/
---

# De Afgrond

Een overzicht van mensen, organisaties en netwerken die desinformatie, complottheorieën, extreemrechts gedachtegoed en meer verspreiden - als onderzoek voor *De Afgrond*, een toekomstige dramaserie.

{% assign people = site.abyss | where: "lang", "nl" | where: "type", "person" | sort: "title" %}
{% assign organizations = site.abyss | where: "lang", "nl" | where: "type", "organization" | sort: "title" %}
{% assign topics = site.abyss | where: "lang", "nl" | where: "type", "topic" | sort: "title" %}
{% assign events = site.abyss | where: "lang", "nl" | where: "type", "event" | sort: "title" %}

{% if people.size > 0 %}
## Personen

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
## Organisaties

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
## Onderwerpen

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
## Gebeurtenissen

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