jQuery("#simulation")
  .on("click", ".s-367d7dab-1c39-42ba-a1d5-68fa48c2068b .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-TextHighlight_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/971139dd-977b-407f-80e7-63e29dc83c71"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-367d7dab-1c39-42ba-a1d5-68fa48c2068b #s-Image_5 > svg": {
                      "attributes": {
                        "overlay": "#007AFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-367d7dab-1c39-42ba-a1d5-68fa48c2068b #s-Image_6 > svg": {
                      "attributes": {
                        "overlay": "#8A8A8F"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-367d7dab-1c39-42ba-a1d5-68fa48c2068b #s-Image_6 > svg": {
                      "attributes": {
                        "overlay": "#007AFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-367d7dab-1c39-42ba-a1d5-68fa48c2068b #s-Image_5 > svg": {
                      "attributes": {
                        "overlay": "#8C8C8C"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-367d7dab-1c39-42ba-a1d5-68fa48c2068b #s-Button": {
                      "attributes": {
                        "font-size": "14.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-367d7dab-1c39-42ba-a1d5-68fa48c2068b #s-Button .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-367d7dab-1c39-42ba-a1d5-68fa48c2068b #s-Button span": {
                      "attributes": {
                        "color": "#80B8F1",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-367d7dab-1c39-42ba-a1d5-68fa48c2068b #s-Button": {
                      "attributes": {
                        "font-size": "14.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-367d7dab-1c39-42ba-a1d5-68fa48c2068b #s-Button .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-367d7dab-1c39-42ba-a1d5-68fa48c2068b #s-Button span": {
                      "attributes": {
                        "color": "#007AFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/971139dd-977b-407f-80e7-63e29dc83c71",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("drag", ".s-367d7dab-1c39-42ba-a1d5-68fa48c2068b .drag", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Ellipse_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Ellipse_6" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "containment": true
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Rectangle_37" ],
                    "width": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMinus",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Ellipse_6",
                          "property": "jimGetPositionX"
                        },"70" ]
                      }
                    },
                    "height": {
                      "type": "noresize"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Ellipse_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Ellipse_7" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "containment": true
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Rectangle_38" ],
                    "width": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMinus",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Ellipse_7",
                          "property": "jimGetPositionX"
                        },"55" ]
                      }
                    },
                    "height": {
                      "type": "noresize"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("dragend", ".s-367d7dab-1c39-42ba-a1d5-68fa48c2068b .drag", function(event, data) {
    jimEvent(event).jimRestoreDrag(jQuery(this));
  })
  .on("dragend", ".s-367d7dab-1c39-42ba-a1d5-68fa48c2068b .drag", function(event, data) {
    jimEvent(event).jimDestroyDrag(jQuery(this));
  });