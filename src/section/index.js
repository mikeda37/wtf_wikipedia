const Section = require('./Section');
const find_recursive = require('../lib/recursive_match');
const isReference = /^(references?|einzelnachweise|referencias|références|notes et références|脚注|referenser|bronnen|примечания):?/i; //todo support more languages

//interpret ==heading== lines
const parse = {
  heading: require('./heading'),
  list: require('./list'),
  image: require('../image'),
  interwiki: require('./interwiki'),
  table: require('../table'),
  references: require('./references'),
  templates: require('../templates'),
  paragraphs: require('../paragraph'),
  xmlTemplates: require('./xml-templates'),
  eachSentence: require('../sentence').eachSentence
};
const section_reg = /[\n^](={1,5}[^=]{1,200}?={1,5})/g;

const doSection = function(section, wiki, options) {
  wiki = parse.xmlTemplates(section, wiki, options);
  // //parse the <ref></ref> tags
  wiki = parse.references(section, wiki, options);
  //parse-out all {{templates}}
  wiki = parse.templates(section, wiki, options);
  // //parse the tables
  wiki = parse.table(section, wiki);
  // //parse the lists
  wiki = parse.list(section, wiki);
  // //parse+remove scary '[[ [[]] ]]' stuff
  //second, remove [[file:...[[]] ]] recursions
  let matches = find_recursive('[', ']', wiki);
  wiki = parse.image(matches, section, wiki, options);
  wiki = parse.interwiki(matches, section, wiki, options);

  parse.paragraphs(section, wiki);
  // wiki = parse.eachSentence(section, wiki);
  section = new Section(section, wiki);
  return section;
};

//we re-create this in html/markdown outputs
const removeReferences = function(sections) {
  return sections.filter((s, i) => {
    if (isReference.test(s.title()) === true) {
      if (s.paragraphs().length > 0) {
        return true;
      }
      //what it has children? awkward
      if (sections[i + 1] && sections[i + 1].depth > s.depth) {
        sections[i + 1].depth -= 1; //move it up a level?...
      }
      return false;
    }
    return true;
  });
};

const splitSections = function(wiki, options) {
  let split = wiki.split(section_reg); //.filter(s => s);
  let sections = [];
  for (let i = 0; i < split.length; i += 2) {
    let heading = split[i - 1] || '';
    let content = split[i] || '';
    let section = {
      title: '',
      depth: null,
      templates: []
    };
    //figure-out title/depth
    section = parse.heading(section, heading);
    //parse it up
    section = doSection(section, content, options);
    sections.push(section);
  }
  //remove empty references section
  sections = removeReferences(sections);

  return sections;
};

module.exports = splitSections;
