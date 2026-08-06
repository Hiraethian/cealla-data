
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
