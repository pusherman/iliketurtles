this.manifest = {
  "name": "i like turtles",
  "icon": "icon128.png",
  "settings": [
    {
      "tab": i18n.get("turtle-sightings"),
      "group": i18n.get("frequency"),
      "name": "frequency",
      "type": "slider",
      "label": i18n.get("sighting-chance"),
      "max": 100,
      "min": 0,
      "step": 1,
      "display": true,
      "displayModifier": function (value) {
        return value + "%";
      }
    },
    {
      "tab": i18n.get("turtle-sightings"),
      "group": i18n.get("speed"),
      "name": "speed",
      "type": "slider",
      "label": i18n.get("speed"),
      "max": 4,
      "min": 1,
      "step": 1,
      "display": true,
      "displayModifier": function (value) {
        return i18n.get("speed-level-" + value)
      }
    }
  ],
  "alignment": [
    [
      "frequency",
      "speed"
    ]
  ]
};
