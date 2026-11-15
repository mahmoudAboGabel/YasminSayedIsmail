export const unit = {
  title: "Support and Movement in Plants and Humans",
  cognitive: [
    "Distinguish physiological support from structural support in plants.",
    "Identify the bones and regions of the human axial and appendicular skeleton.",
    "Explain the types of plant movement and the role of hormones such as auxin.",
    "Describe the sliding filament mechanism of muscle contraction.",
  ],
  affective: [
    "Appreciate how structure fits function in living organisms.",
    "Value care for bones and muscles through exercise and balanced nutrition.",
    "Show curiosity and respect for plant life and its responses to the environment.",
  ],
  psychomotor: [
    "Label diagrams of the skeleton, sarcomere and plant tissues accurately.",
    "Observe cytoplasmic streaming in Elodea under a microscope.",
    "Design a simple experiment to test phototropism or geotropism.",
  ],
};

export const lessons = [
  {
    id: 1,
    icon: "Leaf",
    title: "Plant Support",
    tagline: "How plants stand tall without a skeleton.",
    objectives: [
      "Differentiate physiological from structural support.",
      "Explain the role of turgor pressure in herbaceous plants.",
      "Describe the function of cellulose, lignin, cutin and suberin.",
    ],
    sections: [
      {
        h: "Structural support",
        text: "Structural support is permanent and relies on the deposition of rigid or waterproof substances on or within plant cell walls. This gives tissues high tensile strength and elasticity to withstand wind, gravity, and mechanical stress.",
        items: [
          [
            "Cellulose",
            "A complex carbohydrate forming the main framework of primary cell walls in parenchyma and collenchyma. It provides flexibility and high resistance to stretching.",
          ],
          [
            "Lignin",
            "A hard, complex polymer deposited on secondary cell walls of sclerenchyma (fibres and stone cells) and xylem vessels. It makes walls rigid and waterproof; mature lignified cells are dead.",
          ],
          [
            "Cutin",
            "A waxy, waterproof lipid deposited on the outer walls of epidermal cells to form the cuticle, preventing excessive water loss by transpiration.",
          ],
          [
            "Suberin",
            "An impermeable fatty substance deposited in cork cell walls (periderm) and the root endodermis (Casparian strip) to seal and protect older stems and roots.",
          ],
        ],
        media: {
          label: "Diagram: Plant supporting tissues & wall substances",
          src: "/images/Gemini_Generated_Image_77og7f77og7f77og.jpeg",
          type: "image",
        },
      },
      {
        h: "Physiological support",
        text: "Physiological support is temporary because it depends on water availability. Water enters the cell sap vacuole by osmosis, causing the vacuole to swell and push the cytoplasm outward against the elastic cell wall. This internal hydrostatic pressure (turgor pressure) keeps herbaceous stems and leaves firm and upright. When the plant loses more water than it absorbs, turgor pressure drops, the vacuole shrinks, and the plant wilts.",
        items: [
          [
            "Turgid cell",
            "High water content; swollen central vacuole presses tightly against the cell wall, giving rigidity.",
          ],
          [
            "Flaccid / Wilted cell",
            "Water loss reduces vacuole volume and wall tension, causing soft green shoots to droop.",
          ],
        ],
        media: {
          label: "Diagram: Turgid vs. flaccid plant cell",
          src: "/images/images (13).jpeg",
          type: "image",
        },
      },
      {
        h: "Video: Plant Support Mechanisms",
        text: "Watch how osmotic water uptake and specialized cell walls work together to keep plants upright.",
        media: {
          label: "Plant support mechanism",
          src: "https://www.youtube.com/embed/lC79x4c_dm4?si=imYrzmee_x_rRmmj",
          type: "youtube",
        },
      },
    ],
    pretest: [
      { q: "What happens to a non-woody plant that loses water?", options: ["It grows taller", "It wilts", "It makes more lignin", "It turns woody"], answer: 1, why: "Loss of water lowers turgor pressure, so soft tissues go limp." },
      { q: "Which tissue carries water up the stem?", options: ["Phloem", "Xylem", "Epidermis", "Cork"], answer: 1, why: "Xylem conducts water and minerals from roots to leaves." },
      { q: "What is the main job of the plant cell wall?", options: ["Make ATP", "Store DNA", "Give shape and protection", "Absorb light"], answer: 2, why: "The wall shapes the cell and resists bursting." },
    ],
    quiz: [
      { q: "Which force keeps herbaceous plant cells firm?", options: ["Gravity", "Turgor pressure", "Osmosis in roots only", "Transpiration"], answer: 1, why: "Water pressing the cytoplasm against the wall is turgor pressure." },
      { q: "Which substance forms the waxy cuticle?", options: ["Cutin", "Lignin", "Suberin", "Cellulose"], answer: 0, why: "Cutin is deposited on the outer epidermal wall." },
      { q: "Which substance makes sclerenchyma and xylem walls rigid?", options: ["Pectin", "Cutin", "Lignin", "Starch"], answer: 2, why: "Lignin hardens and waterproofs the wall." },
      { q: "Suberin is found in the walls of which cells?", options: ["Guard cells", "Cork cells", "Root hairs", "Palisade cells"], answer: 1, why: "Cork cells are impregnated with suberin." },
      { q: "The primary cell wall is mainly made of:", options: ["Lignin", "Suberin", "Protein", "Cellulose"], answer: 3, why: "Cellulose microfibrils form the primary wall." },
    ],
  },
  {
    id: 2,
    icon: "Bone",
    title: "Human Support: The Skeletal System",
    tagline: "206 bones that shape, protect and move the body.",
    objectives: [
      "Divide the skeleton into axial and appendicular parts.",
      "Name the main bones of the skull, vertebral column and thoracic cage.",
      "Distinguish tendons from ligaments.",
    ],
    sections: [
      {
        h: "Axial skeleton (80 bones)",
        text: "Forms the central longitudinal axis of the body. It supports the head, neck, and trunk, and encloses vital organs such as the brain, spinal cord, heart, and lungs.",
        items: [
          [
            "Skull (22 bones)",
            "Divided into the cranium (8 interlocking bones joined at serrated sutures to protect the brain) and the facial skeleton (14 bones forming the jaws, orbits, and nasal cavity), plus 6 ear ossicles and the hyoid bone.",
          ],
          [
            "Vertebral column (33 vertebrae / 26 bones)",
            "Acts as the main weight-bearing pillar and protects the spinal cord: 7 cervical (neck), 12 thoracic (chest), 5 lumbar (largest, lower back), 5 fused sacral (sacrum), and 4 fused coccygeal (coccyx).",
          ],
          [
            "Thoracic cage (25 bones)",
            "Composed of 12 pairs of curved ribs (7 true, 3 false, 2 floating) attached posteriorly to thoracic vertebrae and anteriorly to the flat sternum, enabling breathing movements.",
          ],
        ],
        media: {
          label: "Diagram: Axial skeleton (Skull, Vertebral Column, Thoracic Cage)",
          src: "/images/Gemini_Generated_Image_6qysaw6qysaw6qys.jpeg",
          type: "image",
        },
      },
      {
        h: "Appendicular skeleton (126 bones)",
        text: "Consists of the upper and lower limbs along with the shoulder and hip girdles that anchor them to the axial skeleton, enabling locomotion and manipulation.",
        items: [
          [
            "Pectoral (shoulder) girdle",
            "Two clavicles (collarbones) and two triangular scapulae (shoulder blades); provides a shallow glenoid cavity for wide arm mobility.",
          ],
          [
            "Pelvic girdle",
            "Two hip bones (each formed by fused ilium, ischium, and pubis) joined anteriorly at the pubic symphysis; supports upper body weight and houses the deep acetabulum socket.",
          ],
          [
            "Upper limb (30 bones each)",
            "Humerus (upper arm), radius and ulna (forearm), 8 carpals (wrist), 5 metacarpals (palm), and 14 phalanges (fingers).",
          ],
          [
            "Lower limb (30 bones each)",
            "Femur (longest/strongest bone), patella (kneecap), tibia and fibula (lower leg), 7 tarsals (ankle, including the heel calcaneus), 5 metatarsals, and 14 phalanges.",
          ],
        ],
        media: {
          label: "Diagram: Appendicular skeleton (Girdles & Limbs)",
          src: "/images/images (14).jpeg",
          type: "image",
        },
      },
      {
        h: "Cartilage, Joints, Tendons, and Ligaments",
        text: "Supporting connective tissues work alongside bones to allow smooth articulation, shock absorption, and force transmission.",
        items: [
          [
            "Tendons",
            "Tough, inelastic bands of fibrous connective tissue that attach skeletal muscles to bones and transmit pulling forces (e.g., Achilles tendon).",
          ],
          [
            "Ligaments",
            "Strong, slightly elastic fibrous bands that connect bone to bone across joints, guiding movement and preventing dislocation.",
          ],
          [
            "Cartilage & Joints",
            "Avascular cartilage cushions bone ends against friction, while synovial, cartilaginous, and fibrous joints determine the range of motion.",
          ],
        ],
        media: {
          label: "Diagram: Joint structure, tendons & ligaments",
          src: "/images/4B-206-Bones-1232W.jpg",
          type: "image",
        },
      },
      {
        h: "Video: Overview of the Human Skeleton",
        text: "Explore the 3D organization of the axial and appendicular bones.",
        media: {
          label: "Skeletal system overview",
          src: "https://www.youtube.com/embed/ywDOiNEdJVc?si=hYWlYIoP9dK1R-s4",
          type: "youtube",
        },
      },
    ],
    pretest: [
      { q: "Which bone group protects the brain?", options: ["Ribs", "Cranium", "Pelvis", "Vertebrae"], answer: 1, why: "The cranial bones enclose the brain." },
      { q: "What connects muscle to bone?", options: ["Ligament", "Cartilage", "Tendon", "Nerve"], answer: 2, why: "Tendons attach muscles to bones." },
      { q: "About how many bones does an adult have?", options: ["106", "206", "306", "406"], answer: 1, why: "The adult skeleton has 206 bones." },
    ],
    quiz: [
      { q: "How many bones are in the adult skeleton?", options: ["206", "180", "250", "300"], answer: 0, why: "80 axial + 126 appendicular = 206." },
      { q: "Which bone belongs to the axial skeleton?", options: ["Femur", "Scapula", "Sternum", "Humerus"], answer: 2, why: "The sternum is part of the thoracic cage." },
      { q: "How many cervical vertebrae are there?", options: ["5", "7", "12", "4"], answer: 1, why: "The neck has 7 cervical vertebrae." },
      { q: "Which tissue connects bone to bone?", options: ["Tendons", "Muscles", "Ligaments", "Skin"], answer: 2, why: "Ligaments join bones at joints." },
      { q: "The pectoral girdle consists of:", options: ["Ilium and ischium", "Clavicle and scapula", "Ribs and sternum", "Femur and tibia"], answer: 1, why: "Clavicle plus scapula on each side." },
    ],
  },
  {
    id: 3,
    icon: "Sprout",
    title: "Plant Movement",
    tagline: "Plants move too: by growth, by water and by touch.",
    objectives: [
      "Describe touch and sleep movements.",
      "Compare types of tropism and name the stimulus of each.",
      "Explain pulling movements in tendrils and bulbs and streaming in Elodea.",
    ],
    sections: [
      {
        h: "Touch and sleep movements (Turgor-driven)",
        text: "Rapid, reversible nastic movements triggered by sudden changes in water pressure within specialized motor organs called pulvini at the base of leaflets.",
        items: [
          [
            "Touch movement (Mimosa pudica)",
            "Mechanical touch triggers ion efflux and rapid water loss from lower pulvinus cells, causing leaflets to fold and petioles to droop within seconds. Turgor recovers once the stimulus stops.",
          ],
          [
            "Sleep movements (Nyctinasty)",
            "Legumes such as clover and Mimosa fold their leaflets together at dusk (darkness) and spread them open at dawn (light) due to rhythmic shifts in pulvinus turgor.",
          ],
        ],
        media: {
          label: "Diagram: Touch and sleep movement in Mimosa",
          src: "/images/Gemini_Generated_Image_8oo1a28oo1a28oo1.jpeg",
          type: "image",
        },
      },
      {
        h: "Tropism (Directional growth)",
        text: "Slow, irreversible directional curvature of a plant organ toward (positive) or away from (negative) an external stimulus. It occurs due to unequal distribution of the plant hormone auxin (IAA), causing uneven cell elongation on opposite sides.",
        items: [
          [
            "Phototropism",
            "Auxin migrates to the shaded side of a stem, stimulating faster cell elongation there so the shoot bends toward light (positively phototropic).",
          ],
          [
            "Geotropism (Gravitropism)",
            "Gravity causes auxin to accumulate on the lower side; high auxin stimulates elongation in shoots (growing upward, negative) but inhibits elongation in roots (growing downward, positive).",
          ],
          [
            "Hydrotropism",
            "Roots curve and grow toward regions of higher soil moisture (positive hydrotropism) to maximize water absorption.",
          ],
          [
            "Thigmotropism",
            "Directional coiling in response to physical contact, seen when climbing tendrils touch a solid support.",
          ],
        ],
        media: {
          label: "Diagram: Auxin distribution and types of tropism",
          src: "/images/plant-movement-in-response-to-light-isolated-illustration-vector.jpg",
          type: "image",
        },
      },
      {
        h: "Pulling movements",
        text: "Specialized growth movements that anchor climbing stems or position underground storage organs at an optimal soil depth.",
        items: [
          [
            "Climbing tendrils",
            "When a tendril touches a support, cells on the outer side grow faster than the inner side, coiling the tendril tightly. The free region then twists into a spring-like spiral that pulls the stem upright toward the support; it later lignifies for permanent strength.",
          ],
          [
            "Contractile roots in bulbs & corms",
            "Specialized roots grow downward and then shorten vertically, pulling the bulb or corm deeper into the soil to protect it from heat, frost, and herbivores.",
          ],
        ],
        media: {
          label: "Diagram: Tendril coiling and contractile roots in bulbs",
          src: "/images/462457_1_En_29_Fig10_HTML.jpg",
          type: "image",
        },
      },
      {
        h: "Cytoplasmic streaming in Elodea",
        text: "Continuous circular flow (cyclosis) of the cytoplasm around the large central vacuole inside living plant cells. Driven by actin filaments and myosin motor proteins, it distributes nutrients, enzymes, and organelles—easily observed under a light microscope by tracking moving green chloroplasts in Elodea leaves.",
        media: {
          label: "Diagram: Cytoplasmic streaming in Elodea leaf cells",
          src: "/images/Geotropism.jpg",
          type: "image",
        },
      },
      {
        h: "Video: Cytoplasmic Streaming Under the Microscope",
        text: "Observe chloroplasts moving along the cytoplasmic stream in living Elodea cells.",
        media: {
          label: "Cytoplasmic streaming in Elodea",
          src: "https://www.youtube.com/embed/4D8tg3sY8MA?si=2tXpr83M6Up60Nf4",
          type: "youtube",
        },
      },
    ],
    pretest: [
      { q: "A shoot bends towards a window. This is:", options: ["Geotropism", "Phototropism", "Hydrotropism", "Chemotropism"], answer: 1, why: "Growth towards light is phototropism." },
      { q: "Which organelle makes leaves green?", options: ["Nucleus", "Mitochondrion", "Chloroplast", "Vacuole"], answer: 2, why: "Chloroplasts contain chlorophyll." },
      { q: "Do plants show movement?", options: ["Never", "Only seeds", "Yes, in many ways", "Only trees"], answer: 2, why: "Plants move by growth and by changes in turgor." },
    ],
    quiz: [
      { q: "Mimosa leaflets fold after touch because of:", options: ["Loss of turgor in pulvinus cells", "Cell division", "Photosynthesis", "Lignin"], answer: 0, why: "Water leaves pulvinus cells, so they collapse." },
      { q: "Roots growing downward show:", options: ["Negative phototropism", "Positive geotropism", "Hydrotropism only", "Nastic movement"], answer: 1, why: "Roots respond to gravity by growing down." },
      { q: "Which hormone mainly controls phototropism?", options: ["Insulin", "Auxin", "Adrenaline", "Acetylcholine"], answer: 1, why: "Auxin builds up on the shaded side." },
      { q: "Tendrils coil around supports in response to:", options: ["Light", "Gravity", "Contact", "Water"], answer: 2, why: "Contact stimulus (thigmotropism)." },
      { q: "In Elodea, what is carried by streaming cytoplasm?", options: ["Chloroplasts", "Ribs", "Hormones only", "Cell walls"], answer: 0, why: "Moving chloroplasts make the flow visible." },
    ],
  },
  {
    id: 4,
    icon: "Activity",
    title: "Human Movement & Muscle Contraction",
    tagline: "From nerve impulse to sliding filaments.",
    objectives: [
      "Label the structure of a sarcomere.",
      "Explain the roles of acetylcholine, calcium and ATP.",
      "Describe the sliding filament theory and the cause of muscle fatigue.",
    ],
    sections: [
      {
        h: "Sarcomere structure",
        text: "A skeletal muscle consists of bundles of multinucleated muscle fibres packed with myofibrils. Each myofibril is divided into repeating contractile units called sarcomeres, bounded by two dark Z lines.",
        items: [
          [
            "Thin filaments (Actin)",
            "Anchored to the Z lines; composed of actin protein intertwined with regulatory proteins troponin and tropomyosin that block myosin-binding sites at rest.",
          ],
          [
            "Thick filaments (Myosin)",
            "Located in the centre of the sarcomere; feature globular myosin heads with ATP-binding and actin-binding sites that form cross-bridges.",
          ],
          [
            "Bands and Zones",
            "Dark A band (entire length of thick myosin filaments), Light I band (thin actin filaments only), H zone (central region of A band with myosin only), and M line (bisects the H zone).",
          ],
        ],
        media: {
          label: "Diagram: Sarcomere bands, actin & myosin filaments",
          src: "/images/Gemini_Generated_Image_89hd1g89hd1g89hd.jpeg",
          type: "image",
        },
      },
      {
        h: "Nerve impulse and acetylcholine",
        text: "Excitation-contraction coupling begins when a nerve impulse arrives at the motor neuron axon terminal (neuromuscular junction). Voltage-gated calcium channels open, triggering synaptic vesicles to release acetylcholine (ACh) into the synaptic cleft. ACh binds to receptors on the muscle membrane (sarcolemma), opening Na⁺ channels and generating a muscle action potential. This wave travels down T-tubules to the sarcoplasmic reticulum, releasing stored Ca²⁺ ions into the sarcoplasm. Ca²⁺ binds to troponin, shifting tropomyosin away and exposing the active binding sites on actin.",
        media: {
          label: "Diagram: Neuromuscular junction & Calcium release",
          src: "/images/images (15).jpeg",
          type: "image",
        },
      },
      {
        h: "Sliding filament theory (Huxley)",
        text: "Proposed by Hugh Huxley, this theory explains that muscles shorten not because protein filaments shrink, but because thin actin filaments slide inward over thick myosin filaments toward the M line.",
        items: [
          [
            "Cross-bridge cycle & Power stroke",
            "Energized myosin heads bind exposed actin sites to form cross-bridges and pivot inward, pulling Z lines closer together (narrowing the I band and H zone while the A band stays constant).",
          ],
          [
            "Role of ATP",
            "Fresh ATP binds to myosin heads to detach them from actin; ATP hydrolysis then re-energizes (cocks) the myosin head for the next cycle. When stimulation stops, Ca²⁺ is actively pumped back into the sarcoplasmic reticulum using ATP.",
          ],
        ],
        media: {
          label: "Diagram: Sliding filament cross-bridge cycle",
          src: "/images/images (16).jpeg",
          type: "image",
        },
      },
      {
        h: "Muscle fatigue and spasm",
        text: "During intense or prolonged exercise, oxygen delivery cannot keep pace with energy demand. Muscle fibres switch from aerobic respiration to anaerobic glycolysis, yielding only 2 ATP per glucose and accumulating lactic acid. Low ATP and high acidity impair cross-bridge cycling and enzyme activity, causing muscle fatigue. In extreme ATP depletion, myosin heads fail to detach from actin, resulting in painful muscle spasms. Rest restores oxygen supply to oxidize accumulated lactic acid.",
        media: {
          label: "Diagram: Aerobic vs. Anaerobic respiration & muscle fatigue",
          src: "/images/infographic-of-the-composition-of-muscle-fiber-and-the-movement-of-contraction-and-relaxation-of-muscles-quarkxpress-qxp-6259x4015-2NEBNAW.jpg",
          type: "image",
        },
      },
      {
        h: "Video: Sliding Filament Mechanism",
        text: "Watch the step-by-step molecular animation of calcium release, cross-bridge cycling, and sarcomere shortening.",
        media: {
          label: "Sliding filament contraction",
          src: "https://www.youtube.com/embed/VVL-8zr2hk4?si=DDECBeIOzMSgjhSr",
          type: "youtube",
        },
      },
    ],
    pretest: [
      { q: "Which muscle type moves the skeleton?", options: ["Cardiac", "Smooth", "Skeletal", "None"], answer: 2, why: "Skeletal muscle attaches to bones." },
      { q: "Which molecule is the cell's energy currency?", options: ["DNA", "ATP", "Cellulose", "Lignin"], answer: 1, why: "ATP supplies energy for contraction." },
      { q: "Which proteins form muscle filaments?", options: ["Actin and myosin", "Keratin and collagen", "Insulin and glucagon", "Amylase and lipase"], answer: 0, why: "Actin (thin) and myosin (thick)." },
    ],
    quiz: [
      { q: "The functional unit of muscle contraction is the:", options: ["Neuron", "Sarcomere", "Ligament", "Osteocyte"], answer: 1, why: "The sarcomere lies between two Z lines." },
      { q: "Which neurotransmitter acts at the neuromuscular junction?", options: ["Dopamine", "Serotonin", "Acetylcholine", "Auxin"], answer: 2, why: "Acetylcholine triggers the muscle action potential." },
      { q: "During contraction, which distance gets shorter?", options: ["Length of actin", "Length of myosin", "Distance between Z lines", "Length of the bone"], answer: 2, why: "Filaments slide; the sarcomere shortens." },
      { q: "What does ATP do in the cross-bridge cycle?", options: ["Detaches the myosin head and re-energises it", "Makes actin longer", "Stores calcium", "Digests lactic acid"], answer: 0, why: "ATP is needed for detachment and re-cocking." },
      { q: "Muscle fatigue is linked to a build-up of:", options: ["Glucose", "Lactic acid", "Oxygen", "Acetylcholine"], answer: 1, why: "Anaerobic respiration produces lactic acid." },
    ],
  },
];