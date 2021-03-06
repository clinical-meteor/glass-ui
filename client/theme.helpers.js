Template.registerHelper("isDarkroom", function (){
  if (Session.get('isDarkroomMode')) {
    return "darkroomTheme";
  }
});


Template.registerHelper("getThemeStyle", function (){

  var backgroundColor = "";
  if (Session.equals('foregroundTheme', 'light')) {
    //light theme
    backgroundColor = "255, 255, 255";
  } else {
    //dark theme
    backgroundColor = "128, 128, 128";
  }

  if (typeof ActiveLayout === "object") {
    backgroundColor = ActiveLayout.getPageColor();
  }

  if (Session.equals('foregroundTheme', 'light')) {
    //light theme
    return "color: black; background-color: rgba(" + backgroundColor + "," + Session.get("glassOpacity") + ");";
  } else {
    //dark theme
    return "color: white; background-color: rgba(" + backgroundColor + "," + Session.get("glassOpacity") + ");";
  }
});
