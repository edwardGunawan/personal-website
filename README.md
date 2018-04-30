# Personal Website v2

Hello! Thanks for checking out this repo for my latest portfolio website. This website is not just my new portfolio, but also personal website and about me.

## What I used
- [Atom](https://atom.io/) - editor
- [SweetScroll](https://tsuyoshiwada.github.io/sweet-scroll/) - for scrolling down pages
- [jekyll](https://jekyllrb.com/) - static Site generator
- [github pages](https://pages.github.com/) - easy push to deploy hosting
-  [Sass](http://sass-lang.com/) - more modular css
-  [Scroll Reveal](https://scrollrevealjs.org/) - easy scroll animation
- [Site map generator](https://www.xml-sitemaps.com/)

#  How to Run the Development(Local) push to Production
- git clone https://github.com/edwardGunawan/personal-website.git my_site
- run **jekyll serve --config "_config.yml,_config_dev.yml"**
- change something on `_config_dev.yml`
- copy paste to `_config.yml`
- git push origin master
- git checkout gh-pages // go to gh-pages branch
- git rebase master // bring gh-pages up to date with master
- git push origin gh-pages // commit the changes
- git checkout master // return to master branch
- [keep gh-pages up to date with master](https://gist.github.com/mandiwise/44d1edce18f2ffb14f63)


Let me know what you think!
