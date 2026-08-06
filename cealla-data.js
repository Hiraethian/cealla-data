/* ==========================================================
   CEALLA — SHARED DATA
   Single source of truth for the hex map page and the
   environment index page. Host this file in a public GitHub
   repo and both pages load it via jsDelivr:

     <script src="https://cdn.jsdelivr.net/gh/USER/REPO@main/cealla-data.js"></script>

   After editing on GitHub, jsDelivr can take up to 12h to
   refresh its cache. Force it immediately by visiting:

     https://purge.jsdelivr.net/gh/USER/REPO@main/cealla-data.js

   ----------------------------------------------------------
   ENTRY FIELDS
   name       required. Display name.
   slug       links to linkBase + slug on both pages.
   kind       city / town / settlement / fangyskyll / litri /
              ruin / wild / sea — drives the map legend + badges.
   col, row   hex grid position (0-indexed). An entry WITH
              col/row lights up as a written hex on the map.
              An entry WITHOUT them appears only in the index.
   px, py     optional symbol position in native image pixels
              (4961x3508) — reference values for every named
              location are in cealla_marker_coords.js.

   Daggerheart stat block (all optional, skipped when absent):
   tier         1–4
   envType      "Event" / "Exploration" / "Social" / "Traversal"
   flavor       italic scene-setting line
   impulses     string
   difficulty   number
   adversaries  string
   features     [ { name, type ("Action"/"Passive"/"Reaction"),
                    text (inline <b> allowed) } ]
   ========================================================== */

window.CEALLA_DATA = {

  linkBase: "/lore/",
  mapPage: "/testhex",

  /* ----------------------------------------------------------
     ADVERSARIES — consumed by the adversary index page.
     Fields (all optional except name):
       name, slug, tier (1-4)
       advType    Bruiser / Horde / Leader / Minion / Ranged /
                  Skulk / Social / Solo / Standard / Support
       flavor     italic descriptive line
       motives    "Motives & Tactics" string
       difficulty number
       thresholds "8/15"  (Major/Severe)  — omit for Minions
       hp, stress numbers
       atk        "+2"    attack modifier
       attack     { name, range, damage }
       experience "Intimidation +2, Tracking +1"
       features   [ { name, type, text } ]   type: Action /
                  Reaction / Passive / Horde / Minion / Relentless
     ---------------------------------------------------------- */
  adversaries: [

    { name: "Example Adversary", slug: "example-adversary",
      tier: 1,
      advType: "Standard",
      flavor: "One italic line describing what this thing looks like.",
      motives: "Motive one, motive two, motive three",
      difficulty: 11,
      thresholds: "8/15",
      hp: 5, stress: 3, atk: "+2",
      attack: { name: "Rusted Blade", range: "Melee", damage: "1d8+2 phy" },
      experience: "Scavenging +2",
      features: [
        { name: "Feature Name", type: "Action",
          text: "Effect text. Inline <b>bold</b> is allowed for keywords." }
      ] },

    { name: "Example Minion", slug: "example-minion",
      tier: 1,
      advType: "Minion",
      flavor: "A weaker thing that shows up in groups.",
      motives: "Swarm, overwhelm",
      difficulty: 9,
      hp: 1, stress: 1, atk: "+1",
      attack: { name: "Claw", range: "Melee", damage: "2 phy" },
      features: [
        { name: "Minion", type: "Passive",
          text: "This adversary is defeated when it takes any damage. For every 2 damage a PC deals, defeat an additional Minion within range." }
      ] },

  ],

  entries: [

    /* -------- placeholder entries — replace with your own -------- */

    { name: "Example Environment One", slug: "example-one",
      kind: "town", col: 20, row: 13,
      tier: 1,
      envType: "Event",
      flavor: "One italic line of scene-setting goes here.",
      impulses: "First impulse, second impulse",
      difficulty: 11,
      adversaries: "Adversary A, Adversary B",
      features: [
        { name: "Feature Name", type: "Action",
          text: "Effect text. Inline <b>bold</b> is allowed for keywords." },
        { name: "Second Feature", type: "Passive",
          text: "More effect text describing an ongoing condition." }
      ] },

    { name: "Example Environment Two", slug: "example-two",
      kind: "city",            /* no col/row: index-only entry */
      tier: 2,
      envType: "Exploration",
      flavor: "A second placeholder so the filters have something to do.",
      impulses: "Third impulse, fourth impulse",
      difficulty: 14,
      adversaries: "Adversary C",
      features: [
        { name: "Only Feature", type: "Reaction",
          text: "Triggered effect text." }
      ] },

  ]
};
