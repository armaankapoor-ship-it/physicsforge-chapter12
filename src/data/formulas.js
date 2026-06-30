export const formulas = [
  {
    "id": "closest",
    "title": "Closest Approach",
    "formula": "K = k(2e)(Ze)/r_min",
    "display": "K = k(2e)(Ze)/r_min",
    "symbols": [
      [
        "K",
        "initial kinetic energy",
        "J"
      ],
      [
        "Z",
        "atomic number",
        "unitless"
      ]
    ],
    "meaning": "Energy conservation in head-on alpha scattering.",
    "dimension": "J",
    "graph": "Higher K gives smaller r_min.",
    "trap": "Head-on only.",
    "easyExample": "Easy example: substitute correctly in K = k(2e)(Ze)/r_min after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Energy conservation in head-on alpha scattering.\".",
    "jeeExample": "JEE Main pattern: combine K = k(2e)(Ze)/r_min with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Head-on only."
  },
  {
    "id": "bohr-quant",
    "title": "Bohr Quantization",
    "formula": "mvr = n h/(2pi)",
    "display": "mvr = n h/(2pi)",
    "symbols": [
      [
        "n",
        "principal quantum number",
        "1,2,3..."
      ]
    ],
    "meaning": "Allowed angular momentum.",
    "dimension": "J s",
    "graph": "L proportional n.",
    "trap": "n starts from 1.",
    "easyExample": "Easy example: substitute correctly in mvr = n h/(2pi) after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Allowed angular momentum.\".",
    "jeeExample": "JEE Main pattern: combine mvr = n h/(2pi) with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: n starts from 1."
  },
  {
    "id": "radius",
    "title": "Bohr Radius",
    "formula": "r_n = n^2 a0",
    "display": "r_n = n^2 a0",
    "symbols": [
      [
        "a0",
        "Bohr radius",
        "0.529 angstrom"
      ]
    ],
    "meaning": "Hydrogen radius grows as n squared.",
    "dimension": "m",
    "graph": "r-n graph is quadratic.",
    "trap": "Hydrogen only unless Z included.",
    "easyExample": "Easy example: substitute correctly in r_n = n^2 a0 after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Hydrogen radius grows as n squared.\".",
    "jeeExample": "JEE Main pattern: combine r_n = n^2 a0 with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Hydrogen only unless Z included."
  },
  {
    "id": "energy",
    "title": "Hydrogen Energy",
    "formula": "E_n = -13.6/n^2 eV",
    "display": "E_n = -13.6/n^2 eV",
    "symbols": [
      [
        "E_n",
        "energy of level",
        "eV"
      ]
    ],
    "meaning": "Bound-state energy of hydrogen.",
    "dimension": "eV",
    "graph": "Energy approaches zero from below.",
    "trap": "Energy is negative.",
    "easyExample": "Easy example: substitute correctly in E_n = -13.6/n^2 eV after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Bound-state energy of hydrogen.\".",
    "jeeExample": "JEE Main pattern: combine E_n = -13.6/n^2 eV with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Energy is negative."
  },
  {
    "id": "transition",
    "title": "Transition Energy",
    "formula": "hf = E_i - E_f",
    "display": "hf = E_i - E_f",
    "symbols": [
      [
        "hf",
        "photon energy",
        "J/eV"
      ]
    ],
    "meaning": "Photon energy equals level difference.",
    "dimension": "J",
    "graph": "Bigger jump, higher frequency.",
    "trap": "Emission requires Ei > Ef.",
    "easyExample": "Easy example: substitute correctly in hf = E_i - E_f after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Photon energy equals level difference.\".",
    "jeeExample": "JEE Main pattern: combine hf = E_i - E_f with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Emission requires Ei > Ef."
  },
  {
    "id": "rydberg",
    "title": "Rydberg Formula",
    "formula": "1/lambda = R(1/n_f^2 - 1/n_i^2)",
    "display": "1/lambda = R(1/n_f^2 - 1/n_i^2)",
    "symbols": [
      [
        "R",
        "Rydberg constant",
        "m^-1"
      ],
      [
        "nf,ni",
        "final and initial levels",
        "unitless"
      ]
    ],
    "meaning": "Hydrogen spectral wavelengths.",
    "dimension": "m^-1",
    "graph": "Series depends on nf.",
    "trap": "ni > nf for emission.",
    "easyExample": "Easy example: substitute correctly in 1/lambda = R(1/n_f^2 - 1/n_i^2) after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Hydrogen spectral wavelengths.\".",
    "jeeExample": "JEE Main pattern: combine 1/lambda = R(1/n_f^2 - 1/n_i^2) with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: ni > nf for emission."
  },
  {
    "id": "lyman",
    "title": "Lyman Series",
    "formula": "n_f = 1",
    "display": "n_f = 1",
    "symbols": [
      [
        "nf",
        "final level",
        "1"
      ]
    ],
    "meaning": "Transitions ending at ground state.",
    "dimension": "series",
    "graph": "UV series.",
    "trap": "Final level names series.",
    "easyExample": "Easy example: substitute correctly in n_f = 1 after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Transitions ending at ground state.\".",
    "jeeExample": "JEE Main pattern: combine n_f = 1 with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Final level names series."
  },
  {
    "id": "balmer",
    "title": "Balmer Series",
    "formula": "n_f = 2",
    "display": "n_f = 2",
    "symbols": [
      [
        "nf",
        "final level",
        "2"
      ]
    ],
    "meaning": "Transitions ending at second level.",
    "dimension": "series",
    "graph": "Visible series.",
    "trap": "Not all Balmer lines visible to eye.",
    "easyExample": "Easy example: substitute correctly in n_f = 2 after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Transitions ending at second level.\".",
    "jeeExample": "JEE Main pattern: combine n_f = 2 with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Not all Balmer lines visible to eye."
  },
  {
    "id": "paschen",
    "title": "Paschen Series",
    "formula": "n_f = 3",
    "display": "n_f = 3",
    "symbols": [
      [
        "nf",
        "final level",
        "3"
      ]
    ],
    "meaning": "Infrared hydrogen series.",
    "dimension": "series",
    "graph": "Longer wavelengths than Balmer.",
    "trap": "Final level 3.",
    "easyExample": "Easy example: substitute correctly in n_f = 3 after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Infrared hydrogen series.\".",
    "jeeExample": "JEE Main pattern: combine n_f = 3 with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Final level 3."
  },
  {
    "id": "ionization",
    "title": "Ionization Energy",
    "formula": "E_ion = 13.6/n^2 eV",
    "display": "E_ion = 13.6/n^2 eV",
    "symbols": [
      [
        "n",
        "initial level",
        "unitless"
      ]
    ],
    "meaning": "Energy needed to remove electron from level n.",
    "dimension": "eV",
    "graph": "Ionization energy decreases with n.",
    "trap": "Positive energy required.",
    "easyExample": "Easy example: substitute correctly in E_ion = 13.6/n^2 eV after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Energy needed to remove electron from level n.\".",
    "jeeExample": "JEE Main pattern: combine E_ion = 13.6/n^2 eV with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Positive energy required."
  },
  {
    "id": "lines",
    "title": "Number of Spectral Lines",
    "formula": "N = n(n-1)/2",
    "display": "N = n(n-1)/2",
    "symbols": [
      [
        "N",
        "number of lines",
        "count"
      ]
    ],
    "meaning": "Possible downward transitions among n levels.",
    "dimension": "count",
    "graph": "Quadratic count.",
    "trap": "Assumes all transitions occur.",
    "easyExample": "Easy example: substitute correctly in N = n(n-1)/2 after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Possible downward transitions among n levels.\".",
    "jeeExample": "JEE Main pattern: combine N = n(n-1)/2 with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Assumes all transitions occur."
  },
  {
    "id": "hydrogen-like-energy",
    "title": "Hydrogen-like Energy",
    "formula": "E_n = -13.6 Z^2/n^2 eV",
    "display": "E_n = -13.6 Z^2/n^2 eV",
    "symbols": [
      [
        "Z",
        "nuclear charge number",
        "unitless"
      ]
    ],
    "meaning": "One-electron ion energy.",
    "dimension": "eV",
    "graph": "Energy scales as Z squared.",
    "trap": "Only hydrogen-like ions.",
    "easyExample": "Easy example: substitute correctly in E_n = -13.6 Z^2/n^2 eV after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"One-electron ion energy.\".",
    "jeeExample": "JEE Main pattern: combine E_n = -13.6 Z^2/n^2 eV with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Only hydrogen-like ions."
  },
  {
    "id": "hydrogen-like-radius",
    "title": "Hydrogen-like Radius",
    "formula": "r_n = n^2 a0/Z",
    "display": "r_n = n^2 a0/Z",
    "symbols": [
      [
        "Z",
        "atomic number",
        "unitless"
      ]
    ],
    "meaning": "One-electron ion radius.",
    "dimension": "m",
    "graph": "Radius shrinks with Z.",
    "trap": "Only one-electron species.",
    "easyExample": "Easy example: substitute correctly in r_n = n^2 a0/Z after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"One-electron ion radius.\".",
    "jeeExample": "JEE Main pattern: combine r_n = n^2 a0/Z with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Only one-electron species."
  }
]

export const formulaGroups = [
  {
    "title": "Rutherford model",
    "formulas": [
      "closest",
      "bohr-quant",
      "radius",
      "energy",
      "transition"
    ]
  },
  {
    "title": "Bohr postulates",
    "formulas": [
      "rydberg",
      "lyman",
      "balmer",
      "paschen",
      "ionization"
    ]
  },
  {
    "title": "Hydrogen spectrum",
    "formulas": [
      "lines",
      "hydrogen-like-energy",
      "hydrogen-like-radius"
    ]
  },
  {
    "title": "Series",
    "formulas": []
  }
]

