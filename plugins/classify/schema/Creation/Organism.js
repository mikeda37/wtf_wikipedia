export default {
  name: 'Organism',
  //
  children: {},
  properties: {
    // taxonomy: () => {},
    // members: () => {},
  },
  //
  categories: {
    mapping: [
      'taxa named by carl linnaeus',
      'ornamental trees',
      'birds by common name',
      'living fossils',
      'taxa named by john edward gray',
      'phelsuma',
      'multituberculates',
      'angiosperm orders',
      'cimolodonts',
      'urban animals',
      'flowers',
      'geckos',
      'herbs',
      'spices',
      'skinks',
      'cretaceous mammals',
      'commercial fish',
      'paleocene mammals',
      'bird families',
      'edible nuts and seeds',
      'invasive plant species',
      'leaf vegetables',
      'root vegetables',
      'corvus (genus)',
      'insects in culture',
      'ducks',
      'agamidae',
      'edge species',
      'tropical fruit',
      'pinus',
      'tropical agriculture',
      'indian spices',
      'paleocene genus extinctions',
      'epiphytic orchids',
      'crops',
      'fruits originating in asia',
      'calidris',
      'ptilodontoids',
      'plants and pollinators',
      'mammal families',
      'marine edible fish',
      'taxa named by leopold fitzinger',
      'setophaga',
      'shorebirds',
      'berries',
      'megafauna',
      'animal dance',
      'animal phyla',
      'american inventions',
      'entheogens',
      'crops originating from the americas',
      'non-timber forest products',
      'geese',
    ],
    patterns: [
      /(funghi|reptiles|flora|fauna|fish|birds|trees|mammals|plants) of ./,
      / first appearances/,
      / . described in [0-9]{4}/,
      /. (phyla|genera)$/,
      /. taxonomic families$/,
      /plants used in ./,
      / (funghi|reptiles|flora|fauna|fish|birds|trees|mammals|plants)$/,
    ],
  },
  //
  descriptions: {
    patterns: [],
  },
  //
  infoboxes: {
    mapping: [
      'speciesbox',
      'automatic taxobox',
      'dogbreed',
      'dog breed',
      'cat breed',
      'grape variety',
      'taxobox',
      'subspeciesbox',
      'mycomorphbox',
      'paraphyletic group',
      'nutritional value',
      'infraspeciesbox',
      'horse',
      'haplogroup',
      'bird',
      'bird/population',
      'medical resources',
      'nc name',
      'pig breed',
      'botanical product',
      'cattle breed',
      'horse breed',
      'poultry breed',
    ],
    patterns: [],
  },
  //
  sections: {
    mapping: [
      'habitat',
      'morphology',
      'phylogeny',
      'distribution and diversity',
      'distribution and habitat',
      'reproduction and development',
      'taxonomy and phylogeny',
    ],
    patterns: [],
  },
  //
  templates: {
    mapping: [
      'taxonbar',
      'wikispecies',
      'animalia',
      'chordata',
      'cnidaria',
      'porifera',
      'epicaridea',
      'mammals',
      'phlyctaeniidae',
      'carnivora',
      'clade',
      'life on earth',
      'orders of insects',
      'coleoptera',
      'insects in culture',
      'living things in culture',
      'eukaryota classification',
      'iucn status',
      'extinct',
      'fossil range',
      'internetbirdcollection',
      'vireo',
      'angle bracket',
      'wikispecies-inline',
      'iucn map',
      'xeno-canto species',
      'avibase',
      'cladex',
      'birdlife',
      'fossilrange',
    ],
    patterns: [],
  },
  //
  titles: {
    mapping: ['plant', 'genus', 'fish', 'bird'],
    patterns: [],
  },
}
