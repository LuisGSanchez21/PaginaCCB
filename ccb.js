const articles = [
  {
    "id": 1,
    "image": "elements/electricar.jpg",
    "title": "The Rise of Electric Vehicles in 2024",
    "description":
      "Electric vehicles are transforming the automotive industry. This article looks at the latest trends, innovations, and market shifts in the world of EVs.",
    "date": "2024-10-23T14:54:36Z",
    "category": "Innovation",
  },
  {
    id: 2,
    image: "elements/robot.jpg",
    title: "How AI is Shaping the Future of Healthcare",
    description:
      "Artificial Intelligence is revolutionizing healthcare by improving diagnostics, treatment options, and patient care. Discover how AI is being used to save lives.",
    date: "2024-10-23T14:54:36Z",
    category: "Healthcare",
  },
  {
    id: 3,
    image: "elements/monkey-spin.gif",
    title: "Exploring the Wonders of the Amazon Rainforest",
    description:
      "A journey into the heart of the Amazon, exploring the incredible biodiversity and unique ecosystems that make it one of the most important regions on Earth.",
    date: "2024-10-23T14:54:36Z",
    category: "Environment",
  },
  {
    id: 4,
    image: "elements/travel.jpg",
    title: "Top 10 Destinations for Solo Travelers",
    description:
      "Looking for your next solo adventure? Here are the top 10 destinations around the world perfect for solo travelers, offering safety, culture, and adventure.",
    date: "2024-10-23T14:54:36Z",
    category: "Travel",
  },
  {
    id: 5,
    image: "elements/aliencito.gif",
    title: "The Fascinating World of Bioluminescent Organisms",
    description:
      "Discover the enchanting beauty of bioluminescent organisms, from glowing jellyfish to fireflies, and learn how they produce light in the darkness of the ocean.",
    date: "2024-10-23T14:54:36Z",
    category: "Science",
  },
  {
    id: 6,
    image: "elements/stuip.gif",
    title: "The Quirky History of Unusual Pets",
    description:
      "From hedgehogs to tarantulas, dive into the quirky world of unusual pets and discover the fascinating stories behind their popularity.",
    date: "2024-10-23T14:54:36Z",
    category: "Lifestyle",
  },
  {
    id: 7,
    image: "elements/economy-update.jpg",
    title: "Global Economic Update: Markets Surge Amid Recovery Hopes",
    description:
      "Stock markets worldwide are experiencing unprecedented growth as investors remain optimistic about global economic recovery.",
    date: "2024-10-11T14:54:36Z",
    category: "Economy",
  },
  {
    id: 8,
    image: "elements/climate-summit.jpg",
    title: "International Climate Summit 2024: Key Takeaways",
    description:
      "The latest climate summit brought leaders together to discuss policies and actions to combat climate change. Here are the highlights and commitments made.",
    date: "2024-10-09T09:20:15Z",
    category: "Environment",
  },
  {
    id: 9,
    image: "elements/tech-regulation.jpg",
    title: "Tech Giants Face New Regulations in Europe",
    description:
      "European regulators are introducing new policies aimed at increasing data privacy and limiting monopolistic practices by large tech firms.",
    date: "2024-10-05T17:30:12Z",
    category: "Technology",
  },
  {
    id: 10,
    image: "elements/healthcare-vaccine.jpg",
    title: "Healthcare Advancements: New Vaccine Approved",
    description:
      "A new vaccine has been approved, marking a significant step in the fight against seasonal illnesses. Find out what this means for public health.",
    date: "2024-10-07T11:54:03Z",
    category: "Healthcare",
  },
  {
    id: 11,
    image: "elements/renewable-energy.jpg",
    title: "Renewable Energy Initiatives See Record Investment",
    description:
      "Investors are increasingly turning to renewable energy projects, setting new records for funding and bringing innovation to the energy sector.",
    date: "2024-10-02T08:12:00Z",
    category: "Energy",
  },
  {
    id: 12,
    image: "elements/mars-mission.jpg",
    title: "Space Agency Announces Mars Mission Plans",
    description:
      "Excitement builds as a new Mars mission is announced, with a projected launch in 2026. Explore the mission’s objectives and technology advancements.",
    date: "2024-09-30T15:40:29Z",
    category: "Space",
  },
  {
    id: 13,
    image: "elements/champions-league.jpg",
    title: "Champions League: Stunning Comeback Leads to Final Victory",
    description:
      "A dramatic comeback in the final minutes of the match has led one team to claim the Champions League title in an unforgettable showdown.",
    date: "2024-10-10T21:15:36Z",
    category: "Sports",
  },
  {
    id: 14,
    image: "elements/olympic-games.jpg",
    title: "Olympic Games 2024: New Records and Triumphs",
    description:
      "The 2024 Olympics have seen new world records in track and field events, with athletes from around the world showcasing peak performance and resilience.",
    date: "2024-10-09T14:00:15Z",
    category: "Sports",
  },
  {
    id: 15,
    image: "elements/world-cup.jpg",
    title: "World Cup Qualifiers: Teams Secure Their Spots",
    description:
      "National teams have battled it out in the World Cup qualifiers, with several now securing spots in the upcoming tournament.",
    date: "2024-10-08T17:45:12Z",
    category: "Sports",
  },
  {
    id: 16,
    image: "elements/tennis-grand-slam.jpg",
    title: "Tennis Grand Slam: Rising Star Claims First Title",
    description:
      "A young tennis star has captured their first Grand Slam title, impressing audiences worldwide with skill and determination on the court.",
    date: "2024-10-07T18:30:03Z",
    category: "Sports",
  },
  {
    id: 17,
    image: "elements/formula-1.jpg",
    title: "Formula 1: A Thrilling Finish to the Latest Grand Prix",
    description:
      "The latest Formula 1 Grand Prix concluded with a nail-biting finish, as drivers battled through the final laps to determine the winner.",
    date: "2024-10-05T16:25:00Z",
    category: "Sports",
  },
  {
    id: 18,
    image: "elements/marathon.jpg",
    title: "Marathon Breaks Records in Major City Event",
    description:
      "A new marathon record was set as thousands of runners hit the streets, pushing their limits and setting personal bests in a major city event.",
    date: "2024-10-03T09:40:29Z",
    category: "Sports",
  },
  {
    id: 19,
    image: "elements/green-investing.jpg",
    title: "Green Investing: A Growing Trend in 2024",
    description:
      "As climate concerns grow, investors are pouring funds into sustainable companies. Discover how green investing is shaping global markets and influencing the future of finance.",
    date: "2024-10-23T14:54:36Z",
    category: "Finance",
  },
  {
    id: 20,
    image: "elements/remote-work.jpg",
    title: "The Rise of Remote Work Technology Firms",
    description:
      "As remote work becomes the norm, tech companies specializing in collaboration tools are thriving. Learn about the top firms revolutionizing work-from-home dynamics.",
    date: "2024-10-12T09:32:12Z",
    category: "Technology",
  },
  {
    id: 21,
    image: "elements/blockchain.jpg",
    title: "Blockchain’s Impact on Global Supply Chains",
    description:
      "Blockchain technology is enhancing transparency and efficiency in global supply chains. This article delves into how it’s transforming logistics and commerce.",
    date: "2024-10-09T15:18:45Z",
    category: "Technology",
  },
  {
    id: 22,
    image: "elements/startup-funding.jpg",
    title: "Startup Funding Trends: What to Expect in 2025",
    description:
      "As economic shifts continue, startup funding patterns are changing. Explore what’s next for venture capital and private equity in 2025 and beyond.",
    date: "2024-09-29T20:10:24Z",
    category: "Business",
  },
  {
    id: 23,
    image: "elements/ai-finance.jpg",
    title: "The Influence of AI on Financial Markets",
    description:
      "Artificial intelligence is revolutionizing financial markets, from trading algorithms to investment analytics. Learn how AI is reshaping the future of finance.",
    date: "2024-10-10T11:45:30Z",
    category: "Technology",
  },
  {
    id: 24,
    image: "elements/ecommerce.jpg",
    title: "The Global Expansion of E-commerce in Emerging Markets",
    description:
      "E-commerce is experiencing unprecedented growth in emerging markets. Discover the key factors driving this expansion and the major players involved.",
    date: "2024-10-04T13:27:48Z",
    category: "Business",
  },
  {
    id: 25,
    image: "elements/renewable-energy.jpg",
    title: "The Future of Renewable Energy: Innovations to Watch",
    description:
      "From solar advancements to new battery technologies, renewable energy is evolving quickly. Here’s a look at the innovations set to change our world.",
    date: "2024-10-23T14:54:36Z",
    category: "Technology",
  },
  {
    id: 26,
    image: "elements/ai-healthcare.jpg",
    title: "AI and Robotics in Healthcare: What’s Next?",
    description:
      "Robotics and AI are transforming healthcare, making treatments faster and more personalized. Explore the latest breakthroughs in this field.",
    date: "2024-10-17T10:32:15Z",
    category: "Health",
  },
  {
    id: 27,
    image: "elements/quantum-computing.jpg",
    title: "Quantum Computing: The Race to the Future",
    description:
      "Quantum computing promises to solve complex problems beyond today’s technology. Learn about the companies and nations leading the charge.",
    date: "2024-10-15T16:45:12Z",
    category: "Technology",
  },
  {
    id: 28,
    image: "elements/agriculture-biotech.jpg",
    title: "Biotechnology in Agriculture: Feeding the Future",
    description:
      "With the world’s population growing, biotechnology is providing sustainable solutions in agriculture. Discover the innovations on the horizon.",
    date: "2024-09-28T08:54:03Z",
    category: "Agriculture",
  },
  {
    id: 29,
    image: "elements/vr-workplace.jpg",
    title: "The Role of VR in Future Workplaces",
    description:
      "As remote work grows, VR is offering immersive solutions to keep teams connected. Here’s how VR could transform work culture in the coming years.",
    date: "2024-10-10T12:12:00Z",
    category: "Technology",
  },
  {
    id: 30,
    image: "elements/space-travel.jpg",
    title: "Space Travel for Everyone: New Advances in 2024",
    description:
      "Space tourism is becoming a reality with advancements in technology. Explore what the future holds for civilian space travel and exploration.",
    date: "2024-10-04T14:40:29Z",
    category: "Space",
  },
  {
    id: 31,
    image: "elements/ancient-art.jpg",
    title: "Reviving Ancient Art Forms in Modern Times",
    description:
      "Explore how artists today are drawing inspiration from ancient techniques to create works that bridge the past and present.",
    date: "2024-10-23T14:54:36Z",
    category: "Art",
  },
  {
    id: 32,
    image: "elements/vinyl.jpg",
    title: "The Resurgence of Vinyl in Digital Age",
    description:
      "Vinyl records are making a comeback as collectors and young music fans alike celebrate analog sound. Discover the reasons behind its resurgence.",
    date: "2024-10-12T09:32:12Z",
    category: "Music",
  },
  {
    id: 33,
    image: "elements/street-art.jpg",
    title: "Street Art Festivals Around the World",
    description:
      "Street art has evolved into a respected global movement. Take a look at some of the most iconic festivals celebrating this form of cultural expression.",
    date: "2024-10-09T15:18:45Z",
    category: "Art",
  },
  {
    id: 34,
    image: "elements/cinema.jpg",
    title: "The Power of Storytelling in Modern Cinema",
    description:
      "As cinema evolves, the art of storytelling remains central. This article examines how filmmakers are pushing the boundaries of narrative structure.",
    date: "2024-09-29T20:10:24Z",
    category: "Cinema",
  },
  {
    id: 35,
    image: "elements/indigenous.jpg",
    title: "Preserving Indigenous Languages Through Art",
    description:
      "Indigenous communities are using art to revitalize and preserve languages at risk of extinction. Discover the artists leading this cultural movement.",
    date: "2024-10-10T11:45:30Z",
    category: "Culture",
  },
  {
    id: 36,
    image: "elements/music-memory.jpg",
    title: "Music and Memory: How Songs Shape Our Lives",
    description:
      "Music has a unique power to evoke memories and emotions. This article explores how songs become deeply tied to our personal experiences and identities.",
    date: "2024-10-04T13:27:48Z",
    category: "Music",
  },
  {
    id: 37,
    image: "elements/renaissance.jpg",
    title: "The Renaissance Resurgence in Modern Art",
    description:
      "Artists today are drawing inspiration from Renaissance techniques, bringing classical artistry to contemporary forms. Learn how this movement is influencing the modern art scene.",
    date: "2024-10-23T14:54:36Z",
    category: "Art",
  },
  {
    id: 38,
    image: "elements/street-art.jpg",
    title: "Street Art’s Impact on Urban Identity",
    description:
      "From graffiti to large murals, street art is transforming cities worldwide, giving communities a voice and identity through powerful visual narratives.",
    date: "2024-10-12T09:32:12Z",
    category: "Art",
  },
  {
    id: 39,
    image: "elements/art-therapy.jpg",
    title: "Exploring Art Therapy’s Benefits for Mental Health",
    description:
      "Art therapy is gaining recognition for its therapeutic effects, helping people express emotions and improve mental well-being through creative expression.",
    date: "2024-10-09T15:18:45Z",
    category: "Health",
  },
  {
    id: 40,
    image: "elements/nft-art.jpg",
    title: "NFTs: Revolutionizing Art Ownership and Sales",
    description:
      "Non-fungible tokens (NFTs) are changing how artists sell and own art. This article explores how blockchain technology is creating new opportunities in the art world.",
    date: "2024-09-29T20:10:24Z",
    category: "Technology",
  },
  {
    id: 41,
    image: "elements/ai-digital-art.jpg",
    title: "The Role of AI in Digital Art Creation",
    description:
      "Artificial intelligence is now being used by artists to create digital art, blending creativity with technology. Find out how AI is shaping the future of digital art.",
    date: "2024-10-10T11:45:30Z",
    category: "Technology",
  },
  {
    id: 42,
    image: "elements/photography.jpg",
    title: "The Evolution of Photography as Fine Art",
    description:
      "Photography has grown from a medium of documentation to an established fine art form. This piece explores its journey and place in today’s art world.",
    date: "2024-10-04T13:27:48Z",
    category: "Art",
  },
  {
    id: 43,
    image: "elements/winter-destinations.jpg",
    title: "Top Winter Destinations for 2024 Revealed",
    description:
      "From cozy mountain retreats to tropical escapes, discover the best winter travel destinations for 2024 that cater to every type of traveler.",
    date: "2024-10-23T14:54:36Z",
    category: "Travel",
  },
  {
    id: 44,
    image: "elements/wellness-retreats.jpg",
    title: "Wellness Retreats: Rejuvenate Your Mind and Body",
    description:
      "Explore the growing trend of wellness retreats, offering holistic experiences that blend relaxation, mindfulness, and personal growth in beautiful locations.",
    date: "2024-10-12T09:32:12Z",
    category: "Health",
  },
  {
    id: 45,
    image: "elements/fashion-week.jpg",
    title: "Highlights from Fashion Week: Trends to Watch",
    description:
      "Fashion Week showcases the latest trends and innovations in the fashion industry. Here’s a roundup of the most exciting highlights from this year’s events.",
    date: "2024-10-09T15:18:45Z",
    category: "Fashion",
  },
  {
    id: 46,
    image: "elements/urban-farming.jpg",
    title: "Urban Farming: The Future of Sustainable Food",
    description:
      "Urban farming is gaining traction as a sustainable solution to food production in cities. Discover how this movement is transforming urban landscapes.",
    date: "2024-09-28T08:54:03Z",
    category: "Agriculture",
  },
];

class RelativeTime extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    setInterval(() => this.render(), 1000); // Update every second
  }

  render() {
    const timeValue = this.getAttribute("time");
    const time = timeValue ? new Date(timeValue).getTime() : Date.now();
    const now = Date.now();

    const diff = now - time;
    const seconds = Math.floor(diff / 1000) || 1;
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    let aux = "...";
    if (months >= 12) {
      aux = `Hace ${years} año${years > 1 ? "s" : ""}`;
    } else if (days > 30 && months >= 1) {
      aux = `Hace ${months} mes${months > 1 ? "es" : ""}`;
    } else if (days >= 1) {
      aux = `Hace ${days} día${days > 1 ? "s" : ""}`;
    } else if (hours >= 1) {
      aux = `Hace ${hours} hora${hours > 1 ? "s" : ""}`;
    } else if (minutes >= 1) {
      aux = `Hace ${minutes} minuto${minutes > 1 ? "s" : ""}`;
    } else if (seconds >= 1) {
      aux = `Hace ${seconds} segundo${seconds > 1 ? "s" : ""}`;
    }

    this.textContent = aux;
  }
}
customElements.define("relative-time", RelativeTime);

class CustomSearch extends HTMLElement {
  constructor() {
    super();
    this.articles = articles;
  }

  connectedCallback() {
    console.log("entraenfuncion")
    const dialogBtn = this.querySelector('.dialog-search');
    const closeBtn = this.querySelector('.close-btn');
    const dialog = this.querySelector('dialog');

    dialogBtn.addEventListener('click', () => {
      dialog.showModal();
      console.log("desplazar")
    });
    closeBtn.addEventListener('click', () => {
      dialog.close();
      console.log("quitar")
    });
    const siteSearch = this.querySelector('#site-search');
    siteSearch.addEventListener('input', (event) => this.search(event));

    this.renderResults('')
  }

  search(event) {
    event.preventDefault();
    const siteSearch = this.querySelector('#site-search');
    const term = siteSearch.value
    // console.log({term});
    this.renderResults(term)
  }

  renderResults(term = '') {
    // Implement your search logic here
    const searchResults = this.querySelector('#search-results');
    searchResults.innerHTML = '';
    const _articles = this.articles
      .filter(article => article.title.toLowerCase().includes(term.toLowerCase()))

    // mode 3 using <template>
    const template = this.querySelector('template').content;
    // loop
    _articles.map(article => {
      const li = template.querySelector('li').cloneNode(true);
      // item-image, item-title, item-description
      li.querySelector('.card .item-image').src = article.image;
      li.querySelector('.card .item-description').textContent = article.description;
      // replate relative-time time
      li.querySelector('relative-time').setAttribute('time', article.date)
      li.querySelector('.card .item-title a').textContent = article.title;

      const enlace = li.querySelector('.card .item-title a')
      const href = enlace.href
      enlace.href = href.replace('{id}', article.id)

      searchResults.appendChild(li);
    })
  }
}
customElements.define("custom-search", CustomSearch);

const getId = () => {
  const searchParams = new URLSearchParams(location.search.slice(1));
  return Number(searchParams.get("id"));
};

class CustomArticle extends HTMLElement {
  constructor() {
    super();
    this.articleId = getId();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const article = articles.find((article) => article.id === this.articleId);
    if (article) {
      const h1 = this.querySelector("h1");
      h1.textContent = article.title;

      const img = this.querySelector("img");
      img.src = article.image;

      const p = this.querySelector("p"); // Corrected line
      p.textContent = article.description;

      const relativetime = this.querySelector("relative-time");
      relativetime.setAttribute("time", article.date);
    } else {
      console.log("Article not found");
    }
  }
}
customElements.define("custom-article", CustomArticle);

function showHideSidebar() {
  const sideBar = document.getElementById("menu-sidebar");
  sideBar.classList.toggle("hidden");
}

console.log("JavaScript loaded");
