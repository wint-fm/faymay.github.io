---
title: Ongoing Votings
layout: landing
description: ""
image: assets/images/banner5.jpeg
nav-menu: true
---

<!-- Main -->
<div id="main">
    <section id="one">
        <div class="inner">
            <header class="major">
                <h2>{% t voting.title %}</h2>
            </header>
            <p>{% t voting.description %}</p>
            <ol>
                {% for instruction in site.translations[site.lang].voting.instructions %}
                    <li>{{ instruction }}</li>
                {% endfor %}
            </ol>
        </div>
    </section>
    <section id="two" class="spotlights">
        <section>
            <div class="image">
                <img src="{{ 'assets/images/votestarlight.png' | relative_url }}" alt="starlight" data-position="center center">
            </div>
            <div class="content">
                <div class="inner">
                    <header class="major">
                        <h3>{% t voting.starlight_award.title %}</h3>
                    </header>
                    <p>{% t voting.starlight_award.description %} <a href="https://www.starlightawards.asia/vote">{% t common.vote_for_them %}</a></p>
                </div>
            </div>
        </section>
        <section>
            <div class="image">
                <img src="{{ 'assets/images/votethaiupdate.png' | relative_url }}" alt="thaiupdate" data-position="center center">
            </div>
            <div class="content">
                <div class="inner">
                    <header class="major">
                        <h3>{% t voting.thai_update_award.title %}</h3>
                    </header>
                    <p>{% t voting.thai_update_award.description %} <a href="https://www.thaiupdate.info/favorite-couple-2024-group-3/">{% t common.vote_for_them %}</a></p>
                </div>
            </div>
        </section>
    </section>
</div>