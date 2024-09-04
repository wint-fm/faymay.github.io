---
layout: landing
title: FayMay Profiles
description: ""
image: assets/images/banner10.jpeg
nav-menu: true
---

<div id="main">
    <section id="one">
        <div class="inner">
            <header class="major">
                <h2>{% t profile.header %}</h2>
            </header>
            <p>{% t profile.welcome_message %}</p>
            <ol>
                {% for request in site.translations[site.lang].profile.fan_requests %}
                    <li>{{ request }}</li>
                {% endfor %}
            </ol>
        </div>
    </section>
    <section id="two">
		<div class="image">
            <img src="{{ 'assets/images/fmprofileimg.jpeg' | relative_url }}" alt="FayMay Profile" data-position="top center">
        </div>
	</section>
    <section id="three" class="spotlights">
        <section>
            <div class="image">
                <img src="{{ 'assets/images/fay.jpeg' | relative_url }}" alt="Fay" data-position="top center">
            </div>
            <div class="content">
                <div class="inner">
                    <header class="major">
                        <h2 style="color: #87CEFA;">{% t global.fay_name %}</h2>
                    </header>
                    <p>
                        {% for item in site.translations[site.lang].profile.fay %}
                            <strong>{{ item[0] | capitalize | replace: "_", " " }}:</strong> {{ item[1] }}<br>
                        {% endfor %}
                    </p>
                </div>
            </div>
        </section>
        <section>
            <div class="image">
                <img src="{{ 'assets/images/may.jpeg' | relative_url }}" alt="Fay" data-position="top center">
            </div>
            <div class="content">
                <div class="inner">
                    <header class="major">
                        <h2 style="color: #FF1493;">{% t global.may_name %}</h2>
                    </header>
                    <p>
                        {% for item in site.translations[site.lang].profile.may %}
                            <strong>{{ item[0] | capitalize | replace: "_", " " }}:</strong> {{ item[1] }}<br>
                        {% endfor %}
                    </p>
                </div>
            </div>
        </section>
    </section>
</div>