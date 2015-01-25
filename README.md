xml-slideshow
=============

Write your slideshow in semantic xml and transform it to a nice html presenation.

This project was created as a school project (Web publishing course) at [FIIT](http://fiit.stuba.sk).

> [Generated slideshow demo](http://patrikgallik.sk/fiit/xml-slideshow/)

Xslt processor is required, for example [saxon](http://saxon.sourceforge.net/). You can download Saxon [here](http://sourceforge.net/projects/saxon/). When saxon (or so) is downloaded, run this command:

```
java -jar <path to saxon> presentation.xml to_html.xml > presentation.html
```

for example

```
java -jar /Development/Saxon/SaxonHE9-6-0-4J/saxon9he.jar presentation.xml to_html.xml > presentation.html
```

The run the generated presentation, open presentation.html in your browser (chrome). Keep in mind that assets folder must be included in the directory to make it work.