clinical:glass-ui
===============================

Generally inspried by the [Day Made of Glass](https://www.youtube.com/watch?v=jzLYh3j6xn8) videos.  Currently, this package only contains a ``.less`` stylesheet that's focused on haptics (big buttons), multi-device accessibility (media states), and transparency effects.  

**IMPORTANT:  Version 2.0 has moved to React.**  


==================================
### API



#### GlassCard

  id:               PropTypes.string
  backgroundColor:  PropTypes.string
  style:            PropTypes.object
  blur:             PropTypes.bool
  height:           PropTypes.string
  width:            PropTypes.string
  onClick:          PropTypes.func
  zDepth:           PropTypes.number
  boxShadow:        PropTypes.string
  footer:           PropTypes.object
  overflowY:        PropTypes.string


_height_  
- auto
Sizes the card automatically, depending if Navbars are displayed.  Approximately the screen height minus 160 pixesl or so.

- tabpanel
The same as auto, but calculated with a tab bar.  Viewport height minus 220px or so.  

==================================
#### Architectural Roadmap

This is going to become a meta-package, and incorporate a number of other animation packages.  We're currently looking at the following packages to add into the Glass UI.  

-[ ] animate.js
-[ ] mrt:jquery-easing
-[ ] glass:jss
-[ ] percolate:momentum
-[ ] wenape:fview-infinitescrollview
-[ ] pierreeric:fview-sliddeck
-[ ] pierreeric:fview-kenburns
-[ ] oorabona:fview-boxlayout


==================================
#### Google Glass

There's a slight API conflict with the Google Glass project.  I'd be perfectly willing to consider adding Google Glass APIs, and to consider this package as a sort of generalized 'Augmented Reality UI'.  Just be aware that even though it's called 'Glass UI', it's originally focused on Day Made of Glass UI, rather than Google Glass UI.  

==================================
#### Licensing  

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
