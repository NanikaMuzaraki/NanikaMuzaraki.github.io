const MILESTONES = [
  {
    id: 1,
    name: "Abacus",
    year: "3000 BCE",
    brief: "The abacus was a mechanical tool for performing arithmetic calculations, first developed in Babylon. It replaced manual counting with stones or fingers, making arithmetic faster and more systematic.",
    impact: "The abacus improved performance in early commerce and trade by enabling quicker and more accurate calculations than manual methods. It introduced a systematic way to represent numbers, supporting more complex operations such as multiplication and division. Although primitive, it was the first step toward externalizing computation and demonstrated the potential of devices to augment human calculation.",
    era: "early",
    image: "abacus.jpg"
  },
  {
    id: 2,
    name: "Pascaline",
    year: 1642,
    brief: "Blaise Pascal invented the Pascaline, a mechanical adding machine that could perform addition and subtraction. It replaced manual arithmetic done with pen and paper.",
    impact: "The Pascaline improved accuracy and speed in repetitive calculations, reducing human error in accounting and finance. Although limited in capability, it was one of the first practical steps toward automation in computing. By mechanizing arithmetic, it showed that machines could reliably handle routine mathematical operations and set the stage for more advanced calculators.",
    era: "early",
    image: "pascaline.jpg"
  },
  {
    id: 3,
    name: "Jacquard Loom",
    year: 1801,
    brief: "Joseph Marie Jacquard invented the Jacquard Loom, which used punch cards to control weaving patterns. This replaced manual reconfiguration of looms by operators.",
    impact: "The Jacquard Loom demonstrated programmability by using punch cards to automate instructions, reducing labor and increasing production consistency. This concept of using encoded inputs to guide machine behavior influenced later developments in computing. It bridged textile manufacturing and information processing, showing how machines could follow stored instructions.",
    era: "early",
    image: "jacquard.jpg"
  },
  {
    id: 4,
    name: "Analytical Engine",
    year: 1830,
    brief: "Charles Babbage conceptualized the Analytical Engine, a mechanical general-purpose computer. It replaced limited calculators by proposing conditional branching, loops, and memory.",
    impact: "The Analytical Engine was revolutionary because it outlined a framework resembling modern computers, complete with an arithmetic unit, memory, and programmable control via punch cards. Though never fully built, it proved that machines could be designed to handle any calculation, not just fixed operations. Ada Lovelace’s programming insights highlighted the potential for automation beyond arithmetic, laying the theoretical foundation for computing performance as we know it.",
    era: "early",
    image: "analytical.jpg"
  },
  {
    id: 5,
    name: "Alan Turing - Universal Machine",
    year: 1937,
    brief: "Alan Turing described the Universal Machine, a theoretical device capable of performing any computation given the right instructions. This replaced ad hoc problem-specific machines.",
    impact: "The Universal Machine concept formalized the idea of software and programmable computation. It showed that a single general-purpose machine could simulate any other, revolutionizing how performance was viewed in computing. This abstraction laid the groundwork for stored-program computers, allowing flexible adaptation instead of building new hardware for each task. Its influence persists in all modern digital computers.",
    era: "early",
    image: "turing.jpg"
  },
  {
    id: 6,
    name: "Harvard Mark I",
    year: 1944,
    brief: "The Harvard Mark I was a large electromechanical computer used during World War II for ballistic and scientific calculations. It replaced slow hand calculations and mechanical desk calculators.",
    impact: "The Mark I automated large-scale mathematical tasks, drastically reducing the time required for military and scientific computations. It marked the transition from purely mechanical devices to electromechanical systems, increasing reliability and speed. Though limited compared to electronic successors, it demonstrated the practicality of large computing machines for real-world applications.",
    era: "modern",
    image: "mark1.jpg"
  },
  {
    id: 7,
    name: "ENIAC",
    year: 1945,
    brief: "ENIAC was the first large-scale electronic digital computer, developed for military calculations. It replaced electromechanical calculators like the Harvard Mark I.",
    impact: "ENIAC performed calculations thousands of times faster than mechanical machines, completing complex tasks in minutes instead of weeks. Its electronic design introduced unprecedented speed, although reprogramming it required manual rewiring. Despite this limitation, it proved the viability of fully electronic computing, setting a performance benchmark for future machines.",
    era: "modern",
    image: "eniac.jpg"
  },
  {
    id: 8,
    name: "UNIVAC",
    year: 1946,
    brief: "The UNIVAC I was the first commercial computer, developed by the creators of ENIAC. It replaced specialized military computers by entering business and government use.",
    impact: "UNIVAC brought computing into mainstream organizations, improving data processing, census management, and commercial applications. It demonstrated that computers could handle diverse workloads beyond scientific and military use. This broadened accessibility accelerated adoption, showing how computing could enhance productivity in various industries.",
    era: "modern",
    image: "univac.jpg"
  },
  {
    id: 9,
    name: "Transistor",
    year: 1947,
    brief: "The transistor, developed at Bell Labs, replaced bulky and fragile vacuum tubes in electronic circuits. It was smaller, more efficient, and more reliable.",
    impact: "Transistors drastically reduced power consumption and heat, allowing for compact and portable electronics. They improved reliability and increased operational speed compared to vacuum tubes. This leap enabled the creation of smaller computers and laid the foundation for integrated circuits, which further transformed computing performance.",
    era: "modern",
    image: "transistor.jpg"
  },
  {
    id: 10,
    name: "Integrated Circuit",
    year: 1958,
    brief: "The integrated circuit (microchip) combined multiple transistors onto a single chip. It replaced circuits assembled with discrete transistors.",
    impact: "ICs dramatically improved performance by reducing signal delay, cost, and physical size while increasing reliability. They enabled exponential growth in computing power, supporting Moore’s Law. This innovation allowed complex computers to be mass-produced, opening the path to personal computing and advanced digital systems.",
    era: "modern",
    image: "ic.jpg"
  },
  {
    id: 11,
    name: "IBM System/360",
    year: 1964,
    brief: "The IBM System/360 was a family of compatible computers that could run the same software across different models. It replaced the fragmented ecosystem of incompatible systems.",
    impact: "The System/360 standardized computing architecture, allowing organizations to scale performance without rewriting applications. This improved efficiency, reduced costs, and introduced the concept of forward compatibility. Its design philosophy influenced future generations of computers and became a model for balancing flexibility with performance.",
    era: "modern",
    image: "system360.png"
  },
  {
    id: 12,
    name: "Intel 4004 Microprocessor",
    year: 1971,
    brief: "The Intel 4004 was the first microprocessor, integrating CPU functions onto a single chip. It replaced earlier multi-chip or board-level processor designs.",
    impact: "The 4004 made computers smaller, cheaper, and more accessible, ushering in the microcomputer era. Performance gains came from reducing complexity and increasing speed within a compact package. This integration was a pivotal step in making computing personal and portable, enabling innovation across industries.",
    era: "modern",
    image: "intel4004.jpg"
  },
  {
    id: 13,
    name: "First Email",
    year: 1971,
    brief: "The first email was sent over ARPANET, demonstrating digital communication between computers. It replaced slower traditional mail for networked users.",
    impact: "Email revolutionized information exchange by making communication nearly instantaneous across vast distances. It reduced the cost and time of correspondence compared to postal systems. This milestone was the foundation of modern digital communication, transforming productivity and collaboration worldwide.",
    era: "internet",
    image: "email.jpg"
  },
  {
    id: 14,
    name: "Apple II",
    year: 1977,
    brief: "Apple released the Apple II, one of the first successful personal computers. It replaced large, expensive systems by offering computing for homes and schools.",
    impact: "The Apple II popularized computing outside of corporate and scientific environments, making it accessible to individuals. Its user-friendly design encouraged software development, expanding computing applications. This democratization of technology accelerated innovation and nurtured the personal computing industry.",
    era: "modern",
    image: "apple2.jpg"
  },
  {
    id: 15,
    name: "IBM PC",
    year: 1981,
    brief: "IBM introduced the IBM PC, which quickly became the global standard for personal computing. It replaced fragmented personal computer platforms with a unified model.",
    impact: "The IBM PC standardized hardware and software, creating a consistent platform for developers and businesses. This drove rapid adoption and compatibility, enhancing productivity and collaboration. The PC’s dominance cemented the architecture still recognizable in modern computers.",
    era: "modern",
    image: "ibmpc.jpg"
  },
  {
    id: 16,
    name: "Apple Lisa",
    year: 1983,
    brief: "Apple launched the Lisa, the first personal computer with a graphical user interface (GUI). It replaced text-only command interfaces for everyday users.",
    impact: "The Lisa’s GUI transformed usability by making computers more intuitive, allowing non-technical people to interact with digital systems. Although commercially unsuccessful, it influenced the Macintosh and later operating systems. Its impact on performance was less about speed and more about accessibility, enabling broader adoption.",
    era: "modern",
    image: "lisa.jpg"
  },
  {
    id: 17,
    name: "World Wide Web",
    year: 1990,
    brief: "Tim Berners-Lee introduced the World Wide Web, a system of linked documents accessible via browsers. It replaced limited text-based networking systems like Gopher.",
    impact: "The Web exponentially expanded access to information, commerce, and communication. It transformed computing from isolated tasks to a global, interconnected system. Its impact on performance was in leveraging existing infrastructure to create unprecedented scalability and reach, enabling the internet economy.",
    era: "internet",
    image: "www.jpg"
  },
  {
    id: 18,
    name: "Google",
    year: 1998,
    brief: "Google, founded by Larry Page and Sergey Brin, introduced a powerful search engine. It replaced inefficient and cluttered early search tools.",
    impact: "Google’s algorithms improved performance in information retrieval, making searches faster, more accurate, and more relevant. It set the standard for organizing the web’s growing content. By enabling users to find information efficiently, it boosted the productivity and utility of the internet as a whole.",
    era: "internet",
    image: "google.jpg"
  },
  {
    id: 19,
    name: "iPhone",
    year: 2007,
    brief: "Apple launched the iPhone, combining phone, internet, and computing functions into one device. It replaced separate gadgets like cell phones, PDAs, and MP3 players.",
    impact: "The iPhone redefined mobile computing by delivering powerful processing in a handheld form. It expanded computing performance through touch interfaces, app ecosystems, and internet integration. Its portability and versatility made computing ubiquitous, influencing nearly every industry and daily life.",
    era: "modern",
    image: "iphone.jpg"
  },
  {
    id: 20,
    name: "AI & Cloud Computing",
    year: "2010s",
    brief: "The rise of artificial intelligence and cloud computing transformed data processing and storage. These technologies replaced reliance on local hardware with scalable, distributed systems.",
    impact: "Cloud computing improved performance by providing on-demand access to vast computational power and storage, while AI systems delivered advanced analytics and automation. Together, they enabled breakthroughs in fields like healthcare, finance, and communication. Their scalability and adaptability continue to redefine what computing can achieve globally.",
    era: "internet",
    image: "ai.png"
  }
];

const container = document.getElementById('timeline');
const searchInput = document.getElementById('search');
const filterEra = document.getElementById('filter-era');

function renderList(list) {
  container.innerHTML = '';
  list.forEach(m => {
    const col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-lg-4 d-flex';
    col.innerHTML = `
      <div class="card card-milestone shadow-sm h-100 w-100" data-id="${m.id}" tabindex="0">
        <div class="card-body d-flex flex-column">
          <div class="d-flex justify-content-between align-items-start">
            <h5 class="card-title">${m.name}</h5>
            <div class="milestone-year">${m.year}</div>
          </div>
          <p class="card-text">${m.brief}</p>
          <div class="mt-auto d-flex justify-content-between align-items-center">
            <small class="text-muted">Era: ${m.era}</small>
            <button class="btn btn-sm btn-outline-primary" data-action="view" data-id="${m.id}">View</button>
          </div>
        </div>
      </div>
    `;
    container.appendChild(col);
  });
}

function openModal(m) {
  document.getElementById('modal-title').textContent = m.name;
  document.getElementById('modal-year').textContent = `Year: ${m.year}`;
  document.getElementById('modal-impact').textContent = m.impact;

  document.getElementById('modal-desc').innerHTML = `
    <img src="${m.image}" class="img-fluid mb-3" alt="${m.name}">
    <p>${m.brief}</p>
  `;

  const modal = new bootstrap.Modal(document.getElementById('detailModal'));
  modal.show();
}

container.addEventListener('click', e => {
  const btn = e.target.closest('[data-action="view"]');
  if (btn) {
    const id = Number(btn.dataset.id);
    const m = MILESTONES.find(x => x.id === id);
    if (m) openModal(m);
  }
});

searchInput.addEventListener('input', () => applyFilters());
filterEra.addEventListener('change', () => applyFilters());

function applyFilters() {
  const q = searchInput.value.trim().toLowerCase();
  const era = filterEra.value;
  let filtered = MILESTONES.filter(m => {
    const matchQ =
      q === '' ||
      m.name.toLowerCase().includes(q) ||
      String(m.year).toLowerCase().includes(q) ||
      m.brief.toLowerCase().includes(q);
    const matchEra = era === 'all' || m.era === era;
    return matchQ && matchEra;
  });
  renderList(filtered);
}

renderList();
