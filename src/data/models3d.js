export const models3d = {
  "repo": "physicsforge-chapter12",
  "chapterNumber": 12,
  "chapterName": "Atoms",
  "shortName": "Atoms",
  "count": 20,
  "models": [
    {
      "id": "model-01",
      "number": 1,
      "title": "Bohr Orbit Shells",
      "kind": "atom",
      "formula": "rn = n^2 a0",
      "concept": "Allowed electron orbits grow as n squared.",
      "exam": "Orbits are model levels, not classical planetary paths.",
      "labels": [
        "n=1",
        "n=2",
        "electron"
      ],
      "color": "#2563eb"
    },
    {
      "id": "model-02",
      "number": 2,
      "title": "Hydrogen Energy Levels",
      "kind": "energy-level",
      "formula": "En = -13.6/n^2 eV",
      "concept": "Energy levels get closer as n increases.",
      "exam": "Zero energy means ionized electron at infinity.",
      "labels": [
        "ground",
        "excited",
        "ionization"
      ],
      "color": "#b45309"
    },
    {
      "id": "model-03",
      "number": 3,
      "title": "Photon Transition Arrow",
      "kind": "energy-level",
      "formula": "h nu = Ei - Ef",
      "concept": "A photon is emitted when electron falls to lower level.",
      "exam": "Emission requires initial level greater than final level.",
      "labels": [
        "initial",
        "final",
        "photon"
      ],
      "color": "#0f766e"
    },
    {
      "id": "model-04",
      "number": 4,
      "title": "Lyman Series Drop",
      "kind": "energy-level",
      "formula": "nf = 1",
      "concept": "Transitions ending at n=1 form Lyman series.",
      "exam": "Lyman series lies in ultraviolet.",
      "labels": [
        "upper level",
        "n=1",
        "UV photon"
      ],
      "color": "#dc2626"
    },
    {
      "id": "model-05",
      "number": 5,
      "title": "Balmer Series Drop",
      "kind": "energy-level",
      "formula": "nf = 2",
      "concept": "Transitions ending at n=2 form visible Balmer lines.",
      "exam": "Balmer is the most visible NCERT series.",
      "labels": [
        "upper level",
        "n=2",
        "visible photon"
      ],
      "color": "#7c3aed"
    },
    {
      "id": "model-06",
      "number": 6,
      "title": "Paschen Series Drop",
      "kind": "energy-level",
      "formula": "nf = 3",
      "concept": "Transitions ending at n=3 form infrared lines.",
      "exam": "Final level decides series name.",
      "labels": [
        "upper level",
        "n=3",
        "IR photon"
      ],
      "color": "#2563eb"
    },
    {
      "id": "model-07",
      "number": 7,
      "title": "Rydberg Wavelength Lab",
      "kind": "energy-level",
      "formula": "1/lambda = R(1/nf^2 - 1/ni^2)",
      "concept": "Spectral wavelength comes from energy-level difference.",
      "exam": "Use ni greater than nf for emission.",
      "labels": [
        "ni",
        "nf",
        "lambda"
      ],
      "color": "#b45309"
    },
    {
      "id": "model-08",
      "number": 8,
      "title": "Ionization Energy Gate",
      "kind": "photoelectric",
      "formula": "Eion = 13.6/n^2 eV",
      "concept": "Energy needed to remove electron depends on starting level.",
      "exam": "Ground-state hydrogen needs 13.6 eV.",
      "labels": [
        "bound electron",
        "escape",
        "continuum"
      ],
      "color": "#0f766e"
    },
    {
      "id": "model-09",
      "number": 9,
      "title": "Excitation Energy Step",
      "kind": "energy-level",
      "formula": "Delta E = E2 - E1",
      "concept": "Excitation raises electron to a higher allowed level.",
      "exam": "Absorbed photon must match exact energy gap.",
      "labels": [
        "lower level",
        "higher level",
        "absorbed photon"
      ],
      "color": "#dc2626"
    },
    {
      "id": "model-10",
      "number": 10,
      "title": "Angular Momentum Quantization",
      "kind": "phasor",
      "formula": "mvr = nh/2pi",
      "concept": "Only orbits with quantized angular momentum are allowed.",
      "exam": "n is a positive integer.",
      "labels": [
        "orbit",
        "momentum",
        "n h/2pi"
      ],
      "color": "#7c3aed"
    },
    {
      "id": "model-11",
      "number": 11,
      "title": "Nucleus Electron Scale",
      "kind": "atom",
      "formula": "atom mostly empty space",
      "concept": "Small nucleus and extended electron region show atomic scale.",
      "exam": "Atomic radius is much larger than nuclear radius.",
      "labels": [
        "nucleus",
        "electron cloud",
        "empty space"
      ],
      "color": "#2563eb"
    },
    {
      "id": "model-12",
      "number": 12,
      "title": "Rutherford Scattering",
      "kind": "photoelectric",
      "formula": "large angle alpha scattering",
      "concept": "A tiny positive nucleus explains rare large deflections.",
      "exam": "Most alpha particles pass straight through foil.",
      "labels": [
        "alpha beam",
        "gold foil",
        "deflection"
      ],
      "color": "#b45309"
    },
    {
      "id": "model-13",
      "number": 13,
      "title": "Bohr Frequency Condition",
      "kind": "wave",
      "formula": "nu = Delta E/h",
      "concept": "Light frequency is tied to discrete transition energy.",
      "exam": "Frequency, not intensity, sets photon energy.",
      "labels": [
        "Delta E",
        "frequency",
        "photon"
      ],
      "color": "#0f766e"
    },
    {
      "id": "model-14",
      "number": 14,
      "title": "Spectral Line Screen",
      "kind": "interference",
      "formula": "discrete wavelengths",
      "concept": "A line spectrum contains separated wavelengths from atomic transitions.",
      "exam": "Continuous and line spectra are different.",
      "labels": [
        "red line",
        "blue line",
        "dark gaps"
      ],
      "color": "#dc2626"
    },
    {
      "id": "model-15",
      "number": 15,
      "title": "Series Limit Tower",
      "kind": "energy-level",
      "formula": "ni tends to infinity",
      "concept": "Series limit is reached as the initial level approaches infinity.",
      "exam": "It gives maximum photon energy for a series.",
      "labels": [
        "upper levels",
        "limit",
        "nf"
      ],
      "color": "#7c3aed"
    },
    {
      "id": "model-16",
      "number": 16,
      "title": "Ground State Stability",
      "kind": "atom",
      "formula": "lowest energy state",
      "concept": "The ground state is the most stable bound state.",
      "exam": "Electron does not radiate in stationary Bohr orbit.",
      "labels": [
        "ground orbit",
        "stable",
        "no radiation"
      ],
      "color": "#2563eb"
    },
    {
      "id": "model-17",
      "number": 17,
      "title": "Absorption Spectrum Model",
      "kind": "energy-level",
      "formula": "missing wavelengths",
      "concept": "Atoms absorb photons matching their energy gaps.",
      "exam": "Absorption lines occur at same energies as emission transitions.",
      "labels": [
        "white light",
        "atom gas",
        "dark line"
      ],
      "color": "#b45309"
    },
    {
      "id": "model-18",
      "number": 18,
      "title": "Emission Spectrum Model",
      "kind": "energy-level",
      "formula": "bright wavelengths",
      "concept": "Excited atoms emit specific photon energies.",
      "exam": "Different atoms have different spectral fingerprints.",
      "labels": [
        "excited gas",
        "emitted photon",
        "bright line"
      ],
      "color": "#0f766e"
    },
    {
      "id": "model-19",
      "number": 19,
      "title": "Hydrogen Atom Dashboard",
      "kind": "atom",
      "formula": "Bohr postulates",
      "concept": "The dashboard combines orbit radius, energy and transitions.",
      "exam": "Use one n value consistently across formulas.",
      "labels": [
        "radius",
        "energy",
        "transition"
      ],
      "color": "#dc2626"
    },
    {
      "id": "model-20",
      "number": 20,
      "title": "Atomic Formula Cube",
      "kind": "default",
      "formula": "r, E, lambda, L",
      "concept": "Core atom formulas fit together through quantum number n.",
      "exam": "Most errors come from mixing initial and final levels.",
      "labels": [
        "rn",
        "En",
        "lambda"
      ],
      "color": "#7c3aed"
    }
  ]
}
