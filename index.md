---
layout: home
title: Home
lang: en
nav-menu: true
carousel_images:
  - url: assets/images/portrait1.jpeg
    alt: Portrait 1
  - url: assets/images/portrait2.jpeg
    alt: Portrait 2
  - url: assets/images/portrait3.jpeg
    alt: Portrait 3
  - url: assets/images/portrait4.jpeg
    alt: Portrait 4
  - url: assets/images/portrait5.jpeg
    alt: Portrait 5
  - url: assets/images/portrait6.jpeg
    alt: Portrait 6
  - url: assets/images/portrait7.jpeg
    alt: Portrait 7
  - url: assets/images/portrait8.jpeg
    alt: Portrait 8
  - url: assets/images/portrait9.jpeg
    alt: Portrait 9
  - url: assets/images/portrait10.jpeg
    alt: Portrait 10
  - url: assets/images/portrait11.jpeg
    alt: Portrait 11
  - url: assets/images/portrait12.jpeg
    alt: Portrait 12
  - url: assets/images/portrait13.jpeg
    alt: Portrait 13
  - url: assets/images/portrait14.jpeg
    alt: Portrait 14
  - url: assets/images/portrait15.jpeg
    alt: Portrait 15
  - url: assets/images/portrait16.jpeg
    alt: Portrait 16
  - url: assets/images/portrait17.jpeg
    alt: Portrait 17
  - url: assets/images/portrait18.jpeg
    alt: Portrait 18
  - url: assets/images/banner1.jpeg
    alt: Banner 1
  - url: assets/images/banner2.jpeg
    alt: Banner 2
  - url: assets/images/banner3.jpeg
    alt: Banner 3
  - url: assets/images/banner4.jpeg
    alt: Banner 4
  - url: assets/images/banner5.jpeg
    alt: Banner 5
  - url: assets/images/banner6.jpeg
    alt: Banner 6
  - url: assets/images/banner7.jpeg
    alt: Banner 7
  - url: assets/images/banner8.jpeg
    alt: Banner 8
  - url: assets/images/banner9.jpeg
    alt: Banner 9
  - url: assets/images/banner10.jpeg
    alt: Banner 10
  - url: assets/images/banner11.jpeg
    alt: Banner 11
  - url: assets/images/banner12.jpeg
    alt: Banner 12
  - url: assets/images/banner13.jpeg
    alt: Banner 13
  - url: assets/images/banner14.jpeg
    alt: Banner 14
  - url: assets/images/banner15.jpeg
    alt: Banner 15
  - url: assets/images/banner16.jpeg
    alt: Banner 16
  - url: assets/images/banner17.jpeg
    alt: Banner 17
  - url: assets/images/banner18.jpeg
    alt: Banner 18
  - url: assets/images/square1.jpeg
    alt: Square Image 1
  - url: assets/images/square2.jpeg
    alt: Square Image 2
  - url: assets/images/square3.jpeg
    alt: Square Image 3
  - url: assets/images/square4.jpeg
    alt: Square Image 4
---


{% assign actress_description = site.translations[site.lang].home.actress_description %}
{% assign series_description = site.translations[site.lang].home.series_description %}

{% assign fay_name = site.translations[site.lang].global.fay_name %}
{% assign may_name = site.translations[site.lang].global.may_name %}
{% assign idol_factory = site.translations[site.lang].global.idol_factory %}
{% assign couple_name = site.translations[site.lang].global.couple_name %}
{% assign series_name = site.translations[site.lang].global.series_name %}
{% assign dreamgl = site.translations[site.lang].global.dreamgl %}
{% assign dream_the_series = site.translations[site.lang].global.dream_the_series %}

<!-- Create links dynamically -->
{% assign fay_link = '<a href="https://www.instagram.com/fay_riezz/">' | append: fay_name | append: '</a>' %}
{% assign may_link = '<a href="https://www.instagram.com/maywyda/">' | append: may_name | append: '</a>' %}
{% assign series_link = '<a href="https://youtube.com/playlist?list=PL4D0KlUVq4IyWIZVo-oo-rvYWPxX3WVn6&si=clukGQqa4Wdv9lgv">' | append: series_name | append: '</a>' %}

<!-- Replace placeholders with links -->
{% assign actress_description = actress_description | replace: "{fay_name}", fay_link %}
{% assign actress_description = actress_description | replace: "{may_name}", may_link %}
{% assign actress_description = actress_description | replace: "{idol_factory}", idol_factory %}
{% assign actress_description = actress_description | replace: "{couple_name}", couple_name %}

{% assign series_description = series_description | replace: "{series_name}", series_link %}
{% assign series_description = series_description | replace: "{dreamgl}", dreamgl %}
{% assign series_description = series_description | replace: "{dream_the_series}", dream_the_series %}

{% assign combined_description = actress_description | append: " " | append: series_description %}

<p>{{ combined_description | markdownify }}</p>

<ul class="actions">
  <li>
    <!-- Construct a dynamic link to the translated profile page -->
    <!-- Check if the current language is 'en' -->
    {% if page.lang == "en" %}
      <!-- Link to the profile page in the root for English -->
      <a href="{{ site.baseurl }}/1_profile/index.html" class="button next">
        {% t common.get_to_know_more %}
      </a>
    {% else %}
      <!-- Link to the translated profile page for other languages -->
      <a href="{{ site.baseurl }}/{{ page.lang }}/1_profile/index.html" class="button next">
        {% t common.get_to_know_more %}
      </a>
    {% endif %}
  </li>
</ul>
